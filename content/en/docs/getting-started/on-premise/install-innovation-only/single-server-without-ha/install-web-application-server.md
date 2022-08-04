---
title: "Install the Web Application Server"
linkTitle: "Install Web Application Server"
description: "Information about installing the Web Application Server."
weight: 40
---

# {{< param title >}}

This guide describes how to install the Web Application Server components on the server. Please ensure that [Install Application Server][] has been completed before starting this installation.

## Extract Installation Artefacts

1. Copy the following artefacts to a folder on the server (the version numbers may differ):
   * Cortex Innovation 2022.6 - Block Packages.zip
   * Cortex Innovation 2022.6 - Gateway.zip
   * Cortex Innovation 2022.6 - Flow Debugger Service.zip
   * Cortex Innovation 2022.6 - Web App Server Install Scripts.zip

1. Extract the `Cortex Innovation 2022.6 - Web App Server Install Scripts.zip` zip file to a folder with the same name.
1. Extract the `Cortex Innovation 2022.6 - Gateway.zip` zip file to a folder with the same name.

## Install Prerequisites

### Licensing

Ensure that a valid Cortex licence file named `Cortex.lic` exists on the server, in the location `%ProgramData%\Cortex\Licences`. If it does not, follow the instructions located at [Licensing Requirements][].

### Install SQL Server or SQL Express

1. Use one of the following installation guides to install SQL Server or SQL Server Express:
    * <a href="/pdfs/Cortex Innovation - SQL Server 2019 Installation Guide.pdf">Cortex - SQL Server 2019 Installation Guide</a>
    * <a href="/pdfs/Cortex Innovation - SQL Server 2016 Installation Guide.pdf">Cortex - SQL Server 2016 Installation Guide</a>
    * <a href="/pdfs/Cortex Innovation - SQL Server 2016 Express Installation Guide.pdf">Cortex - SQL Server 2016 Express Installation Guide</a>

### Install Microsoft .NET Framework 4.7.1

Gateway requires a minimum of Microsoft .NET Framework 4.7.1.

To find the version of the framework that is installed:

1. On the Start menu, choose `Run`.
2. In the open box, enter `regedit.exe`. You must have administrative credentials to run regedit.exe.
3. In the Registry Editor, open the subkey `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full`.
4. If the `Full` subkey is not present, then you do not have the .NET Framework 4.5 or later installed.
5. Check for a `DWORD` value named `Release`. The existence of the Release DWORD indicates the .NET Framework 4.5 or newer has been installed on that computer. If the value is `461308` or over then at least .NET Framework 4.7.1 is installed and no further steps need to be taken. If it is not installed, continue with the following steps to install it.

To install .NET Framework 4.7.1:

1. Download the [.NET Framework 4.7.1][NET Framework 471] installer.
2. Double-click on the installer file to run it.
3. Follow the wizard to complete the installation.

### Install Microsoft Web Deploy

1. Check if Web Deploy is already installed by going to `Control Panel` → `Programs` → `Programs and Features`; if Web Deploy is already installed, it will be listed as `Microsoft Web Deploy`.
1. If it is not installed, download [Microsoft Web Deploy][] version 3.0 or later (WebDeploy_amd64_en-US.exe) to the server.
1. Double-click the downloaded file to start the installation.
1. Follow the installation wizard to install Web Deploy; on the `Choose Setup Type` page select `Typical`.

### Install Visual C++ Redistributable

1. Check if Visual C++ 2013 Redistributable (x64) is already installed by going to `Control Panel` → `Programs` → `Programs and Features`; if Visual C++ Redistributable is already installed, it will be listed as `Microsoft Visual C++ 2013 Redistributable (x64)`.
1. If it is not installed, download [Visual C++ Redistributable 2013 (x64)][C++ Redistributable].
1. Double-click the downloaded file to start the installation.
1. Follow the installation wizard to install the Visual C++ Redistributable.

### IIS Role Setup and Configuration

#### Install Internet Information Services (IIS)

