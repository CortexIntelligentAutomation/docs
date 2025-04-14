1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.Backup.ps1` script and open it with a text editor.
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

1. Save and close `Cortex.Innovation.Backup.ps1`.