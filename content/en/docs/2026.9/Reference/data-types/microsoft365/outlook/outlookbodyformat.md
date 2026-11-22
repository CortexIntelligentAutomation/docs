---
title: "OutlookBodyFormat"
linkTitle: "OutlookBodyFormat"
description: "The format in which an email body is requested."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.OutlookBodyFormat)</p>

## Summary

The `OutlookBodyFormat` data type sets the format in which [Get Emails Using Microsoft 365][] requests each email body.

`OutlookBodyFormat` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `OutlookBodyFormat` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.OutlookBodyFormat` |
| **Alias:**             | N/A |
| **Description:**       | The format in which an email body is requested. |
| **Size:**              | `4` bytes |
| **Default Value:**     | `OutlookBodyFormat.AsStored` |
| **Can be used as:**    | `OutlookBodyFormat`, `Object`, `dynamic` |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)OutlookBodyFormat.AsStored` or `(System.Int16)OutlookBodyFormat.AsStored` or `(short)OutlookBodyFormat.AsStored`)  |
|                        | `Int32` (e.g. `(Int32)OutlookBodyFormat.AsStored` or `(System.Int32)OutlookBodyFormat.AsStored` or `(int)OutlookBodyFormat.AsStored`)  |
|                        | `Int64` (e.g. `(Int64)OutlookBodyFormat.AsStored` or `(System.Int64)OutlookBodyFormat.AsStored` or `(long)OutlookBodyFormat.AsStored`)  |
|                        | `Single` (e.g. `(Single)OutlookBodyFormat.AsStored` or `(System.Single)OutlookBodyFormat.AsStored` or `(float)OutlookBodyFormat.AsStored`)  |
|                        | `Double` (e.g. `(Double)OutlookBodyFormat.AsStored` or `(System.Double)OutlookBodyFormat.AsStored` or `(double)OutlookBodyFormat.AsStored`)  |

## Values

### AsStored

| | |
|-|-|
| **Name:**    | AsStored |
| **Value:**   | [Int32][] with value `0` |
| **Notes:**   | Returns the body in the format it is stored in, without converting it. |

### Text

| | |
|-|-|
| **Name:**    | Text |
| **Value:**   | [Int32][] with value `1` |
| **Notes:**   | Returns the body as plain text, converting it from HTML when the stored body is HTML. |

### Html

| | |
|-|-|
| **Name:**    | Html |
| **Value:**   | [Int32][] with value `2` |
| **Notes:**   | Returns the body as HTML, converting it from plain text when the stored body is plain text. |

## Remarks

### Create an OutlookBodyFormat

