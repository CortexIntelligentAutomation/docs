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

### Install SQL Server or SQL Express

1. Use one of the following installation guides to install SQL Server or SQL Server Express:

    * <a href="/pdfs/Cortex Innovation - SQL Server 2019 Installation Guide.pdf">{{% ctx %}} Innovation - SQL Server 2019 Installation Guide</a>
    * <a href="/pdfs/Cortex Innovation - SQL Server 2016 Installation Guide.pdf">{{% ctx %}} Innovation - SQL Server 2016 Installation Guide</a>
    * <a href="/pdfs/Cortex Innovation - SQL Server 2016 Express Installation Guide.pdf">{{% ctx %}} Innovation - SQL Server 2016 Express Installation Guide</a>

### Get {{% ctx %}} Gateway Application Pool User

A domain user account is required for the {{% ctx %}} Gateway application pool and must be created prior to performing the installation below.

This user account is required to enable {{% ctx %}} Gateway to access the {{% ctx %}} database, with the following roles:

* dbcreator
* public

To add roles to database users take the following steps:

1. Open SQL Server Management Studio on the server and log in.
1. Expand the server node, then `Security` then `Logins`.
1. If the user that will run the {{% ctx %}} Gateway application pool is not in the list of logins, take the following steps, otherwise skip to step 4:

    1. Right-click the `Logins` node and click `New Login...`.
    1. Enter the application pool user in the `Login name` box.
    1. On the left pane, click `Server Roles`.
    1. Check `public` and `dbcreator`
    1. Click `OK`.

1. If the user that will run the {{% ctx %}} Gateway application pool is in the list of logins, take the following steps:

    1. Right-click on the application pool user.
    1. Click `Properties`.
    1. On the left pane, click `Server Roles`.
    1. Check `public` and `dbcreator`.
    1. Click `OK`.

In line with best practices, this account should not be given administrator rights, nor should it be used for any purposes other than those specified for {{% ctx %}} Gateway.

### Certificate Requirements

{{% ctx %}} Gateway requires an X.509 SSL certificate to be installed on the server. The certificate must have the following properties:

* Enhanced Key Usage: `Server Authentication` and `Client Authentication`
* Subject Alternative Names (SAN): At minimum the FQDN of the server. It can also include NetBIOS Name, IP address, localhost, 127.0.0.1

If the user tries to navigate to an address not in the SAN list, then they will receive a certificate error.

