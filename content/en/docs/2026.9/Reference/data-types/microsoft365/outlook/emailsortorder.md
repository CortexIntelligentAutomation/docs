---
title: "EmailSortOrder"
linkTitle: "EmailSortOrder"
description: "The order in which emails are returned."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.EmailSortOrder)</p>

## Summary

The `EmailSortOrder` data type sets the order in which [Get Emails Using Microsoft 365][] returns emails, using the date and time each email was received.

`EmailSortOrder` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `EmailSortOrder` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.EmailSortOrder` |
| **Alias:**             | N/A |
| **Description:**       | The order in which emails are returned. |
| **Size:**              | `4` bytes |
| **Default Value:**     | `EmailSortOrder.NewestFirst` |
| **Can be used as:**    | `EmailSortOrder`, `Object`, `dynamic` |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)EmailSortOrder.NewestFirst` or `(System.Int16)EmailSortOrder.NewestFirst` or `(short)EmailSortOrder.NewestFirst`)  |
|                        | `Int32` (e.g. `(Int32)EmailSortOrder.NewestFirst` or `(System.Int32)EmailSortOrder.NewestFirst` or `(int)EmailSortOrder.NewestFirst`)  |
|                        | `Int64` (e.g. `(Int64)EmailSortOrder.NewestFirst` or `(System.Int64)EmailSortOrder.NewestFirst` or `(long)EmailSortOrder.NewestFirst`)  |
|                        | `Single` (e.g. `(Single)EmailSortOrder.NewestFirst` or `(System.Single)EmailSortOrder.NewestFirst` or `(float)EmailSortOrder.NewestFirst`)  |
|                        | `Double` (e.g. `(Double)EmailSortOrder.NewestFirst` or `(System.Double)EmailSortOrder.NewestFirst` or `(double)EmailSortOrder.NewestFirst`)  |

## Values

### NewestFirst

| | |
|-|-|
| **Name:**    | NewestFirst |
| **Value:**   | [Int32][] with value `0` |
| **Notes:**   | Returns the most recently received emails first. |

### OldestFirst

| | |
|-|-|
| **Name:**    | OldestFirst |
| **Value:**   | [Int32][] with value `1` |
| **Notes:**   | Returns the least recently received emails first. |

## Remarks

### Create an EmailSortOrder

The following table shows some of the ways that `EmailSortOrder` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare an `EmailSortOrder` literal | `NewestFirst` | `EmailSortOrder.NewestFirst` | Literal | Returns the most recently received emails first. |
|  | `OldestFirst` | `EmailSortOrder.OldestFirst` | Literal | Returns the least recently received emails first. |
| Use an `EmailSortOrder` expression | `EmailSortOrder.NewestFirst` | `EmailSortOrder.NewestFirst` | Expression | Returns the most recently received emails first. |
|  | `EmailSortOrder.OldestFirst` | `EmailSortOrder.OldestFirst` | Expression | Returns the least recently received emails first. |
| Use [Explicit Casting][] | `(EmailSortOrder)0` | `EmailSortOrder.NewestFirst` | Expression | Returns the most recently received emails first. |
|  | `(EmailSortOrder)1` | `EmailSortOrder.OldestFirst` | Expression | Returns the least recently received emails first. |
| Use `Enum.Parse` | `(EmailSortOrder)Enum.Parse(typeof(EmailSortOrder), "NewestFirst")` | `EmailSortOrder.NewestFirst` | Expression | Parses `"NewestFirst"` and converts it to `EmailSortOrder.NewestFirst`. See [Enum.Parse][] |
|  | `(EmailSortOrder)Enum.Parse(typeof(EmailSortOrder), "OldestFirst")` | `EmailSortOrder.OldestFirst` | Expression | Parses `"OldestFirst"` and converts it to `EmailSortOrder.OldestFirst`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(EmailSortOrder)Enum.ToObject(typeof(EmailSortOrder), 0)` | `EmailSortOrder.NewestFirst` | Expression | Converts `0` to `EmailSortOrder.NewestFirst`. See [Enum.ToObject][] |
|  | `(EmailSortOrder)Enum.ToObject(typeof(EmailSortOrder), 1)` | `EmailSortOrder.OldestFirst` | Expression | Converts `1` to `EmailSortOrder.OldestFirst`. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert EmailSortOrder to Text

The following table shows some of the ways that an `EmailSortOrder` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `EmailSortOrder.NewestFirst.ToString()` | `"NewestFirst"` | Expression | Converts `EmailSortOrder.NewestFirst` to `"NewestFirst"`. See [Enum.ToString][] |
|  | `EmailSortOrder.OldestFirst.ToString()` | `"OldestFirst"` | Expression | Converts `EmailSortOrder.OldestFirst` to `"OldestFirst"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(EmailSortOrder.NewestFirst)` | `"NewestFirst"` | Expression | Converts `EmailSortOrder.NewestFirst` to `"NewestFirst"`. See [Convert.ToString][] |
|  | `Convert.ToString(EmailSortOrder.OldestFirst)` | `"OldestFirst"` | Expression | Converts `EmailSortOrder.OldestFirst` to `"OldestFirst"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `EmailSortOrder.NewestFirst` | `"NewestFirst"` | N/A | Converts `EmailSortOrder.NewestFirst` to `"NewestFirst"`. See [Convert Object To Text][] |
|  | where `Object` property has a value of `EmailSortOrder.OldestFirst` | `"OldestFirst"` | N/A | Converts `EmailSortOrder.OldestFirst` to `"OldestFirst"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `EmailSortOrder.NewestFirst` | `"0"` | N/A | Converts `EmailSortOrder.NewestFirst` to `"0"`. See [Convert Object To Json][] |
|  | where `Object` property has a value of `EmailSortOrder.OldestFirst` | `"1"` | N/A | Converts `EmailSortOrder.OldestFirst` to `"1"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert EmailSortOrder to a Number

The following table shows some of the ways that an `EmailSortOrder` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][] | `(Int32)EmailSortOrder.NewestFirst` | `0` | Expression | [Casts][Explicit Casting] `EmailSortOrder.NewestFirst` to `0` |
|  | `(Int32)EmailSortOrder.OldestFirst` | `1` | Expression | [Casts][Explicit Casting] `EmailSortOrder.OldestFirst` to `1` |
| Use `Convert.ToInt32` | `Convert.ToInt32(EmailSortOrder.NewestFirst)` | `0` | Expression | Converts `EmailSortOrder.NewestFirst` to `0`. See [Convert.ToInt32][] |
|  | `Convert.ToInt32(EmailSortOrder.OldestFirst)` | `1` | Expression | Converts `EmailSortOrder.OldestFirst` to `1`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `EmailSortOrder`.
- The Literal Editor is available for [Input][] properties where the data type is `EmailSortOrder`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `EmailSortOrder`.

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
