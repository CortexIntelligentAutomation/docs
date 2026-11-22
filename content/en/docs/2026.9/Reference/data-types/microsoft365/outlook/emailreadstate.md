---
title: "EmailReadState"
linkTitle: "EmailReadState"
description: "Filters emails by whether they have been read."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.EmailReadState)</p>

## Summary

The `EmailReadState` data type filters the emails returned by [Get Emails Using Microsoft 365][] by whether they have been read.

`EmailReadState` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `EmailReadState` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.EmailReadState` |
| **Alias:**             | N/A |
| **Description:**       | Filters emails by whether they have been read. |
| **Size:**              | `4` bytes |
| **Default Value:**     | `EmailReadState.All` |
| **Can be used as:**    | `EmailReadState`, `Object`, `dynamic` |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)EmailReadState.All` or `(System.Int16)EmailReadState.All` or `(short)EmailReadState.All`)  |
|                        | `Int32` (e.g. `(Int32)EmailReadState.All` or `(System.Int32)EmailReadState.All` or `(int)EmailReadState.All`)  |
|                        | `Int64` (e.g. `(Int64)EmailReadState.All` or `(System.Int64)EmailReadState.All` or `(long)EmailReadState.All`)  |
|                        | `Single` (e.g. `(Single)EmailReadState.All` or `(System.Single)EmailReadState.All` or `(float)EmailReadState.All`)  |
|                        | `Double` (e.g. `(Double)EmailReadState.All` or `(System.Double)EmailReadState.All` or `(double)EmailReadState.All`)  |

## Values

### All

| | |
|-|-|
| **Name:**    | All |
| **Value:**   | [Int32][] with value `0` |
| **Notes:**   | Returns both read and unread emails. |

### Read

| | |
|-|-|
| **Name:**    | Read |
| **Value:**   | [Int32][] with value `1` |
| **Notes:**   | Returns only emails that have been read. |

### Unread

| | |
|-|-|
| **Name:**    | Unread |
| **Value:**   | [Int32][] with value `2` |
| **Notes:**   | Returns only emails that have not been read. |

## Remarks

### Create an EmailReadState

