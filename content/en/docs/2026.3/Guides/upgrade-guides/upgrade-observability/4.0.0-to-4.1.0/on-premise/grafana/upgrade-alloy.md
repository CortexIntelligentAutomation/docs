---
title: "Upgrade Grafana Alloy"
linkTitle: "Upgrade Grafana Alloy"
description: "The steps to Upgrade Grafana Alloy."
weight: 4
---

# {{% param title %}}

This guide describes how to upgrade Grafana Alloy. Please ensure that the [Prerequisites][] have been completed before starting this upgrade.

## Perform Upgrade

{{% alert title="Note" %}}
These steps will need to be performed on all application servers that host a Grafana Alloy service.
{{% / alert %}}

1. Log in to the application server.
1. Open a File Explorer and navigate to the folder that Grafana Alloy is running from, e.g. `C:\ProgramData\Cortex\Observability\Grafana Alloy`.
1. Open the `config.alloy` configuration file in a text editor.
1. Copy the following code and paste it in to the `config.alloy` file.  It should be added to the end of the file but before the `loki.write "default" {` section typically found on line 99.

    ``` text
    local.file_match "ExecutionService" {
        path_targets = [{
            __address__ = "localhost",
            __path__    = "C:/ProgramData/Cortex/Execution Service/Logs/**/*.json",
            job         = "ExecutionService",
        }]
    }

    loki.process "ExecutionService" {
        forward_to = [loki.write.default.receiver]

        stage.json {
            expressions = {
                level     = "\"@l\"",
                timestamp = "\"@t\"",
            }
        }

        stage.timestamp {
            source = "timestamp"
            format = "RFC3339Nano"
        }

        stage.match {
            selector = "{job=\"ExecutionService\"}|~ \"\\\"SourceContext\\\":.?\\\"Cortex[.]ServiceFabric[.]Service[.]Execution[.]ExecutionService\\\"\""

            stage.json {
                expressions = {
                    BlockName          = "Event.Tags.Cortex.\"Block.Name\" || 'Unknown'",
                    BlockResult        = "Event.Tags.Cortex.\"Block.Result.Status\" || 'Unknown'",
                    ExceptionCategory  = "Event.Tags.Cortex.\"Exception.Category\" || 'N/A'",
                    ExceptionErrorCode = "Event.Tags.Cortex.\"Exception.ErrorCode\" || 'N/A'",
                    ExceptionType      = "Event.Tags.Cortex.\"Exception.Type\" || 'N/A'",
                    FlowName           = "Event.Tags.Cortex.\"Flow.Name\" || 'Unknown'",
                    Node               = "Event.Platform.Node.Name || 'Unknown'",
                    PackageName        = "Event.Tags.Cortex.\"Package.Name\" || 'Unknown'",
                    System             = "Event.Tags.Cortex.\"System.Name\" || 'Unknown'",
                    Tenant             = "Event.Tags.Cortex.\"Tenant.Name\" || 'Unknown'",
                    Type               = "Event.LogType || 'Cortex'",
                }
            }

            stage.labels {
                values = {
                    BlockName          = null,
                    BlockResult        = null,
                    ExceptionCategory  = null,
                    ExceptionErrorCode = null,
                    ExceptionType      = null,
                    FlowName           = null,
                    Node               = null,
                    PackageName        = null,
                    System             = null,
                    Tenant             = null,
                    Type               = null,
                }
            }
        }
    }

    loki.source.file "ExecutionService" {
        targets               = local.file_match.ExecutionService.targets
        forward_to            = [loki.process.ExecutionService.receiver]
    }

    ```
1. Set the `__path__` in the `local.file_match "ExecutionService"` > `path_targets` section to the path of the `Logs` folder for the Execution Service, e.g. `"C:/ProgramData/Cortex/Execution Service/Logs/**/*.json"`.
1. Save the file.
1. Restart the Grafana Alloy Service:
    1. Open `services.msc`.
    1. Locate the `Alloy` service.
    1. Right click on the service name and select `Restart`. If the service is not already running, select `Start`.

## Next Steps?

1. [Try it out][]

[backed up]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4.0.0to4.1.0.OnPremise.Grafana.BackupOldFiles" >}}
[Prerequisites]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4.0.0to4.1.0.OnPremise.Grafana.Prerequisites" >}}
[Try it out]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4.0.0to4.1.0.OnPremise.Grafana.TryItOut" >}}
