---
title: "TelnetClientErrorCode"
linkTitle: "TelnetClientErrorCode"
description: "Used to represent an error code explaining the reason a `TelnetClientException` occurred."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Telnet.TelnetClientErrorCode)</p>

## Summary

The `TelnetClientErrorCode` data type is used to represent an error code explaining the reason a [TelnetClientException][] occurred. For more information on the exception itself, see [TelnetClientException][].

`TelnetClientErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Telnet                                                  |
| **Name:**              | `TelnetClientErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.Telnet.TelnetClientErrorCode`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Error code explaining the reason a [TelnetClientException][] occurred. |
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
| **Notes:**   | Used when a [TelnetClientException][] occurred due to an invalid [Host][] provided in the [TelnetSessionDetails][]. See [Invalid Host][]|

### InvalidPort

| | |
|-|-|
| **Name:**    | InvalidPort                                    |
| **Value:**   | [Int32][] with value `101`                      |
| **Notes:**   | Used when a [TelnetClientException][] occurred due to an invalid [Port][] provided in the [TelnetSessionDetails][]. See [Invalid Port][]|

### InvalidTerminalPrompt

| | |
|-|-|
| **Name:**    | InvalidTerminalPrompt                                    |
| **Value:**   | [Int32][] with value `102`                      |
| **Notes:**   | Used when a [TelnetClientException][] occurred due to an invalid [TerminalPrompt][] provided in the [TelnetSessionDetails][]. See [Invalid Terminal Prompt][]|

### InvalidSetting

| | |
|-|-|
| **Name:**    | InvalidSettings                                    |
| **Value:**   | [Int32][] with value `200`                      |
| **Notes:**   | Used when a [TelnetClientException][] occurred due to an invalid setting provided in the [ConfigurationSettings][]. See [Invalid Settings][]|

## Remarks

### Create a TelnetClientErrorCode

The following table shows some of the ways that a `TelnetClientErrorCode` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `TelnetClientErrorCode` expression | `TelnetClientErrorCode.InvalidHost` | `TelnetClientErrorCode.InvalidHost`| Expression | Indicates a [TelnetClientException][] occurred due to an invalid [Host][] provided in the [TelnetSessionDetails][] |
|| `TelnetClientErrorCode.InvalidPort` | `TelnetClientErrorCode.InvalidPort`| Expression | Indicates a [TelnetClientException][] occurred due to an invalid [Port][] provided in the [TelnetSessionDetails][] |
|| `TelnetClientErrorCode.InvalidTerminalPrompt` | `TelnetClientErrorCode.InvalidTerminalPrompt`| Expression | Indicates a [TelnetClientException][] occurred due to an invalid [TerminalPrompt][] provided in the [TelnetSessionDetails][] |
|| `TelnetClientErrorCode.InvalidSettings` | `TelnetClientErrorCode.InvalidSettings`| Expression | Indicates a [TelnetClientException][] occurred due to an invalid setting provided in the [ConfigurationSettings][] |
| Use [Explicit Casting][] | `(TelnetClientErrorCode)100` | `TelnetClientErrorCode.InvalidHost`| Expression | Indicates a [TelnetClientException][] occurred due to an invalid [Host][] provided in the [TelnetSessionDetails][] |
|| `(TelnetClientErrorCode)101` | `TelnetClientErrorCode.InvalidPort`| Expression | Indicates a [TelnetClientException][] occurred due to an invalid [Port][] provided in the [TelnetSessionDetails][] |
|| `(TelnetClientErrorCode)102` | `TelnetClientErrorCode.InvalidTerminalPrompt`| Expression | Indicates a [TelnetClientException][] occurred due to an invalid [TerminalPrompt][] provided in the [TelnetSessionDetails][]|
|| `(TelnetClientErrorCode)200` | `TelnetClientErrorCode.InvalidSettings`| Expression | Indicates a [TelnetClientException][] occurred due to an invalid setting provided in the [ConfigurationSettings][]|
| Use `Enum.Parse` | `(TelnetClientErrorCode)Enum.Parse(typeof(TelnetClientErrorCode), "InvalidHost")` | `TelnetClientErrorCode.InvalidHost`| Expression | Parses `"InvalidHost"` and converts it to `TelnetClientErrorCode.InvalidHost`. See [Enum.Parse][] |
|| `(TelnetClientErrorCode)Enum.Parse(typeof(TelnetClientErrorCode), "InvalidPort")` | `TelnetClientErrorCode.InvalidPort`| Expression | Parses `"InvalidPort"` and converts it to `TelnetClientErrorCode.InvalidPort`. See [Enum.Parse][] |
|| `(TelnetClientErrorCode)Enum.Parse(typeof(TelnetClientErrorCode), "InvalidTerminalPrompt")` | `TelnetClientErrorCode.InvalidTerminalPrompt`| Expression | Parses `"InvalidTerminalPrompt"` and converts it to `TelnetClientErrorCode.InvalidTerminalPrompt`. See [Enum.Parse][] |
|| `(TelnetClientErrorCode)Enum.Parse(typeof(TelnetClientErrorCode), "InvalidSettings")` | `TelnetClientErrorCode.InvalidSettings`| Expression | Parses `"InvalidSettings"` and converts it to `TelnetClientErrorCode.InvalidSettings`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(TelnetClientErrorCode)Enum.ToObject(typeof(TelnetClientErrorCode), 100)` | `TelnetClientErrorCode.InvalidHost`| Expression | Converts `100` to `TelnetClientErrorCode.InvalidHost` value. See [Enum.ToObject][] |
|| `(TelnetClientErrorCode)Enum.ToObject(typeof(TelnetClientErrorCode), 101)` | `TelnetClientErrorCode.InvalidPort`| Expression | Converts `101` to `TelnetClientErrorCode.InvalidPort` value. See [Enum.ToObject][] |
|| `(TelnetClientErrorCode)Enum.ToObject(typeof(TelnetClientErrorCode), 102)` | `TelnetClientErrorCode.InvalidTerminalPrompt`| Expression | Converts `102` to `TelnetClientErrorCode.InvalidTerminalPrompt` value. See [Enum.ToObject][] |
|| `(TelnetClientErrorCode)Enum.ToObject(typeof(TelnetClientErrorCode), 200)` | `TelnetClientErrorCode.InvalidSettings`| Expression | Converts `200` to `TelnetClientErrorCode.InvalidSettings` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information. 

