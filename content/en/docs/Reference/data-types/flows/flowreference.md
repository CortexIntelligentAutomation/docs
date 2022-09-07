---
title: "FlowReference"
linkTitle: "FlowReference"
description: "Used to reference a Flow using its Id."
---

# {{< param title >}}

<p class="namespace">(Cortex.DataTypes.Flows.FlowReference)</p>

## Summary

A `FlowReference` is used to reference a flow that will be called using the [Run Flow][] block.

| | |
|-|-|
| **Category:**          | Flows |
| **Name:**              | `FlowReference` |
| **Full Name:**         | `Cortex.DataTypes.Flows.FlowReference` |
| **Alias:**             | N/A |
| **Description:**       | Used to reference a Flow using its Id. |
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
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `00000000-0000-0000-0000-000000000000`) |

## Remarks

### Create a FlowReference

Currently a FlowReference can only created by using the [Flow Property][] of the [Run Flow][] block. Using the editor to select a flow (by its Name or Id) will create a flow reference for the block to use.

### Property Editor Support

- The Expression Editor is not available for [Input][], [InputOutput][] and [Output][] properties where the data type is `FlowReference`.
- The Literal Editor is available for [Input][] properties where the data type is `FlowReference`.
- The Variable Editor is available for [Output][] properties where the data type is `FlowReference`.

### Known limitations

None

## See Also

### Related Data Types

- [Guid][]

### Related Concepts

- [Flows][]

### External Documentation

None

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}

[Guid]: {{< url "Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}

[Run Flow]: {{< url "Cortex.Reference.Blocks.Flows.RunFlow.RunFlow.MainDoc" >}}
[Flow Property]: {{< url "Cortex.Reference.Blocks.Flows.RunFlow.RunFlow.FlowProperty" >}}
