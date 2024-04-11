---
title: "Import Dashboards"
linkTitle: "Import Dashboards"
description: "Information about setting up Grafana to communicate with the Cloud Grafana Loki as well as importing and configuring the default set of dashboards."
weight: 60
---

# {{% param title %}}

This guide describes where to get the default {{% ctx %}} Innovation Dashboards from and how to import them for use in Grafana Cloud.

Please ensure that the set up for [Grafana][] and [Loki][] have been completed before starting this section.

## Download the {{% ctx %}} Innovation Default Dashboards

1. Download [Grafana.Dashboards.zip] archive containing the {{% ctx %}} Innovation default dashboards.
1. Extract the content of the downloaded archive to a suitable location.

## Create Folder for Dashboards

1. Log in to Grafana Cloud with a user that has the *Admin* role.
1. Click the Menu icon {{< image src="/images/GrafanaMenuIcon.png" title="Menu icon" >}} to view the available options.
1. Click the Dashboards menu item.
1. Click the *New* dropdown and select *New folder*.
1. Enter a folder name, e.g. `Cortex`.
1. Click *Create*.

## Import Dashboards

1. Log in to Grafana Cloud with a user that has the *Admin* role.
1. Click the Menu icon {{< image src="/images/GrafanaMenuIcon.png" title="Menu icon" >}} to view the available options.
1. Click the Dashboards menu item.
1. Click the *New* dropdown and select *Import*.
1. Click on *Upload dashboard JSON file*.
1. Locate the `Flow Execution Requests.json` file extracted from the downloaded `Grafana.Dashboards.zip`.
1. Select the file and click *Open*.
1. Select the folder in Grafana you wish the dashboard to be saved in, e.g. *Cortex*.
1. Select your [configured Loki data source] Loki data source from the dropdown menu, e.g. *grafanacloud-cortexinnovation-logs*.
1. Click *Import*.
1. Repeat steps 2 - 10 for the `Platform Health.json` file.

## Configure Data Sources

It is necessary to update the Custom Filter inside the dashboards to use the correct data source.

To do this, follow these steps for all default {{% ctx %}} Innovation dashboards imported:

1. Log in to Grafana Cloud with a user that has the *Admin* role.
1. To open a dashboard:
    1. Click the Menu icon {{< image src="/images/GrafanaMenuIcon.png" title="Menu icon" >}} to view the available options.
    1. Click the Dashboards menu item.
    1. Click the folder name that the dashboards were imported to.
    1. Click the first dashboard to open.
1. Open the *Dashboard settings* menu via the cog icon in the top right-hand side of the dashboard.
1. Click *Variables* from the top menu of the *Settings* page.
1. Click *CustomFilter* in the *Variables* list.
1. Select your [configured Loki data source][] in the *Adhoc Options* > *Data source* drop-down menu, e.g. *grafanacloud-cortexinnovation-logs*.
1. Click *Apply*.
1. Click the dashboard name in the breadcrumb at the top left corner of the page to go back to the dashboard.
1. Click the + icon next to the Custom Filter to confirm that a list of available filter options is visible. If Grafana Loki has not received any logs from Promtail there will be no options available for selection.
1. Repeat steps 2 - 9 for all additional default dashboards.

## Next Steps?

1. [Try it Out][]

[configured Loki data source]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupLoki.MainDoc" >}}
[Grafana]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupGrafana.MainDoc" >}}
[Grafana.Dashboards.zip]: {{< url path="GitHub.Cortex.Observability.2.2.0.GrafanaDashboardsZip" >}}
[Loki]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupLoki.MainDoc" >}}
[Try it Out]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.TryItOut.MainDoc" >}}