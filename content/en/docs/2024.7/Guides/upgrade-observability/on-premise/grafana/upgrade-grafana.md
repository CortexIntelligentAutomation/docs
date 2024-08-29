---
title: "Upgrade Grafana"
linkTitle: "Upgrade Grafana"
description: "The steps to upgrade Grafana."
weight: 2
---

# {{% param title %}}

This guide describes how to upgrade the Grafana installation. Please ensure that the [Prerequisites] for upgrading Observability have been completed before starting this upgrade.

## Perform Upgrade

1. Log in to the server hosting your Grafana website.
1. Open Services.msc from the Start menu.
1. Locate the *Grafana* service and stop it by right-clicking on the service and selecting *Stop*.
1. In File Explorer, navigate to the extracted Grafana installation folder performed as part of [Make Artefacts Available][].
1. Open the `Grafana-v10.4.1` folder.
1. Copy the contents of `Grafana-v10.4.1` into the Grafana install location, typically `%SystemDrive%\Program Files\GrafanaLabs\grafana`, and click `Replace all existing files` when prompted.
1. Copy the [backed up][] `custom.ini` and `defaults.ini` files into the Grafana install location, typically `%SystemDrive%\Program Files\GrafanaLabs\grafana`, and click `Replace all existing files` when prompted.
1. Open Services.msc from the Start menu.
1. Locate the *Grafana* service and start it by right-clicking on the service and selecting *Start*.

## Next Steps?

1. [Upgrade Loki][]

[backed up]: {{< url path="Cortex.Guides.UpgradeObservability.OnPremise.Grafana.BackupOldFiles" >}}
[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeObservability.OnPremise.Grafana.MakeArtefactsAvailable" >}}
[Prerequisites]: {{< url path="Cortex.Guides.UpgradeObservability.OnPremise.Grafana.Prerequisites" >}}
[Upgrade Loki]: {{< url path="Cortex.Guides.UpgradeObservability.OnPremise.Grafana.UpgradeLoki" >}}
