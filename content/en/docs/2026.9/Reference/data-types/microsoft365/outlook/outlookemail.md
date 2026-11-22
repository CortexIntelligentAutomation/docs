---
title: "OutlookEmail"
linkTitle: "OutlookEmail"
description: "An Outlook email returned by Get Emails Using Microsoft 365."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.OutlookEmail)</p>

## Summary

The `OutlookEmail` data type is an Outlook email returned by [Get Emails Using Microsoft 365][]. [Id][Id Property] is the immutable identifier the other Outlook blocks use to [delete][Delete Email Using Microsoft 365], [move][Move Email Using Microsoft 365], [update][Update Email Using Microsoft 365] or [download][Download Attachment Using Microsoft 365] from that email. The identifier stays the same when the email is moved between folders.

[Get Emails Using Microsoft 365][] returns emails in an [IDictionary][]&lt;[String][], [OutlookEmail][]&gt; keyed by this identifier.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `OutlookEmail` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.OutlookEmail` |
| **Alias:**             | N/A |
| **Description:**       | An Outlook email returned by Get Emails Using Microsoft 365. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `OutlookEmail`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Properties

### Id

The immutable identifier of the email. See [Immutable identifier][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

### From

The [EmailAddress][] the email was sent from.

| | |
|--------------------|---------------------------|
| Data Type | [EmailAddress][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `null` |

### To

The [EmailAddress][] values the email was sent to.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[EmailAddress][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | an empty list when the constructor is given `null` |

### Cc

The [EmailAddress][] values on the email's Cc.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[EmailAddress][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | an empty list when the constructor is given `null` |

### Bcc

The [EmailAddress][] values on the email's Bcc. Microsoft 365 only records the Bcc in the mailbox the email was sent from.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[EmailAddress][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | an empty list when the constructor is given `null` |

### Subject

The subject of the email.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

### Body Format

The format the body is written in. Populated only when the body was requested. `null` when the body was not requested, or when Microsoft 365 did not report a text or HTML body.

| | |
|--------------------|---------------------------|
| Data Type | [Nullable][]&lt;[EmailMessageBodyFormat][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

### Body

The body of the email. Populated only when the body was requested.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

### Importance

The importance of the email, mapped from Microsoft 365 as [NonUrgent][] (low), [Normal][] or [Urgent][] (high).

| | |
|--------------------|---------------------------|
| Data Type | [Nullable][]&lt;[EmailMessagePriority][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

### Received Date Time

The date and time the email was received.

| | |
|--------------------|---------------------------|
| Data Type | [Nullable][]&lt;[DateTimeOffset][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

### Is Read

`true` when the email has been read. Otherwise `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `false` |

### Has Attachments

`true` when the email has one or more attachments. Otherwise `false`. This is set even when attachment metadata was not requested.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `false` |

### Attachments

Metadata about the email's attachments. Populated when attachment details were requested. Otherwise an empty list. The list does not contain the attachment content.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[OutlookAttachment][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | an empty list when the constructor is given `null` |

## Remarks

### Immutable identifier

[Id][Id Property] is immutable. Microsoft 365 assigns it to the email, and it stays the same when the email is moved between folders or updated. After a move, the same [Id][Id Property] still addresses the email in its new folder.

[Get Emails Using Microsoft 365][] returns emails in a dictionary keyed by this identifier, and the key is the same value as [Id][Id Property]. The [delete][Delete Email Using Microsoft 365], [move][Move Email Using Microsoft 365], [update][Update Email Using Microsoft 365] and [download][Download Attachment Using Microsoft 365] blocks take this identifier to act on the email.

Third-party software that requires an Outlook id may not be compatible with these blocks. The id that other software may uses and this immutable id are different values for the same email, so one cannot be passed where the other is required. For further information, see [Obtain immutable identifiers for Outlook resources][].

### Create an OutlookEmail

An `OutlookEmail` is normally returned by [Get Emails Using Microsoft 365][]. The following table shows a way that one can be created. A `null` [To][], [Cc][], [Bcc][] or [Attachments][] is stored as an empty list.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `OutlookEmail` constructor | `new OutlookEmail(id: "AAMkAGEmail1", from: new EmailAddress("sender@outlook.com"), to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, cc: null, bcc: null, subject: "Invoice", bodyFormat: EmailMessageBodyFormat.Text, body: "Example email body", importance: EmailMessagePriority.Normal, receivedDateTime: new DateTimeOffset(2026, 11, 17, 12, 0, 0, TimeSpan.Zero), isRead: false, hasAttachments: true, attachments: null)` | `{"Id": "AAMkAGEmail1", "From": {"Name": null, "Address": "sender@outlook.com"}, "To": [{"Name": null, "Address": "recipient@outlook.com"}], "Cc": [], "Bcc": [], "Subject": "Invoice", "BodyFormat": 0, "Body": "Example email body", "Importance": 0, "ReceivedDateTime": "2026-11-17T12:00:00+00:00", "IsRead": false, "HasAttachments": true, "Attachments": []}` | Expression | |

