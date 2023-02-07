---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the recommended Innovation platform architecture, including component descriptions."
weight: 10
---

# {{< param title >}}

## Components

| Component | Purpose | Required/Optional |Server Role |
|-----------|---------|----------|------------|
| [Cortex&nbsp;Gateway][Gateway Guide]| Web portal that hosts applications for creating automation solutions and managing their full life-cycle, including design, development, testing, deployment, monitoring, maintenance and ultimately end-of-life. | Required | Web&nbsp;Application&nbsp;Server |
| [Cortex&nbsp;Studio][Studio Guide] | Application hosted in Cortex Gateway that provides the graphical, low-code environment for developing, testing, versioning, publishing and managing the full life-cycle of automation solutions. | Required | Web&nbsp;Application&nbsp;Server |
| Cortex&nbsp;Flow&nbsp;Debugger&nbsp;Service | Web application that allows flows to be debugged and executed. Used by Cortex Studio to debug flows and provide block information. | Required | Web&nbsp;Application&nbsp;Server |
| Cortex&nbsp;API&nbsp;Gateway&nbsp;Service | Application Service that routes client requests to the correct distributed Cortex services. | Required | Application&nbsp;Server |
| Cortex&nbsp;Flow&nbsp;Execution&nbsp;Service | Application Service that executes automation flows. | Required | Application&nbsp;Server |
| Cortex&nbsp;Block&nbsp;Packages | A set of files which contain the blocks that users can use to build flows. Used by the Cortex Flow Debugger Service and the Cortex Flow Execution Service. | Required | Web&nbsp;Application&nbsp;Server, Application&nbsp;Server |
| Cortex&nbsp;Gateway&nbsp;Databases | A set of databases created automatically by Gateway which are used for storing data related to user roles, flows, etc. Hopefully, we can remove the need for Gateway Databases in the next release.  | Required<br />(End of life) | Web&nbsp;Application&nbsp;Server |
| [SQL&nbsp;Server&nbsp;Express][] or [SQL&nbsp;Server&nbsp;Standard][] | Required by Cortex Gateway for creating and storing the Gateway Databases. Hopefully, we can remove the need for SQL Server in the next release. | Required<br />(End of life) | Web&nbsp;Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric][] | Distributed systems platform that hosts the Cortex services where automation solutions are deployed to; provides scalable, reliable and manageable enterprise-grade High Availability (HA) using clustering. | Required | Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric&nbsp;Explorer][] | Web portal for monitoring and managing the Service Fabric instance that automation solutions are deployed to. | Required | Application&nbsp;Server |
| [Particular&nbsp;NServiceBus][] | Messaging platform enabling scalable, reliable and flexible asynchronous messaging between distributed Cortex services. | Required | Application&nbsp;Server |
| [Pivotal&nbsp;RabbitMQ][] | Message broker used by the NServiceBus messaging platform to transport messages asynchronously between distributed Cortex services using publish/subscribe mechanism. | Required | Application&nbsp;Server |
| [Erlang&nbsp;OTP][] | Erlang run-time required by the RabbitMQ message broker. | Required | Application&nbsp;Server |
| [gobetween][] | L4 load balancer and reverse proxy used to load balance requests between clustered instances of Cortex services. | Required | Load&nbsp;Balancer |
| [NSSM][] | Windows Service Manager that hosts the gobetween load balancer application as a Windows Service. | Required | Load&nbsp;Balancer |

## Recommended Architecture

The following architecture requires 5 servers:

* 1x Web Application Server which contains Gateway, Flow Debugger Service and Databases
* 1x Load Balancer Server
* 3x Application Servers

{{< figure src="/images/editable/Cortex Innovation Overview.png" class="centre" title="5 Server Architecture Diagram" >}}

## Next Steps?

1. [Prerequisites][]

[Gateway Guide]: {{< url "Cortex.Guides.Gateway.MainDoc" >}}
[Studio Guide]: {{< url "Cortex.Guides.Studio.MainDoc" >}}
[Prerequisites]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.Prerequisites" >}}
[SQL&nbsp;Server&nbsp;Express]: {{< url "MSDownload.SqlServerExpress.2016" >}}
[SQL&nbsp;Server&nbsp;Standard]: {{< url "MSEval.SQLServer.2019" >}}
[Microsoft&nbsp;Service&nbsp;Fabric]: {{< url "MSDocs.ServiceFabric.MainDoc" >}}
[Microsoft&nbsp;Service&nbsp;Fabric&nbsp;Explorer]: {{< url "MSDocs.ServiceFabric.Explorer" >}}
[Particular&nbsp;NServiceBus]: {{< url "Particular.NServiceBus.MainDoc" >}}
[Pivotal&nbsp;RabbitMQ]: {{< url "RabbitMQ.MainDoc" >}}
[Erlang&nbsp;OTP]: {{< url "ErlangOTP.MainDoc" >}}
[gobetween]: {{< url "GoBetween.MainDoc" >}}
[NSSM]: {{< url "NSSM.MainDoc" >}}
