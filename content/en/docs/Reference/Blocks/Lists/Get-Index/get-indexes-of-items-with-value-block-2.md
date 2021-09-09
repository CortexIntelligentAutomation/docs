---
title: "Get Indexes Of Items With Value"
linkTitle: "Get Indexes Of Items With Value"
description: "Gets the indexes of all occurrences of items in a List matching a value."
---

![Icon](/blocks/lists-get-index-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.Get.GetIndexesOfItemsWithValueBlock`2)</p>

## Description

Gets the [Indexes][Indexes Property] of all occurrences of items in a [List][List Property] matching a [Value][Value Property].

## Examples

### Get the Indexes of all occurrences of items in a List matching a Value

This example will attempt to get the indexes of all occurrences of items matching the value `1` from `[1, 2, 3, 3, 2, 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[1, 2, 3, 3, 2, 1]` | `($)List` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Value][Value Property] | `($)Value`, with value `1` | `($)Value` is a variable of type [Int32][] |
| [Indexes][Indexes Property] | `($)Indexes`, with no value | `($)Indexes` is a variable that will be set to an [IList][]&lt;[Int32][]&gt; value |

#### Result

Attempting to get the indexes of all occurrences of items matching the value `1` from `[1, 2, 3, 3, 2, 1]` results in the variable `($)Indexes` being updated to the following:

```json
[0, 5]
```

***

## Properties

### List

The [List][List Property] to get the [Indexes][Indexes Property] of matching items from.

Items are considered matching if they have the specified [Value][Value Property].

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items in the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)List` with value `[]` |

### Value

The [Value][Value Property] the items to get the [Indexes][Indexes Property] of must match.

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Default Value | `($)Value` with value `null` |

### Indexes

[IList][]&lt;[Int32][]&gt; containing the [Indexes][Indexes Property] of items matching [Value][Value Property] in [List][List Property].

If there are no items matching [Value][Value Property] in [List][List Property], the specified variable will be set to `[-1]`.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[Int32][]&gt; |
| Property Type | [Output][] |
| Default Value | `($)Index` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|-------------|
| [InvalidPropertyValueException][] | Thrown when [Value][Value Property] is `null` and [List][List Property] only accepts non-nullable value types. |
| [PropertyNullException][] | Thrown when [List][List Property] is `null`. |

## Remarks

### Object Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Empty List

If [List][List Property] is empty (i.e. `[]`), the variable specified in the [Indexes][Indexes Property] property is set to `[-1]`.

### No items matching Value

If [List][List Property] does not contain items matching the specified [Value][Value Property], the variable specified in the [Indexes][Indexes Property] property is set to `[-1]`.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [List Literals][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [List Expressions][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Value Property]: {{< ref "#value" >}}
[Indexes Property]: {{< ref "#indexes" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.Indexes.MainDoc" >}}
[Occurrences]: {{< url "Cortex.Reference.Concepts.Occurrences.MainDoc" >}}

[List Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListLiterals" >}}
[List Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListExpressions" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Common.Property.InvalidPropertyValueException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
