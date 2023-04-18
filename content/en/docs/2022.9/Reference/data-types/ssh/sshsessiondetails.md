---
title: "SshSessionDetails"
linkTitle: "SshSessionDetails"
description: "The data type representing configuration for executing ssh commands on a specified host."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Ssh.SshSessionDetails)</p>

## Summary

The data type representing configuration for executing ssh commands on a specified host.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `SshSessionDetails` |
| **Full Name:**         | `Cortex.DataTypes.Ssh.SshSessionDetails` |
| **Alias:**             | N/A |
| **Description:**       | The data type representing configuration for executing ssh commands on a specified host. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `SshSessionDetails`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Host

The Host is used to define the address of the server to connect to. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

A server address can typically be represented in one of the following formats:

- Fully Qualified Domain Name (e.g. `"machine.domain.com"`)
- Machine name (e.g. `"server1"`)
- IP address (e.g. `"127.0.0.1"`)
- Localhost (e.g. `"localhost"`)

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
| Default Value | [Int32][] with value `22` |

### Credentials

The Credentials are used to configure the [Domain][], [Username][] and [Password][] used to connect to the host.

| | |
|--------------------|---------------------------|
| Data Type | [ISshCredentials][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [SshCertificateCredentials][] with value shown below: |

```json
{ 
    "Domain": "",
    "Username": "",
    "CertificatePath": "",
    "CertificatePassword": ""
}
```

### TerminalPrompt

The regex used to match the host's terminal prompt.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | [String][] with value `(.*(~(.*[\r\n]?)\$\|>))` |

## Remarks

### Create a SshSessionDetails

The following table shows some of the ways that `SshSessionDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `SshSessionDetails` constructor | `new SshSessionDetails(host: "localhost", port: 22, credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"), terminalPrompt: "(.*(~(.*[\r\n]?)\$\|>))")` | `"Credentials": {"Domain": null, "Username": "sshUser", "Password": "encryptedPassword"}}` | Expression | The [Password][] property in the [UserCredentials][] is the password associated with the username.<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| | `new SshSessionDetails(host: "localhost", port: 22, credentials: new SshCertificateCredentials(@"C:\certificate.p12", "encryptedPassword", "sender@gmail.com", "clientId")` | `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sshUser", "CertificatePath": "C:\\certificate.p12", "CertificatePassword": "encryptedPassword"}}` | Expression | The [CertificatePath][] in the [SshCertificateCredentials][] is a path pointing to a certificate accessible from the server executing the flow.<br><br>For information on:<ul><li>What each of the properties in the [SshCertificateCredentials][] needs to be, see [SshCertificateCredentials][]</li></ul>The [CertificatePassword][] property  must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |

A `SshSessionDetails` with a [UserCredentials][] as the [Credentials][Credentials Property] can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `Credentials` | `UserCredentials` | Domain:&nbsp;`""`<br>Username:&nbsp;`"sshUser"`<br>Password:&nbsp;`"encryptedPassword"` | The [Credentials][Credentials Property] that are used for authentication on the server.<br><br>The [Password][] property in the [UserCredentials][] is the password associated with the username.<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |

A `SshSessionDetails` with a [SshCertificateCredentials][] as the [Credentials][Credentials Property] can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `Credentials` | `SshCertificateCredentials` | Domain&nbsp;`""`<br>Username&nbsp;`"sshUser"`<br>CertificatePath:&nbsp;`$@"C:\certificate.p12"`<br>CertificatePassword:&nbsp;`"encryptedPassword"` | The [Credentials][Credentials Property] that are used for authentication on the server.<br><br>The [CertificatePath][] in the [SshCertificateCredentials][] is a path pointing to a certificate which must be accessible from the server executing the flow.<br><br>For information on:<ul><li>What each of the properties in the [SshCertificateCredentials][] needs to be, see [SshCertificateCredentials][]</li><li>The [CertificatePassword][] property  must be encrypted, for more information on how to encrypt the password, see [EncryptedText][].|

### Convert SshSessionDetails to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"Host": "localhost", "Port": 22, "Credentials": {"Domain": null, "Username": "sshUser", "Password": "encryptedPassword"}}` | `"{\r\n    \"Host\": \"localhost\",\r\n    \"Port\": 22,\r\n    \"Credentials\": {\r\n    \"Domain\": null,\r\n    \"Username\": \"sshUser\",\r\n    \"Password\": \"encryptedPassword\"\r\n  }\r\n}"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SshSessionDetails`.
- The Literal Editor is available for [Input][] properties where the data type is `SshSessionDetails`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SshSessionDetails`.

### Known limitations

None

## See Also

### Related Data Types

- [EncryptableText][]
- [EncryptedText][]
- [SshCertificateCredentials][]
- [UserCredentials][]

### Related Concepts

None

### External Documentation

[Credentials Property]: {{< ref "#credentials" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Domain]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Domain" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[ISshCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.ISshCredentials.MainDoc" >}}
[SshCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshCertificateCredentials.MainDoc" >}}
[CertificatePath]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshCertificateCredentials.CertificatePath" >}}
[CertificatePassword]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshCertificateCredentials.CertificatePassword" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
