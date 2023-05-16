---
title: "Install the Web Application Server"
linkTitle: "Install Web Application Server"
description: "Information about installing the Web Application Server."
weight: 40
---

# {{% param title %}}

This guide describes how to install the Web Application Server. Please ensure that [Install Application Servers and Load Balancer][] has been completed before starting this installation.

## Make Installation Artefacts Available

1. We recommend that the Flow Debugger Service and Gateway are installed on the same Web Application Server. Copy the following artefacts to a folder on the machine (the version numbers may differ):
   * Cortex Innovation 2022.9 - Block Packages.zip
   * Cortex Innovation 2022.9 - Gateway.zip
   * Cortex Innovation 2022.9 - Flow Debugger Service.zip
   * Cortex Innovation 2022.9 - Web App Server Install Scripts.zip

1. Extract the `Cortex Innovation 2022.9 - Web App Server Install Scripts.zip` zip file to a folder with the same name.

## Install Prerequisites

### Licensing

Ensure that a valid {{% ctx %}} licence file named `Cortex.lic` exists on the Web Application server, in the location `%ProgramData%\Cortex\Licences`. If it does not, follow the instructions located at [Licensing Requirements][].

### Install SQL Server or SQL Express

1. Use one of the following installation guides to install SQL Server or SQL Server Express:
    * <a href="/pdfs/Cortex Innovation - SQL Server 2019 Installation Guide.pdf">{{% ctx %}} Innovation - SQL Server 2019 Installation Guide</a>
    * <a href="/pdfs/Cortex Innovation - SQL Server 2016 Installation Guide.pdf">{{% ctx %}} Innovation - SQL Server 2016 Installation Guide</a>
    * <a href="/pdfs/Cortex Innovation - SQL Server 2016 Express Installation Guide.pdf">{{% ctx %}} Innovation - SQL Server 2016 Express Installation Guide</a>

### Install Microsoft .NET Framework 4.7.1

Gateway requires a minimum of Microsoft .NET Framework 4.7.1.

To find the version of the framework that is installed:

1. On the Start menu, choose `Run`.
1. In the open box, enter `regedit.exe`. You must have administrative credentials to run regedit.exe.
1. In the Registry Editor, open the subkey `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full`.
1. If the `Full` subkey is not present, then you do not have the .NET Framework 4.5 or later installed.
1. Check for a `DWORD` value named `Release`. The existence of the Release DWORD indicates the .NET Framework 4.5 or newer has been installed on that computer. If the value is `461308` or over then at least .NET Framework 4.7.1 is installed and no further steps need to be taken. If it is not installed, continue with the following steps to install it.

To install .NET Framework 4.7.1:

1. Download the [.NET Framework 4.7.1][NET Framework 471] installer.
1. Double-click on the installer file to run it.
1. Follow the wizard to complete the installation.

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

### Install Certificate

Both Gateway and the Flow Debugger Service require an X.509 SSL certificate to be installed on the Web Application Server. The certificate must have the following properties:

* Enhanced Key Usage: `Server Authentication` and `Client Authentication`
* Subject Alternative Names (SAN): At minimum the FQDN of the Server. It can also include NetBIOS Name, IP address, localhost, 127.0.0.1

If the user tries to navigate to an address not in the SAN list, then they will receive a certificate error.

Wildcard certificates and self-signed certificates can also be used. However, self-signed certificates are not recommended for production instances. Details on how to create a self-signed certificate can be found at [Create Self-Signed Certificates][].

You can import the certificate by right clicking the certificate file, selecting `Install Certificate` and following the wizard. When prompted, ensure you import it into the `Local Machine` store and not `Current User`.

To verify the certificate is imported:

1. Click the Windows button (`Start`)
1. Type `certlm.msc` and press `Enter` to open the Certificate Manager dialog
1. Expand `Personal` and select `Certificates`
1. You should see your certificate in this store

