---
title: "What is a Variable?"
linkTitle: "What is a Variable?"
description: "Information regarding the anatomy of a variable, using variables at design and runtime, and variable typing."
weight: 1
---

# {{% param title %}}

## Summary

A variable is a named container for storing data that can then be used in [Block Properties][].

Data in a variable can be read, updated, or removed by different blocks. Examples of these include:

- Add an item to a [List][]
- Remove an item from a [List][]
- Get an item from a [Dictionary][]
- Set an item in a [Dictionary][]

## Anatomy of a Variable

![Example Variable in Variables Grid](/images/variables-grid.PNG)

Variables have the following properties that can be configured in the [Variables Grid][]:

| Variable Property | Notes |
|-------------|-------------|
| Description | Description of the variable's purpose |
| Name | Name of the variable |
| Type | Will default to variable. Read-only, reserved for future use |
| Set Default Value? | Sets the variable to be initialised to the **Default Value** if set to `true`, otherwise **Default Value** is ignored |
| Default Value | The value to initialise the variable to if **Set Default Value?** is set to `true`. See [Variables with a Default Value][] |
| Is Input Variable? | Marks the variable as an input if set to `true`, requiring data to be passed into the variable when the flow is triggered |
| Is Output Variable? | Marks the variable as an output if set to `true`. All output variables will be returned as items in a [Structure][]. See [Output Variables Structure][] |

### Variables with a Default Value

Variables can be initialised with a default value. The Default Value can be set to any valid expression or literal, but cannot include any variables.

For example, the following expression is valid as it does not use any variables:

```c#
"Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword;"
```

The following expression is invalid as it uses the `($)ServerName` variable:

```c#
$@"Server={($)ServerName};Database=myDataBase;User Id=myUsername;Password=myPassword;"
```

### Output Variables Structure

When any variables have their `Is Output Variable?` property set to `true`, they will be returned to the caller as items in a [Structure][] when the flow ends.

In the following example `($)TotalUnreadEmails` and `($)FoldersWithUnreadEmails` are both set as outputs and the following [Structure][] is returned:

```json
{
    "TotalUnreadEmails":12,
    "FoldersWithUnreadEmails": {
        "Inbox": 8, 
        "Junk": 4
    }
}
```

## Variables at Design Time

The [Variables Grid][] is used to [create][], [view][], [modify][], and [delete][] variables. It is opened by clicking `Variables` tab at the bottom of [Cortex Studio][]. For more information see [Variables Grid][].

Variables can also be created through the use of the [Variable Editor][]. For more information see [Creating Variables][].

## Variables at Runtime

### Initialising Variables

Variables must be initialised with data before they can be used in a block.

If an [Input][] or [InputOutput][] property [uses a variable][] that has not been initialised, a [Message][Messages] will be returned stating `Variable is not initialised`, and the name of the variable will be included within the details of the message. The [Message][Messages] will be:

- Displayed in the [Messages Grid][] when [debugging a flow][] in [Cortex Studio][]
- Returned as an exception to the caller when a flow is triggered via the [Cortex API Gateway Service][]

Variables can be initialised in the following ways:

- Using a [Flow Input Variable][]
- Using the [Default Value][]
- Using a [Block Output Property][]

#### Flow Input Variable

If a variable has its `Is Input Variable?` property set to `true`, and no [Default Value][] has been set, then a value must be provided for the variable when the flow is triggered. When the execution starts, the variable is initialised with the value provided.

#### Default Value

If a variable has its `Set Default Value?` property set to `true`, it will be initialised with the `Default Value` provided when the flow is executed.

If a variable has its `Is Input Variable?` and `Set Default Value?` properties set to `true`, then it will be initialised with the value provided when the flow is triggered. If no value is provided then it will be initialised with the `Default Value`.

#### Block Output Property

[Output Properties][Output] are used to save values to a variable during the execution of a block, regardless of whether the variable is already initialised or not. The act of saving to an uninitialised variable will initialise it.

### Viewing Variables

When [debugging a flow][debugging a flow] in [Cortex Studio][], selecting an execution will display all initialised variables that are in [scope][] in the [Variables Viewer][].

![Variables Viewer](/images/reference/concepts/fundamentals/variables/what-is-a-variable-variable-panel-2.png)

#### Viewing Basic Data Types

When a variable contains a [basic data type][] (e.g. String, Integer, etc), the value will be displayed directly in the [Variables Viewer][]. Strings will be surrounded by double quotes (e.g. `"MyString"`).

#### Viewing Complex Data Types

When a variable contains a [complex data type][] that is not a collection data type (e.g. Command or FlowException), the value will be displayed as `Instance of Command` or `Instance of FlowException` respectively in the [Variables Viewer][].

When a variable contains a [collection data type][Collections] (e.g. Dictionary, List, or Structure), the [Variables Viewer][] will specify the data type and how many items the collection contains (e.g. `Dictionary<string, object> with 2 item(s)`).

To see the data in the variable, select the variable in the [Variables Viewer][] and the data will be presented in the [Variable Details Viewer][].

The following examples show the [Variable Details Viewer][] when showing a:

