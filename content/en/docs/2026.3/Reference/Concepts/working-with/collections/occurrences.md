---
title: "Occurrences"
linkTitle: "Occurrences"
description: "Information related to selecting the nth matching item or text segment when duplicates exist, using one-based or negative occurrence values."
---

# {{% param title %}}

## Summary

An **occurrence** selects which **match** you mean when the same value, key, or text appears more than once. Occurrences answer the question “which duplicate?”—not “which position?” (that is an [index][indexes]).

In {{% ctx %}}, occurrence values are [Int32][] inputs on block properties named `Occurrence`. They are **one-based when counting from the start** (`1` = first match, `2` = second match) and **negative when counting from the end** (`-1` = last match, `-2` = second from last). The value `0` is not valid for blocks that require a specified occurrence; see [Occurrence not present](#occurrence-not-present).

| Context | What is counted | Order |
| --- | --- | --- |
| [List&lt;TItem&gt;][] matching by [item][items] value | Items equal to the supplied value ([Object Equality][]) | Collection order (left to right) |
| [Dictionary&lt;TKey, TItem&gt;][] matching by value | Items equal to the supplied value | See [Dictionaries and duplicate entries](#dictionaries-and-duplicate-entries) |
| [Dictionary&lt;TKey, TItem&gt;][] matching by [key][keys] | Entries with the same key (for example duplicate reference-type keys) | See [Dictionaries and duplicate entries](#dictionaries-and-duplicate-entries) |
| [String][] text search | Matches of [Text To Find][] in the string | Left to right in the text |

After a block returns an [index][indexes] (for example [Get Index Of Item With Value][] or [Get Index Of Text][]), use that position with index-based blocks or [index expressions][]. See [Occurrences vs indexes](#occurrences-vs-indexes).

## Positive occurrences

A **positive** occurrence counts from the **first** match:

| Occurrence | Meaning |
| --- | --- |
| `1` | First match |
| `2` | Second match |
| `3` | Third match |
| `n` | nth match |

### Example (list by value)

For the list `[1, 2, 3, 3, 2, 1]` and value `1`:

| Occurrence | Item at that occurrence | Zero-based [index][indexes] returned by [Get Index Of Item With Value][] |
| --- | --- | --- |
| `1` | First `1` | `0` |
| `2` | Second `1` | `5` |

Block examples use the same list: [Get Index Of Item With Value][], [Set Item With Value][], and [Remove Item With Value][].

## Negative occurrences

A **negative** occurrence counts from the **last** match:

| Occurrence | Meaning |
| --- | --- |
| `-1` | Last match |
| `-2` | Second from last |
| `-3` | Third from last |
| `-n` | nth from last |

### Example (list by value)

For `[1, 2, 3, 3, 2, 1]` and value `1`:

| Occurrence | Item at that occurrence | Zero-based index |
| --- | --- | --- |
| `-1` | Last `1` | `5` |
| `-2` | Second-to-last `1` | `0` |

If there are `m` matches, valid negative occurrences are `-1` through `-m` inclusive (for example three matches allow `-1`, `-2`, and `-3`).

## Accessing items using occurrences

Occurrences are used in the **block editor**, not as a separate expression syntax. Pass an [Int32][] value to the block’s `Occurrence` property (often via the [Literal][] editor; default is commonly `1`).

Typical patterns:

* **Find position** — [Get Index Of Item With Value][], [Get Index Of Text][], then use the returned index elsewhere
* **Read** — [Get Item With Key][] when duplicate keys exist
* **Update** — [Set Item With Value][], [Set Item With Key][], [Set Dictionary Item With Value][], [Find And Replace Text][]
* **Remove** — [Remove Item With Value][], [Remove Item With Key][], [Remove Dictionary Item With Value][], [Find And Remove Text][]

Blocks that return **all** matches (for example [Get Indexes Of Items With Value][], [Find All Text][]) do not take a single `Occurrence` property; use those when you need every index.

For how items or text are considered a match, see [Object Equality][] (lists and dictionaries) and [Equality][] (text).

## Occurrences vs indexes

[Indexes][] and occurrences solve different problems. This table matches the discussion on [Indexes][indexes]:

| | **Index** | **Occurrence** |
| --- | --- | --- |
| Meaning | Position in the collection or string (0-based) | Which matching item or text segment (1-based from start, or negative from end) |
| Used when | You already know the position | Duplicates exist and you need the 1st, 2nd, or last match |
| Typical use | `($)List[2]`, [Get Item At Index][] | [Get Index Of Item With Value][] with `Occurrence` = `1` or `-1` |
| Example list `[1, 2, 1]` | Index `0` → `1`, index `2` → `1` | 1st occurrence of value `1` → index `0`; 2nd occurrence → index `2` |

In C#, [index expressions][] can use index-from-end syntax (`^1` for the last **element**). That still refers to **position**, not to the nth **value** duplicate. Use occurrences when matching by value, key, or search text.

## Remarks

### Occurrence not present

When the requested occurrence does not exist (or there are no matches), block behaviour falls into one of three categories. Always check the individual block’s **Remarks** and **Exceptions** sections.

| Behaviour | When it applies | Examples |
| --- | --- | --- |
| **Predetermined output** | An output property is set to a sentinel value | [Get Index Of Item With Value][] and [Get Index Of Text][] set `Index` to `-1`; [Find Text][] sets `Match` to `null` |
| **No operation** | The collection or text is left unchanged | [Remove Item With Value][], [Set Item With Value][], [Remove Item With Key][] when there is nothing to remove or set |
| **Exception** | The flow stops with an error | [Get Item With Key][], [Set Item With Key][] throw [OccurrenceNotPresentException][] |

[OccurrenceNotPresentException][] is also thrown when `Occurrence` is `0` on blocks that use that exception (see [Occurrence is zero](#occurrence-is-zero)).

### Occurrence is zero

`0` cannot mean “first” or “last” match. Blocks handle it as follows:

| Behaviour | Blocks |
| --- | --- |
| [OccurrenceNotPresentException][] | [Get Item With Key][], [Set Item With Key][] |
| Output set to “not found” (`-1` or `null`) | [Get Index Of Item With Value][], [Get Index Of Text][], [Find Text][] |
| No operation | [Remove Item With Value][], [Set Item With Value][], and similar remove/set-by-value or remove-by-key blocks |

### Dictionaries and duplicate entries

[Dictionary&lt;TKey, TItem&gt;][] blocks that support `Occurrence` may operate on:

* **Duplicate values** — several entries whose items match the same value ([Set Dictionary Item With Value][], [Remove Dictionary Item With Value][])
* **Duplicate keys** — several entries that share the same key instance (for example multiple `List` keys that compare equal under [Object Equality][]); [Get Item With Key][], [Set Item With Key][], [Remove Item With Key][]

Unlike [List][] and [Array][], dictionaries do not have a guaranteed user-visible order. For duplicate keys or values, **which entry is the 1st or 2nd occurrence** follows the underlying .NET implementation and is not documented as stable. Prefer lists when order must be predictable; see remarks on [Get Item With Key][].

### Matching items and text

* **Lists and dictionaries (by value)** — whether an item matches uses block [Object Equality][] rules (reference equality first, then value equality for reference types).
* **Text** — whether a segment matches uses the block’s [Comparison Type][] and [Search Options][]; see [Equality][].

### Known Limitations

None

## See Also

### Related Concepts

* [Collections][]
* [What is a Collection?][]
* [Items][items]
* [Keys][keys]
* [Indexes][indexes]
* [Object Equality][]
* [Working with Text][]

### Related Data Types

* [List&lt;TItem&gt;][]
* [Dictionary&lt;TKey, TItem&gt;][]
* [String][]
* [Int32][]

### Related Blocks

* [List][] — [Get Index Of Item With Value][], [Get Indexes Of Items With Value][], [Set Item With Value][], [Remove Item With Value][]
* [Dictionary][] — [Get Item With Key][], [Set Item With Key][], [Remove Item With Key][], [Set Dictionary Item With Value][], [Remove Dictionary Item With Value][]
* Text — [Find Text][], [Find All Text][], [Get Index Of Text][], [Find And Replace Text][], [Find And Remove Text][]

### External Documentation

* [Indices and ranges (C#)][MS Indices and Ranges] — index-from-end (`^n`) vs occurrence numbering
* [System.Collections.Generic.List&lt;T&gt;.IndexOf][MS List IndexOf] — returns the **first** 0-based index of a value (contrast with nth occurrence)
* [System.String.IndexOf][MS String IndexOf] — first match in a string
* [System.String.LastIndexOf][MS String LastIndexOf] — last match in a string

[Collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
[What is a Collection?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.MainDoc" >}}
[items]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[indexes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[Comparison Type]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.MainDoc" >}}
[Search Options]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.MainDoc" >}}
[Text To Find]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFind.MainDoc" >}}

[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Array]: {{< url path="Cortex.Reference.DataTypes.Collections.Array.MainDoc" >}}
[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[index expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.IndexExpressions" >}}

[Get Item At Index]: {{< url path="Cortex.Reference.Blocks.Lists.GetItem.GetItemAtIndex.MainDoc" >}}
[Get Index Of Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.GetIndex.GetIndexOfItemWithValue.MainDoc" >}}
[Get Indexes Of Items With Value]: {{< url path="Cortex.Reference.Blocks.Lists.GetIndex.GetIndexesOfItemsWithValue.MainDoc" >}}
[Set Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemWithValue.MainDoc" >}}
[Remove Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemWithValue.MainDoc" >}}
[Set Dictionary Item With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemWithValue.MainDoc" >}}
[Remove Dictionary Item With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemWithValue.MainDoc" >}}

[Get Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.GetItem.GetItemWithKey.MainDoc" >}}
[Set Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemWithKey.MainDoc" >}}
[Remove Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemWithKey.MainDoc" >}}

[Find Text]: {{< url path="Cortex.Reference.Blocks.Text.FindText.FindText.MainDoc" >}}
[Find All Text]: {{< url path="Cortex.Reference.Blocks.Text.FindText.FindAllText.MainDoc" >}}
[Get Index Of Text]: {{< url path="Cortex.Reference.Blocks.Text.GetIndex.GetIndexOfText.MainDoc" >}}
[Find And Replace Text]: {{< url path="Cortex.Reference.Blocks.Text.FindAndReplaceText.FindAndReplaceText.MainDoc" >}}
[Find And Remove Text]: {{< url path="Cortex.Reference.Blocks.Text.FindAndRemoveText.FindAndRemoveText.MainDoc" >}}

[OccurrenceNotPresentException]: {{< url path="Cortex.Reference.Exceptions.Collections.OccurrenceNotPresentException.MainDoc" >}}

[MS Indices and Ranges]: {{< url path="MSDocs.CSharp.IndicesAndRanges" >}}
[MS List IndexOf]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IndexOfList" >}}
[MS String IndexOf]: {{< url path="MSDocs.DotNet.Api.System.String.IndexOf" >}}
[MS String LastIndexOf]: {{< url path="MSDocs.DotNet.Api.System.String.LastIndexOf" >}}
