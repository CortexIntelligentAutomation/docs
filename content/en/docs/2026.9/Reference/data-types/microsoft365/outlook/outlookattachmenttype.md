---
title: "OutlookAttachmentType"
linkTitle: "OutlookAttachmentType"
description: "The kind of an attachment on an Outlook email."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.OutlookAttachmentType)</p>

## Summary

The `OutlookAttachmentType` data type is the kind of an attachment on an Outlook email, as Microsoft 365 reports it.

`OutlookAttachmentType` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `OutlookAttachmentType` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.OutlookAttachmentType` |
| **Alias:**             | N/A |
| **Description:**       | The kind of an attachment on an Outlook email. |
| **Size:**              | `4` bytes |
| **Default Value:**     | `OutlookAttachmentType.File` |
| **Can be used as:**    | `OutlookAttachmentType`, `Object`, `dynamic` |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)OutlookAttachmentType.File` or `(System.Int16)OutlookAttachmentType.File` or `(short)OutlookAttachmentType.File`)  |
|                        | `Int32` (e.g. `(Int32)OutlookAttachmentType.File` or `(System.Int32)OutlookAttachmentType.File` or `(int)OutlookAttachmentType.File`)  |
|                        | `Int64` (e.g. `(Int64)OutlookAttachmentType.File` or `(System.Int64)OutlookAttachmentType.File` or `(long)OutlookAttachmentType.File`)  |
|                        | `Single` (e.g. `(Single)OutlookAttachmentType.File` or `(System.Single)OutlookAttachmentType.File` or `(float)OutlookAttachmentType.File`)  |
|                        | `Double` (e.g. `(Double)OutlookAttachmentType.File` or `(System.Double)OutlookAttachmentType.File` or `(double)OutlookAttachmentType.File`)  |

## Values

### File

| | |
|-|-|
| **Name:**    | File |
| **Value:**   | [Int32][] with value `0` |
| **Notes:**   | A file whose content is stored in the email, such as a PDF or an image. This kind can be downloaded. |

### Item

| | |
|-|-|
| **Name:**    | Item |
| **Value:**   | [Int32][] with value `1` |
| **Notes:**   | An Outlook item stored in the email, such as an attached email, event or contact. This kind can be downloaded. |

### Reference

| | |
|-|-|
| **Name:**    | Reference |
| **Value:**   | [Int32][] with value `2` |
| **Notes:**   | A link to a file held somewhere else, such as OneDrive or SharePoint. The content is not stored in the email, so it cannot be downloaded. |

### Unknown

| | |
|-|-|
| **Name:**    | Unknown |
| **Value:**   | [Int32][] with value `3` |
| **Notes:**   | A kind of attachment that Microsoft 365 reported and that is not a file, an item or a reference. This kind cannot be downloaded. |

## Remarks

### Create an OutlookAttachmentType

