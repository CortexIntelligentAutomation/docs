---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the recommended platform architecture, including component descriptions."
weight: 10
---

# {{< param title >}}

## Components

{{< section "/architecture/components/multi-server.md" >}}

{{% alert title="Note" %}}
{{% ctx %}} v7.2 component descriptions are not covered in this guide. See separate v7.2 documentation for more information.
{{% /alert %}}

## Possible Architectures

{{% ctx %}} Innovation and v7.2 can run side-by-side, allowing flows to be built and run for both of them from the same Gateway instance. They each require a different set of back-end components to be installed. Innovation can be added to a v7.2 installation by using the existing hardware containing v7.2 components, using new hardware or a combination of the two. The only components shared by both Innovation and v7.2 are Gateway and its databases.

The installation process is the same, regardless of which architecture is used; [Recommended][], [Minimum][] or [Alternative][]. The only difference is the [Hardware Requirements][], which will be greater for existing machines as they need more resources to run more components.

### Recommended Architecture

The recommended architecture for adding Innovation to a v7.2 Dual Site, Dual Server system requires 8 servers in total; the 4 existing servers, plus 4 new servers:

* 2x Existing Application Servers for v7.2, one of these will also act as the Web Application Server for Innovation. For Innovation, the existing Gateway will be upgraded and a new Debug Node will be added
* 2x Existing Database Servers, used for v7.2 and Gateway databases
* 1x New Load Balancer Server for Innovation
* 3x New Application Servers for Innovation

{{< figure src="/images/editable/Cortex Innovation and v7.2 Best Architecture.png" class="centre" title="8 Server, Recommended Architecture Diagram" >}}

{{< section "/architecture/components/node-details.md" >}}

### Minimum Architecture

The minimum architecture requires 5 servers:

* 1x Web Application Server, which contains Gateway. For Innovation, the existing Gateway will be upgraded a new Debug Node will be added
* 2x Application Servers for v7.2, each of these will also host one of the three Application Servers for Innovation
* 1x Database Server for v7.2, which will also host the remaining Application Server for Innovation
* 1x Database Server for v7.2, which will also host the Load Balancer for Innovation

{{< figure src="/images/editable/Cortex Innovation and v7.2 Min Architecture.png" class="centre" title="4 Server, Minimum Architecture Diagram" >}}

{{< section "/architecture/components/node-details.md" >}}

### Alternative Architectures

Alternative architectures are possible; any of the Innovation server roles may be installed on any of the existing or new servers provided that the hardware is capable of running everything according to the [Hardware Requirements for Alternative Architectures][]. For example, if the database servers cannot have anything else installed on them, new servers may be used for the load balancer and the third Innovation Application Server. Additionally, an existing, alternative load balancer may be used instead of the bundled one. The only caveat is that the load balancer must not be installed on the same machine as an Innovation Application Server as it cannot be used to send traffic to itself.

## Next Steps?

1. [Prerequisites][]

[Prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.Prerequisites" >}}
[Hardware Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.HardwareRequirements" >}}
[Hardware Requirements for Alternative Architectures]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.HardwareRequirementsAlternativeArchitecture" >}}
[Recommended]: {{< ref "#recommended-architecture" >}}
[Minimum]: {{< ref "#minimum-architecture" >}}
[Alternative]: {{< ref "#alternative-architectures" >}}
