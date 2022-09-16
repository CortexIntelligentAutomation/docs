---
title: "Get Length"
linkTitle: "Get Length"
description: "Gets the length of a given text."
---

{{< figure src="/blocks/text-get-length-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.GetLength.GetLengthBlock)</p>

## Description

Gets the [Length][Length Property] of a given [Text][Text Property].

## Examples

### Get the Length of a given Text

This example will get the length of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Length][Length Property] | `($)Length`, with no value | `($)Length` is a variable that will be set to an [Int32][] |

#### Result

Getting the length of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` results in the variable `($)Length` being updated to the following:

```json
26
```

***

## Properties

### Text

The [Text][Text Property] to get the [Length][Length Property] of.  
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Text` with no value |

### Length

The [Length][Length Property] of the [Text][Text Property] (i.e. the number of characters it contains).

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Output][] |
| Is Advanced | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Length` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`) the variable specified in the [Length][Length Property] property will be set to `0`.

[Text Property]: {{< ref "#text" >}}
[Length Property]: {{< ref "#length" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
