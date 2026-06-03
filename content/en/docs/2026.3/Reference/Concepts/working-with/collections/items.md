---
title: "Items"
linkTitle: "Items"
description: "Information related to working with items in collections."
weight: 100
---

# {{% param title %}}

## Summary

An **item** is a single value stored in a [collection][]. Collections group items so they can be passed between blocks, read or updated in expressions, and processed in a flow.

In collection data types, the item type is usually written as `TItem` (a [generic type parameter][]). For example, in `List<Int32>` each item is an `Int32`; in `Dictionary<String, dynamic>` each item may be any data type. See [What is a Collection?][] for how collection types differ.

| Collection type | How items are identified | Item type parameter |
| --- | --- | --- |
| [Dictionary&lt;TKey, TItem&gt;][] | [Key][] | `TItem` |
| [Structure][] | [String][] [key][] or property name | Any data type |
| [List&lt;TItem&gt;][] | Zero-based [index][] | `TItem` |
| [Array][] | Zero-based [index][] | Element type of the array |
| [QueueWithPriority&lt;TItem, TPriority&gt;][] | Position in queue (not random access) | `TItem` |
| [Data Storage Collection][] | [String][] [key][] (`Data` value) | [dynamic][] |

Items are not the same as [keys][]: in key/item collections, the key is used to look up the item. In ordered collections, the [index][] (or [occurrence][] when matching by value) identifies which item you mean.

## Item data types

### Homogenous and heterogenous items

A collection is [homogenous][] when every item has the same data type (for example `List<Int32>` or `Dictionary<String, String>`). It is [heterogenous][] when items may have different data types (for example `List<dynamic>`, `List<Object>`, or `Dictionary<String, dynamic>`).

Literal syntax in the [Expression Editor][] often infers item types from the values you provide—for example `[1, 2, 3]` creates a `List<Int32>`, while `["Some Text", true, 1]` creates a `List<dynamic>`. See [Create a List&lt;TItem&gt;][] and [Create a Dictionary&lt;TKey, TItem&gt;][].

### Null items

Whether an item can be `null` depends on the collection and how it is used:

* [Keys][] cannot be `null` in dictionaries and structures.
* Items may be `null` in some collections (for example a `List<String>` may contain `null` entries). Some blocks throw [InvalidPropertyValueException][] when `null` is not allowed for the declared `TItem` type.

Check the block or data type documentation for the collection you are using.

## Accessing items

### In the Expression Editor

How you read or assign an item depends on the collection type:

| Collection type | Typical syntax | More information |
| --- | --- | --- |
| [List&lt;TItem&gt;][] / [Array][] | `list[0]`, `list[^1]`, `list[0..2]` | [Index expressions][], [Indexes][] |
| [Dictionary&lt;TKey, TItem&gt;][] | `dictionary["Key1"]` | [Index expressions][], [Keys][] |
| [Structure][] | `structure.Name` or `structure["any-key"]` | [Property expressions][], [Index expressions][] |

[List][] and [Array][] items use zero-based indexes. [Dictionary][] and [Structure][] items use keys. Range and index-from-end syntax (`^1`, `..`) follow C# rules; see [Indices and Ranges][] in the [Expression Editor][] documentation.

### With blocks

[Dictionary][], [List][], [Queue][], and [Data Storage][] blocks expose properties such as `Item`, `Value`, or `Data` for the item being added, read, updated, or removed. Access patterns include:

* **By key** — [Get Item With Key][], [Set Item With Key][], [Read Data With Key][]
* **By index** — [Get Item At Index][], [Set Item At Index][]
* **By value and occurrence** — [Remove Item With Value][], [Get Index Of Item With Value][] (see [Occurrences][])
* **Queue order** — [Enqueue Item][], [Dequeue Item][], [Peek Item][] (items are not selected by index or key)

For a full list of collection types and access patterns, see [What is a Collection?][].

## Comparing and matching items

Many blocks need to know whether an item in a collection **matches** a value you supply—for example when removing items with a given value or checking whether a key is already present.

How matching works depends on whether you use C# expressions or blocks:

| Context | How equality is determined |
| --- | --- |
| C# syntax in the [Expression Editor][] | [Reference equality][] for reference types and [value equality][] for value types, following standard C# rules (including `==` and `Equals` where applicable). |
| [List][] and [Dictionary][] blocks | For reference types, [reference equality][] is tried first; if no matching reference is found, comparison falls back to [value equality][]. For value types, [value equality][] is used. |

