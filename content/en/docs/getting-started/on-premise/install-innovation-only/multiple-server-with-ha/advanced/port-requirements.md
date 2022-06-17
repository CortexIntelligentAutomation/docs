---
title: "Port Requirements for Application Servers and Load Balancer"
linkTitle: "Port Requirements for Application Servers and Load Balancer"
description: "Information about the ports opened when installing Cortex Innovation."
---

# {{< param title >}}

Cortex Innovation and Microsoft Service Fabric open a range of firewall ports between the servers and specific services. Some of them are opened during installation, others are opened dynamically as needed. These are opened on Windows Firewall. If any other firewall exists between the servers, it will be necessary to configure this selection of rules on it. Most ports may be altered if another program overlaps with them, the description will say if this is not possible.

## Cortex Innovation Ports

| Name | Description | Default Port(s) | Protocol | Direction |
|------|-------------|-----------------|----------|-----------|
| Cortex.RabbitMqAmqpPorts | The port used by AMQP 0-9-1 and 1.0 clients with TLS. **This cannot currently be changed.** | 5671 | TCP | Inbound |
| Cortex.RabbitMqEpmdPorts | The port used by epmd, a peer discovery service used by RabbitMQ nodes and CLI tools. **This cannot currently be changed.** | 4369 | TCP | Inbound |
| Cortex.RabbitMqErlangDistribut ionClientPorts | The ports used by CLI tools (Erlang distribution client ports) for communication with nodes and is allocated from a dynamic range (computed as Erlang dist port + 10000 through dist port + 10010). **This cannot currently be changed.** | 35672-35682 | TCP | Inbound |
| Cortex.RabbitMqErlangDistribut ionServerPort | The port used for RabbitMQ inter-node and CLI tools communication (Erlang distribution server port) and is allocated from a dynamic range (limited to a single port by default, computed as AMQP port + 20000). **This cannot currently be changed.** | 25672 | TCP | Inbound |
| Cortex.RabbitMqManagement ApiPort | The port used by the RabbitMQ management plugin. **This cannot currently be changed.** | 15671 | TCP | Inbound |
| Cortex.WindowsSmbRemote Registry | The ports used by Windows SMB and Remote Registry service. | 135, 137, 138, 139, 445 | TCP | Inbound |
| Cortex.ServiceFabric.Customer1. ClusterConnectionEndpointPort | The port used by the client to connect to the cluster when client APIs are used. | 8001 | TCP | Inbound |
| Cortex.ServiceFabric.Customer1. ClientConnectionEndpointPort | The port where the nodes communicate with each other. | 8002 | TCP | Inbound |
| Cortex.ServiceFabric.Customer1. ServiceConnectionEndpointPort | The port used by the applications and services deployed on a node to communicate with the Service Fabric client on that particular node. | 8004 | TCP | Inbound |

## Microsoft Service Fabric Firewall Rules (present on all Application Servers, with Domain, Public and Private Profiles)

These rules will all appear in Windows Firewall with names starting with ‘{CustomerName}.{NodeName} WindowsFabric’.

