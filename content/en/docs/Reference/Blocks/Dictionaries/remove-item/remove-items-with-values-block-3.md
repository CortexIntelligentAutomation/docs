---
title: "Remove Items With Values"
linkTitle: "Remove Items With Values"
description: "Removes all items matching one of the specified values from a Dictionary."
---

![Icon](/blocks/dictionaries-remove-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Dictionaries.RemoveItem.RemoveItemsWithValuesBlock`3)</p>

## Description

Removes all items matching one of the specified [Values][Values Property] from a [Dictionary][Dictionary Property].

## Examples

### Remove all items matching one of the specified Values from an empty Dictionary

This example will attempt to remove all items matching one of the values `[1, 2]` from `{}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[dynamic][], [dynamic][]&gt; |
| [Values][Values Property] | `($)Values`, with value `[1, 2]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |

#### Result

Attempting to remove all items matching one of the values `[1, 2]` from `{}` results in no operation, as there is nothing to remove. Therefore, the variable `($)Dictionary` remains:

```json
{}
```

***

### Remove all items matching one of the specified Values from a Dictionary

This example will attempt to remove all items matching one of the values `[1, 2]` from `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Values][Values Property] | `($)Values`, with value `[1, 2]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |

#### Result

Attempting to remove all items matching one of the values `[1, 2]` from `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` results in the variable `($)Dictionary` being updated to the following:

```json
{"Key3" : 3, "Key4" : 3}
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to remove all matching items from.

Items are considered matching if they have one of the specified [Values][Values Property].

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)Dictionary` with value `{}` |

### Values

The [Values][Values Property] the items to remove must match one of.

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Values` with value `[]` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyDictionaryException][] | Thrown when [Dictionary][Dictionary Property] is read-only. |
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] or [Values][Values Property] is `null`. |

## Remarks

### Item Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Empty Dictionary

If [Dictionary][Dictionary Property] is empty (i.e. `{}`) there is nothing to remove, so no operation is performed.

### Empty Values

If [Values][Values Property] is empty (i.e. `[]`) there are no values to match, therefore nothing can be removed and no operation is performed.

### No items matching a specified value in Values

If [Dictionary][Dictionary Property] does not contain items matching one of the specified [Values][Values Property], there is nothing to remove for that value.

### No items matching Values

If [Dictionary][Dictionary Property] does not contain items matching any of the specified [Values][Values Property], there is nothing to remove, so no operation is performed.

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Dictionary Expressions][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Values Property]: {{< ref "#values" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[Dictionary Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.DictionaryLiterals" >}}
[Dictionary Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.DictionaryExpressions" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[CannotModifyReadOnlyDictionaryException]: {{< url "Cortex.Reference.Exceptions.Dictionaries.CannotModifyReadOnlyDictionaryException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url "Cortex.Reference.DataTypes.MostCommon.IDictionary" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.MostCommon.IEnumerable" >}}
[Dynamic]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dynamic" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
