---
title: "Get Item With Key"
linkTitle: "Get Item With Key"
description: "Gets the specified occurrence of an item with the given key from a Dictionary."
---

{{< figure src="/blocks/dictionaries-get-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Dictionaries.GetItem.GetItemWithKeyBlock`3)</p>

## Description

Gets the specified [Occurrence][Occurrence Property] of an [Item][Item Property] with the given [Key][Key Property] from a [Dictionary][Dictionary Property].

## Examples

### Get the first Occurrence of an Item with a Key from a Dictionary

This example will attempt to get the first occurrence of an item with the key `"Key1"` from `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Key][Key Property] | `($)Key`, with value `"Key1"` | `($)Key` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `1` | `($)Occurrence` is a variable of type [Int32][] |
| [Item][Item Property] | `($)Item`, with no value | `($)Item` is a variable that will be set to the type of the item (i.e. [Int32][]) |

#### Result

An [Occurrence][Occurrence Property] of `1` means get the first occurrence; `2` means second etc.

Attempting to get the first occurrence of an item with the key `"Key1"` from `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` results in the variable `($)Item` being updated to the following:

```json
1
```

***

### Get the last Occurrence of an Item with a Key from a Dictionary

Typically keys are simple data types such as [String][], [Int32][], [Boolean][], and for these a dictionary cannot the same key value more than once. This is due to how the data type's object equality is implemented (two items are considered equal if they have the same value rather than being the same object reference).

However, other data types such as [IList][]&lt;[Int32][]&gt; can also be used as keys. For these data types, object equality only considers two items equal if they are the same reference; it does not care about whether they have the same value. Therefore, it is possible to have the same key value more than once, and as a result you should be able to get an occurrence of item with that key.

This example will illustrate this, by attempting to get the last occurrence of an item with the key `[1]` from `{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 10}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 10}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[IList][]&lt;[Int32][]&gt;, [Int32][]&gt; |
| [Key][Key Property] | `($)Key`, with value `[1]` | `($)Key` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `-1` | `($)Occurrence` is a variable of type [Int32][] |
| [Item][Item Property] | `($)Item`, with no value | `($)Item` is a variable that will be set to the type of the item (i.e. [Int32][]) |

#### Result

An [Occurrence][Occurrence Property] of `-1` means get the last occurrence; `-2` means second last etc.

Attempting to get the last occurrence of an item with the key `[1]` from `{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 10}` results in the variable `($)Item` being updated to the following:

```json
10
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to get the specified [Occurrence][Occurrence Property] of [Item][Item Property] with the given [Key][Key Property] from.

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Dictionary` with no value |

### Key

The [Key][Key Property] the [Item][Item Property] to get must have.

For information and examples of how it is determined whether an item has a specified key, please see [Object Equality][].

For information about what a key is, please see [Keys][].

| | |
|--------------------|---------------------------|
| Data Type | [TKey][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Occurrence

The [Occurrence][Occurrence Property] of matching [Item][Item Property] to get from the [Dictionary][Dictionary Property].

Items are considered matching if they have the specified [Key][Key Property].

Unlike lists, dictionaries do not have a defined order. This means the nth occurrence is determined by the underlying Microsoft .Net implementation; this is not published and could change if the algorithm were to change.

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `1` |

### Item

The specified [Occurrence][Occurrence Property] of [Item][Item Property] with the given [Key][Key Property] from [Dictionary][Dictionary Property].  
  
| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Item` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [KeyNotPresentException][] | Thrown when the [Key][Key Property] is not present in the [Dictionary][Dictionary Property]. |
| [OccurrenceNotPresentException][] | Thrown when the specified [Occurrence][Occurrence Property] of [Item][Item Property] with the given [Key][Key Property] is not present in the [Dictionary][Dictionary Property]. |
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] or [Key][Key Property] are `null`. |

## Remarks

### Key Equality

For information and examples of how it is determined whether a key is already present, please see [Object Equality][].

### Occurrences

Unlike lists, dictionaries do not have a defined order. This means the nth occurrence is determined by the underlying Microsoft .Net implementation; this is not published and could change if the algorithm were to change.

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Create a Dictionary&lt;TKey, TItem&gt;][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Key Property]: {{< ref "#key" >}}
[Occurrence Property]: {{< ref "#occurrence" >}}
[Item Property]: {{< ref "#item" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[Occurrences]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}

[Dictionary Literals]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DictionaryLiteral" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Dictionaries]: {{< url path="Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[TItem]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[KeyNotPresentException]: {{< url path="Cortex.Reference.Exceptions.Dictionaries.KeyNotPresentException.MainDoc" >}}
[OccurrenceNotPresentException]: {{< url path="Cortex.Reference.Exceptions.Collections.OccurrenceNotPresentException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
