---
title: "Upgrade Grafana Alloy"
linkTitle: "Upgrade Grafana Alloy"
description: "The steps to upgrade Grafana Alloy."
weight: 4
---

# {{% param title %}}

This guide describes how to upgrade Grafana Alloy. Please ensure that the [Loki Upgrade][] has been completed before starting this upgrade.

## Perform Upgrade

1. Log in to the application server.
1. Open a File Explorer and navigate to the extracted alloy-installer-windows-amd64.exe folder created as part of [Make Artefacts Available][].
1. Copy the `alloy-installer-windows-amd64.exe` into the location that Grafana Alloy was previously installed from, e.g. `C:\ProgramData\Cortex\Observability\Grafana Alloy`, overwriting the existing file if prompted to do so.
1. Execute the `alloy-installer-windows-amd64.exe` by double clicking on the file.
1. Follow the install wizard accepting the defaults and wait for the installation to complete.
1. Click `Close` to finish the installation.

## Configure Grafana Alloy

1. Open the `config.alloy` configuration file, which is located in the folder alongside the `alloy-installer-windows-amd64.exe` file.
1. Locate the line containing `__path__` in the `loki.file_match "ApiGateway"` > `path_targets` section, which can be found near the beginning of the file.
1. Change the `__path__` value so that the part containing the file name changes to `ServiceFabricHttpEventLog-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]{,_[0-9][0-9][0-9]}.json`. Note there is a change to the `,` location.

    The line should now look similar to `__path__    = "C:/ProgramData/Cortex/API Gateway Service/Logs/**/ServiceFabricHttpEventLog-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]{,_[0-9][0-9][0-9]}.json",`
1. Save the file.
1. Open `services.msc`.
1. Locate the `Alloy` service.
1. Right click on the service name and select `Restart`. If the service is not already running, select `Start`.

## Next Steps?

1. [Try it out][]

[Loki Upgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_0to5_0_0.OnPremise.Grafana.UpgradeLoki" >}}
[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_0to5_0_0.OnPremise.Grafana.MakeArtefactsAvailable" >}}
[Try it out]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_0to5_0_0.OnPremise.Grafana.TryItOut" >}}
