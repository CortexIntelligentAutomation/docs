---
title: "Upgrade Gateway"
linkTitle: "Upgrade Gateway"
description: "Information about upgrading {{% ctx %}} Gateway from 2025.3 to 2025.5."
weight: 30
---

# {{% param title %}}

This guide describes how to upgrade {{% ctx %}} Gateway from 2025.3 to 2025.5. Please ensure that the [Flow Debugger upgrade][] has been completed before starting this upgrade.

## Configure Upgrade Script

{{< section "/upgrade/2025.5/upgrade-web-application-server/configure-gateway-script.md" >}}

## Run Upgrade Script

{{< section "/upgrade/2025.5/upgrade-web-application-server/run-gateway-script.md" >}}

## Preserve installation files

{{< section "/preserve-installation-files.md" >}}

## Next Steps?

1. [Upgrade {{% ctx %}} Interaction Portal][Upgrade CIP]

[{{% ctx %}} Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Flow Debugger upgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.3to2025.5.MultipleServerWithHA.UpgradeDebugger" >}}
[Upgrade CIP]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.3to2025.5.MultipleServerWithHA.UpgradeCIP" >}}
