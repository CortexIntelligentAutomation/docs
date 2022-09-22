---
title: "Install Application Server"
linkTitle: "Install Application Server"
description: "Information about installing the Application Server."
weight: 30
---

# {{< param title >}}

This guide describes how to install the Application Server components on the server. Please ensure that the [Prerequisites][] have been read before starting this installation.

## Extract Installation Artefacts

1. Copy the following artefacts to a folder on the server (the version numbers may differ):
   * Cortex Innovation 2022.6 - Block Packages.zip
   * Cortex Innovation 2022.6 - App Services.zip
   * Cortex Innovation 2022.6 - App Server Install Scripts.zip

1. Extract the `Cortex Innovation 2022.6 - App Server Install Scripts.zip` file to a folder with the same name.

## Install Microsoft .NET Framework 4.7.1

Microsoft Service Fabric requires a minimum of Microsoft .NET Framework 4.7.1 to be installed on the server.

To find the version of the framework that is installed:

1. On the Start menu, choose Run.
2. In the open box, enter `regedit.exe`. You must have administrative credentials to run regedit.exe.
3. In the Registry Editor, open the subkey `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full`.
4. If the `Full` subkey is not present, then you do not have the .NET Framework 4.5 or later installed.
5. Check for a `DWORD` value named `Release`. The existence of the Release DWORD indicates the .NET Framework 4.5 or newer has been installed on that computer. If the value is `461308` or over then at least .NET Framework 4.7.1 is installed and no further steps need to be taken. If it is not installed, continue with the following steps to install it.

To install .NET Framework 4.7.1:

1. Download the [.NET Framework 4.7.1][NET Framework 471] installer.
2. Double-click on the installer file to run it.
3. Follow the wizard to complete the installation.

## Apply Recommended Security Measures

These are non-compulsory security measures, recommended to be applied to the server, in order to prevent potential attacks that exploit known industry security vulnerabilities.

Applying these measures may impact other applications running on your server. Therefore, it is your responsibility to ensure that other applications and their clients will not be affected by the changes.

### Only Use Recommended Encryption Algorithms and TLS Protocols

A collection of registry settings need to be applied to guarantee your server is only using the recommended encryption algorithms and TLS protocols. Information about these settings can be found at [SSL Best Practices][].

{{% alert type="warning" title="Warning" %}}Disabling specific TLS versions or specific Cipher Suites can have impact on Cortex components themselves as well as their communication capabilities with third party systems and services, e.g. Flow Debugger Service executing flows with blocks which communicate with 3rd parties via PowerShell or REST. All parties communicating together must support a shared protocol version and cipher suite, otherwise they will not be able to establish a secure communication link between each other.{{% /alert %}}

The settings can be applied by running a script. Be aware that the server will be restarted when the script is run. Apply the settings by following these instructions:

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.6 - App Server Install Scripts"
    ```

1. Run the `Cortex.Innovation.Install.SSLBestPractices.ps1` script using the following command:

    ```powershell
    .\Cortex.Innovation.Install.SSLBestPractices.ps1
    ```

1. To use all the recommended settings click `Apply all` to the first prompt.

    To selectively apply each setting select `Choose which to apply`. Each change will then be prompted with a Yes/No confirmation before applying.
1. Restart the machine when the script asks.

## Add Antivirus Exclusions

1. If Windows Defender is not running on the server, ensure that the [Antivirus Exclusions][] have been added to the running antivirus software on the server and continue to the next section, otherwise follow these steps:
    1. Open a Windows PowerShell (x64) window as administrator.
    1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - App Server Install Scripts` folder using the following command, modifying the path as necessary:

        ```powershell
        cd "C:\Install\Cortex Innovation 2022.6 - App Server Install Scripts"
        ```

    1. Run the `Cortex.Innovation.Add.WindowsDefenderExclusions.ps1` script using the following command, modifying the `ApplicationServers` value to contain the NETBIOS name or fully qualified domain name of the server:

        ```powershell
        .\Cortex.Innovation.Add.WindowsDefenderExclusions.ps1 -ApplicationServers @("app-server1")
        ```

    1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
    1. A message will indicate that the script has completed successfully.

## Check Port Usage

