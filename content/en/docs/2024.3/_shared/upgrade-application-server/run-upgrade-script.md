1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Upgrade.ps1
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInnovationUpgradeScriptName>.ps1 -AcceptEULA
    ```

1. Run the PowerShell command to Upgrade HA Services and the required infrastructure.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. Wait for the script to finish running. This should take approximately 10 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If the errors do not give any instructions on how to rectify, see [Troubleshooting During Upgrade][] for further information; if this does not help then please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for assistance.

[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Troubleshooting During Upgrade]: {{< url path="Cortex.Reference.Troubleshooting.Upgrade.TroubleshootingDuringUpgrade" >}}