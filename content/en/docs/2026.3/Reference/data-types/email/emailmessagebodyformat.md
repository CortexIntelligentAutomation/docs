---
title: "EmailMessageBodyFormat"
linkTitle: "EmailMessageBodyFormat"
description: "Used to represent the format of an email message body."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Email.EmailMessageBodyFormat)</p>

## Summary

The `EmailMessageBodyFormat` data type is used to represent the format of an email message body.

`EmailMessageBodyFormat` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Email                                                  |
| **Name:**              | `EmailMessageBodyFormat`                               |
| **Full Name:**         | `Cortex.DataTypes.Email.EmailMessageBodyFormat`        |
| **Alias:**             | N/A                                                    |
| **Description:**       | Format of an email message body.                       |
| **Size:**              | `4` bytes                                              |
| **Default Value:**     | `EmailMessageBodyFormat.Text`                          |
| **Can be used as:**    | `EmailMessageBodyFormat`, `Object`, `dynamic`          |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)EmailMessageBodyFormat.Text` or `(System.Int16)EmailMessageBodyFormat.Text` or `(short)EmailMessageBodyFormat.Text`)  |
|                        | `Int32` (e.g. `(Int32)EmailMessageBodyFormat.Text` or `(System.Int32)EmailMessageBodyFormat.Text` or `(int)EmailMessageBodyFormat.Text`)  |
|                        | `Int64` (e.g. `(Int64)EmailMessageBodyFormat.Text` or `(System.Int64)EmailMessageBodyFormat.Text` or `(long)EmailMessageBodyFormat.Text`)  |
|                        | `Single` (e.g. `(Single)EmailMessageBodyFormat.Text` or `(System.Single)EmailMessageBodyFormat.Text` or `(float)EmailMessageBodyFormat.Text`)  |
|                        | `Double` (e.g. `(Double)EmailMessageBodyFormat.Text` or `(System.Double)EmailMessageBodyFormat.Text` or `(double)EmailMessageBodyFormat.Text`)  |

## Values

### Text

| | |
|-|-|
| **Name:**    | Text                                          |
| **Value:**   | [Int32][] with value `0`                      |
| **Notes:**   | Used when an email message body format is plain text. |

### Html

| | |
|-|-|
| **Name:**    | Html                                          |
| **Value:**   | [Int32][] with value `1`                      |
| **Notes:**   | Used when an email message body format is HTML.       |

## Remarks

### Create an EmailMessageBodyFormat

The following table shows some of the ways that `EmailMessageBodyFormat` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare an `EmailMessageBodyFormat` literal | `Text` | `EmailMessageBodyFormat.Text`| Literal | Indicates Text |
| | `Html` | `EmailMessageBodyFormat.Html`| Literal | Indicates Html |
| Use an `EmailMessageBodyFormat` expression | `EmailMessageBodyFormat.Text` | `EmailMessageBodyFormat.Text`| Expression | Indicates Text |
| | `EmailMessageBodyFormat.Html` | `EmailMessageBodyFormat.Html`| Expression | Indicates Html |
| Use [Explicit Casting][] | `(EmailMessageBodyFormat)0`  | `EmailMessageBodyFormat.Text` | Expression | Indicates Text |
| | `(EmailMessageBodyFormat)1`  | `EmailMessageBodyFormat.Html` | Expression | Indicates Html |
| Use `Enum.Parse` | `(EmailMessageBodyFormat)Enum.Parse(typeof(EmailMessageBodyFormat), "Text")` | `EmailMessageBodyFormat.Text` | Expression | Parses `"Text"` and converts it to `EmailMessageBodyFormat.Text`. See [Enum.Parse][] |
| | `(EmailMessageBodyFormat)Enum.Parse(typeof(EmailMessageBodyFormat), "Html")` | `EmailMessageBodyFormat.Html` | Expression | Parses `"Html"` and converts it to `EmailMessageBodyFormat.Html`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(EmailMessageBodyFormat)Enum.ToObject(typeof(EmailMessageBodyFormat), 0)` | `EmailMessageBodyFormat.Text` | Expression | Converts `0` to `EmailMessageBodyFormat.Text` value. See [Enum.ToObject][] |
| | `(EmailMessageBodyFormat)Enum.ToObject(typeof(EmailMessageBodyFormat), 1)` | `EmailMessageBodyFormat.Html` | Expression | Converts `1` to `EmailMessageBodyFormat.Html` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert EmailMessageBodyFormat to Text

The following table shows some of the ways that a `EmailMessageBodyFormat` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `EmailMessageBodyFormat.Text.ToString()` | `"Text"` | Expression | Converts `EmailMessageBodyFormat.Text` to `"Text"`. See [Enum.ToString][] |
| | `EmailMessageBodyFormat.Html.ToString()` | `"Html"` | Expression | Converts `EmailMessageBodyFormat.Html` to `"Html"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(EmailMessageBodyFormat.Text)` | `"Text"` | Expression | Converts `EmailMessageBodyFormat.Text` to `"Text"`. See [Convert.ToString][] |
| | `Convert.ToString(EmailMessageBodyFormat.Html)` | `"Html"` | Expression | Converts `EmailMessageBodyFormat.Html` to `"Html"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `EmailMessageBodyFormat.Text` | `"Text"` | N/A  | Converts `EmailMessageBodyFormat.Text` to `"Text"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `EmailMessageBodyFormat.Html` | `"Html"` | N/A  | Converts `EmailMessageBodyFormat.Html` to `"Html"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `EmailMessageBodyFormat.Text` | `"0"` | N/A  | Converts `EmailMessageBodyFormat.Text` to `"0"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `EmailMessageBodyFormat.Html` | `"1"` | N/A  | Converts `EmailMessageBodyFormat.Html` to `"1"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert EmailMessageBodyFormat to a Number

The following table shows some of the ways that a `EmailMessageBodyFormat` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)EmailMessageBodyFormat.Text`   | `0` | Expression | [Casts][Explicit Casting] `EmailMessageBodyFormat.Text` to `0` |
|                                       | `(Int32)EmailMessageBodyFormat.Html`   | `1` | Expression | [Casts][Explicit Casting] `EmailMessageBodyFormat.Html` to `1` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(EmailMessageBodyFormat.Text)`   | `0` | Expression | Converts `EmailMessageBodyFormat.Text` to `0`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(EmailMessageBodyFormat.Html)`   | `1` | Expression | Converts `EmailMessageBodyFormat.Html` to `1`.  See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `EmailMessageBodyFormat`.
- The Literal Editor is available for [Input][] properties where the data type is `EmailMessageBodyFormat`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `EmailMessageBodyFormat`.
  
### Known Limitations

None

## See Also

### Related Data Types

- [EmailMessage][]
- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Email][]
- [Working with Enums][]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[EmailMessage]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.MainDoc" >}}
[Working with Email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}

[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
