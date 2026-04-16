---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "The prerequisites required before performing the observability upgrade."
weight: 1
---

# {{% param title %}}

## Make Artefacts Available

1. Download the required artefacts to a folder on your machine:

    * [Grafana Alloy 1.15.1][] archive.
    * [Grafana.Dashboards.zip][] archive.

1. Extract the downloaded `alloy-installer-windows-amd64.exe` archive to a folder with the same name.
1. Extract the downloaded `Grafana.Dashboards` archive to a folder with the same name.

## Backup Old Files

On each Application Server that Grafana Alloy is installed on:

1. Create a folder called `Observability Backups` in a known location.
1. Open File Explorer and navigate to the location where Grafana Alloy is running from, e.g. `C:\ProgramData\Cortex\Observability\Grafana Alloy`.
1. Copy the `config.alloy` file and save it to the `Observability Backups` folder created at step 1.

## Next Steps?

1. [Upgrade Grafana Alloy][Upgrade Alloy]

[Grafana Alloy 1.15.1]:  {{< url path="Grafana.SelfManaged.Downloads.GrafanaAlloy.1_15_1.Windows" >}}
[Upgrade Alloy]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_1to5_0_0.Cloud.Grafana.UpgradeAlloy" >}}
[Grafana.Dashboards.zip]: {{< url path="GitHub.Cortex.Observability.4_2_1.GrafanaDashboardsZip" >}}
