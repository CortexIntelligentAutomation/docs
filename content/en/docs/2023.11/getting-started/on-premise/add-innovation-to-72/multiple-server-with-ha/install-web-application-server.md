---
title: "Upgrade v7.2 Gateway to Include Innovation"
linkTitle: "Upgrade v7.2 Gateway to Include Innovation"
description: "Information about upgrading v7.2 Gateway with Innovation functionality."
weight: 40
---

# {{< param title >}}

This guide describes how to upgrade Gateway on v7.2 to include Innovation. Please ensure that [Install Application Servers and Load Balancer][] has been completed before starting this installation. These steps assume that the v7.2 version of Gateway and its prerequisites have already been installed.

The steps to add Innovation functionality to 7.2 are:

1. Install local instance of the Application Server components
1. Upgrade {{% ctx %}} Gateway

## Make Installation Artefacts Available

{{% alert title="Note" %}}
We recommend that the single-node Service Fabric instance, used by {{% ctx %}} Gateway as a Debugger instance, and {{% ctx %}} Gateway are installed on the same Web Application Server.
{{% /alert %}}

1. Copy the following artefacts to a folder on the machine:

   * Cortex Innovation {{< version >}} - Block Packages.zip
   * Cortex Innovation {{< version >}} - Gateway.zip
   * Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip

1. Extract the `Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip` zip file to a folder with the same name.

## Install Prerequisites

### Licensing

Ensure that a valid {{% ctx %}} licence file named `Cortex.lic` exists on the Web Application server, in the location `%ProgramData%\Cortex\Licences`. If it does not, follow the instructions located at [Licensing Requirements][].

### Grant folder permissions to the {{% ctx %}} Gateway Application Pool User

The following folders require `Modify` permission to allow creating the `NuGet` folders and its `NuGet.Config` file within:

* `C:\Windows\System32\config\systemprofile\AppData\Roaming`
* `C:\Windows\SysWOW64\config\systemprofile\AppData\Roaming`

For each folder, perform the following steps:

1. Navigate to the `AppData` folder.
1. Right-click on the `Roaming` folder and click `Properties`.
1. In the dialog, click the `Security` tab.
1. Check the `Application Pool` user for Gateway is listed in the `Group or user names` and has `Modify` permissions.
1. If the `Application Pool` user for Gateway is not listed:
   1. Click the `Edit...` button.
   1. Click the `Add...` button.
   1. Enter the username of the application pool user and click `OK`.
   1. In the `Permissions` section at the bottom, check `Modify`.
   1. Click `OK`.
   1. Click `Yes` to change the permission to the folder.
1. If the `Application Pool` user for Gateway is listed but does not have permissions:
   1. Click the `Edit...` button.
   1. Select the `Application Pool` user.
   1. Check `Modify`.
   1. Click `OK`.
   1. Click `Yes` to change the permission to the folder.

### Certificate Requirements

In order to ensure that the correct certificate is used during the upgrade of {{% ctx %}} Gateway, it is necessary to [assign a friendly name][Assign Certificate Friendly Name] to the certificate that is currently being used for {{% ctx %}} Gateway. It is important to set the `ImportCertificate` parameter to `$false` when [configuring the {{% ctx %}} Gateway installation script][Configure CORTEX Gateway Installation Script].

#### Assign Certificate Friendly Name

A Friendly Name should be assigned to the certificate being used for the Cortex Website. This will be used in the [Configure {{% ctx %}} Gateway Installation Script][Configure CORTEX Gateway Installation Script] to assign the correct certificate to the site:

1. Click the Windows button (`Start`).
1. Type `certlm.msc` and press `Enter` to open the Certificate Manager dialog.
1. Expand `Personal` and select `Certificates`.
1. You should see your certificate in this store.
1. Right-click on the certificate and select `Properties`.
1. On the `General` tab in the `Friendly Name` text box, enter a name to be used for the certificate.
1. Click `OK`.

## Perform Debugger Installation

{{% alert title="Important" color="warning" %}}
{{< ctx >}} Gateway requires a local instance of the Application Server components to enable the debugging of flows.
{{% /alert %}}

