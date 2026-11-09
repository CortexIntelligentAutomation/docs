---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "Information about the prerequisites required on the server for installation."
weight: 10
---

# {{% param title %}}

The prerequisites for installing the AI model server on the Web Application Server (as described in [Architecture][]) are laid out in this guide. These must be considered before undertaking the installation. Most of them are also checked by the prerequisites script that is run at the start of the [installation][Install the AI Model Server].

## Hardware Requirements

{{% alert title="Note" %}}
Documentation is generated much more slowly on a server without a GPU. As a guide, a server that uses only its processor takes approximately 9 minutes per flow on average (between 3 and 25 minutes, depending on the flow), so a package of 95 flows could take 14 to 15 hours. A server with a supported NVIDIA GPU is recommended for production systems. Documentation generation can also be {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Advanced.ScheduleDocumentationGeneration" title="restricted to set hours" >}}, e.g. overnight.
{{% /alert %}}

The table below specifies additional resources that are recommended to be added to the Web Application Server:

| Server&nbsp;Role | Additional&nbsp;CPU&nbsp;Cores&nbsp;(>&nbsp;2GHz) | GPU | Additional&nbsp;RAM&nbsp;(GB) | Additional&nbsp;Disk&nbsp;(GB) |
|------------------|---------------------------------------------------|-----|-------------------------------|--------------------------------|
| Web&nbsp;Application&nbsp;Server<br>(Shared with {{% ctx %}} Gateway) | 4+&nbsp;*Recommended*<br>4&nbsp;*Minimum* | NVIDIA&nbsp;GPU&nbsp;with&nbsp;16+&nbsp;GB&nbsp;of&nbsp;video&nbsp;memory[^1]&nbsp;*Recommended*<br>None&nbsp;*Minimum* | 16+&nbsp;*Recommended*<br>16&nbsp;*Minimum* | 10+&nbsp;*Recommended*<br>10&nbsp;*Minimum* |

[^1]: Only NVIDIA GPUs are supported, because the AI model server uses NVIDIA CUDA. Other GPUs, e.g. AMD or Intel, are not supported; on a server with one, install the CPU build of the AI model server, which uses the processor.

The AI model server uses approximately 8 GB of memory while the model is loaded. When it is installed, it can be set to unload the model after a number of minutes without a request (`IdleSleepMinutes`). With the recommended 10 minutes, this memory is only in use while documentation is being generated.

## Software Requirements

| Server&nbsp;Role | Windows&nbsp;Server[^2] | Other&nbsp;Software |
|------------------|-------------------------|---------------------|
| Web Application Server | [2025 (x64)][]<br>[2022 (x64)][] *Recommended*<br>[2019 (x64)][] | Visual C++ 2015-2022 Redistributable (x64) version 14.40 or later[^3]<br>llama.cpp b11729[^4]<br>IBM Granite 4.1 8B (Q4_K_M) model file[^4]<br>NSSM 2.24-101[^4]<br>[NVIDIA driver][] supporting CUDA 12.4 or later (GPU only)[^5] |

[^2]: Windows Server Standard and Datacenter editions are supported. Filesystem **must be NTFS** and networking **must use IPv4**. Linux is not supported, but may be in the future.
[^3]: Supplied in the `Installation Media` folder of the {{% ctx %}} AI Model Server Install Scripts artefact. The installation script installs it if the runtime is not installed or is older than 14.40, e.g. 14.29, which causes the AI model server to stop at start-up without displaying an error. No other action is needed.
[^4]: Supplied in the {{% ctx %}} AI Model Server and AI Model artefacts. See [Make Artefacts Available][].
[^5]: Not supplied by {{% ctx %}}, as the driver depends on the GPU in the server. It is only needed if the AI model server uses a GPU, and a server with a GPU usually already has one installed, which can be used if it supports CUDA 12.4 or later. The prerequisites script checks this. If no driver is installed, or it is too old, on the NVIDIA driver page use *Manual Driver Search* to select the product type, series and product of the GPU in the server (e.g. a server GPU is listed under the data center product type) and the operating system, then download and install the driver. If the server is hosted by a cloud provider, use the driver that the provider supplies for the GPU server size.

## Processor or GPU Requirements

{{< section "/flow-documentation/processor-gpu-requirements.md" >}}

## Security Requirements

### Installation User

A user which is a member of the Local Administrators group on the Web Application Server must be available to perform the installation.

### Port Requirements

The AI model server listens on a port on the loopback address (`127.0.0.1`) of the Web Application Server. Only the Documentation Service on the same server connects to it, so no firewall port needs to be opened, but the port must not be used by any other application.

| Name | Description | Default Port(s) | Protocol | Direction |
|------|-------------|-----------------|----------|-----------|
| AI model server | The port used by the AI model server, on the loopback address only. It must not be used by any other application. | 8080 | TCP | None (local only) |

If the port is already in use, the `Port 8080` check of the prerequisites script fails and the installation does not continue. Either stop the application that is using the port, or install the AI model server on a different port with the `Port` parameter of the installation script; the same port must then be used in the address of the AI model server when [configuring the Documentation Service][Configure the Documentation Service].

## Next Steps?

1. [Install the AI Model Server][]

[2019 (x64)]: {{< url path="Microsoft.Downloads.Windows.Server2019" >}}
[2022 (x64)]: {{< url path="Microsoft.Downloads.Windows.Server2022" >}}
[2025 (x64)]: {{< url path="Microsoft.Downloads.Windows.Server2025" >}}
[Architecture]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Architecture" >}}
[Configure the Documentation Service]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.ConfigureDocumentationService" >}}
[Install the AI Model Server]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.InstallModelServer" >}}
[Make Artefacts Available]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.MakeArtefactsAvailable" >}}
[NVIDIA driver]: {{< url path="NVIDIA.Downloads.Drivers" >}}
