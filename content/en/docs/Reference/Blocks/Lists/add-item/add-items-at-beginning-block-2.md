---
title: "Add Items At Beginning"
linkTitle: "Add Items At Beginning"
description: "Adds Items at the beginning of a List."
---

{{< figure src="/blocks/lists-add-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.AddItem.AddItemsAtBeginningBlock`2)</p>

## Description

Adds [Items][Items Property] at the beginning of a [List][List Property].

## Examples

### Add Items at the beginning of an empty List

This example will add `["New Item 1", "New Item 2"]` at the beginning of `[]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Items][Items Property] | `($)Items`, with value `["New Item 1", "New Item 2"]` | `($)Items` is a variable of type [IEnumerable][]&lt;[String][]&gt; |

#### Result

Adding `["New Item 1", "New Item 2"]` at the beginning of `[]` results in the variable `($)List` being updated to the following:

```json
["New Item 1", "New Item 2"]
```

***

### Add Items at the beginning of a List

This example will add `["New Item 1", "New Item 2"]` at the beginning of `["Some Text", 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Items][Items Property] | `($)Items`, with value `["New Item 1", "New Item 2"]` | `($)Items` is a variable of type [IEnumerable][]&lt;[String][]&gt; |

#### Result

Adding `["New Item 1", "New Item 2"]` at the beginning of `["Some Text", 1]` results in the variable `($)List` being updated to the following:

```json
["New Item 1", "New Item 2", "Some Text", 1]
```

***

## Properties

### List

The [List][List Property] where the [Items][Items Property] are added.  

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items that can be added to the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [InputOutput][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)List` with no value |

### Items

The [Items][Items Property] to be added at the beginning of the [List][List Property].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Expression][TODO] |
| Default Value | No value (defaults to `null`) |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyListException][] | Thrown when [List][List Property] is read-only. |
| [PropertyNullException][] | Thrown when [List][List Property] or [Items][Items Property] is `null`. |

## Remarks

### Empty Items

If [Items][Items Property] is empty (i.e. `[]`) there is nothing to add, so no operation is performed.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [List Literals][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [List Expressions][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Items Property]: {{< ref "#items" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[List Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListLiterals" >}}
[List Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListExpressions" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
