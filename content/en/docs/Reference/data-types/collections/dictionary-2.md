---
title: "Dictionary<TKey, TItem>"
linkTitle: "Dictionary<TKey, TItem>"
description: "Used to represent a collection of key/item pairs. `TKey` indicates the data type of the keys used to access the items contained in the collection. `TItem` indicates the data type of the items contained in the collection. Each `TItem` can be individually accessed by a key."
---

# {{< param title >}}

<p class="namespace">(System.Collections.Generic.Dictionary&lt;TKey, TItem&gt;)</p>

## Summary

The `Dictionary<TKey, TItem>` data type is used to represent a collection of key/item pairs.

`TKey` indicates the data type of the keys used to access the items contained in the collection. `TItem` indicates the data type of the items contained in the collection. Each `TItem` can be individually accessed by a key.

| | |
|-|-|
| **Category:**          | Collections                                                   |
| **Name:**              | `Dictionary<TKey, TItem>`                                     |
| **Full Name:**         | `System.Collections.Generic.Dictionary<TKey, TItem>`          |
| **Alias:**             | N/A                                                           |
| **Description:**       | A collection of key/item pairs. `TKey` indicates the data type of the keys used to access the items contained in the collection. `TItem` indicates the data type of the items contained in the collection. Each `TItem` can be individually accessed by a key.                                                                                     |
| **Size:**              | Varies                                                        |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `IDictionary<TKey, TItem>`, `IEnumerable`, `Object`, `dynamic` |
|                        | `IEnumerable<KeyValuePair<TKey, TItem>>` (e.g. where `Dictionary<TKey, TItem>` is `Dictionary<String, Int32>` and `IEnumerable<KeyValuePair<TKey, TItem>>` is `IEnumerable<KeyValuePair<String, Int32>>`) |
| **Can be cast to:**    |  N/A |

## Remarks

### Create a Dictionary&lt;TKey, TItem&gt;

The following table shows some of the ways that a `Dictionary<TKey, TItem>` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `Dictionary<TKey, TItem>` expression | `new Dictionary<String, dynamic>()` | `{}` | Expression | `Dictionary<String, dynamic>` containing zero items |
| | `new Dictionary<String, String>() { { "StringKey1", "StringValue" } }` | `{ "StringKey1": "StringValue" }` | Expression | `Dictionary<String, String>` containing one String item with a String key |
| | `new Dictionary<String, Boolean>() { { "StringKey1", true }, { "StringKey2", false } }` | `{ "StringKey1": true, "StringKey2": false }` | Expression | `Dictionary<String, Boolean>` containing two Boolean items with String keys |
| | `new Dictionary<String, Int32>() { { "StringKey1", 1 }, { "StringKey2", 2 }, { "StringKey3", 3 } }`| `{ "StringKey1": 1, "StringKey2": 2, "StringKey3": 3 }` | Expression | `Dictionary<String, Int32>` containing three Int32 item with String keys|
| | `new Dictionary<String, dynamic>() { { "StringKey1", "StringValue" }, { "StringKey2", true }, { "StringKey3", 1 } }`| `{ "StringKey1": "StringValue", "StringKey2": true, "StringKey3": 1 }` | Expression | `Dictionary<String, dynamic>` containing a String item, a Boolean item and an Int32 item with String keys |

### Convert Dictionary&lt;TKey, TItem&gt; to Text

The following table shows some of the ways that a `Dictionary<TKey, TItem>` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block    | where `Object` property has a `Dictionary<String, dynamic>` value of `{ "StringKey1": "StringValue", "StringKey2": true, "StringKey3": 1 }` | `"{\r\n  \"StringKey1\": \"StringValue\",\r\n  \"StringKey2\": true,\r\n  \"StringKey3\": 1\r\n}"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Dictionary<TKey, TItem>`.
* The Literal Editor is not available for [Input][] properties where the data type is `Dictionary<TKey, TItem>`.
* The Variable Editor is available for [InputOutput][] and [Output] properties where the data type is `Dictionary<TKey, TItem>`.

### Known Limitations

* Currently, only certain data types can be used for `TKey`. These include, but not limited to:
  * `String`
  * `Int32`
  * `Double`
  * `Boolean`
  * `DateTimeOffset`
* If the data type of `TKey` is anything other than a `String`, when viewing the `Dictionary<TKey, TItem>` in Gateway the key value will be displayed as its `ToString()` representation (e.g. an `Int32` key value of `1` will be displayed as `"1"` instead of `1`).

## See Also

### Related Data Types

* [IEnumerable][]
* [IEnumerable&lt;TItem&gt;][]
* [IDictionary&lt;TKey, TItem&gt;][]

### Related Concepts

* [Working with Collections][]

### External Documentation

* [System.Collections.Generic.Dictionary&lt;TKey, TItem&gt;][]

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[System.Collections.Generic.Dictionary&lt;TKey, TItem&gt;]: {{< url "MSDocs.DotNet.Api.System.Collections.Generic.Dictionary" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable.MainDoc" >}}
[IEnumerable&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[IDictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}

[Working with Collections]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.MainDoc" >}}
