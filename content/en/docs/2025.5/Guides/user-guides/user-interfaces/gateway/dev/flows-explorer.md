---
title: "Flows Explorer"
linkTitle: "Flows Explorer"
description: "View, navigate and extend the flow hierarchy in {{% ctx %}} Gateway."
weight: 1
---

# {{% param title %}}

## Summary

The Flows Explorer allows developers to view and navigate the hierarchical structure of [flows][What is a Flow?] and extend the hierarchy by creating new groups and flows.

## Anatomy

{{< figure src="/images/Flows Explorer.png" title="Flows Explorer" >}}

Flows are stored in a hierarchical structure to enable the logical grouping of related flows. The hierarchical structure is created using groups. A group is a container that can hold flows or child groups.

There can be multiple top-level or root groups. Top-level groups can only be created by users that have the `Admin` role. Lower-level groups and flows may be created by users that have the `Dev` role, and the appropriate `Edit` permissions set in [Studio Authorisation][Studio Authorisation Edit].

Groups that have `Edit` permissions set for users will display a {{< image src="/images/Flows Explorer - Create New.png" >}} icon in the group’s title bar, allowing those users to create flows and groups in this group; any flows or groups created in this way will inherit the same `View` & `Edit` permissions as the group from which they were created.

## Actions

### Create a Group

To create a new child group, navigate to the group in the hierarchy where the new group is to be created.

Click on the + (plus symbol) on the group’s title bar and select Group from the dropdown menu of items.

On the Create a new Group form, enter a Name for the new group. The name can be any literal text and can include the space character. The group name does not have to be unique in the system.

The Description is optional but can be any literal text and can include the space characters.

The Permission Groups, by default, are inherited from the parent object. The inherited View/Edit permissions may be altered by clicking on the ^ (open up-arrow) symbol, to the right of the Permission Groups title, to reveal the inherited permissions. Tick, or untick, the appropriate View/Edit permissions for the relevant Security Groups listed.

Click OK to finalise and create the new group.

See the [Create a Group][Create a Group tutorial] tutorial for a step-by-step guide.

### Create a Process Flow

To create a new Process flow, navigate to the group in the hierarchy where the new Process flow is to be created.

Click on the + (plus symbol) on the group’s title bar and select Process from the dropdown menu of items.

On the Create a new Process form, enter a Name for the new Process flow. The name can be any literal text and can include the hyphen character, but it cannot include the space nor underscore character. The Process flow name must be unique in the system.

The Description is optional but can be any literal text and can include the space characters.

Select the appropriate Template for the Process flow.

* A Blank Template will create an empty Process flow, which can then be developed as required.

  See the [Create a Process Flow from a blank template][Create Process Flow Blank tutorial] tutorial for a step-by-step guide.

* A Natural Language Template will provide a text box, into which the developer can describe the process to be automated in a natural language. Using the power of AI, a Process flow will be automatically created, which can then be extended manually if required.

  See the [Create a Process Flow using a Natural Language Template][Create Process Flow Natural tutorial] tutorial for a step-by-step guide.

* A BPMN XML Template will provide a text box, into which the XML definition of a process in BPMN may be inserted. The resultant Process flow can then be extended manually if required.

  See the [Create a Process Flow using a BPMN XML template][Create Process Flow BPMN tutorial] tutorial for a step-by-step guide.

The Permission Groups, by default, are inherited from the parent object. The inherited View/Edit permissions may be altered by clicking on the ^ (open up-arrow) symbol, to the right of the Permission Groups title, to reveal the inherited permissions. Tick, or untick, the appropriate View/Edit permissions for the relevant Security Groups listed.

Click OK to finalise and create the new Process flow.

### Create an Activity Flow

To create a new Activity flow, navigate to the group in the hierarchy where the new Activity flow is to be created.

Click on the + (plus symbol) on the group’s title bar and select Activity from the dropdown menu of items.

On the Create a new Activity form, enter a Name for the new Activity flow. The name can be any literal text and can include the hyphen character, but it cannot include the space nor underscore character. The Activity flow name must be unique in the system.

