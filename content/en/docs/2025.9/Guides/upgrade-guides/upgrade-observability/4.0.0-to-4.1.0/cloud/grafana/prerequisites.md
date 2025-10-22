---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "The prerequisites required before performing the observability upgrade."
weight: 1
---

# {{% param title %}}

## Verify Upgrade Required

On each Application Server:

1. Log in to the application server.
1. Open a File Explorer and navigate to the folder that Grafana Alloy is running from, e.g. `C:\ProgramData\Cortex\Observability\Grafana Alloy`.
1. Open the `config.alloy` configuration file in a text editor.
1. Search the file for `local.file_match "ExecutionService"`.
1. If the search returns no results, proceed with the upgrade process, if results are returned then Observability has already been updated to 4.1.0 automatically as part of the 3.0.0 to 4.0.0 upgrade and no further steps are required.

## Backup Old Files

1. On each Application Server that Grafana Alloy is installed on:

    1. Create a folder called `Observability Backups` in a known location.
    1. Open File Explorer and navigate to the location that Grafana Alloy is running from, e.g. `C:\ProgramData\Cortex\Observability\Grafana Alloy`.
    1. Copy the `config.alloy` file and save it to the `Observability Backups` folder created at step 1.1.

## Next Steps?

1. [Upgrade Grafana Alloy][]

[Upgrade Grafana Alloy]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4.0.0to4.1.0.Cloud.Grafana.UpgradeAlloy" >}}
