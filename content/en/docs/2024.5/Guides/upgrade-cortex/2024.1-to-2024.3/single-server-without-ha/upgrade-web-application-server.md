---
title: "Upgrade Web Application Server"
linkTitle: "Upgrade Web Application Server"
description: "Information about upgrading the Web Application Server from 2024.1 to 2024.3."
weight: 30
---

# {{% param title %}}

This guide describes how to upgrade {{% ctx %}} Gateway from 2024.1 to 2024.3. Please ensure that the [Upgrade Application Server][] has been completed before starting this upgrade.

## Make Installation Artefacts Available

1. Copy the following artefacts to a folder on the machine:

   * Cortex Innovation {{< version >}} - Gateway.zip
   * Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip

1. Extract the `Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip` zip file to a folder with the same name.

## Configure Upgrade Script

{{< section "/upgrade/upgrade-web-application-server/configure-gateway-script.md" >}}

## Run Upgrade Script

{{< section "/upgrade/upgrade-web-application-server/run-gateway-script.md" >}}

## Preserve installation files

{{< section "/preserve-installation-files.md" >}}

## Next Steps?

1. [Try It Out][]

[Try It Out]: {{< url path="Cortex.Guides.UpgradeCortex.2024.1to2024.3.SingleServerWithoutHA.TryItOut" >}}
[Upgrade Application Server]: {{< url path="Cortex.Guides.UpgradeCortex.2024.1to2024.3.SingleServerWithoutHA.UpgradeApplicationServer" >}}
