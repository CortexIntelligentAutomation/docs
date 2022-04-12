---
title: "Install the Web Application Server"
linkTitle: "Install Web Application Server"
description: >
    Information on installing a Web Application Server.
---

## Extract Installation Artefacts

1. We recommend that the Flow Debugger Service and Gateway are installed on the same Web Application Server. Copy the following artefacts to a folder on the machine (the version numbers may differ):
   * Cortex Evolution - Innovation 2022.5 - Block Packages.zip
   * Cortex Evolution - Innovation 2022.5 - Gateway.zip
   * Cortex Evolution - Innovation 2022.5 - Flow Debugger Service.zip
   * Cortex Evolution - Innovation 2022.5 - Web Application Installation Scripts.zip

1. Extract the `Cortex Evolution - Innovation 2022.5 - Installation Scripts.zip` zip file to a folder with the same name.

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

Cortex can also work with wildcard certificates and with self-signed certificates. However, self-signed certificates are not recommended for production instances. Details on how to create a self-signed certificate can be found at [Create Self-Signed Certificates][].

You can import the certificate by right clicking the certificate file, selecting Install Certificate and following the wizard. When prompted, ensure you import it into the Local Machine store and not Current User.
To verify the certificate is imported:

1. Click Start
2. Run `certlm.msc`
3. Expand `Personal` and select Certificates
4. You should see your certificate in this store

### IIS role setup and configuration

#### Install Internet Information Services (IIS)

Installed the required features by following these instructions:

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Evolution - Innovation 2022.5 - Installation Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Evolution - Innovation 2022.5 - Installation Scripts"
    ```

1. Run the `Cortex.Innovation.Install.WindowsFeatures.ps1` script using the following command:

    ```powershell
    .\Cortex.Innovation.Install.WindowsFeatures.ps1
    ```

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

#### Register and Allow .NET CLR v4.0.30319 with IIS

{{% alert title="Note" %}}Unless .NET CLR v4.0.30319 is registered and allowed with IIS, the Cortex web sites and web services will not work.{{% /alert %}}

1. Open a Windows PowerShell (x64) window as administrator.
1. Enter the following:

    ```powershell
    Dism /online /enable-feature /featurename:IIS-ASPNET45 /all
    ```

1. Once the command prompt confirms that it has finished installing .NET CLR v4.0.30319, close PowerShell.

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

{{< figure class="centre" src="/images/IISCrypto SChannel.png" title="Applied Security Settings" >}}

{{< figure class="centre" src="/images/IISCrypto Cipher Suites.png" title="Allowed Cipher Suites" >}}

{{% alert title="Note" %}}These are the settings applied for Windows Server 2016 and later. Earlier versions will allow some further settings. {{% /alert %}}

{{% alert type="warning" title="Warning" %}}Disabling specific TLS versions or specific Cipher Suites can have impact on Cortex components themselves as well as their communication capabilities with third party systems and services, e.g. Debugger executing flows with blocks which communicate with 3rd parties via PowerShell or REST. All parties communicating together must support a shared protocol version and cipher suite, otherwise they will not be able to establish a secure communication link between each other.{{% /alert %}}

Apply these security measures by following these instructions:

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Evolution - Innovation 2022.5 - Installation Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Evolution - Innovation 2022.5 - Installation Scripts"
    ```

1. Run the `Cortex.Innovation.Install.SSLBestPractises.ps1` script using the following command:

    ```powershell
    .\Cortex.Innovation.Install.SSLBestPractises.ps1
    ```

1. To use all the recommended settings click `Apply all` to the first prompt.

    To selectively apply each setting select `Choose which to apply`. Each change will then be prompted with a Yes/No confirmation before applying.
1. Restart the machine when the script asks.

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

1. Open Internet Information Services (IIS) Manager from Start > Administrative Tools.
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

Cortex Gateway should be configured to use HTTPS:

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
    {{% alert title="Note" %}}Configuring your system to use a port other than the HTTPS default of 443 is not compatible with HSTS. If your configuration requires HTTPS to run on a port other than 443, the HSTS configuration must be turned off. This can be achieved by configuring the `Add Strict-Transport-Security when HTTPS` rewrite rule `enabled` setting to `false` in web.config after installation.{{% /alert %}}
8. Select the SSL certificate to use.
9. Click OK. If an existing site is already using the specified SSL port, a warning will be displayed. Either click `No` and change the Port in the Add Site Binding dialog, or click `Yes` and stop the other website.
10. It is recommended to remove the http site binding.

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

## Install Flow Debugger Service

### Configure Installation Script

