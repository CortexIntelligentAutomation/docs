---
title: "Set Items At Index"
linkTitle: "Set Items At Index"
description: "Sets the items at the specified index of a List to new values."
---

{{< figure src="/blocks/lists-set-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Lists.SetItem.SetItemsAtIndexBlock`2)</p>

## Description

Sets the items at the specified [Index][Index Property] of a [List][List Property] to [New Values][NewValues Property].

## Examples

### Set the Items at the first Index (i.e. `0`) of a List to New Values

This example will set the 2 items starting at index `0` of `["Some Text", 1, "Some More Text", 2]` to `["Some Modified Text", 10]` respectively.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1, "Some More Text", 2]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [New Values][NewValues Property] | `($)NewValues`, with value `["Some Modified Text", 10]` | `($)NewValues` is a variable of type [IEnumerable][]&lt;[dynamic][]&gt; |
| [Index][Index Property] | `($)Index`, with value `0` | `($)Index` is a variable of type [Int32][] |

#### Result

Setting the two items at index `0` of `["Some Text", 1, "Some More Text", 2]` to `["Some Modified Text", 10]` respectively, results in the variable `($)List` being updated to the following:

```json
["Some Modified Text", 10, "Some More Text", 2]
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

The [New Values][NewValues Property] to set the items at the specified [Index][Index Property] of [List][List Property] to.  

The number of items in [New Values][NewValues Property] determines the number of items that will be set at the end of [List][List Property]. One item means one item is set, two items means two items are set etc.

The item at [Index][Index Property] of [List][List Property] will be set to the first value in [New Values][NewValues Property]; the item at [Index][Index Property] + `1` of [List][List Property] will be set to the second value in [New Values][NewValues Property] etc.

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)NewValues` with value `[]` |

### Index

The [Index][Index Property] to start setting the items at. This is an inclusive index, which means the item at the specified index will be included.

Valid values are between and including `0` and the total count of items in the [List][List Property] - `1`.

For information about what an index is, please see [Indexes][].  

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Index` with value `0` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|-------------|
| [CannotModifyReadOnlyListException][] | Thrown when [List][List Property] is read-only. |
| [PropertyEmptyException][] | Thrown when [New Values][NewValues Property] contains no items. |
| [PropertyNullException][] | Thrown when [List][List Property] or [New Values][NewValues Property] is `null`. |
| [PropertyValueOutOfRangeException][] | Thrown when [Index][Index Property] is less than `0` or greater than the count of items in [List][List Property] - `1`. |
| | Thrown when [Index][Index Property] + count of items in [New Values][NewValues Property] is greater than the count of items in the [List][List Property] - `1`. |

## Remarks

### Index is inclusive

The [Index][Index Property] is an inclusive [index][Indexes], which means the item at the index will be included in the set items.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[NewValues Property]: {{< ref "#new-values" >}}
[Index Property]: {{< ref "#index" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}

[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[Create a List&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.Generics.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
