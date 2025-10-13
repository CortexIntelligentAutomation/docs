---
title: "Install the Configuration Portal"
linkTitle: "Install Configuration Portal"
description: "Information about installing the {{% ctx %}} Configuration Portal."
weight: 40
---

# {{% param title %}}

This guide describes how to install the {{% ctx %}} Configuration Portal on the Web Application Server.

## Perform Installation

### Import {{% ctx %}} Flows

The {{% ctx %}} Configuration Portal calls a set of flows to validate log-in credentials, and to manage interactions with the config reliable collections, where config data is stored. These flows are contained within the provided studio packages.  
  
To import the flows, perform the following steps:

1. Login to the {{% ctx %}} Gateway that is installed on the Web Application Server.
1. In {{% ctx %}} Gateway, click `Admin`, then `Studio Import`.
1. Import the following Studio packages which can be found in the folder where `Cortex Innovation {{< version >}} - Configuration Portal.zip` was extracted to:
    1. `Configuration.Portal.Core.Flows.studiopkg`, which can be found in the folder named `Cortex Configuration Portal`.
    1. `Interaction.Portal.Core.Flows.studiopkg`, which can be found in the folder named `Cortex Interaction Portal`.
    1. `User Access Management.Flows.studiopkg`, which can be found in the folder named `User Access Management`.
1. Once imported, grant `Edit` permissions to these flows using [Studio Authorisation][].

{{< alert type="note" title="Note" >}}
Once the flows are imported, they should be available from the `Dev` charms menu. Note that you may need to refresh {{% ctx %}} Gateway after importing.
{{< /alert >}}

### Configure the flows

#### User Access Management flow

1. Within {{% ctx %}} Gateway, open the `Dev` charm then search for `UAM-Get-Config`
1. Open the flow.
1. Click on the first `Set Variable` block to show the properties.
1. Within the value field, update the following parameters only:
    | Name                               | Description                                                                                                                                                                                                                                                                | Example                                                                                                    |
    |------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
    | PowerShellDetails.Username         | The username of an account that can run PowerShell commands on all {{% ctx %}} servers, e.g., Service Account. {{< alert type="note" title="Note" >}}This user should be an administrator across the {{% ctx %}} servers.{{< /alert >}}                                    | `"ctx_serviceuser"`                                                                                        |
    | PowerShellDetails.Password         | The password for the username specified for `PowerShellDetails.Username`. {{< alert type="note" title="Note" >}}This field must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}} | `"#_124211015226168!130105247000243225146179242013178~146135159100034!214216128191025238010012072111212#"` |
    | PowerShellDetails.Domain           | The domain for the username specified for `PowerShellDetails.Username`.                                                                                                                                                                                                    | `"domain.com"`                                                                                             |
    | PowerShellDetails.Host             | The host executing the PowerShell commands. {{< alert type="note" title="Note" >}}This can be `Environment.MachineName` to use the current node executing the flow.{{< /alert >}}                                                                                          | `"cortexapp-machine.domain.com"` or `"cortexapp-machine"` or `Environment.MachineName`                     |
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

