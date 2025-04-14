1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2025.3 - App Server Install Scripts\Recovery` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2025.3 - App Server Install Scripts\Recovery"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Recover.ps1
    ```

1. Run the PowerShell command to recover the application services.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. Wait for the script to finish running. This should take 2 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console.