---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "Information about the prerequisites required before starting the upgrade."
weight: 10
---

# {{< param title >}}

The prerequisites required to be considered before starting the upgrade.

## Encryption Requirements

{{% alert title="Note" %}}This step is only required if the load balancer installed is the load balancer that is included with the {{% ctx %}} software.{{% /alert %}}

### Retrieve Existing Encryption Key

On one of the Application Servers:

1. On the Start menu, choose `Run`.
1. In the open box, enter `regedit.exe`. You must have administrative credentials to run regedit.exe.
1. In the Registry Editor, locate the registry value `Key` which can be found at the following location `HKEY_LOCAL_MACHINE\SOFTWARE\Innovise\Cerberus`.
1. Copy the value of `Key` and save it to a known location.

### Add Encryption Key to Load Balancer Server

On the Load Balancer Server:

1. On the Start menu, choose `Run`.
1. In the open box, enter `regedit.exe`. You must have administrative credentials to run regedit.exe.
1. In the Registry Editor, navigate through the subkeys to `HKEY_LOCAL_MACHINE\SOFTWARE\Innovise\Cerberus`.

   If any of the subkeys do not exist create them, repeating for each subsequent subkey:

    1. Right click on the parent subkey.
    1. Select `New`.
    1. Select `Key`.
    1. Set the name to be the subkey that you are creating e.g. `Innovise`.

1. Under the `Cerberus` subkey locate the registry value `Key`.

   If the registry value does not exist create it:

    * Right click in the right window.
    * Select `New`.
    * Select `String`.
    * Set the name to be `Key`.

1. Set the value of `Key` to be the value copied from the Application Server in Step 4 of [Retrieve Existing Encryption Key][]:

    1. Double click on the registry value `Key` to open the Edit dialog.
    1. Set the value.
    1. Click `OK`.

## Next Steps?

1. [Upgrade Application Servers and Load Balancer][]

[Retrieve Existing Encryption Key]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2024.9to2024.11.MultipleServerWithHA.RetrieveAppServerEncryptionKey" >}}
[Upgrade Application Servers and Load Balancer]: {{< url path="Cortex.Guides.UpgradeGuides.UpgradeCortex.2024.9to2024.11.MultipleServerWithHA.UpgradeApplicationAndLoadBalancerServers" >}}
