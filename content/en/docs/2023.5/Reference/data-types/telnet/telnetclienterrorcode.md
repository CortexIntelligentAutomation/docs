---
title: "TelnetClientErrorCode"
linkTitle: "TelnetClientErrorCode"
description: "Used to represent an error code explaining the reason an `TelnetClientException` occurred."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Telnet.TelnetClientErrorCode)</p>

## Summary

The `TelnetClientErrorCode` data type is used to represent an error code explaining the reason an [TelnetClientException][] occurred. For more information on the exception itself, see [TelnetClientException][].

`TelnetClientErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Telnet                                                  |
| **Name:**              | `TelnetClientErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.Telnet.TelnetClientErrorCode`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Error code explaining the reason an [TelnetClientException][] occurred. |
| **Size:**              | `4` bytes                                              |
| **Default Value:**     | `(TelnetClientErrorCode)0`                             |
| **Can be used as:**    | `TelnetClientErrorCode`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)TelnetClientErrorCode.InvalidHost` or `(System.Int16)TelnetClientErrorCode.InvalidHost` or `(short)TelnetClientErrorCode.InvalidHost`)  |
|                        | `Int32` (e.g. `(Int32)TelnetClientErrorCode.InvalidHost` or `(System.Int32)TelnetClientErrorCode.InvalidHost` or `(int)TelnetClientErrorCode.InvalidHost`)  |
|                        | `Int64` (e.g. `(Int64)TelnetClientErrorCode.InvalidHost` or `(System.Int64)TelnetClientErrorCode.InvalidHost` or `(long)TelnetClientErrorCode.InvalidHost`)  |
|                        | `Single` (e.g. `(Single)TelnetClientErrorCode.InvalidHost` or `(System.Single)TelnetClientErrorCode.InvalidHost` or `(float)TelnetClientErrorCode.InvalidHost`)  |
|                        | `Double` (e.g. `(Double)TelnetClientErrorCode.InvalidHost` or `(System.Double)TelnetClientErrorCode.InvalidHost` or `(double)TelnetClientErrorCode.InvalidHost`)  |

## Values

### InvalidHost

| | |
|-|-|
| **Name:**    | InvalidHost                                     |
| **Value:**   | [Int32][] with value `100`                      |
| **Notes:**   | Used when an [TelnetClientException][] occurred due to the [Host][] provided has closed the session without using [CloseSession]|

## Remarks

### Create an TelnetClientErrorCode

The following table shows some of the ways that `TelnetClientErrorCode` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `TelnetClientErrorCode` expression | `TelnetClientErrorCode.InvalidHost` | `TelnetClientErrorCode.InvalidHost`| Expression | Indicates an [TelnetClientException][] occurred due to the [Host][] provided has closed the session without using [CloseSession] |
| Use [Explicit Casting][] | `(TelnetClientErrorCode)100` | `TelnetClientErrorCode.InvalidHost`| Expression | Indicates an [TelnetClientException][] occurred due to the [Host][] provided has closed the session without using [CloseSession] |
| Use `Enum.Parse` | `(TelnetClientErrorCode)Enum.Parse(typeof(TelnetClientErrorCode), "InvalidHost")` | `TelnetClientErrorCode.InvalidHost`| Expression | Parses `"InvalidHost"` and converts it to `TelnetClientErrorCode.InvalidPort`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(TelnetClientErrorCode)Enum.ToObject(typeof(TelnetClientErrorCode), 100)` | `TelnetClientErrorCode.InvalidHost`| Expression | Converts `100` to `TelnetClientErrorCode.InvalidHost` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information. 

### Convert TelnetClientErrorCode to Text

The following table shows some of the ways that an `TelnetClientErrorCode` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `TelnetClientErrorCode.InvalidHost.ToString()` | `"InvalidHost"` | Expression | Converts `TelnetClientErrorCode.InvalidHost` to `"InvalidHost"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(TelnetClientErrorCode.InvalidHost)` | `"InvalidHost"` | Expression | Converts `TelnetClientErrorCode.InvalidHost` to `"InvalidHost"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `TelnetClientErrorCode.InvalidHost` | `"InvalidHost"` | N/A  | Converts `TelnetClientErrorCode.InvalidHost` to `"InvalidHost"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `TelnetClientErrorCode.InvalidHost` | `"100"` | N/A  | Converts `TelnetClientErrorCode.InvalidHost` to `"100"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert TelnetClientErrorCode to a Number

The following table shows some of the ways that an `TelnetClientErrorCode` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)TelnetClientErrorCode.InvalidHost`   | `100` | Expression | [Casts][Explicit Casting] `TelnetClientErrorCode.InvalidHost` to `100` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(TelnetClientErrorCode.InvalidHost)`   | `100` | Expression | Converts `TelnetClientErrorCode.InvalidHost` to `100`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `TelnetClientErrorCode`.
- The Literal Editor is available for [Input][] properties where the data type is `TelnetClientErrorCode`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `TelnetClientErrorCode`.

### Known Limitations

None

## See Also

### Related Data Types

- [TelnetClientException][]
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
[TelnetClientException]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetClientException" >}}
[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}