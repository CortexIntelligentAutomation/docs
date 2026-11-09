---
title: "Upgrade Application Server"
linkTitle: "Upgrade Application Server"
description: "Information about upgrading the Application Server."
weight: 30
---

# {{< param title >}}

This guide describes how to upgrade the Application Server components on the server from 2025.3.25411 to 2026.9. Please ensure that the [Pre-Upgrade][PreUpgrade] steps have been completed before starting this upgrade.

## Configure Upgrade Script

{{< section "/upgrade/2026.9/upgrade-application-server/single-server/configure-upgrade-script.md" >}}

## Replace Fingerprint Generation

1. Copy `C:\Install\Cortex Innovation 2026.9 - App Server Install Scripts\Fingerprint Generation\Cortex.Licensing.FingerprintGeneration.exe` over the top of `C:\ProgramData\Cortex\Fingerprint Generation\Cortex.Licensing.FingerprintGeneration.exe`.

## Run Upgrade Script

{{< section "/upgrade/2026.9/upgrade-application-server/single-server/run-upgrade-script.md" >}}

## Check Application Services

{{< section "/upgrade/upgrade-application-server/single-server/check-application-services.md" >}}

## Preserve installation files

{{< section "/preserve-installation-files.md" >}}

## Next Steps?

1. [Upgrade Web Application Server][]

[PreUpgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025_3_25411to2026_9.SingleServerWithoutHA.PreUpgrade" >}}
[Upgrade Web Application Server]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025_3_25411to2026_9.SingleServerWithoutHA.UpgradeWebApplicationServer" >}}
