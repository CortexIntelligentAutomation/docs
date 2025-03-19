---
title: "Upgrade Flow Debugger"
linkTitle: "Upgrade Flow Debugger"
description: "Information about upgrading the Flow Debugger."
weight: 30
---

# {{< param title >}}

This guide describes how to upgrade the Flow Debugger on the Web Application Server from 2024.11 to 2025.1. Please ensure that the [Upgrade Application and Load Balancer Servers][] has been completed before starting this upgrade.

## Configure Upgrade Script

{{< section "/upgrade/2025.1/upgrade-application-server/single-server/configure-upgrade-script.md" >}}

## Run Upgrade Script

{{< section "/upgrade/2025.1/upgrade-application-server/single-server/run-upgrade-script.md">}}

## Check Application Services

{{< section "/upgrade/upgrade-application-server/single-server/check-application-services.md">}}

## Preserve installation files

{{< section "/preserve-installation-files.md">}}

## Next Steps?

1. [Upgrade Gateway][]

[Upgrade Application and Load Balancer Servers]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2024.11to2025.1.MultipleServerWithHA.UpgradeApplicationAndLoadBalancerServers" >}}
[Upgrade Gateway]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2024.11to2025.1.MultipleServerWithHA.UpgradeGateway" >}}
