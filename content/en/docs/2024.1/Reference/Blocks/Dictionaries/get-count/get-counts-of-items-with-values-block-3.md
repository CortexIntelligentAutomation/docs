---
title: "Get Counts Of Items With Values"
linkTitle: "Get Counts Of Items With Values"
description: "Gets the counts of items in a Dictionary matching each of the specified values."
---

{{< figure src="/blocks/dictionaries-get-count-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Dictionaries.GetCount.GetCountsOfItemsWithValuesBlock`3)</p>

## Description

Gets the [Counts][Counts Property] of items in a [Dictionary][Dictionary Property] matching each of the specified [Values][Values Property].

## Examples

### Get Counts of items in a Dictionary matching each of the Values

This example will get the counts of items in `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` matching each of the values `[1, 2, 3]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Values][Values Property] | `($)Values`, with value `[1, 2, 3]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |
| [Counts][Counts Property] | `($)Counts`, with no value | `($)Counts` is a variable that will be set to an [IList][]&lt;[Int32][]&gt; value |

#### Result

Getting the counts of items in `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` matching each of the values `[1, 2, 3]` results in the variable `($)Counts` being updated to the following:

```json
[2, 2, 2]
```

The counts of items matching each value are added to `($)Counts` at the same [index][Indexes] the value is in `($)Values`. In this example, there are two items matching the first value `1`, two items matching the second value `2` and two items matching the third value `3`, resulting in `($)Counts` being set to `[2, 2, 2]`.

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to get the [Counts][Counts Property] of items matching each of the specified [Values][Values Property] for.  

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Dictionary` with no value |

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

The [Counts][Counts Property] of items in [Dictionary][Dictionary Property] matching each of the specified [Values][Values Property].

For each value in [Values][Values Property], [Counts][Counts Property] will have a corresponding item whose value is the count of items in [Dictionary][Dictionary Property] matching the value.

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
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] or [Values][Values Property] are `null`. |

## Remarks

### Item Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Empty Values

If [Values][Values Property] is empty (i.e. `[]`), the variable specified in the [Counts][Counts Property] property is set to empty (i.e. `[]`).

### No items matching a specified value in Values

If [Dictionary][Dictionary Property] does not contain items matching one of the specified [Values][Values Property], `0` is written to the corresponding item in [Counts][Counts Property] for that value.

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Create a Dictionary&lt;TKey, TItem&gt;][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Values Property]: {{< ref "#values" >}}
[Counts Property]: {{< ref "#counts" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Dictionary Literals]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DictionaryLiteral" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Dictionaries]: {{< url path="Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[TItem]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[Indexes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
