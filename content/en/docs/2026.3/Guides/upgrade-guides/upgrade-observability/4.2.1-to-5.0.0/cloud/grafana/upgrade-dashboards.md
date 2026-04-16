---
title: "Upgrade Dashboards"
linkTitle: "Upgrade Dashboards"
description: "Information about upgrading your Grafana dashboards."
weight: 3
---

# {{% param title %}}

This guide describes how to upgrade the default dashboards that are provided for your observability platform.

{{% alert title="Warning" color="warning" %}}
This new dashboard will only work if `Flow Logging` is enabled on your platform.
{{% / alert %}}

## Import New Dashboard

1. Log in to your configured Grafana with a user that has the *Admin* role.
1. Go to *Dashboards* via the menu on the left sidebar.
1. Click the *New* button and select *Import* from the drop-down menu.
1. Click the *Upload JSON file* button.
1. Locate the extracted `Flow Execution Details.json` file downloaded as part of [Make Artefacts Available][].
1. Select the file and click *Open*.
1. Select the folder in Grafana you wish the dashboard to be saved in, e.g. *Cortex*.
1. Select your configured Loki data source from the dropdown menu.
1. Click *Import*.

## Next Steps?

1. [Try it out][]

[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_1to5_0_0.Cloud.Grafana.MakeArtefactsAvailable" >}}
[Try it out]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_1to5_0_0.Cloud.Grafana.TryItOut" >}}
