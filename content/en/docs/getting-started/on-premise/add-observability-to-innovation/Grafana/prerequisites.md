---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "Information about the prerequisites required on each server type for installation."
weight: 20
---
# {{% param title %}}

The prerequisites required for each server role (as described in [Architecture][]) are laid out in this guide. These must be considered before undertaking the installation.

## Hardware Requirements

| Server&nbsp;Role | Servers&nbsp;Required | CPU&nbsp;Cores&nbsp;(>&nbsp;2GHz) | RAM&nbsp;(GB) | Disk&nbsp;(GB) |  
|------------------|-----------------------|-----------------------------------|---------------|----------------------|
| Web&nbsp;Application&nbsp;Server | 1 | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 16+&nbsp;*Recommended*<br>8&nbsp;*Minimum* | 50+&nbsp;(SSD)&nbsp;*Recommended*<br>40&nbsp;(HDD)&nbsp;*Minimum*<br>5+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |

{{% alert title="Note" %}}
The application servers (as described in {{< ahref "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.Architecture" "Architecture" >}}) to which Promtail will be added have already been installed as part of the Innovation install process and do not require any hardware modifications for the observability platform installation.
{{% /alert %}}

## Software Requirements

| Server&nbsp;Role | Windows&nbsp;Server[^1] | IIS[^2] | Other&nbsp;Software |
|------------------|-------------------------|---------|----------|
| Web Application Server[^3] | [2019 (x64)][] *Recommended*<br>[2016 (x64)][] | 10.0.17763[^4]<br>10.0.14393[^5]<br>IIS Basic Authentication[^6]<br>[URL Rewrite module 2.1][] | [Grafana 8.5.4][] *Enterprise Edition*<br>[Grafana Loki 2.5.0][]|
| Application Server | [2019 (x64)][] *Recommended*<br>[2016 (x64)][] | | [Promtail 2.5.0][]|

[^1]: Windows Server Standard and Datacenter editions are supported. Filesystem **must be NTFS** and networking **must use IPv4**. Linux is not supported, but may be in the future.
[^2]: IIS is supported; other web servers, including IIS Express are not supported.
[^3]: This should be a separate machine from the one used for Innovation Web Application Server.
[^4]: Ships as a windows role within Windows Server 2019.
[^5]: Ships as a windows role within Windows Server 2016.
[^6]: Installed during the [Install IIS Basic Authentication][] configuration steps.

## Domain Requirements

All servers must be on the same domain and cannot be domain controllers.

## Web Browser Requirements

Grafana supports the latest versions of the following browsers:

* Chrome/Chromium
* Firefox
* Safari
* Microsoft Edge

{{% alert title="Note" %}}
Always enable JavaScript in your browser. Running Grafana without JavaScript enabled in the browser is not supported.
{{% / alert %}}

## Additional Web Application Server Requirements

### Security Requirements

#### Installation User

A domain user which is a member of the Local Administrators group on the Web Application Server must be available to perform the installation.

#### Port Requirements

The observability platform requires a range of [firewall ports to be opened][Port Requirements] on the Web Application Server.

#### Certificate Requirements

{{% alert title="Note" %}}
For production systems, it is recommended that X.509 SSL certificates are obtained from a Certificate Authority and used for installation. For non-production systems, self-signed certificates may be used. Details on how to create a self-signed certificate can be found at {{< ahref "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.Advanced.CreateSelfSignedCertificates" "Create Self-Signed Certificates">}}.
{{% / alert %}}

An X.509 SSL certificate (standard, wildcard or self-signed) should be used to secure communication between:

* Promtail on the Application Servers and the reverse proxy configured for Grafana Loki on the Web Application Server.
* Grafana end users and the Grafana Web Application on the Web Application Server.

The wildcard certificate used for installing Innovation can be used if it is available in the .PEM file format, otherwise a new certificate can be obtained from a Certificate Authority, such as [Let’s Encrypt][], and must meet the following requirements:

