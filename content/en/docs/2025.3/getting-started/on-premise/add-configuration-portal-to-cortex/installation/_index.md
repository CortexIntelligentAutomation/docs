---
title: "Install the Web Application Server"
linkTitle: "Install Web Application Server"
description: "Information about installing the Web Application Server."
weight: 40
---

# {{% param title %}}

This guide describes how to install the {{% ctx %}} Configuration Portal on the Web Application Server.

## Perform Installation

### Import {{% ctx %}} Flows

The {{% ctx %}} Configuration Portal calls a set of flows to validate log-in credentials, and to manage interactions with the config reliable collections, where config data is stored. These flows are contained within the provided studio packages.  
  
To import the flows, perform the following steps:

1. Log into the {{% ctx %}} Gateway that was installed within the CORTEX Web Application Server.
1. In {{% ctx %}} Gateway, click `Admin`, then `Studio Import`.
1. Import the following Studio packages which can be found in the folder where the `Cortex Innovation {{< version >}} - Configuration Portal.zip` was extracted:
    1. `Configuration.Portal.Core.Flows.studiopkg`, which can be found in the folder named `Cortex Configuration Portal`.
    1. `Interaction.Portal.Core.Flows.studiopkg`, which can be found in the folder named `Cortex Interaction Portal`.
    1. `User Access Management.Flows.studiopkg`, which can be found in the folder named `User Access Management`.
1. Once imported, Set up the access to these flows using Studio Authorisation.
{{< alert type="note" title="Note" >}}
Once the flows are imported, they should be available from the ‘Dev’ charms menu. Note that you may need to refresh {{% ctx %}} Gateway after importing
{{< /alert >}}

### Configure the flows

#### User Access Management flow

1. Within {{% ctx %}} Gateway, open the `Dev` charms then search for `UAM-Get-Config`
1. Click on the first `Set Variable` block to show the properties.
1. Within the value field, update the following parameters only:
    | Name                               | Description                                                                                                                                                                                                                                                                | Example                                                                                                    |
    |------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
    | PowerShellDetails.Username         | The username of an account that can run PowerShell commands on all {{% ctx %}} servers, e.g., Service Account. {{< alert type="note" title="Note" >}}This user should be an administrator across the {{% ctx %}} servers.{{< /alert >}}                                    | `"ctx_serviceuser"`                                                                                        |
    | PowerShellDetails.Password         | The password for the username specified for `PowerShellDetails.Username`. {{< alert type="note" title="Note" >}}This field must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}} | `"#_124211015226168!130105247000243225146179242013178~146135159100034!214216128191025238010012072111212#"` |
    | PowerShellDetails.Domain           | The domain for the username specified for `PowerShellDetails.Username`.                                                                                                                                                                                                    | `"domain.com"`                                                                                             |
    | PowerShellDetails.Host             | The FQDN of the host executing the PowerShell commands. {{< alert type="note" title="Note" >}}This can be `Environment.MachineName` to use the current node executing the flow.{{< /alert >}}                                                                              | `"cortexapp-machine.domain.com"` or `Environment.MachineName`                                              |
    | PowerShellDetails.Port             | The PowerShell port.                                                                                                                                                                                                                                                       | `5985`                                                                                                     |
    | PowerShellDetails.SSL              | Whether to use SSL for the PowerShell command.                                                                                                                                                                                                                             | `false`                                                                                                    |
    | RecursiveAccessControl             | Whether child user groups should inherit access control granted to parents.                                                                                                                                                                                                | `false`                                                                                                    |
    | OptionalAdConfig.DomainController  | The FQDN of the domain controller server. {{< alert type="note" title="Note" >}}If left empty, the domain that the node is attached to will be used.{{< /alert >}}                                                                                                         | `"dc-machine.domain.com"`                                                                                  |
    | OptionalAdConfig.BaseAdGroupSearch | The base path within the domain from which users can be selected. {{< alert type="note" title="Note" >}}If left empty, the entire domain will be used.{{< /alert >}}                                                                                                       | `"CN=Builtin,DC=CortexUsers,DC=com"`                                                                       |
    | OptionalAdConfig.Username          | The username of an account used to query Active Directory. {{< alert type="note" title="Note" >}}If left empty, the `PowerShellDetails.Username` will be used.{{< /alert >}}                                                                                               | `ctx_aduser`                                                                                               |
    | OptionalAdConfig.Password          | The password for the username specified for `OptionalAdConfig.Username`. {{< alert type="note" title="Note" >}}This field must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}  | `"#_124211015226168!130105247000243225146179242013178~146135159100034!214216128191025238010012072111212#"` |

This should look similar to the following:

