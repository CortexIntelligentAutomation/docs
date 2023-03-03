---
title: "Install the Web Application Server"
linkTitle: "Install Web Application Server"
description: "Information about installing the Web Application Server."
weight: 40
---

# {{% param title %}}

This guide describes how to install the Web Application Server. Please ensure that [Install Application Servers and Load Balancer][] has been completed before starting this installation.

## Make Installation Artefacts Available

1. We recommend that the Flow Debugger Service and Gateway are installed on the same Web Application Server. Copy the following artefacts to a folder on the machine:
   * Cortex Innovation {{< version >}} - Block Packages.zip
   * Cortex Innovation {{< version >}} - Gateway.zip
   * Cortex Innovation {{< version >}} - Flow Debugger Service.zip
   * Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip

2. Extract the `Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip` zip file to a folder with the same name.

## Install Prerequisites

### Licensing

Ensure that a valid Cortex licence file named `Cortex.lic` exists on the Web Application server, in the location `%ProgramData%\Cortex\Licences`. If it does not, follow the instructions located at [Licensing Requirements][].

### Install SQL Server or SQL Express

1. Use one of the following installation guides to install SQL Server or SQL Server Express:
    * <a href="/pdfs/Cortex Innovation - SQL Server 2019 Installation Guide.pdf">Cortex Innovation - SQL Server 2019 Installation Guide</a>
    * <a href="/pdfs/Cortex Innovation - SQL Server 2016 Installation Guide.pdf">Cortex Innovation - SQL Server 2016 Installation Guide</a>
    * <a href="/pdfs/Cortex Innovation - SQL Server 2016 Express Installation Guide.pdf">Cortex Innovation - SQL Server 2016 Express Installation Guide</a>

### Certificate Configuration

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

1. In the `Cortex Innovation {{< version >}} - Web App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.FlowDebuggerService.ps1` script and open it with a text editor.

1. Choose the tab below that matches the configuration for this installation, then update the script to match, changing the parameters according to the details given below:

    {{< tabpane lang="powershell" >}}
        {{< tab header="CA Certs">}}
.\Cortex.Install.FlowDebuggerService.ps1 `
    -FlowDebuggerServicePath "C:\Install\Cortex Innovation {{< version >}} - Flow Debugger Service.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation {{< version >}} - Block Packages.zip" `
    -FlowDebuggerBasicAuthUsername "BasicAuthUser" `
    -FlowDebuggerBasicAuthPassword "ADA9883B11BD4CDC908B8131B57944A4" `
    -Credential $AppPoolIdentity `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-flow-debugger-service-install-log.txt"
        {{< /tab >}}
        {{< tab header="Self-Signed Certs" >}}
.\Cortex.Install.FlowDebuggerService.ps1 `
    -FlowDebuggerServicePath "C:\Install\Cortex Innovation {{< version >}} - Flow Debugger Service.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation {{< version >}} - Block Packages.zip" `
    -FlowDebuggerBasicAuthUsername "BasicAuthUser" `
    -FlowDebuggerBasicAuthPassword "ADA9883B11BD4CDC908B8131B57944A4" `
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
    |`FlowDebuggerBasicAuthUsername`               | Configure this value with the username that will be used for Basic Authentication when Gateway makes HTTPS requests to the Flow Debugger Service. <br /><br />For security reasons it is recommended that the default value `BasicAuthUser` should be changed.<br /><br />Currently only Basic Authentication using a single user is supported, OAuth2 will be supported in a future release.<br /><br />This value will be needed [later, when installing Gateway][Install Gateway]. |
    |`FlowDebuggerBasicAuthPassword`                     | Configure this value with the password that will be used for Basic Authentication when Gateway makes HTTPS requests to the Flow Debugger Service. <br /><br />This password should be [Cortex Encrypted][]. For security reasons it is recommended that the default value `ADA9883B11BD4CDC908B8131B57944A4` should be changed.<br /><br />This value will be needed [later, when installing Gateway][Install Gateway].|
    |`UseSelfSignedCertificates`                    | Enables Flow Debugger Service to communicate with Gateway using generated Self-Signed Certificates rather than CA Certificates.  <br /><br /> Not recommended for production use.  |
    |`Credential`                                  | The credentials of the user that will be used to run the `Debugger` application pool in IIS. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`AcceptEULA`                                   | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                   | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Install.FlowDebuggerService.ps1`.

### Run Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - Web App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - Web App Server Install Scripts"
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

### Configure Installation Script

