---
title: "Install the Web Application Server"
linkTitle: "Install Web Application Server"
description: "Information about installing the Web Application Server."
weight: 40
---

# {{% param title %}}

This guide describes how to install the Web Application Server components on the server. Please ensure that [Install Application Server][] has been completed before starting this installation.

## Make Installation Artefacts Available

1. Copy the following artefacts to a folder on the machine:

   * Cortex Innovation {{< version >}} - Block Packages.zip
   * Cortex Innovation {{< version >}} - Gateway.zip
   * Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip

1. Extract the `Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip` zip file to a folder with the same name.

## Install Prerequisites

### Licensing

Ensure that a valid {{% ctx %}} licence file named `Cortex.lic` exists on the server, in the location `%ProgramData%\Cortex\Licences`. If it does not, follow the instructions located at [Licensing Requirements][].

### Get {{% ctx %}} Gateway Application Pool User

A domain user account is required for the {{% ctx %}} Gateway application pool and must be created prior to performing the installation below.

In line with best practices, this account should not be given administrator rights, nor should it be used for any purposes other than those specified for {{% ctx %}} Gateway.

### Grant folder permissions to the {{% ctx %}} Gateway Application Pool User

The following folders require `Modify` permission to allow creating the `NuGet` folders and its `NuGet.Config` file within:

* `C:\Windows\System32\config\systemprofile\AppData\Roaming`
* `C:\Windows\SysWOW64\config\systemprofile\AppData\Roaming`

For each folder, perform the following steps:

1. Navigate to the `AppData` folder.
1. Right-click on the `Roaming` folder and click `Properties`.
1. In the dialog, click the `Security` tab.
1. Check the `Application Pool` user that will be used for {{% ctx %}} Gateway is listed in the `Group or user names` and has `Modify` permissions.
1. If the `Application Pool` user that will be used for {{% ctx %}} Gateway is not listed:
   1. Click the `Edit...` button.
   1. Click the `Add...` button.
   1. Enter the username of the application pool user and click `OK`.
   1. In the `Permissions` section at the bottom, check `Modify`.
   1. Click `OK`.
   1. Click `Yes` to change the permission to the folder.
1. If the `Application Pool` user that will be used for {{% ctx %}} Gateway is listed but does not have permissions:
   1. Click the `Edit...` button.
   1. Select the `Application Pool` user.
   1. Check `Modify`.
   1. Click `OK`.
   1. Click `Yes` to change the permission to the folder.

### Certificate Requirements

{{% ctx %}} Gateway requires an X.509 SSL certificate to be installed on the server. The certificate must have the following properties:

* Enhanced Key Usage: `Server Authentication` and `Client Authentication`
* Subject Alternative Names (SAN): At minimum the FQDN of the server. It can also include NetBIOS Name, IP address, localhost, 127.0.0.1

If the user tries to navigate to an address not in the SAN list, then they will receive a certificate error.

