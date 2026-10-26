---
title: "Troubleshooting"
linkTitle: "Troubleshooting"
description: "Information about diagnosing problems with the AI model server and flow documentation generation."
---

# {{% param title %}}

Problems are listed in two groups: [Problems During Installation](#problems-during-installation) of the AI model server, and [Problems Generating Documentation](#problems-generating-documentation) once the Documentation Service is configured.

## Problems During Installation

For errors displayed by the installation script, first follow any instructions given in the error.

### The AI Model Server Stops at Start-up Without an Error

The installation script reports that `llama-server.exe --version` failed, or the `Cortex AI Model Server` service stops as soon as it starts, without an error in its log. To find the cause, on the server running the AI model server:

1. Open a Windows PowerShell (x64) window as administrator.
1. Run the following command to display the most recent application errors:

    ```powershell
    Get-WinEvent -FilterHashtable @{LogName='Application'; ProviderName='Application Error'} -MaxEvents 2 | Format-List TimeCreated,Message
    ```

1. Use the faulting module in the message to find the cause in the following table:

    | Faulting Module or Exit Code | Cause | Resolution |
    |------------------------------|-------|------------|
    | `MSVCP140.dll` (an older version, e.g. 14.29) | The Visual C++ runtime installed is out of date. | Run the installation script again, which installs the Visual C++ 2015-2022 Redistributable (x64) supplied with it. If it asks for the server to be restarted, restart it and run the installation script again. |
    | `ggml-cpu-*.dll`, or exit code `-1073741795` (illegal instruction) | The processor does not provide AVX2, usually because the server is a virtual machine. | See the processor requirements for the {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.ProcessorRequirements" title="Web Application Server" >}} or the {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.ProcessorRequirements" title="separate server" >}}. |
    | Exit code `-1073741515` (missing DLL) | A file is missing from the `C:\ProgramData\Cortex\AI Model Server\Llama` folder. | Run the installation script again. |

### The AI Model Server Fails to Load the Model

The model file is probably not completely copied. Check that the file in `C:\ProgramData\Cortex\AI Model Server\Models` is approximately 5.5 GB. If it is smaller, check that the `Cortex Innovation {{< version >}} - AI Model.zip` file was completely extracted, then run the installation script again.

### The Model Is Not Loaded on to the GPU

When the model has loaded on a server with a GPU, `nvidia-smi --query-gpu=memory.used --format=csv` shows much less than approximately 15-16 GB (16,000 MiB) of video memory in use. The AI model server is running on the processor instead, which makes generation very slow. Check that:

* The installation script was run with `-Hardware "Gpu"`. With `Cpu`, the build of the AI model server that uses only the processor is installed. Change `Cortex.Innovation.Install.AIModel.ps1` and run it again.
* The prerequisites script passes the `NVIDIA driver` and `GPU MIG mode` checks. See the GPU requirements for the {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.GPURequirements" title="Web Application Server" >}} or the {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.GPURequirements" title="separate server" >}}.
* The model has not been unloaded because no request was made for the time set by `IdleSleepMinutes`. The log shows `server is entering sleeping state` when it is unloaded; it is loaded again by the next request.

## Problems Generating Documentation

### The Documentation Service Does Not Start

The Documentation Service shows a health `Error` in Service Fabric Explorer that names the setting that is incorrect, e.g. a missing `Inference:MaxTokens`. See the Configure the Documentation Service page for the {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.ConfigureDocumentationService" title="Web Application Server" >}} or the {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.ConfigureDocumentationService" title="separate server" >}}.

### Documentation Requests Fail Because the Documentation Service Is Not Available

The AI application and the Documentation Service are not created by default. In Service Fabric Explorer on the Web Application Server, check that the `fabric:/AI/Services` application is listed under `Cortex.Innovation.AI`, and that `fabric:/AI/Services/Documentation` exists and is healthy. The application must be named exactly `fabric:/AI/Services`. If either does not exist, see the Create the Documentation Service page for the {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.CreateDocumentationService" title="Web Application Server" >}} or the {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.CreateDocumentationService" title="separate server" >}}.

### A Job Stays in the Running Status and Nothing Happens

The Documentation Service cannot reach the AI model server, but is waiting for the connection to complete. It waits for the time set by `Inference:TimeoutSeconds` (30 minutes by default) before reporting an error.

Check that:

* The AI model server is using `https` if the endpoint begins with `https`. An endpoint that uses `https` to connect to an AI model server that was started without the `--ssl-cert-file` and `--ssl-key-file` parameters never completes.
* The firewall on the Model Server, and any firewall or network security group between the servers, allows the port from the Web Application Server.
* The address in `Inference:Server:Endpoint` is correct and is one of the names in the certificate's Subject Alternative Names.

