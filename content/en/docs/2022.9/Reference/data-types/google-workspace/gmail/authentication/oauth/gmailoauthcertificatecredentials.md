---
title: "GmailOAuthCertificateCredentials"
linkTitle: "GmailOAuthCertificateCredentials"
description: "Used to represent configuration for authentication via OAuth when establishing a connection with a mail server hosted by Gmail."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials)</p>

## Summary

The `GmailOAuthCertificateCredentials` data type is used to represent configuration for authentication via OAuth when establishing a connection with a mail server hosted by [Gmail][]. For more information on how to set up a [Gmail][] account so that this authentication mechanism can be used, see [Setting up a Gmail account for OAuth authentication][]

| | |
|-|-|
| **Category:**          | Gmail |
| **Name:**              | `GmailOAuthCertificateCredentials` |
| **Full Name:**         | `Cortex.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials` |
| **Alias:**             | N/A |
| **Description:**       | Configuration for authentication via OAuth when establishing a connection with a mail server hosted by [Gmail][]. |
| **Default Value:**     | null |
| **Can be used as:**    | `GmailOAuthCertificateCredentials`, `EmailCredentials`, `IEmailCredentials`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Properties

### CertificatePath

The CertificatePath is used to define the path pointing to the certificate (.p12) file to be used for authentication via OAuth, the certificate file must be accessible from the server executing the flow. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `$@""` |

### CertificatePassword

The CertificatePassword is used to define the password associated with the certificate file at the [CertificatePath][CertificatePath Property]. This property is an [EncryptedText][] and so it must be encrypted; for more information on how to encrypt the password, see [EncryptedText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptedText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptedText][] with value `""` |

### FromAddress

The FromAddress is used to define the address of the account used to set up the client application created to allow authentication via OAuth.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [String][] with value `""` |

### ClientId

The ClientId is used to define client ID of the client application created to allow authentication via OAuth. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

## Exceptions

The exceptions thrown by the data type can be found below:

| Name                                 | Description |
|--------------------------------------|-------------|
| [UnencryptedTextException][]         |Thrown when the [CertificatePassword][CertificatePassword Property] is not encrypted. |

## Remarks

### Create a GmailOAuthCertificateCredentials

The following table shows how a `GmailOAuthCertificateCredentials` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `GmailOAuthCertificateCredentials` constructor | `new GmailOAuthCertificateCredentials(certificatePath: @"C:\certificate.p12", certificatePassword: "encryptedPassword", fromAddress: "sender@gmail.com", clientId: "clientId")` | `{"CertificatePath": "C:\\certificate.p12", "CertificatePassword": "encryptedPassword", "FromAddress": "sender@gmail.com", "ClientId": "clientId"}` | Expression | N/A |

A `GmailOAuthCertificateCredentials` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `CertificatePath` | `EncryptableText` | `$@"C:\certificate.p12"` | The [CertificatePath][CertificatePath Property] defines the path pointing to the certificate (.p12) file to be used for authentication via OAuth. |
| `CertificatePassword` | `EncryptedText` | `"encryptedPassword"` | The [CertificatePassword][CertificatePassword Property] defines the password associated with the certificate file at the [CertificatePath][CertificatePath Property]. |
| `FromAddress` | `String` | `"sender@gmail.com"` | The [FromAddress][FromAddress Property] defines the address of the account used to set up the client application created to allow authentication via OAuth. |
| `ClientId` | `EncryptableText` | `"clientid"` | The [ClientId][ClientId Property] defines the client ID of the client application created to allow authentication via OAuth. |

### Convert GmailOAuthCertificateCredentials to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"CertificatePath": "C:\\certificate.p12", "CertificatePassword": "encryptedPassword", "FromAddress": "sender@gmail.com", "ClientId": "clientId"}` | `"{\r\n  \"CertificatePath\": \"C:\\\\certificate.p12\",\r\n  \"CertificatePassword\": \"encryptedPassword\",\r\n  \"FromAddress\": \"sender@gmail.com\",\r\n  \"ClientId\": \"clientId\"\r\n}"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `GmailOAuthCertificateCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `GmailOAuthCertificateCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `GmailOAuthCertificateCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [EmailCredentials][]
- [EncryptedText][]
- [EncryptableText][]
- [GmailSessionDetails][]
- [IEmailCredentials][]

### Related Concepts

- [Working with Email][]

### External Documentation

None

[CertificatePath Property]: {{< ref "#certificatepath" >}}
[CertificatePassword Property]: {{< ref "#certificatepassword" >}}
[FromAddress Property]: {{< ref "#fromaddress" >}}
[ClientId Property]: {{< ref "#clientid" >}}

[GmailSessionDetails]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.GmailSessionDetails.MainDoc" >}}
[IEmailCredentials]: {{< url path="Cortex.Reference.DataTypes.Email.Authentication.IEmailCredentials.MainDoc" >}}
[EmailCredentials]: {{< url path="Cortex.Reference.DataTypes.Email.Authentication.EmailCredentials.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[UnencryptedTextException]: {{< url path="Cortex.Reference.Exceptions.Common.UnencryptedTextException.MainDoc" >}}

[Working with Email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}
[Setting up a Gmail account for OAuth authentication]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpOAuthGmail" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Gmail]: {{< url path="Cortex.Reference.Glossary.F-J.Gmail" >}}
