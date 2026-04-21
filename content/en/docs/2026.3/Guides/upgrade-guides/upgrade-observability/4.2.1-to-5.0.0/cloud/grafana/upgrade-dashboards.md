---
title: "Upgrade Dashboards"
linkTitle: "Upgrade Dashboards"
description: "Information about upgrading your Grafana dashboards."
weight: 3
---

# {{% param title %}}

This guide describes how to upgrade the default dashboards that are provided for your observability platform.

{{% alert title="Warning" color="warning" %}}
A new *Flow Execution Details* Dashboard has been added to the default dashboards. This new dashboard will only work if `Flow Logging` is enabled on your platform. See {{< ahref path="Cortex.Faqs.ChangeLoggingLevels.FlowLogging.MainDoc" title="Change Flow Logging Level" >}} for instructions on how to do this.
{{% / alert %}}

## Import New Dashboard

1. Log in to Grafana Cloud with a user that has the *Admin* role.
1. Click the Menu icon {{< image src="/images/GrafanaMenuIcon.png" title="Menu icon" >}} to view the available options.
1. Click the Dashboards menu item.
1. Click the *New* dropdown and select *Import*.
1. Click on *Upload dashboard JSON file*.
1. Locate the extracted `Flow Execution Details.json` file downloaded as part of [Make Artefacts Available][].
1. Select the file and click *Open*.
1. Select the folder in Grafana you wish the dashboard to be saved in, e.g. *Cortex*.
1. Select your configured Loki data source from the dropdown menu, e.g. *grafanacloud-cortex-logs*.
1. Click *Import*.

## Configure Data Sources

It is necessary to update the Custom Filter inside the dashboards to use the correct data source.

1. Log in to Grafana Cloud with a user that has the *Admin* role.
1. To open a dashboard:
    1. Click the Menu icon {{< image src="/images/GrafanaMenuIcon.png" title="Menu icon" >}} to view the available options.
    1. Click the Dashboards menu item.
    1. Click the folder name that the dashboards were imported to.
    1. Click the *Flow Execution Details* dashboard to open it.
1. Open the *Dashboard settings* menu via the cog icon in the top right-hand side of the dashboard.
1. Click *Variables* from the top menu of the *Settings* page.
1. Click *CustomFilter* in the *Variables* list.
1. Select your Loki data source in the *Adhoc Options* > *Data source* drop-down menu, e.g. *grafanacloud-cortex-logs*.
1. Click *Apply*.
1. Click the dashboard name in the breadcrumb at the top left corner of the page to go back to the dashboard.
1. Click the + icon next to the Custom Filter to confirm that a list of available filter options is visible. If Grafana Loki has not received any logs from Grafana Alloy there will be no options available for selection.

## Next Steps?

1. [Try it out][]

[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_1to5_0_0.Cloud.Grafana.MakeArtefactsAvailable" >}}
[Try it out]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_1to5_0_0.Cloud.Grafana.TryItOut" >}}