* Subject field must be in one of the following formats, depending on the certificate type:
  * Standard certificates must use the standard format (e.g. `CN=host.domain.com`).
  * Wildcard certificates must use the wildcard format, pertaining to the domain of the Web Application Server (e.g. `CN=*.domain.com`).
* Subject alternative names must include any additional host names that should be able to be used to access the Grafana Web Application.
* Certificate file must be in a .PFX file format, with a known password.
* Certificate file must also be available in a .PEM file format.
* Certificate file must contain the full chain of certificates.
* Certificate file must include the private key.

The files should be placed in a known location on the Web Application Server. This location will be required when [configuring Grafana to use HTTPS][].

More information about importing the certificate is given during [installation][].

#### TLS Requirements

A set of non-compulsory security measures is recommended to be applied to the Web Application Server to prevent attacks that exploit known industry security vulnerabilities. This includes disabling all versions of SSL and TLS apart from TLS 1.2, and disabling all cipher suites apart from the following:

* TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
* TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256

See [SSL Best Practices][] for a full list of the recommended security changes to be applied.

##### Apply Recommended Security Measures

{{% alert type="warning" title="Warning" %}}Disabling specific TLS versions or specific Cipher Suites can have impact on other applications as well as their communication capabilities with third party systems and services. All parties communicating together must support a shared protocol version and cipher suite, otherwise they will not be able to establish a secure communication link between each other.{{% /alert %}}

Apply the settings by following these instructions:

1. Copy from one of the application servers the `Cortex.Innovation.Install.SSLBestPractises.ps1` file extracted during the [Extract Installation Artefacts][] step into a suitable location on the Web Application Server.
1. Open a Windows PowerShell (x64) window as administrator.
1. Change the location to the folder where the `Cortex.Innovation.Install.SSLBestPractises.ps1` file was copied to using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install"
    ```

1. Run the `Cortex.Innovation.Install.SSLBestPractises.ps1` script using the following command:

    ```powershell
    .\Cortex.Innovation.Install.SSLBestPractises.ps1
    ```

1. To use all the recommended settings click `Apply all` to the first prompt.

    To selectively apply each setting select `Choose which to apply`. Each change will then be prompted with a Yes/No confirmation before applying.
1. Restart the machine when the script asks.

## Additional Application Server Requirements

These requirements apply to each of the Application Servers.

### Security Requirements

#### Installation User

A domain user which is a member of the Local Administrators group on all Application Servers must be available to perform the installation.

## Next Steps?

1. [Install Grafana][]

[2016 (x64)]: {{< url "Microsoft.Downloads.Windows.Server2016" >}}
[2019 (x64)]: {{< url "Microsoft.Downloads.Windows.Server2019" >}}
[Architecture]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.Architecture" >}}
[configuring Grafana to use HTTPS]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallGrafana.ConfigureHTTPS" >}}
[Create Self-Signed Certificates]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.Advanced.CreateSelfSignedCertificates" >}}
[Extract Installation Artefacts]:  {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ExtractInstallationArtefacts" >}}
[Grafana 8.5.4]: {{< url "Grafana.SelfManaged.Downloads.GrafanaWebApp.Windows" >}}
[Grafana Loki 2.5.0]: {{< url "Grafana.SelfManaged.Downloads.GrafanaLoki.GrafanaLokiInstallZip" >}}
[Install Grafana]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallGrafana.MainDoc" >}}
[Install IIS Basic Authentication]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallLoki.InstallIISBasicAuthentication" >}}
[installation]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallLoki.InstallCertificate" >}}
[Let’s Encrypt]: {{< url "LetsEncrypt.MainDoc" >}}
[Promtail 2.5.0]:  {{< url "Grafana.SelfManaged.Downloads.Promtail.PromtailInstallZip" >}}
[SSL Best Practices]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.Advanced.SSLBestPractices" >}}
[URL Rewrite module 2.1]: {{< url "IIS.Downloads.UrlRewrite-2_1" >}}
[Port Requirements]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.Advanced.PortRequirements" >}}
