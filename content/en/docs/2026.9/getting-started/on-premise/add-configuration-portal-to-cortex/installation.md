---
title: "Install Configuration Portal"
linkTitle: "Install Configuration Portal"
description: "Information about installing the {{% ctx %}} Configuration Portal."
weight: 40
---

# {{% param title %}}

This guide describes how to install the {{% ctx %}} Configuration Portal on the Web Application Server.

## Perform Installation

### Import {{% ctx %}} Flows

The {{% ctx %}} Configuration Portal calls a set of flows to validate login credentials, and to manage interactions with the config reliable collections, where config data is stored. These flows are contained within the provided studio packages.  
  
To import the flows, perform the following steps:

1. Log in to the {{% ctx %}} Gateway that is installed on the Web Application Server.
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
    | CortexUrl                      | The public URL of the IIS Cortex website. Use the scheme and host only, with no trailing slash and without `/ConfigurationPortal`. This is often the same host as `ConfigPortalUrl`. | `"https://cortexwebapp-machine.domain.com"` |
    | CortexPort                     | The IIS HTTPS port for the Cortex website. Set this to `443`, or to the HTTPS binding port for that site. The browser uses this port for OAuth and API calls. | `"443"`                                     |
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
    
    "CortexUrl": "https://cortexwebapp-machine.domain.com",
    "CortexPort": "443",
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

The {{% ctx %}} Configuration Portal builds OAuth and API URLs from `CortexUrl` and `CortexPort` only, for example `https://cortexwebapp-machine.domain.com:443/oauth/token` and `https://cortexwebapp-machine.domain.com:443/api/...`. Those URLs stay at the Cortex site root. `ConfigPortalPath` is not added to them. A request that shows port `443` in the browser Network tab is the expected result.

{{< alert color="warning" title="Important" >}}
Set `CortexPort` to the IIS HTTPS port, typically `443`. Port `8722` is the API Gateway listener on Kestrel, which allows a client certificate during the TLS handshake. A browser that calls port `8722` asks the user to select a certificate at login. End users must use the IIS site. They must not present the gateway service certificate.
{{< /alert >}}

| Role | Where it is set | Example |
|------|-----------------|---------|
| IIS / browser | `CortexUrl` and `CortexPort` in `config.json` | `https://cortexwebapp-machine.domain.com` with port `443` |
| API Gateway | The rewrite `url=` in [Add URL Rewrite rules][] and `-URL` / `-Port` in [Set up User Access Control][] | `https://cortexapp-machine.domain.com:8722` |

The API Gateway host is often a different machine from the Web Application Server.

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

#### Copy robots.txt file

To provide guidance for search engine crawlers and common AI bots not to index {{% ctx %}} Configuration Portal, it is necessary for the robots.txt file to reside in the site’s root directory of the {{% ctx %}} Configuration Portal. This is only necessary if {{% ctx %}} Configuration Portal is being installed on a different machine than either {{% ctx %}} Gateway or {{% ctx %}} Interaction Portal has been installed.

1. Open the folder where `Cortex Innovation {{< version >}} - Configuration Portal.zip` was extracted to.
1. Open the `Cortex Configuration Portal` folder.
1. Copy the `robots.txt` file
1. Navigate to the `Cortex` website directory, typically `C:\inetpub\wwwroot\Cortex`.
1. Paste the `robots.txt` file

#### Route browser traffic through IIS

Browser calls to OAuth and the API reach IIS on HTTPS port `443`. IIS forwards those calls on the server to API Gateway port `8722`. The browser remains on port `443`.

```text
Browser  →  IIS (HTTPS 443, /oauth/token, /api/...)
         →  ARR URL Rewrite (on the Web Application Server)
         →  API Gateway (port 8722)
```

| Term | Meaning |
|------|---------|
| Reverse proxy | Users open the Cortex site on port `443`. IIS forwards `/oauth/token` and `/api/...` to API Gateway port `8722` on the server. |
| ARR (Application Request Routing) | The IIS extension that performs that forwarding. Enable proxy at the server node. |

#### Back up IIS and portal configuration

Before you change IIS, `config.json`, or the Cortex site `web.config`:

