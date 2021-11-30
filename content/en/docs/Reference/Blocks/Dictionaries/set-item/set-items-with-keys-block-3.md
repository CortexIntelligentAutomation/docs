---
title: "Set Items With Keys"
linkTitle: "Set Items With Keys"
description: "Sets all items with any of the given keys in a Dictionary to new values."
---

![Icon](/blocks/dictionaries-set-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Dictionaries.SetItem.SetItemsWithKeysBlock`3)</p>

## Description

Sets all items with any of the given [Keys][Keys Property] in a [Dictionary][Dictionary Property] to [New Values][NewValues Property].

## Examples

### Set all items with any of the given Keys in a Dictionary to New Values

This example will attempt to set all items with any of the keys `["Key1", "Key2"]` in `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` to `[10, 20]` respectively.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Keys][Keys Property] | `($)Keys`, with value `["Key1", "Key2"]` | `($)Keys` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [NewValues][NewValues Property] | `($)NewValues`, with value `[10, 20]` | `($)NewValues` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |

#### Result

Attempting to set all items with any of the keys `["Key1", "Key2"]` in `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` to `[10, 20]` respectively, results in the variable `($)Dictionary` being updated to the following:

```json
{"Key1" : 10, "Key2" : 20, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to set all matching items in.

Items are considered matching if they have any of the specified [Keys][Keys Property].

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)Dictionary` with value `{}` |

### Keys

The [Keys][Keys Property] the items to set must have one of.

For information and examples of how it is determined whether an item has a specified key, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TKey][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Keys` with value `[]` |

### New Values

The [New Values][NewValues Property] to set the items with the corresponding [Keys][Keys Property] in [Dictionary][Dictionary Property] to.  

The number of items in [New Values][NewValues Property] must match the number of items in [Keys][Keys Property].

[Dictionary][Dictionary Property] items with the first key in [Keys][Keys Property] will be set to the first value in [New Values][NewValues Property]; [Dictionary][Dictionary Property] items with the second key in [Keys][Keys Property] will be set to the second value in [New Values][NewValues Property] etc.

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)NewValues` with value `[]` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentNullException][] | Thrown when any key in [Keys][Keys Property] is `null`|
| [CannotModifyReadOnlyDictionaryException][] | Thrown when [Dictionary][Dictionary Property] is read-only. |
| [KeysNotPresentException][] | Thrown when any key in the [Keys][Keys Property] is not present in the [Dictionary][Dictionary Property]. |
| [PropertyItemCountException][] | Thrown when the count of items in [Keys][Keys Property] and the count of items in [New Values][NewValues Property] are not the same, or neither contain any items. |
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] or [Keys][Keys Property] or [New Values][NewValues Property] are `null`. |

## Remarks

### Key Equality

For information and examples of how it is determined whether an item has a specified key, please see [Object Equality][].

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Dictionary Expressions][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Keys Property]: {{< ref "#keys" >}}
[NewValues Property]: {{< ref "#new-values" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[Keys]: {{< url "Cortex.Reference.Concepts.Keys.MainDoc" >}}
[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[Dictionary Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.DictionaryLiterals" >}}
[Dictionary Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.DictionaryExpressions" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[ArgumentNullException]: {{< url "MSDocs.DotNet.Api.System.ArgumentNullException" >}}
[CannotModifyReadOnlyDictionaryException]: {{< url "Cortex.Reference.Exceptions.Dictionaries.CannotModifyReadOnlyDictionaryException.MainDoc" >}}
[KeysNotPresentException]: {{< url "Cortex.Reference.Exceptions.Dictionaries.KeysNotPresentException.MainDoc" >}}
[PropertyItemCountException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyItemCountException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url "Cortex.Reference.DataTypes.MostCommon.IDictionary" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.MostCommon.IEnumerable" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
