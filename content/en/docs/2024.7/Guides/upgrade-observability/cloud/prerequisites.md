---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "The pre-requisites required before performing the Observability upgrade."
weight: 1
---

# {{% param title %}}

## Verify Old Version

1. Navigate to your Grafana website e.g. `https://machinename.domain.com:3000`
1. Login to Grafana.
1. Open the *Dashboards* page via the menu on the left sidebar.
1. Select the folder that hosts the Cortex Dashboards, e.g. *Cortex*
1. Click the *Flow Execution Requests* dashboard to open it.
1. Change the time period to be *Last 90 days* and confirm data is present.
1. Make a note of values returned, or alternatively take a screenshot of the dashboard, to use later to verify the upgrade.

## Make Artefacts Available

1. Download the required artefacts to a folder on the machine:
    1. [Promtail 3.0.0][] archive.
1. Extract the downloaded Promtail to a folder with the same name.

## Next Steps?

1. [Upgrade Promtail][]

[Upgrade Promtail]: {{< url path="Cortex.Guides.UpgradeObservability.Cloud.UpgradePromtail" >}}
