---
title: "Backup Web Application Server"
linkTitle: "Backup Web Application Server"
description: "Information about backing up the web application server."
weight: 40
---

# {{% param title %}}

This guide describes how to configure a scheduled backup of the Web Application Server. This will backup the flow repositories, openApi definitions and web config file.

## Make Installation Artefacts Available
{{< section "/disaster-recovery/cortex-gateway/make-installation-artefacts-available.md" >}}

## Configure the Backup Script

1. In the `Cortex Innovation 2025.3 - Web App Server Install Scripts\Recovery` folder, locate the `Cortex.Innovation.Gateway.Backup.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Gateway.Backup.ps1 `
        -ConfigFileName "Cortex.Application.Backup.Config.json" `
        -BackupTaskName "Customer1.BackupPolicy1" `
        -BackupSchedule "Weekly" `
        -BackupDay "Monday" `
        -BackupTime "00:00:00" `
        -BackupPath "\\UncPath\BackupLocation" `
        -BackupRetention 5 `
        -SiteName "Cortex" `
        -GatewayApplicationName "gateway" `
        -Credential $Credential
    ```

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`BackupTaskName`                              | Configure this value with the unique name of the backup task that will be set for the scheduled Windows task. |
    |`BackupSchedule`                                | Configure the value with either `Daily` or `Weekly` depending on when the schedule will run.|
    |`BackupDay`                                    | This is only needed if the `BackupSchedule` is set to `Weekly`. Configure this value with the day of the week when the backup should run.|
    |`BackupTime`                                   | Configure the value with the time that the back up will run. The format of the value should be in ISO8601 format, date specified along with time will be ignored. |
    |`BackupPath`                                    | Replace `\\UncPath\BackupLocation` with the path of the location the backups will be stored in. if the path is a network path then the `Credentials` will be used to access that location.|
    |`BackupRetention`                             | Configure this value with the maximum number of backups that should be retained.|
    |`SiteName`                        | Configure this value with the name of the site that should be backed up.|
    |`GatewayApplicationName`                        | Configure this value with the name of the application under the specified site that should be backed up.|
    |`Credential` | The credentials of the user which will be used to access the `BackupPath`. It must be a domain user that is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run.|

1. Save and close `Cortex.Innovation.Gateway.Backup.ps1`.

## Run the Backup Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2025.3 - Web App Server Install Scripts\Recovery` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2025.3 - App Server Install Scripts\Recovery"
    ```

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Gateway.Backup.ps1
    ```

1. Run the PowerShell command to backup the application services.
1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. Wait for the script to finish running. This should take between 2 to 10 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console.

## Preserve installation files

Ensure that the installation files are backed up or kept on the server, especially the scripts and config files that have been modified. This will make it easier to delete or configure further scheduled backups in the future.