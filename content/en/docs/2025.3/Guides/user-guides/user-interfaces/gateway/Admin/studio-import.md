---
title: "Studio Import"
linkTitle: "Studio Import"
description: "This section includes user guides related to Studio Import in {{% ctx %}} Gateway."
weight: 25
---

# {{% param title %}}

## Summary

The Studio Import page allows importing individual flows, contained in a Studio Package.

|                              |                                                                 |
|------------------------------|-----------------------------------------------------------------|
| **Roles Required:**          | Admin                                                           |

## Anatomy

{{< figure src="/images/Studio Import.png" title="Studio Import" >}}

## Actions

### Favoured Hierarchy

By default, the import favours the `system hierarchy`, and shows how the imported flows will map into the existing hierarchy. If flows to be imported already exist, they will be imported to the same location in the hierarchy; otherwise, any missing groups in the flow hierarchy will be added.

It is possible to favour the `package hierarchy`, and this shows the hierarchy contained in the Studio Package. If flows to be imported already exist, they will be moved to the location specified in the Studio Package, adding any missing groups as necessary; otherwise, the hierarchy specified in the Studio Package will be created when the flows are imported.

### Edit Import Locations

The `Edit import hierarchy` switch enables editing the locations where flows should be imported to. This is useful if the default import location in the [favoured hierarchy][] for one or more flows needs changing.

It is not necessary to have View or Edit authorisation for any flows or groups to view the entire hierarchy.

### Import

Individual flows contained in the Studio Package may be individually selected to be imported; it is not necessary that all the flows contained in the Studio Package are imported.

When the selected flows are imported, they become the Master Version of the flows in the Master Repository, replacing any existing Master Versions.

After importing the flows, it is necessary to check they are correctly configured in Studio Authorisation.

See the [Import Individual Flows][Import Individual Flows tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

None

### Related Tutorials

* [Import Individual Flows][Import Individual Flows tutorial]

[favoured hierarchy]: {{< ref "#favoured-hierarchy">}}
[Import Individual Flows tutorial]: {{< url path="Cortex.Tutorials.Administration.StudioImport.ImportIndividualFlows" >}}