### Convert OutlookEmail to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `new OutlookEmail(id: "AAMkAGEmail1", from: new EmailAddress("sender@outlook.com"), to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, cc: null, bcc: null, subject: "Invoice", bodyFormat: EmailMessageBodyFormat.Text, body: "Example email body", importance: EmailMessagePriority.Normal, receivedDateTime: new DateTimeOffset(2026, 11, 17, 12, 0, 0, TimeSpan.Zero), isRead: false, hasAttachments: true, attachments: null)` | `"{\r\n  \"Id\": \"AAMkAGEmail1\",\r\n  \"From\": {\r\n    \"Name\": null,\r\n    \"Address\": \"sender@outlook.com\"\r\n  },\r\n  \"To\": [\r\n    {\r\n      \"Name\": null,\r\n      \"Address\": \"recipient@outlook.com\"\r\n    }\r\n  ],\r\n  \"Cc\": [],\r\n  \"Bcc\": [],\r\n  \"Subject\": \"Invoice\",\r\n  \"BodyFormat\": 0,\r\n  \"Body\": \"Example email body\",\r\n  \"Importance\": 0,\r\n  \"ReceivedDateTime\": \"2026-11-17T12:00:00+00:00\",\r\n  \"IsRead\": false,\r\n  \"HasAttachments\": true,\r\n  \"Attachments\": []\r\n}"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `OutlookEmail`.
- The Literal Editor is available for [Input][] properties where the data type is `OutlookEmail`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `OutlookEmail`.

### Known Limitations

None

## See Also

### Related Data Types

- [EmailAddress][]
- [EmailMessageBodyFormat][]
- [EmailMessagePriority][]
- [OutlookAttachment][]
- [DateTimeOffset][]

### Related Blocks

- [Get Emails Using Microsoft 365][]
- [Delete Email Using Microsoft 365][]
- [Delete Emails Using Microsoft 365][]
- [Move Email Using Microsoft 365][]
- [Move Emails Using Microsoft 365][]
- [Update Email Using Microsoft 365][]
- [Update Emails Using Microsoft 365][]
- [Download Attachment Using Microsoft 365][]
- [Download Attachments Using Microsoft 365][]

### Related Concepts

- [What is Email?][]

### External Documentation

None

[Id Property]: {{< ref "#id" >}}
[Immutable identifier]: {{< ref "#immutable-identifier" >}}
[To]: {{< ref "#to" >}}
[Cc]: {{< ref "#cc" >}}
[Bcc]: {{< ref "#bcc" >}}
[Attachments]: {{< ref "#attachments" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[Nullable]: {{< url path="Cortex.Reference.DataTypes.Other.Nullable.MainDoc" >}}
[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[EmailAddress]: {{< url path="Cortex.Reference.DataTypes.Email.EmailAddress.MainDoc" >}}
[EmailMessageBodyFormat]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.MainDoc" >}}
[EmailMessagePriority]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.MainDoc" >}}
[Normal]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.Normal" >}}
[NonUrgent]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.NonUrgent" >}}
[Urgent]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.Urgent" >}}
[OutlookAttachment]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachment.MainDoc" >}}
[OutlookEmail]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Get Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.GetEmails.GetEmailsUsingMicrosoft365.MainDoc" >}}
[What is Email?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.WhatIsEmail.MainDoc" >}}
[Delete Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DeleteEmail.DeleteEmailUsingMicrosoft365.MainDoc" >}}
[Delete Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DeleteEmail.DeleteEmailsUsingMicrosoft365.MainDoc" >}}
[Move Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.MoveEmail.MoveEmailUsingMicrosoft365.MainDoc" >}}
[Move Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.MoveEmail.MoveEmailsUsingMicrosoft365.MainDoc" >}}
[Update Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailUsingMicrosoft365.MainDoc" >}}
[Update Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailsUsingMicrosoft365.MainDoc" >}}
[Download Attachment Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentUsingMicrosoft365.MainDoc" >}}
[Download Attachments Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentsUsingMicrosoft365.MainDoc" >}}
[Obtain immutable identifiers for Outlook resources]: {{< url path="MSDocs.Graph.OutlookImmutableId" >}}
