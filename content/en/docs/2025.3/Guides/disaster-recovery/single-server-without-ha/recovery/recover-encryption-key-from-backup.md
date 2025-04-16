---
title: "Recover Encryption Key From Backup"
linkTitle: "Recover Encryption Key From Backup"
description: "Information about recovering the encryption key."
weight: 40
---

# {{% param title %}}

This guide describes how to recover the Application Server from a backup. This will recovery the application's reliable collections.

### Configure the Recover Script

{{< section "/disaster-recovery/encryption-key/recover/configure-recover-script.md">}}

### Run the Recover Script

{{< section "/disaster-recovery/encryption-key/recover/run-recover-script.md">}}

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to recover the application in the future.

## Next Steps?

[Recover Application Server from Scheduled Backup][]

[Recover Application Server from Scheduled Backup]: {{< url path="Cortex.Guides.DisasterRecoveryGuides.SingleServerWithoutHA.Recovery.RecoverApplicationServerFromBackup" >}}