The following table shows some of the ways that `OutlookBodyFormat` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare an `OutlookBodyFormat` literal | `AsStored` | `OutlookBodyFormat.AsStored` | Literal | Returns the body in the format it is stored in, without converting it. |
|  | `Text` | `OutlookBodyFormat.Text` | Literal | Returns the body as plain text, converting it from HTML when the stored body is HTML. |
|  | `Html` | `OutlookBodyFormat.Html` | Literal | Returns the body as HTML, converting it from plain text when the stored body is plain text. |
| Use an `OutlookBodyFormat` expression | `OutlookBodyFormat.AsStored` | `OutlookBodyFormat.AsStored` | Expression | Returns the body in the format it is stored in, without converting it. |
|  | `OutlookBodyFormat.Text` | `OutlookBodyFormat.Text` | Expression | Returns the body as plain text, converting it from HTML when the stored body is HTML. |
|  | `OutlookBodyFormat.Html` | `OutlookBodyFormat.Html` | Expression | Returns the body as HTML, converting it from plain text when the stored body is plain text. |
| Use [Explicit Casting][] | `(OutlookBodyFormat)0` | `OutlookBodyFormat.AsStored` | Expression | Returns the body in the format it is stored in, without converting it. |
|  | `(OutlookBodyFormat)1` | `OutlookBodyFormat.Text` | Expression | Returns the body as plain text, converting it from HTML when the stored body is HTML. |
|  | `(OutlookBodyFormat)2` | `OutlookBodyFormat.Html` | Expression | Returns the body as HTML, converting it from plain text when the stored body is plain text. |
| Use `Enum.Parse` | `(OutlookBodyFormat)Enum.Parse(typeof(OutlookBodyFormat), "AsStored")` | `OutlookBodyFormat.AsStored` | Expression | Parses `"AsStored"` and converts it to `OutlookBodyFormat.AsStored`. See [Enum.Parse][] |
|  | `(OutlookBodyFormat)Enum.Parse(typeof(OutlookBodyFormat), "Text")` | `OutlookBodyFormat.Text` | Expression | Parses `"Text"` and converts it to `OutlookBodyFormat.Text`. See [Enum.Parse][] |
|  | `(OutlookBodyFormat)Enum.Parse(typeof(OutlookBodyFormat), "Html")` | `OutlookBodyFormat.Html` | Expression | Parses `"Html"` and converts it to `OutlookBodyFormat.Html`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(OutlookBodyFormat)Enum.ToObject(typeof(OutlookBodyFormat), 0)` | `OutlookBodyFormat.AsStored` | Expression | Converts `0` to `OutlookBodyFormat.AsStored`. See [Enum.ToObject][] |
|  | `(OutlookBodyFormat)Enum.ToObject(typeof(OutlookBodyFormat), 1)` | `OutlookBodyFormat.Text` | Expression | Converts `1` to `OutlookBodyFormat.Text`. See [Enum.ToObject][] |
|  | `(OutlookBodyFormat)Enum.ToObject(typeof(OutlookBodyFormat), 2)` | `OutlookBodyFormat.Html` | Expression | Converts `2` to `OutlookBodyFormat.Html`. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert OutlookBodyFormat to Text

The following table shows some of the ways that an `OutlookBodyFormat` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `OutlookBodyFormat.AsStored.ToString()` | `"AsStored"` | Expression | Converts `OutlookBodyFormat.AsStored` to `"AsStored"`. See [Enum.ToString][] |
|  | `OutlookBodyFormat.Text.ToString()` | `"Text"` | Expression | Converts `OutlookBodyFormat.Text` to `"Text"`. See [Enum.ToString][] |
|  | `OutlookBodyFormat.Html.ToString()` | `"Html"` | Expression | Converts `OutlookBodyFormat.Html` to `"Html"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(OutlookBodyFormat.AsStored)` | `"AsStored"` | Expression | Converts `OutlookBodyFormat.AsStored` to `"AsStored"`. See [Convert.ToString][] |
|  | `Convert.ToString(OutlookBodyFormat.Text)` | `"Text"` | Expression | Converts `OutlookBodyFormat.Text` to `"Text"`. See [Convert.ToString][] |
|  | `Convert.ToString(OutlookBodyFormat.Html)` | `"Html"` | Expression | Converts `OutlookBodyFormat.Html` to `"Html"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `OutlookBodyFormat.AsStored` | `"AsStored"` | N/A | Converts `OutlookBodyFormat.AsStored` to `"AsStored"`. See [Convert Object To Text][] |
|  | where `Object` property has a value of `OutlookBodyFormat.Text` | `"Text"` | N/A | Converts `OutlookBodyFormat.Text` to `"Text"`. See [Convert Object To Text][] |
|  | where `Object` property has a value of `OutlookBodyFormat.Html` | `"Html"` | N/A | Converts `OutlookBodyFormat.Html` to `"Html"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `OutlookBodyFormat.AsStored` | `"0"` | N/A | Converts `OutlookBodyFormat.AsStored` to `"0"`. See [Convert Object To Json][] |
|  | where `Object` property has a value of `OutlookBodyFormat.Text` | `"1"` | N/A | Converts `OutlookBodyFormat.Text` to `"1"`. See [Convert Object To Json][] |
|  | where `Object` property has a value of `OutlookBodyFormat.Html` | `"2"` | N/A | Converts `OutlookBodyFormat.Html` to `"2"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert OutlookBodyFormat to a Number

The following table shows some of the ways that an `OutlookBodyFormat` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][] | `(Int32)OutlookBodyFormat.AsStored` | `0` | Expression | [Casts][Explicit Casting] `OutlookBodyFormat.AsStored` to `0` |
|  | `(Int32)OutlookBodyFormat.Text` | `1` | Expression | [Casts][Explicit Casting] `OutlookBodyFormat.Text` to `1` |
|  | `(Int32)OutlookBodyFormat.Html` | `2` | Expression | [Casts][Explicit Casting] `OutlookBodyFormat.Html` to `2` |
| Use `Convert.ToInt32` | `Convert.ToInt32(OutlookBodyFormat.AsStored)` | `0` | Expression | Converts `OutlookBodyFormat.AsStored` to `0`. See [Convert.ToInt32][] |
|  | `Convert.ToInt32(OutlookBodyFormat.Text)` | `1` | Expression | Converts `OutlookBodyFormat.Text` to `1`. See [Convert.ToInt32][] |
|  | `Convert.ToInt32(OutlookBodyFormat.Html)` | `2` | Expression | Converts `OutlookBodyFormat.Html` to `2`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `OutlookBodyFormat`.
- The Literal Editor is available for [Input][] properties where the data type is `OutlookBodyFormat`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `OutlookBodyFormat`.

### Known Limitations

None

## See Also

### Related Data Types

- [EmailMessageBodyFormat][]
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
[EmailMessageBodyFormat]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.MainDoc" >}}
