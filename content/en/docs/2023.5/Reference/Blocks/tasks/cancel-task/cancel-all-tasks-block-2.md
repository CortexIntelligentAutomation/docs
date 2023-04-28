---
title: "Cancel All Tasks"
linkTitle: "Cancel All Tasks"
description: "Cancels a list of Tasks."
---

{{< figure src="/blocks/tasks-cancel-task-block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Tasks.CancelTask.CancelAllTasksBlock`2)</p>

## Description

Cancels the execution of each task in a specified list.

## Examples

### Cancel a list of Tasks that are running

This example will cancel a list containing two [IExecutionTask][] that represent asynchronous executions of another flow. The flow these [IExecutionTasks][IExecutionTask] represent waits for 5 seconds then sets the output variable `ResultVariable` to `"ResultValue"`. The [CancelAllTasks][] block begins execution 1 second after the asynchronous flows have started.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Tasks][Tasks Property] | `($)Tasks`, with value `[($)ExecutionTask1, ($)ExecutionTask2]` | `($)Tasks` is a variable of type [IList][]&lt;[IExecutionTask][]&gt; |

#### Result

Cancelling the list of [IExecutionTasks][IExecutionTask] results in the [IExecutionTasks][IExecutionTask] being cancelled and their properties being updated to the following:

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

### Cancel a list of Tasks that have finished running

This example will cancel a list containing two [IExecutionTask][] that represent asynchronous executions of another flow. The flow these [IExecutionTasks][IExecutionTask] represent waits for 5 seconds then sets the output variable `ResultVariable` to `"ResultValue"`. The [CancelAllTasks][] block begins execution 6 second after the asynchronous flow has started.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Tasks][Tasks Property] | `($)Tasks`, with value `[($)ExecutionTask1, ($)ExecutionTask2]` | `($)Tasks` is a variable of type [IList][]&lt;[IExecutionTask][]&gt; |

#### Result

Cancelling the list of [IExecutionTasks][IExecutionTask] 1 second after they have finished results in the [IExecutionTasks][IExecutionTask] being unaffected and their properties being updated to the following:

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

### Tasks

The list of Tasks to cancel.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TTask][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Tasks` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyContainsNullItemException][] | Thrown when [Tasks][Tasks Property] contains a `null` item.|
| [PropertyEmptyException][] | Thrown when [Tasks][Tasks Property] contains no items.|
| [PropertyNullException][] | Thrown when [Tasks][Tasks Property] is `null`.|

## Remarks

None

[Tasks Property]: {{< ref "#tasks" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[TTask]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyContainsNullItemException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyContainsNullItemException.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[CancelAllTasks]: {{< ref "#cancel-all-tasks" >}}


[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