Install the required features by following these instructions:

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - Web App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.6 - Web App Server Install Scripts"
    ```

1. Run the `Cortex.Innovation.Install.WindowsFeatures.ps1` script using the following command, this may take a few minutes:

    ```powershell
    .\Cortex.Innovation.Install.WindowsFeatures.ps1
    ```

1. Check the output is as follows:

    ```text
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
    Web-Http-Redirect is installed
    Web-Request-Monitor is installed
    Web-Stat-Compression is installed
    Web-Dyn-Compression is installed
    Web-Filtering is installed
    Web-Windows-Auth is installed
    Web-Mgmt-Console is installed
    Web-Mgmt-Service is installed
    ```

#### Register and Allow .NET CLR v4.0.30319 with IIS

{{% alert title="Note" %}}Unless .NET CLR v4.0.30319 is registered and allowed with IIS, Gateway and Flow Debugger Service will not work.{{% /alert %}}

1. Open a Windows PowerShell (x64) window as administrator.
1. Run the following command:

    ```powershell
    Dism /online /enable-feature /featurename:IIS-ASPNET45 /all
    ```

1. Once PowerShell confirms that it has finished installing .NET CLR v4.0.30319, close the PowerShell window.

### Install URL Rewrite Module

The URL Rewrite IIS Manager module is required to enable web applications on your server to rewrite URLs. This is needed to allow HTTP URLs to redirect to the equivalent HTTPS ones.

To install the URL Rewrite module take the following steps:

1. In the left-hand pane of Internet Information Service (IIS) Manager, select the server node.
1. Ensure that there is an icon with the title `URL Rewrite` under the `IIS` feature section:
    {{< figure class="centre" src="/images/Url Rewrite Icon.png" title="Url Rewrite Module Icon" >}}
1. If there is an icon, `URL Rewrite` module is installed and no further steps are required.
1. If there is no icon, the module is not installed and the following steps must be taken:
    1. Download the [URL Rewrite][] module installer.
    1. Double-click on the installer file to run it.
    1. Follow the wizard to complete the installation.
    1. After successfully installing, close and reopen `IIS Manager`. The `URL Rewrite` icon should now be visible.

### Add HTTPS Firewall Rule

If any firewall is running on the server, it must be configured to allow communication inbound via TCP on the port configured for HTTPS (usually 443). See [Configure Firewalls][] for information about adding rules to Windows Firewall.

## Create Web Site

Gateway and Flow Debugger Service can either be installed to an existing web site or a newly created web site. If you are installing into an existing web site skip to [Configure Web Site][].

The steps to create a new web site are:

1. In Windows File Explorer, navigate to the default IIS folder (usually `%SystemDrive%\inetpub\wwwroot`, e.g. `C:\inetpub\wwwroot`).
2. Ensure there is a folder called `Cortex`; if not create it.
3. In the left-hand pane of Internet Information Service (IIS) Manager, expand the server node.
4. Right-click the `Sites` node under the server and select `Add Website…`.
5. Set the `Site name` to `Cortex`.
6. Set the `Physical path` to the folder created above (e.g. `C:\inetpub\wwwroot\Cortex`), by clicking on the ellipses `…`, selecting the appropriate directory and clicking `OK`.
7. Click `OK`. If an existing site is already using the specified port, a warning will be displayed. Either click `No` and change the `Port` in the `Add Website` dialog, or click `Yes` and stop the other website.

## Configure Web Site

The web site which the Gateway and Flow Debugger Service are installed under requires additional configuration.

### Configure HTTPS

Both the Gateway and Flow Debugger Service should be configured to use HTTPS:

{{% alert title="Note" %}}For sites using self-signed SSL certificates, the HTTPS URL redirection will only work in Google Chrome browsers. For all other supported browsers, an SSL certificate signed by a Certificate Authority must be used to enable HTTPS URL redirection.{{% /alert %}}

1. In the left-hand pane of Internet Information Service (IIS) Manager, expand the server node.
1. Expand the `Sites` node under the server.
1. Right-click the web site where Gateway will be installed and select `Edit Bindings…`.
1. Click `Add…`
1. Set Type to `https`.
1. Set the appropriate Port number (typically 443). The `Host name` box can be left blank.
    {{% alert title="Note" %}}Configuring your system to use a port other than the HTTPS default of 443 is not compatible with HTTP Strict Transport Security (HSTS). If your configuration requires HTTPS to run on a port other than 443, the HSTS configuration must be turned off. This can be achieved by configuring the `Add Strict-Transport-Security when HTTPS` rewrite rule's `enabled` setting to `false` in web.config after installation.{{% /alert %}}
1. Select the SSL certificate that was used when [installing the Application Server][Configure Installation Script]. If self-signed certificates were used, this will have the subject `CN=CortexServerCertificate`.
1. Click `OK`. If an existing site is already using the specified SSL port, a warning will be displayed. Either click `No` and change the `Port` in the `Add Site Binding` dialog, or click `Yes` and stop the other website.
1. It is recommended to remove the `http` site binding.

## Install Flow Debugger Service

### Get Application Pool User

A domain user account is required for the Flow Debugger Service web application pool and must be created prior to performing the installation. In line with best practices, this account should not be used for any purposes other than those specified for the Flow Debugger Service. Alternatively, the `NETWORK SERVICE` user may also be used.

This user must currently have access to the default NuGet directory, in order to load block packages correctly. To add permissions for the user take the following steps:

1. Navigate to `%SystemRoot%\System32\config\systemprofile\AppData\Roaming\` and create a new folder named `NuGet` if one does not exist.
1. Right-click on the `NuGet` folder and click `Properties`.
1. In the dialog, click the `Security` tab.
1. Click the `Edit...` button.
1. Click the `Add...` button.
1. Enter the username of the application pool user and click `OK`.
1. In the `Permissions` section at the bottom, check `Full control`
1. Click `OK`.

The user must be given `Log on as a service` and `Log on as a batch job` permissions. To do this take the following steps:

1. Navigate to `Start` -> `Administrative Tools` -> `Local Security Policy`.
1. In the Local Security Policy dialog, expand the `Local Policies` node then select `User Rights Assignment`.
1. Take the following steps for the `Log on as a service` and `Log on as a batch job` policies:
    1. In the right-hand panel, double-click on the policy.
    1. In the Properties dialog, click on the `Add User or Group` button.
        {{% alert title="Note" %}}It is possible to use the `Advanced…` button to look up names rather than entering them manually. Various filters can be set to find the correct user or group more easily. Multiple users can be selected by holding down `CTRL` while clicking. `OK` adds the selected users or groups into the `Enter the object names to select` text box.{{% /alert %}}
    1. Type the name of the application pool user account into the `Enter the object names to select` text box. Click the `Check Names` button to confirm that the user exists.
    1. Click `OK` on the Select Users dialog, and then confirm the user is correct by clicking `OK` on the Properties dialog.

### Configure Installation Script

1. In the `Cortex Innovation 2022.6 - Web App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.FlowDebuggerService.ps1` script and open it with a text editor.
1. Choose the tab below that matches the configuration for this installation, then update the script to match, changing the parameters according to the details given below:

    {{< tabpane lang="powershell" >}}
        {{< tab header="CA Certs">}}
.\Cortex.Install.FlowDebuggerService.ps1 `
    -FlowDebuggerServicePath "C:\Install\Cortex Innovation 2022.6 - Flow Debugger Service.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2022.6 - Block Packages.zip" `
    -FlowDebuggerBasicAuthUserName "BasicAuthUser" `
    -FlowDebuggerBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -Credential $AppPoolIdentity
        {{< /tab >}}
        {{< tab header="Self-Signed Certs" >}}