### Convert a TelnetClientErrorCode to Text

The following table shows some of the ways that a `TelnetClientErrorCode` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `TelnetClientErrorCode.InvalidHost.ToString()` | `"InvalidHost"` | Expression | Converts `TelnetClientErrorCode.InvalidHost` to `"InvalidHost"`. See [Enum.ToString][] |
|| `TelnetClientErrorCode.InvalidPort.ToString()` | `"InvalidPort"` | Expression | Converts `TelnetClientErrorCode.InvalidPort` to `"InvalidPort"`. See [Enum.ToString][] |
|| `TelnetClientErrorCode.InvalidTerminalPrompt.ToString()` | `"InvalidTerminalPrompt"` | Expression | Converts `TelnetClientErrorCode.InvalidTerminalPrompt` to `"InvalidTerminalPrompt"`. See [Enum.ToString][] |
|| `TelnetClientErrorCode.InvalidSettings.ToString()` | `"InvalidSettings"` | Expression | Converts `TelnetClientErrorCode.InvalidSettings` to `"InvalidSettings"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(TelnetClientErrorCode.InvalidHost)` | `"InvalidHost"` | Expression | Converts `TelnetClientErrorCode.InvalidHost` to `"InvalidHost"`. See [Convert.ToString][] |
|| `Convert.ToString(TelnetClientErrorCode.InvalidPort)` | `"InvalidPort"` | Expression | Converts `TelnetClientErrorCode.InvalidPort` to `"InvalidPort"`. See [Convert.ToString][] |
|| `Convert.ToString(TelnetClientErrorCode.InvalidTerminalPrompt)` | `"InvalidTerminalPrompt"` | Expression | Converts `TelnetClientErrorCode.InvalidTerminalPrompt` to `"InvalidTerminalPrompt"`. See [Convert.ToString][] |
|| `Convert.ToString(TelnetClientErrorCode.InvalidSettings)` | `"InvalidSettings"` | Expression | Converts `TelnetClientErrorCode.InvalidSettings` to `"InvalidSettings"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `TelnetClientErrorCode.InvalidHost` | `"InvalidHost"` | N/A  | Converts `TelnetClientErrorCode.InvalidHost` to `"InvalidHost"`. See [Convert Object To Text][] |
|| where `Object` property has a value of `TelnetClientErrorCode.InvalidPort` | `"InvalidPort"` | N/A  | Converts `TelnetClientErrorCode.InvalidPort` to `"InvalidPort"`. See [Convert Object To Text][] |
|| where `Object` property has a value of `TelnetClientErrorCode.InvalidTerminalPrompt` | `"InvalidTerminalPrompt"` | N/A  | Converts `TelnetClientErrorCode.InvalidTerminalPrompt` to `"InvalidTerminalPrompt"`. See [Convert Object To Text][] |
|| where `Object` property has a value of `TelnetClientErrorCode.InvalidSettings` | `"InvalidSettings"` | N/A  | Converts `TelnetClientErrorCode.InvalidSettings` to `"InvalidSettings"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `TelnetClientErrorCode.InvalidHost` | `"100"` | N/A  | Converts `TelnetClientErrorCode.InvalidHost` to `"100"`. See [Convert Object To Json][] |
|| where `Object` property has a value of `TelnetClientErrorCode.InvalidPort` | `"101"` | N/A  | Converts `TelnetClientErrorCode.InvalidPort` to `"101"`. See [Convert Object To Json][] |
|| where `Object` property has a value of `TelnetClientErrorCode.InvalidTerminalPrompt` | `"102"` | N/A  | Converts `TelnetClientErrorCode.InvalidTerminalPrompt` to `"102"`. See [Convert Object To Json][] |
|| where `Object` property has a value of `TelnetClientErrorCode.InvalidSettings` | `"200"` | N/A  | Converts `TelnetClientErrorCode.InvalidSettings` to `"200"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert a TelnetClientErrorCode to a Number

The following table shows some of the ways that a `TelnetClientErrorCode` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)TelnetClientErrorCode.InvalidHost`   | `100` | Expression | [Casts][Explicit Casting] `TelnetClientErrorCode.InvalidHost` to `100` |
|| `(Int32)TelnetClientErrorCode.InvalidPort`   | `101` | Expression | [Casts][Explicit Casting] `TelnetClientErrorCode.InvalidPort` to `101` |
|| `(Int32)TelnetClientErrorCode.InvalidTerminalPrompt`   | `102` | Expression | [Casts][Explicit Casting] `TelnetClientErrorCode.InvalidTerminalPrompt` to `102` |
|| `(Int32)TelnetClientErrorCode.InvalidSettings`   | `200` | Expression | [Casts][Explicit Casting] `TelnetClientErrorCode.InvalidSettings` to `200` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(TelnetClientErrorCode.InvalidHost)`   | `100` | Expression | Converts `TelnetClientErrorCode.InvalidHost` to `100`. See [Convert.ToInt32][] |
|| `Convert.ToInt32(TelnetClientErrorCode.InvalidPort)`   | `101` | Expression | Converts `TelnetClientErrorCode.InvalidPort` to `101`. See [Convert.ToInt32][] |
|| `Convert.ToInt32(TelnetClientErrorCode.InvalidTerminalPrompt)`   | `102` | Expression | Converts `TelnetClientErrorCode.InvalidTerminalPrompt` to `102`. See [Convert.ToInt32][] |
|| `Convert.ToInt32(TelnetClientErrorCode.InvalidSettings)`   | `200` | Expression | Converts `TelnetClientErrorCode.InvalidSettings` to `200`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `TelnetClientErrorCode`.
- The Literal Editor is available for [Input][] properties where the data type is `TelnetClientErrorCode`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `TelnetClientErrorCode`.

### Known Limitations

None

## See Also

### Related Data Types

- [TelnetClientException][]
- [TelnetSessionDetails][]
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
[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}

[TelnetSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.MainDoc" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Port" >}}
[TerminalPrompt]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.TerminalPrompt" >}}
[ConfigurationSettings]: {{< url path="Cortex.Reference.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommand.ConfigurationSettings" >}}

[TelnetClientException]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetClientException.MainDoc" >}}
[Invalid Host]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetClientException.InvalidHost" >}}
[Invalid Port]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetClientException.InvalidPort" >}}
[Invalid Terminal Prompt]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetClientException.InvalidTerminalPrompt" >}}
[Invalid Settings]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetClientException.InvalidSettings" >}}
