| Component                                                                            | Purpose                                                                                       | Required/Optional           | Server Role                                |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------|--------------------------------------------|
| [{{% ctx %}} Gateway][Gateway Guide]                                                 | {{< section "/architecture/components/purpose/cortex-gateway.md" >}}                          | Required                    | Web Application Server                     |
| [{{% ctx %}} Studio][Studio Guide]                                                   | {{< section "/architecture/components/purpose/cortex-studio.md" >}}                           | Required                    | Web Application Server                     |
| [{{% ctx %}} Core Application][Core Application]               | {{< section "/architecture/components/purpose/cortex-innovation-core-application.md" >}}      | Required                    | Application Server                         |
| &nbsp; &nbsp; > [API Gateway Service][API Gateway Service]                           | {{< section "/architecture/components/purpose/api-gateway-service.md" >}}                     | -                           | -                                          |
| &nbsp; &nbsp; > [Authorisation Service][Authorisation Service]                       | {{< section "/architecture/components/purpose/authorisation-service.md" >}}                   | -                           | -                                          |
| &nbsp; &nbsp; > [Concurrency Management Service][Concurrency Management Service]     | {{< section "/architecture/components/purpose/concurrency-management-service.md" >}}          | -                           | -                                          |
| &nbsp; &nbsp; > [Configuration Management Service][Configuration Management Service] | {{< section "/architecture/components/purpose/configuration-management-service.md" >}}        | -                           | -                                          |
| &nbsp; &nbsp; > [Data Storage Service][Data Storage Service]                         | {{< section "/architecture/components/purpose/data-storage-service.md" >}}                    | -                           | -                                          |
| &nbsp; &nbsp; > [Execution Management Service][Execution Management Service]         | {{< section "/architecture/components/purpose/execution-management-service.md">}}             | -                           | -                                          |
| &nbsp; &nbsp; > [Licence Management Service][Licence Management Service]             | {{< section "/architecture/components/purpose/licence-management-service.md" >}}              | -                           | -                                          |
| &nbsp; &nbsp; > [Listeners Service][Listeners Service]                               | {{< section "/architecture/components/purpose/listeners-service.md" >}}                       | -                           | -                                          |
| &nbsp; &nbsp; > [Monitoring Service][Monitoring Service]                             | {{< section "/architecture/components/purpose/monitoring-service.md" >}}                      | -                           | -                                          |
| &nbsp; &nbsp; > [Package Management Service][Package Management Service]             | {{< section "/architecture/components/purpose/package-management-service.md" >}}              | -                           | -                                          |
| &nbsp; &nbsp; > [Provisioning Service][Provisioning Service]                         | {{< section "/architecture/components/purpose/provisioning-service.md" >}}                    | -                           | -                                          |
| &nbsp; &nbsp; > [Scheduling Service][Scheduling Service]                             | {{< section "/architecture/components/purpose/scheduling-service.md" >}}                      | -                           | -                                          |
| &nbsp; &nbsp; > [Triggers Service][Triggers Service]                                 | {{< section "/architecture/components/purpose/triggers-service.md" >}}                        | -                           | -                                          |
| [{{% ctx %}} Execution Application][Execution Application]     | {{< section "/architecture/components/purpose/cortex-innovation-execution-application.md" >}} | Required                    | Application Server                         |
| &nbsp; &nbsp; > [Execution Service][Execution Service]                               | {{< section "/architecture/components/purpose/execution-service.md" >}}                       | -                           | -                                          |
| {{% ctx %}} Block Packages                                                           | {{< section "/architecture/components/purpose/cortex-block-packages.md" >}}                   | Required                    | Web Application Server, Application Server |
| [Microsoft Service Fabric][]                                                         | {{< section "/architecture/components/purpose/ms-service-fabric.md" >}}                       | Required                    | Application Server                         |
| [Microsoft Service Fabric Explorer][]                                                | {{< section "/architecture/components/purpose/ms-service-fabric-explorer.md" >}}              | Required                    | Application Server                         |
| [Particular NServiceBus][]                                                           | {{< section "/architecture/components/purpose/particular-nservicebus.md" >}}                  | Required                    | Application Server                         |
| [Pivotal RabbitMQ][]                                                                 | {{< section "/architecture/components/purpose/pivotal-rabbitmq.md" >}}                        | Required                    | Application Server                         |
| [Erlang OTP][]                                                                       | {{< section "/architecture/components/purpose/erlang-otp.md" >}}                              | Required                    | Application Server                         |
| [gobetween][]                                                                        | {{< section "/architecture/components/purpose/gobetween.md" >}}                               | Required                    | Load Balancer                              |
| [NSSM][]                                                                             | {{< section "/architecture/components/purpose/nssm.md" >}}                                    | Required                    | Load Balancer                              |

[Core Application]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.MainDoc" >}}
[Execution Application]: {{< url path="Cortex.Guides.CortexInnovation.ExecutionApplication.MainDoc" >}}

[API Gateway Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.ApiGatewayService.MainDoc" >}}
[Authorisation Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.AuthorisationService.MainDoc" >}}
[Concurrency Management Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.ConcurrencyManagementService.MainDoc" >}}
[Configuration Management Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.ConfigurationManagementService.MainDoc" >}}
[Data Storage Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.DataStorageService.MainDoc" >}}
[Execution Management Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.ExecutionManagementService.MainDoc" >}}
[Execution Service]: {{< url path="Cortex.Guides.CortexInnovation.ExecutionApplication.Services.ExecutionService.MainDoc" >}}
[Licence Management Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.LicenceManagementService.MainDoc" >}}
[Listeners Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.ListenersService.MainDoc" >}}
[Monitoring Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.MonitoringService.MainDoc" >}}
[Package Management Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.PackageManagementService.MainDoc" >}}
[Provisioning Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.ProvisioningService.MainDoc" >}}
[Scheduling Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.SchedulingService.MainDoc" >}}
[Triggers Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.TriggersService.MainDoc" >}}
[Gateway Guide]: {{< url path="Cortex.Guides.Gateway.MainDoc" >}}
[Studio Guide]: {{< url path="Cortex.Guides.Studio.MainDoc" >}}
[Microsoft Service Fabric]: {{< url path="MSDocs.ServiceFabric.MainDoc" >}}
[Microsoft Service Fabric Explorer]: {{< url path="MSDocs.ServiceFabric.Explorer" >}}
[Particular NServiceBus]: {{< url path="Particular.NServiceBus.MainDoc" >}}
[Pivotal RabbitMQ]: {{< url path="RabbitMQ.MainDoc" >}}
[Erlang OTP]: {{< url path="ErlangOTP.MainDoc" >}}
[gobetween]: {{< url path="GoBetween.MainDoc" >}}
[NSSM]: {{< url path="NSSM.MainDoc" >}}
