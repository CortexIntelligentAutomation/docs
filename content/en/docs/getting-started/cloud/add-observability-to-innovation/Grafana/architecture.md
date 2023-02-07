---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the recommended architecture for a Grafana Cloud installation."
weight: 10
---

# {{% param title %}}

## Components

| Component | Purpose | Required/Optional |Server Role |
|-----------|---------|----------|------------|
| [Grafana][] | Web application that provides querying and visualisation of data in the form of dashboards. | Required | Grafana&nbsp;Cloud&nbsp;managed&nbsp;service |
| [Grafana&nbsp;Loki][Grafana Loki] | Log aggregation system designed to store and query logs from applications and infrastructure. | Required | Grafana&nbsp;Cloud&nbsp;managed&nbsp;service |
| [Promtail][] | An agent which ships the contents of local logs to a Grafana Loki instance. It should be deployed to every machine that has a Microsoft Service Fabric node used by Innovation. | Required | Application&nbsp;Server |

## Recommended Architecture

The following architecture requires 1..n Application servers and 1 [Grafana Cloud][] managed service.

{{< figure src="/images/editable/Grafana Platform Architecture Diagram - Cloud.png" >}}

## Next Steps?

1. [Prerequisites][]

[Prerequisites]: {{< url "Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.Prerequisites.MainDoc" >}}
[Grafana]: {{< url "Grafana.Products.Grafana.MainDoc" >}}
[Grafana Cloud]: {{< url "Grafana.MainDoc" >}}
[Grafana Loki]: {{< url "Grafana.Products.Loki.MainDoc" >}}
[Promtail]: {{< url "Grafana.Products.Loki.Promtail.MainDoc" >}}
