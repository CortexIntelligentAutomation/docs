---
title: "Migrate to Grafana Alloy"
linkTitle: "Migrate to Grafana Alloy"
description: "The steps to Migrate Promtail to Grafana Alloy."
weight: 4
---

# {{% param title %}}

This guide describes how to migrate from a Promtail Installation to Grafana Alloy. Please ensure that the [Loki Upgrade][] has been completed before starting this upgrade.

## Modify Client URL for Grafana Loki

1. Open the `promtail-local-config.yaml` configuration file, which is located in the folder alongside the `promtail-windows-amd64.exe` file e.g. `C:\ProgramData\Cortex\Observability\Promtail`.
1. Locate the Grafana Loki `URL` in the `clients` section.
1. Remove the `username:password@` from the URL

   A correct URL should be changed from `https://username:password@hostaddress:2100/loki/api/v1/push` to `https://hostaddress:2100/loki/api/v1/push`.
1. Save the file.

## Perform Migration

{{% alert title="Note" %}}
These steps will need to be performed on all application servers that host a Promtail service.
{{% / alert %}}

1. Log in to the application server.
1. Run Windows PowerShell as Administrator.
1. Change the directory to the folder where Promtail is running from, e.g. `cd C:\ProgramData\Cortex\Observability\Promtail`.
1. Remove the current Promtail installation by executing the following command:

    ``` powershell
        .\Remove-Promtail.ps1
    ```

1. Click *Yes* when prompted for confirmation that you wish to remove the service.
1. Click *OK* when the successful removal of the Promtail service is confirmed.
1. Open a File Explorer and navigate to the extracted alloy-installer-windows-amd64.exe folder created as part of [Make Artefacts Available][].
1. Copy the alloy-installer-windows-amd64.exe into a suitable location, e.g. `C:\ProgramData\Cortex\Observability\Grafana Alloy`.
1. In File Explorer, navigate to the extracted Grafana.Alloy.Install folder created as part of [Make Artefacts Available][].
1. Copy the contents of the folder to the same location as the previously copied alloy-installer-windows-amd64.exe.
1. In Powershell change the location to the folder that the artefacts have been copied to, e.g. `cd C:\ProgramData\Cortex\Observability\Grafana Alloy`.
1. Install Grafana Alloy by executing the following command and passing in the correct path for the `promtail-local-config.yaml`:

    ``` powershell
        .\Migrate-Promtail-To-Alloy.ps1 -PromtailConfig "C:\ProgramData\Cortex\Observability\Promtail\promtail-local-config.yaml"
    ```

1. When prompted, enter the credentials that the Grafana Alloy Service should run as.
1. When prompted, enter the bearer token that was specified when [configuring authentication for the Reverse Proxy][Reverse Proxy Authentication]
1. Once the migration has completed, delete the now obsolete Promtail directory e.g. `C:\ProgramData\Cortex\Observability\Promtail`.

## Next Steps?

1. [Try it out][]

[backed up]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.OnPremise.Grafana.BackupOldFiles" >}}
[Loki Upgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.OnPremise.Grafana.UpgradeLoki" >}}
[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.OnPremise.Grafana.MakeArtefactsAvailable" >}}
[Reverse Proxy Authentication]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.OnPremise.Grafana.SetupAuthentication" >}}
[Try it out]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.OnPremise.Grafana.TryItOut" >}}
