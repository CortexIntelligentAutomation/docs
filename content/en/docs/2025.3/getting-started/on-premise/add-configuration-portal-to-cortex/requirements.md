---
title: "Requirements"
linkTitle: "Requirements"
description: "Information about the requirements required."
weight: 10
---

# {{% param title %}}

The requirements for a server installation of the {{% ctx %}} Configuration Portal are laid out in this guide. These must be considered before undertaking installation.

{{< alert color="warning" title="Important" >}}
The Configuration Portal must be installed on the Web Application Server where {{% ctx %}} Gateway is installed.For any other installation scenario, please contact {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}}.
{{< /alert >}}

## Domain Requirements

The server must be on a domain and cannot be a domain controller.

## Active Directory Requirements

For Gateway, only Windows domains with an Active Directory domain controller running Active Directory Domain Services are supported.

Supported versions of Active Directory are listed below:

| Version                | Verified? | Supported From      | Supported Until |
|------------------------|-----------|---------------------|-----------------|
| Windows Server 2016    |           | {{% ctx %}} v2025.3 | To be evaluated |
| Windows Server 2019    | ✓         | {{% ctx %}} v2025.3 | To be evaluated |
| Windows Server 2022    |           | {{% ctx %}} v2025.3 | To be evaluated |

## DNS Requirements

The installation requires IP to hostname resolution to be available. Please ensure that you have the appropriate pointer (PTR) records configured  on the DNS server for the server.

## Web Browser Requirements

Gateway supports the latest versions of the following browsers:

* Chrome
* Edge
* Firefox

## Security Requirements

### Installation User

A domain user with the necessary administrative permissions to log on to the Configuration Portal host server via Remote Desktop and execute PowerShell scripts.

### PowerShell User

A service user with the necessary permissions to execute PowerShell scripts on the Configuration Portal host server, and has right to query Active Directory.

### Domain Groups

The Active Directory groups to which access to the Configuration Portal should be granted must be known prior to installation.

## Next Steps?

1. [Pre-Installation][]

[Pre-Installation]: {{< url path="Cortex.GettingStarted.OnPremise.AddConfigurationPortalToCortex.PreInstallation" >}}