``` json
{
    "PowerShellDetails": {
        "Username": "ctx_serviceuser",
        "Password": "#_124211015226168!130105247000243225146179242013178~146135159100034!214216128191025238010012072111212#",
        "Domain": "domain.com",
        "Host": "cortexapp-machine.domain.com",
        "Port": 5985,
        "SSL": false
    },
    "RecursiveAccessControl": false,
    "OptionalAdConfig": {
        "DomainController": "dc-machine.domain.com",
        "BaseAdGroupSearch": "CN=Builtin,DC=CortexUsers,DC=com",
        "Username": "ctx_aduser",
        "Password": "#_124211015226168!130105247000243225146179242013178~146135159100034!214216128191025238010012072111212#"
    },
    "DataStorage": {
        "UamConfigCollection": "uamConfig",
        "SessionsKeysCollection": "uamSessionsKeys",
        "SessionsCollection": "uamSessions",
        "ServiceRequestsCollection": "serviceRequests"
    }
}
```

1. Save and commit `UAM-Get-Config`.

#### Configuration Management flow

1. Within {{% ctx %}} Gateway, open the `Dev` charms then search for `CM-Config-Settings`
1. Click on the first `Set Variable` block to show the properties.
1. Within the value field, update the following parameters only:
    | Name                        | Description                                                                                                                                                                                                                                                                | Example                                                                                                    |
    |-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
    | PowerShellDetails.Username  | The username of an account that can run PowerShell commands on the host specified for `PowerShellDetails.Host`, e.g., Service Account. {{< alert type="note" title="Note" >}}This user should be an administrator on the targeted Host.{{< /alert >}}                      | `"ctx_serviceuser"`                                                                                        |
    | PowerShellDetails.Password  | The password for the username specified for `PowerShellDetails.Username`. {{< alert type="note" title="Note" >}}This field must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}} | `"#_124211015226168!130105247000243225146179242013178~146135159100034!214216128191025238010012072111212#"` |
    | PowerShellDetails.Domain    | The domain for the username specified for `PowerShellDetails.Username`.                                                                                                                                                                                                    | `"domain.com"`                                                                                             |
    | PowerShellDetails.Host      | The FQDN of the host executing the PowerShell commands. {{< alert type="note" title="Note" >}}This must target a specific {{% ctx %}} Server.{{< /alert >}}                                                                                                                | `"cortexapp-machine.domain.com"`                                                                           |
    | PowerShellDetails.Port      | The PowerShell port.                                                                                                                                                                                                                                                       | `5985`                                                                                                     |
    | CortexInteractionPortalPath | The path to the Cortex Interaction Portal.                                                                                                                                                                                                                                 | `@"C:\inetpub\wwwroot\Cortex\ConfigurationPortal"`                                                         |
    | ConfigurationExportsFolder  | The folder containing the configuration being exported.                                                                                                                                                                                                                    | `@"ConfigurationModule\Exports"`                                                                           |
    | ConfigurationImportsFolder  | The folder containing the configuration being imported.                                                                                                                                                                                                                    | `@"ConfigurationModule\Imports"`                                                                           |
    | ConfigurationBackupsFolder  | The folder containing the configuration backups if scheduled.                                                                                                                                                                                                              | `@"ConfigurationModule\Backups"`                                                                           |                                                                                                                                                                                                                     | `false`                                                                                                    |

This should look similar to the following:

``` json
{
    "PowerShellDetails": {
        "Username": "ctx_serviceuser",
        "Password": "#_124211015226168!130105247000243225146179242013178~146135159100034!214216128191025238010012072111212#",
        "Domain": "domain.com",
        "Host": "cortexapp-machine.domain.com",
        "Port": 5985,
        "SSL": false
    },
    "configCollectionName": "_cfgCollection",
    "containerKeys": "_cfgContainerKeys",
    "paramKeys": "_cfgParamKeys",
    "CortexInteractionPortalPath": @"C:\inetpub\wwwroot\Cortex\ConfigurationPortal",
    "ConfigurationExportsFolder": @"ConfigurationModule\Exports",
    "ConfigurationImportsFolder": @"ConfigurationModule\Imports",
    "ConfigurationBackupsFolder": @"ConfigurationModule\Backups",
    "BackupBypassToken": "f2e97889-acd8-4324-9ac0-e6cc776478ed"
}
```

1. Save and commit `CM-Config-Settings`.

### Create the Configuration Management Package

