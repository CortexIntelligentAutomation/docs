---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "Information about the prerequisites required on each server type for installation."
weight: 20
---

# {{% param title %}}

The prerequisites required for each server role (as described in [Architecture][]) are laid out in this guide. These must be considered before undertaking installation.

## Hardware Requirements

{{% alert title="Note" %}}The recommended number of servers is 5, and allows each server role instance to be installed on its own server.{{% /alert %}}

| Server&nbsp;Role | Servers&nbsp;Required | CPU&nbsp;Cores&nbsp;(>&nbsp;2GHz) | RAM&nbsp;(GB) | Disk&nbsp;(GB) |  
|------------------|-----------------------|-----------------------------------|---------------|----------------------|
| Load&nbsp;Balancer | 1[^1] | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 50+&nbsp;*Recommended*<br>30&nbsp;*Minimum*<br>5+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |
| Application&nbsp;Server | 3&nbsp;*Bronze&nbsp;availability*[^2]<br>5&nbsp;*Silver&nbsp;availability*<br>7&nbsp;*Gold&nbsp;availability*<br>9&nbsp;*Platinum&nbsp;availability* | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 16+&nbsp;*Recommended*<br>8&nbsp;*Minimum* | 75+&nbsp;*Recommended*<br>60&nbsp;*Minimum*<br>40+&nbsp;free&nbsp;on&nbsp;%ProgramData%&nbsp;drive |
| Web&nbsp;Application&nbsp;Server | 1 | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 75+&nbsp;*Recommended*<br>50&nbsp;*Minimum*<br>30+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |

