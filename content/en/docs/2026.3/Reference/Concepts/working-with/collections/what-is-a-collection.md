---
title: "What is a Collection?"
linkTitle: "What is a Collection?"
description: "Information regarding what a collection is, and the different types of collections."
weight: 1
---

# {{% param title %}}

## Summary

A collection is a data structure that groups multiple values (called [items][]) so they can be stored, passed between blocks, and processed together in a flow.

{{% ctx %}} supports several collection types. Each type differs in how items are ordered, how they are accessed, and whether the collection exists only for the duration of an execution or is persisted on the platform. The main types are:

| Collection type | Typical access | Ordered | Persisted |
| --- | --- | --- | --- |
| [Dictionary][] | [Key][] | No | No |
| [Structure][] | [Key][] or property | No | No |
| [List][] | [Index][] | Yes | No |
| [Array][] | [Index][] | Yes | No |
| [Queue][] | Dequeue, peek, or enumerate | Yes (by priority, then FIFO) | No |
| [Data Storage Collection][] | [Key][] only | No | Yes |

For more detail on [keys][], [indexes][], and [items][], see the related concept pages in this section.

## Types of Collections

### Dictionaries

A [Dictionary&lt;TKey, TItem&gt;][] is a collection of key/item pairs based on [System.Collections.Generic.Dictionary&lt;TKey, TItem&gt;][].

* `TKey` is the data type of each [key][] used to access an item.
* `TItem` is the data type of each [item][] stored in the collection.

Each item is accessed by its key. In the [Expression Editor][], dictionary items are accessed using [index expressions][] (for example `dictionary["StringKey1"]`).

#### Homogenous and heterogenous dictionaries

A dictionary is [homogenous][] when every item has the same data type (for example `Dictionary<String, Int32>`). It is [heterogenous][] when items may have different data types (for example `Dictionary<String, dynamic>`).

For more examples of creating dictionaries with literal and expression syntax, see [Create a Dictionary&lt;TKey, TItem&gt;][] on the [Dictionary&lt;TKey, TItem&gt;][] data type page.

#### Keys

Each key in a dictionary must be unique. Keys cannot be `null`. How equality is determined depends on whether you use C# syntax or dictionary blocks; see [Keys][] and [Object Equality][].

Keys whose data type is not a simple scalar (complex keys) are supported for some `TKey` types; see the Known Limitations section on [Dictionary&lt;TKey, TItem&gt;][] for supported key types and display limitations in Gateway.

#### Accessing items

##### Keys

Use a [key][] in an [index expression][] or pass the key to a [Dictionary][] block property. Dictionary blocks that add, set, or remove items document key equality in their remarks; see [Object Equality][].

### Structures

A [Structure][] is a {{% ctx %}} collection type (`Cortex.DataTypes.Dictionaries.Structure`) that represents key/item pairs where keys are always [String][] and items may be any data type. It implements [IDictionary&lt;TKey, TItem&gt;][] (effectively `IDictionary<String, Object>`) and behaves like a [heterogenous][] dictionary with string keys.

In the [Expression Editor][]:

