1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.Backup.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Backup.ps1 `
        -ConfigFileName "Cortex.Application.Backup.Config.json" `
        -BackupPolicyName "Customer1.BackupPolicy1" `
        -AutoRestoreOnDataLoss $false `
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
    | `AutoRestoreOnDataLoss`                        | This should be left as `$false`. |
    | `MaxIncrementalBackups`                        | Configure this value with the maximum number of incremental backups to be taken between two full backups. |
    | `BackupSchedule`                               | Configure this value with either `Daily` or `Weekly`, depending on when the schedule will run. |
    | `BackupDays`                                   | This is only needed if the `BackupSchedule` is set to `Weekly`. Configure this value with the days of the week when the backup should run (e.g. `@("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")`). |
    | `BackupTimes`                                  | Configure this value with the times that the backup will run. The format of the value should be in ISO8601 format (e.g. `@("12:00:00", "1:15:00", "2:20:30")`). |
    | `BackupPath`                                   | Replace `\\UncPath\BackupLocation` with the path of the location where the backups will be stored. If the path is a network path, the `Credential` will be used to access that location. |
    | `RetentionDuration`                            | Configure this value with the minimum duration for which a backup will remain stored in the storage. It might get deleted after that span of time. The format of the value should be in ISO8601 format (e.g. `"12:00:00"`). |
    | `MinimumNumberOfBackups`                       | Configure this value with the minimum number of backups to be retained at any point in time. If specified with a non-zero value, backups will not be deleted even if they have exceeded the retention duration, as long as the number of backups is less than or equal to this value. |
    | `Credential`                                   | The credentials of the user that will be used to access the `BackupPath`. It must be a domain user who is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed; a prompt will appear to enter this information when the script is run. |

1. Save and close `Cortex.Innovation.Backup.ps1`.