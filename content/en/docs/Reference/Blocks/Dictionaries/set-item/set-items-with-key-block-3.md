---
title: "Set Items With Key"
linkTitle: "Set Items With Key"
description: "Sets all items with the given key in a Dictionary to a new value."
---

{{< figure src="/blocks/dictionaries-set-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Dictionaries.SetItem.SetItemsWithKeyBlock`3)</p>

## Description

Sets all items with the given [Key][Key Property] in a [Dictionary][Dictionary Property] to a [New Value][NewValue Property].

## Examples

### Sets all items with a Key in a Dictionary to a New Value

Typically keys are simple data types such as [String][], [Int32][], [Boolean][], and for these a dictionary cannot the same key value more than once. This is due to how the data type's object equality is implemented (two items are considered equal if they have the same value rather than being the same object reference).

However, other data types such as [IList][]&lt;[Int32][]&gt; can also be used as keys. For these data types, object equality only considers two items equal if they are the same reference; it does not care about whether they have the same value. Therefore, it is possible to have the same key value more than once, and as a result you should be able to set all items with that key.

This example will illustrate this, by attempting to set all items with the key `[1]` in `{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 1}` to `10`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[IList][]&lt;[Int32][]&gt;, [Int32][]&gt; |
| [Key][Key Property] | `($)Key`, with value `[1]` | `($)Key` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [New Value][NewValue Property] | `($)NewValue`, with value `10` | `($)NewValue` is a variable of type [Int32][] |

#### Result

Attempting to set all items with the key `[1]` in `{[1] : 1, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 1}` to `10` results in the variable `($)Dictionary` being updated to the following:

```csharp
{[1] : 10, [2] : 2, [3] : 3, [3] : 3, [2] : 2, [1] : 10}
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to set all items with the given [Key][Key Property] in.

Items are considered matching if they have the specified [Key][Key Property].

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)Dictionary` with value `{}` |

### Key

The [Key][Key Property] the items to set must have.

For information and examples of how it is determined whether an item has a specified key, please see [Object Equality][].

For information about what a key is, please see [Keys][].

| | |
|--------------------|---------------------------|
| Data Type | [TKey][] |
| Property Type | [Input][] |
| Default Value | `($)Key` with value `null` |

### New Value

The [New Value][NewValue Property] to set all items with the given [Key][Key Property] in [Dictionary][Dictionary Property] to.  
  
| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Default Value | `($)NewValue` with value `null` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyDictionaryException][] | Thrown when [Dictionary][Dictionary Property] is read-only. |
| [InvalidPropertyValueException][] | Thrown when [New Value][NewValue Property] is `null` and [Dictionary][Dictionary Property] only accepts non-nullable value types. See [Value Is Invalid][]. |
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
[NewValue Property]: {{< ref "#new-value" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Keys]: {{< url "Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[Object Equality]: {{< url "Cortex.Reference.Concepts.WorkingWith.DataTypes.ObjectEquality.MainDoc" >}}

[Dictionary Literals]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DictionaryLiteral" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url "Cortex.Reference.Concepts.WorkingWith.DataTypes.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.WorkingWith.DataTypes.Generics.MainDoc" >}}

[CannotModifyReadOnlyDictionaryException]: {{< url "Cortex.Reference.Exceptions.Dictionaries.CannotModifyReadOnlyDictionaryException.MainDoc" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}

[KeyNotPresentException]: {{< url "Cortex.Reference.Exceptions.Dictionaries.KeyNotPresentException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
