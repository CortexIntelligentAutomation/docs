---
title: "Remove Items With Values"
linkTitle: "Remove Items With Values"
description: "Removes all items matching one of the specified values from a List."
---

{{< figure src="/blocks/lists-remove-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Lists.RemoveItem.RemoveItemsWithValuesBlock`2)</p>

## Description

Removes all items matching one of the specified [Values][Values Property] from a [List][List Property].

## Examples

### Remove all items matching one of the specified Values from an empty List

This example will attempt to remove all items matching one of the values `[1, 2]` from `[]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Values][Values Property] | `($)Values`, with value `[1, 2]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |

#### Result

Attempting to remove all items matching one of the values `[1, 2]` from `[]` results in no operation, as there is nothing to remove. Therefore, the variable `($)List` remains:

```json
[]
```

***

### Remove all items matching one of the specified Values from a List

This example will attempt to remove all items matching one of the values `[1, 2]` from `[1, 2, 3, 3, 2, 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[1, 2, 3, 3, 2, 1]` | `($)List` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Values][Values Property] | `($)Values`, with value `[1, 2]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |

#### Result

Attempting to remove all items matching one of the values `[1, 2]` from `[1, 2, 3, 3, 2, 1]` results in the variable `($)List` being updated to the following:

```json
[3, 3]
```

***

## Properties

### List

The [List][List Property] to remove all matching items from.

Items are considered matching if they have one of the specified [Values][Values Property].

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items that can be removed from the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)List` with value `[]` |

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
| [CannotModifyReadOnlyListException][] | Thrown when [List][List Property] is read-only. |
| [PropertyNullException][] | Thrown when [List][List Property] or [Values][Values Property] is `null`. |

## Remarks

### Item Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Empty List

If [List][List Property] is empty (i.e. `[]`) there is nothing to remove, so no operation is performed.

### Empty Values

If [Values][Values Property] is empty (i.e. `[]`) there are no values to match, therefore nothing can be removed and no operation is performed.

### No items matching a specified value in Values

If [List][List Property] does not contain items matching one of the specified [Values][Values Property], there is nothing to remove for that value.

### No items matching Values

If [List][List Property] does not contain items matching any of the specified [Values][Values Property], there is nothing to remove, so no operation is performed.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Values Property]: {{< ref "#values" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[Create a List&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.Generics.MainDoc" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
