---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "The prerequisites required before performing the observability upgrade."
weight: 1
---

# {{% param title %}}

## Verify Upgrade Required

On the server that Grafana Loki is installed on:

1. Log in to the server.
1. Open a File Explorer and navigate to the folder that Grafana Loki is running from, e.g. `C:\ProgramData\Cortex\Observability\Loki`.
1. Open the `loki-local-config.yaml` configuration file in a text editor.
1. Search the file for `compactor:`.
1. If the search returns no results, proceed with the upgrade process, if results are returned then Observability has already been updated to 4.2.0 automatically as part of the [3.0.0 to 4.0.0][] upgrade and no further steps are required.

## Backup Old Files

1. On the server that Grafana Loki is installed on, create a folder called `Observability Backups` in a known location.
1. Open File Explorer and navigate to the location that Grafana Loki is running from, e.g. `C:\ProgramData\Cortex\Observability\Loki\`.
1. Copy the `loki-local-config.yaml` file and save it to the `Observability Backups` folder created at step 1.

## Next Steps?

1. [Upgrade Grafana Loki][]

[3.0.0 to 4.0.0]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.OnPremise.Grafana.MainDoc" >}}
[Upgrade Grafana Loki]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4.1.0to4.2.0.OnPremise.Grafana.UpgradeLoki" >}}
