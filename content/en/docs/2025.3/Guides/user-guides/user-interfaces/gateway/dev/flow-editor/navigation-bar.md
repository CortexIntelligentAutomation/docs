---
title: "Navigation Bar"
linkTitle: "Navigation Bar"
description: "Navigate between open flows in the Flow Editor."
weight: 10
---

# {{% param title %}}

## Summary

The Navigation Bar is at the top of the page and provides information about the currently selected [workspace][What is a Workspace?], navigation between simultaneously opened [flows][What is a Flow?], and access to online help.

## Anatomy

{{< figure src="/images/Flow Editor - Navigation Bar.png" title="Navigation Bar" >}}

The Navigation bar consists of 6 elements:

* [Recently Used Workspaces][]
* [Breadcrumb Trail][]
* [User Principle Name][]
* [Help][]
* [Navigation][]
* [Close Flow][]

### Recently Used Workspaces

Recently Used Workspaces displays the user's last 10 opened workspaces in a drop down menu to allow quick navigation to any of these workspaces.

### Breadcrumb Trail

The Breadcrumb Trail shows the hierarchy of all the open workspaces of the flow being viewed. At the left is the flow itself; an asterisk (*) after the flow name indicates that there are unsaved changes. Then follows a list of the open hierarchical workspace names, with the most deeply nested workspace at the right. The currently selected workspace is identified by its name being highlighted by a darker background.

{{% alert title="Note" %}}The breadcrumb trail only shows the names of the workspaces, as set on the workspace menu bar, not the workspace description as set in the workspace Description property.{{% /alert %}}

### User Principle Name

The User Principle Name identifies the current user logged in to Gateway.

### Help

The help icon opens the Product Portal, online documentation for {{% ctx %}}.

### Navigation

The Navigation sections consists of 2 navigation methods:

* [Quick Navigation][].
* [Sequential Navigation][].

#### Quick Navigation

Quick Navigation allows navigation between all open flows from a vertical, scrollable list.

#### Sequential Navigation

Sequential Navigation allows navigation to the previous or next open flow.

### Close Flow

Closes the Flow Editor for the current flow.

## Actions

### Using Recently Used Workspaces

Clicking on the {{< image src="/images/Flow Editor - Recently Used Workspaces.png" >}} icon will display a list of the last 10 opened workspaces for the current user.  Clicking on one of the list items will display that workspace in the [Main Panel][] opening it if it is not already open.

### Using the Breadcrumb Trail

Clicking on any part of the Breadcrumb Trail will change the focus of the [Main Panel][] to the workspace selected.

After each workspace name there is a drop down menu that displays all workspaces available for the workspace that the dropdown was initiated for.

### Open Help

Clicking on the {{< image src="/images/Flow Editor - Help.png" >}} icon, will open the Product Portal in a new browser tab automatically selecting the section relevant to the {{% ctx %}} version being used.

See the [Accessing Help][Accessing Help tutorial] tutorial for a step-by-step guide.

### Quick Navigation between Open Flows

Clicking on the {{< image src="/images/Flow Editor - Quick Navigation.png" >}} icon will replace the [Right Panel][] with a ‘filmstrip’ depicting a pictorial representation all the open flows in a vertical, scrollable list.

To navigate to an alternative open flow, click on the flow image in the filmstrip; the open flow will then be visible in the [Main Panel][].

Clicking on the Quick Navigation icon when the filmstrip is visible will close the Quick Navigation feature. The Quick Navigation feature will also be closed if a block on the flow being viewed is selected, causing the block's [properties][What is a Block Property?] to be displayed in the [Right Panel][].

See the [Quick Navigation Between Open Flows][Quick Navigation Between Open Flows tutorial] tutorial for a step-by-step guide.

### Sequential Navigation between Open Flows

Clicking on the {{< image src="/images/Flow Editor - Previous Flow.png" >}} (Previous Flow) or {{< image src="/images/Flow Editor - Next Flow.png" >}} (Next Flow) icons allows sequential navigation between open flows.

If the first opened flow is being viewed, then the Previous Flow icon will be greyed out and unavailable. Similarly, if the last opened flow is being viewed, then the Next Flow icon will be greyed out and unavailable. If only one flow is open then both icons will be greyed out and unavailable.

See the [Sequential Navigation Between Open Flows][Sequential Navigation Between Open Flows tutorial] tutorial for a step-by-step guide.

### Close Flow

Clicking on the {{< image src="/images/Flow Editor - Close Flow.png" >}} icon will attempt to close the currently selected open flow. If there are unsaved changes to the flow, a pop-up dialog will appear, inviting you to save your changes before closing the flow.

See the [Close Flow][Close Flow tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

* [Flows][]
* [Workspaces][Workspaces]

### Related Tutorials

* [Accessing Help][Accessing Help tutorial]
* [Close Flow][Close Flow tutorial]
* [Quick Navigation Between Open Flows][Quick Navigation Between Open Flows tutorial]
* [Sequential Navigation Between Open Flows][Sequential Navigation Between Open Flows tutorial]

[Recently Used Workspaces]: {{< ref "#recently-used-workspaces" >}}
[Breadcrumb Trail]: {{< ref "#breadcrumb-trail" >}}
[Close Flow]: {{< ref "#close-flow" >}}
[Help]: {{< ref "#help" >}}
[Navigation]: {{< ref "#navigation" >}}
[Quick Navigation]: {{< ref "#quick-navigation" >}}
[Sequential Navigation]: {{< ref "#sequential-navigation" >}}
[User Principle Name]: {{< ref "#user-principle-name" >}}

[Accessing Help tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.NavigationBar.AccessHelp" >}}
[Quick Navigation Between Open Flows tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.NavigationBar.QuickNavigation" >}}
[Sequential Navigation Between Open Flows tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.NavigationBar.SequentialNavigation" >}}
[Close Flow tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.NavigationBar.CloseFlow" >}}

[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Main Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.MainPanel.MainDoc" >}}
[Navigation Bar tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.NavigationBar.MainDoc" >}}
[Right Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.MainDoc" >}}
[What is a Block Property?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Workspace?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[Workspaces]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
