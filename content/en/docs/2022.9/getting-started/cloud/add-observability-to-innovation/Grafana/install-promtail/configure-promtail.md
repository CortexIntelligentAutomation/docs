---
title: "Configure Promtail"
linkTitle: "Configure Promtail"
description: "Information about configuring Promtail on the Application Server(s)."
weight: 20
---

# {{% param title %}}

This guide describes how to configure Promtail on the Application Server(s).

{{% alert type="note" title="Note" %}}These steps must be performed for every Promtail installation in the cluster.{{% /alert %}}

## Configure Promtail

### Set Client URL for Grafana Loki

1. Open the `promtail-local-config.yaml` configuration file, which is located in the folder alongside the `promtail-windows-amd64.exe` file.
1. Replace the Grafana Loki `URL` template in the `clients` section with the `url` value noted down during [Set Up Grafana Loki][] steps.
   A correct URL should be similar to `https://239948:eyJrIjoiaWVjNzE4MmVjOThkNTgxMMQ5MzIyZjdlMjAyYWY4NWJjO1I1OTc4NSIsIm4iOiJUZXN0S2V5IiwiaWQiOjY4Nzk0MX0=@logs-prod-008.grafana.net/api/prom/push`.
1. Save the file.

### Set the positions.yaml File Path

1. Open the `promtail-local-config.yaml` configuration file, which is located in the folder alongside the `promtail-windows-amd64.exe` file.
1. Set the `filename` in the `positions` section to the location where you want the `positions.yaml` file to be created on Promtail startup.
1. Create all the folders of the path specified in the previous step.
1. Save the file.

{{% alert title="Note" %}}
If the specified path to the folder for the `positions.yaml` file doesn't exists, the file will not get created on Promtail startup.
{{% /alert %}}

### Set the Path to the {{% ctx %}} API Gateway Service Log Files

1. Open the `promtail-local-config.yaml` configuration file, which is located in the folder alongside the `promtail-windows-amd64.exe` file.
1. Set the `__path__` in the `static_configs` > `targets` > `labels` section to the path of the `Logs` folder specified in the `appSettings.json` file during installation of the {{% ctx %}} API Gateway Service, e.g. `"C:/ProgramData/Cortex/Cortex API Gateway Service/Logs/*.json"`.
1. Save the file.

### Start Promtail

1. Run Windows PowerShell as Administrator.
1. Change the location to the folder where the `promtail-windows-amd64.exe` file is located.
1. Execute the `.\Start-Promtail.ps1` command to start the Promtail Windows service.

## Next Steps?

1. [Import Dashboards][]

[Import Dashboards]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.ImportDashboards.MainDoc" >}}
[Set Up Grafana Loki]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupLoki.SetUpGrafanaLoki" >}}
