---
title: "Install Application Servers and Load Balancer"
linkTitle: "Install Application Servers and Load Balancer"
description: "Information about installing the Application Servers and Load Balancer Server."
weight: 30
---

# {{< param title >}}

This guide describes how to install the Application Servers and Load Balancer Server. Please ensure that the [Pre-Installation steps for adding {{% ctx %}} to {{% ctx %}} 7][Pre-Installation] have been completed before starting this installation.

## Install Microsoft .NET Framework 4.7.2

Microsoft Service Fabric requires a minimum of Microsoft .NET Framework 4.7.2 to be installed on each Application Server.

To find the version of the framework that is installed:

1. On the Start menu, choose `Run`.
1. In the open box, enter `regedit.exe`. You must have administrative credentials to run regedit.exe.
1. In the Registry Editor, open the subkey `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full`.
1. If the `Full` subkey is not present, then you do not have the .NET Framework 4.5 or later installed.
1. Check for a `DWORD` value named `Release`. The existence of the Release DWORD indicates the .NET Framework 4.5 or newer has been installed on that computer. If the value is `461808` or over then at least .NET Framework 4.7.2 is installed and no further steps need to be taken. If it is not installed, continue with the following steps to install it.

To install .NET Framework 4.7.2:

1. Download the [.NET Framework 4.7.2][NET Framework 472] installer.
1. Double-click on the installer file to run it.
1. Follow the wizard to complete the installation.

## Apply Recommended Security Measures

These are non-compulsory security measures, recommended to be applied to Application Servers and the Load Balancer Server, in order to prevent potential attacks that exploit known industry security vulnerabilities.

Applying these measures may impact other applications running on your servers. Therefore, it is your responsibility to ensure that other applications and their clients will not be affected by the changes.

### Only Use Recommended Encryption Algorithms and TLS Protocols

A collection of registry settings need to be applied to guarantee your server is only using the recommended encryption algorithms and TLS protocols. Information about these settings can be found at [SSL Best Practices][].

{{% alert type="warning" title="Warning" %}}Disabling specific TLS versions or specific Cipher Suites can have impact on {{% ctx %}} components themselves as well as their communication capabilities with third party systems and services, e.g. Execution Service executing flows with blocks which communicate with 3rd parties via PowerShell or REST. All parties communicating together must support a shared protocol version and cipher suite, otherwise they will not be able to establish a secure communication link between each other.{{% /alert %}}

The settings can be applied by running a script. Be aware that each server will be restarted when the script is run. Apply the settings by following these instructions:

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - App Server Install Scripts"
    ```

1. Run the `Cortex.Innovation.Install.Multiple.SSLBestPractices.ps1` script using the following command, modifying the `ApplicationServers` value to contain the NETBIOS names or fully qualified domain names of the Application Servers and the `LoadBalancerServer` value to contain the NETBIOS names or fully qualified domain name of the Load Balancer Server (remove the `LoadBalancerServer` parameter if using an [alternative load balancer][]):

    ```powershell
    .\Cortex.Innovation.Install.Multiple.SSLBestPractices.ps1 -ApplicationServers @("app-server1", "app-server2", "app-server3") -LoadBalancerServer "lb-server"
    ```

    {{% alert title="Note" %}}
To avoid answering all of the prompts `-Override 0` can be added to the end of the script. This will automatically apply all settings and forcibly restart the servers.
    {{% /alert %}}

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (Application and Load Balancer) and press `OK`.

    If `-Override 0` has been specified no further steps need to be taken and you can move on to the next section when the servers have restarted.
1. To use all the recommended settings click `Apply all` to each `Apply Cortex recommended security best practices` prompt.

    To selectively apply each setting select `Choose which to apply`. Each change will then be prompted with a Yes/No confirmation before applying. This will need to be done for each server.
1. Restart each machine when the script asks. The current machine will be restarted last, the PowerShell script will close at this time.

## Add Antivirus Exclusions

If Windows Defender is not running on the Application Servers, ensure that the [Antivirus Exclusions][] have been added to the running antivirus software on each of the Application Servers and continue to the next section, otherwise follow these steps:

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - App Server Install Scripts"
    ```

1. Run the `Cortex.Innovation.Add.WindowsDefenderExclusions.ps1` script using the following command, modifying the `ApplicationServers` value to contain the NETBIOS names or fully qualified domain names of the Application Servers and the `LoadBalancerServer` value to contain the NETBIOS names or fully qualified domain name of the Load Balancer Server (remove the `LoadBalancerServer` parameter if using an [alternative load balancer][]):

    ```powershell
    .\Cortex.Innovation.Add.WindowsDefenderExclusions.ps1 -ApplicationServers @("app-server1", "app-server2", "app-server3") -LoadBalancerServer "lb-server"
    ```

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all Application Servers and press OK.
1. A message will indicate that the script has completed successfully.

