---
title: "Upgrade Gateway"
linkTitle: "Upgrade Gateway"
description: "Information about upgrading {{% ctx %}} Gateway from 2024.7 to 2024.9."
weight: 30
---

# {{% param title %}}

This guide describes how to upgrade {{% ctx %}} Gateway from 2024.7 to 2024.9. Please ensure that the [Flow Debugger upgrade][] has been completed before starting this upgrade.

## Configure Upgrade Script

{{< section "/upgrade/2024.9/upgrade-web-application-server/configure-gateway-script.md" >}}

## Run Upgrade Script

{{< section "/upgrade/2024.9/upgrade-web-application-server/run-gateway-script.md" >}}

## Republish Packages
   {{< alert type="note" title="Note" >}} This only needs to happen for upgrading to this release version as breaking changes were introduced as part of the cleanup of the NServiceBus endpoint and RabbitMQ queues.{{< /alert >}}
1. Log in to Gateway with a user that has the `Admin` role.
1. Click on the `Admin` charm, then `Packages`.
1. In the `Package Definitions` grid, select `Is Published` filter option on the `Is Published` column to show all published packages.
1. For each published package version:
    * Select the package.
    * Click  `Unpublish` at the bottom of the `Definition` tab and click `Unpublish` on the confirmation pop-up dialog. A success message should appear. If it doesn't it means that there is a problem with the configuration in the `web.config` file for {{% ctx %}} Gateway, or the Application Services aren't healthy
    * Click `Create New Version` then click `Save` and wait for the new version to be created.
    * Click `Publish`. A success message should appear. If it doesn't it means that there is a problem with the configuration in the `web.config` file for {{% ctx %}} Gateway, or the Application Services aren't healthy.
    * Sometimes the list of published packages in the `Package Definitions` grid disappears. To fix, set the `Is Published` filter in the `Package Definitions` grid to blank option and then set the filter to `Is Published` option again to show all published packages.

## Delete Old Execution Services
   {{< alert type="note" title="Note" >}} This only needs to happen for upgrading to this release version as breaking changes were introduced as part of the cleanup of the NServiceBus endpoint and RabbitMQ queues.{{< /alert >}}

1. Open a web browser.
1. Navigate to `https://server.domain.com:9080/Explorer`, where `server.domain.com` is the fully qualified domain name of one of the application servers. Replace `9080` with new `httpGatewayEndpointPort` value if it was changed during configuration of the original installation.
1. Expand `Cluster` then `Applications` then `Cortex.Innovation.Execution`.
1. For all old execution applications:
    * Click on the drop down menu and select `Delete Application`. Confirm application deletion by following the on-screen instructions.
    * Give this a few minutes. If the application does not delete:
        * Expand `Nodes`
            * For each node:
                * Expand the node and select the application that matches the engine version number of the application that is being attempted to be deleted.
                * Expand each level up to and including `Code Packages`.
                * Click on the drop down menu for `Code` and select `Restart`. Confirm application restart by following the on-screen instructions.
            * Give this a few minutes. Once all nodes have been restarted the application should be deleted and disappear from the list of applications.

Repeat the above instructions for the  `Flow Debugger`. In step 2 `server.domain.com` is the fully qualified domain name of the web application server.

## Preserve installation files

{{< section "/preserve-installation-files.md" >}}

## Next Steps?

1. [Try It Out][]

[Flow Debugger upgrade]: {{< url path="Cortex.Guides.UpgradeCortex.2024.7to2024.9.MultipleServerWithHA.UpgradeDebugger" >}}
[Try It Out]: {{< url path="Cortex.Guides.UpgradeCortex.2024.7to2024.9.MultipleServerWithHA.TryItOut" >}}
