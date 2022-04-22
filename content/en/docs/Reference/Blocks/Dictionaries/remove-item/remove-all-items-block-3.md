---
title: "Remove All Items"
linkTitle: "Remove All Items"
description: "Removes all items from a Dictionary."
---

{{< figure src="/blocks/dictionaries-remove-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Dictionaries.RemoveItem.RemoveAllItemsBlock`3)</p>

## Description

Removes all items from a [Dictionary][Dictionary Property].

## Examples

### Remove all items from an empty Dictionary

This example will attempt to remove all items from `{}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[dynamic][], [dynamic][]&gt; |

#### Result

Attempting to remove all items from `{}` results in no operation, as there is nothing to remove. Therefore, the variable `($)Dictionary` remains:

```json
{}
```

***

### Remove all items from a Dictionary

This example will remove all items from `{"Key1" : 1, "Key2" : 2}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 2}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |

#### Result

Removing all items from `{"Key1" : 1, "Key2" : 2}` results in the variable `($)Dictionary` being updated to the following:

```json
{}
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] where all items are removed from.  

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)Dictionary` with value `{}` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyDictionaryException][] | Thrown when [Dictionary][Dictionary Property] is read-only. |
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] is `null`. |

## Remarks

### Empty Dictionary

If [Dictionary][Dictionary Property] is empty (i.e. `{}`) there is nothing to remove, so no operation is performed.

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Dictionary Expressions][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}

[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[Dictionary Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.DictionaryLiterals" >}}
[Dictionary Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.DictionaryExpressions" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[CannotModifyReadOnlyDictionaryException]: {{< url "Cortex.Reference.Exceptions.Dictionaries.CannotModifyReadOnlyDictionaryException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
