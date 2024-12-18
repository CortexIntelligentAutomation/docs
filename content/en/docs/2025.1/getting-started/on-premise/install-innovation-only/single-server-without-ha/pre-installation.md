---
title: "Pre-Installation"
linkTitle: "Pre-Installation"
description: "Information about the steps required to be completed prior to starting the installation."
weight: 30
---

# {{% param title %}}

This guide describes how to perform the steps required before starting the installation of {{% ctx %}}. Please ensure that the [Requirements][] have been read and met before starting this installation.

## Obtain a {{% ctx %}} licence file

A valid {{% ctx %}} licence file and {{% ctx %}} feature identifier must be procured from {{% ctx %}}. The feature identifier is a GUID which will be used when configuring the Gateway installation. The licence file is needed when installing the server and it should contain that server's fingerprint.

To get a licence file and feature identifier take the following steps:

1. Copy the following template to a text file:

    ```text
    Web Application/Application Server
    MachineID: 
    Fingerprint: 

    Please also include a suitable {{% ctx %}} feature identifier.
    ```

1. Extract `Cortex Innovation {{< version >}} - Licence Fingerprint Generator.zip`.
1. From that folder, copy `Cortex.Licensing.FingerprintGeneration.exe` to the server.
1. Double-click `Cortex.Licensing.FingerprintGeneration.exe` to run it. A command line window will appear, containing a machine identifier and fingerprint, e.g:

    ```text
    MachineID: SERVER
    Fingerprint: 111118BA104C928319E0CBAE30844CF8B7FD8BC414D1567844D1D0830089F1C9BF5C6
    ```

1. Copy the output (machine identifier and fingerprint) to the `Web Application/Application Server` section of the text file created in the initial step. Note that the machine identifier can be changed to any string.
1. Request a licence and feature identifier by raising a case in the [{{% ctx %}} Service Portal][CORTEX Service Portal], including the contents of the text file containing all of the fingerprint and machine information in the body of the case.
1. When the licence and feature identifier have arrived, copy the file `Cortex.lic` to `%ProgramData%\Cortex\Licences` on the Web Application Server, creating the `Cortex` and `Licences` folders if they don't exist. Save the feature identifier for use when [Installing Gateway][].

## Make Installation Artefacts Available for Application Install

{{< section "/install-application-server/make-installation-artefacts-available.md">}}

## Make Installation Artefacts Available for Web Application Install

1. Copy the following artefacts to a folder on the machine:

   * Cortex Innovation {{< version >}} - Gateway.zip
   * Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip

1. Extract the `Cortex Innovation {{< version >}} - Web App Server Install Scripts.zip` zip file to a folder with the same name.

## Generate Encryption Key

{{< section "/prerequisites/install-innovation-only/single-server/encryption-requirements.md">}}

## Next Steps?

1. [Installation][]

[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Installation]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.Installation" >}}
[Installing Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureCortexGatewayInstallationScriptNew" >}}
[Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.Requirements" >}}