The following table shows some of the ways that `OutlookAttachmentType` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare an `OutlookAttachmentType` literal | `File` | `OutlookAttachmentType.File` | Literal | A file whose content is stored in the email, such as a PDF or an image. This kind can be downloaded. |
|  | `Item` | `OutlookAttachmentType.Item` | Literal | An Outlook item stored in the email, such as an attached email, event or contact. This kind can be downloaded. |
|  | `Reference` | `OutlookAttachmentType.Reference` | Literal | A link to a file held somewhere else, such as OneDrive or SharePoint. The content is not stored in the email, so it cannot be downloaded. |
|  | `Unknown` | `OutlookAttachmentType.Unknown` | Literal | A kind of attachment that Microsoft 365 reported and that is not a file, an item or a reference. This kind cannot be downloaded. |
| Use an `OutlookAttachmentType` expression | `OutlookAttachmentType.File` | `OutlookAttachmentType.File` | Expression | A file whose content is stored in the email, such as a PDF or an image. This kind can be downloaded. |
|  | `OutlookAttachmentType.Item` | `OutlookAttachmentType.Item` | Expression | An Outlook item stored in the email, such as an attached email, event or contact. This kind can be downloaded. |
|  | `OutlookAttachmentType.Reference` | `OutlookAttachmentType.Reference` | Expression | A link to a file held somewhere else, such as OneDrive or SharePoint. The content is not stored in the email, so it cannot be downloaded. |
|  | `OutlookAttachmentType.Unknown` | `OutlookAttachmentType.Unknown` | Expression | A kind of attachment that Microsoft 365 reported and that is not a file, an item or a reference. This kind cannot be downloaded. |
| Use [Explicit Casting][] | `(OutlookAttachmentType)0` | `OutlookAttachmentType.File` | Expression | A file whose content is stored in the email, such as a PDF or an image. This kind can be downloaded. |
|  | `(OutlookAttachmentType)1` | `OutlookAttachmentType.Item` | Expression | An Outlook item stored in the email, such as an attached email, event or contact. This kind can be downloaded. |
|  | `(OutlookAttachmentType)2` | `OutlookAttachmentType.Reference` | Expression | A link to a file held somewhere else, such as OneDrive or SharePoint. The content is not stored in the email, so it cannot be downloaded. |
|  | `(OutlookAttachmentType)3` | `OutlookAttachmentType.Unknown` | Expression | A kind of attachment that Microsoft 365 reported and that is not a file, an item or a reference. This kind cannot be downloaded. |
| Use `Enum.Parse` | `(OutlookAttachmentType)Enum.Parse(typeof(OutlookAttachmentType), "File")` | `OutlookAttachmentType.File` | Expression | Parses `"File"` and converts it to `OutlookAttachmentType.File`. See [Enum.Parse][] |
|  | `(OutlookAttachmentType)Enum.Parse(typeof(OutlookAttachmentType), "Item")` | `OutlookAttachmentType.Item` | Expression | Parses `"Item"` and converts it to `OutlookAttachmentType.Item`. See [Enum.Parse][] |
|  | `(OutlookAttachmentType)Enum.Parse(typeof(OutlookAttachmentType), "Reference")` | `OutlookAttachmentType.Reference` | Expression | Parses `"Reference"` and converts it to `OutlookAttachmentType.Reference`. See [Enum.Parse][] |
|  | `(OutlookAttachmentType)Enum.Parse(typeof(OutlookAttachmentType), "Unknown")` | `OutlookAttachmentType.Unknown` | Expression | Parses `"Unknown"` and converts it to `OutlookAttachmentType.Unknown`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(OutlookAttachmentType)Enum.ToObject(typeof(OutlookAttachmentType), 0)` | `OutlookAttachmentType.File` | Expression | Converts `0` to `OutlookAttachmentType.File`. See [Enum.ToObject][] |
|  | `(OutlookAttachmentType)Enum.ToObject(typeof(OutlookAttachmentType), 1)` | `OutlookAttachmentType.Item` | Expression | Converts `1` to `OutlookAttachmentType.Item`. See [Enum.ToObject][] |
|  | `(OutlookAttachmentType)Enum.ToObject(typeof(OutlookAttachmentType), 2)` | `OutlookAttachmentType.Reference` | Expression | Converts `2` to `OutlookAttachmentType.Reference`. See [Enum.ToObject][] |
|  | `(OutlookAttachmentType)Enum.ToObject(typeof(OutlookAttachmentType), 3)` | `OutlookAttachmentType.Unknown` | Expression | Converts `3` to `OutlookAttachmentType.Unknown`. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert OutlookAttachmentType to Text

The following table shows some of the ways that an `OutlookAttachmentType` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `OutlookAttachmentType.File.ToString()` | `"File"` | Expression | Converts `OutlookAttachmentType.File` to `"File"`. See [Enum.ToString][] |
|  | `OutlookAttachmentType.Item.ToString()` | `"Item"` | Expression | Converts `OutlookAttachmentType.Item` to `"Item"`. See [Enum.ToString][] |
|  | `OutlookAttachmentType.Reference.ToString()` | `"Reference"` | Expression | Converts `OutlookAttachmentType.Reference` to `"Reference"`. See [Enum.ToString][] |
|  | `OutlookAttachmentType.Unknown.ToString()` | `"Unknown"` | Expression | Converts `OutlookAttachmentType.Unknown` to `"Unknown"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(OutlookAttachmentType.File)` | `"File"` | Expression | Converts `OutlookAttachmentType.File` to `"File"`. See [Convert.ToString][] |
|  | `Convert.ToString(OutlookAttachmentType.Item)` | `"Item"` | Expression | Converts `OutlookAttachmentType.Item` to `"Item"`. See [Convert.ToString][] |
|  | `Convert.ToString(OutlookAttachmentType.Reference)` | `"Reference"` | Expression | Converts `OutlookAttachmentType.Reference` to `"Reference"`. See [Convert.ToString][] |
|  | `Convert.ToString(OutlookAttachmentType.Unknown)` | `"Unknown"` | Expression | Converts `OutlookAttachmentType.Unknown` to `"Unknown"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `OutlookAttachmentType.File` | `"File"` | N/A | Converts `OutlookAttachmentType.File` to `"File"`. See [Convert Object To Text][] |
|  | where `Object` property has a value of `OutlookAttachmentType.Item` | `"Item"` | N/A | Converts `OutlookAttachmentType.Item` to `"Item"`. See [Convert Object To Text][] |
|  | where `Object` property has a value of `OutlookAttachmentType.Reference` | `"Reference"` | N/A | Converts `OutlookAttachmentType.Reference` to `"Reference"`. See [Convert Object To Text][] |
|  | where `Object` property has a value of `OutlookAttachmentType.Unknown` | `"Unknown"` | N/A | Converts `OutlookAttachmentType.Unknown` to `"Unknown"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `OutlookAttachmentType.File` | `"0"` | N/A | Converts `OutlookAttachmentType.File` to `"0"`. See [Convert Object To Json][] |
|  | where `Object` property has a value of `OutlookAttachmentType.Item` | `"1"` | N/A | Converts `OutlookAttachmentType.Item` to `"1"`. See [Convert Object To Json][] |
|  | where `Object` property has a value of `OutlookAttachmentType.Reference` | `"2"` | N/A | Converts `OutlookAttachmentType.Reference` to `"2"`. See [Convert Object To Json][] |
|  | where `Object` property has a value of `OutlookAttachmentType.Unknown` | `"3"` | N/A | Converts `OutlookAttachmentType.Unknown` to `"3"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert OutlookAttachmentType to a Number