The following table shows some of the ways that `EmailReadState` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare an `EmailReadState` literal | `All` | `EmailReadState.All` | Literal | Returns both read and unread emails. |
|  | `Read` | `EmailReadState.Read` | Literal | Returns only emails that have been read. |
|  | `Unread` | `EmailReadState.Unread` | Literal | Returns only emails that have not been read. |
| Use an `EmailReadState` expression | `EmailReadState.All` | `EmailReadState.All` | Expression | Returns both read and unread emails. |
|  | `EmailReadState.Read` | `EmailReadState.Read` | Expression | Returns only emails that have been read. |
|  | `EmailReadState.Unread` | `EmailReadState.Unread` | Expression | Returns only emails that have not been read. |
| Use [Explicit Casting][] | `(EmailReadState)0` | `EmailReadState.All` | Expression | Returns both read and unread emails. |
|  | `(EmailReadState)1` | `EmailReadState.Read` | Expression | Returns only emails that have been read. |
|  | `(EmailReadState)2` | `EmailReadState.Unread` | Expression | Returns only emails that have not been read. |
| Use `Enum.Parse` | `(EmailReadState)Enum.Parse(typeof(EmailReadState), "All")` | `EmailReadState.All` | Expression | Parses `"All"` and converts it to `EmailReadState.All`. See [Enum.Parse][] |
|  | `(EmailReadState)Enum.Parse(typeof(EmailReadState), "Read")` | `EmailReadState.Read` | Expression | Parses `"Read"` and converts it to `EmailReadState.Read`. See [Enum.Parse][] |
|  | `(EmailReadState)Enum.Parse(typeof(EmailReadState), "Unread")` | `EmailReadState.Unread` | Expression | Parses `"Unread"` and converts it to `EmailReadState.Unread`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(EmailReadState)Enum.ToObject(typeof(EmailReadState), 0)` | `EmailReadState.All` | Expression | Converts `0` to `EmailReadState.All`. See [Enum.ToObject][] |
|  | `(EmailReadState)Enum.ToObject(typeof(EmailReadState), 1)` | `EmailReadState.Read` | Expression | Converts `1` to `EmailReadState.Read`. See [Enum.ToObject][] |
|  | `(EmailReadState)Enum.ToObject(typeof(EmailReadState), 2)` | `EmailReadState.Unread` | Expression | Converts `2` to `EmailReadState.Unread`. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert EmailReadState to Text

The following table shows some of the ways that an `EmailReadState` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `EmailReadState.All.ToString()` | `"All"` | Expression | Converts `EmailReadState.All` to `"All"`. See [Enum.ToString][] |
|  | `EmailReadState.Read.ToString()` | `"Read"` | Expression | Converts `EmailReadState.Read` to `"Read"`. See [Enum.ToString][] |
|  | `EmailReadState.Unread.ToString()` | `"Unread"` | Expression | Converts `EmailReadState.Unread` to `"Unread"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(EmailReadState.All)` | `"All"` | Expression | Converts `EmailReadState.All` to `"All"`. See [Convert.ToString][] |
|  | `Convert.ToString(EmailReadState.Read)` | `"Read"` | Expression | Converts `EmailReadState.Read` to `"Read"`. See [Convert.ToString][] |
|  | `Convert.ToString(EmailReadState.Unread)` | `"Unread"` | Expression | Converts `EmailReadState.Unread` to `"Unread"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `EmailReadState.All` | `"All"` | N/A | Converts `EmailReadState.All` to `"All"`. See [Convert Object To Text][] |
|  | where `Object` property has a value of `EmailReadState.Read` | `"Read"` | N/A | Converts `EmailReadState.Read` to `"Read"`. See [Convert Object To Text][] |
|  | where `Object` property has a value of `EmailReadState.Unread` | `"Unread"` | N/A | Converts `EmailReadState.Unread` to `"Unread"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `EmailReadState.All` | `"0"` | N/A | Converts `EmailReadState.All` to `"0"`. See [Convert Object To Json][] |
|  | where `Object` property has a value of `EmailReadState.Read` | `"1"` | N/A | Converts `EmailReadState.Read` to `"1"`. See [Convert Object To Json][] |
|  | where `Object` property has a value of `EmailReadState.Unread` | `"2"` | N/A | Converts `EmailReadState.Unread` to `"2"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert EmailReadState to a Number

The following table shows some of the ways that an `EmailReadState` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][] | `(Int32)EmailReadState.All` | `0` | Expression | [Casts][Explicit Casting] `EmailReadState.All` to `0` |
|  | `(Int32)EmailReadState.Read` | `1` | Expression | [Casts][Explicit Casting] `EmailReadState.Read` to `1` |
|  | `(Int32)EmailReadState.Unread` | `2` | Expression | [Casts][Explicit Casting] `EmailReadState.Unread` to `2` |
| Use `Convert.ToInt32` | `Convert.ToInt32(EmailReadState.All)` | `0` | Expression | Converts `EmailReadState.All` to `0`. See [Convert.ToInt32][] |
|  | `Convert.ToInt32(EmailReadState.Read)` | `1` | Expression | Converts `EmailReadState.Read` to `1`. See [Convert.ToInt32][] |
|  | `Convert.ToInt32(EmailReadState.Unread)` | `2` | Expression | Converts `EmailReadState.Unread` to `2`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `EmailReadState`.
- The Literal Editor is available for [Input][] properties where the data type is `EmailReadState`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `EmailReadState`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]

### Related Blocks

- [Get Emails Using Microsoft 365][]

### Related Concepts

- [Working with Enums][]
- [Explicit Casting][]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}

[Get Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.GetEmails.GetEmailsUsingMicrosoft365.MainDoc" >}}
