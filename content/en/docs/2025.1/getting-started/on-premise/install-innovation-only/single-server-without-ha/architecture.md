---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the recommended Innovation platform architecture, including component descriptions."
weight: 10
---

# {{% param title %}}

## Components

{{< section "/architecture/components/single-server.md" >}}

## Single Server Architecture

The following architecture requires 1 server:

{{< figure src="/images/editable/Cortex Innovation Overview-Single Server.png" class="centre" title="1 Server Architecture Diagram" >}}

{{< section "/architecture/components/node-details.md" >}}

{{% alert type="warning" title="Warning" %}} This architecture is not recommended for production platforms that are required to scale and support HA. Additionally, upgrades require application redeployment with downtime rather than using rolling upgrades. {{%/alert %}}

## Next Steps?

1. [Requirements][]

[Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.Requirements" >}}
