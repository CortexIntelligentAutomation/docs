---
title: "Set Items With Keys"
linkTitle: "Set Items With Keys"
description: "Sets all items with any of the given keys in a Dictionary to new values."
---

{{< figure src="/blocks/Cortex_Blocks_Dictionaries_SetItem_SetItemsWithKeysBlock_3.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

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
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Dictionary` with no value |
### Keys

The [Keys][Keys Property] the items to set must have one of.

For information and examples of how it is determined whether an item has a specified key, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TKey][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### New Values

The [New Values][NewValues Property] to set the items with the corresponding [Keys][Keys Property] in [Dictionary][Dictionary Property] to.  

The number of items in [New Values][NewValues Property] must match the number of items in [Keys][Keys Property].

[Dictionary][Dictionary Property] items with the first key in [Keys][Keys Property] will be set to the first value in [New Values][NewValues Property]; [Dictionary][Dictionary Property] items with the second key in [Keys][Keys Property] will be set to the second value in [New Values][NewValues Property] etc.

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

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

For information about how to define dictionaries using expression syntax, see [Create a Dictionary&lt;TKey, TItem&gt;][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Keys Property]: {{< ref "#keys" >}}
[NewValues Property]: {{< ref "#new-values" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}

[Dictionary Literals]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DictionaryLiteral" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Dictionaries]: {{< url path="Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[TItem]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[ArgumentNullException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentNullException" >}}
[CannotModifyReadOnlyDictionaryException]: {{< url path="Cortex.Reference.Exceptions.Dictionaries.CannotModifyReadOnlyDictionaryException.MainDoc" >}}
[KeysNotPresentException]: {{< url path="Cortex.Reference.Exceptions.Dictionaries.KeysNotPresentException.MainDoc" >}}
[PropertyItemCountException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyItemCountException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
