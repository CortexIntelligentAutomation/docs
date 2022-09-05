---
title: "FlowReference"
linkTitle: "FlowReference"
description: "Used to reference a Flow using its Id."
---

# {{< param title >}}

<p class="namespace">(Cortex.DataTypes.Flows.FlowReference)</p>

<img src="/images/work-in-progress.jpg">

## Summary

A `FlowReference` is used to reference a flow that will be called using the [Run Flow][] block.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `FlowReference` |
| **Full Name:**         | `Cortex.DataTypes.Flows.FlowReference` |
| **Alias:**             | N/A |
| **Description:**       | Used to reference a Flow using its Id. |
| **Size:**              | Varies |
| **Default Value:**     | `null` |
| **Can be used as:**    | `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Id

The unique Id of the flow that is referenced.

| | |
|--------------------|---------------------------|
| Data Type | [Guid][] |
| Is Advanced | `false` |
| Default Editor | [Literal][TODO] |
| Default Value | No value (defaults to `00000000-0000-0000-0000-000000000000`) |

## Remarks

### Create a FlowReference

The following table shows some of the ways that a `Command` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `FlowReference` constructor | `new FlowReference(00000000-0000-0000-0000-000000000000)` | `{Id: 00000000-0000-0000-0000-000000000000}` | Expression | |

A `FlowReference` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Notes |
|-|-|-|
| `Id` | `Guid` | The command that will be executed or queried against the data source. |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `FlowReference`.
- The Literal Editor is not available for [Input][] properties where the data type is `FlowReference`.
- The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `FlowReference`.

### Known limitations

None

## See Also

### Related Data Types

- [Guid][]

### Related Concepts

- [Flows][TODO: Fundamentals -> Flows]

### External Documentation

None

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Guid]: {{< url "Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}

[Run Flow]: {{< url "Cortex.Reference.Blocks.Flows.RunFlow.RunFlow.MainDoc" >}}
