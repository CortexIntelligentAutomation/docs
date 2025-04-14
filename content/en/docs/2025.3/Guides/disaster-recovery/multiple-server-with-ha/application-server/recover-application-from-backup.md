---
title: "Recover Application Server From Scheduled Backup"
linkTitle: "Recover Application Server From Scheduled Backup"
description: "Information about recovering the application server."
weight: 40
---

# {{% param title %}}

This guide describes how to recover the Application Server from a backup. This will recovery the application's reliable collections.

### Configure the Recover Script

{{< section "/disaster-recovery/application-server/recover/configure-recover-script.md">}}

### Run the Recover Script

{{% alert title="Note" %}}
A backup policy must be configured on the application server before running a recovery, see {{< ahref path="Cortex.Guides.DisasterRecoveryGuides.MultipleServerWithHA.AddBackupToApplicationServer" title="Add Backup To Application Server" >}} for further information.
{{% /alert %}}

{{< section "/disaster-recovery/application-server/recover/run-recover-script.md">}}

## Preserve installation files

{{< section "/disaster-recovery/application-server/preserve-scripts.md">}}
