---
title: "EmailFocus"
linkTitle: "EmailFocus"
description: "The Focused Inbox tab an email is shown in."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.EmailFocus)</p>

## Summary

The `EmailFocus` data type is the tab of the Focused Inbox that [Update Email Using Microsoft 365][] and [Update Emails Using Microsoft 365][] can place an email in.

`EmailFocus` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `EmailFocus` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.EmailFocus` |
| **Alias:**             | N/A |
| **Description:**       | The Focused Inbox tab an email is shown in. |
| **Size:**              | `4` bytes |
| **Default Value:**     | `EmailFocus.Focused` |
| **Can be used as:**    | `EmailFocus`, `Object`, `dynamic` |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)EmailFocus.Focused` or `(System.Int16)EmailFocus.Focused` or `(short)EmailFocus.Focused`)  |
|                        | `Int32` (e.g. `(Int32)EmailFocus.Focused` or `(System.Int32)EmailFocus.Focused` or `(int)EmailFocus.Focused`)  |
|                        | `Int64` (e.g. `(Int64)EmailFocus.Focused` or `(System.Int64)EmailFocus.Focused` or `(long)EmailFocus.Focused`)  |
|                        | `Single` (e.g. `(Single)EmailFocus.Focused` or `(System.Single)EmailFocus.Focused` or `(float)EmailFocus.Focused`)  |
|                        | `Double` (e.g. `(Double)EmailFocus.Focused` or `(System.Double)EmailFocus.Focused` or `(double)EmailFocus.Focused`)  |

## Values

### Focused

| | |
|-|-|
| **Name:**    | Focused |
| **Value:**   | [Int32][] with value `0` |
| **Notes:**   | The email is shown in the Focused tab. |

### Other

| | |
|-|-|
| **Name:**    | Other |
| **Value:**   | [Int32][] with value `1` |
| **Notes:**   | The email is shown in the Other tab. |

## Remarks

### Create an EmailFocus

The following table shows some of the ways that `EmailFocus` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare an `EmailFocus` literal | `Focused` | `EmailFocus.Focused` | Literal | The email is shown in the Focused tab. |
|  | `Other` | `EmailFocus.Other` | Literal | The email is shown in the Other tab. |
| Use an `EmailFocus` expression | `EmailFocus.Focused` | `EmailFocus.Focused` | Expression | The email is shown in the Focused tab. |
|  | `EmailFocus.Other` | `EmailFocus.Other` | Expression | The email is shown in the Other tab. |
| Use [Explicit Casting][] | `(EmailFocus)0` | `EmailFocus.Focused` | Expression | The email is shown in the Focused tab. |
|  | `(EmailFocus)1` | `EmailFocus.Other` | Expression | The email is shown in the Other tab. |
| Use `Enum.Parse` | `(EmailFocus)Enum.Parse(typeof(EmailFocus), "Focused")` | `EmailFocus.Focused` | Expression | Parses `"Focused"` and converts it to `EmailFocus.Focused`. See [Enum.Parse][] |
|  | `(EmailFocus)Enum.Parse(typeof(EmailFocus), "Other")` | `EmailFocus.Other` | Expression | Parses `"Other"` and converts it to `EmailFocus.Other`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(EmailFocus)Enum.ToObject(typeof(EmailFocus), 0)` | `EmailFocus.Focused` | Expression | Converts `0` to `EmailFocus.Focused`. See [Enum.ToObject][] |
|  | `(EmailFocus)Enum.ToObject(typeof(EmailFocus), 1)` | `EmailFocus.Other` | Expression | Converts `1` to `EmailFocus.Other`. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert EmailFocus to Text

The following table shows some of the ways that an `EmailFocus` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `EmailFocus.Focused.ToString()` | `"Focused"` | Expression | Converts `EmailFocus.Focused` to `"Focused"`. See [Enum.ToString][] |
|  | `EmailFocus.Other.ToString()` | `"Other"` | Expression | Converts `EmailFocus.Other` to `"Other"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(EmailFocus.Focused)` | `"Focused"` | Expression | Converts `EmailFocus.Focused` to `"Focused"`. See [Convert.ToString][] |
|  | `Convert.ToString(EmailFocus.Other)` | `"Other"` | Expression | Converts `EmailFocus.Other` to `"Other"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `EmailFocus.Focused` | `"Focused"` | N/A | Converts `EmailFocus.Focused` to `"Focused"`. See [Convert Object To Text][] |
|  | where `Object` property has a value of `EmailFocus.Other` | `"Other"` | N/A | Converts `EmailFocus.Other` to `"Other"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `EmailFocus.Focused` | `"0"` | N/A | Converts `EmailFocus.Focused` to `"0"`. See [Convert Object To Json][] |
|  | where `Object` property has a value of `EmailFocus.Other` | `"1"` | N/A | Converts `EmailFocus.Other` to `"1"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert EmailFocus to a Number

The following table shows some of the ways that an `EmailFocus` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][] | `(Int32)EmailFocus.Focused` | `0` | Expression | [Casts][Explicit Casting] `EmailFocus.Focused` to `0` |
|  | `(Int32)EmailFocus.Other` | `1` | Expression | [Casts][Explicit Casting] `EmailFocus.Other` to `1` |
| Use `Convert.ToInt32` | `Convert.ToInt32(EmailFocus.Focused)` | `0` | Expression | Converts `EmailFocus.Focused` to `0`. See [Convert.ToInt32][] |
|  | `Convert.ToInt32(EmailFocus.Other)` | `1` | Expression | Converts `EmailFocus.Other` to `1`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `EmailFocus`.
- The Literal Editor is available for [Input][] properties where the data type is `EmailFocus`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `EmailFocus`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]

### Related Blocks

- [Update Email Using Microsoft 365][]
- [Update Emails Using Microsoft 365][]

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

[Update Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailUsingMicrosoft365.MainDoc" >}}
[Update Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailsUsingMicrosoft365.MainDoc" >}}
