---
title: "Upgrade Flow Debugger"
linkTitle: "Upgrade Flow Debugger"
description: "Information about upgrading the Flow Debugger."
weight: 30
---

# {{< param title >}}

This guide describes how to upgrade the Flow Debugger on the Web Application Server from 2025.3 to 2025.5. Please ensure that the [Upgrade Application and Load Balancer Servers][] has been completed before starting this upgrade.

## Configure Upgrade Script

{{< section "/upgrade/2025.5/upgrade-application-server/single-server/configure-upgrade-script.md" >}}

## Run Upgrade Script

{{< section "/upgrade/2025.5/upgrade-application-server/single-server/run-upgrade-script.md">}}

## Check Application Services

{{< section "/upgrade/upgrade-application-server/single-server/check-application-services.md">}}

## Disable Whitelist Analyser

   {{< alert type="note" title="Note" >}} This release introduces a Whitelist Analyser to prevent unauthorised execution of namespaces. This step only needs to happen if the Whitelist Analyser should be disabled and has also been disabled on on the Application Servers.{{< /alert >}}

On the Web Application Server:

1. Open a File Explorer.
1. Navigate to `%ProgramData%\SF\<CustomerName>.<NodeName>\Fabric\work\Applications\Cortex.Innovation.Execution_App1\ExecutionPkg.Code.*` replacing `<CustomerName>` with the Customer Name and `<NodeName>` with the NETBIOS name of the Web Application Server configured during installation.
    {{% alert title="Note" %}}
To check the values to be used open the `Cortex.Upgrade.ApplicationConfig.json` file located in `%ProgramData%\Cortex\Upgrade`.
    {{% /alert %}}
1. Open the `appsettings.json` file in a text editor.
1. Locate the `"FeatureFlags"` line located under `"ExecutionEngine"` and set the value to `["f4fd94c0-a921-4b34-b82c-378b05e91555"]`.
1. Save and close the file.
1. In the File Explorer, navigate to `%ProgramData%\SF\<CustomerName>.<NodeName>\Fabric\work\ImageCache\Store\Cortex.Innovation.Execution\ExecutionPkg.Code.*` replacing `<CustomerName>` with the Customer Name and `<NodeName>` with the NETBIOS name of the Web Application Server specified in step 2.
1. Repeat steps 3 - 5.
1. Open a web browser.
1. Navigate to `https://server.domain.com:9080/Explorer`, where `server.domain.com` is the fully qualified domain name of the Web Application Server. Replace `9080` with new `httpGatewayEndpointPort` value if it was changed during configuration of the original installation.
1. Expand `Cluster` then `Nodes`.
1. Restart the node by clicking on the drop down menu next to the node name and select `Restart`. Confirm node restart by following the on-screen instructions.

Once the node has been updated and restarted, it will be necessary to [re-check the Application Services][Check Application Services] to ensure that the node has re-started correctly.

## Preserve installation files

{{< section "/preserve-installation-files.md">}}

## Next Steps?

1. [Upgrade Gateway][]

[Check Application Services]: {{< ref "#check-application-services">}}
[Upgrade Application and Load Balancer Servers]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.3to2025.5.MultipleServerWithHA.UpgradeApplicationAndLoadBalancerServers" >}}
[Upgrade Gateway]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.3to2025.5.MultipleServerWithHA.UpgradeGateway" >}}