.\Cortex.Install.FlowDebuggerService.ps1 `
    -FlowDebuggerServicePath "C:\Install\Cortex Innovation 2022.6 - Flow Debugger Service.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2022.6 - Block Packages.zip" `
    -FlowDebuggerBasicAuthUserName "BasicAuthUser" `
    -FlowDebuggerBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -UseSelfSignedCertificates `
    -Credential $AppPoolIdentity
        {{< /tab >}}
    {{< /tabpane >}}

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`FlowDebuggerServicePath`                     | Configure this value with the location of the Flow Debugger Service zip file on the server. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the server. |
    |`FlowDebuggerBasicAuthUserName`               | Configure this value with the username that will be used for Basic Authentication when Gateway makes HTTPS requests to the Flow Debugger Service. <br /><br />Currently only Basic Authentication using a single user is supported, OAuth2 will be supported in a future release.<br /><br />This value will be needed [later, when installing Gateway][Install Gateway]. |
    |`FlowDebuggerBasicAuthPwd`                     | Configure this value with the password that will be used for Basic Authentication when Gateway makes HTTPS requests to the Flow Debugger Service. This must not be left as its default value for security reasons. This should be [Cortex Encrypted][]. <br /><br />This value will be needed [later, when installing Gateway][Install Gateway].|
    |`UseSelfSignedCertificates`                    | Enables Flow Debugger Service to communicate with Gateway using generated Self-Signed Certificates rather than CA Certificates.  <br /><br /> Not recommended for production use.  |
    |`Credential`                                  | The credentials of the user that will be used to run the `Debugger` application pool in IIS. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |

