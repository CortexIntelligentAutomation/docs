---
title: "Wireless Receiver"
linkTitle: "Wireless Receiver"
description: "Receives executions."
---

{{< figure src="/blocks/wireless-receiver-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Wireless.WirelessReceiver.WirelessReceiverBlock)</p>

## Description

Receives executions from [Wireless Sender][Wireless Sender Block] blocks.

The block has no block specific properties, but it does have the `Description` property that is common to all blocks. This allows users to give each block a description; selection of the [Wireless Receiver][Wireless Receiver Block Property] block in [Wireless Sender][Wireless Sender Block] blocks is done based on description so it should be set to something appropriate and unique.

## Examples

No examples for the block.

## Properties

No properties for the block, other than the `Description` property that is common to all blocks.

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Wireless Block Scope

The Wireless blocks are scoped to the workspace that they are placed in; as a result, [Wireless Sender][Wireless Sender Block] blocks will only be able to select [Wireless Receiver][Wireless Receiver Block] blocks that are placed in the same workspace as itself.

### Multiple Wireless Senders with same Wireless Receiver

Multiple [Wireless Sender][Wireless Sender Block] blocks can send executions to the same [Wireless Receiver][Wireless Receiver Block] block.

### Multiple Wireless Receivers with same Description

If there are multiple [Wireless Receiver][Wireless Receiver Block] blocks with the same Description in the same scope, the [Guid][] of those blocks will be shown in the dropdown entries of the [Wireless Receiver Block][Wireless Receiver Block Property] property's [Literal][Literal Editor] editor in the [Wireless Sender][Wireless Sender Block] block.

### Known Limitations

None

[Guid]: {{< url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}
[Literal Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Wireless Sender Block]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessSender.WirelessSender.MainDoc" >}}
[Wireless Receiver Block]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessReceiver.WirelessReceiver.MainDoc" >}}
[Wireless Receiver Block Property]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessSender.WirelessSender.WirelessReceiverProperty" >}}
