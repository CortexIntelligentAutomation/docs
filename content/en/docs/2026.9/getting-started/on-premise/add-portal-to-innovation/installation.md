---
title: "Install Portal"
linkTitle: "Install Portal"
description: "Information about installing the {{% ctx %}} Portal."
weight: 40
---

# {{% param title %}}

This guide describes how to install the {{% ctx %}} Portal on the Web Application Server.

## Configure {{% ctx %}} Portal Installation Script

1. In `C:\Install\Portal Application Server Scripts`, open `Cortex.Innovation.Install.Portal.ps1` with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Install.Portal.ps1 `
    -PackagePath "C:\Install\cortex-portal" `
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

    | Name | Description |
    |------|-------------|
    |`PackagePath` | Configure this value with the folder where **Cortex Innovation 2026.9 - Portal.zip** was extracted. Typically this will be `C:\Install\cortex-portal`. That folder must directly contain `Cortex.Portal.Bff.dll`, `web.config`, and `wwwroot`. |
    |`ServiceFabricApiGatewayEndpoint` | Replace `server.domain.com` with the fully qualified domain name of the server. The port should be specified as `8722` and there must be a trailing slash, e.g. `https://server.domain.com:8722/`.<br /><br />This will set the `Cortex:ApiGateway:BaseUrl` value in the portal `appsettings.json`. |
    |`PortalApplicationPoolUsername` | Replace `Domain\Username` with the user that should be used to run the {{% ctx %}} Portal application pool. The password for this user is prompted when the application pool is created. |
    |`WebRootFolder` | Replace this with the correct path for the Web Root Folder on the server. Typically this will be `C:\inetpub\wwwroot`. |
    |`SiteName` | The IIS site name. The default is `Cortex`. When {{% ctx %}} Portal is installed on the same server as {{% ctx %}} Gateway, use the Gateway site name so both applications share one site. |
    |`ApplicationName` | The IIS sub-application name. The default is `portal`. The portal is then available under `/portal` on that site. |
    |`WebsitePort` | Replace this with the port that you wish the website to use when this script creates the site. Typically this will be `443`. This value is ignored when the site already exists. |
    |`ImportCertificate` | Leave this as `$false` when the portal should use the certificate already assigned for {{% ctx %}} Gateway. See [Install the Web Application Server][Install the Web Application Server]. Set this to `$true` only when this script should import a certificate.<br /><br />When this is `$true` and the file is a `.pfx`, the script prompts for the certificate password. That password is not a parameter on this script. |
    |`CertificateFilePath` | Replace this with the location and filename for the certificate to be imported. If `ImportCertificate` is `$false`, this value can remain unchanged. |
    |`CertificateFriendlyName` | Replace this with the friendly name of the certificate. The sample uses `CortexServerCertificate`. When sharing the site certificate with {{% ctx %}} Gateway, use the same friendly name. |
    |`UsingWindowsDefender` | Change this from `$false` to `$true` if you are using the Windows Defender firewall.<br /><br />If Windows Defender is not being used but an alternative firewall is, it must be configured to allow communication inbound via TCP on the port configured for HTTPS (usually 443). |
    |`AcceptEULA` | This does not need to be changed. The EULA is accepted when you run the script. |
    |`FilePath` | The filename that installation logs are written to. If this should be written to a different location than where the installation files are, specify a full path. The sample writes `cortex-portal-install-log.txt`. |

1. Save and close `Cortex.Innovation.Install.Portal.ps1`.

## Install {{% ctx %}} Portal

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate to the extracted scripts folder, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Portal Application Server Scripts"
    ```

1. Read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, run:

    ```powershell
    .\Cortex.Innovation.Install.Portal.ps1 -AcceptEULA
    ```

1. If `ImportCertificate` is set to `$true`, and the file is of type `.pfx`, a prompt will appear for the certificate password. Enter it, and then press `Enter`.
1. A prompt will appear to enter the password for the user specified to run the {{% ctx %}} Portal application pool. Enter it, and then press `Enter`.
1. Check that there have been no errors in the script. Errors appear in red in the console.

    If there are any errors, follow any instructions given within them and retry the installation.

    If the errors do not give any instructions on how to rectify them, contact [{{% ctx %}} Service Portal][CORTEX Service Portal].

1. In a browser, open the {{% ctx %}} Portal website, for example `https://localhost/portal`, and wait for the page to load. Confirm `https://localhost/portal/api/v1/health` returns successfully. If `ApplicationName` is not `portal`, use that name in both URLs.

[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Install the Web Application Server]: ../../install-innovation-only/single-server-without-ha/installation/install-web-application-server/
