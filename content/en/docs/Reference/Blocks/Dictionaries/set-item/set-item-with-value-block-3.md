---
title: "Set Item With Value"
linkTitle: "Set Item With Value"
description: "Sets the specified occurrence of an item matching a value in a Dictionary to a new value."
---

{{< figure src="/blocks/dictionaries-set-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Dictionaries.SetItem.SetItemWithValueBlock`3)</p>

## Description

Sets the specified [Occurrence][Occurrence Property] of an item matching a [Value][Value Property] in a [Dictionary][Dictionary Property] to a [New Value][NewValue Property].

## Examples

### Set the first Occurrence of an item matching a Value in a Dictionary to a New Value

This example will attempt to set the first occurrence of an item matching the value `1` in `{"Key1" : 1, "Key2" : 1}` to `10`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Value][Value Property] | `($)Value`, with value `1` | `($)Value` is a variable of type [Int32][] |
| [New Value][NewValue Property] | `($)NewValue`, with value `10` | `($)NewValue` is a variable of type [Int32][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `1` | `($)Occurrence` is a variable of type [Int32][] |

#### Result

An [Occurrence][Occurrence Property] of `1` means set the first occurrence; `2` means second etc.

Attempting to set the first occurrence of an item matching the value `1` in `{"Key1" : 1, "Key2" : 1}` to `10` results in the variable `($)Dictionary` being updated to the following:

```json
{"Key1" : 10, "Key2" : 1}
```

***

### Set the last Occurrence of an item matching a Value in a Dictionary to a New Value

This example will attempt to set the last occurrence of an item matching the value `1` in `{"Key1" : 1, "Key2" : 1}` to `10`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Value][Value Property] | `($)Value`, with value `1` | `($)Value` is a variable of type [Int32][] |
| [New Value][NewValue Property] | `($)NewValue`, with value `10` | `($)NewValue` is a variable of type [Int32][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `-1` | `($)Occurrence` is a variable of type [Int32][] |

#### Result

An [Occurrence][Occurrence Property] of `-1`, means set the last occurrence; `-2` means second last etc.

Attempting to set the last occurrence of an item matching the value `1` in `{"Key1" : 1, "Key2" : 1}` to `10` results in the variable `($)Dictionary` being updated to the following:

```json
{"Key1" : 1, "Key2" : 10}
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to set the specified [Occurrence][Occurrence Property] of matching item in.

Items are considered matching if they have the specified [Value][Value Property].

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)Dictionary` with value `{}` |

### Value

The [Value][Value Property] the item to set must match.

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Default Value | `($)Value` with value `null` |

### New Value

The [New Value][NewValue Property] to set the specified [Occurrence][Occurrence Property] of matching item in [Dictionary][Dictionary Property] to.  
  
| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Default Value | `($)NewValue` with value `null` |

### Occurrence

The [Occurrence][Occurrence Property] of matching item to set in the [Dictionary][Dictionary Property].

Items are considered matching if they have the specified [Value][Value Property].

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
| [InvalidPropertyValueException][] | Thrown when [Value][Value Property] or [New Value][NewValue Property] are `null` and [Dictionary][Dictionary Property] only accepts non-nullable value types. See [Value Is Invalid][]. |
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] is `null`. |

## Remarks

### Item Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Occurrences

Unlike lists, dictionaries do not have a defined order. This means the nth occurrence is determined by the underlying Microsoft .Net implementation; this is not published and could change if the algorithm were to change.

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

### Empty Dictionary

If [Dictionary][Dictionary Property] is empty (i.e. `{}`) there is nothing to set, so no operation is performed.

### No items matching Value, or Occurrence is not present

If [Dictionary][Dictionary Property] does not contain items matching the specified [Value][Value Property] or the specified [Occurrence][Occurrence Property] is not present, there is nothing to set, so no operation is performed.

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Create a Dictionary&lt;TKey, TItem&gt;][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Value Property]: {{< ref "#value" >}}
[NewValue Property]: {{< ref "#new-value" >}}
[Occurrence Property]: {{< ref "#occurrence" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}
[Occurrences]: {{< url "Cortex.Reference.Concepts.Occurrences.MainDoc" >}}

[Dictionary Literals]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DictionaryLiteral" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[CannotModifyReadOnlyDictionaryException]: {{< url "Cortex.Reference.Exceptions.Dictionaries.CannotModifyReadOnlyDictionaryException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}

[IDictionary]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
