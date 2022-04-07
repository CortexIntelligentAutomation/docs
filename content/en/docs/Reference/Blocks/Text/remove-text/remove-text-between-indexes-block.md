---
title: "Remove Text Between Indexes"
linkTitle: "Remove Text Between Indexes"
description: "Removes text between the specified start index and end index of a given text."
---

{{< figure src="/blocks/text-remove-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.RemoveText.RemoveTextBetweenIndexesBlock)</p>

## Description

Removes text between the specified [Start Index][StartIndex Property] and [End Index][EndIndex Property] of a given [Text][Text Property].

## Examples

### Remove text between the specified Start Index and End Index of a given Text

This example will remove all characters between start index `0` and end index `3` of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Start Index][StartIndex Property] | `($)StartIndex`, with value `0` | `($)StartIndex` is a variable of type [Int32][] |
| [End Index][EndIndex Property] | `($)EndIndex`, with value `3` | `($)EndIndex` is a variable of type [Int32][] |

#### Result

`"A"` is at index `0` and `"D"` is at index `3` in `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`. Therefore, removing all characters between (and including) start index `0` and end index `3` results in the variable `($)Text` being updated to the following:

```json
"EFGHIJKLMNOPQRSTUVWXYZ"
```

***

### Remove text where Start Index is greater than End Index

This example will remove all characters between start index `3` and end index `0` of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Start Index][StartIndex Property] | `($)StartIndex`, with value `3` | `($)StartIndex` is a variable of type [Int32][] |
| [End Index][EndIndex Property] | `($)EndIndex`, with value `0` | `($)EndIndex` is a variable of type [Int32][] |

#### Result

In this example the start index `3` is greater than the end index `0`. When this occurs, the block simply swaps the indexes before it processes the text.

Therefore, having start index `3` and end index `0` is the same as having start index `0` and end index `3`.

`"A"` is at index `0` and `"D"` is at index `3` in `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

Therefore, removing all characters between (and including) start index `3` and end index `0`, or start index `0` and end index `3`, results in the variable `($)Text` being updated to the following:

```json
"EFGHIJKLMNOPQRSTUVWXYZ"
```

***

## Properties

### Text

The [Text][Text Property] to remove the text from.
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Default Value | `($)Text` with value `""` |

### Start Index

The [Start Index][StartIndex Property] used to remove the text. This is an inclusive index, which means the character at the specified index will be included.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)StartIndex` with value `0` |

### End Index

The [End Index][EndIndex Property] used to remove the text. This is an inclusive index, which means the character at the specified index will be included.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)EndIndex` with value `0` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyValueOutOfRangeException][] | Thrown when [Text][Text Property] is `null` or empty (i.e. `""`). |
| | Thrown when [Start Index][StartIndex Property] or [End Index][EndIndex Property] is less than zero or greater than the length of [Text][Text Property] - `1`. |

## Remarks

### Start Index and End Index are inclusive

The [Start Index][StartIndex Property] and [End Index][EndIndex Property] properties are both inclusive [indexes][], which means the characters at those indexes will be included in the removed text.

### Start Index greater than End Index

[Start Index][StartIndex Property] can be greater than [End Index][EndIndex Property]. If this is the case, the values of the indexes will be swapped. See [Example][StartIndexGreaterThanEndIndex Example] above.

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] which has the text removed between the specified [Start Index][StartIndex Property] and [End Index][EndIndex Property], and re-assigns it to the variable specified in the [Text][Text Property] property.  

[Text Property]: {{< ref "#text" >}}
[StartIndex Property]: {{< ref "#start-index" >}}
[EndIndex Property]: {{< ref "#end-index" >}}

[StartIndexGreaterThanEndIndex Example]: {{< ref "#get-text-where-start-index-is-greater-than-end-index" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.Indexes.MainDoc" >}}
[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
