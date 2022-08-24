---
title: "IDictionary<TKey, TItem>"
linkTitle: "IDictionary<TKey, TItem>"
description: "Any data type representing a collection of key/item pairs. `TKey` indicates the data type of the keys used to access the items contained in the collection. `TItem` indicates the data type of the items contained in the collection. Each `TItem` can be individually accessed by a key. `Dictionary<TKey, TItem>` is the most common example."
---

# {{% param title %}}

<p class="namespace">(System.Collections.Generic.IDictionary&lt;TKey, TItem&gt;)</p>

## Summary

Any data type representing a collection of key/item pairs.

`TKey` indicates the data type of the keys used to access the items contained in the collection. `TItem` indicates the data type of the items contained in the collection. Each `TItem` can be individually accessed by a key.

`Dictionary<TKey, TItem>` is the most common example.

| | |
|-|-|
| **Category:**          | Collections                                                   |
| **Name:**              | `IDictionary<TKey, TItem>`                                    |
| **Full Name:**         | `System.Collections.Generic.IDictionary<TKey, TItem>`         |
| **Alias:**             | N/A                                                           |
| **Description:**       | Any data type representing a collection of key/item pairs. `TKey` indicates the data type of the keys used to access the items contained in the collection. `TItem` indicates the data type of the items contained in the collection. Each `TItem` can be individually accessed by a key.                                                                                     |
| **Size:**              | Varies                                                        |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `IEnumerable`, `Object`, `dynamic`                            |
|                        | `IEnumerable<KeyValuePair<TKey, TItem>>` (e.g. where `IDictionary<TKey, TItem>` is `IDictionary<String, Int32>` and `IEnumerable<KeyValuePair<TKey, TItem>>` is `IEnumerable<KeyValuePair<String, Int32>>`) |
| **Can be cast to:**    | N/A |

## Remarks

### Most Common IDictionary&lt;TKey, TItem&gt; Data Types

Any of the following data types can be used where an `IDictionary<TKey, TItem>` is required:

* [Dictionary&lt;TKey, TItem&gt;][]
* [Structure][]

### Create an IDictionary&lt;TKey, TItem&gt;

For some of the ways that an `IDictionary<TKey, TItem>` can be created, please see each of the `IDictionary<TKey, TItem>` data types:

* [Dictionary&lt;TKey, TItem&gt;][DictionaryCreateNew]
* [Structure][StructureCreateNew]

### Convert IDictionary&lt;TKey, TItem&gt; to Text

For some of the ways that an `IDictionary<TKey, TItem>` can be converted to text, please see each of the `IDictionary<TKey, TItem>` data types:

* [Dictionary&lt;TKey, TItem&gt;][DictionaryConvertToText]
* [Structure][StructureConvertToText]

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `IDictionary<TKey, TItem>`.
* The Literal Editor is not available for [Input][] properties where the data type is `IDictionary<TKey, TItem>`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `IDictionary<TKey, TItem>`.

### Known Limitations

* Currently, only certain data types can be used for `TKey`. These include, but not limited to:
  * `String`
  * `Int32`
  * `Double`
  * `Boolean`
  * `DateTimeOffset`
* If the data type of `TKey` is anything other than a `String`, when viewing the `IDictionary<TKey, TItem>` in Gateway the key value will be displayed as its `ToString()` representation (e.g. an `Int32` key value of `1` will be displayed as `"1"` instead of `1`).

## See Also

### Related Data Types

* [IEnumerable][]
* [IEnumerable&lt;TItem&gt;][]
* [Dictionary&lt;TKey, TItem&gt;][]
* [Structure][]

### Related Concepts

* [Working with Collections][]

### External Documentation

* [System.Collections.Generic.IDictionary&lt;TKey, TItem&gt;][]

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[System.Collections.Generic.IDictionary&lt;TKey, TItem&gt;]: {{< url "MSDocs.DotNet.Api.System.Collections.Generic.IDictionary" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable.MainDoc" >}}
[IEnumerable&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[Dictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[DictionaryCreateNew]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[DictionaryConvertToText]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.ConvertToText" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[StructureCreateNew]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.CreateNew" >}}
[StructureConvertToText]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.ConvertToText" >}}

[Working with Collections]: {{< url "Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
