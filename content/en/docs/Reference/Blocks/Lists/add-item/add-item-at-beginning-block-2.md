---
title: "Add Item At Beginning"
linkTitle: "Add Item At Beginning"
description: "Adds an Item at the beginning of a List."
---

![Icon](/blocks/lists-add-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.AddItem.AddItemAtBeginningBlock`2)</p>

## Description

Adds an [Item][Item Property] at the beginning of a [List][List Property].

## Examples

### Add an Item at the beginning of an empty List

This example will add `"New Item"` at the beginning of `[]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Item][Item Property] | `($)Item`, with value `"New Item"` | `($)Item` is a variable of type [String][] |

#### Result

Adding `"New Item"` at the beginning of `[]` results in the variable `($)List` being updated to the following:

```json
["New Item"]
```

***

### Add an Item at the beginning of a List

This example will add `"New Item"` at the beginning of `["Some Text", 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `["Some Text", 1]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Item][Item Property] | `($)Item`, with value `"New Item"` | `($)Item` is a variable of type [String][] |

#### Result

Adding `"New Item"` at the beginning of `["Some Text", 1]` results in the variable `($)List` being updated to the following:

```json
["New Item", "Some Text", 1]
```

***

## Properties

### List

The [List][List Property] where the [Item][Item Property] is added.  

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items that can be added to the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)List` with value `[]` |

### Item

The [Item][Item Property] to be added at the beginning of the [List][List Property].

| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Default Value | `($)Item` with value `null` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyListException][] | Thrown when [List][List Property] is read-only. |
| [InvalidPropertyValueException][] | Thrown when [Item][Item Property] is `null` and [List][List Property] only accepts non-nullable value types. |
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
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[List Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListLiterals" >}}
[List Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListExpressions" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Common.Property.InvalidPropertyValueException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[Dynamic]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dynamic" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
