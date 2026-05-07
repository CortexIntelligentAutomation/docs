To check all necessary ports are free, follow these steps.
1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - App Server Install Scripts"
    ```

1. Run the `Cortex.Innovation.Test.PortUsage.ps1` script using the following command, modifying the `ApplicationServers` value to contain the NETBIOS name or fully qualified domain name of the server:

    ```powershell
    .\Cortex.Innovation.Test.PortUsage.ps1 -ApplicationServers @("app-server1")
    ```

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.

1. If all ports are free, the script will report the following:

    `All ports required by Cortex Innovation are free`

    If this is the case, continue to the next section. Otherwise, consult the messages returned by the script, which will give details about how to modify the `Cortex.Innovation.Install.Config.json` configuration file, in the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder, to use different ports. This will be used later during installation.

    The `Cortex.Innovation.Test.PortUsage.ps1` script cannot currently re-check modified ports in the configuration file so these need to be manually checked to see that they are free.
