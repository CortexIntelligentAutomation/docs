---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "Information about performing the prerequisities for the Web Application Server."
weight: 10
---

# {{% param title %}}

This guide describes how to install the Web Application Server. Please ensure that [Install Application Servers and Load Balancer][] has been completed before starting this installation.

## Make Installation Artefacts Available

{{% alert title="Note" %}}
We recommend that the single-node Service Fabric instance, used by {{% ctx %}} Gateway as a Debugger instance, and {{% ctx %}} Gateway are installed on the same Web Application Server.
{{% /alert %}}

{{< section "/install-web-application-server/make-installation-artefacts-available.md">}}

## Licensing

{{< section "/install-web-application-server/add-innovation-only/licensing.md">}}

## Get {{% ctx %}} Gateway Application Pool User

A domain user account is required for the {{% ctx %}} Gateway application pool and must be created prior to performing the installation below.

In line with best practices, this account should not be given administrator rights, nor should it be used for any purposes other than those specified for {{% ctx %}} Gateway.

## Grant folder permissions to the {{% ctx %}} Gateway Application Pool User

{{< section "/install-web-application-server/grant-gateway-user-folder-permissions.md">}}

## Certificate Requirements

The Flow Debugger and {{% ctx %}} Gateway require an X.509 SSL certificate to be installed on the Web Application Server.
<br/>  
For {{% ctx %}} Gateway, the certificate must have the following properties:

* Enhanced Key Usage: `Server Authentication` and `Client Authentication`
* Subject Alternative Names (SAN): At minimum the FQDN of the server. It can also include NetBIOS Name, IP address, localhost, 127.0.0.1

If the user tries to navigate to an address not in the SAN list, then they will receive a certificate error.
<br/>  
For the Flow Debugger, the certificate must have the following properties:

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

{{% alert title="Important" color="warning" %}}
Multi-domain certificates, wildcard certificates, auto-generated self-signed certificates and {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.CreateSelfSignedCertificates" title="manually created self-signed certificates" >}} can be used. However, self-signed certificates are not recommended for production instances.
<br />
It is possible to reuse the Flow Debugger certificate for {{% ctx %}} Gateway; If doing so, you must {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.AssignCertificateFriendlyNameNew" title="Assign a Certificate Friendly Name" >}} after the debugger has been installed and set the `ImportCertificate` parameter to `$false` in {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew" title="Configure CORTEX Gateway Installation Script" >}} to ensure use of the correct certificate and to prevent it from being overwritten.
{{% /alert %}}

### Import Root Certificate

{{% alert title="Note" %}}This step is only required if using a self-signed certificate signed by your own Root Certificate e.g. OpenSSL. If this is not the case proceed to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ImportCertificateManuallyNew" title="Import Certificate Manually" >}} {{% /alert %}}

This step must be carried out prior to the installation otherwise the URL validation will fail. In order to import the Root Certificate, ensure that the file is in a known location on this server and complete the following steps:

1. Using Windows File Explorer navigate to the location of the Root Certificate file.
1. Double click on the Root Certificate file to import the certificate into the Windows Certificate Store. Perform the following steps:

    1. Select `Local Machine` then click `Next`.
    1. Click `Next`.
    1. Enter the Export Password which the certificate was generated with then click `Next`.
    1. Select `Place all certificates in the following store`.
    1. Click `Browse…`.
    1. Select `Trusted Root Certification Authorities`, click `OK` then click `Next`.
    1. Click `Finish`.
    1. [Import][Import Certificate Manually] the X.509 SSL certificate.

### Import Certificate Manually

{{% alert title="Note" %}}The certificate can be imported automatically by setting the `ImportCertificate` parameter to `$true` in {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew" title="Configure CORTEX Gateway Installation Script" >}}. If importing the certificate automatically proceed to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.DebuggerInstallation" title="Install Flow Debugger" >}} <br /><br /> If the certificate has previously been imported you must {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.AssignCertificateFriendlyNameNew" title="assign a friendly name" >}}.{{% /alert %}}

To import the certificate manually follow the below steps:

1. Locate the certificate file on the machine and right-click on the file.
1. Select `Install Certificate`.
1. Follow the Wizard and when prompted, ensure you import it into the `Local Machine` store and not `Current User`.
1. Assign the imported certificate a [friendly name][Assign Certificate Friendly Name].

### Assign Certificate Friendly Name

{{< section "/install-web-application-server/add-innovation-only/assign-certificate-friendly-name.md">}}

## Next Steps?

1. [Install Flow Debugger][]

[Assign Certificate Friendly Name]: {{< ref "#assign-certificate-friendly-name" >}}
[Import Certificate Manually]: {{< ref "#import-certificate-manually" >}}
[Install Application Servers and Load Balancer]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Install Flow Debugger]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.DebuggerInstallation" >}}
