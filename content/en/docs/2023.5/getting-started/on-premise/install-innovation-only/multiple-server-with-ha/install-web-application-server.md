---
title: "Install the Web Application Server"
linkTitle: "Install Web Application Server"
description: "Information about installing the Web Application Server."
weight: 40
---

# {{% param title %}}

This guide describes how to install the Web Application Server. Please ensure that [Install Application Servers and Load Balancer][] has been completed before starting this installation.

## Make Installation Artefacts Available

1. We recommend that the Flow Debugger Service and CORTEX Gateway are installed on the same Web Application Server. Copy the following artefacts to a folder on the machine:

   * Cortex Innovation {{< version >}} - Block Packages.zip
   * Cortex Innovation {{< version >}} - Gateway.zip
   * Cortex Innovation {{< version >}} - Flow Debugger Service.zip
   * Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip

2. Extract the `Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip` zip file to a folder with the same name.

## Install Prerequisites

### Licensing

Ensure that a valid CORTEX licence file named `Cortex.lic` exists on the Web Application server, in the location `%ProgramData%\Cortex\Licences`. If it does not, follow the instructions located at [Licensing Requirements][].

### Install SQL Server or SQL Express

1. Use one of the following installation guides to install SQL Server or SQL Server Express:

    * <a href="/pdfs/Cortex Innovation - SQL Server 2019 Installation Guide.pdf">CORTEX Innovation - SQL Server 2019 Installation Guide</a>
    * <a href="/pdfs/Cortex Innovation - SQL Server 2016 Installation Guide.pdf">CORTEX Innovation - SQL Server 2016 Installation Guide</a>
    * <a href="/pdfs/Cortex Innovation - SQL Server 2016 Express Installation Guide.pdf">CORTEX Innovation - SQL Server 2016 Express Installation Guide</a>

### Get Flow Debugger Application Pool User

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

### Get CORTEX Gateway Application Pool User

A domain user account is required for the CORTEX Gateway application pool and must be created prior to performing the installation below.

This user account is required to enable CORTEX Gateway to access the CORTEX database, with the following roles:

* dbcreator
* public

To add roles to database users take the following steps:

1. Open SQL Server Management Studio on the Web Application Server and log in.
1. Expand the server node, then `Security` then `Logins`.
1. If the user that will run the CORTEX Gateway application pool is not in the list of logins, take the following steps, otherwise skip to step 4:

    1. Right-click the `Logins` node and click `New Login...`.
    1. Enter the application pool user in the `Login name` box.
    1. On the left pane, click `Server Roles`.
    1. Check `public` and `dbcreator`
    1. Click `OK`.

1. If the user that will run the CORTEX Gateway application pool is in the list of logins, take the following steps:

    1. Right-click on the application pool user.
    1. Click `Properties`.
    1. On the left pane, click `Server Roles`.
    1. Check `public` and `dbcreator`.
    1. Click `OK`.

In line with best practices, this account should not be given administrator rights, nor should it be used for any purposes other than those specified for CORTEX Gateway.

### Certificate Requirements

Both CORTEX Gateway and the Flow Debugger Service require an X.509 SSL certificate to be installed on the Web Application Server. The certificate must have the following properties:

* Enhanced Key Usage: `Server Authentication` and `Client Authentication`
* Subject Alternative Names (SAN): At minimum the FQDN of the server. It can also include NetBIOS Name, IP address, localhost, 127.0.0.1

If the user tries to navigate to an address not in the SAN list, then they will receive a certificate error.

Wildcard certificates and self-signed certificates can also be used. However, self-signed certificates are not recommended for production instances. Details on how to create a self-signed certificate can be found at [Create Self-Signed Certificates][].

To ensure that the certificate can be used by the CORTEX Gateway website the following sections should be completed:

{{% alert title="Note" %}}Some sections may not require any action depending on your system requirements however more information can be found in the relevant sections{{% /alert %}}

#### Import Root Certificate

{{% alert title="Note" %}}This step is only required if using a self-signed certificate signed by your own Root Certificate e.g. OpenSSL. If this is not the case proceed to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ImportCertificateManually" title="Import Certificate Manually" >}} {{% /alert %}}

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

