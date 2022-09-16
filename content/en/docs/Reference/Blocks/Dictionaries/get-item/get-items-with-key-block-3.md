---
title: "Get Items With Key"
linkTitle: "Get Items With Key"
description: "Gets all items with the given key from a Dictionary."
---

{{< figure src="/blocks/dictionaries-get-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Dictionaries.GetItem.GetItemsWithKeyBlock`3)</p>

## Description

Gets all [Items][Items Property] with the given [Key][Key Property] from a [Dictionary][Dictionary Property].

## Examples

### Get all Items with a Key from a Dictionary

Typically keys are simple data types such as [String][], [Int32][], [Boolean][], and for these a dictionary cannot the same key value more than once. This is due to how the data type's object equality is implemented (two items are considered equal if they have the same value rather than being the same object reference).

However, other data types such as [IList][]&lt;[Int32][]&gt; can also be used as keys. For these data types, object equality only considers two items equal if they are the same reference; it does not care about whether they have the same value. Therefore, it is possible to have the same key value more than once, and as a result you should be able to get all items with that key.

This example will illustrate this, by attempting to get all items with the key `[1]` from `{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 10}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 10}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[IList][]&lt;[Int32][]&gt;, [Int32][]&gt; |
| [Key][Key Property] | `($)Key`, with value `[1]` | `($)Key` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Items][Items Property] | `($)Items`, with no value | `($)Items` is a variable that will be set to an [IList][]&lt;[Int32][]&gt; |

#### Result

Attempting to get all items with the key `[1]` from `{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 10}` results in the variable `($)Items` being updated to the following:

```json
[1, 10]
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to get all [Items][Items Property] with the given [Key][Key Property] from.

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)Dictionary` with no value |

### Key

The [Key][Key Property] the [Items][Items Property] to get must have.

For information and examples of how it is determined whether an item has a specified key, please see [Object Equality][].

For information about what a key is, please see [Keys][].

| | |
|--------------------|---------------------------|
| Data Type | [TKey][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Expression][TODO] |
| Default Value | No value (defaults to `null`) |

### Items

All [Items][Items Property] with the given [Key][Key Property] in [Dictionary][Dictionary Property].  
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Output][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)Items` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [KeyNotPresentException][] | Thrown when the [Key][Key Property] is not present in the [Dictionary][Dictionary Property]. |
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
[Items Property]: {{< ref "#items" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Keys]: {{< url "Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[Object Equality]: {{< url "Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}

[Dictionary Literals]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DictionaryLiteral" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[KeyNotPresentException]: {{< url "Cortex.Reference.Exceptions.Dictionaries.KeyNotPresentException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
