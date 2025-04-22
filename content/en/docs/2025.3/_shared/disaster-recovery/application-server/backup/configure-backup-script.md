1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.Backup.ps1` script and open it with a text editor.
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
    |`BackupTimes`                                   | Configure the value with the times that the backup will run. The format of the value should be in ISO8601 format, date specified along with time will be ignored. |
    |`BackupPath`                                    | Replace `\\UncPath\BackupLocation` with the path of the location the backups will be stored in. if the path is a network path then the `Credentials` will be used to access that location.|
    |`RetentionDuration`                             | Configure this value with the minimum duration for which a backup created, will remain stored in the storage and might get deleted after that span of time. The format of the value should be in ISO8601 format, date specified along with time will be ignored.|
    |`MinimumNumberOfBackups`                        | Configure this value with the minimum number of backups to be retained at any point of time. If specified with a non zero value, backups will not be deleted even if the backups have gone past retention duration and have number of backups less than or equal to it.|
    |`Credential` | The credentials of the user which will be used to access the `BackupPath`. It must be a domain user that is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run.|

1. Save and close `Cortex.Innovation.Backup.ps1`.