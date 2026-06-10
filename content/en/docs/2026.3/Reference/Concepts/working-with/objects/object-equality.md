---
title: "Object Equality"
linkTitle: "Object Equality"
description: "Information regarding object equality, and what defines two objects as equal."
weight: 3
---

# {{% param title %}}

## Summary

**Object equality** is the rule used to decide whether two [objects][] represent the same thing. In C# and {{% ctx %}}, the answer depends on:

* Whether the objects are [value types][] or [reference types][]
* Whether comparison happens in a C# [expression][expressions] or in a [List][], [Dictionary][], or [Data Storage][] block
* How the [data type][] implements equality (for example [String][] compares by character content even though it is a reference type)

There are two main kinds of equality:

| Kind | Also called | Question answered |
| --- | --- | --- |
| [Value equality][] | Equivalence | Do the objects contain the same value or values? |
| [Reference equality][] | Identity | Do both variables refer to the same instance in memory? |

For how value and reference types affect assignment and copying, see [What is an Object?][]. For text-specific comparison rules (culture, case, and ordinal), see [Equality][] under Working with Text — that is separate from object equality on this page.

## Value type vs reference type equality

Every [object][] is an instance of a [data type][] that is either a [value type][value types] or a [reference type][reference types].

| | Value type | Reference type |
| --- | --- | --- |
| Examples | [Int32][], [Boolean][], [DateTime][] | [String][], [List&lt;TItem&gt;][], [Structure][], [Command][] |
| Typical C# `==` behaviour | Compares stored values | Compares references unless the type overrides `==` |
| [ReferenceEquals][] | Always `false` for two distinct variables (each holds a copy) | `true` only when both refer to the same instance |

The rest of this page explains each kind in more detail, then describes how {{% ctx %}} applies equality in [expressions][] versus [collection blocks][].

## Value type equality

**Value equality** means two objects contain the same value. For [value types][], C# compares the actual data stored in each variable.

In the [Expression Editor][], you usually test value equality with `==` or `!=`:

| Scenario | Expression | Result | Notes |
| --- | --- | --- | --- |
| Same values | `($)A == ($)B` where both hold `42` | `true` | [Int32][] values are equal |
| Different values | `($)A == ($)B` where `($)A` is `1` and `($)B` is `2` | `false` | Values differ |
| Default comparison | `($)Flag == true` | Depends on `($)Flag` | [Boolean][] uses value equality |

When you assign a value type to another [variable][] with [Set Variable][], each variable holds its own copy. Changing one does not change the other. Equality is still based on the values they contain, not on sharing memory.

[Collection blocks][] use [value equality][] for value-type items and keys — the same rules as C# expressions in practice.

For general C# guidance, see [Equality comparisons (C#)][MS Equality] and [Value types][MS Value Types].

## Reference type equality

**Reference equality** means two variables refer to the same underlying object instance. **Value equality** for a reference type means two different instances are treated as equal because their contents match — but only if the type defines that behaviour.

### In C# expressions

For most reference types, the `==` operator tests [reference equality][] unless the type provides its own definition:

| Scenario | Expression | Result | Notes |
| --- | --- | --- | --- |
| Same instance | `($)A == ($)B` after `($)B = ($)A` | `true` | Both variables refer to one object |
| Different instances, same content | Two [Structure][] variables each set to `{ "Name": "Ada", "Count": 3 }` | `false` with `==` | Separate instances; reference equality |
| Identity test | `Object.ReferenceEquals(($)A, ($)B)` | `false` for two new [Structure][] instances with identical fields | Explicit [reference equality][] |
| Content test | `($)A.Equals(($)B)` | Depends on type | Uses the type's `Equals` implementation |

Use [Object.ReferenceEquals][] when you specifically need identity, not equivalence.

#### Types that compare by value in expressions

Some reference types override `==` and `Equals` to compare content:

* **[String][]** — `"hello" == "hello"` is `true` even when the strings are different instances.
* Other .NET types may define their own rules; always check the type documentation when comparing values matters.

When comparing [String][] values in flows, also consider [text equality][] rules if you use text blocks or comparison types — object equality and text equality are not always interchangeable.

