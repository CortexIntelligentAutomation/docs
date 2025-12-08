---
title: "Main Panel"
linkTitle: "Main Panel"
description: "View, edit and debug flows."
weight: 30
---

# {{% param title %}}

## Summary

The Main Panel is used when viewing, editing and debugging [flows][What is a Flow?].

## Anatomy

{{< figure src="/images/Flow Editor - Main Panel.png" title="Main Panel" >}}

At the top of the Main Panel is the [Main Toolbar][], which displays a number of icons that perform actions on the selected flow, and the current editor mode. Below are the currently selected flow’s opened [workspaces][] and any associated [blocks][What is a Block?].

### Main Toolbar

To the left of the Main Toolbar, there are several icons that perform different actions on the currently selected flow. The icons displayed and their actions depend on the current editor mode.

To the right of the Main Toolbar the current editor mode is displayed, and can have the following values:

* View – the user only has [`View`][View] permissions on the flow and cannot edit it.
* Edit – the user has [`Edit`][Edit] permissions and can add or delete blocks from the flow’s workspaces and change the block’s [properties][What is a Block Property?].
* Debug - the flow is being debugged in the Flow Editor.
* Debug Edit – edits may be made to the flow that is being debugged and paused without losing any values that have been assigned to the [variables][What is a Variable?].

### Workspaces

A [workspace][What is a Workspace?] is an object that contains a canvas, onto which blocks, drawn from the Palettes may be placed and connected to define the logic of a flow. Every flow has a top-level workspace, from where the flow [execution][What is an Execution?] will start; additional workspace blocks may be added from the Palettes to direct the flow execution to execute the logic contained in that workspace.

The canvas of the flow’s top-level workspace is always present in the Main Panel, along with any of the flow’s additional workspaces that have been opened. The canvas will automatically increase in size as blocks are added or moved as necessary. If the workspace becomes too large to be viewed in its entirety in the Main Panel, scroll bars will be automatically added.

To the bottom left of each workspace are a set of 4 overlaid zoom controls:

* {{< image src="/images/Flow Editor - Shrink Wrap.png" >}} Shrink Wrap to reduce the size of the workspace canvas and remove unnecessary white space.
* {{< image src="/images/Flow Editor - Reset Zoom.png" >}} Reset Zoom to undo any zoom in or zoom out actions that has been performed.
* {{< image src="/images/Flow Editor - Zoom In.png" >}} Zoom In
* {{< image src="/images/Flow Editor - Zoom Out.png" >}} Zoom Out

#### Workspace Toolbar

At the top of each workspace, a workspace Toolbar displays the workspace name and a {{< image src="/images/Flow Editor - Close Flow.png" >}} icon to close that workspace.

When a new workspace is created, it is initially given the default name of `Untitled Workspace`. This should be changed to a meaningful name, which will be displayed in the [breadcrumb trail][] in the [Navigation Bar][].

#### Context Menus

Context menus exist for workspaces and blocks on workspaces.

##### Workspaces

The workspace context menu allows for the pasting of objects copied to the {{% ctx %}} clipboard and creation of notes on the workspace, dependent on the Editor mode selected.

##### Blocks on Workspaces

The block context menu allows for the copying, cutting, deletion, setting and removing of breakpoints and the setting of the next block to execute, dependent on the Editor mode selected.

## Actions

### Main Toolbar

#### Undo

Available in Editor Modes: `Edit`, `Debug Edit`

The {{< image src="/images/Flow Editor - Undo.png" >}} icon allows the developer to undo changes made to the flow. The undo action can also be achieved by pressing `Ctrl+Z` on the keyboard.

See the [Undo and Redo Changes][Undo and Redo Changes tutorial] tutorial for a step-by-step guide.

#### Redo

Available in Editor Modes: `Edit`, `Debug Edit`

The {{< image src="/images/Flow Editor - Redo.png" >}} icon allows the developer to redo changes undone by the Undo command. The redo action can also be achieved by pressing `Ctrl+Y` on the keyboard.

See the [Undo and Redo Changes][Undo and Redo Changes tutorial] tutorial for a step-by-step guide.

#### Start an Execution

Available in Editor Modes: `View`, `Edit`, `Debug`

The {{< image src="/images/Flow Editor - Start Execution.png" >}} icon saves any changes made to the flow to the developer’s local repository, changes the editor mode to `Debug`, and starts [debugging][Executions in Development] the flow.

See the [Start an Execution][Start an Execution tutorial] tutorial for a step-by-step guide.

#### Execution Options

Available in Editor Modes: `View`, `Edit`, `Debug`

The {{< image src="/images/Flow Editor - Execution Options.png" >}} dropdown enables the developer to change the options that are used when debugging the flow in the Flow Editor. One, multiple or no options can be selected:

* `Show execution on workspace` - Displays an icon on the workspace, identifying the position of the flow being debugged, enabling the flow developer to track the execution progress.
* `Break on exception` - causes the flow execution to be paused if an [exception][What is an Exception?] occurs.

See the [Start an Execution][Start an Execution tutorial] tutorial for a step-by-step guide.

#### Edit Flow

Available in Editor Modes: `Debug` (if user has [`Edit`][Edit] permissions)

The {{< image src="/images/Flow Editor - Edit Flow.png" >}} icon causes a flow that is being debugged to pause and then changes the editor mode to `Debug Edit`.

See the [Edit Flow and Continue Debugging][Edit Flow and Continue Debugging tutorial] tutorial for a step-by-step guide.

#### Continue Debugging

Available in Editor Modes: `Debug Edit`

The {{< image src="/images/Flow Editor - Continue Debugging.png" >}} icon saves any changes made to the flow to the developer’s local repository and changes the editor mode to `Debug`.

See the [Edit Flow and Continue Debugging][Edit Flow and Continue Debugging tutorial] tutorial for a step-by-step guide.

#### Remove all Breakpoints

Available in Editor Modes: `View`, `Edit`, `Debug`, `Debug Edit`

The {{< image src="/images/Flow Editor - Remove Breakpoints.png" >}} icon removes all the breakpoints set on the currently selected flow.

See the [Remove All Breakpoints][Remove All Breakpoints tutorial] tutorial for a step-by-step guide.

#### Save

Available in Editor Modes: `Edit`, `Debug Edit`

The {{< image src="/images/Flow Editor - Save.png" >}} icon saves any changes made to the flow to the developer’s local repository.

See the [Save and Commit Flow][Save and Commit Flow tutorial] tutorial for a step-by-step guide.

#### Commit Flow

Available in Editor Modes: `Edit`, `Debug Edit`

The {{< image src="/images/Flow Editor - Commit.png" >}} icon saves any changes to the developer's local repository and commits a copy of the flow, without any breakpoints, to the Master Repository. This makes this version of the flow the Master Version, which can be accessed by others with relevant permissions. An asterisk (*) next to the icon indicates that the locally saved version of the flow has not been committed.

See the [Save and Commit Flow][Save and Commit Flow tutorial] tutorial for a step-by-step guide.

#### Get the Master Version of this Flow

Available in Editor Modes: `View`, `Edit`, `Debug Edit`

The {{< image src="/images/Flow Editor - Get Master.png" >}} icon retrieves the Master Version of the flow from the Master Repository and saves it to the developer's local repository, overwriting the version currently being viewed or edited. An asterisk (*) next to the icon indicates that someone else has made changes to the Master version, which differs from the local version of the flow.

See the [Get Master Version of Flow][Get Master Version of Flow tutorial] tutorial for a step-by-step guide.

#### Compare Flow with Master Version

Available in Editor Modes: `View`, `Edit`, `Debug`, `Debug Edit`

The {{< image src="/images/Flow Editor - Compare with Master.png" >}} icon saves the flow to the developer’s local repository and opens a new browser window that displays the local version of the flow alongside the Master Version of the flow in the Master Repository, highlighting any differences.

See the [Compare Flow with Master Version][Compare Flow with Master Version tutorial] tutorial for a step-by-step guide.

#### Delete

Available in Editor Modes: `Edit`, `Debug Edit`

The {{< image src="/images/Flow Editor - Delete Flow.png" >}} icon deletes the currently displayed flow.

See the [Delete Flow][Delete Flow tutorial] tutorial for a step-by-step guide.

### Workspace Context Menu

#### Add Note

Available in Editor Modes: `Edit`, `Debug Edit`

Selecting this option will create a Note object on the workspace at the cursor’s location. This allows for the addition of text on the workspace to enhance the understanding of the flow.

See the [Add Notes to Workspaces][Add Notes to Workspaces tutorial] tutorial for a step-by-step guide.

#### Paste

Available in Editor Modes: `Edit`, `Debug Edit` (if an object has been copied or cut to the {{% ctx %}} clipboard)

Selecting this option, or pressing `Ctrl+V` on the keyboard, will paste a copy of the clipboard on to the workspace at the cursor’s location.

See the [Cut, Copy, Paste and Delete Objects][Cut, Copy, Paste and Delete Objects tutorial] tutorial for a step-by-step guide.

### Block Context Menu

#### Copy

Available in Editor Modes: `Edit`, `Debug Edit`

Selecting this option, or pressing `Ctrl+C` on the keyboard, will copy the selected blocks and their configurations, plus any connections between the selected blocks, to the {{% ctx %}} clipboard. This allows a copy of the selected blocks and connections to be pasted on any workspace of any flow open in the Flow Editor.

See the [Cut, Copy, Paste and Delete Objects][Cut, Copy, Paste and Delete Objects tutorial] tutorial for a step-by-step guide.

#### Cut

