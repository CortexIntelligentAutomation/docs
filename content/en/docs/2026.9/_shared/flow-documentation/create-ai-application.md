The Documentation Service runs in the `fabric:/AI/Services` application. The `Cortex.Innovation.AI` application type is installed with {{% ctx %}}, but the application is not created by default. These steps create it in the Service Fabric cluster on the Web Application Server, which also hosts the Flow Debugger.

1. Navigate to the {{< ahref path="Cortex.Reference.Glossary.P-T.ServiceFabricExplorer" title="Service Fabric Explorer" >}}, typically `http://localhost:9080/Explorer`.
1. Expand `Applications`, then `Cortex.Innovation.Execution`, and check that at least one Execution Service is listed with a health state of `Ok`.

    {{% alert title="Important" color="warning" %}} The Documentation Service reads the blocks used by each flow from the blocks installed by the Execution Services on the same server. If more than one Execution Service is installed, it uses the newest installed version of the blocks. If there is no healthy Execution Service, documentation cannot be generated, and every flow fails with the reason `Failed`. Create an Execution Service before continuing. {{% /alert %}}

1. Click `Cortex.Innovation.AI` under `Applications`.

    {{% alert title="Note" %}} If `Cortex.Innovation.AI` is not listed under `Applications`, the installed version of {{% ctx %}} does not include the AI application. {{% ctx %}} {{< version >}} or later must be installed or upgraded to on the Web Application Server first. {{% /alert %}}

1. If `fabric:/AI/Services` is already listed under `Cortex.Innovation.AI`, the application already exists; skip the remaining steps.
1. On the `Essentials` tab, in the `Application Type versions` section, click `Create` in the `Actions` column.
1. In the `Create app instance` dialog, enter `fabric:/AI/Services` as the application name, and click `Create`.

    {{% alert title="Important" color="warning" %}} The name must be exactly `fabric:/AI/Services`. Documentation requests are sent to the Documentation Service in the application of this name, so with any other name the Documentation Service cannot be found. {{% /alert %}}

1. Check that `fabric:/AI/Services` is listed under `Cortex.Innovation.AI` with a health state of `Ok`.

{{% alert title="Note" %}} Once created, the application and the Documentation Service are kept when {{% ctx %}} is upgraded, and are upgraded with it. {{% /alert %}}
