---
title: "Get Index Of Item With Value"
linkTitle: "Get Index Of Item With Value"
description: "Gets the index of the specified occurrence of an item in a List matching a value."
---

![Icon](/blocks/lists-get-index-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.GetIndex.GetIndexOfItemWithValueBlock`2)</p>

## Description

Gets the [Index][Index Property] of the specified [Occurrence][Occurrence Property] of an item in a [List][List Property] matching a [Value][Value Property].

## Examples

### Get the Index of the first Occurrence of an item in a List matching a Value

This example will attempt to get the index of the first occurrence of an item matching the value `1` from `[1, 2, 3, 3, 2, 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[1, 2, 3, 3, 2, 1]` | `($)List` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Value][Value Property] | `($)Value`, with value `1` | `($)Value` is a variable of type [Int32][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `1` | `($)Occurrence` is a variable of type [Int32][] |
| [Index][Index Property] | `($)Index`, with no value | `($)Index` is a variable that will be set to an [Int32][] value |

#### Result

An [Occurrence][Occurrence Property] of `1` means the first occurrence; `2` means second etc.

Attempting to get the index of the first occurrence of an item matching the value `1` from `[1, 2, 3, 3, 2, 1]` results in the variable `($)Index` being updated to the following:

```json
0
```

***

### Get the Index of the last Occurrence of an item in a List matching a Value

This example will attempt to get the index of the last occurrence of an item matching the value `1` from `[1, 2, 3, 3, 2, 1]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[1, 2, 3, 3, 2, 1]` | `($)List` is a variable of type [IList][]&lt;[Int32][]&gt; |
| [Value][Value Property] | `($)Value`, with value `1` | `($)Value` is a variable of type [Int32][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `-1` | `($)Occurrence` is a variable of type [Int32][] |
| [Index][Index Property] | `($)Index`, with no value | `($)Index` is a variable that will be set to an [Int32][] value |

#### Result

An [Occurrence][Occurrence Property] of `-1`, means the last occurrence; `-2` means second last etc.

Attempting to get the index of the last occurrence of an item matching the value `1` from `[1, 2, 3, 3, 2, 1]` results in the variable `($)List` being updated to the following:

```json
5
```

***

## Properties

### List

The [List][List Property] to get the [Index][Index Property] of the specified [Occurrence][Occurrence Property] of matching item from.

Items are considered matching if they have the specified [Value][Value Property].

[List][List Property] can be any [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of items in the [List][List Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)List` with value `[]` |

### Value

The [Value][Value Property] the item to get the [Index][Index Property] of the specified [Occurrence][Occurrence Property] must match.

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Default Value | `($)Value` with value `null` |

### Occurrence

The [Occurrence][Occurrence Property] of matching item to get the [Index][Index Property] of.

Items are considered matching if they have the specified [Value][Value Property].

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Occurrence` with value `1` |

### Index

[Int32][] indicating the [Index][Index Property] of the specified [Occurrence][Occurrence Property] of item matching [Value][Value Property] in [List][List Property].

If there is no specified [Occurrence][Occurrence Property] of item matching [Value][Value Property] in [List][List Property], the specified variable will be set to `-1`.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Output][] |
| Default Value | `($)Index` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|-------------|
| [InvalidPropertyValueException][] | Thrown when [Value][Value Property] is `null` and [List][List Property] only accepts non-nullable value types. |
| [PropertyNullException][] | Thrown when [List][List Property] is `null`. |

## Remarks

### Item Equality

For information and examples of how it is determined whether an item matches a specified value, please see [Object Equality][].

### Occurrences

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

### Empty List

If [List][List Property] is empty (i.e. `[]`), the variable specified in the [Index][Index Property] property is set to `-1`.

### No items matching Value, or Occurrence is not present

If [List][List Property] does not contain items matching the specified [Value][Value Property] or the specified [Occurrence][Occurrence Property] is not present, the variable specified in the [Index][Index Property] property is set to `-1`.

### Occurrence is zero

If the [Occurrence][Occurrence Property] is set to `0`, the variable specified in the [Index][Index Property] property is set to `-1`.

### Defining lists using literal syntax

For information about how to define lists using literal syntax, see [List Literals][].

### Defining lists using expression syntax

For information about how to define lists using expression syntax, see [List Expressions][].

### Lists containing items of a single data type vs multiple data types

For information about the different types of lists, including those that can contain only a single type of item, and those that can contain multiple types of item, see [Lists][].

[List Property]: {{< ref "#list" >}}
[Value Property]: {{< ref "#value" >}}
[Occurrence Property]: {{< ref "#occurrence" >}}
[Index Property]: {{< ref "#index" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.Indexes.MainDoc" >}}
[Occurrences]: {{< url "Cortex.Reference.Concepts.Occurrences.MainDoc" >}}

[List Literals]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListLiterals" >}}
[List Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ListExpressions" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Common.Property.InvalidPropertyValueException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
