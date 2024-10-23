These are non-compulsory security measures, recommended to be applied to the server, in order to prevent potential attacks that exploit known industry security vulnerabilities.

Applying these measures may impact other applications running on your server. Therefore, it is your responsibility to ensure that other applications and their clients will not be affected by the changes.

### Only Use Recommended Encryption Algorithms and TLS Protocols

A collection of registry settings need to be applied to guarantee your server is only using the recommended encryption algorithms and TLS protocols. Information about these settings can be found at [SSL Best Practices][].

{{% alert type="warning" title="Warning" %}}Disabling specific TLS versions or specific Cipher Suites can have impact on {{% ctx %}} components themselves as well as their communication capabilities with third party systems and services, e.g. Execution Service executing flows with blocks which communicate with 3rd parties via PowerShell or REST. All parties communicating together must support a shared protocol version and cipher suite, otherwise they will not be able to establish a secure communication link between each other.{{% /alert %}}

The settings can be applied by running a script. Be aware that the server will be restarted when the script is run. Apply the settings by following these instructions:

1. Open a Windows PowerShell (x64) window as administrator.
1. Type and run the following command to temporarily set the PowerShell Execution Policy:

    ```powershell
    Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
    ```

    {{< alert title="Note">}}This is a temporary change and will only affect the current PowerShell window.{{< /alert >}}

1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - App Server Install Scripts"
    ```

1. Run the `Cortex.Innovation.Install.SSLBestPractices.ps1` script using the following command:

    ```powershell
    .\Cortex.Innovation.Install.SSLBestPractices.ps1
    ```

    {{% alert title="Note" %}}
To avoid answering all of the prompts `-Override 0` can be added to the end of the script. This will automatically apply all settings and forcibly restart the server.
    {{% /alert %}}

   If `-Override 0` has been specified no further steps need to be taken and you can move on to the next section when the server has restarted.
1. To use all the recommended settings click `Apply all` to the first prompt.

    To selectively apply each setting select `Choose which to apply`. Each change will then be prompted with a Yes/No confirmation before applying.
1. Restart the machine when the script asks.

[SSL Best Practices]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.SSLBestPractices" >}}