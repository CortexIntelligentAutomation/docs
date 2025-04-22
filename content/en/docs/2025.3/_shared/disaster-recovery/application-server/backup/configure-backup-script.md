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
    | `BackupPolicyName`                             | Configure this value with the unique name of the backup policy that will be set for the application policy and the scheduled Windows task. |
    | `AutoRestoreOnDataLoss`                        | Configure this value as `$true` if you want to trigger a restore automatically using the latest available backup in case the partition experiences a data loss event on your current application server. |
    | `MaxIncrementalBackups`                        | Configure this value with the maximum number of incremental backups to be taken between two full backups.<br /><br />This is just the upper limit.<br /><br />A full backup may be taken before the specified number of incremental backups are completed in one of the following conditions:<br /><br />&nbsp; - The replica has never taken a full backup since it became primary,<br /><br />&nbsp; - Some of the log records since the last backup have been truncated, or<br /><br />&nbsp; - The replica passed the `MaxAccumulatedBackupLogSizeInMB` limit. |
    | `BackupSchedule`                               | Configure this value with either `Daily` or `Weekly`, depending on when the schedule will run. |
    | `BackupDays`                                   | This is only needed if the `BackupSchedule` is set to `Weekly`. Configure this value with the days of the week when the backup should run. |
    | `BackupTimes`                                  | Configure this value with the times that the backup will run. The format of the value should be in ISO8601 format. The date specified along with the time will be ignored. |
    | `BackupPath`                                   | Replace `\\UncPath\BackupLocation` with the path of the location where the backups will be stored. If the path is a network path, the `Credential` will be used to access that location. |
    | `RetentionDuration`                            | Configure this value with the minimum duration for which a backup will remain stored in the storage. It might get deleted after that span of time. The format of the value should be in ISO8601 format. The date specified along with the time will be ignored. |
    | `MinimumNumberOfBackups`                       | Configure this value with the minimum number of backups to be retained at any point in time. If specified with a non-zero value, backups will not be deleted even if they have exceeded the retention duration, as long as the number of backups is less than or equal to this value. |
    | `Credential`                                   | The credentials of the user that will be used to access the `BackupPath`. It must be a domain user who is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed; a prompt will appear to enter this information when the script is run. |

1. Save and close `Cortex.Innovation.Backup.ps1`.