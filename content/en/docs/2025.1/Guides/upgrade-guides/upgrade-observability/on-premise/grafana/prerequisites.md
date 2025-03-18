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

    * [Grafana 10.4.1][] Standalone Windows Binaries archive.
    * [Grafana Loki 3.0.0][] archive.
    * [Grafana Loki Install][] archive.
    * [Promtail 3.0.0][] archive.
    * [Promtail Install][] archive.

1. Extract the downloaded `grafana-enterprise-10.4.1.windows-amd64` archive to a folder with the same name.
1. Extract the downloaded `loki-windows-amd64.exe` archive to a folder with the same name.
1. Extract the downloaded `Grafana.Loki.Install` archive to a folder with the same name.
1. Extract the downloaded `promtail-windows-amd64.exe` archive to a folder with the same name.
1. Extract the downloaded `Promtail.Install` archive to a folder with the same name.

## Backup Old Files

1. On the server that Grafana and Loki is installed on, create a folder called `Observability Backups` in a known location.
1. Open File Explorer and navigate to the location that Grafana was previously installed to, typically `%SystemDrive%\Program Files\GrafanaLabs\grafana\conf`.
1. Copy the `custom.ini` file and save it to the `Observability Backups` folder created at step 1.
1. Copy the `defaults.ini` file and save it to the `Observability Backups` folder created at step 1.
1. In File Explorer, navigate to the location that Loki is running from, e.g. `C:\Loki\`.
1. Copy the `loki-local-config.yaml` file and save it to the `Observability Backups` folder created at step 1.
1. On each Application Server that Promtail is installed on:

    1. Create a folder called `Observability Backups` in a known location.
    1. Open File Explorer and navigate to the location that Promtail is running from, e.g. `C:\Promtail`.
    1. Copy the `promtail-local-config.yaml` file and save it to the `Observability Backups` folder created at step 7.1.

## Next Steps?

1. [Upgrade Grafana][]

[Grafana 10.4.1]: {{< url path="Grafana.SelfManaged.Downloads.GrafanaWebApp.10.4.1.Windows" >}}
[Grafana Loki 3.0.0]: {{< url path="Grafana.SelfManaged.Downloads.GrafanaLoki.3.0.0.GrafanaLokiInstallZip" >}}
[Grafana Loki Install]: {{< url path="GitHub.Cortex.Observability.3.0.0.GrafanaLokiInstallZip" >}}
[Promtail 3.0.0]:  {{< url path="Grafana.SelfManaged.Downloads.Promtail.3.0.0.PromtailInstallZip" >}}
[Promtail Install]: {{< url path="GitHub.Cortex.Observability.3.0.0.PromtailInstallZip" >}}
[Upgrade Grafana]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.OnPremise.Grafana.UpgradeGrafana" >}}
