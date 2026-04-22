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
| [Grafana Alloy][] | An observability collector that can ingest logs and send them to a Grafana Loki instance. It should be deployed to every machine that has a Microsoft Service Fabric node used by {{% ctx %}}. | Required | Application&nbsp;Server |
| [Grafana&nbsp;Loki][Grafana Loki] | Log aggregation system designed to store and query logs from applications and infrastructure. | Required | Grafana&nbsp;Cloud&nbsp;managed&nbsp;service |

## Recommended Architecture

The following architecture requires 1..n Application servers and 1 [Grafana Cloud][] managed service.

{{< figure src="/images/editable/Grafana Platform Architecture Diagram - Cloud.png" >}}

## Next Steps?

1. [Prerequisites][]

[Prerequisites]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.Prerequisites.MainDoc" >}}
[Grafana]: {{< url path="Grafana.Products.Grafana.MainDoc" >}}
[Grafana Alloy]: {{< url path="Grafana.Products.Loki.Alloy.MainDoc" >}}
[Grafana Cloud]: {{< url path="Grafana.MainDoc" >}}
[Grafana Loki]: {{< url path="Grafana.Products.Loki.MainDoc" >}}