## Check Port Usage

To check all necessary ports are free, follow these steps:

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - App Server Install Scripts"
    ```

1. Run the `Cortex.Innovation.Test.PortUsage.ps1` script using the following command, modifying the `ApplicationServers` value to contain the NETBIOS names or fully qualified domain names of the Application Servers and the `LoadBalancerServer` value to contain the NETBIOS names or fully qualified domain name of the Load Balancer Server (remove the `LoadBalancerServer` parameter if using an [alternative load balancer][]):

    ```powershell
    .\Cortex.Innovation.Test.PortUsage.ps1 -ApplicationServers @("app-server1", "app-server2", "app-server3") -LoadBalancerServer "lb-server"
    ```

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all Application Servers and press OK.

1. If all ports are free, the script will report the following for each Application Server:

    `All ports required by Cortex Innovation are free`

    If this is the case, continue to the next section. Otherwise, consult the messages returned by the script, which will give details about how to modify the `Cortex.Innovation.Install.Config.json` configuration file, in the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder, to use different ports. This will be used later during installation.

    The `Cortex.Innovation.Test.PortUsage.ps1` script cannot currently re-check modified ports in the configuration file so these need to be manually checked to see that they are free.

## Configure Installation Script

1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.ps1` script and open it with a text editor.
1. Choose the tab below that matches the configuration for this installation, then update the script to match, changing the parameters according to the details given below:

    {{< tabpane lang="powershell" >}}
        {{< tab header="CA Certs, Built-in Load Balancer">}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -AppServicesPath "C:\Install\Cortex Innovation {{< version >}} - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation {{< version >}} - Block Packages.zip" `
    -ApiGatewayBasicAuthUsername "BasicAuthUser" `
    -ApiGatewayBasicAuthPassword '#_065077199197085!212123173135087074174142102155007175102029143220132038175026114248243207204119030125106032237087162060168108135168241247037070081~187087056217118!069132229129134129097089241180163#' `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -LoadBalancerServerIPv4Address "192.168.1.4" `
    -ServerCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ServerCertificatePassword '#_186224203199039!168155035100255155162114088105027~037077176064169!055142133197216213014226219148063#' `
    -ClientCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ClientCertificatePassword '#_186224203199039!168155035100255155162114088105027~037077176064169!055142133197216213014226219148063#' `
    -Credential $Credential `
    -LdapConnectionDetails @{
        Host= "LDAP://ldapserver.fqdn.com:389"
        UseSsl= $false
        Username= "someUserName"
        Password= '#_156218162004047!225018081008117174092221250099053~110194001237006!035122107175168133055021013201167#'
    } `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-ha-install-log.txt"
        {{< /tab >}}
        {{< tab header="Self-Signed Certs, Built-in Load Balancer" >}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -AppServicesPath "C:\Install\Cortex Innovation {{< version >}} - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation {{< version >}} - Block Packages.zip" `
    -ApiGatewayBasicAuthUsername "BasicAuthUser" `
    -ApiGatewayBasicAuthPassword '#_065077199197085!212123173135087074174142102155007175102029143220132038175026114248243207204119030125106032237087162060168108135168241247037070081~187087056217118!069132229129134129097089241180163#' `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -LoadBalancerServerIPv4Address "192.168.1.4" `
    -UseSelfSignedCertificates `
    -Credential $Credential `
    -LdapConnectionDetails @{
        Host= "LDAP://ldapserver.fqdn.com:389"
        UseSsl= $false
        Username= "someUserName"
        Password= '#_156218162004047!225018081008117174092221250099053~110194001237006!035122107175168133055021013201167#'
    } `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-ha-install-log.txt"
        {{< /tab >}}
        {{< tab header="CA Certs, Alternative Load Balancer" >}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -AppServicesPath "C:\Install\Cortex Innovation {{< version >}} - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation {{< version >}} - Block Packages.zip" `
    -ApiGatewayBasicAuthUsername "BasicAuthUser" `
    -ApiGatewayBasicAuthPassword '#_065077199197085!212123173135087074174142102155007175102029143220132038175026114248243207204119030125106032237087162060168108135168241247037070081~187087056217118!069132229129134129097089241180163#' `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -ServerCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ServerCertificatePassword '#_186224203199039!168155035100255155162114088105027~037077176064169!055142133197216213014226219148063#' `
    -ClientCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ClientCertificatePassword '#_186224203199039!168155035100255155162114088105027~037077176064169!055142133197216213014226219148063#' `
    -SkipLoadBalancer `
    -Credential $Credential `
    -LdapConnectionDetails @{
        Host= "LDAP://ldapserver.fqdn.com:389"
        UseSsl= $false
        Username= "someUserName"
        Password= '#_156218162004047!225018081008117174092221250099053~110194001237006!035122107175168133055021013201167#'
    } `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-ha-install-log.txt"
        {{< /tab >}}
        {{< tab header="Self-Signed Certs, Alternative Load Balancer" >}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -AppServicesPath "C:\Install\Cortex Innovation {{< version >}} - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation {{< version >}} - Block Packages.zip" `
    -ApiGatewayBasicAuthUsername "BasicAuthUser" `
    -ApiGatewayBasicAuthPassword '#_065077199197085!212123173135087074174142102155007175102029143220132038175026114248243207204119030125106032237087162060168108135168241247037070081~187087056217118!069132229129134129097089241180163#' `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -UseSelfSignedCertificates `
    -SkipLoadBalancer `
    -Credential $Credential `
    -LdapConnectionDetails @{
        Host= "LDAP://ldapserver.fqdn.com:389"
        UseSsl= $false
        Username= "someUserName"
        Password= '#_156218162004047!225018081008117174092221250099053~110194001237006!035122107175168133055021013201167#'
    } `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-ha-install-log.txt"
        {{< /tab >}}
    {{< /tabpane >}}

    {{% alert title="Important" color="warning" %}}Parameters required to be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}} must be encrypted on the Application Server with {{< ctx >}} 7 installed.{{% /alert %}}

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`AppServicesPath`                             | Configure this value with the location of the Application Services zip file on the Application Server used for installation. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the Application Server used for installation. |
    |`ApiGatewayBasicAuthUsername`                 | Configure this value with a username that can be used to make HTTPS requests to the API Gateway Service using Basic Authentication (e.g. starting flows). This username will be used by Gateway for all HTTPS requests to the API Gateway Service.<br /><br />For security reasons it is recommended that the default value `BasicAuthUser` should be changed.<br /><br />This value will be needed [later, when upgrading Gateway][Upgrade Gateway].<br /><br /> This username can also be used by external services for HTTPS requests to the API Gateway Service but is not recommended; these requests should use an OAuth2 session for an authorised Active Directory user.{{< alert type="note" title="Note" >}} This parameter should be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`ApiGatewayBasicAuthPassword`                 | Configure this value with the password for the username specified for `ApiGatewayBasicAuthUsername`.<br /><br />For security reasons it is recommended that the default value should be changed.<br /><br />This value will be needed [later, when upgrading Gateway][Upgrade Gateway].{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`CustomerName`                                | A name identifying the platform being installed. This must have no spaces or symbols. It will be appended to the node names that are displayed in Service Fabric Explorer. |
    |`ApplicationServerIPv4Addresses`              | The IPv4 addresses of the Application Servers. The first of these must be the Application Server used for installation. |
    |`LoadBalancerServerIPv4Address`               | The IPv4 address of the Load Balancer Server. This is only needed if using the built-in load balancer. |
    |`ServerCertificatePath`                       | The local path of a .PFX certificate file on the first Application Server in the `ApplicationServerIPv4Addresses` list. Environment variables cannot be used. <br /><br />This is only needed if installing with CA Certificates (Recommended). The certificate should meet the [Certificate Requirements][]. <br /><br />This certificate will be used for: <ul><li>Securing communication between the Application Services.</li><li>Allowing Application Services to identify themselves to clients such as Gateway.</li><li>Preventing unauthorised nodes from joining the HA cluster.</li><li>Connecting to Service Fabric Explorer from each of the Application Servers.</li></ul>{{< alert type="warning" title="Warning" >}}It is critical to set a reminder to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.RolloverCertificates" title="update certificates" >}} in good time before they expire. If they expire then the platform will cease to function and {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}} must be contacted for support.{{< /alert >}}|
    |`ServerCertificatePassword`                   | The password for the .PFX certificate file specified in `ServerCertificatePath`. <br /><br /> This is only needed if installing with CA Certificates (Recommended).{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}} |
    |`ClientCertificatePath`                       | The local path of a .PFX certificate file on the first Application Server in the `ApplicationServerIPv4Addresses` list. This can be the same certificate as the `ServerCertificatePath`. Environment variables cannot be used. <br /><br />This is only needed if installing with CA Certificates (Recommended). The certificate should meet the [Certificate Requirements][].<br /><br />This certificate will be used for: <ul><li>Securing communication between the load balancer and the nodes on the Application Servers.</li></ul>{{< alert type="warning" title="Warning" >}}It is critical to set a reminder to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.RolloverCertificates" title="update certificates" >}} in good time before they expire. If they expire then the platform will cease to function and {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}} must be contacted for support.{{< /alert >}}
    |`ClientCertificatePassword`                   | The password for the .PFX certificate file specified in `ClientCertificatePath`. <br /><br /> This is only needed if installing with CA Certificates (Recommended).{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}} |
    |`UseSelfSignedCertificates`                   | Installs Application Services and required infrastructure using generated Self-Signed Certificates rather than CA Certificates.  <br /><br /> Not recommended for production use.  |
    |`SkipLoadBalancer`                            | Installs Application Services and required infrastructure without installing a load balancer. Use when using an alternative load balancer or no load balancer. |
    |`Credential`                                  | The credentials of the user which will be used to perform remote operations on the Application Servers. It must be a domain user that is a member of the local Administrators group on all servers. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`LdapConnectionDetails`                       | The connection details to the LDAP server. <br /><br />This must be configured with a valid `Host`, `Username`, `Password`, and whether the LDAP server uses SSL using `UseSsl`. {{< alert type="note" title="Note" >}}The parameters `Host` and `Username` should be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}. The parameter `Password` must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}} |
    |`AcceptEULA`                                  | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                    | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

    The `ApiGatewayBasicAuthUsername` and `ApiGatewayBasicAuthPassword` will be needed [later, when upgrading Gateway][Upgrade Gateway].

    {{% alert title="Note" %}}
