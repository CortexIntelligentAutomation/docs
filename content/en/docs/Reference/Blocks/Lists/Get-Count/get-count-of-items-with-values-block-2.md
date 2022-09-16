---
title: "Get Counts Of Items With Values"
linkTitle: "Get Counts Of Items With Values"
description: "Gets the counts of items in a List matching each of the specified values."
---

{{< figure src="/blocks/lists-get-count-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Lists.GetCount.GetCountsOfItemsWithValuesBlock`2)</p>

## Description

Gets the [Counts][Counts Property] of items in a [List][List Property] matching each of the specified [Values][Values Property].

## Examples

### Get Counts of items in a List matching each of the Values

This example will get the counts of items in `["Some Text", 1]` matching each of the values `[1, 2, 3]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Values][Values Property] | `($)Values`, with value `[1, 2, 3]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |
| [Counts][Counts Property] | `($)Counts`, with no value | `($)Counts` is a variable that will be set to an [IList][]&lt;[Int32][]&gt; value |

#### Result

Getting the counts of items in `["Some Text", 1]` matching each of the values `[1, 2, 3]` results in the variable `($)Counts` being updated to the following:

```json
[1, 0, 0]
```

The counts of items matching each value are added to `($)Counts` at the same [index][Indexes] the value is in `($)Values`. In this example, there is one item matching the first value `1`, zero items matching the second value `2` and zero items matching the third value `3`, resulting in `($)Counts` being set to `[1, 0, 0]`.

***

## Properties

### List

The [List][List Property] to get the [Counts][Counts Property] of items matching each of the specified [Values][Values Property] for.  

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items in the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)List` with no value |

### Values

The [Values][Values Property] items must match to be included in the [Counts][Counts Property].

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Counts

The [Counts][Counts Property] of items in [List][List Property] matching each of the specified [Values][Values Property].

For each value in [Values][Values Property], [Counts][Counts Property] will have a corresponding item whose value is the count of items in [List][List Property] matching the value.

I.e. The count of items matching the first value in [Values][Values Property] will be saved as the first item in [Counts][Counts Property]; the count of items matching the second value in [Values][Values Property] will be saved as the second item in [Counts][Counts Property] etc.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[Int32][]&gt; |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Counts` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [List][List Property] or [Values][Values Property] are `null`. |

## Remarks

### Item Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Empty Values

If [Values][Values Property] is empty (i.e. `[]`), the variable specified in the [Counts][Counts Property] property is set to empty (i.e. `[]`).

### No items matching a specified value in Values

If [List][List Property] does not contain items matching one of the specified [Values][Values Property], `0` is written to the corresponding item in [Counts][Counts Property] for that value.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Values Property]: {{< ref "#values" >}}
[Counts Property]: {{< ref "#counts" >}}

[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[Create a List&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[Indexes]: {{< url "Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
