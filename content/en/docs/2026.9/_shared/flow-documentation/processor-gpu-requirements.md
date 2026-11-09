The AI model server runs either on the processor or on an NVIDIA GPU. Only the section below for the hardware that it will use applies.

### If the AI Model Server Uses the Processor

{{% alert title="Warning" color="warning" %}}
The processor must support the AVX2 instruction set. Servers that are virtual machines can hide this from the AI model server, even when the physical server supports it.
{{% /alert %}}

No action is needed now. The prerequisites script checks for AVX2 at the start of the installation, and the changes below are only needed if that check fails.

#### If the Processor AVX2 Check Fails

The server is a virtual machine whose virtual processor hides AVX2, even though the physical host supports it. Depending on the hypervisor, the AI model server then either stops at start-up without displaying an error, or runs at approximately half the speed.

To fix this, ask the team that manages the host to:

1. Change the virtual machine's processor settings so that AVX2 is available to it. The setting is usually called the processor or CPU type, model or compatibility mode. Either pass the host's processor through to the virtual machine, or choose a processor model or compatibility level that includes AVX2.
1. Shut down the virtual machine and start it again from the host. A restart from inside the virtual machine does not apply the change.

{{% alert title="Note" %}} Settings that allow a virtual machine to move between hosts with different processors, such as processor compatibility modes, often hide AVX2. Changing them may limit which hosts the virtual machine can move to. {{% /alert %}}

Then run the prerequisites script again, and confirm that the `Processor AVX2` check passes.

### If the AI Model Server Uses a GPU

{{% alert title="Warning" color="warning" %}}
On a server with a GPU that supports Multi-Instance GPU (MIG) mode, e.g. an NVIDIA A100 or H100, MIG mode must be disabled. If it is enabled, the AI model server cannot use the GPU and silently runs on the processor instead, at approximately 1 token per second. This looks as though the AI model server has stopped responding.
{{% /alert %}}

No action is needed now. The prerequisites script checks the MIG mode at the start of the installation, and the steps below are only needed if that check fails.

#### If the GPU MIG mode Check Fails

Disable MIG mode:

1. Open a Windows PowerShell (x64) window as administrator.
1. Run the following command:

    ```powershell
    nvidia-smi -mig 0
    ```

1. Restart the server.
1. Run the prerequisites script again and confirm that the `GPU MIG mode` check passes.

{{% alert title="Note" %}}
On some cloud servers MIG mode is enabled again when the server is shut down. If documentation is generated very slowly after a shutdown, run the prerequisites script again.
{{% /alert %}}