1. Save and close `Cortex.Innovation.Install.FlowDebuggerService.ps1`.

### Run Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - Web App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.6 - Web App Server Install Scripts"
    ```

1. Install the Flow Debugger Service by running the following command (`Tee-Object` will write output to both the PowerShell console and a log file, `FilePath` can be changed if required):
  
    ```powershell
    .\Cortex.Innovation.Install.FlowDebuggerService.ps1 | Tee-Object -FilePath "cortex-flow-debugger-service-install-log.txt"
    ```

1. A credentials prompt will appear. Enter the credentials of the user that should run the `Debugger` application pool in IIS. If using the `NETWORK SERVICE` user, enter any user as the username and leave the password blank; the `NETWORK SERVICE` user will need to be selected in the final step.
1. Wait for the script to finish running. This should take approximately 2 minutes.
1. An error may have appeared saying:

    ```
    The Windows Process Activation Service service is not started.
    ```

    This can be ignored.
1. Check that there have been no other errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the installation.

    If the errors do not give any instructions on how to rectify, please contact [Cortex Service Portal][] for further assistance.

1. If using `NETWORK SERVICE` for the application pool user:

   1. Open Internet Information Services (IIS) Manager.
   1. On the left, expand the server node.
   1. Click `Application Pools`.
   1. Right-click on the `Debugger` application pool and select `Advanced Settings...`.
   1. In the `Advanced Settings` dialog, click on `Identity` and then click the ellipses (`...`).
   1. In the `Application Pool Identity` dialog, select `Built-in account`, then select `NetworkService` from the drop-down, then click `OK`.
   1. Right-click on the `Debugger` application pool and click `Recycle...`.

## Install Gateway

### Get Application Pool User

A domain user account is required for the Gateway web application pool and must be created prior to performing the installation
below.

This user account is required to enable Gateway to access the Cortex database, with the following roles:

* dbcreator
* public

To add roles to database users take the following steps:

1. Open SQL Server Management Studio on the server and log in.
2. Expand the server node, then `Security` then `Logins`.
3. If the user that will run the Gateway application pool is not in the list of logins, take the following steps, otherwise skip to step 4:
    1. Right-click the `Logins` node and click `New Login...`.
    2. Enter the application pool user in the `Login name` box.
    3. On the left pane, click `Server Roles`.
    4. Check `public` and `dbcreator`
    5. Click `OK`.

4. If the user that will run the Gateway application pool is in the list of logins, take the following steps:
    1. Right-click on the application pool user.
    2. Click `Properties`.
    3. On the left pane, click `Server Roles`.
    4. Check `public` and `dbcreator`.
    5. Click `OK`.

In line with best practices, this account should not be given administrator rights, nor should it be used for any purposes other than those specified for Gateway.

The user must be given `Log on as a service` and `Log on as a batch job` permissions. To do this take the following steps:

1. Navigate to `Start` -> `Administrative Tools` -> `Local Security Policy`.
1. In the Local Security Policy dialog, expand the `Local Policies` node then select `User Rights Assignment`.
1. Take the following steps for the `Log on as a service` and `Log on as a batch job` policies:
    1. In the right-hand panel, double-click on the policy.
    1. In the Properties dialog, click on the `Add User or Group` button.
        {{% alert title="Note" %}}It is possible to use the `Advanced…` button to look up names rather than entering them manually. Various filters can be set to find the correct user or group more easily. Multiple users can be selected by holding down `CTRL` while clicking. `OK` adds the selected users or groups into the `Enter the object names to select` text box.{{% /alert %}}
    1. Type the name of the application pool user account into the `Enter the object names to select` text box. Click the `Check Names` button to confirm that the user exists.
    1. Click `OK` on the Select Users dialog, and then confirm the user is correct by clicking `OK` on the Properties dialog.

### Create Gateway Application Pool

1. Open Internet Information Services (IIS) Manager.
1. Select and right-click the `Application Pools` node under the server and select `Add Application Pool…`
1. Set `Name` to `Cortex Gateway`.
1. Ensure that the `.NET CLR version` is set to `.NET CLR Version v4.0.30319` (This may be configured by default).
1. Ensure that the `Managed pipeline mode` is set to `Integrated` (This may be configured by default).
1. Click `OK`
1. Right click on the created application pool and select `Advanced Settings…`
1. Click the `...` next to `Identity` (under Process Model) to open a dialog, then select `Custom Account` and `Set...`.
1. Enter the username and password for the user identified in [Get Application Pool User][].
1. Click `OK` to close the `Set Credentials` dialog.
1. Click `OK` to close the `Application Pool Identity` dialog.
1. Click `OK` to close the `Advanced Settings` dialog.

### Create New Web Application

1. In the left-hand pane of Internet Information Service (IIS) Manager, expand the server node.
2. Right-click on the [site][Create Web Site] the application should be installed under and select `Add Application…`
3. Set the `Alias` to `gateway`. This must be lowercase.
4. Click `Select…` and from the Application pool dropdown select the `Cortex Gateway` application pool and click `OK`.
5. Set the `Physical path` to `C:\inetpub\wwwroot\Cortex\Gateway` by clicking on the ellipses `…` and selecting the appropriate directory. Create the `C:\inetpub\wwwroot\Cortex\Gateway` directory if it does not already exist.
6. Click `OK`.

### Configure IIS Site Redirect to the Specified Web Application (Optional)

If the site hosting the Gateway web application is a newly created Cortex site or an existing site that doesn’t have its own content, it is recommended to redirect the site URL to the `gateway` web application URL, e.g. `https://FullyQualifiedDomainName` to `https://FullyQualifiedDomainName/gateway`.

