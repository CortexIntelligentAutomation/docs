Certain sensitive parameters required during installation (e.g. passwords) must be encrypted; other potentially sensitive parameters (e.g. usernames) can be encrypted using the [{{% ctx %}} Encryptor][CORTEX Encrypted] PowerShell module, which uses AES256. Details of whether a parameter must or should be encrypted are specified during the installation steps.

Before encrypting parameters, it is required to generate a private key that will be used by the [{{% ctx %}} Encryptor][CORTEX Encrypted] PowerShell module using the following steps:

1. Open a Windows PowerShell (x64) window as administrator. The administrator must be a domain user that is a member of the local Administrators group on the server.
1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - Encryption Key Generator` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - Encryption Key Generator"
    ```

1. Run the `Cortex.Encryption.KeyGeneration.exe` application using the following command, modifying the argument value to contain the NETBIOS name or fully qualified domain name of the server:

    ```powershell
    .\Cortex.Encryption.KeyGeneration.exe "app-server1"
    ```

1. A message similar to the following will indicate that the application has completed successfully:

    ```text
    Encryption key set on app-server1
    Encryption Key: 284BADF55BDDC93A47D7DE8FC2C4DC9B
    ```

{{% alert title="Important" color="warning" %}}For security reasons the outputted `Encryption Key` should be backed up. If any keys were overwritten then they must be backed up too.{{% /alert %}}

[CORTEX Encrypted]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
