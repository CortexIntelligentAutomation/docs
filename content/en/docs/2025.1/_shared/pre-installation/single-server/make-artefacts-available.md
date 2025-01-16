1. Copy the following artefacts to a folder on the server:
   * Cortex Innovation {{< version >}} - App Server Install Scripts.zip
   * Cortex Innovation {{< version >}} - App Services.zip
   * Cortex Innovation {{< version >}} - Block Packages.zip
   * Cortex Innovation {{< version >}} - Encryption Key Generator.zip
   * Cortex Innovation {{< version >}} - Encryptor.zip
   * Cortex Innovation {{< version >}} - Gateway.zip
   * Cortex Innovation {{< version >}} - Licence Fingerprint Generator.zip
   * Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip

1. Extract the `Cortex Innovation {{< version >}} - App Server Install Scripts.zip` file to a folder with the same name.
1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - App Server Install Scripts"
    ```

1. Ensure that the `Cortex.Install.PreInstallation.ps1` script has not been blocked by the operating system by running the following command:

    ```powershell
    Unblock-File -Path .\Cortex.Install.Preinstallation.ps1
    ```

1. Run the `Cortex.Install.PreInstallation.ps1` script using the following command, modifying the `ApplicationServers` and the `WebApplicationServer` values to contain the NETBIOS names or fully qualified domain names of the Server:

    ```powershell
    .\Cortex.Install.Preinstallation.ps1 -ApplicationServers @("app-server1") -WebApplicationServer "webapp-server"
    ```
