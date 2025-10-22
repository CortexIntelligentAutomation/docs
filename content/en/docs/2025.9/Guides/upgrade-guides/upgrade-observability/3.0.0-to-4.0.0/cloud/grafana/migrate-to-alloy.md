---
title: "Migrate to Grafana Alloy"
linkTitle: "Migrate to Grafana Alloy"
description: "The steps to Migrate Promtail to Grafana Alloy."
weight: 2
---

# {{% param title %}}

This guide describes how to migrate from a Promtail Installation to Grafana Alloy.

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
1. When prompted to enter the bearer token, leave it blank and press Enter.
1. Once the migration has completed, delete the now obsolete Promtail directory e.g. `C:\ProgramData\Cortex\Observability\Promtail`.

## Configure Grafana Alloy

1. Open the `config.alloy` configuration file, which is located in the folder alongside the `alloy-installer-windows-amd64.exe` file.
1. Delete the line containing `bearer_token_file` in the `loki.write "default"` > `endpoint` section, which can be found at the end of the file.
1. Save the file.
1. Open `services.msc`.
1. Locate the `Alloy` service.
1. Right click on the service name and select `Restart`. If the service is not already running, select `Start`.

## Next Steps?

1. [Try it out][]

[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.Cloud.Grafana.MakeArtefactsAvailable" >}}
[Try it out]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.3.0.0to4.0.0.Cloud.Grafana.TryItOut" >}}
