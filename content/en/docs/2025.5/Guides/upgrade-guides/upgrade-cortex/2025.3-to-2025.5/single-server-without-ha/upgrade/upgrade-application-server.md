---
title: "Upgrade Application Server"
linkTitle: "Upgrade Application Server"
description: "Information about upgrading the Application Server."
weight: 30
---

# {{< param title >}}

This guide describes how to upgrade the Application Server components on the server from 2025.3 to 2025.5. Please ensure that the [Pre-Upgrade][PreUpgrade] steps have been completed before starting this upgrade.

{{% alert title="Warning" color="warning" %}}
The Application Server will be reinstalled as part of the upgrade. As a result packages will need to be republished and Configuration Portal data will need to be backed up and restored. Other data stored in Reliable Collections (e.g., data storage collections and semaphores) will be lost.
{{% /alert %}}

## Configure Upgrade Script

{{< section "/upgrade/2025.5/upgrade-application-server/single-server/configure-upgrade-script.md" >}}

## Run Upgrade Script

{{< section "/upgrade/2025.5/upgrade-application-server/single-server/run-upgrade-script.md" >}}

## Configure {{% ctx %}} Code Analyser

{{< section "/upgrade/upgrade-application-server/configure-code-analyser.md" >}}

### Update Code Analyser Allowed List

{{< section "/upgrade/upgrade-application-server/update-code-analyser.md" >}}

### Disable Code Analyser

On the Application Server:

{{< section "/upgrade/2025.5/upgrade-application-server/single-server/disable-code-analyser.md" >}}

## Check Application Services

{{< section "/upgrade/upgrade-application-server/single-server/check-application-services.md" >}}

## Preserve installation files

{{< section "/preserve-installation-files.md" >}}

## Next Steps?

1. [Upgrade Web Application Server][]

[PreUpgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.3to2025.5.SingleServerWithoutHA.PreUpgrade" >}}
[Upgrade Web Application Server]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.3to2025.5.SingleServerWithoutHA.UpgradeWebApplicationServer" >}}
