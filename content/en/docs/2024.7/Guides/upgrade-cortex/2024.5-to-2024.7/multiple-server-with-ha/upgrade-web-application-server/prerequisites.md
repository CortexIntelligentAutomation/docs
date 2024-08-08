---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "Information about performing the prerequisities for the Upgrade of the Web Application Server."
weight: 10
---

# {{% param title %}}

Please ensure that [Upgrade Application Servers and Load Balancer][] has been completed before starting this installation. These steps assume that the v2024.5 version of Gateway and its prerequisites have already been installed.

## Make Installation Artefacts Available

1. Copy the following artefacts to a folder on the machine:

   * Cortex Innovation 2024.7 - App Services.zip
   * Cortex Innovation 2024.7 - App Server Install Scripts.zip
   * Cortex Innovation 2024.7 - Block Packages.zip
   * Cortex Innovation 2024.7 - Gateway.zip
   * Cortex Innovation 2024.7 - Flows Upgrader.zip
   * Cortex Innovation 2024.7 - Web App Server Install Scripts.zip

1. Extract the `Cortex Innovation 2024.7 - App Server Install Scripts.zip` file to a folder with the same name.
1. Extract the `Cortex Innovation 2024.7 - Flows Upgrader.zip` zip file to a folder with the same name.
1. Extract the `Cortex Innovation 2024.7 - Web App Server Install Scripts.zip` zip file to a folder with the same name.

## Next Steps?

1. [Upgrade Flow Debugger][]

[Upgrade Application Servers and Load Balancer]: {{< url path="Cortex.Guides.UpgradeCortex.2024.5to2024.7.MultipleServerWithHA.UpgradeApplicationAndLoadBalancerServers" >}}
[Upgrade Flow Debugger]: {{< url path="Cortex.Guides.UpgradeCortex.2024.5to2024.7.MultipleServerWithHA.UpgradeDebugger" >}}
