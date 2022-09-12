---
title: "Add Items At End"
linkTitle: "Add Items At End"
description: "Adds Items at the end of a List."
---

{{< figure src="/blocks/lists-add-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Lists.AddItem.AddItemsAtEndBlock`2)</p>

## Description

Adds [Items][Items Property] at the end of a [List][List Property].

## Examples

### Add Items at the end of an empty List

This example will add `["New Item 1", "New Item 2"]` at the end of `[]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Items][Items Property] | `($)Items`, with value `["New Item 1", "New Item 2"]` | `($)Items` is a variable of type [IEnumerable][]&lt;[String][]&gt; |

#### Result

Adding `["New Item 1", "New Item 2"]` at the end of `[]` results in the variable `($)List` being updated to the following:

```json
["New Item 1", "New Item 2"]
```

***

### Add Items at the end of a List

This example will add `["New Item 1", "New Item 2"]` at the end of `["Some Text", 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Items][Items Property] | `($)Items`, with value `["New Item 1", "New Item 2"]` | `($)Items` is a variable of type [IEnumerable][]&lt;[String][]&gt; |

#### Result

Adding `["New Item 1", "New Item 2"]` at the end of `["Some Text", 1]` results in the variable `($)List` being updated to the following:

```json
["Some Text", 1, "New Item 1", "New Item 2"]
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
| Default Value | `($)List` with value `[]` |

### Items

The [Items][Items Property] to be added at the end of the [List][List Property].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Items` with value `[]` |

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

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Items Property]: {{< ref "#items" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Create a List&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.WorkingWith.DataTypes.Generics.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
