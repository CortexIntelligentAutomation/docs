The `Cortex.Install.AIModel.Prerequisites.ps1` script checks that the server is ready for the AI model server. It does not change anything on the server.

1. In the Windows PowerShell (x64) window opened as administrator, navigate PowerShell to inside the `Cortex Innovation {{< version >}} - AI Model Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - AI Model Server Install Scripts"
    ```

1. Run the `Cortex.Install.AIModel.Prerequisites.ps1` script using the command in the tab below that matches the hardware that the AI model server will use:

    {{< tabpane lang="powershell" >}}
        {{< tab header="CPU">}}
.\Cortex.Install.AIModel.Prerequisites.ps1 -Hardware Cpu
        {{< /tab >}}
        {{< tab header="GPU">}}
.\Cortex.Install.AIModel.Prerequisites.ps1 -Hardware Gpu
        {{< /tab >}}
    {{< /tabpane >}}

1. The script displays `PASS`, `WARNING` or `FAIL` for each of the following checks, and what to do for any check that does not pass:

    | Check | Hardware | Passes when | If it does not pass |
    |-------|----------|-------------|---------------------|
    | `Visual C++ runtime` | CPU and GPU | Version 14.40 or later of the Visual C++ 2015-2022 Redistributable (x64) is installed. | Nothing: this is only a warning. The installation script installs the Visual C++ 2015-2022 Redistributable (x64) supplied in its `Installation Media` folder. If it then asks for the server to be restarted, restart it and run the installation script again. |
    | `Processor AVX2` | CPU, and GPU as a warning only | The processor provides the AVX2 instruction set. | Change the virtual machine as described in [If the Processor AVX2 Check Fails](../prerequisites/#if-the-processor-avx2-check-fails). |
    | `NVIDIA driver` | GPU | An NVIDIA driver supporting CUDA 12.4 or later is installed. | Install a current NVIDIA driver as described in [Software Requirements](../prerequisites/#software-requirements). |
    | `GPU MIG mode` | GPU | MIG mode is disabled, or is not supported by the GPU. | Disable MIG mode as described in [If the GPU MIG mode Check Fails](../prerequisites/#if-the-gpu-mig-mode-check-fails). |
    | `Port 8080` | CPU and GPU | Nothing else is using the port that the AI model server will listen on. | Free the port, or use a different port, as described in [Port Requirements](../prerequisites/#port-requirements). |
    | `Disk space` | CPU and GPU | At least 10 GB is free on the drive that the AI model server will be installed on. | Free some space, or install to another drive with the `InstallPath` parameter of the installation script. |

1. Correct any check that displays `FAIL`, then run the script again. The script displays `All prerequisites are met.` when no check fails. Review any check that displays `WARNING` before continuing.