1. In the `Cortex Innovation {{< version >}} - Web App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.Gateway.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Install.Gateway.ps1 `
    -GatewayPackagePath "C:\Install\Cortex Innovation {{< version >}} - Gateway.zip" `
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
    -GatewayApplicationPoolUsername "Domain\Username" `
    -WebRootFolder "C:\inetpub\wwwroot" `
    -WebsitePort "443" `
    -ImportCertificate $true `
    -CertificateFilePath "C:\Install\Certificate.pfx" `
    -CertificateFriendlyName "CertificateName" `
    -ConfigureHttpRedirect $true `
    -ApplySecurityMeasures $true `
    -UsingWindowsDefender $false `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-gateway-install-log.txt"
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`GatewayPackagePath`                            | Configure this value with the location of the `Cortex Innovation {{< version >}} - Gateway.zip` file on the installation server. |
    |`ModelDBContextConnectionString`                | If SQL Server was installed as the default instance, change the `Data Source`in the connection string to `localhost` or, if it was installed on another machine, change it to the machine name.<br /><br />If SQL Server was installed as a named instance, change it to `.\{instanceName}` replacing `{instanceName}` with the name of the instance or, if SQL Server was installed on a different machine, change it to `{machineName}\{instanceName}` replacing `{machineName}` with the machine name and `{instanceName}` with the name of the instance. <br /><br />This will set the `ModelDBContextConnectionString` value in the Gateway web.config.|
    |`AuthContextConnectionString`                   |  If SQL Server was installed as the default instance, change the `Data Source`in the connection string to `localhost` or, if it was installed on another machine, change it to the machine name.<br /><br />If SQL Server was installed as a named instance, change it to `.\{instanceName}` replacing `{instanceName}` with the name of the instance or, if SQL Server was installed on a different machine, change it to `{machineName}\{instanceName}` replacing `{machineName}` with the machine name and `{instanceName}` with the name of the instance. <br /><br />This will set the `AuthContextConnectionString` value in the Gateway web.config. |
    |`SignalRContextConnectionString`                |  If SQL Server was installed as the default instance, change the `Data Source`in the connection string to `localhost` or, if it was installed on another machine, change it to the machine name.<br /><br />If SQL Server was installed as a named instance, change it to `.\{instanceName}` replacing `{instanceName}` with the name of the instance or, if SQL Server was installed on a different machine, change it to `{machineName}\{instanceName}` replacing `{machineName}` with the machine name and `{instanceName}` with the name of the instance. <br /><br />This will set the `SignalRContextConnectionString` value in the Gateway web.config. |
    |`FeatureFlags`                                  | Replace `InnovationId` with the Cortex Innovation feature identifier, which should have been provided by Cortex when fulfilling the [Licensing Requirements][], if it wasn't it should be requested using [Cortex Service Portal][].<br /><br />This will set the `FeatureFlags` value in the Gateway web.config.|
    |`ServiceFabricApiGatewayEndpoint`               | Replace `server.domain.com` with the fully qualified domain name of the Load Balancer Server. The port should be specified if it is not the default HTTPS port (443), and there must be a trailing slash, e.g. `https://server.domain.com/` or `https://server.domain.com:8722/`.<br /><br />This will set the `ServiceFabricApiGatewayEndpoint` value in the Gateway web.config.|
    |`ServiceFabricUsingSelfSignedCertificates`      | Configure the value as `$false` if you used valid CA certificates when [installing the Application Servers][Configure Installation Script], `$true` if you used self-signed certificates.<br /><br />This will set the `ServiceFabricUsingSelfSignedCertificates` value in the Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthUsername`      | This must be changed if you used a non-default `ApiGatewayBasicAuthUsername` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used.<br /><br />This will set the `ServiceFabricApiGatewayBasicAuthUsername` value in the Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthPassword`      | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used. It can be [Cortex Encrypted][].<br /><br />This will set the `ServiceFabricApiGatewayBasicAuthPassword` value in the Gateway web.config.|
    |`DotNetFlowDebuggerEndpoint`                    | Replace `server.domain.com` with the fully qualified domain name of the Web Application Server.<br /><br />This will set the `DotNetFlowDebuggerEndpoint` value in the Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthUsername`           | This must be changed if you used a non-default `FlowDebuggerBasicAuthUsername` when [installing the Flow Debugger Service][Configure Debugger Installation Script]; if so, this value must be configured to the one used.<br /><br />This will set the `DotNetFlowDebuggerBasicAuthUsername` value in the Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthPassword`           | This must be changed if you used a non-default `FlowDebuggerBasicAuthPassword` when [installing the Flow Debugger Service][Configure Debugger Installation Script]; if so, this value must be configured to the one used. It can be [Cortex Encrypted][].<br /><br />This will set the `DotNetFlowDebuggerBasicAuthPassword` value in the Gateway web.config.|
    |`DotNetFlowDebuggerUsingSelfSignedCertificates` | Configure the value as `$false` if you are using valid CA certificates to secure the site containing Gateway and Flow Debugger Service, `$true` if using self-signed certificates.<br /><br />This will set the `DotNetFlowDebuggerUsingSelfSignedCertificates` value in the Gateway web.config.|
    |`GatewayApplicationPoolUsername`                | Replace `Domain\Username` with the user that should be used to run the Cortex Gateway application pool.|
    |`WebRootFolder`                                 | Replace this with the correct path for Web Root Folder on the server. Typically this will be  `C:\inetpub\wwwroot`.|
    |`WebsitePort`                                   | Replace this with the port that you wish the website to use.|
    |`ImportCertificate`                             | Change this from `$true` to `$false` if you do not require the certificate to be imported as part of the installation process.<br /><br />Note that if this is changed to `$false` the certificate must be [imported][Certificate Configuration] prior to installation and assigned a friendly name
    |`CertificateFilePath`                           | "C:\Install\Certificate.pfx" `
    |`CertificateFriendlyName`                       | "CortexCertificate" `
    |`ConfigureHttpRedirect`                         | $true `
    |`ApplySecurityMeasures`                         | $true `
    |`UsingWindowsDefender`                          | $false `
    |`AcceptEULA`                                    | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                      | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Install.Gateway.ps1`.

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
1. Once the PowerShell script execution has completed, the site will be available on `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to perform further actions in future, such as troubleshooting, certificate rollover, uninstallation, reinstallation and updates.

## Next Steps?

1. [Setup Gateway][]

[Eula]: {{< url "Cortex.Website.Eula.MainDoc" >}}
[Create Self-Signed Certificates]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.CreateSelfSignedCertificates" >}}
[Setup Gateway]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.SetupGateway" >}}
[Configure Installation Script]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureInstallationScript" >}}
[Configure Debugger Installation Script]: {{< ref "#configure-installation-script" >}}
[Install Application Servers and Load Balancer]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Install Gateway]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.InstallGateway" >}}
[Licensing Requirements]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.LicensingRequirements" >}}
[Cortex Encrypted]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[Cortex Service Portal]: {{< url "Cortex.ServicePortal.MainDoc" >}}
