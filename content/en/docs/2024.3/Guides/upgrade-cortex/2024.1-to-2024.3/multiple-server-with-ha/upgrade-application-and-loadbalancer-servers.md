---
title: "Upgrade Application Servers and Load Balancer"
linkTitle: "Upgrade Application Servers and Load Balancer"
description: "Information about upgrading the Application Servers and Load Balancer Server."
weight: 30
---

# {{< param title >}}

This guide describes how to upgrade the Application Servers and Load Balancer Server from 2024.1 to 2024.3.

## Make Installation Artefacts Available

1. Choose one of the Application Servers to be used for to perform the upgrade, and copy the following artefacts to a folder on it:
   * Cortex Innovation {{< version >}} - App Server Install Scripts.zip
   * Cortex Innovation {{< version >}} - App Services.zip
   * Cortex Innovation {{< version >}} - Block Packages.zip

1. Extract the `Cortex Innovation {{< version >}} - App Server Install Scripts.zip` file to a folder with the same name.

## Configure Upgrade Script

1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts\Upgrade Application Server` folder, locate the `Cortex.Innovation.Upgrade.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Upgrade.ps1 `
        -AppServicesPath "C:\Install\Cortex Innovation * - App Services.zip" `
        -BlockPackagesPath "C:\Install\Cortex Innovation * - Block Packages.zip" `
        -ApplicationServerIPv4Addresses @("192.168.1.1, 192.168.1.2, 192.168.1.3") `
        -LoadBalancerServerIPv4Address "192.168.1.4" `
        -Credential $Credential `
        -AcceptEULA:$AcceptEULA `
        *>&1 | Tee-Object -FilePath "cortex-ha-upgrade-log.txt"
    ```

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`AppServicesPath`                             | Configure this value with the location of the Application Services zip file on the Application Server being used for the upgrade. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the Application Server being used for the upgrade. |
    |`ApplicationServerIPv4Addresses`              | The IPv4 addresses of the Application Servers. The first of these must be the Application Server being used for the upgrade.|
    |`LoadBalancerServerIPv4Address`               | The IPv4 address of the Load Balancer Server. This is only needed if using the built-in load balancer.|
    |`Credential`                                  | The credentials of the user which will be used to perform remote operations on the Application Servers. It must be a domain user that is a member of the local Administrators group on all servers.<br><br>This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`AcceptEULA`                                  | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                    | The filename that upgrade logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Upgrade.ps1`.

## Run Upgrade Script

{{< section "/upgrade-application-server/multi-server/run-upgrade-script.md" >}}

## Check Application Services

{{< section "/install-application-server/multi-server/check-application-services.md" >}}

## Preserve installation files

{{< section "/preserve-installation-files.md" >}}

## Next Steps?

1. [Upgrade Web Application Server][]

[Upgrade Web Application Server]: {{< url path="Cortex.Guides.UpgradeCortex.2024.1to2024.3.MultipleServerWithHA.UpgradeWebApplicationServer" >}}
