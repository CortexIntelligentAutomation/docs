---
title: "Get Count Of Items With Value"
linkTitle: "Get Count Of Items With Value"
description: "Gets the count of items in a Dictionary with the specified value."
---

{{< figure src="/blocks/dictionaries-get-count-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Dictionaries.GetCount.GetCountOfItemsWithValueBlock`3)</p>

## Description

Gets the [Count][Count Property] of items in a [Dictionary][Dictionary Property] with the specified [Value][Value Property].

## Examples

### Get Count of items in a Dictionary with a Value

This example will get the count of items in `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` with the value `1`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Dictionary][Dictionary Property] | `($)Dictionary`, with value `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` | `($)Dictionary` is a variable of type [IDictionary][]&lt;[String][], [Int32][]&gt; |
| [Value][Value Property] | `($)Value`, with value `1` | `($)Value` is a variable of type [Int32][] |
| [Count][Count Property] | `($)Count`, with no value | `($)Count` is a variable that will be set to an [Int32][] value |

#### Result

Getting the count of items in `{"Key1" : 1, "Key2" : 2, "Key3" : 3, "Key4" : 3, "Key5" : 2, "Key6" : 1}` with the value `1` results in the variable `($)Count` being updated to the following:

```json
2
```

***

## Properties

### Dictionary

The [Dictionary][Dictionary Property] to get the [Count][Count Property] of items with the specified [Value][Value Property] for.

[Dictionary][Dictionary Property] can be any [IDictionary][]&lt;[TKey][], [TItem][]&gt;, where [TKey][] represents the type of keys used to lookup items in the [Dictionary][Dictionary Property], and [TItem][] represents the type of items in the [Dictionary][Dictionary Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[TKey][], [TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Dictionary` with value `{}` |

### Value

The [Value][Value Property] items must match to be included in the [Count][Count Property].

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Default Value | `($)Value` with value `null` |

### Count

The [Count][Count Property] of items in [Dictionary][Dictionary Property] with the specified [Value][Value Property].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Output][] |
| Default Value | `($)Count` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [InvalidPropertyValueException][] | Thrown when [Value][Value Property] is `null` and [Dictionary][Dictionary Property] only accepts non-nullable value types. See [Value Is Invalid][]. |
| [PropertyNullException][] | Thrown when [Dictionary][Dictionary Property] is `null`. |

## Remarks

### Item Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Empty Dictionary

If [Dictionary][Dictionary Property] is empty (i.e. `{}`), the variable specified in the [Count][Count Property] property is set to `0`.

### No items matching Value

If [Dictionary][Dictionary Property] does not contain items matching the specified [Value][Value Property], the variable specified in the [Count][Count Property] property is set to `0`.

### Defining dictionaries using literal syntax

For information about how to define dictionaries using literal syntax, see [Dictionary Literals][].

### Defining dictionaries using expression syntax

For information about how to define dictionaries using expression syntax, see [Create a Dictionary&lt;TKey, TItem&gt;][].

### Dictionaries containing items with same data types vs different data types

For information about the different types of dictionaries, including those that can contain only the same type of item, and those that can contain different types of item, see [Dictionaries][].

[Dictionary Property]: {{< ref "#dictionary" >}}
[Value Property]: {{< ref "#value" >}}
[Count Property]: {{< ref "#count" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Dictionary Literals]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DictionaryLiteral" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}

[TKey]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.Generics.MainDoc" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.ObjectEquality.MainDoc" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IDictionary]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
