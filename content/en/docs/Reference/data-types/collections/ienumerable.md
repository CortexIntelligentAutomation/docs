---
title: "IEnumerable"
linkTitle: "IEnumerable"
description: "Any data type representing a collection of items that can iterated or looped over. The items contained in the collection can be any data type. `List<TItem>` is the most common example."
---

# {{% param title %}}

<p class="namespace">(System.Collections.IEnumerable)</p>

## Summary

Any data type representing a collection of items that can iterated or looped over.

The items contained in the collection can be any data type.

`List<TItem>` is the most common example; for more see [Most Common IEnumerable Data Types][].

| | |
|-|-|
| **Category:**          | Collections                                                   |
| **Name:**              | `IEnumerable`                                                 |
| **Full Name:**         | `System.Collections.IEnumerable`                              |
| **Alias:**             | N/A                                                           |
| **Description:**       | Any data type representing a collection of items that can iterated or looped over. The items contained in the collection can be any data type.     |
| **Size:**              | Varies                                                        |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `Object`, `dynamic`                                           |
| **Can be cast to:**    | N/A                                                           |

## Remarks

### Most Common IEnumerable Data Types

Any of the following data types can be used where an `IEnumerable` is required:

* [IList&lt;TItem&gt;][]
* [List&lt;TItem&gt;][]
* [IDictionary&lt;TKey, TItem&gt;][]
* [Dictionary&lt;TKey, TItem&gt;][]
* [Structure][]
* [String][]

### Create an IEnumerable

For some of the ways that an `IEnumerable` can be created, please see each of the `IEnumerable` data types:

* [List&lt;TItem&gt;][ListCreateNew]
* [Dictionary&lt;TKey, TItem&gt;][DictionaryCreateNew]
* [Structure][StructureCreateNew]
* [String][StringCreateNew]

### Convert IEnumerable to Text

For some of the ways that an `IEnumerable` can be converted to text, please see each of the `IEnumerable` data types:

* [List&lt;TItem&gt;][ListConvertToText]
* [Dictionary&lt;TKey, TItem&gt;][DictionaryConvertToText]
* [Structure][StructureConvertToText]

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `IEnumerable`.
* The Literal Editor is not available for [Input][] properties where the data type is `IEnumerable`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `IEnumerable`.

### Known Limitations

None

## See Also

### Related Data Types

* [IEnumerable&lt;TItem&gt;][]
* [IList&lt;TItem&gt;][]
* [List&lt;TItem&gt;][]
* [IDictionary&lt;TKey, TItem&gt;][]
* [Dictionary&lt;TKey, TItem&gt;][]
* [Structure][]
* [String][]

### Related Concepts

* [Working with Collections][]

### External Documentation

* [System.Collections.IEnumerable][]

[Most Common IEnumerable Data Types]: {{< ref "#most-common-ienumerable-data-types" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[System.Collections.IEnumerable]: {{< url "MSDocs.DotNet.Api.System.Collections.IEnumerable" >}}

[IEnumerable&lt;TItem&gt;]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
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

[Working with Collections]: {{< url "Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
