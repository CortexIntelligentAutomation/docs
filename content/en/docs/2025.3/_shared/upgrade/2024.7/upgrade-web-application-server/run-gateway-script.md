1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2024.7 - Web App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2024.7 - Web App Server Install Scripts"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.Gateway.ps1
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInstallScriptName>.ps1 -AcceptEULA
    ```

1. Run the PowerShell command to install {{% ctx %}} Gateway.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, and retry the upgrade.

    If the errors do not give any instructions on how to rectify, please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for further assistance.

1. Once the PowerShell script execution has completed, a prompt will appear to restart the machine.  You can choose to restart now (`N`) or later (`L`).
{{< alert type="note" title="Note" >}} It is recommended to choose to restart later after the final step of this section has completed to ensure that no issues occur.{{< /alert >}}
1. In a browser, navigate to the {{% ctx %}} Gateway website, available at `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway` and wait for the login page to load. This may take a few minutes.

[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
