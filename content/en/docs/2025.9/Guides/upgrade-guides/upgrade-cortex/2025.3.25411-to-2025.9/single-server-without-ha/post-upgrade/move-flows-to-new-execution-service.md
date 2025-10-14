---
title: "Move flows to new Execution Service"
linkTitle: "Move flows to new Execution Service"
description: "Information about moving flows to use the new Execution Service after upgrade."
weight: 20
---

# {{% param title %}}

This guide describes how to move flow execution to the new Execution Service. Please ensure that the [Try it out][] steps have been completed before proceeding.

{{% alert title="Warning" color="warning" %}}
These steps must be carried out as the old Execution Service has been removed following upgrade.
{{% /alert %}}

## Upgrade Flows

{{< section "/upgrade/2025.9/upgrade-web-application-server/upgrade-flows.md" >}}

{{% alert title="Note" %}}
Once the flows have been upgraded it is necessary to {{< ahref path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.3.25411to2025.9.SingleServerWithoutHA.RepublishPackages" title="republish all packages" >}} that have previously been published.
{{% /alert %}}

## Republish Packages

{{< section "/upgrade/2025.9/upgrade-web-application-server/republish-packages.md" >}}

[Try it out]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.3.25411to2025.9.SingleServerWithoutHA.TryItOut" >}}