1. Take an IIS configuration backup, or a server or VM snapshot, according to your change policy. Allowing server variables updates `applicationHost.config`.
1. Copy the Cortex site `web.config` to a backup file before editing it, for example `web.config.bak-2026-11-13`. Avoid `%DATE%` in `cmd` when the date contains `/`.
1. Copy `config.json` to `config.json.bak` before editing it, if that backup does not already exist from [Copy and configure relevant files][].

To restore, copy the `.bak` files back, or restore the folder or VM snapshot, then recycle the Cortex application pool.

#### Install URL Rewrite and Application Request Routing

Install both modules on the Web Application Server as an administrator. Install URL Rewrite before Application Request Routing. ARR depends on the rewrite module.

1. Download the x64 MSI for [URL Rewrite Module 2.x][] for the operating system, run it, and accept the defaults.
1. After URL Rewrite finishes, download the x64 MSI for [Application Request Routing 3.0][], run it, and accept the defaults.

Some environments still install the same two products with Web Platform Installer, in the same order. Web Platform Installer is legacy. Prefer the MSI installers unless your runbook says otherwise.

Close and reopen IIS Manager (`inetmgr`). Select the server node (the server name). In the centre pane, confirm that these features are present:

| Feature | Used in this installation |
|---------|---------------------------|
| URL Rewrite | Site rules in [Add URL Rewrite rules][], and **View Server Variables...** in [Allow URL Rewrite server variables][] |
| Application Request Routing Cache | **Server Proxy Settings** → **Enable proxy** |

Optional check from an elevated PowerShell prompt:

``` powershell
Get-WebGlobalModule | Where-Object { $_.Name -match 'Rewrite|RequestRouting' } | Format-Table Name, Image -AutoSize
```

Expect modules such as `RewriteModule` and `ApplicationRequestRouting`. If either is missing, reinstall in the order above. Use `iisreset` only when the change window allows it.

#### Enable the ARR reverse proxy

1. Open IIS Manager.
1. Select the server node (the server name).
1. Open **Application Request Routing Cache**, then **Server Proxy Settings**.
1. Enable **Enable proxy**.
1. Click **Apply**.

#### Allow URL Rewrite server variables

The rules in [Add URL Rewrite rules][] set `HTTP_X_FORWARDED_PROTO`, `HTTP_X_FORWARDED_HOST`, and `HTTP_X_FORWARDED_FOR`. IIS allows a site to set those server variables only after each name is on the server allow list. On many builds that list is empty and the rewrite section is locked at the server level.

Complete this section before saving the rewrite rules, unless the three names are already allowed. If the rules are saved first, the Cortex site can return HTTP 500.19 until this section is complete.

| Symptom | Detail |
|---------|--------|
| HTTP 500.19 | Configuration error. IIS cannot read the configuration section. |
| HTTP 500.52 | The rule runs but cannot set a variable. |
| Detailed error page | The page mentions `rewrite`, `allowedServerVariables`, or `serverVariables` not allowed. |

The site rules appear under **Sites** → **Cortex** → **URL Rewrite**. Allowing variables is done at the server node, or in `applicationHost.config`.

##### Option A IIS Manager

Run on the Web Application Server as an administrator. Use this option when IIS Manager can save the allow list.

1. Open IIS Manager (`inetmgr`).
1. In **Connections**, select the server node (the top item, the server name).
1. In the centre pane, open **URL Rewrite**.
1. In the **Actions** pane, click **View Server Variables...**. If that action is missing or disabled, install [URL Rewrite Module 2.x][] and reopen IIS Manager.
1. In **URL Rewrite Allowed Server Variables**, click **Add...** and add one row for each name:

    | Server variable name |
    |----------------------|
    | `HTTP_X_FORWARDED_PROTO` |
    | `HTTP_X_FORWARDED_HOST` |
    | `HTTP_X_FORWARDED_FOR` |

1. Click **OK** to close each dialog. The list must show all three names.
1. Recycle the Cortex application pool, or run `iisreset` when the change window allows it.
1. After [Add URL Rewrite rules][] is saved, confirm that both rules still contain the `<serverVariables>` blocks, then test `/oauth/token`.

