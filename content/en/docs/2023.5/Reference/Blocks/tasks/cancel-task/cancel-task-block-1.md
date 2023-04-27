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

### Cancel a Task that takes 5 seconds to execute then returns a result

This example will cancel an [IExecutionTask][] that represents the asynchronous execution of another flow. The flow this [IExecutionTask][] represents waits for 5 seconds then sets the output variable `ResultVariable` to `"ResultValue"`. The [CancelTask][] block begins execution 1 second after the asynchronous flow is started.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Task][Task Property] | `($)Task`, with a value that represent the asynchronous execution of another flow | `($)Task` is a variable of type [IExecutionTask][] |

#### Result

Cancelling the [IExecutionTask][] that represents the asynchronous execution of another flow 1 second after it starts results in the [IExecutionTask][] being cancelled and its properties being updated to the following:

```json
{
  "ExecutionId": "1773fb5d-40c6-4b8f-82a2-1188b6a8b036",
  "Id": "1bc7f082-38ed-4cb5-962a-de12964a9f4e",
  "IsCancelled": true,
  "IsCompleted": true,
  "IsCompletedSuccessfully": false,
  "IsFaulted": true,
  "Status": "Cancelled",
  "Exception": {
    "Exception Type": "FlowExecutionStoppedException",
    "Message": "Flow execution has been stopped!",
    "FlowId": "00fb1536-1a41-4ae5-b128-d338fe5f0450",
    "ExecutionId": "1773fb5d-40c6-4b8f-82a2-1188b6a8b036"
  }
}
```

***

### Cancel a Task that takes 5 seconds to execute then returns a result

This example will cancel an [IExecutionTask][] that represents the complete asynchronous execution of another flow. The flow this [IExecutionTask][] represents waits for 5 seconds then sets the output variable `ResultVariable` to `"ResultValue"`. The [CancelTask][] block begins execution 6 second after the asynchronous flow is started.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Task][Task Property] | `($)Task`, with a value that represent the asynchronous execution of another flow | `($)Task` is a variable of type [IExecutionTask][] |

#### Result

Cancelling the [IExecutionTask][] that represents the asynchronous execution of another flow 1 second after its finished results in the [IExecutionTask][] being unaffected and its properties being updated to the following:

```json
{
  "ExecutionId": "1773fb5d-40c6-4b8f-82a2-1188b6a8b036",
  "Id": "1bc7f082-38ed-4cb5-962a-de12964a9f4e",
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
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[CancelTask]: {{< ref "#cancel-task" >}}


[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
