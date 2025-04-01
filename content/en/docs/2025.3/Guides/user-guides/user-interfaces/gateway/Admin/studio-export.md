---
title: "Studio Export"
linkTitle: "Studio Export"
description: "This section includes user guides related to Studio Export in {{% ctx %}} Gateway."
weight: 50
---

# {{% param title %}}

## Summary

The Studio Export page allows exporting one or more flows into a Studio Package file, which may be used for archiving purposes, or [importing][Studio Import] flows into another {{% ctx %}}.

|                              |                                                                 |
|------------------------------|-----------------------------------------------------------------|
| **Roles Required:**          | Admin                                                           |

## Anatomy

{{< figure src="/images/Studio Export.png" title="Studio Export" >}}

## Actions

### Export Flows

Individual flows are selected by clicking the checkbox in the `Export?` column adjacent to the flow to be exported. If a group is selected, then all the flows contained in that group, and any sub-groups, will be implicitly set; any implicitly set may be individually deselected by clicking the checkbox adjacent to the flow.

Clicking `Export` checks if selected flows have dependencies. If there are dependencies, an additional page will be shown to allow confirmation that these should be included in the export. By default these are selected but can be deselected. A Studio Package will then be created from the Master Versions in the Master Repository of the selected flows, including their group hierarchy. The package will then be downloaded to the host’s browser as a file named `export.studiopkg` or `export <n>.studiopkg`, where `<n>` represents an integer to avoid naming conflict with other Studio Package files contained in the same folder.

It is not necessary to have View or Edit authorisation for the flows to be exported.

See the [Export Individual Flows][Export Individual Flows tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* The name of the Studio Package file cannot currently be customised.

## See Also

### Related Concepts

None

### Related Tutorials

* [Export Individual Flows][Export Individual Flows tutorial]

[Export Individual Flows tutorial]: {{< url path="Cortex.Tutorials.Administration.StudioExport.ExportIndividualFlows" >}}
[Studio Import]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioImport.MainDoc" >}}
