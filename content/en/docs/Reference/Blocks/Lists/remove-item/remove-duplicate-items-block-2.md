---
title: "Remove Duplicate Items"
linkTitle: "Remove Duplicate Items"
description: "Removes duplicate items from a List."
---

![Icon](/blocks/lists-remove-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.RemoveItem.RemoveDuplicateItemsBlock`2)</p>

## Description

Removes duplicate items from a [List][List Property].

## Examples

### Remove duplicate items from an empty List

This example will attempt to remove duplicate items from `[]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |

#### Result

Attempting to remove duplicate items from `[]` results in no operation, as there is nothing to remove. Therefore, the variable `($)List` remains:

```json
[]
```

***

### Remove duplicate items from a List without duplicates

This example will attempt to remove duplicate items from `["Some Text", 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |

#### Result

Attempting to remove duplicate items from `["Some Text", 1]` results in no operation, as there are no duplicates to remove. Therefore, the variable `($)List` remains:

```json
["Some Text", 1]
```

***

### Remove duplicate items from a List containing duplicates

This example will remove duplicate items from `["Some Text", 1, "Some Text", 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1, "Some Text", 1]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |

#### Result

Removing duplicate items from `["Some Text", 1, "Some Text", 1]` results in the second occurrences of `"Some Text"` and `1` being removed; with the variable `($)List` being updated to the following:

```json
["Some Text", 1]
```

***

## Properties

### List

The [List][List Property] where duplicate items are removed from.  

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items that can be removed from the [List][List Property].

For information and examples of how it is determined whether two items are considered the same, please see [Object Equality][].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)List` with value `[]` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyListException][] | Thrown when [List][List Property] is read-only. |
| [PropertyNullException][] | Thrown when [List][List Property] is `null`. |

## Remarks

### Empty List

If [List][List Property] is empty (i.e. `[]`) there is nothing to remove, so no operation is performed.

### List with no duplicates

If [List][List Property] does not contain duplicates there is nothing to remove, so no operation is performed.

### Which duplicates are removed?

If [List][List Property] contains duplicates, the first occurrences of the duplicated items are kept; all other occurrences are removed.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [List Literals][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [List Expressions][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}

[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[List Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListLiterals" >}}
[List Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListExpressions" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