### Install Debugger

To install the components required for debugging, perform the steps detailed in [Install Application Server][] on the Web Application Server.

## Perform Gateway Installation

### Configure {{% ctx %}} Gateway Installation Script

1. In the `Cortex Innovation {{< version >}} - Web App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.Gateway.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Install.Gateway.ps1 `
    -GatewayPackagePath "C:\Install\Cortex Innovation {{< version >}} - Gateway.zip" `
    -FeatureFlags "InnovationId" `
    -ServiceFabricApiGatewayEndpoint "https://server.domain.com/" `
    -ServiceFabricUsingSelfSignedCertificates $false `
    -ServiceFabricApiGatewayBasicAuthUsername "BasicAuthUser" `
    -ServiceFabricApiGatewayBasicAuthPassword "ADA9883B11BD4CDC908B8131B57944A4" `
    -DotNetFlowDebuggerEndpoint "https://server.domain.com:8722/api/" `
    -DotNetFlowDebuggerBasicAuthUsername "BasicAuthUser" `
    -DotNetFlowDebuggerBasicAuthPassword "ADA9883B11BD4CDC908B8131B57944A4" `
    -DotNetFlowDebuggerUsingSelfSignedCertificates $false `
    -GatewayApplicationPoolUsername "Domain\Username" `
    -WebRootFolder "C:\inetpub\wwwroot" `
    -WebsitePort "443" `
    -ImportCertificate $false `
    -CertificateFilePath "C:\Install\Certificate.pfx" `
    -CertificateFriendlyName "CertificateName" `
    -ConfigureSiteRedirect $true `
    -ApplySecurityMeasures $true `
    -UsingWindowsDefender $false `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-gateway-install-log.txt"
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`GatewayPackagePath`                            | Configure this value with the location of the `Cortex Innovation {{< version >}} - Gateway.zip` file on the installation server. |
    |`FeatureFlags`                                  | Replace `InnovationId` with the {{% ctx %}} Innovation feature identifier, which should have been provided by {{% ctx %}} when fulfilling the [Licensing Requirements][], if it wasn't it should be requested using [{{% ctx %}} Service Portal][CORTEX Service Portal].<br /><br />This will overwrite the `FeatureFlags` value in the Gateway web.config.|
    |`ServiceFabricApiGatewayEndpoint`               | Replace `server.domain.com` with the fully qualified domain name of the Load Balancer Server. The port should be specified if it is not the default HTTPS port (443), and there must be a trailing slash, e.g. `https://server.domain.com/` or `https://server.domain.com:8722/`.<br /><br />This will overwrite the `ServiceFabricApiGatewayEndpoint` value in the {{% ctx %}} Gateway web.config.|
    |`ServiceFabricUsingSelfSignedCertificates`      | Configure the value as `$false` if you used valid CA certificates when [installing the Application Servers][Configure Installation Script], `$true` if you used self-signed certificates.<br /><br />This will overwrite the `ServiceFabricUsingSelfSignedCertificates` value in the {{% ctx %}} Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthUsername`      | This must be changed if you used a non-default `ApiGatewayBasicAuthUsername` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used.<br /><br />This will overwrite the `ServiceFabricApiGatewayBasicAuthUsername` value in the {{% ctx %}} Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthPassword`      | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used. It can be [{{% ctx %}} Encrypted][CORTEX Encrypted].<br /><br />This will overwrite the `ServiceFabricApiGatewayBasicAuthPassword` value in the {{% ctx %}} Gateway web.config.|
    |`DotNetFlowDebuggerEndpoint`                    | Replace `server.domain.com` with the fully qualified domain name of the Web Application Server.<br /><br />This will overwrite the `DotNetFlowDebuggerEndpoint` value in the {{% ctx %}} Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthUsername`           | This must be changed if you used a non-default `ApiGatewayBasicAuthUsername` when [installing the Debugger on the Web Application Server][Install Application Server]; if so, this value must be configured to the one used.<br /><br />This will overwrite the `DotNetFlowDebuggerBasicAuthUsername` value in the {{% ctx %}} Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthPassword`           | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Debugger on the Web Application Server][Install Application Server]; if so, this value must be configured to the one used. It can be [{{% ctx %}} Encrypted][CORTEX Encrypted].<br /><br />This will overwrite the `DotNetFlowDebuggerBasicAuthPassword` value in the {{% ctx %}} Gateway web.config.|
    |`DotNetFlowDebuggerUsingSelfSignedCertificates` | Configure the value as `$false` if you are using valid CA certificates to secure the communication between {{% ctx %}} Gateway and the Debugger, `$true` if using self-signed certificates.<br /><br />This will overwrite the `DotNetFlowDebuggerUsingSelfSignedCertificates` value in the {{% ctx %}} Gateway web.config.|
    |`GatewayApplicationPoolUsername`                | Replace `Domain\Username` with the user that is used to run the {{% ctx %}} Gateway application pool currently.|
    |`WebRootFolder`                                 | Replace this with the correct path for the Web Root Folder on the server. Typically this will be  `C:\inetpub\wwwroot`.|
    |`WebsitePort`                                   | Replace this with the port that you wish the website to use. Typically this will be `443`.|
    |`ImportCertificate`                             | This should be set to `$false` if the certificate is already imported.<br /><br />Note that prior to installation the certificate must be [assigned a friendly name][Assign Certificate Friendly Name].
    |`CertificateFilePath`                           | Replace this with the location and filename for the certificate to be imported.<br /><br />If `ImportCertificate` is set to `$false` this value can remain unchanged.|
    |`CertificateFriendlyName`                       | Replace this with the friendly name that you would like to be allocated to the certificate.<br /><br />If `ImportCertificate` is set to `$false`, this must be [assigned][Assign Certificate Friendly Name] prior to running the installation and the Friendly Name used must be specified to allow the website to use the correct certificate.|
    |`ConfigureSiteRedirect`                         | If the site hosting the {{% ctx %}} Gateway web application is a newly created {{% ctx %}} site or an existing site that doesn’t have its own content, it is recommended to redirect the site URL to the {{% ctx %}} Gateway web application URL. The default behaviour of the script is to create a URL Rewrite redirect rule to achieve this.<br /><br />To skip this rule creation change the value to `$false`.|
    |`ApplySecurityMeasures`                         | Change this from `$true` to `$false` if you do not require the Recommended [Security Best Practices][] to be implemented as part of the installation process.|
    |`UsingWindowsDefender`                          | Change this from `$true` to `$false` if you are not using the Windows Defender firewall.<br /><br />If Windows Defender is not being used but an alterntive firewall is, it must be configured to allow communication inbound via TCP on the port configured for HTTPS (usually 443).|
    |`AcceptEULA`                                    | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                      | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Install.Gateway.ps1`.

### Upgrade {{% ctx %}} Gateway

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - Web App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - Web App Server Install Scripts"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.Gateway.ps1
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInnovationInstallScriptName>.ps1 -AcceptEULA
    ```

1. Run the PowerShell command to upgrade {{% ctx %}} Gateway.
1. If `ImportCertificate` is set to $true, and the file is of type `.pfx`, a prompt will appear for the certificate password. This should be entered, and then hit `Enter`.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the installation.

    If the errors do not give any instructions on how to rectify, please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for further assistance.

1. Once the PowerShell script execution has completed, a prompt will appear to restart the machine.  You can choose to restart now (`N`) or later (`L`).
1. The {{% ctx %}} Gateway website will now be available on `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to perform further actions in future, such as troubleshooting, certificate rollover, uninstallation, reinstallation and updates.

## Next Steps?

1. [Try it out][]

[Assign Certificate Friendly Name]: {{< ref "#assign-certificate-friendly-name" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Configure CORTEX Gateway Installation Script]: {{< ref "#configure-cortex-gateway-installation-script" >}}
[Configure Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureInstallationScript" >}}
[CORTEX Encrypted]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Install Application Servers and Load Balancer]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Licensing Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.LicensingRequirements" >}}
[Security Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Try it out]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.TryItOut" >}}
[Install Application Server]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.InstallApplicationServer" >}}