More advanced configuration (such as changing ports) can be undertaken by modifying the `Cortex.Innovation.Install.Config.json` file but this shouldn't be required for most installations. More information about this can be found at {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.AdvancedConfigMultipleServer" title="Advanced Application Server and Load Balancer Configuration Changes" >}}.
    {{% /alert %}}

1. Save and close `Cortex.Innovation.Install.ps1`.

## Test Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - App Server Install Scripts"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.ps1 -WhatIf
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInstallScriptName>.ps1 -WhatIf -AcceptEULA
    ```

1. Run the PowerShell command to test the installation script.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (Application and Load Balancer) and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ.
1. Wait for the command to finish. It will display the output of the installation command without making any changes to the platform, to ensure things like communication between the servers are working.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are no errors, continue to the next section; otherwise, check if the errors have any instructions for rectifying the issue and follow them.

    If there are no useful instructions, check that all previous steps have been followed correctly and, if not, rectify it and run the command again. <br /><br />If this does not work, please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for further assistance. The `WhatIf` script will have created a temporary version of the config file in the script location, showing what changes would be made to it when the script runs. The name is appended with `-WhatIf` (e.g. `Cortex.Innovation.Install.Config-WhatIf.json`). This file can be provided when obtaining support.

## Run Installation Script

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.ps1
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInstallScriptName>.ps1 -AcceptEULA
    ```

