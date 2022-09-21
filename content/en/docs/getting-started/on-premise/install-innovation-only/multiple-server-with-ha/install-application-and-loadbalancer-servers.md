---
title: "Install Application Servers and Load Balancer"
linkTitle: "Install Application Servers and Load Balancer"
description: "Information about installing the Application Servers and Load Balancer Server."
weight: 30
---

# {{< param title >}}

This guide describes how to install the Application Servers and Load Balancer Server. Please ensure that the [Prerequisites for installing Innovation][] have been read before starting this installation.

## Extract Installation Artefacts

1. Choose one of the Application Servers to be used for installation, and copy the following artefacts to a folder on it (the version numbers may differ):
   * Cortex Innovation 2022.6 - Block Packages.zip
   * Cortex Innovation 2022.6 - App Services.zip
   * Cortex Innovation 2022.6 - App Server Install Scripts.zip

1. Extract the `Cortex Innovation 2022.6 - App Server Install Scripts.zip` file to a folder with the same name.

## Install Microsoft .NET Framework 4.7.1

Microsoft Service Fabric requires a minimum of Microsoft .NET Framework 4.7.1 to be installed on each Application Server.

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

These are non-compulsory security measures, recommended to be applied to Application Servers and the Load Balancer Server, in order to prevent potential attacks that exploit known industry security vulnerabilities.

Applying these measures may impact other applications running on your servers. Therefore, it is your responsibility to ensure that other applications and their clients will not be affected by the changes.

### Only Use Recommended Encryption Algorithms and TLS Protocols

A collection of registry settings need to be applied to guarantee your server is only using the recommended encryption algorithms and TLS protocols. Information about these settings can be found at [SSL Best Practices][].

{{% alert type="warning" title="Warning" %}}Disabling specific TLS versions or specific Cipher Suites can have impact on Cortex components themselves as well as their communication capabilities with third party systems and services, e.g. Flow Debugger Service executing flows with blocks which communicate with 3rd parties via PowerShell or REST. All parties communicating together must support a shared protocol version and cipher suite, otherwise they will not be able to establish a secure communication link between each other.{{% /alert %}}

The settings can be applied by running a script. Be aware that each server will be restarted when the script is run. Apply the settings by following these instructions:

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2022.6 - App Server Install Scripts"
    ```

1. Run the `Cortex.Innovation.Install.Multiple.SSLBestPractices.ps1` script using the following command, modifying the `ApplicationServers` value to contain the NETBIOS names or fully qualified domain names of the Application Servers and the `LoadBalancerServer` value to contain the NETBIOS names or fully qualified domain name of the Load Balancer Server (remove the `LoadBalancerServer` parameter if using an [alternative load balancer][]):

    ```powershell
    .\Cortex.Innovation.Install.Multiple.SSLBestPractices.ps1 -ApplicationServers @("app-server1", "app-server2", "app-server3") -LoadBalancerServer "lb-server"
    ```

    {{% alert title="Note" %}}
To avoid answering all of the prompts `-Override 0` can be added to the end of the script. This will automatically apply all settings and forcibly restart the servers.
    {{% /alert %}}

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (Application and Load Balancer) and press `OK`.
1. To use all the recommended settings click `Apply all` to the each `Apply Cortex recommended security best practices` prompt.

    To selectively apply each setting select `Choose which to apply`. Each change will then be prompted with a Yes/No confirmation before applying. This will need to be done for each server.
1. Restart each machine when the script asks. The current machine will be restarted last, the PowerShell script will close at this time.

## Add Antivirus Exclusions

1. If Windows Defender is not running on the Application Servers, ensure that the [Antivirus Exclusions][] have been added to the running antivirus software on each of the Application Servers and continue to the next section, otherwise follow these steps:
    1. Open a Windows PowerShell (x64) window as administrator.
    1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - App Server Install Scripts` folder using the following command, modifying the path as necessary:

        ```powershell
        cd "C:\Install\Cortex Innovation 2022.6 - App Server Install Scripts"
        ```

    1. Run the `Cortex.Innovation.Add.WindowsDefenderExclusions.ps1` script using the following command, modifying the `ApplicationServers` value to contain the NETBIOS names or fully qualified domain names of the Application Servers:

        ```powershell
        .\Cortex.Innovation.Add.WindowsDefenderExclusions.ps1 -ApplicationServers @("app-server1", "app-server2", "app-server3")
        ```

    1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all Application Servers and press OK.
    1. A message will indicate that the script has completed successfully.