A job that is stuck can be cancelled by deleting it using the API.

### A Job Fails with an Unauthorised (401) Error

The API key sent by the Documentation Service is not the one that the AI model server expects. Check that:

* The text encrypted for `Inference:Server:ApiKey` was created from the same API key as the one in the `api-key.txt` file on the Model Server.
* If the key was changed by running the installation script again, the Documentation Service was configured with the new key and its code package was restarted.
* If the AI model server was removed and installed again, a new API key was generated, unless one was given with `PromptForApiKey`. The Documentation Service must be configured with the new key.

The key that the AI model server expects is in `C:\ProgramData\Cortex\AI Model Server\Secrets\api-key.txt` on the Model Server, which only administrators can read. The AI model server log shows `unauthorized: Invalid API Key` for each request that it refuses.

### A Job Fails with the Reason InferenceUnavailable

The Documentation Service could not get a response from the AI model server. To find the cause:

1. On the server running the AI model server, check that the `Cortex AI Model Server` service is running, and check the `llama-server.log` file in `C:\ProgramData\Cortex\AI Model Server\Logs` for errors. The AI model server writes all of its log to this file, including normal messages, not only errors.
1. On the Web Application Server, display the most recent errors in the Documentation Service log by running the following command in a Windows PowerShell (x64) window:

    ```powershell
    Get-ChildItem "C:\ProgramData\Cortex\Documentation Service\Logs" | Sort-Object LastWriteTime | Select-Object -Last 1 | Get-Content | Select-String '"@l":"Error"' | Select-Object -Last 2
    ```

1. Use the error in the log to find the cause in the following table. The log also shows the address that the Documentation Service tried (`Endpoint`).

    | Error in the Log | Cause | Resolution |
    |------------------|-------|------------|
    | `No such host is known` | The address in `Inference:Server:Endpoint` cannot be found from the Web Application Server. | Check the address, and that the Model Server's name can be found from the Web Application Server. |
    | `actively refused` or `did not respond in time` | The AI model server is not running, or a firewall is blocking the port. | Check that the `Cortex AI Model Server` service is running, and that the port is allowed from the Web Application Server, including by any firewall between the servers. |
    | `401` (Unauthorized) | The API key sent by the Documentation Service is not the one that the AI model server expects. | See [A Job Fails with an Unauthorised (401) Error](#a-job-fails-with-an-unauthorised-401-error). |

A job that failed for this reason can be submitted again. Flows that were already completed are not generated again.

### Every Flow Fails with the Reason Failed

If every flow in a job fails within a few seconds with the reason `Failed`, and the AI model server log shows no requests, the Documentation Service cannot read the blocks used by the flows. It reads them from the blocks installed by the Execution Services on the same server, and uses the newest installed version of the blocks. Check in Service Fabric Explorer on the Web Application Server that at least one Execution Service exists under `Cortex.Innovation.Execution` with a health state of `Ok`, then submit the package again.

### Sections Are Marked (not generated)

The flow has a `completeness` of `Partial`: the AI model server did not return some sections, even when they were requested again. If this happens for small flows, check that `Inference:Processor` in the Documentation Service settings matches the `Hardware` that the AI model server was installed with. A `Gpu` setting with an AI model server installed with `Cpu` makes requests larger than the AI model server can take. After correcting it, [generate the documentation again](#a-package-that-is-submitted-again-is-not-generated-again).

The sections marked *(not generated)* should be reviewed. If sections are still not generated, {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}} should be contacted for support.

### A Package That Is Submitted Again Is Not Generated Again

Submitting a package that has already been documented returns the existing job, without generating it again. To generate it again, e.g. after changing a setting, first delete the job by making a request with the action `DELETE` to the job's URL with `?purge=true` added to the end, then submit the package again.

### Documentation Is Generated Very Slowly

If the AI model server runs on the processor and generation takes about twice as long as expected, it is probably running without AVX2. Run the prerequisites script again and check the `Processor AVX2` check. See the processor requirements for the {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.ProcessorRequirements" title="Web Application Server" >}} or the {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.ProcessorRequirements" title="separate server" >}}.

### Documentation Is Generated Very Slowly on a Server with a GPU

If generation runs at approximately 1 token per second, the AI model server is probably running on the processor and not the GPU; see also [The Model Is Not Loaded on to the GPU](#the-model-is-not-loaded-on-to-the-gpu). The most common cause is MIG mode being enabled on the GPU. See the GPU requirements for the {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.GPURequirements" title="Web Application Server" >}} or the {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.GPURequirements" title="separate server" >}}. Also check that the installation script was run with `-Hardware Gpu`.
