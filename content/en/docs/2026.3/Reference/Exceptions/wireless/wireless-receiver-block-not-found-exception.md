---
title: "WirelessReceiverBlockNotFoundException"
linkTitle: "WirelessReceiverBlockNotFoundException"
description: "The exception thrown when a wireless receiver block could not be found."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Wireless.WirelessReceiverBlockNotFoundException)</p>

## Description

The exception thrown when a [Wireless Receiver][Wireless Receiver Block] block could not be found.

There are multiple reasons that this exception can be thrown:

- [Wireless Receiver Block Not Found][WirelessReceiverExceptionBlockNotFound]
- [Wireless Receiver Property Empty][WirelessReceiverExceptionPropertyEmpty]

## Reasons

### Wireless Receiver Block Not Found {#100}

A [Category][] of `NotFound` and an [Error Code][] of `100` indicates that the selected [Wireless Receiver][Wireless Receiver Block] block was deleted or does not exist.

#### Message Format

```json
"The 'Wireless Receiver Block' provided could not be found.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure the correct [Wireless Receiver][Wireless Receiver Block] block is selected.

### Wireless Receiver Property Empty {#101}

A [Category][] of `NotFound` and an [Error Code][] of `101` indicates that a [Wireless Receiver][Wireless Receiver Block] block has not been selected.

#### Message Format

```json
"'Wireless Receiver Block' is empty; it must be provided a value.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure a [Wireless Receiver][Wireless Receiver Block] block is selected.

## Properties

### Exception Type

The type of the exception (i.e. `WirelessReceiverBlockNotFoundException`)

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Category

The category of the exception, which is used to categorise an exception if there are multiple reasons that the exception can occur.

For `WirelessReceiverBlockNotFoundException` there are the following categories:

- `NotFound`

| | |
|-----------|------------|
| Data Type | [String][] |

### Error Code

The error code for the exception, which is used to indicate the reason that the exception occurred, if there are multiple reasons that the exception can occur.

For `WirelessReceiverBlockNotFoundException` there are the following error codes:

- [100][WirelessReceiverBlockNotFound] - indicates that the [Wireless Receiver][Wireless Receiver Block] block could not be found
- [101][WirelessReceiverPropertyEmpty] - indicates that the [Wireless Receiver Block][Wireless Receiver Block Property] property was empty

| | |
|-----------|---------------------------|
| Data Type | [WirelessReceiverNotFoundErrorCode][WirelessReceiverNotFoundErrorCode] |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

None

## See Also

### Related Data Types

* [String][]
* [WirelessReceiverNotFoundErrorCode][]

### Related Concepts

* [Exceptions][]

### Related Blocks

* [Wireless Sender Block][]

### External Documentation

None

[Category]: {{< ref "#category">}}
[Error Code]: {{< ref "#error-code">}}
[WirelessReceiverBlockNotFound]: {{< ref "#100">}}
[WirelessReceiverPropertyEmpty]: {{< ref "#101">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Wireless Sender Block]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessSender.WirelessSender.MainDoc" >}}
[Wireless Receiver Block]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessReceiver.WirelessReceiver.MainDoc" >}}
[WirelessReceiverExceptionBlockNotFound]: {{< url path="Cortex.Reference.Exceptions.Wireless.WirelessReceiverBlockNotFoundException.BlockNotFound" >}}
[WirelessReceiverExceptionPropertyEmpty]: {{< url path="Cortex.Reference.Exceptions.Wireless.WirelessReceiverBlockNotFoundException.PropertyEmpty" >}}
[WirelessReceiverNotFoundErrorCode]: {{< url path="Cortex.Reference.DataTypes.Wireless.WirelessReceiverBlockNotFoundErrorCode.MainDoc" >}}
[Wireless Receiver Block Property]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessSender.WirelessSender.WirelessReceiverProperty" >}}
