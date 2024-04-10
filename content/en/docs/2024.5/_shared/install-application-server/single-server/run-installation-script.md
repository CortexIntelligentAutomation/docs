1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.ps1
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInnovationInstallScriptName>.ps1 -AcceptEULA
    ```

1. Run the PowerShell command to install HA Services and the required infrastructure.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ. This should be entered carefully and recorded as it may be needed if seeking support from [{{% ctx %}} Service Portal][CORTEX Service Portal]. Press OK.
1. Wait for the script to finish running. This should take approximately 10 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, check your configuration files, and retry the installation.

    In some circumstances, retrying may error due to components being installed already. In this case please run the following command, followed by the original installation command:

    ```powershell
    .\Cortex.Innovation.Uninstall.ps1 -SkipLoadBalancer
    ```

    If the errors do not give any instructions on how to rectify, see [Troubleshooting During Installation][] for further information; if this does not help then please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for assistance.

[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Troubleshooting During Installation]: {{< url path="Cortex.Reference.Troubleshooting.Installation.TroubleshootingDuringInstallation" >}}