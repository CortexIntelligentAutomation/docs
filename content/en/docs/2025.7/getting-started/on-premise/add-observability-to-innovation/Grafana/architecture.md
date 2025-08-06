---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the recommended architecture for a Grafana platform installation."
weight: 10
---

# {{% param title %}}

## Components

| Component | Purpose | Required/Optional |Server Role |
|-----------|---------|----------|------------|
| [Grafana][] | Web application that provides querying and visualisation of data in the form of dashboards. | Required | Web&nbsp;Application&nbsp;Server |
| [Grafana Alloy][] | An observability collector that can ingest logs and send them to a Grafana Loki instance. It should be deployed to every machine that has a Microsoft Service Fabric node used by {{% ctx %}}. | Required | Application&nbsp;Server |
| [Grafana Loki][] | Log aggregation system designed to store and query logs from applications and infrastructure. | Required | Web&nbsp;Application&nbsp;Server |
| [Microsoft&nbsp;Internet&nbsp;Information&nbsp;Services&nbsp;(IIS)][IIS] | Web server used as a reverse proxy for Grafana Loki. | Required | Web&nbsp;Application&nbsp;Server |

## Recommended Architecture

{{% alert title="Note" %}}
For production systems it is recommended to {{< ahref path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallOnNewHardware" title="install on new hardware" >}}. However, if additional hardware is not available, you can {{< ahref path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallOnExistingHardware" title="install on existing hardware" >}}.
{{% /alert %}}

The following architecture requires 1 + 1..n servers:

* 1 x Web Application Server which contains Grafana, Grafana Loki and Microsoft IIS.
* 1..n x Application Servers.

{{< figure src="/images/editable/Grafana Platform Architecture Diagram - On-Premise.png" >}}

## Next Steps?

1. [Prerequisites][]

[Prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.Prerequisites" >}}
[Grafana]: {{< url path="Grafana.Products.Grafana.MainDoc" >}}
[Grafana Loki]: {{< url path="Grafana.Products.Loki.MainDoc" >}}
[Grafana Alloy]: {{< url path="Grafana.Products.Loki.Alloy.MainDoc" >}}
[IIS]: {{< url path="IIS.MainDoc" >}}
