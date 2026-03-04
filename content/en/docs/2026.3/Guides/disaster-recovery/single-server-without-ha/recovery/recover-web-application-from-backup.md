---
title: "Recover Web Application Server from Scheduled Backup"
linkTitle: "Recover Web Application Server from Scheduled Backup"
description: "Instructions to recover the Web Application Server from scheduled backups."
weight: 50
---

# {{% param title %}}

This guide describes how to recover the Web Application Server from a backup. This will recover the flow repositories and the OpenAPI definitions. Any recovery needed for the web config must be done manually.

### Configure the Recovery Script

{{< section "/disaster-recovery/web-application-server/recover/configure-recover-script.md">}}

### Run the Recovery Script

{{% alert title="Note" %}}
A backup policy should be configured on the web application server before running a recovery, see {{< ahref path="Cortex.Guides.DisasterRecoveryGuides.SingleServerWithoutHA.Backup.AddBackupToWebApplicationServer" title="Add Backup to Web Application Server" >}} for further information.
{{% /alert %}}

{{< section "/disaster-recovery/web-application-server/recover/run-recover-script.md">}}

## Preserve Installation Files

{{< section "/disaster-recovery/preserve-scripts.md">}}