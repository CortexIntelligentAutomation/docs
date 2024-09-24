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

* Subject field must be in one of the following formats depending on whether a multi-domain or wildcard certificate is used:
  * Multi-domain certificate - If using the [gobetween][] load balancer this should be specified as the FQDN of the load balancer server (e.g. `CN=load-balancer.domain.com`). If using a different load balancer this must be specified as the FQDN of one of the application servers (e.g. `CN=application-server.domain.com`)
  * Wildcard certificate - wildcard format, pertaining to the domain of the Application Servers (e.g. `CN=*.domain.com`).
* Subject alternative names must include any additional host names that should be able to be used to access the API Gateway Service.  Additionally if using a multi-domain certificate:
  * The FQDN, NetBIOS Name and IP address of the web application server and all application servers must be added.
* Certificate file must be in a .PFX file format, with a known password.
* Certificate file must contain the full chain of certificates.
* Certificate file must include the private key.
* Key Usage extension must have a value of `Digital Signature, Key Encipherment (a0)`.
* Enhanced Key Usage must include `Server Authentication` and `Client Authentication`.

### Assign Certificate Friendly Name

{{< section "/install-web-application-server/add-innovation-to-7.2/assign-certificate-friendly-name.md">}}

## Next Steps?

1. [Install Flow Debugger][]

[Assign Certificate Friendly Name]: {{< ref "#assign-certificate-friendly-name" >}}
[Configure CORTEX Gateway Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew" >}}
[Install Application Servers and Load Balancer]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Install Flow Debugger]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.DebuggerInstallation" >}}
