---
title: "PSRemotingErrorCode"
linkTitle: "PSRemotingErrorCode"
description: "Used to represent an error code explaining the reason a PSRemotingException occurred."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.PowerShell.PSRemotingErrorCode)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `PSRemotingErrorCode` data type is used to represent an error code explaining the reason a [PSRemotingException][] occurred. For more information on the exception itself, see [PSRemotingException][].

`PSRemotingErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | PowerShell                                                  |
| **Name:**              | `PSRemotingErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.PowerShell.PSRemotingErrorCode`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Error code explaining the reason a [PSRemotingException][] occurred. |
| **Default Value:**     | `(PSRemotingErrorCode)0`                             |
| **Can be used as:**    | `PSRemotingErrorCode`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)PSRemotingErrorCode.AccessDenied` or `(System.Int16)PSRemotingErrorCode.AccessDenied` or `(short)PSRemotingErrorCode.AccessDenied`)  |
|                        | `Int32` (e.g. `(Int32)PSRemotingErrorCode.AccessDenied` or `(System.Int32)PSRemotingErrorCode.AccessDenied` or `(int)PSRemotingErrorCode.AccessDenied`)  |
|                        | `Int64` (e.g. `(Int64)PSRemotingErrorCode.AccessDenied` or `(System.Int64)PSRemotingErrorCode.AccessDenied` or `(long)PSRemotingErrorCode.AccessDenied`)  |
|                        | `Single` (e.g. `(Single)PSRemotingErrorCode.AccessDenied` or `(System.Single)PSRemotingErrorCode.AccessDenied` or `(float)PSRemotingErrorCode.AccessDenied`)  |
|                        | `Double` (e.g. `(Double)PSRemotingErrorCode.AccessDenied` or `(System.Double)PSRemotingErrorCode.AccessDenied` or `(double)PSRemotingErrorCode.AccessDenied`)  |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `PSRemotingErrorCode`.
- The Literal Editor is available for [Input][] properties where the data type is `PSRemotingErrorCode`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `PSRemotingErrorCode`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]
- [PSRemotingException][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[PSRemotingException]: {{< url path = "Cortex.Reference.Exceptions.PowerShell.PSRemotingException.MainDoc" >}}
