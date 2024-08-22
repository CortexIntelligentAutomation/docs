---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "The pre-requisites required before performing the Observability upgrade."
weight: 1
---

# {{% param title %}}

## Verify Old Versions

Navigate to https://v-demoaux1.demo.wearecortex.com:3000 note the version number under the login prompt.
This will be for comparison after completing the Grafana upgrade.

Using credentials from password vault, login to Grafana.
Navigate to the Flow Execution Requests dashboard, set the timeframe to the last 90 days and confirm data is present. - screenshot the dashboard for reference to confirm the upgrade later on

## Make Artefacts Available

Click Grafana.X.X.X in the CORTEX Product Documentation and download the Standalone Windows Binaries from the Grafana download page.

Download the Grafana Loki X.X.X Archive from the CORTEX Product Documentation.

Download the Promtail X.X.X Archive from the CORTEX Product Documentation.

Extract grafana-enterprise-X.X.X.windows-amd64.zip to your downloads folder
Extract the loki-windows-amd64.exe zip to your downloads folder.
Extract the promtail-windows-amd64.exe zip to your downloads folder

## Next Steps?

1. [Upgrade Grafana][]

[Upgrade Grafana]: {{< url path="Cortex.Guides.UpgradeObservability.OnPremise.UpgradeGrafana" >}}
