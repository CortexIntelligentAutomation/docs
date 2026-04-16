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
1. Change the directory to the folder where Loki is running from, e.g. `cd C:\ProgramData\Cortex\Observability\Loki`.
1. Remove the current Loki installation by executing the following command:

    ``` powershell
        .\Remove-Loki.ps1
    ```

1. Click *Yes* when prompted for confirmation that you wish to remove the service.
1. Click *OK* when the successful removal of the Loki service is confirmed.
1. Open a File Explorer and navigate to the folder where Loki was running from, e.g. `C:\ProgramData\Cortex\Observability\Loki`.
1. Delete the following file from the directory:

    * loki-windows-amd64.exe

1. In File Explorer, navigate to the extracted `loki-windows-amd64.exe` folder created as part of [Make Artefacts Available][].
1. Copy the `loki-windows-amd64.exe` file into the folder that Loki was previously running from, e.g. `C:\ProgramData\Cortex\Observability\Loki`.
1. Run Windows PowerShell as Administrator.
1. Change the directory to the folder where the Loki file has been copied to, e.g. `cd C:\ProgramData\Cortex\Observability\Loki`.
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

1. [Upgrade Grafana Alloy][Upgrade Alloy]

[Grafana Upgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_0to5_0_0.OnPremise.Grafana.UpgradeGrafana" >}}
[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_0to5_0_0.OnPremise.Grafana.MakeArtefactsAvailable" >}}
[Upgrade Alloy]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_0to5_0_0.OnPremise.Grafana.UpgradeAlloy" >}}
