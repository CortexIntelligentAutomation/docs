---
title: "WirelessReceiverBlockReference"
linkTitle: "WirelessReceiverBlockReference"
description: "Used to reference a Wireless Receiver block using its Id."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Wireless.WirelessReceiverBlockReference)</p>

## Summary

A `WirelessReceiverBlockReference` is used to reference a [Wireless Receiver][Wireless Receiver Block] block that an execution can be sent to using the [Wireless Sender][Wireless Sender Block] block.

| | |
|-|-|
| **Category:**          | Wireless |
| **Name:**              | `WirelessReceiverBlockReference` |
| **Full Name:**         | `Cortex.DataTypes.Wireless.WirelessReceiverBlockReference` |
| **Alias:**             | N/A |
| **Description:**       | Used to reference a Wireless Receiver block using its Id. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Id

The unique Id of the [Wireless Receiver][Wireless Receiver Block] block that is referenced.

| | |
|--------------------|---------------------------|
| Data Type | [Guid][] |
| Is Advanced | `false` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `00000000-0000-0000-0000-000000000000`) |

## Remarks

### Create a WirelessReceiverBlockReference

Currently a `WirelessReceiverBlockReference` can only created by using the [Wireless Receiver Block Property][] of the [Wireless Sender][Wireless Sender Block] block. Using the editor to select a block will create a [Wireless Receiver Block Reference][WirelessReceiverBlockReference] for the block to use.

### Property Editor Support

- The Expression Editor is not available for [Input][], [InputOutput][] and [Output][] properties where the data type is `WirelessReceiverBlockReference`.
- The Literal Editor is available for [Input][] properties where the data type is `WirelessReceiverBlockReference`.
- The Variable Editor is available for [Output][] properties where the data type is `WirelessReceiverBlockReference`.

### Known limitations

None

## See Also

### Related Data Types

- [Guid][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[WirelessReceiverBlockReference]: {{< url path="Cortex.Reference.DataTypes.Wireless.WirelessReceiverBlockReference.MainDoc" >}}
[Guid]: {{< url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}
[Wireless Sender Block]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessSender.WirelessSender.MainDoc" >}}
[Wireless Receiver Block]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessReceiver.WirelessReceiver.MainDoc" >}}
[Wireless Receiver Block Property]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessSender.WirelessSender.WirelessReceiverProperty" >}}
