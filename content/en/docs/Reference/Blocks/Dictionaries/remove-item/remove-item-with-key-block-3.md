---
title: "Remove Item With Key"
linkTitle: "Remove Item With Key"
description: "Removes the specified occurrence of an item with the given key from a Dictionary."
---

{{< figure src="/blocks/dictionaries-remove-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Dictionaries.RemoveItem.RemoveItemWithKeyBlock`3)</p>

## Description

Removes the specified [Occurrence][Occurrence Property] of an item with the given [Key][Key Property] from a [Dictionary][Dictionary Property].

## Examples

### Remove the first Occurrence of an item with a Key from an empty Dictionary

This example will attempt to remove the first occurrence of an item with the key `"Key1"` from `{}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[dynamic][], [dynamic][]&gt; |
| [Key][Key Property] | `($)Key`, with value `"Key1"` | `($)Key` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `1` | `($)Occurrence` is a variable of type [Int32][] |

#### Result

Attempting to remove the first occurrence of an item with the key `"Key1"` from `{}` results in no operation, as there is nothing to remove. Therefore, the variable `($)Dictionary` remains:

```json
{}
```

***

### Remove the first Occurrence of an item with a Key from a Dictionary

This example will attempt to remove the first occurrence of an item with the key `"Key1"` from `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Key][Key Property] | `($)Key`, with value `"Key1"` | `($)Key` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `1` | `($)Occurrence` is a variable of type [Int32][] |

#### Result

An [Occurrence][Occurrence Property] of `1` means remove the first occurrence; `2` means second etc.

Attempting to remove the first occurrence of an item with the key `"Key1"` from `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` results in the variable `($)Dictionary` being updated to the following:

```json
{"Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}
```

***

### Remove the last Occurrence of an item with a Key from a Dictionary

Typically keys are simple data types such as [String][], [Int32][], [Boolean][], and for these a dictionary cannot the same key value more than once. This is due to how the data type's object equality is implemented (two items are considered equal if they have the same value rather than being the same object reference).

However, other data types such as [IList][]&lt;[Int32][]&gt; can also be used as keys. For these data types, object equality only considers two items equal if they are the same reference; it does not care about whether they have the same value. Therefore, it is possible to have the same key value more than once, and as a result you should be able to remove any occurrence of item with that key.

This example will illustrate this, by attempting to remove the last occurrence of an item with the key `[1]` from `{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 1}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[IList][]&lt;[Int32][]&gt;, [Int32][]&gt; |
| [Key][Key Property] | `($)Key`, with value `[1]` | `($)Key` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `-1` | `($)Occurrence` is a variable of type [Int32][] |

#### Result

An [Occurrence][Occurrence Property] of `-1` means remove the last occurrence; `-2` means second last etc.

Attempting to remove the last occurrence of an item with the key `[1]` from `{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 1}` results in the variable `($)Dictionary` being updated to the following:

```csharp
{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2}
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to remove the specified [Occurrence][Occurrence Property] of item with the given [Key][Key Property] from.

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)Dictionary` with value `{}` |

### Key

The [Key][Key Property] the item to remove must have.

For information and examples of how it is determined whether an item has a specified key, please see [Object Equality][].

For information about what a key is, please see [Keys][].

| | |
|--------------------|---------------------------|
| Data Type | [TKey][] |
| Property Type | [Input][] |
| Default Value | `($)Key` with value `null` |

### Occurrence

The [Occurrence][Occurrence Property] of matching item to remove from the [Dictionary][Dictionary Property].

Items are considered matching if they have the specified [Key][Key Property].

Unlike lists, dictionaries do not have a defined order. This means the nth occurrence is determined by the underlying Microsoft .Net implementation; this is not published and could change if the algorithm were to change.

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Occurrence` with value `1` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyDictionaryException][] | Thrown when [Dictionary][Dictionary Property] is read-only. |
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] or [Key][Key Property] are `null`. |

## Remarks

### Key Equality

For information and examples of how it is determined whether a key is already present, please see [Object Equality][].

### Occurrences

Unlike lists, dictionaries do not have a defined order. This means the nth occurrence is determined by the underlying Microsoft .Net implementation; this is not published and could change if the algorithm were to change.

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

### Empty Dictionary

If [Dictionary][Dictionary Property] is empty (i.e. `{}`) there is nothing to remove, so no operation is performed.

### No items with given Key, or Occurrence is not present

If [Dictionary][Dictionary Property] does not contain items with the given [Key][Key Property] or the specified [Occurrence][Occurrence Property] is not present, there is nothing to remove, so no operation is performed.

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Dictionary Expressions][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Key Property]: {{< ref "#key" >}}
[Occurrence Property]: {{< ref "#occurrence" >}}

[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[Keys]: {{< url "Cortex.Reference.Concepts.Keys.MainDoc" >}}
[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}
[Occurrences]: {{< url "Cortex.Reference.Concepts.Occurrences.MainDoc" >}}

[Dictionary Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.DictionaryLiterals" >}}
[Dictionary Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.DictionaryExpressions" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[CannotModifyReadOnlyDictionaryException]: {{< url "Cortex.Reference.Exceptions.Dictionaries.CannotModifyReadOnlyDictionaryException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url "Cortex.Reference.DataTypes.MostCommon.IDictionary" >}}
[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