1. Within {{% ctx %}} Gateway, open the `Dev` charm then search for `CM-Config-Settings`
1. Open the flow.
1. Click on the first `Set Variable` block to show the properties.
1. Within the value field, update the following parameters only:
    | Name                        | Description                                                                                                                                                                                                                                                                | Example                                                                                                    |
    |-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
    | PowerShellDetails.Username  | The username of an account that can run PowerShell commands on the host specified for `PowerShellDetails.Host`, e.g., Service Account. {{< alert type="note" title="Note" >}}This user should be an administrator on the targeted Host.{{< /alert >}}                      | `"ctx_serviceuser"`                                                                                        |
    | PowerShellDetails.Password  | The password for the username specified for `PowerShellDetails.Username`. {{< alert type="note" title="Note" >}}This field must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}} | `"#_124211015226168!130105247000243225146179242013178~146135159100034!214216128191025238010012072111212#"` |
    | PowerShellDetails.Domain    | The domain for the username specified for `PowerShellDetails.Username`.                                                                                                                                                                                                    | `"domain.com"`                                                                                             |
    | PowerShellDetails.Host      | The host executing the PowerShell commands.                                                                                                                                                                                                                                | `"cortexapp-machine.domain.com"` or `"cortexapp-machine"` or `Environment.MachineName`                     |
    | PowerShellDetails.Port      | The PowerShell port.                                                                                                                                                                                                                                                       | `5985`                                                                                                     |
    | CortexInteractionPortalPath | The path to the Cortex Configuration Portal.                                                                                                                                                                                                                               | `@"C:\inetpub\wwwroot\Cortex\ConfigurationPortal"`                                                         |
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

1. Within {{% ctx %}} Gateway, open the `Admin` charm then click on `Packages`
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
        [ ] `Generic Flow Library`  
        --- [ ] `PowerShell`  
        ------ [X] `Execute-PowerShell-Script`  
    1. Click `Save`
    1. Once saved, click `Publish`
    1. Once published:
        1. Select the `Authorisation` tab
        1. Select the groups that should be able to execute this package
        1. Click `Save`

{{< alert type="note" title="Note" >}}
Keep a note of the selected groups, as they will be required when setting the access control for the {{% ctx %}} Configuration Portal.
{{< /alert >}}

### Create the {{% ctx %}} Configuration Portal Website

#### Copy and configure relevant files

On the Web Application Server:

1. Open the folder where `Cortex Innovation {{< version >}} - Configuration Portal.zip` was extracted to.
1. Open the `Cortex Configuration Portal` folder.
1. Extract the contents of the `Cortex.Configuration.Portal.zip` file to where the website is to be installed.
{{< alert type="note" title="Note" >}}
Typically this is `C:\inetpub\wwwroot\Cortex\ConfigurationPortal`
{{< /alert >}}
1. Copy the `web.config` and `config.json` files from the `Cortex Configuration Portal` folder opened in step 2 to the root of the extracted content in step 3, e.g. `C:\inetpub\wwwroot\Cortex\ConfigurationPortal`.
1. Once copied, open the `config.json` file and update the following parameters only:
    | Name                           | Description                                                                                       | Example                                     |
    |--------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------|
    | ApplicationName                | The name of the application, this will be used for referencing the relevant configuration data.   | `"CortexConfigurationDev"`                  |
    | UseOAuth                       | Whether to use OAuth for authentication.                                                          | `true`                                      |
    | CortexUrl                      | The URL of the Application Server APIGateway endpoint, or loadbalancer.                           | `"https://cortexapp-machine.domain.com"`    |
    | CortexPort                     | The port of the Application Server APIGateway endpoint, or loadbalancer.                          | `"8722"`                                    |
    | CortexTenant                   | The tenant defining the scope of the Configuration storage and user sessions at the tenant level. | `"default"`                                 |
    | CortexEnvironment              | The system defining the scope of the Configuration storage and user sessions at the system level. | `"default"`                                 |
    | ConfigManagementPackageName    | The name of the package containing the flows used by the {{% ctx %}} Configuration Portal.        | `CORTEXConfigurationManagement`             |
    | ConfigManagementPackageVersion | The version of the package to be used.                                                            | `""`                                        |
    | ConfigPortalPath               | The folder name containing the {{% ctx %}} Configuration Portal.                                  | `"ConfigurationPortal"`                     |
    | ConfigPortalPort               | The port to communicate with the {{% ctx %}} Configuration Portal.                                | `"443"`                                     |
    | ConfigPortalUrl                | The {{% ctx %}} Configuration Portal base URL.                                                    | `"https://cortexwebapp-machine.domain.com"` |

This should look similar to the following:

