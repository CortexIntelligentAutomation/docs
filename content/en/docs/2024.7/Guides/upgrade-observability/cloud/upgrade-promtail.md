---
title: "Upgrade Promtail"
linkTitle: "Upgrade Promtail"
description: "The steps to upgrade Promtail."
weight: 2
---

# {{% param title %}}

This guide describes how to upgrade the Promtail installation. Please ensure that the [Prerequisites] for upgrading Observability have been completed before starting this upgrade.

## Perform Upgrade

{{% alert title="Note" %}}
These steps will need to be performed on all application servers that host a Promtail service.
{{% / alert %}}

1. Log in to the application server.
1. In file explorer, navigate to the extracted Grafana install folder performed as part of [Make Artefacts Available][].
1. Open PowerShell as Administrator.
1. Change the directory to the Promtail folder by executing the following command:

    ``` powershell
        cd C:\Promtail
    ```

1. Remove the current Promtail installation by executing the following command:

    ``` powershell
        .\Remove-Promtail.ps1
    ```

1. Open a File Explorer and navigate to `C:\Promtail`
1. Delete the following files from the directory:

    * Install-Promtail.ps1
    * nssm.exe
    * Promtail-local-config.yaml
    * Promtail-windows-amd64.exe
    * Remove-Promtail.ps1
    * Start-Promtail.ps1
    * Stop-Promtail.ps1

1. In File Explorer, navigate to the extracted Promtail folder performed as part of [Make Artefacts Available][].
1. Copy the contents of `promtail-windows-amd64.exe` into the `C:\Promtail` directory.
1. In File Explorer, navigate to the extracted Promtail Install folder performed as part of [Make Artefacts Available][].
1. Copy the contents of this location into the `C:\Promtail` directory.
1. Open promtail-local-config.yaml in Notepad++ and compare against the [backed up][] version:

    * Update the filename property to the value found in the [backed up][] version.
    * Update the clients URL property to the value found in the [backed up][] version.
    * Save the new promtail-local-config.yaml file.

1. Open PowerShell as Administrator.
1. Change the directory to the Promtail folder by executing the following command:

    ``` powershell
        cd C:\Promtail
    ```

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
    * Locate the Promtail service and confirm that it is `Running`.

## Next Steps?

1. [Try it out][]

[backed up]: {{< url path="Cortex.Guides.UpgradeObservability.Cloud.BackupOldFiles" >}}
[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeObservability.Cloud.MakeArtefactsAvailable" >}}
[Prerequisites]: {{< url path="Cortex.Guides.UpgradeObservability.Cloud.Prerequisites" >}}
[Try it out]: {{< url path="Cortex.Guides.UpgradeObservability.Cloud.TryItOut" >}}
