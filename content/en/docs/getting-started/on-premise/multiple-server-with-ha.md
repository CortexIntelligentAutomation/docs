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
| [Cortex&nbsp;Gateway](/docs/concepts/todo-cortex-gateway) | Web portal that hosts applications for creating automation solutions and managing their full life-cycle, including design, development, testing, deployment, monitoring, maintenance and ultimately end-of-life. | Required | Web&nbsp;Application&nbsp;Server |
| [Cortex&nbsp;Studio](/docs/concepts/todo-cortex-studio) | Application hosted in Cortex Gateway that provides the graphical, low-code environment for developing, testing, versioning, publishing and managing the full life-cycle of automation solutions. | Required | Web&nbsp;Application&nbsp;Server |
| [Cortex&nbsp;Flow&nbsp;Debugger&nbsp;Service](/docs/concepts/todo-cortex-flow-debugger-service) | Web application that allows flows to be debugged and executed. Used by Cortex Studio to debug flows and provide block information. | Required | Web&nbsp;Application&nbsp;Server |
| [Cortex&nbsp;API&nbsp;Gateway&nbsp;Service](/docs/concepts/todo-cortex-api-gateway-service) | HA Service that routes client requests to the correct distributed Cortex services. | Required | Application&nbsp;Server |
| [Cortex&nbsp;Flow&nbsp;Execution&nbsp;Service](/docs/concepts/todo-cortex-flow-execution-service) | HA Service that executes automation flows. | Required | Application&nbsp;Server |
| [Cortex&nbsp;Block&nbsp;Packages](/docs/concepts/todo-cortex-block-packages) | A set of files which contain the blocks that users can use to build flows. Used by the Cortex Flow Debugger Service and the Cortex Flow Execution Service. | Required | Web&nbsp;Application&nbsp;Server, Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric](https://azure.microsoft.com/en-us/services/service-fabric/) | Distributed systems platform that hosts the Cortex services where automation solutions are deployed to; provides scalable, reliable and manageable enterprise-grade High Availability (HA) using clustering. | Required | Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric&nbsp;Explorer](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-visualizing-your-cluster) | Web portal for monitoring and managing the HA clusters that automation solutions are deployed to. | Required | Application&nbsp;Server |
| [Particular&nbsp;NServiceBus](https://particular.net/nservicebus) | Messaging platform enabling scalable, reliable and flexible asynchronous messaging between distributed Cortex services. | Required | Application&nbsp;Server |
| [Pivotal&nbsp;RabbitMQ](https://www.rabbitmq.com/) | Message broker used by the NServiceBus messaging platform to transport messages asynchronously between distributed Cortex services using publish/subscribe mechanism. | Required | Application&nbsp;Server |
| [Erlang&nbsp;OTP](https://github.com/erlang/otp) | Erlang run-time required by the RabbitMQ message broker. | Required | Application&nbsp;Server |
| TODO (SSDB, SSIS, SSAS, SSRS) | Hopefully, we can remove the need for SQL Server database components in next generation, by using a combination of git for configuration, and log ingestion tools like Humio or Loki, Grafana, Prometheus combination to replace dashboarding and analytics. | End-of-life | Database&nbsp;Server |
| [NSSM](https://nssm.cc/) | Windows Service Manager that hosts the gobetween load balancer application as a Windows Service. | Required | Load&nbsp;Balancer |
| [gobetween](http://gobetween.io/) | L4 load balancer and reverse proxy used to load balance requests between clustered instances of Cortex services. | Required | Load&nbsp;Balancer |

### Recommended architecture

The following architecture requires 5 servers:

  * 1x Web Application server which contains Gateway, Flow Debugger Service and Databases
  * 1x Load Balancer server
  * 3x Application servers

{{< figure class="no-float" src="/images/Cortex Innovation Overview.png" title="5 Server Architecture Diagram" >}}

This will be suitable for most HA installations, however, it is possible to reduce the required servers by one; for more information, see [Alternative Architectures][].

## Prerequisites

### Hardware Requirements

{{% alert title="Note" %}}The recommended number of servers is 5, and allows each server role instance to be installed on its own server.

The minimum number of servers required to run Cortex with HA is 4. This setup requires multiple server roles to be installed on the same server; for more information, see [Alternative Architectures](/docs/getting-started/on-premise/advanced/alternative-architectures).{{% /alert %}}

| Server&nbsp;Role | Servers&nbsp;Required | CPU&nbsp;Cores&nbsp;(>&nbsp;2GHz) | RAM&nbsp;(GB) | Disk&nbsp;(GB) |  
|------------------|-----------------------|-----------------------------------|---------------|----------------------|
| Web&nbsp;Application&nbsp;Server | 1[^1] | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 75+&nbsp;*Recommended*<br>50&nbsp;*Minimum*<br>TODO&nbsp;free&nbsp;on&nbsp;TODO&nbsp;drive |
| Application&nbsp;Server | 3&nbsp;*Bronze&nbsp;availability*[^2]<br>5&nbsp;*Silver&nbsp;availability*<br>7&nbsp;*Gold&nbsp;availability*<br>9&nbsp;*Platinum&nbsp;availability* | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 16+&nbsp;*Recommended*<br>8&nbsp;*Minimum* | 75+&nbsp;*Recommended*<br>60&nbsp;*Minimum*<br>40+&nbsp;free&nbsp;on&nbsp;%ProgramData%&nbsp;drive |
| Load&nbsp;Balancer | 1[^3] | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 50+&nbsp;*Recommended*<br>30&nbsp;*Minimum*<br>5+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |

[^1]: It is possible to install the Web Application Server components on one of the Application Servers or the Load Balancer server. Neither Gateway, Databases, nor the Flow Debugger Service currently offer HA support.
[^2]: Application servers support HA via clustering. A cluster must consist of a minimum of 3 nodes, and the number of nodes must be an odd number to ensure a quorum. Currently only the Bronze availability (3 nodes) is supported. Silver, Gold and Platinum support will be added in future.
[^3]: A software-based load balancer called [gobetween](http://gobetween.io/) is provided with the platform. This must be installed on its own server as it doesn't support routing traffic to itself. It also doesn't currently support HA, but it may be possible to use multiple gobetween load balancers with Anycast network addressing and routing to provide high availability, as described in [https://en.wikipedia.org/wiki/Anycast](https://en.wikipedia.org/wiki/Anycast); however, this has not been verified yet. It is possible to use an [alternative load balancer](#alternative-load-balancer-requirements) to the one provided.

#### Alternative Load Balancer Requirements

Must support a round robin (or similar) method of load balancing to specified ports on 3 nodes.

* Must be able to health check each node by running a batch script (that runs a PowerShell script which makes an HTTP request) that returns 1 for healthy and 0 for unhealthy.
* Must be able to access each of the Application Servers.
* Ideally it should be highly available to avoid a single point of failure in the system.

### Software Requirements

| Server&nbsp;Role | Windows&nbsp;Server[^6] | SQL&nbsp;Server[^7] | .Net | PowerShell | IIS[^8] |
|------------------|-------------------------|---------------------|------|------------|---------|
| Web&nbsp;Application&nbsp;Server | [2019&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2019?filetype=ISO)&nbsp;*Recommended*<br>[2016&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2016?filetype=ISO) | | [Framework&nbsp;4.7.1](https://www.microsoft.com/en-US/download/details.aspx?id=56116) | 5.1 | 10.0.17763[^9]<br>10.0.14393[^10]<br>[URL&nbsp;Rewrite&nbsp;Module&nbsp;2.1](https://www.iis.net/downloads/microsoft/url-rewrite) |
| Application&nbsp;Server | [2019&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2019?filetype=ISO)&nbsp;*Recommended*<br>[2016&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2016?filetype=ISO) | | [Framework&nbsp;4.7.1](https://www.microsoft.com/en-US/download/details.aspx?id=56116) | 5.1 | |
| Load&nbsp;Balancer | [2019&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2019?filetype=ISO)&nbsp;*Recommended*<br>[2016&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2016?filetype=ISO) | | [Framework&nbsp;4.7.1](https://www.microsoft.com/en-US/download/details.aspx?id=56116) | 5.1 | |

[^6]: Windows Server Standard and Datacenter editions are supported. Filesystem **must be NTFS** and networking **must use IPv4**. Linux is not supported, but may be in the future.
[^7]: SQL Server Standard and Enterprise editions are supported. Only SQL Server is supported; other databases, including SQL Server Express are not supported.
[^8]: Only IIS is supported; other web servers, including IIS Express are not supported.
[^9]: Ships as a windows role within Windows Server 2019.
[^10]: Ships as a windows role within Windows Server 2016.

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

The "Cortex.Innovation.Test.PortUsage.ps1" script is provided during installation to test the ports on each Application Server and make sure they do not overlap with any other programs; most ports may be altered if this is the case, the description will say if this is not possible.

#### TLS Requirements

* TLS 1.2 must be enabled.

TODO include protocols, ciphers, hashes etc.

#### Certificate Requirements

An X.509 SSL wildcard certificate with the following requirements should be obtained from a Certificate Authority, such as Let’s Encrypt (https://letsencrypt.org/), to be used for inter-node communication:

* Subject field should be in a wildcard format, pertaining to the domain of the HA nodes (e.g. CN=*.domain.com).
* Certificate file should be in a .PFX file format, with a known password. It should contain the full chain of certificates.
* Certificate file should include the private key.
This file should be placed in a known location on the server that the installation scripts will be run on. The location will be used in the configuration file later to enable the certificate to be installed by the installer.
This will be used as the server certificate for inter-node communication and identification to clients. It ensures that unauthorised nodes cannot join the cluster.
It can also be used to connect to Service Fabric Explorer from each of the nodes. Note: This can be omitted, and the installation will create and use self-signed certificates, but this is not recommended for production systems.

An X.509 SSL certificate with the following requirements should also be obtained to be used by the load balancer to communicate with the HA nodes:

* Subject field should be in a wildcard format, pertaining to the domain of the load balancer (e.g. CN=*.domain.com) or which is the FQDN of the load balancer (e.g. CN=machine-name.domain.com).
* Certificate file should be in a .PFX file format, with a known password. It should contain the full chain of certificates.
* Certificate file should include the private key.
This file should be placed in a known location on the server that the installation scripts will be run on. The location will be used in the configuration file later to enable the certificate to be installed by the installer.
This will be used as the admin certificate to allow the load balancer to make REST requests to the HA nodes, enabling it to perform health-checks on them.
Note: This can be omitted, and the installation will create and use self-signed certificates, but this is not recommended for production systems

#### Kerberos Requirements

TODO - Kerberos and winrm

### Client Requirements

We support the latest versions of the following browsers:

* Chrome
* Edge
* Firefox

## Install Application Servers and Load Balancer Server

### Install Cortex HA Infrastructure and Services

1. Choose one of the Application servers, to be used for installation, and copy the following artifacts to a folder on it (the version numbers may differ). By default the scripts use C:\Install as the location, so use this if you want to minimise changes:
   * Cortex Evolution - Innovation 2022-RC.2022.1.2 - Block Packages.zip
   * Cortex Evolution - Innovation 2022-RC.2022.1.4 - HA Services.zip
   * Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts.zip

1. Extract the "Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts.zip" zip file to a folder with the same name.
1. If Windows Defender is running on the application servers follow these steps, otherwise ensure that the Service Fabric exclusions have been added to any antivirus software running on the application servers and continue to the next step.
    1. In the "Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts" folder, locate the file "Cortex.Innovation.Add.WindowsDefenderExclusions.ps1" and open it with a text editor.
    1. Configure the ApplicationServers variable to contain the computer names or IP addresses of the application servers.
    1. Save and close the PowerShell file.
    1. Run the "Cortex.Innovation.Add.WindowsDefenderExclusions.ps1" file as administrator using PowerShell.
1. To check all necessary ports are free, follow these steps.
    1. In the "Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts" folder, locate the file "Cortex.Innovation.Test.PortUsage.ps1" and open it with a text editor.
    1. Configure the ApplicationServers variable to contain the computer names or IP addresses of the application servers.
    1. Save and close the PowerShell file.
    1. Run the "Cortex.Innovation.Test.PortUsage.ps1" file as administrator using PowerShell.
    1. If all ports are free, the script will report "All ports required by Cortex Innovation are free" for each application server. If this is the case, continue to the next step. Otherwise, consult the messages returned by the script, [Advanced Configuration][] and [Port Requirements][] to change the necessary configuration to use different ports.
1. In the "Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts" folder, locate the file "Cortex.Innovation.Install.ps1" and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -HaServicesPath "C:\Install\Cortex Evolution - Innovation * - HA Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Evolution - Innovation * - Block Packages.zip" `
    -ApiGatewayBasicAuthUser "BasicAuthUser" `
    -ApiGatewayBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1", "192.168.1.2", "192.168.1.3") `
    -LoadBalancerServerIPv4Address "192.168.1.4" `
    -ServerCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ServerCertificatePwd "myPassword" `
    -ClientCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ClientCertificatePwd "myPassword" `
    -Credential $c
    ```

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |HaServicesPath                                | Configure this value with the location of the HA Services zip file on the installation node. The wildcard (*) can stay in place, this means that the script will find the first zip with any version number. |
    |BlockPackagesPath                             | Configure this value with the location of the Block Packages zip file on the installation node. The wildcard (*) can stay in place, this means that the script will find the first zip with any version number. |
    |ApiGatewayBasicAuthUser                       | Configure this value with the username that should be used for Basic authentication when making HTTP requests to the ApiGateway service (e.g. starting production flows.).|
    |ApiGatewayBasicAuthPwd                        | Configure this value with the password that should be used for Basic authentication when making HTTP requests to the ApiGateway service (e.g. starting production flows.). This should be Cortex Encrypted. |
    |CustomerName                                  | A name identifying the platform being installed. This should have no spaces or symbols. It will be appended to the node names that are displayed in the Service Fabric management tool. |
    |ApplicationServerIPv4Addresses                | The IPv4 addresses of the application servers. The first of these should be the server used for installation. |
    |LoadBalancerServerIPv4Address                 | The IPv4 address of the load balancer server.  |
    |ServerCertificatePath                         | The local path of a .PFX certificate file on the first application server in the ApplicationServerIPv4Addresses addresses list. This should be a full chain certificate with private key. Environment variables cannot be used. This will be used for communication between the HA nodes on the Application Servers. |
    |ServerCertificatePwd                          | The password for the .PFX certificate file specified in ServerCertificatePath. |
    |ClientCertificatePath                         | The local path of a .PFX certificate file on the first application server in the ApplicationServerIPv4Addresses addresses list. This should be a full chain certificate with private key. Environment variables cannot be used. This will be used for external communication to the HA nodes on the Application Servers, e.g. through the load balancer and Service Fabric Explorer. This can be the same certificate as the ServerCertificatePath. |
    |ClientCertificatePwd                          | The password for the .PFX certificate file specified in ClientCertificatePath.  |

    The ApiGatewayBasicAuthUser and ApiGatewayBasicAuthPwd will be needed later, when installing Cortex Gateway.

    {{% alert title="Note" %}}
More advanced configuration (such as changing ports) can be undertaken by modifying the "Cortex.Innovation.Install.Config.json" file but this shouldn't be required for most installations. More information about this can be found at [Advanced Configuration](/docs/getting-started/on-premise/advanced/advanced-config-changes).
    {{% /alert %}}

1. Save and close the PowerShell file.
1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the Installation Scripts folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts"
    ```

1. Test Cortex.Innovation.Install.ps1 by running the following command:

    ```powershell
    .\Cortex.Innovation.Install.ps1 -WhatIf
    ```

    The -WhatIf command will run the script without making any changes to the system. It will also create a temporary version of the config file showing what changes will be made when the script runs. The name is appended with -WhatIf (e.g. Cortex.Innovation.Install.Config-WhatIf.json). This file can be verified using [Advanced Configuration](/docs/getting-started/on-premise/advanced/advanced-config-changes) before running the installation script if you so wish.

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (HA and load balancer) and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ (used by the HA cluster for orchestrating messages). This should be entered carefully and remembered as it may be needed if seeking support from Cortex. Press OK.
1. Wait for the command to finish. It will display the output of the installation command without making any changes to the system, to ensure things like communication between the servers are working. Check that there have been no errors in the script; these would appear in red in the console. If there are no errors, continue to the next step; otherwise, check if the errors have any instructions for rectifying the issue and follow them. If there are no useful instructions, check that all previous steps have been followed correctly and, if not, rectify it and run the command again. If this does not work, please contact Cortex for further assistance.
1. Install Cortex HA Services and infrastructure by running the following command (Tee-Object will write output to both the PowerShell console and a log file, the path can be changed if required.):
  
    ```powershell
    .\Cortex.Innovation.Install.ps1 | Tee-Object cortex-ha-install-log.txt
    ```

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (HA and load balancer) and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ (used by the HA cluster for orchestrating messages). This should be entered carefully and remembered as it may be needed if seeking support from Cortex. Press OK.
1. Wait for the script to finish running. This should take approximately 10 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console. If there are any errors, then please follow any instructions given within them to rectify the situation, check your configuration files, and retry the installation. In some circumstances, retrying may error due to components being installed already. In this case please run the following command, followed by the original installation command:

    ```powershell
    .\Cortex.Innovation.Uninstall.ps1
    ```

    If the errors do not give any instructions on how to rectify, see [Troubleshooting][] for further information; if this does not help then please contact Cortex for assistance.
1. Ensure that the HA Services are healthy by following these steps:
    1. Log on to one of the Application servers and open a web browser.
    1. Navigate to https://ha-server.domain.com:9080/Explorer, where “ha-server.domain.com” is the fully qualified domain name of any server within the HA cluster. Replace 9080 with new httpGatewayEndpointPort value if it was changed during configuration.

        If page access is denied it may be necessary to import the server certificate used in installation to the Current User certificate store (usually achieved by double clicking on it and following the wizard). If using self-signed certificates, the certificate can be retrieved by using the “Manage Computer Certificates” tool in Windows to export the CortexServerCertificate from the Personal store and then importing it to the Current User store by double-clicking on it and following the wizard. The browser may need to be restarted before the site can be accessed

        The screen should resemble that in the following figure, all services should have Health State = OK and Status = Active. All instances below the service should have Health State = OK and Status = Ready.

        {{< figure class="no-float" src="/images/Service Fabric Explorer.png" title="Healthy Service Fabric Explorer" >}}

        If any warning triangles appear, wait for 5 minutes or so as the cluster may still be starting up. If the cluster looks OK, ignore the rest of this step. If the warnings persist or anything on the screen goes red, use the filter buttons to find the individual elements which have errors or warnings. Warnings should not be ignored as they can indicate that the service can’t start but is still in the retry phase.
        If no useful message can be seen here, the service log files may contain more information.

## Install Web Application Server

### Install Gateway

1. Use one of the following installation guides to install SQL Server or SQL Server Express:
    * SQL Server 2019 Installation Guide for Cortex
    * SQL Server 2016 Installation Guide for Cortex
    * SQL Server 2016 Express Installation Guide for Cortex
1. Copy the following artifact (the version number may differ) to the machine that you will be installing Cortex Gateway on:
    * Cortex Evolution - Innovation 2022-RC.2022.1.2 - Gateway.zip
1. Use the "Cortex Installation Guide" to install Cortex Gateway. The following sections will need to be followed as prerequisites to following the "Cortex Gateway Installation" section:
    * 3.1 - System Requirements
    * 3.2 - Additional Components Required for Cortex Gateway Installation
    * 3.3 - Additional pre-requisites
    * 4.3.1 - Install Internet Information Services (IIS)
    * 4.3.2 - Register and Allow .NET CLR v4.0.30319 with IIS
    * Appendix 6 - Actions to Install URL Rewrite Module
1. Follow section "9 - Cortex Gateway Installation" in the same guide. Use the following points as they will differ from a Cortex Integrity installation:
    * Ignore section "9.1 - Required Components"; no other Cortex Components are required for Cortex Innovation, only those referred to in this guide.
    * In section "9.2.7 - Configure Cortex Gateway installation", whenever "Cortex Gateway.zip" is mentioned, use the "Cortex Evolution - Innovation * - Gateway.zip" file that was copied in the previous step.
    * When configuring the "parameters.xml" file in section "9.2.7 - Configure Cortex Gateway installation", some additional values need to be updated:

    ```xml
    <setParameter name="Feature Flags" value="&lt;value&gt;InnovationId&lt;/value&gt;" />
    <setParameter name="Service Fabric Api Gateway Endpoint" value="&lt;value&gt;https://ha-server1.domain.com:8722/&lt;/value&gt;" />
    <setParameter name="Service Fabric Using Self Signed Certificates" value="&lt;value&gt;False&lt;/value&gt;" />
    <setParameter name="Service Fabric ApiGateway Basic Auth Username" value="&lt;value&gt;BasicAuthUser&lt;/value&gt;" />
    <setParameter name="Service Fabric ApiGateway Basic Auth Password" value="&lt;value&gt;ADA9883B11BD4CDC908B8131B57944A4&lt;/value&gt;" />
    <setParameter name="Dot NET flow debugger Endpoint" value="&lt;value&gt;https://app-server.domain.com/debugger/api/&lt;/value&gt;" />
    ```

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |Feature Flags                                 | Configure as above, replacing "InnovationId" with the Cortex Innovation feature identifier. This should be retrieved from Cortex. |
    |Service Fabric Api Gateway Endpoint           | Configure as above, replacing "ha-server1.domain.com" with the fully qualified domain name of one of the HA nodes. The port should be 8722. |
    |Service Fabric Using Self Signed Certificates | Configure the value as "False" if you are using valid CA certificates, "True" if using self-signed certificates |
    |Service Fabric Self Signed Certificate Subject| This should not be changed. |
    |Service Fabric ApiGateway Basic Auth Username | This only needs to be changed if you provided a non-default ApiGatewayBasicAuthUsername when installing the Cortex HA Infrastructure and Services; if so, this value should be configured to the one provided. |
    |Service Fabric ApiGateway Basic Auth Password | This only needs to be changed if you provided a non-default ApiGatewayBasicAuthPassword when installing the Cortex HA Infrastructure and Services; if so, this value should be configured to the one provided. It can be Cortex Encrypted.|
    |Dot NET flow debugger Endpoint                | Configure as above, replacing "app-server.domain.com" with the fully qualified domain name of the server that the Cortex Flow Debugger Service will be installed on (usually the same one as Gateway). |

    * Ignore the "Configuring prerequisites for capability discovery" section - this is not yet supported in Cortex Innovation.
    * Ignore the "Configuring Connectivity to Cortex Server" section - this is only necessary for Cortex Integrity.
    * Ignore the "Testing a clean system" section - this will be covered later in this guide.
    * Ignore the "Verify LiveView Dashboards on Cortex Gateway" - this is not supported in Cortex Innovation.

### Install Flow Debugger Service

1. We recommend that the Cortex Flow Debugger Service is installed on the same machine as Cortex Gateway. Copy the following artifacts to a folder on the machine (the version numbers may differ). By default the scripts use C:\Install as the location, so use this if you want to minimise changes:
   * Cortex Evolution - Innovation 2022-RC.2022.1.2 - Block Packages.zip
   * Cortex Evolution - Innovation 2022-RC.2022.1.4 - Flow Debugger Service.zip

1. Extract the "Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts.zip" zip file to a folder with the same name.
1. In the "Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts" folder, locate the file "Cortex.Innovation.Install.FlowDebuggerService.ps1" and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Install.FlowDebuggerService.ps1 `
    -FlowDebuggerServicePath "C:\Install\Cortex Evolution - Innovation * - Flow Debugger Service.zip" `
    -BlockPackagesPath "C:\Install\Cortex Evolution - Innovation * - Block Packages.zip" `
    -Credential $c
    ```

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |FlowDebuggerServicePath                       | Configure this value with the location of the Flow Debugger Service zip file on the application server. The wildcard (*) can stay in place, this means that the script will find the first zip with any version number. |
    |BlockPackagesPath                             | Configure this value with the location of the Block Packages zip file on the application server. The wildcard (*) can stay in place, this means that the script will find the first zip with any version number. |

1. Save and close the PowerShell file.
1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the Installation Scripts folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts"
    ```

1. Install Cortex HA Services and infrastructure by running the following command (Tee-Object will write output to both the PowerShell console and a log file, the path can be changed if required.):
  
    ```powershell
    .\Cortex.Innovation.Install.FlowDebuggerService.ps1 | Tee-Object C:\Temp\cortex-flow-debugger-service-install-log.txt
    ```

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (Application and load balancer) and press OK.
1. Wait for the script to finish running. This should take approximately 2 minutes.
1. An error may have appeared saying:

    ```powershell
    The Windows Process Activation Service service is not started.
    ```

    This can be ignored.
1. Check that there have been no other errors in the script; these would appear in red in the console. If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the installation.

    If the errors do not give any instructions on how to rectify, see [Troubleshooting][Troubleshooting Root Certificate Error] for further information; if this does not help then please contact Cortex for assistance.

#### Finish Gateway configuration

1. Log in to Cortex Gateway as your "administrator" user.
1. In the Cortex Gateway UI go to Settings → LDAP Authorisation and configure security roles for LDAP groups to your requirements. You can refer to "Section 2.2 Configuring Authorisation Rights" of the Cortex Studio Admin Guide for more details on this.
1. Log out and Login as a user with Studio permissions.

## Next Steps?
1. [Setup](../../setup) the platform
2. [Try it out](../../tryitout)

### Try it out

#### Test Debugging

1. Use the following steps to test the system be creating a new flow (alternatively, if you already have Cortex Innovation flows which are compatible with this version, feel free to import them, configure Studio Authorisation for them and check that they can be debugged, published and executed).
1. Click on the Flows charm, then the + button and click "Group" to open a dialog.
1. Enter a name for the group, configure the Permission Groups and click OK to create the group.
1. Click on the group to open it (refresh the page if it does not appear).
1. Inside the group, click the + button again and click on "Flow (Innovation)" to open a dialog. If the menu item is not present, it means that the "FeatureFlags" in the "parameters.xml" file was not set properly when installing Cortex Gateway. See [Troubleshooting][Troubleshooting No Innovation] for more information.
1. Enter a name for the flow, configure the Permission Groups and click OK to create the flow.
1. The flow should be displayed with a start flow block and end flow block. A list of block palettes should be displayed down the left hand side:
    {{< figure class="no-float" src="/images/New Innovation Flow View.PNG" title="New Flow - Number of palettes may differ" >}}
    If the blocks in the flow do not display or the palettes are not visible, see [Troubleshooting][Troubleshooting No Blocks] for more information.
1. Add a "Set Variable" block and connect it between the start and end blocks.
1. Click the "Set Variable" block to open the Property Editor. Set the "Value" property to `DateTime.Now`. Type `Output` into the "Variable" property and click "Create Variable".
1. In the Variable Editor, set "Is Output Variable?" to `true` for the new "Output" variable.
1. Set a breakpoint on the end block and start the flow. An execution token should appear, the Output variable should show the current time. If the token does not appear, try refreshing the page.
1. Continue or stop the execution.
1. Commit the flow.

#### Test Publishing and Executing production flows

1. Log into Cortex Gateway with a user that has the "Administrator" role.
1. Click on the "Settings" charm, then "Packages".
1. Click "Add Package Definition". Enter a package name and select the new flow to add to the package. Click "Save" to add the new package.
1. Click "Publish". A success message should appear. If it doesn't it means that either one or more of the "Service Fabric x" values in the "parameters.xml" file was not set properly when installing Cortex Gateway, or the HA Services aren't healthy. See [Troubleshooting][Troubleshooting No Publish] for more information.
1. Open an HTTP client, such as Postman. Make a request with the following format:
    | Property      | Value                                                                               |
    |---------------|-------------------------------------------------------------------------------------|
    | Action        | POST                                                                                |
    | URL           | https://{FQDN of Application Server}:8722/api/default/default/flows/{Flow Name}/executions?packageName={Package Name}<br />e.g. https://ha-server1.domain.com:8722/api/default/default/flows/NewFlow/executions?packageName=NewPackage|
    | Content Type  | application/json                                                                    |
    | Body          | {}                                                                                  |
    | Authentication| Basic                                                                               |
    | Username      | The value used for ApiGatewayBasicAuthUser when installing HA Services              |
    | Password      | The value used for ApiGatewayBasicAuthPwd when installing HA Services (Unencrypted) |

    {{% alert title="Note" %}} If you used self-signed certificates when installing HA Services and infrastructure you will need to disable SSL certificate validation in your HTTP client. {{% /alert %}}

1. The request should return a json object with the output variables of the flow e.g. `{ "Output": "2022-03-09T07:35:16+0000" }`.
1. Cortex Innovation has now been verified and is ready to use.

[Troubleshooting]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.Troubleshooting" >}}
[Troubleshooting No Innovation]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.TroubleshootingNoInnovation" >}}
[Troubleshooting No Blocks]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.TroubleshootingNoBlocks" >}}
[Troubleshooting No Publish]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.TroubleshootingNoPublish" >}}
[Troubleshooting Root Certificate Error]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.TroubleshootingNoRootCertificate" >}}
[Port Requirements]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.Ports" >}}
[Alternative Architectures]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.AlternativeArchitectures" >}}
[Advanced Configuration]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.AdvancedConfig" >}}
