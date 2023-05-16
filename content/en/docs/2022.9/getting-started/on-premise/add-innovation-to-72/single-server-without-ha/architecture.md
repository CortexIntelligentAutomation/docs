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
| [{{< ctx >}}&nbsp;Gateway][Gateway Guide]| Web portal that hosts applications for creating automation solutions and managing their full life-cycle, including design, development, testing, deployment, monitoring, maintenance and ultimately end-of-life. | Required | Web&nbsp;Application&nbsp;Server |
| [{{< ctx >}}&nbsp;Studio][Studio Guide] | Application hosted in CORTEX Gateway that provides the graphical, low-code environment for developing, testing, versioning, publishing and managing the full life-cycle of automation solutions. | Required | Web&nbsp;Application&nbsp;Server |
| CORTEX&nbsp;Flow&nbsp;Debugger&nbsp;Service | Web application that allows flows to be debugged and executed. Used by CORTEX Studio to debug flows and provide block information. | Required | Web&nbsp;Application&nbsp;Server |
| CORTEX&nbsp;API&nbsp;Gateway&nbsp;Service | Application Service that routes client requests to the correct Application Services. | Required | Application&nbsp;Server |
| CORTEX&nbsp;Flow&nbsp;Execution&nbsp;Service | Application Service that executes automation flows. | Required | Application&nbsp;Server |
| CORTEX&nbsp;Block&nbsp;Packages | A set of files which contain the blocks that users can use to build flows. Used by the CORTEX Flow Debugger Service and the CORTEX Flow Execution Service. | Required | Web&nbsp;Application&nbsp;Server, Application&nbsp;Server |
| CORTEX&nbsp;Gateway&nbsp;Databases | A set of databases created automatically by Gateway which are used for storing data related to user roles, flows, etc. Hopefully, we can remove the need for Gateway Databases in the next release.  | Required<br />(End of life) | Web&nbsp;Application&nbsp;Server |
| [SQL&nbsp;Server&nbsp;Express][] or [SQL&nbsp;Server&nbsp;Standard][] | Required by CORTEX Gateway for creating and storing the Gateway Databases. Hopefully, we can remove the need for SQL Server in the next release. | Required<br />(End of life) | Web&nbsp;Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric][] | Distributed systems platform that hosts the Application Services where automation solutions are deployed to. | Required | Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric&nbsp;Explorer][] | Web portal for monitoring and managing the Service Fabric instance that automation solutions are deployed to. | Required | Application&nbsp;Server |
| [Particular&nbsp;NServiceBus][] | Messaging platform enabling scalable, reliable and flexible asynchronous messaging between Application Services. | Required | Application&nbsp;Server |
| [Pivotal&nbsp;RabbitMQ][] | Message broker used by the NServiceBus messaging platform to transport messages asynchronously between Application Services using publish/subscribe mechanism. | Required | Application&nbsp;Server |
| [Erlang&nbsp;OTP][] | Erlang run-time required by the RabbitMQ message broker. | Required | Application&nbsp;Server |

## Single Server Architecture

CORTEX Innovation and v7.2 can run side-by-side, allowing flows to be built and run for both of them from the same Gateway instance. They each require a different set of back-end components to be installed. Innovation can be added to a CORTEX v7.2 installation by using the existing hardware. The only components shared by both Innovation and v7.2 are Gateway and its databases.

The minimum architecture for adding Innovation to a v7.2 Single Site, Single Server system is as follows:

{{< figure src="/images/editable/Cortex Innovation v7.2 Single Server.png" class="centre" title="1 Server Architecture Diagram" >}}

{{% alert type="warning" title="Warning" %}} This architecture is not recommended for production platforms that are required to scale and support HA. Additionally, upgrades require application redeployment with downtime rather than using rolling upgrades. {{%/alert %}}

## Next Steps?

1. [Prerequisites][]

[Gateway Guide]: {{< url path="Cortex.Guides.Gateway.MainDoc" >}}
[Studio Guide]: {{< url path="Cortex.Guides.Studio.MainDoc" >}}
[Prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.Prerequisites" >}}
[SQL&nbsp;Server&nbsp;Express]: {{< url path="MSDownload.SqlServerExpress.2016"  >}}
[SQL&nbsp;Server&nbsp;Standard]: {{< url path="MSEval.SQLServer.2019" >}}
[Microsoft&nbsp;Service&nbsp;Fabric]: {{< url path="MSDocs.ServiceFabric.MainDoc" >}}
[Microsoft&nbsp;Service&nbsp;Fabric&nbsp;Explorer]: {{< url path="MSDocs.ServiceFabric.Explorer" >}}
[Particular&nbsp;NServiceBus]: {{< url path="Particular.NServiceBus.MainDoc" >}}
[Pivotal&nbsp;RabbitMQ]: {{< url path="RabbitMQ.MainDoc" >}}
[Erlang&nbsp;OTP]: {{< url path="ErlangOTP.MainDoc" >}}