``` json
{
    "ApplicationName": "CortexConfigurationDev",
    "UseOAuth": true,
    
    "CortexUrl": "https://cortexapp-machine.domain.com",
    "CortexPort": "8722",
    "CortexTenant": "default",
    "CortexEnvironment": "default",
    
    "ConfigManagementPackageName": "CORTEXConfigurationManagement",
    "ConfigManagementPackageVersion": "",
    "ConfigPortalPath": "ConfigurationPortal",
    "ConfigPortalPort": "443",
    "ConfigPortalUrl": "https://cortexwebapp-machine.domain.com",
    
    "FlowAuthBase64": "",
    "TableBreakpoint": "1224",
    "MobileBreakpoint": 769,
    "ConfigSet": true
}
```

1. Save the file.

#### Create the application

On the Web Application Server:

1. Open IIS.
1. Expand the current node, then `Sites`.
1. Expand the website that contains the {{% ctx %}} application, typically named `Cortex`.
1. To convert the {{% ctx %}} Configuration Portal folder to an Application:
    1. Locate the `ConfigurationPortal` folder
    1. Right-click on `ConfigurationPortal`.
    1. Click `Convert to Application`.
    1. Change the `Application pool` to be the same as [{{% ctx %}} Gateway][Gateway], typically named `Cortex Gateway`.
    1. Click `OK`.

### Configure the {{% ctx %}} Configuration Portal Website

#### Configure the Redirect rule

On the Web Application Server:

1. Navigate to the `Cortex` website directory, typically `C:\inetpub\wwwroot\Cortex`.
1. If a `web.config` file is present, and a `Redirect Cortex to gateway` rule present, add a condition as follows:

    ``` xml
    <add input="{REQUEST_URI}" pattern=".*\/ConfigurationPortal.*" negate="true" />
    ```

1. Save the file.

#### CORS Configuration

{{< alert type="note" title="Note" >}}
These steps are only needed if the {{% ctx %}} Interaction Portal is not already installed.
{{< /alert >}}

{{< alert color="warning" title="Important" >}}
These steps will need to be repeated on all Application Servers.
{{< /alert >}}

On each Application Server:

1. Navigate to the Execution service directory, e.g. `%ProgramData%\SF\<CustomerName>.<NodeName>\Fabric\work\Applications\Cortex.Innovation.Core_App<n>\ApiGatewayPkg.Code.<Version>` replacing `<CustomerName>` with the CustomerName configured during installation, `<NodeName>` with the NETBIOS name of the server, `<n>` with the highest number in the directory and `<Version>` with the latest version in the directory.
1. Open the `appsettings.json` file.
1. Under the `Cors` section, update the following parameters:
    | Name                    | Description                                                       | Example                                                                 |
    |-------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------|
    | Enabled                 | Whether CORS is enabled, this MUST be set to `true`.              | `true`                                                                  |
    | AllowedOrigins          | List of Strings containing all the allowed origins.               | `[ "https://*.domain.com", "https://cortexwebapp-machine.domain.com" ]` |
    | AllowCredentials        | Whether to allow credentials, this MUST be set to `true`.         | `true`                                                                  |
    | AllowWildCardSubDomains | Whether to allow wildcard subdomains, this MUST be set to `true`. | `true`                                                                  |

    The CORS section should look similar to the following:

    ``` json
    "Cors": {
        "Enabled":  true,
        "AllowedOrigins":  [ 
            "https://*.domain.com",
            "https://*.appgyver.com"
        ],
        "AllowedRequestHeaders":  [
            "*"
        ],
        "AllowedResponseHeaders":  [
        ],
        "AllowedMethods":  [
            "*"
        ],
        "AllowCredentials":  true,
        "AllowWildcardSubdomains":  true,
        "PreflightMaxAgeInMs":  5000
    },
    ```

