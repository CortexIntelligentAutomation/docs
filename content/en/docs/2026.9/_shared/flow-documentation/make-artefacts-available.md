1. Copy the following artefacts to the same folder on the server, e.g. `C:\Install`:
    * Cortex Innovation {{< version >}} - AI Model Server Install Scripts.zip
    * Cortex Innovation {{< version >}} - AI Model Server.zip
    * Cortex Innovation {{< version >}} - AI Model.zip

    {{% alert title="Important" color="warning" %}} Only the files for the version to be installed should be in the containing folder. There should not be any other versions of the files in this folder or a subfolder. {{% /alert %}}

1. Open a Windows PowerShell (x64) window as administrator. In the Start menu, this is **Windows PowerShell**, not **Windows PowerShell (x86)**.
1. Navigate PowerShell to inside the folder containing the artefacts using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install"
    ```

1. Ensure that the artefacts have not been blocked by the operating system by running the following command:

    ```powershell
    Unblock-File -Path ".\Cortex Innovation {{< version >}} - AI Model Server Install Scripts.zip", ".\Cortex Innovation {{< version >}} - AI Model Server.zip", ".\Cortex Innovation {{< version >}} - AI Model.zip"
    ```

1. Extract each file to a folder with the same name in the same folder, e.g. extract `Cortex Innovation {{< version >}} - AI Model Server.zip` to `C:\Install\Cortex Innovation {{< version >}} - AI Model Server`. The installation script looks for the `Cortex Innovation {{< version >}} - AI Model Server` and `Cortex Innovation {{< version >}} - AI Model` folders next to the folder that it is in.

    The folders contain the following:

    | Folder | Contents |
    |--------|----------|
    | `Cortex Innovation {{< version >}} - AI Model Server Install Scripts` | The `Cortex.Install.AIModel.Prerequisites.ps1` script, the `Cortex.Innovation.Install.AIModel.ps1` script that is configured and run to install the AI model server, the `Cortex.Install.AIModel.ps1` script and `Cortex.Install.AIModel.psm1` module that it uses, and the `Installation Media` folder containing the Visual C++ 2015-2022 Redistributable (x64). |
    | `Cortex Innovation {{< version >}} - AI Model Server` | The `llama.cpp` folder containing the AI model server archives, the `nssm` folder containing the NSSM archive, the `THIRD-PARTY-NOTICES.txt` file and the `licenses` folder. |
    | `Cortex Innovation {{< version >}} - AI Model` | The AI model file, `ibm-granite_granite-4.1-8b-Q4_K_M.gguf`, the `THIRD-PARTY-NOTICES.txt` file and the `licenses` folder. |

    {{% alert title="Note" %}} The `THIRD-PARTY-NOTICES.txt` files list the third-party software that is supplied and the licences that it is supplied under. The full licence texts are in the `licenses` folders. {{% /alert %}}
