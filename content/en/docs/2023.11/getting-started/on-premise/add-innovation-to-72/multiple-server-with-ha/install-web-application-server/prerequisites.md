---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "Information about performing the prerequisities for the Web Application Server."
weight: 10
---

# {{% param title %}}

Please ensure that [Install Application Servers and Load Balancer][] has been completed before starting this installation. These steps assume that the v7.2 version of Gateway and its prerequisites have already been installed.

## Make Installation Artefacts Available

{{% alert title="Note" %}}
We recommend that the single-node Service Fabric instance, used by {{% ctx %}} Gateway as a Debugger instance, and {{% ctx %}} Gateway are installed on the same Web Application Server.
{{% /alert %}}

{{< section "/install-web-application-server/make-installation-artefacts-available.md">}}

## Licensing

{{< section "/install-web-application-server/add-innovation-to-7.2/licensing.md">}}

## Grant folder permissions to the {{% ctx %}} Gateway Application Pool User

{{< section "/install-web-application-server/grant-gateway-user-folder-permissions.md">}}

## Certificate Requirements

In order to ensure that the correct certificate is used during the upgrade of {{% ctx %}} Gateway, it is necessary to [assign a friendly name][Assign Certificate Friendly Name] to the certificate that is currently being used for {{% ctx %}} Gateway. It is important to set the `ImportCertificate` parameter to `$false` when [configuring the {{% ctx %}} Gateway installation script][Configure CORTEX Gateway Installation Script].
<br />  
The Flow Debugger also requires an X.509 SSL certificate to be installed on the Web Application Server.  This can use the same certificate as {{% ctx %}} Gateway, however it must have the following properties:

* Subject field must be in a wildcard format, pertaining to the domain of the Application Servers (e.g. `CN=*.domain.com`).
* Subject alternative names must include any additional host names that should be able to be used to access the API Gateway Service.
* Certificate file must be in a .PFX file format, with a known password.
* Certificate file must contain the full chain of certificates.
* Certificate file must include the private key.
* Key Usage extension must have a value of `Digital Signature, Key Encipherment (a0)`.
* Enhanced Key Usage must include `Server Authentication` and `Client Authentication`.

### Assign Certificate Friendly Name

{{< section "/install-web-application-server/add-innovation-to-7.2/assign-certificate-friendly-name.md">}}

## Next Steps?

1. [Perform Flow Debugger Installation][]

[Assign Certificate Friendly Name]: {{< ref "#assign-certificate-friendly-name" >}}
[Configure CORTEX Gateway Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew" >}}
[Install Application Servers and Load Balancer]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Perform Flow Debugger Installation]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.DebuggerInstallation" >}}
