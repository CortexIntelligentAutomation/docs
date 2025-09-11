---
title: "Migrate to Grafana Alloy"
linkTitle: "Migrate to Grafana Alloy"
description: "The steps to Migrate Promtail to Grafana Alloy."
weight: 4
---

# {{% param title %}}

This guide describes how to migrate from a Promtail Installation to Grafana Alloy. Please ensure that the [Loki Upgrade][] has been completed before starting this upgrade.

## Prerequisites

## Perform Migration

{{% alert title="Note" %}}
These steps will need to be performed on all application servers that host a Promtail service.
{{% / alert %}}

1. Log in to the application server.
1. Run Windows PowerShell as Administrator.
1. Change the directory to the folder where Promtail is running from, e.g. `cd C:\Program Data\Cortex\Observability\Promtail`.
1. Remove the current Promtail installation by executing the following command:

    ``` powershell
        .\Remove-Promtail.ps1
    ```

1. Click *Yes* when prompted for confirmation that you wish to remove the service.
1. Click *OK* when the successful removal of the Promtail service is confirmed.
1. Open a File Explorer and navigate to the folder where Promtail was running from, e.g. `C:\Program Data\Cortex\Observability\Promtail`
1. Delete the Promtail directory
1. TODO

## Next Steps?

1. [Try it out][]

[backed up]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.OnPremise.Grafana.BackupOldFiles" >}}
[Loki Upgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.OnPremise.Grafana.UpgradeLoki" >}}
[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.OnPremise.Grafana.MakeArtefactsAvailable" >}}
[Try it out]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.OnPremise.Grafana.TryItOut" >}}
