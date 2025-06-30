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

There can be multiple top-level or root groups. Top-level groups can only be created by users that have the `Admin` role. Lower-level groups and flows may be created by users that have the `Dev` role, and the appropriate [`Edit`][Edit Permissions] permissions set in [Studio Authorisation][].

Groups that have `Edit` permissions set for users will display a {{< image src="/images/Flows Explorer - Create New.png" >}} icon in the group’s title bar, allowing those users to create flows and groups in this group; any flows or groups created in this way will inherit the same [`View`][View Permissions] & `Edit` permissions as the group from which they were created by default.

## Actions

### Create a Group

To create a new group:

* [Navigate][Browse] to the group in the hierarchy where the new group is to be created.
* Click the {{< image src="/images/Flows Explorer - Create New.png" >}} icon on the group’s title bar and select `Group` from the dropdown menu.
* On the *Create a new Group* dialog:

  * Enter a `Name` for the new group. The name can be any literal text and can include space characters. The name does not have to be unique in the system but must be unique at the level it is being created at.
  * The `Description` is optional but can be any literal text and can include space characters.
  * The `Permission Groups`, by default, are inherited from the parent group. The inherited `View`/`Edit` permissions may be altered by clicking on the {{< image src="/images/Flows Explorer - Expand Permissions.png" >}} icon, to the right of the label, to reveal the inherited permissions. Tick, or untick, the appropriate `View`/`Edit` permissions for the Security Groups listed.

* Click OK to create the new group.

See the [Create a Group][Create a Group tutorial] tutorial for a step-by-step guide.

### Create a Process Flow

To create a new Process flow:

* [Navigate][Browse] to the group in the hierarchy where the new Process flow is to be created.
* Click the {{< image src="/images/Flows Explorer - Create New.png" >}} icon on the group’s title bar and select `Process` from the dropdown menu.
* On the *Create a new Process* dialog:

  * Enter a `Name` for the new Process flow. The name can be any literal text and can include the hyphen character, but it cannot include the space or underscore character. The name must be unique in the system.
  * The `Description` is optional but can be any literal text and can include the space characters.
  * Select the appropriate `Template` for the Process flow:

    * `Blank` - This template will create an empty process flow, which can then be developed as required.

      See the [Create a Process Flow from a blank template][Create Process Flow Blank tutorial] tutorial for a step-by-step guide.
    * `BPMN XML` -This template will provide a text box, into which the XML definition of a Process in BPMN may be inserted. The Process flow can then be extended manually if required.

      See the [Create a Process Flow using a BPMN XML template][Create Process Flow BPMN tutorial] tutorial for a step-by-step guide.
    * `Natural Language` - This template will provide a text box, into which the developer can describe the Process to be automated in a natural language. Using the power of AI, a Process flow will be automatically created, which can then be extended manually if required.

      See the [Create a Process Flow using a Natural Language Template][Create Process Flow Natural tutorial] tutorial for a step-by-step guide.

  * The `Permission Groups`, by default, are inherited from the parent group. The inherited `View`/`Edit` permissions may be altered by clicking on the {{< image src="/images/Flows Explorer - Expand Permissions.png" >}} icon, to the right of the label, to reveal the inherited permissions. Tick, or untick, the appropriate `View`/`Edit` permissions for the Security Groups listed.

* Click OK to create the new Process flow.

### Create an Activity Flow

To create a new Activity flow:

* [Navigate][Browse] to the group in the hierarchy where the new Activity flow is to be created.
* Click the {{< image src="/images/Flows Explorer - Create New.png" >}} icon on the group’s title bar and select `Activity` from the dropdown menu.
* On the *Create a new Activity* dialog:

  * Enter a `Name` for the new Activity flow. The name can be any literal text and can include the hyphen character, but it cannot include the space or underscore character. The name must be unique in the system.
  * The `Description` is optional but can be any literal text and can include the space characters.
  * The `Permission Groups`, by default, are inherited from the parent group. The inherited `View`/`Edit` permissions may be altered by clicking on the {{< image src="/images/Flows Explorer - Expand Permissions.png" >}} icon, to the right of the label, to reveal the inherited permissions. Tick, or untick, the appropriate `View`/`Edit` permissions for the Security Groups listed.

* Click OK to create the new Activity flow.

See the [Create an Activity Flow][Create an Activity Flow tutorial] tutorial for a step-by-step guide.

### Browse

To browse the hierarchy of flows and groups:

* Click on the `Dev` charm on the left of Gateway to open the Flows Explorer and display the top-level groups.
* Click on a Group, indicated by the {{< image src="/images/Flows Explorer - Group Icon.png" >}} icon before its name, to navigate into that group and display its contents; the parent groups will be displayed as leaves to the right of the Flows Explorer.
* Click on a Process or Activity flow by clicking on the name to open the flow in the [Main Panel][] of the [Flow Editor][].

To navigate back up the hierarchy, click on a group leaf to the right of the Flows Explorer to navigate directly to that group.

See the [Browsing the Flows Explorer][Browsing the Flows Explorer tutorial] tutorial for a step-by-step guide.

### Search

To search for flow contained in the current group, or group in the hierarchy below the current group, click in the Flows Explorer search field and enter part of the flow name to be searched for. The Flows Explorer will display all flows that match or partially match with the string entered.

See the [Searching the Flows Explorer][Searching the Flows Explorer tutorial] tutorial for a step-by-step guide.

### Rename a Flow

Both Process and Activity flows may be renamed; it is not possible rename groups.

To rename a flow:

* Right-click on the flow name and select `Rename` from the context menu.

  {{% alert title="Note" %}}You must have `Edit` permissions on the flow to access the `Rename` menu option.{{% /alert %}}

* On the *Rename Flow* dialog:

  * Enter a new name for the flow. The name can be any literal text and can include the hyphen character, but it cannot include the space nor underscore character. The flow name must be unique in the system.
  * Click `OK` to change the name of the flow.

See the [Rename a Flow][Rename a Flow tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* Groups cannot be renamed
* When performing a search in Flows Explorer, only the matching flows are displayed without any indication of the flow’s location.
* A search in the Flows Explorer only searches the current group or child groups for matching flows. To search the entire hierarchy, the search must be undertaken at the top-level of the Flows Explorer.
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

[Browse]: {{< ref "#browse">}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}

[Edit Permissions]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.Edit" >}}
[Flow Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.MainDoc" >}}
[Main Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.MainPanel.MainDoc" >}}
[Studio Authorisation]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.MainDoc" >}}
[View Permissions]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.StudioAuthorisation.View" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
