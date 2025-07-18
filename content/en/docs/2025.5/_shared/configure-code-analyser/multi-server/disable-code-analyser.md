1. Open a File Explorer.
1. Navigate to the Execution service directory, e.g. `%ProgramData%\SF\<CustomerName>.<NodeName>\Fabric\work\Applications\Cortex.Innovation.Execution_App<n>\ExecutionPkg.Code.{{% execpkgversion %}}` replacing `<CustomerName>` with the `CustomerName` configured during [installation][Configure Installation Script], `<NodeName>` with the NETBIOS name of the server and `<n>` with the highest number in the directory.
1. Open the `appsettings.json` file in a text editor.
1. Locate the `"FeatureFlags"` line located under `"ExecutionEngine"` and set the value to `["f4fd94c0-a921-4b34-b82c-378b05e91555"]`.
1. Save and close the file.
1. In the File Explorer, navigate to `%ProgramData%\SF\<CustomerName>.<NodeName>\Fabric\work\ImageCache\Store\Cortex.Innovation.Execution\ExecutionPkg.Code.{{% execpkgversion %}}` replacing `<CustomerName>` with the Customer Name and `<NodeName>` with the NETBIOS name of the server specified in step 2.
1. Repeat steps 3 - 5.
1. Open a web browser.
1. Navigate to `https://server.domain.com:9080/Explorer`, where `server.domain.com` is the fully qualified domain name of the server. Replace `9080` with new `httpGatewayEndpointPort` value if it was changed during configuration of the original installation.

    {{% alert title="Note" %}}
If a certificate error occurs, it will be necessary to import the client certificate used in the `ClientCertificatePath` parameter when {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureInstallationScriptNew" title="Configuring the Installation Script" >}} on the Application Servers or the certificate used in the `ServerCertificatePath` parameter when {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureDebuggerInstallationScript" title="Configuring the Flow Debugger Installation Script" >}} on the Web Application Server. Instructions on how to do this can be found {{< ahref path="Cortex.Faqs.ImportClientCertificate.MultiServer" title="here" >}}.
    {{% /alert %}}

1. Expand `Cluster` then `Nodes`.
1. Restart the node by clicking on the drop down menu next to the node name and select `Restart`. Confirm node restart by following the on-screen instructions.

Once the all the nodes have been restarted, it is necessary to re-check the cluster health. Instructions on how to do this can be found [here][Check Application Server Cluster Health] for the Application Servers and [here][Check Flow Debugger Cluster Health] for the Flow Debugger.

[Check Application Server Cluster Health]: {{< url path="Cortex.Faqs.CheckClusterHealth.MultiServer.ViewClusterHealth" >}}
[Check Flow Debugger Cluster Health]: {{< url path="Cortex.Faqs.CheckClusterHealth.SingleServer.ViewClusterHealth" >}}
[Configure Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureInstallationScriptNew" >}}