1. Open Internet Information Services (IIS) Manager.
2. Select the site hosting the `gateway` web application and from IIS settings double-click the `HTTP Redirect` icon.
3. Click the check box `Redirect requests to this destination`.
4. Enter `https://FullyQualifiedDomainName/gateway`, replacing `FullyQualifiedDomainName` with the FQDN of the server.
5. In the `Redirect Behaviour` section, click `Only redirect requests to content in this directory (not subdirectories)`.
6. In `Actions` click the `Apply` button.

### Configure Installation Parameters

1. In the `Cortex Innovation 2022.6 - Gateway` folder, locate the `CortexGateway.SetParameters.xml` file and open it with a text editor.
1. Edit the file, changing the parameters according to the details given below:

    {{< highlight powershell "linenos=table,hl_lines=3 16-18 20-21 23-26 31-33 36,linenostart=1" >}}
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
        <setParameter name="Service Fabric Api Gateway Endpoint" value="&lt;value&gt;https://app-server.domain.com:8722/&lt;/value&gt;" />
        <setParameter name="Service Fabric Using Self Signed Certificates" value="&lt;value&gt;False&lt;/value&gt;" />
        <setParameter name="Service Fabric Self Signed Certificate Subject" value="&lt;value&gt;CN=CortexServerCertificate&lt;/value&gt;" />
        <setParameter name="Service Fabric ApiGateway Basic Auth Username" value="&lt;value&gt;BasicAuthUser&lt;/value&gt;" />
        <setParameter name="Service Fabric ApiGateway Basic Auth Password" value="&lt;value&gt;ADA9883B11BD4CDC908B8131B57944A4&lt;/value&gt;" />
        <setParameter name="HSTS Enabled" value="true" />
        <setParameter name="Dot NET flow debugger Endpoint" value="&lt;value&gt;https://app-server.domain.com/debugger/api/&lt;/value&gt;" />
        <setParameter name="Dot NET flow debugger Basic Auth Username" value="&lt;value&gt;BasicAuthUser&lt;/value&gt;" />
        <setParameter name="Dot NET flow debugger Basic Auth Password" value="&lt;value&gt;ADA9883B11BD4CDC908B8131B57944A4&lt;/value&gt;" />
        <setParameter name="Dot NET Flow Debugger Using Self Signed Certificates" value="&lt;value&gt;False&lt;/value&gt;" />
        <setParameter name="Dot NET Flow Debugger Self Signed Certificate Subject" value="&lt;value&gt;CN=CortexServerCertificate&lt;/value&gt;" />
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

    |Line Number | Name                                           | Description |
    |------------|------------------------------------------------|-------------|
    | 3          |`IIS Web Application Name`                      | Change to the correct `Site Name/Application` if either was modified from the defaults when creating the [website][Create Web Site] or [application][Create Application].  |
    | 16         |`Feature Flags`                                 |Replace `InnovationId` with the Cortex Innovation feature identifier, which should have been provided by Cortex when fulfilling the [Licensing Requirements][], if it wasn't it should be requested using [Cortex Service Portal][]. |
    | 17         |`Service Fabric Api Gateway Endpoint`           | Replace `app-server.domain.com` with the fully qualified domain name of the server. The port should be specified as `8722` and there must be a trailing slash, e.g. `https://app-server.domain.com:8722/`. |
    | 18         |`Service Fabric Using Self Signed Certificates` | Configure the value as `False` if you used valid CA certificates when installing the Application Server components, `True` if you used self-signed certificates. |
    | 20         |`Service Fabric ApiGateway Basic Auth Username` | This must be changed if you used a non-default `ApiGatewayBasicAuthUserName` when [installing the Application Server][Configure Installation Script]; if so, this value must be configured to the one used. |
    | 21         |`Service Fabric ApiGateway Basic Auth Password` | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Application Server][Configure Installation Script]; if so, this value must be configured to the one used. It can be [Cortex Encrypted][].|
    | 23         |`Dot NET flow debugger Endpoint`                | Replace `app-server.domain.com` with the fully qualified domain name of the server. |
    | 24         |`Dot NET flow debugger Basic Auth Username` | This must be changed if you used a non-default `FlowDebuggerBasicAuthUserName` when [installing the Flow Debugger Service][Configure Debugger Installation Script]; if so, this value must be configured to the one used. |
    | 25         |`Dot NET flow debugger Basic Auth Password` | This must be changed if you used a non-default `FlowDebuggerBasicAuthPassword` when [installing the Flow Debugger Service][Configure Debugger Installation Script]; if so, this value must be configured to the one used. It can be [Cortex Encrypted][].|
    | 26         |`Dot NET Flow Debugger Using Self Signed Certificates` | Configure the value as `False` if you are using valid CA certificates to secure the site containing Gateway and Flow Debugger Service, `True` if using self-signed certificates. |
    | 31         |`ModelDBContext-Web.config Connection String`   | Change the `Data Source` to `localhost` if the database was installed as the default instance. If it was installed as a named instance, change it to `.\instanceName` replacing `instanceName` with the name of the instance.|
    | 32         |`AuthContext-Web.config Connection String`      | Change the `Data Source` to `localhost` if the database was installed as the default instance. If it was installed as a named instance, change it to `.\instanceName` replacing `instanceName` with the name of the instance. |
    | 33         |`SignalRContext-Web.config Connection String`   | Change the `Data Source` to `localhost` if the database was installed as the default instance. If it was installed as a named instance, change it to `.\instanceName` replacing `instanceName` with the name of the instance. |
    | 36         |`CortexRepositories-Web.config Connection String` | Change this to the location where the Flow repositories are to be stored. The default location is `c:\CortexWeb\Repo`. |

