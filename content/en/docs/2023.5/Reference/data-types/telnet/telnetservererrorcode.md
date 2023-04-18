---
title: "TelnetServerErrorCode"
linkTitle: "TelnetServerErrorCode"
description: "Used to represent an error code explaining the reason an `TelnetServerException` occurred."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Telnet.TelnetServerErrorCode)</p>

## Summary

The `TelnetServerErrorCode` data type is used to represent an error code explaining the reason an [TelnetServerException][] occurred. For more information on the exception itself, see [TelnetServerException][].

`TelnetServerErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Telnet                                                  |
| **Name:**              | `TelnetServerErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.Telnet.TelnetServerErrorCode`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Error code explaining the reason an [TelnetServerException][] occurred. |
| **Size:**              | `4` bytes                                              |
| **Default Value:**     | `(TelnetServerErrorCode)0`                             |
| **Can be used as:**    | `TelnetServerErrorCode`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)TelnetServerErrorCode.HostDisconnect` or `(System.Int16)TelnetServerErrorCode.HostDisconnect` or `(short)TelnetServerErrorCode.HostDisconnect`)  |
|                        | `Int32` (e.g. `(Int32)TelnetServerErrorCode.HostDisconnect` or `(System.Int32)TelnetServerErrorCode.HostDisconnect` or `(int)TelnetServerErrorCode.HostDisconnect`)  |
|                        | `Int64` (e.g. `(Int64)TelnetServerErrorCode.HostDisconnect` or `(System.Int64)TelnetServerErrorCode.HostDisconnect` or `(long)TelnetServerErrorCode.HostDisconnect`)  |
|                        | `Single` (e.g. `(Single)TelnetServerErrorCode.HostDisconnect` or `(System.Single)TelnetServerErrorCode.HostDisconnect` or `(float)TelnetServerErrorCode.HostDisconnect`)  |
|                        | `Double` (e.g. `(Double)TelnetServerErrorCode.HostDisconnect` or `(System.Double)TelnetServerErrorCode.HostDisconnect` or `(double)TelnetServerErrorCode.HostDisconnect`)  |

## Values

### HostDisconnect

| | |
|-|-|
| **Name:**    | HostDisconnect                                     |
| **Value:**   | [Int32][] with value `100`                      |
| **Notes:**   | Used when an [TelnetServerException][] occurred due to the [Host][] provided has closed the session without using [CloseSession]|

## Remarks

### Create an TelnetServerErrorCode

The following table shows some of the ways that `TelnetServerErrorCode` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `TelnetServerErrorCode` expression | `TelnetServerErrorCode.HostDisconnect` | `TelnetServerErrorCode.HostDisconnect`| Expression | Indicates an [TelnetServerException][] occurred due to the [Host][] provided has closed the session without using [CloseSession] |
| Use [Explicit Casting][] | `(TelnetServerErrorCode)100` | `TelnetServerErrorCode.HostDisconnect`| Expression | Indicates an [TelnetServerException][] occurred due to the [Host][] provided has closed the session without using [CloseSession] |
| Use `Enum.Parse` | `(TelnetServerErrorCode)Enum.Parse(typeof(TelnetServerErrorCode), "HostDisconnect")` | `TelnetServerErrorCode.HostDisconnect`| Expression | Parses `"HostDisconnect"` and converts it to `TelnetServerErrorCode.InvalidPort`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(TelnetServerErrorCode)Enum.ToObject(typeof(TelnetServerErrorCode), 100)` | `TelnetServerErrorCode.HostDisconnect`| Expression | Converts `100` to `TelnetServerErrorCode.HostDisconnect` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information. 

### Convert TelnetServerErrorCode to Text

The following table shows some of the ways that an `TelnetServerErrorCode` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `TelnetServerErrorCode.HostDisconnect.ToString()` | `"HostDisconnect"` | Expression | Converts `TelnetServerErrorCode.HostDisconnect` to `"HostDisconnect"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(TelnetServerErrorCode.HostDisconnect)` | `"HostDisconnect"` | Expression | Converts `TelnetServerErrorCode.HostDisconnect` to `"HostDisconnect"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `TelnetServerErrorCode.HostDisconnect` | `"HostDisconnect"` | N/A  | Converts `TelnetServerErrorCode.HostDisconnect` to `"HostDisconnect"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `TelnetServerErrorCode.HostDisconnect` | `"100"` | N/A  | Converts `TelnetServerErrorCode.HostDisconnect` to `"100"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert TelnetServerErrorCode to a Number

The following table shows some of the ways that an `TelnetServerErrorCode` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)TelnetServerErrorCode.HostDisconnect`   | `100` | Expression | [Casts][Explicit Casting] `TelnetServerErrorCode.HostDisconnect` to `100` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(TelnetServerErrorCode.HostDisconnect)`   | `100` | Expression | Converts `TelnetServerErrorCode.HostDisconnect` to `100`. See [Convert.ToInt32][] |

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
[TelnetServerException]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetServerException" >}}
[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}