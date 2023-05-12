---
title: "ITask<TResult>"
linkTitle: "ITask<TResult>"
description: "Any data type representing an asynchronous task."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Tasks.ITask&lt;TResult&gt;)</p>

## Summary

Any data type representing an asynchronous task.

| | |
|-|-|
| **Category:**          | Tasks |
| **Name:**              | `ITask<TResult>` |
| **Full Name:**         | `Cortex.DataTypes.Tasks.ITask<TResult>` |
| **Alias:**             | N/A |
| **Description:**       | Any data type representing an asynchronous task. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `ITask<TResult>`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A                                                           |

## Properties

### Id

The unique Id of the task.

| | |
|--------------------|---------------------------|
| Data Type | [Guid][] |

### IsCancelled

This property returns `true` if the execution of the task has been cancelled, and `false` otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |

### IsCompleted

This property returns `true` if the execution of the task has completed, and `false` otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |

### IsCompletedSuccessfully

This property returns `true` if [IsCompleted][] is `true` and [IsFaulted][] is `false`, and `false` otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |

### IsFaulted

This property returns `true` if the execution of the task has thrown an exception, and `false` otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |

### Status

This property returns the state of the execution of the task (e.g. `"Cancelled"`, `"Faulted"`, `"RanToCompletion"`, `"Running"`)

| | |
|--------------------|---------------------------|
| Data Type | [String][] |

### Exception

This property returns the [Exception][] if thrown by the execution of the task, and `null` otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Exception][] |

## Remarks

### Most Common ITask&lt;TResult&gt; Data Types

Any of the following data types can be used where an `ITask<TResult>` is required:

* [IExecutionTask][]
* [ExecutionTask][]

### Create an ITask<TResult>

For some of the ways that an `ITask<TResult>` can be created, please see each of the `ITask<TResult>` data types:

* [ExecutionTask][CreateExecutionTask]

### Convert ITask&lt;TResult&gt; to Text

For some of the ways that an `ITask<TResult>` can be converted to text see each of the `ITask<TResult>` data types:

* [ExecutionTask][ConvertExecutionTask]

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `ITask<TResult>`.
* The Literal Editor is not available for [Input][] properties where the data type is `ITask<TResult>`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `ITask<TResult>`.

### Known Limitations

None

## See Also

### Related Data Types

* [Boolean]
* [Exception][]
* [Guid][]
* [ExecutionTask][]
* [IExecutionTask][]
* [String][]

### Related Concepts

* [Working With Tasks][]

### External Documentation

None

[Working With Tasks]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Tasks.MainDoc" >}}
[CreateExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ExecutionTask.Create" >}}
[IsFaulted]: {{< ref "#isfaulted" >}}
[IsCompleted]: {{< ref "#iscompleted" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Guid]: {{< url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}
[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[ConvertIExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.Convert" >}}
[ConvertExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ExecutionTask.Convert" >}}
[ExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ExecutionTask.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

TODO