### Test Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - Gateway` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.6 - Gateway"
    ```

1. Test that everything is configured correctly by running the following command:

    ```powershell
    .\CortexGateway.deploy.cmd /T
    ```

    In the event any errors, there will be an error message displayed at the end of the output with a line confirming the Error Count.

### Run Installation Script

1. Ensure the Gateway application pool is stopped:
    1. Open Internet Information Service (IIS) Manager.
    1. In the left pane, expand the server node.
    1. Click `Application Pools` to display a list of the Application Pools.
    1. Right-click the `Cortex Gateway` application pool and select `Stop`.

    {{% alert title="Note" %}}Failure to stop the application pool will result in a permissions error when installing Gateway.{{% /alert %}}

1. In the Windows PowerShell (x64) window, run the following command to install Gateway:

    ```powershell
    .\CortexGateway.deploy.cmd /Y
    ```

    In the event of any errors, there will be an error message displayed at the end of the output with a line confirming the Error Count.

1. Start the Gateway application pool:
    1. Open Internet Information Service (IIS) Manager.
    1. In the left pane, expand the server node.
    1. Click `Application Pools` to display a list of the Application Pools.
    1. Right-click the `Cortex Gateway` application pool and select `Start`.
1. Once the application pool has been started, the site will be available on `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.
    {{% alert title="Note" %}} If the application pool does not stay started, ensure that the user it runs as has `Log on as a service` and `Log on as a batch job` permissions or belongs to a group that has those permissions.{{% /alert %}}

