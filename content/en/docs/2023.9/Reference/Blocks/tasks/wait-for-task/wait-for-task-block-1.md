---
title: "Wait For Task"
linkTitle: "Wait For Task"
description: "Waits for a Task to complete and returns the Result."
---

{{< figure src="/blocks/tasks-wait-for-task-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Tasks.WaitForTask.WaitForTaskBlock`1)</p>

## Description

Waits for the specified [Task][Task Property] to finish and returns the [Result][Result Property] from the [Task][Task Property].

## Examples

### Wait for a running Task

This example will wait for an [IExecutionTask][] that represents the asynchronous execution of another flow. The flow this [IExecutionTask][] represents waits for 5 seconds and then sets the output variable `ResultVariable` to `"ResultValue"`. The [Wait For Task][] block begins execution 1 second after the asynchronous flow is started. 

When the [Wait For Task][] block begins, the [IExecutionTask][] will have the following properties:

```json
{
  "ExecutionId": "00000000-0000-0000-0000-000000000000",
  "Id": "00000000-0000-0000-0000-000000000000",
  "IsCancelled": false,
  "IsCompleted": false,
  "IsCompletedSuccessfully": false,
  "IsFaulted": false,
  "Status": "Running",
  "Exception": null
}

```

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Task][Task Property] | `($)Task`, with value that represents the asynchronous execution of another flow | `($)Task` is a variable of type [IExecutionTask][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` is a variable of type [Structure][] |

#### Result

Waiting for the [IExecutionTask][] 1 second after it is started, results in the execution containing the [Wait For Task][] block to wait for the task to complete, pausing for 4 seconds and then the variable `($)Result` being updated to the following:

```json
{
    "ResultVariable": "ResultValue"
}
```

After the [Wait For Task][] block finishes, the `($)Task` will be in the following state:

```json
{
  "ExecutionId": "00000000-0000-0000-0000-000000000000",
  "Id": "00000000-0000-0000-0000-000000000000",
  "IsCancelled": false,
  "IsCompleted": true,
  "IsCompletedSuccessfully": true,
  "IsFaulted": false,
  "Status": "RanToCompletion",
  "Exception": null
}
```

***

### Wait for a completed Task

This example will wait for an [IExecutionTask][] that represents the asynchronous execution of another flow. The flow this [IExecutionTask][] represents waits for 5 seconds and then sets the output variable `ResultVariable` to `"ResultValue"`. The [Wait For Task][] block begins execution 6 seconds after the asynchronous flow is started, therefore starting after the execution has already completed.

When the [Wait For Task][] block begins, the [IExecutionTask][] will have the following properties:

```json
{
  "ExecutionId": "00000000-0000-0000-0000-000000000000",
  "Id": "00000000-0000-0000-0000-000000000000",
  "IsCancelled": false,
  "IsCompleted": true,
  "IsCompletedSuccessfully": true,
  "IsFaulted": false,
  "Status": "RanToCompletion",
  "Exception": null
}
```

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Task][Task Property] | `($)Task`, with value that represents the asynchronous execution of another flow | `($)Task` is a variable of type [IExecutionTask][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` is a variable of type [Structure][] |

#### Result

Waiting for the [IExecutionTask][] 6 seconds after it is started, results in the execution containing the [Wait For Task][] block to not wait and the variable `($)Result` being immediately updated to the following:

```json
{
    "ResultVariable": "ResultValue"
}
```

After the [Wait For Task][] block finishes, the `($)Task` will remain unchanged:

```json
{
  "ExecutionId": "00000000-0000-0000-0000-000000000000",
  "Id": "00000000-0000-0000-0000-000000000000",
  "IsCancelled": false,
  "IsCompleted": true,
  "IsCompletedSuccessfully": true,
  "IsFaulted": false,
  "Status": "RanToCompletion",
  "Exception": null
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
| [PropertyNullException][] | Thrown when [Task][Task Property] is `null`. |

## Remarks

### Waiting for a Task that has been cancelled

If the [Task][Task Property] being waited on has already been cancelled or is cancelled whilst being waited on, this block will re-throw the cancellation exception.

### Waiting for a Task that has been completed

If the [Task][Task Property] being waited on has completed, this block will not wait and immediately return the [Task][Task Property]'s result.

### Waiting for a Task that has thrown an exception

If the [Task][Task Property] being waited on has already thrown an exception during execution or throws an exception whilst being waited on, this block will re-throw the exception.

[Task Property]: {{< ref "#task" >}}
[Result Property]: {{< ref "#result-2" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[TResult]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[Wait For Task]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForTask.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
