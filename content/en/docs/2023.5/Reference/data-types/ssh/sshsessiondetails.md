---
title: "SshSessionDetails"
linkTitle: "SshSessionDetails"
description: "Used to represent configuration for executing ssh commands on a specified host."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Ssh.SshSessionDetails)</p>

## Summary

The `SshSessionDetails` data type is used to represent configuration for executing ssh commands on a specified host.

| | |
|-|-|
| **Category:**          | Ssh |
| **Name:**              | `SshSessionDetails` |
| **Full Name:**         | `Cortex.DataTypes.Ssh.SshSessionDetails` |
| **Alias:**             | N/A |
| **Description:**       | Configuration for executing ssh commands on a specified host. |
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
| Default Value | [UserCredentials][] with value shown below: |

```json
{ 
    "Domain": "",
    "Username": "",
    "Password": ""
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
| Use a `SshSessionDetails` constructor | `new SshSessionDetails(host: "localhost", port: 22, credentials: new UserCredentials(domain: "domain", username: "user", password: "password"), terminalPrompt: $@"(.*(~(.*[\r\n]?)\$\|>))")` | `{"Host": "localhost", "Port": 22, "Credentials": { "Domain": "domain", "Username": "user", "Password": "## REDACTED ## - This value has been redacted as it contains text that should be encrypted, but is not."}, "TerminalPrompt": "(.*(~(.*[\\r\\n]?)\\$\|>))" }` | Expression  |

A `SshSessionDetails` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `Host` | `EncryptableText` | `"localhost"` | [Host][] defines the address of the server to connect to. |
| `Port` | `Int32` | `22` | [Port][] defines the port on the server to connect to. |
| `Credentials` | `ISshCredentials` | `new UserCredentials(domain: "domain", username: "user", password: "password")` | [Credentials][] defines the credentials used to authenticate the connection to the server. |
| `TerminalPrompt` | `Int32` | `(.*(~(.*[\r\n]?)\$\|>))` | [TerminalPrompt][] defines the regex used to match the host's terminal prompt. |

### Convert SshSessionDetails to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"Host": "localhost", "Port": 22, "Credentials": { "Domain": "domain", "Username": "user", "Password": "password"}, "TerminalPrompt": "(.*(~(.*[\\r\\n]?)\\$\|>))"}` | `"{\r\n  \"Host\": \"localhost\",\r\n  \"Port\": 22,\r\n  \"Credentials\": {\r\n    \"Domain\": \"domain\",\r\n    \"Username\": \"username\",\r\n    \"Password\": \"## REDACTED ## - This value has been redacted as it contains text that should be encrypted, but is not.\",\r\n},\r\n  \"TerminalPrompt\": \"(.*(~(.*[\\\\r\\\\n]?)\\\\$\|>))\"\r\n}"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SshSessionDetails`.
- The Literal Editor is available for [Input][] properties where the data type is `SshSessionDetails`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SshSessionDetails`.

### Known limitations

None

## See Also

### Related Data Types

- [EncryptableText][]
- [String][]
- [Int32][]
- [ISshCredentials]
- [UserCredentials]

### Related Concepts

None

### External Documentation

None

[Host]: {{< ref "#host" >}}
[Port]: {{< ref "#port" >}}
[Credentials]: {{< ref "#credentials" >}}
[TerminalPrompt]: {{< ref "#terminalprompt" >}}

[ISshCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.ISshCredentials.MainDoc" >}}

[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Domain]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Domain" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
