1. Open a Windows PowerShell (x64) window as administrator.
    {{< alert title="Important" color="warning" >}}It is critical to make sure this is a new PowerShell window. If any Service Fabric cmdlets have been run previously to running the `Cortex.Innovation.Upgrade.ps1` script, the upgrade will close halfway through due to the PowerShell module being updated.{{< /alert >}}
1. Navigate PowerShell to inside the `Cortex Innovation 2025.7 - App Server Install Scripts\Upgrade Application Server` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2025.7 - App Server Install Scripts\Upgrade Application Server"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Upgrade.ps1
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexUpgradeScriptName>.ps1 -AcceptEULA
    ```

1. Run the PowerShell command to upgrade the application services and required infrastructure.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. Wait for the script to finish running. This should take approximately 10 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If the errors do not give any instructions on how to rectify, see [Troubleshooting During Upgrade][] for further information; if this does not help then please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for assistance.

[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Troubleshooting During Upgrade]: {{< url path="Cortex.Reference.Troubleshooting.Upgrade.TroubleshootingDuringUpgrade" >}}
