---
title: "Add Scheduled Backup To Application Server"
linkTitle: "Add Scheduled Backup To Application Server"
description: "Instructions to add scheduled backups to the Application Server."
weight: 40
---

# {{% param title %}}

This guide describes how to configure a scheduled backup of the Application Server. This will backup the application's reliable collections, the cluster's configuration, the service's appsettings, manifests and settings.

## Configure the Backup Script

{{< section "/disaster-recovery/application-server/backup/configure-backup-script.md">}}

## Run the Backup Script

{{< section "/disaster-recovery/application-server/backup/run-backup-script.md">}}

## Preserve installation files

{{< section "/disaster-recovery/application-server/preserve-scripts.md">}}

## Next Steps?

[Add Scheduled Backups to Web Application Server][]

[Add Scheduled Backups to Web Application Server]: {{< url path="Cortex.Guides.DisasterRecoveryGuides.MultipleServerWithHA.Backup.AddBackupsToWebApplicationServer" >}}