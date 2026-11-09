---
---

{{% alert title="Warning" color="warning" %}}
When upgrading from any release before 2026.9 to 2026.9 or later, executions running on existing Execution Services may not survive the upgrade. The cluster or Service Fabric runtime upgrade may need to restart those services, which terminates any running executions. Executions that use the {{% ctx %}} Fault Tolerance module are automatically re-executed by {{% ctx %}}; all other executions are not re-executed.
{{% /alert %}}
