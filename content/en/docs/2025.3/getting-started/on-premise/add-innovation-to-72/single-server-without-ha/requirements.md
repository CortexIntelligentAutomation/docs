---
title: "Requirements"
linkTitle: "Requirements"
description: "Information about the requirements for each server type for installation."
weight: 20
---

# {{< param title >}}

The prerequisites required for a single server (as described in [Architecture][]) are laid out in this guide. These must be considered before undertaking installation.

## Hardware Requirements

{{% alert title="Note" %}}This configuration is not recommended for production servers that are required to scale and support HA.{{% /alert %}}

| Server&nbsp;Role | Servers&nbsp;Required | CPU&nbsp;Cores&nbsp;(>&nbsp;2GHz) | RAM&nbsp;(GB) | Disk&nbsp;(GB) |  
|------------------|-----------------------|-----------------------------------|---------------|----------------------|
| Single&nbsp;Server<br>*Application Server +<br>Web Application Server* | 1 | 4+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | 16+&nbsp;*Recommended*<br>12&nbsp;*Minimum* | 160+&nbsp;*Recommended*<br>135&nbsp;*Minimum*<br>30+&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive<br>40+&nbsp;free&nbsp;on&nbsp;%ProgramData%&nbsp;drive |

## Software Requirements

| Server&nbsp;Role | Windows&nbsp;Server[^1] | .Net | PowerShell[^2] | IIS[^3] | Other Software |
|------------------|-------------------------|------|------------|---------|----------|
| Single&nbsp;Server<br>*Application Server +<br>Web Application Server*  | [2019&nbsp;(x64)][Microsoft Server 2019]&nbsp;*Recommended*<br>[2016&nbsp;(x64)][Microsoft Server 2016] | [Framework&nbsp;4.7.2][NET Framework 472] | 5.1 | 10.0.17763[^4]<br>10.0.14393[^5]<br>[URL&nbsp;Rewrite&nbsp;Module&nbsp;2.1][IIS Url Rewrite] | [Microsoft Web Deploy 3.0 or later][Web Deploy]<br>[Visual C++ Redistributable 2013 (x64)][C++ Redistributable] |

[^1]: Windows Server Standard and Datacenter editions are supported. Filesystem **must be NTFS** and networking **must use IPv4**. Linux is not supported, but may be in the future.
[^2]: PowerShell 5.1 ships with Windows Server 2016 and 2019.
[^3]: IIS is supported; other web servers, including IIS Express are not supported.
[^4]: Ships as a windows role within Windows Server 2019.
[^5]: Ships as a windows role within Windows Server 2016.

## Backup Requirements

It is important to ensure that there are relevant backups in place to be able to restore the platform in the event of a failed installation. The recommended approach would be to snapshot or backup the Virtual Machine if this is possible. If this is not possible then the following steps should be taken:

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

The server must be on a domain and cannot be a domain controller.

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

The installation requires IP to hostname resolution to be available. Please ensure that you have the appropriate pointer (PTR) records configured on the DNS server for the server.

## Licensing Requirements

A valid {{% ctx %}} licence file and {{% ctx %}} feature identifier must be procured from {{% ctx %}}. The feature identifier is a GUID which will be used when configuring the Gateway installation. The licence file is needed when installing the server and it should contain that server's fingerprint.

Details on how to obtain these are specified during the [Pre-Installation][obtain licence file] steps.

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

The server must use an NTFS filesystem.

## Service Requirements

The following Windows Services must be running on the server:

* Performance Logs & Alerts
* Remote Registry
* Windows Event Log

## Security Requirements

### Installation User

A domain user which is a member of the Local Administrators group on the server must be available to run the installation scripts. This is a prerequisite of Microsoft Service Fabric, which is the platform that {{% ctx %}} is built upon.

### Antivirus Exclusions

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

### Port Requirements

{{% ctx %}} and Microsoft Service Fabric require a range of [firewall ports to be opened][Port Requirements] between the server and specific services.

If you are using Windows Firewall, some ports are opened during installation and others are opened dynamically as needed. If any other firewall is used, it will be necessary to add the rules described in [Port Requirements][] to open the correct ports.

The `Cortex.Innovation.Test.PortUsage.ps1` script is provided during installation to test the ports on the server and make sure they do not overlap with any other programs; most ports may be altered if this is the case, the description will say if this is not possible.

### Certificate Requirements

{{< alert title="Important" color="warning" >}}It is critical to set a reminder to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.RolloverCertificates" title="update certificates" >}} in good time before they expire. If they expire then the platform will cease to function and {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}} must be contacted for support.{{< /alert >}}

{{% alert title="Note" %}}
For production platforms it is recommended that an X.509 SSL certificate is obtained from a Certificate Authority and used for installation. For non-production platforms, certificates can be omitted from installation and it will create and use self-signed certificates. This may prevent 3rd parties that require valid certificate verification to access the API Gateway Service.
{{% / alert %}}

An X.509 SSL certificate (standard or wildcard) should be used to:

* Allow Application Services to identify themselves to clients such as Gateway.
* Prevent unauthorised nodes from joining the single node cluster.
* Connect to Service Fabric Explorer from the Application Server.
* Connect to Gateway.

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

### TLS Requirements

There is a set of non-compulsory security measures, recommended to be applied to the server, in order to prevent potential attacks that exploit known industry security vulnerabilities. This includes disabling all versions of SSL and TLS apart from TLS 1.2, and disabling all cipher suites apart from the following:

* TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
* TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256

See [SSL Best Practices][] for a full list of the security changes which will be applied. The `Cortex.Innovation.Install.SSLBestPractices.ps1` script is provided during installation to apply these security changes to the server.

### Encryption Requirements

{{< section "/prerequisites/add-innovation-to-7.2/encryption-requirements.md">}}

## Next Steps?

1. [Pre-Installation][]

[Architecture]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.Architecture" >}}
[C++ Redistributable]: {{< url path="MSDownload.CPlusPlusRedistributable.2013" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Create Full DB Backup]: {{< url path="MSDocs.SqlServer.CreateFullDbBackup" >}}
[IIS URL Rewrite]: {{< url path="IIS.Downloads.UrlRewrite-2_1" >}}
[Microsoft Server 2019]: {{< url path="MSEval.WindowsServer.2019" >}}
[Microsoft Server 2016]: {{< url path="MSEval.WindowsServer.2016" >}}
[NET Framework 472]: {{< url path="MSDotNet.Framework472.MainDoc" >}}
[obtain licence file]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.ObtainLicence" >}}
[Port Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.PortRequirements" >}}
[Pre-Installation]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.PreInstallation" >}}
[SSL Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}
[Upgrading Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.SingleServerWithoutHA.ConfigureCortexGatewayInstallationScriptNew" >}}
[Web Deploy]: {{< url path="MSDownload.WebDeploy" >}}
