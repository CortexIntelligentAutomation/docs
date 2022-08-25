---
title: "Add Innovation to the 7.2 Web Application Server"
linkTitle: "Add Innovation to the 7.2 Web Application Server"
description: "Information about adding Innovation functionality to the 7.2 Web Application Server."
weight: 40
---

# {{< param title >}}

This guide describes how to add Innovation functionality to a 7.2 Web Application Server. Please ensure that [Install Application Servers and Load Balancer][] has been completed before starting this installation. These steps assume that the v7.2 version of Gateway and its prerequisites have already been installed on the Web Application Server.

The steps to add Innovation functionality to 7.2 are:
1. Install Flow Debugger Service
1. Reconfigure the Cortex.Gateway.SetParameters.xml file
1. Update Gateway

## Extract Installation Artefacts

1. We recommend that the Flow Debugger Service and Gateway are installed on the same Web Application Server. Copy the following artefacts to a folder on the machine (the version numbers may differ):
   * Cortex Innovation 2022.6 - Block Packages.zip
   * Cortex Innovation 2022.6 - Gateway.zip
   * Cortex Innovation 2022.6 - Flow Debugger Service.zip
   * Cortex Innovation 2022.6 - Web App Server Install Scripts.zip

1. Extract the `Cortex Innovation 2022.6 - Web App Server Install Scripts.zip` zip file to a folder with the same name.
1. Extract the `Cortex Innovation 2022.6 - Gateway.zip` zip file to a folder with the same name.

## Install Prerequisites

### Licensing

Ensure that a valid Cortex licence file named `Cortex.lic` exists on the Web Application server, in the location `%ProgramData%\Cortex\Licences`. If it does not, follow the instructions located at [Licensing Requirements][].

## Install Flow Debugger Service

### Get Application Pool User

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

### Configure Installation Script

1. In the `Cortex Innovation 2022.6 - Web App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.FlowDebuggerService.ps1` script and open it with a text editor.

1. Choose the tab below that matches the configuration for this installation, then update the script to match, changing the parameters according to the details given below:

    {{< tabpane lang="powershell" >}}
        {{< tab header="CA Certs">}}
.\Cortex.Install.FlowDebuggerService.ps1 `
    -FlowDebuggerServicePath "C:\Install\Cortex Innovation 2022.6 - Flow Debugger Service.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2022.6 - Block Packages.zip" `
    -FlowDebuggerBasicAuthUserName "BasicAuthUser" `
    -FlowDebuggerBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -Credential $AppPoolIdentity
        {{< /tab >}}
        {{< tab header="Self-Signed Certs" >}}
.\Cortex.Install.FlowDebuggerService.ps1 `
    -FlowDebuggerServicePath "C:\Install\Cortex Innovation 2022.6 - Flow Debugger Service.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2022.6 - Block Packages.zip" `
    -FlowDebuggerBasicAuthUserName "BasicAuthUser" `
    -FlowDebuggerBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -UseSelfSignedCertificates `
    -Credential $AppPoolIdentity
        {{< /tab >}}
    {{< /tabpane >}}

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`FlowDebuggerServicePath`                     | Configure this value with the location of the Flow Debugger Service zip file on the Web Application Server. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the Web Application Server. |
    |`FlowDebuggerBasicAuthUserName`               | Configure this value with the username that will be used for Basic Authentication when Gateway makes HTTPS requests to the Flow Debugger Service. <br /><br />For security reasons it is recommended that the default value `BasicAuthUser` should be changed.<br /><br />Currently only Basic Authentication using a single user is supported, OAuth2 will be supported in a future release.<br /><br />This value will be needed [later, when updating Gateway][Install Gateway]. |
    |`FlowDebuggerBasicAuthPwd`                     | Configure this value with the password that will be used for Basic Authentication when Gateway makes HTTPS requests to the Flow Debugger Service. <br /><br />This password should be [Cortex Encrypted][]. For security reasons it is recommended that the default value `ADA9883B11BD4CDC908B8131B57944A4` should be changed.<br /><br />This value will be needed [later, when updating Gateway][Install Gateway].|
    |`UseSelfSignedCertificates`                    | Enables Flow Debugger Service to communicate with Gateway using generated Self-Signed Certificates rather than CA Certificates.  <br /><br /> Not recommended for production use.  |
    |`Credential`                                  | The credentials of the user that will be used to run the `Debugger` application pool in IIS. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |

1. Save and close `Cortex.Innovation.Install.FlowDebuggerService.ps1`.

### Run Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - Web App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.6 - Web App Server Install Scripts"
    ```