- [Dictionary<string, dynamic>][Dictionary] variable

![dictionary panel](/images/reference/concepts/fundamentals/variables/what-is-a-variable-dictionary-panel.png)

- [Command][] variable

![command panel](/images/reference/concepts/fundamentals/variables/what-is-a-variable-command-panel.png)

- [FlowException][] variable

![exception panel](/images/reference/concepts/fundamentals/variables/what-is-a-variable-exception-panel.png)

### Updating Variables

[InputOutput][] and [Output][] properties are used to save values and update variables during the execution of a block.

### Deleting Variables

When an execution exits a [workspace][], any variables defined within that workspace's [scope][] will be deleted from the execution. This means the variables:

- Are no longer accessible to the execution
- Are no longer presented in the [Variables Viewer][] when the flow is being debugged

If the execution re-enters the workspace's [scope][], any variables will be [re-initialised][Initialising Variables].

## Variable Typing

Variables do not have their own [data type][Data Types Concept]; they are named containers for storing data of any [data type][Data Types Concept].

When a variable is used in a [Block Property][Block Properties] it is checked to ensure the data type it contains is supported by the property. For all data types apart from [dynamic][] any variables containing unsupported data types will be displayed in the [Messages Grid][], preventing the execution from starting; for variables containing [dynamic][] data types checking will be performed during the block execution, throwing an exception if the data type is unsupported.

Sometimes an unsupported data type can automatically be converted to a supported type through the use of [implicit casting][implicitly cast]; if this is possible the block property will handle this without any input required by the developer. However, if this is not possible an unsupported data type must be converted to a supported type by the developer; this can be done by:

- [Explicitly casting][explicitly cast] the unsupported [Data Type][Data Types]
- Converting the unsupported [Data Type][Data Types] through the use of methods and properties (e.g. `Convert.ToInt32(($)String)` or `Int32.Parse(($)String)`)

For more information on specific data type conversions, see the relevant documentation for that [Data Type][Data Types].

## Remarks

### Known Limitations

#### Default Value can not use Variables

Currently, default values cannot use variables. However, this may change in the future.

For examples of valid and invalid default values see [Variables with a Default Value][].

## See Also

### Related Concepts

- [Flows][]
- [Workspaces][]
- [Blocks][]
- [Block Properties][]
- [Data Types][Data Types Concept]
- [Executions][]
- [Exceptions][]
- [Messages][Messages Concept]

### Related Data Types

- [All Data Types][Data Types]

### Related Blocks

- [All Blocks][]

### External Documentation

None

[Variables with a Default Value]: {{< ref "#variables-with-a-default-value" >}}
[Output Variables Structure]: {{< ref "#output-variables-structure" >}}
[Flow Input Variable]: {{< ref "#flow-input-variable" >}}
[Default Value]: {{< ref "#default-value" >}}
[Block Output Property]: {{< ref "#block-output-property" >}}
[Initialising Variables]: {{< ref "#initialising-variables" >}}

[Blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Block Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[Variable Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Creating Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.CreatingVariables" >}}

[Data Types Concept]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.MainDoc" >}}
[basic data type]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.BasicDataTypes" >}}
[complex data type]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.ComplexDataTypes" >}}

[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Executions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[debugging a flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.Debugging" >}}

[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}

[Messages Concept]: {{< url "Cortex.Reference.Concepts.Fundamentals.Messages.MainDoc" >}}
[Messages]: {{< url "Cortex.Reference.Concepts.Fundamentals.Messages.WhatIsAMessage.MainDoc" >}}

[uses a variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.UsingVariables.MainDoc" >}}
[scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}

[Workspaces]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}

[implicitly cast]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.ObjectCasting.ImplicitCast" >}}
[explicitly cast]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.ObjectCasting.ExplicitCast" >}}

[Cortex API Gateway Service]: {{< url "Cortex.Reference.Apis.ApiGatewayService.MainDoc" >}}

[All Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}

[Data Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Collections]: {{< url "Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[Dictionary]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[List]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Command]: {{< url "Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}

[FlowException]: {{< url "Cortex.Reference.Exceptions.FlowException.MainDoc" >}}

[Cortex Studio]: {{< url "Cortex.Guides.Studio.MainDoc" >}}
[Variables Viewer]: {{< url "Cortex.Guides.Studio.EastPanel.VariablesViewer" >}}
[Variable Details Viewer]: {{< url "Cortex.Guides.Studio.EastPanel.VariableDetailsViewer" >}}
[Messages Grid]: {{< url "Cortex.Guides.Studio.SouthPanel.MessagesGrid" >}}
[Variables Grid]: {{< url "Cortex.Guides.Studio.SouthPanel.VariablesGrid" >}}
[create]: {{< url "Cortex.Guides.Studio.SouthPanel.CreatingVariables" >}}
[view]: {{< url "Cortex.Guides.Studio.SouthPanel.ViewingVariables" >}}
[modify]: {{< url "Cortex.Guides.Studio.SouthPanel.ModifyingVariables" >}}
[delete]: {{< url "Cortex.Guides.Studio.SouthPanel.DeletingVariables" >}}
