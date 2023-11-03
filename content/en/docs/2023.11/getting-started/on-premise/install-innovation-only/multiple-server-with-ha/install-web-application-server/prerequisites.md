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

## Install SQL Server or SQL Express

Use one of the following installation guides to install SQL Server or SQL Server Express:

* <a href="/pdfs/Cortex Innovation - SQL Server 2016 Express Installation Guide.pdf">{{% ctx %}} Innovation - SQL Server 2016 Express Installation Guide</a>
* <a href="/pdfs/Cortex Innovation - SQL Server 2016 Installation Guide.pdf">{{% ctx %}} Innovation - SQL Server 2016 Installation Guide</a>
* <a href="/pdfs/Cortex Innovation - SQL Server 2019 Installation Guide.pdf">{{% ctx %}} Innovation - SQL Server 2019 Installation Guide</a>

## Get {{% ctx %}} Gateway Application Pool User

A domain user account is required for the {{% ctx %}} Gateway application pool and must be created prior to performing the installation below.

This user account is required to enable {{% ctx %}} Gateway to access the {{% ctx %}} database, with the following roles:

* dbcreator
* public

To add roles to database users take the following steps:

1. Open SQL Server Management Studio on the Web Application Server and log in.
1. Expand the server node, then `Security` then `Logins`.
1. If the user that will run the {{% ctx %}} Gateway application pool is not in the list of logins, take the following steps, otherwise skip to step 4:

    1. Right-click the `Logins` node and click `New Login...`.
    1. Enter the application pool user in the `Login name` box.
    1. On the left pane, click `Server Roles`.
    1. Check `public` and `dbcreator`
    1. Click `OK`.

1. If the user that will run the {{% ctx %}} Gateway application pool is in the list of logins, take the following steps:

    1. Right-click on the application pool user.
    1. Click `Properties`.
    1. On the left pane, click `Server Roles`.
    1. Check `public` and `dbcreator`.
    1. Click `OK`.

In line with best practices, this account should not be given administrator rights, nor should it be used for any purposes other than those specified for {{% ctx %}} Gateway.

## Grant folder permissions to the {{% ctx %}} Gateway Application Pool User

{{< section "/install-web-application-server/grant-gateway-user-folder-permissions.md">}}

## Certificate Requirements

{{% ctx %}} Gateway requires an X.509 SSL certificate to be installed on the Web Application Server. The certificate must have the following properties:

* Enhanced Key Usage: `Server Authentication` and `Client Authentication`
* Subject Alternative Names (SAN): At minimum the FQDN of the server. It can also include NetBIOS Name, IP address, localhost, 127.0.0.1

If the user tries to navigate to an address not in the SAN list, then they will receive a certificate error.

{{% alert title="Important" color="warning" %}}
Do not reuse any auto-generated self-signed certificates as they do not meet the requirements for Gateway.  
<br />
Certificates, wildcard certificates and manually created self-signed certificates can be used. However, the latter are not recommended for production instances.  
Details on how to create a self-signed certificate can be found at {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.CreateSelfSignedCertificates" title="Create Self-Signed Certificates" >}}.  
<br />
It is possible to reuse the certificate used when {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.DebuggerInstallation" title="installing the Debugger" >}}, as long as it is not an auto-generated self-signed certificate; If doing so, you should {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.AssignCertificateFriendlyNameNew" title="Assign a Certificate Friendly Name" >}} and set the `ImportCertificate` parameter to `$false` in {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew" title="Configure CORTEX Gateway Installation Script" >}} to ensure use of the correct certificate and to prevent it from being overwritten.
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

{{% alert title="Note" %}}The certificate can be imported automatically by setting the `ImportCertificate` parameter to `$true` in {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew" title="Configure CORTEX Gateway Installation Script" >}}. If importing the certificate automatically proceed to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.GatewayInstallation" title="Perform {{% ctx %}} Gateway Installation" >}} <br /><br /> If the certificate has previously been imported you must {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.AssignCertificateFriendlyNameNew" title="assign a friendly name" >}}.{{% /alert %}}

To import the certificate manually follow the below steps:

1. Locate the certificate file on the machine and right-click on the file.
1. Select `Install Certificate`.
1. Follow the Wizard and when prompted, ensure you import it into the `Local Machine` store and not `Current User`.
1. Assign the imported certificate a [friendly name][Assign Certificate Friendly Name].

### Assign Certificate Friendly Name

{{< section "/install-web-application-server/add-innovation-only/assign-certificate-friendly-name.md">}}

## Next Steps?

1. [Perform Flow Debugger Installation][]

[Assign Certificate Friendly Name]: {{< ref "#assign-certificate-friendly-name" >}}
[Import Certificate Manually]: {{< ref "#import-certificate-manually" >}}
[Install Application Servers and Load Balancer]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Perform Flow Debugger Installation]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.DebuggerInstallation" >}}
