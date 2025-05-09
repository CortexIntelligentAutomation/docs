---
title: "Left Panel"
linkTitle: "Left Panel"
description: "TODO"
weight: 20
---

# {{% param title %}}

## Summary

The Left Panel shows the Palettes, which is automatically opened when working in Edit or Debug Edit modes.

## Anatomy

{{< figure src="/images/Flow Editor - Left Panel.png" title="Left Panel" >}}

The Left Panel shows the Palettes containing blocks that can be used to construct a flow.

The Palettes group functional blocks with similar themes, and many of the blocks in a palette look similar but perform slightly different functions; the actual function that a block performs is shown in text, next to the block icon.

## Actions

### Collapse/Expand the Panel

The Left Panel can be manually opened or closed at any time using the open/close handles.

### Collapse/Expand Palette Groups

To expand or collapse all Palette Groups, click the relevant {{< image src="/images/Flow Editor - Expand All.png" >}} or {{< image src="/images/Flow Editor - Collapse All.png" >}} icon at the top of the Left Panel. Each Palette Group may be expanded or collapsed independently by clicking on the {{< image src="/images/Flow Editor - Expand Palette.png" >}} or {{< image src="/images/Flow Editor - Collapse Palette.png" >}} icon to the right of the group name.

### View Functional Blocks

To view the functional blocks contained in the Palette, click on the {{< image src="/images/Flow Editor - Expand Palette.png" >}} icon to the right of the palette group to expand the group and show the functional blocks it contains, or alternatively, click the {{< image src="/images/Flow Editor - Expand All.png" >}} icon at the top of the Left Panel to expand all the palette groups.

### Search for a Block

To search for a block by name, start typing into the search box below the Palette’s title bar. All the blocks that start with the same search characters will be displayed; then more characters entered, the more fined the search will be, displaying fewer block options. The search is a fuzzy search, which means that even misspelt block names should identify the intended matching blocks.

### Place a Block on a Workspace

To place a copy of a block from the Palette onto a Workspace, left-click on the block in the Palette and drag it onto the Workspace.

## Remarks

### Known Limitations

* If the developer has [`View`][View] permissions, it is still possible to drag a block from the Palettes onto a Workspace. Once placed on the Workspace, it is not possible to delete the block unless [`Edit`][Edit] permissions are assigned to the developer, or the browser is refreshed.

## See Also

### Related Concepts

None

### Related Tutorials

* [Left Panel][Left Panel tutorial]

[Edit]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.Edit" >}}
[Left Panel tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.LeftPanel.MainDoc" >}}
[View]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.View" >}}
