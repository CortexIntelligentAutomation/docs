---
title: "Studio Export"
linkTitle: "Studio Export"
description: "This section includes user guides related to Studio Export in {{% ctx %}} Gateway."
weight: 50
---

# {{% param title %}}

## Summary

Studio Export is a feature that enables one or more flows to be exported into a Studio Package file, which may be used for archiving purposes, or [importing][Studio Import] flows into another {{% ctx %}} Studio. A Studio Package file may contain a mixture of distinct {{% ctx %}} and {{% ctx %}} 7 flows.

|                              |                                                                 |
|------------------------------|-----------------------------------------------------------------|
| **Roles Required:**          | Admin                                                           |

## Anatomy

{{< figure src="/images/Studio Export.png" title="Studio Export" >}}

Any flow in the system may be exported; it is not necessary for the administrator to have View or Edit authorisation for the flows to be exported.

Individual flows are selected by clicking the checkbox in the `Export?` column adjacent to the flow to be exported. If a group is selected, then all the flows contained in that group, and any sub-groups, will be implicitly set; any implicitly set may be individually deselected by clicking the checkbox adjacent to the flow.

Clicking `Export` will create the Studio Package from the Master Versions in the Master Repository of the selected flows, including their group hierarchy, and then download the package to the host’s browser as a file named `export.studiopkg` or `export <n>.studiopkg`, where `<n>` represents an integer to avoid naming conflict with other Studio Package files contained in the same folder.

## Remarks

### Known Limitations

* Any flows that are dependencies of selected flows will not be automatically selected for export.

## See Also

### Related Concepts

TODO

### Related Tutorials

* [Export Individual Flows][Export Individual Flows tutorial]

[Export Individual Flows tutorial]: {{< url path="Cortex.Tutorials.Administration.StudioExport.ExportIndividualFlows" >}}
[Studio Import]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioImport.MainDoc" >}}
