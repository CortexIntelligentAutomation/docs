---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the recommended {{% ctx %}} platform architecture, including component descriptions."
weight: 10
---

# {{< param title >}}

## Components

{{< section "/architecture/components/multi-server.md" >}}

## Recommended Architecture

The following architecture requires 5 servers:

* 1x Web Application Server which contains Gateway and the Debug Node
* 1x Load Balancer Server
* 3x Application Servers

{{< figure src="/images/editable/Cortex Overview.png" class="centre" title="5 Server Architecture Diagram" >}}

{{< section "/architecture/components/node-details.md" >}}

## Next Steps?

1. [Requirements][]

[Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.Requirements" >}}
