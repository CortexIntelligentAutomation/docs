1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts\Upgrade Application Server` folder, locate the `Cortex.Innovation.Upgrade.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Upgrade.ps1 `
        -AppServicesPath "C:\Install\Cortex Innovation * - App Services.zip" `
        -BlockPackagesPath "C:\Install\Cortex Innovation * - Block Packages.zip" `
        -ApplicationServerIPv4Addresses @("192.168.1.1") `
        -Credential $Credential `
        -AcceptEULA:$AcceptEULA `
        *>&1 | Tee-Object -FilePath "cortex-ha-upgrade-log.txt"
    ```

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`AppServicesPath`                             | Configure this value with the location of the Application Services zip file on the Application Server being used for the upgrade. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the Application Server being used for the upgrade. |
    |`ApplicationServerIPv4Addresses`              | The IPv4 address of the server.|
    |`Credential`                                  | The credentials of the user which will be used to perform remote operations on the server. It must be a domain user that is a member of the local Administrators group on all servers.<br><br>This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`AcceptEULA`                                  | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                    | The filename that upgrade logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Upgrade.ps1`.
