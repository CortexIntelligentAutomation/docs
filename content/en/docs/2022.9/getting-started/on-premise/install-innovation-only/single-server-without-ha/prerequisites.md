---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "Information about the prerequisites required on each server type for installation."
weight: 20
---

# {{% param title %}}

The prerequisites required for a single server (as described in [Architecture][]) are laid out in this guide. These must be considered before undertaking installation.

## Hardware Requirements

{{% alert title="Note" %}}This configuration is not recommended for production servers that are required to scale and support HA.{{% /alert %}}

| Server&nbsp;Role | Servers&nbsp;Required | CPU&nbsp;Cores&nbsp;(>&nbsp;2GHz) | RAM&nbsp;(GB) | Disk&nbsp;(GB) |  
|------------------|-----------------------|-----------------------------------|---------------|----------------------|
| Single&nbsp;Server<br>*Application Server +<br>Web Application Server* | 1 | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 16+&nbsp;*Recommended*<br>12&nbsp;*Minimum* | 150+&nbsp;*Recommended*<br>100&nbsp;*Minimum*<br>30+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive<br>40+&nbsp;free&nbsp;on&nbsp;%ProgramData%&nbsp;drive |

## Software Requirements

| Server&nbsp;Role | Windows&nbsp;Server[^1] | SQL&nbsp;Server[^2] | .Net | PowerShell[^3] | IIS[^4] | Other Software |
|------------------|-------------------------|---------------------|------|------------|---------|----------|
| Single&nbsp;Server<br>*Application Server +<br>Web Application Server*  | [2019&nbsp;(x64)][Microsoft Server 2019]&nbsp;*Recommended*<br>[2016&nbsp;(x64)][Microsoft Server 2016] | [2019][Microsoft SQL Server 2019]<br />[2016][Microsoft SQL Server 2016]<br />[2016&nbsp;Express][Microsoft SQL Express 2016] | [Framework&nbsp;4.7.1][NET Framework 471] | 5.1 | 10.0.17763[^5]<br>10.0.14393[^6]<br>[URL&nbsp;Rewrite&nbsp;Module&nbsp;2.1][IIS Url Rewrite] | [Microsoft Web Deploy 3.0 or later][Web Deploy]<br>[Visual C++ Redistributable 2013 (x64)][C++ Redistributable] |

[^1]: Windows Server Standard and Datacenter editions are supported. Filesystem **must be NTFS** and networking **must use IPv4**. Linux is not supported, but may be in the future.
[^2]: SQL Server Express, Standard and Enterprise are supported. Other databases are not supported. Note that [Transparent Data Encryption][] is not supported on SQL Server Express.
[^3]: PowerShell 5.1 ships with Windows Server 2016 and 2019.
[^4]: IIS is supported; other web servers, including IIS Express are not supported.
[^5]: Ships as a windows role within Windows Server 2019.
[^6]: Ships as a windows role within Windows Server 2016.

## Domain Requirements

The server must be on a domain and cannot be a domain controller.

## DNS Requirements

The installation requires IP to hostname resolution to be available. Please ensure that you have the appropriate pointer (PTR) records configured  on the DNS server for the server.

## Licensing Requirements

A valid {{< ctx >}} licence file and {{< ctx >}} Innovation feature identifier must be procured from {{< ctx >}}. The feature identifier is a GUID which will be used when configuring the Gateway installation. The licence file is needed when installing the server and it should contain that server's fingerprint.

To get a licence file and feature identifier take the following steps:

1. Copy the following template to a text file:

    ```text
    Web Application/Application Server
    MachineID: 
    Fingerprint: 

    Please also include a suitable {{< ctx >}} Innovation feature identifier.
    ```

1. Extract `Cortex Innovation 2022.9 - Licence Fingerprint Generator.zip`.
1. From that folder, copy `Cortex.Licensing.FingerprintGeneration.exe` to the server.
1. Double-click `Cortex.Licensing.FingerprintGeneration.exe` to run it. A command line window will appear, containing a machine identifier and fingerprint, e.g:

    ```text
    MachineID: SERVER
    Fingerprint: 111118BA104C928319E0CBAE30844CF8B7FD8BC414D1567844D1D0830089F1C9BF5C6
    ```

