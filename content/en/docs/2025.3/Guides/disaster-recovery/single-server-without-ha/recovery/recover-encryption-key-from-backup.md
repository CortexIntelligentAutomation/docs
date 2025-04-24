---
title: "Recover Encryption Key from Backup"
linkTitle: "Recover Encryption Key from Backup"
description: "Instructions to recover the Encryption Key from backups."
weight: 30
---

# {{% param title %}}

This guide describes how to recover the Encryption Key from a backup. This will recover the Encryption key to the web application server.

{{% alert title="Warning" color="warning" %}}
The Encryption Key must be recovered before any installation of {{% ctx %}}.
{{% /alert %}}

### Configure the Recovery Script
1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.EncryptionKey.Recover.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.EncryptionKey.Recover.ps1 `
        -TargetMachines @("web-server") `
        -BackupPath "\\UncPath\BackupLocation" `
        -Credential $Credential
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`TargetMachines`                                | Configure the value with the name of the web application server.|
    |`BackupPath`                                    | Replace `\\UncPath\BackupLocation` with the path of the location the backups are stored in. If the path is a network path then the `Credentials` will be used to access that location.|
    |`Credential`                                    | The credentials of the user which will be used to access the `BackupPath`. It must be a domain user that is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run.|

1. Save and close `Cortex.Innovation.EncryptionKey.Recover.ps1`.

### Run the Recovery Script

{{< section "/disaster-recovery/encryption-key/recover/run-recover-script.md">}}

## Preserve Installation Files

{{< section "/disaster-recovery/encryption-key/preserve-installation-files.md">}}

## Next Steps?

1. [Recover Application Server from Scheduled Backup][]

[Recover Application Server from Scheduled Backup]: {{< url path="Cortex.Guides.DisasterRecoveryGuides.SingleServerWithoutHA.Recovery.RecoverApplicationServerFromBackup" >}}