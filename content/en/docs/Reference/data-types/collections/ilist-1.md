---
title: "IList<TItem>"
linkTitle: "IList<TItem>"
description: "Any data type representing a list of items that can iterated or looped over. `TItem` indicates the data type of the items contained in the list. Each `TItem` can be individually accessed by an index. `List<TItem>` is the most common example."
---

# {{< param title >}}

<p class="namespace">(System.Collections.Generic.IList&lt;TItem&gt;)</p>

## Summary

Any data type representing a list of items that can iterated or looped over.

`TItem` indicates the data type of the items contained in the list. Each `TItem` can be individually accessed by an index.

`List<TItem>` is the most common example.

| | |
|-|-|
| **Category:**          | Collections                                                   |
| **Name:**              | `IList<TItem>`                                                |
| **Full Name:**         | `System.Collections.Generic.IList<TItem>`                     |
| **Alias:**             | N/A                                                           |
| **Description:**       | Any data type representing a list of items that can iterated or looped over. `TItem` indicates the data type of the items contained in the list. Each `TItem` can be individually accessed by an index.                                                                    |
| **Size:**              | Varies                                                        |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `IEnumerable<TItem>`, `IEnumerable`, `Object`, `dynamic`      |
|                        | `IEnumerable<TItemBaseType>` (e.g. where `IList<TItem>` is `IList<Int32>` and `IEnumerable<TItemBaseType>` is `IEnumerable<Object>` as `Object` is a base type of `Int32`; this is called covariance) |
| **Can be cast to:**    |  N/A                                                          |

## Remarks

### Most Common IList&lt;TItem&gt; Data Types

Any of the following data types can be used where an `IList<TItem>` is required:

* [List&lt;TItem&gt;][]

### Create an IList&lt;TItem&gt;

For some of the ways that an `IList<TItem>` can be created, please see each of the `IList<TItem>` data types:

* [List&lt;TItem&gt;][ListCreateNew]

### Convert IList&lt;TItem&gt; to Text

For some of the ways that an `IList<TItem>` can be converted to text, please see each of the `IList<TItem>` data types:

* [List&lt;TItem&gt;][ListConvertToText]

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `IList<TItem>`.
* The Literal Editor is not available for [Input][] properties where the data type is `IList<TItem>`.
* The Variable Editor is available for [InputOutput][] and [Output] properties where the data type is `IList<TItem>`.

### Known Limitations

None

## See Also

### Related Data Types

* [IEnumerable][]
* [IEnumerable&lt;TItem&gt;][]
* [List&lt;TItem&gt;][]

### Related Concepts

* [Working with Collections][]

### External Documentation

* [System.Collections.Generic.IList&lt;TItem&gt;][]

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[System.Collections.Generic.IList&lt;TItem&gt;]: {{< url "MSDocs.DotNet.Api.System.Collections.Generic.IList" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable.MainDoc" >}}
[IEnumerable&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[List&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[ListCreateNew]: {{< url "Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[ListConvertToText]: {{< url "Cortex.Reference.DataTypes.Collections.List.ConvertToText" >}}

[Working with Collections]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.MainDoc" >}}
