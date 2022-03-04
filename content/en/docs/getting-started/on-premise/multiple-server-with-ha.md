---
title: "Multiple server - with HA (recommended)"
linkTitle: "Multiple server - with HA (recommended)"
description: >
    Information on installing Cortex across multiple on-premise servers with high availability (HA), including: information about components, supported architectures, pre-requisites and installation instructions.
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
| [Cortex&nbsp;Block&nbsp;Packages](/docs/concepts/todo-cortex-block-packages) | A set of .nupkg files which contain the blocks that users can use to build flows. Used by the Cortex Flow Debugger Service and the Cortex Flow Execution Service. | Required | Web&nbsp;Application&nbsp;Server, Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric](https://azure.microsoft.com/en-us/services/service-fabric/) | Distributed systems platform that hosts the Cortex services where automation solutions are deployed to; provides scalable, reliable and manageable enterprise-grade High Availability (HA) using clustering. | Required | Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric&nbsp;Explorer](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-visualizing-your-cluster) | Web portal for monitoring and managing the HA clusters that automation solutions are deployed to. | Required | Application&nbsp;Server |
| [Particular&nbsp;NServiceBus](https://particular.net/nservicebus) | Messaging platform enabling scalable, reliable and flexible asynchronous messaging between distributed Cortex services. | Required | Application&nbsp;Server |
| [Pivotal&nbsp;RabbitMQ](https://www.rabbitmq.com/) | Message broker used by the NServiceBus messaging platform to transport messages asynchronously between distributed Cortex services using publish/subscribe mechanism. | Required | Application&nbsp;Server |
| [Erlang&nbsp;OTP](https://github.com/erlang/otp) | Erlang run-time required by the RabbitMQ message broker. | Required | Application&nbsp;Server |
| TODO (SSDB, SSIS, SSAS, SSRS) | Hopefully, we can remove the need for SQL Server database components in next generation, by using a combination of git for configuration, and log ingestion tools like Humio or Loki, Grafana, Prometheus combination to replace dashboarding and analytics. | End-of-life | Database&nbsp;Server |
| [NSSM](https://nssm.cc/) | Windows Service Manager that hosts the gobetween load balancer application as a Windows Service. | Required | Load&nbsp;Balancer |
| [gobetween](http://gobetween.io/) | L4 load balancer and reverse proxy used to load balance requests between clustered instances of Cortex services. | Required | Load&nbsp;Balancer |

### Recommended architecture

The following architecture requires 5 servers - a web application server which contains Gateway, Flow Debugger Service and Databases plus a load balancer server and 3 application servers. This will be suitable for most installations, however if Cortex Gateway is expected to have high load it would be advisable to install Cortex Gateway, Flow Debugger Service and Databases onto different machines (7 server architecture).

{{< figure class="no-float" src="/images/Cortex Innovation Overview.png" title="5 Server Architecture Diagram" >}}

### Alternative architectures

If Cortex Gateway is expected to have high load it would be advisable to install Cortex Gateway, Flow Debugger Service and Databases onto different machines (7 server architecture) as shown below:

{{< figure class="no-float" src="/images/Cortex Innovation Overview 7 servers.png" title="7 Server Architecture Diagram" >}}

It is also possible to minimise the number of servers used by installing SQL Express/SQL Server, Cortex Gateway and the Flow Debugger Service on either the load balancer machine or one of the application servers (4 server architecture), as shown below. A 3 node architecture is not possible as the load balancer cannot route requests to itself.

{{< figure class="no-float" src="/images/Cortex Innovation Overview 4a servers.png" title="4 Server Architecture Diagram - Web Applications on Load Balancer Server" >}}
{{< figure class="no-float" src="/images/Cortex Innovation Overview 4b servers.png" title="4 Server Architecture Diagram - Web Applications on Application Server" >}}

A number of other configurations are also possible, where any combination of the load balancer, Cortex Gateway, Flow Debugger Service and Databases can be on any combination of servers. This can be particularly relevant for adding Cortex Innovation to an existing Gateway installation.

## Prerequisites

### Hardware Requirements

{{% alert title="Note" %}}The minimum number of servers required to run Cortex with HA is 4. This setup requires multiple server roles to be installed on the same server.

The recommended number of servers is 7, and allows each server role instance to be installed on its own server.{{% /alert %}}

| Server&nbsp;Role | Servers&nbsp;Required | CPU&nbsp;Cores&nbsp;(>&nbsp;2GHz) | RAM&nbsp;(GB) | Disk&nbsp;(GB) |  
|------------------|-----------------------|-----------------------------------|---------------|----------------------|
| Web&nbsp;Application&nbsp;Server | 2[^1]&nbsp;*Recommended*<br>1[^2]&nbsp;*Minimum* | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 100+&nbsp;*Recommended*<br>50&nbsp;*Minimum*<br>TODO&nbsp;free&nbsp;on&nbsp;TODO&nbsp;drive |
| Application&nbsp;Server | 3&nbsp;*Bronze&nbsp;availability*[^3]<br>5&nbsp;*Silver&nbsp;availability*<br>7&nbsp;*Gold&nbsp;availability*<br>9&nbsp;*Platinum&nbsp;availability* | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 16+&nbsp;*Recommended*<br>8&nbsp;*Minimum* | 100+&nbsp;*Recommended*<br>50&nbsp;*Minimum*<br>40+&nbsp;free&nbsp;on&nbsp;%ProgramData%&nbsp;drive |
| Database&nbsp;Server | 1[^4] | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 100+&nbsp;*Recommended*<br>50&nbsp;*Minimum*<br>5+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |
| Load&nbsp;Balancer | 1[^5] | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 100+&nbsp;*Recommended*<br>50&nbsp;*Minimum*<br>5+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |

TODO: This is where sf cluster is https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cluster-standalone-deployment-preparation
TODO: "Application Server" or "HA node server"? Need to chose and update diagrams as necessary.

[^1]: If both Gateway and LivePortal web applications are being installed, it is recommended that they are each installed on a separate Web Application Server. Neither Gateway or LivePortal currently offer HA support.
[^2]: If only Gateway is being installed, only 1 server is needed. If both Gateway and LivePortal web applications are being installed, they can be installed on the same Web Application Server, but it is not recommended.
[^3]: Application servers support HA via clustering. A cluster must consist of a minimum of 3 nodes, and the number of nodes must be an odd number to ensure a quorum.
[^4]: Database server doesn't currently offer HA support.
[^5]: A software-based load balancer called [gobetween](http://gobetween.io/) is provided with the platform. This must be installed on its own server as it doesn't support routing traffic to itself. It also doesn't currently support HA, but it may be possible to use multiple gobetween load balancers with Anycast network addressing and routing to provide high availability, as described in [https://en.wikipedia.org/wiki/Anycast](https://en.wikipedia.org/wiki/Anycast); however, this has not been verified yet. It is possible to use an [alternative load balancer](#alternative-load-balancer-requirements) to the one provided.

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
| Database&nbsp;Server | [2019&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2019?filetype=ISO)&nbsp;*Recommended*<br>[2016&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2016?filetype=ISO) | [2019&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-sql-server-2019?filetype=EXE)&nbsp;*Recommended*<br>[2016&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-sql-server-2016?filetype=EXE) | [Framework&nbsp;4.7.1](https://www.microsoft.com/en-US/download/details.aspx?id=56116) | 5.1 | |
| Load&nbsp;Balancer | [2019&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2019?filetype=ISO)&nbsp;*Recommended*<br>[2016&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2016?filetype=ISO) | | [Framework&nbsp;4.7.1](https://www.microsoft.com/en-US/download/details.aspx?id=56116) | 5.1 | |

[^6]: Windows Server Standard and Datacenter editions are supported. Filesystem **must be NTFS** and networking **must use IPv4**. Linux is not supported, but may be in the future.
[^7]: SQL Server Standard and Enterprise editions are supported. Only SQL Server is supported; other databases, including SQL Server Express are not supported.
[^8]: Only IIS is supported; other web servers, including IIS Express are not supported.
[^9]: Ships as a windows role within Windows Server 2019.
[^10]: Ships as a windows role within Windows Server 2016.

### Security Requirements

#### Remote Registry Service

All HA node servers must have the Remote Registry service running.

#### Installation User

A domain user which is a member of the local Administrators group on all servers (load balancer and HA) must be available to run the installation scripts. This is a pre-requisite of Microsoft Service Fabric, which is the HA platform that Cortex Innovation is built upon.

#### Antivirus Exclusions

It is advised (by Microsoft Service Fabric) that certain antivirus exclusions are created on each Application server to reduce anti-virus processing on Service Fabric artefacts. The process exclusions should be done before installation occurs, as the processes will be used during installation of the application and anti-virus software can cause the installation to fail or timeout. Some antivirus software will only allow folder exclusions to be applied if they already exist, so these may be added after installation occurs. The following exclusions should be applied for any anti-virus software running on any of the nodes:

#### Antivirus Excluded Folders

* %ProgramFiles%\Microsoft Service Fabric
* %ProgramData%\SF
* %ProgramData%\SF\Logs

#### Antivirus Excluded Processes

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

These are described in the ‘Set appropriate Service Fabric antivirus exclusions’ section of the following article:
https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cluster-standalone-deployment-preparation#environment-setup

If Windows Defender is the only antivirus running, the exclusions can be added by running the following PowerShell script as administrator:

```powershell
$Folders = @(
    "%ProgramFiles%\Microsoft Service Fabric",
    "%ProgramData%\SF",
    "%ProgramData%\SF\Logs"
)

$Programs = @(
    "Fabric.exe",
    "FabricHost.exe",
    "FabricInstallerService.exe",
    "FabricSetup.exe",
    "FabricDeployer.exe",
    "ImageBuilder.exe",
    "FabricGateway.exe",
    "FabricDCA.exe",
    "FabricFAS.exe",
    "FabricUOS.exe",
    "FabricRM.exe",
    "FileStoreService.exe"
)

Add-MpPreference -ExclusionPath $Folders
Add-MpPreference -ExclusionProcess $Programs
```

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

All servers (load balancer and application servers) must be on the same domain and cannot be domain controllers.

#### Port Requirements

Cortex Evolution and Microsoft Service Fabric open a range of firewall ports between the servers 
and specific services. Some of them are opened during installation, others are opened 
dynamically as needed. These are opened on Windows Firewall. If any other firewall exists 
between the servers, it may be necessary to configure this selection of rules on it. Most
ports may be altered if another program overlaps with them, the description will say if this 
is not possible.

##### Cortex Evolution Ports

| Name | Description | Default Port(s) | Protocol | Direction |
|------|-------------|-----------------|----------|-----------|
| Cortex.RabbitMqAmqpPorts | The port used by AMQP 0-9-1 and 1.0 clients with TLS. **This cannot currently be changed.** | 5671 | TCP | Inbound |
| Cortex.RabbitMqEpmdPorts | The port used by epmd, a peer discovery service used by RabbitMQ nodes and CLI tools. **This cannot currently be changed.** | 4369 | TCP | Inbound |
| Cortex.RabbitMqErlangDistributionClientPorts | The ports used by CLI tools (Erlang distribution client ports) for communication with nodes and is allocated from a dynamic range (computed as Erlang dist port + 10000 through dist port + 10010). **This cannot currently be changed.** | 35672-35682 | TCP | Inbound |
| Cortex.RabbitMqErlangDistributionServerPort | The port used for RabbitMQ inter-node and CLI tools communication (Erlang distribution server port) and is allocated from a dynamic range (limited to a single port by default, computed as AMQP port + 20000). **This cannot currently be changed.** | 25672 | TCP | Inbound |
| Cortex.RabbitMqManagementApiPort | The port used by the RabbitMQ management plugin. **This cannot currently be changed.** | 15671 | TCP | Inbound |
| Cortex.WindowsSmbRemoteRegistry | The ports used by Windows SMB and Remote Registry service. | 135, 137, 138, 139, 445 | TCP | Inbound |
| Cortex.ServiceFabric.Customer1.ClusterConnectionEndpointPort | The port used by the client to connect to the cluster when client APIs are used. | 9000 | TCP | Inbound |
| Cortex.ServiceFabric.Customer1.ClientConnectionEndpointPort | The port where the nodes communicate with each other. | 9001 | TCP | Inbound |
| Cortex.ServiceFabric.Customer1.ServiceConnectionEndpointPort | The port used by the applications and services deployed on a node to communicate with the Service Fabric client on that particular node. | 9003 | TCP | Inbound |

##### Microsoft Service Fabric Firewall Rules (present on all Application Servers, with Domain, Public and Private Profiles)

These rules will all appear in Windows Firewall with names starting with ‘{CustomerName}.{NodeName} WindowsFabric’.

|Name in Rule | Name in Config | Description | Default Port(s) | Protocol(s) | Direction | Program|
|-------------|----------------|-------------|-----------------|-------------|-----------|--------|
| Application Processes | applicationPorts | The ports that are used by the Service Fabric applications. Service Fabric uses these ports whenever new dynamic ports are required. **The application port range should be large enough to cater for the dynamic port allocation of the application. Currently at least 400 is recommended. This may change if new services are added. This range should not overlap the Dynamic Ports (ephemeralPorts) range as set in the configuration.** | 10010-10500 | TCP, UDP | Inbound, Outbound | Any |
| BackupRestoreService Process | N/A | The port used by the Service Fabric process which manages the backup and restore of HA nodes. | Any | TCP | Inbound, Outbound | %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\\_\_FabricSystem\_<AppID>\\BRS.Code.Current\\FabricBRS.exe |
| CentralSecretService Process | N/A | The port used by the Service Fabric process which manages secrets. | Any | TCP | Inbound, Outbound | %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\\_\_FabricSystem\_<AppID>\\BRS.Code.Current\\FabricCSS.exe |
| DCA Process | N/A | The port used by the Service Fabric Diagnostics Collection Agent, which manages Diagnostic data. | Any | TCP | Outbound | %ProgramFiles%\\Microsoft Service Fabric\\bin\\Fabric\\DCA.Code\\FabricDCA.exe |
| Dynamic Ports | ephemeralPorts | Override the [**dynamic ports used by the OS**](https://support.microsoft.com/kb/929851). Service Fabric uses a part of these ports as application ports, and the remaining are available for the OS. It also maps this range to the existing range present in the OS, so for all purposes, you can use the ranges given in the sample JSON files. **Make sure that the difference between the start and the end ports is at least 255**. You might run into conflicts if this difference is too low, because this range is shared with the OS. To see the configured dynamic port range, run netsh int ipv4 show dynamicport tcp. | 10501-20000 | TCP, UDP | Inbound, Outbound | Any |
| EventStoreService Process | N/A | The port used by the Service Fabric EventStore, which maintains events about the state of the HA nodes. | Any | TCP | Inbound, Outbound | %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\\_\_FabricSystem\_App4294967295\\ES.Code.Current\\EventStore.Service.exe |
| Fabric Gateway Process | N/A | The port used by the Service Fabric Gateway, which allows REST and management functions to access the HA nodes. | Any | TCP | Inbound, Outbound | %ProgramFiles%\\Microsoft Service Fabric\\bin\\Fabric\\Fabric.Code\\FabricGateway.exe |
| Fabric Process | N/A | The port used by the main Service Fabric service. | Any | TCP | Inbound, Outbound | %ProgramFiles%\\Microsoft Service Fabric\\bin\\Fabric\\Fabric.Code\\Fabric.exe |
| FabricUpgradeService Process | N/A | The port used by the Service Fabric Upgrade service. | Any | TCP | Inbound, Outbound | %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\\_\_FabricSystem\_App4294967295\\US.Code.Current\\FabricUS.exe |
| FaultAnalysisService Process | N/A | The port used by the Service Fabric Fault Analysis service. | Any | TCP | Inbound, Outbound | %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\\_\_FabricSystem\_App4294967295\\FAS.Code.Current\\FabricFAS.exe |
| FileStoreService Process | N/A | The port used by the Service Fabric File Store service, which manages the application file store and image store. | Any | TCP | Inbound, Outbound | %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\\_\_FabricSystem\_App4294967295\\FileStoreService.Code.Current\\FileStoreService.exe |
| GatewayResourceManager Process | N/A | The port used by the Service Fabric Gateway Resource Manager, which provides APIs to manage the HA nodes and other resources. | Any | TCP | Inbound, Outbound | %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\\_\_FabricSystem\_App4294967295\\GRM.Code.Current\\FabricGRM.exe |
| HTTP App Gateway | reverseProxyEndpointPort | **This port cannot be changed at the current time. If it is already in use, please contact Cortex for assistance.** The reverse proxy endpoint. For more information, see [**Service Fabric reverse proxy**](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-reverseproxy). | 9081 | TCP | Inbound, Outbound | Any |
| Http Gateway | httpGatewayEndpointPort | The port used by Service Fabric Explorer to connect to the cluster. **This changes the port used to connect to the Service Fabric management portal as part of the post-install checks.** | 9080 | TCP | Inbound, Outbound | Any |
| InfrastructureService Process | N/A | The port used by the Service Fabric Infrastructure Service. | Any | TCP | Inbound, Outbound | %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\\_\_FabricSystem\_App4294967295\\IS.Code.Current\\FabricIS.exe |
| Lease Driver | leaseDriverEndpointPort | The port used by the cluster lease driver to find out if the nodes are still active. | 9002 | TCP | Inbound, Outbound | Any |
| ManagedIdentityTokenService Process | N/A | The port used by the Service Fabric Managed Identity Token Service. | Any | TCP | Inbound, Outbound | %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\\_\_FabricSystem\_App4294967295\\MITS.Code.Current\\ManagedIdentityTokenService.exe |
| RepairManagerService Process | N/A | The port used by the Service Fabric Repair Manager Service. | Any | TCP | Inbound, Outbound | %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\\_\_FabricSystem\_App4294967295\\RM.Code.Current\\FabricRM.exe |
| UpgradeOrchestrationService Process | N/A | The port used by the Service Fabric Upgrade Orchestration service. | Any | TCP | Inbound, Outbound | %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\\_\_FabricSystem\_App4294967295\\UOS.Code.Current\\FabricUOS.exe |

##### Cortex HA Service Rules

Each service has an endpoint which is used to communicate with Service Fabric and the RabbitMQ message broker. These are configured in the ServiceManifest.xml file within each package in the ApplicationPackages\Cortex directory of the installation media. These ports cannot be used by any other program. If they do clash with another program, they may be changed but additional configuration changes may be necessary, as described in the description of each port. The Application ports must not lie in the ephemeralPorts range.

|Name of Service | Description | Default Port(s) | Protocol(s) | Direction | Program|
|----------------|-------------|-----------------|-------------|-----------|--------|
| API Gateway    | The port providing an entry into the API Gateway service. This is used by Cortex Gateway to communicate with the Cortex HA infrastructure. **If this is changed then it will be necessary to use the updated value in the** **"****Service Fabric Api Gateway Endpoint****" parameter of SetParameters.xml when configuring Cortex Gateway later in this document.** | 8722 | TCP, UDP | Inbound, Outbound | Any |
| Flow Execution | The ports providing communication between other services and the stateful Cortex Flow Execution service. These are dynamic ports managed by Service Fabric. | Dynamic – Uses the application ports | N/A | N/A | N/A |

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

1. Choose one of the HA node machines and copy the following artefacts to a folder on it (the version numbers may differ). By default the scripts use C:\Install as the location, so use this if you want to minimise changes:
   * Cortex Evolution - Innovation 2022-RC.2022.1.2 - Block Packages.zip
   * Cortex Evolution - Innovation 2022-RC.2022.1.4 - HA Services.zip
   * Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts.zip

1. Extract the "Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts.zip" zip file to a folder with the same name.
1. In the "Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts" folder, locate the file "Cortex.Innovation.Install.Config.json" and open it with a text editor.
1. Change the configuration file according to your cluster, referring to the following example and details:

    {{< highlight json "linenos=table,hl_lines=4 17 20 22 26-27 30-31 34-35 41 43 45 47 49 51 72-75 79-82,linenostart=1" >}}
    {
      "customers": [
        {
          "name": "Customer1",
          "isPrimary": true,
          "rules": {
            "clientConnectionEndpointPort": "8001",
            "clusterConnectionEndpointPort": "8002",
            "leaseDriverEndpointPort": "8003",
            "serviceConnectionEndpointPort": "8004",
            "httpGatewayEndpointPort": "9080",
            "reverseProxyEndpointPort": "9081",
            "applicationPorts": "10010-10500",
            "ephemeralPorts": "10501-20000"
          },
          "loadBalancer": {
            "installDirectory": "c:\\ProgramData\\loadbalancer",
            "protocol": "udp",
            "balance": "roundrobin",
            "host": "lb-server:162",
            "applicationPort": "10001",
            "adminCertificate": "loadBalancerCert"
          },
          "servers": [
            {
              "serverName": "ha-server1",
              "iPAddress": "192.168.1.1"
            },
            {
              "serverName": "ha-server2",
              "iPAddress": "192.168.1.2"
            },
            {
              "serverName": "ha-server3",
              "iPAddress": "192.168.1.3"
            }
          ]
        }
      ],
      "servers": {
        "ha-server1": {
          "faultDomain": "fd:/fd1",
          "serverCertificate": "serverCert"
        },
        "ha-server2": {
          "faultDomain": "fd:/fd2",
          "serverCertificate": "serverCert"
        },
        "ha-server3": {
          "faultDomain": "fd:/fd3",
          "serverCertificate": "serverCert"
        }
      },
      "rules": {
        "windowsSmbRemoteRegistry": [
          "135",
          "137",
          "138",
          "139",
          "445"
        ],
        "rabbitMqAmqpPorts": [
          "5671"
        ],
        "rabbitMqEpmdPort": "4369",
        "rabbitMqErlangDistributionClientPorts": "35672-35682",
        "rabbitMqErlangDistributionServerPort": "25672",
        "rabbitMqManagementApiPort": "15671"
      },
      "serverCertificates": {
        "serverCert": {
          "pfxCertificatePath": "C:\\Certificates\\wildCardCert.pfx",
          "pfxCertificatePassword": "pfxPassword",
          "pemRootCertificatePath": ""
        }
      },
      "adminCertificates": {
        "loadBalancerCert": {
          "pfxCertificatePath": "C:\\Certificates\\lbCert.pfx",
          "pfxCertificatePassword": "pfxPassword",
          "pemRootCertificatePath": ""
        }
      }
    }
    {{< / highlight >}}

    | Line | Description |
    |------|-------------|
    |4     | A name identifying the platform being installed. This should have no spaces or symbols. It will be appended to the node names that are displayed in the Service Fabric management tool. |
    |16-23 | If the bundled load balancer is not being used, delete these lines TODO: this will cause the line numbers to be wrong!!! |
    |17    | A local empty or non-existent directory on the load balancer server that the load balancer can be installed in. The directory path will be created if it does not exist. The installation user must have permissions to create and write to directories here. Ensure that all backslashes are escaped with another backslash. Environment variables cannot be used. |
    |20    | The computer name and port of the server that the load balancer should run on. This cannot be an IP address. The port must not be used by anything else. |
    |22    | The name of a certificate entry in the adminCertificates section. If this line is removed, an auto-generated self-signed certificate will be used. |
    |26, 30, 24 | The short computer names of the HA nodes. These must not contain the domain. The installation will be run on the first of these nodes. |
    |27, 31, 35 | The respective IPv4 addresses of the HA nodes. |
    |41, 45, 49 | These keys should be changed to the computer names of the HA nodes to match those on lines 26, 30 and 24 |
    |43, 47, 51 | The name of a certificate entry in the serverCertificates section. This should be the same for all HA servers. If these lines are removed, an auto-generated self-signed certificate will be used. Self-signed certificates are not recommended for production systems.|
    |72-74 | Skip configuring these lines if self-signed certificates are being used. |
    |79-81 | Skip configuring these lines if self-signed certificates are being used or if the bundled load balancer is not being used. |
    |73    |This is the local path of a .PFX certificate file on the first HA server, containing a full chain certificate with private key. Ensure that all backslashes are escaped with another backslash. Environment variables cannot be used. |
    |74    |The password used to secure the .PFX file.|
    |75    |This only needs to be used if the installation has failed due to a missing root certificate. See [Troubleshooting Root Certificate Error] for information.|
    |80    |This is the local path of a .PFX certificate file on the first HA server, containing a full chain certificate with private key. Ensure that all backslashes are escaped with another backslash. Environment variables cannot be used. |
    |81    |The password used to secure the .PFX file.|
    |82    |This only needs to be used if the installation has failed due to a missing root certificate. See [Troubleshooting Root Certificate Error] for information.|

1. Save and close the config file.
1. In the "Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts" folder, locate the file "Cortex.Innovation.Install.ps1" and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -HaServicesPath "C:\Install\Cortex Evolution - Innovation * - HA Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Evolution - Innovation * - Block Packages.zip" `
    -ApiGatewayBasicAuthUser "BasicAuthUser" `
    -ApiGatewayBasicAuthPwd "ADA9883B11BD4CDC908B8131B57944A4" `
    -Credential $c
    ```

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |HaServicesPath                                | Configure this value with the location of the HA Services zip file on the installation node. The wildcard (*) can stay in place, this means that the script will find the first zip with any version number. |
    |BlockPackagesPath                             | Configure this value with the location of the Block Packages zip file on the installation node. The wildcard (*) can stay in place, this means that the script will find the first zip with any version number. |
    |ApiGatewayBasicAuthUser                       | Configure this value with the username that should be used for Basic authentication when making HTTP requests to the ApiGateway service (e.g. starting production flows.).|
    |ApiGatewayBasicAuthPwd                       |  Configure this value with the password that should be used for Basic authentication when making HTTP requests to the ApiGateway service (e.g. starting production flows.). This should be Cortex Encrypted. |

    The ApiGatewayBasicAuthUser and ApiGatewayBasicAuthPwd will be needed later, when installing Cortex Gateway.

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

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (HA and load balancer) and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ (used by the HA cluster for orchestrating messages). This should be entered carefully and remembered as it may be needed if seeking support from Cortex. Press OK.
1. Wait for the command to finish. It will display the output of the installation command without making any changes to the system, to ensure things like communication between the servers are working. Check that there have been no errors in the script; these would appear in red in the console. If there are no errors, continue to the next step; otherwise, check if the errors have any instructions for rectifying the issue and follow them. If there are no useful instructions, check that all previous steps have been followed correctly and, if not, rectify it and run the command again. If this does not work, please contact Cortex for further assistance.
1. Install Cortex HA Services and infrastructure by running the following command (Tee-Object will write output to both the PowerShell console and a log file, the path can be changed if required.):
  
    ```powershell
    .\Cortex.Innovation.Install.ps1 | Tee-Object C:\Temp\cortex-ha-install-log.txt
    ```

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (HA and load balancer) and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ (used by the HA cluster for orchestrating messages). This should be entered carefully and remembered as it may be needed if seeking support from Cortex. Press OK.
1. Wait for the script to finish running. This should take approximately 10 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console. If there are any errors, then please follow any instructions given within them to rectify the situation, check your configuration files, and retry the installation. In some circumstances, retrying may error due to components being installed already. In this case please run the following command, followed by the original installation command:

    ```powershell
    .\Cortex.Innovation.Uninstall.ps1
    ```

If the errors do not give any instructions on how to rectify, see [Troubleshooting][] for further information; if this does not help then please contact Cortex for assistance.

## Install Web Application Server

### Install Gateway

1. Use one of the following installation guides to install SQL Server or SQL Server Express:
    * SQL Server 2019 Installation Guide for Cortex
    * SQL Server 2016 Installation Guide for Cortex
    * SQL Server 2016 Express Installation Guide for Cortex
1. Copy the following artefact (the version number may differ) to the machine that you will be installing Cortex Gateway on:
    * Cortex Evolution - Innovation 2022-RC.2022.1.2 - Gateway.zip
1. Use the "Cortex Installation Guide" to install Cortex Gateway, beginning at the section "Cortex Gateway Installation". Ensure that you refer to and follow the instructions for installing prerequisites in the "Note" sections. Use the following points as they will differ from a Cortex Integrity installation:
    * In the "Required Components", ensure that the prerequisites in the "Note" sections are followed ("System requirements" and "Install Internet Information Services") but do not install the additional Cortex components mentioed. For Cortex Innovation; only SQL Server and Cortex Gateway are needed, along with the other components detailed in this guide.
    * Wherever "Cortex Gateway.zip" is mentioned, use the "Cortex Evolution - Innovation * - Block Packages.zip" file that was copied in the previous step.
    * When configuring the "parameters.xml" file, some additional values need to be updated:

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

### Install Flow Debugger Service

1. We recommend that the Cortex Flow Debugger Service is installed on the same machine as Cortex Gateway. Copy the following artefacts to a folder on the machine (the version numbers may differ). By default the scripts use C:\Install as the location, so use this if you want to minimise changes:
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

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (HA and load balancer) and press OK.
1. Wait for the script to finish running. This should take approximately 2 minutes.
1. An error may have appeared saying:

    ```powershell
    The Windows Process Activation Service service is not started.
    ```

    This can be ignored.
1. Check that there have been no other errors in the script; these would appear in red in the console. If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the installation.

    If the errors do not give any instructions on how to rectify, see [Troubleshooting][] for further information; if this does not help then please contact Cortex for assistance.

## Next Steps?
1. [Setup](../../setup) the platform
2. [Try it out](../../tryitout)

### Try it out

TODO: Move this.

1. Check Service Fabric Explorer
1. Create a new flow (preferably with output variables, maybe input variables)
1. Run the flow
1. Go to Packages and make one
1. Publish the package
1. Use Postman to run a published flow (Might need to ignore validation if using self-signed certificates.)

### Troubleshooting

#### Root certificate verification failed as no root certificate has been specified

If the installation fails with “Root certificate verification failed as no root certificate has been specified.” it means that Windows has not got the trusted root installed for the provided X.509 certificate. This can be rectified by providing the path to a .pem file containing the root certificate in the “pemRootCertificatePath” property for each certificate in the “serverCertificates” and “adminCertificates” section of the configuration file. After adding this, the installation script can be re-run. The following steps can be taken to create a .pem file and re-run the installation (these instructions may differ slightly depending on the Certificate Authority):

1. In order to find out the issuer of the certificate, if not already known, the following script can be used, replacing the password for the pfx file and certificate path as necessary:

    ```powershell
    $p = ConvertTo-SecureString -String "pfxPassword" -AsPlainText -Force
    $c = Get-PfxData -Password $p -FilePath "C:\Certificates\serverCert.pfx"
    $c | Format-List
    ```

1. This will give a list of “Other Certificates” and “End Certificates” contained in the .pfx file. The issuer can be found in the “Issuer” property of one of the “Other Certificates”. If there are more than one, it will be the one that does not appear as a “Subject” in any of the other items.
1. E.g. For a “Let’s Encrypt” certificate this will give the following results:

    ```powershell
    OtherCertificates     : {[Subject]
                              CN=Let's Encrypt Authority X3, O=Let's Encrypt, C=US
                            [Issuer]
                              CN=DST Root CA X3, O=Digital Signature Trust Co.
                            [Serial Number]
                              0A0141420000015385736A0B85ECA708
                            [Not Before]
                              17/03/2016 16:40:46
                            [Not After]
                              17/03/2021 16:40:46
                            [Thumbprint]
                              E6A3B45B062D509B3382282D196EFE97D5956CCB
                            }
    EndEntityCertificates : {[Subject]
                              CN=*.domain.com
                            [Issuer]
                              CN=Let's Encrypt Authority X3, O=Let's Encrypt, C=US
                            [Serial Number]
                              03D3B2E5E7D75175C25B250305650ABE849A
                            [Not Before]
                              20/12/2019 16:27:36
                            [Not After]
                              19/03/2020 16:27:36
                            [Thumbprint]
                              D61356405B8D4AA11C29AF3D20F2D834C1A3039F
                            }
    ```

1. In this case, the root certificate is “DST Root CA X3”.
1. In a search engine, search for the CN of the issuer and one of the results should lead to a download of a .pem file or to a page with the certificate on it, which can then be copied and saved into a file with a .pem extension. Often, searching the issuer of the EndEntityCertificate, in the above case “Let’s Encrypt”, will also work.
1. E.g. for “Let’s Encrypt”, the results of the search for “DST Root CA X3” leads to “https://www.identrust.com/dst-root-ca-x3” which provides the following text to be saved as a .pem file:

    ```markdown
    -----BEGIN CERTIFICATE-----
    MIIDSjCCAjKgAwIBAgIQRK+wgNajJ7qJMDmGLvhAazANBgkqhkiG9w0BAQUFADA/
    MSQwIgYDVQQKExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMT
    DkRTVCBSb290IENBIFgzMB4XDTAwMDkzMDIxMTIxOVoXDTIxMDkzMDE0MDExNVow
    PzEkMCIGA1UEChMbRGlnaXRhbCBTaWduYXR1cmUgVHJ1c3QgQ28uMRcwFQYDVQQD
    Ew5EU1QgUm9vdCBDQSBYMzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
    AN+v6ZdQCINXtMxiZfaQguzH0yxrMMpb7NnDfcdAwRgUi+DoM3ZJKuM/IUmTrE4O
    rz5Iy2Xu/NMhD2XSKtkyj4zl93ewEnu1lcCJo6m67XMuegwGMoOifooUMM0RoOEq
    OLl5CjH9UL2AZd+3UWODyOKIYepLYYHsUmu5ouJLGiifSKOeDNoJjj4XLh7dIN9b
    xiqKqy69cK3FCxolkHRyxXtqqzTWMIn/5WgTe1QLyNau7Fqckh49ZLOMxt+/yUFw
    7BZy1SbsOFU5Q9D8/RhcQPGX69Wam40dutolucbY38EVAjqr2m7xPi71XAicPNaD
    aeQQmxkqtilX4+U9m5/wAl0CAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAOBgNV
    HQ8BAf8EBAMCAQYwHQYDVR0OBBYEFMSnsaR7LHH62+FLkHX/xBVghYkQMA0GCSqG
    SIb3DQEBBQUAA4IBAQCjGiybFwBcqR7uKGY3Or+Dxz9LwwmglSBd49lZRNI+DT69
    ikugdB/OEIKcdBodfpga3csTS7MgROSR6cz8faXbauX+5v3gTt23ADq1cEmv8uXr
    AvHRAosZy5Q6XkjEGB5YGV8eAlrwDPGxrancWYaLbumR9YbK+rlmM6pZW87ipxZz
    R8srzJmwN0jP41ZL9c8PDHIyh8bwRLtTcm1D9SZImlJnt1ir/md2cXjbDaJWFBM5
    JDGFoqgCWjBH4d1QB7wCCZAA62RjYJsWvIjJEubSfZGL+T0yjWW06XyxV3bqxbYo
    Ob8VZRzI9neWagqNdwvYkQsEjgfbKbYK7p2CNTUQ
    -----END CERTIFICATE-----
    ```

1. After saving the .pem file, transfer it to the same directory as other installation certificates.
1. Modify the following, highlighted sections of the installation configuration file like so:

    ```json
      "serverCertificates": {
        "serverCert": {
          "pfxCertificatePath": "C:\\Certificates\\wildCardCert.pfx",
          "pfxCertificatePassword": "pfxPassword",
          "pemRootCertificatePath": "C:\\Certificates\\rootCert.pem"
        }
      },
      "adminCertificates": {
        "loadBalancerCert": {
          "pfxCertificatePath": "C:\\Certificates\\lbCert.pfx",
          "pfxCertificatePassword": "pfxPassword",
          "pemRootCertificatePath": "C:\\Certificates\\lbRootCert.pem"
        }
      }
    ```

1. Run the installation script again.

[Troubleshooting]: {{< ref "#troubleshooting" >}}
[Troubleshooting Root Certificate Error]: {{< ref "#root-certificate-verification-failed-as-no-root-certificate-has-been-specified" >}}