1. Save the file.
1. Repeat these steps for the appsettings.json file located in `C:\ProgramData\SF\<CustomerName>.<NodeName>\Fabric\work\ImageCache\Store\Cortex.Innovation.Core\ApiGatewayPkg.Code.<Version>`.

#### Restart the code package

1. Navigate to the Service Fabric Explorer, typically `http://localhost:9080/Explorer`.
1. Expand the `Nodes`
1. Restart the `ApiGatewayPkg` for each node by following these steps:
    1. Expand the node name
    1. Expand `fabric:/Core/Services`
    1. Expand the `ApiGatewayPkg` service package
    1. Expand `Code Packages`
    1. Hover over `Code` and click on the `▼` button
    1. Confirm the restart as prompted, then click `Restart`

{{< alert type="note" title="Note" >}}
It may take a few minutes for the `Code` package to restart.
{{< /alert >}}

### Set up User Access Control

{{< alert color="warning" title="Important" >}}
The {{% ctx %}} Configuration Portal should be viewed as a repository of sensitive information which will most likely contain usernames and passwords. Therefore consideration should be given to security when granting access to the portal, it is advised that access is limited following the practice of least privilege.
{{< /alert >}}

On the Web Application Server:

1. Open a Windows PowerShell ISE (x64) window as administrator.
1. Change the location to where `Cortex Innovation {{< version >}} - Configuration Portal.zip` was extracted to, inside the `Cortex Configuration Portal` folder, e.g. `cd "C:\Install\Cortex Innovation {{< version >}} - Configuration Portal\Cortex Configuration Portal"`.
1. In the script section, copy the following script:

    ``` powershell
    .\Deploy.Cortex.Configuration.Portal.ps1 `
        -URL "https://cortexapp-machine.domain.com" `
        -Port "8722" `
        -Username "BasicAuthUser" `
        -Password "<password>" `
        -Tenant "default" `
        -Environment "default" `
        -adminAdGroups @("Domain Admins Group") `
        -userAdGroups @("Domain Users Group") `
        -ApplicationName "CortexConfigurationDev"
    ```

1. Update the following parameters:
    | Name            | Description                                                                                           | Example                                  |
    |-----------------|-------------------------------------------------------------------------------------------------------|------------------------------------------|
    | URL             | The URL of the Application Server APIGateway endpoint, or loadbalancer.                               | `"https://cortexapp-machine.domain.com"` |
    | Port            | The port of the Application Server APIGateway endpoint, or loadbalancer.                              | `"8722"`                                 |
    | Username        | The username specified for `ApiGatewayBasicAuthUsername` when [installing the Application Servers][]. | `"<Username>"`                           |
    | Password        | The password specified for `ApiGatewayBasicAuthPassword` when [installing the Application Servers][]. | `"<Password>"`                           |
    | Tenant          | The tenant defining the scope of the Configuration storage and user sessions.                         | `"default"`                              |
    | Environment     | The system defining the scope of the Configuration storage and user sessions.                         | `"default"`                              |
    | adminAdGroups   | An array of Active Directory groups that should have admin access to the Configuration Portal.        | `@("Domain Admins Group")`               |
    | userAdGroups    | An array of Active Directory groups that should have user access to the Configuration Portal.         | `@("Domain Users Group")`                |
    | ApplicationName | The `ApplicationName` set in step 5 of [Copy and configure relevant files][].                         | `"CortexConfigurationDev"`               |
1. Once updated, run the script and verify that it completes without errors.

## Next Steps?

1. [Try it out][]

[Try it out]: {{< url path="Cortex.GettingStarted.OnPremise.AddConfigurationPortalToCortex.PostInstallation.TryItOut" >}}
[Studio Authorisation]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.MainDoc" >}}
[Gateway]: {{< url path="Cortex.Guides.Gateway.MainDoc" >}}
[installing the Application Servers]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureInstallationScriptNew" >}}
[Copy and configure relevant files]: {{< ref path="#copy-and-configure-relevant-files" >}}
