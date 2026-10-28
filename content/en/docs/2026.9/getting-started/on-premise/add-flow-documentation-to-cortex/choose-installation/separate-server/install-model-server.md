---
title: "Install the AI Model Server"
linkTitle: "Install the AI Model Server"
description: "Information about installing the AI model server and the AI model on the separate Model Server, using the installation script."
weight: 20
---

# {{% param title %}}

This guide describes how to install the AI model server and the AI model on the Model Server, using the installation script supplied in the {{% ctx %}} AI Model Server Install Scripts artefact. Please ensure that the [Prerequisites][] have been read and understood before starting this installation.

Carry out these steps on the Model Server. Nothing in this guide is installed on the Web Application Server.

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
    -Mode "Remote" `
    -CertificatePath "C:\Install\cortex.pfx" `
    -AllowedRemoteAddress "192.168.1.10" `
    -IdleSleepMinutes 0 `
    -Port 8080 `
    -InstallPath "C:\ProgramData\Cortex\AI Model Server" `
    -AcceptEULA:$AcceptEULA `
    *>&1 | Tee-Object -FilePath "cortex-ai-model-install-log.txt"
        {{< /tab >}}
        {{< tab header="GPU">}}
.\Cortex.Install.AIModel.ps1 `
    -Hardware "Gpu" `
    -Mode "Remote" `
    -CertificatePath "C:\Install\cortex.pfx" `
    -AllowedRemoteAddress "192.168.1.10" `
    -IdleSleepMinutes 0 `
    -Port 8080 `
    -InstallPath "C:\ProgramData\Cortex\AI Model Server" `
    -AcceptEULA:$AcceptEULA `
    *>&1 | Tee-Object -FilePath "cortex-ai-model-install-log.txt"
        {{< /tab >}}
    {{< /tabpane >}}

    | Name | Required/Optional | Description |
    |------|-------------------|-------------|
    | `Hardware` | Required | `Cpu` if the AI model server uses the processor, or `Gpu` if it uses an NVIDIA GPU. The same hardware must be chosen when [configuring the Documentation Service][Configure the Documentation Service]. |
    | `Mode` | Required | `Remote`, which installs the AI model server so that it accepts connections from other servers, over `https`, only with the API key. |
    | `CertificatePath` | Required | The location of the certificate obtained in the [Certificate Requirements][]: a .PFX file, or a .PEM certificate file. |
    | `PrivateKeyPath` | Required for a .PEM certificate | For a .PEM certificate file only. The location of the .PEM private key file, e.g. `-PrivateKeyPath "C:\Install\cortex.key"`. |
    | `AllowedRemoteAddress` | Recommended | The IP address of the Web Application Server. A Windows Firewall rule named `Cortex AI Model Server` is added on the Model Server, allowing the port only from this address. Several addresses can be given, separated by commas. If it is omitted, no rule is added and the port must be opened as described in the [Port Requirements][]. |
    | `IdleSleepMinutes` | Recommended | The number of minutes without a request after which the AI model server unloads the model to free its memory (approximately 8 GB). It reloads the model when the next documentation job starts, which delays the start of that job. `0`, which keeps the model loaded, is recommended, as the Model Server only runs the AI model server. |
    | `CertificatePassword` | Optional | For a .PFX file only. The password of the .PFX file. If it is not given, the script asks for it in the PowerShell window, where it can be pasted with Ctrl+V or a right-click. |
    | `PromptForApiKey` | Optional | Add `-PromptForApiKey` to the script in `Cortex.Innovation.Install.AIModel.ps1` to use a particular API key: the script asks for it in the PowerShell window, where it can be pasted with Ctrl+V or a right-click. If no key is given, the first installation generates a new API key, and later runs keep the existing one. |
    | `NewApiKey` | Optional | Add `-NewApiKey` to the script in `Cortex.Innovation.Install.AIModel.ps1` to replace the existing API key with a newly generated one, e.g. to change it. The Documentation Service must then be configured with the new key. |
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
1. When asked, enter the password of the .PFX file, and the API key if `-PromptForApiKey` was added to `Cortex.Innovation.Install.AIModel.ps1`. Either can be pasted with Ctrl+V or a right-click.
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
1. When asked, enter the password of the .PFX file, and the API key if `-PromptForApiKey` was added to `Cortex.Innovation.Install.AIModel.ps1`. Either can be pasted with Ctrl+V or a right-click.
1. Wait for the command to finish. Copying the model file can take several minutes. The output is also written to the `cortex-ai-model-install-log.txt` file in the same folder. The script:
    * Installs the Visual C++ 2015-2022 Redistributable (x64) supplied in the `Installation Media` folder, if the installed runtime is missing or older than 14.40.
    * Installs the NSSM supplied in the artefact into `C:\ProgramData\Cortex\AI Model Server\NSSM`, if it is not there already.
    * Extracts the AI model server for the hardware into a new folder and checks that it starts. Only then does it stop an existing installation and replace its `C:\ProgramData\Cortex\AI Model Server\Llama` folder, so a failed update leaves the existing installation running.
    * Copies the AI model into `C:\ProgramData\Cortex\AI Model Server\Models`, unless the installed model is already identical.
    * Writes the certificate and private key, from the .PFX file or the .PEM files, into `C:\ProgramData\Cortex\AI Model Server\TLS`, and writes the API key to `C:\ProgramData\Cortex\AI Model Server\Secrets\api-key.txt`. Only the AI model server (`Local System`) can read these two folders, and the Local Administrators group can manage them.
    * Installs the AI model server as the `Cortex AI Model Server` Windows service, starts it and waits until it is listening.
    * Adds the `Cortex AI Model Server` firewall rule for the addresses in `AllowedRemoteAddress`. If it was not given, an existing rule keeps its addresses.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation, check the configuration in `Cortex.Innovation.Install.AIModel.ps1`, and run the installation script again. It is safe to run it again: it replaces the existing installation.

    If the errors do not give any instructions on how to rectify, see {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Advanced.TroubleshootingInstallation" title="Problems During Installation" >}} for further information, e.g. if the script reports that `llama-server.exe --version` failed; if this does not help then please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for assistance, providing the `cortex-ai-model-install-log.txt` file from the `Cortex Innovation {{< version >}} - AI Model Server Install Scripts` folder.
1. If a new API key was generated, copy it from the end of the output and store it securely. It is displayed only once, and is needed to [configure the Documentation Service][Configure the Documentation Service].

{{% alert title="Warning" color="warning" %}} The AI model server cannot read {{% ctx %}} encrypted text, so the API key is stored as plain text in `api-key.txt` on the Model Server. Access to the file is restricted by the script; do not change its permissions. {{% /alert %}}

{{% alert title="Note" %}} The installation script can be run again at any time, e.g. to change the hardware or to renew the certificate. It replaces the existing installation, but keeps the existing API key unless `-PromptForApiKey` or `-NewApiKey` is used. {{% /alert %}}

## Check the AI Model Server

{{< section "/flow-documentation/check-model-server.md" >}}

## Preserve installation files

{{< section "/preserve-installation-files.md">}}

## Next Steps?

1. [Create the Documentation Service][] on the Web Application Server

[Certificate Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.CertificateRequirements" >}}
[Configure the Documentation Service]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.ConfigureDocumentationService" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Create the Documentation Service]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.CreateDocumentationService" >}}
[Eula]: {{< url path="Cortex.Website.Eula.MainDoc" >}}
[Port Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.PortRequirements" >}}
[Prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.Prerequisites" >}}
