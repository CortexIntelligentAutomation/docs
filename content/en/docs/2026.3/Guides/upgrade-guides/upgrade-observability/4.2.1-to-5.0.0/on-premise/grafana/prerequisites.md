---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "The prerequisites required before performing the observability upgrade."
weight: 1
---

# {{% param title %}}

## Verify Old Version

1. Navigate to your Grafana website e.g. `https://machinename.domain.com:3000`
1. Make a note of the version number under the login prompt.
1. Login to Grafana.
1. Open the *Dashboards* page via the menu on the left sidebar.
1. Select the folder that hosts the Cortex Dashboards, e.g. *Cortex*
1. Click the *Flow Execution Requests* dashboard to open it.
1. Change the time period to be *Last 90 days* and confirm data is present.
1. Make a note of values returned in the Overview tiles, or alternatively take a screenshot of the dashboard, to use later to verify the upgrade.

## Make Artefacts Available

1. Download the required artefacts to a folder on your machine:

    * [Grafana 13.0.0][] Standalone Windows Binaries (64 Bit) archive.
    * [Grafana Alloy 1.15.1][] archive.
    * [Grafana Loki 3.7.1][] archive.

1. Extract the downloaded `grafana-enterprise_13.0.0_24445073807_windows_amd64` archive:
    1. Open a Windows Powershell (x64) window as administrator.
    1. Navigate Powershell to inside the folder containing the `grafana-enterprise_13.0.0.2_23531306697_windows_amd64.tar.gz` archive using the following command modifying the path as necessary:

        ``` Powershell
        cd "C:\Install"
        ```

    1. Execute the following command and wait for it to complete:

        ``` Powershell
        tar -xvzf grafana-enterprise_13.0.0_24445073807_windows_amd64.tar.gz
        ```

1. Extract the downloaded `alloy-installer-windows-amd64.exe` archive to a folder with the same name.
1. Extract the downloaded `loki-windows-amd64.exe` archive to a folder with the same name.

## Backup Old Files

1. On the server that Grafana and Loki is installed on, create a folder called `Observability Backups` in a known location.
1. Open File Explorer and navigate to the location that Grafana was previously installed to, typically `%SystemDrive%\Program Files\GrafanaLabs\grafana\conf`.
1. Copy the `custom.ini` file and save it to the `Observability Backups` folder created at step 1.
1. Copy the `defaults.ini` file and save it to the `Observability Backups` folder created at step 1.
1. In File Explorer, navigate to the location that Loki is running from, e.g. `C:\ProgramData\Cortex\Observability\Loki\`.
1. Copy the `loki-local-config.yaml` file and save it to the `Observability Backups` folder created at step 1.
1. On each Application Server that Grafana Alloy is installed on:

    1. Create a folder called `Observability Backups` in a known location.
    1. Open File Explorer and navigate to the location where Grafana Alloy is running from, e.g. `C:\ProgramData\Cortex\Observability\Grafana Alloy`.
    1. Copy the `config.alloy` file and save it to the `Observability Backups` folder created at step 1.

## Next Steps?

1. [Upgrade Grafana][]

[Grafana 13.0.0]: {{< url path="Grafana.SelfManaged.Downloads.GrafanaWebApp.13.0.0.WindowsBinaries" >}}
[Grafana Loki 3.7.1]: {{< url path="Grafana.SelfManaged.Downloads.GrafanaLoki.3_7_1.GrafanaLokiInstallZip" >}}
[Grafana Alloy 1.15.1]:  {{< url path="Grafana.SelfManaged.Downloads.GrafanaAlloy.1_15_1.Windows" >}}
[Upgrade Grafana]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_1to5_0_0.OnPremise.Grafana.UpgradeGrafana" >}}