{{< alert type="warning" title="Warning" >}}It is critical to set a reminder to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.RolloverCertificates" title="update certificates" >}} in good time before they expire. If they expire then the platform will cease to function and {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}} must be contacted for support.{{< /alert >}}

### IIS Role Setup and Configuration

#### Install Internet Information Services (IIS)

Install the required features by following these instructions:

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.9 - Web App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.9 - Web App Server Install Scripts"
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

### Apply Recommended Security Measures

These are non-compulsory security measures, recommended to be applied to Web Application Servers, in order to prevent potential attacks that exploit known industry security vulnerabilities.

Applying these measures may impact other applications running on your server. Therefore, it is your responsibility to ensure that other applications and their clients will not be affected by the changes.

#### Only Use Recommended Encryption Algorithms and TLS Protocols

A collection of registry settings need to be applied to guarantee your server is only using the recommended encryption algorithms and TLS protocols. Information about these settings can be found at [SSL Best Practices][].

{{% alert type="warning" title="Warning" %}}Disabling specific TLS versions or specific Cipher Suites can have impact on {{% ctx %}} components themselves as well as their communication capabilities with third party systems and services, e.g. Flow Debugger Service executing flows with blocks which communicate with 3rd parties via PowerShell or REST. All parties communicating together must support a shared protocol version and cipher suite, otherwise they will not be able to establish a secure communication link between each other.{{% /alert %}}

Apply the settings by following these instructions:

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.9 - Web App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.9 - Web App Server Install Scripts"
    ```

1. Run the `Cortex.Innovation.Install.SSLBestPractices.ps1` script using the following command:

    ```powershell
    .\Cortex.Innovation.Install.SSLBestPractices.ps1
    ```

    {{% alert title="Note" %}}
To avoid answering all of the prompts `-Override 0` can be added to the end of the script. This will automatically apply all settings and forcibly restart the server.
    {{% /alert %}}

    If `-Override 0` has been specified no further steps need to be taken and you can move on to the next section when the server has restarted.
1. To use all the recommended settings click `Apply all` to the first prompt.

    To selectively apply each setting select `Choose which to apply`. Each change will then be prompted with a Yes/No confirmation before applying.
1. Restart the machine when the script asks.

### Add HTTPS Firewall Rule

If any firewall is running on the Web Application Server, it must be configured to allow communication inbound via TCP on the port configured for HTTPS (usually 443). See [Configure Firewalls][] for information about adding rules to Windows Firewall.

## Create Web Site

Gateway and Flow Debugger Service can either be installed to an existing web site or a newly created web site. If you are installing into an existing web site skip to [Configure Web Site][].

The steps to create a new web site are:

1. In Windows File Explorer, navigate to the default IIS folder (usually `%SystemDrive%\inetpub\wwwroot`, e.g. `C:\inetpub\wwwroot`).
1. Ensure there is a folder called `Cortex`; if not create it.
1. In the left-hand pane of Internet Information Service (IIS) Manager, expand the server node.
1. Right-click the `Sites` node under the server and select `Add Website…`.
1. Set the `Site name` to `Cortex`.
1. Set the `Physical path` to the folder created above (e.g. `C:\inetpub\wwwroot\Cortex`), by clicking on the ellipses `…`, selecting the appropriate directory and clicking `OK`.
1. Click `OK`. If an existing site is already using the specified port, a warning will be displayed. Either click `No` and change the `Port` in the `Add Website` dialog, or click `Yes` and stop the other website.

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
1. Select the SSL certificate that was installed in the [Install Certificate][] section.
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

1. In the `Cortex Innovation 2022.9 - Web App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.FlowDebuggerService.ps1` script and open it with a text editor.

1. Choose the tab below that matches the configuration for this installation, then update the script to match, changing the parameters according to the details given below:

    {{< tabpane lang="powershell" >}}
        {{< tab header="CA Certs">}}
.\Cortex.Install.FlowDebuggerService.ps1 `
    -FlowDebuggerServicePath "C:\Install\Cortex Innovation 2022.9 - Flow Debugger Service.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2022.9 - Block Packages.zip" `
    -FlowDebuggerBasicAuthUserName "BasicAuthUser" `
    -FlowDebuggerBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -Credential $AppPoolIdentity `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-flow-debugger-service-install-log.txt"
        {{< /tab >}}
        {{< tab header="Self-Signed Certs" >}}
.\Cortex.Install.FlowDebuggerService.ps1 `
    -FlowDebuggerServicePath "C:\Install\Cortex Innovation 2022.9 - Flow Debugger Service.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2022.9 - Block Packages.zip" `
    -FlowDebuggerBasicAuthUserName "BasicAuthUser" `
    -FlowDebuggerBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -UseSelfSignedCertificates `
    -Credential $AppPoolIdentity `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-flow-debugger-service-install-log.txt"
        {{< /tab >}}
    {{< /tabpane >}}

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`FlowDebuggerServicePath`                     | Configure this value with the location of the Flow Debugger Service zip file on the Web Application Server. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the Web Application Server. |
    |`FlowDebuggerBasicAuthUserName`               | Configure this value with the username that will be used for Basic Authentication when Gateway makes HTTPS requests to the Flow Debugger Service. <br /><br />For security reasons it is recommended that the default value `BasicAuthUser` should be changed.<br /><br />Currently only Basic Authentication using a single user is supported, OAuth2 will be supported in a future release.<br /><br />This value will be needed [later, when installing Gateway][Install Gateway]. |
    |`FlowDebuggerBasicAuthPwd`                     | Configure this value with the password that will be used for Basic Authentication when Gateway makes HTTPS requests to the Flow Debugger Service. <br /><br />This password should be [{{% ctx %}} Encrypted][CORTEX Encrypted]. For security reasons it is recommended that the default value `ADA9883B11BD4CDC908B8131B57944A4` should be changed.<br /><br />This value will be needed [later, when installing Gateway][Install Gateway].|
    |`UseSelfSignedCertificates`                    | Enables Flow Debugger Service to communicate with Gateway using generated Self-Signed Certificates rather than CA Certificates.  <br /><br /> Not recommended for production use.  |
    |`Credential`                                  | The credentials of the user that will be used to run the `Debugger` application pool in IIS. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`AcceptEULA`                                   | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                   | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Install.FlowDebuggerService.ps1`.

### Run Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.9 - Web App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.9 - Web App Server Install Scripts"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.FlowDebuggerService.ps1
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInnovationInstallScriptName>.ps1 -AcceptEULA
    ```

