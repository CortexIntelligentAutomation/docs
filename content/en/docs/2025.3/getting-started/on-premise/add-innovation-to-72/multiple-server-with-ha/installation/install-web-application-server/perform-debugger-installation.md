---
title: "Install Flow Debugger"
linkTitle: "Install Flow Debugger"
description: "Information about installing the Flow Debugger."
weight: 20
---

# {{% param title %}}

This guide describes how to install the Flow Debugger on the Web Application Server. Please ensure that the [web application server prerequisites][] have been completed before starting this installation.

{{% alert title="Important" color="warning" %}}
{{< ctx >}} Gateway requires a local instance of the Application Server components to enable the debugging of flows.
{{% /alert %}}

## Install Microsoft .NET Framework 4.7.2

{{< section "/install-application-server/install-dot-net-framework.md">}}

## Add Antivirus Exclusions

If Windows Defender is not running on the server, ensure that the [Antivirus Exclusions][] have been added to the running antivirus software on the server and continue to the next section, otherwise follow these steps:

{{< section "/install-application-server/single-server/add-antivirus-exclusions.md">}}

## Check Port Usage

{{< section "/install-application-server/single-server/check-port-useage.md">}}

## Configure Installation Script

{{< section "/install-web-application-server/add-innovation-to-7.2/configure-debugger-installation-script.md">}}

## Test Installation Script

{{< section "/install-application-server/single-server/test-installation-script.md">}}

## Run Installation Script

{{< section "/install-application-server/single-server/run-installation-script.md">}}

## Add Read and Execute access to Windows Crypto folder  

{{< section "/install-application-server/single-server/add-permissions-to-crypto-folder.md">}}

## Check Application Services

1. Log on to the Web Application Server.
1. Import the client certificate, used in the `ClientCertificatePath` parameter of the [Configure Installation Script][] section, to your Current User certificate store. Instructions on how to do this can be found [here][Import Client Certificate].
1. Open a web browser.
1. {{< section "/install-application-server/single-server/check-application-services.md">}}

# Preserve installation files

{{< section "/preserve-installation-files.md">}}

## Next Steps?

1. [Upgrade Gateway][]

[Antivirus Exclusions]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.AntivirusExclusionsNew" >}}
[Configure Installation Script]:  {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureDebuggerInstallationScript" >}}
[Import Client Certificate]: {{< url path="Cortex.Faqs.ImportClientCertificate.MainDoc" >}}
[Upgrade Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.GatewayInstallationNew" >}}
[web application server prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.WebApplicationServerPrerequisitesNew" >}}
