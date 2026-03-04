---
title: "Upgrade Promtail"
linkTitle: "Upgrade Promtail"
description: "The steps to upgrade Promtail."
weight: 4
---

# {{% param title %}}

This guide describes how to upgrade the Promtail installation. Please ensure that the [Loki Upgrade][] has been completed before starting this upgrade.

## Perform Upgrade

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
1. Open a File Explorer and navigate to the folder where Promtail was running from, e.g. `C:\ProgramData\Cortex\Observability\Promtail`
1. Delete the following files from the directory:

    * Install-Promtail.ps1
    * nssm.exe
    * Promtail-local-config.yaml
    * Promtail-windows-amd64.exe
    * Remove-Promtail.ps1
    * Start-Promtail.ps1
    * Stop-Promtail.ps1

1. In File Explorer, navigate to the extracted `promtail-windows-amd64.exe` folder created as part of [Make Artefacts Available][].
1. Copy the `promtail-windows-amd64.exe` file into the folder that Promtail was previously running from, e.g. `C:\ProgramData\Cortex\Observability\Promtail`.
1. In File Explorer, navigate to the extracted `Promtail.Install` folder created as part of [Make Artefacts Available][].
1. Copy the contents of this location into the folder that Promtail was previously running from, e.g. `C:\ProgramData\Cortex\Observability\Promtail`.
1. Open the new `promtail-local-config.yaml` in a text editor:

    * Update the *filename* property under *positions* to be the value found in the [backed up][] version.
    * Update the *url* property under *clients* to be the value found in the [backed up][] version.
    * Save the new `promtail-local-config.yaml` file.

1. Run Windows PowerShell as Administrator.
1. Change the directory to the folder where the Promtail files have been copied to, e.g. `cd C:\ProgramData\Cortex\Observability\Promtail`.
1. Install Promtail by executing the following command:

    ``` powershell
        .\Install-Promtail.ps1
    ```

1. Start the Promtail service by executing the following command:

    ``` powershell
        .\Start-Promtail.ps1
    ```

1. Check that the Promtail service has installed and started correctly:
    * Open Services.msc from the Start menu.
    * Locate the *Promtail* service and confirm that it is *Running*.

## Next Steps?

1. [Try it out][]

[backed up]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.2.2.0to3.0.0.OnPremise.Grafana.BackupOldFiles" >}}
[Loki Upgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.2.2.0to3.0.0.OnPremise.Grafana.UpgradeLoki" >}}
[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.2.2.0to3.0.0.OnPremise.Grafana.MakeArtefactsAvailable" >}}
[Try it out]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.2.2.0to3.0.0.OnPremise.Grafana.TryItOut" >}}
