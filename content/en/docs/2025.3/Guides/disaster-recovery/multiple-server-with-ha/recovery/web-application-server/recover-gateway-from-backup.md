---
title: "Recover Gateway From Scheduled Backup"
linkTitle: "Recover Gateway From Scheduled Backup"
description: "Instructions to recover Gateway from scheduled backups."
weight: 40
---

# {{% param title %}}

This guide describes how to recover Gateway from a backup. This will recovery the flow repositories and the openApi definitions. Any recovery need for the web config must be done manually.

### Configure the Recover Script

{{< section "/disaster-recovery/web-application-server/recover/configure-recover-script.md">}}

### Run the Recover Script

{{% alert title="Note" %}}
A backup policy should be configured on the application server before running a recovery, see {{< ahref path="Cortex.Guides.DisasterRecoveryGuides.MultipleServerWithHA.Backup.AddBackupToGateway" title="Add Scheduled Backup to Gateway" >}} for further information.
{{% /alert %}}

{{< section "/disaster-recovery/web-application-server/recover/run-recover-script.md">}}

## Preserve Installation Files

{{< section "/disaster-recovery/web-application-server/preserve-scripts.md">}}