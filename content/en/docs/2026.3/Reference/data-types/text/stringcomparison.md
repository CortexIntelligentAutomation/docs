---
title: "StringComparison"
linkTitle: "StringComparison"
description: "Used to indicate how two pieces of text are compared against each other (i.e. which culture to use and whether to consider case or not)."
weight: 1
---

# {{% param title %}}

<p class="namespace">(System.StringComparison)</p>

{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Summary

The `StringComparison` data type is used to indicate how two pieces of text are compared against each other (i.e. which culture to use and whether to consider case or not).

`StringComparison` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Text                                                          |
| **Name:**              | `StringComparison`                                                        |
| **Full Name:**         | `System.StringComparison`                                                 |
| **Alias:**             | N/A |
| **Description:**       | Used to indicate how two pieces of text are compared against each other (i.e. which culture to use and whether to consider case or not). |
| **Default Value:**     | `(StringComparison)0`                                           |
| **Can be used as:**    | `StringComparison`, `object`, `dynamic`                                          |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)StringComparison.CurrentCulture` or `(System.Int16)StringComparison.CurrentCulture` or `(short)StringComparison.CurrentCulture`)  |
|                        | `Int32` (e.g. `(Int32)StringComparison.CurrentCulture` or `(System.Int32)StringComparison.CurrentCulture` or `(int)StringComparison.CurrentCulture`)  |
|                        | `Int64` (e.g. `(Int64)StringComparison.CurrentCulture` or `(System.Int64)StringComparison.CurrentCulture` or `(long)StringComparison.CurrentCulture`)  |
|                        | `Single` (e.g. `(Single)StringComparison.CurrentCulture` or `(System.Single)StringComparison.CurrentCulture` or `(float)StringComparison.CurrentCulture`)  |
|                        | `Double` (e.g. `(Double)StringComparison.CurrentCulture` or `(System.Double)StringComparison.CurrentCulture` or `(double)StringComparison.CurrentCulture`)  |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `StringComparison`.
- The Literal Editor is available for [Input][] properties where the data type is `StringComparison`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `StringComparison`.

### Known Limitations

None

## See Also

### Related Data Types

- [StringComparer][]

### Related Concepts

- [Working With Text][]
- [Working With Enums][]

### External Documentation

- [System.StringComparison][StringComparison]
- [System.Enum][]

[Working With Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}

[StringComparer]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparer.MainDoc" >}}
[StringComparison]: {{< url path="MSDocs.DotNet.Api.System.StringComparison" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
