---
title: "Get Items At Indexes"
linkTitle: "Get Items At Indexes"
description: "Gets the items at each of the specified indexes of a List."
---

{{< figure src="/blocks/lists-get-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.GetItem.GetItemsAtIndexesBlock`2)</p>

## Description

Gets the [Items][Items Property] at each of the specified [Indexes][Indexes Property] of a [List][List Property].

## Examples

### Get Items at the first and third Indexes (i.e. [`0`, `2`]) of a List

This example will get items at indexes `0` and `2` of `["Some Text", 1, "Some More Text", 2]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1, "Some More Text", 2]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Indexes][Indexes Property] | `($)Indexes`, with value [`0`, `2`] | `($)Indexes` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |
| [Items][Items Property] | `($)Items`, with no value | `($)Items` is a variable that will be set to an [IList][]&lt;[dynamic][]&gt; value |

#### Result

Getting items at indexes `0` and `2` of `["Some Text", 1, "Some More Text", 2]` results in the variable `($)Items` being updated to the following:

```json
["Some Text", "Some More Text"]
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

### Indexes

The [Indexes][Indexes Property] of the [Items][Items Property] to get.

Valid values are between and including `0` and the total count of items in the [List][List Property] - `1`.

For information about what an index is, please see [Indexes][].  

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[Int32][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Indexes` with value `[]` |

### Items

The [Items][Items Property] at the specified [Indexes][Indexes Property] of [List][List Property].

[Items][Items Property] will be in the order they are defined in [Indexes][Indexes Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Output][] |
| Default Value | `($)Items` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [DuplicateValueException][] | Thrown when [Indexes][Indexes Property] contains duplicate values. |
| [PropertyNullException][] | Thrown when [List][List Property] or [Indexes][Indexes Property] is `null`. |
| [PropertyValueOutOfRangeException][] | Thrown when [Indexes][Indexes Property] contains no values. |
| | Thrown when any index in [Indexes][Indexes Property] is less than `0` or greater than the count of items in [List][List Property] - `1`. |

## Remarks

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [List Literals][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [List Expressions][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Indexes Property]: {{< ref "#indexes" >}}
[Items Property]: {{< ref "#items" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.Indexes.MainDoc" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[List Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListLiterals" >}}
[List Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListExpressions" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[DuplicateValueException]: {{< url "Cortex.Reference.Exceptions.Lists.DuplicateValueException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.MostCommon.IEnumerable" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