[^1]: A software-based load balancer called [gobetween][] is provided with the platform. This must be installed on its own server as it doesn't support routing traffic to itself. It also doesn't currently support HA, but it may be possible to use multiple gobetween load balancers with Anycast network addressing and routing to provide high availability, as described in [https://en.wikipedia.org/wiki/Anycast][Anycast]; however, this has not been verified yet. It is possible to use an [alternative load balancer][] to the one provided.
[^2]: Application Servers support HA via clustering. A cluster must consist of a minimum of 3 nodes, and the number of nodes must be an odd number to ensure a quorum. Currently only the Bronze availability (3 nodes) is supported. Silver, Gold and Platinum support will be added in future.

## Software Requirements

| Server&nbsp;Role | Windows&nbsp;Server[^3] | SQL&nbsp;Server[^4] | .Net | PowerShell[^5] | IIS[^6] | Other Software |
|------------------|-------------------------|---------------------|------|------------|---------|----------|
| Load&nbsp;Balancer | [2019&nbsp;(x64)][Microsoft Server 2019]&nbsp;*Recommended*<br>[2016&nbsp;(x64)][Microsoft Server 2016] | | [Framework&nbsp;4.7.1][NET Framework 471] | 5.1 | |
| Application&nbsp;Server | [2019&nbsp;(x64)][Microsoft Server 2019]&nbsp;*Recommended*<br>[2016&nbsp;(x64)][Microsoft Server 2016] | | [Framework&nbsp;4.7.1][NET Framework 471] | 5.1 | |
| Web&nbsp;Application&nbsp;Server | [2019&nbsp;(x64)][Microsoft Server 2019]&nbsp;*Recommended*<br>[2016&nbsp;(x64)][Microsoft Server 2016] | [2019][Microsoft SQL Server 2019]<br />[2016][Microsoft SQL Server 2016]<br />[2016&nbsp;Express][Microsoft SQL Express 2016] | [Framework&nbsp;4.7.1][NET Framework 471] | 5.1 | 10.0.17763[^7]<br>10.0.14393[^8]<br>[URL&nbsp;Rewrite&nbsp;Module&nbsp;2.1][IIS Url Rewrite] | [Microsoft Web Deploy 3.0 or later][Web Deploy]<br>[Visual C++ Redistributable 2013 (x64)][C++ Redistributable] |

[^3]: Windows Server Standard and Datacenter editions are supported. Filesystem **must be NTFS** and networking **must use IPv4**. Linux is not supported, but may be in the future.
[^4]: SQL Server Express, Standard and Enterprise are supported. Other databases are not supported. Note that [Transparent Data Encryption][] is not supported on SQL Server Express.
[^5]: PowerShell 5.1 ships with Windows Server 2016 and 2019.
[^6]: IIS is supported; other web servers, including IIS Express are not supported.
[^7]: Ships as a windows role within Windows Server 2019.
[^8]: Ships as a windows role within Windows Server 2016.

## Domain Requirements

All servers must be on the same domain and cannot be domain controllers.

## DNS Requirements

The installation requires IP to hostname resolution to be available. Please ensure that you have the appropriate pointer (PTR) records configured  on the DNS server for all of your servers (Web, Application and Load Balancer).

## Licensing Requirements

A valid Cortex licence file and Cortex Innovation feature identifier must be procured from Cortex. The feature identifier is a GUID which will be used when configuring the Gateway installation. The licence file is needed when installing the Web Application server and it should contain fingerprints for the Web Application Server and each Application Server.

To get a licence file and feature identifier take the following steps:

1. Copy the following template to a text file:

    ```text
    Web Application Server
    MachineID: 
    Fingerprint: 

    Application Server 1
    MachineID: 
    Fingerprint: 

    Application Server 2
    MachineID: 
    Fingerprint: 

    Application Server 3
    MachineID: 
    Fingerprint: 

    Please also include a suitable Cortex Innovation feature identifier.
    ```

1. Extract `Cortex Innovation 2022.6 - Licence Fingerprint Generator.zip`.
1. From that folder, copy `Cortex.Licensing.FingerprintGeneration.exe` to the Web Application server.
1. Double-click `Cortex.Licensing.FingerprintGeneration.exe` to run it. A command line window will appear, containing a machine identifier and fingerprint, e.g:

    ```text
    MachineID: WEBAPP-SERVER
    Fingerprint: 111118BA104C928319E0CBAE30844CF8B7FD8BC414D1567844D1D0830089F1C9BF5C6
    ```

1. Copy the output (machine identifier and fingerprint) to the `Web Application Server` section of the text file created in the initial step. Note that the machine identifier can be changed to any string, provided that it is different for each server.
1. For each Application Server take the following steps:
    1. Copy `Cortex.Licensing.FingerprintGeneration.exe` to the Application server.
    1. Double-click `Cortex.Licensing.FingerprintGeneration.exe` to run it. A command line window will appear, containing a machine identifier and fingerprint, e.g:

        ```text
        MachineID: APP-SERVER1
        Fingerprint: 111118BA104C928319E0CBAE30844CF8B7FD8BC414D1567844D1D0830089F1C9BF5C6
        ```

    1. Copy the output (machine identifier and fingerprint) to one of the `Application Server` sections of the text file created in the initial step. Note that the machine identifier can be changed to any string, provided that it is different for each server.
1. Request a licence and feature identifier by raising a case in the [Cortex Service Portal][], including the contents of the text file containing all of the fingerprint and machine information in the body of the case.
1. When the licence and feature identifier have arrived, copy the file `Cortex.lic` to `%ProgramData%\Cortex\Licences` on the Web Application Server, creating the `Cortex` and `Licences` folders if they don't exist. Save the feature identifier for use when [Installing Gateway][].

## Web Browser Requirements

Gateway supports the latest versions of the following browsers:

* Chrome
* Edge
* Firefox

## Additional Load Balancer Server Requirements

### Alternative Load Balancer Requirements

Innovation has a [gobetween][] load balancer included that isn't highly available; It is possible to use an alternative. The requirements for installing an alternative load balancer are as follows:

* Must support a round robin (or similar) method of load balancing to specified ports on 3 nodes.
* Must be able to health check each node by running a predefined batch script (`ApiGatewayTypeHealthcheck.bat`, which resides in the `gobetween` folder of the `Cortex Innovation 2022.6 - App Server Install Scripts`) that returns 1 for healthy and 0 for unhealthy.
* Must be able to access each of the Application Servers via HTTPS.
* Ideally it should be highly available to avoid a single point of failure in the system.

## Additional Application Server Requirements

### Filesystem Requirements

All Application Servers must use an NTFS filesystem.

Network Discovery and File Sharing should be enabled on each Application Server:

1. Open File Explorer.
1. Click `Network` on the left.
1. A banner similar to the following will appear if Network Discovery and File Sharing is turned off:
    {{< figure src="/images/Network Discovery 1.png" title="Network and File Discovery Disabled" >}}
1. Click the banner.
1. Click `Turn on network discovery and file sharing`:
    {{< figure src="/images/Network Discovery 2.png" title="Enable Network and File Discovery" >}}

### Service Requirements

The following Windows Services must be running on all Application Servers:

* Remote Registry
* Windows Event Log
* Performance Logs & Alerts

### Security Requirements

#### Installation User

A domain user which is a member of the Local Administrators group on all Application Servers and Load Balancer Server must be available to run the installation scripts. This is a prerequisite of Microsoft Service Fabric, which is the HA platform that Cortex Innovation is built upon.

#### Antivirus Exclusions

It is advised (by Microsoft Service Fabric) that the following antivirus exclusions are created on each Application Server to reduce antivirus processing on Service Fabric artefacts:

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

Cortex Innovation and Microsoft Service Fabric require a range of [firewall ports to be opened][Port Requirements] between the servers and specific services.

If you are using Windows Firewall, some ports are opened during installation and others are opened dynamically as needed. If any other firewall is used, it will be necessary to add the rules described in [Port Requirements][] to open the correct ports.

The `Cortex.Innovation.Test.PortUsage.ps1` script is provided during installation to test the ports on each Application Server and make sure they do not overlap with any other programs; most ports may be altered if this is the case, the description will say if this is not possible.

#### Certificate Requirements

{{% alert title="Note" %}}
For production systems it is recommended that X.509 SSL wildcard certificates are obtained from a Certificate Authority and used for installation. For non-production systems, certificates can be omitted from installation and it will create and use self-signed certificates. This may prevent 3rd parties that require valid certificate verification to access the API Gateway Service.
{{% / alert %}}

An X.509 SSL wildcard certificate should be used to:

* Secure communication between the load balancer and the nodes on the Application Servers.
* Secure communication between the Application Services.
* Allow Application Services to identify themselves to clients such as Gateway.
* Prevent unauthorised nodes from joining the HA cluster.
* Connect to Service Fabric Explorer from each of the Application Servers.

The certificate can be obtained from a Certificate Authority, such as [Let’s Encrypt](<https://letsencrypt.org/>), and must meet the following requirements:

* Subject field must be in a wildcard format, pertaining to the domain of the Application Servers (e.g. `CN=*.domain.com`).
* Subject alternative names must include any additional host names that should be able to be used to access the API Gateway Service.
* Certificate file must be in a .PFX file format, with a known password.
* Certificate file must contain the full chain of certificates.
* Certificate file must include the private key.
* Key Usage extension must have a value of `Digital Signature, Key Encipherment (a0)`.
* Enhanced Key Usage must include `Server Authentication` and `Client Authentication`.

This file should be placed in a known location on the Application Server where the installation scripts will be run. This location will be required when running the installation script.

If required, a separate X.509 SSL certificate can be obtained to be used by the load balancer to communicate with the Application Services. It must meet all of the other requirements laid out above, except the subject field can also be the FQDN of the load balancer (e.g. `CN=machine-name.domain.com`).

{{< alert type="warning" title="Warning" >}}It is critical to set a reminder to {{< ahref "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.RolloverCertificates" "update certificates" >}} in good time before they expire. If they expire then the platform will cease to function and {{< ahref "Cortex.ServicePortal.MainDoc" "Cortex Service Portal" >}} must be contacted for support.{{< /alert >}}

#### TLS Requirements

There is a set of non-compulsory security measures, recommended to be applied to Web Application Servers, in order to prevent potential attacks that exploit known industry security vulnerabilities. This includes disabling all versions of SSL and TLS apart from TLS 1.2. And disabling all cipher suites apart from the following:

* TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
* TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256

See [SSL Best Practices][] for a full list of the security changes which will be applied. The `Cortex.Innovation.Install.Multiple.SSLBestPractices.ps1` script is provided during installation to apply these security changes to the Web Application Server.

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
| Windows Server 2003        |      ✓        | Cortex v2022.6 | To be evaluated  |
| Windows Server 2003 R2     |                | Cortex v2022.6 | To be evaluated  |
| Windows Server 2008        |                | Cortex v2022.6 | To be evaluated  |
| Windows Server 2008 R2     |      ✓        | Cortex v2022.6 | To be evaluated  |
| Windows Server 2012        |                | Cortex v2022.6 | To be evaluated  |
| Windows Server 2012 R2     |      ✓        | Cortex v2022.6 | To be evaluated  |
| Windows Server 2016        |      ✓        | Cortex v2022.6 | To be evaluated  |
| Windows Server 2019        |                | Cortex v2022.6 | To be evaluated  |
| Windows Server 2022        |                | Cortex v2022.6 | To be evaluated  |

#### Certificate Requirements

Both Gateway and the Flow Debugger Service require an X.509 SSL certificate to be installed on the Web Application Server. The certificate must have the following properties:

* Enhanced Key Usage: `Server Authentication` and `Client Authentication`
* Subject Alternative Names (SAN): At minimum the FQDN of the Server. It can also include NetBIOS Name, IP address, localhost, 127.0.0.1

If the user tries to navigate to an address not in the SAN list, then they will receive a certificate error.

Wildcard certificates and self-signed certificates can also be used. However, self-signed certificates are not recommended for production instances. Details on how to create a self-signed certificate can be found at [Create Self-Signed Certificates][].

The certificate may be the same one used for the Application Server installation.

More information about importing the certificate is given during installation.

#### TLS Requirements

There is a set of non-compulsory security measures, recommended to be applied to Web Application Servers, in order to prevent potential attacks that exploit known industry security vulnerabilities. This includes disabling all versions of SSL and TLS apart from TLS 1.2. And disabling all cipher suites apart from the following:

* TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
* TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256

See [SSL Best Practices][] for a full list of the security changes which will be applied. The `Cortex.Innovation.Install.SSLBestPractices.ps1` script is provided during installation to apply these security changes to the Web Application Server.

## Next Steps?

1. [Install Application Servers and Load Balancer][]

[Port Requirements]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.PortRequirements" >}}
[Install Application Servers and Load Balancer]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Installing Gateway]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.InstallGateway" >}}
[Architecture]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.Architecture" >}}
[Create Self-Signed Certificates]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.CreateSelfSignedCertificates" >}}
[SSL Best Practices]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[gobetween]: {{< url "GoBetween.MainDoc" >}}
[Cortex Service Portal]: {{< url "Cortex.ServicePortal.MainDoc" >}}
[Anycast]: {{< url "Anycast.MainDoc" >}}
[alternative load balancer]: {{< ref "#alternative-load-balancer-requirements" >}}
[Microsoft Server 2019]: {{< url "MSEval.WindowsServer.2019" >}}
[Microsoft Server 2016]: {{< url "MSEval.WindowsServer.2016" >}}
[NET Framework 471]: {{< url "MSDotNet.Framework471.MainDoc" >}}
[Microsoft SQL Server 2019]: {{< url "MSEval.SQLServer.2019" >}}
[Microsoft SQL Server 2016]: {{< url "MSEval.SQLServer.2016" >}}
[Microsoft SQL Express 2016]: {{< url "MSDownload.SqlServerExpress.2016" >}}
[IIS Url Rewrite]: {{< url "IIS.Downloads.UrlRewrite-2_1" >}}
[Web Deploy]: {{< url "MSDownload.WebDeploy" >}}
[C++ Redistributable]: {{< url "MSDownload.CPlusPlusRedistributable.2013" >}}
[Transparent Data Encryption]: {{< url "MSDocs.SqlServer.TransparentDataEncryption" >}}