1. To check all necessary ports are free, follow these steps.
    1. Open a Windows PowerShell (x64) window as administrator.
    1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - App Server Install Scripts` folder using the following command, modifying the path as necessary:

        ```powershell
        cd "C:\Install\Cortex Innovation 2022.6 - App Server Install Scripts"
        ```

    1. Run the `Cortex.Innovation.Test.PortUsage.ps1` script using the following command, modifying the `ApplicationServers` value to contain the NETBIOS name or fully qualified domain name of the server:

        ```powershell
        .\Cortex.Innovation.Test.PortUsage.ps1 -ApplicationServers @("app-server1")
        ```

    1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.

    1. If all ports are free, the script will report the following:

        `All ports required by Cortex Innovation are free`

        If this is the case, continue to the next section. Otherwise, consult the messages returned by the script, which will give details about how to modify the `Cortex.Innovation.Install.Config.json` configuration file, in the `Cortex Innovation 2022.6 - App Server Install Scripts` folder, to use different ports. This will be used later during installation.

        The `Cortex.Innovation.Test.PortUsage.ps1` script cannot currently re-check modified ports in the configuration file so these need to be manually checked to see that they are free.

## Configure Installation Script

1. In the `Cortex Innovation 2022.6 - App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.ps1` script and open it with a text editor.
1. Choose the tab below that matches the configuration for this installation, then update the script to match, changing the parameters according to the details given below:

    {{< tabpane lang="powershell" >}}
        {{< tab header="CA Certs" >}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -AppServicesPath "C:\Install\Cortex Innovation 2022.6 - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2022.6 - Block Packages.zip" `
    -ApiGatewayBasicAuthUserName "BasicAuthUser" `
    -ApiGatewayBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1") `
    -ServerCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ServerCertificatePwd "myPassword" `
    -SkipLoadBalancer `
    -Credential $Credential `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-app-install-log.txt"
        {{< /tab >}}
        {{< tab header="Self-Signed Certs" >}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -AppServicesPath "C:\Install\Cortex Innovation 2022.6 - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2022.6 - Block Packages.zip" `
    -ApiGatewayBasicAuthUserName "BasicAuthUser" `
    -ApiGatewayBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1") `
    -UseSelfSignedCertificates `
    -SkipLoadBalancer `
    -Credential $Credential `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-app-install-log.txt"
        {{< /tab >}}
    {{< /tabpane >}}

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`AppServicesPath`                              | Configure this value with the location of the App Services zip file on the server. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the server. |
    |`ApiGatewayBasicAuthUserName`                 | Configure this value with the username that will be used for Basic Authentication when making HTTPS requests to the API Gateway Service (e.g. starting production flows). <br /><br />Currently only Basic Authentication using a single user is supported, OAuth2 will be supported in a future release.<br /><br />This value will be needed [later, when upgrading Gateway][Upgrade Gateway]. |
    |`ApiGatewayBasicAuthPwd`                      | Configure this value with the password that will be used for Basic Authentication when making HTTPS requests to the API Gateway Service (e.g. starting production flows). This should be [Cortex Encrypted][]. <br /><br />This value will be needed [later, when upgrading Gateway][Upgrade Gateway].|
    |`CustomerName`                                | A name identifying the platform being installed. This must have no spaces or symbols. It will be appended to the node names that are displayed in Service Fabric Explorer. |
    |`ApplicationServerIPv4Addresses`              | The IPv4 address of the server.|
    |`ServerCertificatePath`                       | The local path of a .PFX certificate file on the server. Environment variables cannot be used. <br /><br />This is only needed if installing with CA Certificates (Recommended). The certificate should meet the [Certificate Requirements][]. <br /><br />This certificate will be used for: <ul><li>Securing communication between the Application Services.</li><li>Allowing Application Services to identify themselves to clients such as Gateway.</li><li>Preventing unauthorised nodes from joining the single node cluster.</li><li>Connecting to Service Fabric Explorer from each of the Application Servers.</li></ul>{{< alert type="warning" title="Warning" >}}It is critical to set a reminder to {{< ahref "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.RolloverCertificates" "update certificates" >}} in good time before they expire. If they expire then the platform will cease to function and {{< ahref "Cortex.ServicePortal.MainDoc" "Cortex Service Portal" >}} must be contacted for support.{{< /alert >}}|
    |`ServerCertificatePwd`                        | The password for the .PFX certificate file specified in `ServerCertificatePath`. <br /><br /> This is only needed if installing with CA Certificates (Recommended).|
    |`UseSelfSignedCertificates`                    | Installs Application Services and required infrastructure using generated Self-Signed Certificates rather than CA Certificates.  <br /><br /> Not recommended for production use.  |
    |`SkipLoadBalancer`                             | Installs Application Services and required infrastructure without installing a load balancer. |
    |`Credential`                                   | The credentials of the user which will be used to perform remote operations on the server. It must be a domain user that is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`AcceptEULA`                                   | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                   | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

    The `ApiGatewayBasicAuthUserName` and `ApiGatewayBasicAuthPwd` will be needed [later, when upgrading Gateway][Upgrade Gateway].

    {{% alert title="Note" %}}
More advanced configuration (such as changing ports) can be undertaken by modifying the `Cortex.Innovation.Install.Config.json` file but this shouldn't be required for most installations. More information about this can be found at {{< ahref "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.AdvancedConfigSingleServer" "Advanced Application Server and Load Balancer Configuration Changes" >}}.
    {{% /alert %}}

1. Save and close `Cortex.Innovation.Install.ps1`.

## Test Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.6 - App Server Install Scripts"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.ps1 -WhatIf
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInnovationInstallScriptName>.ps1 -WhatIf -AcceptEULA
    ```

