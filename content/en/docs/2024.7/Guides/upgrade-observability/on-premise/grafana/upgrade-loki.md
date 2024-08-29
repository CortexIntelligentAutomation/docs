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
1. Change the directory to the folder where Loki is running from, e.g. `CD C:\Loki`.
1. Remove the current Loki installation by executing the following command:

    ``` powershell
        .\Remove-Loki.ps1
    ```

1. Open a File Explorer and navigate to the folder where Loki is running from, e.g. `C:\Loki`.
1. Delete the following files from the directory:

    * Install-Loki.ps1
    * loki-local-config.yaml
    * loki-windows-amd64.exe
    * nssm.exe
    * Remove-Loki.ps1
    * Start-Loki.ps1
    * Stop-Loki.ps1

1. In File Explorer, navigate to the extracted Grafana Loki folder performed as part of [Make Artefacts Available][].
1. Copy the `loki-windows-amd64.exe` file into the folder that Loki was previously running from, e.g. `C:\Loki`.
1. In File Explorer, navigate to the extracted Grafana Loki Install folder performed as part of [Make Artefacts Available][].
1. Copy the contents of this location into the folder that Loki was previously running from, e.g. `C:\Loki`.
1. Open loki-local-config.yaml in a text editor and compare against the [backed up][] version:

    * The data for Grafana dashboards is defined under schema_config.
    * If there are differences under schema_config, copy the config from the backup and add it directly under configs in schema_config. Ensure the formatting is identical to that which is already found in the file.
    * Update the pre-existing schema_config entry in the new loki-local-config.yaml file to start from todays date.
    * Save the new loki-local-config.yaml file.

1. Run Windows PowerShell as Administrator.
1. Change the directory to the folder where the Loki files have been copied to, e.g. `CD C:\Loki`.
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
    * Locate the Loki service and confirm that it is `Running`.

## Next Steps?

1. [Upgrade Promtail][]

[backed up]: {{< url path="Cortex.Guides.UpgradeObservability.OnPremise.Grafana.BackupOldFiles" >}}
[Grafana Upgrade]: {{< url path="Cortex.Guides.UpgradeObservability.OnPremise.Grafana.UpgradeGrafana" >}}
[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeObservability.OnPremise.Grafana.MakeArtefactsAvailable" >}}
[Upgrade Promtail]: {{< url path="Cortex.Guides.UpgradeObservability.OnPremise.Grafana.UpgradePromtail" >}}