## Next Steps?

1. [Setup Gateway][]

[Create Self-Signed Certificates]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.CreateSelfSignedCertificates" >}}
[Setup Gateway]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.SetupGateway" >}}
[Try it out]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.TryItOut" >}}
[Configure Firewalls]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.ConfigureFirewalls" >}}
[SSL Best Practices]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Configure Installation Script]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureInstallationScript" >}}
[Configure Web Site]: {{< ref "#configure-web-site" >}}
[Create Web Site]: {{< ref "#create-web-site" >}}
[Create Application]: {{< ref "#create-new-web-application" >}}
[Get Application Pool User]: {{< ref "#get-application-pool-user-1" >}}
[Install Application Server]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.InstallApplicationServer" >}}
[Install Gateway]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.InstallGateway" >}}
[Licensing Requirements]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.LicensingRequirements" >}}
[Cortex Service Portal]: {{< url "Cortex.ServicePortal.MainDoc" >}}
[Cortex Encrypted]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[Configure Debugger Installation Script]: {{< ref "#configure-installation-script" >}}
[URL Rewrite]: {{< url "IIS.Downloads.UrlRewrite-2_1" >}}
[NET Framework 471]: {{< url "MSDotNet.Framework471.MainDoc" >}}
[Microsoft Web Deploy]: {{< url "MSDownload.WebDeploy" >}}
[C++ Redistributable]: {{< url "MSDownload.CPlusPlusRedistributable.2013" >}}