1. Run the PowerShell command to test the installation script.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ.
1. Wait for the command to finish. It will display the output of the installation command without making any changes to the system.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are no errors, continue to the next section; otherwise, check if the errors have any instructions for rectifying the issue and follow them.

    If there are no useful instructions, check that all previous steps have been followed correctly and, if not, rectify it and run the command again. <br /><br />If this does not work, please contact [Cortex Service Portal][] for further assistance. The `WhatIf` script will have created a temporary version of the config file in the script location, showing what changes would be made to it when the script runs. The name is appended with `-WhatIf` (e.g. `Cortex.Innovation.Install.Config-WhatIf.json`). This file can be provided when obtaining support.

## Run Installation Script

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.ps1
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInnovationInstallScriptName>.ps1 -AcceptEULA
    ```

1. Run the PowerShell command to install HA Services and the required infrastructure.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ. This should be entered carefully and recorded as it may be needed if seeking support from [Cortex Service Portal][]. Press OK.
1. Wait for the script to finish running. This should take approximately 10 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, check your configuration files, and retry the installation.

    In some circumstances, retrying may error due to components being installed already. In this case please run the following command, followed by the original installation command:

    ```powershell
    .\Cortex.Innovation.Uninstall.ps1 -SkipLoadBalancer
    ```

    If the errors do not give any instructions on how to rectify, see [Troubleshooting During Installation][] for further information; if this does not help then please contact [Cortex Service Portal][] for assistance.

## Check Application Services

1. Log on to the server.
1. Import the certificate, used in the `ServerCertificatePath` parameter of the [Configure Installation Script][] section, to your `Current User` certificate store. This can be achieved by double clicking on the certificate .PFX file and following the wizard.

    If using self-signed certificates, the certificate can be retrieved by using the `Manage Computer Certificates` tool in Windows to export the `CortexServerCertificate` from the `Personal` store and then importing it to the `Current User` store by double-clicking on it and following the wizard.
1. Open a web browser.
1. Navigate to `https://server.domain.com:9080/Explorer`, where `server.domain.com` is the fully qualified domain name of the server. Replace `9080` with new `httpGatewayEndpointPort` value if it was changed during configuration.

    The screen should resemble that in the following figure:
    {{< figure src="/images/Service Fabric Explorer - Single.png" title="Healthy Service Fabric Explorer Cluster" >}}

    The status circles should be entirely green - this indicates that the node and all services and instances are healthy. Other status pages can be accessed by expanding items in the leftmost pane. Issues can be tracked down to the failing component by expanding items with warning triangles or error icons on. The next few diagrams show the status pages for a healthy system.

    After expanding the application, clicking on any of the services should display a green circle and `Status = Active`:

    {{< figure src="/images/Service Fabric Explorer - Service - Single.png" title="Healthy Service Fabric Explorer Service" >}}

    After expanding either of the services, clicking on any of the instances/partitions should display a green circle and `Status = Ready`:

    {{< figure src="/images/Service Fabric Explorer - Instance - Single.png" title="Healthy Service Fabric Explorer Instance" >}}

    Clicking on any of the nodes at the bottom of the leftmost pane should display a green circle and `Status = Up`:

    {{< figure src="/images/Service Fabric Explorer - Node - Single.png" title="Healthy Service Fabric Explorer Node" >}}

    If any warning triangles appear, wait for 5 minutes or so as the cluster may still be starting up. If the cluster looks OK, go to the next section.

    If the warnings persist or anything on the screen goes red, expand the items to find the individual services and instances which have errors or warnings. Warnings should not be ignored as they can indicate that the service can’t start but is still in the retry phase. Error and warning messages should be displayed on the status screens and should indicate what is wrong.

    If no useful message can be seen here, the service log files may contain more information. These can be found on the server at:

    * %ProgramData%/Cortex/Cortex API Gateway Service
    * %ProgramData%/Cortex/Cortex Flow Execution Service

    If no solution can be found, please contact [Cortex Service Portal][] for further assistance.

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to perform further actions in future, such as troubleshooting, certificate rollover, uninstallation, reinstallation and updates.

## Next Steps?

1. [Install Web Application Server][]

[Eula]: {{< url "Cortex.Website.Eula.MainDoc" >}}
[Install Web Application Server]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.AddInnovationTo72WebApplicationServer" >}}
[Certificate Requirements]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.CertificateRequirements" >}}
[Upgrade Gateway]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.InstallGateway" >}}
[Troubleshooting During Installation]: {{< url "Cortex.Reference.Troubleshooting.Installation.TroubleshootingDuringInstallation" >}}
[Configure Installation Script]:  {{< ref "#configure-installation-script" >}}
[Prerequisites]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.Prerequisites" >}}
[Antivirus Exclusions]: {{< url "Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.AntivirusExclusions" >}}
[SSL Best Practices]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Cortex Encrypted]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[Cortex Service Portal]: {{< url "Cortex.ServicePortal.MainDoc" >}}
[NET Framework 471]: {{< url "MSDotNet.Framework471.MainDoc" >}}
