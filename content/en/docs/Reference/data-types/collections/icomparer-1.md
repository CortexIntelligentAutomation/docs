---
title: "IComparer<TPriority>"
linkTitle: "IComparer<TPriority>"
description: "Any data type representing a comparer that can be used to order two values of `TPriority`."
---

# {{% param title %}}

<p class="namespace">(System.Collections.Generic.IComparer&lt;TPriority&gt;)</p>

## Summary

Any data type representing a comparer that can be used to order two values of [TPriority][].

`TPriority` indicates the data type of the priorities that are being compared.

`StringComparer` is the most common example.

| | |
|-|-|
| **Category:**          | Collections                                                   |
| **Name:**              | `IComparer<TPriority>`                                                |
| **Full Name:**         | `System.Collections.Generic.IComparer<TPriority>`                     |
| **Alias:**             | N/A                                                           |
| **Description:**       | Any data type representing a comparer that can be used to order two values of [TPriority][].                                                                    |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `IComparer<TPriority>`, `Object`, `dynamic`      |
| **Can be cast to:**    |  N/A                                                          |

## Remarks

### Most Common IComparer&lt;TPriority&gt; Data Types

Any of the following data types can be used where an `IComparer<TPriority>` is required:

* [StringComparer][]

### Create an IComparer&lt;TPriority&gt;

For some of the ways that an `IComparer<TPriority>` can be created, please see each of the `IComparer<TPriority>` data types:

* [StringComparer][StringComparerCreateNew]

### Convert IComparer&lt;TPriority&gt; to Text

For some of the ways that an `IComparer<TPriority>` can be converted to text, please see each of the `IComparer<TPriority>` data types:

* [StringComparer][StringComparerConvertToText]

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `IComparer<TPriority>`.
* The Literal Editor is not available for [Input][] properties where the data type is `IComparer<TPriority>`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `IComparer<TPriority>`.

### Known Limitations

None

## See Also

### Related Data Types

* [StringComparer][]
* [QueueWithPriority<TItem, TPriority>][]

### Related Concepts

None

### External Documentation

* [System.Collections.Generic.IComparer&lt;TItem&gt;][IComparer]

[TPriority]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[IComparer]: {{< url "MSDocs.DotNet.Api.System.IComparer.MainDoc" >}}

[QueueWithPriority<TItem, TPriority>]: {{< url "Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}

[StringComparer]: {{< url "Cortex.Reference.DataTypes.Text.StringComparer.MainDoc">}}
[StringComparerConvertToText]: {{< url "Cortex.Reference.DataTypes.Text.StringComparer.ConvertToText">}}
[StringComparerCreateNew]: {{< url "Cortex.Reference.DataTypes.Text.StringComparer.CreateNew">}}
