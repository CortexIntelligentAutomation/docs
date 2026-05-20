---
title: "What is a Collection?"
linkTitle: "What is a Collection?"
description: "Information regarding what a collection is, and the different types of collections."
weight: 1
---

# {{% param title %}}

## Summary

A collection is a data type that groups multiple items together into a single unit. Collections allow items to be stored, accessed, and manipulated as a group.

In {{% ctx %}}, collections fall into the following categories:

| Type | Description |
|------|-------------|
| [Dictionaries][] | Key/item pairs where both the key type and item type can be specified |
| [Structures][] | Key/item pairs where keys are always `String` and items can be any type |
| [Lists][] | Ordered sequences of items accessible by zero-based index |
| [Queues][] | Priority-ordered sequences processed first-in-first-out |
| [Data Storage Collections][DataStorageCollection] | Persistent, scoped collections stored outside of flow execution |

## Types of Collections

### Dictionaries

A `Dictionary<TKey, TItem>` is a collection of key/item pairs where:

- `TKey` indicates the data type of the [keys][Keys] used to access items in the collection
- `TItem` indicates the data type of the [items][Items] in the collection
- Each item can be individually accessed by its unique key

#### Homogeneous and Heterogeneous Dictionaries

A **homogeneous** dictionary constrains all items to a single data type (e.g. `Dictionary<String, Int32>` — all values are `Int32`).

A **heterogeneous** dictionary allows items of different data types by using `dynamic` for `TItem` (e.g. `Dictionary<String, dynamic>` — values can be any type).

#### Dictionary Keys

Keys within a dictionary must be unique and cannot be `null`. Only certain data types can be used for `TKey`, including (but not limited to):

- `String`
- `Int32`
- `Double`
- `Boolean`
- `DateTimeOffset`

When using C# syntax, key equality uses reference equality for reference types and value equality for value types. When using Dictionary blocks, key equality uses reference equality for reference types and falls back to value equality if no reference is found, and value equality for value types.

For more information, see [Keys][].

#### Accessing Dictionary Items

Items are accessed using their key. In the [Expression Editor][], index expressions can be used to retrieve a value by key (e.g. `($)MyDictionary["Key1"]`).

For more information, see [Keys][].

For more information about the data type, see [Dictionary&lt;TKey, TItem&gt;][DictionaryDataType].

### Structures

A `Structure` is a specialised dictionary that underlies `IDictionary<String, Object>`. The key differences from `Dictionary<TKey, TItem>` are:

- Keys are always `String` — the key type cannot be changed
- Items can be any data type (heterogeneous by design)
- The `{}` literal syntax is used to create a `Structure` (e.g. `{ "Key1": "Value1", "Key2": 2 }`)

Because `Structure` implements `IDictionary<String, Object>`, it can be used anywhere an `IDictionary<TKey, TItem>` is required and is compatible with all Dictionary blocks.

#### Structure Keys

The same key uniqueness and nullability rules that apply to [Dictionaries][] apply to `Structure`. Keys must be unique and cannot be `null`.

For more information, see [Keys][].

#### Accessing Structure Items

Items in a `Structure` can be accessed either by key syntax or by property (dot notation) via the [Expression Editor][] (e.g. `($)MyStructure["Key1"]` or `($)MyStructure.Key1`).

For more information about keys and the data type, see [Keys][] and [Structure][StructureDataType].

### Lists

A `List<TItem>` is an ordered collection of items where:

- `TItem` indicates the data type of the items in the list
- Items are accessed using a zero-based integer [index][Indexes]
- The size is dynamic — items can be added or removed at any position

#### Homogeneous and Heterogeneous Lists

A **homogeneous** list constrains all items to a single data type (e.g. `List<String>` — all items are `String`).

A **heterogeneous** list allows items of different data types by using `dynamic` for `TItem` (e.g. `List<dynamic>` — items can be any type).

The `[]` literal syntax creates a `List<TItem>` (e.g. `[1, 2, 3]` creates a `List<Int32>`; `["text", true, 1]` creates a `List<dynamic>`).

#### Accessing List Items

Items are accessed using their zero-based integer index via the [Expression Editor][] (e.g. `($)MyList[0]` returns the first item).

For more information about indexes and the data type, see [Indexes][] and [List&lt;TItem&gt;][ListDataType].

### Queues

A `QueueWithPriority<TItem, TPriority>` is a collection that:

- Orders items by priority
- Preserves first-in-first-out (FIFO) behaviour for items that share the same priority
- `TItem` indicates the data type of the items in the queue
- `TPriority` indicates the data type used to order items within the queue

Items are added to a queue using Enqueue operations and removed via Dequeue operations. Items can also be inspected without removal using Peek operations.

The `PriorityComparer` property (of type `IComparer<TPriority>`) controls how priorities are compared. Many common data types (e.g. `Int32`, `String`) provide a default comparer. If `TPriority` does not implement `IComparer<TPriority>`, a custom comparer must be supplied.