1. Run the PowerShell command to install the Flow Debugger Service.
1. A credentials prompt will appear. Enter the credentials of the user that should run the `Debugger` application pool in IIS. If using the `NETWORK SERVICE` user, enter any user as the username and leave the password blank; the `NETWORK SERVICE` user will need to be selected in the final step.
1. Wait for the script to finish running. This should take approximately 2 minutes.
1. An error may have appeared saying:

    ```
    The Windows Process Activation Service service is not started.
    ```

    This can be ignored.
1. Check that there have been no other errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the installation.

    If the errors do not give any instructions on how to rectify, please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for further assistance.

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

This user account is required to enable Gateway to access the {{% ctx %}} database, with the following roles:

* dbcreator
* public

To add roles to database users take the following steps:

1. Open SQL Server Management Studio on the Web Application Server and log in.
1. Expand the server node, then `Security` then `Logins`.
1. If the user that will run the Gateway application pool is not in the list of logins, take the following steps, otherwise skip to step 4:
    1. Right-click the `Logins` node and click `New Login...`.
    1. Enter the application pool user in the `Login name` box.
    1. On the left pane, click `Server Roles`.
    1. Check `public` and `dbcreator`
    1. Click `OK`.

1. If the user that will run the Gateway application pool is in the list of logins, take the following steps:
    1. Right-click on the application pool user.
    1. Click `Properties`.
    1. On the left pane, click `Server Roles`.
    1. Check `public` and `dbcreator`.
    1. Click `OK`.

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
1. Right-click on the [site][Create Web Site] the application should be installed under and select `Add Application…`
1. Set the `Alias` to `gateway`. This must be lowercase.
1. Click `Select…` and from the Application pool dropdown select the `Cortex Gateway` application pool and click `OK`.
1. Set the `Physical path` to `C:\inetpub\wwwroot\Cortex\Gateway` by clicking on the ellipses `…` and selecting the appropriate directory. Create the `C:\inetpub\wwwroot\Cortex\Gateway` directory if it does not already exist.
1. Click `OK`.