* A JSON object literal such as `{ "Name": "value", "Count": 1 }` creates a [Structure][], not a [Dictionary][] (dictionary literal syntax is not supported).
* Items can be accessed with [property expressions][] (for keys that follow C# identifier rules) or [index expressions][].

For creation examples, see [Create a Structure][] on the [Structure][] data type page.

#### Accessing items

##### Properties

When the key is a valid C# identifier, use property syntax (for example `structure.Name` or `structure.Count`). See [Property expressions][] in the [Expression Editor][] documentation.

##### Keys

Any string key can be used with index syntax (for example `structure["any-key"]`). Keys must be unique and cannot be `null`; see [Keys][].

### Lists

A [List&lt;TItem&gt;][] is an ordered collection based on [System.Collections.Generic.List&lt;TItem&gt;][]. `TItem` is the data type of each [item][].

Lists can be created with `[]` literal syntax or `new List<TItem>()` expressions. Using `[]` without other context creates a `List<dynamic>`. See [Create a List&lt;TItem&gt;][] on the [List&lt;TItem&gt;][] data type page.

#### Homogenous and heterogenous lists

A list is [homogenous][] when every item has the same data type (for example `List<Int32>` or `List<String>`). It is [heterogenous][] when items may have different data types (for example `List<dynamic>` or `List<Object>`).

List blocks refer to these as lists containing items of a single data type versus multiple data types; see [Homogenous and heterogenous lists](#homogenous-and-heterogenous-lists) above.

#### Accessing items

##### Indexes

Each item is accessed by a zero-based [index][]. Indexes are used in [index expressions][] in the Expression Editor and in [List][] block properties. See [Indexes][].

### Queues

A [QueueWithPriority&lt;TItem, TPriority&gt;][] is a {{% ctx %}} queue type that orders items by [TPriority][], similar to [System.Collections.Generic.PriorityQueue&lt;TElement, TPriority&gt;][], while preserving first-in-first-out order among items that share the same priority.

* Items with a lower priority value are dequeued before items with a higher priority value (as determined by the queue's priority comparer; see [QueueWithPriority&lt;TItem, TPriority&gt;][]).
* Among items with the same priority, the item that was enqueued first is dequeued first.

`TItem` is the data type of each queued item. Queues are typically created with `new QueueWithPriority<TItem, TPriority>(...)`. See [QueueWithPriority&lt;TItem, TPriority&gt;][] for creation examples.

#### Accessing items

Items are not accessed by index or key. Use [Queue][] blocks to:

* [Enqueue][] items
* [Dequeue][] or [Peek][] the next item (without removing it when peeking)
* [Get count of all items][] or peek for inspection without changing queue order

### Data Storage Collection

A Data Storage Collection is a named, persisted collection of key/data pairs stored by the [Data Storage Service][] for use across flow executions within a defined [collection scope][].

Unlike in-memory [Dictionary][] or [Structure][] variables:

* Data survives after the execution that wrote it ends (subject to platform configuration and service availability).
* Each collection is identified by a [collection scope][] and [collection name][].
* Each entry has a [String][] [key][] and a [dynamic][] `Data` value, so stored data is always [heterogenous][] and cannot be restricted to a single item type at the property level.
* Items are read and written only by [key][] using [Data Storage][] blocks (for example [Create Collection][], [Write Data With Key][], [Read Data With Key][]).

Keys must be unique within a collection, cannot be `null`, and are case sensitive. Collection names are case insensitive within a scope. See [Keys][] and the [Write Data With Key][] block for key and naming behaviour.

Operations may throw [ServiceDoesNotExistException][] or [ServiceUnavailableException][] when the Data Storage Service is not deployed or not healthy. For platform architecture context, see [Data Storage Service][].

## Arrays vs Lists

[Array][] and [List&lt;TItem&gt;][] are both ordered collections that use zero-based [indexes][]. They are closely related in C# but behave differently in important ways.

### Differences

| | [Array][] | [List&lt;TItem&gt;][] |
| --- | --- | --- |
| Size | Fixed when created | Grows and shrinks |
| Add or remove items | Not supported | Supported (blocks and C# methods) |
| Typical declaration | `new Int32[] { 1, 2, 3 }` | `new List<Int32>() { 1, 2, 3 }` or `[1, 2, 3]` |
| Common in flow blocks | Rarely required as a property type | Widely used |

See [Array][] and [List&lt;TItem&gt;][] for creation examples and interface support.

### When to use arrays

Use an array when the number of items is fixed and will not change during processing—for example, a predefined set of values returned from an API or a fixed batch size.

### When to use lists

Use a list when items are added, removed, or reordered during a flow, or when the count is not known in advance. Most [List][] blocks and literal `[]` syntax expect [List&lt;TItem&gt;][], not arrays.

## Remarks

### Known Limitations

#### Complex keys do not show correctly in the Variable Details Viewer

Currently, if a [Dictionary][] is shown in the Variable Details Viewer and contains complex data types as its keys, the data within the variable will not be displayed correctly.

In the future this limitation may be removed.

## See Also

### Related Concepts

* [Collections][]
* [Keys][]
* [Indexes][]
* [Items][]
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
* [IEnumerable][]

### Related Blocks

* [Dictionary][] blocks (for example [Add Item With Key][])
* [List][] blocks (for example [Add Item At End][])
* [Queue][] blocks (for example [Enqueue Item][], [Dequeue Item][], [Peek Item][])
* [Data Storage][] blocks (for example [Create Collection][], [Read Data With Key][], [Write Data With Key][])

### External Documentation

* [System.Collections.Generic.Dictionary&lt;TKey, TItem&gt;][MS Dictionary]
* [System.Collections.Generic.List&lt;TItem&gt;][MS List]
* [System.Array][MS Array]
* [System.Collections.Generic.IDictionary&lt;TKey, TItem&gt;][MS IDictionary]
* [System.Collections.Generic.PriorityQueue&lt;TElement, TPriority&gt;][MS PriorityQueue]

[items]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[Key]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[index]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Indexes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Index]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
[Occurrences]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}
[Generics]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[homogenous]: {{< url path="Cortex.Reference.Glossary.F-J.Homogenous" >}}
[heterogenous]: {{< url path="Cortex.Reference.Glossary.F-J.Heterogenous" >}}
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
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TPriority]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[Create a Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.CreateNew" >}}
[Create a List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[index expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.IndexExpressions" >}}
[property expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.PropertyExpressions" >}}
[Property expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.PropertyExpressions" >}}

[Data Storage Collection]: {{< ref "#data-storage-collection" >}}
[Data Storage Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.DataStorageService.MainDoc" >}}
[collection scope]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Scopes.WhatIsAScope.MainDoc" >}}
[collection name]: {{< url path="Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc" >}}

[Create Collection]: {{< url path="Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc" >}}
[Write Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.WriteData.WriteDataWithKeyBlock.MainDoc" >}}
[Read Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.ReadData.ReadDataWithKeyBlock.MainDoc" >}}
[Data Storage]: {{< url path="Cortex.Reference.Blocks.DataStorage.MainDoc" >}}

[Add Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.AddItem.AddItemWithKeyBlock.MainDoc" >}}
[Add Item At End]: {{< url path="Cortex.Reference.Blocks.Lists.AddItem.AddItemAtEndBlock.MainDoc" >}}
[Enqueue Item]: {{< url path="Cortex.Reference.Blocks.Queues.EnqueueItem.EnqueueItemBlock.MainDoc" >}}
[Dequeue Item]: {{< url path="Cortex.Reference.Blocks.Queues.DequeueItem.DequeueItemBlock.MainDoc" >}}
[Peek Item]: {{< url path="Cortex.Reference.Blocks.Queues.PeekItem.PeekItemBlock.MainDoc" >}}
[Enqueue]: {{< url path="Cortex.Reference.Blocks.Queues.EnqueueItem.EnqueueItemBlock.MainDoc" >}}
[Dequeue]: {{< url path="Cortex.Reference.Blocks.Queues.DequeueItem.DequeueItemBlock.MainDoc" >}}
[Peek]: {{< url path="Cortex.Reference.Blocks.Queues.PeekItem.PeekItemBlock.MainDoc" >}}
[Get count of all items]: {{< url path="Cortex.Reference.Blocks.Queues.GetCount.GetCountOfAllItemsBlock.MainDoc" >}}

[ServiceDoesNotExistException]: {{< url path="Cortex.Reference.Exceptions.Services.ServiceDoesNotExistException.MainDoc" >}}
[ServiceUnavailableException]: {{< url path="Cortex.Reference.Exceptions.Services.ServiceUnavailableException.MainDoc" >}}

[MS Dictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.Dictionary" >}}
[MS List]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.List" >}}
[MS Array]: {{< url path="MSDocs.DotNet.Api.System.Array" >}}
[MS IDictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IDictionary" >}}
[MS PriorityQueue]: {{< url path="MSDocs.DotNet.Api.System.PriorityQueue.MainDoc" >}}
[System.Collections.Generic.Dictionary&lt;TKey, TItem&gt;]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.Dictionary" >}}
[System.Collections.Generic.List&lt;TItem&gt;]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.List" >}}
[System.Collections.Generic.PriorityQueue&lt;TElement, TPriority&gt;]: {{< url path="MSDocs.DotNet.Api.System.PriorityQueue.MainDoc" >}}
