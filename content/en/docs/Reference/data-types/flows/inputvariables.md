---
title: "InputVariables"
linkTitle: "InputVariables"
description: "A collection of flow Input Variables."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Flows.InputVariables)</p>

## Summary

`InputVariables` are used to pass data into a called flow when using the [Run Flow][] block.

| | |
|-|-|
| **Category:**          | Flows |
| **Name:**              | `InputVariables` |
| **Full Name:**         | `Cortex.DataTypes.Flows.InputVariables` |
| **Alias:**             | N/A |
| **Description:**       | A collection of flow Input Variables. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `Structure`, `IDictionary<TKey, TItem>`, `IEnumerable`, `Object`, `dynamic` |
|                        | `IEnumerable<KeyValuePair<TKey, TItem>>` (e.g. where `InputVariables` is `IDictionary<String, Object>` and `IEnumerable<KeyValuePair<TKey, TItem>>` is `IEnumerable<KeyValuePair<String, Object>>`) |
| **Can be cast to:**    |  N/A |

## Remarks

### Create an InputVariables

The following table shows some of the ways that an `InputVariables` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `InputVariables` expression | `new InputVariables()` | `{}` | Expression | `InputVariables` containing zero items |
|  | ``new InputVariables() { { "Variable1", true } }`` | `{ "Variable1": true }` | Expression | `InputVariables` containing one Boolean item with a String key |
|  | ``new InputVariables() { { "Variable1", true }, { "Variable2", 100 } }`` | `{ "Variable1": true, "Variable2": 100 }` | Expression | `InputVariables` containing Boolean and Int32 items with String keys |

An `InputVariables` can also be created using the Literal Editor when using the [Run Flow][] block. For more information see the [Inputs Property][] of the [Run Flow][] block.

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `InputVariables`.
- The Literal Editor is available for [Input][] properties where the data type is `InputVariables`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `InputVariables`.

### Known limitations

None

## See Also

### Related Data Types

- [IEnumerable][]
- [IEnumerable&lt;TItem&gt;][]
- [IDictionary&lt;TKey, TItem&gt;][]
- [Structure][]

### Related Concepts

- [Flows][]
- [Variables][]
- [Input Variables][]

### External Documentation

None

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Input Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}

[Run Flow]: {{< url "Cortex.Reference.Blocks.Flows.RunFlow.RunFlow.MainDoc" >}}
[Inputs Property]: {{< url "Cortex.Reference.Blocks.Flows.RunFlow.RunFlow.InputsProperty" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable.MainDoc" >}}
[IEnumerable&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[IDictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
