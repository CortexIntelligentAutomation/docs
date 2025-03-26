---
title: "Studio Import"
linkTitle: "Studio Import"
description: "This section includes user guides related to Studio Import in {{% ctx %}} Gateway."
weight: 25
---

# {{% param title %}}

## Summary

Studio Import is a feature that enables individual flows, contained in a Studio Package, to be imported into {{% ctx %}} Studio.

|                              |                                                                 |
|------------------------------|-----------------------------------------------------------------|
| **Roles Required:**          | Admin                                                           |

## Anatomy

{{< figure src="/images/Studio Import.png" title="Studio Import" >}}

## Actions

### Favoured Hierarchy

By default, the display favours the `system hierarchy` of the destination {{% ctx %}} Studio, showing how the imported flows will map into the existing system hierarchy. If an imported flow already exists in the destination, the imported flow will map to the same Group in the {{% ctx %}} Studio hierarchy. If an imported flow does not exist in the destination, the existing {{% ctx %}} Studio hierarchy will be extended using the hierarchy contained the package for that flow.

Alternatively, it is possible to have the display favour the `package hierarchy`, displaying the hierarchy conmtained in the Studio Package. If a version of the flows already exists in the destination {{% ctx %}} Studio, it will be moved to the hierarchy contained in the Studio Package, extending the destination hierarchy if necessary. If a flow does not exist in the destination {{% ctx %}} Studio, the hierarchy of the Studio Package will be created in the destination when the flow is imported.

### Edit Import Locations

The `Edit import hierarchy`, enables any individual imported flows to be assigned to any Group in the hierarchy of the destination {{% ctx %}} Studio. The display will show the entire existing hierarchy of the destination {{% ctx %}} Studio, extended by any necessary Groups from the Studio Package hierarchy where the imported flows do not already exist on the destination {{% ctx %}} Studio; it is not necessary for the administrator to have View or Edit authorisation for any flows to view the entire system Group hierarchy.

### Import

Individual flows contained in the Studio Package may be individually selected for importing into {{% ctx %}} Studio; it is not a requirement that all the flows contained in the Studio Package are imported simultaneously.

When the selected flows from the Studio Package are imported, they will become the Master Version of the flows in the destination Master Repository, replacing any existing Master Versions.

After importing the flows, it is necessary to check the authorisation assigned to imported flows is appropriate for their use.

See the [Import Individual Flows][Import Individual Flows tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

TODO

### Related Tutorials

* [Import Individual Flows][Import Individual Flows tutorial]

[Import Individual Flows tutorial]: {{< url path="Cortex.Tutorials.Administration.StudioImport.ImportIndividualFlows" >}}