1. Within {{% ctx %}} Gateway, open the `Admin` charms then click on `Packages`
1. Click on `Add Package Definition` then:
    1. Set the `Package Name` to `CORTEXConfigurationManagement`
    1. Select the flows and groups as follows:  
        [ ] `Cortex-Library`  
        --- [X] `Config Management`  
        --- [ ] `Cortex Interaction Portal`  
        ------ [ ] `Core Portal Flows`  
        --------- [X] `UI-Get-AD-Groups`  
        --------- [X] `UI-Manage-Settings`  
        --- [ ] `User Access Management`  
        ------ [ ] `Config Data Storage`  
        --------- [X] `UAM-Get-Settings`  
        --------- [X] `UAM-Update-Settings`  
        ------ [ ] `Session Data Storage`  
        --------- [X] `UAM-Create-Session`  
        --------- [X] `UAM-Get-Session`  
        ------ [X] `UAM-Authenticate-User`  
        ------ [X] `UAM-Check-Access-Level`  
        ------ [X] `UAM-Get-Config`  
        ------ [X] `UAM-Validate-Token`  
    1. Click `Save`
    1. Once saved, click `Publish`
    1. Once published:
        1. Select the `Authorisation` tab
        1. Select the groups that should be able to execute this package
{{< alert type="note" title="Note" >}}
Keep a note of the selected groups, as they will be required when setting the access control for the {{% ctx %}} Configuration Portal.
{{< /alert >}}

### Create the {{% ctx %}} Configuration Portal Website

On the Web Application Server:

