---
title: "Remove Text At Beginning"
linkTitle: "Remove Text At Beginning"
description: "Removes a length of text from the beginning of a given text."
---

![Icon](/blocks/text-remove-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Remove.RemoveTextAtBeginningBlock)</p>

## Description

Removes a [Length][Length Property] of text from the beginning of a given [Text][Text Property].

## Examples

### Remove a Length of text from the beginning of a given Text

This example will remove the first `3` characters from the beginning of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Length][Length Property] | `($)Length`, with value `3` | `($)Length` is a variable of type [Int32][] |

#### Result

Removing the first `3` characters from the beginning of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` results in the variable `($)Text` being updated to the following:

```json
"DEFGHIJKLMNOPQRSTUVWXYZ"
```

***

## Properties

### Text

The [Text][Text Property] to remove the [Length][Length Property] of text from.  
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Default Value | `($)Text` with value `""` |

### Length

The [Length][Length Property] of text to remove.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Length` with value `-1` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyValueOutOfRangeException][] | Thrown when the [Text][Text Property] property is `null` or empty (i.e. `""`). |
| | Thrown when the [Length][Length Property] property is greater than the length of [Text][Text Property]. |

## Remarks

### Negative Length

If [Length][Length Property] is negative, all text will be removed and the variable specified in the [Text][Text Property] property will be set to empty (i.e. `""`).

### Zero Length

If [Length][Length Property] is `0`, no text will be removed and the variable specified in the [Text][Text Property] property will remain unchanged.

[Text Property]: {{< ref "#text" >}}
[Length Property]: {{< ref "#length" >}}

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] which has the [Length][Length Property] of text removed at the beginning and re-assigns it to the variable specified in the [Text][Text Property] property.

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
