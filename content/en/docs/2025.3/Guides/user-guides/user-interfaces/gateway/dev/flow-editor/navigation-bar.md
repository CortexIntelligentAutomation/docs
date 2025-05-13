---
title: "Navigation Bar"
linkTitle: "Navigation Bar"
description: "TODO"
weight: 10
---

# {{% param title %}}

## Summary

The Navigation Bar is at the top of the page and provides information about the currently selected workspace, navigation between simultaneously opened flows, and access to online help.

## Anatomy

{{< figure src="/images/Flow Editor - Navigation Bar.png" title="Navigation Bar" >}}

The Navigation bar consists of 6 elements:

* [Recently Used Workspaces][]
* [Breadcrumb Trail][]
* [User Principle Name][]
* [Help][]
* [Navigation][]
* [Close Flow][]

### Breadcrumb Trail

The breadcrumb trail shows the hierarchy of all the open workspaces of the flow being viewed. At the left is the flow itself; an asterisk (*) after the flow name indicates that there are unsaved changes. Then follows a list of the open hierarchical workspace name, with the most deeply nested workspace at the right. The currently selected workspace is identified by its name being highlighted by a dark background.

{{% alert title="Note" %}}The breadcrumb trail only shows the names of the workspaces, as set on the workspace menu bar, not the workspace description as set in the workspace Description property.{{% /alert %}}

### User Principle Name

The User Principle Name identifies the current user logged in to Gateway.

## Actions

### Help

Clicking on the {{< image src="/images/Flow Editor - Help.png" >}} icon, will open the Product Portal, online documentation for {{% ctx %}}, in a new browser tab automatically selecting the section relevant to {{% ctx %}} version being used.

### Navigation

#### Recently Used Workspaces

TODO

#### Quick Navigation

Clicking on the {{< image src="/images/Flow Editor - Previous Flow.png" >}} (Previous Flow) or {{< image src="/images/Flow Editor - Next Flow.png" >}} (Next Flow) icons allows sequential navigation between open flows.

If the first opened flow is being viewed, then the Previous Flow icon will be greyed out and unavailable. Similarly, if the last opened flow is being viewed, then the Next Flow icon will be greyed out and unavailable. If only one flow is open then both icons will be greyed out and unavailable.

#### Sequential Navigation

Clicking on the {{< image src="/images/Flow Editor - Quick Navigation.png" >}} icon will replace the Right Panel with a ‘filmstrip’ depicting a pictorial representation all the open flows in a vertical, scrollable list.

To navigate to an alternative open flow, click on the flow image in the filmstrip; the open flow will then be viewable in Main Panel.

Clicking on the Quick Navigation icon when the filmstrip is visible will close the Quick Navigation feature. The Quick Navigation feature will also be closed if any object on the flow being viewed is selected, causing the object’s Properties to be displayed in the Right Panel.

### Close Flow

Clicking on the {{< image src="/images/Flow Editor - Close Flow.png" >}} icon will attempt to close the currently selected open flow. If there are unsaved changes to the flow, a pop-up dialog will appear, inviting you to save your changes before closing the flow.

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

None

### Related Tutorials

* [Navigation Bar][Navigation Bar tutorial]

[Breadcrumb Trail]: {{< ref "#breadcrumb-trail" >}}
[User Principle Name]: {{< ref "#user-principle-name" >}}
[Navigation]: {{< ref "#navigation" >}}
[Help]: {{< ref "#help" >}}
[Close Flow]: {{< ref "#close-flow" >}}

[Navigation Bar tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.NavigationBar.MainDoc" >}}
