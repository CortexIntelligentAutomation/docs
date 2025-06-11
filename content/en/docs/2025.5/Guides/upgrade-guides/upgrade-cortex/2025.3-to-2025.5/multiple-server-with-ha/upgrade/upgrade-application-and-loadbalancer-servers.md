---
title: "Upgrade Application Servers and Load Balancer"
linkTitle: "Upgrade Application Servers and Load Balancer"
description: "Information about upgrading the Application Servers and Load Balancer Server."
weight: 30
---

# {{< param title >}}

This guide describes how to upgrade the Application Servers and Load Balancer Server from 2025.3 to 2025.5. Please ensure that the [Pre-Upgrade][PreUpgrade] steps have been completed before starting this upgrade.

{{% alert title="Warning" color="warning" %}}
Due to breaking changes required for upgrading RabbitMQ from version 3 to version 4 the Application Servers need to be reinstalled rather than upgraded. As a result packages will need to be republished and Configuration Portal data will need to be backed up and restored. Other data stored in Reliable Collections (e.g., data storage collections and semaphores) will be lost.
{{% /alert %}}

## Configure Upgrade Script

1. In the `Cortex Innovation 2025.5 - App Server Install Scripts\Upgrade Application Server` folder, locate the `Cortex.Innovation.Upgrade.ps1` script and open it with a text editor.
1. Choose the tab below that matches the configuration for this upgrade, then update the script to match, changing the parameters according to the details given below:

    {{% alert title="Note" %}}
To check the previous configuration values open the `Cortex.Upgrade.ApplicationConfig.json` file located in `%ProgramData%\Cortex\Upgrade`. If the file does not exist or the values should be changed then use the `Use New Configuration Values` tab.
    {{% /alert %}}

    {{< tabpane lang="powershell" >}}
        {{< tab header="Use Previous Configuration Values" >}}
.\Cortex.Upgrade.ps1 `
    -AppServicesPath "C:\Install\Cortex Innovation 2025.5 - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2025.5 - Block Packages.zip" `
    -Credential $Credential `
    -AcceptEULA:$AcceptEULA `
    *>&1 | Tee-Object -FilePath "cortex-ha-upgrade-log.txt"
        {{< /tab >}}
        {{< tab header="Use New Configuration Values">}}
.\Cortex.Upgrade.ps1 `
    -AppServicesPath "C:\Install\Cortex Innovation 2025.5 - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation 2025.5 - Block Packages.zip" `
    -ApplicationServerIPv4Addresses @("192.168.1.1, 192.168.1.2, 192.168.1.3") `
    -LoadBalancerServerIPv4Address "192.168.1.4" `
    -Credential $Credential `
    -AcceptEULA:$AcceptEULA `
    *>&1 | Tee-Object -FilePath "cortex-ha-upgrade-log.txt"
        {{< /tab >}}
    {{< /tabpane >}}

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`AppServicesPath`                             | Configure this value with the location of the Application Services zip file on the Application Server being used for the upgrade. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the Application Server being used for the upgrade. |
    |`ApplicationServerIPv4Addresses`              | The IPv4 addresses of the Application Servers. The first of these must be the Application Server being used for the upgrade.|
    |`LoadBalancerServerIPv4Address`               | The IPv4 address of the Load Balancer Server. If the built-in load balancer is not being used, this should be removed.|
    |`Credential`                                  | The credentials of the user which will be used to perform remote operations on the Application Servers. It must be a domain user that is a member of the local Administrators group on all servers.<br><br>This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`AcceptEULA`                                  | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                    | The filename that upgrade logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Upgrade.ps1`.

## Run Upgrade Script

{{< section "/upgrade/2025.5/upgrade-application-server/multi-server/run-upgrade-script.md" >}}

## Check Application Services

{{< section "/upgrade/upgrade-application-server/multi-server/check-application-services.md" >}}

## Disable Whitelist Analyser

   {{< alert type="note" title="Note" >}} This release introduces a Whitelist Analyser to prevent unauthorised execution of namespaces. This step only needs to happen if the Whitelist Analyser should be disabled.{{< /alert >}}

On each of the Application Servers:

1. Open a File Explorer.
1. Navigate to `%ProgramData%\SF\<CustomerName>.<NodeName>\Fabric\work\Applications\Cortex.Innovation.Execution_App1\ExecutionPkg.Code.*` replacing `<CustomerName>` with the Customer Name and `<NodeName>` with the NETBIOS name of the Application Server configured during installation.
    {{% alert title="Note" %}}
To check the values to be used open the `Cortex.Upgrade.ApplicationConfig.json` file located in `%ProgramData%\Cortex\Upgrade`.
    {{% /alert %}}
1. Open the `appsettings.json` file in a text editor.
1. Locate the `"FeatureFlags"` line located under `"ExecutionEngine"` and set the value to `["f4fd94c0-a921-4b34-b82c-378b05e91555"]`.
1. Save and close the file.
1. In the File Explorer, navigate to `%ProgramData%\SF\<CustomerName>.<NodeName>\Fabric\work\ImageCache\Store\Cortex.Innovation.Execution\ExecutionPkg.Code.*` replacing `<CustomerName>` with the Customer Name and `<NodeName>` with the NETBIOS name of the Application Server specified in step 2.
1. Repeat steps 3 - 5.
1. Open a web browser.
1. Navigate to `https://server.domain.com:9080/Explorer`, where `server.domain.com` is the fully qualified domain name of one of the application servers. Replace `9080` with new `httpGatewayEndpointPort` value if it was changed during configuration of the original installation.
1. Expand `Cluster` then `Nodes`.
1. Restart the current node by clicking on the drop down menu next to the node name and select `Restart`. Confirm node restart by following the on-screen instructions.

Once all nodes have been updated and restarted, it will be necessary to [re-check the Application Services][Check Application Services] to ensure that the nodes have re-started correctly.

## Preserve installation files

{{< section "/preserve-installation-files.md" >}}

## Next Steps?

1. [Upgrade Web Application Server][]

[Check Application Services]: {{< ref "#check-application-services">}}
[PreUpgrade]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.3to2025.5.MultipleServerWithHA.PreUpgrade" >}}
[Upgrade Web Application Server]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2025.3to2025.5.MultipleServerWithHA.UpgradeWebApplicationServer" >}}
