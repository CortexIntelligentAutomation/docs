---
title: "Set Items At Indexes"
linkTitle: "Set Items At Indexes"
description: "Sets the items at each of the specified indexes of a List to new values."
---

![Icon](/blocks/lists-set-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.Set.SetItemsAtIndexesBlock`2)</p>

## Description

Sets the items at each of the specified [Indexes][Indexes Property] of a [List][List Property] to [New Values][NewValues Property].

## Examples

### Sets items at the first and third Indexes (i.e. [`0`, `2`]) of a List to New Values

This example will set items at indexes `0` and `2` of `["Some Text", 1, "Some More Text", 2]` to `["Some Modified Text", "Some More Modified Text"]` respectively.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1, "Some More Text", 2]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [New Values][NewValues Property] | `($)NewValues`, with value `["Some Modified Text", "Some More Modified Text"]` | `($)NewValues` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Indexes][Indexes Property] | `($)Indexes`, with value [`0`, `2`] | `($)Indexes` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |

#### Result

Setting items at indexes `0` and `2` of `["Some Text", 1, "Some More Text", 2]` to `["Some Modified Text", "Some More Modified Text"]` respectively, results in the variable `($)List` being updated to the following:

```json
["Some Modified Text", 1, "Some More Modified Text", 2]
```

***

## Properties

### List

The [List][List Property] to set the items in.  

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items in the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)List` with value `[]` |

### New Values

The [New Values][NewValues Property] to set the items at the specified [Indexes][Indexes Property] of [List][List Property] to.  

The number of items in [New Values][NewValues Property] must match the number of items in [Indexes][Indexes Property].

The [List][List Property] item at the first index in [Indexes][Indexes Property] will be set to the first value in [New Values][NewValues Property]; the [List][List Property] item at the second index in [Indexes][Indexes Property] will be set to the second value in [New Values][NewValues Property] etc.

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)NewValues` with value `[]` |

### Indexes

The [Indexes][Indexes Property] of the items to set.

Valid values are between and including `0` and the total count of items in the [List][List Property] - `1`.

For information about what an index is, please see [Indexes][].  

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[Int32][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Indexes` with value `[]` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyListException][] | Thrown when [List][List Property] is read-only. |
| [DuplicateValueException][] | Thrown when [Indexes][Indexes Property] contains duplicate values. |
| [PropertyItemCountException][] | Thrown when the count of items in [New Values][NewValues Property] and the count of items in [Indexes][Indexes Property] are not the same. |
| [PropertyNullException][] | Thrown when [List][List Property] or [New Values][NewValues Property] or [Indexes][Indexes Property] is `null`. |
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
[NewValues Property]: {{< ref "#new-values" >}}
[Indexes Property]: {{< ref "#indexes" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.Indexes.MainDoc" >}}

[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[List Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListLiterals" >}}
[List Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListExpressions" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[DuplicateValueException]: {{< url "Cortex.Reference.Exceptions.Lists.DuplicateValueException.MainDoc" >}}
[PropertyItemCountException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyItemCountException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[Dynamic]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dynamic" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.MostCommon.IEnumerable" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