|Name in Rule | Name in Config | Description | Default Port(s) | Protocol(s) | Direction |
|-------------|----------------|-------------|-----------------|-------------|-----------|
| Application Processes | application Ports | The ports that are used by the Service Fabric applications. Service Fabric uses these ports whenever new dynamic ports are required. **The application port range should be large enough to cater for the dynamic port allocation of the application. Currently at least 400 is recommended. This may change if new services are added. This range should not overlap the Dynamic Ports (ephemeralPorts) range as set in the configuration.** <br /><br /> **Program**: Any | 10010-10500 | TCP, UDP | Inbound, Outbound |
| BackupRestore Service Process | N/A | The port used by the Service Fabric process which manages the backup and restore of HA nodes. <br /> <br /> **Program:** %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\ \_\_FabricSystem\_<AppID>\\BRS.Code.Current\\FabricBRS.exe | Any | TCP | Inbound, Outbound  |
| CentralSecret Service Process | N/A | The port used by the Service Fabric process which manages secrets. <br /> <br /> **Program:** %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\ \_\_FabricSystem\_<AppID>\\BRS.Code.Current\\FabricCSS.exe | Any | TCP | Inbound, Outbound |
| DCA Process | N/A | The port used by the Service Fabric Diagnostics Collection Agent, which manages Diagnostic data. <br /> <br /> **Program:** %ProgramFiles%\\Microsoft Service Fabric\\bin\\ Fabric\\DCA.Code\\FabricDCA.exe | Any | TCP | Outbound |
| Dynamic Ports | ephemeral Ports | Override the [**dynamic ports used by the OS**](https://support.microsoft.com/kb/929851). Service Fabric uses a part of these ports as application ports, and the remaining are available for the OS. It also maps this range to the existing range present in the OS, so for all purposes, you can use the ranges given in the sample JSON files. **Make sure that the difference between the start and the end ports is at least 255**. You might run into conflicts if this difference is too low, because this range is shared with the OS. To see the configured dynamic port range, run netsh int ipv4 show dynamicport tcp. <br /> <br /> **Program:** Any | 10501-20000 | TCP, UDP | Inbound, Outbound |
| EventStore Service Process | N/A | The port used by the Service Fabric EventStore, which maintains events about the state of the HA nodes. <br /> <br /> **Program:** %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\ \_\_FabricSystem\_App*\\ES.Code.Current\\ EventStore.Service.exe | Any | TCP | Inbound, Outbound |
| Fabric Gateway Process | N/A | The port used by the Service Fabric Gateway, which allows REST and management functions to access the HA nodes. <br /> <br /> **Program:** %ProgramFiles%\\Microsoft Service Fabric\\bin\\Fabric\\ Fabric.Code\\FabricGateway.exe | Any | TCP | Inbound, Outbound |
| Fabric Process | N/A | The port used by the main Service Fabric service. <br /> <br /> **Program:** %ProgramFiles%\\Microsoft Service Fabric\\bin\\Fabric\\ Fabric.Code\\Fabric.exe | Any | TCP | Inbound, Outbound |
| FabricUpgrade Service Process | N/A | The port used by the Service Fabric Upgrade service. <br /> <br /> **Program:** %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\ \_\_FabricSystem\_App*\\US.Code.Current\\FabricUS.exe | Any | TCP | Inbound, Outbound |
| FaultAnalysis Service Process | N/A | The port used by the Service Fabric Fault Analysis service. <br /> <br /> **Program:** %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\ \_\_FabricSystem\_App*\\FAS.Code.Current\\FabricFAS.exe | Any | TCP | Inbound, Outbound |
| FileStore Service Process | N/A | The port used by the Service Fabric File Store service, which manages the application file store and image store. <br /> <br /> **Program:** %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\ \_\_FabricSystem\_App*\\FileStoreService.Code.Current\\ FileStoreService.exe | Any | TCP | Inbound, Outbound |
| GatewayResource Manager Process | N/A | The port used by the Service Fabric Gateway Resource Manager, which provides APIs to manage the HA nodes and other resources. <br /> <br /> **Program:** %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\ \_\_FabricSystem\_App*\\GRM.Code.Current\\FabricGRM.exe | Any | TCP | Inbound, Outbound |
| HTTP App Gateway | reverse Proxy Endpoint Port | **This port cannot be changed at the current time. If it is already in use, please contact Cortex for assistance.** The reverse proxy endpoint. For more information, see [**Service Fabric reverse proxy**](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-reverseproxy). <br /> <br /> **Program:** Any | 9081 | TCP | Inbound, Outbound |
| Http Gateway | http Gateway Endpoint Port | The port used by Service Fabric Explorer to connect to the cluster. **This changes the port used to connect to the Service Fabric management portal as part of the post-install checks.** <br /> <br /> **Program:** Any | 9080 | TCP | Inbound, Outbound |
| Infrastructure Service Process | N/A | The port used by the Service Fabric Infrastructure Service. <br /> <br /> **Program:** %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\ \_\_FabricSystem\_App*\\IS.Code.Current\\FabricIS.exe | Any | TCP | Inbound, Outbound |
| Lease Driver | lease Driver Endpoint Port | The port used by the cluster lease driver to find out if the nodes are still active. <br /> <br /> **Program:** Any | 9002 | TCP | Inbound, Outbound |
| ManagedIdentity TokenService Process | N/A | The port used by the Service Fabric Managed Identity Token Service. <br /> <br /> **Program:** %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\ \_\_FabricSystem\_App*\\MITS.Code.Current\\ ManagedIdentityTokenService.exe | Any | TCP | Inbound, Outbound |
| RepairManager Service Process | N/A | The port used by the Service Fabric Repair Manager Service. <br /> <br /> **Program:** %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\ \_\_FabricSystem\_App*\\RM.Code.Current\\FabricRM.exe | Any | TCP | Inbound, Outbound |
| Upgrade Orchestration Service Process | N/A | The port used by the Service Fabric Upgrade Orchestration service. <br /> <br /> **Program:** %ProgramData%\\SF\\<CustomerName>.<Node Name>\\Fabric\\work\\Applications\\ \_\_FabricSystem\_App*\\UOS.Code.Current\\FabricUOS.exe | Any | TCP | Inbound, Outbound |

## Cortex HA Service Rules

Each service has an endpoint which is used to communicate with Service Fabric and the RabbitMQ message broker. These are configured in the ServiceManifest.xml file within each package in the ApplicationPackages\Cortex directory of the installation media. These ports cannot be used by any other program. If they do clash with another program, they may be changed but additional configuration changes may be necessary, as described in the description of each port. The Application ports must not lie in the ephemeralPorts range.

|Name of Service | Description | Default Port(s) | Protocol(s) | Direction | Program|
|----------------|-------------|-----------------|-------------|-----------|--------|
| API Gateway    | The port providing an entry into the API Gateway service. This is used by Cortex Gateway to communicate with the Cortex HA infrastructure. **If this is changed then it will be necessary to use the updated value in the** **"****Service Fabric Api Gateway Endpoint****" parameter of SetParameters.xml when configuring Cortex Gateway later in this document.** | 8722 | TCP, UDP | Inbound, Outbound | Any |
| Flow Execution | The ports providing communication between other services and the stateful Cortex Flow Execution service. These are dynamic ports managed by Service Fabric. | Dynamic – Uses the application ports | N/A | N/A | N/A |

## Cortex Load Balancer Rules

The load balancer server must be able to retrieve traffic via HTTPS. The following firewall ports are opened by the installer (these rules will all appear in Windows Firewall with names starting with `{CustomerName}`):

|Name in Rule        | Name in Config       | Default Port(s) | Protocol(s) | Direction | Program|
|--------------------|----------------------|-----------------|-------------|-----------|--------|
| GoBetweenTlsPort   | loadBalancerTlsPort  | 443             | TCP         | Inbound   | Any    |
