1. In the `Cortex Innovation {{< version >}} - Web App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.Gateway.Backup.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Gateway.Backup.ps1 `
        -ConfigFileName "Cortex.Gateway.Backup.Config.json" `
        -BackupTaskName "Customer1.BackupPolicy1" `
        -BackupSchedule "Weekly" `
        -BackupDay "Monday" `
        -BackupTime "00:00:00" `
        -BackupPath "\\UncPath\BackupLocation" `
        -BackupRetention 5 `
        -SiteName "Cortex" `
        -GatewayApplicationName "gateway" `
        -Credential $Credential
    ```

    | Name                       | Description |
    |----------------------------|-------------|
    | `BackupTaskName`           | Configure this value with the unique name of the backup task that will be set for the scheduled Windows task. |
    | `BackupSchedule`           | Configure this value with either `Daily` or `Weekly`, depending on when the schedule will run. |
    | `BackupDay`                | This is only needed if the `BackupSchedule` is set to `Weekly`. Configure this value with the day of the week when the backup should run (e.g. `"Monday"`). |
    | `BackupTime`               | Configure this value with the time that the backup will run. The format of the value should be in ISO8601 format (e.g. `"12:00:00"`). |
    | `BackupPath`               | Replace `\\UncPath\BackupLocation` with the path of the location where the backups will be stored. If the path is a network path, the `Credential` will be used to access that location. {{% alert title="Warning" color="warning" %}}
This location must not be the same as any other scheduled Gateway backup.
{{% /alert %}} |
    | `BackupRetention`          | Configure this value with the maximum number of backups that should be retained. |
    | `SiteName`                 | Configure this value with the name of the site in IIS that should be backed up. |
    | `GatewayApplicationName`   | Configure this value with the name of the application under the specified `SiteName` in IIS that should be backed up. |
    | `Credential`               | The credentials of the user that will be used to access the `BackupPath`. It must be a domain user who is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed; a prompt will appear to enter this information when the script is run. |

1. Save and close `Cortex.Innovation.Gateway.Backup.ps1`.