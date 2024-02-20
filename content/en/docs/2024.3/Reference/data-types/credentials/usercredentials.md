---
title: "UserCredentials"
linkTitle: "UserCredentials"
description: "Used to represent details required to authenticate with a domain or server."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Credentials.UserCredentials)</p>

## Summary

The `UserCredentials` data type is used to represent details required to authenticate with a domain or server.

| | |
|-|-|
| **Category:**          | Credentials                                            |
| **Name:**              | `UserCredentials`                                      |
| **Full Name:**         | `Cortex.DataTypes.Credentials.UserCredentials`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Details required to authenticate with a domain or server. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `EmailUserCredentials`, `EmailCredentials`, `IEmailCredentials`, `HttpUserCredentials`, `HttpCredentials`, `IHttpCredentials`, `SshUserCredentials`, `SshCredentials`, `ISshCredentials`, `UserCredentials`, `IUserCredentials`, `NetworkCredential`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### Domain

The Domain is used to define the domain or server to authenticate with. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

Whether or not the Domain is required is dependent on the block being used:

- [Send Email Using SMTP Server Block][Send Email Using SMTP Server Block Setting Credentials]
- [Send Email Using Gmail Block][Send Email Using Gmail Block Setting Credentials]

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

### Username

The Username is used to define the user to authenticate as. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

### Password

The Password is used to define the password of the user to authenticate as. This property is an [EncryptedText][] and so it must be encrypted; for more information on how to encrypt the password, see [EncryptedText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptedText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptedText][] with value `""` |

## Remarks

### Create a UserCredentials

The following table shows some of the ways that `UserCredentials` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `UserCredentials` constructor | `new UserCredentials(domain: "domain", username: "username", password: "encryptedPassword")` | `{"Domain": "domain", "Username": "username", "Password": "encryptedPassword"}` | Expression | Domain specified |
| | `new UserCredentials(username: "username", password: "encryptedPassword")` | `{"Domain": null, "Username": "username", "Password": "encryptedPassword"}` | Expression | Domain not specified |

A `UserCredentials` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `Domain` | `EncryptableText` | `"domain"` | [Domain][Domain Property] defines the domain or server to authenticate with. |
| `Username` | `EncryptableText` | `"username"` | [Username][Username Property] defines the user to authenticate as. |
| `Password` | `EncryptedText` | `"encryptedPassword"` | [Password][Password Property] defines the password of the user to authenticate as. |

### Convert UserCredentials to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"Domain": "domain", "Username": "username", "Password": "encryptedPassword"}` | `"{\r\n  \"Domain\": \"domain\",\r\n  \"Username\": \"username\",\r\n  \"Password\": \"encryptedPassword\"\r\n}"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `UserCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `UserCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `UserCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [BasicEmailSessionDetails][]
- [EmailCredentials][]
- [EmailUserCredentials][]
- [EncryptableText][]
- [EncryptedText][]
- [HttpCredentials][]
- [HttpUserCredentials][]
- [IEmailCredentials][]
- [IHttpCredentials][]
- [ISshCredentials][]
- [SshCredentials][]
- [SshUserCredentials][]

### Related Concepts

- [Working with Email][]

### External Documentation

- [NetworkCredential][]

[Domain Property]: {{< ref "#domain" >}}
[Username Property]: {{< ref "#username" >}}
[Password Property]: {{< ref "#password" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[BasicEmailSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Email.BasicEmailSessionDetails.MainDoc" >}}
[IEmailCredentials]: {{< url path="Cortex.Reference.DataTypes.Email.Authentication.IEmailCredentials.MainDoc" >}}
[EmailCredentials]: {{< url path="Cortex.Reference.DataTypes.Email.Authentication.EmailCredentials.MainDoc" >}}
[EmailUserCredentials]: {{< url path="Cortex.Reference.DataTypes.Email.Authentication.EmailUserCredentials.MainDoc" >}}
[IHttpCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.IHttpCredentials.MainDoc" >}}
[HttpCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.HttpCredentials.MainDoc" >}}
[HttpUserCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.HttpUserCredentials.MainDoc" >}}
[ISshCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.ISshCredentials.MainDoc" >}}
[SshCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshCredentials.MainDoc" >}}
[SshUserCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshUserCredentials.MainDoc" >}}

[NetworkCredential]: {{< url path="MSDocs.DotNet.Api.System.Net.NetworkCredential" >}}

[Send Email Using SMTP Server Block Setting Credentials]: {{< url path="Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.SettingCredentials" >}}
[Send Email Using Gmail Block Setting Credentials]: {{< url path="Cortex.Reference.Blocks.GoogleWorkspace.Gmail.SendEmail.SendEmailUsingGmail.SettingCredentials" >}}

[Working with Email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
