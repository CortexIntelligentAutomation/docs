---
title: "What is a Variable?"
linkTitle: "What is a Variable?"
description: "This page describes the concept of a Variable"
weight: 1
---

# {{< param title >}}

## Summary

A variable is a named container for storing data that can then be referenced in [Blocks][BlocksConcepts].

Data in a variable can be read, updated, or removed by different blocks. Examples of these include:

- Add an Item to a [List][]
- Remove an Item from a [List][]
- Set an element in a [Dictionary][]
- Extract text from a [String][]

## Anatomy of a Variable

Variables have the following properties that can be configured in the [Variable Grid][]:

| Variable Property | Notes |
|-------------|-------------|
| Description | Description of the variable's purpose |
| Name | Name of the variable |
| Type | Will default to variable. Read-only, reserved for future use |
| Set Default Value? | Sets the variable to be initialised to the **Default Value** if set to `true`, otherwise **Default Value** is ignored |
| Default Value | The value to initialise the variable to if **Set Default Value?** is set to `true`. See [Default Value Example](#default-value-example) |
| Is Input Variable? | Marks the variable as an input if set to `true`, requiring data to be passed into the variable when the flow is triggered |
| Is Output Variable? | Marks the variable as an output if set to `true`. All output variables will be returned as items in a structure. See [Outputs Example](#outputs-example) |

### Default Value Example

#### Valid Example

The Default Value can be set to any valid expression, but cannot include any references to variables. For example, a pre-determined Database Connection string:

```c#
"Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword;"
```

#### Invalid Example

```c#
$@"Server={($)ServerName};Database=myDataBase;User Id=myUsername;Password=myPassword;"
```

### Outputs Example

```json
{
    "Var1":"This was a string variable",
    "Var2":123,
    "Var3":{"StructureElement1":"StructureValue1"}
}
```

## Variables at Design Time

The [Variable Grid][] is used to [create][], [view][], [modify][], and [delete][] variables. It is opened by clicking `Variables` tab at the bottom of the screen.

See [Variable Grid][] for more information on how to use it.

## Variables at Runtime

### Initialising Variables

Variables must be initialised with data before they can be used in a block. If a block [references a variable][ReferenceVariable] that has not been initialised in an [Input][InputPropertyType] or [InputOutput][InputOutputPropertyType] block property, a [Message][Messages] will be returned stating `Variable is not initialised`.

If [debugging a flow][DebuggingExecutions] in [Cortex Studio][], this [Message][Messages] will be displayed in the [Message Panel][].

If triggered via the [APIGateway][], any [messages][Messages] will be returned as exceptions to the caller.

Variables can be initialised in one of three different ways:

- Using a [Flow Input Variable](#flow-input-variable)
- Using the [Default Value](#default-value)
- Using a [Block Output Property](#block-output-property)

#### Flow Input Variable

If a variable is marked as an Input Variable, and no Default Value has been set, then a value must be passed into the variable when the flow is triggered. When the execution starts, the variable is initialised with the value passed in.

See [Triggering Flow Executions][Executions] for more information.

#### Default Value

When a flow is executed, any variables where **Set Default Value?** is set to `true` will be initialised to the **Default Value**.

If a variable is marked as an Input Variable and a value has been passed in, that value will be used instead of the **Default Value**.

#### Block Output Property

Output properties of a block set the referenced variables when the block has been executed.

If the variable has not already been intialised, it will be initialised with the output value when the block is executed.

If the variable has already been initialised, it will be updated accordingly.

### Viewing Variables

At runtime, initialised variables are displayed in the [Variable Panel][] of the [Execution Viewer][]. This is available when an execution is selected.

![Variable Panel](/images/reference/concepts/fundamentals/variables/what-is-a-variable-variable-panel-2.png)

#### Viewing Basic Data Types

When a variable contains a [basic data type][BasicDataType] (e.g. String, Integer, etc), the value will be displayed directly in the [Variable Panel][]. Strings will be surrounded by double quotes (e.g. `"MyString"`).

#### Viewing Complex Data Types

When a variable contains a [complex data type][ComplexDataType] that is not a collection data type like AnyCommand or FlowException, the value will be displayed as `Instance of AnyCommand` or `Instance of FlowException` respectively in the [Variable Panel][].

When a variable contains a [collection data type][CollectionDataType] (e.g. Dictionary, List, Structure), the [Variable Panel][] will specify the data type and how many items the collection contains (e.g. `Dictionary<string, object> with 2 item(s)`).

To see the data in the variable, select the variable in the [Variable Panel][] and the data will be presented in the [Variable Detail][] area.

This is an example of data in a [Dictionary<string, dynamic>][Dictionary] variable.

![dictionary panel](/images/reference/concepts/fundamentals/variables/what-is-a-variable-dictionary-panel.png)

This is an example of data in a [Command][TODO] variable.

![command panel](/images/reference/concepts/fundamentals/variables/what-is-a-variable-command-panel.png)

This is an example of data in a [FlowException][] variable.

![exception panel](/images/reference/concepts/fundamentals/variables/what-is-a-variable-exception-panel.png)

### Updating Variables

#### InputOutput and Output Block Properties

Throughout the execution of a flow, variables referenced in [InputOutput][InputOutputPropertyType] and [Output][OutputPropertyType] properties can be updated with different values according to the block function.

### Deleting Variables

When an execution exits a workspace, any variables in that [Workspace Scope][] will be deleted from the execution. This means the variable:

- Is no longer accessible to the execution
- Is no longer presented in the [Variable Panel][] if the flow is being debugged

If the execution re-enters the [Workspace Scope][], the variable will be re-initialised.

## Typing

Variables do not have a type. The values stored in variables have [data types][DataTypesConcepts].

The [data types][DataTypesConcepts] are inferred where possible, checking all references of that variable are valid and will warn as appropriate in the [Message Panel][] for invalid references.

Certain [data types][DataTypesConcepts] can be [implicitly cast][] to work with another (e.g. [Int16][] can be used in properties expecting [Int32][]), but others must be [explicitly cast][] or converted. (e.g. [String][] cannot be directly used in properties expecting [Int32][]. Instead, it must be converted using `Convert.ToInt32(($)String)`).

For more information on specific data type conversions, see the relevant data type in [Data Types][].

## Remarks

### Known Limitations

#### Default Value can not reference other Variables

Currently, the Default Value cannot accept references to other variables. However, this may change in future releases.

See [Default Value Example](#default-value-example) for examples of valid and invalid Default Values.

## See Also

### Related Concepts

- [Fundamental Concepts - Data Types][DataTypesConcepts]
- [Basic Data Types][BasicDataType]
- [Complex Data Types][ComplexDataType]

### Related Data Types

- [All Data Types][Data Types]

### Related Blocks

- [Set Variable][]
- [All Blocks][Blocks]

[Message Panel]: {{< url "Cortex.Guides.Studio.SouthPanel.MessagePanel" >}}
[Set Variable]: {{< url "Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}
[APIGateway]: {{< url "Cortex.Reference.API.APIGateway.MainDoc" >}}
[Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}
[BlocksConcepts]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.MainDoc" >}}
[Data Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
[DataTypesConcepts]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.MainDoc" >}}
[BasicDataType]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.BasicDataTypes.MainDoc" >}}
[ComplexDataType]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.ComplexDataTypes.MainDoc" >}}
[CollectionDataType]: {{< url "Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[Cortex Studio]: {{< url "Cortex.Guides.Studio.MainDoc" >}}
[DebuggingExecutions]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.StartingAnExecution.Internal" >}}
[Executions]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.StartingAnExecution.MainDoc" >}}
[FlowException]: {{< url "Cortex.Reference.Exceptions.FlowException.MainDoc" >}}
[Int16]: {{< url "Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[List]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Dictionary]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[ReferenceVariable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.ReferencingVariables.MainDoc" >}}
[InputPropertyType]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[OutputPropertyType]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}
[InputOutputPropertyType]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Variable Grid]: {{< url "Cortex.Guides.Studio.SouthPanel.VariableGrid" >}}
[create]: {{< url "Cortex.Guides.Studio.SouthPanel.CreatingVariables" >}}
[view]: {{< url "Cortex.Guides.Studio.SouthPanel.ViewingVariables" >}}
[modify]: {{< url "Cortex.Guides.Studio.SouthPanel.ModifyingVariables" >}}
[delete]: {{< url "Cortex.Guides.Studio.SouthPanel.DeletingVariables" >}}
[Property Viewer]: {{< url "Cortex.Guides.Studio.EastPanel.PropertyViewer" >}}
[Execution Viewer]: {{< url "Cortex.Guides.Studio.EastPanel.ExecutionViewer" >}}
[Variable Panel]: {{< url "Cortex.Guides.Studio.EastPanel.VariablePanel" >}}
[Variable Detail]: {{< url "Cortex.Guides.Studio.EastPanel.VariableDetail" >}}
[Messages]: {{< url "Cortex.Reference.Concepts.Fundamentals.Messages.WhatIsAMessage.MainDoc" >}}
[Expression Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.ReferencingVariables.UsingExpressionEditor.MainDoc" >}}
[Variable Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.ReferencingVariables.UsingVariableEditor.MainDoc" >}}
[Workspace Scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[ObjectCasting]: {{< url "Cortex.Reference.Concepts.ObjectCasting.MainDoc" >}}
[implicitly cast]: {{< url "Cortex.Reference.Concepts.ObjectCasting.ImplicitCast" >}}
[Explicitly cast]: {{< url "Cortex.Reference.Concepts.ObjectCasting.ExplicitCast" >}}
[Snippets]: {{< url "Cortex.Reference.Glossary.P-T.Snippets" >}}