### Worked example: two Structure instances

Assume:

* `($)StructureA` is set to `{ "Product": "Widget", "Qty": 5 }`
* `($)StructureB` is set to `{ "Product": "Widget", "Qty": 5 }` in a separate [Set Variable][] step (a new instance)

| Context | Comparison | Result |
| --- | --- | --- |
| [Expression Editor][] | `($)StructureA == ($)StructureB` | `false` |
| [Expression Editor][] | `Object.ReferenceEquals(($)StructureA, ($)StructureB)` | `false` |
| [Remove Item With Value][] block | [List][] contains `($)StructureA`; [Value][] is `($)StructureB` | Item is removed — block treats instances as equal |

This difference is the most common source of confusion when working with reference types in flows.

For general C# guidance, see [Equality comparisons (C#)][MS Equality] and [Reference types][MS Reference Types].

## Comparing objects in expressions

The [Expression Editor][] supports the standard C# equality and comparison operators. The following table summarises the main approaches:

| Mechanism | Typical use | Reference types (default) | Value types |
| --- | --- | --- | --- |
| `==` / `!=` | Most comparisons in flows | [Reference equality][] (unless type overrides) | [Value equality][] |
| `.Equals(other)` | When type defines custom equivalence | Depends on type implementation | [Value equality][] |
| `Object.ReferenceEquals(a, b)` | Test same instance | [Reference equality][] | Always `false` for two boxed value-type variables |

Comparison expressions such as `($)Int1 == ($)Int2` are documented in [Comparison expressions][] in the Expression Editor reference. For operator details, see [Equality Operators][MS Equality Operators].

## How {{% ctx %}} compares objects in blocks

Many [List][], [Dictionary][], and [Data Storage][] blocks must decide whether an item or key **matches** a value you supply — for example when using [Contains Item With Value][], [Remove Item With Value][], [Get Item With Key][], or [Add Item With Key][].

Block matching uses a different rule from bare C# `==` for reference types:

| Context | How equality is determined |
| --- | --- |
| C# syntax in the [Expression Editor][] | [Reference equality][] for reference types and [value equality][] for value types, following standard C# rules (including `==` and `Equals` where applicable). |
| [List][], [Dictionary][], and [Data Storage][] blocks | For reference types, [reference equality][] is tried first; if no matching reference is found, comparison falls back to [value equality][]. For value types, [value equality][] is used. |

### Why the fallback exists

Collection blocks often need to find items that **look the same** even when they are not the same object reference — for example two [Structure][] instances with identical fields, or a search value built in a separate step from the item stored in the list.

The fallback applies only in block matching logic. It does not change how `==` behaves in expressions.

### Dictionary keys and reference-only types

For typical scalar keys ([String][], [Int32][], [Boolean][], and similar), two keys with the same value are the same key. A [Dictionary][] cannot store duplicate equal keys of those types.

Some reference types — for example [IList][]&lt;[Int32][]&gt; used as `TKey` — implement equality by reference only in standard C#. That means:

* The same dictionary can contain multiple entries whose keys **print** the same (for example two separate `[1]` list instances) because they are different references.
* When a block searches with a key you supply, it still applies the block rule: [reference equality][] first, then [value equality][] fallback. A key value of `[1]` can match more than one stored key instance. See [Get Item With Key][] for an example with [Occurrence][].

For duplicate keys or values in dictionaries, **which entry is the 1st or 2nd match** follows the underlying .NET implementation and is not documented as stable. Prefer [List][] when order must be predictable. See [Occurrences][].

## Blocks that use object equality

Object equality rules apply wherever a block compares items or keys by value, including:

### List blocks

* **By value** — [Contains Item With Value][], [Remove Item With Value][], [Remove Items With Value][], [Set Item With Value][], [Set Items With Value][], [Get Index Of Item With Value][], [Get Indexes Of Items With Value][], [Get Count Of Items With Value][], [Get Count Of Items With Values][]
* **Duplicates** — [Remove Duplicate Items][] (decides whether two items are the same)

### Dictionary blocks

