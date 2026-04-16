---
title: "Upgrade Dashboards"
linkTitle: "Upgrade Dashboards"
description: "Information about upgrading your Grafana dashboards."
weight: 5
---

# {{% param title %}}

This guide describes how to upgrade the default dashboards that are provided for your observability platform.

{{% alert title="Warning" color="warning" %}}
This new dashboard will only work if `Flow Logging` is enabled on your platform. See {{< ahref path="Cortex.Faqs.ChangeLoggingLevels.FlowLogging.MainDoc" title="Change Flow Logging Level" >}} for instructions on how to do this.
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

## Configure Data Sources

It is necessary to update the Custom Filter inside the new dashboard to use the correct data source.

1. Log in to your configured Grafana with a user that has the *Admin* role.
1. To open a dashboard:
    1. Go to *Dashboards* via the menu on the left sidebar.
    1. Click the folder name that the dashboards were imported to.
    1. Click the *Flow Execution Details* dashboard to open it.
1. Open the *Dashboard settings* panel via the cog icon on the right-hand side of the dashboard.
1. Open the *Settings Menu* by selecting the Settings button on the top right of the opened panel.
1. Click *Variables* from the top menu of the *Settings* page.
1. Click *CustomFilter* at the bottom of the *Variables* list.
1. Select your configured Loki data source in the *Filter options* > *Data source* drop-down menu.
1. Click *Save* at the top right of the window.
1. Click the dashboard name in the breadcrumb at the top left corner of the page to go back to the dashboard.
1. Click in the Custom Filter text box to confirm that a list of available filter options is visible.

## Next Steps?

1. [Try it out][]

[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_1to5_0_0.OnPremise.Grafana.MakeArtefactsAvailable" >}}
[Try it out]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_1to5_0_0.OnPremise.Grafana.TryItOut" >}}
