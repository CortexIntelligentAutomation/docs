---
title: "Variables Grid"
linkTitle: "Variables Grid"
description: "Create and manage variables."
weight: 30
---

# {{% param title %}}

## Summary

The Variable Grid enables [variables][What is a Variable?] to be created and modified.

## Anatomy

{{< figure src="/images/Flow Editor - Variables Grid.png" title="Variables Grid" >}}

The Variables Grid may be manually opened, or closed any time by clicking the Open/Close handle or resized by dragging the handle up or down.

Each variable is represented by a single row in the grid and their properties are represented by the different columns. The properties of a variable are:

* `Description` – This is an optional free-format text property to aid understanding of the purpose of variable.
* `Name` – This must be unique within its [scope][Variable Scopes] and is case insensitive. It cannot contain space characters, but it can contain hyphens and underscores.
* `Type` – This is always set to *Variable*.
* `Set Default Value?` – This is used to initialise the variable with a value when the variable is created, i.e., when it comes into scope. It can be set to either true (initialise) and is used in connection `Default Value` or false (do not initialise).
* `Default Value` – The value to initialise the variable with when it is created, defined using an [Expression Editor][], and is used in connection with `Set Default Value?`.
* `Is Input Variable?` – This is used to allow the variable to accept a value input from an external REST Request, e.g., from a 3rd party system. It can be set to either true or false; the default value is false. For the variable to be used as an [Input Variable][Flow Input Variable], it must have its `Scope` defined as Flow Level, i.e. global scope.
* `Is Output Variable?` – This allows the variable to pass back its value, when the [flow][What is a Flow?] execution terminates, to the calling system via the REST Response.  It can be set to either true or false; the default value is false. For the variable to be used as an Output Variable, it must have its `Scope` defined as Flow Level, i.e. global scope.
* `Scope` – This property defines the scope of a variable, i.e., the workspace, or workspaces, where the variable is valid. Variables operate on the principal of inherited scope, where a child object can access variables of its parent object.

Variables in different scopes may be named identically, but identically named variables cannot be defined in the same [workspace][What is a Workspace?]. When referring to identically named variables within a block’s [properties][What is a Block Property?], the variable with the most local scope will be used, e.g., a variable defined in the current workspace will be used rather than one with an identical name in a parent workspace.

## Actions

### Create a Variable

Clicking the {{< image src="/images/Flow Editor - Add Variables.png" >}} icon will create a new variable. The variable will be created with the scope of the currently selected workspace.

See the [Create, Rename and Delete a Variable][Create, Rename and Delete a Variable tutorial] tutorial for a step-by-step guide.

### Rename a Variable

Double-click the variable’s Name field to enable its editing; rename the variable and click outside the field to complete the renaming process. It is entered as free-format text, however, when it is saved, it will automatically be prepended by `($)` to denote that this is a variable. If the `Name` is entered prepended by a `($)`, the system will not duplicate the prefix.

See the [Create, Rename and Delete a Variable][Create, Rename and Delete a Variable tutorial] tutorial for a step-by-step guide.

### Delete a Variable

Right-click anywhere on a variable and select Delete from the context menu to delete the variable.

See the [Create, Rename and Delete a Variable][Create, Rename and Delete a Variable tutorial] tutorial for a step-by-step guide.

### Assigning a Default Value to a Variable

Double-click the `Set Default Value?` field of the required variable to reveal a checkbox; click on the checkbox to enable the default value.
Then, double-click on the Default Value field to open an Expression Editor in which to specify the default value. The default value may be a simple, collection or complex data type, specified in C# syntax; C# snippets may be used.

See the [Assign a Default Value to a Variable][Assign a Default Value to a Variable tutorial] tutorial for a step-by-step guide.

### Defining an Input or Output Variable

An Input or Output variable MUST be defined at the flow level, i.e., it must have global scope, for it to accept an input value or return an output value. Double-click on the `Is Input Variable?` or `Is Output Variable?` fields, as appropriate, to reveal a checkbox. Click on the checkbox to tick it to make the selected variable an Input or Output variable.

A single variable can be both an Input variable and an Output variable.

See the [Define an Input or Output Variable][Define an Input or Output Variable tutorial] tutorial for a step-by-step guide.

### Modifying the Scope of a Variable

Double-click on the `Scope` field of variable to enable a dropdown menu. Select the desired scope from the dropdown.

See the [Modify the Scope of a Variable][Modify the Scope of a Variable tutorial] tutorial for a step-by-step guide.

### Sort Variables

The variables displayed may be ordered by any of the columns and they may also be filtered, based on the values contained in any column. To sort by a column's values, click the column header, each click will cycle through the sort options in the following order:

* Ascending
* Descending
* Remove Sort

### Filter Variables

The displayed variables may also be filtered, based on the values contained in any property of the variables, by typing into the search box below each property column name.

The filtering on `Scope` allows for the following options:

* `All` – All variables in the flow, regardless of their scope, are displayed
* `Flow` – Only variables defined at the flow level, i.e. global scope variables, are displayed
* `Defined (Selected Workspace)` – Only variable defined in the selected workspace are displayed; inherited scope variables are not displayed.
* `Available (Selected Workspace)` – Variable defined in the selected workspace and inherited scope variables are displayed. This is the default setting.

### Show or Hide Filters

The filters themselves can be hidden by clicking the {{< image src="/images/Flow Editor - Hide Filters.png" >}} icon; note, although the filters may be hidden, their filtering actions still apply.

When filters are hidden, the icon will change to {{< image src="/images/Flow Editor - Show Filters.png" >}}. Clicking this will make the filters visible again.

### Enable or Disable Filtering

The filtering of displayed variables can be disabled by clicking the {{< image src="/images/Flow Editor - Disable Filtering.png" >}} icon.

When filtering is disabled, the icon will change to {{< image src="/images/Flow Editor - Enable Filtering.png" >}}. Clicking this will enable filtering.

## Remarks

### Known Limitations

* The scope of a variable is referenced to the Description property of the flow or workspace, not the name of the workspace.
* It is possible to mark a non-global variable as `Is Input Variable?` or `Is Output Variable?`. However, the variable will not accept an input value nor return an output value.

## See Also

### Related Concepts

* [Blocks][]
* [Flows][]
* [Variables][]
* [Workspaces][]

### Related Tutorials

* [Create, Rename and Delete a Variable][Create, Rename and Delete a Variable tutorial]
* [Assign a Default Value to a Variable][Assign a Default Value to a Variable tutorial]
* [Define an Input or Output Variable][Define an Input or Output Variable tutorial]
* [Modify the Scope of a Variable][Modify the Scope of a Variable tutorial]

[Assign a Default Value to a Variable tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.AssignDefaultVariableValue" >}}
[Create, Rename and Delete a Variable tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.CreateRenameDeleteVariable" >}}
[Define an Input or Output Variable tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.DefineInputOutputVariable" >}}
[Modify the Scope of a Variable tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.ModifyVariableScope" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Flow Input Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Variable Scopes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Workspaces]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[What is a Block Property?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[What is a Workspace?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
