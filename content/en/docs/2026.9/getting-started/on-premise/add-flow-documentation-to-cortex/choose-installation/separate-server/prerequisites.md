---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "Information about the prerequisites required on the server for installation."
weight: 10
---

# {{% param title %}}

The prerequisites for installing the AI model server on a separate Model Server (as described in [Architecture][]) are laid out in this guide. These must be considered before undertaking the installation. Most of them are also checked by the prerequisites script that is run at the start of the [installation][Install the AI Model Server].

The hardware, software, processor and GPU requirements apply to the Model Server only. The Web Application Server needs no additional resources, as the Documentation Service does not run the AI model itself.

## Hardware Requirements

{{% alert title="Note" %}}
Documentation is generated much more slowly on a server without a GPU. As a guide, a server that uses only its processor takes approximately 9 minutes per flow on average (between 3 and 25 minutes, depending on the flow), so a package of 95 flows could take 14 to 15 hours. A server with a supported NVIDIA GPU is recommended for production systems. Documentation generation can also be {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Advanced.ScheduleDocumentationGeneration" title="restricted to set hours" >}}, e.g. overnight.
{{% /alert %}}

The following hardware requirements are recommended for production systems:

| Server&nbsp;Role | Servers&nbsp;Required | CPU&nbsp;Cores&nbsp;(>&nbsp;2GHz) | GPU | RAM&nbsp;(GB) | Disk&nbsp;(GB) |
|------------------|-----------------------|-----------------------------------|-----|---------------|----------------|
| Model&nbsp;Server | 1 | 8+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | NVIDIA&nbsp;GPU&nbsp;with&nbsp;16+&nbsp;GB&nbsp;of&nbsp;video&nbsp;memory[^1]&nbsp;*Recommended*<br>None&nbsp;*Minimum* | 32+&nbsp;*Recommended*<br>16&nbsp;*Minimum* | 20+&nbsp;(SSD)&nbsp;*Recommended*<br>10&nbsp;free&nbsp;on&nbsp;installation&nbsp;drive&nbsp;*Minimum* |

[^1]: Only NVIDIA GPUs are supported, because the AI model server uses NVIDIA CUDA. Other GPUs, e.g. AMD or Intel, are not supported; on a server with one, install the CPU build of the AI model server, which uses the processor.

The AI model server uses approximately 8 GB of memory while the model is loaded. When it is installed, it can be set to unload the model after a number of minutes without a request (`IdleSleepMinutes`). On a Model Server it is recommended to keep the model loaded, so this memory is always in use.

## Software Requirements

| Server&nbsp;Role | Windows&nbsp;Server[^2] | Other&nbsp;Software |
|------------------|-------------------------|---------------------|
| Model Server | [2025 (x64)][]<br>[2022 (x64)][] *Recommended*<br>[2019 (x64)][] | Visual C++ 2015-2022 Redistributable (x64) version 14.40 or later[^3]<br>llama.cpp b11729[^4]<br>IBM Granite 4.1 8B (Q4_K_M) model file[^4]<br>NSSM 2.24-101[^4]<br>[NVIDIA driver][] supporting CUDA 12.4 or later (GPU only)[^5] |

[^2]: Windows Server Standard and Datacenter editions are supported. Filesystem **must be NTFS** and networking **must use IPv4**. Linux is not supported, but may be in the future.
[^3]: Supplied in the `Installation Media` folder of the {{% ctx %}} AI Model Server Install Scripts artefact. The installation script installs it if the runtime is not installed or is older than 14.40, e.g. 14.29, which causes the AI model server to stop at start-up without displaying an error. No other action is needed.
[^4]: Supplied in the {{% ctx %}} AI Model Server and AI Model artefacts. See [Make Artefacts Available][].
[^5]: Not supplied by {{% ctx %}}, as the driver depends on the GPU in the server. It is only needed if the AI model server uses a GPU, and a server with a GPU usually already has one installed, which can be used if it supports CUDA 12.4 or later. The prerequisites script checks this. If no driver is installed, or it is too old, on the NVIDIA driver page use *Manual Driver Search* to select the product type, series and product of the GPU in the server (e.g. a server GPU is listed under the data center product type) and the operating system, then download and install the driver. If the server is hosted by a cloud provider, use the driver that the provider supplies for the GPU server size.

## Processor or GPU Requirements

{{< section "/flow-documentation/processor-gpu-requirements.md" >}}

## Security Requirements

### Installation User

A user which is a member of the Local Administrators group on the Model Server must be available to install the AI model server, and a user which is a member of the Local Administrators group on the Web Application Server must be available to install and configure the Documentation Service.

### Service User

The AI model server runs as a Windows service on the Model Server, as `Local System`.

### Port Requirements

The AI model server requires a firewall port to be opened on the Model Server, allowing connections only from the Web Application Server. The installation script adds this rule to Windows Firewall on the Model Server when it is given the IP address of the Web Application Server. Alternatively, see [Configure Firewalls][] for how to add the rule.

| Name | Description | Default Port(s) | Protocol | Direction |
|------|-------------|-----------------|----------|-----------|
| AI model server | The port used by the AI model server. Allow connections only from the Web Application Server. | 8080 | TCP | Inbound |

Any other firewall between the Web Application Server and the Model Server, including the network security group if the Model Server is in a cloud environment, must also allow the port.

If the port is already in use, the `Port 8080` check of the prerequisites script fails and the installation does not continue. Either stop the application that is using the port, or install the AI model server on a different port with the `Port` parameter of the installation script; the same port must then be used in the address of the AI model server when [configuring the Documentation Service][Configure the Documentation Service]. The firewall rule is added for the port that is used.

### Certificate Requirements

{{% alert title="Note" %}}
For production systems, it is recommended that X.509 SSL certificates are obtained from a Certificate Authority and used for installation. For non-production systems, self-signed certificates may be used. Details on how to create a self-signed certificate can be found at {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.CreateSelfSignedCertificates" title="Create Self-Signed Certificates" >}}.
{{% /alert %}}

An X.509 SSL certificate (standard, wildcard or self-signed) must be used to secure communication between the Documentation Service on the Web Application Server and the AI model server on the Model Server. The Documentation Service refuses to start if the AI model server is on another server and does not use `https`.

The certificate must meet the following requirements:

* Subject field must be in one of the following formats, depending on the certificate type:
  * Standard certificates must use the standard format (e.g. `CN=model-server.domain.com`).
  * Wildcard certificates must use the wildcard format, pertaining to the domain of the Model Server (e.g. `CN=*.domain.com`).
* Subject alternative names must include the FQDN, NetBIOS name and IP address of the Model Server. The address of the AI model server in the Documentation Service configuration must be one of these names.
* Certificate must be supplied in one of the following formats:
  * A .PFX file containing the certificate and its private key, e.g. the certificate used when installing {{% ctx %}}. Its password is needed during installation.
  * A .PEM certificate file and a .PEM private key file. The private key must not be protected by a password.

The files should be placed in a known location on the Model Server. This location will be required when [installing the AI model server][Install the AI Model Server], which writes the certificate and private key into the installation folder, where only the AI model server and the Local Administrators group can read them.

The root certificate of the Certificate Authority that issued the certificate must be trusted by the Web Application Server. This is done during [configuration of the Documentation Service][Configure Documentation Service].

### API Key Requirements

The AI model server must be configured to require an API key, and the Documentation Service sends the key with every request. The Documentation Service refuses to start if the AI model server is on another server and no API key is configured.

By default, the installation script generates a new API key on the first installation and displays it once; running it again keeps that key. Alternatively, a particular key can be given to the script with the `PromptForApiKey` parameter. A valid API key can be generated by any token generator, e.g. [Token Generator][], and should be a minimum of 64 characters consisting of uppercase and lowercase letters as well as numbers but should not contain any symbols. The key value is needed when [configuring the Documentation Service][Configure Documentation Service] on the Web Application Server.

## Next Steps?

1. [Install the AI Model Server][]

[2019 (x64)]: {{< url path="Microsoft.Downloads.Windows.Server2019" >}}
[2022 (x64)]: {{< url path="Microsoft.Downloads.Windows.Server2022" >}}
[2025 (x64)]: {{< url path="Microsoft.Downloads.Windows.Server2025" >}}
[Architecture]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Architecture" >}}
[Configure Documentation Service]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.ConfigureDocumentationService" >}}
[Configure Firewalls]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.ConfigureFirewalls" >}}
[Configure the Documentation Service]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.ConfigureDocumentationService" >}}
[Install the AI Model Server]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.InstallModelServer" >}}
[Make Artefacts Available]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.MakeArtefactsAvailable" >}}
[NVIDIA driver]: {{< url path="NVIDIA.Downloads.Drivers" >}}
[Token Generator]: {{< url path="IT-Tools.TokenGenerator" >}}
