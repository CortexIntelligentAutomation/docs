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

{{% ctx %}} Innovation and v7.2 can run side-by-side, allowing flows to be built and run for both of them from the same Gateway instance. They each require a different set of back-end components to be installed. Innovation can be added to a v7.2 installation and the only component shared by both Innovation and v7.2 is {{% ctx %}} Gateway.

### Recommended Architecture

The recommended architecture for adding Innovation to a v7.2 Dual Site, Dual Server system requires 8 servers in total; the 4 existing servers, plus 4 new servers:

* 2x Existing Application Servers for v7.2, one of these will also act as the Web Application Server for Innovation. For Innovation, the existing Gateway will be upgraded and a new Debug Node will be added
* 2x Existing Database Servers, used for v7.2
* 1x New Load Balancer Server for Innovation
* 3x New Application Servers for Innovation

{{< figure src="/images/editable/Cortex Innovation and v7.2 Best Architecture.png" class="centre" title="8 Server, Recommended Architecture Diagram" >}}

{{< section "/architecture/components/node-details.md" >}}

## Next Steps?

1. [Prerequisites][]

[Hardware Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.HardwareRequirements" >}}
[Prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.Prerequisites" >}}
[Recommended]: {{< ref "#recommended-architecture" >}}
