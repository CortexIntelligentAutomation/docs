---
title: "What is a Collection?"
linkTitle: "What is a Collection?"
description: "Information regarding what a collection is, and the different types of collections."
weight: 1
---

# {{% param title %}}

## Summary

A collection is a data type that groups multiple items into a single value.
In CORTEX, collections are commonly used to model ordered data,
key/value data, and persisted key/value data.

In C# terms, collections are typically enumerable (`IEnumerable`) and may
provide index-based access (`IList<TItem>`) or key-based access
(`IDictionary<TKey, TItem>`).

## Types of Collections

### Dictionaries

A [Dictionary&lt;TKey, TItem&gt;][Dictionary] is a collection of key/item pairs:

- `TKey` defines the key type
- `TItem` defines the item type
- items are accessed by key (for example `Dictionary["SomeKey"]`)

Dictionaries can be homogeneous (for example `Dictionary<String, Int32>`)
or heterogeneous (for example `Dictionary<String, dynamic>`). Keys must be
unique within the dictionary.

#### Accessing Dictionary Items

##### Dictionary Keys

Dictionary items are accessed using [keys][Keys] and
[index expressions][Index expressions].

For creating dictionary values, see
[Create a Dictionary&lt;TKey, TItem&gt;][Create a Dictionary].

### Structures

A [Structure][] is a specialised key/item collection:

- keys are always `String`
- items can be any data type
- it behaves like an `IDictionary<String, Object>` style collection

Structures support both key access and property-style access.

#### Accessing Structure Items

##### Properties

Structure items can be accessed using property syntax when the key is a
valid C# identifier (for example `Structure.SomeKey`).

##### Structure Keys

Structure items can also be accessed using [keys][Keys] with
[index expressions][Index expressions] (for example
`Structure["Some Key"]`), including keys that are not valid C# identifiers.

For creating structure values, see [Create a Structure][].

### Lists

A [List&lt;TItem&gt;][List] is an ordered collection:

- `TItem` defines the item type
- items are accessed by zero-based index
- lists can be homogeneous (for example `List<Int32>`) or
  heterogeneous (for example `List<dynamic>`)

#### Accessing List Items

##### Indexes

List items are accessed by [indexes][Indexes] (for example `List[0]`) and
support ranges in expressions.

For creating list values, see [Create a List&lt;TItem&gt;][Create a List].

### Queues

In CORTEX, queue operations are commonly performed using
[QueueWithPriority&lt;TItem, TPriority&gt;][QueueWithPriority]:

- items are ordered by priority
- items with the same priority preserve first-in-first-out (FIFO) order

Queues are typically used through queue blocks such as [Enqueue Item][],
[Peek Item][], and [Dequeue Item][].

### Data Storage Collection

A Data Storage Collection is a persisted key/value collection in the
Data Storage service:

- items are written and read using a key
- item values can be any serialisable data type
- collection access is controlled by [Collection Scope][]
- collection names are case-insensitive

Data Storage Collections are managed using [Create Collection][],
[Write Data With Key][], [Read Data With Key][],
and [Delete Data With Key][].

## Arrays vs Lists

### Differences

Arrays and Lists are both ordered, index-based collections, but they differ
in behaviour:

- arrays are fixed-size once created
- lists are dynamically sized and support item add/remove operations
- arrays are represented by `System.Array` and concrete array types such as `String[]`
- lists are represented by `List<TItem>` and `IList<TItem>`

### When To Use Arrays

Use arrays when:

- the size is known and fixed
- an API specifically requires an array type
- you do not need add/remove operations

### When To Use Lists

Use lists when:

- item count changes over time
- you need convenient add/remove operations
- you are working with CORTEX list blocks and list-focused expressions

## Remarks

### Known Limitations

#### Complex Keys do not show correctly in the Variable Details Viewer

Currently, if a Dictionary is shown in the Variable Details Viewer and
contains Complex Data types as its keys, the data within the variable will
not be displayed correctly.

In the future this limitation may be removed.

## See Also

### Related Concepts

- [Working with Collections][]
- [Items][]
- [Indexes][]
- [Keys][]
- [Occurrences][]

### Related Data Types

- [Collection Data Types][Collections]
- [Dictionary&lt;TKey, TItem&gt;][Dictionary]
- [Structure][]
- [List&lt;TItem&gt;][List]
- [Array][]
- [QueueWithPriority&lt;TItem, TPriority&gt;][QueueWithPriority]
- [IEnumerable&lt;TItem&gt;][IEnumerableTItem]
- [IList&lt;TItem&gt;][IList]
- [IDictionary&lt;TKey, TItem&gt;][IDictionary]

### Related Blocks

- [Enqueue Item][]
- [Peek Item][]
- [Dequeue Item][]
- [Create Collection][]
- [Write Data With Key][]
- [Read Data With Key][]
- [Delete Data With Key][]

### External Documentation

- [System.Collections.Generic.IEnumerable&lt;T&gt;][MS IEnumerableT]
- [System.Collections.Generic.IList&lt;T&gt;][MS IList]
- [System.Collections.Generic.IDictionary&lt;TKey, TValue&gt;][MS IDictionary]
- [System.Collections.IEnumerable][MS IEnumerable]

[Working with Collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
[Items]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[Indexes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[Occurrences]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}

[Collections]: {{< url path="Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Create a Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Create a Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.CreateNew" >}}
[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Create a List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Array]: {{< url path="Cortex.Reference.DataTypes.Collections.Array.MainDoc" >}}
[QueueWithPriority]: {{< url path="Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}
[IEnumerableTItem]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}

[Index expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.IndexExpressions" >}}

[Enqueue Item]: {{< url path="Cortex.Reference.Blocks.Queues.EnqueueItem.EnqueueItemBlock.MainDoc" >}}
[Peek Item]: {{< url path="Cortex.Reference.Blocks.Queues.PeekItem.PeekItemBlock.MainDoc" >}}
[Dequeue Item]: {{< url path="Cortex.Reference.Blocks.Queues.DequeueItem.DequeueItemBlock.MainDoc" >}}
[Create Collection]: {{< url path="Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc" >}}
[Write Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.WriteData.WriteDataWithKeyBlock.MainDoc" >}}
[Read Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.ReadData.ReadDataWithKeyBlock.MainDoc" >}}
[Delete Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.DeleteData.DeleteDataWithKeyBlock.MainDoc" >}}
[Collection Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc" >}}

[MS IEnumerableT]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IEnumerable_TItem" >}}
[MS IList]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IList" >}}
[MS IDictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IDictionary" >}}
[MS IEnumerable]: {{< url path="MSDocs.DotNet.Api.System.Collections.IEnumerable" >}}
