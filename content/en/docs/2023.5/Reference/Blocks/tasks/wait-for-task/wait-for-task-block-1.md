---
title: "Wait For Task"
linkTitle: "Wait For Task"
description: "Waits for a Task to be complete."
---

{{< figure src="/blocks/tasks-wait-for-task-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Tasks.WaitForTask.WaitForTaskBlock`1)</p>

## Description

Waits for the specified [Task][Task Property] to finish and returns the [Result][Result Property] from the [Task][Task Property].

## Examples

### Wait for a Task that is currently executing

This example will wait for an [IExecutionTask][] that represents the asynchronous execution of another flow. The flow this [IExecutionTask][] represents waits for 5 seconds and then sets the output variable `ResultVariable` to `"ResultValue"`. The [WaitForTask][] block begins execution 1 second after the asynchronous flow is started.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Task][Task Property] | `($)Task`, with value that represents the asynchronous execution of another flow | `($)Task` is a variable of type [IExecutionTask][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` is a variable of type [Structure][] |

#### Result

Waiting for an [IExecutionTask][], that represents the asynchronous execution of another flow, 1 second after the asynchronous flow is started results the execution containing the [WaitForTask][] block to pause for 4 seconds and then the variable `($)Result` being updated to the following:

```json
{
    "ResultVariable": "ResultValue"
}
```

***

## Properties

### Task

The [Task][Task Property] being waited for.  
  
| | |
|--------------------|---------------------------|
| Data Type | [ITask][]&lt;[TResult][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Task` with no value |

### Result

The [Result][Result Property] of the [Task][Task Property] being waited for.

| | |
|--------------------|---------------------------|
| Data Type | [TResult][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Result` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyListException][] | Thrown when [List][List Property] is read-only. |
| [InvalidPropertyValueException][] | Thrown when [Item][Item Property] is `null` and [List][List Property] only accepts non-nullable value types. See [Value Is Invalid][]. |
| [PropertyNullException][] | Thrown when [List][List Property] is `null`. |

## Remarks

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[Task Property]: {{< ref "#task" >}}
[Result Property]: {{< ref "#result" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[TResult]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
