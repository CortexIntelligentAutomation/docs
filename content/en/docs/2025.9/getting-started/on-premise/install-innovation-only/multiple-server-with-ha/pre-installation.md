---
title: "Pre-Installation"
linkTitle: "Pre-Installation"
description: "Information about the steps required to be completed prior to starting the installation."
weight: 30
---

# {{% param title %}}

This guide describes how to perform the steps required before starting the installation of {{% ctx %}}. Please ensure that the [Requirements][] have been read and met before starting this installation.

## Make Installation Artefacts Available on all Servers

{{< section "/pre-installation/multi-server/make-artefacts-available.md">}}

## Obtain a {{% ctx %}} licence file

A valid {{% ctx %}} licence file and {{% ctx %}} feature identifier must be procured from {{% ctx %}}. The feature identifier is a GUID which will be used when configuring the Gateway installation. The licence file is needed when installing the Web Application server and it should contain fingerprints for the Web Application Server and each Application Server.

To get a licence file and feature identifier take the following steps:

1. Copy the following template to a text file:

    ```text
    Web Application Server
    Machine Name: 
    Fingerprint: 

    Application Server 1
    Machine Name: 
    Fingerprint: 

    Application Server 2
    Machine Name: 
    Fingerprint: 

    Application Server 3
    Machine Name: 
    Fingerprint: 

    Please also include a suitable {{% ctx %}} feature identifier.
    ```

1. On each Application Server and the Web Application Server:
    1. In a File Explorer, navigate to the Fingerprint generation folder inside the install file location, e.g. `C:\Install\Cortex Innovation {{< version >}} - Licence Fingerprint Generator Extract`.
    1. Double-click `Cortex.Licensing.FingerprintGeneration.exe` to run it. A command line window will appear, containing a Machine Name and Fingerprint, e.g:

    ```text
    System Hardware Identifiers:
        Motherboard Serial        | 7XQ9LZJ2M8K4W3YV5T1N6B0R8C5D7E9G2H4A1U3P6S9F0T2M8K4W
        System Drive Serial       | 7XQ9LZJ2M8K4W3YV5T1N6B0R8C5D7E9G2H4A1U3P6S9F0T2M8K4W
        MAC Address (WMI)         | A9B7C6D5E4F3G2H1J0K9L8M7N6P5Q4R3S2T1U0V9W8X7Y6Z5A4B3
        Machine GUID              | Z1X2C3V4B5N6M7A8S9D0F1G2H3J4K5L6Q7W8E9R0T1Y2U3I4O5P6
        System UUID               | M9N8B7V6C5X4Z3A2S1D0F9G8H7J6K5L4Q3W2E1R0T9Y8U7I6O5P4
        Windows Device ID         | Q1W2E3R4T5Y6U7I8O9P0A1S2D3F4G5H6J7K8L9Z0X1C2V3B4N5M6
        Windows Product ID        | L0K9J8H7G6F5D4S3A2P1O0I9U8Y7T6R5E4W3Q2M1N0B9V8C7X6Z5
        MAC Address               | X9C8V7B6N5M4A3S2D1F0G9H8J7K6L5Q4W3E2R1T0Y9U8I7O6P5A4
        Machine Name              | E1R2T3Y4U5I6O7P8A9S0D1F2G3H4J5K6L7Z8X9C0V1B2N3M4Q5W6
        OS Version                | U0Y9T8R7E6W5Q4L3K2J1H0G9F8D7S6A5P4O3I2U1Y0T9R8E7W6Q5
        User Name                 | C3V4B5N6M7A8S9D0F1G2H3J4K5L6Q7W8E9R0T1Y2U3I4O5P6A7S8

    ----------------------------------------------------

    Machine Name: SERVER
    Fingerprint: K8F2J9L0M3N6B7V5C4X1Z8A9S0D2E3G4H5T6U7I8O9P0Q1W2R3Y4K5L60052556DF425E
    ```

    1. Copy the output (Machine Name and Fingerprint) to the corresponding section of the text file created in the initial step. Note that the Machine Name can be changed to any string, provided that it is different for each server.
1. Request a licence and feature identifier by raising a case in the [{{% ctx %}} Service Portal][CORTEX Service Portal], including the contents of the text file containing all of the fingerprint and machine information in the body of the case.
1. When the licence and feature identifier have arrived, copy the file `Cortex.lic` to `%ProgramData%\Cortex\Licences` on the Web Application Server, creating the `Cortex` and `Licences` folders if they don't exist. Save the feature identifier for use when [Installing Gateway][].

## Generate Encryption Key

{{< section "/prerequisites/install-innovation-only/multi-server/encryption-requirements.md">}}

## Next Steps?

1. [Installation][]

[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Installation]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.Installation" >}}
[Installing Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew2" >}}
[Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.Requirements" >}}