{{% alert title="Important" color="warning" %}}
Do not reuse any auto-generated self-signed certificates as they do not meet the requirements for Gateway.  
<br />
Certificates, wildcard certificates and manually created self-signed certificates can be used. However, the latter are not recommended for production instances.  
Details on how to create a self-signed certificate can be found at {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.CreateSelfSignedCertificates" title="Create Self-Signed Certificates" >}}.  
<br />
It is possible to reuse the certificate used when {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureInstallationScript" title="installing the Application Server" >}}, as long as it is not an auto-generated self-signed certificate; If doing so, you should set the `ImportCertificate` parameter to `$false` in {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureCortexGatewayInstallationScript" title="Configure CORTEX Gateway Installation Script" >}} step to prevent overwriting.
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
    -ModelDBContextConnectionString "Data Source=localhost;Initial Catalog=CortexWeb;Integrated Security=True;MultipleActiveResultSets=True" `
    -AuthContextConnectionString "Data Source=localhost;Initial Catalog=CortexWeb.Auth;Integrated Security=True;MultipleActiveResultSets=True" `
    -SignalRContextConnectionString "Data Source=localhost;Initial Catalog=CortexWeb.SignalR;Integrated Security=True;MultipleActiveResultSets=True" `
    -FeatureFlags "InnovationId" `
    -ServiceFabricApiGatewayEndpoint "https://server.domain.com:8722/" `
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
     |`ModelDBContextConnectionString`                | If SQL Server was installed as the default instance, change the `Data Source` in the connection string to `localhost` or, if it was installed on another machine, change it to the machine name.<br /><br />If SQL Server was installed as a named instance, change it to `.\{instanceName}` replacing `{instanceName}` with the name of the instance or, if SQL Server was installed on a different machine, change it to `{machineName}\{instanceName}` replacing `{machineName}` with the machine name and `{instanceName}` with the name of the instance. <br /><br />This will set the `ModelDBContextConnectionString` value in the {{% ctx %}} Gateway web.config.|
    |`AuthContextConnectionString`                   |  If SQL Server was installed as the default instance, change the `Data Source`in the connection string to `localhost` or, if it was installed on another machine, change it to the machine name.<br /><br />If SQL Server was installed as a named instance, change it to `.\{instanceName}` replacing `{instanceName}` with the name of the instance or, if SQL Server was installed on a different machine, change it to `{machineName}\{instanceName}` replacing `{machineName}` with the machine name and `{instanceName}` with the name of the instance. <br /><br />This will set the `AuthContextConnectionString` value in the {{% ctx %}} Gateway web.config. |
    |`SignalRContextConnectionString`                |  If SQL Server was installed as the default instance, change the `Data Source`in the connection string to `localhost` or, if it was installed on another machine, change it to the machine name.<br /><br />If SQL Server was installed as a named instance, change it to `.\{instanceName}` replacing `{instanceName}` with the name of the instance or, if SQL Server was installed on a different machine, change it to `{machineName}\{instanceName}` replacing `{machineName}` with the machine name and `{instanceName}` with the name of the instance. <br /><br />This will set the `SignalRContextConnectionString` value in the {{% ctx %}} Gateway web.config. |
    |`FeatureFlags`                                  | Replace `InnovationId` with the {{% ctx %}} Innovation feature identifier, which should have been provided by {{% ctx %}} when fulfilling the [Licensing Requirements][], if it wasn't it should be requested using [{{% ctx %}} Service Portal][CORTEX Service Portal].<br /><br />This will set the `FeatureFlags` value in the {{% ctx %}} Gateway web.config.|
    |`ServiceFabricApiGatewayEndpoint`               | Replace `server.domain.com` with the fully qualified domain name of the server. The port should be specified as `8722` and there must be a trailing slash, e.g. `https://server.domain.com:8722/`.<br /><br />This will set the `ServiceFabricApiGatewayEndpoint` value in the {{% ctx %}} Gateway web.config.|
    |`ServiceFabricUsingSelfSignedCertificates`      | Configure the value as `$false` if you used valid CA certificates when [installing the Application Server][Configure Installation Script], `$true` if you used self-signed certificates.<br /><br />This will set the `ServiceFabricUsingSelfSignedCertificates` value in the {{% ctx %}} Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthUsername`      | This must be changed if you used a non-default `ApiGatewayBasicAuthUsername` when [installing the Application Server][Configure Installation Script]; if so, this value must be configured to the one used.<br /><br />This will set the `ServiceFabricApiGatewayBasicAuthUsername` value in the {{% ctx %}} Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthPassword`      | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Application Server][Configure Installation Script]; if so, this value must be configured to the one used. It can be [{{% ctx %}} Encrypted][CORTEX Encrypted].<br /><br />This will set the `ServiceFabricApiGatewayBasicAuthPassword` value in the {{% ctx %}} Gateway web.config.|
    |`DotNetFlowDebuggerEndpoint`                    | Replace `server.domain.com` with the fully qualified domain name of the Web Application Server.<br /><br />This will set the `DotNetFlowDebuggerEndpoint` value in the {{% ctx %}} Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthUsername`           | This must be changed if you used a non-default `ApiGatewayBasicAuthUsername` when [installing the Debugger on the Web Application Server][Install Application Server]; if so, this value must be configured to the one used.<br /><br />This will set the `DotNetFlowDebuggerBasicAuthUsername` value in the {{% ctx %}} Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthPassword`           | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Debugger on the Web Application Server][Install Application Server]; if so, this value must be configured to the one used. It can be [{{% ctx %}} Encrypted][CORTEX Encrypted].<br /><br />This will set the `DotNetFlowDebuggerBasicAuthPassword` value in the {{% ctx %}} Gateway web.config.|
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
1. The {{% ctx %}} Gateway website will now be available on `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to perform further actions in future, such as troubleshooting, certificate rollover, uninstallation, reinstallation and updates.

## Next Steps?

1. [Setup {{% ctx %}} Gateway][Setup CORTEX Gateway]

[Assign Certificate Friendly Name]: {{< ref "#assign-certificate-friendly-name" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Configure CORTEX Gateway Installation Script]: {{< ref "#configure-cortex-gateway-installation-script" >}}
[Configure Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureInstallationScript" >}}
[CORTEX Encrypted]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Get CORTEX Gateway Application Pool User]: {{< ref "#get-cortex-gateway-application-pool-user" >}}
[Import Certificate Manually]: {{< ref "#import-certificate-manually" >}}
[Import Root Certificate]: {{< ref path="#import-root-certificate" >}}
[Install Application Server]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.InstallApplicationServer" >}}
[Licensing Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.LicensingRequirements" >}}
[Security Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Setup CORTEX Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.SetupGateway" >}}
