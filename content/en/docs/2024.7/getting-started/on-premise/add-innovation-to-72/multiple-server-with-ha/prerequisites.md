---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "Information about the prerequisites required on each server type for installation."
weight: 20
---

# {{< param title >}}

The prerequisites required for each server role (as described in [Architecture][]) are laid out in this guide. These must be considered before undertaking installation.

{{% alert title="Note" %}}
All server roles (e.g. Load Balancer, Application Server, Web Application Server) referenced in the rest of this guide will refer to Innovation server roles unless otherwise stated.
{{% / alert %}}

## Hardware Requirements


| Server&nbsp;Role | Servers&nbsp;Required | CPU&nbsp;Cores&nbsp;(>&nbsp;2GHz) | RAM&nbsp;(GB) | Disk&nbsp;(GB) |  
|------------------|-----------------------|-----------------------------------|---------------|----------------------|
| New Innovation Load&nbsp;Balancer | 1[^1] | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 50+&nbsp;*Recommended*<br>30&nbsp;*Minimum*<br>5+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |
| New Innovation Application&nbsp;Server | 3&nbsp;*Bronze&nbsp;availability*[^2]<br>5&nbsp;*Silver&nbsp;availability*<br>7&nbsp;*Gold&nbsp;availability*<br>9&nbsp;*Platinum&nbsp;availability* | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 16+&nbsp;*Recommended*<br>8&nbsp;*Minimum* | 75+&nbsp;*Recommended*<br>60&nbsp;*Minimum*<br>40+&nbsp;free&nbsp;on&nbsp;%ProgramData%&nbsp;drive |
| Existing V7.2 Application Server with Gateway<br>+ Upgrade to Innovation Web Application Server | 1 | 4+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 16+&nbsp;*Recommended*<br>12&nbsp;*Minimum* | 160+&nbsp;*Recommended*<br>135&nbsp;*Minimum*<br>30+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive<br>40+&nbsp;free&nbsp;on&nbsp;%ProgramData%&nbsp;drive  |

