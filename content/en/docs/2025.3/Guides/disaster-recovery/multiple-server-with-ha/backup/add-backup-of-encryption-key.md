---
title: "Add Backup of Encryption Key"
linkTitle: "Add Backup of Encryption Key"
description: "Information about backing up the encryption key."
weight: 30
---

# {{% param title %}}

This guide describes how to configure a scheduled backup of the Encryption Key.

## Configure the Backup Script

{{< section "/disaster-recovery/encryption-key/backup/configure-backup-script.md">}}

## Run the Backup Script

{{< section "/disaster-recovery/encryption-key/backup/run-backup-script.md">}}

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to delete or configure further scheduled backups in the future.

## Next Steps?

[Add Scheduled Backup to Application Server][]

[Add Scheduled Backup to Application Server]: {{< url path="Cortex.Guides.DisasterRecoveryGuides.MultipleServerWithHA.Backup.AddBackupToApplicationServer" >}}