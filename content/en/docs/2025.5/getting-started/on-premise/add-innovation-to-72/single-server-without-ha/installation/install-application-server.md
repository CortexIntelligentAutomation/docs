---
title: "Install Application Server"
linkTitle: "Install Application Server"
description: "Information about installing the Application Server."
weight: 30
---

# {{< param title >}}

This guide describes how to install the Application Server components on the server. Please ensure that the [Pre-Installation steps for adding {{% ctx %}} to {{% ctx %}} 7][Pre-Installation] have been completed before starting the installation..

## Install Microsoft .NET Framework 4.7.2

{{< section "/install-application-server/install-dot-net-framework.md">}}

## Apply Recommended Security Measures

{{< section "/install-application-server/apply-recommended-security-measures.md">}}

## Add Antivirus Exclusions

If Windows Defender is not running on the server, ensure that the [Antivirus Exclusions][] have been added to the running antivirus software on the server and continue to the next section, otherwise follow these steps:

{{< section "/install-application-server/single-server/add-antivirus-exclusions.md">}}

## Check Port Usage

{{< section "/install-application-server/single-server/check-port-useage.md">}}

## Configure Installation Script

{{< section "/install-application-server/single-server/add-innovation-to-7.2/configure-installation-script.md">}}

## Test Installation Script

{{< section "/install-application-server/single-server/test-installation-script.md">}}

## Run Installation Script

{{< section "/install-application-server/single-server/run-installation-script.md">}}

## Add Read and Execute access to Windows Crypto folder  

{{< section "/install-application-server/single-server/add-permissions-to-crypto-folder.md">}}

## Check Application Services

1. Log on to the Application Server.
1. Import the certificate used in the `ServerCertificatePath` parameter of the [Configure Installation Script][] section, to your Current User certificate store. Instructions on how to do this can be found [here][Import Client Certificate].
1. Open a web browser.
1. {{< section "/install-application-server/single-server/check-application-services.md">}}

## Preserve installation files

{{< section "/preserve-installation-files.md">}}

## Next Steps?

1. [Upgrade {{% ctx %}} 7 Gateway to Include {{% ctx %}}][Upgrade Gateway]

[Antivirus Exclusions]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.AntivirusExclusionsNew" >}}
[Configure Installation Script]:  {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.ConfigureInstallationScriptNew" >}}
[Import Client Certificate]: {{< url path="Cortex.Faqs.ImportClientCertificate.SingleServer" >}}
[Pre-Installation]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.PreInstallation" >}}
[Upgrade Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.AddInnovationTo72WebApplicationServerNew" >}}
