---
title: "Upgrade Application Servers and Load Balancer"
linkTitle: "Upgrade Application Servers and Load Balancer"
description: "Information about upgrading the Application Servers and Load Balancer Server."
weight: 30
---

# {{< param title >}}

This guide describes how to install the Application Servers and Load Balancer Server from 2024.1 to 2024.3.

## Make Installation Artefacts Available

1. Choose one of the Application Servers to be used for installation, and copy the following artefacts to a folder on it:
   * Cortex Innovation {{< version >}} - App Server Install Scripts.zip
   * Cortex Innovation {{< version >}} - App Services.zip
   * Cortex Innovation {{< version >}} - Block Packages.zip

1. Extract the `Cortex Innovation {{< version >}} - App Server Install Scripts.zip` file to a folder with the same name.

## Configure Upgrade Script

1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts\Upgrade Application Server` folder, locate the `Cortex.Innovation.Upgrade.ps1` script and open it with a text editor.
1. Configure the script according to the details given below:

    ```powershell
    .\Cortex.Upgrade.ps1 `
        -AppServicesPath "$env:SystemDrive\Install\Cortex Innovation * - App Services.zip" `
        -BlockPackagesPath "$env:SystemDrive\Install\Cortex Innovation * - Block Packages.zip" `
        -ApplicationServerIPv4Addresses @("192.168.1.1, 192.168.1.2, 192.168.1.3") `
        -LoadBalancerServerIPv4Address "192.168.1.4" `
        -Credential $Credential `
        -AcceptEULA:$AcceptEULA `
        *>&1 | Tee-Object -FilePath "cortex-ha-upgrade-log.txt"
    ```

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`AppServicesPath`                             | Configure this value with the location of the App Services zip file on the server. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the server. |
    |`ApplicationServerIPv4Addresses`              | The IPv4 addresses of the Application Servers. The first of these must be the Application Server used for upgrade.|
    |`LoadBalancerServerIPv4Address`               | The IPv4 address of the load balancer server.|
    |`Credential`                                  | The credentials of the user which will be used to perform remote operations on the server. It must be a domain user that is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`AcceptEULA`                                  | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                    | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Upgrade.ps1`.

## Run Upgrade Script

{{< section "../docs/2024.3/_shared/upgrade-application-server/run-upgrade-script.md">}}

## Check Application Services

{{< section "../docs/2024.3/_shared/install-application-server/single-server/check-application-services.md">}}

## Next Steps?

1. [Upgrade Gateway][]
