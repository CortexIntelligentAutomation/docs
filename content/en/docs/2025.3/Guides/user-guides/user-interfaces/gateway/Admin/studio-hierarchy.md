---
title: "Studio Hierarchy"
linkTitle: "Studio Hierarchy"
description: "Manage the flow hierarchy in {{% ctx %}} Gateway."
weight: 70
---

# {{% param title %}}

## Summary

The Studio Hierarchy page is used to move one or more flows from one group to another.

## Anatomy

{{< figure src="/images/Studio Hierarchy.png" title="Studio Hierarchy" >}}

Only flows that the user has Edit permissions for are displayed.

## Actions

### Move Flows

After selecting the flows that are to be moved to a unique location in Group hierarchy, Right-Click on the target Group to where the selected flows will be moved to, and select the `Move selected items to this Group` from the context menu. The display will be updated to show the resultant hierarchy, with the flows to be moved but not yet committed identified with an asterisk (*) in the Results column of the display.

If a Group is selected, then only the flows contained in that selected group are moved to another group; not the group itself.

See the [Manage Flow Hierarchy][Manage Flow Hierarchy tutorial] tutorial for a step-by-step guide.

### Commit Changes

Once all the necessary flows have been moved in the hierarchy, all the changes can be committed using the Commit button.

See the [Manage Flow Hierarchy][Manage Flow Hierarchy tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* It is necessary for the parent Groups to have Edit permissions in addition to the flows to be moved, to enable the display of the flows in Studio Hierarchy.

## See Also

### Related Concepts

None

### Related Tutorials

* [Manage Flow Hierarchy][Manage Flow Hierarchy tutorial]

[Manage Flow Hierarchy tutorial]: {{< url path="Cortex.Tutorials.Administration.StudioHierarchy.ManageFlowHierarchy" >}}
