---
title: "IEnumerable<TItem>"
linkTitle: "IEnumerable<TItem>"
description: "Any data type representing a collection of items that can iterated or looped over. `TItem` indicates the data type of the items contained in the collection. `List<TItem>` is the most common example."
---

# {{< param title >}}

<p class="namespace">(System.Collections.Generic.IEnumerable&lt;TItem&gt;)</p>

## Summary

Any data type representing a collection of items that can iterated or looped over.

`TItem` indicates the data type of the items contained in the collection.

`List<TItem>` is the most common example; for more see [Most Common IEnumerable&lt;TItem&gt; Data Types][].

| | |
|-|-|
| **Category:**          | Collections                                                   |
| **Name:**              | `IEnumerable<TItem>`                                          |
| **Full Name:**         | `System.Collections.Generic.IEnumerable<TItem>`               |
| **Alias:**             | N/A                                                           |
| **Description:**       | Any data type representing a collection of items that can iterated or looped over. `TItem` indicates the data type of the items contained in the collection.          |
| **Size:**              | Varies                                                        |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `IEnumerable`, `Object`, `dynamic` |
|                        | `IEnumerable<TItemBaseType>` (e.g. where `IEnumerable<TItem>` is `IEnumerable<Int32>` and `IEnumerable<TItemBaseType>` is `IEnumerable<Object>` as `Object` is a base type of `Int32`; this is called covariance) |
| **Can be cast to:**    |  N/A                                                          |

## Remarks

### Most Common IEnumerable&lt;TItem&gt; Data Types

Any of the following data types can be used where an `IEnumerable<TItem>` is required:

* [IList&lt;TItem&gt;][]
* [List&lt;TItem&gt;][]
* [IDictionary&lt;TKey, TItem&gt;][]
* [Dictionary&lt;TKey, TItem&gt;][]
* [Structure][]
* [String][]

### Create an IEnumerable&lt;TItem&gt;

For some of the ways that an `IEnumerable<TItem>` can be created, please see each of the `IEnumerable<TItem>` data types:

* [List&lt;TItem&gt;][ListCreateNew]
* [Dictionary&lt;TKey, TItem&gt;][DictionaryCreateNew]
* [Structure][StructureCreateNew]
* [String][StringCreateNew]

### Convert IEnumerable&lt;TItem&gt; to Text

For some of the ways that an `IEnumerable<TItem>` can be converted to text, please see each of the `IEnumerable<TItem>` data types:

* [List&lt;TItem&gt;][ListConvertToText]
* [Dictionary&lt;TKey, TItem&gt;][DictionaryConvertToText]
* [Structure][StructureConvertToText]

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `IEnumerable<TItem>`.
* The Literal Editor is not available for [Input][] properties where the data type is `IEnumerable<TItem>`.
* The Variable Editor is available for [InputOutput][] and [Output] properties where the data type is `IEnumerable<TItem>`.

### Known Limitations

None

## See Also

### Related Data Types

* [IEnumerable][]
* [IList&lt;TItem&gt;][]
* [List&lt;TItem&gt;][]
* [IDictionary&lt;TKey, TItem&gt;][]
* [Dictionary&lt;TKey, TItem&gt;][]
* [Structure][]
* [String][]

### Related Concepts

* [Working with Collections][]

### External Documentation

* [System.Collections.Generic.IEnumerable&lt;TItem&gt;][]

[Most Common IEnumerable&lt;TItem&gt; Data Types]: {{< ref "#most-common-ienumerablelttitemgt-data-types" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[System.Collections.Generic.IEnumerable&lt;TItem&gt;]: {{< url "MSDocs.DotNet.Api.System.Collections.Generic.IEnumerable_TItem" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable.MainDoc" >}}
[IList&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[List&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[ListCreateNew]: {{< url "Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[ListConvertToText]: {{< url "Cortex.Reference.DataTypes.Collections.List.ConvertToText" >}}
[IDictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Dictionary&lt;TKey, TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[DictionaryCreateNew]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[DictionaryConvertToText]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.ConvertToText" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[StructureCreateNew]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.CreateNew" >}}
[StructureConvertToText]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.ConvertToText" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[StringCreateNew]: {{< url "Cortex.Reference.DataTypes.Text.String.CreateNew" >}}

[Working with Collections]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.MainDoc" >}}
