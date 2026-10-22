1. Navigate to the {{< ahref path="Cortex.Reference.Glossary.P-T.ServiceFabricExplorer" title="Service Fabric Explorer" >}}, typically `http://localhost:9080/Explorer`.
1. Expand the `Nodes`.
1. Restart the `DocumentationPkg` for each node that runs the Documentation Service by following these steps:
    1. Expand the node name.
    1. Expand `fabric:/AI/Services`.
    1. Expand the `DocumentationPkg` service package.
    1. Expand `Code Packages`.
    1. Hover over `Code` and click on the `▼` button.
    1. Confirm the restart as prompted, then click `Restart`.

{{< alert type="note" title="Note" >}}
It may take a few minutes for the `Code` package to restart.
{{< /alert >}}
