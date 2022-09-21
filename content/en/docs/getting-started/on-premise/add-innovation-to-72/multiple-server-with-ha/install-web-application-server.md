---
title: "Upgrade v7.2 Gateway to Include Innovation"
linkTitle: "Upgrade v7.2 Gateway to Include Innovation"
description: "Information about upgrading v7.2 Gateway with Innovation functionality."
weight: 40
---

# {{< param title >}}

This guide describes how to upgrade Gateway on v7.2 to include Innovation. Please ensure that [Install Application Servers and Load Balancer][] has been completed before starting this installation. These steps assume that the v7.2 version of Gateway and its prerequisites have already been installed.

The steps to add Innovation functionality to v7.2 are:
1. Install Flow Debugger Service
1. Upgrade Gateway

## Extract Installation Artefacts

1. We recommend that the Flow Debugger Service and Gateway are installed on the same Web Application Server. Copy the following artefacts to a folder on the machine (the version numbers may differ):
   * Cortex Innovation 2022.6 - Block Packages.zip
   * Cortex Innovation 2022.6 - Gateway.zip
   * Cortex Innovation 2022.6 - Flow Debugger Service.zip
   * Cortex Innovation 2022.6 - Web App Server Install Scripts.zip

1. Extract the `Cortex Innovation 2022.6 - Web App Server Install Scripts.zip` zip file to a folder with the same name.

## Install Prerequisites

### Licensing

Ensure that a valid Cortex licence file named `Cortex.lic` exists on the Web Application server, in the location `%ProgramData%\Cortex\Licences`. If it does not, follow the instructions located at [Licensing Requirements][].

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
    |`FlowDebuggerServicePath`                     | Configure this value with the location of the Flow Debugger Service zip file on the Web Application Server. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the Web Application Server. |
    |`FlowDebuggerBasicAuthUserName`               | Configure this value with the username that will be used for Basic Authentication when Gateway makes HTTPS requests to the Flow Debugger Service. <br /><br />For security reasons it is recommended that the default value `BasicAuthUser` should be changed.<br /><br />Currently only Basic Authentication using a single user is supported, OAuth2 will be supported in a future release.<br /><br />This value will be needed [later, when upgrading Gateway][Install Gateway]. |
    |`FlowDebuggerBasicAuthPwd`                     | Configure this value with the password that will be used for Basic Authentication when Gateway makes HTTPS requests to the Flow Debugger Service. <br /><br />This password should be [Cortex Encrypted][]. For security reasons it is recommended that the default value `ADA9883B11BD4CDC908B8131B57944A4` should be changed.<br /><br />This value will be needed [later, when upgrading Gateway][Install Gateway].|
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

## Upgrade Gateway

### Configure Installation Script

