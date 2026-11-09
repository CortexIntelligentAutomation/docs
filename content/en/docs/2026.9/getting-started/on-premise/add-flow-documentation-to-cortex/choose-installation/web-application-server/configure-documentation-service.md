---
title: "Configure the Documentation Service"
linkTitle: "Configure the Documentation Service"
description: "Information about configuring the Documentation Service to use the AI model server."
weight: 40
---

# {{% param title %}}

This guide describes how to configure the Documentation Service to use the AI model server. Please ensure that the AI model server has been installed and the Documentation Service has been [created][Create the Documentation Service] before starting this configuration.

Carry out these steps on the Web Application Server.

## Configure the Settings

1. Navigate to the Documentation Service directory, e.g. `%ProgramData%\SF\<CustomerName>.<NodeName>\Fabric\work\Applications\Cortex.Innovation.AI_App<n>\DocumentationPkg.Code.<Version>` replacing `<CustomerName>` with the CustomerName configured during installation, `<NodeName>` with the name of the node, `<n>` with the application number and `<Version>` with the version of the code package.
1. Open the `appsettings.json` file.
1. Under the `Inference` section, change only the parameters described below, leaving the other settings as they are. Do not replace the whole section: a setting that is missing, e.g. `MaxTokens`, stops the Documentation Service from starting. The section should then look similar to the following example:

    {{< tabpane lang="json" >}}
        {{< tab header="CPU">}}
"Inference": {
    "Processor": "Cpu",
    "MaxTokens": 2560,
    "TimeoutSeconds": 1800,
    "Server": {
        "Endpoint": "http://127.0.0.1:8080",
        "ApiKey": ""
    }
},
        {{< /tab >}}
        {{< tab header="GPU">}}
"Inference": {
    "Processor": "Gpu",
    "MaxTokens": 2560,
    "TimeoutSeconds": 1800,
    "Server": {
        "Endpoint": "http://127.0.0.1:8080",
        "ApiKey": ""
    }
},
        {{< /tab >}}
    {{< /tabpane >}}

    | Name | Description |
    |------|-------------|
    | `Inference:Server:Endpoint` | The address of the AI model server: `http://127.0.0.1:{Port}`, where `{Port}` is the `Port` given to the installation script, e.g. `http://127.0.0.1:8080`, which is the default. |
    | `Inference:Processor` | The hardware that the AI model server uses: the `Hardware` value used when running the installation script, `Cpu` or `Gpu`. The default is `Cpu`.{{< alert type="warning" title="Important" >}} This must match the `Hardware` used when installing the AI model server. If it is `Gpu` for an AI model server installed with `Cpu`, the Documentation Service sends requests larger than the AI model server can take, and documentation can be incomplete, with sections marked *(not generated)*.{{< /alert >}} |
    | `Inference:TimeoutSeconds` | The longest time, in seconds, to wait for the AI model server to finish one piece of documentation before giving up. The default is `1800` (30 minutes). |

    {{% alert title="Warning" color="warning" %}} If the AI model server cannot be reached, the Documentation Service waits for the full `Inference:TimeoutSeconds` before reporting an error. During this time the job remains in the `Running` status. {{% /alert %}}

1. Save the file.
1. Repeat these steps for the `appsettings.json` file located in `C:\ProgramData\SF\<CustomerName>.<NodeName>\Fabric\work\ImageCache\Store\Cortex.Innovation.AI\DocumentationPkg.Code.<Version>`.

## Restart the Code Package

{{< section "/flow-documentation/restart-code-package.md" >}}

The Documentation Service checks its settings when it starts. If a setting is missing or incorrect, it does not start, and Service Fabric Explorer shows a health `Error` for `fabric:/AI/Services/Documentation` that names the setting, e.g. when `Inference:MaxTokens` is missing.

## Next Steps?

1. [Try it Out][]
1. [Schedule Documentation Generation][] (optional)

[Create the Documentation Service]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.CreateDocumentationService" >}}
[Schedule Documentation Generation]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Advanced.ScheduleDocumentationGeneration" >}}
[Try it Out]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.TryItOut" >}}
