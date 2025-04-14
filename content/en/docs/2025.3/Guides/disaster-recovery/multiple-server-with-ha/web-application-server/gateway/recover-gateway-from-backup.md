---
title: "Recover Web Application Server From Scheduled Backup"
linkTitle: "Recover Web Application Server From Scheduled Backup"
description: "Information about recovering the web application server."
weight: 40
---

# {{% param title %}}

This guide describes how to recover the Web Application Server from a backup. This will recovery the flow repositories and the openApi definitions.

### Configure the Recover Script

{{< section "/disaster-recovery/web-application-server/recover/configure-recover-script.md">}}

### Run the Recover Script

{{% alert title="Note" %}}
A backup policy should be configured on the application server before running a recovery, see {{< ahref path="Cortex.Guides.DisasterRecoveryGuides.MultipleServerWithHA.AddBackupToGateway" title="Backup Gateway" >}} for further information.
{{% /alert %}}

{{< section "/disaster-recovery/web-application-server/recover/run-recover-script.md">}}

## Preserve installation files

{{< section "/disaster-recovery/web-application-server/preserver-scripts.md">}}