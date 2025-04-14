1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.EncryptionKey.Recover.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.EncryptionKey.Recover.ps1 `
        -TargetMachines @("app-server1","app-server2","app-server3", "lb-server","web-server1") `
        -BackupPath "\\UncPath\BackupLocation" `
        -Credential $Credential
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`TargetMachines`                                | Configure the value with the names of the application servers, the web application server and load balancer server if using the built-in load balancer.|
    |`BackupPath`                                    | Replace `\\UncPath\BackupLocation` with the path of the location the backups are stored in. if the path is a network path then the `Credentials` will be used to access that location.|
    |`Credential`                                    | The credentials of the user which will be used to access the `BackupPath`. It must be a domain user that is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run.|

1. Save and close `Cortex.Innovation.EncryptionKey.Recover.ps1`.