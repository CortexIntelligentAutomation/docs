---
title: "Get Count Of All Items"
linkTitle: "Get Count Of All Items"
description: "Gets the count of all items in a List."
---

{{< figure src="/blocks/lists-get-count-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.GetCount.GetCountOfAllItemsBlock`2)</p>

## Description

Gets the [Count][Count Property] of all items in a [List][List Property].

## Examples

### Get Count of all items in a List

This example will get the count of all items in `["Some Text", 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Count][Count Property] | `($)Count`, with no value | `($)Count` is a variable that will be set to an [Int32][] value |

#### Result

Getting the count of all items in `["Some Text", 1]` results in the variable `($)Count` being updated to the following:

```json
2
```

***

## Properties

### List

The [List][List Property] to get the [Count][Count Property] of all items for.  

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items in the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)List` with value `[]` |

### Count

The [Count][Count Property] of all items in [List][List Property].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Output][] |
| Default Value | `($)Count` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [List][List Property] is `null`. |

## Remarks

### Empty List

If [List][List Property] is empty (i.e. `[]`), the variable specified in the [Count][Count Property] property is set to `0`.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Count Property]: {{< ref "#count" >}}

[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}
[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[Create a List&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