### Configure IIS Site Redirect to the Specified Web Application (Optional)

If the site hosting the Gateway web application is a newly created {{% ctx %}} site or an existing site that doesn’t have its own content, it is recommended to redirect the site URL to the `gateway` web application URL, e.g. `https://FullyQualifiedDomainName` to `https://FullyQualifiedDomainName/gateway`.

1. Open Internet Information Services (IIS) Manager.
1. Select the site hosting the `gateway` web application and from IIS settings double-click the `HTTP Redirect` icon.
1. Click the check box `Redirect requests to this destination`.
1. Enter `https://FullyQualifiedDomainName/gateway`, replacing `FullyQualifiedDomainName` with the FQDN of the server.
1. In the `Redirect Behaviour` section, click `Only redirect requests to content in this directory (not subdirectories)`.
1. In `Actions` click the `Apply` button.

### Configure Installation Script

1. In the `Cortex Innovation 2022.9 - Web App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.Gateway.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Install.Gateway.ps1 `
    -GatewayPackagePath "C:\Install\Cortex Innovation 2022.9 - Gateway.zip" `
    -GatewayApplicationIISPath "Cortex\gateway" `
    -ModelDBContextConnectionString "Data Source=localhost;Initial Catalog=CortexWeb;Integrated Security=True;MultipleActiveResultSets=True" `
    -AuthContextConnectionString "Data Source=localhost;Initial Catalog=CortexWeb.Auth;Integrated Security=True;MultipleActiveResultSets=True" `
    -SignalRContextConnectionString "Data Source=localhost;Initial Catalog=CortexWeb.SignalR;Integrated Security=True;MultipleActiveResultSets=True" `
    -FeatureFlags "InnovationId" `
    -ServiceFabricApiGatewayEndpoint "https://server.domain.com/" `
    -ServiceFabricUsingSelfSignedCertificates $false `
    -ServiceFabricApiGatewayBasicAuthUsername "BasicAuthUser" `
    -ServiceFabricApiGatewayBasicAuthPassword "ADA9883B11BD4CDC908B8131B57944A4" `
    -DotNetFlowDebuggerEndpoint "https://server.domain.com/debugger/api/" `
    -DotNetFlowDebuggerBasicAuthUsername "BasicAuthUser" `
    -DotNetFlowDebuggerBasicAuthPassword "ADA9883B11BD4CDC908B8131B57944A4" `
    -DotNetFlowDebuggerUsingSelfSignedCertificates $false `
    -Test:$Test `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-gateway-install-log.txt"
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`GatewayPackagePath`                            | Configure this value with the location of the `Cortex Innovation 2022.9 - Gateway.zip` file on the installation server. |
    |`GatewayApplicationIISPath`                     | Change to the correct `Site Name/Application` if either was modified from the defaults (`Cortex/gateway`) when creating the [website][Create Web Site] or [application][Create New Web Application]. |
    |`ModelDBContextConnectionString`                | If SQL Server was installed as the default instance, change the `Data Source`in the connection string to `localhost` or, if it was installed on another machine, change it to the machine name.<br /><br />If SQL Server was installed as a named instance, change it to `.\{instanceName}` replacing `{instanceName}` with the name of the instance or, if SQL Server was installed on a different machine, change it to `{machineName}\{instanceName}` replacing `{machineName}` with the machine name and `{instanceName}` with the name of the instance. <br /><br />This will set the `ModelDBContextConnectionString` value in the Gateway web.config.|
    |`AuthContextConnectionString`                   |  If SQL Server was installed as the default instance, change the `Data Source`in the connection string to `localhost` or, if it was installed on another machine, change it to the machine name.<br /><br />If SQL Server was installed as a named instance, change it to `.\{instanceName}` replacing `{instanceName}` with the name of the instance or, if SQL Server was installed on a different machine, change it to `{machineName}\{instanceName}` replacing `{machineName}` with the machine name and `{instanceName}` with the name of the instance. <br /><br />This will set the `AuthContextConnectionString` value in the Gateway web.config. |
    |`SignalRContextConnectionString`                |  If SQL Server was installed as the default instance, change the `Data Source`in the connection string to `localhost` or, if it was installed on another machine, change it to the machine name.<br /><br />If SQL Server was installed as a named instance, change it to `.\{instanceName}` replacing `{instanceName}` with the name of the instance or, if SQL Server was installed on a different machine, change it to `{machineName}\{instanceName}` replacing `{machineName}` with the machine name and `{instanceName}` with the name of the instance. <br /><br />This will set the `SignalRContextConnectionString` value in the Gateway web.config. |
    |`FeatureFlags`                                  | Replace `InnovationId` with the {{% ctx %}} Innovation feature identifier, which should have been provided by {{% ctx %}} when fulfilling the [Licensing Requirements][], if it wasn't it should be requested using [{{% ctx %}} Service Portal][CORTEX Service Portal].<br /><br />This will set the `FeatureFlags` value in the Gateway web.config.|
    |`ServiceFabricApiGatewayEndpoint`               | Replace `server.domain.com` with the fully qualified domain name of the Load Balancer Server. The port should be specified if it is not the default HTTPS port (443), and there must be a trailing slash, e.g. `https://server.domain.com/` or `https://server.domain.com:8722/`.<br /><br />This will set the `ServiceFabricApiGatewayEndpoint` value in the Gateway web.config.|
    |`ServiceFabricUsingSelfSignedCertificates`      | Configure the value as `$false` if you used valid CA certificates when [installing the Application Servers][Configure Installation Script], `$true` if you used self-signed certificates.<br /><br />This will set the `ServiceFabricUsingSelfSignedCertificates` value in the Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthUsername`      | This must be changed if you used a non-default `ApiGatewayBasicAuthUserName` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used.<br /><br />This will set the `ServiceFabricApiGatewayBasicAuthUsername` value in the Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthPassword`      | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used. It can be [{{% ctx %}} Encrypted][CORTEX Encrypted].<br /><br />This will set the `ServiceFabricApiGatewayBasicAuthPassword` value in the Gateway web.config.|
    |`DotNetFlowDebuggerEndpoint`                    | Replace `server.domain.com` with the fully qualified domain name of the Web Application Server.<br /><br />This will set the `DotNetFlowDebuggerEndpoint` value in the Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthUsername`           | This must be changed if you used a non-default `FlowDebuggerBasicAuthUserName` when [installing the Flow Debugger Service][Configure Debugger Installation Script]; if so, this value must be configured to the one used.<br /><br />This will set the `DotNetFlowDebuggerBasicAuthUsername` value in the Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthPassword`           | This must be changed if you used a non-default `FlowDebuggerBasicAuthPassword` when [installing the Flow Debugger Service][Configure Debugger Installation Script]; if so, this value must be configured to the one used. It can be [{{% ctx %}} Encrypted][CORTEX Encrypted].<br /><br />This will set the `DotNetFlowDebuggerBasicAuthPassword` value in the Gateway web.config.|
    |`DotNetFlowDebuggerUsingSelfSignedCertificates` | Configure the value as `$false` if you are using valid CA certificates to secure the site containing Gateway and Flow Debugger Service, `$true` if using self-signed certificates.<br /><br />This will set the `DotNetFlowDebuggerUsingSelfSignedCertificates` value in the Gateway web.config.|
    |`Test`                                        | This does not need to be changed, it will be set at a later stage. |
    |`AcceptEULA`                                   | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                   | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Install.Gateway.ps1`.

### Test Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.9 - Web App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.9 - Web App Server Install Scripts"
    ```
