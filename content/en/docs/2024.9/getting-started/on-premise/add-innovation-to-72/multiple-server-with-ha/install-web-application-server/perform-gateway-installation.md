---
title: "Upgrade Gateway"
linkTitle: "Upgrade Gateway"
description: "Information about upgrading v7.2 {{% ctx %}} Gateway to include Innovation."
weight: 30
---

# {{% param title %}}

This guide describes how to upgrade {{% ctx %}} Gateway on v7.2 to include Innovation. Please ensure that the [Flow Debugger installation][] has been completed before starting this installation.

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
    -ServiceFabricApiGatewayBasicAuthPassword '#_065077199197085!212123173135087074174142102155007175102029143220132038175026114248243207204119030125106032237087162060168108135168241247037070081~187087056217118!069132229129134129097089241180163#' `
    -DotNetFlowDebuggerEndpoint "https://server.domain.com:8722/api/" `
    -DotNetFlowDebuggerBasicAuthUsername "BasicAuthUser" `
    -DotNetFlowDebuggerBasicAuthPassword '#_065077199197085!212123173135087074174142102155007175102029143220132038175026114248243207204119030125106032237087162060168108135168241247037070081~187087056217118!069132229129134129097089241180163#' `
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
    |`FeatureFlags`                                  | Replace `InnovationId` with the {{% ctx %}} Innovation feature identifier, which should have been provided by {{% ctx %}} when fulfilling the [Licensing Requirements][], if it wasn't it should be requested using [{{% ctx %}} Service Portal][CORTEX Service Portal].<br /><br />This will set the `FeatureFlags` value in the Gateway web.config.|
    |`ServiceFabricApiGatewayEndpoint`               | Replace `server.domain.com` with the fully qualified domain name of the Load Balancer Server. The port should be specified if it is not the default HTTPS port (443), and there must be a trailing slash, e.g. `https://server.domain.com/` or `https://server.domain.com:8722/`.<br /><br />This will set the `ServiceFabricApiGatewayEndpoint` value in the {{% ctx %}} Gateway web.config.|
    |`ServiceFabricUsingSelfSignedCertificates`      | Configure the value as `$false` if you used valid CA certificates when [installing the Application Servers][Configure Installation Script], `$true` if you used self-signed certificates.<br /><br />This will set the `ServiceFabricUsingSelfSignedCertificates` value in the {{% ctx %}} Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthUsername`      | This must be changed if you used a non-default `ApiGatewayBasicAuthUsername` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used.<br /><br />This will overwrite the `ServiceFabricApiGatewayBasicAuthUsername` value in the {{% ctx %}} Gateway web.config.{{< alert type="note" title="Note" >}} This parameter should be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`ServiceFabricApiGatewayBasicAuthPassword`      | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used.<br /><br />This will overwrite the `ServiceFabricApiGatewayBasicAuthPassword` value in the {{% ctx %}} Gateway web.config.{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`DotNetFlowDebuggerEndpoint`                    | Replace `server.domain.com` with the fully qualified domain name of the Web Application Server.<br /><br />This will set the `DotNetFlowDebuggerEndpoint` value in the {{% ctx %}} Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthUsername`           | This must be changed if you used a non-default `ApiGatewayBasicAuthUsername` when [installing the Debugger on the Web Application Server][Flow Debugger installation]; if so, this value must be configured to the one used.<br /><br />This will overwrite the `DotNetFlowDebuggerBasicAuthUsername` value in the {{% ctx %}} Gateway web.config.{{< alert type="note" title="Note" >}} This parameter should be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`DotNetFlowDebuggerBasicAuthPassword`           | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Debugger on the Web Application Server][Flow Debugger installation]; if so, this value must be configured to the one used.<br /><br />This will overwrite the `DotNetFlowDebuggerBasicAuthPassword` value in the {{% ctx %}} Gateway web.config.{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`DotNetFlowDebuggerUsingSelfSignedCertificates` | Configure the value as `$false` if you are using valid CA certificates to secure the communication between {{% ctx %}} Gateway and the Debugger, `$true` if using self-signed certificates.<br /><br />This will set the `DotNetFlowDebuggerUsingSelfSignedCertificates` value in the {{% ctx %}} Gateway web.config.|
    |`GatewayApplicationPoolUsername`                | Replace `Domain\Username` with the user that is used to run the {{% ctx %}} Gateway application pool currently.|
    |`WebRootFolder`                                 | Replace this with the correct path for the Web Root Folder on the server. Typically this will be  `C:\inetpub\wwwroot`.|
    |`WebsitePort`                                   | Replace this with the port that you wish the website to use. Typically this will be `443`.|
    |`ImportCertificate`                             | This should be set to `$false` if the certificate is already imported.<br /><br />Note that prior to installation the certificate must be [assigned a friendly name][Assign Certificate Friendly Name].
    |`CertificateFilePath`                           | Replace this with the location and filename for the certificate to be imported.<br /><br />If `ImportCertificate` is set to `$false` this value can remain unchanged.|
    |`CertificateFriendlyName`                       | Replace this with the friendly name that you would like to be allocated to the certificate.<br /><br />If `ImportCertificate` is set to `$false` this must be [assigned][Assign Certificate Friendly Name] prior to running the installation and the Friendly Name used must be specified to allow the website to use the correct certificate.|
    |`ConfigureSiteRedirect`                         | If the site hosting the {{% ctx %}} Gateway web application is a newly created Cortex site or an existing site that doesn’t have its own content, it is recommended to redirect the site URL to the {{% ctx %}} Gateway web application URL. The default behaviour of the script is to create a URL Rewrite redirect rule to achieve this.<br /><br />To skip this rule creation change the value to `$false`.|
    |`ApplySecurityMeasures`                         | Change this from `$true` to `$false` if you do not require the Recommended [Security Best Practices][] to be implemented as part of the installation process.|
    |`UsingWindowsDefender`                          | Change this from `$false` to `$true` if you are using the Windows Defender firewall.<br /><br />If Windows Defender is not being used but an alternative firewall is, it must be configured to allow communication inbound via TCP on the port configured for HTTPS (usually 443).|
    |`AcceptEULA`                                    | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                      | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Install.Gateway.ps1`.

### Upgrade {{% ctx %}} Gateway

1. Open a Windows PowerShell (x64) window as administrator.
1. Type and run the following command to temporarily modify the PowerShell Execution Policy:

    ```powershell
    Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
    ```

    {{< alert title="Note">}}This is a temporary change and will only affect the current PowerShell window.{{< /alert >}}

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

1. Run the PowerShell command to install {{% ctx %}} Gateway.
1. If `ImportCertificate` is set to $true, and the file is of type `.pfx`, a prompt will appear for the certificate password. This should be entered, and then hit `Enter`.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the installation.

    If the errors do not give any instructions on how to rectify, please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for further assistance.

1. Once the PowerShell script execution has completed, a prompt will appear to restart the machine.  You can choose to restart now (`N`) or later (`L`).
{{< alert type="note" title="Note" >}} It is recommended to choose to restart later after the final step of this section has completed to ensure that no issues occur.{{< /alert >}}
1. In a browser, navigate to the {{% ctx %}} Gateway website, available at `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway` and wait for the login page to load. This may take a few minutes.

### Grant additional folder permissions to the {{% ctx %}} Gateway Application Pool User

{{< section "/install-web-application-server/add-innovation-to-7.2/grant-gateway-user-additional-folder-permissions.md">}}

# Preserve installation files

{{< section "/preserve-installation-files.md">}}

## Next Steps?

1. [Try it out][]

[Assign Certificate Friendly Name]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.AssignCertificateFriendlyNameNew" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Encryption Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.EncryptionRequirements" >}}
[Configure Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureInstallationScript" >}}
[CORTEX Encrypted]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Flow Debugger installation]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.DebuggerInstallation" >}}
[Licensing Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.LicensingRequirements" >}}
[Security Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Try it out]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.TryItOut" >}}
