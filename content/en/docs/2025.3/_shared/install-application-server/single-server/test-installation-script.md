1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - App Server Install Scripts"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.ps1 -WhatIf
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInstallScriptName>.ps1 -WhatIf -AcceptEULA
    ```

1. Run the PowerShell command to test the installation script.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. A password prompt will appear. Enter a password which will be used to create a user in RabbitMQ.
1. Wait for the command to finish. It will display the output of the installation command without making any changes to the system.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are no errors, continue to the next section; otherwise, check if the errors have any instructions for rectifying the issue and follow them.

    If there are no useful instructions, check that all previous steps have been followed correctly and, if not, rectify it and run the command again. <br /><br />If this does not work, please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for further assistance. The `WhatIf` script will have created a temporary version of the config file in the script location, showing what changes would be made to it when the script runs. The name is appended with `-WhatIf` (e.g. `Cortex.Innovation.Install.Config-WhatIf.json`). This file can be provided when obtaining support.

[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}