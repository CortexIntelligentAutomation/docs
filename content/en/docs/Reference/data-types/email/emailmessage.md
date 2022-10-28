---
title: "EmailMessage"
linkTitle: "EmailMessage"
description: "Used to represent an email message."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Email.EmailMessage)</p>

## Summary

The `EmailMessage` data type is used to represent an email message.

| | |
|-|-|
| **Category:**          | Email                                                  |
| **Name:**              | `EmailMessage`                                         |
| **Full Name:**         | `Cortex.DataTypes.Email.EmailMessage`                  |
| **Alias:**             | N/A                                                    |
| **Description:**       | An email message.                                      |
| **Default Value:**     | `null`                                                 |
| **Can be used as:**    | `EmailMessage`, `Object`, `dynamic`                    |
| **Can be cast to:**    | N/A                                                    |

## Properties

### To

To is used to define the list of recipients for the email message.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[EmailAddress][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[EmailAddress][]&gt; with value `new List<EmailAddress>(){ new EmailAddress("") }` |

### From

From is used to define the sender of the email message.

| | |
|--------------------|---------------------------|
| Data Type | [EmailAddress][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [EmailAddress][] with value shown below: |

```json
{
    "Name": "",
    "Address": ""
}
```

### Cc

Cc is used to define the list of [CC][CC Glossary] recipients for the email message.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[EmailAddress][]&gt; |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[EmailAddress][]&gt; with value `null` |

### Bcc

Bcc is used to define the list of [BCC][BCC Glossary] recipients for the email message.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[EmailAddress][]&gt; |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[EmailAddress][]&gt; with value `null` |

### Priority

Priority is used to define the priority of the email message, for more information on the range of values this can take, see [EmailMessagePriority][].

| | |
|--------------------|---------------------------|
| Data Type | [EmailMessagePriority][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | [EmailMessagePriority][] with value `EmailMessagePriority.Normal` |

### Subject

Subject is used to define the subject of the email message.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [String][] with value `""` |

### BodyFormat

BodyFormat is used to define the format of the email body, for more information on the range of values this can take, see [EmailMessageBodyFormat][].

| | |
|--------------------|---------------------------|
| Data Type | [EmailMessageBodyFormat][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | [EmailMessageBodyFormat][] with value `EmailMessageBodyFormat.Text` |

### Body

The Body is used to define the body of the email message.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with value `$@""` |

### Attachments

The Attachments is used to define the list of attachments for the email message, where each item in the list is a path pointing to the attachment.

The supported file path formats are dependent on the block being used:

- [Send Email Using SMTP Server Block][Send Email Using SMTP Server Block Supported File Paths]

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[String][]&gt; with value `null` |

## Remarks

### Create an EmailMessage

The following table shows some of the ways that an `EmailMessage` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `EmailMessage` constructor | `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@outlook.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@outlook.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`| Expression | No [Advanced Properties][Advanced] properties configured |
| | `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@outlook.com"), cc: new List<EmailAddress>(){ new EmailAddress("cc@outlook.com") }, bcc: new List<EmailAddress>(){ new EmailAddress("bcc@outlook.com") }, priority: EmailMessagePriority.Urgent, subject: "Example email subject", bodyFormat: EmailMessageBodyFormat.Text, body: "Example email body", attachments: new List<string>(){ @"C:\attachment.txt" })` | `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@outlook.com"}, "Cc": [{"Name": null, "Address": "cc@outlook.com"}], "Bcc": [{"Name": null, "Address": "bcc@outlook.com"}], "Priority": "EmailMessagePriority.Urgent", "Subject": "Example email subject", "BodyFormat": "EmailMessageBodyFormat.Text", "Body": "Example email body", "Attachments": ["C:\\attachment.txt"]}`| Expression | All [Advanced Properties][Advanced] properties configured |

An `EmailMessage` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property      | Data Type                | Example                                               | Notes                                         |
|-|-|-|-|
| `To`          | `IList<EmailAddress>`    | `new List<EmailAddress>(){ "recipient@outlook.com" }` | [To][To Property] defines a list of recipients for the email message. |
| `From`        | `EmailAddress`           | Name: `Sender`<br>Address: `sender@outlook.com` | [From][From Property] defines the sender of the email message. |
| `Cc`          | `IList<EmailAddress>`    | `new List<EmailAddress>(){ "cc@outlook.com" }` | [Cc][Cc Property] defines a list of [CC][CC Glossary] recipients for the email message. |
| `Bcc`         | `IList<EmailAddress>`    | `new List<EmailAddress>(){ "bcc@outlook.com" }` | [Bcc][Bcc Property] defines a list of [BCC][BCC Glossary] recipients for the email message. |
| `Priority`    | `EmailMessagePriority`   | `Normal` | [Priority][Priority Property] defines the priority of the email message. |
| `Subject`     | `String`                 | `Example subject` | [Subject][Subject Property] defines the subject of the email message. |
| `BodyFormat`  | `EmailMessageBodyFormat` | `Text` | [BodyFormat][BodyFormat Property] defines the format of the email message body. |
| `Body`        | `String`                 | `$@"Example body"` | [Body][Body Property] defines the body of the email message. |
| `Attachments` |  `IList<String>`         | `new List<string>(){ @"C:\attachment.txt" }` | [Attachments][Attachments Property] defines the list of attachments for the email message. |

### Convert EmailMessage to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@outlook.com"}, "Cc": [{"Name": null, "Address": "cc@outlook.com"}], "Bcc": [{"Name": null, "Address": "bcc@outlook.com"}], "Priority": "EmailMessagePriority.Urgent", "Subject": "Example email subject", "BodyFormat": "EmailMessageBodyFormat.Text", "Body": "Example email body", "Attachments": ["C:\\attachment.txt"]}` | `"{\r\n  \"To\": [\r\n    {\r\n      \"Name\": null,\r\n      \"Address\": \"recipient@outlook.com\"\r\n    }\r\n  ],\r\n  \"From\": {\r\n    \"Name\": null,\r\n    \"Address\": \"sender@outlook.com\"\r\n  },\r\n  \"Cc\": [\r\n    {\r\n      \"Name\": null,\r\n      \"Address\": \"cc@outlook.com\"\r\n    }\r\n  ],\r\n  \"Bcc\": [\r\n    {\r\n      \"Name\": null,\r\n      \"Address\": \"bcc@outlook.com\"\r\n    }\r\n  ],\r\n  \"Priority\": 2,\r\n  \"Subject\": \"Example email subject\",\r\n  \"BodyFormat\": 0,\r\n  \"Body\": \"Example email body\",\r\n  \"Attachments\": [\r\n    \"C:\\attachment.txt\"\r\n  ]\r\n}"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `EmailMessage`.
- The Literal Editor is available for [Input][] properties where the data type is `EmailMessage`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `EmailMessage`.
  
### Known Limitations

None

## See Also

### Related Data Types

- [EmailAddress][]
- [EmailMessageBodyFormat][]
- [EmailMessagePriority][]
- [IList&lt;TItem&gt;][IList]
- [String][]

### Related Concepts

- [Working with Email][]

### External Documentation

None

[To Property]: {{< ref "#to" >}}
[From Property]: {{< ref "#from" >}}
[Cc Property]: {{< ref "#cc" >}}
[Bcc Property]: {{< ref "#bcc" >}}
[Priority Property]: {{< ref "#priority" >}}
[Subject Property]: {{< ref "#subject" >}}
[BodyFormat Property]: {{< ref "#bodyformat" >}}
[Body Property]: {{< ref "#body" >}}
[Attachments Property]: {{< ref "#attachments" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[EmailAddress]: {{< url "Cortex.Reference.DataTypes.Email.EmailAddress.MainDoc" >}}
[EmailMessagePriority]: {{< url "Cortex.Reference.DataTypes.Email.EmailMessagePriority.MainDoc" >}}
[EmailMessageBodyFormat]: {{< url "Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.MainDoc" >}}

[Working with Email]: {{< url "Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}

[Send Email Using SMTP Server Block Supported File Paths]: {{< url "Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.SupportedFilePaths" >}}

[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[BCC Glossary]: {{< url "Cortex.Reference.Glossary.A-E.BCC" >}}
[CC Glossary]: {{< url "Cortex.Reference.Glossary.A-E.CC" >}}
