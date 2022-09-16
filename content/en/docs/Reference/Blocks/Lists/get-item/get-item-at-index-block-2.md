---
title: "Get Item At Index"
linkTitle: "Get Item At Index"
description: "Gets the item at the specified index of a List."
---

{{< figure src="/blocks/lists-get-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Lists.GetItem.GetItemAtIndexBlock`2)</p>

## Description

Gets the [Item][Item Property] at the specified [Index][Index Property] of a [List][List Property].

## Examples

### Get the Item at the first Index (i.e. `0`) of a List

This example will get the item at index `0` of `["Some Text", 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Index][Index Property] | `($)Index`, with value `0` | `($)Index` is a variable of type [Int32][] |
| [Item][Item Property] | `($)Item`, with no value | `($)Item` is a variable that will be set to the type of the item (i.e. [String]) |

#### Result

Getting the item at index `0` of `["Some Text", 1]` results in the variable `($)Item` being updated to the following:

```json
"Some Text"
```

***

### Get the Item at the last Index (i.e. Index equals count of items - `1`) of a List

This example will get the item at index `1` of `["Some Text", 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Index][Index Property] | `($)Index`, with value `1` | `($)Index` is a variable of type [Int32][] |
| [Item][Item Property] | `($)Item`, with no value | `($)Item` is a variable that will be set to the type of the item (i.e. [Int32]) |

#### Result

Getting the item at index `1` of `["Some Text", 1]` results in the variable `($)Item` being updated to the following:

```json
1
```

***

## Properties

### List

The [List][List Property] to get the item from.  

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items in the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)List` with value `[]` |

### Index

The [Index][Index Property] to get the item at.

Valid values are between and including `0` and the total count of items in the [List][List Property] - `1`.

For information about what an index is, please see [Indexes][].  

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Index` with value `0` |

### Item

The [Item][Item Property] at the specified [Index][Index Property] of [List][List Property].  
  
| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Output][] |
| Default Value | `($)Item` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [List][List Property] is `null`. |
| [PropertyValueOutOfRangeException][] | Thrown when [List][List Property] contains no items. |
| | Thrown when [Index][Index Property] is out of the range of the list indexes. Valid indexes are between and including `0` and the count of items in the [List][List Property] - `1`. |

## Remarks

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Index Property]: {{< ref "#index" >}}
[Item Property]: {{< ref "#item" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Create a List&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
