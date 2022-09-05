---
title: "InputVariables"
linkTitle: "InputVariables"
description: "A collection of flow Input Variables."
---

# {{< param title >}}

<p class="namespace">(Cortex.DataTypes.Flows.InputVariables)</p>

<img src="/images/work-in-progress.jpg">

## Summary

`InputVariables` are used to pass data into a called flow when using the [Run Flow][] block.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `InputVariables` |
| **Full Name:**         | `Cortex.DataTypes.Flows.InputVariables` |
| **Alias:**             | N/A |
| **Description:**       | A collection of flow Input Variables. |
| **Size:**              | Varies |
| **Default Value:**     | `null` |
| **Can be used as:**    | `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

None

## Remarks

### Create a InputVariables

The following table shows some of the ways that a `Command` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `InputVariables` constructor | ``new InputVariables() { { "Variable1", true }, { "Variable2", 100 } }`` | `{ "Variable1": true, "Variable2": 100 }` | Expression | `InputVariables` containing a Boolean items with String keys |

A `InputVariables` can also be created using the Literal Editor when using the [Run Flow][] block.

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `InputVariables`.
- The Literal Editor is not available for [Input][] properties where the data type is `InputVariables`.
- The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `InputVariables`.

### Known limitations

None

## See Also

### Related Data Types

None

### Related Concepts

- [Flows][TODO: Fundamentals -> Flows]

### External Documentation

None

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Run Flow]: {{< url "Cortex.Reference.Blocks.Flows.RunFlow.RunFlow.MainDoc" >}}