[^1]: A software-based load balancer called [gobetween][] is provided with the platform. This must be installed on its own server as it doesn't support routing traffic to itself. It also doesn't currently support HA, but it may be possible to use multiple gobetween load balancers with Anycast network addressing and routing to provide high availability, as described in [https://en.wikipedia.org/wiki/Anycast][Anycast]; however, this has not been verified yet. It is possible to use an [alternative load balancer][] to the one provided.
[^2]: Application Servers support HA via clustering. A cluster must consist of a minimum of 3 nodes, and the number of nodes must be an odd number to ensure a quorum. Currently only the Bronze availability (3 nodes) is supported. Silver, Gold and Platinum support will be added in future.

## Software Requirements

| Server&nbsp;Role | Windows&nbsp;Server[^1] | .Net | PowerShell[^2] | IIS[^3] | Other Software |
|------------------|-------------------------|------|------------|---------|----------|
| Load&nbsp;Balancer | [2019&nbsp;(x64)][Microsoft Server 2019]&nbsp;*Recommended*<br>[2016&nbsp;(x64)][Microsoft Server 2016] | [Framework&nbsp;4.7.2][NET Framework 472] | 5.1 | |
| Application&nbsp;Server | [2019&nbsp;(x64)][Microsoft Server 2019]&nbsp;*Recommended*<br>[2016&nbsp;(x64)][Microsoft Server 2016] | [Framework&nbsp;4.7.2][NET Framework 472] | 5.1 | |
| Web&nbsp;Application&nbsp;Server | [2019&nbsp;(x64)][Microsoft Server 2019]&nbsp;*Recommended*<br>[2016&nbsp;(x64)][Microsoft Server 2016] | [Framework&nbsp;4.7.2][NET Framework 472] | 5.1 | 10.0.17763[^4]<br>10.0.14393[^5]<br>[URL&nbsp;Rewrite&nbsp;Module&nbsp;2.1][IIS Url Rewrite] | [Microsoft Web Deploy 3.0 or later][Web Deploy]<br>[Visual C++ Redistributable 2013 (x64)][C++ Redistributable] |

[^1]: Windows Server Standard and Datacenter editions are supported. Filesystem **must be NTFS** and networking **must use IPv4**. Linux is not supported, but may be in the future.
[^2]: PowerShell 5.1 ships with Windows Server 2016 and 2019.
[^3]: IIS is supported; other web servers, including IIS Express are not supported.
[^4]: Ships as a windows role within Windows Server 2019.
[^5]: Ships as a windows role within Windows Server 2016.

## Backup Requirements

It is important to ensure that there are relevant backups in place to be able to restore the platform in the event of a failed installation. The recommended approach would be to snapshot or backup the Virtual Machine(s) that host Cortex Gateway and SQL Server if this is possible. If this is not possible then the following steps should be taken:

### Backup Git Repositories

1. On the Web Application Server, if you do not know the location of the Repo folder you can check where it is located else skip to Step 2:
    1. Navigate to the `gateway` IIS folder (usually `%SystemDrive%\inetpub\wwwroot\Cortex\gateway`, e.g. `C:\inetpub\wwwroot\Cortex\gateway`)
    1. Open the `web.config` file.
    1. Find the value of the `connectionString` named `CortexRepositories`
1. In File Explorer, navigate to the Repo Folder.
1. Copy the Repo folder to another location.

### Backup SQL Server Databases

Ensure that there are recent full backups of both the CortexWeb and CortexWeb.Auth Databases. For information on generating a full backup see Microsoft's guidance [here][Create Full DB Backup].

In the event of a failed installation contact [{{% ctx %}} Service Portal][CORTEX Service Portal] who will be able to assist with resolving the problems or with restoring the platform.

## Domain Requirements

All servers must be on the same domain and cannot be domain controllers.

## Active Directory Requirements

For Gateway, only Windows domains with an Active Directory domain controller running Active Directory Domain Services are supported.

Supported versions of Active Directory are listed below:

| Version                    | Verified?      | Supported From | Supported Until  |  
|----------------------------|----------------|----------------|------------------|
| Windows Server 2003        |      ✓        | {{% ctx %}} v2022.9 | To be evaluated  |
| Windows Server 2003 R2     |                | {{% ctx %}} v2022.9 | To be evaluated  |
| Windows Server 2008        |                | {{% ctx %}} v2022.9 | To be evaluated  |
| Windows Server 2008 R2     |      ✓        | {{% ctx %}} v2022.9 | To be evaluated  |
| Windows Server 2012        |                | {{% ctx %}} v2022.9 | To be evaluated  |
| Windows Server 2012 R2     |      ✓        | {{% ctx %}} v2022.9 | To be evaluated  |
| Windows Server 2016        |      ✓        | {{% ctx %}} v2022.9 | To be evaluated  |
| Windows Server 2019        |                | {{% ctx %}} v2022.9 | To be evaluated  |
| Windows Server 2022        |                | {{% ctx %}} v2022.9 | To be evaluated  |

## DNS Requirements

The installation requires IP to hostname resolution to be available. Please ensure that you have the appropriate pointer (PTR) records configured  on the DNS server for all of your servers (Web, Application and Load Balancer).

## Licensing Requirements

A valid {{% ctx %}} licence file and {{% ctx %}} Innovation with v7.2 feature identifier must be procured from {{% ctx %}}. The feature identifier is a GUID which will be used when configuring the Gateway installation. The licence file is needed when installing the Web Application server and it should contain fingerprints for the Web Application Server and each Application Server.

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

    Please also include a suitable {{% ctx %}} Innovation with v7.2 feature identifier.
    ```

1. Extract `Cortex Innovation {{< version >}} - Licence Fingerprint Generator.zip`.
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
1. Request a licence and feature identifier by raising a case in the [{{% ctx %}} Service Portal][CORTEX Service Portal], including the contents of the text file containing all of the fingerprint and machine information in the body of the case.
1. When the licence and feature identifier have arrived, copy the file `Cortex.lic` to `%ProgramData%\Cortex\Licences` on the Web Application Server, creating the `Cortex` and `Licences` folders if they don't exist. Save the feature identifier for use when [Upgrading Gateway][].

## Ensure correct owner of {{% ctx %}} Gateway Repo and Website folders

In order for the upgrade to run smoothly, it is necessary to ensure that the owner and permissions of the Repo and Website folders are set correctly:

1. If you do not know the location of the Repo folder you can check where it is located else skip to Step 2:
    1. Navigate to the `gateway` IIS folder (usually `%SystemDrive%\inetpub\wwwroot\Cortex\gateway`, e.g. `C:\inetpub\wwwroot\Cortex\gateway`)
    1. Open the `web.config` file.
    1. Find the value of the `connectionString` named `CortexRepositories`
1. Navigate to the `Repo` folder, not opening it.
1. Right-click on the `Repo` folder and click `Properties`.
1. In the dialog, click the `Security` tab.
1. Click `Advanced` at the bottom of the dialog.
1. Check that the `Owner` is stated as the user that runs the {{% ctx %}} Gateway Application pool. If not change it:
    1. Next to the name of the current Owner, click `Change`.
    1. In the dialog enter the username of the user that runs the {{% ctx %}} Gateway Application pool.
    1. Click `Check Names` and ensure that the user is validated.
    1. Click `OK` on the Select User dialog.
    1. Select to `Replace owner on subcontainers and objects`.
    1. Click `OK` on the Advanced Security Settings dialog.
1. Check the `{{% ctx %}} Gateway Application Pool` user for Gateway is listed in the `Group or user names` and has `Modify` permissions.
1. If the `Application Pool` user for Gateway is not listed:
   1. Click the `Edit...` button.
   1. Click the `Add...` button.
   1. Enter the username of the application pool user and click `OK`.
   1. In the `Permissions` section at the bottom, check `Modify`.
   1. Click `OK`.
1. If the `{{% ctx %}} Gateway Application Pool` user for Gateway is listed but does not have permissions:
   1. Click the `Edit...` button.
   1. Select the `{{% ctx %}} Gateway Application Pool` user.
   1. Check `Modify`.
   1. Click `OK`.
1. Repeat these steps for the `Cortex` IIS folder (usually `%SystemDrive%\inetpub\wwwroot\Cortex`, e.g. `C:\inetpub\wwwroot\Cortex`)

## Web Browser Requirements

Gateway supports the latest versions of the following browsers:

* Chrome
* Edge
* Firefox

## Filesystem Requirements

The Web Application Server, each Application Server and [gobetween][] Load Balancer Server (if used) must:

* use an NTFS filesystem.
* enable Network Discovery and File Sharing

To enable  Network Discovery and File Sharing:

1. Open File Explorer.
1. Click `Network` on the left.
1. A banner similar to the following will appear if Network Discovery and File Sharing is turned off:
    {{< figure src="/images/Network Discovery 1.png" title="Network and File Discovery Disabled" >}}
1. Click the banner.
1. Click `Turn on network discovery and file sharing`:
    {{< figure src="/images/Network Discovery 2.png" title="Enable Network and File Discovery" >}}

## Service Requirements

On the Web Application Server and each Application Server, the following Windows Services must be running:

* Performance Logs & Alerts
* Remote Registry
* Windows Event Log

## Security Requirements

### Installation User

On all Application Servers, Web Application Server and Load Balancer Server, a domain user, which is a member of the Local Administrators group, must be available to run the installation scripts. This is a prerequisite of Microsoft Service Fabric, which is the HA platform that {{% ctx %}} Innovation is built upon.

### Antivirus Exclusions

It is advised (by Microsoft Service Fabric) that the following antivirus exclusions are created on the Web Application Server and each Application Server to reduce antivirus processing on Service Fabric artefacts:

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

If you are using a built-in load balancer, it is advised that the following antivirus exclusions are created on the Load Balancer Server to reduce antivirus processing on service health checks:

Process Exclusions:

* gobetween.exe
* Cortex.Installation.HealthCheck.exe

A script is provided during installation to add these exclusions for Windows Defender. If any other antivirus software is running, these will need to be added manually.

If adding the exclusions manually, the Process Exclusions should be done before installation occurs, as the processes will be used during installation of the application and antivirus software can cause the installation to fail or timeout. Folder Exclusions may need to be added after installation has occurred as some antivirus software needs the folders to exist.

### Port Requirements

{{% ctx %}} Innovation and Microsoft Service Fabric require a range of [firewall ports to be opened][Port Requirements] between the servers and specific services.

If you are using Windows Firewall, some ports are opened during installation and others are opened dynamically as needed. If any other firewall is used, it will be necessary to add the rules described in [Port Requirements][] to open the correct ports.

The `Cortex.Innovation.Test.PortUsage.ps1` script is provided during installation to test the ports on the Web Application Server and each Application Server and make sure they do not overlap with any other programs; most ports may be altered if this is the case, the description will say if this is not possible.

### Certificate Requirements

{{< alert title="Important" color="warning" >}}It is critical to set a reminder to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.RolloverCertificates" title="update certificates" >}} in good time before they expire. If they expire then the platform will cease to function and {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}} must be contacted for support.{{< /alert >}}

#### Application Servers

{{% alert title="Note" %}}
For production platforms it is recommended that X.509 SSL wildcard certificates are obtained from a Certificate Authority and used for installation. For non-production platforms, certificates can be omitted from installation and it will create and use self-signed certificates. This may prevent 3rd parties that require valid certificate verification to access the API Gateway Service.
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

#### Web Application Server

{{% ctx %}} Gateway requires an X.509 SSL certificate to be installed on the Web Application Server. The certificate must have the following properties:

* Enhanced Key Usage: `Server Authentication` and `Client Authentication`
* Subject Alternative Names (SAN): At minimum the FQDN of the Server. It can also include NetBIOS Name, IP address, localhost, 127.0.0.1

If the user tries to navigate to an address not in the SAN list, then they will receive a certificate error.

{{% alert title="Important" color="warning" %}}
Certificates, wildcard certificates, auto-generated self-signed certificates and manually created self-signed certificates can be used. However, self-signed certificates are not recommended for production instances.
Details on how to create a self-signed certificate can be found at {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.CreateSelfSignedCertificates" title="Create Self-Signed Certificates" >}}.
{{% /alert %}}

More information about importing the certificate is given during installation.

### TLS Requirements

There is a set of non-compulsory security measures, recommended to be applied to the Web Application Server and each Application Server, in order to prevent potential attacks that exploit known industry security vulnerabilities. This includes disabling all versions of SSL and TLS apart from TLS 1.2. And disabling all cipher suites apart from the following:

* TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
* TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256

See [SSL Best Practices][] for a full list of the security changes which will be applied.

A script is provided during installation to apply these security changes:

* For the Application servers: `Cortex.Innovation.Install.Multiple.SSLBestPractices.ps1`
* For the Web Application Server: `Cortex.Innovation.Install.SSLBestPractices.ps1`

### Encryption Requirements

{{< section "/prerequisites/add-innovation-to-7.2/encryption-requirements.md">}}

## Alternative Load Balancer Requirements

Innovation has a [gobetween][] load balancer included that isn't highly available; It is possible to use an alternative. The requirements for installing an alternative load balancer are as follows:

* Must support a round robin (or similar) method of load balancing to specified ports on 3 nodes.
* Must be able to health check each node by running a predefined batch script (`ApiGatewayTypeHealthcheck.bat`, which resides in the `gobetween` folder of the `Cortex Innovation {{< version >}} - App Server Install Scripts`) that returns 1 for healthy and 0 for unhealthy.
* Must be able to access each of the Application Servers via HTTPS.
* Ideally it should be highly available to avoid a single point of failure in the system.

## Next Steps?

1. [Install Application Servers and Load Balancer][]

[alternative load balancer]: {{< ref "#alternative-load-balancer-requirements" >}}
[Anycast]: {{< url path="Anycast.MainDoc" >}}
[Architecture]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.Architecture" >}}
[Create Full DB Backup]: {{< url path="MSDocs.SqlServer.CreateFullDbBackup" >}}
[C++ Redistributable]: {{< url path="MSDownload.CPlusPlusRedistributable.2013" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[gobetween]: {{< url path="GoBetween.MainDoc" >}}
[IIS Url Rewrite]: {{< url path="IIS.Downloads.UrlRewrite-2_1" >}}
[Install Application Servers and Load Balancer]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
[Microsoft Server 2016]: {{< url path="MSEval.WindowsServer.2016" >}}
[Microsoft Server 2019]: {{< url path="MSEval.WindowsServer.2019" >}}
[NET Framework 472]: {{< url path="MSDotNet.Framework472.MainDoc" >}}
[Port Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.PortRequirements" >}}
[Recommended Architecture]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.RecommendedArchitecture" >}}
[SSL Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Upgrading Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew" >}}
[Web Deploy]: {{< url path="MSDownload.WebDeploy" >}}
