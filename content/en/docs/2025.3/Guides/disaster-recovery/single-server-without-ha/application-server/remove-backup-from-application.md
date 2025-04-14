---
title: "Remove Scheduled Backup From Application Server"
linkTitle: "Remove Scheduled Backup From Application Server"
description: "Information about deleting a scheduled backup of the application server."
weight: 50
---

# {{% param title %}}

This guide describes how to delete a scheduled backup of the Application Server. This will not delete the backed up files.

## Configure the Backup Script

1. In the `Cortex Innovation 2025.3 - App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.Backup.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:
    
    ```powershell
    .\Cortex.Backup.ps1 `
        -ConfigFileName "Cortex.Application.Backup.Config.json" `
        -BackupPolicyName "Customer1.BackupPolicy1" `
        -Remove
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`BackupPolicyName`                              | Configure this value with the unique name of the backup policy that has been set for the application policy and scheduled windows task. |
    |`Remove`                                        | Parameter used to indicate that the backup policy should be removed.|

## Run the Backup Script

1. Save and close `Cortex.Innovation.Backup.ps1`.
1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2025.3 - App Server Install Scripts\Recovery` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2025.3 - App Server Install Scripts\Recovery"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Backup.ps1
    ```

1. Run the PowerShell command to backup the application services.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. Wait for the script to finish running. This should take 1 minute.
1. Check that there have been no errors in the script; these would appear in red in the console.

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to delete or configure further scheduled backups in the future.
