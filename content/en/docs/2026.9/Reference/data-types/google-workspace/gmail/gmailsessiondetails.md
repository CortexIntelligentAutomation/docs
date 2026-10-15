---
title: "GmailSessionDetails"
linkTitle: "GmailSessionDetails"
description: "Used to represent configuration for opening and maintaining a session with a mail server hosted by Gmail."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.GoogleWorkspace.Gmail.GmailSessionDetails)</p>

## Summary

The `GmailSessionDetails` data type is used to represent configuration for opening and maintaining a session with a mail server hosted by [Gmail][].

| | |
|-|-|
| **Category:**          | Gmail                                                  |
| **Name:**              | `GmailSessionDetails`                             |
| **Full Name:**         | `Cortex.DataTypes.GoogleWorkspace.Gmail.GmailSessionDetails`      |
| **Alias:**             | N/A                                                    |
| **Description:**       | Configuration for opening and maintaining a session with a mail server hosted by [Gmail][]. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `GmailSessionDetails`, `Object`, `dynamic`        |
| **Can be cast to:**    | N/A                                                    |

## Properties

### ServerDetails

The ServerDetails are used to configure the [Host][] and [Port][] of the mail server to connect to and whether or not to [UseSsl][].

| | |
|--------------------|---------------------------|
| Data Type | [ServerDetails][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [ServerDetails][] with value shown below: |

```json
{ 
    "Host": "",
    "Port": 465,
    "UseSsl": true
}
```

### Credentials

The Credentials are used to configure the information required for authentication with the mail server. There are multiple data types that can be used:

- [UserCredentials][]: Used to configure the [Username][] and [Password][] for Basic authentication
- [GmailOAuthCertificateCredentials][]: Used to configure the [CertificatePath][], [CertificatePassword][], [FromAddress][] and [ClientId][] for OAuth

| | |
|--------------------|---------------------------|
| Data Type | [IEmailCredentials][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [UserCredentials][] with value shown below: |

```json
{ 
    "Domain": "",
    "Username": "",
    "Password": ""
}
```

## Remarks

### Create a GmailSessionDetails

The following table shows some of the ways that `GmailSessionDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `GmailSessionDetails` constructor | `new GmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}` | Expression | The [Password][] property in the [UserCredentials][] can be the password associated with the username (if the account is associated with a Google Workspace with access enabled for less secure apps) or an app password, for more information, see [Setting up an app password for a Gmail account][].<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| | `new GmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new GmailOAuthCertificateCredentials(@"C:\certificate.p12", "encryptedPassword", "sender@gmail.com", "clientId")` | `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"CertificatePath": "C:\\certificate.p12", "CertificatePassword": "encryptedPassword", "FromAddress": "sender@gmail.com", "ClientId": "clientId"}}` | Expression | The [CertificatePath][] in the [GmailOAuthCertificateCredentials][] is a path pointing to a certificate accessible from the server executing the flow.<br><br>For information on:<ul><li>What each of the properties in the [GmailOAuthCertificateCredentials][] needs to be, see [GmailOAuthCertificateCredentials][]</li><li>How to set up the [Gmail][] account so that this authentication mechanism can be used, see [Setting up a Gmail account for OAuth authentication][]</li></ul>The [CertificatePassword][] property  must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |

A `GmailSessionDetails` with a [UserCredentials][] as the [Credentials][Credentials Property] can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `ServerDetails` | `ServerDetails` | Host:&nbsp;`"smtp.gmail.com"`<br>Port:&nbsp;`465`<br>UseSsl:&nbsp;`true` | The [ServerDetails][ServerDetails Property] that are used to connect to the server. |
| `Credentials` | `UserCredentials` | Domain:&nbsp;`""`<br>Username:&nbsp;`"sender@gmail.com"`<br>Password:&nbsp;`"encryptedPassword"` | The [Credentials][Credentials Property] that are used for authentication on the server.<br><br>The [Password][] property in the [UserCredentials][] can be the password associated with the username (if the account is associated with a Google Workspace with access enabled for less secure apps) or an app password, for more information, see [Setting up an app password for a Gmail account][].<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |

A `GmailSessionDetails` with a [GmailOAuthCertificateCredentials][] as the [Credentials][Credentials Property] can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `ServerDetails` | `ServerDetails` | Host:&nbsp;`"smtp.gmail.com"`<br>Port:&nbsp;`465`<br>UseSsl:&nbsp;`true` | The [ServerDetails][ServerDetails Property] that are used to connect to the server. |
| `Credentials` | `GmailOAuthCertificateCredentials` | CertificatePath:&nbsp;`$@"C:\certificate.p12"`<br>CertificatePassword:&nbsp;`"encryptedPassword"`<br>FromAddress:&nbsp;`"sender@gmail.com"`<br>ClientId:&nbsp;`"clientId"` | The [Credentials][Credentials Property] that are used for authentication on the server.<br><br>The [CertificatePath][] in the [GmailOAuthCertificateCredentials][] is a path pointing to a certificate which must be accessible from the server executing the flow.<br><br>For information on:<ul><li>What each of the properties in the [GmailOAuthCertificateCredentials][] needs to be, see [GmailOAuthCertificateCredentials][]</li><li>How to set up the [Gmail][] account so that this authentication mechanism can be used, see [Setting up a Gmail account for OAuth authentication][]</li></ul>The [CertificatePassword][] property  must be encrypted, for more information on how to encrypt the password, see [EncryptedText][].|

### Convert GmailSessionDetails to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}` | `"{\r\n  \"ServerDetails\": {\r\n    \"Host\": \"smtp.gmail.com\",\r\n    \"Port\": 465,\r\n    \"UseSsl\": true\r\n  },\r\n  \"Credentials\": {\r\n    \"Domain\": null,\r\n    \"Username\": \"sender@gmail.com\",\r\n    \"Password\": \"encryptedPassword\"\r\n  }\r\n}"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `GmailSessionDetails`.
- The Literal Editor is available for [Input][] properties where the data type is `GmailSessionDetails`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `GmailSessionDetails`.

### Known Limitations

None

## See Also

### Related Data Types

- [EncryptedText][]
- [GmailOAuthCertificateCredentials][]
- [ServerDetails][]
- [UserCredentials][]

### Related Concepts

- [Working with Email][]

### External Documentation

None

[ServerDetails Property]: {{< ref "#serverdetails" >}}
[Credentials Property]: {{< ref "#credentials" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}

[ServerDetails]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc" >}}
[Host]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Host" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Port" >}}
[UseSsl]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.UseSsl" >}}

[IEmailCredentials]: {{< url path="Cortex.Reference.DataTypes.Email.Authentication.IEmailCredentials.MainDoc" >}}

[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[GmailOAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.MainDoc" >}}
[CertificatePath]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.CertificatePath" >}}
[CertificatePassword]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.CertificatePassword" >}}
[FromAddress]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.FromAddress" >}}
[ClientId]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.ClientId" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Working with Email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}
[Setting up an app password for a Gmail account]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpAppPassword" >}}
[Setting up a Gmail account for OAuth authentication]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpOAuthGmail" >}}

[Gmail]: {{< url path="Cortex.Reference.Glossary.F-J.Gmail" >}}
