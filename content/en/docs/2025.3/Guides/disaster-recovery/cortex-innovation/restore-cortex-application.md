---
title: "Restore Application Server"
linkTitle: "Restore Application Server"
description: "Information about restoring the application server."
weight: 40
---

# {{% param title %}}

This guide describes how to restore the Application Server from a backup.

## Make Installation Artefacts Available
{{< section "/disaster-recovery/cortex-innovation/make-installation-artefacts-available.md" >}}

### Configure the Recover Script

1. In the `Cortex Innovation 2025.3 - App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.Recover.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Recover.ps1 `
        -ConfigFileName "Cortex.Application.Backup.Config.json" `
        -BackupPath "\\UncPath\BackupLocation" `
        -Credential $Credential
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`BackupPath`                                   | Replace `\\UncPath\BackupLocation` with the path of the location the backups are stored in. if the path is a network path then the `Credentials` will be used to access that location.|
    |`Credential` | The credentials of the user which will be used to access the `BackupPath`. It must be a domain user that is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run.|

1. Save and close `Cortex.Innovation.Recover.ps1`.

### Run the Recover Script

{{% alert title="Note" %}}
A backup policy must be configured on the application server before running a restore, see {{< ahref path="Cortex.Guides.DisasterRecoveryGuides.CortexInnovation.BackupApplicationServer" title="Backup Application Server" >}} for further information.
{{% /alert %}}

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2025.3 - App Server Install Scripts\Recovery` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2025.3 - App Server Install Scripts\Recovery"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Recover.ps1
    ```

1. Run the PowerShell command to backup the application services.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. Wait for the script to finish running. This should take 2 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console.

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to perform further actions in future, such as restoring from backups.

[Backup Application Server]: {{< url path="Cortex.Guides.DisasterRecoveryGuides.CortexInnovation.BackupApplicationServer" >}}
