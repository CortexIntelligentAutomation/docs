---
title: "DateTimeComponentType"
linkTitle: "DateTimeComponentType"
description: "Used to represent a component of a `DateTimeOffset` (e.g. `Year`, `Month`, `Day`)."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.DateAndTime.DateTimeComponentType)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `DateTimeComponentType` data type is used to represent a component of a `DateTimeOffset` (e.g. `Year`, `Month`, `Day`).

`DateTimeComponentType` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Date & Time                                                         |
| **Name:**              | `DateTimeComponentType`                                                        |
| **Full Name:**         | `Cortex.DataTypes.DateAndTime.DateTimeComponentType`                                                 |
| **Alias:**             | N/A |
| **Description:**       | Used to represent a component of a `DateTimeOffset` (e.g. `Year`, `Month`, `Day`). |
| **Default Value:**     | `(DateTimeComponentType)0` |
| **Can be used as:**    | `DateTimeComponentType`, `object`, `dynamic` |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)DateTimeComponentType.LocalDateTime` or `(System.Int16)DateTimeComponentType.LocalDateTime` or `(short)DateTimeComponentType.LocalDateTime`)  |
|                        | `Int32` (e.g. `(Int32)DateTimeComponentType.LocalDateTime` or `(System.Int32)DateTimeComponentType.LocalDateTime` or `(int)DateTimeComponentType.LocalDateTime`)  |
|                        | `Int64` (e.g. `(Int64)DateTimeComponentType.LocalDateTime` or `(System.Int64)DateTimeComponentType.LocalDateTime` or `(long)DateTimeComponentType.LocalDateTime`)  |
|                        | `Single` (e.g. `(Single)DateTimeComponentType.LocalDateTime` or `(System.Single)DateTimeComponentType.LocalDateTime` or `(float)DateTimeComponentType.LocalDateTime`)  |
|                        | `Double` (e.g. `(Double)DateTimeComponentType.LocalDateTime` or `(System.Double)DateTimeComponentType.LocalDateTime` or `(double)DateTimeComponentType.LocalDateTime`)  |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `DateTimeComponentType`.
- The Literal Editor is available for [Input][] properties where the data type is `DateTimeComponentType`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `DateTimeComponentType`.

### Known Limitations

None

## See Also

### Related Data Types

- [DateTimeOffset][]

### Related Concepts

- [Working with Date and Time][]

### External Documentation

- [System.DateTimeOffset][]
- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}

[Working with Date and Time]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.MainDoc" >}}
[System.DateTimeOffset]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.MainDoc" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
