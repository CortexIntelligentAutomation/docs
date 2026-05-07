On the Application Server:

1. Open a File Explorer.
1. Navigate to the Execution service directory, e.g. `%ProgramData%\SF\<CustomerName>.<NodeName>\Fabric\work\Applications\Cortex.Innovation.Execution_App<n>\ExecutionPkg.Code.{{% execpkgversion %}}` replacing `<CustomerName>` with the `CustomerName` configured during [installation][Configure Installation Script], `<NodeName>` with the NETBIOS name of the server and `<n>` with the highest number in the directory.
1. Open the `appsettings.json` file in a text editor.
1. Create a new key called `"RunAsCredentials"` at the top level of the json object with the value set as an object containing the keys `"Domain"`, `"Username"`, and `"Password"`. The object should look similar to:

    ``` json
    "RunAsCredentials": {
        "Domain":   "Domain",
        "Username": "Username",
        "Password": #_171641096221!17028071064172013227186106126~017754255251!160252130221745128017#"
    },
    ```

    {{< alert color="warning" title="Warning" >}} The password must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="{{% ctx %}} Encrypted" >}}.{{< /alert >}}

1. Save and close the file.
1. In the File Explorer, navigate to `%ProgramData%\SF\<CustomerName>.<NodeName>\Fabric\work\ImageCache\Store\Cortex.Innovation.Execution\ExecutionPkg.Code.{{% execpkgversion %}}` replacing `<CustomerName>` with the Customer Name and `<NodeName>` with the NETBIOS name of the server specified in step 2.
1. Repeat steps 3 - 5.
1. Open a web browser.
1. Navigate to `https://server.domain.com:9080/Explorer`, where `server.domain.com` is the fully qualified domain name of the server. Replace `9080` with new `httpGatewayEndpointPort` value if it was changed during configuration of the original installation.

    {{% alert title="Note" %}}
If a certificate error occurs, it will be necessary to import the certificate used in the `ServerCertificatePath` parameter when {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureInstallationScriptNew" title="Configuring the Installation Script" >}}. Instructions on how to do this can be found {{< ahref path="Cortex.Faqs.ImportClientCertificate.SingleServer" title="here" >}}.
    {{% /alert %}}

1. Expand `Cluster` then `Nodes`.
1. Restart the node by clicking on the drop down menu next to the node name and select `Restart`. Confirm node restart by following the on-screen instructions.

Once the node has been restarted, it is necessary to re-check the cluster health. Instructions on how to do this can be found [here][Check Application Server Cluster Health].

[Check Application Server Cluster Health]: {{< url path="Cortex.Faqs.CheckClusterHealth.SingleServer.ViewClusterHealth" >}}
[Configure Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureInstallationScriptNew" >}}
