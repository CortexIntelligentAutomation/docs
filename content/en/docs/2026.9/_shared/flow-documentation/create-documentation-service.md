These steps create the Documentation Service in the `fabric:/AI/Services` application.

1. In Service Fabric Explorer, expand `Applications`, then `Cortex.Innovation.AI`, and click `fabric:/AI/Services`.
1. On the `Essentials` tab, check the `Services` section. If `fabric:/AI/Services/Documentation` is already listed, the Documentation Service already exists; skip the remaining steps.
1. In the `Service Types` section, click `Create` in the `Actions` column of the `Documentation` service type.
1. In the `Create Service` dialog, check that the following values are set, changing any that are not:

    | Name | Value |
    |------|-------|
    | Service Name | `fabric:/AI/Services/Documentation` |
    | Service Package Activation Mode | `ExclusiveProcess` |
    | Initialization Data | Empty |
    | Create From Template | Ticked |

1. Click `Create`.
1. In the `Services` section, check that `fabric:/AI/Services/Documentation` is listed with a status of `Ready`. It may take a few minutes for the service to start.

{{% alert title="Note" %}} The Documentation Service starts with its default settings, which use an AI model server on the same server on the processor. It must be configured for this installation in the next step. {{% /alert %}}
