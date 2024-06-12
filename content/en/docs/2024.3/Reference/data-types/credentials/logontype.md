---
title: "LogonType"
linkTitle: "LogonType"
description: "Used to represent the Logon type used for the UserCredentials."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Credentials.LogonType)</p>

## Summary

The `LogonType` data type is used to represent the Logon type for the [UserCredentials][].

`LogonType` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

|                     |                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Category:**       | Credentials                                                                                                                               |
| **Name:**           | `LogonType`                                                                                                                   |
| **Full Name:**      | `Cortex.DataTypes.Credentials.LogonType`                                                                                                        |
| **Alias:**          | N/A                                                                                                                                |
| **Description:**    | Used to represent the Logon type of the [UserCredentials][].                                                                     |
| **Default Value:**  | `LogonType.Network`                                                                                                                |
| **Can be used as:** | `LogonType`, `Object`, `dynamic`                                                                                              |
| **Can be cast to:** | `Int16` (e.g. `(Int16)LogonType.Network` or `(System.Int16)LogonType.Network` or `(short)LogonType.Network`)     |
|                     | `Int32` (e.g. `(Int32)LogonType.Network` or `(System.Int32)LogonType.Network` or `(int)LogonType.Network`)       |
|                     | `Int64` (e.g. `(Int64)LogonType.Network` or `(System.Int64)LogonType.Network` or `(long)LogonType.Network`)      |
|                     | `Single` (e.g. `(Single)LogonType.Network` or `(System.Single)LogonType.Network` or `(float)LogonType.Network`)  |
|                     | `Double` (e.g. `(Double)LogonType.Network` or `(System.Double)LogonType.Network` or `(double)LogonType.Network`) |

## Values

### Network

|            |                            |
|------------|----------------------------|
| **Name:**  | Network                       |
| **Value:** | [Int32][] with value `3` |
| **Notes:** | The security principal is logging on using a network. This allows for NET USE, RPC calls, Remote Registry, IIS integrated Windows auth, and local SQL Windows auth.  |

### NetworkCleartext

|            |                            |
|------------|----------------------------|
| **Name:**  | NetworkCleartext                       |
| **Value:** | [Int32][] with value `8` |
| **Notes:** | The logon is a Network logon with plaintext credentials.  |

### NewCredentials

|            |                            |
|------------|----------------------------|
| **Name:**  | NewCredentials                       |
| **Value:** | [Int32][] with value `9` |
| **Notes:** | Allows the caller to clone its current logon token and specify new credentials for outbound connections. The new logon session has the same local identity but uses different credentials for other network connections. This logon type should be used when authenticating against a remote database.   |

## Remarks

### Create LogonType