1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.Gateway.ps1 -Test
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInnovationInstallScriptName>.ps1 -Test -AcceptEULA
    ```

1. Run the PowerShell command to test the configuration.
    In the event of any errors, there will be an error message displayed at the end of the output with a line confirming the Error Count.

### Run Installation Script

1. Ensure the Gateway application pool is stopped:
    1. Open Internet Information Service (IIS) Manager.
    1. In the left pane, expand the server node.
    1. Click `Application Pools` to display a list of the Application Pools.
    1. Right-click the `Cortex Gateway` application pool and select `Stop`.

    {{% alert title="Note" %}}Failure to stop the application pool will result in a permissions error when installing Gateway.{{% /alert %}}

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.Gateway.ps1
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInnovationInstallScriptName>.ps1 -AcceptEULA
    ```

1. Run the PowerShell command to install Gateway.
    In the event of any errors, there will be an error message displayed at the end of the output with a line confirming the Error Count.
1. Ensure that the user identified in [Get Application Pool User][] has `Full control` access to the Gateway folder created in [Create New Web Application][]:
   1. Navigate to `C:\inetpub\wwwroot\Cortex\`.
   1. Right-click the `Gateway` folder and click `Properties`.
   1. In the `Gateway Properties` dialog, click the `Security` tab.
   1. Click the user identified in [Get Application Pool User][] within the `Group or user names` section.
   1. In the `Permissions` section, ensure the user has `Full control` checked. If not:
      1. Click the `Edit...` button.
      1. Select the user identified in [Get Application Pool User][] within the `Group or user names` section.
      1. In the `Permissions` section, check `Full control`.
      1. Click `OK`, then wait for `Windows Security` to update the security information to the folder.
      1. Click `OK`.
1. Start the Gateway application pool:
    1. Open Internet Information Service (IIS) Manager.
    1. In the left pane, expand the server node.
    1. Click `Application Pools` to display a list of the Application Pools.
    1. Right-click the `Cortex Gateway` application pool and select `Start`.
1. Once the application pool has been started, the site will be available on `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.
    {{% alert title="Note" %}} If the application pool does not stay started, ensure that the user it runs as has `Log on as a service` and `Log on as a batch job` permissions or belongs to a group that has those permissions.{{% /alert %}}

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to perform further actions in future, such as troubleshooting, certificate rollover, uninstallation, reinstallation and updates.