1. Open the folder where the `Cortex Innovation {{< version >}} - Configuration Portal.zip` was extracted.
1. From there, open the `Cortex Configuration Portal` folder.
1. Open the `Cortex.Configuration.Portal.zip` file and extract the contents to where the website is to be installed 
{{< alert type="note" title="Note" >}}
Typically this is `C:\inetpub\wwwroot\Cortex\ConfigurationPortal`
{{< /alert >}}
1. Copy the `web.config` and `appsettings.json` files from the `Cortex Configuration Portal` folder to the root of the extracted website folder.




































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

    {{% alert title="Important" color="warning" %}}Parameters required to be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}} must be encrypted on one of the servers specified in the {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.EncryptionRequirementsNew" title="Generate Encryption Key" >}} steps.{{% /alert %}}

    | Name                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    |-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `GatewayPackagePath`                            | Configure this value with the location of the `Cortex Innovation {{< version >}} - Gateway.zip` file on the installation server.                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | `FeatureFlags`                                  | Replace `InnovationId` with the {{% ctx %}} feature identifier, which should have been provided by {{% ctx %}} when fulfilling the [Obtain a {{% ctx %}} licence file][] step during Pre-Installation, if it wasn't it should be requested using [{{% ctx %}} Service Portal][CORTEX Service Portal].<br /><br />This will set the `FeatureFlags` value in the {{% ctx %}} Gateway web.config.                                                                                                                                                      |
    | `ServiceFabricApiGatewayEndpoint`               | Replace `server.domain.com` with the fully qualified domain name of the server. The port should be specified as `8722` and there must be a trailing slash, e.g. `https://server.domain.com:8722/`.<br /><br />This will set the `ServiceFabricApiGatewayEndpoint` value in the {{% ctx %}} Gateway web.config.                                                                                                                                                                                                                                      |
    | `ServiceFabricUsingSelfSignedCertificates`      | Configure the value as `$false` if you used valid CA certificates when [installing the Application Server][Configure Installation Script], `$true` if you used self-signed certificates.<br /><br />This will set the `ServiceFabricUsingSelfSignedCertificates` value in the {{% ctx %}} Gateway web.config.                                                                                                                                                                                                                                       |
    | `ServiceFabricApiGatewayBasicAuthUsername`      | This must be changed if you used a non-default `ApiGatewayBasicAuthUsername` when [installing the Application Server][Configure Installation Script]; if so, this value must be configured to the one used.<br /><br />This will set the `ServiceFabricApiGatewayBasicAuthUsername` value in the {{% ctx %}} Gateway web.config.{{< alert type="note" title="Note" >}} This parameter should be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}             |
    | `ServiceFabricApiGatewayBasicAuthPassword`      | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Application Server][Configure Installation Script]; if so, this value must be configured to the one used.<br /><br />This will set the `ServiceFabricApiGatewayBasicAuthPassword` value in the {{% ctx %}} Gateway web.config.{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}               |
    | `DotNetFlowDebuggerEndpoint`                    | Replace `server.domain.com` with the fully qualified domain name of the Web Application Server.<br /><br />This will set the `DotNetFlowDebuggerEndpoint` value in the {{% ctx %}} Gateway web.config.                                                                                                                                                                                                                                                                                                                                              |
    | `DotNetFlowDebuggerBasicAuthUsername`           | This must be changed if you used a non-default `ApiGatewayBasicAuthUsername` when [installing the Debugger on the Web Application Server][Install Application Server]; if so, this value must be configured to the one used.<br /><br />This will set the `DotNetFlowDebuggerBasicAuthUsername` value in the {{% ctx %}} Gateway web.config.{{< alert type="note" title="Note" >}} This parameter should be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}} |
    | `DotNetFlowDebuggerBasicAuthPassword`           | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Debugger on the Web Application Server][Install Application Server]; if so, this value must be configured to the one used.<br /><br />This will set the `DotNetFlowDebuggerBasicAuthPassword` value in the {{% ctx %}} Gateway web.config.{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}   |
    | `DotNetFlowDebuggerUsingSelfSignedCertificates` | Configure the value as `$false` if you are using valid CA certificates to secure the communication between {{% ctx %}} Gateway and the Debugger, `$true` if using self-signed certificates.<br /><br />This will set the `DotNetFlowDebuggerUsingSelfSignedCertificates` value in the {{% ctx %}} Gateway web.config.                                                                                                                                                                                                                               |
    | `GatewayApplicationPoolUsername`                | Replace `Domain\Username` with the user that should be used to run the {{% ctx %}} Gateway application pool as configured in [Get {{% ctx %}} Gateway Application Pool User][Get CORTEX Gateway Application Pool User].                                                                                                                                                                                                                                                                                                                             |
    | `WebRootFolder`                                 | Replace this with the correct path for the Web Root Folder on the server. Typically this will be  `C:\inetpub\wwwroot`.                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | `WebsitePort`                                   | Replace this with the port that you wish the website to use. Typically this will be `443`.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | `ImportCertificate`                             | Change this from `$true` to `$false` if you do not require the certificate to be imported as part of the installation process.<br /><br />Note that if this is changed to `$false` you must [import the Root Certificate][Import Root Certificate] (if necessary), [import the X.509 certificate manually][Import Certificate Manually] and [assign a friendly name][Assign Certificate Friendly Name] prior to running the installation.                                                                                                           |
    | `CertificateFilePath`                           | Replace this with the location and filename for the certificate to be imported.<br /><br />If `ImportCertificate` is set to `$false` this value can remain unchanged but you must [import the Root Certificate][Import Root Certificate] (if necessary), [import the X.509 certificate manually][Import Certificate Manually] and [assign a friendly name][Assign Certificate Friendly Name] prior to running the installation.                                                                                                                     |
    | `CertificateFriendlyName`                       | Replace this with the friendly name that you would like to be allocated to the certificate.<br /><br />If `ImportCertificate` is set to `$false` this must be [assigned][Assign Certificate Friendly Name] prior to running the installation and the Friendly Name used must be specified to allow the website to use the correct certificate.                                                                                                                                                                                                      |
    | `ConfigureSiteRedirect`                         | If the site hosting the {{% ctx %}} Gateway web application is a newly created {{% ctx %}} site or an existing site that doesn’t have its own content, it is recommended to redirect the site URL to the {{% ctx %}} Gateway web application URL. The default behaviour of the script is to create a URL Rewrite redirect rule to achieve this.<br /><br />To skip this rule creation change the value to `$false`.                                                                                                                                 |
    | `ApplySecurityMeasures`                         | Change this from `$true` to `$false` if you do not require the Recommended [Security Best Practices][] to be implemented as part of the installation process.                                                                                                                                                                                                                                                                                                                                                                                       |
    | `UsingWindowsDefender`                          | Change this from `$false` to `$true` if you are using the Windows Defender firewall.<br /><br />If Windows Defender is not being used but an alternative firewall is, it must be configured to allow communication inbound via TCP on the port configured for HTTPS (usually 443).                                                                                                                                                                                                                                                                  |
    | `AcceptEULA`                                    | This does not need to be changed, the EULA will be accepted at a later stage.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    | `FilePath`                                      | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified.                                                                                                                                                                                                                                                                                                                                                                  |

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
    .\<CortexInstallScriptName>.ps1 -AcceptEULA
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
[Configure Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureInstallationScriptNew" >}}
[CORTEX Encrypted]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Encryption Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.EncryptionRequirementsNew" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Get CORTEX Gateway Application Pool User]: {{< ref "#get-cortex-gateway-application-pool-user" >}}
[Import Certificate Manually]: {{< ref "#import-certificate-manually" >}}
[Import Root Certificate]: {{< ref path="#import-root-certificate" >}}
[Install Application Server]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.InstallApplicationServerNew" >}}
[Obtain a {{% ctx %}} licence file]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ObtainLicence" >}}
[Security Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Setup Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.SetupGatewayNew" >}}