1. Run the PowerShell command to install HA Services and the required infrastructure.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (Application and Load Balancer) and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ. This should be entered carefully and recorded as it may be needed if seeking support from [{{% ctx %}} Service Portal][CORTEX Service Portal]. Press OK.
1. Wait for the script to finish running. This should take approximately 10 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, check your configuration files, and retry the installation.

    In some circumstances, retrying may error due to components being installed already. In this case please run the following command, followed by the original installation command:

    ```powershell
    .\Cortex.Innovation.Uninstall.ps1
    ```

    If the errors do not give any instructions on how to rectify, see [Troubleshooting During Installation][] for further information; if this does not help then please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for assistance.

## Check Application Services

1. Log on to the Application Server.
1. Import the client certificate, used in the `ClientCertificatePath` parameter of the [Configure Installation Script][] section, to your Current User certificate store. Instructions on how to do this can be found [here][Import Client Certificate].
1. Open a web browser.
1. {{< section "/install-application-server/multi-server/check-application-services.md">}}

## Preserve installation files

{{< section "/preserve-installation-files.md">}}

## Next Steps?

1. [Upgrade the Web Application Server][]

[alternative load balancer]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.AltLoadBalancerNew" >}}
[Antivirus Exclusions]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.AntivirusExclusionsNew" >}}
[Certificate Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.CertificateRequirementsNew" >}}
[Configure Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureInstallationScriptNew" >}}
[CORTEX Encrypted]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Encryption Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.EncryptionRequirementsNew" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Import Client Certificate]: {{< url path="Cortex.Faqs.ImportClientCertificate.MainDoc" >}}
[NET Framework 472]: {{< url path="MSDotNet.Framework472.MainDoc" >}}
[Pre-Installation]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.PreInstallation" >}}
[SSL Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Troubleshooting During Installation]: {{< url path="Cortex.Reference.Troubleshooting.Installation.TroubleshootingDuringInstallation" >}}
[Upgrade Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew2" >}}
[Upgrade the Web Application Server]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.AddInnovationTo72WebApplicationServerNew" >}}
