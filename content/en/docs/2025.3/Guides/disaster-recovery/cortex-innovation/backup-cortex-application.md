---
title: "Backup Application Server"
linkTitle: "Backup Application Server"
description: "Information about backing up the application server."
weight: 40
---

# {{% param title %}}

This guide describes how to configure a scheduled backup of the Application Server. This will backup the application's reliable collections, the cluster's configuration and the service's appsettings.

## Make Installation Artefacts Available
{{< section "/disaster-recovery/cortex-innovation/make-installation-artefacts-available.md" >}}

## Configure the Backup Script

1. In the `Cortex Innovation 2025.3 - App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.Backup.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Backup.ps1 `
        -ConfigFileName "Cortex.Application.Backup.Config.json" `
        -AutoRestoreOnDataLoss $false `
        -BackupPolicyName "Customer1.BackupPolicy1" `
        -MaxIncrementalBackups 5 `
        -BackupSchedule "Weekly" `
        -BackupDays @("Monday") `
        -BackupTimes @("00:00:00") `
        -BackupPath "\\UncPath\BackupLocation" `
        -RetentionDuration "24:00:00" `
        -MinimumNumberOfBackups 1 `
        -Credential $Credential
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`BackupPolicyName`                              | Configure this value with the unique name of the backup policy that will be set for the application policy and scheduled Windows task. |
    |`AutoRestoreOnDataLoss`                         | Configure the value as `$true` if you want to trigger restore automatically using the latest available backup in case the partition experiences a data loss event on your current application server.|
    |`MaxIncrementalBackups`                         | Configure this value with the maximum number of incremental backups to be taken between two full backups.<br /><br />This is just the upper limit.<br /><br />A full backup may be taken before specified number of incremental backups are completed in one of the following conditions<br /><br />&nbsp;- The replica has never taken a full backup since it has become primary,<br /><br />&nbsp;- Some of the log records since the last backup has been truncated, or<br /><br />&nbsp;- Replica passed the MaxAccumulatedBackupLogSizeInMB limit.|
    |`BackupSchedule`                                | Configure the value with either `Daily` or `Weekly` depending on when the schedule will run.|
    |`BackupDays`                                    | This is only needed if the `BackupSchedule` is set to `Weekly`. Configure this value with the days of the week when the backup should run.|
    |`BackupTimes`                                   | Configure the value with the times that the back up will run. The format of the value should be in ISO8601 format, date specified along with time will be ignored. |
    |`BackupPath`                                    | Replace `\\UncPath\BackupLocation` with the path of the location the backups will be stored in. if the path is a network path then the `Credentials` will be used to access that location.|
    |`RetentionDuration`                             | Configure this value with the minimum duration for which a backup created, will remain stored in the storage and might get deleted after that span of time. The format of the value should be in ISO8601 format, date specified along with time will be ignored.|
    |`MinimumNumberOfBackups`                        | Configure this value with the minimum number of backups to be retained at any point of time. If specified with a non zero value, backups will not be deleted even if the backups have gone past retention duration and have number of backups less than or equal to it.|
    |`Credential` | The credentials of the user which will be used to access the `BackupPath`. It must be a domain user that is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run.|

1. Save and close `Cortex.Innovation.Backup.ps1`.

## Run the Backup Script

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
1. Wait for the script to finish running. This should take between 2 to 10 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console.

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to remove or configure further scheduled backups in the future.

## Remove Backup

{{% alert title="Note" %}}Follow these instructions to remove a scheduled backup.{{% /alert %}}

#### Configure the Backup Script

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

#### Run the Backup Script

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
