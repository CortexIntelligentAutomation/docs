---
title: "SemaphoreSettings"
linkTitle: "SemaphoreSettings"
description: "Used to represent the configuration settings of a semaphore."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Concurrency.Semaphores.SemaphoreSettings)</p>

## Summary

The `SemaphoreSettings` data type represents the settings used to configure a [Semaphore][].

|                     |                                                             |
|---------------------|-------------------------------------------------------------|
| **Category:**       | Concurrency                                                 |
| **Name:**           | `SemaphoreSettings`                                         |
| **Full Name:**      | `Cortex.DataTypes.Concurrency.Semaphores.SemaphoreSettings` |
| **Alias:**          | N/A                                                         |
| **Description:**    | Represents the settings used for configuring a [Semaphore][]. |
| **Default Value:**  | `null`                                                      |
| **Can be used as:** | `SemaphoreSettings`, `Object`, `dynamic`                    |
| **Can be cast to:** | N/A                                                         |

## Properties

### Scope

The [Scope][Scope Property] is used to define the area in which the [Semaphore][] will operate.
  
|                 |                                |
|-----------------|--------------------------------|
| Data Type       | [Scope][]                      |
| Is [Advanced][] | `true`                         |
| Default Editor  | [Literal][]                    |
| Default Value   | [Scope][] with value shown below |

```json
{
    "Tenant": "ScopeOption.Current",
    "System": "ScopeOption.Current"
}
```

### Name

The [Name][Name Property] is used to identify the [Semaphore][].

|                 |                            |
|-----------------|----------------------------|
| Data Type       | [String][]                 |
| Is [Advanced][] | `true`                     |
| Default Editor  | [Literal][]                |
| Default Value   | [String][] with value `""` |

### ConcurrencyLimit

The [ConcurrencyLimit][ConcurrencyLimit Property] is used to define the maximum number of executions that can be in the [Semaphore][].

The specified value for the [ConcurrencyLimit][ConcurrencyLimit Property] may not be used if a [Semaphore][] with the same [Scope][Scope Property] and [Name][Name Property] already exists, see [Multiple Concurrency Limits][MultipleConcurrencyLimits] for more information.

|                 |             |
|-----------------|-------------|
| Data Type       | [Int32][]   |
| Is [Advanced][] | `true`      |
| Default Editor  | [Literal][] |
| Default Value   | `0`         |

### Queue

The [Queue][Queue Property] is used to define whether the [Semaphore][] functions as a [queuing semaphore][Queuing] or a [non-queuing semaphore][Non-Queuing].

If this property is set to `null`, then the [Semaphore][] will function as a [non-queuing semaphore][Non-Queuing].
If given a value, the [Semaphore][] will function as a [queuing semaphore][Queuing] and configures how the [Semaphore's][Semaphore] queue should operate.

|                |                 |
|----------------|-----------------|
| Data Type      | [QueueSettings][] |
| Is [Advanced][]  | `true`          |
| Default Editor | [Expression][]    |
| Default Value  | `null`          |

## Remarks

### Create a SemaphoreSettings

The following table shows some of the ways that `SemaphoreSettings` can be created.

| Method                                | Example                                                                                             | Result                                                                                                                                         | Editor&nbsp;Support | Notes                                                                                           |
|---------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|-------------------------------------------------------------------------------------------------|
| Use a `SemaphoreSettings` constructor | `new SemaphoreSettings(new Scope(ScopeOption.Current, ScopeOption.Current), "SemaphoreA", 1, null)` | `{ "Scope": { "Tenant": ScopeOption.Current", "System": "ScopeOption.Current" }, "Name": "SemaphoreA", "ConcurrencyLimit": 1, "Queue": null }` | Expression          | Creates a new [SemaphoreSettings][] that can be used to configure the functions of a [Semaphore][]. |

A [SemaphoreSettings][] can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property           | Data Type       | Example                                               | Notes                                                                                                                                  |
|--------------------|-----------------|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `Scope`            | `Scope`         | `new Scope(ScopeOption.Current, ScopeOption.Current)` | [Scope][Scope Property] defines the scope that the [Semaphore][] will operate in.                                                        |
| `Name`             | `String`        | `"SemaphoreA"`                                        | [Name][Name Property] defines the name of the [Semaphore][].                                                                             |
| `ConcurrencyLimit` | `Int32`         | `1`                                                   | [ConcurrencyLimit][ConcurrencyLimit Property] defines the maximum number of executions that can be inside the [Semaphore][] at one time. |
| `Queue`            | `QueueSettings` | `null`                                                | [Queue][Queue Property] defines the behaviour of the [Semaphore's][Semaphore] queue.                                                   |

### Convert SemaphoreSettings to Text

The following table shows some of the ways that a `SemaphoreSettings` can be converted to text.

| Method                             | Example                                                                                                                                                                               | Result                                                                                                                                                            | Editor&nbsp;Support | Notes                        |
|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|------------------------------|
| Use `Convert Object To Json` block | where `Object` property has a value of `{ "Scope": { "Tenant": ScopeOption.Current", "System": "ScopeOption.Current" }, "Name": "SemaphoreA", "ConcurrencyLimit": 1, "Queue": null }` | `"{\r\n  \"Scope\": {\r\n    \"Tenant\": 0,\r\n    \"System\": 0\r\n  },\r\n  \"Name\": \"SemaphoreA\",\r\n  \"ConcurrencyLimit\": 1,\r\n  \"Queue\": null\r\n}"` | N/A                 | See [Convert Object To Json] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SemaphoreSettings`.
- The Literal Editor is available for [Input][] properties where the data type is `SemaphoreSettings`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SemaphoreSettings`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [QueueSettings][]
- [Scope][]
- [String][]

### Related Concepts

- [What is a Semaphore?][Semaphore]

### External Documentation

None

[Scope Property]: {{< ref "#scope" >}}
[Name Property]: {{< ref "#name" >}}
[ConcurrencyLimit Property]: {{< ref "#concurrencylimit" >}}
[Queue Property]: {{< ref "#queue" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Semaphore]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.Semaphores.WhatIsASemaphore.MainDoc" >}}
[Non-Queuing]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.Semaphores.WhatIsASemaphore.Non-Queuing" >}}
[Queuing]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.Semaphores.WhatIsASemaphore.Queuing" >}}
[SemaphoreSettings]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.MainDoc" >}}
[QueueSettings]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.QueueSettings.MainDoc" >}}
[MultipleConcurrencyLimits]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.Semaphores.WhatIsASemaphore.MultipleConcurrencyLimits" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Scope]: {{< url path = "Cortex.Reference.DataTypes.Scopes.Scope.MainDoc">}}
