---
title: "Cancel All Tasks"
linkTitle: "Cancel All Tasks"
description: "Cancels all Tasks in a list."
---

{{< figure src="/blocks/tasks-cancel-task-block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Tasks.CancelTask.CancelAllTasksBlock`2)</p>

## Description

Cancels the execution of all [Tasks][Tasks Property] in a specified list.

## Examples

### Cancel a list of running Tasks

This example will cancel the executions of all tasks in a list; the list contains two [IExecutionTasks][IExecutionTask] that represent asynchronous executions of another flow. Both [IExecutionTasks][IExecutionTask] represent a flow that waits for 5 seconds then sets an output variable `ResultVariable` to `"ResultValue"`. The [Cancel All Tasks Block][CancelAllTasks] block begins execution 1 second after the asynchronous flows have started, so the flows get cancelled before the `ResultVariable` are set.

When the [Cancel All Tasks Block][CancelAllTasks] begins, the [IExecutionTasks][IExecutionTask] will have the following properties:

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
| [Tasks][Tasks Property] | `($)Tasks`, with value `[($)ExecutionTask1, ($)ExecutionTask2]` | `($)Tasks` is a variable of type [List][]&lt;[IExecutionTask][]&gt; |

#### Result

Cancelling all [IExecutionTasks][IExecutionTask] 1 second after they have started, results in the flows they represent being cancelled and the properties of each [IExecutionTask][IExecutionTask] in `($)Tasks` being updated to the following:

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

### Cancel a list of completed Tasks

This example will cancel the executions of all tasks in a list; the list contains two [IExecutionTasks][IExecutionTask] that represent asynchronous executions of another flow. Both [IExecutionTasks][IExecutionTask] represent a flow that waits for 5 seconds then sets an output variable `ResultVariable` to `"ResultValue"`. The [Cancel All Tasks Block][CancelAllTasks] begins execution 6 seconds after the asynchronous flows have started, so the flow completes and sets `ResultVariable` before they could be cancelled.

When the [Cancel All Tasks Block][CancelAllTasks] begins, the [IExecutionTasks][IExecutionTask] will have the following properties:

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
| [Tasks][Tasks Property] | `($)Tasks`, with value `[($)ExecutionTask1, ($)ExecutionTask2]` | `($)Tasks` is a variable of type [List][]&lt;[IExecutionTask][]&gt; |

#### Result

Cancelling all [IExecutionTasks][IExecutionTask] has no effect as the flows they represent were completed and their properties remain unchanged.

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
| Data Type | [IList][]&lt;[ITask][]&lt;[TResult][]&gt;&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Tasks` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyContainsNullItemException][] | Thrown when any Task in [Tasks][Tasks Property] is `null`.|
| [PropertyEmptyException][] | Thrown when [Tasks][Tasks Property] contains no items.|
| [PropertyNullException][] | Thrown when [Tasks][Tasks Property] is `null`.|

## Remarks

### Cancelling a Task that has already been cancelled

If the Task being cancelled has already been cancelled, this block will do nothing and the status of the Task will remain `"Cancelled"`.

### Cancelling a Task that has been completed

If the Task being cancelled has already been completed, this block will do nothing and the status of the Task will remain `"RanToCompletion"`.

### Cancelling a Task that has thrown an exception

If the Task being cancelled has thrown an exception during execution, this block will do nothing and the status of the Task will remain `"Faulted"`.

## See Also

### Related Blocks

* [Run Flow Async Block][RunFlowAsync]

[Tasks Property]: {{< ref "#tasks" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[TTask]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[TResult]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyContainsNullItemException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyContainsNullItemException.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[CancelAllTasks]: {{< ref "#cancel-all-tasks" >}}
[RunFlowAsync]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlowAsync.MainDoc" >}}


[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
