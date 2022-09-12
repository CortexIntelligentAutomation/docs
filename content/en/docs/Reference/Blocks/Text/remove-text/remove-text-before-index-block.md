---
title: "Remove Text Before Index"
linkTitle: "Remove Text Before Index"
description: "Removes a length of text before the specified index of a given text."
---

{{< figure src="/blocks/text-remove-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.RemoveText.RemoveTextBeforeIndexBlock)</p>

## Description

Removes a [Length][Length Property] of text before the specified [Index][Index Property] of a given [Text][Text Property].

## Examples

### Remove a Length of text before the specified Index of a given Text

This example will remove `3` characters before index `3` of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Index][Index Property] | `($)Index`, with value `3` | `($)Index` is a variable of type [Int32][] |
| [Length][Length Property] | `($)Length`, with value `3` | `($)Length` is a variable of type [Int32][] |

#### Result

`"D"` is at index `3` in `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`. Therefore, removing `3` characters before index `3` results in the variable `($)Text` being updated to the following:

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

### Index

The [Index][Index Property] to remove the text before. This is an exclusive index, which means the character at the specified index won't be included.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Index` with value `0` |

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
| [PropertyValueOutOfRangeException][] | Thrown when [Text][Text Property] is `null` or empty (i.e. `""`). |
| | Thrown when [Index][Index Property] is less than `1` or greater than the length of [Text][Text Property] - `1`. |
| | Thrown when [Index][Index Property] - a positive [Length][Length Property] is less than `1`. |

## Remarks

### Negative Length

A negative [Length][Length Property] can be used to remove all text before the [Index][Index Property] of [Text][Text Property].

### Zero Length

If [Length][Length Property] is `0`, the variable specified in the [Text][Text Property] property will be set to empty (i.e. `""`).

### Index is exclusive

The [Index][Index Property] property is an exclusive [index][Indexes], which means the character at the index will not be included in the removed text.

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] which has the [Length][Length Property] of text removed before the specified [Index][Index Property] and re-assigns it to the variable specified in the [Text][Text Property] property.  

[Text Property]: {{< ref "#text" >}}
[Index Property]: {{< ref "#index" >}}
[Length Property]: {{< ref "#length" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
