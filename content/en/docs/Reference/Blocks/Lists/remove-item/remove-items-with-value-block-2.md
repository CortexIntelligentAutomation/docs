---
title: "Remove Items With Value"
linkTitle: "Remove Items With Value"
description: "Removes all items matching a value from a List."
---

{{< figure src="/blocks/lists-remove-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Lists.RemoveItem.RemoveItemsWithValueBlock`2)</p>

## Description

Removes all items matching a [Value][Value Property] from a [List][List Property].

## Examples

### Remove all items matching a Value from an empty List

This example will attempt to remove all items matching the value `1` from `[]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[]` | `($)List` is a variable of type [IList][]&lt;[dynamic][]&gt; |
| [Value][Value Property] | `($)Value`, with value `1` | `($)Value` is a variable of type [Int32][] |

#### Result

Attempting to remove all items matching the value `1` from `[]` results in no operation, as there is nothing to remove. Therefore, the variable `($)List` remains:

```json
[]
```

***

### Remove all items matching a Value from a List

This example will attempt to remove all items matching the value `1` from `[1, 2, 3, 3, 2, 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[1, 2, 3, 3, 2, 1]` | `($)List` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Value][Value Property] | `($)Value`, with value `1` | `($)Value` is a variable of type [Int32][] |

#### Result

Attempting to remove all items matching the value `1` from `[1, 2, 3, 3, 2, 1]` results in the variable `($)List` being updated to the following:

```json
[2, 3, 3, 2]
```

***

## Properties

### List

The [List][List Property] to remove all matching items from.

Items are considered matching if they have the specified [Value][Value Property].

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items that can be removed from the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)List` with no value |

### Value

The [Value][Value Property] the items to remove must match.

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyListException][] | Thrown when [List][List Property] is read-only. |
| [InvalidPropertyValueException][] | Thrown when [Value][Value Property] is `null` and [List][List Property] only accepts non-nullable value types. See [Value Is Invalid][]. |
| [PropertyNullException][] | Thrown when [List][List Property] is `null`. |

## Remarks

### Item Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Empty List

If [List][List Property] is empty (i.e. `[]`) there is nothing to remove, so no operation is performed.

### No items matching Value

If [List][List Property] does not contain items matching the specified [Value][Value Property], there is nothing to remove, so no operation is performed.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [Create a List&lt;TItem&gt;][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [Create a List&lt;TItem&gt;][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Value Property]: {{< ref "#value" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Create a List&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