## Next Steps?

1. [Setup Gateway][]

[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Create Self-Signed Certificates]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.CreateSelfSignedCertificates" >}}
[Setup Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.SetupGateway" >}}
[Try it out]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.TryItOut" >}}
[Configure Firewalls]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.ConfigureFirewalls" >}}
[SSL Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Configure Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureInstallationScript" >}}
[Configure Web Site]: {{< ref "#configure-web-site" >}}
[Create Web Site]: {{< ref "#create-web-site" >}}
[Create New Web Application]: {{< ref "#create-new-web-application" >}}
[Get Application Pool User]: {{< ref "#get-application-pool-user-1" >}}
[Install Certificate]: {{< ref "#install-certificate" >}}
[Configure Debugger Installation Script]: {{< ref "#configure-installation-script" >}}
[Install Application Servers and Load Balancer]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Install Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.InstallGateway" >}}
[Licensing Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.LicensingRequirements" >}}
[CORTEX Encrypted]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[URL Rewrite]: {{< url path="IIS.Downloads.UrlRewrite-2_1" >}}
[NET Framework 471]: {{< url path="MSDotNet.Framework471.MainDoc" >}}
[Microsoft Web Deploy]: {{< url path="MSDownload.WebDeploy" >}}
[C++ Redistributable]: {{< url path="MSDownload.CPlusPlusRedistributable.2013" >}}
