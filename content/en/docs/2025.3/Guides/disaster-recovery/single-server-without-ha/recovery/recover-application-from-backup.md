---
title: "Recover Application Server From Scheduled Backup"
linkTitle: "Recover Application Server From Scheduled Backup"
description: "Instructions to recover the Application Server from scheduled backups."
weight: 40
---

# {{% param title %}}

This guide describes how to recover the Application Server from a backup. This will recover the application's reliable collections. Any recovery needed for the cluster's configuration, the service's appsettings, manifests or settings must be done manually.

### Configure the Recovery Script

{{< section "/disaster-recovery/application-server/recover/configure-recover-script.md">}}

### Run the Recovery Script

{{% alert title="Note" %}}
A backup policy must be configured on the application server before running a recovery, see {{< ahref path="Cortex.Guides.DisasterRecoveryGuides.MultipleServerWithHA.Backup.AddBackupToApplicationServer" title="Add Backup To Application Server" >}} for further information.
{{% /alert %}}

{{< section "/disaster-recovery/application-server/recover/run-recover-script.md">}}

## Preserve Installation Files

{{< section "/disaster-recovery/preserve-scripts.md">}}

## Next Steps?

1. [Recover Web Application Server from Scheduled Backup][]

[Recover Web Application Server from Scheduled Backup]: {{< url path="Cortex.Guides.DisasterRecoveryGuides.SingleServerWithoutHA.Recovery.RecoverWebApplicationServerFromBackup" >}}