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

## Backup Config Store Data

If using the {{% ctx %}} Config Store, the data will need to be backed up.

For further assistance, please raise a case in the [{{% ctx %}} Service Portal][].

## Next Steps?

1. [Upgrade][]

[{{% ctx %}} Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Upgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.1to2025.3.MultipleServerWithHA.Upgrade" >}}
