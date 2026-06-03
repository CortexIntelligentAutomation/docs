---
title: "Keys"
linkTitle: "Keys"
description: "Information related to working with keys in key/item collections such as dictionaries and structures."
---

# {{% param title %}}

## Summary

A **key** is the value used to look up a specific [item][] in a key/item collection. Keys answer the question “which entry?”—not “which position?” (that is an [index][]) and not “which matching value?” (that is an [occurrence][] when searching by item value).

| Collection type | Key data type | Notes |
| --- | --- | --- |
| [Dictionary&lt;TKey, TItem&gt;][] | `TKey` ([generic type parameter][]) | Each dictionary declares its own key type |
| [Structure][] | [String][] only | Behaves like a heterogenous string-keyed dictionary |
| [Data Storage Collection][] | [String][] only | Persisted; keys are case sensitive |
| [List&lt;TItem&gt;][] / [Array][] | N/A | Items are accessed by [index][], not key |
| [QueueWithPriority&lt;TItem, TPriority&gt;][] | N/A | Items are not randomly accessed by key |

For how collection types differ, see [What is a Collection?][].

Keys are not the same as [items][]: the key identifies the entry; the item is the value stored at that entry. In expressions, both [Dictionary][] and [Structure][] use bracket syntax to supply a key—for example `dictionary["Key1"]`—even though the syntax is called an [index expression][] in the [Expression Editor][] documentation. See [Keys vs indexes](#keys-vs-indexes).

## Key data types

### Dictionary&lt;TKey, TItem&gt;

In [Dictionary&lt;TKey, TItem&gt;][], `TKey` is the [generic type parameter][] that defines the data type of every key. `TItem` is the type of each stored item. For example:

* `Dictionary<String, Int32>` — keys are [String][], items are [Int32][]
* `Dictionary<Int32, String>` — keys are [Int32][], items are [String][]

When you create a dictionary in the [Expression Editor][], the key types are inferred from the keys you provide—for example `new Dictionary<String, Int32>() { { "A", 1 } }`. See [Create a Dictionary&lt;TKey, TItem&gt;][].

{{% ctx %}} supports a defined set of types for `TKey` in practice (including [String][], [Int32][], [Double][], [Boolean][], and [DateTimeOffset][]). Some reference types (for example [IList][]&lt;[Int32][]&gt;) can also be used as keys; behaviour then depends on how that type implements equality. See [Uniqueness](#uniqueness-and-null) and the Known Limitations on [Dictionary&lt;TKey, TItem&gt;][].

### Structure

A [Structure][] always uses [String][] keys. Items may be any data type. JSON object literals in the [Expression Editor][] create a [Structure][], not a [Dictionary][].

### Data Storage Collection

Entries in a [Data Storage Collection][] are identified by a [String][] key and a [dynamic][] `Data` value. Keys are case sensitive (`"user"` and `"USER"` are different keys). Collection names are case insensitive within a scope. See [Write Data With Key][].

## Uniqueness and null

### Keys cannot be null

A key cannot be `null` when adding, reading, updating, or removing entries in [Dictionary][], [Structure][], or [Data Storage Collection][] variables. Blocks such as [Add Item With Key][] throw [PropertyNullException][] if the key property is `null`.

### Keys must be unique

Within a single collection instance, each key must be unique so that lookups are unambiguous.

For typical scalar keys ([String][], [Int32][], [Boolean][], and similar), two keys with the same value are considered the same key. Adding a second entry with an equal key updates or conflicts with the existing entry (for example [KeyPresentException][] on [Add Item With Key][]).

For some reference-type keys, equality follows C# reference semantics: two keys are the same only if they refer to the same object, not merely if their contents match. That can allow multiple entries whose keys look the same when printed but are different object references—for example two separate `List<Int32>` instances both containing `[1]`. Dictionary blocks that support [occurrence][] when removing by key document this behaviour; see [Remove Item With Key][].

## Comparing keys

Blocks and expressions need a consistent rule for whether a key you supply **matches** a key already in the collection—for example when checking [Contains Item With Key][] or adding with [Add Item With Key][].

| Context | How key equality is determined |
| --- | --- |
| C# syntax in the [Expression Editor][] | [Reference equality][] for reference types and [value equality][] for value types, following standard C# rules (including `==` and `Equals` where applicable). |
| [Dictionary][] and [Data Storage][] blocks | For reference types, [reference equality][] is tried first; if no matching reference is found, comparison falls back to [value equality][]. For value types, [value equality][] is used. |

This difference matters when keys are reference types. A block may treat two keys as equal when C# `==` would not, or when duplicate reference-type keys exist in the same dictionary. For examples and affected blocks, see [Object Equality][]. For general C# rules, see [Equality comparisons][MS Equality].

## Accessing items using keys

### In the Expression Editor

Use an [index expression][] to read or assign an item by key:

| Collection type | Example | More information |
| --- | --- | --- |
| [Dictionary&lt;TKey, TItem&gt;][] | `($)Dictionary["Key1"]` | [Index expressions][] |
| [Structure][] | `($)Structure.Name` or `($)Structure["any-key"]` | [Property expressions][] (identifier keys), [Index expressions][] |

[Structure][] keys that are valid C# identifiers can use property syntax (`structure.Count`). Any string key can use bracket syntax (`structure["any-key"]`).

### With blocks

Pass the key to the block’s `Key` property (type `TKey` or [String][] as appropriate):

* **Dictionary** — [Add Item With Key][], [Get Item With Key][], [Set Item With Key][], [Remove Item With Key][], [Contains Item With Key][], and related blocks
* **Data Storage** — [Read Data With Key][], [Write Data With Key][] (overwrites existing data when the key already exists)

For a full list of collection access patterns, see [Items][] and [What is a Collection?][].

## Keys vs indexes

[Indexes][] are zero-based positions in **ordered** collections ([List][], [Array][], [String][] characters). **Keys** identify entries in **key/item** collections.

Both use square brackets in the [Expression Editor][], but the expression inside the brackets means something different:

| Syntax | Meaning |
| --- | --- |
| `list[0]` | First item (index `0`) |
| `dictionary["Key1"]` | Item whose key is `"Key1"` |

Using a numeric index on a [Dictionary][] or [Structure][] is not valid. Using a string key on a [List][] is not valid. See [Indexes][].

## Remarks

### Known Limitations

#### Supported key types

Only certain data types can be used for `TKey` in [Dictionary&lt;TKey, TItem&gt;][] and [IDictionary&lt;TKey, TItem&gt;][] properties. These include, but are not limited to, [String][], [Int32][], [Double][], [Boolean][], and [DateTimeOffset][]. See the Known Limitations section on [Dictionary&lt;TKey, TItem&gt;][].

#### Non-String keys in Gateway

If `TKey` is not [String][], Gateway displays the key using its `ToString()` representation (for example an [Int32][] key `1` may appear as `"1"`).

#### Complex keys do not show correctly in the Variable Details Viewer

Currently, if a [Dictionary][] is shown in the Variable Details Viewer and contains complex data types as its keys, the data within the variable will not be displayed correctly.

In the future this limitation may be removed.

## See Also

### Related Concepts

* [Collections][]
* [What is a Collection?][]
* [Items][]
* [Indexes][]
* [Occurrences][]
* [Generics][]
* [Object Equality][]

### Related Data Types

* [Dictionary&lt;TKey, TItem&gt;][]
* [Structure][]
* [IDictionary&lt;TKey, TItem&gt;][]
* [String][]
* [dynamic][]

### Related Blocks

* [Dictionary][] blocks (for example [Add Item With Key][], [Get Item With Key][], [Set Item With Key][], [Remove Item With Key][], [Contains Item With Key][])
* [Data Storage][] blocks (for example [Read Data With Key][], [Write Data With Key][])

### External Documentation

* [System.Collections.Generic.Dictionary&lt;TKey, TItem&gt;][MS Dictionary]
* [System.Collections.Generic.IDictionary&lt;TKey, TItem&gt;][MS IDictionary]
* [Equality comparisons (C#)][MS Equality]

[Collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
[What is a Collection?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.MainDoc" >}}
[Items]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[item]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[Indexes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[index]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Occurrences]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}
[occurrence]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}
[Generics]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[generic type parameter]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[reference equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[value equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}

[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[IDictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Array]: {{< url path="Cortex.Reference.DataTypes.Collections.Array.MainDoc" >}}
[QueueWithPriority&lt;TItem, TPriority&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Double]: {{< url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}

[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[index expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.IndexExpressions" >}}
[Index expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.IndexExpressions" >}}
[property expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.PropertyExpressions" >}}

[Data Storage Collection]: {{< ref "what-is-a-collection.md#data-storage-collection" >}}
[Data Storage]: {{< url path="Cortex.Reference.Blocks.DataStorage.MainDoc" >}}

[Add Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.AddItem.AddItemWithKeyBlock.MainDoc" >}}
[Get Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.GetItem.GetItemWithKey.MainDoc" >}}
[Set Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemWithKey.MainDoc" >}}
[Remove Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemWithKey.MainDoc" >}}
[Contains Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemWithKey.MainDoc" >}}
[Read Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.ReadData.ReadDataWithKeyBlock.MainDoc" >}}
[Write Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.WriteData.WriteDataWithKeyBlock.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[KeyPresentException]: {{< url path="Cortex.Reference.Exceptions.Dictionaries.KeyPresentException.MainDoc" >}}

[MS Dictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.Dictionary" >}}
[MS IDictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IDictionary" >}}
[MS Equality]: {{< url path="MSDocs.CSharp.EqualityOperators" >}}
