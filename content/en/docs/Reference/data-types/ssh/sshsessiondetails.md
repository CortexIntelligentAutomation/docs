---
title: "SshSessionDetails"
linkTitle: "SshSessionDetails"
description: "The data type representing configuration for executing ssh commands on a specified host."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Ssh.SshSessionDetails)</p>

<img src="/images/work-in-progress.jpg">

## Summary

The data type representing configuration for executing ssh commands on a specified host.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `SshSessionDetails` |
| **Full Name:**         | `Cortex.DataTypes.PowerShell.SshSessionDetails` |
| **Alias:**             | N/A |
| **Description:**       | The data type representing configuration for executing ssh commands on a specified host. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `PowerShellSessionDetails`, `Object`, `dynamic` |
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
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [String][] with value `"(.*(~(.*[\r\n]?)\$|>))"`: |

## Remarks

### Create a SshSessionDetails

TODO

### Convert SshSessionDetails to Text

TODO

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SshSessionDetails`.
- The Literal Editor is available for [Input][] properties where the data type is `SshSessionDetails`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SshSessionDetails`.

### Known limitations

None

## See Also

### Related Data Types

TODO

### Related Concepts

None

### External Documentation

None

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[UserCredentials]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Domain]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.Domain" >}}
[Username]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[ISshCredentials]: {{< url "Cortex.Reference.DataTypes.Ssh.Authentication.ISshCredentials.MainDoc" >}}
[SshCertificateCredentials]: {{< url "Cortex.Reference.DataTypes.Ssh.Authentication.SshCertificateCredentials.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[EncryptableText]: {{< url "Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
