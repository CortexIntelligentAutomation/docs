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
| [Cortex&nbsp;LiveView](/docs/concepts/todo-cortex-liveview) | Application hosted in Cortex Gateway that provides real-time monitoring of what's happening in production environments, as well as analytics and reporting on automation solutions. | Optional | Web&nbsp;Application&nbsp;Server |
| [Cortex&nbsp;LivePortal](/docs/concepts/todo-cortex-liveportal) | Web portal that allows users to manually trigger automation or interact with automation that requires human-in-the-loop decisions, approval or intervention. | Optional | Web&nbsp;Application&nbsp;Server |
| [Cortex&nbsp;API&nbsp;Gateway&nbsp;Service](/docs/concepts/todo-cortex-api-gateway-service) | Service that routes client requests to the correct distributed Cortex services. | Required | Application&nbsp;Server |
| [Cortex&nbsp;Flow&nbsp;Execution&nbsp;Service](/docs/concepts/todo-cortex-flow-execution-service) | Service that executes automation flows. | Required | Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric](https://azure.microsoft.com/en-us/services/service-fabric/) | Distributed systems platform that hosts the Cortex services where automation solutions are deployed to; provides scalable, reliable and manageable enterprise-grade High Availability (HA) using clustering. | Required | Application&nbsp;Server |
| [Microsoft&nbsp;Service&nbsp;Fabric&nbsp;Explorer](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-visualizing-your-cluster) | Web portal for monitoring and managing the HA clusters that automation solutions are deployed to. | Required | Application&nbsp;Server |
| [Particular&nbsp;NServiceBus](https://particular.net/nservicebus) | Messaging platform enabling scalable, reliable and flexible asynchronous messaging between distributed Cortex services. | Required | Application&nbsp;Server |
| [Pivotal&nbsp;RabbitMQ](https://www.rabbitmq.com/) | Message broker used by the NServiceBus messaging platform to transport messages asynchronously between distributed Cortex services using publish/subscribe mechanism. | Required | Application&nbsp;Server |
| [Erlang&nbsp;OTP](https://github.com/erlang/otp) | Erlang run-time required by the RabbitMQ message broker. | Required | Application&nbsp;Server |
| TODO (SSDB, SSIS, SSAS, SSRS) | Hopefully, we can remove the need for SQL Server database components in next generation, by using a combination of git for configuration, and log ingestion tools like Humio or Loki, Grafana, Prometheus combination to replace dashboarding and analytics. | End-of-life | Database&nbsp;Server |
| [NSSM](https://nssm.cc/) | Windows Service Manager that hosts the gobetween load balancer application as a Windows Service. | Required | Load&nbsp;Balancer |
| [gobetween](http://gobetween.io/) | L4 load balancer and reverse proxy used to load balance requests between clustered instances of Cortex services. | Required | Load&nbsp;Balancer |
    
    
### Recommended architecture
{{< alert color="warning" title="TODO Diagram" >}}{{< /alert >}}

### Alternative architectures
{{< alert color="warning" title="TODO Diagram" >}}{{< /alert >}}

## Prerequisites

### Hardware Requirements

{{% alert title="Note" %}}The minimum number of servers required to run Cortex with HA is 4. This setup requires multiple server roles to be installed on the same server.

The minimum recommended number of servers is 7, and allows each server role instance to be installed on its own server.{{% /alert %}}

| Server&nbsp;Role | Servers&nbsp;Required | CPU&nbsp;Cores&nbsp;(>&nbsp;2GHz) | RAM&nbsp;(GB) | Disk&nbsp;(GB) |  
|------------------|-----------------------|-----------------------------------|---------------|----------------------|
| Web&nbsp;Application&nbsp;Server | 2[^1]&nbsp;*Recommended*<br>1[^2]&nbsp;*Minimum* | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 100+&nbsp;*Recommended*<br>50&nbsp;*Minimum*<br>TODO&nbsp;free&nbsp;on&nbsp;TODO&nbsp;drive |
| Application&nbsp;Server | 3&nbsp;*Bronze&nbsp;availability*[^3]<br>5&nbsp;*Silver&nbsp;availability*<br>7&nbsp;*Gold&nbsp;availability*<br>9&nbsp;*Platinum&nbsp;availability* | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 100+&nbsp;*Recommended*<br>50&nbsp;*Minimum*<br>40+&nbsp;free&nbsp;on&nbsp;%ProgramData%&nbsp;drive |
| Database&nbsp;Server | 1[^4] | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 100+&nbsp;*Recommended*<br>50&nbsp;*Minimum*<br>5+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |
| Load&nbsp;Balancer | 1[^5] | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 100+&nbsp;*Recommended*<br>50&nbsp;*Minimum*<br>5+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |

[^1]: If both Gateway and LivePortal web applications are being installed, it is recommended that they are each installed on a separate Web Application Server. Neither Gateway or LivePortal currently offer HA support.
[^2]: If only Gateway is being installed, only 1 server is needed. If both Gateway and LivePortal web applications are being installed, they can be installed on the same Web Application Server, but it is not recommended. 
[^3]: Application servers support HA via clustering. A cluster must consist of a minimum of 3 nodes, and the number of nodes must be an odd number to ensure a quorum.
[^4]: Database server doesn't currently offer HA support. 
[^5]: A software-based load balancer called [gobetween](http://gobetween.io/) is provided with the platform. This must be installed on its own server as it doesn't support routing traffic to itself. It also doesn't currently support HA, but it may be possible to use multiple gobetween load balancers with Anycast network addressing and routing to provide high availability, as described in [https://en.wikipedia.org/wiki/Anycast](https://en.wikipedia.org/wiki/Anycast); however, this has not been verified yet. It is possible to use an [alternative load balancer](#alternative-load-balancer-requirements) to the one provided.

#### Alternative Load Balancer Requirements

*  The load balancer must support a health check which can run a batch file that returns 1 for healthy and 0 for unhealthy.

TODO

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

#### Domain Requirements

Only Windows domains with an Active Directory domain controller running Active Directory Domain Services are supported.

Supported versions of Active Directory are listed below:

| Version                    | Supported From | Supported Until  |  
|----------------------------|----------------|------------------|
| TODO                       | Cortex V6.4    | To be confirmed  |

#### Port Requirements

TODO

#### TLS Requirements

TODO include protocols, ciphers, hashes etc.

#### Certificate Requirements

TODO

#### Kerberos Requirements

TODO

### Client Requirements

TODO browsers, os etc.

## Installation

TODO

## Next Steps?
1. [Setup](../../setup) the platform
2. [Try it out](../../tryitout)