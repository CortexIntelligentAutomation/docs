---
title: "Install Cortex Gateway on the Web Application Server"
linkTitle: "Install Cortex Gateway"
description: >
    Information on installing Cortex Gateway.
---

## Install Prerequisites

### Install SQL Server or SQL Express

1. Use one of the following installation guides to install SQL Server or SQL Server Express:
    * SQL Server 2019 Installation Guide for Cortex
    * SQL Server 2016 Installation Guide for Cortex
    * SQL Server 2016 Express Installation Guide for Cortex

### Install Microsoft Web Deploy

Microsoft Web Deploy
Version: 3.0 or later
URL: https://www.microsoft.com/en-gb/download/details.aspx?id=43717
{{% alert title="Note" %}} To check if Web Deploy is already installed, open Control Panel → Programs → Programs and Features; if Web Deploy is already installed, it will be listed as Microsoft Web Deploy.{{% /alert %}}

A ‘Typical’ installation of Web Deploy is sufficient to enable the full installation of Cortex Gateway.

### Install Visual C++ Redistributable

Visual C++ Redistributable (vcredist_x64.exe)
Version: Visual Studio 2013 (x64)
URL: http://www.microsoft.com/en-us/download/details.aspx?id=40784
{{% alert title="Note" %}}To check if Visual C++ Redistributable is already installed, open Control Panel → Programs → Programs and Features; if Visual C++ Redistributable is already installed, it will be listed as Microsoft Visual C++ 2013 Redistributable (x64).{{% /alert %}}

### Install Certificate

We recommend that you source a signed certificate from your security team. The certificate must have the following properties:

* Purpose: ALL
* Subject Alternative Names (SAN): At minimum the FQDN of the Server. It can also include NetBIOS Name, IP address, localhost, 127.0.0.1

If the user tries to navigate to an address not in the SAN list, then they will receive a certificate error.

Cortex can also work with wildcard certificates and with self-signed certificates. However, self-signed certificates are not recommended for production instances. Details on how to create a self-signed certificate can be found in TODO 14.4 Appendix 4 - Create a self-signed certificate.

You can import the certificate by right clicking the certificate file, selecting Install Certificate and following the wizard. When prompted, ensure you import it into the Local Machine store and not Current User.
To verify the certificate is imported:

1. Click Start
2. Run `certlm.msc`
3. Expand `Personal` and select Certificates
4. You should see your certificate in this store

### IIS role setup and configuration

#### Install Internet Information Services (IIS)

Installed the required features by following these instructions:

1. On the Web Application Server open Windows Powershell ISE with local administrator rights.
1. Load the script from the installation media called TODO CortexWindowsFeatures.ps1.
1. Run the script.
1. Check the output is as follows:

    ```powershell
    Web-WebSockets is installed
    Web-Asp-Net45 is installed
    Web-Net-Ext45 is installed
    Web-ISAPI-Ext is installed
    Web-ISAPI-Filter is installed
    Net-Framework-45-Core is installed
    Net-Framework-45-ASPNET is installed
    Web-Default-Doc is installed
    Web-Dir-Browsing is installed
    Web-Http-Errors is installed
    Web-Static-Content is installed
    Web-Http-Logging is installed
    Web-Request-Monitor is installed
    Web-Stat-Compression is installed
    Web-Dyn-Compression is installed
    Web-Filtering is installed
    Web-Windows-Auth is installed
    Web-Mgmt-Console is installed
    Web-Mgmt-Service is installed
    ```

Alternatively, perform the steps below (Beware the steps might differ depending on operating system and Windows updates):

