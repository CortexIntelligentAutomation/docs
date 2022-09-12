---
title: "Add Item At Index"
linkTitle: "Add Item At Index"
description: "Adds an Item at the specified Index of a List."
---

{{< figure src="/blocks/lists-add-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Lists.AddItem.AddItemAtIndexBlock`2)</p>

## Description

Adds an [Item][Item Property] at the specified [Index][Index Property] of a [List][List Property].

## Examples

### Add an Item at the first Index (i.e. `0`) of an empty List

This example will add `"New Item"` at index `0` of `[]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Item][Item Property] | `($)Item`, with value `"New Item"` | `($)Item` is a variable of type [String][] |
| [Index][Index Property] | `($)Index`, with value `0` | `($)Index` is a variable of type [Int32][] |

#### Result

Adding `"New Item"` at index `0` of `[]` results in the variable `($)List` being updated to the following:

```json
["New Item"]
```

***

### Add an Item at the first Index (i.e. `0`) of a List

This example will add `"New Item"` at index `0` of `["Some Text", 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Item][Item Property] | `($)Item`, with value `"New Item"` | `($)Item` is a variable of type [String][] |
| [Index][Index Property] | `($)Index`, with value `0` | `($)Index` is a variable of type [Int32][] |

#### Result

Adding `"New Item"` at index `0` of `["Some Text", 1]` results in the variable `($)List` being updated to the following:

```json
["New Item", "Some Text", 1]
```

***

### Add an Item at the end (i.e. Index equals count of items) of a List

This example will add `"New Item"` at index `2` of `["Some Text", 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Item][Item Property] | `($)Item`, with value `"New Item"` | `($)Item` is a variable of type [String][] |
| [Index][Index Property] | `($)Index`, with value `2` | `($)Index` is a variable of type [Int32][] |

#### Result

Adding `"New Item"` at index `2` of `["Some Text", 1]` results in the variable `($)List` being updated to the following:

```json
["Some Text", 1, "New Item"]
```

***

## Properties

### List

The [List][List Property] where the [Item][Item Property] is added.  

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items that can be added to the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)List` with value `[]` |

### Item

The [Item][Item Property] to be added at the specified [Index][Index Property] of the [List][List Property].

| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Default Value | `($)Item` with value `null` |

### Index

The [Index][Index Property] to add the [Item][Item Property] at.  

Valid values are between and including `0` and the total count of items in the [List][List Property].

For information about what an index is, please see [Indexes][].  

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Index` with value `0` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyListException][] | Thrown when [List][List Property] is read-only. |
| [InvalidPropertyValueException][] | Thrown when [Item][Item Property] is `null` and [List][List Property] only accepts non-nullable value types. See [Value Is Invalid][]. |
| [PropertyNullException][] | Thrown when [List][List Property] is `null`. |
| [PropertyValueOutOfRangeException][] | Thrown when [Index][Index Property] is out of the range of the list indexes. Valid indexes are between and including `0` and the count of items in the [List][List Property]. |

## Remarks

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Item Property]: {{< ref "#item" >}}
[Index Property]: {{< ref "#index" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Create a List&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.WorkingWith.DataTypes.Generics.MainDoc" >}}

[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}

[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
