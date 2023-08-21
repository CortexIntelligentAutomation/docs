---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the recommended Innovation platform architecture, including component descriptions."
weight: 10
---

# {{< param title >}}

## Components

{{< section "/architecture/components/multi-server.md" >}}

## Recommended Architecture

The following architecture requires 5 servers:

* 1x Web Application Server which contains Gateway, Debug Node and Databases
* 1x Load Balancer Server
* 3x Application Servers

{{< figure src="/images/editable/Cortex Innovation Overview.png" class="centre" title="5 Server Architecture Diagram" >}}

{{< section "/architecture/components/node-details.md" >}}

## Next Steps?

1. [Prerequisites][]

[Prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.Prerequisites" >}}