* **By key** — [Contains Item With Key][], [Contains Items With Keys][], [Add Item With Key][], [Get Item With Key][], [Get Items With Key][], [Set Item With Key][], [Set Items With Key][], [Remove Item With Key][], [Remove Items With Keys][]
* **By value** — [Contains Dictionary Item With Value][], [Contains Items With Values][], [Contains Item With Key And Value][], [Remove Dictionary Item With Value][], [Remove Items With Values][], [Set Dictionary Item With Value][], [Set Dictionary Items With Value][], [Get Dictionary Count Of Items With Value][], [Get Dictionary Count Of Items With Values][], [Get Counts Of Items With Values][]

### Data Storage blocks

[Data Storage][] blocks that read or write by key (for example [Read Data With Key][] and [Write Data With Key][]) use the same key-matching rule as [Dictionary][] blocks. Keys in a [Data Storage Collection][] are [String][] and are case sensitive.

Individual block pages link here for full matching behaviour. See also [Comparing and matching items][] and [Comparing keys][].

## Remarks

### Equality vs assignment

Assigning one [variable][] to another with [Set Variable][] does not make two reference-type objects equal in the sense of [reference equality][] — it makes two variables refer to the **same** instance. Creating a copy with [Copy Object][] produces a new instance that may be [value equal][] to the original but is not reference equal.

### Floating-point values

Equality comparisons of [Double][] and [Single][] values can be affected by floating-point precision. Do not rely on `==` alone for decimal fractions without understanding rounding behaviour. See [System.Double][] remarks in the .NET documentation.

### Null

Comparing to `null` follows C# rules: for reference types, `== null` tests whether the reference is missing; [value types][] (except [Nullable][] types) cannot be `null` unless wrapped in `Nullable<T>`.

### Known Limitations

* Block matching rules apply to [List][], [Dictionary][], and [Data Storage][] blocks as described above. Other blocks may use different comparison logic (for example text blocks use [Comparison Type][] and [Search Options][]).
* Whether [value equality][] fallback succeeds depends on how the [data type][] implements `Equals`. Types that only support [reference equality][] (such as [IList][]&lt;[Int32][]&gt; as a dictionary key) behave differently from types like [Structure][] or [String][].
* For [Dictionary][] entries with duplicate keys or values, occurrence order is not guaranteed to be stable across platforms or versions.

## See Also

### Related Concepts

* [What is an Object?][]
* [Object Casting][]
* [What is a Data Type?][]
* [Collections][]
* [Items][]
* [Keys][]
* [Occurrences][]
* [Equality][] (text)

### Related Data Types

* [Object][]
* [Structure][]
* [String][]
* [List&lt;TItem&gt;][]
* [Dictionary&lt;TKey, TItem&gt;][]
* [Int32][]

### Related Blocks

* [Remove Item With Value][]
* [Contains Item With Value][]
* [Get Item With Key][]
* [Add Item With Key][]
* [Remove Duplicate Items][]
* [Copy Object][]

### External Documentation

