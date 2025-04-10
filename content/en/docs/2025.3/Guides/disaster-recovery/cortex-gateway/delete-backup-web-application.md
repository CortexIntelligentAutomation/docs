---
title: "Delete Backup of Web Application Server"
linkTitle: "Delete Backup of Web Application Server"
description: "Information about backing up the web application server."
weight: 40
---

# {{% param title %}}

This guide describes how to delete a scheduled backup of the Web Application Server. This will not delete the backed up files.

## Make Installation Artefacts Available
{{< section "/disaster-recovery/cortex-gateway/make-installation-artefacts-available.md" >}}

## Configure the Backup Script

1. In the `Cortex Innovation 2025.3 - Web App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.Gateway.Backup.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:
    
    ```powershell
    .\Cortex.Gateway.Backup.ps1 `
        -ConfigFileName "Cortex.Application.Backup.Config.json" `
        -BackupTaskName "Customer1.BackupPolicy1" `
        -Remove
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`BackupTaskName`                                | Configure this value with the unique name of the backup task that has set for the scheduled Windows task. |
    |`Remove`                                        | Parameter used to indicate that the backup task should be removed.|

1. Save and close `Cortex.Innovation.Gateway.Backup.ps1`.

## Run the Backup Script

1. Save and close `Cortex.Innovation.Gateway.Backup.ps1`.
1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2025.3 - Web App Server Install Scripts\Recovery` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2025.3 - Web App Server Install Scripts\Recovery"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Gateway.Backup.ps1
    ```

1. Run the PowerShell command to backup the application services.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. Wait for the script to finish running. This should take 1 minute.
1. Check that there have been no errors in the script; these would appear in red in the console.

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to delete or configure further scheduled backups in the future.
