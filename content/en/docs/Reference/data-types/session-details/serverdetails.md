---
title: "ServerDetails"
linkTitle: "ServerDetails"
description: "Used to represent details required to connect to a server."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.SessionDetails.ServerDetails)</p>

## Summary

The `ServerDetails` data type is used to represent details required to connect to a server.

| | |
|-|-|
| **Category:**          | Session Details                                        |
| **Name:**              | `ServerDetails`                                        |
| **Full Name:**         | `Cortex.DataTypes.SessionDetails.ServerDetails`        |
| **Alias:**             | N/A                                                    |
| **Description:**       | Details required to connect to a server. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `ServerDetails`, `Object`, `dynamic`                   |
| **Can be cast to:**    | N/A                                                    |

## Properties

### Host

The Host is used to define the address of the server to connect to. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

A server address can typically be represented in one of the following formats:

- Fully Qualified Domain Name (e.g. `"smtp.gmail.com"`)
- Machine name (e.g. `"mail-server1"`)
- IP address (e.g. `"127.0.0.1"`)
- Localhost (e.g. `"localhost"`)

The server address formats supported are dependent on the block being used:

- [Send Email Using SMTP Server Block][Send Email Using SMTP Server Block Supported Server Address Formats]

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

### Port

The Port is used to define the port on the server to connect to.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [Int32][] with value `0` |

### UseSsl

UseSsl is used to define whether or not connection to the server should use [SSL][].

When using this data type with [Send Email Using SMTP Server Block][], the value of this property depends on the [Port][Port Property]. For more information, see [Send Email Using SMTP Server Block][Send Email Using SMTP Server Block Setting UseSsl].

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [Boolean][] with value `true` |

## Remarks

### Create a ServerDetails

The following table shows some of the ways that `ServerDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `ServerDetails` constructor | `new ServerDetails(host: "smtp.gmail.com", port: 465, useSsl: true)` | `{"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}` | Expression |  |

A `ServerDetails` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `Host` | `EncryptableText` | `"smtp.gmail.com"` | [Host][Host Property] defines the address of the server to connect to. |
| `Port` | `Int32` | `465` | [Port][Port Property] defines the port on the server to connect to. |
| `UseSsl` | `Boolean` | `true` | [UseSsl][UseSsl Property] defines whether or not connection to the server should use [SSL][]. |

### Convert ServerDetails to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}` | `"{\r\n  \"Host\": \"smtp.gmail.com\",\r\n  \"Port\": 465,\r\n  \"UseSsl\": true\r\n}"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `ServerDetails`.
- The Literal Editor is available for [Input][] properties where the data type is `ServerDetails`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `ServerDetails`.
  
### Known Limitations

None

## See Also

### Related Data Types

- [BasicEmailSessionDetails][]
- [Boolean][]
- [EncryptableText][]
- [Int32][]

### Related Concepts

- [Working with Email][]

### External Documentation

None

[Host Property]: {{< ref "#host" >}}
[Port Property]: {{< ref "#port" >}}
[UseSsl Property]: {{< ref "#usessl" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[BasicEmailSessionDetails]: {{< url "Cortex.Reference.DataTypes.Email.BasicEmailSessionDetails.MainDoc" >}}

[Send Email Using SMTP Server Block]: {{< url "Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.MainDoc" >}}
[Send Email Using SMTP Server Block Supported Server Address Formats]: {{< url "Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.SupportedServerAddressFormats" >}}
[Send Email Using SMTP Server Block Setting UseSsl]: {{< url "Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.SettingUseSsl" >}}

[Working with Email]: {{< url "Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}

[EncryptableText]: {{< url "Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}

[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[SSL]: {{< url "Cortex.Reference.Glossary.P-T.SSL" >}}
