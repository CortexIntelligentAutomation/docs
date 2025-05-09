---
title: "Main Panel"
linkTitle: "Main Panel"
description: "TODO"
weight: 30
---

# {{% param title %}}

## Summary

The Main Panel is used when developing, testing, and debugging flows. 

## Anatomy

{{< figure src="/images/Flow Editor - Main Panel.png" title="Main Panel" >}}

The Main Panel shows the currently selected flow’s opened workspaces and any associated functional blocks.

At the top of the Main Panel is the Main Toolbar, which displays a number of icons that perform actions on the selected flow, and the current operating Mode.

### Main Toolbar

To the left of the Main Toolbar, several icons that perform different actions on the currently selected flow. The icons displayed and their actions depend on the current operating Mode.

To the right of the Main Toolbar the current Mode is displayed, and can have the following values:

* View – the user only has [`View`][View] permissions on the flow and cannot edit it.
* Edit – the user has [`Edit`][Edit] permissions and can add or delete function blocks from the flow’s workspaces and change the block’s configuration.
* Debug - the flow is executing in Flow Editor.
* Debug Edit – edits may be undertaken to the paused executing flow without losing any runtime values assigned to the variables.

### Workspaces

Workspaces are objects that contain a canvas, onto which function blocks, drawn from the Palettes may be placed and connected to define the logic of a flow. Every flow has a top-level Workspace, from where the flow execution will start; additional Workspace blocks, drawn from the Palette, may be added at any point to direct the flow execution to execute the logic contained in that Workspace.

The canvas of the flow’s top-level Workspace is always present in the Main Panel, along with any of the flow’s additional workspaces that have been opened. The Workspace canvas will automatically increase in size as function blocks are added or moved on the Workspace.

If the Workspace becomes too large to be viewed in its entirety in the Main Panel, scroll bars will be automatically added to the Workspace.

To the bottom-left of each Workspace, a set of 4 overlayed icons provide the ability to zoom in or zoom out from the Workspace and shrink the size of the Workspace canvas to remove unnecessary white space.

#### Workspace Toolbar

At the top of each Workspace, a Workspace Toolbar displays the Workspace name and a Close icon to close that Workspace.

When a new Workspace is created, it is initially given the default name of Untitled Workspace. This should be changed for a meaningful name, which will be displayed in the breadcrumb trail in the Navigation Bar.

## Actions

### Undo

Available in Modes: Edit & Debug Edit

The {{< image src="/images/Flow Editor - Undo.png" >}} icon allows the developer to undo any changes made to the flow.

### Redo

Available in Modes: Edit & Debug Edit

The {{< image src="/images/Flow Editor - Redo.png" >}} icon allows the developer to redo any changes undone by the Undo command.

### Edit Flow

Available in Modes: Debug (if user has [`Edit`][Edit] permissions)

The {{< image src="/images/Flow Editor - Edit Flow.png" >}} icon causes an executing flow to first pause and then change the Mode to Debug Edit.

### Start an Execution

Available in Modes: View, Edit & Debug

The {{< image src="/images/Flow Editor - Start Execution.png" >}} icon saves any changes made to the flow to the developer’s local repository, changes the Mode to Debug, and starts a new execution of the flow.

### Execution Options

Available in Modes: View, Edit & Debug

The {{< image src="/images/Flow Editor - Execution Options.png" >}} dropdown enables the developer to change the settings that are used when executing the flow in the Flow Editor. One, multiple or no options can be selected:

* `Show execution on workspace` - Forces an icon to be displayed, identifying the position of the executing flow, on the workspace, enabling the flow developer to track the execution progress.
* `Break on exception` - causes the flow execution to be paused if a runtime exception is encountered.

### Continue Debugging

Available in Modes: Debug Edit

The {{< image src="/images/Flow Editor - Start Execution.png" >}} icon saves any changes made to the flow to the developer’s local repository and changes the Mode to Debug.

### Remove all Breakpoints

Available in Modes: View, Edit, Debug & Debug Edit

The {{< image src="/images/Flow Editor - Remove Breakpoints.png" >}} icon removes all the breakpoints set on the currently selected flow.

### Save

Available in Modes: Edit & Debug Edit

The {{< image src="/images/Flow Editor - Save.png" >}} icon performs a manual save of any changes made to the flow to the developer’s local repository.

### Commit

Available in Modes: Edit & Debug Edit

The {{< image src="/images/Flow Editor - Commit.png" >}} icon performs a save of any changes and then sends a copy of the flow, without any breakpoints, to the Master repository. This makes this version of the flow the Master Version, which can be accessed by others with necessary permissions. An asterisk (*) indicates that the locally saved version of the flow has not been committed.

### Get Master Version

Available in Modes: View, Edit & Debug Edit

The {{< image src="/images/Flow Editor - Get Master.png" >}} icon retrieves the current Master version of this flow from the Master repository and saves it to the developer's local repository, overwriting the version currently being edited. An asterisk (*) indicates that someone else has made changes to the Master version, which differs from your local version of the flow.

NOTE: If Get Master is used when in View Mode, the Master Version of the flow will overwrite the saved version in the user’s local repository.

### Compare Flow with Master Version

Available in Modes: View, Edit, Debug & Debug Edit

The {{< image src="/images/Flow Editor - Compare with Master.png" >}} icon saves the flow to the developer’s local repository and then opens a new browser window that displays the local version of the flow alongside the Master Version of the flow in the Master repository, highlighting any differences.

### Delete

Available in Modes: Edit & Debug Edit

The {{< image src="/images/Flow Editor - Delete Flow.png" >}} icon deletes the currently displayed flow.

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

None

### Related Tutorials

* [Main Panel][Main Panel tutorial]

[Edit]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.Edit" >}}
[Main Panel tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainPanel.MainDoc" >}}
[View]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.View" >}}