{{% alert title="Note" %}}The certificate can be imported automatically by setting the `ImportCertificate` parameter to `$true` in {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureCortexGatewayInstallationScript" title="Configure CORTEX Gateway Installation Script" >}}. If importing the certificate automatically proceed to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.PerformInstallation" title="Perform Installation" >}} <br /><br /> If the certificate has previously been imported you must {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.AssignCertificateFriendlyName" title="assign a friendly name" >}}.{{% /alert %}}

To import the certificate manually follow the below steps:

1. Locate the certificate file on the machine and right-click on the file.
1. Select `Install Certificate`.
1. Follow the Wizard and when prompted, ensure you import it into the `Local Machine` store and not `Current User`.
1. Assign the imported certificate a [friendly name][Assign Certificate Friendly Name].

#### Assign Certificate Friendly Name

Once the certificate has been imported, a `Friendly Name` should be assigned which will be used in the [Configure CORTEX Gateway Installation Script][] to enable the installation script to identify the certificate to be used for the website:

1. Click the Windows button (`Start`).
1. Type `certlm.msc` and press `Enter` to open the Certificate Manager dialog.
1. Expand `Personal` and select `Certificates`.
1. You should see your certificate in this store.
1. Right-click on the certificate and select `Properties`.
1. On the `General` tab in the `Friendly Name` text box, enter a name to be used for the certificate.
1. Click `OK`.

## Perform Installation

### Configure Flow Debugger Installation Script

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
    |`FlowDebuggerBasicAuthUsername`               | Configure this value with the username that will be used for Basic Authentication when CORTEX Gateway makes HTTPS requests to the Flow Debugger Service. <br /><br />For security reasons it is recommended that the default value `BasicAuthUser` should be changed.<br /><br />Currently only Basic Authentication using a single user is supported, OAuth2 will be supported in a future release.<br /><br />This value will be needed later, when [configuring the CORTEX Gateway installation script][Configure CORTEX Gateway Installation Script]. |
    |`FlowDebuggerBasicAuthPassword`                     | Configure this value with the password that will be used for Basic Authentication when CORTEX Gateway makes HTTPS requests to the Flow Debugger Service. <br /><br />This password should be [{{< ctx >}} Encrypted][CORTEX Encrypted]. For security reasons it is recommended that the default value `ADA9883B11BD4CDC908B8131B57944A4` should be changed.<br /><br />This value will be needed later, when [configuring the CORTEX Gateway installation script][Configure CORTEX Gateway Installation Script].|
    |`UseSelfSignedCertificates`                    | Enables Flow Debugger Service to communicate with CORTEX Gateway using generated Self-Signed Certificates rather than CA Certificates.  <br /><br /> Not recommended for production use.  |
    |`Credential`                                  | The credentials of the user that will be used to run the `Debugger` application pool in IIS. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`AcceptEULA`                                   | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                   | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Install.FlowDebuggerService.ps1`.

### Configure CORTEX Gateway Installation Script

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
    -ConfigureSiteRedirect $true `
    -ApplySecurityMeasures $true `
    -UsingWindowsDefender $false `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-gateway-install-log.txt"
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`GatewayPackagePath`                            | Configure this value with the location of the `Cortex Innovation {{< version >}} - Gateway.zip` file on the installation server. |
    |`ModelDBContextConnectionString`                | If SQL Server was installed as the default instance, change the `Data Source` in the connection string to `localhost` or, if it was installed on another machine, change it to the machine name.<br /><br />If SQL Server was installed as a named instance, change it to `.\{instanceName}` replacing `{instanceName}` with the name of the instance or, if SQL Server was installed on a different machine, change it to `{machineName}\{instanceName}` replacing `{machineName}` with the machine name and `{instanceName}` with the name of the instance. <br /><br />This will set the `ModelDBContextConnectionString` value in the CORTEX Gateway web.config.|
    |`AuthContextConnectionString`                   |  If SQL Server was installed as the default instance, change the `Data Source`in the connection string to `localhost` or, if it was installed on another machine, change it to the machine name.<br /><br />If SQL Server was installed as a named instance, change it to `.\{instanceName}` replacing `{instanceName}` with the name of the instance or, if SQL Server was installed on a different machine, change it to `{machineName}\{instanceName}` replacing `{machineName}` with the machine name and `{instanceName}` with the name of the instance. <br /><br />This will set the `AuthContextConnectionString` value in the CORTEX Gateway web.config. |
    |`SignalRContextConnectionString`                |  If SQL Server was installed as the default instance, change the `Data Source`in the connection string to `localhost` or, if it was installed on another machine, change it to the machine name.<br /><br />If SQL Server was installed as a named instance, change it to `.\{instanceName}` replacing `{instanceName}` with the name of the instance or, if SQL Server was installed on a different machine, change it to `{machineName}\{instanceName}` replacing `{machineName}` with the machine name and `{instanceName}` with the name of the instance. <br /><br />This will set the `SignalRContextConnectionString` value in the CORTEX Gateway web.config. |
    |`FeatureFlags`                                  | Replace `InnovationId` with the CORTEX Innovation feature identifier, which should have been provided by CORTEX when fulfilling the [Licensing Requirements][], if it wasn't it should be requested using [{{< ctx >}} Service Portal][CORTEX Service Portal].<br /><br />This will set the `FeatureFlags` value in the Gateway web.config.|
    |`ServiceFabricApiGatewayEndpoint`               | Replace `server.domain.com` with the fully qualified domain name of the Load Balancer Server. The port should be specified if it is not the default HTTPS port (443), and there must be a trailing slash, e.g. `https://server.domain.com/` or `https://server.domain.com:8722/`.<br /><br />This will set the `ServiceFabricApiGatewayEndpoint` value in the CORTEX Gateway web.config.|
    |`ServiceFabricUsingSelfSignedCertificates`      | Configure the value as `$false` if you used valid CA certificates when [installing the Application Servers][Configure Installation Script], `$true` if you used self-signed certificates.<br /><br />This will set the `ServiceFabricUsingSelfSignedCertificates` value in the CORTEX Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthUsername`      | This must be changed if you used a non-default `ApiGatewayBasicAuthUsername` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used.<br /><br />This will set the `ServiceFabricApiGatewayBasicAuthUsername` value in the CORTEX Gateway web.config.|
    |`ServiceFabricApiGatewayBasicAuthPassword`      | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used. It can be [{{< ctx >}} Encrypted][CORTEX Encrypted].<br /><br />This will set the `ServiceFabricApiGatewayBasicAuthPassword` value in the CORTEX Gateway web.config.|
    |`DotNetFlowDebuggerEndpoint`                    | Replace `server.domain.com` with the fully qualified domain name of the Web Application Server.<br /><br />This will set the `DotNetFlowDebuggerEndpoint` value in the CORTEX Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthUsername`           | This must be changed if you used a non-default `FlowDebuggerBasicAuthUsername` when [configuring the Flow Debugger installation script][Configure Flow Debugger Installation Script]; if so, this value must be configured to the one used.<br /><br />This will set the `DotNetFlowDebuggerBasicAuthUsername` value in the CORTEX Gateway web.config.|
    |`DotNetFlowDebuggerBasicAuthPassword`           | This must be changed if you used a non-default `FlowDebuggerBasicAuthPassword` when [configuring the Flow Debugger installation script][Configure Flow Debugger Installation Script]; if so, this value must be configured to the one used. It can be [{{< ctx >}} Encrypted][CORTEX Encrypted].<br /><br />This will set the `DotNetFlowDebuggerBasicAuthPassword` value in the CORTEX Gateway web.config.|
    |`DotNetFlowDebuggerUsingSelfSignedCertificates` | Configure the value as `$false` if you are using valid CA certificates to secure the site containing CORTEX Gateway and Flow Debugger Service, `$true` if using self-signed certificates.<br /><br />This will set the `DotNetFlowDebuggerUsingSelfSignedCertificates` value in the CORTEX Gateway web.config.|
    |`GatewayApplicationPoolUsername`                | Replace `Domain\Username` with the user that should be used to run the CORTEX Gateway application pool as configured in [Get CORTEX Gateway Application Pool User][].|
    |`WebRootFolder`                                 | Replace this with the correct path for the Web Root Folder on the server. Typically this will be  `C:\inetpub\wwwroot`.|
    |`WebsitePort`                                   | Replace this with the port that you wish the website to use. Typically this will be `443`.|
    |`ImportCertificate`                             | Change this from `$true` to `$false` if you do not require the certificate to be imported as part of the installation process.<br /><br />Note that if this is changed to `$false` you must [import the Root Certificate][Import Root Certificate] (if necessary), [import the X.509 certificate manually][Import Certificate Manually] and [assign a friendly name][Assign Certificate Friendly Name] prior to running the installation.|
    |`CertificateFilePath`                           | Replace this with the location and filename for the certificate to be imported.<br /><br />If `ImportCertificate` is set to `$false` this value can remain unchanged but you must [import the Root Certificate][Import Root Certificate] (if necessary), [import the X.509 certificate manually][Import Certificate Manually] and [assign a friendly name][Assign Certificate Friendly Name] prior to running the installation.|
    |`CertificateFriendlyName`                       | Replace this with the friendly name that you would like to be allocated to the certificate.<br /><br />If `ImportCertificate` is set to `$false` this must be [assigned][Assign Certificate Friendly Name] prior to running the installation and the Friendly Name used must be specified to allow the website to use the correct certificate.|
    |`ConfigureSiteRedirect`                         | If the site hosting the CORTEX Gateway web application is a newly created Cortex site or an existing site that doesn’t have its own content, it is recommended to redirect the site URL to the CORTEX Gateway web application URL. The default behaviour of the script is to create a URL Rewrite redirect rule to achieve this.<br /><br />To skip this rule creation change the value to `$false`.|
    |`ApplySecurityMeasures`                         | Change this from `$true` to `$false` if you do not require the Recommended [Security Best Practices][] to be implemented as part of the installation process.|
    |`UsingWindowsDefender`                          | Change this from `$true` to `$false` if you are not using the Windows Defender firewall.<br /><br />If Windows Defender is not being used but an alterntive firewall is, it must be configured to allow communication inbound via TCP on the port configured for HTTPS (usually 443).|
    |`AcceptEULA`                                    | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                      | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Install.Gateway.ps1`.

### Install CORTEX Gateway

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

1. Run the PowerShell command to install CORTEX Gateway.
1. If `ImportCertificate` is set to $true, and the file is of type `.pfx`, a prompt will appear for the certificate password. This should be entered, and then hit `Enter`.
1. A prompt will appear to enter the password for the user specified to run the CORTEX Gateway Application Pool.  This should be entered, and then hit `Enter`.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the installation.

    If the errors do not give any instructions on how to rectify, please contact [{{< ctx >}} Service Portal][CORTEX Service Portal] for further assistance.

1. Once the PowerShell script execution has completed, a prompt will appear to restart the machine.  You can choose to restart now (`N`) or later (`L`).
1. The CORTEX Gateway website will now be available on `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.

### Install Flow Debugger

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

    If the errors do not give any instructions on how to rectify, please contact [{{< ctx >}} Service Portal][CORTEX Service Portal] for further assistance.

1. If using `NETWORK SERVICE` for the application pool user:

    1. Open Internet Information Services (IIS) Manager.
    1. On the left, expand the server node.
    1. Click `Application Pools`.
    1. Right-click on the `Debugger` application pool and select `Advanced Settings...`.
    1. In the `Advanced Settings` dialog, click on `Identity` and then click the ellipses (`...`).
    1. In the `Application Pool Identity` dialog, select `Built-in account`, then select `NetworkService` from the drop-down, then click `OK`.
    1. Right-click on the `Debugger` application pool and click `Recycle...`.

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to perform further actions in future, such as troubleshooting, certificate rollover, uninstallation, reinstallation and updates.

## Next Steps?

1. [Setup CORTEX Gateway][]

[Assign Certificate Friendly Name]: {{< ref "#assign-certificate-friendly-name" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Configure CORTEX Gateway Installation Script]: {{< ref "#configure-cortex-gateway-installation-script" >}}
[Configure Flow Debugger Installation Script]: {{< ref "#configure-flow-debugger-installation-script" >}}
[Configure Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureInstallationScript" >}}
[CORTEX Encrypted]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Create Self-Signed Certificates]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.CreateSelfSignedCertificates" >}}
[Get CORTEX Gateway Application Pool User]: {{< ref "#get-cortex-gateway-application-pool-user" >}}
[Import Certificate Manually]: {{< ref "#import-certificate-manually" >}}
[Import Root Certificate]: {{< ref path="#import-root-certificate" >}}
[Install Application Servers and Load Balancer]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Licensing Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.LicensingRequirements" >}}
[Security Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Setup CORTEX Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.SetupGateway" >}}
