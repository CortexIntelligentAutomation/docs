---
title: "Remove Items At Indexes"
linkTitle: "Remove Items At Indexes"
description: "Removes the items at each of the specified indexes of a List."
---

{{< figure src="/blocks/lists-remove-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.RemoveItem.RemoveItemsAtIndexesBlock`2)</p>

## Description

Removes the items at each of the specified [Indexes][Indexes Property] of a [List][List Property].

## Examples

### Remove items at the first and third Indexes (i.e. [`0`, `2`]) of a List

This example will remove items at indexes `0` and `2` of `["Some Text", 1, "Some More Text", 2]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1, "Some More Text", 2]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Indexes][Indexes Property] | `($)Indexes`, with value [`0`, `2`] | `($)Indexes` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |

#### Result

Removing items at indexes `0` and `2` of `["Some Text", 1, "Some More Text", 2]` results in the variable `($)List` being updated to the following:

```json
[1, 2]
```

***

## Properties

### List

The [List][List Property] where the items are removed from.  

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items that can be removed from the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)List` with value `[]` |

### Indexes

The [Indexes][Indexes Property] of the items to remove.

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
| [PropertyNullException][] | Thrown when [List][List Property] or [Indexes][Indexes Property] is `null`. |
| [PropertyValueOutOfRangeException][] | Thrown when [Indexes][Indexes Property] contains no values. |
| | Thrown when any index in [Indexes][Indexes Property] is less than `0` or greater than the count of items in [List][List Property] - `1`. |

## Remarks

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Indexes Property]: {{< ref "#indexes" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.Indexes.MainDoc" >}}

[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[Create a List&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[DuplicateValueException]: {{< url "Cortex.Reference.Exceptions.Lists.DuplicateValueException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