{{% alert title="Important" color="warning" %}}
Certificates, wildcard certificates, auto-generated self-signed certificates and manually created self-signed certificates can be used. However, self-signed certificates are not recommended for production instances.
Details on how to create a self-signed certificate can be found at {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.CreateSelfSignedCertificates" title="Create Self-Signed Certificates" >}}.  
<br />
It is possible to reuse the certificate used when {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureInstallationScript" title="installing the Application Server" >}}; If doing so, you should {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.AssignCertificateFriendlyName" title="Assign a Certificate Friendly Name" >}} and set the `ImportCertificate` parameter to `$false` in {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureCortexGatewayInstallationScript" title="Configure CORTEX Gateway Installation Script" >}} to ensure use of the correct certificate and to prevent it from being overwritten.
{{% /alert %}}

#### Import Root Certificate

{{% alert title="Note" %}}This step is only required if using a self-signed certificate signed by your own Root Certificate e.g. OpenSSL. If this is not the case proceed to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ImportCertificateManually" title="Import Certificate Manually" >}} {{% /alert %}}

This step must be carried out prior to the installation otherwise the URL validation will fail. In order to import the Root Certificate, ensure that the file is in a known location on this server and complete the following steps:

1. Using Windows File Explorer navigate to the location of the Root Certificate file.
1. Double click on the Root Certificate file to import the certificate into the Windows Certificate Store. Perform the following steps:

    1. Select `Local Machine` then click `Next`.
    1. Click `Next`.
    1. Enter the Export Password which the certificate was generated with then click `Next`.
    1. Select `Place all certificates in the following store`.
    1. Click `Browse…`.
    1. Select `Trusted Root Certification Authorities`, click `OK` then click `Next`.
    1. Click `Finish`.
    1. [Import][Import Certificate Manually] the X.509 SSL certificate.

#### Import Certificate Manually

{{% alert title="Note" %}}The certificate can be imported automatically by setting the `ImportCertificate` parameter to `$true` in {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureCortexGatewayInstallationScript" title="Configure CORTEX Gateway Installation Script" >}}. If importing the certificate automatically proceed to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.PerformInstallation" title="Perform Installation" >}} <br /><br /> If the certificate has previously been imported you must {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.AssignCertificateFriendlyName" title="assign a friendly name" >}}.{{% /alert %}}

To import the certificate manually follow the below steps:

1. Locate the certificate file on the machine and right-click on the file.
1. Select `Install Certificate`.
1. Follow the Wizard and when prompted, ensure you import it into the `Local Machine` store and not `Current User`.
1. Assign the imported certificate a [friendly name][Assign Certificate Friendly Name].

#### Assign Certificate Friendly Name

Once the certificate has been imported, a `Friendly Name` should be assigned which will be used in the [Configure {{% ctx %}} Gateway Installation Script][Configure CORTEX Gateway Installation Script] to enable the installation script to identify the certificate to be used for the website:

1. Click the Windows button (`Start`).
1. Type `certlm.msc` and press `Enter` to open the Certificate Manager dialog.
1. Expand `Personal` and select `Certificates`.
1. You should see your certificate in this store.
1. Right-click on the certificate and select `Properties`.
1. On the `General` tab in the `Friendly Name` text box, enter a name to be used for the certificate.
1. Click `OK`.

## Perform Installation

### Configure {{% ctx %}} Gateway Installation Script

1. In the `Cortex Innovation {{< version >}} - Web App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.Gateway.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Install.Gateway.ps1 `
    -GatewayPackagePath "C:\Install\Cortex Innovation {{< version >}} - Gateway.zip" `
    -FeatureFlags "InnovationId" `
    -ServiceFabricApiGatewayEndpoint "https://server.domain.com:8722/" `
    -ServiceFabricUsingSelfSignedCertificates $false `
    -ServiceFabricApiGatewayBasicAuthUsername "BasicAuthUser" `
    -ServiceFabricApiGatewayBasicAuthPassword '#_065077199197085!212123173135087074174142102155007175102029143220132038175026114248243207204119030125106032237087162060168108135168241247037070081~187087056217118!069132229129134129097089241180163#' `
    -DotNetFlowDebuggerEndpoint 'https://server.domain.com:8722/api/' `
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

    {{% alert title="Important" color="warning" %}}Parameters required to be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}} must be encrypted on one of the servers specified in the {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.EncryptionRequirements" title="Encryption Requirements" >}} steps.{{% /alert %}}

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`GatewayPackagePath`                            | Configure this value with the location of the `Cortex Innovation {{< version >}} - Gateway.zip` file on the installation server. |
    |`FeatureFlags`                                  | Replace `InnovationId` with the {{% ctx %}} Innovation feature identifier, which should have been provided by {{% ctx %}} when fulfilling the [Licensing Requirements][], if it wasn't it should be requested using [{{% ctx %}} Service Portal][CORTEX Service Portal].<br /><br />This will set the `FeatureFlags` value in the {{% ctx %}} Gateway web.config.|
    |`ServiceFabricApiGatewayEndpoint`               | Replace `server.domain.com` with the fully qualified domain name of the server. The port should be specified as `8722` and there must be a trailing slash, e.g. `https://server.domain.com:8722/`.<br /><br />This will set the `ServiceFabricApiGatewayEndpoint` value in the {{% ctx %}} Gateway web.config.|
    |`ServiceFabricUsingSelfSignedCertificates`      | Configure the value as `$false` if you used valid CA certificates when [installing the Application Server][Configure Installation Script], `$true` if you used self-signed certificates.<br /><br />This will set the `ServiceFabricUsingSelfSignedCertificates` value in the {{% ctx %}} Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthUsername`      | This must be changed if you used a non-default `ApiGatewayBasicAuthUsername` when [installing the Application Server][Configure Installation Script]; if so, this value must be configured to the one used.<br /><br />This will set the `ServiceFabricApiGatewayBasicAuthUsername` value in the {{% ctx %}} Gateway web.config.{{< alert type="note" title="Note" >}} This parameter should be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`ServiceFabricApiGatewayBasicAuthPassword`      | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Application Server][Configure Installation Script]; if so, this value must be configured to the one used.<br /><br />This will set the `ServiceFabricApiGatewayBasicAuthPassword` value in the {{% ctx %}} Gateway web.config.{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`DotNetFlowDebuggerEndpoint`                    | Replace `server.domain.com` with the fully qualified domain name of the Web Application Server.<br /><br />This will set the `DotNetFlowDebuggerEndpoint` value in the {{% ctx %}} Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthUsername`           | This must be changed if you used a non-default `ApiGatewayBasicAuthUsername` when [installing the Debugger on the Web Application Server][Install Application Server]; if so, this value must be configured to the one used.<br /><br />This will set the `DotNetFlowDebuggerBasicAuthUsername` value in the {{% ctx %}} Gateway web.config.{{< alert type="note" title="Note" >}} This parameter should be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`DotNetFlowDebuggerBasicAuthPassword`           | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Debugger on the Web Application Server][Install Application Server]; if so, this value must be configured to the one used.<br /><br />This will set the `DotNetFlowDebuggerBasicAuthPassword` value in the {{% ctx %}} Gateway web.config.{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`DotNetFlowDebuggerUsingSelfSignedCertificates` | Configure the value as `$false` if you are using valid CA certificates to secure the communication between {{% ctx %}} Gateway and the Debugger, `$true` if using self-signed certificates.<br /><br />This will set the `DotNetFlowDebuggerUsingSelfSignedCertificates` value in the {{% ctx %}} Gateway web.config.|
    |`GatewayApplicationPoolUsername`                | Replace `Domain\Username` with the user that should be used to run the {{% ctx %}} Gateway application pool as configured in [Get {{% ctx %}} Gateway Application Pool User][Get CORTEX Gateway Application Pool User].|
    |`WebRootFolder`                                 | Replace this with the correct path for the Web Root Folder on the server. Typically this will be  `C:\inetpub\wwwroot`.|
    |`WebsitePort`                                   | Replace this with the port that you wish the website to use. Typically this will be `443`.|
    |`ImportCertificate`                             | Change this from `$true` to `$false` if you do not require the certificate to be imported as part of the installation process.<br /><br />Note that if this is changed to `$false` you must [import the Root Certificate][Import Root Certificate] (if necessary), [import the X.509 certificate manually][Import Certificate Manually] and [assign a friendly name][Assign Certificate Friendly Name] prior to running the installation.|
    |`CertificateFilePath`                           | Replace this with the location and filename for the certificate to be imported.<br /><br />If `ImportCertificate` is set to `$false` this value can remain unchanged but you must [import the Root Certificate][Import Root Certificate] (if necessary), [import the X.509 certificate manually][Import Certificate Manually] and [assign a friendly name][Assign Certificate Friendly Name] prior to running the installation.|
    |`CertificateFriendlyName`                       | Replace this with the friendly name that you would like to be allocated to the certificate.<br /><br />If `ImportCertificate` is set to `$false` this must be [assigned][Assign Certificate Friendly Name] prior to running the installation and the Friendly Name used must be specified to allow the website to use the correct certificate.|
    |`ConfigureSiteRedirect`                         | If the site hosting the {{% ctx %}} Gateway web application is a newly created {{% ctx %}} site or an existing site that doesn’t have its own content, it is recommended to redirect the site URL to the {{% ctx %}} Gateway web application URL. The default behaviour of the script is to create a URL Rewrite redirect rule to achieve this.<br /><br />To skip this rule creation change the value to `$false`.|
    |`ApplySecurityMeasures`                         | Change this from `$true` to `$false` if you do not require the Recommended [Security Best Practices][] to be implemented as part of the installation process.|
    |`UsingWindowsDefender`                          | Change this from `$true` to `$false` if you are not using the Windows Defender firewall.<br /><br />If Windows Defender is not being used but an alternative firewall is, it must be configured to allow communication inbound via TCP on the port configured for HTTPS (usually 443).|
    |`AcceptEULA`                                    | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                      | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Install.Gateway.ps1`.

### Install {{% ctx %}} Gateway

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

1. Run the PowerShell command to install {{% ctx %}} Gateway.
1. If `ImportCertificate` is set to $true, and the file is of type `.pfx`, a prompt will appear for the certificate password. This should be entered, and then hit `Enter`.
1. A prompt will appear to enter the password for the user specified to run the {{% ctx %}} Gateway Application Pool.  This should be entered, and then hit `Enter`.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the installation.

    If the errors do not give any instructions on how to rectify, please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for further assistance.

1. Once the PowerShell script execution has completed, a prompt will appear to restart the machine.  You can choose to restart now (`N`) or later (`L`).
1. In a browser, navigate to the {{% ctx %}} Gateway website, available at `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway` and wait for the login page to load.

### Grant additional folder permissions to the {{% ctx %}} Gateway Application Pool User

{{< section "/install-web-application-server/add-innovation-only/grant-gateway-user-additional-folder-permissions.md">}}

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to perform further actions in future, such as troubleshooting, certificate rollover, uninstallation, reinstallation and updates.

## Next Steps?

1. [Setup Gateway][]

[Assign Certificate Friendly Name]: {{< ref "#assign-certificate-friendly-name" >}}
[Configure CORTEX Gateway Installation Script]: {{< ref "#configure-cortex-gateway-installation-script" >}}
[Configure Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureInstallationScript" >}}
[CORTEX Encrypted]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Encryption Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.EncryptionRequirements" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Get CORTEX Gateway Application Pool User]: {{< ref "#get-cortex-gateway-application-pool-user" >}}
[Import Certificate Manually]: {{< ref "#import-certificate-manually" >}}
[Import Root Certificate]: {{< ref path="#import-root-certificate" >}}
[Install Application Server]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.InstallApplicationServer" >}}
[Licensing Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.LicensingRequirements" >}}
[Security Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Setup Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.SetupGateway" >}}
