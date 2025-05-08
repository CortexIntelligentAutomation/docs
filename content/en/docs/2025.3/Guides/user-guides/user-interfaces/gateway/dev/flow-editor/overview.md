---
title: "Overview"
linkTitle: "Overview"
description: "Summary and anatomy of the Flow Editor."
weight: 1
---

# {{% param title %}}

## Summary

The Flow Editor page allows you to develop, test and debug flows.

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

* The Main Toolbar.
* One or more Workspaces associated with the currently selected flow.

### Right Panel

The [Right Panel][] offers different tabs depending on the mode selected:

* In `View`, `Edit` or `Debug Edit` mode, the following tabs are available:

  * Properties (default) - displays the [Property Editor][] showing the properties of the currently selected object.
  * Settings - displays the [Settings Editor][] to set the input variables for the flow.

* In `Debug` mode, the following tabs are available:

  * Variables (default) - displays the [Execution Viewer][] showing the values of the variables during run-time.
  * Exceptions - displays the [Exceptions Viewer][] showing details of any run-time exceptions.
  * Settings - displays the [Settings Editor][] to set the input variables for the flow.

### Bottom Panel

The [Bottom Panel][] offers different tabs:

* Executions (default) - displays the [Executions Grid][] showing all current executions.
* Messages - displays the [Messages Grid][] showing all messages raised by the translator during flow execution.
* Variables - displays the [Variables Grid][] enabling the management of {{% ctx %}} variables.

## See Also

### Related Concepts

None

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
[Messages Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.MessagesGrid" >}}
[Navigation Bar]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.NavigationBar.MainDoc" >}}
[Property Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.PropertyEditor" >}}
[Right Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.MainDoc" >}}
[Settings Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.SettingsEditor" >}}
[Variables Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.VariablesGrid" >}}