1. In the `Cortex Innovation 2022.6 - Web App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.Gateway.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Install.Gateway.ps1 `
    -GatewayPackagePath "C:\Install\Cortex Innovation 2022.6 - Gateway.zip" `
    -GatewayApplicationIISPath "Cortex\gateway" `
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
    |`GatewayPackagePath`                            | Configure this value with the location of the `Cortex Innovation 2022.6 - Gateway.zip` file on the installation server. |
    |`GatewayApplicationIISPath`                     | Change to the correct `Site Name/Application` if either was modified from the defaults (`Cortex/gateway`) when creating the website or application. |
    |`FeatureFlags`                                  | Replace `InnovationId` with the Cortex Innovation feature identifier, which should have been provided by Cortex when fulfilling the [Licensing Requirements][], if it wasn't it should be requested using [Cortex Service Portal][].<br /><br />This will overwrite the `FeatureFlags` value in the Gateway web.config.|
    |`ServiceFabricApiGatewayEndpoint`               | Replace `server.domain.com` with the fully qualified domain name of the Load Balancer Server. The port should be specified if it is not the default HTTPS port (443), and there must be a trailing slash, e.g. `https://server.domain.com/` or `https://server.domain.com:8722/`.<br /><br />This will overwrite the `ServiceFabricApiGatewayEndpoint` value in the Gateway web.config.|
    |`ServiceFabricUsingSelfSignedCertificates`      | Configure the value as `$false` if you used valid CA certificates when [installing the Application Servers][Configure Installation Script], `$true` if you used self-signed certificates.<br /><br />This will overwrite the `ServiceFabricUsingSelfSignedCertificates` value in the Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthUsername`      | This must be changed if you used a non-default `ApiGatewayBasicAuthUserName` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used.<br /><br />This will overwrite the `ServiceFabricApiGatewayBasicAuthUsername` value in the Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthPassword`      | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used. It can be [Cortex Encrypted][].<br /><br />This will overwrite the `ServiceFabricApiGatewayBasicAuthPassword` value in the Gateway web.config.|
    |`DotNetFlowDebuggerEndpoint`                    | Replace `server.domain.com` with the fully qualified domain name of the Web Application Server.<br /><br />This will overwrite the `DotNetFlowDebuggerEndpoint` value in the Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthUsername`           | This must be changed if you used a non-default `FlowDebuggerBasicAuthUserName` when [installing the Flow Debugger Service][Configure Debugger Installation Script]; if so, this value must be configured to the one used.<br /><br />This will overwrite the `DotNetFlowDebuggerBasicAuthUsername` value in the Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthPassword`           | This must be changed if you used a non-default `FlowDebuggerBasicAuthPassword` when [installing the Flow Debugger Service][Configure Debugger Installation Script]; if so, this value must be configured to the one used. It can be [Cortex Encrypted][].<br /><br />This will overwrite the `DotNetFlowDebuggerBasicAuthPassword` value in the Gateway web.config.|
    |`DotNetFlowDebuggerUsingSelfSignedCertificates` | Configure the value as `$false` if you are using valid CA certificates to secure the site containing Gateway and Flow Debugger Service, `$true` if using self-signed certificates.<br /><br />This will overwrite the `DotNetFlowDebuggerUsingSelfSignedCertificates` value in the Gateway web.config.|
    |`Test`                                          | This does not need to be changed, it will be set at a later stage. |
    |`AcceptEULA`                                    | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                      | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Install.Gateway.ps1`.

### Test Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - Web App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.6 - Web App Server Install Scripts"
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
1. Start the Gateway application pool:
    1. Open Internet Information Service (IIS) Manager.
    1. In the left pane, expand the server node.
    1. Click `Application Pools` to display a list of the Application Pools.
    1. Right-click the `Cortex Gateway` application pool and select `Start`.
1. Once the application pool has been started, the site will be available on `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.
    {{% alert title="Note" %}} If the application pool does not stay started, ensure that the user it runs as has `Log on as a service` and `Log on as a batch job` permissions or belongs to a group that has those permissions.{{% /alert %}}

## Next Steps?
1. [Try it out][]

[Try it out]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.TryItOut" >}}
[Configure Installation Script]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureInstallationScript" >}}
[Get Application Pool User]: {{< ref "#get-application-pool-user" >}}
[Install Certificate]: {{< ref "#install-certificate" >}}
[Configure Debugger Installation Script]: {{< ref "#configure-installation-script" >}}
[Install Application Servers and Load Balancer]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Install Gateway]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.InstallGateway" >}}
[Licensing Requirements]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.LicensingRequirements" >}}
[Cortex Encrypted]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[Cortex Service Portal]: {{< url "Cortex.ServicePortal.MainDoc" >}}
[URL Rewrite]: {{< url "IIS.Downloads.UrlRewrite-2_1" >}}
[NET Framework 471]: {{< url "MSDotNet.Framework471.MainDoc" >}}
[Microsoft Web Deploy]: {{< url "MSDownload.WebDeploy" >}}
[C++ Redistributable]: {{< url "MSDownload.CPlusPlusRedistributable.2013" >}}
[Eula]: {{< url "Cortex.Website.Eula.MainDoc" >}}