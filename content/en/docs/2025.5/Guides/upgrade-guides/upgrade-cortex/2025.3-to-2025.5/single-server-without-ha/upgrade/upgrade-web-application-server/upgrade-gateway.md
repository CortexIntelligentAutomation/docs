---
title: "Upgrade Gateway"
linkTitle: "Upgrade Gateway"
description: "Information about upgrading {{% ctx %}} Gateway"
weight: 30
---

# {{% param title %}}

This guide describes how to upgrade {{% ctx %}} Gateway from 2025.3 to 2025.5. Please ensure that the [Upgrade Application Server][] has been completed before starting this upgrade.

## Configure Upgrade Script

{{< section "/upgrade/2025.5/upgrade-web-application-server/configure-gateway-script.md" >}}

## Run Upgrade Script

{{< section "/upgrade/2025.5/upgrade-web-application-server/run-gateway-script.md" >}}

## Republish Packages

1. Log in to Gateway with a user that has the `Admin` role.
1. Click on the `Admin` charm, then `Packages`.
1. In the `Package Definitions` grid, select `Is Published` filter option on the `Is Published` column to show all published packages.
1. For each published package version:
    * Select the package.
    * Click  `Unpublish` at the bottom of the `Definition` tab and click `Unpublish` on the confirmation pop-up dialog. A success message should appear. If it doesn't it means that there is a problem with the configuration in the `web.config` file for {{% ctx %}} Gateway, or the Application Services aren't healthy
    * Click `Create New Version` then click `Save` and wait for the new version to be created.
    * Click `Publish`. A success message should appear. If it doesn't it means that there is a problem with the configuration in the `web.config` file for {{% ctx %}} Gateway, or the Application Services aren't healthy.
    * Sometimes the list of published packages in the `Package Definitions` grid disappears. To fix, set the `Is Published` filter in the `Package Definitions` grid to blank option and then set the filter to `Is Published` option again to show all published packages.

## Restore Configuration Portal Data

If using the {{% ctx %}} Configuration Portal, the data will need to be restored.

For further assistance, please raise a case in the [{{% ctx %}} Service Portal][].

## Preserve installation files

{{< section "/preserve-installation-files.md" >}}

## Next Steps?

1. [Upgrade {{% ctx %}} Interaction Portal][Upgrade CIP]

[{{% ctx %}} Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Upgrade CIP]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.3to2025.5.SingleServerWithoutHA.UpgradeCIP" >}}
[Upgrade Application Server]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.3to2025.5.SingleServerWithoutHA.UpgradeApplicationServer" >}}
