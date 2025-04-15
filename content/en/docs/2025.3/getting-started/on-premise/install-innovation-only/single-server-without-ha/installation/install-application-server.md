---
title: "Install Application Server"
linkTitle: "Install Application Server"
description: "Information about installing the Application Server."
weight: 30
---

# {{% param title %}}

This guide describes how to install the Application Server components on the server. Please ensure that the [Pre-Installation steps for installing {{% ctx %}}][Pre-Installation] have been completed before starting this installation.

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

{{< section "/install-application-server/single-server/add-innovation-only/configure-installation-script.md">}}

## Test Installation Script

{{< section "/install-application-server/single-server/test-installation-script.md">}}

## Run Installation Script

{{< section "/install-application-server/single-server/run-installation-script.md">}}

## Add Read and Execute access to Windows Crypto folder  

{{< section "/install-application-server/single-server/add-permissions-to-crypto-folder.md">}}

## Check Application Services

1. Log on to the Application Server.
1. Import the client certificate, used in the `ClientCertificatePath` parameter of the [Configure Installation Script][] section, to your Current User certificate store. Instructions on how to do this can be found [here][Import Client Certificate].
1. Open a web browser.
1. {{< section "/install-application-server/single-server/check-application-services.md">}}

## Preserve installation files

{{< section "/preserve-installation-files.md">}}

## Next Steps?

1. [Install Web Application Server][]

[Antivirus Exclusions]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.AntivirusExclusionsNew" >}}
[Configure Installation Script]:  {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureInstallationScriptNew" >}}
[Import Client Certificate]: {{< url path="Cortex.Faqs.ImportClientCertificate.MainDoc" >}}
[Install Web Application Server]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.InstallWebApplicationServerNew" >}}
[Pre-Installation]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.PreInstallation" >}}
[Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.Requirements" >}}
