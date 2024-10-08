---
title: "Get Text At End"
linkTitle: "Get Text At End"
description: "Gets a length of text from the end of a given text."
---

{{< figure src="/blocks/Cortex_Blocks_Text_GetText_GetTextAtEndBlock.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.GetText.GetTextAtEndBlock)</p>

## Description

Gets a [Length][Length Property] of [text][TextAtEnd Property] from the end of a given [Text][Text Property].

## Examples

### Get a Length of text from the end of a given Text

This example will get the last `3` characters from the end of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Length][Length Property] | `($)Length`, with value `3` | `($)Length` is a variable of type [Int32][] |
| [Text At End][TextAtEnd Property] | `($)TextAtEnd`, with no value | `($)TextAtEnd` is a variable that will be set to a [String][] |

#### Result

Getting the last `3` characters from the end of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` results in the variable `($)TextAtEnd` being updated to the following:

```json
"XYZ"
```

***

## Properties

### Text

The [Text][Text Property] to get the [Text At End][TextAtEnd Property] from.  
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Text` with no value |

### Length

The [Length][Length Property] of text to get.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `-1` |

### Text At End

The [Length][Length Property] of text at the end of [Text][Text Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)TextAtEnd` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyValueOutOfRangeException][] | Thrown when [Text][Text Property] is `null` or empty (i.e. `""`). |
| | Thrown when [Length][Length Property] is greater than the length of [Text][Text Property]. |

## Remarks

### Negative Length

If [Length][Length Property] is negative, the variable specified in the [Text At End][TextAtEnd Property] property will be set to the value of [Text][Text Property].

### Zero Length

If [Length][Length Property] is `0`, the variable specified in the [Text At End][TextAtEnd Property] property will be set to empty (i.e. `""`).

[Text Property]: {{< ref "#text" >}}
[Length Property]: {{< ref "#length" >}}
[TextAtEnd Property]: {{< ref "#text-at-end" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
