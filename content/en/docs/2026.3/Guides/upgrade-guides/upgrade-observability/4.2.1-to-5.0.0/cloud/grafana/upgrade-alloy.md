---
title: "Upgrade Grafana Alloy"
linkTitle: "Upgrade Grafana Alloy"
description: "The steps to Upgrade Grafana Alloy."
weight: 2
---

# {{% param title %}}

This guide describes how to upgrade Grafana Alloy.

{{% alert title="Note" %}}
These steps will need to be performed on all application servers that host a Grafana Alloy service.
{{% / alert %}}

## Perform Upgrade

1. Log in to the application server.
1. Open a File Explorer and navigate to the extracted alloy-installer-windows-amd64.exe folder created as part of [Make Artefacts Available][].
1. Copy the `alloy-installer-windows-amd64.exe` into the location that Grafana Alloy was previously installed from, e.g. `C:\ProgramData\Cortex\Observability\Grafana Alloy`, overwriting the existing file if prompted to do so.
1. Execute the `alloy-installer-windows-amd64.exe` by double clicking on the file.
1. Follow the install wizard accepting the defaults and wait for the installation to complete.
1. Click `Close` to finish the installation.

## Configure Grafana Alloy

1. Open the `config.alloy` configuration file, which is located in the folder alongside the `alloy-installer-windows-amd64.exe` file.
1. Locate the line containing `__path__` in the `loki.file_match "ApiGateway"` > `path_targets` section, which can be found near the beginning of the file.
1. Change the `__path__` value so that the part containing the file name changes to `ServiceFabricHttpEventLog-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]{,_[0-9][0-9][0-9]}.json`. Note there is a change to the `,` location.

    The line should now look similar to `__path__    = "C:/ProgramData/Cortex/API Gateway Service/Logs/**/ServiceFabricHttpEventLog-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]{,_[0-9][0-9][0-9]}.json",`
1. Copy the following code and paste it in to the `config.alloy` file. It should be added to the end of the `expressions` section but before the `}` typically found on line 139.

    ``` text
                    FlowResult         = "Event.Tags.Cortex.\"Execution.Result.Status\" || 'N/A'",
                    Method             = "'Unknown'",
    ```

1. Copy the following code and paste it in to the `config.alloy` file. It should be added to the end of the `values` section but before the `}` typically found on line 157 after the above change.

    ``` text
                    FlowResult         = null,
                    Method             = null,
    ```

1. Copy the following code and paste it in to the `config.alloy` file. It should be added to the end of the `loki.process "ExecutionService" {` section but before the `}` typically found on line 162 after the above change.

    ``` text

        stage.match {
            selector = "{job=\"ExecutionService\"}|~ \"\\\"Method\\\":.?\\\"Cortex.FlowEngine.Execution.Engine.Run\\\"\""

            stage.json {
                expressions = {
                    Method             = "'FlowExecution'",
                }
            }

            stage.labels {
                values = {
                    Method             = null,
                }
            }
        }
    ```

1. Save the file.

### Restart the Service

1. Open `services.msc`.
1. Locate the `Alloy` service.
1. Right click on the service name and select `Restart`. If the service is not already running, select `Start`.

## Next Steps?

1. [Upgrade Dashboards][]

[Make Artefacts Available]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_1to5_0_0.Cloud.Grafana.MakeArtefactsAvailable" >}}
[Upgrade Dashboards]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4_2_1to5_0_0.Cloud.Grafana.UpgradeDashboards" >}}
