---
title: "Wireless Sender"
linkTitle: "Wireless Sender"
description: "Sends an execution to a specific block."
---

{{< figure src="/blocks/wireless-sender-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Wireless.WirelessSender.WirelessSenderBlock)</p>

## Description

Sends the execution to the specified [Wireless Receiver][Wireless Receiver Block] block.

## Examples

### Sending an Execution to a Wireless Receiver

This example is for a flow containing two [Wireless Receiver][Wireless Receiver Block] blocks with descriptions set to `Receiver 1` and `Receiver 2` as well as a [Wireless Sender][Wireless Sender Block] block with the following properties:

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Wireless Receiver Block][Wireless Receiver Property] | [Wireless Receiver Block][Wireless Receiver Property], with value `Receiver 1` | [Wireless Receiver Block][Wireless Receiver Property] is of type [WirelessReceiverBlockReference][] |

#### Result

Once an execution is started and it reaches the [Wireless Sender][Wireless Sender Block] block the execution will jump to the [Wireless Receiver][Wireless Receiver Block] block with description `Receiver 1`.

## Properties

### Wireless Receiver Block

The [Wireless Receiver][Wireless Receiver Block] block that the execution will be sent to.

The [Literal Editor][] is the only editor available for this property, and it provides the developer a list of all available [Wireless Receiver][Wireless Receiver Block] blocks in the current workspace to choose from.

| | |
|--------------------|---------------------------|
| Data Type | [WirelessReceiverBlockReference][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][Literal Editor] |
| Default Value | No value (defaults to `null`) |

## Exceptions

| Name | Description |
|------|-------------|
| [WirelessReceiverBlockNotFoundException][] | Thrown when the specified [Wireless Receiver][Wireless Receiver Property] block has been deleted. See [Wireless Receiver Block Not Found][WirelessReceiverExceptionBlockNotFound]. |
| | Thrown when [Wireless Receiver][Wireless Receiver Property] block has not been selected. See [Wireless Receiver Property Empty][WirelessReceiverExceptionPropertyEmpty].  |

## Remarks

### Wireless Block Scope

The Wireless blocks are scoped to the workspace that they are placed in; as a result, [Wireless Sender][Wireless Sender Block] blocks will only be able to select [Wireless Receiver][Wireless Receiver Block] blocks that are placed in the same workspace as itself.

### Multiple Wireless Senders with same Wireless Receiver

Multiple [Wireless Sender][Wireless Sender Block] blocks can send executions to the same [Wireless Receiver][Wireless Receiver Block] block.

### Multiple Wireless Receivers with same Description

If there are multiple [Wireless Receiver][Wireless Receiver Block] blocks with the same Description in the same scope, the [Guid][] of those blocks will be shown in the dropdown entries of the [Literal][Literal Editor] editor of the [Wireless Receiver Block][Wireless Receiver Property] property.

### Known Limitations

#### The Wireless Receiver Block Property can only use the Literal Editor

The Literal Editor is the only editor available for the [Wireless Receiver Block Property][Wireless Receiver Property]

In future this limitation may be removed.

[Guid]: {{< url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}
[Wireless Receiver Property]: {{< ref "#wireless-receiver-block" >}}
[Literal Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Wireless Sender Block]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessSender.WirelessSender.MainDoc" >}}
[Wireless Receiver Block]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessReceiver.WirelessReceiver.MainDoc" >}}
[WirelessReceiverBlockReference]: {{< url path="Cortex.Reference.DataTypes.Wireless.WirelessReceiverBlockReference.MainDoc" >}}
[WirelessReceiverBlockNotFoundException]: {{< url path="Cortex.Reference.Exceptions.Wireless.WirelessReceiverBlockNotFoundException.MainDoc" >}}
[WirelessReceiverExceptionBlockNotFound]: {{< url path="Cortex.Reference.Exceptions.Wireless.WirelessReceiverBlockNotFoundException.BlockNotFound" >}}
[WirelessReceiverExceptionPropertyEmpty]: {{< url path="Cortex.Reference.Exceptions.Wireless.WirelessReceiverBlockNotFoundException.PropertyEmpty" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
