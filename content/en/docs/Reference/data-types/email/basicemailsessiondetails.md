---
title: "BasicEmailSessionDetails"
linkTitle: "BasicEmailSessionDetails"
description: "Used to represent configuration for opening and maintaining a session with a mail server."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Email.BasicEmailSessionDetails)</p>

## Summary

The `BasicEmailSessionDetails` data type is used to represent configuration for opening and maintaining a session with a mail server.

| | |
|-|-|
| **Category:**          | Email                                                  |
| **Name:**              | `BasicEmailSessionDetails`                             |
| **Full Name:**         | `Cortex.DataTypes.Email.BasicEmailSessionDetails`      |
| **Alias:**             | N/A                                                    |
| **Description:**       | Configuration for opening and maintaining a session with a mail server. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `BasicEmailSessionDetails`, `Object`, `dynamic`        |
| **Can be cast to:**    | N/A                                                    |

## Properties

### ServerDetails

The ServerDetails are used to configure the [Host][] and [Port][] of the [SMTP][] server to connect to and whether or not to [UseSsl][].

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

The Credentials are used to configure the [Username][] and [Password][] used for [SMTP][] Authentication.

| | |
|--------------------|---------------------------|
| Data Type | [UserCredentials][] |
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

### Create a BasicEmailSessionDetails

The following table shows some of the ways that `BasicEmailSessionDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `BasicEmailSessionDetails` constructor | `new BasicEmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}` | Expression | The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the [Password][], see [EncryptedText][]. |

A `BasicEmailSessionDetails` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `ServerDetails` | `ServerDetails` | Host:&nbsp;`"smtp.gmail.com"`<br>Port:&nbsp;`465`<br>UseSsl:&nbsp;`true` | The [ServerDetails][ServerDetails Property] that are used to connect to the server. |
| `Credentials` | `UserCredentials` | Domain:&nbsp;`""`<br>Username:&nbsp;`"sender@gmail.com"`<br>Password:&nbsp;`"encryptedPassword"` | The [Credentials][Credentials Property] that are used for authentication on the server.<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the [Password][], see [EncryptedText][].|

### Convert BasicEmailSessionDetails to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}` | `"{\r\n  \"ServerDetails\": {\r\n    \"Host\": \"smtp.gmail.com\",\r\n    \"Port\": 465,\r\n    \"UseSsl\": true\r\n  },\r\n  \"Credentials\": {\r\n    \"Domain\": null,\r\n    \"Username\": \"sender@gmail.com\",\r\n    \"Password\": \"encryptedPassword\"\r\n  }\r\n}"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `BasicEmailSessionDetails`.
- The Literal Editor is available for [Input][] properties where the data type is `BasicEmailSessionDetails`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `BasicEmailSessionDetails`.

### Known Limitations

Currently, this data type is not compatible for use with unauthenticated [SMTP][] servers.

This limitation may be removed in the future.

## See Also

### Related Data Types

- [ServerDetails][]
- [UserCredentials][]
- [EncryptedText][]

### Related Concepts

- [Working with Email][]

### External Documentation

None

[ServerDetails Property]: {{< ref "#serverdetails" >}}
[Credentials Property]: {{< ref "#credentials" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[EncryptableText]: {{< url "Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url "Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
[UnencryptedTextException]: {{< url "Cortex.Reference.Exceptions.Common.UnencryptedTextException.MainDoc" >}}

[ServerDetails]: {{< url "Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc" >}}
[Host]: {{< url "Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Host" >}}
[Port]: {{< url "Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Port" >}}
[UseSsl]: {{< url "Cortex.Reference.DataTypes.SessionDetails.ServerDetails.UseSsl" >}}

[UserCredentials]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Domain]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.Domain" >}}
[Username]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Working with Email]: {{< url "Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}

[SMTP]: {{< url "Cortex.Reference.Glossary.P-T.SMTP" >}}
