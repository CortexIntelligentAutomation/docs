---
title: "ExecutionTask"
linkTitle: "ExecutionTask"
description: "Used to represent the asynchronous execution of a flow."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTpes.Tasks.IExecutionTask)</p>

## Summary

Used to represent the asynchronous execution of a flow started by the [Run Flow Async][] block.

| | |
|-|-|
| **Category:**          | Tasks |
| **Name:**              | `ExecutionTask` |
| **Full Name:**         | `Cortex.DataTypes.Tasks.ExecutionTask` |
| **Alias:**             | N/A |
| **Description:**       | Used to represent the asynchronous execution of a flow started by the [Run Flow Async][] block. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `ExecutionTask`, `IExecutionTask`, `ITask<TResult>`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A                                                           |

## Properties

{{% pageinfo %}}
These properties are retrieved from the execution and cannot be set.
{{% /pageinfo %}}

### ExecutionId

The unique Id of the execution of a flow.

| | |
|--------------------|---------------------------|
| Data Type | [Guid][] |
| Is [Advanced][] | N/A |
| Default Editor | N/A |
| Default Value | N/A |

### Id

The unique Id of the task.

| | |
|--------------------|---------------------------|
| Data Type | [Guid][] |
| Is [Advanced][] | N/A |
| Default Editor | N/A |
| Default Value | N/A |

### IsCancelled

This property returns true if the execution has been cancelled, and false otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Is [Advanced][] | N/A |
| Default Editor | N/A |
| Default Value | N/A |

### IsCompleted

This property returns true if the execution is not running, and false otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Is [Advanced][] | N/A |
| Default Editor | N/A |
| Default Value | N/A |

### IsCompletedSuccessfully

This property returns true if [IsCompleted][] is true and [IsFaulted][] is false, and false otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Is [Advanced][] | N/A |
| Default Editor | N/A |
| Default Value | N/A |

### IsFaulted

This property return true if the execution has thrown an exception, and false otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Is [Advanced][] | N/A |
| Default Editor | N/A |
| Default Value | N/A |

### Status

This property returns the state of the execution (e.g. `"Running"`, `"RanToCompletion"`)

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | N/A |
| Default Editor | N/A |
| Default Value | N/A |

### Exception

This property returns the [Exception][] of the execution if [IsFaulted][] is true, and `null` otherwise.

| | |
|--------------------|---------------------------|
| Data Type | [Exception][] |
| Is [Advanced][] | N/A |
| Default Editor | N/A |
| Default Value | N/A |

## Remarks

### Convert ExecutionTask to Text

The following table shows some of the ways that an `ExecutionTask` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block    | where `Object` property has an `ExecutionTask` value of `{"ExecutionId": "00000000-0000-0000-0000-000000000000", "Id": "00000000-0000-0000-0000-000000000000", "IsCancelled": false, "IsCompleted": false, "IsCompletedSuccessfully": false, "IsFaulted": false, "Status": "Running", "Exception": null}` | `"{\r\n  \"ExecutionId\": \"00000000-0000-0000-0000-000000000000\",\r\n  \"Id\": \"00000000-0000-0000-0000-000000000000\",\r\n  \"IsCancelled\": false,\r\n  \"IsCompleted\": false,\r\n  \"IsCompletedSuccessfully\": false,\r\n  \"IsFaulted\": false,\r\n  \"Status\": \"Running\",\r\n  \"Exception\": null\r\n}"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `ExecutionTask`.
* The Literal Editor is not available for [Input][] properties where the data type is `ExecutionTask`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `ExecutionTask`.

### Known Limitations

None

## See Also

### Related Data Types

* [ITask&lt;TResult&gt;][ITask]
* [IExecutionTask][]

[IsFaulted]: {{< ref "#isfaulted" >}}
[IsCompleted]: {{< ref "#iscompleted" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Guid]: {{< url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}
[Run Flow Async]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlowAsync.MainDoc" >}}
[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
