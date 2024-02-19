---
title: "EventSeverity"
linkTitle: "EventSeverity"
description: "Used to represent the severity of an event when it is logged."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Logs.EventSeverity)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `EventSeverity` data type is used to represent the severity of an event when it is logged.

`EventSeverity` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Logs                                                  |
| **Name:**              | `EventSeverity`                                |
| **Full Name:**         | `Cortex.DataTypes.Logs.EventSeverity`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent the severity of an event when it is logged. |
| **Default Value:**     | `(EventSeverity)0`                             |
| **Can be used as:**    | `EventSeverity`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)EventSeverity.Verbose` or `(System.Int16)EventSeverity.Verbose` or `(short)EventSeverity.Verbose`)  |
|                        | `Int32` (e.g. `(Int32)EventSeverity.Verbose` or `(System.Int32)EventSeverity.Verbose` or `(int)EventSeverity.Verbose`)  |
|                        | `Int64` (e.g. `(Int64)EventSeverity.Verbose` or `(System.Int64)EventSeverity.Verbose` or `(long)EventSeverity.Verbose`)  |
|                        | `Single` (e.g. `(Single)EventSeverity.Verbose` or `(System.Single)EventSeverity.Verbose` or `(float)EventSeverity.Verbose`)  |
|                        | `Double` (e.g. `(Double)EventSeverity.Verbose` or `(System.Double)EventSeverity.Verbose` or `(double)EventSeverity.Verbose`)  |

## Values

### Verbose

### Debug

### Information

### Warning

### Error

### Fatal

## Remarks

### Create an EventSeverity

### Convert EventSeverity to Text

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `EventSeverity`.
- The Literal Editor is available for [Input][] properties where the data type is `EventSeverity`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `EventSeverity`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]
- [Working with Text][]

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}


[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
