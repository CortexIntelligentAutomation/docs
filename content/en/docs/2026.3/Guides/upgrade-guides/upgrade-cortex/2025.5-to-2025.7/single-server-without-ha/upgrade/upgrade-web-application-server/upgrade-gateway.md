---
title: "Upgrade Gateway"
linkTitle: "Upgrade Gateway"
description: "Information about upgrading {{% ctx %}} Gateway"
weight: 30
---
<!-- Check if Flows need upgrading for this upgrade and remove section if not (Republish is still required due to single server upgrade being a reinstall) -->

# {{% param title %}}

This guide describes how to upgrade {{% ctx %}} Gateway from 2025.5 to 2025.7. Please ensure that the [Upgrade Application Server][] has been completed before starting this upgrade.

## Configure Upgrade Script

{{< section "/upgrade/2025.7/upgrade-web-application-server/configure-gateway-script.md" >}}

## Run Upgrade Script

{{< section "/upgrade/2025.7/upgrade-web-application-server/run-gateway-script.md" >}}

## Upgrade Flows

{{< section "/upgrade/2025.7/upgrade-web-application-server/upgrade-flows.md" >}}

{{% alert title="Note" %}}
Once the flows have been upgraded it is necessary to {{< ahref path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.5to2025.7.SingleServerWithoutHA.RepublishPackages" title="republish all packages" >}} that have previously been published.
{{% /alert %}}

## Republish Packages

{{< section "/upgrade/2025.7/upgrade-web-application-server/republish-packages.md" >}}

## Restore Configuration Portal Data

If using the {{% ctx %}} Configuration Portal, the data will need to be restored.

For further assistance, please raise a case in the [{{% ctx %}} Service Portal][].

## Preserve installation files

{{< section "/preserve-installation-files.md" >}}

## Next Steps?

1. [Upgrade {{% ctx %}} Interaction Portal][Upgrade CIP]

[{{% ctx %}} Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Upgrade CIP]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.5to2025.7.SingleServerWithoutHA.UpgradeCIP" >}}
[Upgrade Application Server]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.5to2025.7.SingleServerWithoutHA.UpgradeApplicationServer" >}}
