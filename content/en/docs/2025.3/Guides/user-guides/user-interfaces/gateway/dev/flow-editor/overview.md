---
title: "Overview"
linkTitle: "Overview"
description: "Summary and anatomy of the Flow Editor."
weight: 1
---

# {{% param title %}}

## Summary

The Flow Editor page allows you to view, edit and debug [flows][What is a Flow?].

## Anatomy

{{< figure src="/images/Flow Editor.png" title="Flow Editor" >}}

The Flow Editor page shows the [Navigation Bar][NavBar] at the top and the [Main Panel][Main] towards the centre of the page; to the left, right and bottom of the [Main Panel][Main], additional panels are automatically displayed, dependent on the activity currently being undertaken or the panel tab selected.

Each of the [Left][], [Right][] and [Bottom][] panels may be manually opened or closed, expanded or shrunk, independently as required.

### Navigation Bar

The [Navigation Bar][] is always visible at the top of the page and provides information about the currently selected [workspace][What is a Workspace?], navigation between simultaneously opened flows, and access to online help.

### Left Panel

The [Left Panel][] shows the Palettes of available [blocks][What is a Block?], which are used during flow development. It is automatically opened during Edit mode.

### Main Panel

The [Main Panel][] is always visible and consists of:

* The [Main Toolbar][].
* One or more [Workspaces][] associated with the currently selected flow.

### Right Panel

The [Right Panel][] consists of 2 or 3 tabs depending on the mode selected:

* In `View`, `Edit` or `Debug Edit` mode, the following tabs are available:

  * Properties (default) - displays the [Property Editor][] showing the [properties][What is a Block Property?] of the currently selected block.
  * Settings - displays the [Settings Editor][] to set the values of the [input variables][Flow Input Variable] used when debugging the flow.

* In `Debug` mode, the following tabs are available:

  * Variables (default) - displays the [Variables Viewer][] showing the values of the [variables][What is a Variable?] when debugging the flow.
  * Exceptions - displays the [Exceptions Viewer][] showing details of any [exceptions][What is an Exception?] when debugging the flow.
  * Settings - displays the [Settings Editor][] to set the values of the [input variables][Flow Input Variable] used when debugging the flow.

### Bottom Panel

The [Bottom Panel][] consists of 3 tabs:

* Executions (default) - displays the [Executions Grid][] listing current [executions][What is an Execution?] being debugged by the user.
* Messages - displays the [Messages Grid][] listing [issues][What is a Message?] preventing the flow from being debugged.
* Variables - displays the [Variables Grid][] enabling the management of [variables][What is a Variable?].

## See Also

### Related Concepts

* [Blocks][]
* [Exceptions][]
* [Executions][]
* [Flows][]
* [Messages][]
* [Variables][]
* [Workspaces][Workspace Fundamentals]

### Related Tutorials

* [Flow Editor][Flow Editor tutorial]

[Flow Editor tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.MainDoc" >}}

[Left]: {{< ref "#left-panel" >}}
[Main]: {{< ref "#main-panel" >}}
[Navbar]: {{< ref "#navigation-bar" >}}
[Right]: {{< ref "#right-panel" >}}
[Bottom]: {{< ref "#bottom-panel" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Bottom Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Exceptions Viewer]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExceptionsViewer" >}}
[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[Executions Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.ExecutionsGrid" >}}
[Flow Input Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Left Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.LeftPanel.MainDoc" >}}
[Main Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.MainPanel.MainDoc" >}}
[Main Toolbar]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.MainPanel.MainToolbar" >}}
[Messages]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Messages.MainDoc" >}}
[Messages Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.MessagesGrid" >}}
[Navigation Bar]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.NavigationBar.MainDoc" >}}
[Property Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.PropertyEditor" >}}
[Right Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.MainDoc" >}}
[Settings Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.SettingsEditor" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Variables Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.VariablesGrid" >}}
[Variables Viewer]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.VariablesViewer" >}}
[What is a Block?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[What is a Block Property?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Message?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Messages.WhatIsAMessage.MainDoc" >}}
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[What is a Workspace?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[What is an Exception?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}
[What is an Execution?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[Workspaces]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.MainPanel.Workspaces" >}}
[Workspace Fundamentals]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
