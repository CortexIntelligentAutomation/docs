---
title: "Upgrade Flow Debugger"
linkTitle: "Upgrade Flow Debugger"
description: "Information about upgrading the Flow Debugger."
weight: 30
---

# {{< param title >}}

This guide describes how to upgrade the Application Server components on the server from 2024.1 to 2024.3.

## Configure Upgrade Script

1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts\Upgrade Application Server` folder, locate the `Cortex.Innovation.Upgrade.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Upgrade.ps1 `
        -AppServicesPath "$env:SystemDrive\Install\Cortex Innovation * - App Services.zip" `
        -BlockPackagesPath "$env:SystemDrive\Install\Cortex Innovation * - Block Packages.zip" `
        -ApplicationServerIPv4Addresses @("192.168.1.1") `
        -Credential $Credential `
        -AcceptEULA:$AcceptEULA `
        *>&1 | Tee-Object -FilePath "cortex-ha-upgrade-log.txt"
    ```

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`AppServicesPath`                              | Configure this value with the location of the App Services zip file on the server. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the server. |
    |`ApplicationServerIPv4Addresses`              | The IPv4 address of the server.|
    |`Credential`                                   | The credentials of the user which will be used to perform remote operations on the server. It must be a domain user that is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`AcceptEULA`                                   | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                   | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Upgrade.ps1`.

## Run Upgrade Script

{{< section "/upgrade-application-server/run-upgrade-script.md" "2024.3">}}

## Check Application Services

{{< section "/install-application-server/single-server/check-application-services.md" "2024.3">}}

## Preserve installation files

{{< section "/preserve-installation-files.md" "2024.3">}}

## Next Steps?

1. [Upgrade Gateway][]
