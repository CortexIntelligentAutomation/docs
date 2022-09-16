---
title: "Get Items At End"
linkTitle: "Get Items At End"
description: "Gets a count of items at the end of a List."
---

{{< figure src="/blocks/lists-get-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Lists.GetItem.GetItemsAtEndBlock`2)</p>

## Description

Gets the specified [Count][Count Property] of [Items][Items Property] at the end of a [List][List Property].

## Examples

### Get Count of Items at the end of a List

This example will get `2` items at the end of `["Some Text", 1, "Some More Text", 2]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1, "Some More Text", 2]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Count][Count Property] | `($)Count`, with value `2` | `($)Count` is a variable of type [Int32][] |
| [Items][Items Property] | `($)Items`, with no value | `($)Items` is a variable that will be set to an [IList][]&lt;[dynamic][]&gt; value |

#### Result

Getting `2` items from the end of `["Some Text", 1, "Some More Text", 2]` results in the variable `($)Items` being updated to the following:

```json
["Some More Text", 2]
```

***

## Properties

### List

The [List][List Property] to get the [Items][Items Property] from.  

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items in the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)List` with no value |

### Count

The [Count][Count Property] of [Items][Items Property] to get.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Literal][] |
| Default Value | `-1` |

### Items

The [Items][Items Property] at the end of [List][List Property].

[Items][Items Property] will be in the same order they are defined in [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Output][] |
| Is Advanced | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Items` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [List][List Property] is `null`. |
| [PropertyValueOutOfRangeException][] | Thrown when [Count][Count Property] is greater than the count of items in the [List][List Property] - `1`. |

## Remarks

### Negative Count

If [Count][Count Property] is negative, [Items][Items Property] contains all items in the [List][List Property].

### Zero Count

If [Count][Count Property] is `0`, [Items][Items Property] is set to an empty list (i.e. `[]`).

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Count Property]: {{< ref "#count" >}}
[Items Property]: {{< ref "#items" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Create a List&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
