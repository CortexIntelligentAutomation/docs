---
title: "Pre-Upgrade"
linkTitle: "Pre-Upgrade"
description: "Information about the steps required to be completed prior to starting the upgrade."
weight: 30
---

# {{% param title %}}

This guide describes how to perform the steps required before starting the upgrade of {{% ctx %}}.

## Make Installation Artefacts Available on all Servers

{{< section "/upgrade/2025.3/pre-upgrade/multi-server/make-artefacts-available.md">}}

## Backup Configuration Portal Data

   {{< alert type="note" title="Note" >}} This only needs to happen for upgrading to this release version as breaking changes were introduced as part of the RabbitMQ upgrade.{{< /alert >}}

If using the {{% ctx %}} Configuration Portal, the data will need to be backed up.

For further assistance, please raise a case in the [{{% ctx %}} Service Portal][].

## Next Steps?

1. [Upgrade][]

[{{% ctx %}} Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Upgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.1to2025.3.MultipleServerWithHA.Upgrade" >}}
