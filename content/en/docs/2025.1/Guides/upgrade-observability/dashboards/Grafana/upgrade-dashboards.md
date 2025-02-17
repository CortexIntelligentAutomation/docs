---
title: "Upgrade Dashboards"
linkTitle: "Upgrade Dashboards"
description: "Information about upgrading your Grafana dashboards."
weight: 1
---

# {{% param title %}}

This guide describes how to upgrade the default dashboards that are provided for your observability platform.

## Download the Default Dashboards

1. Download [Grafana.Dashboards.zip][] archive containing the {{% ctx %}} default dashboards.
1. Extract the content of the downloaded archive to a suitable location.

## Import New Dashboards

1. Log in to your configured Grafana with a user that has the *Admin* role.
1. Go to *Dashboards* via the menu on the left sidebar.
1. Click the *New* button and select *Import* from the drop-down menu.
1. Click the *Upload JSON file* button.
1. Locate the `Flow Execution Requests.json` file [extracted][] from the downloaded `Grafana.Dashboards.zip`.
1. Select the file and click *Open*.
{{% alert title="Note" %}}
You will receive warnings that *A dashboard or folder with the same name already exists* and *Dashboard named 'Flow Execution Requests' in folder 'Cortex' has the same UID*.  These can be ignored.
{{% / alert %}}

1. Select the folder in Grafana you wish the dashboard to be saved in, e.g. *Cortex*.
1. Select your configured Loki data source from the dropdown menu.
1. Click *Import (Overwrite)*.
1. Repeat steps 2 - 9 for the `Platform Health.json` file.

## Next Steps?

1. [Try it out][]

[extracted]: {{< url path="Cortex.Guides.UpgradeObservability.Dashboards.Grafana.Download" >}}
[Grafana.Dashboards.zip]: {{< url path="GitHub.Cortex.Observability.3.0.0.GrafanaDashboardsZip" >}}
[Try it out]: {{< url path="Cortex.Guides.UpgradeObservability.Dashboards.Grafana.TryItOut" >}}
