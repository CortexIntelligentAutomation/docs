#### Port Requirements

Cortex Evolution and Microsoft Service Fabric open a range of firewall ports between the servers 
and specific services. Some of them are opened during installation, others are opened 
dynamically as needed. These are opened on Windows Firewall. If any other firewall exists 
between the servers, it may be necessary to configure this selection of rules on it. Most
ports may be altered if another program overlaps with them, the description will say if this 
is not possible.


TODO: pull these onto a different page 

##### Cortex Evolution Ports

| Name | Description | Default Port(s) | Protocol | Direction |
|------|-------------|-----------------|----------|-----------|
| Cortex.RabbitMqAmqpPorts | The port used by AMQP 0-9-1 and 1.0 clients with TLS. **This cannot currently be changed.** | 5671 | TCP | Inbound |
| Cortex.RabbitMqEpmdPorts | The port used by epmd, a peer discovery service used by RabbitMQ nodes and CLI tools. **This cannot currently be changed.** | 4369 | TCP | Inbound |
| Cortex.RabbitMqErlangDistrubutionClientPorts | The ports used by CLI tools (Erlang distribution client ports) for communication with nodes and is allocated from a dynamic range (computed as Erlang dist port + 10000 through dist port + 10010). **This cannot currently be changed.** | 35672-35682 | TCP | Inbound |
| Cortex.RabbitMqErlangDistributionServerPort | The port used for RabbitMQ inter-node and CLI tools communication (Erlang distribution server port) and is allocated from a dynamic range (limited to a single port by default, computed as AMQP port + 20000). **This cannot currently be changed.** | 25672 | TCP | Inbound |
| Cortex.RabbitMqManagementApiPort | The port used by the RabbitMQ management plugin. **This cannot currently be changed.** | 15671 | TCP | Inbound |
| Cortex.WindowsSmbRemoteRegistry | The ports used by Windows SMB and Remote Registry service. | 135, 137, 138, 139, 445 | TCP | Inbound |
| Cortex.ServiceFabric.Customer1.ClusterConnectionEndpointPort | The port used by the client to connect to the cluster when client APIs are used. | 9000 | TCP | Inbound |
| Cortex.ServiceFabric.Customer1.ClientConnectionEndpointPort | The port where the HA nodes communicate with each other. | 9001 | TCP | Inbound |
| Cortex.ServiceFabric.Customer1.ServiceConnectionEndpointPort | The port used by the applications and services deployed on a node to communicate with the Service Fabric client on that particular node. | 9003 | TCP | Inbound |

##### Microsoft Service Fabric Firewall Rules (present on all HA Nodes, with Domain, Public and Private Profiles)

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