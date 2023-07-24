---
title: "Add Item With Key"
linkTitle: "Add Item With Key"
description: "Adds an item to a Dictionary with the specified key."
---

{{< figure src="/blocks/dictionaries-add-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Dictionaries.AddItem.AddItemWithKeyBlock`3)</p>

## Description

Adds an [Item][Item Property] to a [Dictionary][Dictionary Property] with the specified [Key][Key Property].

## Examples

### Add an Item to an empty Dictionary

This example will add `1` to `{}` with a key of `"Key1"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[dynamic][], [dynamic][]&gt; |
| [Key][Key Property] | `($)Key`, with value `"Key1"` | `($)Key` is a variable of type [String][] |
| [Item][Item Property] | `($)Item`, with value `1` | `($)Item` is a variable of type [Int32][] |

#### Result

Adding `1` to `{}` with a key of `"Key1"` results in the variable `($)Dictionary` being updated to the following:

```json
{"Key1" : 1}
```

***

### Add an Item to a Dictionary

This example will add `2` to `{"Key1" : 1}` with a key of `"Key2"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Key][Key Property] | `($)Key`, with value `"Key2"` | `($)Key` is a variable of type [String][] |
| [Item][Item Property] | `($)Item`, with value `2` | `($)Item` is a variable of type [Int32][] |

#### Result

Adding `2` to `{"Key1" : 1}` with a key of `"Key2"` results in the variable `($)Dictionary` being updated to the following:

```json
{"Key1" : 1, "Key2" : 2}
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] where the [Item][Item Property] is added with the specified [Key][Key Property].

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Dictionary` with no value |

### Key

The [Key][Key Property] to add the [Item][Item Property] with.

Keys cannot be `null` and must be unique within a dictionary, as they are used to lookup the item they correspond to.

For information and examples of how it is determined whether a key is already present, please see [Object Equality][].

For information about what a key is, please see [Keys][].  

| | |
|--------------------|---------------------------|
| Data Type | [TKey][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Item

The [Item][Item Property] to be added to the [Dictionary][Dictionary Property] with the specified [Key][Key Property].

| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyDictionaryException][] | Thrown when [Dictionary][Dictionary Property] is read-only. |
| [InvalidPropertyValueException][] | Thrown when [Item][Item Property] is `null` and [Dictionary][Dictionary Property] only accepts non-nullable value types. See [Value Is Invalid][]. |
| [KeyPresentException][] | Thrown when an item with the specified [Key][Key Property] is already present. |
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] or [Key][Key Property] are `null`. |

## Remarks

### Key Equality

For information and examples of how it is determined whether a key is already present, please see [Object Equality][].

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Create a Dictionary&lt;TKey, TItem&gt;][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Key Property]: {{< ref "#key" >}}
[Item Property]: {{< ref "#item" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}

[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}

[Dictionary Literals]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DictionaryLiteral" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Dictionaries]: {{< url path="Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[TKey]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[TItem]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[CannotModifyReadOnlyDictionaryException]: {{< url path="Cortex.Reference.Exceptions.Dictionaries.CannotModifyReadOnlyDictionaryException.MainDoc" >}}

[InvalidPropertyValueException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}

[KeyPresentException]: {{< url path="Cortex.Reference.Exceptions.Dictionaries.KeyPresentException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
