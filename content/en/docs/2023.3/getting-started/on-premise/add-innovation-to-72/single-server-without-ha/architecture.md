---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the recommended Innovation platform architecture, including component descriptions."
weight: 10
---

# {{< param title >}}

## Components

{{< section "/architecture/components/single-server.md" >}}

## Single Server Architecture

{{< ctx >}} Innovation and v7.2 can run side-by-side, allowing flows to be built and run for both of them from the same Gateway instance. They each require a different set of back-end components to be installed. Innovation can be added to a {{< ctx >}} v7.2 installation by using the existing hardware. The only components shared by both Innovation and v7.2 are Gateway and its databases.

The minimum architecture for adding Innovation to a v7.2 Single Site, Single Server system is as follows:

{{< figure src="/images/editable/Cortex Innovation v7.2 Single Server.png" class="centre" title="1 Server Architecture Diagram" >}}

{{% alert type="warning" title="Warning" %}} This architecture is not recommended for production platforms that are required to scale and support HA. Additionally, upgrades require application redeployment with downtime rather than using rolling upgrades. {{%/alert %}}

## Next Steps?

1. [Prerequisites][]

[Prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.Prerequisites" >}}
