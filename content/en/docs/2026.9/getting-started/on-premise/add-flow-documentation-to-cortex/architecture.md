---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the recommended architecture for a flow documentation installation."
weight: 10
---

# {{% param title %}}

## Components

| Component | Purpose | Required/Optional | Server Role |
|-----------|---------|-------------------|-------------|
| Documentation Service | {{% ctx %}} service that accepts a package of flows, generates documentation for each flow and holds the results until they are retrieved. It is installed with {{% ctx %}}, but it and the `fabric:/AI/Services` application that it runs in are not created by default; they are created, and the service configured, following this guide. | Required | Web&nbsp;Application&nbsp;Server |
| AI model server | A [llama.cpp][] server, build `b11729`, that runs the AI model and answers requests from the Documentation Service. The CPU build is used on a server without a GPU, and the CUDA 12.4 build on a server with an NVIDIA GPU. It is not part of the {{% ctx %}} application services and is installed separately, by a script, following this guide. | Required | Web&nbsp;Application&nbsp;Server<br>or<br>Model&nbsp;Server |
| [NSSM][] | Windows Service Manager, version `2.24-101-g897c7ad`, that hosts the AI model server as a Windows Service. | Required | Same server as the AI model server |
| AI model | The IBM Granite 4.1 8B model (Q4_K_M quantisation, approximately 5 GB), loaded by the AI model server. | Required | Same server as the AI model server |

{{% alert title="Note" %}} The AI model server, NSSM and the AI model are all supplied by {{% ctx %}}, in the `Cortex Innovation {{< version >}} - AI Model Server` and `Cortex Innovation {{< version >}} - AI Model` artefacts. They do not need to be downloaded from their own websites, and the installation script installs them from the artefacts. {{% /alert %}}

## Recommended Architecture

The AI model server can be installed in one of two places:

* **On the Web Application Server (recommended)**: The server that hosts {{% ctx %}} Gateway and runs the Documentation Service. The Documentation Service reaches the AI model server using `http` on the loopback address (`127.0.0.1`), so no certificate or API key is needed.

    {{< figure src="/images/editable/Flow Documentation Architecture - Web Application Server.png" class="centre" title="AI Model Server on the Web Application Server" >}}

* **On a separate Model Server**: A dedicated server that runs only the AI model server, e.g. a server with a GPU. Nothing else from {{% ctx %}} is installed on it. The Documentation Service still runs on the Web Application Server, and reaches the AI model server using `https` and an API key. A firewall rule on the Model Server only allows connections from the Web Application Server.

    {{< figure src="/images/editable/Flow Documentation Architecture - Separate Model Server.png" class="centre" title="AI Model Server on a Separate Model Server" >}}

{{% alert title="Note" %}} Only one set of documentation is generated at a time. If the AI model server runs on a server without a GPU, it uses all of the processor cores for the whole time that documentation is being generated, which slows down any other services on that server. If the Web Application Server does not have a GPU and documentation is generated regularly, it is recommended to {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.MainDoc" title="Install on a Separate Server" >}}. Otherwise, follow the instructions to {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.MainDoc" title="Install on the Web Application Server" >}}. {{% /alert %}}

## Next Steps?

1. [Choose Where to Install the AI Model Server][]

[Choose Where to Install the AI Model Server]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.ChooseInstallation" >}}
[llama.cpp]: {{< url path="LlamaCpp.MainDoc" >}}
[NSSM]: {{< url path="NSSM.MainDoc" >}}