The following table shows some of the ways that `LogonType` can be created using the expression editor.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `LogonType` expression | `LogonType.Network` | `LogonType.Network`| Expression |  |
| | `LogonType.NetworkCleartext` | `LogonType.NetworkCleartext` | Expression |  |
| | `LogonType.NewCredentials` | `LogonType.NewCredentials` | Expression |  |
| Use [Explicit Casting][] | `(LogonType)3` | `LogonType.Network`| Expression |  |
| | `(LogonType)8` | `LogonType.NetworkCleartext` | Expression |  |
| | `(LogonType)9` | `LogonType.NewCredentials` | Expression |  |
| Use `Enum.Parse` | `(LogonType)Enum.Parse(typeof(LogonType), "Network")` | `LogonType.Network`| Expression | Parses `"Network"` and converts it to `LogonType.Network`. See [Enum.Parse][] |
| | `(LogonType)Enum.Parse(typeof(LogonType), "NetworkCleartext")` | `LogonType.NetworkCleartext`| Expression | Parses `"NetworkCleartext"` and converts it to `LogonType.NetworkCleartext`. See [Enum.Parse][] |
| | `(LogonType)Enum.Parse(typeof(LogonType), "NewCredentials")` | `LogonType.NewCredentials`| Expression | Parses `"NewCredentials"` and converts it to `LogonType.NewCredentials`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(LogonType)Enum.ToObject(typeof(LogonType), 3)` | `LogonType.Network`| Expression | Converts `3` to `LogonType.Network` value. See [Enum.ToObject][] |
| | `(LogonType)Enum.ToObject(typeof(LogonType), 8)` | `LogonType.NetworkCleartext` | Expression | Converts `8` to `LogonType.NetworkCleartext` value. See [Enum.ToObject][] |
| | `(LogonType)Enum.ToObject(typeof(LogonType), 9)` | `LogonType.NewCredentials` | Expression | Converts `9` to `LogonType.NewCredentials` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert LogonType to Text

The following table shows some of the ways that a `LogonType` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `LogonType.Network.ToString()` | `"Network"` | Expression | Converts `LogonType.Network` to `"Network"`. See [Enum.ToString][] |
| | `LogonType.NetworkCleartext.ToString()` | `"NetworkCleartext"` | Expression | Converts `LogonType.NetworkCleartext` to `"NetworkCleartext"`. See [Enum.ToString][] |
| | `LogonType.NewCredentials.ToString()` | `"NewCredentials"` | Expression | Converts `LogonType.NewCredentials` to `"NewCredentials"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(LogonType.Network)` | `"Network"` | Expression | Converts `LogonType.Network` to `"Network"`. See [Convert.ToString][] |
| | `Convert.ToString(LogonType.NetworkCleartext)` | `"NetworkCleartext"` | Expression | Converts `LogonType.NetworkCleartext` to `"NetworkCleartext"`. See [Convert.ToString][] |
| | `Convert.ToString(LogonType.NewCredentials)` | `"NewCredentials"` | Expression | Converts `LogonType.NewCredentials` to `"NewCredentials"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `LogonType.Network` | `"Network"` | N/A  | Converts `LogonType.Network` to `"Network"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `LogonType.NetworkCleartext` | `"NetworkCleartext"` | N/A  | Converts `LogonType.NetworkCleartext` to `"NetworkCleartext"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `LogonType.NewCredentials` | `"NewCredentials"` | N/A  | Converts `LogonType.NewCredentials` to `"NewCredentials"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `LogonType.Network` | `"3"` | N/A  | Converts `LogonType.Network` to `"3"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `LogonType.NetworkCleartext` | `"8"` | N/A  | Converts `LogonType.NetworkCleartext` to `"8"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `LogonType.NewCredentials` | `"9"` | N/A  | Converts `LogonType.NewCredentials` to `"9"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert LogonType to a Number

The following table shows some of the ways that a `LogonType` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)LogonType.Network`   | `3` | Expression | [Casts][Explicit Casting] `LogonType.Network` to `3` |
|                                       | `(Int32)LogonType.NetworkCleartext`   | `8` | Expression | [Casts][Explicit Casting] `LogonType.NetworkCleartext` to `8` |
|                                       | `(Int32)LogonType.NewCredentials`   | `9` | Expression | [Casts][Explicit Casting] `LogonType.NewCredentials` to `9` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(LogonType.Network)`   | `3` | Expression | Converts `LogonType.Network` to `3`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(LogonType.NetworkCleartext)`   | `8` | Expression | Converts `LogonType.NetworkCleartext` to `8`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(LogonType.NewCredentials)`   | `9` | Expression | Converts `LogonType.NewCredentials` to `9`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `LogonType`.
- The Literal Editor is available for [Input][] properties where the data type is `LogonType`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `LogonType`.

### Known Limitations

- When [LogonType][] is set to `LogonType.NewCredentials` and trying to connect to a localhost database, it will not recognise the UserCredentials. To fix this use `LogonType.Network` as the [LogonType][].

## See Also

### Related Data Types

- [Int32][]
- [String][]
- [UserCredentials][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]

### External Documentation

- [LogonTypes][]
- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[LogonTypes]: {{< url path="MSDocs.Windows.WindowsServer.LogonTypes" >}}
[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}
[LogonType]: {{< url path="Cortex.Reference.DataTypes.Credentials.LogonType.MainDoc" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}

[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
