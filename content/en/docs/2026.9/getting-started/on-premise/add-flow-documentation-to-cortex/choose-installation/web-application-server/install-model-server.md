---
title: "Install the AI Model Server"
linkTitle: "Install the AI Model Server"
description: "Information about installing the AI model server and the AI model on the Web Application Server, using the installation script."
weight: 20
---

# {{% param title %}}

This guide describes how to install the AI model server and the AI model on the Web Application Server, using the installation script supplied in the {{% ctx %}} AI Model Server Install Scripts artefact. Please ensure that the [Prerequisites][] have been read and understood before starting this installation.

Carry out these steps on the Web Application Server.

## Make Artefacts Available

{{< section "/flow-documentation/make-artefacts-available.md" >}}

## Check the Prerequisites

{{< section "/flow-documentation/check-prerequisites.md" >}}

## Configure the Installation Script

1. In the `Cortex Innovation {{< version >}} - AI Model Server Install Scripts` folder, locate the `Cortex.Innovation.Install.AIModel.ps1` script and open it with a text editor.
1. Choose the tab below that matches the hardware that the AI model server will use, then update the script to match, changing the parameters according to the details given below:

    {{< tabpane lang="powershell" >}}
        {{< tab header="CPU">}}
.\Cortex.Install.AIModel.ps1 `
    -Hardware "Cpu" `
    -Mode "Local" `
    -IdleSleepMinutes 10 `
    -Port 8080 `
    -InstallPath "C:\ProgramData\Cortex\AI Model Server" `
    -AcceptEULA:$AcceptEULA `
    *>&1 | Tee-Object -FilePath "cortex-ai-model-install-log.txt"
        {{< /tab >}}
        {{< tab header="GPU">}}
.\Cortex.Install.AIModel.ps1 `
    -Hardware "Gpu" `
    -Mode "Local" `
    -IdleSleepMinutes 10 `
    -Port 8080 `
    -InstallPath "C:\ProgramData\Cortex\AI Model Server" `
    -AcceptEULA:$AcceptEULA `
    *>&1 | Tee-Object -FilePath "cortex-ai-model-install-log.txt"
        {{< /tab >}}
    {{< /tabpane >}}

    | Name | Required/Optional | Description |
    |------|-------------------|-------------|
    | `Hardware` | Required | `Cpu` if the AI model server uses the processor, or `Gpu` if it uses an NVIDIA GPU. The same hardware must be chosen when [configuring the Documentation Service][Configure the Documentation Service]. |
    | `Mode` | Required | `Local`, which installs the AI model server so that it only accepts connections from the same server, over `http` on `127.0.0.1`. |
    | `IdleSleepMinutes` | Recommended | The number of minutes without a request after which the AI model server unloads the model to free its memory (approximately 8 GB). It reloads the model when the next documentation job starts, which delays the start of that job. `10` is recommended, so that the Web Application Server only uses the memory while documentation is being generated. `0` keeps the model loaded. |
    | `Port` | Optional | The port that the AI model server listens on. The default is `8080`. If this is changed, the same port must be used in the address of the AI model server when [configuring the Documentation Service][Configure the Documentation Service]. |
    | `InstallPath` | Optional | The folder that the AI model server is installed into. The default is `C:\ProgramData\Cortex\AI Model Server`. |

1. Save and close `Cortex.Innovation.Install.AIModel.ps1`.

## Test the Installation Script

1. Type the following command into the same PowerShell window:

    ```powershell
    .\Cortex.Innovation.Install.AIModel.ps1 -WhatIf
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInstallScriptName>.ps1 -WhatIf -AcceptEULA
    ```

1. Run the PowerShell command to test the installation script.
1. Wait for the command to finish. It checks the prerequisites again and displays what the script would do, without making any changes to the server.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are no errors, continue to the next section; otherwise, check if the errors have any instructions for rectifying the issue and follow them.

    If there are no useful instructions, check that all previous steps have been followed correctly and, if not, rectify it and run the command again. <br /><br />If this does not work, please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for further assistance, providing the output of the command.

## Run the Installation Script

1. Type the following command into PowerShell:

    ```powershell
    .\Cortex.Innovation.Install.AIModel.ps1
    ```

1. Please read the End User Licence Agreement which can be found [here][Eula]. Once you agree to the terms, add the flag `-AcceptEULA` to the command entered above, e.g:

    ```powershell
    .\<CortexInstallScriptName>.ps1 -AcceptEULA
    ```

1. Run the PowerShell command to install the AI model server.
1. Wait for the command to finish. Copying the model file can take several minutes. The output is also written to the `cortex-ai-model-install-log.txt` file in the same folder. The script:
    * Installs the Visual C++ 2015-2022 Redistributable (x64) supplied in the `Installation Media` folder, if the installed runtime is missing or older than 14.40.
    * Installs the NSSM supplied in the artefact into `C:\ProgramData\Cortex\AI Model Server\NSSM`, if it is not there already.
    * Extracts the AI model server for the hardware into a new folder and checks that it starts. Only then does it stop an existing installation and replace its `C:\ProgramData\Cortex\AI Model Server\Llama` folder, so a failed update leaves the existing installation running.
    * Copies the AI model into `C:\ProgramData\Cortex\AI Model Server\Models`, unless the installed model is already identical.
    * Installs the AI model server as the `Cortex AI Model Server` Windows service, starts it and waits until it is listening.
    * Sets the AI model server to unload the model after `IdleSleepMinutes` minutes without a request.
    * Removes the certificate, API key and firewall rule left by an earlier installation on a separate server, if there are any, as they are not used on the Web Application Server.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, check the configuration in `Cortex.Innovation.Install.AIModel.ps1`, and run the installation script again. It is safe to run it again: it replaces the existing installation.

    If the errors do not give any instructions on how to rectify, see {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Advanced.TroubleshootingInstallation" title="Problems During Installation" >}} for further information, e.g. if the script reports that `llama-server.exe --version` failed; if this does not help then please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for assistance, providing the `cortex-ai-model-install-log.txt` file from the `Cortex Innovation {{< version >}} - AI Model Server Install Scripts` folder.

{{% alert title="Note" %}} The installation script can be run again at any time, e.g. to change the hardware or the port. It replaces the existing installation. {{% /alert %}}

## Check the AI Model Server

{{< section "/flow-documentation/check-model-server.md" >}}

## Preserve installation files

{{< section "/preserve-installation-files.md">}}

## Next Steps?

1. [Create the Documentation Service][]

[Configure the Documentation Service]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.ConfigureDocumentationService" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Create the Documentation Service]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.CreateDocumentationService" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.Prerequisites" >}}