1. Install the Flow Debugger Service by running the following command (`Tee-Object` will write output to both the PowerShell console and a log file, `FilePath` can be changed if required):
  
    ```powershell
    .\Cortex.Innovation.Install.FlowDebuggerService.ps1 | Tee-Object -FilePath "cortex-flow-debugger-service-install-log.txt"
    ```

1. A credentials prompt will appear. Enter the credentials of the user that should run the `Debugger` application pool in IIS. If using the `NETWORK SERVICE` user, enter any user as the username and leave the password blank; the `NETWORK SERVICE` user will need to be selected in the final step.
1. Wait for the script to finish running. This should take approximately 2 minutes.
1. An error may have appeared saying:

    ```
    The Windows Process Activation Service service is not started.
    ```

    This can be ignored.
1. Check that there have been no other errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the installation.

    If the errors do not give any instructions on how to rectify, please contact [Cortex Service Portal][] for further assistance.

1. If using `NETWORK SERVICE` for the application pool user:

    1. Open Internet Information Services (IIS) Manager.
    1. On the left, expand the server node.
    1. Click `Application Pools`.
    1. Right-click on the `Debugger` application pool and select `Advanced Settings...`.
    1. In the `Advanced Settings` dialog, click on `Identity` and then click the ellipses (`...`).
    1. In the `Application Pool Identity` dialog, select `Built-in account`, then select `NetworkService` from the drop-down, then click `OK`.
    1. Right-click on the `Debugger` application pool and click `Recycle...`.

## Update Gateway

### Configure Installation Parameters