For more information, see [QueueWithPriority&lt;TItem, TPriority&gt;][QueueWithPriorityDataType].

### Data Storage Collection {#data-storage-collection}

A Data Storage Collection is a persistent collection managed by the {{% ctx %}} Data Storage Service. Unlike in-memory collections (Dictionaries, Lists, Queues), data in a Data Storage Collection survives beyond the lifetime of a single flow execution.

Key characteristics:

- **Persistence** — data is retained until explicitly deleted, even after a flow completes
- **Heterogeneous** — items can be any data type and cannot be restricted to a single type
- **Key access only** — items are stored and retrieved by a `String` key; index-based access is not supported
- **Case-insensitive keys** — key comparisons are case-insensitive (e.g. `"Users"` and `"users"` refer to the same key)
- **Scoped access** — each collection is created within a [ScopeDefinition][], limiting accessibility to flows at the specified Tenant, System, Package, and Flow levels
- **Service-dependent** — requires the Data Storage Service to be running and healthy

Data Storage Collections are created and managed using dedicated blocks. Common operations include:

| Operation | Block |
|-----------|-------|
| Create a collection | [Create Collection][CreateCollectionBlock] |
| Delete a collection | [Delete Collection][DeleteCollectionBlock] |
| Write data by key | [Write Data With Key][WriteDataWithKeyBlock] |
| Read data by key | [Read Data With Key][ReadDataWithKeyBlock] |
| Delete data by key | [Delete Data With Key][DeleteDataWithKeyBlock] |

## Arrays vs Lists

### Differences

`Array` and `List<TItem>` are both ordered collections of items accessible by index, but they have important differences:

| | Array | List&lt;TItem&gt; |
|-|-------|------------|
| **Size** | Fixed — cannot be resized after creation | Dynamic — items can be added or removed |
| **Item type** | Always homogeneous (e.g. `Int32[]`) | Homogeneous (`List<Int32>`) or heterogeneous (`List<dynamic>`) |
| **Usable as** | `IEnumerable`, `Object`, `dynamic` | `IList<TItem>`, `IEnumerable<TItem>`, `IEnumerable`, `Object`, `dynamic` |
| **Block support** | No {{% ctx %}} blocks accept `Array` Input/Output properties | Supported by all List blocks |
| **Creation syntax** | `new Int32[] { 1, 2, 3 }` | `[1, 2, 3]` |

### When To Use Arrays

- When interfacing with external libraries or APIs that return arrays
- When the collection size is fixed and will never change
- When converting existing array data for use in C# expressions

### When To Use Lists

- In most cases — `List<TItem>` is the preferred collection type in {{% ctx %}}
- When items need to be added, inserted, or removed
- When working with List blocks
- When the number of items is not known in advance or may change

## Remarks

### Known Limitations

#### Complex Keys do not show correctly in the Variable Details Viewer

Currently, if a Dictionary is shown in the Variable Details Viewer and contains complex data types as its keys, the data within the variable will not be displayed correctly.

In the future this limitation may be removed.

## See Also

### Related Concepts

- [Keys][]
- [Items][]
- [Indexes][]
- [Occurrences][]

### Related Data Types

- [IEnumerable][]
- [IEnumerable&lt;TItem&gt;][IEnumerable_TItem]
- [IDictionary&lt;TKey, TItem&gt;][IDictionaryDataType]
- [Dictionary&lt;TKey, TItem&gt;][DictionaryDataType]
- [Structure][StructureDataType]
- [List&lt;TItem&gt;][ListDataType]
- [QueueWithPriority&lt;TItem, TPriority&gt;][QueueWithPriorityDataType]
- [Array][ArrayDataType]

### Related Blocks

#### Dictionary Blocks

- [Add Item With Key][AddItemWithKeyBlock]
- [Get Item With Key][GetItemWithKeyBlock]
- [Set Item With Key][SetItemWithKeyBlock]
- [Remove Item With Key][RemoveItemWithKeyBlock]
- [Contains Item With Key][ContainsItemWithKeyBlock]
- [Get All Keys][GetAllKeysBlock]

#### List Blocks

- [Add Item At End][AddItemAtEndBlock]
- [Get Item At Index][GetItemAtIndexBlock]
- [Set Item At Index][SetItemAtIndexBlock]
- [Remove Item At Index][RemoveItemAtIndexBlock]
- [Contains Item With Value][ContainsItemWithValueBlock]

#### Queue Blocks

- [Enqueue Item][EnqueueItemBlock]
- [Dequeue Item][DequeueItemBlock]
- [Peek Item][PeekItemBlock]
- [Remove All Items][RemoveAllQueueItemsBlock]

#### Data Storage Blocks

- [Create Collection][CreateCollectionBlock]
- [Delete Collection][DeleteCollectionBlock]
- [Write Data With Key][WriteDataWithKeyBlock]
- [Read Data With Key][ReadDataWithKeyBlock]
- [Delete Data With Key][DeleteDataWithKeyBlock]

### External Documentation

