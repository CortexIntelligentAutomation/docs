---
title: "Remove Items With Keys"
linkTitle: "Remove Items With Keys"
description: "Removes all items with any of the given keys from a Dictionary."
---

{{< figure src="/blocks/dictionaries-remove-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Dictionaries.RemoveItem.RemoveItemsWithKeysBlock`3)</p>

## Description

Removes all items with any of the given [Keys][Keys Property] from a [Dictionary][Dictionary Property].

## Examples

### Remove all items with any of the given Keys from an empty Dictionary

This example will attempt to remove all items with any of the given keys in `["Key1", "Key2"]` from `{}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[dynamic][], [dynamic][]&gt; |
| [Keys][Keys Property] | `($)Keys`, with value `["Key1", "Key2"]` | `($)Keys` is a variable of type [IDictionary][]&lt;[String][]&gt; |

#### Result

Attempting to remove all items with any of the given keys in `["Key1", "Key2"]` from `{}` results in no operation, as there is nothing to remove. Therefore, the variable `($)Dictionary` remains:

```json
{}
```

***

### Remove all items with any of the given Keys from a Dictionary

This example will attempt to remove all items with any of the given keys in `["Key1", "Key2"]` from `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Keys][Keys Property] | `($)Keys`, with value `["Key1", "Key2"]` | `($)Keys` is a variable of type [IDictionary][]&lt;[String][]&gt; |

#### Result

Attempting to remove all items with any of the given keys in `["Key1", "Key2"]` from `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` results in the variable `($)Dictionary` being updated to the following:

```json
{"Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to remove all items with any of the given [Keys][Keys Property] from.

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [InputOutput][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)Dictionary` with no value |

### Keys

The [Keys][Keys Property] the items to remove must have one of.

For information and examples of how it is determined whether an item has a specified key, please see [Object Equality][].

For information about what a key is, please see [Keys][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TKey][]&gt; |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Expression][TODO] |
| Default Value | No value (defaults to `null`) |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentNullException][] | Thrown when any key in [Keys][Keys Property] is `null`|
| [CannotModifyReadOnlyDictionaryException][] | Thrown when [Dictionary][Dictionary Property] is read-only. |
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] or [Keys][Keys Property] are `null`. |

## Remarks

### Key Equality

For information and examples of how it is determined whether a key is already present, please see [Object Equality][].

### Empty Dictionary

If [Dictionary][Dictionary Property] is empty (i.e. `{}`) there is nothing to remove, so no operation is performed.

### Empty Keys

If [Keys][Keys Property] is empty (i.e. `[]`) there are no keys to match, therefore nothing can be removed and no operation is performed.

### No items with one of the given Keys

If [Dictionary][Dictionary Property] does not contain items with one of the given [Keys][Keys Property], there is nothing to remove for that key.

### No items with any of the given Keys

If [Dictionary][Dictionary Property] does not contain items with any of the given [Keys][Keys Property] there is nothing to remove, so no operation is performed.

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Dictionary Expressions][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Keys Property]: {{< ref "#keys" >}}

[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[Keys]: {{< url "Cortex.Reference.Concepts.Keys.MainDoc" >}}
[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[Dictionary Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.DictionaryLiterals" >}}
[Dictionary Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.DictionaryExpressions" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[ArgumentNullException]: {{< url "MSDocs.DotNet.Api.System.ArgumentNullException" >}}
[CannotModifyReadOnlyDictionaryException]: {{< url "Cortex.Reference.Exceptions.Dictionaries.CannotModifyReadOnlyDictionaryException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
