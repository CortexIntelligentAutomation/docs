---
title: "Studio Hierarchy"
linkTitle: "Studio Hierarchy"
description: "Move flows in {{% ctx %}} Gateway."
weight: 70
---

# {{% param title %}}

## Summary

The Studio Hierarchy page is used to move one or more flows from one group to another.

## Anatomy

{{< figure src="/images/Studio Hierarchy.png" title="Studio Hierarchy" >}}

Only flows with `Edit` permissions for the current user are displayed in the Studio Hierarchy grid.

## Actions

### Move Flows

After selecting the flows that are to be moved, right-click on the group where the selected flows will be moved to, and select the `Move selected items to this Group` from the context menu. The display will be updated to show the resultant hierarchy, with the flows to be moved but not yet committed identified with an asterisk (*) in the `Results` column of the grid.

If a group is selected, then only the flows contained in that group are moved to another group; not the group itself.

Once all the necessary flows have been moved, the changes can be committed using the `Commit` button.

See the [Manage Flow Hierarchy][Manage Flow Hierarchy tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* Parent groups must also have edit permissions, in addition to the flows, otherwise the group and flows contained within it will not be displayed.

## See Also

### Related Concepts

None

### Related Tutorials

* [Manage Flow Hierarchy][Manage Flow Hierarchy tutorial]

[Manage Flow Hierarchy tutorial]: {{< url path="Cortex.Tutorials.Administration.StudioHierarchy.ManageFlowHierarchy" >}}
