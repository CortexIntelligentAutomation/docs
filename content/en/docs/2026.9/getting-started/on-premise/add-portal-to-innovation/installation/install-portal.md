---
title: "Install Portal"
linkTitle: "Install Portal"
description: "Information about installing the {{% ctx %}} Portal."
weight: 10
---

# {{% param title %}}

This guide describes how to install the {{% ctx %}} Portal on the Web Application Server. Please ensure that the [Pre-Installation][] steps have been completed before starting this installation.

## Perform {{% ctx %}} Portal Installation

### Configure {{% ctx %}} Portal Installation Script

1. In the `Portal Application Server Scripts` folder, locate the `Cortex.Innovation.Install.Portal.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Install.Portal.ps1 `
    -PackagePath "C:\Install\Cortex Innovation 2026.9 - Portal" `
    -ServiceFabricApiGatewayEndpoint "https://server.domain.com:8722/" `
    -PortalApplicationPoolUsername "Domain\Username" `
    -WebRootFolder "C:\inetpub\wwwroot" `
    -SiteName "Cortex" `
    -ApplicationName "portal" `
    -WebsitePort "443" `
    -ImportCertificate $false `
    -CertificateFilePath "C:\Install\Certificate.pfx" `
    -CertificateFriendlyName "CortexServerCertificate" `
    -UsingWindowsDefender $false `
    -AcceptEULA:$AcceptEULA `
    *>&1 | Tee-Object -FilePath "cortex-portal-install-log.txt"
    ```

    | Name                              | Description |
    |-----------------------------------|-------------|
    |`PackagePath`                      | Configure this value with the location of the extracted `Cortex Innovation 2026.9 - Portal` folder on the installation server. That folder must directly contain `Cortex.Portal.Bff.dll`, `web.config`, and `wwwroot`. |
    |`ServiceFabricApiGatewayEndpoint`  | Replace `server.domain.com` with the fully qualified domain name of the server. The port should be specified as `8722` and there must be a trailing slash, e.g. `https://server.domain.com:8722/`.<br /><br />This will set the `Cortex:ApiGateway:BaseUrl` value in the portal `appsettings.json`. |
    |`PortalApplicationPoolUsername`    | Replace `Domain\Username` with the user that should be used to run the {{% ctx %}} Portal application pool. The password for this user is prompted when the application pool is created. |
    |`WebRootFolder`                    | Replace this with the correct path for the Web Root Folder on the server. Typically this will be `C:\inetpub\wwwroot`. |
    |`SiteName`                         | The IIS site name. The default is `Cortex`. When {{% ctx %}} Portal is installed on the same server as {{% ctx %}} Gateway, use the Gateway site name so both applications share one site. |
    |`ApplicationName`                  | The IIS sub-application name. The default is `portal`. The portal is then available under `/portal` on that site. |
    |`WebsitePort`                      | Replace this with the port that you wish the website to use when this script creates the site. Typically this will be `443`. This value is ignored when the site already exists. |
    |`ImportCertificate`                | Leave this as `$false` when the portal should use the certificate already assigned for {{% ctx %}} Gateway. See [Install the Web Application Server][]. Set this to `$true` only when this script should import a certificate.<br /><br />When this is `$true` and the file is of type `.pfx`, the script prompts for the certificate password. That password is not a parameter on this script. |
    |`CertificateFilePath`              | Replace this with the location and filename for the certificate to be imported.<br /><br />If `ImportCertificate` is set to `$false`, this value can remain unchanged. |
    |`CertificateFriendlyName`          | Replace this with the friendly name of the certificate. The sample uses `CortexServerCertificate`. When sharing the site certificate with {{% ctx %}} Gateway, use the same friendly name. |
    |`UsingWindowsDefender`             | Change this from `$false` to `$true` if you are using the Windows Defender firewall.<br /><br />If Windows Defender is not being used but an alternative firewall is, it must be configured to allow communication inbound via TCP on the port configured for HTTPS (usually 443). |
    |`AcceptEULA`                       | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                         | The filename that installation logs are written to. If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Install.Portal.ps1`.

### Install {{% ctx %}} Portal

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Portal Application Server Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Portal Application Server Scripts"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.Portal.ps1
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\Cortex.Innovation.Install.Portal.ps1 -AcceptEULA
    ```

1. Run the PowerShell command to install the {{% ctx %}} Portal.
1. If `ImportCertificate` is set to $true, and the file is of type `.pfx`, a prompt will appear for the certificate password. This should be entered, and then hit `Enter`.
1. A prompt will appear to enter the password for the user specified to run the {{% ctx %}} Portal application pool. This should be entered, and then hit `Enter`.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the installation.

    If the errors do not give any instructions on how to rectify, please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for further assistance.

## Preserve installation files

{{< section "/preserve-installation-files.md" >}}

## Next Steps?

1. [Post-Installation][]

[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Install the Web Application Server]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.InstallWebApplicationServerNew" >}}
[Post-Installation]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.PostInstallation" >}}
[Pre-Installation]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.PreInstallation" >}}
