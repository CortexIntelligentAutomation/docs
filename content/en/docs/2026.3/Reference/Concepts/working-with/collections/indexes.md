---
title: "Indexes"
linkTitle: "Indexes"
description: "Information related to working with zero-based indexes in ordered collections and strings."
---

# {{% param title %}}

## Summary

An **index** is a zero-based position that identifies which [item][] to read or update in an ordered collection, or which character to access in a [String][].

Indexes answer the question “which position?”—not “which matching value?”. When several items share the same value, use an [occurrence][] (and blocks such as [Get Index Of Item With Value][]) to select the nth match, then use the returned index if you need a position. See [Indexes vs occurrences](#indexes-vs-occurrences).

| Data type | Uses indexes? | Notes |
| --- | --- | --- |
| [List&lt;TItem&gt;][] | Yes | Primary ordered collection in flows |
| [Array][] | Yes | Fixed size; same index rules as lists |
| [String][] | Yes | Index refers to a character position |
| [Dictionary&lt;TKey, TItem&gt;][] | No | Items are accessed by [key][], not index |
| [Structure][] | No | Items are accessed by [key][] or property name |
| [QueueWithPriority&lt;TItem, TPriority&gt;][] | No | Items are not randomly accessed by index |
| [Data Storage Collection][] | No | Items are accessed by [key][] only |

For how collection types differ, see [What is a Collection?][].

## Zero-based numbering

{{% ctx %}} indexes follow standard C# conventions ([zero based][]):

* The first item (or character) is at index `0`.
* The second is at index `1`, and so on.
* For a list with `n` items, valid indexes are `0` through `n - 1` inclusive.

For example, in `["A", "B", "C"]` the item `"B"` is at index `1`, and the last item is at index `2` (not `3`).

Block properties named `Index` are typically [Int32][] values within this range. An index outside the range may cause [PropertyValueOutOfRangeException][] (for example on [Get Item At Index][] when the list is empty or the index is too large).

## Accessing items by index

### In the Expression Editor

Use [index expressions][] to read or assign items in [List][] and [Array][] variables, and to work with [String][] characters. Examples:

| Expression | Result (example list `[1, 2, 3, 4, 5]`) |
| --- | --- |
| `($)List[0]` | `1` (first item) |
| `($)List[2]` | `3` (third item) |
| `($)List[^1]` | `5` (last item) |
| `($)List[0..2]` | `[1, 2]` (first two items) |
| `($)List[2..]` | `[3, 4, 5]` (from third item to end) |

[Dictionary][] and [Structure][] items use the same bracket syntax, but the value inside the brackets is a [key][], not a numeric index—for example `($)Dictionary["FirstKey"]`.

Range and index-from-end syntax (`^1`, `..`) follow C# rules. For more examples and behaviour, see [Index expressions][] in the [Expression Editor][] documentation and [Indices and Ranges][] in the C# language reference.

### With blocks

Many [List][] and text blocks expose an `Index` property ([Int32][]) to select a position directly:

* **Lists** — [Get Item At Index][], [Set Item At Index][], [Add Item At Index][], [Remove Item At Index][], and related blocks that operate on one or more indexes
* **Text** — [Get Text At Index][], [Add Text Before Index][], [Remove Text At Index][], and related blocks (indexes refer to character positions in the string)

Some blocks return an index as output—for example [Get Index Of Item With Value][] writes the zero-based position of the specified [occurrence][] of a matching item, or `-1` if no match is found.

## Indexes vs occurrences

Indexes and [occurrences][] solve different problems:

| | **Index** | **Occurrence** |
| --- | --- | --- |
| Meaning | Position in the collection (0-based) | Which matching item when searching by value (1-based from start, or negative from end) |
| Used when | You already know the position | Duplicate values exist and you need the 1st, 2nd, or last match |
| Typical use | `list[2]`, [Get Item At Index][] | [Get Index Of Item With Value][] with `Occurrence` = `1` or `-1` |
| Example list `[1, 2, 1]` | Index `0` → `1`, index `2` → `1` | 1st occurrence of value `1` → index `0`; 2nd occurrence → index `2` |

After [Get Index Of Item With Value][] returns an index, you can pass that value to blocks or expressions that expect a position.

For occurrence property values and behaviour when a match is missing, see [Occurrences][].

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

* [Collections][]
* [What is a Collection?][]
* [Items][]
* [Keys][]
* [Occurrences][]
* [Working with Text][]

### Related Data Types

* [List&lt;TItem&gt;][]
* [Array][]
* [IList&lt;TItem&gt;][]
* [String][]
* [Int32][]

### Related Blocks

* [List][] blocks (for example [Get Item At Index][], [Set Item At Index][], [Add Item At Index][], [Remove Item At Index][])
* [Get Index Of Item With Value][], [Get Indexes Of Items With Value][]
* Text blocks (for example [Get Text At Index][], [Get Text Between Indexes][], [Get Index Of Text][])

### External Documentation

* [Indices and ranges (C#)][MS Indices and Ranges]
* [System.Collections.Generic.List&lt;TItem&gt;][MS List]
* [System.Array][MS Array]
* [System.String][MS String]

[Collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
[What is a Collection?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.MainDoc" >}}
[Items]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[item]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[key]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[Occurrences]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}
[occurrence]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}
[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
[zero based]: {{< url path="Cortex.Reference.Glossary.U-Z.ZeroBased" >}}

[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Array]: {{< url path="Cortex.Reference.DataTypes.Collections.Array.MainDoc" >}}
[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[QueueWithPriority&lt;TItem, TPriority&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}
[IList&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Data Storage Collection]: {{< ref "what-is-a-collection.md#data-storage-collection" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Index expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.IndexExpressions" >}}
[Indices and Ranges]: {{< url path="MSDocs.CSharp.IndicesAndRanges" >}}

[Get Item At Index]: {{< url path="Cortex.Reference.Blocks.Lists.GetItem.GetItemAtIndex.MainDoc" >}}
[Set Item At Index]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemAtIndex.MainDoc" >}}
[Add Item At Index]: {{< url path="Cortex.Reference.Blocks.Lists.AddItem.AddItemAtIndex.MainDoc" >}}
[Remove Item At Index]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemAtIndex.MainDoc" >}}
[Get Index Of Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.GetIndex.GetIndexOfItemWithValue.MainDoc" >}}
[Get Indexes Of Items With Value]: {{< url path="Cortex.Reference.Blocks.Lists.GetIndex.GetIndexesOfItemsWithValue.MainDoc" >}}

[Get Text At Index]: {{< url path="Cortex.Reference.Blocks.Text.GetText.GetTextAtIndex.MainDoc" >}}
[Get Text Between Indexes]: {{< url path="Cortex.Reference.Blocks.Text.GetText.GetTextBetweenIndexes.MainDoc" >}}
[Add Text Before Index]: {{< url path="Cortex.Reference.Blocks.Text.AddText.AddTextBeforeIndex.MainDoc" >}}
[Remove Text At Index]: {{< url path="Cortex.Reference.Blocks.Text.RemoveText.RemoveTextAtIndex.MainDoc" >}}
[Get Index Of Text]: {{< url path="Cortex.Reference.Blocks.Text.GetIndex.GetIndexOfText.MainDoc" >}}

[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[MS Indices and Ranges]: {{< url path="MSDocs.CSharp.IndicesAndRanges" >}}
[MS List]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.List" >}}
[MS Array]: {{< url path="MSDocs.DotNet.Api.System.Array" >}}
[MS String]: {{< url path="MSDocs.DotNet.Api.System.String.MainDoc" >}}
[System.Collections.Generic.List&lt;TItem&gt;]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.List" >}}
[System.Array]: {{< url path="MSDocs.DotNet.Api.System.Array" >}}
[System.String]: {{< url path="MSDocs.DotNet.Api.System.String.MainDoc" >}}
