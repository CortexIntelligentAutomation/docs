1. In the `Cortex Innovation {{< version >}} - Web App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.Gateway.Backup.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:
    
    ```powershell
    .\Cortex.Gateway.Backup.ps1 `
        -ConfigFileName "Cortex.Application.Backup.Config.json" `
        -BackupTaskName "Customer1.BackupPolicy1" `
        -Remove
    ```

    | Name             | Description |
    |------------------|-------------|
    | `BackupTaskName` | Configure this value with the unique name of the backup task that was set for the scheduled Windows task. |
    | `Remove`         | Parameter used to indicate that the backup task should be removed. |

1. Save and close `Cortex.Innovation.Gateway.Backup.ps1`.