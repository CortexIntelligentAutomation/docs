---
title: "Wait For All Tasks"
linkTitle: "Wait For All Tasks"
description: "Waits for multiple Tasks to complete and returns their Results."
---

{{< figure src="/blocks/Cortex_Blocks_Tasks_WaitForTask_WaitForAllTasksBlock_2.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock`2)</p>

## Description

Waits for all of the specified [Tasks][Tasks Property] to finish and returns a list of all [Results][Results Property].

## Examples

### Wait for multiple running Tasks

This example will wait for three instances of an [IExecutionTask][] that represent asynchronous executions of other flows. The flows that the [IExecutionTask][]'s represent waits for 2 seconds, 4 seconds and 6 seconds respectively and then sets the output variable `TimeWaited` equal to the amount of seconds the flow waited. The [Wait For All Tasks][] block begins execution 1 second after the asynchronous flows are started.

When the [Wait For All Tasks][] block begins, the [IExecutionTask][]'s will have the following properties:

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
| [Tasks][Tasks Property] | `($)Tasks`, with value that represents a list of asynchronous executions of another flow | `($)Tasks` is a variable of type [IList][]&lt;[IExecutionTask][]&gt; |
| [Results][Results Property] | `($)Results`, with no value | `($)Results` is a variable of type [IList][]&lt;[Structure][]&gt; |

#### Result

Waiting for the [IExecutionTask][]'s 1 second after they have started, results in the execution containing the [Wait For All Tasks][] block to wait for all tasks to complete, pausing for 5 seconds and then the variable `($)Results` being updated to the following:

```json
[
    {
        "TimeWaited": 2
    },
    {
        "TimeWaited": 4
    },
    {
        "TimeWaited": 6
    }
]
```

After the [Wait For All Tasks][] block finishes, the tasks in `($)Tasks` will be in the following state:

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

### Wait for multiple completed Tasks

This example will wait for three instances of an [IExecutionTask][] that represent asynchronous executions of other flows. The flows that the [IExecutionTask][]'s represent waits for 2 seconds, 4 seconds and 6 seconds respectively and then sets the output variable `TimeWaited` equal to the amount of seconds the flow waited. The [Wait For All Tasks][] block begins execution 7 seconds after the asynchronous flows are started, therefore starting after all the executions have already completed.

When the [Wait For All Tasks][] block begins, the [IExecutionTask][]'s will have the following properties:

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
| [Tasks][Tasks Property] | `($)Tasks`, with value that represents a list of asynchronous executions of another flow | `($)Tasks` is a variable of type [IList][]&lt;[IExecutionTask][]&gt; |
| [Results][Results Property] | `($)Results`, with no value | `($)Results` is a variable of type [IList][]&lt;[Structure][]&gt; |

#### Result

Waiting for the [IExecutionTask][]'s 7 seconds after they have started, results in the execution containing the [Wait For All Tasks][] block to not wait and the variable `($)Results` being immediately updated to the following:

```json
[
    {
        "TimeWaited": 2
    },
    {
        "TimeWaited": 4
    },
    {
        "TimeWaited": 6
    }
]
```

After the [Wait For All Tasks][] block finishes, the tasks in `($)Tasks` will remain unchanged:

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

### Tasks

The list of [Tasks][Tasks Property] being waited for.  
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[ITask][]&lt;[TResult][]&gt;&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Tasks` with no value |

### Results

The list of [Results][Results Property] of all the [Tasks][Tasks Property] being waited for.

The order of the [Results][Results Property] in the list will match the order of the [Tasks][Tasks Property] (ie. The Result of the Task at index 0, will also be at index 0).
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TResult][]&gt; |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Results` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [Tasks][Tasks Property] is `null`. |
| [PropertyEmptyException][] | Thrown when [Tasks][Tasks Property] is empty. |
| [PropertyContainsNullItemException][] | Thrown when one or more items in the list of [Tasks][Tasks Property] is `null`. |
| [AggregateTaskException][] | Thrown when one or more items in [Tasks][Tasks Property] throws an exception. |

## Remarks

### Waiting for Tasks that have been cancelled

If one or more tasks in the [Tasks][Tasks Property] being waited on has already been cancelled or is cancelled whilst being waited on, this block will wait until all [Tasks][Tasks Property] are complete, then throw an [AggregateTaskException][] containing the cancellation exception(s). Please see [Waiting for a Task that has thrown an exception][WaitingException Remark] for more details.

### Waiting for a Task that has been completed

If one or more tasks in the [Tasks][Tasks Property] being waited on has completed, this block will wait for all [Tasks][Tasks Property] to complete before returning the [Results][Results Property].

### Waiting for a Task that has thrown an exception

If one or more tasks in the [Tasks][Tasks Property] being waited on has already thrown an exception during execution or throws an exception whilst being waited on, this block will wait until all [Tasks][Tasks Property] are complete, then throw an [AggregateTaskException][].

The [AggregateTaskException][] has the property [TaskExceptions][] of type [IDictionary][]&lt;[Int32][],[Exception][]&gt;. This property contains a list of all exceptions thrown by the tasks as index/exception pairs, mapping the exception thrown to the index of the task that threw it.

Below is an example of the value of [TaskExceptions][] after the first and third tasks both threw a [FlowException][]:
```json
{
    "0": {
        "Exception Type": "FlowException",
        "Message": "This flow threw an exception.",
        "HelpLink": "https://docs.wearecortex.com/docs/2023.5/reference/exceptions/flows/flow-exception"
    },
    "2": {
        "Exception Type": "FlowException",
        "Message": "This flow threw an exception.",
        "HelpLink": "https://docs.wearecortex.com/docs/2023.5/reference/exceptions/flows/flow-exception"
    }
}
```

To get the [Results][Results Property] of the [Tasks][Tasks Property] that did not throw an exception, you would need to use another [Wait For All Tasks][] block to wait on only the tasks that didn't throw an exception. Below is example showing the simplist method of doing so:

{{< figure src="/images/WaitForAllTasksExample.png" title="Example Flow For Getting Only Successful Results" >}}

1. Wait For All Tasks Block
    * This block waits for three execution tasks in the variable `Tasks` to complete.
    * The first and third execution throw an exception.
    * The block throws an [AggregateTaskException][].
    * See [Wait For All Tasks][] block.
2. Handle Block Exception Block
    * This block handles the [AggregateTaskException][].
    * It saves the exception to the variable `AggregateTaskException`.
    * See [Handle Block Exception][] block.
3. Remove Items At Indexes Block
    * This block removes all items at specific indexes from a list.
    * The indexes to be removed are the indexes of the tasks that threw an exception.
    * The [List][] property is set to `Tasks`.
    * The [Indexes][] property is set to `AggregateTaskException.TaskExceptions.Keys`.
    * See [Remove Items At Indexes] block.
4. Wait For All Tasks Block
    * This block waits on the new list of [Tasks][Tasks Property].
    * The list now only contains only one task, the previously second task, as it did not throw an exception.
    * See [Wait For All Tasks][] block.
5. Workspace Block
    * This workspace then uses the successful results for something.
    * See [Workspace][] block.

[Tasks Property]: {{< ref "#tasks" >}}
[Results Property]: {{< ref "#results" >}}
[WaitingException Remark]: {{< ref "#waiting-for-a-task-that-has-thrown-an-exception" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[TResult]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[Wait For All Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock.MainDoc" >}}
[Handle Block Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Remove Items At Indexes]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsAtIndexes.MainDoc" >}}
[Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.Workspace.Workspace.MainDoc" >}}

[List]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsAtIndexes.List" >}}
[Indexes]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsAtIndexes.Indexes" >}}

[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyContainsNullItemException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyContainsNullItemException.MainDoc" >}}
[AggregateTaskException]: {{< url path="Cortex.Reference.Exceptions.Tasks.AggregateTaskException.MainDoc" >}}

[TaskExceptions]: {{< url path="Cortex.Reference.Exceptions.Tasks.AggregateTaskException.TaskExceptions" >}}

[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}
[FlowException]: {{< url path="Cortex.Reference.Exceptions.Flows.FlowException.MainDoc" >}}

[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}