1. Copy the output (machine identifier and fingerprint) to the `Web Application/Application Server` section of the text file created in the initial step. Note that the machine identifier can be changed to any string.
1. Request a licence and feature identifier by raising a case in the [{{< ctx >}} Service Portal][CORTEX Service Portal], including the contents of the text file containing all of the fingerprint and machine information in the body of the case.
1. When the licence and feature identifier have arrived, copy the file `Cortex.lic` to `%ProgramData%\Cortex\Licences` on the Web Application Server, creating the `Cortex` and `Licences` folders if they don't exist. Save the feature identifier for use when [Installing Gateway][].

## Web Browser Requirements

Gateway supports the latest versions of the following browsers:

* Chrome
* Edge
* Firefox

## Certificate Requirements

{{% alert title="Note" %}}
For production systems it is recommended that an X.509 SSL certificate is obtained from a Certificate Authority and used for installation. For non-production systems, certificates can be omitted from installation and it will create and use self-signed certificates. This may prevent 3rd parties that require valid certificate verification to access the API Gateway Service.
{{% / alert %}}

An X.509 SSL certificate (standard or wildcard) should be used to:

* Allow Application Services to identify themselves to clients such as Gateway.
* Prevent unauthorised nodes from joining the single node cluster.
* Connect to Service Fabric Explorer from the Application Server.
* Connect to Gateway.
* Allow Gateway to connect to the Flow Debugger Service.

