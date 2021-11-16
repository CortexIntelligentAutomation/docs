---
title: "Get Items At Beginning"
linkTitle: "Get Items At Beginning"
description: "Gets a count of items at the beginning of a List."
---

![Icon](/blocks/lists-get-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.GetItem.GetItemsAtBeginningBlock`2)</p>

## Description

Gets the specified [Count][Count Property] of [Items][Items Property] at the beginning of a [List][List Property].

## Examples

### Get Count of Items at the beginning of a List

This example will get `2` items at the beginning of `["Some Text", 1, "Some More Text", 2]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1, "Some More Text", 2]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Count][Count Property] | `($)Count`, with value `2` | `($)Count` is a variable of type [Int32][] |
| [Items][Items Property] | `($)Items`, with no value | `($)Items` is a variable that will be set to an [IList][]&lt;[dynamic][]&gt; value |

#### Result

Getting `2` items from the beginning of `["Some Text", 1, "Some More Text", 2]` results in the variable `($)Items` being updated to the following:

```json
["Some Text", 1]
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
| Default Value | `($)List` with value `[]` |

### Count

The [Count][Count Property] of [Items][Items Property] to get.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Count` with value `0` |

### Items

The [Items][Items Property] at the beginning of [List][List Property].

[Items][Items Property] will be in the same order they are defined in [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Output][] |
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

For information about how to define lists using literal syntax, see [List Literals][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [List Expressions][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Count Property]: {{< ref "#count" >}}
[Items Property]: {{< ref "#items" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[List Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListLiterals" >}}
[List Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListExpressions" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[Dynamic]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dynamic" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
