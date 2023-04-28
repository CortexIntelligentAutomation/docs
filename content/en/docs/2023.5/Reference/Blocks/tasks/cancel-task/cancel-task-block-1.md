---
title: "Cancel Task"
linkTitle: "Cancel Task"
description: "Cancels a Task."
---

{{< figure src="/blocks/tasks-cancel-task-block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Tasks.CancelTask.CancelTaskBlock`1)</p>

## Description

Cancels the execution of the specified [Task][Task Property].

## Examples

### Cancel a Task that is running

This example will cancel an [IExecutionTask][] that represents the asynchronous execution of another flow. The flow this [IExecutionTask][] represents waits for 5 seconds then sets the output variable `ResultVariable` to `"ResultValue"`. The [CancelTask][] block begins execution 1 second after the asynchronous flow has started.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Task][Task Property] | `($)Task`, with a value that represent the asynchronous execution of another flow | `($)Task` is a variable of type [IExecutionTask][] |

#### Result

Cancelling the [IExecutionTask][] 1 second after it has started results in the [IExecutionTask][] being cancelled and its properties being updated to the following:

```json
{
  "ExecutionId": "00000000-0000-0000-0000-000000000000",
  "Id": "00000000-0000-0000-0000-000000000000",
  "IsCancelled": true,
  "IsCompleted": true,
  "IsCompletedSuccessfully": false,
  "IsFaulted": true,
  "Status": "Cancelled",
  "Exception": {
    "Exception Type": "FlowExecutionStoppedException",
    "Message": "Flow execution has been stopped!",
    "FlowId": "00000000-0000-0000-0000-000000000000",
    "ExecutionId": "00000000-0000-0000-0000-000000000000"
  }
}
```

***

### Cancel a Task that has finished running

This example will cancel an [IExecutionTask][] that represents the complete asynchronous execution of another flow. The flow this [IExecutionTask][] represents waits for 5 seconds then sets the output variable `ResultVariable` to `"ResultValue"`. The [CancelTask][] block begins execution 6 second after the asynchronous flow is started.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Task][Task Property] | `($)Task`, with a value that represent the asynchronous execution of another flow | `($)Task` is a variable of type [IExecutionTask][] |

#### Result

Cancelling the [IExecutionTask][] 1 second after it has finished results in the [IExecutionTask][] being unaffected and its properties being updated to the following:

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

## Properties

### Task

The [Task][Task Property] to cancel.

| | |
|--------------------|---------------------------|
| Data Type | [ITask][]&lt;[TResult][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Task` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [Task][Task Property] is `null`.|

## Remarks

None

[Task Property]: {{< ref "#task" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[TResult]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[CancelTask]: {{< ref "#cancel-task" >}}


[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