To verify, repeat steps 1–4. All three variables must remain under **View Server Variables**.

##### Option B Unlock a locked server list

Use this option when **View Server Variables** changes do not save, or HTTP 500.19 says the section is locked.

1. In IIS Manager, select the server node.
1. Open **Configuration Editor**. If it is missing, install **IIS Management Scripts and Tools**.
1. From the **Section** list, choose `system.webServer/rewrite/allowedServerVariables`.
1. If the status bar shows **Locked**:
    1. Select the server node, then open **Feature Delegation**.
    1. Find **URL Rewrite**, or the rewrite-related entry, and set delegation as required by your security policy. Administrators who maintain this server often set it to **Read/Write**.
    1. Or unlock the section once from an elevated command prompt, when your security team allows it:

        ``` bat
        %windir%\system32\inetsrv\appcmd.exe unlock config /section:system.webServer/rewrite/allowedServerVariables
        ```

1. Return to [Option A IIS Manager][] and add the three variable names.
1. Optionally lock the section again after the names are allowed, according to your hardening policy.

##### Option C appcmd

Use this option when IIS Manager is unavailable, or when the allow list must be repeatable. Run elevated on the Web Application Server:

``` bat
%windir%\system32\inetsrv\appcmd.exe list config /section:system.webServer/rewrite/allowedServerVariables

%windir%\system32\inetsrv\appcmd.exe set config /section:system.webServer/rewrite/allowedServerVariables /+"[name='HTTP_X_FORWARDED_PROTO']" /commit:apphost
%windir%\system32\inetsrv\appcmd.exe set config /section:system.webServer/rewrite/allowedServerVariables /+"[name='HTTP_X_FORWARDED_HOST']" /commit:apphost
%windir%\system32\inetsrv\appcmd.exe set config /section:system.webServer/rewrite/allowedServerVariables /+"[name='HTTP_X_FORWARDED_FOR']" /commit:apphost

%windir%\system32\inetsrv\appcmd.exe list config /section:system.webServer/rewrite/allowedServerVariables
```

If `set config` fails because the section is locked, run the `unlock` command in [Option B Unlock a locked server list][], then repeat the three `set config` lines.

##### Option D Test the proxy without server variables

Use this only as a temporary test when the allow list cannot be changed yet, and only after the rules in [Add URL Rewrite rules][] exist.

1. Remove the `<serverVariables>...</serverVariables>` blocks from both rules.
1. Save `web.config`.
1. Test login, or call `/oauth/token`, and confirm that ARR reaches port `8722`.

If the proxy works after the `<serverVariables>` blocks are removed, and fails when those blocks are present, the allow list is the cause. Complete [Option A IIS Manager][], [Option B Unlock a locked server list][], or [Option C appcmd][], restore the `<serverVariables>` blocks, and test again. The forwarded headers support downstream logging and URLs. Restore them before production use.

After any later configuration change, confirm that **Enable proxy** is still enabled under **Application Request Routing Cache** → **Server Proxy Settings** on the server node.

#### Add URL Rewrite rules

{{< alert color="warning" title="Important" >}}
Finish the server variable allow list before saving these rules, unless `HTTP_X_FORWARDED_PROTO`, `HTTP_X_FORWARDED_HOST`, and `HTTP_X_FORWARDED_FOR` are already allowed. If you add the rules first, the site can return HTTP 500.19 until the allow list is complete. The allow list steps are in the previous section, Allow URL Rewrite server variables.
{{< /alert >}}

One Cortex site `web.config` at the site root covers the {{% ctx %}} Configuration Portal application under that site, once `config.json` uses port `443`. Add the rules to the Cortex site root `web.config`. The `ConfigurationPortal` application folder is the wrong place for these rules.

Typical path: `C:\inetpub\wwwroot\Cortex\web.config`

On the Web Application Server:

1. Open `web.config` in a text editor.
1. Inside `<rewrite><rules>`, add the rules below before other inbound rules, for example before `Redirect Cortex to gateway`.
1. Replace `cortexapp-machine.domain.com` with the FQDN of the API Gateway. Use the same host as the deployment script `-URL` in [Set up User Access Control][].

    ``` xml
    <rule name="Proxy OAuth Token" stopProcessing="true">
      <match url="^oauth/token$" />
      <action type="Rewrite"
              url="https://cortexapp-machine.domain.com:8722/oauth/token"
              appendQueryString="true" />
      <serverVariables>
        <set name="HTTP_X_FORWARDED_PROTO" value="https" />
        <set name="HTTP_X_FORWARDED_HOST" value="{HTTP_HOST}" />
        <set name="HTTP_X_FORWARDED_FOR" value="{REMOTE_ADDR}" />
      </serverVariables>
    </rule>
    <rule name="Proxy Cortex API" stopProcessing="true">
      <match url="^api/(.*)$" />
      <action type="Rewrite"
              url="https://cortexapp-machine.domain.com:8722/api/{R:1}"
              appendQueryString="true" />
      <serverVariables>
        <set name="HTTP_X_FORWARDED_PROTO" value="https" />
        <set name="HTTP_X_FORWARDED_HOST" value="{HTTP_HOST}" />
        <set name="HTTP_X_FORWARDED_FOR" value="{REMOTE_ADDR}" />
      </serverVariables>
    </rule>
    ```

    * Set `type` to `Rewrite`. The browser remains on port `443`.
    * If login uses other site-root paths, for example `/oauth/authorize`, add a matching proxy rule.
    * Configuration Portal API calls include `packageName=CORTEXConfigurationManagement`.

1. If a `Redirect Cortex to gateway` rule is present, add this condition to that rule:

    ``` xml
    <add input="{REQUEST_URI}" pattern=".*\/ConfigurationPortal.*" negate="true" />
    ```

1. If the `Redirect Cortex to gateway` rule does not already exclude `robots.txt`, add this condition to that rule:

    ``` xml
    <add input="{REQUEST_URI}" pattern="^/robots\.txt$" negate="true" />
    ```

1. Save the file.

#### Configure TLS

| Item | Requirement |
|------|-------------|
| IIS HTTPS binding on port `443` for the Cortex site | Leave client certificates off for browsers. The binding must not ask the browser for a certificate. |
| Hardening (optional) | Restrict client access to port `8722` so browsers cannot bypass IIS. |

After ARR proxies a request, IIS opens a new connection to the API Gateway. If login returns HTTP 502 and the ARR logs show TLS errors, escalate to the team that owns the gateway certificates.

#### CORS Configuration

{{< alert type="note" title="Note" >}}
These steps are only needed if the {{% ctx %}} Interaction Portal is not already installed.
{{< /alert >}}

Include the IIS site origin that serves the {{% ctx %}} Configuration Portal, for example `https://cortexwebapp-machine.domain.com`. The CORS origin is the scheme and host on the IIS HTTPS port, without `/ConfigurationPortal`. Port `8722` is the API Gateway listener and is not the browser origin.

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
The {{% ctx %}} Configuration Portal should be treated as a repository of sensitive information which will most likely contain usernames and passwords. Therefore consideration should be given to security when granting access to the portal, it is advised that access is limited following the practice of least privilege.
{{< /alert >}}

This script calls the API Gateway directly from the Web Application Server. Keep `-URL` and `-Port` on that gateway endpoint, typically port `8722`. Those parameters are separate from `CortexUrl` and `CortexPort` in `config.json`, which the browser uses through IIS.

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

## Verification

Confirm the following after installation.

### Browser checks

* Login completes without a certificate selection dialog.
* In the browser developer tools, the **Network** tab shows OAuth and API requests on `https://<host>` using port `443` (or with port `443` omitted). The request URLs use port `443`, not port `8722`.
* `config.json` shows `CortexPort` set to `443`, or to the IIS HTTPS port for the Cortex site. See [Copy and configure relevant files][].

### Server checks

From the Web Application Server, optional checks:

``` bat
curl -vk "https://cortexwebapp-machine.domain.com/oauth/token" -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "..."
curl -vk "https://cortexwebapp-machine.domain.com/api/default/default/flows/UAM-Authenticate-User/executions?packageName=CORTEXConfigurationManagement"
```