1. Navigate to Start > Administrative Tools > Server Manager.
2. From the Manage menu, select `Add Roles and Features`.
3. In the Add Roles and Features Wizard, ensure that the Installation Type is set to Role-based or feature-based installation, then click on the `Next >` button.
4. Select the server on which the IIS role is to be setup, then click on the `Next >` button.
5. From the Server Roles list, tick the Role called Web Server (IIS) and click the `Add Features` button in the pop-up dialog; then click on the `Next >` button.
6. From the Features list, ensure that `.NET Framework 4.5` and `ASP.NET 4.5` features are ticked, then click on the `Next >` button.
7. Click `Next >` again to move from the Web Server Role (IIS) introduction to the Roles Services selection page.
8. Select the following role services to install for Web Server (IIS):
    * Under Common HTTP Features, tick:
        * Default Document
        * Directory Browsing
        * HTTP Errors
        * Static Content
        * HTTP Redirection
    * Under Health and Diagnostics, tick:
        * HTTP Logging
        * Request Monitor
    * Under Performance, tick:
        * Static Content Compression
        * Dynamic Content Compression
    * Under Security, tick:
        * Request Filtering
        * Windows Authentication
    * Under Application Development, tick:
        * .NET Extensibility 4.6
        * ASP.NET 4.6
        * ISAPI Extensions
        * ISAPI Filters
        * WebSocket Protocol (required by Cortex Gateway.
    * Under Management Tools, tick:
        * IIS Management Console
9. Click the Next > button, check that all the required role services are listed in the text box, and then click on the Install button.
10. Once the installer confirms that the installation succeeded, click the Close button.

#### Register and Allow .NET CLR v4.0.30319 with IIS

{{% alert title="Note" %}}Unless .NET CLR v4.0.30319 is registered and allowed with IIS, the Cortex web sites and web services will not work.{{% /alert %}}

1. From the desktop, click Start then type cmd.
2. Right click on the Command Prompt program then select `Run as administrator`.
3. Enter the following:

    ```powershell
    Dism /online /enable-feature /featurename:IIS-ASPNET45 /all
    ```

4. Once the command prompt confirms that it has finished installing .NET CLR v4.0.30319, close the command prompt program

### Install URL Rewrite Module

The following steps describe how to configure an application on your server to allow URLs to be rewritten.

1. An `IIS Manager` module is required to apply rewrite rules:
    1. In the left-hand pane of Internet Information Service (IIS) Manager, select the server node.
    1. Ensure that there is an icon with the title `URL Rewrite` under the `IIS` feature section:
    {{< figure class="centre" src="/images/Url Rewrite Icon.png" title="Url Rewrite Module Icon" >}}
2. If there is an icon, `URL Rewrite` module is installed and no further steps are required.
3. If there is no icon, the module is not installed and must be installed using the module `Web Platform Installer`.
For offline installations without internet access see Step 4.
    1. In `IIS Manager` ensure that there is an icon with the title `Web Platform Installer` under the `Management` feature section:
    {{< figure class="centre" src="/images/Web Platform Installer Icon.png" title="Web Platform Installer Icon" >}}
    1. If there is an icon proceed to step 4.
    1. If there is no icon, the module is not installed.
        1. Download and install this module using the latest version located at <https://docs.microsoft.com/en-us/iis/install/web-platform-installer/web-platform-installer-direct-downloads>.
        1. Once the `Web Platform Installer` module is installed, close and reopen `IIS Manager`.
4. In `IIS Manager` select your server then double click the `Web Platform Installer` icon under the `Management` feature section.
5. In the open application, use the search bar to search for `URL Rewrite` to find and install.
6. After successfully installing, close and reopen `IIS Manager`

### Apply Recommended security measures

These are non-compulsory security measures, recommended to be applied to all servers hosting Cortex, in order to prevent potential attacks that exploit known industry security vulnerabilities.

Applying these measures may impact other applications running on your server. Therefore, it is your responsibility to ensure that other applications and their clients will not be affected by the changes.

#### Only use recommended encryption algorithms and TLS protocols

A collection of registry settings need to be applied to guarantee your server is only using the recommended encryption algorithms and TLS protocols. These settings will apply the changes listed below:

| Type                  |   Name                               |   Enabled   |
| --------------------- | ------------------------------------ | ----------- |
| Ciphers               | AES 128/128                          | ✓           |
|                       | AES 256/256                          | ✓           |
|                       | Triple DES 168                       | ✓           |
|                       | DES 56/56                            | ✕           |
|                       | NULL                                 | ✕           |
|                       | RC2 128/128                          | ✕           |
|                       | RC2 40/128                           | ✕           |
|                       | RC2 56/128                           | ✕           |
|                       | RC4 128/128                          | ✕           |
|                       | RC4 40/128                           | ✕           |
|                       | RC4 56/128                           | ✕           |
|                       | RC4 64/128                           | ✕           |
|                       |                                      |             |
| Hashes                | MD5                                  | ✕           |
|                       | SHA                                  | ✓           |
|                       | SHA256                               | ✓           |
|                       | SHA384                               | ✓           |
|                       | SHA512                               | ✓           |
|                       |                                      |             |
| KeyExchangeAlgorithms | Diffie-Hellman                       | ✓           |
|                       | ECDH                                 | ✓           |
|                       | PKCS                                 | ✓           |
|                       |                                      |             |
| Protocols             | Multi-Protocol Unified Hello\\Client | ✕           |
|                       | Multi-Protocol Unified Hello\\Server | ✕           |
|                       | PCT 1.0\\Client                      | ✕           |
|                       | PCT 1.0\\Server                      | ✕           |
|                       | SSL 2.0\\Client                      | ✕           |
|                       | SSL 2.0\\Server                      | ✕           |
|                       | SSL 3.0\\Client                      | ✕           |
|                       | SSL 3.0\\Server                      | ✕           |
|                       | TLS 1.0\\Client                      | ✕           |
|                       | TLS 1.1\\Client\ [^1]                 | ✕           |
|                       | TLS 1.1\\Server\ [^1]                 | ✕           |
|                       | TLS 1.2\\Client                      | ✓           |
|                       | TLS 1.2\\Server                      | ✓           |

[^1]: Only disabled on Windows Server 2016. Earlier versions will still have them enabled.

{{% alert type="warning" title="Warning" %}}Successfully disabling TLS 1.0 and TLS 1.1 on all operating systems will have an impact on some Cortex Services. The list of affected services and the impact on them can be found in TODO Appendix 9 - Cortex SSL Support.{{% /alert %}}

Apply these security measures by following these instructions:

1. On the Web Application Server open Windows Powershell ISE with local administrator rights.
2. Load the script from the installation media called TODO CortexSSLBestPractices.ps1
3. Run the script.
4. To use all the recommended settings click `Apply all` to the first prompt.

    To selectively apply each setting select `Choose which to apply`. Each change will then be prompted with a Yes/No confirmation before applying.
5. Restart the machine when the script asks.

### Add Firewall Rule

If a firewall is running on the Web Application Server, it must be configured to allow communication inbound via TCP on the port configured for HTTPS (usually 443).
TODO: Appendix 12 gives instructions for adding to windows firewall - include these?


### Get Application Pool User

A user account (either 'local' or 'domain' user) is required for the CortexGateway web application pool and must be created prior to performing the IIS setup steps
below; this user account is also required to enable Cortex Gateway to access the Cortex database, with the following roles:

1. dbcreator
2. public

In line with best practices, this account should not be given administrator rights, nor should it be used for any purposes other than those specified for Cortex Gateway. TODO: |If used for debugger user as well it does currently need administrator rights.

This user must be given `Log on as a service` and `Log on as a batch job` permissions. TODO: tell them how to do this?

## Create Application Pool

1. Open Internet Information Services (IIS) Manager from Start > Administrative Tools 
2. Select and right click Application Pools node under the server and select `Add Application Pool…`
3. Set Name to `Cortex Gateway`.
4. Ensure that the .NET CLR version is set to .NET CLR Version v4.0.30319 (This may be configured by default).
5. Ensure that the Managed pipeline mode is set to Integrated (This may be configured by default).
6. Click `OK`
7. Right click on the created application pool and select `Advanced Settings…`
8. Change the Identity (under Process Model) to a `Custom Account` and set to the user identified in Prerequisites. TODO link
9. Click `OK`
10. Click `OK`
11. Click `OK`

## Create Web Site

Cortex Gateway can either be installed to an existing web site or can create a new web site.
If you are installing into an existing web site skip to section 9.2.4 Configure web site. TODO link

The steps to create a new web site are:

1. In Windows File Explorer, navigate to the location `C:\inetpub\wwwroot`.
2. Ensure there is a folder called `Cortex`; if not create it.
3. In the left-hand pane of Internet Information Service (IIS) Manager, expand the server node.
4. Right-click the `Sites` node under the server and select `Add Website…`.
5. Set the Site name to `Cortex`.
6. Set the Physical path: directory to `C:\inetpub\wwwroot\Cortex` by clicking on the ellipses `…`, selecting the appropriate directory and clicking `OK`.
7. Click `OK`. If an existing site is already using the specified port, a warning will be displayed. Either click `No` and change the Port in the Add Website dialog, or click `Yes` and stop the other website.

## Configure Web Site

The web site which the Cortex Gateway application is installed on requires additional configurations.

### Configure Web Site Bindings

Cortex Gateway can be configured to use HTTPS or HTTP. TODO: Do we still want to support both?

#### Configure Web Site to use HTTPS

The steps to configure Cortex Gateway to use HTTPS are:

1. Ensure an appropriate SSL certificate is installed on the server hosting Gateway. For SSL certificate requirements, including details of how to generate 
and import the certificate, please see section 3.4 SSL Requirements. TODO link
{{% alert title="Note" %}}For sites using self-signed SSL certificates, the HTTPS URL redirection will only work in Google Chrome browsers. For all other supported browsers, an SSL certificate signed by a Certificate Authority must be used to enable HTTPS URL redirection.{{% /alert %}}
2. In the left-hand pane of Internet Information Service (IIS) Manager, expand the server node.
3. Expand the `Sites` node under the server.
4. Right-click the web site where Gateway will be installed and select `Edit Bindings…`.
    {{< figure class="centre" src="/images/IIS Bindings.png" title="Bindings Dialog" >}}
5. Click `Add…`
6. Set Type to `https`.
7. Set the appropriate Port number (typically 443).
8. Select the SSL certificate to use.
9. Click OK. If an existing site is already using the specified SSL port, a warning will be displayed. Either click `No` and change the Port in the Add Site Binding dialog, or click `Yes` and stop the other website.
10. Optionally it is recommended to remove the http site binding.
11. Continue to section 9.2.5 Create new web application. TODO link

#### Configure Web Site to use HTTP

{{% alert title="Note" %}}HTTP is not recommended to be used other than for testing purposes.{{% /alert %}}

1. In the left-hand pane of Internet Information Service (IIS) Manager, expand the server node.
2. Expand the `Sites` node under the server.
3. Right-click the web site where Gateway should be installed and select `Edit Bindings…`
    {{< figure class="centre" src="/images/IIS Bindings.png" title="Bindings Dialog" >}}
4. Select `http` and click `Edit…`
5. Set the appropriate Port number (the default should be set to Port 80; however, it may be set to any free port number).
6. Click `OK`.

### Create New Web Application

1. In the left-hand pane of Internet Information Service (IIS) Manager, expand the server node.
2. Right-click on the site the application should be installed under and select `Add Application…`
3. Set the Alias to `gateway`. This should be lowercase.
4. Click `Select…` and from the Application pool dropdown select the `Cortex Gateway` application pool and click `OK`.
5. Set the Physical path: directory to `C:\inetpub\wwwroot\Cortex\Gateway` by clicking on the ellipses `…` and selecting the appropriate directory. Create the `C:\inetpub\wwwroot\Cortex\Gateway` directory if it does not already exist.

### Configure IIS Site Redirect to the Specified Web Application (Optional)

If the site hosting the gateway web application is a newly created Cortex site or an existing site that doesn’t have its own content, it is recommended to redirect the site URL to the `gateway` web application URL, e.g. `https://FullyQualifiedDomainName` to `https://FullyQualifiedDomainName/gateway`.

1. Open Internet Information Services (IIS) Manager from Start > Administrative Tools.
2. Select the site hosting the `gateway` web application and from IIS settings double click the `HTTP Redirect` icon.
3. Click the check box `Redirect requests to this destination`.
4. Enter `https://FullyQualifiedDomainName/gateway`, replacing `FullyQualifiedDomainName` with the FQDN of the server.
5. In the `Redirect Behaviour` section, Click `Only redirect requests to content in this directory (not subdirectories)`.
6. In `Actions` click the `Apply` button.

## Install Cortex Gateway

### Extract Installation Artefacts

1. Copy the following artefact (the version number may differ) to the Web Application Server:
    * Cortex Evolution - Innovation 2022.5 - Gateway.zip
1. Extract the `Cortex Evolution - Innovation 2022.5 - Gateway.zip` file to a folder with the same name.

### Configure Installation Parameters

1. In the `Cortex Evolution - Innovation 2022.5 - Gateway.zip` folder, locate the `CortexGateway.SetParameters.xml` file and open it with a text editor.
1. Edit the file, changing the parameters according to the details given below:

    TODO: What do we want to do here? Should I just include the basics and put advanced config in another file? Should that include LiveView settings and stuff that i've currently omitted?

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <parameters>
        <setParameter name="IIS Web Application Name" value="Cortex/gateway" />
        <setParameter name="Web Version Information" value="3.0.0" />
        <setParameter name="Reporting Service Endpoint Address" value="http://machineName:ReportManagerPort/ReportServer/ReportService2010.asmx" />
        <setParameter name="Reporting Server URL"value="http://machineName:ReportManagerPort/Reportserver" />
        <setParameter name="Reporting Service User Name" value="Domain\Cortex_SQL_Admin" />
        <setParameter name="Reporting Service Password" value="password" /> 
        <setParameter name="Allow Multiple Connections Per OCI Type" value="&lt;value&gt;false&lt;/value&gt;" />
        <setParameter name="Show Groups only in Licence Usage" value="&lt;value&gt;false&lt;/value&gt;" />
        <setParameter name="Flow Interface Username" value="&lt;value&gt;CortexFlow&lt;/value&gt;" />
        <setParameter name="Flow Interface Password" value="&lt;value&gt;C0rt3xFl0w&lt;/value&gt;" />
        <setParameter name="Show Token" value="&lt;value&gt;false&lt;/value&gt;" />
        <setParameter name="Break On Exception" value="&lt;value&gt;true&lt;/value&gt;" />
        <setParameter name="ShowVariablesPalette" value="&lt;value&gt;false&lt;/value&gt;" />
        <setParameter name="Feature Flags" value="&lt;value&gt;InnovationId&lt;/value&gt;" />
        <setParameter name="Service Fabric Api Gateway Endpoint" value="&lt;value&gt;https://ha-server1.domain.com:8722/&lt;/value&gt;" />
        <setParameter name="Service Fabric Using Self Signed Certificates" value="&lt;value&gt;False&lt;/value&gt;" />
        <setParameter name="Service Fabric Self Signed Certificate Subject" value="&lt;value&gt;CN=CortexServerCertificate&lt;/value&gt;" />
        <setParameter name="Service Fabric ApiGateway Basic Auth Username" value="&lt;value&gt;BasicAuthUser&lt;/value&gt;" />
        <setParameter name="Service Fabric ApiGateway Basic Auth Password" value="&lt;value&gt;ADA9883B11BD4CDC908B8131B57944A4&lt;/value&gt;" />
        <setParameter name="Dot NET flow debugger Endpoint" value="&lt;value&gt;https://app-server.domain.com/debugger/api/&lt;/value&gt;" />
        <setParameter name="HSTS Enabled" value="true" />
        <setParameter name="Garbage collection schedule" value="&lt;value&gt;0 0 1 ? * SUN&lt;/value&gt;" />
        <setParameter name="Garbage collection arguments" value="&lt;value&gt;--auto&lt;/value&gt;" />
        <setParameter name="Garbage collection lock timeout" value="&lt;value&gt;02:00:00&lt;/value&gt;" />
        <setParameter name="ModelDBContext-Web.config Connection String" value="Data Source=.\SQLEXPRESS;Initial Catalog=CortexWeb;Integrated Security=True;MultipleActiveResultSets=True" />
        <setParameter name="AuthContext-Web.config Connection String" value="Data Source=.\SQLEXPRESS;Initial Catalog=CortexWeb.Auth;Integrated Security=True;MultipleActiveResultSets=True" />
        <setParameter name="SignalRContext-Web.config Connection String" value="Data Source=.\SQLEXPRESS;Initial 
        Catalog=CortexWeb.SignalR;Integrated Security=True;MultipleActiveResultSets=True" />
        <setParameter name="ReactorEntities-Web.config Connection String" value="metadata=res://*/Models.ReactorEnities.csdl|res://*/Models.ReactorEnities.ssdl|res://*/Models.ReactorEnities.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=.\SQLEXPRESS;initial catalog=Reactor;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" />
        <setParameter name="CortexDWEntities-Web.config Connection String" value="metadata=res://*/Models.CortexDataWarehouseEntities.csdl|res://*/Models.CortexDataWarehouseEntities.ssdl|res://*/Models.CortexDataWarehouseEntities.msl;provider=System.Data.SqlClient;provider connection 
        string=&quot;data source=.\SQLEXPRESS;initial catalog=CortexDW;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" />
        <setParameter name="CortexRepositories-Web.config Connection String" value="c:\\CortexWeb\\Repo\" />
    </parameters>
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`IIS Web Application Name`                      | Change to the `Site Name/Application` if it was modified from the defaults in section TODO link |
    |`Feature Flags`                                 | Configure as above, replacing "InnovationId" with the Cortex Innovation feature identifier. This should be retrieved from Cortex. |
    |`Service Fabric Api Gateway Endpoint`           | Configure as above, replacing "ha-server1.domain.com" with the fully qualified domain name of one of the HA nodes. The port should be 8722. |
    |`Service Fabric Using Self Signed Certificates` | Configure the value as "False" if you are using valid CA certificates, "True" if using self-signed certificates |
    |`Service Fabric Self Signed Certificate Subject`| This should not be changed. |
    |`Service Fabric ApiGateway Basic Auth Username` | This only needs to be changed if you provided a non-default `ApiGatewayBasicAuthUserName` when installing the Cortex HA Infrastructure and Services; if so, this value should be configured to the one provided. |
    |`Service Fabric ApiGateway Basic Auth Password` | This only needs to be changed if you provided a non-default ApiGatewayBasicAuthPassword when installing the Cortex HA Infrastructure and Services; if so, this value should be configured to the one provided. It can be Cortex Encrypted.|
    |`Dot NET flow debugger Endpoint`                | Configure as above, replacing `app-server.domain.com` with the fully qualified domain name of the server that the Cortex Flow Debugger Service will be installed on (usually the same one as Gateway). |
    |`HSTS Enabled`                                  | Change to `false` if you have configured Gateway to use HTTP, or you have configured it to use HTTPS but require the HSTS header to be disabled. |
    |`ModelDBContext-Web.config Connection String`   | Change the `data source` to point to the instance for the SQL database e.g. localhost. If the database is hosted on a different server, use the syntax machineName\instanceName. |
    |`AuthContext-Web.config Connection String`      | Change the `data source` to point to the instance for the SQL database e.g. localhost. If the database is hosted on a different server, use the syntax machineName\instanceName. |
    |`SignalRContext-Web.config Connection String`   | Change the `data source` to point to the instance for the SQL database e.g. localhost. If the database is hosted on a different server, use the syntax machineName\instanceName. |
    |`ReactorEntities-Web.config Connection String`  | Change the `data source` to point to the instance for the SQL database e.g. localhost. If the database is hosted on a different server, use the syntax machineName\instanceName. |
    |`CortexDWEntities-Web.config Connection String` | Change the `data source` to point to the instance for the SQL database e.g. localhost. If the database is hosted on a different server, use the syntax machineName\instanceName. |
    |`CortexRepositories-Web.config Connection String` | Change this to the location where the Flow repositories are to be stored. The default location is `c:\CortexWeb\Repo`. |

    * Ignore the `Configuring prerequisites for capability discovery` section - this is not yet supported in Cortex Innovation.
    * Ignore the `Configuring Connectivity to Cortex Server` section - this is only necessary for Cortex Integrity.
    * Ignore the `Testing a clean system` section - this will be covered later in this guide.
    * Ignore the `Verify LiveView Dashboards on Cortex Gateway` section - this is not supported in Cortex Innovation.

### Test Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Evolution - Innovation 2022.5 - Gateway` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Evolution - Innovation 2022.5 - Gateway"
    ```

1. Test that everything is configured correctly by running the following command:

    ```powershell
    CortexGateway.deploy.cmd /T
    ```

    In the event of an error, there will be an error message displayed at the end of the output with a line confirming the Error Count. TODO: what should they do?

### Run Installation Script

1. Ensure the Cortex application pool is stopped:
    1. Open Internet Information Service (IIS) Manager.
    1. In the left pane, expand the server node.
    1. Left-Click Application Pools to display a list of the Application Pools.
    1. Right-Click the Cortex application pool and select Stop.

    {{% alert title="Note" %}}Failure to stop the Cortex application pool will result in a permissions error when installing Cortex Gateway.{{% /alert %}}

1. In the Windows PowerShell (x64) window, run the following command to install Gateway:

    ```powershell
    CortexGateway.deploy.cmd /Y
    ```

    In the event of an error, there will be an error message displayed at the end of the output with a line confirming the Error Count.

1. TODO INCLUDE THIS? Once the installation has completed, if SQL Server Reporting Services has been installed using SSL, then open the Web.config file and amend it as follows:
    1. Open the Web.config file in notepad located in `C:\inetpub\wwwroot\Cortex\Gateway`
    1. Locate the section `<binding name="ReportingService2010Soap">`
    1. Change the `<security mode="TransportCredentialOnly">` to `<security mode="Transport">`
    1. Save and close the file.
1. Start the Cortex application pool:
    1. Open Internet Information Service (IIS) Manager.
    1. In the left pane, expand the server node.
    1. Left-Click Application Pools to display a list of the Application Pools.
    1. Right-Click the Cortex application pool and select Start.
1. Once the application pool has been started, the site will be available on `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.
    {{% alert title="Note" %}} If the Application Pool does not stay started, ensure that the user it runs as has `Log on as a service` and `Log on as a batch job` permissions or belongs to a group that has those permissions.{{% /alert %}}
    If an error message is displayed wait a few minutes and refresh the page as it is possible that the website was still starting.

## Information about HSTS TODO - its already configured above. Should this be somewhere else?
Cortex Gateway installations using HTTPS implement HTTP Strict Transport Security (HSTS). HSTS is a header attached to HTTPS responses that indicate to the browser that it should redirect any subsequent HTTP requests to an HTTPS host.

HSTS will redirect HTTP requests to the HTTPS host, providing that:

* The outbound rewrite rule “Add Strict-Transport-Security when HTTPS” is enabled
in web.config for this site. This can be done by:

  * Opening the C:\inetpub\wwwroot\Cortex\Gateway\web.config for the Gateway application.
  * Search for “Add Strict-Transport-Security when HTTPS”
  * Set it’s “enabled” value to true.

* The browser has received a response from the HTTPS host, and the time since that response has not expired the max-age value for the rule (this is defaulted to one year).
{{% alert title="Note" %}}For sites using self-signed SSL certificates, the HTTPS URL redirection will only work in Google Chrome browsers. For all other supported browsers, an SSL certificate signed by a Certificate Authority must be used to enable HTTPS URL redirection.{{% /alert %}}
{{% alert title="Note" %}}Configuring your system to use a port other than the HTTPS default of 443 is not compatible with HSTS. If your configuration requires HTTPS to run on a port other than 443, the HSTS configuration must be turned off. This can be achieved by configuring the “Add Strict-Transport-Security when HTTPS” rewrite rule “enabled” setting to false.{{% /alert %}}
{{% alert title="Note" %}}If your system has been configured to use a port other than the HTTPS default of 443, it is not compatible with HSTS. If your configuration requires HTTPS to run on a port other than 443, the HSTS configuration must be turned off. This can be achieved by configuring the “Add Strict-Transport-Security when HTTPS” rewrite rule “enabled” setting to false for Cortex Gateway.{{% /alert %}}

### Cortex Gateway Initial Setup

Log on to Cortex Gateway and run through the setup wizard

1. Navigate to `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.
2. Log on using the default credentials that the solution deploys with:
    Username: `administrator`
    Password: `Adm1n1strat0r`
3. On a newly installed system, you will be presented with a Setup Wizard at this point, see Figure 146, which will guide you through some basic configuration steps:
    * Account details
    * LDAP Connection
    * LDAP Authorization
4. Follow the steps in the setup wizard to configure the relevant areas – for more detail refer to "Section 2.1 Initial Configuration" in the Cortex Integrity - Studio Admin Guide which can be found on the Cortex Application server in the C:\Cortex\Help\PDF - TODO: Sort this out
    1. Click `Next Step`:
    {{< figure class="centre" src="/images/Gateway Setup1.png" title="Initial Setup Screen" >}}
    2. Enter an email address for the Administrator:
    {{< figure class="centre" src="/images/Gateway Setup2.png" title="Administrator Details Screen" >}}
    3. Change the Administrator password to a unique, secret password:
    {{< figure class="centre" src="/images/Gateway Setup3.png" title="Change Password Screen" >}}
    4. Enter the details of your LDAP server and provide a Username and Password for a user with read access to the LDAP server:
    {{< figure class="centre" src="/images/Gateway Setup4.png" title="LDAP Connection Scree" >}}
    5. Click `Next Step`. If this fails first time round, just click `Retry`.
    6. Assign Studio access permissions to LDAP users (or groups):
    {{< figure class="centre" src="/images/Gateway Setup5.png" title="LDAP Authorisation Screen" >}}

## Configure the Cortex Databases to use Transparent Data Encryption

Once Cortex Gateway has been configured, if you wish to encrypt the databases using TDE for improved security, this should now be performed.

Enabling TDE on the databases ensures that the data is encrypted on disk. The process to do this requires that you:

* Create a master key in the master database with a strong password. This password must be remembered and/or saved in a secure location to enable decryption of the database later.
* Create a certificate within SQL Server.
* Backup the certificate and store it in a secure location. If a database needed to be restored elsewhere for any reason the certificate will need to be imported to the new server.
* Create a database encryption key in each user database to be encrypted.
* Enable encryption on the database.

To enable TDE on the suite of Cortex Databases you should complete the following steps:

1. Open SQL Server Management Studio
2. Open the Encrypt Databases using TDE.sql script included within the Supporting Scripts bundle. TODO: Where will we provide this?
{{% alert title="Note" %}}This script will attempt to encrypt all Cortex Databases that exist on the system. Any that do not exist will be skipped. If you do not wish to encrypt all existing Cortex Databases then you should contact Cortex Support for assistance with script modification.{{% /alert %}}
3. Set the `@sPassword` parameter value to a password that you wish to use. {{% alert title="Note" %}} This password must be set to a value that is not a blank or empty string, it cannot be `null` and the script will not execute if it is not changed from the pre-populated value of `StrongPassword`. The password must also meet your system’s minimum security requirements.{{% /alert %}}
4. You can change the names of the certificate and the name of the master key by changing the `@sCertName` and `@sKeyName` parameters if you so wish.
5. You can change the location that the certificate and key are backed up to by changing the value of the `@sBackupLocation` parameter.

    The location must already exist, and there must not be any files within the specified location with the same name as the certificate or master key names that have been specified.

    The user that this script will be executed as must also have write permissions to this location.
6. Once the parameters have been set appropriately you should now save the script.

    We recommended that the modified script is saved out to file (taking care to observe your own organisation's security policies for password management), before it is executed. This may help facilitate the support process if anything goes wrong.
7. Click Execute to run the script. It may take several minutes to execute depending on the size of the databases.
8. Once the script has completed successfully, you should move the backed-up certificate and master key to a secure location and the password specified should also be stored securely.

## Relevant Appendices

There are two ways to generate self-signed certificates:
• Using OpenSSL
• Using IIS
Using OpenSSL
1. Install Win32OpenSSL
a. Navigate to https://slproweb.com/products/Win32OpenSSL.html
b. Download the v1.1.1m Light Win32 version of the software
c. Run the downloaded installer
2. Open an administrator command prompt
a. Make a directory in which to store the certificates:
mkdir C:\Certificates
b. Cd into the certificate directory:
cd C:\Certificates
c. Create the Root CA private key:
openssl genrsa -out cortexCA.key 4096
 Note: If “‘openssl’ is not recognised” is displayed in your command prompt you will 
need to add OpenSSL to the Path environment variable of your system e.g. SET 
PATH=%PATH%;C:\OpenSSL-Win32\bin
d. Generate the Root CA certificate signed with the private key:
Copy the text from Appendix 8 Certificate Authority Configuration into 
notepad and save as ca.cnf in the directory created for the certificates. Then 
run:
openssl req -sha256 -x509 -new -nodes -key cortexCA.key -days 
3650 -out cortexCA.pem -config ca.cnf
press enter for everything except the Common Name. For this enter “Cortex 
CA”
e. Package your public and private key in a pkcs12 encrypted file (to install with 
certmgr on windows):
openssl pkcs12 -export -inkey cortexCA.key -in cortexCA.pem -out 
cortexCA.pfx
Enter an Export Password when asked, this will be needed when adding the 
certificate to certmgr.
f. Double click on the cortexCA.pfx file to get the certificate imported to the 
Windows Certificate Store. Perform the following steps:
i. Select Local Machine then click Next
ii. Click Next
iii. Enter the Password which the certificate was generated with then 
click Next
iv. Select Place all certificates in the following store. 
v. Click Browse…
vi. Select Trusted Root Certification Authorities, click OK then click 
Next
vii. Click Finish
g. Create a private key for the SSL cert:
openssl genrsa -out cortex.key 2048
h. Generate the SSL certificate request
Copy the text from Appendix 8 - Subject Alternative Names Configuration
into notepad and save as san.cnf in the directory created for the 
certificates. 
You will need to modify the section [alt_names] to include all the required 
DNS names and IP addresses that clients can use to access the secured 
resource by.
Each DNS name or IP address entry must be suffixed with .N where N is the 
unique index of the DNS name or IP address entry; see below for examples:
Resource URL: Configuration to add:
https://cortex.co.uk/gateway DNS.1 = cortex.co.uk

https://internal.cortex.co.uk/gateway DNS.2 = internal.cortex.co.uk
https://10.0.0.0/gateway IP.1 = 10.0.0.0
https://192.168.1.100/gateway IP.2 = 192.168.1.100
Then run:
openssl req -new -sha256 -key cortex.key -out cortex.req -
extensions v3_req -config san.cnf
press enter for everything except the Common Name. For this enter 
“Cortex”
i. Sign the request with a previously generated Root CA
openssl x509 -req -sha256 -in cortex.req -CA cortexCA.pem -
CAkey cortexCA.key -CAcreateserial -out cortex.pem -days 3650
-extensions v3_req -extfile san.cnf
j. Package your public and private key in a pkcs12 encrypted file (to install with 
certmgr on windows)
openssl pkcs12 -export -inkey cortex.key -in cortex.pem -out 
cortex.pfx
k. Double click on the cortex.pfx file to get the certificate imported to the 
Windows Certificate Store. Perform the following steps:
i. Select Local Machine then click Next
ii. Click Next
iii. Enter the Password which the certificate was generated with then 
click Next
iv. Select Place all certificates in the following store. 
v. Click Browse…
vi. Select Personal, click OK then click Next
vii. Click Finish
Using IIS
To create a self-signed certificate using IIS, refer to the following Microsoft technical note: 
Create a Self-Signed Server Certificate in IIS
 Self-signed certificates created in IIS should only be used for Cortex Flow Interface 
Service and Cortex Gateway if they are both installed on the same machine. If this 
is not the case and self-signed certificates are needed, please create them using 
OpenSSL

## Appendix 7 - Certificate Authority Configuration
```
RANDFILE = .rnd
[ ca ]
default_ca = CA_default # The default ca section
[ CA_default ]
# Directory and file locations.
# SHA-1 is deprecated, so use SHA-2 instead.
default_md = sha256
policy = policy_strict
[ policy_strict ]
# The root CA should only sign intermediate certificates that match.
# See the POLICY FORMAT section of `man ca`.
countryName = match
stateOrProvinceName = match
organizationName = match
organizationalUnitName = optional
commonName = supplied
emailAddress = optional
[ req ]
# Options for the `req` tool (`man req`).
default_bits = 2048
distinguished_name = req_distinguished_name
string_mask = utf8only
# SHA-1 is deprecated, so use SHA-2 instead.
default_md = sha256
# Extension to add when the -x509 option is used.
x509_extensions = v3_ca
[ req_distinguished_name ]
countryName = Country Name (2 letter code)
countryName_min = 2
countryName_max = 2
stateOrProvinceName = State or Province Name (full name)
localityName = Locality Name (eg, city)
0.organizationName = Organization Name (eg, company)
organizationalUnitName = Organizational Unit Name (eg, section)
commonName = Common Name (eg, your website's domain name)
commonName_max = 64
emailAddress = Email Address
emailAddress_max = 40
# Optionally, specify some defaults.
countryName_default = GB
stateOrProvinceName_default = Hampshire
localityName_default = Southampton
0.organizationName_default = Cortex Ltd
organizationalUnitName_default = Cortex 
emailAddress_default = info@cortex.co.uk
[ v3_ca ]
# Extensions for a typical CA (`man x509v3_config`).
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid:always,issuer
basicConstraints = critical, CA:true
keyUsage = critical, digitalSignature, cRLSign, keyCertSign
```

## Subject Alternative Names Configuration
```
RANDFILE = .rnd
[ ca ]
default_ca = CA_default # The default ca section
[ CA_default ]
# SHA-1 is deprecated, so use SHA-2 instead.
default_md = sha256
policy = policy_loose
[ policy_loose ]
# Allow the intermediate CA to sign a more diverse range of certificates.
# See the POLICY FORMAT section of the `ca` man page.
countryName = optional
stateOrProvinceName = optional
localityName = optional
organizationName = optional
organizationalUnitName = optional
commonName = supplied
emailAddress = optional
[ req ]
# Options for the `req` tool (`man req`).
default_bits = 2048
distinguished_name = req_distinguished_name
string_mask = utf8only
# SHA-1 is deprecated, so use SHA-2 instead.
default_md = sha256
# Extension to add when the -x509 option is used.
x509_extensions = v3_req
req_extensions = v3_req
[ req_distinguished_name ]
countryName = Country Name (2 letter code)
countryName_min = 2
countryName_max = 2
stateOrProvinceName = State or Province Name (full name)
localityName = Locality Name (eg, city)
0.organizationName = Organization Name (eg, company)
organizationalUnitName = Organizational Unit Name (eg, section)
commonName = Common Name (eg, your website's domain name)
commonName_max = 64
emailAddress = Email Address
emailAddress_max = 40
# Optionally, specify some defaults.
countryName_default = GB
stateOrProvinceName_default = Hampshire
localityName_default = Southampton
0.organizationName_default = Cortex Ltd
organizationalUnitName_default = Cortex 
emailAddress_default = info@cortex.co.uk
[ v3_req ]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
subjectAltName = @alt_names
[ alt_names ]
# Specify all DNS and/or IP addresses that clients can use to access the secured resource.
DNS.1 = MACHINE-NAME 
DNS.2 = FULLY QUALIFIED MACHINE NAME
DNS.3 = localhost 
IP.1 = IP ADDRESS
IP.2 = 127.0.0.1
```

### Cortex SSL Support

To ensure that Cortex is correctly configured to support SSL, the following configuration steps must be followed:

1. Cortex Gateway setup must be configured according to:
    * 9.2.4.1.1 Configure web site to use HTTPS TODO: make right

#### General Impact of Disabling specific TLS versions and Cipher Suites

Disabling specific TLS versions or specific Cipher Suites can have impact on Cortex components themselves as well as their communication capabilities with third party systems and services. All parties communicating together must support a shared protocol version and cipher suite, otherwise they will not be able to establish a secure communication link between each other.

#### Impact of Disabling TLS 1.1
The following table describes the known impact to Cortex components when disabling TLS TLS 1.1 and using only the recommended strong Cipher Suites:
| Windows OS Version     | SQL Server Version     | Impacted Components        | Impact    |
| ---------------------- | ---------------------- | ---------------------------|-----------|
| All                    | All                    | Browsers:<br />- IE 11 / Win 7<br />- IE 11 / Win 8.1<br />- IE 11 / Win Phone 8.1<br />- IE 11 / Win Phone 8.1 Update<br /><br />Other clients:<br />- Android 2.3.7<br />- Android 4.0.4<br />- Android 4.1.1<br />- Android 4.2.2<br />- Android 4.3<br />- Baidu Jan 2015<br />- IE 6 / XP<br />- IE 7 / Vista<br />- IE 8 / XP<br />- IE 8-10 / Win 7<br />- Java 6u45<br />- Java 7u25<br />- OpenSSL 0.9.8y<br />- Safari 5.1.9 / OS X 10.6.8<br />- Safari 6 / iOS 6.0.1<br />- Safari 6.0.4 / OS X 10.8.4<br />- Safari 7 / iOS 7.1<br />- Safari 7 / OS X 10.9<br />- Safari 8 / iOS 8.4<br />- Safari 8 / OS X 10.10 | Clients are unable to establish secure connections with some of the Cortex components, including Gateway. |