1. In the `Cortex Innovation 2022.6 - Gateway` folder, locate the `CortexGateway.SetParameters.xml` file and open it with a text editor.
1. Use the existing v7.2 `CortexGateway.SetParameters.xml` file and/or web.config to transfer all existing values to the Innovation `CortexGateway.SetParameters.xml` file.
1. Next, configure the following Innovation specific values:

    {{< highlight powershell "linenos=table,hl_lines=6-18 20-21 23-26,linenostart=1" >}}
    <?xml version="1.0" encoding="utf-8"?>
    <parameters>
        <setParameter name="IIS Web Application Name" value="Cortex/gateway" />
        <setParameter name="Web Version Information" value="3.0.0" />
        <setParameter name="Reporting Service Endpoint Address" value="http://machineName:ReportManagerPort/ReportServer/ReportService2010.asmx" />
        <setParameter name="Reporting Server URL"value="http://machineName:ReportManagerPort/Reportserver" />
        <setParameter name="Reporting Service User Name" value="Domain\Cortex_SQL_Admin" />
        <setParameter name="Reporting Service Password" value="password" /> 
        <setParameter name="Allow Multiple Connections Per OCI Type" value="&lt;value&gt;false&lt;/value&gt;" />
        <setParameter name="Show Groups only in Licence Usage" value="&lt;value&gt;false&lt;/value&gt;" />
        <setParameter name="Flow Interface Username" value="&lt;value&gt;CortexFlow&lt;/value&gt;" />
        <setParameter name="Flow Interface Password" value="&lt;value&gt;C0rt3xFl0w&lt;/value&gt;" />
        <setParameter name="Show Token" value="&lt;value&gt;false&lt;/value&gt;" />
        <setParameter name="Break On Exception" value="&lt;value&gt;true&lt;/value&gt;" />
        <setParameter name="ShowVariablesPalette" value="&lt;value&gt;false&lt;/value&gt;" />
        <setParameter name="Feature Flags" value="&lt;value&gt;InnovationAnd72Id&lt;/value&gt;" />
        <setParameter name="Service Fabric Api Gateway Endpoint" value="&lt;value&gt;https://load-balancer.domain.com/&lt;/value&gt;" />
        <setParameter name="Service Fabric Using Self Signed Certificates" value="&lt;value&gt;False&lt;/value&gt;" />
        <setParameter name="Service Fabric Self Signed Certificate Subject" value="&lt;value&gt;CN=CortexServerCertificate&lt;/value&gt;" />
        <setParameter name="Service Fabric ApiGateway Basic Auth Username" value="&lt;value&gt;BasicAuthUser&lt;/value&gt;" />
        <setParameter name="Service Fabric ApiGateway Basic Auth Password" value="&lt;value&gt;ADA9883B11BD4CDC908B8131B57944A4&lt;/value&gt;" />
        <setParameter name="HSTS Enabled" value="true" />
        <setParameter name="Dot NET Flow Debugger Endpoint" value="&lt;value&gt;https://app-server.domain.com/debugger/api/&lt;/value&gt;" />
        <setParameter name="Dot NET Flow Debugger Basic Auth Username" value="&lt;value&gt;BasicAuthUser&lt;/value&gt;" />
        <setParameter name="Dot NET Flow Debugger Basic Auth Password" value="&lt;value&gt;ADA9883B11BD4CDC908B8131B57944A4&lt;/value&gt;" />
        <setParameter name="Dot NET Flow Debugger Using Self Signed Certificates" value="&lt;value&gt;False&lt;/value&gt;" />
        <setParameter name="Dot NET Flow Debugger Self Signed Certificate Subject" value="&lt;value&gt;CN=CortexServerCertificate&lt;/value&gt;" />
        <setParameter name="Garbage collection schedule" value="&lt;value&gt;0 0 1 ? * SUN&lt;/value&gt;" />
        <setParameter name="Garbage collection arguments" value="&lt;value&gt;--auto&lt;/value&gt;" />
        <setParameter name="Garbage collection lock timeout" value="&lt;value&gt;02:00:00&lt;/value&gt;" />
        <setParameter name="ModelDBContext-Web.config Connection String" value="Data Source=.\SQLEXPRESS;Initial Catalog=CortexWeb;Integrated Security=True;MultipleActiveResultSets=True" />
        <setParameter name="AuthContext-Web.config Connection String" value="Data Source=.\SQLEXPRESS;Initial Catalog=CortexWeb.Auth;Integrated Security=True;MultipleActiveResultSets=True" />
        <setParameter name="SignalRContext-Web.config Connection String" value="Data Source=.\SQLEXPRESS;Initial Catalog=CortexWeb.SignalR;Integrated Security=True;MultipleActiveResultSets=True" />
        <setParameter name="ReactorEntities-Web.config Connection String" value="metadata=res://*/Models.ReactorEnities.csdl|res://*/Models.ReactorEnities.ssdl|res://*/Models.ReactorEnities.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=.\SQLEXPRESS;initial catalog=Reactor;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" />
        <setParameter name="CortexDWEntities-Web.config Connection String" value="metadata=res://*/Models.CortexDataWarehouseEntities.csdl|res://*/Models.CortexDataWarehouseEntities.ssdl|res://*/Models.CortexDataWarehouseEntities.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=.\SQLEXPRESS;initial catalog=CortexDW;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" />
        <setParameter name="CortexRepositories-Web.config Connection String" value="c:\\CortexWeb\\Repo\" />
    </parameters>
    {{</ highlight>}}

    |Line Number | Name                                           | Description |
    |------------|------------------------------------------------|-------------|
    | 16         |`Feature Flags`                                 | Replace `InnovationAnd72Id` with the feature identifier for Innovation with v7.2, which should have been provided by Cortex when fulfilling the [Licensing Requirements][], if it wasn't it should be requested using [Cortex Service Portal][]. |
    | 17         |`Service Fabric Api Gateway Endpoint`           | Replace `load-balancer.domain.com` with the fully qualified domain name of the Load Balancer Server. The port should be specified if it is not the default HTTPS port (443), and there must be a trailing slash, e.g. `https://load-balancer.domain.com/` or `https://load-balancer.domain.com:8722/`. |
    | 18         |`Service Fabric Using Self Signed Certificates` | Configure the value as `False` if you used valid CA certificates when installing the Application Servers, `True` if you used self-signed certificates. |
    | 20         |`Service Fabric ApiGateway Basic Auth Username` | This must be changed if you used a non-default `ApiGatewayBasicAuthUserName` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used. |
    | 21         |`Service Fabric ApiGateway Basic Auth Password` | This must be changed if you used a non-default `ApiGatewayBasicAuthPassword` when [installing the Application Servers][Configure Installation Script]; if so, this value must be configured to the one used. It can be [Cortex Encrypted][].|
    | 23         |`Dot NET Flow Debugger Endpoint`                | Replace `app-server.domain.com` with the fully qualified domain name of the Web Application Server. |
    | 24         |`Dot NET Flow Debugger Basic Auth Username` | This must be changed if you used a non-default `FlowDebuggerBasicAuthUserName` when [installing the Flow Debugger Service][Configure Debugger Installation Script]; if so, this value must be configured to the one used. |
    | 25         |`Dot NET Flow Debugger Basic Auth Password` | This must be changed if you used a non-default `FlowDebuggerBasicAuthPassword` when [installing the Flow Debugger Service][Configure Debugger Installation Script]; if so, this value must be configured to the one used. It can be [Cortex Encrypted][].|
    | 26         |`Dot NET Flow Debugger Using Self Signed Certificates` | Configure the value as `False` if you are using valid CA certificates to secure the site containing Gateway and Flow Debugger Service, `True` if using self-signed certificates. |

