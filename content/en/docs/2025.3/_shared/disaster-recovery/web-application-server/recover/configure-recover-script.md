1. In the `Cortex Innovation {{< version >}} - Web App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.Gateway.Recover.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Gateway.Recover.ps1 `
        -ConfigFileName "Cortex.Application.Backup.Config.json" `
        -BackupPath "\\UncPath\BackupLocation" `
        -SiteName "Cortex" `
        -GatewayApplicationName "gateway" `
        -Credential $Credential
    ```

    | Name                     | Description |
    |--------------------------|-------------|
    | `BackupPath`             | Replace `\\UncPath\BackupLocation` with the path of the location where the backups are stored. If the path is a network path, the `Credential` will be used to access that location. |
    | `SiteName`               | Configure this value with the name of the site that should be restored. |
    | `GatewayApplicationName` | Configure this value with the name of the application under the specified site that should be restored. |
    | `Credential`             | The credentials of the user that will be used to access the `BackupPath`. It must be a domain user who is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed; a prompt will appear to enter this information when the script is run. |

1. Save and close `Cortex.Innovation.Gateway.Recover.ps1`.