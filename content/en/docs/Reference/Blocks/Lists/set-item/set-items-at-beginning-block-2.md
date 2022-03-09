---
title: "Set Items At Beginning"
linkTitle: "Set Items At Beginning"
description: "Sets the items at the beginning of a List to new values."
---

{{< figure src="/blocks/lists-set-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.SetItem.SetItemsAtBeginningBlock`2)</p>

## Description

Sets the items at the beginning of a [List][List Property] to [New Values][NewValues Property].

## Examples

### Set the items at the beginning of a List to New Values

This example will set the first and second items at the beginning of `["Some Text", 1, "Some More Text", 2]` to `["Some Modified Text", 10]` respectively.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1, "Some More Text", 2]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [New Values][NewValues Property] | `($)NewValues`, with value `["Some Modified Text", 10]` | `($)NewValues` is a variable of type [IEnumerable][]&lt;[dynamic][]&gt; |

#### Result

Setting the first and second items at the beginning of `["Some Text", 1, "Some More Text", 2]` to `["Some Modified Text", 10]` respectively, results in the variable `($)List` being updated to the following:

```json
["Some Modified Text", 10, "Some More Text", 2]
```

***

## Properties

### List

The [List][List Property] to set the items in.  

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items in the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)List` with value `[]` |

### New Values

The [New Values][NewValues Property] to set the items at the beginning of [List][List Property] to.  

The number of items in [New Values][NewValues Property] determines the number of items that will be set at the beginning of [List][List Property]. One item means only the first item is set, two items means the first and second items are set etc.

The first item in [List][List Property] will be set to the first value in [New Values][NewValues Property]; the second item in [List][List Property] will be set to the second value in [New Values][NewValues Property] etc.

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)NewValues` with value `[]` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|-------------|
| [CannotModifyReadOnlyListException][] | Thrown when [List][List Property] is read-only. |
| [PropertyEmptyException][] | Thrown when [List][List Property] contains no items. |
| [PropertyNullException][] | Thrown when [List][List Property] or [New Values][NewValues Property] is `null`. |

## Remarks

### Empty New Values

If [New Values][NewValues Property] is empty (i.e. `[]`) there is nothing to set, so no operation is performed.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [List Literals][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [List Expressions][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[NewValues Property]: {{< ref "#new-values" >}}

[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[List Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListLiterals" >}}
[List Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListExpressions" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.MostCommon.IEnumerable" >}}
[Dynamic]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dynamic" >}}
