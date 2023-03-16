---
title: "Contains Items With Values"
linkTitle: "Contains Items With Values"
description: "Checks if a List contains at least one item matching each of the specified values."
---

{{< figure src="/blocks/lists-contains-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Lists.ContainsItem.ContainsItemsWithValuesBlock`2)</p>

## Description

Checks if [List][List Property] contains at least one item matching each of the specified [Values][Values Property].

## Examples

### List contains items with Values

This example will check whether `[1, 2, 3, 3, 2, 1]` contains at least one item matching each of the values in `[1, 2, 3]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[1, 2, 3, 3, 2, 1]` | `($)List` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Values][Values Property] | `($)Values`, with value `[1, 2, 3]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |
| [Contains Items][ContainsItems Property] | `($)ContainsItems`, with no value | `($)ContainsItems` is a variable that will be set to a [Boolean][] value |

#### Result

`[1, 2, 3, 3, 2, 1]` contains at least one item matching each of the values in `[1, 2, 3]`; it contains two items with the value `1`, two items with the value `2` and two items with the value `3`. Therefore, the variable `($)ContainsItems` will be updated to the following:

```json
true
```

***

### List does not contain items with Values

This example will check whether `[1, 2, 3, 3, 2, 1]` contains at least one item matching each of the values in `[1, 2, 3, 10]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[1, 2, 3, 3, 2, 1]` | `($)List` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Values][Values Property] | `($)Values`, with value `[1, 2, 3, 10]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |
| [Contains Items][ContainsItems Property] | `($)ContainsItems`, with no value | `($)ContainsItems` is a variable that will be set to a [Boolean][] value |

#### Result

`[1, 2, 3, 3, 2, 1]` does not contain at least one item matching each of the values in `[1, 2, 3, 10]`; it contains two items with the value `1`, two items with the value `2` and two items with the value `3`, but no items with the value `10`. Therefore, the variable `($)ContainsItems` will be updated to the following:

```json
false
```

***

## Properties

### List

The [List][List Property] to check whether it contains at least one item matching each of the specified [Values][Values Property].

Items are considered matching if they have a value matching one of the specified [Values][Values Property].

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items in the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)List` with no value |

### Values

The [Values][Values Property] to check for matching items.

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Contains Items

The result of the contains items check.

If [List][List Property] contains at least one item matching each of the specified [Values][Values Property], the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)ContainsItems` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [List][List Property] or [Values][Values Property] are `null`. |

## Remarks

### Item Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Empty List

If [List][List Property] is empty (i.e. `[]`), the variable specified in the [Contains Items][ContainsItems Property] property is set to `false`.

### Empty Values

If [Values][Values Property] is empty (i.e. `[]`), the variable specified in the [Contains Items][ContainsItems Property] property is set to `false`.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Values Property]: {{< ref "#values" >}}
[ContainsItems Property]: {{< ref "#contains-items" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Create a List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Lists]: {{< url path="Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
