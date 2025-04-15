---
title: "Recover Application Server From Scheduled Backup"
linkTitle: "Recover Application Server From Scheduled Backup"
description: "Information about recovering the Flow Debugger from a backup."
weight: 40
---

# {{% param title %}}

This guide describes how to recover the Flow Debugger from a backup. This will recovery the application's reliable collections. Any recovery need for the cluster's configuration, the service's appsettings, manifests or settings must be done manually.

### Configure the Recover Script

{{< section "/disaster-recovery/application-server/recover/configure-recover-script.md">}}

### Run the Recover Script

{{% alert title="Note" %}}
A backup policy must be configured on the application server before running a recovery, see {{< ahref path="Cortex.Guides.DisasterRecoveryGuides.MultipleServerWithHA.AddBackupToFlowDebugger" title="Backup Flow Debugger" >}} for further information.
{{% /alert %}}

{{< section "/disaster-recovery/application-server/recover/run-recover-script.md">}}

## Preserve installation files

{{< section "/disaster-recovery/application-server/preserve-scripts.md">}}
