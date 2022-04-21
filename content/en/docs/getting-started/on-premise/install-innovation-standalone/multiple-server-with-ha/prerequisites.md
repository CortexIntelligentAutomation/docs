---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: ""
weight: 20
---

# {{< param title >}}

## Hardware Requirements

{{% alert title="Note" %}}The recommended number of servers is 5, and allows each server role instance to be installed on its own server.{{% /alert %}}

| Server&nbsp;Role | Servers&nbsp;Required | CPU&nbsp;Cores&nbsp;(>&nbsp;2GHz) | RAM&nbsp;(GB) | Disk&nbsp;(GB) |  
|------------------|-----------------------|-----------------------------------|---------------|----------------------|
| Web&nbsp;Application&nbsp;Server | 1[^1] | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 75+&nbsp;*Recommended*<br>50&nbsp;*Minimum*<br>30+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |
| Application&nbsp;Server | 3&nbsp;*Bronze&nbsp;availability*[^2]<br>5&nbsp;*Silver&nbsp;availability*<br>7&nbsp;*Gold&nbsp;availability*<br>9&nbsp;*Platinum&nbsp;availability* | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 16+&nbsp;*Recommended*<br>8&nbsp;*Minimum* | 75+&nbsp;*Recommended*<br>60&nbsp;*Minimum*<br>40+&nbsp;free&nbsp;on&nbsp;%ProgramData%&nbsp;drive |
| Load&nbsp;Balancer | 1[^3] | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 4+&nbsp;*Recommended*<br>2&nbsp;*Minimum* | 50+&nbsp;*Recommended*<br>30&nbsp;*Minimum*<br>5+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive |

