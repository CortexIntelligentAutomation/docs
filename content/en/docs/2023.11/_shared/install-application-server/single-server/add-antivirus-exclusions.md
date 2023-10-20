1. If Windows Defender is not running on the server, ensure that the [Antivirus Exclusions][] have been added to the running antivirus software on the server and continue to the next section, otherwise follow these steps:
    1. Open a Windows PowerShell (x64) window as administrator.
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

[Antivirus Exclusions]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.AntivirusExclusions" >}}