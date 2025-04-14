---
title: "Upgrade Loki"
linkTitle: "Upgrade Loki"
description: "The steps to upgrade Loki."
weight: 3
---

# {{% param title %}}

This guide describes how to upgrade the Loki installation. Please ensure that the [Grafana Upgrade] has been completed before starting this upgrade.

## Perform Upgrade

1. Log in to the server hosting your Loki service.
1. Run Windows PowerShell as Administrator.
1. Change the directory to the folder where Loki is running from, e.g. `cd C:\Program Data\Cortex\Observability\Loki`.
1. Remove the current Loki installation by executing the following command:

    ``` powershell
        .\Remove-Loki.ps1
    ```

1. Click *Yes* when prompted for confirmation that you wish to remove the service.
1. Click *OK* when the successful removal of the Loki service is confirmed.
1. Open a File Explorer and navigate to the folder where Loki was running from, e.g. `C:\Program Data\Cortex\Observability\Loki`.
1. Delete the following files from the directory:

    * Install-Loki.ps1
    * loki-local-config.yaml
    * loki-windows-amd64.exe
    * nssm.exe
    * Remove-Loki.ps1
    * Start-Loki.ps1
    * Stop-Loki.ps1

1. In File Explorer, navigate to the extracted `loki-windows-amd64.exe` folder created as part of [Make Artefacts Available][].
1. Copy the `loki-windows-amd64.exe` file into the folder that Loki was previously running from, e.g. `C:\Program Data\Cortex\Observability\Loki`.
1. In File Explorer, navigate to the extracted `Grafana.Loki.Install` folder created as part of [Make Artefacts Available][].
1. Copy the contents of this location into the folder that Loki was previously running from, e.g. `C:\Program Data\Cortex\Observability\Loki`.
1. Open the new `loki-local-config.yaml` file in a text editor and compare against the [backed up][] version.  If there are differences between the two files in the *schema_config* > *configs* section:

    1. In the new file, change the date next to `- from` to be today's date.
    1. Copy the old config section from the backup and add it immediately under *configs* and before the existing `- from ` line ensuring that formatting (including indentations) remain identical to that which is used in the new file.

        The new *schema_config* should result in something similar to:

        ```yaml
        schema_config:
          configs:
            - from: 2020-10-24
              store: boltdb-shipper
              object_store: filesystem
              schema: v11
              index:
                prefix: index_
                period: 24h
            - from: 2024-08-29
              store: tsdb
              object_store: filesystem
              schema: v13
              index:
                prefix: index_
                period: 24h
        ```

    1. Save the new `loki-local-config.yaml` file.

1. Run Windows PowerShell as Administrator.
1. Change the directory to the folder where the Loki files have been copied to, e.g. `cd C:\Program Data\Cortex\Observability\Loki`.
1. Install Loki by executing the following command:

    ``` powershell
        .\Install-Loki.ps1
    ```

1. Start the Loki service by executing the following command:

    ``` powershell
        .\Start-Loki.ps1
    ```

1. Check that the Loki service has installed and started correctly:
    * Open Services.msc from the Start menu.
    * Locate the *Loki* service and confirm that it is *Running*.

## Next Steps?

1. [Upgrade Promtail][]

[backed up]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.OnPremise.Grafana.BackupOldFiles" >}}
[Grafana Upgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.OnPremise.Grafana.UpgradeGrafana" >}}
[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.OnPremise.Grafana.MakeArtefactsAvailable" >}}
[Upgrade Promtail]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.OnPremise.Grafana.UpgradePromtail" >}}
