---
title: "Remove Text At Index"
linkTitle: "Remove Text At Index"
description: "Removes a length of text at the specified index of a given text."
---

{{< figure src="/blocks/text-remove-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.RemoveText.RemoveTextAtIndexBlock)</p>

## Description

Removes a [Length][Length Property] of text at the specified [Index][Index Property] of a given [Text][Text Property].

## Examples

### Remove a Length of text at the specified Index of a given Text

This example will remove `3` characters at index `3` of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Index][Index Property] | `($)Index`, with value `3` | `($)Index` is a variable of type [Int32][] |
| [Length][Length Property] | `($)Length`, with value `3` | `($)Length` is a variable of type [Int32][] |

#### Result

`"D"` is at index `3` in `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`. Therefore, removing `3` characters at (and including) index `3` results in the variable `($)Text` being updated to the following:

```json
"ABCGHIJKLMNOPQRSTUVWXYZ"
```

***

## Properties

### Text

The [Text][Text Property] to remove the [Length][Length Property] of text from.
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Text` with no value |

### Index

The [Index][Index Property] to remove the text from. This is an inclusive index, which means the character at the specified index will be included.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `0` |

### Length

The [Length][Length Property] of text to remove.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `-1` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyValueOutOfRangeException][] | Thrown when [Text][Text Property] is `null` or empty (i.e. `""`). |
| | Thrown when [Index][Index Property] is less than zero or greater than the length of [Text][Text Property] - `1`. |
| | Thrown when [Index][Index Property] + a positive [Length][Length Property] is greater than the length of [Text][Text Property] - `1`. |

## Remarks

### Negative Length

A negative [Length][Length Property] can be used to remove all text at and after the [Index][Index Property] of [Text][Text Property].

### Zero Length

If [Length][Length Property] is `0`, no text will be removed and the variable specified in the [Text][Text Property] property will remain unchanged.

### Index is inclusive

The [Index][Index Property] property is an inclusive [index][Indexes], which means the character at the index will be included in the removed text.

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] which has the [Length][Length Property] of text removed at the specified [Index][Index Property] and re-assigns it to the variable specified in the [Text][Text Property] property.  

[Text Property]: {{< ref "#text" >}}
[Index Property]: {{< ref "#index" >}}
[Length Property]: {{< ref "#length" >}}

[Indexes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
