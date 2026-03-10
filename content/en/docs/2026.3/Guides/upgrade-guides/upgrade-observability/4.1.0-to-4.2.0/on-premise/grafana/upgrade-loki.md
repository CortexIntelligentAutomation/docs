---
title: "Upgrade Grafana Loki"
linkTitle: "Upgrade Grafana Loki"
description: "The steps to Upgrade Grafana Loki."
weight: 4
---

# {{% param title %}}

This guide describes how to upgrade Grafana Loki. Please ensure that the [Prerequisites][] have been completed before starting this upgrade.

## Perform Upgrade

On the server that Grafana Loki is installed on:

1. Log in to the server.
1. Open a File Explorer and navigate to the folder that Grafana Loki is running from, e.g. `C:\ProgramData\Cortex\Observability\Loki`.
1. Open the `loki-local-config.yaml` configuration file in a text editor.
1. Copy the following code and paste it in to the `loki-local-config.yaml` file.  It should be added immediately before the `schema_config:` section typically found on line 30.

    ``` text
    compactor:
      retention_enabled: true
      delete_request_store: filesystem
      working_directory: /data/retention

    ```

1. Copy the following code and paste it in to the `loki-local-config.yaml` file.  It should be added to the end of the `limits_config:` section typically found on line 55 after the addition of the code in the previous step.

    ``` text
      retention_period: 8760h
    ```

1. If a different retention period to the default of 12 months (8760 hours) is required, change the value ensuring that only the required retention is configured.
1. Save the file.
1. Restart the Grafana Loki Service:
    1. Open `services.msc`.
    1. Locate the `Loki` service.
    1. Right click on the service name and select `Restart`. If the service is not already running, select `Start`.

## Next Steps?

1. [Try it out][]

[backed up]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4.1.0to4.2.0.OnPremise.Grafana.BackupOldFiles" >}}
[Prerequisites]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4.1.0to4.2.0.OnPremise.Grafana.Prerequisites" >}}
[Try it out]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeObservability.4.1.0to4.2.0.OnPremise.Grafana.TryItOut" >}}