## Check Port Usage

1. To check all necessary ports are free, follow these steps.
    1. Open a Windows PowerShell (x64) window as administrator.
    1. Navigate PowerShell to inside the `Cortex Innovation 2022.6 - App Server Install Scripts` folder using the following command, modifying the path as necessary:

        ```powershell
        cd "C:\Install\Cortex Innovation 2022.6 - App Server Install Scripts"
        ```

    1. Run the `Cortex.Innovation.Test.PortUsage.ps1` script using the following command, modifying the `ApplicationServers` value to contain the NETBIOS names or fully qualified domain names of the Application Servers:

        ```powershell
        .\Cortex.Innovation.Test.PortUsage.ps1 -ApplicationServers @("app-server1", "app-server2", "app-server3")
        ```

    1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all Application Servers and press OK.

    1. If all ports are free, the script will report the following for each Application Server:

        `All ports required by Cortex Innovation are free`

        If this is the case, continue to the next section. Otherwise, consult the messages returned by the script, which will give details about how to modify the `Cortex.Innovation.Install.Config.json` configuration file, in the `Cortex Innovation 2022.6 - App Server Install Scripts` folder, to use different ports. This will be used later during installation.

        The `Cortex.Innovation.Test.PortUsage.ps1` script cannot currently re-check modified ports in the configuration file so these need to be manually checked to see that they are free.

## Configure Installation Script

