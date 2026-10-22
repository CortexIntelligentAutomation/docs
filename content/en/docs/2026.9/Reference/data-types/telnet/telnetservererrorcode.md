---
title: "TelnetServerErrorCode"
linkTitle: "TelnetServerErrorCode"
description: "Used to represent an error code explaining the reason a `TelnetServerException` occurred."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Telnet.TelnetServerErrorCode)</p>

## Summary

The `TelnetServerErrorCode` data type is used to represent an error code explaining the reason a [TelnetServerException][] occurred. For more information on the exception itself, see [TelnetServerException][].

`TelnetServerErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Telnet                                                  |
| **Name:**              | `TelnetServerErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.Telnet.TelnetServerErrorCode`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Error code explaining the reason a [TelnetServerException][] occurred. |
| **Size:**              | `4` bytes                                              |
| **Default Value:**     | `(TelnetServerErrorCode)0`                             |
| **Can be used as:**    | `TelnetServerErrorCode`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)TelnetServerErrorCode.HostDisconnected` or `(System.Int16)TelnetServerErrorCode.HostDisconnected` or `(short)TelnetServerErrorCode.HostDisconnected`)  |
|                        | `Int32` (e.g. `(Int32)TelnetServerErrorCode.HostDisconnected` or `(System.Int32)TelnetServerErrorCode.HostDisconnected` or `(int)TelnetServerErrorCode.HostDisconnected`)  |
|                        | `Int64` (e.g. `(Int64)TelnetServerErrorCode.HostDisconnected` or `(System.Int64)TelnetServerErrorCode.HostDisconnected` or `(long)TelnetServerErrorCode.HostDisconnected`)  |
|                        | `Single` (e.g. `(Single)TelnetServerErrorCode.HostDisconnected` or `(System.Single)TelnetServerErrorCode.HostDisconnected` or `(float)TelnetServerErrorCode.HostDisconnected`)  |
|                        | `Double` (e.g. `(Double)TelnetServerErrorCode.HostDisconnected` or `(System.Double)TelnetServerErrorCode.HostDisconnected` or `(double)TelnetServerErrorCode.HostDisconnected`)  |

## Values

### HostDisconnected

| | |
|-|-|
| **Name:**    | HostDisconnected                                     |
| **Value:**   | [Int32][] with value `100`                      |
| **Notes:**   | Used when a [TelnetServerException][] occurred due the [Host][] provided disconnecting from the session without using [CloseSession]. See [Host Disconnected][]|

## Remarks

### Create a TelnetServerErrorCode

The following table shows some of the ways that a `TelnetServerErrorCode` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `TelnetServerErrorCode` expression | `TelnetServerErrorCode.HostDisconnected` | `TelnetServerErrorCode.HostDisconnected`| Expression | Indicates a [TelnetServerException][] occurred due the [Host][] provided disconnecting from the session without using [CloseSession] |
| Use [Explicit Casting][] | `(TelnetServerErrorCode)100` | `TelnetServerErrorCode.HostDisconnected`| Expression | Indicates a [TelnetServerException][] occurred due the [Host][] provided disconnecting from the session without using [CloseSession] |
| Use `Enum.Parse` | `(TelnetServerErrorCode)Enum.Parse(typeof(TelnetServerErrorCode), "HostDisconnected")` | `TelnetServerErrorCode.HostDisconnected`| Expression | Parses `"HostDisconnected"` and converts it to `TelnetServerErrorCode.HostDisconnected`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(TelnetServerErrorCode)Enum.ToObject(typeof(TelnetServerErrorCode), 100)` | `TelnetServerErrorCode.HostDisconnected`| Expression | Converts `100` to `TelnetServerErrorCode.HostDisconnected` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information. 

### Convert a TelnetServerErrorCode to Text

The following table shows some of the ways that a `TelnetServerErrorCode` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `TelnetServerErrorCode.HostDisconnected.ToString()` | `"HostDisconnected"` | Expression | Converts `TelnetServerErrorCode.HostDisconnected` to `"HostDisconnected"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(TelnetServerErrorCode.HostDisconnected)` | `"HostDisconnected"` | Expression | Converts `TelnetServerErrorCode.HostDisconnected` to `"HostDisconnected"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `TelnetServerErrorCode.HostDisconnected` | `"HostDisconnected"` | N/A  | Converts `TelnetServerErrorCode.HostDisconnected` to `"HostDisconnected"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `TelnetServerErrorCode.HostDisconnected` | `"100"` | N/A  | Converts `TelnetServerErrorCode.HostDisconnected` to `"100"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert a TelnetServerErrorCode to a Number

The following table shows some of the ways that a `TelnetServerErrorCode` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)TelnetServerErrorCode.HostDisconnected`   | `100` | Expression | [Casts][Explicit Casting] `TelnetServerErrorCode.HostDisconnected` to `100` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(TelnetServerErrorCode.HostDisconnected)`   | `100` | Expression | Converts `TelnetServerErrorCode.HostDisconnected` to `100`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `TelnetServerErrorCode`.
- The Literal Editor is available for [Input][] properties where the data type is `TelnetServerErrorCode`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `TelnetServerErrorCode`.

### Known Limitations

None

## See Also

### Related Data Types

- [TelnetServerException][]
- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]

### External Documentation

- [System.Enum][]

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Host]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Host" >}}
[CloseSession]: {{< url path="Cortex.Reference.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommand.CloseSession" >}}

[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[TelnetServerException]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetServerException.MainDoc" >}}
[Host Disconnected]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetServerException.HostDisconnected" >}}
[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}