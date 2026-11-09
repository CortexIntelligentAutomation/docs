1. In the `Cortex Innovation 2025.5 - App Server Install Scripts\Upgrade Application Server` folder, locate the `Cortex.Innovation.Upgrade.ps1` script and open it with a text editor.
1. Choose the tab below that matches the configuration for this upgrade, then update the script to match, changing the parameters according to the details given below:

    {{% alert title="Note" %}}
To check the previous configuration values open the `Cortex.Upgrade.ApplicationConfig.json` file located in `%ProgramData%\Cortex\Upgrade`. If the file does not exist or the values should be changed then use the `Use New Configuration Values` tab.
    {{% /alert %}}

    {{< tabpane lang="powershell" >}}
        {{< tab header="Use Previous Configuration Values" >}}
.\Cortex.Upgrade.ps1 `
    -AppServicesPath "C:\Install\Cortex Innovation 2025.5 - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2025.5 - Block Packages.zip" `
    -Credential $Credential `
    -AcceptEULA:$AcceptEULA `
    *>&1 | Tee-Object -FilePath "cortex-ha-upgrade-log.txt"
        {{< /tab >}}
        {{< tab header="Use New Configuration Values">}}
.\Cortex.Upgrade.ps1 `
    -AppServicesPath "C:\Install\Cortex Innovation 2025.5 - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2025.5 - Block Packages.zip" `
    -ApplicationServerIPv4Addresses @("192.168.1.1") `
    -Credential $Credential `
    -AcceptEULA:$AcceptEULA `
    *>&1 | Tee-Object -FilePath "cortex-app-upgrade-log.txt"
        {{< /tab >}}
    {{< /tabpane >}}

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`AppServicesPath`                             | Configure this value with the location of the Application Services zip file on the server. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the server. |
    |`ApplicationServerIPv4Addresses`              | The IPv4 address of the server.|
    |`Credential`                                  | The credentials of the user which will be used to perform remote operations on the server. It must be a domain user that is a member of the local Administrators group on the server.<br><br>This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`AcceptEULA`                                  | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                    | The filename that upgrade logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Upgrade.ps1`.
