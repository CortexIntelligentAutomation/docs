---
title: "Set Items With Values"
linkTitle: "Set Items With Values"
description: "Sets all items matching one of the specified values in a Dictionary to new values."
---

{{< figure src="/blocks/dictionaries-set-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Dictionaries.SetItem.SetItemsWithValuesBlock`3)</p>

## Description

Set all items matching one of the specified [Values][Values Property] in a [Dictionary][Dictionary Property] to [New Values][NewValues Property].

## Examples

### Set all items matching one of the specified Values in a Dictionary to New Values

This example will attempt to set all items matching one of the values `[1, 2]` in `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` to `[10, 20]` respectively.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Values][Values Property] | `($)Values`, with value `[1, 2]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |
| [NewValues][NewValues Property] | `($)NewValues`, with value `[10, 20]` | `($)NewValues` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |

#### Result

Attempting to set all items matching one of the values `[1, 2]` in `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` to `[10, 20]` respectively, results in the variable `($)Dictionary` being updated to the following:

```json
{"Key1" : 10, "Key2" : 20, "Key3" : 3, "Key4" : 3, "Key5" : 20, "Key6" : 10}
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to set all matching items in.

Items are considered matching if they have one of the specified [Values][Values Property].

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)Dictionary` with value `{}` |

### Values

The [Values][Values Property] the items to set must match one of.

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Values` with value `[]` |

### New Values

The [New Values][NewValues Property] to set the items matching the corresponding [Values][Values Property] in [Dictionary][Dictionary Property] to.  

The number of items in [New Values][NewValues Property] must match the number of items in [Values][Values Property].

[Dictionary][Dictionary Property] items matching the first value in [Values][Values Property] will be set to the first value in [New Values][NewValues Property]; [Dictionary][Dictionary Property] items matching the second value in [Values][Values Property] will be set to the second value in [New Values][NewValues Property] etc.

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)NewValues` with value `[]` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyDictionaryException][] | Thrown when [Dictionary][Dictionary Property] is read-only. |
| [DuplicateValueException][] | Thrown when [Values][Values Property] contains duplicate values. |
| [PropertyItemCountException][] | Thrown when the count of items in [Values][Values Property] and the count of items in [New Values][NewValues Property] are not the same, or neither contain any items. |
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] or [Values][Values Property] or [New Values][NewValues Property] are `null`. |

## Remarks

### Item Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Empty Dictionary

If [Dictionary][Dictionary Property] is empty (i.e. `{}`) there is nothing to set, so no operation is performed.

### No items matching a specified value in Values

If [Dictionary][Dictionary Property] does not contain items matching one of the specified [Values][Values Property], there is nothing to set for that value.

### No items matching Values

If [Dictionary][Dictionary Property] does not contain items matching any of the specified [Values][Values Property], there is nothing to set, so no operation is performed.

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Create a Dictionary&lt;TKey, TItem&gt;][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Values Property]: {{< ref "#values" >}}
[NewValues Property]: {{< ref "#new-values" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.ObjectEquality.MainDoc" >}}

[Dictionary Literals]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DictionaryLiteral" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.Generics.MainDoc" >}}

[CannotModifyReadOnlyDictionaryException]: {{< url "Cortex.Reference.Exceptions.Dictionaries.CannotModifyReadOnlyDictionaryException.MainDoc" >}}
[DuplicateValueException]: {{< url "Cortex.Reference.Exceptions.Lists.DuplicateValueException.MainDoc" >}}
[PropertyItemCountException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyItemCountException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
