---
title: "Set Items At End"
linkTitle: "Set Items At End"
description: "Sets the items at the end of a List to new values."
---

{{< figure src="/blocks/Cortex_Blocks_Lists_SetItem_SetItemsAtEndBlock_2.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Lists.SetItem.SetItemsAtEndBlock`2)</p>

## Description

Sets the items at the end of a [List][List Property] to [New Values][NewValues Property].

## Examples

### Set the items at the end of a List to New Values

This example will set the second last and last items at the end of `["Some Text", 1, "Some More Text", 2]` to `["Some Modified Text", 10]` respectively.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1, "Some More Text", 2]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [New Values][NewValues Property] | `($)NewValues`, with value `["Some Modified Text", 10]` | `($)NewValues` is a variable of type [IEnumerable][]&lt;[dynamic][]&gt; |

#### Result

Setting the second last and last items at the end of `["Some Text", 1, "Some More Text", 2]` to `["Some Modified Text", 10]` respectively, results in the variable `($)List` being updated to the following:

```json
["Some Text", 1, "Some Modified Text", 10]
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
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)List` with no value |

### New Values

The [New Values][NewValues Property] to set the items at the end of [List][List Property] to.  

The number of items in [New Values][NewValues Property] determines the number of items that will be set at the end of [List][List Property]. One item means only the last item is set, two items means the second last and last items are set etc.

The last item in [List][List Property] will be set to the last value in [New Values][NewValues Property]; the second last item in [List][List Property] will be set to the second last value in [New Values][NewValues Property] etc.

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

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

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[NewValues Property]: {{< ref "#new-values" >}}

[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[Create a List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Lists]: {{< url path="Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url path="Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
