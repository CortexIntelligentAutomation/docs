---
title: "Contains Item With Value"
linkTitle: "Contains Item With Value"
description: "Checks if a List contains at least one item matching the specified value."
---

{{< figure src="/blocks/lists-contains-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.ContainsItem.ContainsItemWithValueBlock`2)</p>

## Description

Checks if [List][List Property] contains at least one item matching [Value][Value Property].

## Examples

### List contains item with Value

This example will check whether `[1, 2, 3, 3, 2, 1]` contains the value `1`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[1, 2, 3, 3, 2, 1]` | `($)List` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Value][Value Property] | `($)Value`, with value `1` | `($)Value` is a variable of type [Int32][] |
| [Contains Item][ContainsItem Property] | `($)ContainsItem`, with no value | `($)ContainsItem` is a variable that will be set to a [Boolean][] value |

#### Result

`[1, 2, 3, 3, 2, 1]` contains two items with the value `1`. Therefore, the variable `($)ContainsItem` will be updated to the following:

```json
true
```

***

### List does not contain item with Value

This example will check whether `[1, 2, 3, 3, 2, 1]` contains the value `10`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[1, 2, 3, 3, 2, 1]` | `($)List` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Value][Value Property] | `($)Value`, with value `10` | `($)Value` is a variable of type [Int32][] |
| [Contains Item][ContainsItem Property] | `($)ContainsItem`, with no value | `($)ContainsItem` is a variable that will be set to a [Boolean][] value |

#### Result

`[1, 2, 3, 3, 2, 1]` does not contain any items with the value `10`. Therefore, the variable `($)ContainsItem` will be updated to the following:

```json
false
```

***

## Properties

### List

The [List][List Property] to check whether it contains at least one item matching the specified [Value][Value Property].

Items are considered matching if they have the specified [Value][Value Property].

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items in the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)List` with no value |

### Value

The [Value][Value Property] to check for matching items.

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Expression][TODO] |
| Default Value | No value (defaults to `null`) |

### Contains Item

The result of the contains item check.

If [List][List Property] contains at least one item matching the specified [Value][Value Property], the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)ContainsItem` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [InvalidPropertyValueException][] | Thrown when [Value][Value Property] is `null` and [List][List Property] only accepts non-nullable value types. See [Value Is Invalid][]. |
| [PropertyNullException][] | Thrown when [List][List Property] is `null`. |

## Remarks

### Item Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Empty List

If [List][List Property] is empty (i.e. `[]`), the variable specified in the [Contains Item][ContainsItem Property] property is set to `false`.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [List Literals][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [List Expressions][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Value Property]: {{< ref "#value" >}}
[ContainsItem Property]: {{< ref "#contains-item" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[List Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListLiterals" >}}
[List Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListExpressions" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
