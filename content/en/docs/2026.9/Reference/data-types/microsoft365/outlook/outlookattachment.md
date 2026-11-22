---
title: "OutlookAttachment"
linkTitle: "OutlookAttachment"
description: "Metadata describing a single attachment on an Outlook email."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.OutlookAttachment)</p>

## Summary

The `OutlookAttachment` data type is metadata describing a single attachment on an Outlook email. It does not contain the attachment's content. The content is saved by [Download Attachment Using Microsoft 365][] and [Download Attachments Using Microsoft 365][], using [Id][Id Property].

[Get Emails Using Microsoft 365][] populates attachment metadata only when [Include Attachment Details][] is `true`. Otherwise the email's attachment list is empty.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `OutlookAttachment` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.OutlookAttachment` |
| **Alias:**             | N/A |
| **Description:**       | Metadata describing a single attachment on an Outlook email. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `OutlookAttachment`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Properties

### Id

The identifier of the attachment, used to download it.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

### Name

The file name of the attachment.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

### Content Type

The MIME content type of the attachment. For examples, see [Content types][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

### Size

The size of the attachment in bytes.

| | |
|--------------------|---------------------------|
| Data Type | [Int64][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `0` |

### Is Inline

`true` when the attachment is inline, for example an image embedded in the body. Otherwise `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `false` |

### Attachment Type

The kind of the attachment: a file, an Outlook item such as an attached email, or a link to a file held elsewhere.

| | |
|--------------------|---------------------------|
| Data Type | [OutlookAttachmentType][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `OutlookAttachmentType.File` |

### Is Downloadable

`true` when the attachment has content that can be downloaded. A [File][] or [Item][] attachment is downloadable. A [Reference][] attachment is only a link, and is not downloadable.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `false` |

## Remarks

### Create an OutlookAttachment

An `OutlookAttachment` is normally returned by [Get Emails Using Microsoft 365][]. It can also be created with its constructor:

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `OutlookAttachment` constructor | `new OutlookAttachment(id: "attachment-id", name: "invoice.pdf", contentType: "application/pdf", size: 1200, isInline: false, attachmentType: OutlookAttachmentType.File, isDownloadable: true)` | `{"Id": "attachment-id", "Name": "invoice.pdf", "ContentType": "application/pdf", "Size": 1200, "IsInline": false, "AttachmentType": 0, "IsDownloadable": true}` | Expression | |

### Convert OutlookAttachment to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `new OutlookAttachment(id: "attachment-id", name: "invoice.pdf", contentType: "application/pdf", size: 1200, isInline: false, attachmentType: OutlookAttachmentType.File, isDownloadable: true)` | `"{\r\n  \"Id\": \"attachment-id\",\r\n  \"Name\": \"invoice.pdf\",\r\n  \"ContentType\": \"application/pdf\",\r\n  \"Size\": 1200,\r\n  \"IsInline\": false,\r\n  \"AttachmentType\": 0,\r\n  \"IsDownloadable\": true\r\n}"` | N/A | See [Convert Object To Json][] |

### Content types

[Content Type][Content Type Property] is the MIME type Microsoft 365 reports for the attachment. A file attachment has the type of that file. A [Reference][] attachment has the type of the file it links to. An [Item][] attachment has no content type.

| Content type | Attachment |
|-|-|
| `application/pdf` | A PDF file, such as `invoice.pdf`. |
| `image/png` | A PNG image. |
| `image/jpeg` | A JPEG image. |
| `text/plain` | A plain-text file. |
| `application/vnd.openxmlformats-officedocument.wordprocessingml.document` | A Word document (`.docx`). |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `OutlookAttachment`.
- The Literal Editor is available for [Input][] properties where the data type is `OutlookAttachment`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `OutlookAttachment`.

### Known Limitations

None

## See Also

### Related Data Types

- [OutlookAttachmentType][]
- [OutlookEmail][]

### Related Blocks

- [Get Emails Using Microsoft 365][]
- [Download Attachment Using Microsoft 365][]
- [Download Attachments Using Microsoft 365][]

### Related Concepts

- [What is Email?][]

### External Documentation

None

[Id Property]: {{< ref "#id" >}}
[Content Type Property]: {{< ref "#content-type" >}}
[Content types]: {{< ref "#content-types" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int64]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[OutlookAttachmentType]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachmentType.MainDoc" >}}
[File]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachmentType.File" >}}
[Item]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachmentType.Item" >}}
[Reference]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachmentType.Reference" >}}
[OutlookEmail]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Include Attachment Details]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.GetEmails.GetEmailsUsingMicrosoft365.IncludeAttachmentDetails" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Get Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.GetEmails.GetEmailsUsingMicrosoft365.MainDoc" >}}
[What is Email?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.WhatIsEmail.MainDoc" >}}
[Download Attachment Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentUsingMicrosoft365.MainDoc" >}}
[Download Attachments Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentsUsingMicrosoft365.MainDoc" >}}
