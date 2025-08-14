---
title: "Upgrade Gateway"
linkTitle: "Upgrade Gateway"
description: "Information about upgrading {{% ctx %}} Gateway from 2025.5 to 2025.7."
weight: 30
---
<!-- Check if Flows need upgrading and Packages need re-publishing for this upgrade and remove sections if not -->

# {{% param title %}}

This guide describes how to upgrade {{% ctx %}} Gateway from 2025.5 to 2025.7. Please ensure that the [Flow Debugger upgrade][] has been completed before starting this upgrade.

## Configure Upgrade Script

{{< section "/upgrade/2025.7/upgrade-web-application-server/configure-gateway-script.md" >}}

## Run Upgrade Script

{{< section "/upgrade/2025.7/upgrade-web-application-server/run-gateway-script.md" >}}

## Upgrade Flows

{{< section "/upgrade/2025.7/upgrade-web-application-server/upgrade-flows.md" >}}

{{% alert title="Note" %}}
Once the flows have been upgraded it is necessary to {{< ahref path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.5to2025.7.MultipleServerWithHA.RepublishPackages" title="republish all packages" >}} that have previously been published.
{{% /alert %}}

## Republish Packages

{{< section "/upgrade/2025.7/upgrade-web-application-server/republish-packages.md" >}}

## Preserve installation files

{{< section "/preserve-installation-files.md" >}}

## Next Steps?

1. [Upgrade {{% ctx %}} Interaction Portal][Upgrade CIP]

[{{% ctx %}} Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Flow Debugger upgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.5to2025.7.MultipleServerWithHA.UpgradeDebugger" >}}
[Upgrade CIP]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.5to2025.7.MultipleServerWithHA.UpgradeCIP" >}}
