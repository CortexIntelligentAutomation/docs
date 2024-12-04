---
title: "Upgrade Web Application Server"
linkTitle: "Upgrade Web Application Server"
description: "Information about upgrading the Web Application Server from 2024.5 to 2024.7."
weight: 30
---

# {{% param title %}}

This guide describes how to upgrade {{% ctx %}} Gateway from 2024.5 to 2024.7. Please ensure that the [Upgrade Application Server][] has been completed before starting this upgrade.

## Make Installation Artefacts Available

1. Copy the following artefacts to a folder on the server:

   * Cortex Innovation 2024.7 - Gateway.zip
   * Cortex Innovation 2024.7 - Flows Upgrader.zip
   * Cortex Innovation 2024.7 - Web App Server Install Scripts.zip

1. Extract the `Cortex Innovation 2024.7 - Flows Upgrader.zip` zip file to a folder with the same name.
1. Extract the `Cortex Innovation 2024.7 - Web App Server Install Scripts.zip` zip file to a folder with the same name.

## Configure Upgrade Script

{{< section "/upgrade/2024.7/upgrade-web-application-server/configure-gateway-script.md" >}}

## Run Upgrade Script

{{< section "/upgrade/2024.7/upgrade-web-application-server/run-gateway-script.md" >}}

## Upgrade Flows

{{< section "/upgrade/2024.7/upgrade-web-application-server/upgrade-flows.md" >}}

{{% alert title="Note" %}}
If the {{% ctx %}} Interaction Portal is used in your environment, you must also upgrade those flows.
{{% /alert %}}

## Preserve installation files

{{< section "/preserve-installation-files.md" >}}

## Next Steps?

1. [Try It Out][]

[Try It Out]: {{< url path="Cortex.Guides.UpgradeCortex.2024.5to2024.7.SingleServerWithoutHA.TryItOut" >}}
[Upgrade Application Server]: {{< url path="Cortex.Guides.UpgradeCortex.2024.5to2024.7.SingleServerWithoutHA.UpgradeApplicationServer" >}}
