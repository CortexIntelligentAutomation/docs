---
title: "Add Scheduled Backup to Application Server"
linkTitle: "Add Scheduled Backup to Application Server"
description: "Instructions to add scheduled backups to the Application Server."
weight: 40
---

# {{% param title %}}

This guide describes how to configure a scheduled backup of the Application Servers. This will backup the application's reliable collections, the cluster's configuration, the service's appsettings, manifests and settings.

## Configure the Backup Script

{{< section "/disaster-recovery/application-server/backup/configure-backup-script.md">}}

## Run the Backup Script

{{< section "/disaster-recovery/application-server/backup/run-backup-script.md">}}

## Preserve Installation Files

{{< section "/disaster-recovery/preserve-scripts.md">}}

## Next Steps?

1. [Add Scheduled Backups to Web Application Server][]

[Add Scheduled Backups to Web Application Server]: {{< url path="Cortex.Guides.DisasterRecoveryGuides.MultipleServerWithHA.Backup.AddBackupsToWebApplicationServer" >}}