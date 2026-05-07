---
title: "Left Panel"
linkTitle: "Left Panel"
description: "Browse, search and use available blocks."
weight: 20
---

# {{% param title %}}

## Summary

The Left Panel shows the Palettes containing [blocks][What is a Block?] that can be used to construct a [flow][What is a Flow?] and is automatically opened when working in Edit or Debug Edit modes.

## Anatomy

{{< figure src="/images/Flow Editor - Left Panel.png" title="Left Panel" >}}

The Palettes group blocks with similar themes, and many of the blocks in a palette look similar but perform slightly different functions; the actual function that a block performs is shown in text, next to the block icon.

## Actions

### Open/Close the Panel

The Left Panel can be manually opened or closed at any time using the open/close handles. It can also be resized by dragging the handle left or right.

### Collapse/Expand Palette Groups

To collapse or expand all palette groups, click the relevant {{< image src="/images/Flow Editor - Collapse All.png" >}} or {{< image src="/images/Flow Editor - Expand All.png" >}} icon at the top of the Left Panel. Each palette group may be collapsed or expanded independently by clicking on the {{< image src="/images/Flow Editor - Collapse Palette.png" >}} or {{< image src="/images/Flow Editor - Expand Palette.png" >}} icon to the right of the group name.

### View Blocks

To view the blocks contained in the Palettes, click on the {{< image src="/images/Flow Editor - Expand Palette.png" >}} icon to the right of the palette group to expand the group and show the blocks it contains, or alternatively, click the {{< image src="/images/Flow Editor - Expand All.png" >}} icon at the top of the Left Panel to expand all the palette groups.

See the [View Blocks in the Palette][View Blocks in the Palette tutorial] tutorial for a step-by-step guide.

### Search for a Block

To search for a block by name, start typing into the search box. All the blocks that contain the search characters will be displayed; the more characters entered, the more refined the search will be, displaying fewer block options. The search is a fuzzy search, which means that even misspelt block names should identify the intended matching blocks.

See the [Searching the Palette for a Block][Searching the Palette for a Block tutorial] tutorial for a step-by-step guide.

### Place a Block on a Workspace

To place a block from the palette onto a [workspace][What is a Workspace?], left-click on the block in the palette and drag it onto the Workspace.

See the [Placing a Block from the Palette onto a Workspace][Placing a Block from the Palette onto a Workspace tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* If the developer has [`View`][View] permissions, it is still possible to drag a block from the Palettes onto a Workspace. Once placed on the Workspace, it is not possible to delete the block unless [`Edit`][Edit] permissions are assigned to the developer, or the browser is refreshed.

## See Also

### Related Concepts

* [Blocks][]
* [Flows][]
* [Workspaces][]

### Related Tutorials

* [View Blocks in the Palette][View Blocks in the Palette tutorial]
* [Searching the Palette for a Block][Searching the Palette for a Block tutorial]
* [Placing a Block from the Palette onto a Workspace][Placing a Block from the Palette onto a Workspace tutorial]

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Edit]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.Edit" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Placing a Block from the Palette onto a Workspace tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.LeftPanel.PlaceBlocks" >}}
[Searching the Palette for a Block tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.LeftPanel.SearchBlocks" >}}
[View Blocks in the Palette tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.LeftPanel.ViewBlocks" >}}
[View]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.View" >}}
[What is a Block?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Workspace?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[Workspaces]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.MainPanel.Workspaces" >}}
