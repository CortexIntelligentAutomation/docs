---
title: "Multiple server - with HA (recommended)"
linkTitle: "Multiple server - with HA (recommended)"
description: >
    Information on installing Cortex Innovation across multiple on-premise servers with high availability (HA), including: information about components, supported architectures, pre-requisites and installation instructions.
---

# {{< param title >}}

{{< param description >}}

{{% pageinfo %}}
Multiple server installations with HA are recommended for the following scenarios:

* Production installations that are required to scale and support HA
{{% /pageinfo %}}

## Architecture

### Components

| Component | Purpose | Required/Optional |Server Role |
|-----------|---------|----------|------------|
| [Cortex&nbsp;Gateway][Gateway Guide]| Web portal that hosts applications for creating automation solutions and managing their full life-cycle, including design, development, testing, deployment, monitoring, maintenance and ultimately end-of-life. | Required | Web&nbsp;Application&nbsp;Server |
| [Cortex&nbsp;Studio][Studio Guide] | Application hosted in Cortex Gateway that provides the graphical, low-code environment for developing, testing, versioning, publishing and managing the full life-cycle of automation solutions. | Required | Web&nbsp;Application&nbsp;Server |
| Cortex&nbsp;Flow&nbsp;Debugger&nbsp;Service | Web application that allows flows to be debugged and executed. Used by Cortex Studio to debug flows and provide block information. | Required | Web&nbsp;Application&nbsp;Server |
| Cortex&nbsp;API&nbsp;Gateway&nbsp;Service | HA Service that routes client requests to the correct distributed Cortex services. | Required | Application&nbsp;Server |
| Cortex&nbsp;Flow&nbsp;Execution&nbsp;Service | HA Service that executes automation flows. | Required | Application&nbsp;Server |
| Cortex&nbsp;Block&nbsp;Packages | A set of files which contain the blocks that users can use to build flows. Used by the Cortex Flow Debugger Service and the Cortex Flow Execution Service. | Required | Web&nbsp;Application&nbsp;Server, Application&nbsp;Server |
| [SQL&nbsp;Server&nbsp;Express](https://go.microsoft.com/fwlink/?LinkID=799012) | Free edition of SQL Server, required by Cortex Gateway for storing data related to user roles, flows, etc. Hopefully, we can remove the need for SQL Server Express in the next release. | Required<br />(End of life) | Web&nbsp;Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric](https://azure.microsoft.com/en-us/services/service-fabric/) | Distributed systems platform that hosts the Cortex services where automation solutions are deployed to; provides scalable, reliable and manageable enterprise-grade High Availability (HA) using clustering. | Required | Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric&nbsp;Explorer](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-visualizing-your-cluster) | Web portal for monitoring and managing the HA clusters that automation solutions are deployed to. | Required | Application&nbsp;Server |
| [Particular&nbsp;NServiceBus](https://particular.net/nservicebus) | Messaging platform enabling scalable, reliable and flexible asynchronous messaging between distributed Cortex services. | Required | Application&nbsp;Server |
| [Pivotal&nbsp;RabbitMQ](https://www.rabbitmq.com/) | Message broker used by the NServiceBus messaging platform to transport messages asynchronously between distributed Cortex services using publish/subscribe mechanism. | Required | Application&nbsp;Server |
| [Erlang&nbsp;OTP](https://github.com/erlang/otp) | Erlang run-time required by the RabbitMQ message broker. | Required | Application&nbsp;Server |
| [gobetween](http://gobetween.io/) | L4 load balancer and reverse proxy used to load balance requests between clustered instances of Cortex services. | Required | Load&nbsp;Balancer |
| [NSSM](https://nssm.cc/) | Windows Service Manager that hosts the gobetween load balancer application as a Windows Service. | Required | Load&nbsp;Balancer |

### Recommended Architecture

The following architecture requires 5 servers:

* 1x Web Application Server which contains Gateway, Flow Debugger Service and Databases
* 1x Load Balancer Server
* 3x Application Servers

{{< figure class="no-float" src="/images/Cortex Innovation Overview.png" title="5 Server Architecture Diagram" >}}

This will be suitable for most HA installations, however, it is possible to reduce the required servers by one; for more information, see [Alternative Architectures][].

## Prerequisites

### Hardware Requirements

{{% alert title="Note" %}}The recommended number of servers is 5, and allows each server role instance to be installed on its own server.

The minimum number of servers required to run Cortex with HA is 4. This setup requires multiple server roles to be installed on the same server; for more information, see [Alternative Architectures](/docs/getting-started/on-premise/advanced/alternative-architectures).{{% /alert %}}

| Server&nbsp;Role | Servers&nbsp;Required | CPU&nbsp;Cores&nbsp;(>&nbsp;2GHz) | RAM&nbsp;(GB) | Disk&nbsp;(GB) |  
|------------------|-----------------------|-----------------------------------|---------------|----------------------|
| Web&nbsp;Application&nbsp;Server | 1[^1] | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 75+&nbsp;*Recommended*<br>50&nbsp;*Minimum*<br>30+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |
| Application&nbsp;Server | 3&nbsp;*Bronze&nbsp;availability*[^2]<br>5&nbsp;*Silver&nbsp;availability*<br>7&nbsp;*Gold&nbsp;availability*<br>9&nbsp;*Platinum&nbsp;availability* | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 16+&nbsp;*Recommended*<br>8&nbsp;*Minimum* | 75+&nbsp;*Recommended*<br>60&nbsp;*Minimum*<br>40+&nbsp;free&nbsp;on&nbsp;%ProgramData%&nbsp;drive |
| Load&nbsp;Balancer | 1[^3] | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 50+&nbsp;*Recommended*<br>30&nbsp;*Minimum*<br>5+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |

[^1]: It is possible to install the Web Application Server components on one of the Application Servers or the Load Balancer Server. Neither Gateway, Databases, nor the Flow Debugger Service currently offer HA support.
[^2]: Application Servers support HA via clustering. A cluster must consist of a minimum of 3 nodes, and the number of nodes must be an odd number to ensure a quorum. Currently only the Bronze availability (3 nodes) is supported. Silver, Gold and Platinum support will be added in future.
[^3]: A software-based load balancer called [gobetween](http://gobetween.io/) is provided with the platform. This must be installed on its own server as it doesn't support routing traffic to itself. It also doesn't currently support HA, but it may be possible to use multiple gobetween load balancers with Anycast network addressing and routing to provide high availability, as described in [https://en.wikipedia.org/wiki/Anycast](https://en.wikipedia.org/wiki/Anycast); however, this has not been verified yet. It is possible to use an [alternative load balancer](#alternative-load-balancer-requirements) to the one provided.

#### Alternative Load Balancer Requirements

Must support a round robin (or similar) method of load balancing to specified ports on 3 nodes.

* Must be able to health check each node by running a batch script (that runs a PowerShell script which makes an HTTP request) that returns 1 for healthy and 0 for unhealthy.
* Must be able to access each of the Application Servers.
* Ideally it should be highly available to avoid a single point of failure in the system.

### Software Requirements

| Server&nbsp;Role | Windows&nbsp;Server[^6] | SQL&nbsp;Server[^7] | .Net | PowerShell[^8] | IIS[^9] |
|------------------|-------------------------|---------------------|------|------------|---------|
| Web&nbsp;Application&nbsp;Server | [2019&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2019?filetype=ISO)&nbsp;*Recommended*<br>[2016&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2016?filetype=ISO) | [2019](https://www.microsoft.com/en-us/evalcenter/evaluate-sql-server-2019?filetype=exe)<br />[2016](https://www.microsoft.com/en-us/evalcenter/evaluate-sql-server-2016?filetype=exe)<br />[2016&nbsp;Express](https://go.microsoft.com/fwlink/?LinkID=799012) | [Framework&nbsp;4.7.1](https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net471-web-installer) | 5.1 | 10.0.17763[^10]<br>10.0.14393[^11]<br>[URL&nbsp;Rewrite&nbsp;Module&nbsp;2.1](https://www.iis.net/downloads/microsoft/url-rewrite) |
| Application&nbsp;Server | [2019&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2019?filetype=ISO)&nbsp;*Recommended*<br>[2016&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2016?filetype=ISO) | | [Framework&nbsp;4.7.1](https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net471-web-installer) | 5.1 | |
| Load&nbsp;Balancer | [2019&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2019?filetype=ISO)&nbsp;*Recommended*<br>[2016&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2016?filetype=ISO) | | [Framework&nbsp;4.7.1](https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net471-web-installer) | 5.1 | |

[^6]: Windows Server Standard and Datacenter editions are supported. Filesystem **must be NTFS** and networking **must use IPv4**. Linux is not supported, but may be in the future.
[^7]: SQL Server Express, Standard and Enterprise are supported. Other databases are not supported.
[^8]: PowerShell 5.1 ships with Windows Server 2016 and 2019.
[^9]: IIS is supported; other web servers, including IIS Express are not supported.
[^10]: Ships as a windows role within Windows Server 2019.
[^11]: Ships as a windows role within Windows Server 2016.

#### Service Requirements

The following Windows Services must be running on all Application Servers:

* Remote Registry
* Windows Event Log
* Performance Logs & Alerts

#### Filesystem Requirements

All Application Servers must use an NTFS filesystem.

### Security Requirements

#### Installation User

A domain user which is a member of the local Administrators group on all servers must be available to run the installation scripts. This is a pre-requisite of Microsoft Service Fabric, which is the HA platform that Cortex Innovation is built upon.

#### Antivirus Exclusions

It is advised (by Microsoft Service Fabric) that the following antivirus exclusions are created on each Application Server to reduce antivirus processing on Service Fabric artefacts:

Folder Exclusions:

* %ProgramFiles%\Microsoft Service Fabric
* %ProgramData%\SF
* %ProgramData%\SF\Logs

Process Exclusions:

* Fabric.exe
* FabricHost.exe
* FabricInstallerService.exe
* FabricSetup.exe
* FabricDeployer.exe
* ImageBuilder.exe
* FabricGateway.exe
* FabricDCA.exe
* FabricFAS.exe
* FabricUOS.exe
* FabricRM.exe
* FileStoreService.exe

A script is provided during installation to add these exclusions for Windows Defender. If any other antivirus software is running, these will need to be added manually.

If adding the exclusions manually, the Process Exclusions should be done before installation occurs, as the processes will be used during installation of the application and antivirus software can cause the installation to fail or timeout. Folder Exclusions may need to be added after installation has occurred as some antivirus software needs the folders to exist.

#### Domain Requirements

Only Windows domains with an Active Directory domain controller running Active Directory Domain Services are supported.

Supported versions of Active Directory are listed below:

| Version                    | Verified?      | Supported From | Supported Until  |  
|----------------------------|----------------|----------------|------------------|
| Windows Server 2003        |      ✓        | Cortex v2022.5 | To be evaluated  |
| Windows Server 2003 R2     |                | Cortex v2022.5 | To be evaluated  |
| Windows Server 2008        |                | Cortex v2022.5 | To be evaluated  |
| Windows Server 2008 R2     |      ✓        | Cortex v2022.5 | To be evaluated  |
| Windows Server 2012        |                | Cortex v2022.5 | To be evaluated  |
| Windows Server 2012 R2     |      ✓        | Cortex v2022.5 | To be evaluated  |
| Windows Server 2016        |      ✓        | Cortex v2022.5 | To be evaluated  |
| Windows Server 2019        |                | Cortex v2022.5 | To be evaluated  |
| Windows Server 2022        |                | Cortex v2022.5 | To be evaluated  |

All servers must be on the same domain and cannot be domain controllers.

#### Port Requirements

Cortex Innovation and Microsoft Service Fabric require a range of [firewall ports to be opened][Port Requirements] between the servers and specific services.

If you are using Windows Firewall, some ports are opened during installation and others are opened dynamically as needed. If any other firewall is used, it will be necessary to add the rules described in [Port Requirements][] to open the correct ports.

The `Cortex.Innovation.Test.PortUsage.ps1` script is provided during installation to test the ports on each Application Server and make sure they do not overlap with any other programs; most ports may be altered if this is the case, the description will say if this is not possible.

#### TLS Requirements

* TLS 1.2 must be enabled.

TODO include protocols, ciphers, hashes etc.

#### Certificate Requirements

{{% alert title="Note" %}}
For production systems it is recommended that X.509 SSL wildcard certificates are obtained from a Certificate Authority and used for installation. For non-production systems, certificates can be omitted from installation and it will create and use self-signed certificates. This may prevent 3rd parties that require valid certificate verification to access the API Gateway Service.
{{% / alert %}}

An X.509 SSL wildcard certificate should be used to:

* Secure communication between the load balancer and the HA nodes on the Application Servers.
* Secure communication between the HA nodes.
* Allow HA Services to identify themselves to clients such as Gateway.
* Prevent unauthorised HA nodes from joining the HA cluster.
* Connect to Service Fabric Explorer from each of the Application Servers.

The certificate can be obtained from a Certificate Authority, such as Let’s Encrypt (https://letsencrypt.org/), and must meet the following requirements:

* Subject field must be in a wildcard format, pertaining to the domain of the Application Servers (e.g. `CN=*.domain.com`).
* Subject alternative names must include any additional host names that should be able to be used to access the API Gateway Service.
* Certificate file must be in a .PFX file format, with a known password.
* Certificate file must contain the full chain of certificates.
* Certificate file must include the private key.

This file should be placed in a known location on the Application Server where the installation scripts will be run. This location will be required when running the installation script.

If required, a separate X.509 SSL certificate can be obtained to be used by the load balancer to communicate with the HA nodes. It must meet all of the other requirements laid out above, except the subject field can also be the FQDN of the load balancer (e.g. `CN=machine-name.domain.com`).

#### Kerberos Requirements

TODO - Kerberos and winrm

### Client Requirements

We support the latest versions of the following browsers:

* Chrome
* Edge
* Firefox

## Install Application Servers and Load Balancer Server

### Extract Installation Artefacts

1. Choose one of the Application Servers to be used for installation, and copy the following artefacts to a folder on it (the version numbers may differ):
   * Cortex Evolution - Innovation 2022.5 - Block Packages.zip
   * Cortex Evolution - Innovation 2022.5 - HA Services.zip
   * Cortex Evolution - Innovation 2022.5 - Installation Scripts.zip

1. Extract the `Cortex Evolution - Innovation 2022.5 - Installation Scripts.zip` file to a folder with the same name.

### Add Antivirus Exclusions

1. If Windows Defender is not running on the Application Servers, ensure that the [Antivirus Exclusions][] have been added to the running antivirus software on each of the Application Servers and continue to the next step, otherwise follow these steps:
    1. Open a Windows PowerShell (x64) window as administrator.
    1. Navigate PowerShell to inside the `Cortex Evolution - Innovation 2022.5 - Installation Scripts` folder using the following command, modifying the path as necessary:

        ```powershell
        cd "C:\Install\Cortex Evolution - Innovation 2022.5 - Installation Scripts"
        ```

    1. Run the `Cortex.Innovation.Add.WindowsDefenderExclusions.ps1` script using the following command, modifying the `ApplicationServers` value to contain the NETBIOS names or fully qualified domain names of the Application Servers:

        ```powershell
        .\Cortex.Innovation.Add.WindowsDefenderExclusions.ps1 -ApplicationServers @("ha-server1", "ha-server2", "ha-server3")
        ```

### Check Port Usage

1. To check all necessary ports are free, follow these steps.
    1. Open a Windows PowerShell (x64) window as administrator.
    1. Navigate PowerShell to inside the `Cortex Evolution - Innovation 2022.5 - Installation Scripts` folder using the following command, modifying the path as necessary:

        ```powershell
        cd "C:\Install\Cortex Evolution - Innovation 2022.5 - Installation Scripts"
        ```

    1. Run the `Cortex.Innovation.Test.PortUsage.ps1` script using the following command, modifying the `ApplicationServers` value to contain the NETBIOS names or fully qualified domain names of the Application Servers:

        ```powershell
        .\Cortex.Innovation.Test.PortUsage.ps1 -ApplicationServers @("ha-server1", "ha-server2", "ha-server3")
        ```

    1. If all ports are free, the script will report the following for each Application Server:

        `All ports required by Cortex Innovation are free`

        If this is the case, continue to the next step. Otherwise, consult the messages returned by the script, which will give details about how to modify the `Cortex.Innovation.Install.Config.json` configuration file, in the `Cortex Evolution - Innovation 2022.5 - Installation Scripts` folder, to use different ports. This will be used later during installation.

        The `Cortex.Innovation.Test.PortUsage.ps1` script cannot currently re-check modified ports in the configuration file so these need to be manually checked to see that they are free.

### Configure Installation Script

1. In the `Cortex Evolution - Innovation 2022.5 - Installation Scripts` folder, locate the `Cortex.Innovation.Install.ps1` script and open it with a text editor.
1. Choose the tab below that matches the configuration for this installation, then update the script to match, changing the parameters according to the details given below:

    {{< tabpane lang="powershell" >}}
        {{< tab header="CA Certs, Built-in Load Balancer">}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -HaServicesPath "C:\Install\Cortex Evolution - Innovation 2022.5 - HA Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Evolution - Innovation 2022.5 - Block Packages.zip" `
    -ApiGatewayBasicAuthUserName "BasicAuthUser" `
    -ApiGatewayBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -LoadBalancerServerIPv4Address "192.168.1.4" `
    -ServerCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ServerCertificatePwd "myPassword" `
    -ClientCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ClientCertificatePwd "myPassword" `
    -Credential $Credential
        {{< /tab >}}
        {{< tab header="Self-Signed Certs, Built-in Load Balancer" >}}
    .\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -HaServicesPath "C:\Install\Cortex Evolution - Innovation 2022.5 - HA Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Evolution - Innovation 2022.5 - Block Packages.zip" `
    -ApiGatewayBasicAuthUserName "BasicAuthUser" `
    -ApiGatewayBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -LoadBalancerServerIPv4Address "192.168.1.4" `
    -UseSelfSignedCertificates `
    -Credential $Credential
        {{< /tab >}}
        {{< tab header="CA Certs, Alternative Load Balancer" >}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -HaServicesPath "C:\Install\Cortex Evolution - Innovation 2022.5 - HA Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Evolution - Innovation 2022.5 - Block Packages.zip" `
    -ApiGatewayBasicAuthUserName "BasicAuthUser" `
    -ApiGatewayBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -ServerCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ServerCertificatePwd "myPassword" `
    -ClientCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ClientCertificatePwd "myPassword" `
    -SkipLoadBalancer `
    -Credential $Credential
        {{< /tab >}}
        {{< tab header="Self-Signed Certs, Alternative Load Balancer" >}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -HaServicesPath "C:\Install\Cortex Evolution - Innovation 2022.5 - HA Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Evolution - Innovation 2022.5 - Block Packages.zip" `
    -ApiGatewayBasicAuthUserName "BasicAuthUser" `
    -ApiGatewayBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -UseSelfSignedCertificates `
    -SkipLoadBalancer `
    -Credential $Credential
        {{< /tab >}}
    {{< /tabpane >}}

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`HaServicesPath`                              | Configure this value with the location of the HA Services zip file on the Application Server used for installation. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the Application Server used for installation. |
    |`ApiGatewayBasicAuthUserName`                     | Configure this value with the username that will be used for Basic Authentication when making HTTPS requests to the API Gateway Service (e.g. starting production flows). <br /><br />Currently only Basic Authentication using a single user is supported, OAuth2 will be supported in a future release.<br /><br />This value will be needed [later, when installing Gateway][Install Gateway]. |
    |`ApiGatewayBasicAuthPwd`                      | Configure this value with the password that will be used for Basic Authentication when making HTTPS requests to the API Gateway Service (e.g. starting production flows). This should be Cortex Encrypted. <br /><br />This value will be needed [later, when installing Gateway][Install Gateway].|
    |`CustomerName`                                | A name identifying the platform being installed. This must have no spaces or symbols. It will be appended to the node names that are displayed in Service Fabric Explorer. |
    |`ApplicationServerIPv4Addresses`              | The IPv4 addresses of the Application Servers. The first of these must be the Application Server used for installation. |
    |`LoadBalancerServerIPv4Address`               | The IPv4 address of the Load Balancer Server. This is only needed if using the built-in load balancer. |
    |`ServerCertificatePath`                       | The local path of a .PFX certificate file on the first Application Server in the `ApplicationServerIPv4Addresses` list. Environment variables cannot be used. <br /><br />This is only needed if installing with CA Certificates (Recommended). The certificate should meet the [Certificate Requirements][]. |
    |`ServerCertificatePwd`                        | The password for the .PFX certificate file specified in `ServerCertificatePath`. <br /><br /> This is only needed if installing with CA Certificates (Recommended). |
    |`ClientCertificatePath`                       | The local path of a .PFX certificate file on the first Application Server in the `ApplicationServerIPv4Addresses` list. This can be the same certificate as the `ServerCertificatePath`. Environment variables cannot be used. <br /><br />This is only needed if installing with CA Certificates (Recommended) and using the Built-In Load Balancer. The certificate should meet the [Certificate Requirements][].|
    |`ClientCertificatePwd`                         | The password for the .PFX certificate file specified in `ClientCertificatePath`. <br /><br /> This is only needed if installing with CA Certificates (Recommended) and using the Built-In Load Balancer. |
    |`UseSelfSignedCertificates`                    | Installs HA Services and required infrastructure using generated Self-Signed Certificates rather than CA Certificates.  <br /><br /> Not recommended for production use.  |
    |`SkipLoadBalancer`                             | Installs HA Services and required infrastructure without installing a load balancer. Use when using an alternative load balancer or no load balancer. |
    |`Credential`                                   | The credentials of the user which will be used to perform remote operations on the Application Servers. It must be a domain user that is a member of the local Administrators group on all servers. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |

    The `ApiGatewayBasicAuthUserName` and `ApiGatewayBasicAuthPwd` will be needed [later, when installing Gateway][Install Gateway].

    {{% alert title="Note" %}}
More advanced configuration (such as changing ports) can be undertaken by modifying the `Cortex.Innovation.Install.Config.json` file but this shouldn't be required for most installations. More information about this can be found at [Advanced Configuration](/docs/getting-started/on-premise/advanced/advanced-config-changes).
    {{% /alert %}}

1. Save and close `Cortex.Innovation.Install.ps1`.

### Test Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Evolution - Innovation 2022.5 - Installation Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Evolution - Innovation 2022.5 - Installation Scripts"
    ```

1. Test `Cortex.Innovation.Install.ps1` by running the following command:

    ```powershell
    .\Cortex.Innovation.Install.ps1 -WhatIf
    ```

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (Application and Load Balancer) and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ.
1. Wait for the command to finish. It will display the output of the installation command without making any changes to the system, to ensure things like communication between the servers are working.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are no errors, continue to the next step; otherwise, check if the errors have any instructions for rectifying the issue and follow them.

    If there are no useful instructions, check that all previous steps have been followed correctly and, if not, rectify it and run the command again. <br /><br />If this does not work, please contact [Cortex Service Desk](https://support.cortex.co.uk/) for further assistance. The `WhatIf` script will have created a temporary version of the config file showing what changes would be made to it when the script runs. The name is appended with `-WhatIf` (e.g. `Cortex.Innovation.Install.Config-WhatIf.json`). This file can be provided when obtaining support.

### Run Installation Script

1. Install HA Services and the required infrastructure by running the following command (`Tee-Object` will write output to both the PowerShell console and a log file, the `FilePath` value can be changed if required):

    ```powershell
    .\Cortex.Innovation.Install.ps1 | Tee-Object -FilePath "cortex-ha-install-log.txt"
    ```

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (Application and Load Balancer) and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ. This should be entered carefully and recorded as it may be needed if seeking support from [Cortex Service Desk](https://support.cortex.co.uk/). Press OK.
1. Wait for the script to finish running. This should take approximately 10 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, check your configuration files, and retry the installation.

    In some circumstances, retrying may error due to components being installed already. In this case please run the following command, followed by the original installation command:

    ```powershell
    .\Cortex.Innovation.Uninstall.ps1
    ```

    If the errors do not give any instructions on how to rectify, see [Troubleshooting During Installation][] for further information; if this does not help then please contact [Cortex Service Desk](https://support.cortex.co.uk/) for assistance.

### Check HA Services

1. Log on to one of the Application Servers.
1. Import the client certificate, used in the `ClientCertificatePath` parameter of the [Configure Installation Script][] section, to your Current User certificate store. This can be achieved by double clicking on the client certificate .PFX file and following the wizard.

    If using self-signed certificates, the certificate can be retrieved by using the `Manage Computer Certificates` tool in Windows to export the `CortexServerCertificate` from the `Personal` store and then importing it to the `Current User` store by double-clicking on it and following the wizard.
1. Open a web browser.
1. Navigate to `https://ha-server.domain.com:9080/Explorer`, where `ha-server.domain.com` is the fully qualified domain name of any Application Server. Replace `9080` with new `httpGatewayEndpointPort` value if it was changed during configuration.

    The screen should resemble that in the following figure:
    {{< figure class="no-float" src="/images/Service Fabric Explorer.png" title="Healthy Service Fabric Explorer Cluster" >}}

    The status circles should be entirely green - this indicates that all nodes, services and instances are healthy. Other status pages can be accessed by expanding items in the leftmost pane. Issues can be tracked down to the failing component by expanding items with warning triangles or error icons on. The next few digrams show the status pages for a healthy system.

    After expanding the application, clicking on any of the services should display a green circle and `Status = Active`:

    {{< figure class="no-float" src="/images/Service Fabric Explorer - Service.png" title="Healthy Service Fabric Explorer Service" >}}

    After expanding either of the services, clicking on any of the instances/partitions should display a green circle and `Status = Ready`:

    {{< figure class="no-float" src="/images/Service Fabric Explorer - Instance.png" title="Healthy Service Fabric Explorer Instance" >}}

    Clicking on any of the nodes at the bottom of the leftmost pane should display a green circle and `Status = Up`:

    {{< figure class="no-float" src="/images/Service Fabric Explorer - Node.png" title="Healthy Service Fabric Explorer Node" >}}

    If any warning triangles appear, wait for 5 minutes or so as the cluster may still be starting up. If the cluster looks OK, go to the next section.

    If the warnings persist or anything on the screen goes red, expand the items to find the individual services and instances which have errors or warnings. Warnings should not be ignored as they can indicate that the service can’t start but is still in the retry phase. Error and warning messages should be displayed on the status screens and should indicate what is wrong.

    If no useful message can be seen here, the service log files may contain more information. These can be found on each Application Server at:

    * %ProgramData%/Cortex/Cortex API Gateway Service
    * %ProgramData%/Cortex/Cortex Flow Service

    If no solution can be found, please contact [Cortex Service Desk](https://support.cortex.co.uk/) for further assistance.

## Install Web Application Server

### Install Gateway

1. Use one of the following installation guides to install SQL Server or SQL Server Express:
    * SQL Server 2019 Installation Guide for Cortex
    * SQL Server 2016 Installation Guide for Cortex
    * SQL Server 2016 Express Installation Guide for Cortex
1. Copy the following artefact (the version number may differ) to the machine that you will be installing Cortex Gateway on:
    * Cortex Evolution - Innovation 2022.5 - Gateway.zip
1. Use the `Cortex Installation Guide` to install Cortex Gateway. The following sections will need to be followed as prerequisites to following the `Cortex Gateway Installation` section:
    * 3.1 - System Requirements
    * 3.2 - Additional Components Required for Cortex Gateway Installation
    * 3.3 - Additional pre-requisites
    * 4.3.1 - Install Internet Information Services (IIS)
    * 4.3.2 - Register and Allow .NET CLR v4.0.30319 with IIS
    * Appendix 6 - Actions to Install URL Rewrite Module
1. Follow section `9 - Cortex Gateway Installation` in the same guide. Use the following points as they will differ from a Cortex Integrity installation:
    * Ignore section `9.1 - Required Components`; no other Cortex Components are required for Cortex Innovation, only those referred to in this guide.
    * In section `9.2.7 - Configure Cortex Gateway installation`, whenever `Cortex Gateway.zip` is mentioned, use the `Cortex Evolution - Innovation * - Gateway.zip` file that was copied in the previous step.
    * When configuring the `parameters.xml` file in section `9.2.7 - Configure Cortex Gateway installation`, some additional values need to be updated:

    ```xml
    <setParameter name="Feature Flags" value="&lt;value&gt;InnovationId&lt;/value&gt;" />
    <setParameter name="Service Fabric Api Gateway Endpoint" value="&lt;value&gt;https://ha-server1.domain.com:8722/&lt;/value&gt;" />
    <setParameter name="Service Fabric Using Self Signed Certificates" value="&lt;value&gt;False&lt;/value&gt;" />
    <setParameter name="Service Fabric ApiGateway Basic Auth Username" value="&lt;value&gt;BasicAuthUser&lt;/value&gt;" />
    <setParameter name="Service Fabric ApiGateway Basic Auth Password" value="&lt;value&gt;ADA9883B11BD4CDC908B8131B57944A4&lt;/value&gt;" />
    <setParameter name="Dot NET flow debugger Endpoint" value="&lt;value&gt;https://app-server.domain.com/debugger/api/&lt;/value&gt;" />
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`Feature Flags`                                 | Configure as above, replacing "InnovationId" with the Cortex Innovation feature identifier. This should be retrieved from Cortex. |
    |`Service Fabric Api Gateway Endpoint`           | Configure as above, replacing "ha-server1.domain.com" with the fully qualified domain name of one of the HA nodes. The port should be 8722. |
    |`Service Fabric Using Self Signed Certificates` | Configure the value as "False" if you are using valid CA certificates, "True" if using self-signed certificates |
    |`Service Fabric Self Signed Certificate Subject`| This should not be changed. |
    |`Service Fabric ApiGateway Basic Auth Username` | This only needs to be changed if you provided a non-default `ApiGatewayBasicAuthUserName` when installing the Cortex HA Infrastructure and Services; if so, this value should be configured to the one provided. |
    |`Service Fabric ApiGateway Basic Auth Password` | This only needs to be changed if you provided a non-default ApiGatewayBasicAuthPassword when installing the Cortex HA Infrastructure and Services; if so, this value should be configured to the one provided. It can be Cortex Encrypted.|
    |`Dot NET flow debugger Endpoint`                | Configure as above, replacing "app-server.domain.com" with the fully qualified domain name of the server that the Cortex Flow Debugger Service will be installed on (usually the same one as Gateway). |

    * Ignore the `Configuring prerequisites for capability discovery` section - this is not yet supported in Cortex Innovation.
    * Ignore the `Configuring Connectivity to Cortex Server` section - this is only necessary for Cortex Integrity.
    * Ignore the `Testing a clean system` section - this will be covered later in this guide.
    * Ignore the `Verify LiveView Dashboards on Cortex Gateway` section - this is not supported in Cortex Innovation.

### Install Flow Debugger Service

#### Extract Installation Artefacts

1. We recommend that the Flow Debugger Service is installed on the Web Application Server, with Gateway. Copy the following artefacts to a folder on the machine (the version numbers may differ):
   * Cortex Evolution - Innovation 2022.5 - Block Packages.zip
   * Cortex Evolution - Innovation 2022.5 - Flow Debugger Service.zip
   * Cortex Evolution - Innovation 2022.5 - Installation Scripts.zip

1. Extract the `Cortex Evolution - Innovation 2022.5 - Installation Scripts.zip` zip file to a folder with the same name.

#### Configure Installation Script

1. In the `Cortex Evolution - Innovation 2022.5 - Installation Scripts` folder, locate the `Cortex.Innovation.Install.FlowDebuggerService.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Install.FlowDebuggerService.ps1 `
    -FlowDebuggerServicePath "C:\Install\Cortex Evolution - Innovation 2022.5 - Flow Debugger Service.zip" `
    -BlockPackagesPath "C:\Install\Cortex Evolution - Innovation 2022.5 - Block Packages.zip" `
    -Credential $AppPoolIdentity
    ```

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`FlowDebuggerServicePath`                     | Configure this value with the location of the Flow Debugger Service zip file on the Web Application Server. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the Web Application Server. |
    |`Credential`                                  | The credentials of the user that will be used to run the `Debugger` application pool in IIS. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |

1. Save and close `Cortex.Innovation.Install.FlowDebuggerService.ps1`.

#### Run Installation Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Evolution - Innovation 2022.5 - Installation Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Evolution - Innovation 2022.5 - Installation Scripts"
    ```

1. Install the Flow Debugger Service by running the following command (`Tee-Object` will write output to both the PowerShell console and a log file, `FilePath` can be changed if required):
  
    ```powershell
    .\Cortex.Innovation.Install.FlowDebuggerService.ps1 | Tee-Object -FilePath "cortex-flow-debugger-service-install-log.txt"
    ```

1. A credentials prompt will appear. Enter the credentials of the user that should run the `Debugger` application pool in IIS (this can be the same user as the one used to run the Cortex Gateway application pool).
1. Wait for the script to finish running. This should take approximately 2 minutes.
1. An error may have appeared saying:

    ```
    The Windows Process Activation Service service is not started.
    ```

    This can be ignored.
1. Check that there have been no other errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the installation.

    If the errors do not give any instructions on how to rectify, please contact [Cortex Service Desk](https://support.cortex.co.uk/) for further assistance.

#### Finish Gateway configuration

1. Log in to Cortex Gateway as your "administrator" user.
1. In the Cortex Gateway UI go to `Settings` → `LDAP Authorisation` and configure security roles for LDAP groups to your requirements. You can refer to `Section 2.2 Configuring Authorisation Rights` of the `Cortex Studio Admin Guide` for more details on this.
1. Log out and Login as a user with Studio permissions.

## Next Steps?
1. [Setup](../../setup) the platform
2. [Try it out](../../tryitout)

### Try it out

#### Test Debugging

1. Use the following steps to test the system be creating a new flow (alternatively, if you already have Cortex Innovation flows which are compatible with this version, feel free to import them, configure Studio Authorisation for them and check that they can be debugged, published and executed).
1. Click on the `Flows` charm, then the `+` button and click `Group` to open a dialog.
1. Enter a name for the group, configure the `Permission Groups` and click `OK` to create the group.
1. Click on the group to open it (refresh the page if it does not appear).
1. Inside the group, click the `+` button again and click on `Flow (Innovation)` to open a dialog. If the menu item is not present, it means that the `FeatureFlags` in the "parameters.xml" file was not set properly when installing Gateway. See [Troubleshooting][Troubleshooting No Innovation] for more information.
1. Enter a name for the flow, configure the `Permission Groups` and click `OK` to create the flow.
1. The flow should be displayed with a start flow block and end flow block. A list of block palettes should be displayed down the left hand side:
    {{< figure class="no-float" src="/images/New Innovation Flow View.PNG" title="New Flow - Number of palettes may differ" >}}
    If the blocks in the flow do not display or the palettes are not visible, see [Troubleshooting][Troubleshooting No Blocks] for more information.
1. Add a `Set Variable` block and connect it between the start and end blocks.
1. Click the `Set Variable` block to open the Property Editor. Set the `Value` property to `DateTime.Now`. Type `Output` into the `Variable` property and click `Create Variable`.
1. In the Variable Editor, set `Is Output Variable?` to `true` for the new "Output" variable.
1. Set a breakpoint on the end block and start the flow. An execution token should appear, the `Output` variable should show the current time. If the token does not appear, try refreshing the page.
1. Continue or stop the execution.
1. Commit the flow.

#### Test Publishing and Executing production flows

1. Log into Cortex Gateway with a user that has the `Administrator` role.
1. Click on the `Settings` charm, then `Packages`.
1. Click `Add Package Definition`. Enter a package name and select the new flow to add to the package. Click `Save` to add the new package.
1. Click "Publish". A success message should appear. If it doesn't it means that either one or more of the `Service Fabric x` values in the `parameters.xml` file was not set properly when installing Cortex Gateway, or the HA Services aren't healthy. See [Troubleshooting][Troubleshooting No Publish] for more information.
1. Open an HTTP client, such as Postman. Make a request with the following format:
    | Property      | Value                                                                               |
    |---------------|-------------------------------------------------------------------------------------|
    | Action        | POST                                                                                |
    | URL           | https://{FQDN of Application Server}:8722/api/default/default/flows/{Flow Name}/executions?packageName={Package Name}<br />e.g. https://ha-server1.domain.com:8722/api/default/default/flows/NewFlow/executions?packageName=NewPackage|
    | Content Type  | application/json                                                                    |
    | Body          | {}                                                                                  |
    | Authentication| Basic                                                                               |
    | Username      | The value used for ApiGatewayBasicAuthUserName when installing HA Services              |
    | Password      | The value used for ApiGatewayBasicAuthPwd when installing HA Services (Unencrypted) |

    {{% alert title="Note" %}} If you used self-signed certificates when installing HA Services and infrastructure you will need to disable SSL certificate validation in your HTTP client. {{% /alert %}}

1. The request should return a json object with the output variables of the flow e.g. `{ "Output": "2022-03-09T07:35:16+0000" }`.
1. Cortex Innovation has now been verified and is ready to use.

[Gateway Guide]: {{< url "Cortex.Guides.Gateway.MainDoc" >}}
[Studio Guide]: {{< url "Cortex.Guides.Studio.MainDoc" >}}
[Troubleshooting During Installation]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.TroubleshootingDuringInstallation" >}}
[Troubleshooting No Innovation]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.TroubleshootingNoInnovation" >}}
[Troubleshooting No Blocks]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.TroubleshootingNoBlocks" >}}
[Troubleshooting No Publish]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.TroubleshootingNoPublish" >}}
[Troubleshooting Root Certificate Error]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.TroubleshootingNoRootCertificate" >}}
[Port Requirements]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.Ports" >}}
[Alternative Architectures]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.AlternativeArchitectures" >}}
[Advanced Configuration]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.AdvancedConfig" >}}
[Antivirus Exclusions]: {{< ref "#antivirus-exclusions" >}}
[Certificate Requirements]: {{< ref "#certificate-requirements" >}}
[Install Gateway]: {{< ref "#install-gateway" >}}
[Configure Installation Script]:  {{< ref "#configure-installation-script" >}}
