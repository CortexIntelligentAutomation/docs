---
title: "Get Item At End"
linkTitle: "Get Item At End"
description: "Gets the item at the end of a List."
---

![Icon](/blocks/lists-get-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.Get.GetItemAtEndBlock`2)</p>

## Description

Gets the [Item][Item Property] at the end of a [List][List Property].

## Examples

### Get the Item at the end of a List

This example will get the item at the end of `["Some Text", 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Item][Item Property] | `($)Item`, with no value | `($)Item` is a variable that will be set to the type of the item (i.e. [Int32]) |

#### Result

Getting the item at the end of `["Some Text", 1]` results in the variable `($)Item` being updated to the following:

```json
1
```

***

## Properties

### List

The [List][List Property] to get the item from.  

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items in the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)List` with value `[]` |

### Item

The [Item][Item Property] at the end of [List][List Property].  
  
| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Output][] |
| Default Value | `($)Item` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyEmptyException][] | Thrown when [List][List Property] contains no items. |
| [PropertyNullException][] | Thrown when [List][List Property] is `null`. |

## Remarks

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [List Literals][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [List Expressions][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Item Property]: {{< ref "#item" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[List Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListLiterals" >}}
[List Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListExpressions" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[Dynamic]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dynamic" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}