Replace `cortexwebapp-machine.domain.com` with the IIS Cortex website host.

List the rewrite rules for the site:

``` bat
%windir%\system32\inetsrv\appcmd.exe list config "Cortex" /section:rewrite
```

| Response | Interpretation |
|----------|----------------|
| 401, 400, or JSON from the gateway | The proxy is reaching API Gateway. Correct credentials or application logic if the call is rejected. |
| 404 from IIS | The rule is missing, the site name is wrong, or the URL pattern does not match. See [Add URL Rewrite rules][]. |
| 502.3 or 502 | ARR is disabled, TLS to port `8722` failed, or a firewall is blocking port `8722`. See [Configure TLS][]. |

### Success criteria

* Users complete login without a certificate selection dialog.
* Browser-facing OAuth and API calls use the IIS HTTPS port.

## Troubleshooting

| Symptom | Likely cause | Action |
|---------|--------------|--------|
| Certificate popup continues, and Network shows port `8722` | `config.json` still sends the browser to port `8722` | Set `CortexUrl` and `CortexPort` as described in [Copy and configure relevant files][]. Hard-refresh the browser, or clear the cache. |
| Certificate popup while Network shows port `443` | The IIS HTTPS binding asks the browser for a client certificate | Update the SSL settings on the port `443` binding. See [Configure TLS][]. |
| HTTP 404 on `/oauth/token` | The rules are on the portal application only | Move the rules to the Cortex site `web.config`. See [Add URL Rewrite rules][]. |
| HTTP 500.19 | `allowedServerVariables`, or the rewrite section, is locked | Complete [Allow URL Rewrite server variables][]. When the section is locked, follow [Option B Unlock a locked server list][]. |
| Cannot save server variables in IIS | Feature Delegation, or a locked section | Follow [Option B Unlock a locked server list][], then [Option A IIS Manager][] or [Option C appcmd][]. |
| HTTP 502 | The proxy cannot reach API Gateway, or TLS to port `8722` failed | Enable the ARR proxy. Check TLS and mutual TLS to port `8722`. See [Configure TLS][] and [Enable the ARR reverse proxy][]. |
| Rules are not listed when URL Rewrite is opened on the server node | The rules are stored on the Cortex site | Open **Sites** → **Cortex** → **URL Rewrite**. |

Escalate when URL Rewrite or ARR cannot be installed, the rewrite section cannot be unlocked, or the certificate dialog remains after the [Browser checks][] show port `443` only.

## Next Steps?

1. [Try it out][]

[Try it out]: {{< url path="Cortex.GettingStarted.OnPremise.AddConfigurationPortalToCortex.PostInstallation.TryItOut" >}}
[Studio Authorisation]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.MainDoc" >}}
[Gateway]: {{< url path="Cortex.Guides.Gateway.MainDoc" >}}
[installing the Application Servers]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureInstallationScriptNew" >}}
[Copy and configure relevant files]: {{< ref path="#copy-and-configure-relevant-files" >}}
[Add URL Rewrite rules]: {{< ref path="#add-url-rewrite-rules" >}}
[Set up User Access Control]: {{< ref path="#set-up-user-access-control" >}}
[Allow URL Rewrite server variables]: {{< ref path="#allow-url-rewrite-server-variables" >}}
[Option A IIS Manager]: {{< ref path="#option-a-iis-manager" >}}
[Option B Unlock a locked server list]: {{< ref path="#option-b-unlock-a-locked-server-list" >}}
[Option C appcmd]: {{< ref path="#option-c-appcmd" >}}
[Configure TLS]: {{< ref path="#configure-tls" >}}
[Enable the ARR reverse proxy]: {{< ref path="#enable-the-arr-reverse-proxy" >}}
[Browser checks]: {{< ref path="#browser-checks" >}}
[URL Rewrite Module 2.x]: {{< url path="IIS.Downloads.UrlRewrite-2_1" >}}
[Application Request Routing 3.0]: {{< url path="IIS.Downloads.ApplicationRequestRouting-3_0" >}}
