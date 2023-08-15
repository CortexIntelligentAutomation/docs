---
title: "QueueSettings"
linkTitle: "QueueSettings"
description: "A datatype that represent the settings used for configuring a semaphores queue."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Concurrency.Semaphores.QueueSettings)</p>

## Summary

The `QueueSettings` data type represent the settings used to configure a [Semaphore's][Semaphore] queue.

| | |
|-|-|
| **Category:**          | Concurrency                                                  |
| **Name:**              | `QueueSettings`                                |
| **Full Name:**         | `Cortex.DataTypes.Concurrency.Semaphores.QueueSettings`         |
| **Alias:**             | N/A|
| **Description:**       | The data type used to represent the settings used for configuring a [Semaphore's][Semaphore] queue. |
| **Default Value:**     | `null`                             |
| **Can be used as:**    | `QueueSettings`, `Object`, `dynamic`           |
| **Can be cast to:**    | N/A |

## Properties

### Priority

The [Priority][Priority Property] of the executions joining the queue.
The queue is ordered by minimal value, so the element with the lowest [Priority][Priority Property] will be dequeued first.

| | |
|--------------------|---------------------------|
| Data Type | [Int32] |
| Is [Advanced] | `true` |
| Default Editor | [Expression] |
| Default Value | `0` |

### QueueTimeout

The [QueueTimeout][QueueTimeout Property] used to set a duration for the maximum amount of time an execution can spend in the queue.
A value of `null` will allow an execution to queue indefinitely.

| | |
|--------------------|---------------------------|
| Data Type | [TimePeriod] |
| Is [Advanced] | `true` |
| Default Editor | [Expression] |
| Default Value | `null` |

## Remarks

### Create a QueueSettings

The following table shows some of the ways that `QueueSettings` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `QueueSettings` constructor | `new QueueSettings(0, null)` | `{ "Priority": 0, "QueueTimeout": null }`| Expression | Creates a new [QueueSettings] that can be used to configure the functions of a [Semaphore's][Semaphore] queue. |

A [QueueSettings] can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `Priority` | `Int32` | `0` | [Priority][Priority Property] defines the priority executions will enter the queue with. |
| `QueueTimeout` | `TimePeriod` | `null` | [QueueTimeout][QueueTimeout Property] defines the maximum amount of time an execution can spend in the queue. |

### Convert QueueSettings to Text

The following table shows some of the ways that a `QueueSettings` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{ "Priority": 0, "QueueTimeout": null }` | `"{\r\n  "Priority\": 0,\r\n  "QueueTimeout": null\r\n}"`  | N/A |See [Convert Object To Json] |

### Property Editor Support

- The Expression Editor is available for [Input] properties where the data type is `QueueSettings`.
- The Literal Editor is available for [Input] properties where the data type is `QueueSettings`.
- The Variable Editor is available for [Input], [InputOutput] and [Output] properties where the data type is `QueueSettings`.

### Known Limitations

None

## See Also

### Related Data Types

- [SemaphoreSettings]
- [TimePeriod]

### Related Concepts

- [What is a Semaphore?][Semaphore]

### External Documentation

None

[Priority Property]: {{< ref "#priority" >}}
[QueueTimeout Property]: {{< ref "#queuetimeout" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Semaphore]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.WhatIsASemaphore.MainDoc" >}}
[SemaphoreSettings]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.MainDoc" >}}
[QueueSettings]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.QueueSettings.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