The certificate can be obtained from a Certificate Authority, such as [Let’s Encrypt](<https://letsencrypt.org/>), and must meet the following requirements:

* Subject field must be in one of the following formats, depending on the certificate type:
  * Standard certificates must use the standard format (e.g. `CN=host.domain.com`).
  * Wildcard certificates must use the wildcard format, pertaining to the domain of the server (e.g. `CN=*.domain.com`).
* Subject alternative names must include any additional host names that should be able to be used to access the API Gateway Service.
* Subject Alternative Names (SAN): At minimum the FQDN of the server. It can also include NetBIOS Name, IP address, localhost, 127.0.0.1. It must include any additional host names that should be able to be used to access the API Gateway Service.
* Certificate file must be in a .PFX file format, with a known password.
* Certificate file must contain the full chain of certificates.
* Certificate file must include the private key.
* Key Usage extension must have a value of `Digital Signature, Key Encipherment (a0)`.
* Enhanced Key Usage must include `Server Authentication` and `Client Authentication`.

This file should be placed in a known location on the server. This location will be required when running the Application Server installation script.

{{< alert type="warning" title="Warning" >}}It is critical to set a reminder to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.RolloverCertificates" title="update certificates" >}} in good time before they expire. If they expire then the platform will cease to function and {{< ahref path="Cortex.ServicePortal.MainDoc" title="{{< ctx >}} Service Portal" >}} must be contacted for support.{{< /alert >}}

## TLS Requirements

There is a set of non-compulsory security measures, recommended to be applied to the server, in order to prevent potential attacks that exploit known industry security vulnerabilities. This includes disabling all versions of SSL and TLS apart from TLS 1.2, and disabling all cipher suites apart from the following:

* TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
* TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256

See [SSL Best Practices][] for a full list of the security changes which will be applied. The `Cortex.Innovation.Install.SSLBestPractices.ps1` script is provided during installation to apply these security changes to the server.

## Additional Application Server Requirements

### Filesystem Requirements

The server must use an NTFS filesystem.

### Service Requirements

The following Windows Services must be running on the server:

* Remote Registry
* Windows Event Log
* Performance Logs & Alerts

### Security Requirements

#### Installation User

A domain user which is a member of the Local Administrators group on the server must be available to run the installation scripts. This is a prerequisite of Microsoft Service Fabric, which is the platform that {{< ctx >}} Innovation is built upon.

#### Antivirus Exclusions

It is advised (by Microsoft Service Fabric) that the following antivirus exclusions are created on the server to reduce antivirus processing on Service Fabric artefacts:

Folder Exclusions:

* %ProgramFiles%\Microsoft Service Fabric
* %ProgramData%\SF
* %ProgramData%\SF\Logs

Process Exclusions:

* Fabric.exe
* FabricHost.exe
* FabricInstallerService.exe
* FabricSetup.exe
* FabricDeployer.exe
* ImageBuilder.exe
* FabricGateway.exe
* FabricDCA.exe
* FabricFAS.exe
* FabricUOS.exe
* FabricRM.exe
* FileStoreService.exe

A script is provided during installation to add these exclusions for Windows Defender. If any other antivirus software is running, these will need to be added manually.

If adding the exclusions manually, the Process Exclusions should be done before installation occurs, as the processes will be used during installation of the application and antivirus software can cause the installation to fail or timeout. Folder Exclusions may need to be added after installation has occurred as some antivirus software needs the folders to exist.

#### Port Requirements

{{< ctx >}} Innovation and Microsoft Service Fabric require a range of [firewall ports to be opened][Port Requirements] between the server and specific services.

If you are using Windows Firewall, some ports are opened during installation and others are opened dynamically as needed. If any other firewall is used, it will be necessary to add the rules described in [Port Requirements][] to open the correct ports.

The `Cortex.Innovation.Test.PortUsage.ps1` script is provided during installation to test the ports on the server and make sure they do not overlap with any other programs; most ports may be altered if this is the case, the description will say if this is not possible.

## Additional Web Application Server Requirements

### Security Requirements

#### Installation User

Domain users must be available to run the Application Pools for Gateway and Flow Debugger Service. These users must be given `Log on as a service` and `Log on as a batch job` permissions otherwise the Application Pools will not be able to run. Information about how to do this will be given during installation.

For Flow Debugger Service, the `NETWORK SERVICE` user can also be used.

#### Domain Requirements

For Gateway, only Windows domains with an Active Directory domain controller running Active Directory Domain Services are supported.

Supported versions of Active Directory are listed below:

| Version                    | Verified?      | Supported From | Supported Until  |  
|----------------------------|----------------|----------------|------------------|
| Windows Server 2003        |      ✓        | {{< ctx >}} v2022.9 | To be evaluated  |
| Windows Server 2003 R2     |                | {{< ctx >}} v2022.9 | To be evaluated  |
| Windows Server 2008        |                | {{< ctx >}} v2022.9 | To be evaluated  |
| Windows Server 2008 R2     |      ✓        | {{< ctx >}} v2022.9 | To be evaluated  |
| Windows Server 2012        |                | {{< ctx >}} v2022.9 | To be evaluated  |
| Windows Server 2012 R2     |      ✓        | {{< ctx >}} v2022.9 | To be evaluated  |
| Windows Server 2016        |      ✓        | {{< ctx >}} v2022.9 | To be evaluated  |
| Windows Server 2019        |                | {{< ctx >}} v2022.9 | To be evaluated  |
| Windows Server 2022        |                | {{< ctx >}} v2022.9 | To be evaluated  |

## Next Steps?

1. [Install Application Server][]

[Architecture]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.Architecture" >}}
[Install Application Server]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.InstallApplicationServer" >}}
[Installing Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.InstallGateway" >}}
[Create Self-Signed Certificates]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.CreateSelfSignedCertificates" >}}
[Port Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.PortRequirements" >}}
[SSL Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Microsoft Server 2019]: {{< url path="MSEval.WindowsServer.2019" >}}
[Microsoft Server 2016]: {{< url path="MSEval.WindowsServer.2016" >}}
[NET Framework 471]: {{< url path="MSDotNet.Framework471.MainDoc" >}}
[Microsoft SQL Server 2019]: {{< url path="MSEval.SQLServer.2019" >}}
[Microsoft SQL Server 2016]: {{< url path="MSEval.SQLServer.2016" >}}
[Microsoft SQL Express 2016]: {{< url path="MSDownload.SqlServerExpress.2016" >}}
[IIS URL Rewrite]: {{< url path="IIS.Downloads.UrlRewrite-2_1" >}}
[Web Deploy]: {{< url path="MSDownload.WebDeploy" >}}
[C++ Redistributable]: {{< url path="MSDownload.CPlusPlusRedistributable.2013" >}}
[Transparent Data Encryption]: {{< url path="MSDocs.SqlServer.TransparentDataEncryption" >}}
