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
{{% ctx %}} 7 component descriptions are not covered in this guide. See separate {{% ctx %}} 7 documentation for more information.
{{% /alert %}}

## Possible Architectures

{{% ctx %}} and {{% ctx %}} 7 can run side-by-side, allowing flows to be built and run for both of them from the same Gateway instance. They each require a different set of back-end components to be installed. {{% ctx %}} can be added to a {{% ctx %}} 7 installation and the only component shared by both {{% ctx %}} and {{% ctx %}} 7 is {{% ctx %}} Gateway.

### Recommended Architecture

The recommended architecture for adding {{% ctx %}} to a {{% ctx %}} 7 Dual Site, Dual Server system requires 8 servers in total; the 4 existing servers, plus 4 new servers:

* 2x Existing Application Servers for {{% ctx %}} 7, one of these will also act as the Web Application Server for {{% ctx %}}. For {{% ctx %}}, the existing Gateway will be upgraded and a new Debug Node will be added
* 2x Existing Database Servers, used for {{% ctx %}} 7
* 1x New Load Balancer Server for {{% ctx %}}
* 3x New Application Servers for {{% ctx %}}

{{< figure src="/images/editable/Cortex and Cortex 7 Best Architecture.png" class="centre" title="8 Server, Recommended Architecture Diagram" >}}

{{< section "/architecture/components/node-details.md" >}}

## Next Steps?

1. [Requirements][]

[Hardware Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.HardwareRequirementsNew" >}}
[Recommended]: {{< ref "#recommended-architecture" >}}
[Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.Requirements" >}}
