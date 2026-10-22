---
title: "Configure the Documentation Service"
linkTitle: "Configure the Documentation Service"
description: "Information about configuring the Documentation Service to use the AI model server."
weight: 40
---

# {{% param title %}}

This guide describes how to configure the Documentation Service to use the AI model server. Please ensure that the AI model server has been installed on the Model Server and the Documentation Service has been [created][Create the Documentation Service] on the Web Application Server before starting this configuration.

Carry out these steps on the Web Application Server, not the Model Server.

## Configure the Settings

1. Encrypt the API key that was generated or given when the AI model server was installed:
    1. Follow the instructions to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="encrypt text" >}}, using the API key as the text to encrypt.
    1. Make a note of the encrypted text returned, which begins with `#_`.

    {{% alert title="Important" color="warning" %}}Parameters required to be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}} must be encrypted on the Application Server with {{< ctx >}} installed.{{% /alert %}}

1. Navigate to the Documentation Service directory, e.g. `%ProgramData%\SF\<CustomerName>.<NodeName>\Fabric\work\Applications\Cortex.Innovation.AI_App<n>\DocumentationPkg.Code.<Version>` replacing `<CustomerName>` with the CustomerName configured during installation, `<NodeName>` with the name of the node, `<n>` with the application number and `<Version>` with the version of the code package.
1. Open the `appsettings.json` file.
1. Under the `Inference` section, change only the parameters described below, using the encrypted text as the `ApiKey` value, and leave the other settings as they are. Do not replace the whole section: a setting that is missing, e.g. `MaxTokens`, stops the Documentation Service from starting. The section should then look similar to the following example:

    {{< tabpane lang="json" >}}
        {{< tab header="CPU">}}
"Inference": {
    "Processor": "Cpu",
    "MaxTokens": 2560,
    "TimeoutSeconds": 1800,
    "Server": {
        "Endpoint": "https://model-server.domain.com:8080",
        "ApiKey": "#_065077199197085!212123173135087074174142102155007175102029143220132038175026114248243207204119030125106032237087162060168108135168241247037070081~187087056217118!069132229129134129097089241180163#"
    }
},
        {{< /tab >}}
        {{< tab header="GPU">}}
"Inference": {
    "Processor": "Gpu",
    "MaxTokens": 2560,
    "TimeoutSeconds": 1800,
    "Server": {
        "Endpoint": "https://model-server.domain.com:8080",
        "ApiKey": "#_065077199197085!212123173135087074174142102155007175102029143220132038175026114248243207204119030125106032237087162060168108135168241247037070081~187087056217118!069132229129134129097089241180163#"
    }
},
        {{< /tab >}}
    {{< /tabpane >}}

    | Name | Description |
    |------|-------------|
    | `Inference:Server:Endpoint` | The address of the AI model server: `https://{FQDN or IP address of Model Server}:{Port}`, where `{Port}` is the `Port` given to the installation script (`8080` by default), e.g. `https://model-server.domain.com:8080` or `https://192.168.1.20:8080`. The FQDN or IP address must be one of the names in the certificate's Subject Alternative Names. |
    | `Inference:Server:ApiKey` | The API key sent to the AI model server with every request. This must be the same value as the one in the `api-key.txt` file on the Model Server.{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}} |
    | `Inference:Processor` | The hardware that the AI model server uses: the `Hardware` value used when running the installation script, `Cpu` or `Gpu`. The default is `Cpu`.{{< alert type="warning" title="Important" >}} This must match the `Hardware` used when installing the AI model server. If it is `Gpu` for an AI model server installed with `Cpu`, the Documentation Service sends requests larger than the AI model server can take, and documentation can be incomplete, with sections marked *(not generated)*.{{< /alert >}} |
    | `Inference:TimeoutSeconds` | The longest time, in seconds, to wait for the AI model server to finish one piece of documentation before giving up. The default is `1800` (30 minutes). |

    {{% alert title="Warning" color="warning" %}} If the AI model server cannot be reached, for example because a firewall blocks the port, the Documentation Service waits for the full `Inference:TimeoutSeconds` before reporting an error. During this time the job remains in the `Running` status. {{% /alert %}}

1. Save the file.
1. Repeat these steps for the `appsettings.json` file located in `C:\ProgramData\SF\<CustomerName>.<NodeName>\Fabric\work\ImageCache\Store\Cortex.Innovation.AI\DocumentationPkg.Code.<Version>`.

## Trust the Certificate

If the certificate used by the AI model server was issued by a Certificate Authority that is already trusted by the Web Application Server, skip this section.

If a self-signed certificate was used on the Model Server, its root certificate must be imported on the Web Application Server:

1. Copy the root certificate file, e.g. `cortexCA.pem`, to the Web Application Server. Do not copy any private key.
1. Follow the instructions to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.GenerateTheRootCaCertificate" title="import the root CA certificate" >}} into the `Trusted Root Certification Authorities` store of the `Local Machine`.

## Restart the Code Package

{{< section "/flow-documentation/restart-code-package.md" >}}

The Documentation Service checks its settings when it starts. It does not start if any of the following are true, and Service Fabric Explorer shows a health `Error` for `fabric:/AI/Services/Documentation` that names the setting:

* A setting is missing, or is not greater than zero, e.g. `Inference:MaxTokens`.
* The `Inference:Server:Endpoint` is on another server and does not use `https`.
* The `Inference:Server:Endpoint` is on another server and `Inference:Server:ApiKey` is empty.
* `Inference:Server:ApiKey` is not {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.

## Next Steps?

1. [Try it Out][]
1. [Schedule Documentation Generation][] (optional)

[Create the Documentation Service]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.CreateDocumentationService" >}}
[Schedule Documentation Generation]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Advanced.ScheduleDocumentationGeneration" >}}
[Try it Out]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.TryItOut" >}}
