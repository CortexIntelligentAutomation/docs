---
title: "Setup Grafana"
linkTitle: "Setup Grafana"
description: "Information about setting up Grafana to communicate with the installed Grafana Loki as well as importing and configuring the default set of dashboards."
weight: 60
---

# {{% param title %}}

This guide describes where to get the default {{% ctx %}} Innovation Dashboards from and how to import them for use in Grafana.

Please ensure that the Installations for [Grafana][] and [Loki][] have been completed before starting this section.

## Configure Loki Data Source in Grafana

1. Log in to your configured Grafana instance with a user that has the *admin* role.
1. In Grafana, go to *Configuration* > *Data Sources* via the cog icon on the left sidebar.
1. Click the big *Add data source* button.
1. Choose *Loki* from the list.
1. Configure the data source as follows:

    | Option  | Description | Value |
    |---------|-------------|---------|
    | Name    | The name of the data source to use in Grafana | `Cortex Loki` |
    | URL     | The address of your Grafana Loki Server | `http://localhost:3100` |
    | Timeout | The HTTP request timeout in seconds set to the same value as configured in the Grafana Loki `loki-local-config.yaml` configuration file located alongside the Grafana Loki `loki-windows-amd64.exe` file. | `600` |

1. Click *Save and Test*.
1. *Data source connected and labels found.* message should be displayed above the *Save and Test*

## Download the {{% ctx %}} Innovation Default Dashboards

1. Download [Grafana.Dashboards.zip] archive containing the {{% ctx %}} Innovation default dashboards.
1. Extract the content of the downloaded archive to a suitable location.

## Create Folder for Dashboards

1. Log in to your configured Grafana with a user that has the *Admin* role.
1. To create a folder, click the + icon in the side menu, and then click *Folder*.
1. Enter a folder name, e.g. `Cortex`.
1. Click *Create*.

## Import Dashboards

1. Log in to your configured Grafana with a user that has the *Admin* role.
1. To import a dashboard, click the + icon in the side menu, and then click *Import*.
1. Click the *Upload JSON file* button.

    {{% alert type="note" title="Note" %}}This button is broken in the Grafana 8.5.3 version and it may be necessary to use your keyboard's *tab* button until the *Upload JSON file* button is highlighted and press *Enter*.{{% /alert %}}

1. Locate the `Flow Execution Requests.json` file extracted from the downloaded `Grafana.Dashboards.zip`.
1. Select the file and click *Open*.
1. Select the folder in Grafana you wish the dashboard to be saved in, e.g. *Cortex*.
1. Select your configured Loki data source from the dropdown menu.
1. Click *Import*.
1. Repeat steps 2 - 8 for the `Platform Health.json` file.

## Configure Data Sources

It is necessary to update the Custom Filter inside the dashboards to use the correct data source.

To do this, follow these steps for all default {{% ctx %}} Innovation dashboards imported:

1. Log in to your configured Grafana with a user that has the *Admin* role.
1. To open a dashboard:
    1. Click the Dashboards icon {{< image src="/images/DashboardsIcon.png" title="Dashboards Icon" >}} in the side menu, and then click *Browse*.
    1. Click the folder name that the dashboards were imported to.
    1. Click the *Flow Execution Requests* dashboard to open it.
1. Open the Dashboard Settings menu via the cog icon in the top right-hand side of the dashboard.
1. Click *Variables* on the left-hand side of the page.
1. Click *Custom Filter* at the bottom of the *Variables* list.
1. Select your configured Loki data source in the *Options* > *Data source* drop-down menu.
1. Click *Update*.
1. Click the back button on the top left corner of the page to go back to the dashboard.
1. Click the + icon next to the Custom Filter to confirm that a list of available filter options is visible.
1. Repeat steps 2 - 9 for the *Platform Health* dashboard.

## Next Steps?

1. [Try it Out][]

[Grafana.Dashboards.zip]: {{< url path="GitHub.Cortex.Observability.2.1.0.GrafanaDashboardsZip" >}}
[Grafana]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallGrafana.MainDoc" >}}
[Loki]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallLoki.MainDoc" >}}
[Try it Out]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.TryItOut" >}}
