---
title: "Configure Grafana Alloy"
linkTitle: "Configure Grafana Alloy"
description: "Information about configuring Grafana Alloy on the Application Server(s)."
weight: 20
---

# {{% param title %}}

This guide describes how to configure Grafana Alloy on the Application Server(s).

{{% alert type="note" title="Note" %}}These steps must be performed for every Grafana Alloy installation in the cluster.{{% /alert %}}

## Configure Grafana Alloy

1. Open the `config.alloy` configuration file, which is located in the folder alongside the `alloy-installer-windows-amd64.exe` file.
1. Set the `__path__` in the `local.file_match "ApiGateway"` > `path_targets` section to the path of the `Logs` folder for the API Gateway Service, e.g. `"C:/ProgramData/Cortex/API Gateway Service/Logs/**/ServiceFabricHttpEventLog-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]{_[0-9][0-9][0-9],}.json"`.
1. Set the `__path__` in the `local.file_match "ExecutionService"` > `path_targets` section to the path of the `Logs` folder for the Execution Service, e.g. `"C:/ProgramData/Cortex/Execution Service/Logs/**/*.json"`.
1. Set the Grafana Loki `url` in the `loki.write "default"` > `endpoint` section, which can be found at the end of the file, with the url value noted down during the [Setup Grafana Loki][] steps.

   A correct URL should be similar to `https://239948:eyJrIjoiaWVjNzE4MmVjOThkNTgxMMQ5MzIyZjdlMjAyYWY4NWJjO1I1OTc4NSIsIm4iOiJUZXN0S2V5IiwiaWQiOjY4Nzk0MX0=@logs-prod-008.grafana.net/api/prom/push`.
1. Delete the line containing `bearer_token_file` in the `loki.write "default"` > `endpoint` section, which can be found at the end of the file.
1. Save the file.

### Re-Start the Grafana Alloy Service

1. Open `services.msc`.
1. Locate the `Alloy` service.
1. Right click on the service name and select `Restart`. If the service is not already running, select `Start`.

## Next Steps?

1. [Import Dashboards][]

[Import Dashboards]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.ImportDashboards.MainDoc" >}}
[Setup Grafana Loki]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupLoki.SetUpGrafanaLoki" >}}
