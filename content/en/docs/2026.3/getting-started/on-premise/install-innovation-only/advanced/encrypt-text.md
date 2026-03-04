---
title: "Encrypt Text"
linkTitle: "Encrypt Text"
description: "Information about encrypting text using the {{% ctx %}} Encryptor."
---

# {{% param title %}}

To encrypt text using the {{% ctx %}} Encryptor PowerShell module:

On one of the servers specified during the Generate Encryption Key steps during the Pre-Installation:
1. Open a Windows PowerShell (x64) window as administrator. The administrator must be a domain user that is a member of the local Administrators group on the Application Servers and Web Application Server.
1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - Encryptor` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - Encryptor"
    ```

1. In the Windows PowerShell (x64) window, run the following command to import the module:

    ```powershell
    Import-Module .\Cortex.Encryptor.psd1
    ```

    {{< alert title="Note:" >}}The `Import-Module` command will need to be repeated every time a new PowerShell window is used. To install the PowerShell module so that it is always available, follow the instructions laid out {{< ahref path="MSDocs.PowerShell.InstallModule" title="here" >}}.{{< /alert >}}

1. In the Windows PowerShell (x64) window, run the following command to encrypt text, replacing `text to encrypt` with the text that you want to encrypt:

    ```powershell
    ConvertTo-EncryptedText -Text 'text to encrypt'
    ```

    The command will return the encrypted text, beginning with `#_`. This step can be repeated for any text that needs to be encrypted.
