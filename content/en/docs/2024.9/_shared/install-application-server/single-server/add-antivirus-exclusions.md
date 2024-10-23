1. Open a Windows PowerShell (x64) window as administrator.
1. Type and run the following command to temporarily set the PowerShell Execution Policy:

    ```powershell
    Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
    ```

    {{< alert title="Note">}}This is a temporary change and will only affect the current PowerShell window.{{< /alert >}}

1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - App Server Install Scripts"
    ```

1. Run the `Cortex.Innovation.Add.WindowsDefenderExclusions.ps1` script using the following command, modifying the `ApplicationServers` value to contain the NETBIOS name or fully qualified domain name of the server:

    ```powershell
    .\Cortex.Innovation.Add.WindowsDefenderExclusions.ps1 -ApplicationServers @("app-server1")
    ```

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. A message will indicate that the script has completed successfully.
