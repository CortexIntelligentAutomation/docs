---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "The prerequisites required before performing the observability upgrade."
weight: 1
---

# {{% param title %}}

## Verify Old Version

1. Navigate to your Grafana website e.g. `https://{Team URL}.grafana.net`
1. Login to Grafana.
1. Open the *Dashboards* page via the menu on the left sidebar.
1. Select the folder that hosts the Cortex Dashboards, e.g. *Cortex*
1. Click the *Flow Execution Requests* dashboard to open it.
1. Change the time period to be *Last 90 days* and confirm data is present.
1. Make a note of values returned in the Overview tiles, or alternatively take a screenshot of the dashboard, to use later to verify the upgrade.

## Make Artefacts Available

1. Download the required artefacts to a folder on your machine:

    * [Promtail 3.0.0][] archive.
    * [Promtail Install][] archive.

1. Extract the downloaded Promtail to a folder with the same name.
1. Extract the downloaded Promtail Install file to a folder with the same name.

## Backup Old Files

On each Application Server that Promtail is installed on:

1. Create a folder called `Observability Backups` in a known location.
1. Open File Explorer and navigate to the location where Promtail is running from, e.g. `C:\Promtail`.
1. Copy the `promtail-local-config.yaml` file and save it to the `Observability Backups` folder created at step 1.

## Next Steps?

1. [Upgrade Promtail][]

[Promtail 3.0.0]:  {{< url path="Grafana.SelfManaged.Downloads.Promtail.3.0.0.PromtailInstallZip" >}}
[Promtail Install]: {{< url path="GitHub.Cortex.Observability.3.0.0.PromtailInstallZip" >}}
[Upgrade Promtail]: {{< url path="Cortex.Guides.UpgradeObservability.Cloud.Grafana.UpgradePromtail" >}}