* [Equality comparisons (C#)][MS Equality]
* [Equality Operators (C# reference)][MS Equality Operators]
* [Value types (C#)][MS Value Types]
* [Reference types (C#)][MS Reference Types]
* [System.Object][MS Object]

[value equality]: {{< ref "#value-type-equality" >}}
[reference equality]: {{< ref "#reference-type-equality" >}}
[value equal]: {{< ref "#value-type-equality" >}}
[collection blocks]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
[Comparing and matching items]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[Comparing keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[text equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}

[objects]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.WhatIsAnObject.MainDoc" >}}
[What is an Object?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.WhatIsAnObject.MainDoc" >}}
[Object Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.MainDoc" >}}
[Collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
[Items]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[Occurrences]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}
[Occurrence]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}
[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}

[What is a Data Type?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}
[data type]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}
[value types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.ValueTypes" >}}
[reference types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.ReferenceTypes" >}}

[object]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.WhatIsAnObject.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Comparison expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[ReferenceEquals]: {{< url path="MSDocs.DotNet.Api.System.Object.ReferenceEquals" >}}
[Object.ReferenceEquals]: {{< url path="MSDocs.DotNet.Api.System.Object.ReferenceEquals" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[Double]: {{< url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[Single]: {{< url path="Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[DateTime]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[Command]: {{< url path="Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Nullable]: {{< url path="Cortex.Reference.DataTypes.Other.Nullable.MainDoc" >}}

[Data Storage]: {{< url path="Cortex.Reference.Blocks.DataStorage.MainDoc" >}}
[Data Storage Collection]: {{< ref "../collections/what-is-a-collection.md#data-storage-collection" >}}

[Set Variable]: {{< url path="Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}
[Copy Object]: {{< url path="Cortex.Reference.Blocks.Objects.CopyObject.CopyObject.MainDoc" >}}

[Contains Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.ContainsItem.ContainsItemWithValue.MainDoc" >}}
[Remove Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemWithValue.MainDoc" >}}
[Remove Items With Value]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsWithValue.MainDoc" >}}
[Set Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemWithValue.MainDoc" >}}
[Set Items With Value]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemsWithValue.MainDoc" >}}
[Get Index Of Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.GetIndex.GetIndexOfItemWithValue.MainDoc" >}}
[Get Indexes Of Items With Value]: {{< url path="Cortex.Reference.Blocks.Lists.GetIndex.GetIndexesOfItemsWithValue.MainDoc" >}}
[Get Count Of Items With Value]: {{< url path="Cortex.Reference.Blocks.Lists.GetCount.GetCountOfItemsWithValue.MainDoc" >}}
[Get Count Of Items With Values]: {{< url path="Cortex.Reference.Blocks.Lists.GetCount.GetCountOfItemsWithValues.MainDoc" >}}
[Remove Duplicate Items]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveDuplicateItems.MainDoc" >}}

[Contains Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemWithKey.MainDoc" >}}
[Contains Items With Keys]: {{< url path="Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemsWithKeys.MainDoc" >}}
[Add Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.AddItem.AddItemWithKey.MainDoc" >}}
[Get Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.GetItem.GetItemWithKey.MainDoc" >}}
[Get Items With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.GetItem.GetItemsWithKey.MainDoc" >}}
[Set Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemWithKey.MainDoc" >}}
[Set Items With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemsWithKey.MainDoc" >}}
[Remove Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemWithKey.MainDoc" >}}
[Remove Items With Keys]: {{< url path="Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemsWithKeys.MainDoc" >}}
[Contains Dictionary Item With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemWithValue.MainDoc" >}}
[Contains Items With Values]: {{< url path="Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemsWithValues.MainDoc" >}}
[Contains Item With Key And Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemWithKeyAndValue.MainDoc" >}}
[Remove Dictionary Item With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemWithValue.MainDoc" >}}
[Remove Items With Values]: {{< url path="Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemsWithValues.MainDoc" >}}
[Set Dictionary Item With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemWithValue.MainDoc" >}}
[Set Dictionary Items With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemsWithValue.MainDoc" >}}
[Get Dictionary Count Of Items With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.GetCount.GetCountOfItemsWithValue.MainDoc" >}}
[Get Dictionary Count Of Items With Values]: {{< url path="Cortex.Reference.Blocks.Dictionaries.GetCount.GetCountsOfItemsWithValues.MainDoc" >}}
[Get Counts Of Items With Values]: {{< url path="Cortex.Reference.Blocks.Dictionaries.GetCount.GetCountsOfItemsWithValues.MainDoc" >}}

[Read Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.ReadData.ReadDataWithKeyBlock.MainDoc" >}}
[Write Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.WriteData.WriteDataWithKeyBlock.MainDoc" >}}

[Value]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemWithValue.MainDoc" >}}
[Comparison Type]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.MainDoc" >}}
[Search Options]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.MainDoc" >}}

[MS Equality]: {{< url path="MSDocs.CSharp.EqualityOperators" >}}
[MS Equality Operators]: {{< url path="MSDocs.CSharp.EqualityOperators" >}}
[MS Value Types]: {{< url path="MSDocs.CSharp.ValueTypes" >}}
[MS Reference Types]: {{< url path="MSDocs.CSharp.ReferenceTypes" >}}
[MS Object]: {{< url path="MSDocs.DotNet.Api.System.Object.MainDoc" >}}
[System.Double]: {{< url path="MSDocs.DotNet.Api.System.Double.MainDoc" >}}
