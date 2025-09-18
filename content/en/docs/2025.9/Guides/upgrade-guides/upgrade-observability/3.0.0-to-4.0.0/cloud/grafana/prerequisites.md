---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "The prerequisites required before performing the observability upgrade."
weight: 1
---

# {{% param title %}}

## Make Artefacts Available

1. Download the required artefacts to a folder on your machine:

    * [Grafana Alloy 1.10.2][] archive.
    * [Grafana Alloy Install][] archive.

1. Extract the downloaded `alloy-installer-windows-amd64.exe` archive to a folder with the same name.
1. Extract the downloaded `Grafana.Alloy.Install` archive to a folder with the same name.

## Backup Old Files

On each Application Server that Promtail is installed on:

1. Create a folder called `Observability Backups` in a known location.
1. Open File Explorer and navigate to the location where Promtail is running from, e.g. `C:\Promtail`.
1. Copy the `promtail-local-config.yaml` file and save it to the `Observability Backups` folder created at step 1.

## Next Steps?

1. [Migrate Promtail to Grafana Alloy][Migrate to Alloy]

[Grafana Alloy 1.10.2]:  {{< url path="Grafana.Products.Loki.Alloy.1.10.2" >}}
[Grafana Alloy Install]: {{< url path="GitHub.Cortex.Observability.4.0.0.GrafanaAlloyInstallZip" >}}
[Migrate to Alloy]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.Cloud.Grafana.MigrateToAlloy" >}}