### Test Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - Gateway` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.6 - Gateway"
    ```

1. Test that everything is configured correctly by running the following command:

    ```powershell
    .\CortexGateway.deploy.cmd /T
    ```

    In the event any errors, there will be an error message displayed at the end of the output with a line confirming the Error Count.

### Run Installation Script

1. Ensure the Gateway application pool is stopped:
    1. Open Internet Information Service (IIS) Manager.
    1. In the left pane, expand the server node.
    1. Click `Application Pools` to display a list of the Application Pools.
    1. Right-click the `Cortex Gateway` application pool and select `Stop`.

    {{% alert title="Note" %}}Failure to stop the application pool will result in a permissions error when installing Gateway.{{% /alert %}}

1. In the Windows PowerShell (x64) window, run the following command to install Gateway:

    ```powershell
    .\CortexGateway.deploy.cmd /Y
    ```

    In the event of any errors, there will be an error message displayed at the end of the output with a line confirming the Error Count.

1. Start the Gateway application pool:
    1. Open Internet Information Service (IIS) Manager.
    1. In the left pane, expand the server node.
    1. Click `Application Pools` to display a list of the Application Pools.
    1. Right-click the `Cortex Gateway` application pool and select `Start`.
1. Once the application pool has been started, the site will be available on `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.
    {{% alert title="Note" %}} If the application pool does not stay started, ensure that the user it runs as has `Log on as a service` and `Log on as a batch job` permissions or belongs to a group that has those permissions.{{% /alert %}}

## Next Steps?
1. [Try it out][]

[Try it out]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.TryItOut" >}}
[Configure Installation Script]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureInstallationScript" >}}
[Get Application Pool User]: {{< ref "#get-application-pool-user" >}}
[Install Certificate]: {{< ref "#install-certificate" >}}
[Configure Debugger Installation Script]: {{< ref "#configure-installation-script" >}}
[Install Application Servers and Load Balancer]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Install Gateway]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.InstallGateway" >}}
[Licensing Requirements]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.LicensingRequirements" >}}
[Cortex Encrypted]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[Cortex Service Portal]: {{< url "Cortex.ServicePortal.MainDoc" >}}
[URL Rewrite]: {{< url "IIS.Downloads.UrlRewrite-2_1" >}}
[NET Framework 471]: {{< url "MSDotNet.Framework471.MainDoc" >}}
[Microsoft Web Deploy]: {{< url "MSDownload.WebDeploy" >}}
[C++ Redistributable]: {{< url "MSDownload.CPlusPlusRedistributable.2013" >}}
