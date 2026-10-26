---
title: "Try it Out"
linkTitle: "Try it Out"
description: "Information about trying out flow documentation generation for the first time."
weight: 50
---

# {{% param title %}}

## Check the AI Model Server is Running

1. Open an HTTP client, such as [Postman][], on a server that is allowed through the firewall to the Model Server, e.g. the Web Application Server. Make a request with the following format:

    | Property       | Value |
    |----------------|-------|
    | Action         | GET |
    | URL            | `https://{FQDN or IP address of Model Server}:{Port}/v1/models`, using the same address as `Inference:Server:Endpoint`, where `{Port}` is the `Port` given to the installation script (`8080` by default)<br />e.g. `https://model-server.domain.com:8080/v1/models` |
    | Authentication | Bearer Token |
    | Token          | The API key, unencrypted, that was generated or given when [installing the AI model server][Install the AI Model Server]. |

    {{% alert title="Note" %}} If you used a self-signed certificate you may need to disable SSL certificate validation in your HTTP client. {{% /alert %}}

1. The response should have a status of `200 OK` and list the IBM Granite model.
1. Repeat the request with Authentication set to None. The response should have a status of `401 Unauthorized`. If the model is listed instead, the AI model server is not using the API key file and can be used by anyone who can reach it. Run the [installation script][Install the AI Model Server] again on the Model Server with `-Mode Remote`.

## Generate Documentation

{{< section "/flow-documentation/generate-documentation.md" >}}

## Next Steps?

1. [Advanced Setup][]

[Advanced Setup]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Advanced.MainDoc" >}}
[Install the AI Model Server]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.InstallModelServer" >}}
[Postman]: {{< url path="Postman.Downloads.MainDoc" >}}
