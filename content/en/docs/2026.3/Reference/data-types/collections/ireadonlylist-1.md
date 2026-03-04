---
title: "IReadOnlyList<TItem>"
linkTitle: "IReadOnlyList<TItem>"
description: "Any data type representing a list of items that can iterated or looped over, where the number and order of items is read-only. `TItem` indicates the data type of the items contained in the list. Each `TItem` can be individually accessed by an index."
---
# {{% param title %}}

<p class="namespace">(System.Collections.Generic.IReadOnlyList&lt;TItem&gt;)</p>

## Summary

Any data type representing a list of items that can iterated or looped over, where the number and order of items is read-only.

`TItem` indicates the data type of the items contained in the list. Each `TItem` can be individually accessed by an index.

| | |
|-|-|
| **Category:**          | Collections                                                   |
| **Name:**              | `IReadOnlyList<TItem>`                                                 |
| **Full Name:**         | `System.Collections.Generic.IReadOnlyList<TItem>`                      |
| **Alias:**             | N/A                                                           |
| **Description:**       | Any data type representing a list of items that can iterated or looped over, where the number and order of items is read-only. `TItem` indicates the data type of the items contained in the list. Each `TItem` can be individually accessed by an index.                                                                                   |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `IReadOnlyList<TItem>`, `IReadOnlyCollection<TItem>`, `IEnumerable<TItem>`, `IEnumerable`, `Object`, `dynamic` |
|                        | `IEnumerable<TItemBaseType>` (e.g. where `IReadOnlyList<TItem>` is `IReadOnlyList<Int32>` and `IEnumerable<TItemBaseType>` is `IEnumerable<Object>` as `Object` is a base type of `Int32`; this is called covariance) |
| **Can be cast to:**    |  N/A    |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `IReadOnlyList<TItem>`.
* The Literal Editor is not available for [Input][] properties where the data type is `IReadOnlyList<TItem>`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `IReadOnlyList<TItem>`.

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

* [System.Collections.Generic.IReadOnlyList&lt;TItem&gt;][]
* [System.Collections.Generic.IReadOnlyCollection&lt;TItem&gt;][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[System.Collections.Generic.IReadOnlyList&lt;TItem&gt;]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IReadOnlyList" >}}
[System.Collections.Generic.IReadOnlyCollection&lt;TItem&gt;]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IReadOnlyCollection" >}}

[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable.MainDoc" >}}
[IEnumerable&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}

[Working with Collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
