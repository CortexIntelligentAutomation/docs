---
title: "Add Scheduled Backup to Flow Debugger"
linkTitle: "Add Scheduled Backup to Flow Debugger"
description: "Instructions to add scheduled backups to the Flow Debugger."
weight: 30
---

# {{% param title %}}

This guide describes how to configure a scheduled backup of the Flow Debugger on the Web Application Server. This will backup the application's reliable collections, the cluster's configuration and the service's appsettings.

## Configure the Backup Script

{{< section "/disaster-recovery/application-server/backup/configure-backup-script.md">}}

## Run the Backup Script

{{< section "/disaster-recovery/application-server/backup/run-backup-script.md">}}

## Preserve Installation Files

{{< section "/disaster-recovery/preserve-scripts.md">}}

## Next Steps?

1. [Add Scheduled Backup to Gateway][]

[Add Scheduled Backup to Gateway]: {{< url path="Cortex.Guides.DisasterRecoveryGuides.MultipleServerWithHA.Backup.AddBackupToGateway" >}}