---
title: "Choose Where to Install the AI Model Server"
linkTitle: "Choose Where to Install the AI Model Server"
description: "Information to help choose where to install the AI model server: on the Web Application Server or on a separate server."
weight: 15
---

# {{% param title %}}

The AI model server can be installed on the Web Application Server or on a separate server. Choose the option that suits the hardware that is available, using the following comparison:

| | [Install on the Web Application Server][] | [Install on a Separate Server][] |
|-|-------------------------------------------|----------------------------------|
| Where the Documentation Service runs | The Web Application Server. | The Web Application Server. |
| Where the AI model server runs | The server that hosts {{% ctx %}} Gateway and runs the Documentation Service. | A dedicated Model Server that only runs the AI model server. |
| Servers changed | The Web Application Server only. | The Model Server (AI model server) and the Web Application Server (Documentation Service). |
| Recommended for | Most installations. | Installations where the Web Application Server does not have a GPU and documentation is generated regularly, or where a server with a GPU is available. |
| How the Documentation Service connects to the AI model server | `http`, on the same server (`127.0.0.1`). Nothing outside the server can connect, so no certificate, API key or firewall rule is needed. | `https`, from the Web Application Server to the Model Server. The AI model server uses a certificate for `https` and an API key to accept only the Documentation Service, and a firewall rule on the Model Server only allows connections from the Web Application Server. |
| Effect on other services | If the server does not have a GPU, other services on it are slowed down while documentation is generated. To avoid this during working hours, generation can be limited to set hours, e.g. overnight and at weekends; see [Schedule Documentation Generation][]. | None. |

[Install on a Separate Server]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.MainDoc" >}}
[Install on the Web Application Server]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.MainDoc" >}}
[Schedule Documentation Generation]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Advanced.ScheduleDocumentationGeneration" >}}
