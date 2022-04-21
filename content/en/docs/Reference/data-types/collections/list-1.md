---
title: "List<TItem>"
linkTitle: "List<TItem>"
description: "Used to represent a list of items that can iterated or looped over. `TItem` indicates the data type of the items contained in the list. Each `TItem` can be individually accessed by an index."
---

# {{< param title >}}

<p class="namespace">(System.Collections.Generic.List&lt;TItem&gt;)</p>

## Summary

The `List<TItem>` data type is used to represent a list of items that can iterated or looped over.

`TItem` indicates the data type of the items contained in the list. Each `TItem` can be individually accessed by an index.

| | |
|-|-|
| **Category:**          | Collections                                                   |
| **Name:**              | `List<TItem>`                                                 |
| **Full Name:**         | `System.Collections.Generic.List<TItem>`                      |
| **Alias:**             | N/A                                                           |
| **Description:**       | A list of items that can iterated or looped over. `TItem` indicates the data type of the items contained in the list. Each `TItem` can be individually accessed by an index.                                                                                   |
| **Size:**              | Varies                                                        |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `IList<TItem>`, `IEnumerable<TItem>`, `IEnumerable`, `Object`, `dynamic` |
|                        | `IEnumerable<TItemBaseType>` (e.g. where `List<TItem>` is `List<Int32>` and `IEnumerable<TItemBaseType>` is `IEnumerable<Object>` as `Object` is a base type of `Int32`; this is called covariance) |
| **Can be cast to:**    |  N/A                                                          |

## Remarks

### Create a List&lt;TItem&gt;

The following table shows some of the ways that a `List<TItem>` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `List<TItem>` literal  | `[]`                     | `[]`                      | Expression | `List<dynamic>` containing zero items                         |
|                                  | `["Some Text"]`          | `["Some Text"]`           | Expression | `List<String>` containing one String item                     |
|                                  | `[true, false]`          | `[true, false]`           | Expression | `List<Boolean>` containing two Boolean items                  |
|                                  | `[1, 2, 3]`              | `[1, 2, 3]`               | Expression | `List<Int32>` containing three Int32 items                    |
|                                  | `["Some Text", true, 1]` | `["Some Text", true, 1]`  | Expression | `List<dynamic>` containing a String item, a Boolean item and an Int32 item                |
| Use a `List<TItem>` expression   | `new List<dynamic>()`    | `[]`                      | Expression | `List<dynamic>` containing zero items                         |
|                                  | `new List<String>() { "Some Text" }`          | `["Some Text"]`   | Expression | `List<String>` containing one String item        |
|                                  | `new List<Boolean>() { true, false }`         | `[true, false]`   | Expression | `List<Boolean>` containing two Boolean items     |
|                                  | `new List<Int32>() { 1, 2, 3 }`               | `[1, 2, 3]`       | Expression | `List<Int32>` containing three Int32 items       |
|                                  | `new List<dynamic>() { "Some Text", true, 1 }`| `["Some Text", true, 1]` | Expression | `List<dynamic>` containing a String item, a Boolean item and an Int32 item |

### Convert List&lt;TItem&gt; to Text

The following table shows some of the ways that a `List<TItem>` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block    | where `Object` property has a `List<dynamic>` value of `["Some Text", true, 1]` | `"[\r\n  \"Some Text\",\r\n  true,\r\n  1\r\n]"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `List<TItem>`.
* The Literal Editor is not available for [Input][] properties where the data type is `List<TItem>`.
* The Variable Editor is available for [InputOutput][] and [Output] properties where the data type is `List<TItem>`.

### Known Limitations

None

## See Also

### Related Types

* [IEnumerable][]
* [IEnumerable&lt;TItem&gt;][]
* [IList&lt;TItem&gt;][]

### Related Concepts

* [Working with Collections][]

### External Documentation

* [System.Collections.Generic.List&lt;TItem&gt;][]

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[System.Collections.Generic.List&lt;TItem&gt;]: {{< url "MSDocs.DotNet.Api.System.Collections.Generic.List" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable.MainDoc" >}}
[IEnumerable&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[IList&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}

[Working with Collections]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.MainDoc" >}}
