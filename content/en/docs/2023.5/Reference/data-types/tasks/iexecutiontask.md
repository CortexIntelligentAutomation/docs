---
title: "IExecutionTask"
linkTitle: "IExecutionTask"
description: "Any data type representing an asynchronous execution of a flow."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTpes.Tasks.IExecutionTask)</p>

## Summary

Any data type representing an asynchronous execution of a flow.

| | |
|-|-|
| **Category:**          | Tasks |
| **Name:**              | `IExecutionTask` |
| **Full Name:**         | `Cortex.DataTypes.Tasks.IExecutionTask` |
| **Alias:**             | N/A |
| **Description:**       | Any data type representing an asynchronous execution of a flow. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `IExecutionTask`, `ITask<TResult>`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A                                                           |

## Properties

### ExecutionId

The unique Id of the execution of a flow.

| | |
|--------------------|---------------------------|
| Data Type | [Guid][] |

### Id

The unique Id of the task.

| | |
|--------------------|---------------------------|
| Data Type | [Guid][] |

### IsCancelled

This property returns true if the execution of the task has been cancelled, and false otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |

### IsCompleted

This property returns true if the execution of the task has completed, and false otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |

### IsCompletedSuccessfully

This property returns true if [IsCompleted][] is true and [IsFaulted][] is false, and false otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |

### IsFaulted

This property return true if the execution of the task has thrown an exception, and false otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |

### Status

This property returns the state of the execution of the task (e.g. `"Running"`, `"RanToCompletion"`)

| | |
|--------------------|---------------------------|
| Data Type | [String][] |

### Exception

This property returns the [Exception][] of the execution of the task if [IsFaulted][] is true, and `null` otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Exception][] |

## Remarks

### Most Common IExecutionTask Data Types

Any of the following data types can be used where an `IExecutionTask` is required:

* [ExecutionTask][]

### Convert IExecutionTask to Text

For some of the ways that an `IExecutionTask` can be converted to text see each of the `IExecutionTask` data types:

* [ExecutionTask][ConvertExecutionTask]

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `IExecutionTask`.
* The Literal Editor is not available for [Input][] properties where the data type is `IExecutionTask`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `IExecutionTask`.

### Known Limitations

None

## See Also

### Related Data Types

* [ITask&lt;TResult&gt;][ITask]
* [ExecutionTask][]

[IsFaulted]: {{< ref "#isfaulted" >}}
[IsCompleted]: {{< ref "#iscompleted" >}}
[ExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ExecutionTask.MainDoc" >}}
[ConvertExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ExecutionTask.Convert" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Guid]: {{< url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}
[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
