---
title: "EmailSearchSettings"
linkTitle: "EmailSearchSettings"
description: "A per-part search applied to an Outlook email."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.EmailSearchSettings)</p>

## Summary

The `EmailSearchSettings` data type describes how [Get Emails Using Microsoft 365][] searches an email. A separate [TextToFindAdvanced][] query can be applied to each part of the email. An email matches when every specified part satisfies its query. A part that is `null`, or a query whose [Starts With][], [Contains][] and [Ends With][] are all null or empty, is not matched on.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `EmailSearchSettings` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.EmailSearchSettings` |
| **Alias:**             | N/A |
| **Description:**       | A per-part search applied to an Outlook email. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `EmailSearchSettings`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Properties

### To

The query matched against the addresses and display names in the email's To field. A recipient matches when either its address or its display name satisfies the query.

| | |
|--------------------|---------------------------|
| Data Type | [TextToFindAdvanced][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `null`) |

### From

The query matched against the address and display name in the email's From field. The sender matches when either its address or its display name satisfies the query.

| | |
|--------------------|---------------------------|
| Data Type | [TextToFindAdvanced][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `null`) |

### Cc

The query matched against the addresses and display names in the email's Cc field. A recipient matches when either its address or its display name satisfies the query.

| | |
|--------------------|---------------------------|
| Data Type | [TextToFindAdvanced][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `null`) |

### Bcc

The query matched against the addresses and display names in the email's Bcc field. A recipient matches when either its address or its display name satisfies the query.

Microsoft 365 only records the Bcc of an email in the mailbox it was sent from, so this matches in a folder of sent or draft emails and matches nothing in a folder of received emails.

| | |
|--------------------|---------------------------|
| Data Type | [TextToFindAdvanced][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `null`) |

### Subject

The query matched against the email's subject.

| | |
|--------------------|---------------------------|
| Data Type | [TextToFindAdvanced][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `null`) |

### Body

The query matched against the email's body.

| | |
|--------------------|---------------------------|
| Data Type | [TextToFindAdvanced][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `null`) |

### Attachment Name

The query matched against the names of the email's attachments.

| | |
|--------------------|---------------------------|
| Data Type | [TextToFindAdvanced][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `null`) |

### Comparison Type

The [StringComparison][] used when matching every query in these settings.

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `Ordinal` |

## Remarks

### Create an EmailSearchSettings

The following table shows a way that an `EmailSearchSettings` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `EmailSearchSettings` constructor | `new EmailSearchSettings(to: null, from: null, cc: null, bcc: null, subject: new TextToFindAdvanced(null, "invoice", null, SearchOptions.LiteralText), body: null, attachmentName: null, comparisonType: StringComparison.OrdinalIgnoreCase)` | `{"To": null, "From": null, "Cc": null, "Bcc": null, "Subject": {"StartsWith": null, "Contains": "invoice", "EndsWith": null, "SearchOptions": 0}, "Body": null, "AttachmentName": null, "ComparisonType": 5}` | Expression | Parts left `null` are not matched on. |

An `EmailSearchSettings` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `To` | `TextToFindAdvanced` | `null` | Not matched on. |
| `From` | `TextToFindAdvanced` | `null` | Not matched on. |
| `Cc` | `TextToFindAdvanced` | `null` | Not matched on. |
| `Bcc` | `TextToFindAdvanced` | `null` | Not matched on. |
| `Subject` | `TextToFindAdvanced` | `new TextToFindAdvanced(null, "invoice", null, SearchOptions.LiteralText)` | Matches a subject that contains `invoice`. |
| `Body` | `TextToFindAdvanced` | `null` | Not matched on. |
| `AttachmentName` | `TextToFindAdvanced` | `null` | Not matched on. |
| `ComparisonType` | `StringComparison` | `OrdinalIgnoreCase` | Applied to every query. |

### Convert EmailSearchSettings to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `new EmailSearchSettings(to: null, from: null, cc: null, bcc: null, subject: new TextToFindAdvanced(null, "invoice", null, SearchOptions.LiteralText), body: null, attachmentName: null, comparisonType: StringComparison.OrdinalIgnoreCase)` | `"{\r\n  \"To\": null,\r\n  \"From\": null,\r\n  \"Cc\": null,\r\n  \"Bcc\": null,\r\n  \"Subject\": {\r\n    \"StartsWith\": null,\r\n    \"Contains\": \"invoice\",\r\n    \"EndsWith\": null,\r\n    \"SearchOptions\": 0\r\n  },\r\n  \"Body\": null,\r\n  \"AttachmentName\": null,\r\n  \"ComparisonType\": 5\r\n}"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `EmailSearchSettings`.
- The Literal Editor is available for [Input][] properties where the data type is `EmailSearchSettings`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `EmailSearchSettings`.

### Known Limitations

- A Bcc query only matches in a mailbox folder that still holds the Bcc, such as Sent Items or Drafts.

## See Also

### Related Data Types

- [TextToFindAdvanced][]
- [SearchOptions][]
- [StringComparison][]

### Related Blocks

- [Get Emails Using Microsoft 365][]

### Related Concepts

- [What is Email?][]

### External Documentation

None

[Starts With]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFindAdvanced.StartsWith" >}}
[Contains]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFindAdvanced.Contains" >}}
[Ends With]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFindAdvanced.EndsWith" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[TextToFindAdvanced]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFindAdvanced.MainDoc" >}}
[SearchOptions]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.MainDoc" >}}
[StringComparison]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Get Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.GetEmails.GetEmailsUsingMicrosoft365.MainDoc" >}}
[What is Email?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.WhatIsEmail.MainDoc" >}}
