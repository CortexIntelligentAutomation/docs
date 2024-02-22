---
title: "TelnetOptions"
linkTitle: "TelnetOptions"
description: "Used to represent the set of telnet options used in the connection handshake between a telnet server and client."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Telnet.TelnetOptions)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `TelnetOptions` data type is used to represent the set of telnet options used in the connection handshake between a telnet server and client.

`TelnetOptions` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Telnet                                                  |
| **Name:**              | `TelnetOptions`                                |
| **Full Name:**         | `Cortex.DataTypes.Telnet.TelnetOptions`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent the set of telnet options used in the connection handshake between a telnet server and client. |
| **Default Value:**     | `(TelnetOptions)0`                             |
| **Can be used as:**    | `TelnetOptions`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)TelnetOptions.TerminalType` or `(System.Int16)TelnetOptions.TerminalType` or `(short)TelnetOptions.TerminalType`)  |
|                        | `Int32` (e.g. `(Int32)TelnetOptions.TerminalType` or `(System.Int32)TelnetOptions.TerminalType` or `(int)TelnetOptions.TerminalType`)  |
|                        | `Int64` (e.g. `(Int64)TelnetOptions.TerminalType` or `(System.Int64)TelnetOptions.TerminalType` or `(long)TelnetOptions.TerminalType`)  |
|                        | `Single` (e.g. `(Single)TelnetOptions.TerminalType` or `(System.Single)TelnetOptions.TerminalType` or `(float)TelnetOptions.TerminalType`)  |
|                        | `Double` (e.g. `(Double)TelnetOptions.TerminalType` or `(System.Double)TelnetOptions.TerminalType` or `(double)TelnetOptions.TerminalType`)  |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `TelnetOptions`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `TelnetOptions`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]

### External Documentation

- [System.Enum][]

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
