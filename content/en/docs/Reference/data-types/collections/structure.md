---
title: "Structure"
linkTitle: "Structure"
description: "Used to represent a collection of key/item pairs, where the data type of the keys used to access the items contained in the collection is `String` and the items contained in the collection can be any data type. Each item can be individually accessed by its `String` key."
---

# {{< param title >}}

<p class="namespace">(Cortex.DataTypes.Dictionaries.Structure)</p>

## Summary

The `Structure` data type is used to represent a collection of key/item pairs.

The data type of the keys used to access the items contained in the collection is `String` and the items contained in the collection can be any data type. Each item can be individually accessed by its `String` key.

| | |
|-|-|
| **Category:**          | Collections                                                   |
| **Name:**              | `Structure`                                                   |
| **Full Name:**         | `Cortex.DataTypes.Dictionaries.Structure`                     |
| **Alias:**             | N/A                                                           |
| **Description:**       | Used to represent a collection of key/item pairs, where the data type of the keys used to access the items contained in the collection is `String` and the items contained in the collection can be any data type. Each item can be individually accessed by its `String` key.            |
| **Size:**              | Varies                                                        |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `IDictionary<TKey, TItem>`, `IEnumerable`, `Object`, `dynamic` |
|                        | `IEnumerable<KeyValuePair<TKey, TItem>>` (e.g. where `IEnumerable<KeyValuePair<TKey, TItem>>` is `IEnumerable<KeyValuePair<String, dynamic>>`) |
| **Can be cast to:**    |  N/A |

## Remarks

### Create a Structure

The following table shows some of the ways that a `Structure` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `Structure` literal | `{}` | `{}` | Expression | `Structure` containing zero items |
| | `{ "StringKey1": "StringValue" }` | `{ "StringKey1": "StringValue" }` | Expression | `Structure` containing one String item with a String key |
| | `{ "StringKey1": true, "StringKey2": false }` | `{ "StringKey1": true, "StringKey2": false }` | Expression | `Structure` containing two Boolean items with String keys |
| | `{ "StringKey1": 1, "StringKey2": 2, "StringKey3": 3 }`| `{ "StringKey1": 1, "StringKey2": 2, "StringKey3": 3 }` | Expression | `Structure` containing three Int32 item with String keys|
| | `{ "StringKey1": "StringValue", "StringKey2": true, "StringKey3": 1 }`| `{ "StringKey1": "StringValue", "StringKey2": true, "StringKey3": 1 }` | Expression | `Structure` containing a String item, a Boolean item and an Int32 item with String keys |
| Use a `Structure` expression | `new Structure()` | `{}` | Expression | `Structure` containing zero items |
| | `new Structure() { { "StringKey1", "StringValue" } }` | `{ "StringKey1": "StringValue" }` | Expression | `Structure` containing one String item with a String key |
| | `new Structure() { { "StringKey1", true }, { "StringKey2", false } }` | `{ "StringKey1": true, "StringKey2": false }` | Expression | `Structure` containing two Boolean items with String keys |
| | `new Structure() { { "StringKey1", 1 }, { "StringKey2", 2 }, { "StringKey3", 3 } }`| `{ "StringKey1": 1, "StringKey2": 2, "StringKey3": 3 }` | Expression | `Structure` containing three Int32 item with String keys|
| | `new Structure() { { "StringKey1", "StringValue" }, { "StringKey2", true }, { "StringKey3", 1 } }`| `{ "StringKey1": "StringValue", "StringKey2": true, "StringKey3": 1 }` | Expression | `Structure` containing a String item, a Boolean item and an Int32 item with String keys |

### Convert Structure to Text

The following table shows some of the ways that a `Structure` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block    | where `Object` property has a `Structure` value of `{ "StringKey1": "StringValue", "StringKey2": true, "StringKey3": 1 }` | `"{\r\n  \"StringKey1\": \"StringValue\",\r\n  \"StringKey2\": true,\r\n  \"StringKey3\": 1\r\n}"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Structure`.
* The Literal Editor is not available for [Input][] properties where the data type is `Structure`.
* The Variable Editor is available for [InputOutput][] and [Output] properties where the data type is `Structure`.

### Known Limitations

None

## See Also

### Related Data Types

* [IEnumerable][]
* [IEnumerable&lt;TItem&gt;][]
* [IDictionary&lt;TKey, TItem&gt;][]

### Related Concepts

* [Working with Collections][]

### External Documentation

N/A

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable.MainDoc" >}}
[IEnumerable&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[IDictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}

[Working with Collections]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.MainDoc" >}}
