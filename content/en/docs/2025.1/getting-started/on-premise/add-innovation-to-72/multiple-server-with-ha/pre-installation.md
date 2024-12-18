---
title: "Pre-Installation"
linkTitle: "Pre-Installation"
description: "Information about the steps required to be completed prior to starting the installation."
weight: 30
---

# {{% param title %}}

This guide describes how to perform the steps required before starting the installation of {{% ctx %}}. Please ensure that the [Requirements][] have been read and met before starting this installation.

## Obtain a {{% ctx %}} licence file

A valid {{% ctx %}} licence file and {{% ctx %}} with v7.2 feature identifier must be procured from {{% ctx %}}. The feature identifier is a GUID which will be used when configuring the Gateway installation. The licence file is needed when installing the Web Application server and it should contain fingerprints for the Web Application Server and each Application Server.

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

    Please also include a suitable {{% ctx %}} with v7.2 feature identifier.
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

## Make Installation Artefacts Available on Application Servers

1. Choose one of the Application Servers to be used for installation, and copy the following artefacts to a folder on it:
   * Cortex Innovation {{< version >}} - App Server Install Scripts.zip
   * Cortex Innovation {{< version >}} - App Services.zip
   * Cortex Innovation {{< version >}} - Block Packages.zip

1. Extract the `Cortex Innovation {{< version >}} - App Server Install Scripts.zip` file to a folder with the same name.

## Make Installation Artefacts Available on Web Application Server

{{% alert title="Note" %}}
We recommend that the single-node Service Fabric instance, used by {{% ctx %}} Gateway as a Debugger instance, and {{% ctx %}} Gateway are installed on the same Web Application Server.
{{% /alert %}}

{{< section "/install-web-application-server/make-installation-artefacts-available.md">}}

## Next Steps?

1. [Installation][]

[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Installation]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.Installation" >}}
[Upgrading Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew2" >}}
[Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.Requirements" >}}
