---
title: "Pre-Installation"
linkTitle: "Pre-Installation"
description: "Information about the steps required to be completed prior to starting the installation."
weight: 20
---

# {{% param title %}}

This guide describes how to perform the steps required before starting the installation of the {{% ctx %}} Portal.

## Make Installation Artefacts Available

1. Copy **Portal Application Server Scripts.zip** to the Web Application Server.
1. Extract it to `C:\Install\Portal Application Server Scripts`.
1. Confirm `Cortex.Innovation.Install.Portal.ps1` is in the extracted folder.
1. Copy **Cortex Innovation 2026.9 - Portal.zip** to the Web Application Server.
1. Extract **Cortex Innovation 2026.9 - Portal.zip** to `C:\Install\cortex-portal`.
1. Confirm `Cortex.Portal.Bff.dll`, `web.config`, and `wwwroot` are directly in `C:\Install\cortex-portal`. If Extract All created a child folder, move those contents up so this folder is the package root.

## Install the .NET 10 Hosting Bundle

1. Download the **.NET 10 Hosting Bundle** from Microsoft.
1. Run the hosting bundle installer on the Web Application Server.
1. When the installer finishes, open Windows PowerShell as an administrator and run:

    ```powershell
    iisreset
    ```

The hosting bundle registers the ASP.NET Core Module with IIS. `iisreset` loads that module.

## Next Steps?

1. [Installation][]

[Installation]: ../installation/
