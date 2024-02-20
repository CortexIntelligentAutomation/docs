---
title: "InfiniteLoopErrorCode"
linkTitle: "InfiniteLoopErrorCode"
description: "Used to represent an error code explaining the reason an `InfiniteLoopException` occurred."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Loops.InfiniteLoopErrorCode)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `InfiniteLoopErrorCode` data type is used to represent an error code explaining the reason a [InfiniteLoopException][] occurred. For more information on the exception itself, see [InfiniteLoopException][].

`InfiniteLoopErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Loops                                                  |
| **Name:**              | `InfiniteLoopErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.PowerShell.InfiniteLoopErrorCode`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Error code explaining the reason a [InfiniteLoopException][] occurred. |
| **Default Value:**     | `(InfiniteLoopErrorCode)0`                             |
| **Can be used as:**    | `InfiniteLoopErrorCode`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)InfiniteLoopErrorCode.IncrementIsZero` or `(System.Int16)InfiniteLoopErrorCode.IncrementIsZero` or `(short)InfiniteLoopErrorCode.IncrementIsZero`)  |
|                        | `Int32` (e.g. `(Int32)InfiniteLoopErrorCode.IncrementIsZero` or `(System.Int32)InfiniteLoopErrorCode.IncrementIsZero` or `(int)InfiniteLoopErrorCode.IncrementIsZero`)  |
|                        | `Int64` (e.g. `(Int64)InfiniteLoopErrorCode.IncrementIsZero` or `(System.Int64)InfiniteLoopErrorCode.IncrementIsZero` or `(long)InfiniteLoopErrorCode.IncrementIsZero`)  |
|                        | `Single` (e.g. `(Single)InfiniteLoopErrorCode.IncrementIsZero` or `(System.Single)InfiniteLoopErrorCode.IncrementIsZero` or `(float)InfiniteLoopErrorCode.IncrementIsZero`)  |
|                        | `Double` (e.g. `(Double)InfiniteLoopErrorCode.IncrementIsZero` or `(System.Double)InfiniteLoopErrorCode.IncrementIsZero` or `(double)InfiniteLoopErrorCode.IncrementIsZero`)  |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `InfiniteLoopErrorCode`.
- The Literal Editor is available for [Input][] properties where the data type is `InfiniteLoopErrorCode`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `InfiniteLoopErrorCode`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]
- [InfiniteLoopException][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]
- [Working with Text][]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[InfiniteLoopException]: {{< url path = "Cortex.Reference.Exceptions.Loops.InfiniteLoopException.MainDoc" >}}
