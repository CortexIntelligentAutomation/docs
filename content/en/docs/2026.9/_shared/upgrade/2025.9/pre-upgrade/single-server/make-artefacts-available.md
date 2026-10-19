1. Copy the following artefacts to a folder on the server:
   * Cortex Innovation 2025.9 - App Server Install Scripts.zip
   * Cortex Innovation 2025.9 - App Services.zip
   * Cortex Innovation 2025.9 - Block Packages.zip
   * Cortex Innovation 2025.9 - Encryptor.zip
   * Cortex Innovation 2025.9 - Gateway.zip
   * Cortex Innovation 2025.9 - Web App Server Install Scripts.zip

    {{< alert title="Important" color="warning" >}}Only the files for the version to be installed should be in the containing folder. There should not be any other versions of the files in this folder or a subfolder.{{% /alert %}}

1. Extract the `Cortex Innovation 2025.9 - App Server Install Scripts.zip` file to a folder with the same name.
1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2025.9 - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2025.9 - App Server Install Scripts"
    ```

1. Ensure that the `Cortex.Innovation.Install.PreInstallation.ps1` script has not been blocked by the operating system by running the following command:

    ```powershell
    Unblock-File -Path .\Cortex.Innovation.Install.Preinstallation.ps1
    ```

1. Run the `Cortex.Innovation.Install.PreInstallation.ps1` script using the following command, modifying the `ApplicationServers` and the `WebApplicationServer` values to contain the NETBIOS name or fully qualified domain name of the Server:

    ```powershell
    .\Cortex.Innovation.Install.Preinstallation.ps1 -ApplicationServers @("app-server1") -WebApplicationServer "webapp-server"
    ```