[^1]: It is possible to install the Web Application Server components on one of the Application Servers or the Load Balancer Server. Neither Gateway, Databases, nor the Flow Debugger Service currently offer HA support.
[^2]: Application Servers support HA via clustering. A cluster must consist of a minimum of 3 nodes, and the number of nodes must be an odd number to ensure a quorum. Currently only the Bronze availability (3 nodes) is supported. Silver, Gold and Platinum support will be added in future.
[^3]: A software-based load balancer called [gobetween](https://github.com/yyyar/gobetween) is provided with the platform. This must be installed on its own server as it doesn't support routing traffic to itself. It also doesn't currently support HA, but it may be possible to use multiple gobetween load balancers with Anycast network addressing and routing to provide high availability, as described in [https://en.wikipedia.org/wiki/Anycast](https://en.wikipedia.org/wiki/Anycast); however, this has not been verified yet. It is possible to use an [alternative load balancer](#alternative-load-balancer-requirements) to the one provided.

### Alternative Load Balancer Requirements

Must support a round robin (or similar) method of load balancing to specified ports on 3 nodes.

* Must be able to health check each node by running a batch script (that runs a PowerShell script which makes an HTTP request) that returns 1 for healthy and 0 for unhealthy.
* Must be able to access each of the Application Servers.
* Ideally it should be highly available to avoid a single point of failure in the system.

## Software Requirements

| Server&nbsp;Role | Windows&nbsp;Server[^6] | SQL&nbsp;Server[^7] | .Net | PowerShell[^8] | IIS[^9] | Other Software |
|------------------|-------------------------|---------------------|------|------------|---------|----------|
| Web&nbsp;Application&nbsp;Server | [2019&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2019?filetype=ISO)&nbsp;*Recommended*<br>[2016&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2016?filetype=ISO) | [2019](https://www.microsoft.com/en-us/evalcenter/evaluate-sql-server-2019?filetype=exe)<br />[2016](https://www.microsoft.com/en-us/evalcenter/evaluate-sql-server-2016?filetype=exe)<br />[2016&nbsp;Express](https://go.microsoft.com/fwlink/?LinkID=799012) | [Framework&nbsp;4.7.1](https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net471-web-installer) | 5.1 | 10.0.17763[^10]<br>10.0.14393[^11]<br>[URL&nbsp;Rewrite&nbsp;Module&nbsp;2.1](https://www.iis.net/downloads/microsoft/url-rewrite) | [Microsoft Web Deploy 3.0 or later](https://www.microsoft.com/en-gb/download/details.aspx?id=43717)<br>[Visual C++ Redistributable 2013 (x64)](http://www.microsoft.com/en-us/download/details.aspx?id=40784) |
| Application&nbsp;Server | [2019&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2019?filetype=ISO)&nbsp;*Recommended*<br>[2016&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2016?filetype=ISO) | | [Framework&nbsp;4.7.1](https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net471-web-installer) | 5.1 | |
| Load&nbsp;Balancer | [2019&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2019?filetype=ISO)&nbsp;*Recommended*<br>[2016&nbsp;(x64)](https://www.microsoft.com/en-US/evalcenter/evaluate-windows-server-2016?filetype=ISO) | | [Framework&nbsp;4.7.1](https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net471-web-installer) | 5.1 | |

[^6]: Windows Server Standard and Datacenter editions are supported. Filesystem **must be NTFS** and networking **must use IPv4**. Linux is not supported, but may be in the future.
[^7]: SQL Server Express, Standard and Enterprise are supported. Other databases are not supported.
[^8]: PowerShell 5.1 ships with Windows Server 2016 and 2019.
[^9]: IIS is supported; other web servers, including IIS Express are not supported.
[^10]: Ships as a windows role within Windows Server 2019.
[^11]: Ships as a windows role within Windows Server 2016.

### Service Requirements

The following Windows Services must be running on all Application Servers:

* Remote Registry
* Windows Event Log
* Performance Logs & Alerts

### Filesystem Requirements

All Application Servers must use an NTFS filesystem.

## Security Requirements

### Installation User

A domain user which is a member of the local Administrators group on all Application Servers and Load Balancer Server must be available to run the installation scripts. This is a pre-requisite of Microsoft Service Fabric, which is the HA platform that Cortex Innovation is built upon.

Local or domain users must be available to run the Application Pools for Gateway and Debugger. These users must be given `Log on as a service` and `Log on as a batch job` permissions otherwise the Application Pools will not be able to run.

### Antivirus Exclusions

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

### Domain Requirements

Only Windows domains with an Active Directory domain controller running Active Directory Domain Services are supported.

Supported versions of Active Directory are listed below:

| Version                    | Verified?      | Supported From | Supported Until  |  
|----------------------------|----------------|----------------|------------------|
| Windows Server 2003        |      ✓        | Cortex v2022.5 | To be evaluated  |
| Windows Server 2003 R2     |                | Cortex v2022.5 | To be evaluated  |
| Windows Server 2008        |                | Cortex v2022.5 | To be evaluated  |
| Windows Server 2008 R2     |      ✓        | Cortex v2022.5 | To be evaluated  |
| Windows Server 2012        |                | Cortex v2022.5 | To be evaluated  |
| Windows Server 2012 R2     |      ✓        | Cortex v2022.5 | To be evaluated  |
| Windows Server 2016        |      ✓        | Cortex v2022.5 | To be evaluated  |
| Windows Server 2019        |                | Cortex v2022.5 | To be evaluated  |
| Windows Server 2022        |                | Cortex v2022.5 | To be evaluated  |

All servers must be on the same domain and cannot be domain controllers.

### Port Requirements

Cortex Innovation and Microsoft Service Fabric require a range of [firewall ports to be opened][Port Requirements] between the servers and specific services.

If you are using Windows Firewall, some ports are opened during installation and others are opened dynamically as needed. If any other firewall is used, it will be necessary to add the rules described in [Port Requirements][] to open the correct ports.

The `Cortex.Innovation.Test.PortUsage.ps1` script is provided during installation to test the ports on each Application Server and make sure they do not overlap with any other programs; most ports may be altered if this is the case, the description will say if this is not possible.

### TLS Requirements

* TLS 1.2 must be enabled.

TODO include protocols, ciphers, hashes etc.

### Certificate Requirements

{{% alert title="Note" %}}
For production systems it is recommended that X.509 SSL wildcard certificates are obtained from a Certificate Authority and used for installation. For non-production systems, certificates can be omitted from installation and it will create and use self-signed certificates. This may prevent 3rd parties that require valid certificate verification to access the API Gateway Service.
{{% / alert %}}

An X.509 SSL wildcard certificate should be used to:

* Secure communication between the load balancer and the HA nodes on the Application Servers.
* Secure communication between the HA nodes.
* Allow HA Services to identify themselves to clients such as Gateway.
* Prevent unauthorised HA nodes from joining the HA cluster.
* Connect to Service Fabric Explorer from each of the Application Servers.

The certificate can be obtained from a Certificate Authority, such as [Let’s Encrypt](<https://letsencrypt.org/>), and must meet the following requirements:

* Subject field must be in a wildcard format, pertaining to the domain of the Application Servers (e.g. `CN=*.domain.com`).
* Subject alternative names must include any additional host names that should be able to be used to access the API Gateway Service.
* Certificate file must be in a .PFX file format, with a known password.
* Certificate file must contain the full chain of certificates.
* Certificate file must include the private key.

This file should be placed in a known location on the Application Server where the installation scripts will be run. This location will be required when running the installation script.

If required, a separate X.509 SSL certificate can be obtained to be used by the load balancer to communicate with the HA nodes. It must meet all of the other requirements laid out above, except the subject field can also be the FQDN of the load balancer (e.g. `CN=machine-name.domain.com`).

### Kerberos Requirements

TODO - Kerberos and winrm

## Client Requirements

We support the latest versions of the following browsers:

* Chrome
* Edge
* Firefox

## Next Steps?

1. [Install Application Servers and Load Balancer][]

[Port Requirements]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationStandalone.MultipleServerWithHA.Advanced.PortRequirements" >}}
[Install Application Servers and Load Balancer]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationStandalone.MultipleServerWithHA.InstallApplicationAndLoadBalancerServers" >}}
