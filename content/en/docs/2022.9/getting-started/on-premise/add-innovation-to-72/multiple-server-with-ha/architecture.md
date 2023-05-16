---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the recommended platform architecture, including component descriptions."
weight: 10
---

# {{< param title >}}

## Components

| Component | Purpose | Required/Optional |Server Role |
|-----------|---------|----------|------------|
| [{{< ctx >}}&nbsp;Gateway][Gateway Guide]| Web portal that hosts applications for creating automation solutions and managing their full life-cycle, including design, development, testing, deployment, monitoring, maintenance and ultimately end-of-life. | Required | Web&nbsp;Application&nbsp;Server |
| [{{< ctx >}}&nbsp;Studio][Studio Guide] | Application hosted in CORTEX Gateway that provides the graphical, low-code environment for developing, testing, versioning, publishing and managing the full life-cycle of automation solutions. | Required | Web&nbsp;Application&nbsp;Server |
| CORTEX&nbsp;Flow&nbsp;Debugger&nbsp;Service | Web application that allows flows to be debugged and executed. Used by CORTEX Studio to debug flows and provide block information. | Required | Web&nbsp;Application&nbsp;Server |
| CORTEX&nbsp;API&nbsp;Gateway&nbsp;Service | Application Service that routes client requests to the correct distributed CORTEX services. | Required | Application&nbsp;Server |
| CORTEX&nbsp;Flow&nbsp;Execution&nbsp;Service | Application Service that executes automation flows. | Required | Application&nbsp;Server |
| CORTEX&nbsp;Block&nbsp;Packages | A set of files which contain the blocks that users can use to build flows. Used by the CORTEX Flow Debugger Service and the CORTEX Flow Execution Service. | Required | Web&nbsp;Application&nbsp;Server, Application&nbsp;Server |
| CORTEX&nbsp;Gateway&nbsp;Databases | A set of databases created automatically by Gateway which are used for storing data related to user roles, flows, etc. Hopefully, we can remove the need for Gateway Databases in the next release.  | Required<br />(End of life) | Web&nbsp;Application&nbsp;Server |
| [SQL&nbsp;Server&nbsp;Express][] or [SQL&nbsp;Server&nbsp;Standard][] | Required by CORTEX Gateway for creating and storing the Gateway Databases. Hopefully, we can remove the need for SQL Server in the next release. | Required<br />(End of life) | Web&nbsp;Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric][] | Distributed systems platform that hosts the CORTEX services where automation solutions are deployed to; provides scalable, reliable and manageable enterprise-grade High Availability (HA) using clustering. | Required | Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric&nbsp;Explorer][] | Web portal for monitoring and managing the Service Fabric instance that automation solutions are deployed to. | Required | Application&nbsp;Server |
| [Particular&nbsp;NServiceBus][] | Messaging platform enabling scalable, reliable and flexible asynchronous messaging between distributed CORTEX services. | Required | Application&nbsp;Server |
| [Pivotal&nbsp;RabbitMQ][] | Message broker used by the NServiceBus messaging platform to transport messages asynchronously between distributed CORTEX services using publish/subscribe mechanism. | Required | Application&nbsp;Server |
| [Erlang&nbsp;OTP][] | Erlang run-time required by the RabbitMQ message broker. | Required | Application&nbsp;Server |
| [gobetween][] | L4 load balancer and reverse proxy used to load balance requests between clustered instances of CORTEX services. | Required | Load&nbsp;Balancer |
| [NSSM][] | Windows Service Manager that hosts the gobetween load balancer application as a Windows Service. | Required | Load&nbsp;Balancer |

{{% alert title="Note" %}}
CORTEX v7.2 component descriptions are not covered in this guide. See separate v7.2 documentation for more information.
{{% /alert %}}

## Possible Architectures

CORTEX Innovation and v7.2 can run side-by-side, allowing flows to be built and run for both of them from the same Gateway instance. They each require a different set of back-end components to be installed. Innovation can be added to a v7.2 installation by using the existing hardware containing v7.2 components, using new hardware or a combination of the two. The only components shared by both Innovation and v7.2 are Gateway and its databases.

The installation process is the same, regardless of which architecture is used; [Recommended][], [Minimum][] or [Alternative][]. The only difference is the [Hardware Requirements][], which will be greater for existing machines as they need more resources to run more components.

### Recommended Architecture

The recommended architecture for adding Innovation to a v7.2 Dual Site, Dual Server system requires 8 servers in total; the 4 existing servers, plus 4 new servers:

* 2x Existing Application Servers for v7.2, one of these will also act as the Web Application Server for Innovation. For Innovation, the existing Gateway will be upgraded and a new Flow Debugger Service will be added.
* 2x Existing Database Servers, used for v7.2 and Gateway databases.
* 1x New Load Balancer Server for Innovation.
* 3x New Application Servers for Innovation.

{{< figure src="/images/editable/Cortex Innovation and v7.2 Best Architecture.png" class="centre" title="8 Server, Recommended Architecture Diagram" >}}.

### Minimum Architecture

The minimum architecture requires only the 4 existing servers:

* 2x Application Servers for v7.2, each of these will also host one of the three Application Servers for Innovation.
* 1x Database Server for v7.2, which will also host the remaining Application Server for Innovation.
* 1x Database Server for v7.2, which will also host the Load Balancer for Innovation.

{{< figure src="/images/editable/Cortex Innovation and v7.2 Min Architecture.png" class="centre" title="4 Server, Minimum Architecture Diagram" >}}.

### Alternative Architectures

Alternative architectures are possible; any of the Innovation server roles may be installed on any of the existing or new servers provided that the hardware is capable of running everything according to the [Hardware Requirements for Alternative Architectures][]. For example, if the database servers cannot have anything else installed on them, new servers may be used for the load balancer and the third Innovation Application Server. Additionally, an existing, alternative load balancer may be used instead of the bundled one. The only caveat is that the load balancer must not be installed on the same machine as an Innovation Application Server as it cannot be used to send traffic to itself.

## Next Steps?

1. [Prerequisites][]

[Gateway Guide]: {{< url path="Cortex.Guides.Gateway.MainDoc" >}}
[Studio Guide]: {{< url path="Cortex.Guides.Studio.MainDoc" >}}
[Prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.Prerequisites" >}}
[Hardware Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.HardwareRequirements" >}}
[Hardware Requirements for Alternative Architectures]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.HardwareRequirementsAlternativeArchitecture" >}}
[SQL&nbsp;Server&nbsp;Express]: {{< url path="MSDownload.SqlServerExpress.2016" >}}
[SQL&nbsp;Server&nbsp;Standard]: {{< url path="MSEval.SQLServer.2019" >}}
[Microsoft&nbsp;Service&nbsp;Fabric]: {{< url path="MSDocs.ServiceFabric.MainDoc" >}}
[Microsoft&nbsp;Service&nbsp;Fabric&nbsp;Explorer]: {{< url path="MSDocs.ServiceFabric.Explorer" >}}
[Particular&nbsp;NServiceBus]: {{< url path="Particular.NServiceBus.MainDoc" >}}
[Pivotal&nbsp;RabbitMQ]: {{< url path="RabbitMQ.MainDoc" >}}
[Erlang&nbsp;OTP]: {{< url path="ErlangOTP.MainDoc" >}}
[gobetween]: {{< url path="GoBetween.MainDoc" >}}
[NSSM]: {{< url path="NSSM.MainDoc" >}}
[Recommended]: {{< ref "#recommended-architecture" >}}
[Minimum]: {{< ref "#minimum-architecture" >}}
[Alternative]: {{< ref "#alternative-architectures" >}}
