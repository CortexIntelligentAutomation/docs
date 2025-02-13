---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the recommended {{% ctx %}} platform architecture, including component descriptions."
weight: 10
---

# {{< param title >}}

## Components

{{< section "/architecture/components/single-server.md" >}}

## Single Server Architecture

{{% ctx %}} and v7.2 can run side-by-side, allowing flows to be built and run for both of them from the same Gateway instance. They each require a different set of back-end components to be installed. {{% ctx %}} can be added to a {{% ctx %}} v7.2 installation by using the existing hardware. The only component shared by both {{% ctx %}} and v7.2 is {{% ctx %}} Gateway.

The minimum architecture for adding {{% ctx %}} to a v7.2 Single Site, Single Server system is as follows:

{{< figure src="/images/editable/Cortex v7.2 Single Server.png" class="centre" title="1 Server Architecture Diagram" >}}

{{< section "/architecture/components/node-details.md" >}}

{{% alert type="warning" title="Warning" %}} This architecture is not recommended for production platforms that are required to scale and support HA. Additionally, upgrades require application redeployment with downtime rather than using rolling upgrades. {{%/alert %}}

## Next Steps?

1. [Requirements][]

[Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.Requirements" >}}