1. In the `Cortex Innovation 2022.6 - App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.ps1` script and open it with a text editor.
1. Choose the tab below that matches the configuration for this installation, then update the script to match, changing the parameters according to the details given below:

    {{< tabpane lang="powershell" >}}
        {{< tab header="CA Certs, Built-in Load Balancer">}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -AppServicesPath "C:\Install\Cortex Innovation 2022.6 - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2022.6 - Block Packages.zip" `
    -ApiGatewayBasicAuthUserName "BasicAuthUser" `
    -ApiGatewayBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -LoadBalancerServerIPv4Address "192.168.1.4" `
    -ServerCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ServerCertificatePwd "myPassword" `
    -ClientCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ClientCertificatePwd "myPassword" `
    -Credential $Credential `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-ha-install-log.txt"
        {{< /tab >}}
        {{< tab header="Self-Signed Certs, Built-in Load Balancer" >}}
    .\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -AppServicesPath "C:\Install\Cortex Innovation 2022.6 - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2022.6 - Block Packages.zip" `
    -ApiGatewayBasicAuthUserName "BasicAuthUser" `
    -ApiGatewayBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -LoadBalancerServerIPv4Address "192.168.1.4" `
    -UseSelfSignedCertificates `
    -Credential $Credential `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-ha-install-log.txt"
        {{< /tab >}}
        {{< tab header="CA Certs, Alternative Load Balancer" >}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -AppServicesPath "C:\Install\Cortex Innovation 2022.6 - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2022.6 - Block Packages.zip" `
    -ApiGatewayBasicAuthUserName "BasicAuthUser" `
    -ApiGatewayBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -ServerCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ServerCertificatePwd "myPassword" `
    -ClientCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ClientCertificatePwd "myPassword" `
    -SkipLoadBalancer `
    -Credential $Credential `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-ha-install-log.txt"
        {{< /tab >}}
        {{< tab header="Self-Signed Certs, Alternative Load Balancer" >}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -AppServicesPath "C:\Install\Cortex Innovation 2022.6 - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2022.6 - Block Packages.zip" `
    -ApiGatewayBasicAuthUserName "BasicAuthUser" `
    -ApiGatewayBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -UseSelfSignedCertificates `
    -SkipLoadBalancer `
    -Credential $Credential `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-ha-install-log.txt"
        {{< /tab >}}
    {{< /tabpane >}}

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`AppServicesPath`                              | Configure this value with the location of the Application Services zip file on the Application Server used for installation. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the Application Server used for installation. |
    |`ApiGatewayBasicAuthUserName`                     | Configure this value with the username that will be used for Basic Authentication when making HTTPS requests to the API Gateway Service (e.g. starting production flows).<br /><br />For security reasons it is recommended that the default value `BasicAuthUser` should be changed.<br /><br />Currently only Basic Authentication using a single user is supported, OAuth2 will be supported in a future release.<br /><br />This value will be needed [later, when installing Gateway][Install Gateway]. |
    |`ApiGatewayBasicAuthPwd`                      | Configure this value with the password that will be used for Basic Authentication when making HTTPS requests to the API Gateway Service (e.g. starting production flows). <br /><br />This password should be [Cortex Encrypted][]. For security reasons it is recommended that the default value `ADA9883B11BD4CDC908B8131B57944A4` should be changed. <br /><br />This value will be needed [later, when installing Gateway][Install Gateway].|
    |`CustomerName`                                | A name identifying the platform being installed. This must have no spaces or symbols. It will be appended to the node names that are displayed in Service Fabric Explorer. |
    |`ApplicationServerIPv4Addresses`              | The IPv4 addresses of the Application Servers. The first of these must be the Application Server used for installation. |
    |`LoadBalancerServerIPv4Address`               | The IPv4 address of the Load Balancer Server. This is only needed if using the built-in load balancer. |
    |`ServerCertificatePath`                       | The local path of a .PFX certificate file on the first Application Server in the `ApplicationServerIPv4Addresses` list. Environment variables cannot be used. <br /><br />This is only needed if installing with CA Certificates (Recommended). The certificate should meet the [Certificate Requirements][]. <br /><br />This certificate will be used for: <ul><li>Securing communication between the Application Services.</li><li>Allowing Application Services to identify themselves to clients such as Gateway.</li><li>Preventing unauthorised nodes from joining the HA cluster.</li><li>Connecting to Service Fabric Explorer from each of the Application Servers.</li></ul>{{< alert type="warning" title="Warning" >}}It is critical to set a reminder to {{< ahref "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.RolloverCertificates" "update certificates" >}} in good time before they expire. If they expire then the platform will cease to function and {{< ahref "Cortex.ServicePortal.MainDoc" "Cortex Service Portal" >}} must be contacted for support.{{< /alert >}}|
    |`ServerCertificatePwd`                        | The password for the .PFX certificate file specified in `ServerCertificatePath`. <br /><br /> This is only needed if installing with CA Certificates (Recommended). |
    |`ClientCertificatePath`                       | The local path of a .PFX certificate file on the first Application Server in the `ApplicationServerIPv4Addresses` list. This can be the same certificate as the `ServerCertificatePath`. Environment variables cannot be used. <br /><br />This is only needed if installing with CA Certificates (Recommended) and using the Built-In Load Balancer. The certificate should meet the [Certificate Requirements][].<br /><br />This certificate will be used for: <ul><li>Securing communication between the load balancer and the nodes on the Application Servers.</li></ul>{{< alert type="warning" title="Warning" >}}It is critical to set a reminder to {{< ahref "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.RolloverCertificates" "update certificates" >}} in good time before they expire. If they expire then the platform will cease to function and {{< ahref "Cortex.ServicePortal.MainDoc" "Cortex Service Portal" >}} must be contacted for support.{{< /alert >}}
    |`ClientCertificatePwd`                         | The password for the .PFX certificate file specified in `ClientCertificatePath`. <br /><br /> This is only needed if installing with CA Certificates (Recommended) and using the Built-In Load Balancer. |
    |`UseSelfSignedCertificates`                    | Installs Application Services and required infrastructure using generated Self-Signed Certificates rather than CA Certificates.  <br /><br /> Not recommended for production use.  |
    |`SkipLoadBalancer`                             | Installs Application Services and required infrastructure without installing a load balancer. Use when using an alternative load balancer or no load balancer. |
    |`Credential`                                   | The credentials of the user which will be used to perform remote operations on the Application Servers. It must be a domain user that is a member of the local Administrators group on all servers. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`AcceptEULA`                                   | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                   | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

    The `ApiGatewayBasicAuthUserName` and `ApiGatewayBasicAuthPwd` will be needed [later, when installing Gateway][Install Gateway].

    {{% alert title="Note" %}}
More advanced configuration (such as changing ports) can be undertaken by modifying the `Cortex.Innovation.Install.Config.json` file but this shouldn't be required for most installations. More information about this can be found at {{< ahref "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.AdvancedConfigMultipleServer" "Advanced Application Server and Load Balancer Configuration Changes" >}}.
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
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (Application and Load Balancer) and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ.
1. Wait for the command to finish. It will display the output of the installation command without making any changes to the system, to ensure things like communication between the servers are working.
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
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (Application and Load Balancer) and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ. This should be entered carefully and recorded as it may be needed if seeking support from [Cortex Service Portal][]. Press OK.
1. Wait for the script to finish running. This should take approximately 10 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, check your configuration files, and retry the installation.

    In some circumstances, retrying may error due to components being installed already. In this case please run the following command, followed by the original installation command:

    ```powershell
    .\Cortex.Innovation.Uninstall.ps1
    ```

    If the errors do not give any instructions on how to rectify, see [Troubleshooting During Installation][] for further information; if this does not help then please contact [Cortex Service Portal][] for assistance.

## Check Application Services

1. Log on to one of the Application Servers.
1. Import the client certificate, used in the `ClientCertificatePath` parameter of the [Configure Installation Script][] section, to your Current User certificate store. This can be achieved by double clicking on the client certificate .PFX file and following the wizard.

    If using self-signed certificates, the certificate can be retrieved by using the `Manage Computer Certificates` tool in Windows to export the `CortexServerCertificate` from the `Personal` store and then importing it to the `Current User` store by double-clicking on it and following the wizard.
1. Open a web browser.
1. Navigate to `https://app-server.domain.com:9080/Explorer`, where `app-server.domain.com` is the fully qualified domain name of any Application Server. Replace `9080` with new `httpGatewayEndpointPort` value if it was changed during configuration.

    The screen should resemble that in the following figure:
    {{< figure src="/images/Service Fabric Explorer.png" title="Healthy Service Fabric Explorer Cluster" >}}

    The status circles should be entirely green - this indicates that all nodes, services and instances are healthy. Other status pages can be accessed by expanding items in the leftmost pane. Issues can be tracked down to the failing component by expanding items with warning triangles or error icons on. The next few diagrams show the status pages for a healthy system.

    After expanding the application, clicking on any of the services should display a green circle and `Status = Active`:

    {{< figure src="/images/Service Fabric Explorer - Service.png" title="Healthy Service Fabric Explorer Service" >}}

    After expanding either of the services, clicking on any of the instances/partitions should display a green circle and `Status = Ready`:

    {{< figure src="/images/Service Fabric Explorer - Instance.png" title="Healthy Service Fabric Explorer Instance" >}}

    Clicking on any of the nodes at the bottom of the leftmost pane should display a green circle and `Status = Up`:

    {{< figure src="/images/Service Fabric Explorer - Node.png" title="Healthy Service Fabric Explorer Node" >}}

    If any warning triangles appear, wait for 5 minutes or so as the cluster may still be starting up. If the cluster looks OK, go to the next section.

    If the warnings persist or anything on the screen goes red, expand the items to find the individual services and instances which have errors or warnings. Warnings should not be ignored as they can indicate that the service can’t start but is still in the retry phase. Error and warning messages should be displayed on the status screens and should indicate what is wrong.

    If no useful message can be seen here, the service log files may contain more information. These can be found on each Application Server at:

    * %ProgramData%/Cortex/Cortex API Gateway Service
    * %ProgramData%/Cortex/Cortex Flow Execution Service

    If no solution can be found, please contact [Cortex Service Portal][] for further assistance.

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to perform further actions in future, such as troubleshooting, certificate rollover, uninstallation, reinstallation and updates.

## Next Steps?

1. [Install Web Application Server][]

[Eula]: {{< url "Cortex.Website.Eula.MainDoc" >}}
[Install Web Application Server]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.InstallWebApplicationServer" >}}
[Certificate Requirements]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.CertificateRequirements" >}}
[Install Gateway]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.InstallGateway" >}}
[Troubleshooting During Installation]: {{< url "Cortex.Reference.Troubleshooting.Installation.TroubleshootingDuringInstallation" >}}
[Antivirus Exclusions]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.AntivirusExclusions" >}}
[Configure Installation Script]:  {{< ref "#configure-installation-script" >}}
[Prerequisites for installing Innovation]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.Prerequisites" >}}
[alternative load balancer]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.AltLoadBalancer" >}}
[SSL Best Practices]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Cortex Encrypted]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[Cortex Service Portal]: {{< url "Cortex.ServicePortal.MainDoc" >}}
[NET Framework 471]: {{< url "MSDotNet.Framework471.MainDoc" >}}