- [System.Collections.Generic.IDictionary&lt;TKey, TValue&gt;][MSDocs.IDictionary]
- [System.Collections.Generic.Dictionary&lt;TKey, TValue&gt;][MSDocs.Dictionary]
- [System.Collections.Generic.IList&lt;T&gt;][MSDocs.IList]
- [System.Collections.Generic.List&lt;T&gt;][MSDocs.List]
- [System.Collections.Generic.IEnumerable&lt;T&gt;][MSDocs.IEnumerable_TItem]
- [System.Collections.IEnumerable][MSDocs.IEnumerable]
- [System.Array][MSDocs.Array]
- [System.Collections.Generic.PriorityQueue&lt;TElement, TPriority&gt;][MSDocs.PriorityQueue]

[Dictionaries]: {{< ref "#dictionaries" >}}
[Structures]: {{< ref "#structures" >}}
[Lists]: {{< ref "#lists" >}}
[Queues]: {{< ref "#queues" >}}
[DataStorageCollection]: {{< ref "#data-storage-collection" >}}

[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[Items]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[Indexes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Occurrences]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable.MainDoc" >}}
[IEnumerable_TItem]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[IDictionaryDataType]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[DictionaryDataType]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[StructureDataType]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[ListDataType]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[QueueWithPriorityDataType]: {{< url path="Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}
[ArrayDataType]: {{< url path="Cortex.Reference.DataTypes.Collections.Array.MainDoc" >}}

[ScopeDefinition]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc" >}}

[AddItemWithKeyBlock]: {{< url path="Cortex.Reference.Blocks.Dictionaries.AddItem.AddItemWithKey.MainDoc" >}}
[GetItemWithKeyBlock]: {{< url path="Cortex.Reference.Blocks.Dictionaries.GetItem.GetItemWithKey.MainDoc" >}}
[SetItemWithKeyBlock]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemWithKey.MainDoc" >}}
[RemoveItemWithKeyBlock]: {{< url path="Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemWithKey.MainDoc" >}}
[ContainsItemWithKeyBlock]: {{< url path="Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemWithKey.MainDoc" >}}
[GetAllKeysBlock]: {{< url path="Cortex.Reference.Blocks.Dictionaries.GetKey.GetAllKeys.MainDoc" >}}

[AddItemAtEndBlock]: {{< url path="Cortex.Reference.Blocks.Lists.AddItem.AddItemAtEnd.MainDoc" >}}
[GetItemAtIndexBlock]: {{< url path="Cortex.Reference.Blocks.Lists.GetItem.GetItemAtIndex.MainDoc" >}}
[SetItemAtIndexBlock]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemAtIndex.MainDoc" >}}
[RemoveItemAtIndexBlock]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemAtIndex.MainDoc" >}}
[ContainsItemWithValueBlock]: {{< url path="Cortex.Reference.Blocks.Lists.ContainsItem.ContainsItemWithValue.MainDoc" >}}

[EnqueueItemBlock]: {{< url path="Cortex.Reference.Blocks.Queues.EnqueueItem.EnqueueItemBlock.MainDoc" >}}
[DequeueItemBlock]: {{< url path="Cortex.Reference.Blocks.Queues.DequeueItem.DequeueItemBlock.MainDoc" >}}
[PeekItemBlock]: {{< url path="Cortex.Reference.Blocks.Queues.PeekItem.PeekItemBlock.MainDoc" >}}
[RemoveAllQueueItemsBlock]: {{< url path="Cortex.Reference.Blocks.Queues.RemoveItem.RemoveAllItemsBlock.MainDoc" >}}

[CreateCollectionBlock]: {{< url path="Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc" >}}
[DeleteCollectionBlock]: {{< url path="Cortex.Reference.Blocks.DataStorage.DeleteCollection.DeleteCollectionBlock.MainDoc" >}}
[WriteDataWithKeyBlock]: {{< url path="Cortex.Reference.Blocks.DataStorage.WriteData.WriteDataWithKeyBlock.MainDoc" >}}
[ReadDataWithKeyBlock]: {{< url path="Cortex.Reference.Blocks.DataStorage.ReadData.ReadDataWithKeyBlock.MainDoc" >}}
[DeleteDataWithKeyBlock]: {{< url path="Cortex.Reference.Blocks.DataStorage.DeleteData.DeleteDataWithKeyBlock.MainDoc" >}}

[MSDocs.IDictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IDictionary" >}}
[MSDocs.Dictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.Dictionary" >}}
[MSDocs.IList]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IList" >}}
[MSDocs.List]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.List" >}}
[MSDocs.IEnumerable_TItem]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IEnumerable_TItem" >}}
[MSDocs.IEnumerable]: {{< url path="MSDocs.DotNet.Api.System.Collections.IEnumerable" >}}
[MSDocs.Array]: {{< url path="MSDocs.DotNet.Api.System.Array" >}}
[MSDocs.PriorityQueue]: {{< url path="MSDocs.DotNet.Api.System.PriorityQueue.MainDoc" >}}