The Description is optional but can be any literal text and can include the space characters.

The Permission Groups, by default, are inherited from the parent object. The inherited View/Edit permissions may be altered by clicking on the ^ (open up-arrow) symbol, to the right of the Permission Groups title, to reveal the inherited permissions. Tick, or untick, the appropriate View/Edit permissions for the relevant Security Groups listed.

Click OK to finalise and create the new Activity flow.

See the [Create an Activity Flow][Create an Activity Flow tutorial] tutorial for a step-by-step guide.

### Browse

To browse the hierarchy of flow and groups, the Dev charm to enable the Flow Explorer in the Left Panel to display the top-level groups. Click on a Group, as indicated by a > symbol before its name, to navigate into that group and display its contents; the parent groups will be displayed as leaves to the right of the Flow Explorer.

To navigate back up the hierarchy, click on a group leaf to the right of the Flow Explorer to navigate directly to that group.

See the [Browsing the Flows Explorer][Browsing the Flows Explorer tutorial] tutorial for a step-by-step guide.

### Search

To search for flow contained in the current group, or group in the hierarchy below the current group, click in the Flow Explorer search field and enter part of the flow name being sought. The Flow Explorer will display all flows that match or partially match with the search string entered.

See the [Searching the Flows Explorer][Searching the Flows Explorer tutorial] tutorial for a step-by-step guide.

### Rename a Flow

Both Process and Activity flows may be renamed; it is not possible rename groups. To rename a flow, right-click on the flow name and select Rename from the context menu. Note: You must have Edit permissions on the flow to access the Rename feature.

Enter a new name for the flow. The name can be any literal text and can include the hyphen character, but it cannot include the space nor underscore character. The flow name must be unique in the system.

See the [Rename a Flow][Rename a Flow tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* Groups cannot be renamed
* When performing a search in Flow Explorer, only the matching flows are displayed without any indication of the flow’s location.
* A search in the Flow Explorer only searches the current group or child groups for matching flows. To search the entire hierarchy, the search must be undertaken at the top-level of the Flow Explorer.
* The data entered into the Description field when creating a new group or flow is not surfaced anywhere in the system.
* When creating a new item, only the existing permissions may be changed. It is not possible to add additional permissions.

## See Also

### Related Concepts

* [Flows][]

### Related Tutorials

* [Create a Group][Create a Group tutorial]
* [Create a Process Flow from a blank template][Create Process Flow Blank tutorial]
* [Create a Process Flow using a Natural Language Template][Create Process Flow Natural tutorial]
* [Create a Process Flow using a BPMN XML template][Create Process Flow BPMN tutorial]
* [Create an Activity Flow][Create an Activity Flow tutorial]
* [Browsing the Flows Explorer][Browsing the Flows Explorer tutorial]
* [Searching the Flows Explorer][Searching the Flows Explorer tutorial]
* [Rename a Flow][Rename a Flow tutorial]

[Browsing the Flows Explorer tutorial]: {{< url path="Cortex.Tutorials.Development.FlowsExplorer.Browse" >}}
[Create a Group tutorial]: {{< url path="Cortex.Tutorials.Development.FlowsExplorer.CreateGroup" >}}
[Create Process Flow Blank tutorial]: {{< url path="Cortex.Tutorials.Development.FlowsExplorer.CreateProcessBlank" >}}
[Create Process Flow Natural tutorial]: {{< url path="Cortex.Tutorials.Development.FlowsExplorer.CreateProcessNatural" >}}
[Create Process Flow BPMN tutorial]: {{< url path="Cortex.Tutorials.Development.FlowsExplorer.CreateProcessBpmnXml" >}}
[Create an Activity Flow tutorial]: {{< url path="Cortex.Tutorials.Development.FlowsExplorer.CreateActivity" >}}
[Rename a Flow tutorial]: {{< url path="Cortex.Tutorials.Development.FlowsExplorer.Rename" >}}
[Searching the Flows Explorer tutorial]: {{< url path="Cortex.Tutorials.Development.FlowsExplorer.Search" >}}

[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Studio Authorisation Edit]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.Edit" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
