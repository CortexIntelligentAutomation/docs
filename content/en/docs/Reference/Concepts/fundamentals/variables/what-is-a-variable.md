---
title: "What is a Variable?"
linkTitle: "What is a Variable?"
description: "Information regarding the anatomy of a variable, using variables at design and runtime, and variable typing."
weight: 1
---

# {{< param title >}}

## Summary

A variable is a named container for storing data that can then be referenced in [Block Properties][].

Data in a variable can be read, updated, or removed by different blocks. Examples of these include:

- Add an item to a [List][]
- Remove an item from a [List][]
- Get an item from a [Dictionary][]
- Set an item in a [Dictionary][]

## Anatomy of a Variable

Variables have the following properties that can be configured in the [Variable Grid][]:

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

Variables can be initialised with a default value. The Default Value can be set to any valid expression or literal, but cannot include any references to variables.

For example, the following expression is valid as it does not reference any variables:

```c#
"Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword;"
```

The following expression is invalid as it references the `($)ServerName` variable:

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

The [Variable Grid][] is used to [create][], [view][], [modify][], and [delete][] variables. It is opened by clicking `Variables` tab at the bottom of [Cortex Studio][]. For more information see [Variable Grid][].

Variables can also be created through the use of the [Variable Editor][]. For more information see [Creating New Variables][].

## Variables at Runtime

### Initialising Variables

Variables must be initialised with data before they can be used in a block.

If an [Input][] or [InputOutput][] property [references a variable][ReferenceVariable] that has not been initialised, a [Message][Messages] will be returned stating `Variable is not initialised`, and the name of the variable will be included within the details of the message. The [Message][Messages] will be:

- Displayed in the [Message Panel][] when [debugging a flow][DebuggingExecutions] in [Cortex Studio][]
- Returned as an exception to the caller when a flow is triggered via the [Cortex API Gateway Service][]

Variables can be initialised in the following ways:

- Using a [Flow Input Variable][]
- Using the [Default Value][]
- Using a [Block Output Property][]

#### Flow Input Variable

If a variable has its `Is Input Variable?` property set to `true`, and no [Default Value][] has been set, then a value must be provided for the variable when the flow is triggered. When the execution starts, the variable is initialised with the value provided.

For more information see [Starting an Execution][].

#### Default Value

If a variable has its `Set Default Value?` property set to `true`, it will be initialised with the `Default Value` provided when the flow is executed.

If a variable has its `Is Input Variable?` and `Set Default Value?` properties set to `true`, then it will be initialised with the value provided when the flow is triggered. If no value is provided then it will be initialised with the `Default Value`.

#### Block Output Property

[Output Properties][Output] are used to save values to a variable during the execution of a block, regardless of whether the variable is already initialised or not. The act of saving to an uninitialised variable will initialise it.

### Viewing Variables

TODO: We are here

When [debugging a flow][DebuggingExecutions] in [Cortex Studio][], initialised variables are displayed in the [Variable Panel][] of the [Execution Viewer][]. This is available when an execution is selected.

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

[Variables with a Default Value]: {{< ref "#variables-with-a-default-value" >}}
[Output Variables Structure]: {{< ref "#output-variables-structure" >}}
[Flow Input Variable]: {{< ref "#flow-input-variable" >}}
[Default Value]: {{< ref "#default-value" >}}
[Block Output Property]: {{< ref "#block-output-property" >}}

[Block Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Variable Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Creating New Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.CreatingNewVariables" >}}

[Starting an Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.StartingAnExecution.MainDoc" >}}

[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[Cortex Studio]: {{< url "Cortex.Guides.Studio.MainDoc" >}}

[Cortex API Gateway Service]: {{< url "Cortex.Reference.Apis.ApiGatewayService.MainDoc" >}}

[Message Panel]: {{< url "Cortex.Guides.Studio.SouthPanel.MessagePanel" >}}
[Set Variable]: {{< url "Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}
[Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}
[BlocksConcepts]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Data Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
[DataTypesConcepts]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.MainDoc" >}}
[BasicDataType]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.BasicDataTypes.MainDoc" >}}
[ComplexDataType]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.ComplexDataTypes.MainDoc" >}}
[CollectionDataType]: {{< url "Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[DebuggingExecutions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.StartingAnExecution.Internal" >}}
[FlowException]: {{< url "Cortex.Reference.Exceptions.FlowException.MainDoc" >}}
[Int16]: {{< url "Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[List]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Dictionary]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[ReferenceVariable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.ReferencingVariables.MainDoc" >}}
[Variable Grid]: {{< url "Cortex.Guides.Studio.SouthPanel.VariableGrid" >}}
[create]: {{< url "Cortex.Guides.Studio.SouthPanel.CreatingVariables" >}}
[view]: {{< url "Cortex.Guides.Studio.SouthPanel.ViewingVariables" >}}
[modify]: {{< url "Cortex.Guides.Studio.SouthPanel.ModifyingVariables" >}}
[delete]: {{< url "Cortex.Guides.Studio.SouthPanel.DeletingVariables" >}}
[Property Editor]: {{< url "Cortex.Guides.Studio.EastPanel.PropertyEditor" >}}
[Execution Viewer]: {{< url "Cortex.Guides.Studio.EastPanel.ExecutionViewer" >}}
[Variable Panel]: {{< url "Cortex.Guides.Studio.EastPanel.VariablePanel" >}}
[Variable Detail]: {{< url "Cortex.Guides.Studio.EastPanel.VariableDetail" >}}
[Messages]: {{< url "Cortex.Reference.Concepts.Fundamentals.Messages.WhatIsAMessage.MainDoc" >}}
[Expression Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.ReferencingVariables.UsingExpressionEditor.MainDoc" >}}
[Workspace Scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[ObjectCasting]: {{< url "Cortex.Reference.Concepts.ObjectCasting.MainDoc" >}}
[implicitly cast]: {{< url "Cortex.Reference.Concepts.ObjectCasting.ImplicitCast" >}}
[Explicitly cast]: {{< url "Cortex.Reference.Concepts.ObjectCasting.ExplicitCast" >}}
[Snippets]: {{< url "Cortex.Reference.Glossary.P-T.Snippets" >}}
