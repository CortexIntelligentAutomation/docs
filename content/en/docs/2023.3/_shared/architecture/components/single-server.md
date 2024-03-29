| Component                                         | Purpose                                                                                     | Required/Optional           | Server Role                                |
|---------------------------------------------------|---------------------------------------------------------------------------------------------|-----------------------------|--------------------------------------------|
| [{{% ctx %}} Gateway][Gateway Guide]                   | {{< section "/architecture/components/purpose/cortex-gateway.md" >}}               | Required                    | Web Application Server                     |
| [{{% ctx %}} Studio][Studio Guide]                     | {{< section "/architecture/components/purpose/cortex-studio.md" >}}                | Required                    | Web Application Server                     |
| [{{% ctx %}} Flow Debugger Service][CORTEX Flow Debugger Service]                  | {{< section "/architecture/components/purpose/cortex-flow-debugger-service.md" >}} | Required                    | Web Application Server                     |
| [API Gateway Service][]                           | {{< section "/architecture/components/purpose/api-gateway-service.md" >}}          | Required                    | Application Server                         |
| [Execution Service][]                             | {{< section "/architecture/components/purpose/execution-service.md" >}}            | Required                    | Application Server                         |
| [Licence Management Service][]                    | {{< section "/architecture/components/purpose/licence-management-service.md" >}}   | Required                    | Application Server                         |
| [Package Management Service][]                    | {{< section "/architecture/components/purpose/package-management-service.md" >}}   | Required                    | Application Server                         |
| [Provisioning Service][]                          | {{< section "/architecture/components/purpose/provisioning-service.md" >}}         | Required                    | Application Server                         |
| {{% ctx %}} Block Packages                             | {{< section "/architecture/components/purpose/cortex-block-packages.md" >}}        | Required                    | Web Application Server, Application Server |
| {{% ctx %}} Gateway Databases                          | {{< section "/architecture/components/purpose/cortex-gateway-databases.md" >}}     | Required<br />(End of life) | Web Application Server                     |
| [SQL Server Express][] or [SQL Server Standard][] | {{< section "/architecture/components/purpose/ms-sql-server.md" >}}                | Required<br />(End of life) | Web Application Server                     |
| [Microsoft Service Fabric][]                      | {{< section "/architecture/components/purpose/ms-service-fabric.md" >}}            | Required                    | Application Server                         |
| [Microsoft Service Fabric Explorer][]             | {{< section "/architecture/components/purpose/ms-service-fabric-explorer.md" >}}   | Required                    | Application Server                         |
| [Particular NServiceBus][]                        | {{< section "/architecture/components/purpose/particular-nservicebus.md" >}}       | Required                    | Application Server                         |
| [Pivotal RabbitMQ][]                              | {{< section "/architecture/components/purpose/pivotal-rabbitmq.md" >}}             | Required                    | Application Server                         |
| [Erlang OTP][]                                    | {{< section "/architecture/components/purpose/erlang-otp.md" >}}                   | Required                    | Application Server                         |

[API Gateway Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.ApiGatewayService.MainDoc" >}}
[CORTEX Flow Debugger Service]: {{< url path="Cortex.Guides.FlowDebuggerService.MainDoc" >}}
[Execution Service]: {{< url path="Cortex.Guides.CortexInnovation.ExecutionApplication.Services.ExecutionService.MainDoc" >}}
[Licence Management Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.LicenceManagementService.MainDoc" >}}
[Package Management Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.PackageManagementService.MainDoc" >}}
[Provisioning Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.ProvisioningService.MainDoc" >}}
[Gateway Guide]: {{< url path="Cortex.Guides.Gateway.MainDoc" >}}
[Studio Guide]: {{< url path="Cortex.Guides.Studio.MainDoc" >}}
[SQL Server Express]: {{< url path="MSDownload.SqlServerExpress.2016" >}}
[SQL Server Standard]: {{< url path="MSEval.SQLServer.2019" >}}
[Microsoft Service Fabric]: {{< url path="MSDocs.ServiceFabric.MainDoc" >}}
[Microsoft Service Fabric Explorer]: {{< url path="MSDocs.ServiceFabric.Explorer" >}}
[Particular NServiceBus]: {{< url path="Particular.NServiceBus.MainDoc" >}}
[Pivotal RabbitMQ]: {{< url path="RabbitMQ.MainDoc" >}}
[Erlang OTP]: {{< url path="ErlangOTP.MainDoc" >}}