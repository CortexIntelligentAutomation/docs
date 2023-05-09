---
title: "Wait For All Tasks"
linkTitle: "Wait For All Tasks"
description: "Waits for multiple Tasks to complete and returns their Results."
---

{{< figure src="/blocks/tasks-wait-for-task-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock`2)</p>

## Description

Waits for all of the specified [Tasks][Tasks Property] to finish and returns a list of all [Results][Results Property].

## Examples

### Wait for multiple running Tasks

This example will wait for three instances of an [IExecutionTask][] that represent an asynchronous execution of another flow. The flows that the [IExecutionTask][]'s represents waits for 2 seconds, 4 seconds and 6 seconds respectively and then sets the output variable `TimeWaited` equal to the amount of seconds the flow waited. The [Wait For All Tasks][] block begins execution 1 second after the asynchronous flows are started.

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
| [Tasks][Tasks Property] | `($)Tasks`, with value that represents a list of multiple asynchronous execution of another flow | `($)Tasks` is a variable of type [IList][]&lt;[IExecutionTask][]&gt; |
| [Results][Results Property] | `($)Results`, with no value | `($)Results` is a variable of type [IList][]&lt;[Structure][]&gt; |

#### Result

Wait for the [IExecutionTask][]'s 1 sercond after they have started, results in the execution containing the [Wait For All Tasks][] block to wait for all tasks to complete, pausing for 5 seconds and then the variable `($)Results` being updated to the following:

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

This example will wait for three instances of an [IExecutionTask][] that represent an asynchronous execution of another flow. The flows that the [IExecutionTask][]'s represents waits for 2 seconds, 4 seconds and 6 seconds respectively and then sets the output variable `TimeWaited` equal to the amount of seconds the flow waited. The [Wait For All Tasks][] block begins execution 7 second after the asynchronous flows are started, therefore starting after all the executions have already completed.

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
| [Tasks][Tasks Property] | `($)Tasks`, with value that represents a list of multiple asynchronous execution of another flow | `($)Tasks` is a variable of type [IList][]&lt;[IExecutionTask][]&gt; |
| [Results][Results Property] | `($)Results`, with no value | `($)Results` is a variable of type [IList][]&lt;[Structure][]&gt; |

### Result

Wait for the [IExecutionTask][]'s 7 sercond after they have started, results in the execution containing the [Wait For All Tasks][] block to not wait and the variable `($)Results` being immediately updated to the following:

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

[Tasks Property]: {{< ref "#tasks" >}}
[Results Property]: {{< ref "#results" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[TResult]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyContainsNullItemException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyContainsNullItemException.MainDoc" >}}
[AggregateTaskException]: {{< url path="Cortex.Reference.Exceptions.Tasks.AggregateTaskException.MainDoc" >}}

[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}