Available in Editor Modes: `Edit`, `Debug Edit`

Selecting this option, or pressing `Ctrl+X` on the keyboard, will copy the selected blocks and their configurations, plus any connections between the selected blocks, to the {{% ctx %}} clipboard and remove them from the workspace. This allows the selected blocks and connections to be moved to any workspace of any flow open in the Flow Editor.

See the [Cut, Copy, Paste and Delete Objects][Cut, Copy, Paste and Delete Objects tutorial] tutorial for a step-by-step guide.

#### Delete

Available in Editor Modes: `Edit`, `Debug Edit`

Selecting this option, or pressing `Delete` on the keyboard, will delete the selected blocks and any connections between the selected blocks.

See the [Cut, Copy, Paste and Delete Objects][Cut, Copy, Paste and Delete Objects tutorial] tutorial for a step-by-step guide.

#### Add Breakpoint

Available in Editor Modes: `Edit`, `Debug`, `Debug Edit` (if the block does not already have a breakpoint set)

Selecting this option will set a breakpoint above the block.

Note: If multiple blocks have been selected, the `Add Breakpoint` action will only apply to the current block.

See the [Add and Remove Breakpoints][Add and Remove Breakpoints tutorial] tutorial for a step-by-step guide.

#### Remove Breakpoint

Available in Editor Modes: `Edit`, `Debug`, `Debug Edit` (if the block has a breakpoint set)

Selecting this option will cause a breakpoint to be removed.

Note: If multiple blocks have been selected, the `Remove Breakpoint` action will only apply to the current block.

See the [Add and Remove Breakpoints][Add and Remove Breakpoints tutorial] tutorial for a step-by-step guide.

#### Set Next Block to Execute

Available in Editor Modes: `Debug`, `Debug Edit` (if the execution is paused)

Selecting this option will cause the execution token, or the selected execution if there are multiple simultaneous executions, to be moved above the current block.

Note: If multiple blocks have been selected, the `Set Next Block to Execute` action will only apply to the current block.

See the [Set Next Block to Execute][Set Next Block to Execute tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* It is not possible to set breakpoints on multiple blocks simultaneously.

## See Also

### Related Concepts

* [Blocks][]
* [Exceptions][]
* [Executions][]
* [Flows][]
* [Variables][]
* [Workspaces][Workspace Fundamentals]

### Related Tutorials

* [Main Toolbar][Main Toolbar Actions tutorials]
  * [Undo and Redo Changes][Undo and Redo Changes tutorial]
  * [Start an Execution][Start an Execution tutorial]
  * [Edit Flow and Continue Debugging][Edit Flow and Continue Debugging tutorial]
  * [Remove All Breakpoints][Remove All Breakpoints tutorial]
  * [Save and Commit Flow][Save and Commit Flow tutorial]
  * [Get Master Version of Flow][Get Master Version of Flow tutorial]
  * [Compare Flow with Master Version][Compare Flow with Master Version tutorial]
  * [Delete Flow][Delete Flow tutorial]
* [Context Menus][Context Menu tutorials]
  * [Cut, Copy, Paste and Delete Objects][Cut, Copy, Paste and Delete Objects tutorial]
  * [Add and Remove Breakpoints][Add and Remove Breakpoints tutorial]
  * [Set Next Block to Execute][Set Next Block to Execute tutorial]
  * [Add Notes to Workspaces][Add Notes to Workspaces tutorial]

[Main Toolbar]: {{< ref "#main-toolbar" >}}
[workspaces]: {{< ref "#workspaces" >}}

[Add Notes to Workspaces tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.AddNotes" >}}
[Add and Remove Breakpoints tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.AddRemoveBreakpoints" >}}
[Compare Flow with Master Version tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.CompareMaster" >}}
[Context Menu tutorials]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.ContextMenus" >}}
[Cut, Copy, Paste and Delete Objects tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.CutCopyPasteDelete" >}}
[Delete Flow tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.DeleteFlow" >}}
[Edit Flow and Continue Debugging tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.EditFlow" >}}
[Get Master Version of Flow tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.GetMaster" >}}
[Main Toolbar Actions tutorials]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.MainToolbar" >}}
[Remove All Breakpoints tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.RemoveBreakpoints" >}}
[Save and Commit Flow tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.SaveCommit" >}}
[Set Next Block to Execute tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.SetNextBlock" >}}
[Start an Execution tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.StartExecution" >}}
[Undo and Redo Changes tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.UndoRedo" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[breadcrumb trail]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.NavigationBar.BreadcrumbTrail" >}}
[Edit]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.Edit" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[Executions in Development]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInDevelopment.MainDoc" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Navigation Bar]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.NavigationBar.MainDoc" >}}
[View]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.View" >}}
[What is a Block?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[What is a Block Property?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[What is a Workspace?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[What is an Exception?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}
[What is an Execution?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[Workspace Fundamentals]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
