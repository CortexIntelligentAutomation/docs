---
title: "Contains Items With Values"
linkTitle: "Contains Items With Values"
description: "Checks if a Dictionary contains at least one item matching each of the specified values."
---

{{< figure src="/blocks/dictionaries-contains-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Dictionaries.ContainsItem.ContainsItemsWithValuesBlock`3)</p>

## Description

Checks if [Dictionary][Dictionary Property] contains at least one item matching each of the specified [Values][Values Property].

## Examples

### Dictionary contains items with Values

This example will check whether `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` contains at least one item matching each of the values in `[1, 2, 3]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Values][Values Property] | `($)Values`, with value `[1, 2, 3]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |
| [Contains Items][ContainsItems Property] | `($)ContainsItems`, with no value | `($)ContainsItems` is a variable that will be set to a [Boolean][] value |

#### Result

`{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` contains at least one item matching each of the values in `[1, 2, 3]`; it contains two items with the value `1`, two items with the value `2` and two items with the value `3`. Therefore, the variable `($)ContainsItems` will be updated to the following:

```json
true
```

***

### Dictionary does not contain items with Values

This example will check whether `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` contains at least one item matching each of the values in `[1, 2, 3, 10]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Values][Values Property] | `($)Values`, with value `[1, 2, 3, 10]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |
| [Contains Items][ContainsItems Property] | `($)ContainsItems`, with no value | `($)ContainsItems` is a variable that will be set to a [Boolean][] value |

#### Result

`{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` does not contain at least one item matching each of the values in `[1, 2, 3, 10]`; it contains two items with the value `1`, two items with the value `2` and two items with the value `3`, but no items with the value `10`. Therefore, the variable `($)ContainsItems` will be updated to the following:

```json
false
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to check whether it contains at least one item matching each of the specified [Values][Values Property].

Items are considered matching if they have a value matching one of the specified [Values][Values Property].

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Dictionary` with value `{}` |

### Values

The [Values][Values Property] to check for matching items.

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Values` with value `[]` |

### Contains Items

The result of the contains items check.

If [Dictionary][Dictionary Property] contains at least one item matching each of the specified [Values][Values Property], the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)ContainsItems` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] or [Values][Values Property] are `null`. |

## Remarks

### Item Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Empty Dictionary

If [Dictionary][Dictionary Property] is empty (i.e. `{}`), the variable specified in the [Contains Items][ContainsItems Property] property is set to `false`.

### Empty Values

If [Values][Values Property] is empty (i.e. `[]`), the variable specified in the [Contains Items][ContainsItems Property] property is set to `false`.

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Create a Dictionary&lt;TKey, TItem&gt;][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Values Property]: {{< ref "#values" >}}
[ContainsItems Property]: {{< ref "#contains-items" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[Dictionary Literals]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DictionaryLiteral" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.Generics.MainDoc" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
