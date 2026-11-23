---
title: "Pre-Installation"
linkTitle: "Pre-Installation"
description: "Information about the steps required to be completed prior to starting the installation."
weight: 30
---

# {{% param title %}}

This guide describes how to perform the steps required before starting the installation of the {{% ctx %}} Portal. Please ensure that the [Requirements][] have been read and met before starting this installation.

## Make Installation Artefacts Available

1. Copy the following artefacts to a folder on the server:
   * Portal Application Server Scripts.zip
   * Cortex Innovation 2026.9 - Portal.zip
1. Extract the `Portal Application Server Scripts.zip` file to a folder with the same name.
1. Extract the `Cortex Innovation 2026.9 - Portal.zip` file to a folder with the same name.

## Install the .NET 10 Hosting Bundle

The {{% ctx %}} Portal requires the .NET 10 Hosting Bundle to be installed on the Web Application Server. The hosting bundle registers the ASP.NET Core Module with IIS.

To find whether the .NET 10 Hosting Bundle is installed:

1. On the Start menu, choose `Run`.
1. In the open box, enter `appwiz.cpl`.
1. In Programs and Features, look for an entry whose name starts with `Microsoft .NET 10` and includes `Windows Server Hosting`.
1. If that entry is present, the .NET 10 Hosting Bundle is installed and no further steps need to be taken. If it is not installed, continue with the following steps to install it.

To install the .NET 10 Hosting Bundle:

1. Download the [.NET 10 Hosting Bundle][NET 10 Hosting Bundle] installer.
1. Double-click on the installer file to run it.
1. Follow the wizard to complete the installation.
1. When the installer finishes, open Windows PowerShell as an administrator and run:

    ```powershell
    iisreset
    ```

    `iisreset` loads the ASP.NET Core Module that the hosting bundle registers with IIS.

## Next Steps?

1. [Installation][]

[Installation]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.Installation" >}}
[NET 10 Hosting Bundle]: {{< url path="MSDotNet.DotNet10.HostingBundle" >}}
[Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.Requirements" >}}
