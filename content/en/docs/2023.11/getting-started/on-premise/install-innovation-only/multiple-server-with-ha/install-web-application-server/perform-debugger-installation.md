---
title: "Perform Flow Debugger Installation"
linkTitle: "Perform Flow Debugger Installation"
description: "Information about installing the Flow Debugger."
weight: 20
---

# {{% param title %}}

This guide describes how to install the Flow Debugger on the Web Application Server. Please ensure that the [web application server prerequisites][] have been completed before starting this installation.

{{% alert title="Important" color="warning" %}}
{{< ctx >}} Gateway requires a local instance of the Application Server components to enable the debugging of flows.
{{% /alert %}}

## Add Antivirus Exclusions

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

{{< section "/install-application-server/single-server/check-application-services.md">}}

# Preserve installation files

{{< section "/preserve-installation-files.md">}}

## Next Steps?

1. [Perform Gateway Installation][]

[Assign Certificate Friendly Name]: {{< ref "#assign-certificate-friendly-name" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Configure Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureInstallationScript" >}}
[CORTEX Encrypted]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Get CORTEX Gateway Application Pool User]: {{< ref "#get-cortex-gateway-application-pool-user" >}}
[Import Certificate Manually]: {{< ref "#import-certificate-manually" >}}
[Import Root Certificate]: {{< ref path="#import-root-certificate" >}}
[Install Application Server]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.InstallApplicationServer" >}}
[Install Application Servers and Load Balancer]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Perform Gateway Installation]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.GatewayInstallation" >}}
[Security Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[web application server prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.WebApplicationServerPrerequisites" >}}
