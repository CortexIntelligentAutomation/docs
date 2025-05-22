---
title: "Variables Grid"
linkTitle: "Variables Grid"
description: "Manage Variables"
weight: 30
---

# {{% param title %}}

## Summary

The Variable Grid enables [variables][What is a Variable?] to be created and modified.

## Anatomy

{{< figure src="/images/Flow Editor - Executions Grid.png" title="Executions Grid" >}}

Each variable and its properties are represented by a single row in the grid, with the properties represented by the different columns.

The properties of a variable may be edited by double-clicking on the appropriate cell in the Variables Grid. The properties of a variable are:

* `Description` – The Description property may optionally contain free-format text to aid understanding of the purpose of variable.
* `Name` – The Name of the variable must be unique within its scope and is case insensitive. The Name cannot contain space characters, but it can contain hyphens and underscores.

  The Name may be entered as free-format text, however, when it is saved, it will automatically be prepended by ($) characters to denote that this is a CORTEX variable. If the Name is entered prepended by a ($) characters, the system will not duplicate the prefix.
* `Type` – The Type is always set to Variable.
* `Set Default Value?` – This is used to initialise the variable with a value when the variable is created, i.e., when it comes into scope. It can be set to either true (initialise) or false (do not initialise and is used in connection with the Default Value property.
* `Default Value` – The Default Value property contains the value with which to initialise the variable when it is created, defined using an Expression Editor, and is used in connection with the Set Default Value? Property.
* `Is Input Variable?` – This property is used to allow the variable to accept a value input from an external REST Request, e.g., from a 3rd party system. It can be set to either true or false; the default value is false. For the variable to be used as an Input Variable, it must have flow scope, i.e. global scope.
* `Is Output Variable?` – This property allows this variable to pass back its value, when the flow execution terminates, to the calling system via the REST Response.  It can be set to either true or false; the default value is false. For the variable to be used as an Output Variable, it must have flow scope, i.e. global scope.
* `Scope` – This property defines the scope of a variable, i.e., the workspace, or workspaces, where the variable is valid. CORTEX Variables operate on the principal of inherited scope, where a child object can access variables of its parent object.

  The scope of a variable can be changed by double-clicking on the Scope field and selecting the workspace in which the variable will be created.
  
  The variables displayed in the Variable Grid may be filtered based on their scope. The Scope filter allows for the following options:

  * All – All variables in the flow, regardless of their scope, are displayed
  * Flow – Only variables defined at the flow level, i.e. global scope variables, are displayed
  * Defined (Selected Workspace) – Only variable defined in the selected workspace are displayed; inherited scope variables are not displayed.
  * Available (Selected Workspace) – Variable defined in the selected workspace and inherited scope variables are displayed. This is the default setting.

  Variables in different scopes may be named identically, but identically named variables cannot be defined in the same workspace. When referring to identically named variables within a block’s properties, the variable with the most local scope will be used, e.g., a variable defined in the current workspace will be used rather than one with an identical name in a parent workspace.

## Actions

### Create a Variable

Click the Add a new variable icon, shown as a plus sign (+) on the Variables Grid title bar. The variable will be created with the scope of the currently selected workspace.

### Rename a Variable

Double-click the variable’s Name field to enable its editing; rename the variable and click outside the field to complete the renaming process. The editor will automatically prefix the name with the ($) symbols if necessary to indicate to the system that this is a variable.

### Delete a Variable

Right-click anywhere on a variable and select Delete from the context menu to delete the variable.

### Assigning a Default Value to a Variable

Double-click the Set Default Value? field of the required variable to reveal a checkbox; click on the checkbox to enable the default value.
Then, double-click on the Default Value field to open an Expression Editor in which to specify the default value. The default value may be a simple, collection or complex data type, specified in C# syntax; C# snippets may be used.

### Defining an Input or Output Variable

An Input or Output variable MUST be defined at the flow level, i.e., it must have global scope, for it to accept an input value or return an output value. Double-click on the Is Input Variable? or Is Output Variable? fields, as appropriate, to reveal a checkbox. Click on the checkbox to tick it to make the selected variable an Input or Output variable.

A single variable can be both an Input variable and an Output variable.

### Modifying the Scope of a Variable

Double-click on the Scope field of variable to enable a dropdown menu. Select the desired scope from the dropdown.

### Sort Variables

The variables displayed may be ordered by any of the columns and they may also be filtered, based on the values contained in any column.

### Filter Variables

The displayed variables may also be filtered, based on the values contained in any property of the variables, by typing into the search box below each property column name.

### Show or Hide Filters

The filters themselves can be hidden by clicking the Hide Filters icon; note, although the filters may be hidden, their filtering actions still apply.

### Enable or Disable Filtering

The filtering of displayed variables can be disabled or re-enabled by clicking the Disable Filtering/Enable Filtering icon. 

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

* [Blocks][]
* [Exceptions][]
* [Executions][]
* [Flows][]
* [Workspaces][]

### Related Tutorials

* [Continue and Stop the Execution][Continue and Stop the Execution tutorial]
* [Step the Execution][Step the Execution tutorial]
* [Stop Tracking and Go To][Stop Tracking and Go To tutorial]
* [Start Tracking][Start Tracking tutorial]
* [Show Initial Flow First or Last][Show Initial Flow First or Last tutorial]

[Continue and Stop the Execution tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.ContinueStopExecution" >}}
[Show Initial Flow First or Last tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.ShowFirstLast" >}}
[Step the Execution tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.StepExecution" >}}
[Stop Tracking and Go To tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.StopTrackingGoTo" >}}
[Start Tracking tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.StartTracking" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[What is a Block?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Workspace?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[What is an Exception?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}
[What is an Execution?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[Workspaces]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
