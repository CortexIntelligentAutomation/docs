---
title: "Recover Flow Debugger from Scheduled Backup"
linkTitle: "Recover Flow Debugger from Scheduled Backup"
description: "Instructions to recover the Flow Debugger from scheduled backups."
weight: 30
---

# {{% param title %}}

This guide describes how to recover the Flow Debugger from a backup. This will recover the application's reliable collections. Any recovery needed for the cluster's configuration, the service's appsettings, manifests or settings must be done manually.

### Configure the Recovery Script

{{< section "/disaster-recovery/application-server/recover/configure-recover-script.md">}}

### Run the Recovery Script

{{% alert title="Warning" color="warning" %}}
A backup policy must be configured on the Application Server before running a recovery, see {{< ahref path="Cortex.Guides.DisasterRecoveryGuides.MultipleServerWithHA.Backup.AddBackupToFlowDebugger" title="Add Scheduled Backup to Flow Debugger" >}} for further information.
{{% /alert %}}

{{< section "/disaster-recovery/application-server/recover/run-recover-script.md">}}

## Preserve Installation Files

{{< section "/disaster-recovery/preserve-scripts.md">}}

## Next Steps?

1. [Recover Gateway from Scheduled Backup][]

[Recover Gateway from Scheduled Backup]: {{< url path="Cortex.Guides.DisasterRecoveryGuides.MultipleServerWithHA.Recovery.RecoverGatewayFromBackup" >}}