The following table shows some of the ways that an `OutlookAttachmentType` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][] | `(Int32)OutlookAttachmentType.File` | `0` | Expression | [Casts][Explicit Casting] `OutlookAttachmentType.File` to `0` |
|  | `(Int32)OutlookAttachmentType.Item` | `1` | Expression | [Casts][Explicit Casting] `OutlookAttachmentType.Item` to `1` |
|  | `(Int32)OutlookAttachmentType.Reference` | `2` | Expression | [Casts][Explicit Casting] `OutlookAttachmentType.Reference` to `2` |
|  | `(Int32)OutlookAttachmentType.Unknown` | `3` | Expression | [Casts][Explicit Casting] `OutlookAttachmentType.Unknown` to `3` |
| Use `Convert.ToInt32` | `Convert.ToInt32(OutlookAttachmentType.File)` | `0` | Expression | Converts `OutlookAttachmentType.File` to `0`. See [Convert.ToInt32][] |
|  | `Convert.ToInt32(OutlookAttachmentType.Item)` | `1` | Expression | Converts `OutlookAttachmentType.Item` to `1`. See [Convert.ToInt32][] |
|  | `Convert.ToInt32(OutlookAttachmentType.Reference)` | `2` | Expression | Converts `OutlookAttachmentType.Reference` to `2`. See [Convert.ToInt32][] |
|  | `Convert.ToInt32(OutlookAttachmentType.Unknown)` | `3` | Expression | Converts `OutlookAttachmentType.Unknown` to `3`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `OutlookAttachmentType`.
- The Literal Editor is available for [Input][] properties where the data type is `OutlookAttachmentType`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `OutlookAttachmentType`.

### Known Limitations

None

## See Also

### Related Data Types

- [OutlookAttachment][]
- [Int32][]
- [String][]

### Related Blocks

- [Get Emails Using Microsoft 365][]
- [Download Attachment Using Microsoft 365][]
- [Download Attachments Using Microsoft 365][]

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

[OutlookAttachment]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachment.MainDoc" >}}
[Get Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.GetEmails.GetEmailsUsingMicrosoft365.MainDoc" >}}
[Download Attachment Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentUsingMicrosoft365.MainDoc" >}}
[Download Attachments Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentsUsingMicrosoft365.MainDoc" >}}