This difference matters when items are reference types (for example two different `Structure` instances with the same field values). Blocks may treat them as equal when C# `==` would not.

For examples and affected blocks, see [Object Equality][]. For general C# equality rules, see [Equality comparisons][MS Equality].

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

* [Collections][]
* [What is a Collection?][]
* [Keys][]
* [Indexes][]
* [Occurrences][]
* [Generics][]
* [Object Equality][]

### Related Data Types

* [Dictionary&lt;TKey, TItem&gt;][]
* [Structure][]
* [List&lt;TItem&gt;][]
* [Array][]
* [QueueWithPriority&lt;TItem, TPriority&gt;][]
* [IDictionary&lt;TKey, TItem&gt;][]
* [IList&lt;TItem&gt;][]
* [dynamic][]

### Related Blocks

* [Dictionary][] blocks (for example [Add Item With Key][], [Get Item With Key][])
* [List][] blocks (for example [Add Item At End][], [Get Item At Index][], [Remove Item With Value][])
* [Queue][] blocks (for example [Enqueue Item][], [Dequeue Item][], [Peek Item][])
* [Data Storage][] blocks (for example [Read Data With Key][], [Write Data With Key][])

### External Documentation

* [System.Collections.Generic.Dictionary&lt;TKey, TItem&gt;][MS Dictionary]
* [System.Collections.Generic.List&lt;TItem&gt;][MS List]
* [System.Array][MS Array]
* [Equality comparisons (C#)][MS Equality]

[Collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
[What is a Collection?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.MainDoc" >}}
[collection]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[key]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[Indexes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[index]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Occurrences]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}
[occurrence]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}
[Generics]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[generic type parameter]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[homogenous]: {{< url path="Cortex.Reference.Glossary.F-J.Homogenous" >}}
[heterogenous]: {{< url path="Cortex.Reference.Glossary.F-J.Heterogenous" >}}
[reference equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[value equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}

[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Array]: {{< url path="Cortex.Reference.DataTypes.Collections.Array.MainDoc" >}}
[Queue]: {{< url path="Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}
[QueueWithPriority&lt;TItem, TPriority&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}
[IDictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IList&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Create a List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Index expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.IndexExpressions" >}}
[property expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.PropertyExpressions" >}}
[Indices and Ranges]: {{< url path="MSDocs.CSharp.IndicesAndRanges" >}}

[Data Storage Collection]: {{< ref "what-is-a-collection.md#data-storage-collection" >}}
[Data Storage]: {{< url path="Cortex.Reference.Blocks.DataStorage.MainDoc" >}}

[Add Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.AddItem.AddItemWithKey.MainDoc" >}}
[Get Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.GetItem.GetItemWithKey.MainDoc" >}}
[Set Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemWithKey.MainDoc" >}}
[Add Item At End]: {{< url path="Cortex.Reference.Blocks.Lists.AddItem.AddItemAtEnd.MainDoc" >}}
[Get Item At Index]: {{< url path="Cortex.Reference.Blocks.Lists.GetItem.GetItemAtIndex.MainDoc" >}}
[Set Item At Index]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemAtIndex.MainDoc" >}}
[Remove Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemWithValue.MainDoc" >}}
[Get Index Of Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.GetIndex.GetIndexOfItemWithValue.MainDoc" >}}
[Enqueue Item]: {{< url path="Cortex.Reference.Blocks.Queues.EnqueueItem.EnqueueItemBlock.MainDoc" >}}
[Dequeue Item]: {{< url path="Cortex.Reference.Blocks.Queues.DequeueItem.DequeueItemBlock.MainDoc" >}}
[Peek Item]: {{< url path="Cortex.Reference.Blocks.Queues.PeekItem.PeekItemBlock.MainDoc" >}}
[Read Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.ReadData.ReadDataWithKeyBlock.MainDoc" >}}
[Write Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.WriteData.WriteDataWithKeyBlock.MainDoc" >}}

[InvalidPropertyValueException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}

[MS Dictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.Dictionary" >}}
[MS List]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.List" >}}
[MS Array]: {{< url path="MSDocs.DotNet.Api.System.Array" >}}
[MS Equality]: {{< url path="MSDocs.CSharp.EqualityOperators" >}}
