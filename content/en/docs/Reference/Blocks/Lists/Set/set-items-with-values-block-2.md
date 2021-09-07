---
title: "Set Items With Values"
linkTitle: "Set Items With Values"
description: "Sets all occurrences of items matching one of the specified values in a List to new values."
---

![Icon](/blocks/lists-set-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.Set.SetItemsWithValuesBlock`2)</p>

## Description

Set all occurrences of items matching one of the specified [Values][Values Property] in a [List][List Property] to [New Values][NewValues Property].

## Examples

### Set all occurrences of items matching one of the specified Values in a List to New Values

This example will attempt to set all occurrences of items matching one of the values `[1, 2]` in `[1, 2, 3, 3, 2, 1]` to `[10, 20]` respectively.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[1, 2, 3, 3, 2, 1]` | `($)List` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Values][Values Property] | `($)Values`, with value `[1, 2]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; | |
| [NewValues][NewValues Property] | `($)NewValues`, with value `[10, 20]` | `($)NewValues` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; | |

#### Result

Attempting to set all occurrences of items matching one of the values `[1, 2]` in `[1, 2, 3, 3, 2, 1]` to `[10, 20]` respectively,  results in the variable `($)List` being updated to the following:

```json
[10, 20, 3, 3, 20, 10]
```

***

## Properties

### List

The [List][List Property] to set all occurrences of matching items in.

Items are considered matching if they have one of the specified [Values][Values Property].

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items in the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)List` with value `[]` |

### Values

The [Values][Values Property] the items to set must match one of.

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Values` with value `[]` |

### New Values

The [New Values][NewValues Property] to set the items matching the corresponding [Values][Values Property] in [List][List Property] to.  

The number of items in [New Values][NewValues Property] must match the number of items in [Values][Values Property].

[List][List Property] items matching the first value in [Values][Values Property] will be set to the first value in [New Values][NewValues Property]; [List][List Property] items matching the second value in [Values][Values Property] will be set to the second value in [New Values][NewValues Property] etc.

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)NewValues` with value `[]` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyListException][] | Thrown when [List][List Property] is read-only. |
| [DuplicateValueException][] | Thrown when [Values][Values Property] contains duplicate values. |
| [PropertyItemCountException][] | Thrown when the count of items in [Values][Values Property] and the count of items in [New Values][NewValues Property] are not the same, or neither contain any items. |
| [PropertyNullException][] | Thrown when [List][List Property] or [Values][Values Property] or [New Values][NewValues Property] is `null`. |

## Remarks

### Object Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Empty List

If [List][List Property] is empty (i.e. `[]`) there is nothing to set, so no operation is performed.

### No items matching a specified value in Values

If [List][List Property] does not contain items matching one of the specified [Values][Values Property], there is nothing to set for that value.

### No items matching Values

If [List][List Property] does not contain items matching any of the specified [Values][Values Property], there is nothing to set, so no operation is performed.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [List Literals][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [List Expressions][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Values Property]: {{< ref "#values" >}}
[NewValues Property]: {{< ref "#new-values" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[List Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListLiterals" >}}
[List Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListExpressions" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[DuplicateValueException]: {{< url "Cortex.Reference.Exceptions.Lists.DuplicateValueException.MainDoc" >}}
[PropertyItemCountException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyItemCountException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.MostCommon.IEnumerable" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