1. In the `Cortex Evolution - Innovation 2022.5 - Installation Scripts` folder, locate the `Cortex.Innovation.Install.FlowDebuggerService.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Install.FlowDebuggerService.ps1 `
    -FlowDebuggerServicePath "C:\Install\Cortex Evolution - Innovation 2022.5 - Flow Debugger Service.zip" `
    -BlockPackagesPath "C:\Install\Cortex Evolution - Innovation 2022.5 - Block Packages.zip" `
    -Credential $AppPoolIdentity
    ```

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`FlowDebuggerServicePath`                     | Configure this value with the location of the Flow Debugger Service zip file on the Web Application Server. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the Web Application Server. |
    |`Credential`                                  | The credentials of the user that will be used to run the `Debugger` application pool in IIS. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |

1. Save and close `Cortex.Innovation.Install.FlowDebuggerService.ps1`.

### Run Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Evolution - Innovation 2022.5 - Installation Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Evolution - Innovation 2022.5 - Installation Scripts"
    ```

1. Install the Flow Debugger Service by running the following command (`Tee-Object` will write output to both the PowerShell console and a log file, `FilePath` can be changed if required):
  
    ```powershell
    .\Cortex.Innovation.Install.FlowDebuggerService.ps1 | Tee-Object -FilePath "cortex-flow-debugger-service-install-log.txt"
    ```

1. A credentials prompt will appear. Enter the credentials of the user that should run the `Debugger` application pool in IIS (this can be the same user as the one used to run the Cortex Gateway application pool).
1. Wait for the script to finish running. This should take approximately 2 minutes.
1. An error may have appeared saying:

    ```
    The Windows Process Activation Service service is not started.
    ```

    This can be ignored.
1. Check that there have been no other errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the installation.

    If the errors do not give any instructions on how to rectify, please contact [Cortex Service Desk](https://support.cortex.co.uk/) for further assistance.

## Install Cortex Gateway

### Configure Installation Parameters

1. In the `Cortex Evolution - Innovation 2022.5 - Gateway.zip` folder, locate the `CortexGateway.SetParameters.xml` file and open it with a text editor.
1. Edit the file, changing the parameters according to the details given below:

    {{< highlight powershell "linenos=table,hl_lines=3 16-18 20-22 27-29,linenostart=1" >}}
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
        <setParameter name="SignalRContext-Web.config Connection String" value="Data Source=.\SQLEXPRESS;Initial Catalog=CortexWeb.SignalR;Integrated Security=True;MultipleActiveResultSets=True" />
        <setParameter name="ReactorEntities-Web.config Connection String" value="metadata=res://*/Models.ReactorEnities.csdl|res://*/Models.ReactorEnities.ssdl|res://*/Models.ReactorEnities.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=.\SQLEXPRESS;initial catalog=Reactor;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" />
        <setParameter name="CortexDWEntities-Web.config Connection String" value="metadata=res://*/Models.CortexDataWarehouseEntities.csdl|res://*/Models.CortexDataWarehouseEntities.ssdl|res://*/Models.CortexDataWarehouseEntities.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=.\SQLEXPRESS;initial catalog=CortexDW;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" />
        <setParameter name="CortexRepositories-Web.config Connection String" value="c:\\CortexWeb\\Repo\" />
    </parameters>
    {{</ highlight>}}

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
    |`ModelDBContext-Web.config Connection String`   | Change the `data source` to point to the instance for the SQL database e.g. localhost. If the database is hosted on a different server, use the syntax machineName\instanceName. |
    |`AuthContext-Web.config Connection String`      | Change the `data source` to point to the instance for the SQL database e.g. localhost. If the database is hosted on a different server, use the syntax machineName\instanceName. |
    |`SignalRContext-Web.config Connection String`   | Change the `data source` to point to the instance for the SQL database e.g. localhost. If the database is hosted on a different server, use the syntax machineName\instanceName. |
    |`CortexRepositories-Web.config Connection String` | Change this to the location where the Flow repositories are to be stored. The default location is `c:\CortexWeb\Repo`. |

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

1. Start the Cortex application pool:
    1. Open Internet Information Service (IIS) Manager.
    1. In the left pane, expand the server node.
    1. Left-Click Application Pools to display a list of the Application Pools.
    1. Right-Click the Cortex application pool and select Start.
1. Once the application pool has been started, the site will be available on `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.
    {{% alert title="Note" %}} If the Application Pool does not stay started, ensure that the user it runs as has `Log on as a service` and `Log on as a batch job` permissions or belongs to a group that has those permissions.{{% /alert %}}
    If an error message is displayed wait a few minutes and refresh the page as it is possible that the website was still starting.

TODO: Link to setup

[Create Self-Signed Certificates]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.CreateSelfSignedCertificates" >}}
