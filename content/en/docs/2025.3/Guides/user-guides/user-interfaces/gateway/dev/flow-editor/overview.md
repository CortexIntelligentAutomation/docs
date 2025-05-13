---
title: "Overview"
linkTitle: "Overview"
description: "Summary and anatomy of the Flow Editor."
weight: 1
---

# {{% param title %}}

## Summary

The Flow Editor page allows you to view, edit and debug flows.

## Anatomy

{{< figure src="/images/Flow Editor.png" title="Flow Editor" >}}

The page shows the [Navigation Bar][NavBar] at the top and the [Main Panel][Main] towards the centre of the page; to the left, right and bottom of the [Main Panel][Main], additional panels are automatically displayed, dependent on the activity currently being undertaken or the panel tab selected.

Each of the [Left][], [Right][] and [Bottom][] panels may be manually opened or closed, expanded or shrunk, independently as required.

### Navigation Bar

The [Navigation Bar][] is always visible at the top of the page and provides information about the currently selected workspace, navigation between simultaneously opened flows, and access to online help.

### Left Panel

The [Left Panel][] shows the Palettes of available blocks, which are used during flow development. It is automatically opened during Edit mode.

### Main Panel

The [Main Panel][] is always visible and consists of:

* The [Main Toolbar][].
* One or more [Workspaces][] associated with the currently selected flow.

### Right Panel

The [Right Panel][] consists of 2 or 3 tabs depending on the mode selected:

* In `View`, `Edit` or `Debug Edit` mode, the following tabs are available:

  * Properties (default) - displays the [Property Editor][] showing the properties of the currently selected block.
  * Settings - displays the [Settings Editor][] to set the values of the [input variables][] used when debugging the flow.

* In `Debug` mode, the following tabs are available:

  * Variables (default) - displays the [Execution Viewer][] showing the values of the variables when debugging the flow.
  * Exceptions - displays the [Exceptions Viewer][] showing details of any exceptions when debugging the flow.
  * Settings - displays the [Settings Editor][] to set the values of the [input variables][] used when debugging the flow.

### Bottom Panel

The [Bottom Panel][] consists of 3 tabs:

* Executions (default) - displays the [Executions Grid][] listing current executions being debugged by the user.
* Messages - displays the [Messages Grid][] listing issues preventing the flow from being debugged.
* Variables - displays the [Variables Grid][] enabling the management of variables.

## See Also

### Related Concepts

* [Blocks][]
* [Exceptions][]
* [Executions][]
* [Flows][]
* [Variables][]
* [Workspaces][TODO]

### Related Tutorials

* [Flow Editor][Flow Editor tutorial]

[Flow Editor tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainDoc" >}}

[Left]: {{< ref "#left-panel" >}}
[Main]: {{< ref "#main-panel" >}}
[Navbar]: {{< ref "#navigation-bar" >}}
[Right]: {{< ref "#right-panel" >}}
[Bottom]: {{< ref "#bottom-panel" >}}

[Bottom Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.MainDoc" >}}
[Exceptions Viewer]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExceptionsViewer" >}}
[Execution Viewer]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExecutionViewer" >}}
[Executions Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.ExecutionsGrid" >}}
[Left Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.LeftPanel.MainDoc" >}}
[Main Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.MainPanel.MainDoc" >}}
[Main Toolbar]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.MainPanel.MainToolbar" >}}
[Messages Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.MessagesGrid" >}}
[Navigation Bar]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.NavigationBar.MainDoc" >}}
[Property Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.PropertyEditor" >}}
[Right Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.MainDoc" >}}
[Settings Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.SettingsEditor" >}}
[Variables Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.VariablesGrid" >}}
[Workspaces]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.MainPanel.Workspaces" >}}
