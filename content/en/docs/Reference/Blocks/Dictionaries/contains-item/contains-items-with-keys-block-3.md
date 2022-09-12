---
title: "Contains Items With Keys"
linkTitle: "Contains Items With Keys"
description: "Checks if a Dictionary contains at least one item with each of the specified keys."
---

{{< figure src="/blocks/dictionaries-contains-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Dictionaries.ContainsItem.ContainsItemsWithKeysBlock`3)</p>

## Description

Checks if [Dictionary][Dictionary Property] contains at least one item with each of the specified [Keys][Keys Property].

## Examples

### Dictionary contains items with Keys

This example will check whether `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` contains at least one item with each of the keys in `["Key1", "Key2", "Key3"]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Keys][Keys Property] | `($)Keys`, with value `["Key1", "Key2", "Key3"]` | `($)Keys` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Contains Items][ContainsItems Property] | `($)ContainsItems`, with no value | `($)ContainsItems` is a variable that will be set to a [Boolean][] value |

#### Result

`{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` contains at least one item matching each of the values in `["Key1", "Key2", "Key3"]`; it contains one item with the key `"Key1"`, one item with the key `"Key2"` and one item with the key `"Key3"`. Therefore, the variable `($)ContainsItems` will be updated to the following:

```json
true
```

***

### Dictionary does not contain items with Keys

This example will check whether `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` contains at least one item with each of the keys in `["Key1", "Key2", "Key3", "Key10"]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Keys][Keys Property] | `($)Keys`, with value `["Key1", "Key2", "Key3", "Key10"]` | `($)Keys` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Contains Items][ContainsItems Property] | `($)ContainsItems`, with no value | `($)ContainsItems` is a variable that will be set to a [Boolean][] value |

#### Result

`{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` does not contain at least one item matching each of the values in `["Key1", "Key2", "Key3"]`; it contains one item with the key `"Key1"`, one item with the key `"Key2"` and one item with the key `"Key3"`, but no items with the key `"Key10"`. Therefore, the variable `($)ContainsItems` will be updated to the following:

```json
false
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to check whether it contains at least one item with each of the specified [Keys][Keys Property].

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Dictionary` with value `{}` |

### Keys

The [Keys][Keys Property] to check for matching items.

For information and examples of how it is determined whether an item has a specified key, please see [Object Equality][].

For information about what a key is, please see [Keys][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TKey][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Keys` with value `[]` |

### Contains Items

The result of the contains items check.

If [Dictionary][Dictionary Property] contains at least one item with each of the specified [Keys][Keys Property], the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)ContainsItems` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentNullException][] | Thrown when any key in [Keys][Keys Property] is `null`|
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] or [Keys][Keys Property] are `null`. |

## Remarks

### Key Equality

For information and examples of how it is determined whether an item has a specified key, please see [Object Equality][].

### Empty Dictionary

If [Dictionary][Dictionary Property] is empty (i.e. `{}`), the variable specified in the [Contains Items][ContainsItems Property] property is set to `false`.

### Empty Keys

If [Keys][Keys Property] is empty (i.e. `[]`), the variable specified in the [Contains Items][ContainsItems Property] property is set to `false`.

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Create a Dictionary&lt;TKey, TItem&gt;][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Keys Property]: {{< ref "#keys" >}}
[ContainsItems Property]: {{< ref "#contains-items" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Keys]: {{< url "Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[Dictionary Literals]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DictionaryLiteral" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.Generics.MainDoc" >}}

[ArgumentNullException]: {{< url "MSDocs.DotNet.Api.System.ArgumentNullException" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
