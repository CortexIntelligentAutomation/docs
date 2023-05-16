---
title: "Import Dashboards"
linkTitle: "Import Dashboards"
description: "Information about setting up Grafana to communicate with the Cloud Grafana Loki as well as importing and configuring the default set of dashboards."
weight: 60
---

# {{% param title %}}

This guide describes where to get the default {{< ctx >}} Innovation Dashboards from and how to import them for use in Grafana Cloud.

Please ensure that the set up for [Grafana][] and [Loki][] have been completed before starting this section.

## Download the {{% ctx %}} Innovation Default Dashboards

1. Download [Grafana.Dashboards.zip] archive containing the {{< ctx >}} Innovation default dashboards.
1. Extract the content of the downloaded archive to a suitable location.

## Create Folder for Dashboards

1. Log in to Grafana Cloud with a user that has the *Admin* role.
1. Hover over the Dashboards icon {{< image src="/images/DashboardsIcon.png" title="Dashboards Icon" >}} in the side menu, and then click *+ New folder*.
1. Enter a folder name, e.g. `Cortex`.
1. Click *Create*.

## Import Dashboards

1. Log in to Grafana Cloud with a user that has the *Admin* role.
1. Hover over the Dashboards icon {{< image src="/images/DashboardsIcon.png" title="Dashboards Icon" >}} in the side menu, and then click *Import*.
1. Click the *Upload JSON file* button.
1. Locate the `Flow Execution Requests.json` file extracted from the downloaded `Grafana.Dashboards.zip`.
1. Select the file and click *Open*.
1. Select the folder in Grafana you wish the dashboard to be saved in, e.g. *Cortex*.
1. Select your configured Loki data source from the dropdown menu.
1. Click *Import*.
1. Repeat steps 2 - 8 for the `Platform Health.json` file.

## Configure Data Sources

It is necessary to update the Custom Filter inside the dashboards to use the correct data source.

To do this, follow these steps for all default {{< ctx >}} Innovation dashboards imported:

1. Log in to Grafana Cloud with a user that has the *Admin* role.
1. To open a dashboard:
    1. Hover over the Dashboards icon {{< image src="/images/DashboardsIcon.png" title="Dashboards Icon" >}} in the side menu, and then click *Browse*.
    1. Click the folder name that the dashboards were imported to.
    1. Click the *Flow Execution Requests* dashboard to open it.
1. Open the Dashboard Settings menu via the cog icon in the top right side of the dashboard.
1. Click *Variables* on the left-hand side of the page.
1. Click *Custom Filter* in the *Variables* list.
1. Select your configured Loki data source in the *Options* > *Data source* drop-down menu.
1. Click *Update*.
1. Click the back button on the top left corner of the page to go back to the dashboard.
1. Click the + icon next to the Custom Filter to confirm that a list of available filter options is visible. If Grafana Loki has not received any logs from Promtail there will be no options available for selection.
1. Repeat steps 2 - 9 for the *Platform Health* dashboard.

## Next Steps?

1. [Try it Out][]

[configured]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupLoki.MainDoc" >}}
[Grafana.Dashboards.zip]: {{< url path="GitHub.Cortex.Observability.1.0.0.GrafanaDashboardsZip" >}}
[Grafana]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupGrafana.MainDoc" >}}
[Loki]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupLoki.MainDoc" >}}
[Try it Out]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.TryItOut.MainDoc" >}}