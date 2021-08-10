---
title: "Get Text Between Indexes"
linkTitle: "Get Text Between Indexes"
description: "Gets text between a specified start index and end index of a given text."
---

![Icon](/blocks/text-get-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Get.GetTextBetweenIndexesBlock)</p>

## Description

Gets [text][TextBetweenIndexes Property] between a specified [Start Index][StartIndex Property] and [End Index][EndIndex Property] of a given [Text][Text Property].

## Examples

### Get text between a specified Start Index and End Index of a given Text

This example will get all characters between start index `0` and end index `3` of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Start Index][StartIndex Property] | `($)StartIndex`, with value `0` | `($)StartIndex` is a variable of type [Int32][] |
| [End Index][EndIndex Property] | `($)EndIndex`, with value `3` | `($)EndIndex` is a variable of type [Int32][] |
| [Text Between Indexes][TextBetweenIndexes Property] | `($)TextBetweenIndexes`, with no value | `($)TextBetweenIndexes` is a variable that will be set to a [String][] |

#### Result

`"A"` is at index `0` and `"D"` is at index `3` in `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`. Therefore, getting all characters between (and including) start index `0` and end index `3` results in the variable `($)TextBetweenIndexes` being updated to the following:

```json
"ABCD"
```

***

### Get text where Start Index is greater than End Index

This example will get all characters between start index `3` and end index `0` of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Start Index][StartIndex Property] | `($)StartIndex`, with value `3` | `($)StartIndex` is a variable of type [Int32][] |
| [End Index][EndIndex Property] | `($)EndIndex`, with value `0` | `($)EndIndex` is a variable of type [Int32][] |
| [Text Between Indexes][TextBetweenIndexes Property] | `($)TextBetweenIndexes`, with no value | `($)TextBetweenIndexes` is a variable that will be set to a [String][] |

#### Result

In this example the start index `3` is greater than the end index `0`. When this occurs, the block simply swaps the indexes before it processes the text.

Therefore, having start index `3` and end index `0` is the same as having start index `0` and end index `3`.

`"A"` is at index `0` and `"D"` is at index `3` in `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

Therefore, getting all characters between (and including) start index `3` and end index `0`, or start index `0` and end index `3`, results in the variable `($)TextBetweenIndexes` being updated to the following:

```json
"ABCD"
```

***

## Properties

### Text

The [Text][Text Property] to get the [Text Between Indexes][TextBetweenIndexes Property] from.
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Text` with value `""` |

### Start Index

The [Start Index][StartIndex Property] used to get the text. This is an inclusive index, which means the character at the specified index will be included.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)StartIndex` with value `0` |

### End Index

The [End Index][EndIndex Property] used to get the text. This is an inclusive index, which means the character at the specified index will be included.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)EndIndex` with value `0` |

### Text Between Indexes

The text between (and including) the [Start Index][StartIndex Property] and [End Index][EndIndex Property] of [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Default Value | `($)TextBetweenIndexes` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyValueOutOfRangeException][] | Thrown when the [Text][Text Property] property is `null` or empty (i.e. `""`). |
| | Thrown when the [Start Index][StartIndex Property] property or the [End Index][EndIndex Property] property is less than zero or greater than the length of [Text][Text Property] - `1`. |

## Remarks

### Start Index and End Index are inclusive

The [Start Index][StartIndex Property] and [End Index][EndIndex Property] properties are both inclusive [indexes][], which means the characters at those indexes will be included in the retrieved [text][TextBetweenIndexes Property].

### Start Index greater than End Index

[Start Index][StartIndex Property] can be greater than [End Index][EndIndex Property]. If this is the case, the values of the indexes will be swapped. See [Example][StartIndexGreaterThanEndIndex Example] above.

[Text Property]: {{< ref "#text" >}}
[StartIndex Property]: {{< ref "#start-index" >}}
[EndIndex Property]: {{< ref "#end-index" >}}
[TextBetweenIndexes Property]: {{< ref "#text-between-indexes" >}}

[StartIndexGreaterThanEndIndex Example]: {{< ref "#get-text-where-start-index-is-greater-than-end-index" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.Indexes.MainDoc" >}}
[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
