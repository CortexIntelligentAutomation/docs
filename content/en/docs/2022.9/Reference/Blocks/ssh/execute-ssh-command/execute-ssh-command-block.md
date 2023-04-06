---
title: "Execute Ssh Command"
linkTitle: "Execute Ssh Command"
description: "Executes an SSH command on the specified host."
---

{{< figure src="/blocks/ssh-execute-ssh-command-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Ssh.ExecuteSshCommand.ExecuteSshCommandBlock)</p>

{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future; this will include further examples and remarks.{{% /alert %}}

## Description

Connects to a host using the [Ssh Session Details][Ssh Session Details Property], and executes a [Command][Command Property], returning the [Response][Response Property] and [Ssh Logs][Ssh Logs Property].

[Close Session][Close Session Property] can be specified to choose whether the session on the host is closed or is kept open for use on subsequent Execute Ssh Command blocks.

## Examples

### Execute a Command using UserCredentials

This example will execute a [Command][Command Property] on the server with the following details:

- Host -  `"localhost"`
- Port -  `22`
- Domain - `"domain"`
- Username - `"username"`
- Password - `"password"`

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command` with value `"ipconfig"` | `($)Command` is a variable of type [EncryptableText][] |
| [Ssh Session Details][Ssh Session Details Property] | `($)SshSessionDetails` with value `{"Host": "localhost", "Port": 22, "Credentials": {"Domain": "domain", "Username": "username", "Password": "encryptedPassword"}, "TerminalPrompt": "(.*(~(.*[\\r\\n]?)\\$\|>))"}`<br><br>In this example `($)SshSessionDetails` has been set up using the following [Expression][]:<br><br> `new SshSessionDetails("localhost", 22, new UserCredentials("domain", "username",  "encryptedPassword"), @"(.*(~(.*[\r\n]?)\$\|>))")`  |  `($)SshSessionDetails` is a variable of type [SshSessionDetails][] |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` | `($)CloseSession` is a variable of type [Boolean][] |
| [Configuration Settings][Configuration Settings Property] | `($)ConfigurationSettings`, with no value | `($)ConfigurationSettings` is a variable of type [Dictionary][]&lt;[String][], [EncryptableText][]&gt; |
| [Response][Response Property] | `($)Response`, with no value | `($)Response` will be set to the type [String][] |
| [Ssh Logs][Ssh Logs Property] | `($)SshLogs`, with no value | `($)SshLogs` will be set to the type [SshLogs][] |

#### Result

Running the [Command][Command Property] results in the variable `($)Response` being updated to the following:

```text
Windows IP Configuration

Ethernet adapter Ethernet 3:

Connection-specific DNS Suffix. : reddog.microsoft.com
Link-local IPv6 Address. . . . . : fe80::78eb:a051:2b84:e8bd%6
IPv4 Address. . . . . . . . . . . : 10.3.0.4
Subnet Mask . . . . . . . . . . . : 255.255.255.0
Default Gateway . . . . . . . . . : 10.3.0.1
```

It also results in the variable `($)SshLogs` being updated to the following:

```json
{
    "WelcomeMessage": "Last login: Tue Mar  1 06:50:23 2022 from 10.8.0.224",
    "Logs": "[Info] Sending local version: \"SSH-2.0-IPWorks SSH Client 2020\".\r\n[Info] Read remote version string: \"SSH-2.0-OpenSSH_4.7p1 Debian-8ubuntu1.2\".\r\n[Info] Beginning key exchange.[Info] Sending local version: \"SSH-2.0-IPWorks SSH Client 2020\".\r\n[Info] Read remote version string: \"SSH-2.0-OpenSSH_4.7p1 Debian-8ubuntu1.2\".\r\n[Info] Beginning key exchange..."
}
```

Note that more logs are included in this example, but have been omitted from `($)SshLogs.Logs`.

***

### Execute a Command using SshCertificateCredentials

This example will execute a [Command][Command Property] on the server with the following details:

- Host -  `"localhost"`
- Port -  `22`
- Domain - `"domain"`

The server can be connected to using a valid certificate.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command` with value `"ipconfig"` | `($)Command` is a variable of type [EncryptableText][] |
| [Ssh Session Details][Ssh Session Details Property] | `($)SshSessionDetails` with value `{"Host": "localhost", "Port": 22, "Credentials": {"Domain": "domain", "Username": "username", "CertificatePath": "C:\\Certificate.pfx", "CertificatePassword": "encryptedCertificatePassword"}, "TerminalPrompt": "(.*(~(.*[\\r\\n]?)\\$\|>))"}`<br><br>In this example `($)SshSessionDetails` has been set up using the following [Expression][]:<br><br> `new SshSessionDetails("localhost", 22, new SshCertificateCredentials("domain", "username", @"C\Certificate.pfx", "encryptedCertificatePassword"), @"(.*(~(.*[\r\n]?)\$\|>))")`  |  `($)SshSessionDetails` is a variable of type [SshSessionDetails][] |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` | `($)CloseSession` is a variable of type [Boolean][] |
| [Configuration Settings][Configuration Settings Property] | `($)ConfigurationSettings`, with no value | `($)CloseSession` is a variable of type [Dictionary][]&lt;[String][], [EncryptableText][]&gt; |
| [Response][Response Property] | `($)Response`, with no value | `($)Response` will be set to the type [String][] |
| [Ssh Logs][Ssh Logs Property] | `($)SshLogs`, with no value | `($)SshLogs` will be set to the type [SshLogs][] |

#### Result

Running the [Command][Command Property] results in the variable `($)Response` being updated to the following:

```text
Windows IP Configuration

Ethernet adapter Ethernet 3:

Connection-specific DNS Suffix. : reddog.microsoft.com
Link-local IPv6 Address. . . . . : fe80::78eb:a051:2b84:e8bd%6
IPv4 Address. . . . . . . . . . . : 10.3.0.4
Subnet Mask . . . . . . . . . . . : 255.255.255.0
Default Gateway . . . . . . . . . : 10.3.0.1
```

It also results in the variable `($)SshLogs` being updated to the following:

```json
{
    "WelcomeMessage": "Last login: Tue Mar  1 06:50:23 2022 from 10.8.0.224",
    "Logs": "[Info] Sending local version: \"SSH-2.0-IPWorks SSH Client 2020\".\r\n[Info] Read remote version string: \"SSH-2.0-OpenSSH_4.7p1 Debian-8ubuntu1.2\".\r\n[Info] Beginning key exchange.[Info] Sending local version: \"SSH-2.0-IPWorks SSH Client 2020\".\r\n[Info] Read remote version string: \"SSH-2.0-OpenSSH_4.7p1 Debian-8ubuntu1.2\".\r\n[Info] Beginning key exchange..."
}
```

Note that more logs are included in this example, but have been omitted from `($)SshLogs.Logs`.

***

## Properties

### Command

The [Command][Command Property] that will be executed on the [Host][SshSessionDetails Host] specified in the [Ssh Session Details][Ssh Session Details Property].

|||
|----------|----------|
| Data Type | [EncryptableText][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `$@""` |

### Ssh Session Details

The [Ssh Session Details][Ssh Session Details Property] object that includes all of the information required to open and maintain a SSH session. This property contains all of the information in relation to the server the [Command][Command Property] will be executed on, these are:

- [Host][SshSessionDetails Host]
- [Port][SshSessionDetails Port]
- [Credentials][SshSessionDetails Credentials]
- [TerminalPrompt][SshSessionDetails TerminalPrompt]

|||
|----------|----------|
| Data Type | [SshSessionDetails][] |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)SshSessionDetails` with no value |

### Close Session

[Close Session][Close Session Property] can be specified to choose whether the session on the [Host][SshSessionDetails Host] is closed or is kept open for use on subsequent Execute Ssh Command blocks, this defaults to `false` if left blank, please see [Closing Sessions][] for more information.

|||
|----------|----------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value   | [Boolean][] with value `true` |

### Configuration Settings

The [Configuration Settings][Configuration Settings Property] for the SSH connection and execution.

|||
|----------|----------|
| Data Type | [IDictionary][]&lt;[String][], [dynamic][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | [IDictionary][]&lt;[String][], [dynamic][]&gt; with value shown below: |

```csharp
new Dictionary<string, EncryptableText> {
    { "TerminalWidth", "200" },
    { "TerminalType", "vt100" },
    { "Timeout", "60" },
    { "EndOfLineCharacters", "\r" },
    { "CancelCommand", "CtrlC" },
}
```

### Response

The SSH [Response][Response Property] that is returned from the execution of the [Command][Command Property] on the [Host][SshSessionDetails Host] specified in the [Ssh Session Details][Ssh Session Details Property].

|||
|----------|----------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Response` with no value |

### Ssh Logs

The [Ssh Logs][Ssh Logs Property] that is returned from the execution of the [Command][Command Property] on the host specified in the [Ssh Session Details][Ssh Session Details Property]. This property contains all of the information in relation to the logs returned by the [Command][Command Property], these are:

- WelcomeMessage
- Logs

|||
|----------|----------|
| Data Type | [SshLogs][] |
| Property Type | [Output][] |
| Is [Advanced][] | `true` |
| Default Editor | [Variable][] |
| Default Value | `($)SshLogs` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name                                 | Description |
|--------------------------------------|-------------|
| [PropertyNullException][] | Thrown when [Command][Command Property] is `null`. |
|| Thrown when the [Ssh Session Details][Ssh Session Details Property] is `null`. |
|| Thrown when the [Host][SshSessionDetails Host] within the [Ssh Session Details][Ssh Session Details Property] is `null`. |
|| Thrown when the [Credentials][SshSessionDetails Credentials] within the [Ssh Session Details][Ssh Session Details Property] is `null`. |
|| Thrown when using [SshCertificateCredentials][], the CertificatePath in the specified [Credentials][SshSessionDetails Credentials] within the [Ssh Session Details][Ssh Session Details Property] is `null`. |
| [PropertyEmptyException][] | Thrown when the specified [Host][SshSessionDetails Host] within the [Ssh Session Details][Ssh Session Details Property] is empty. |
|| Thrown when the CertificatePath in the specified [Credentials][SshSessionDetails Credentials] within the [Ssh Session Details][Ssh Session Details Property] is empty. |
| [PropertyValueOutOfRangeException][] | Thrown when the specified [Port][SshSessionDetails Port] within the [Ssh Session Details][Ssh Session Details Property] is below 1 or above 65535. |
| [SshClientException][] | Thrown when one or more settings in [Configuration Settings][Configuration Settings Property] are invalid. (includes a dictionary of SettingName: ExceptionMessage from IPWorksSSHSshClientException) |
|| Thrown when the specified [Host][SshSessionDetails Host] within the [Ssh Session Details][Ssh Session Details Property] is invalid. |
|| Thrown when the specified [Port][SshSessionDetails Port] within the [Ssh Session Details][Ssh Session Details Property] is invalid. |
|| Thrown when the server host key has not been accepted. |
|| Thrown when using [UserCredentials][], the specified domain, username or password within [Credentials][SshSessionDetails Credentials] is invalid. |
|| Thrown when using [SshCertificateCredentials][], the specified Domain, Username, CertificatePath or CertificatePassword is invalid. |
|| Thrown when the [Host][SshSessionDetails Host] exits without using [Close Session][Close Session Property], returning the response received up to the point the host exited the session. |
| [SshResponseException][] | Thrown if the specified [TerminalPrompt][SshSessionDetails TerminalPrompt] does not match the terminal prompt on the host causing the execution to timeout or the timeout was too short to allow for data to be received. |
| [RegexMatchTimeoutException][] | Thrown when the execution time of the regular expression pattern-matching exceeds the time-out interval. |
| [RegexParsingFailedException][] | Thrown when [TerminalPrompt][SshSessionDetails TerminalPrompt] within [Ssh Session Details][Ssh Session Details Property] contains invalid regex. |

## Remarks

### Opening Sessions

The Execute Ssh Command block automatically handles creating and opening session for the specified [Ssh Session Details][Ssh Session Details Property] using the following rules:

- If a session does not exist, a new session will be created, opened and used when the block runs.
- If a session already exists but is closed, the session will be opened and used when the block runs.
- If a session already exists and is open, the session will used the block runs.

For information on how to explicitly close a session, please see [Closing Sessions][].

### Closing Sessions

Sessions can be explicitly closed by setting [Close Session][Close Session Property] to `true`. This causes the session to be closed after the [Command][Command Property] has been executed.

For information on how to open a session, please see [Opening Sessions][].

### Known Limitations

None

[Command Property]: {{< ref "#command" >}}
[Ssh Session Details Property]: {{< ref "#ssh-session-details" >}}
[Close Session Property]: {{< ref "#close-session" >}}
[Configuration Settings Property]: {{< ref "#configuration-settings" >}}
[Response Property]: {{< ref "#response" >}}
[Ssh Logs Property]: {{< ref "#ssh-logs" >}}

[Opening Sessions]: {{< ref "#opening-sessions" >}}
[Closing Sessions]: {{< ref "#closing-sessions" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}

[SshCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshCertificateCredentials.MainDoc" >}}

[SshSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.MainDoc" >}}
[SshSessionDetails Host]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.Host" >}}
[SshSessionDetails Port]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.Port" >}}
[SshSessionDetails Credentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.Credentials" >}}
[SshSessionDetails TerminalPrompt]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.TerminalPrompt" >}}

[SshLogs]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshLogs.MainDoc" >}}

[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}
[SshClientException]: {{< url path="Cortex.Reference.Exceptions.Ssh.SshClientException" >}}
[SshResponseException]: {{< url path="Cortex.Reference.Exceptions.Ssh.SshResponseException" >}}
[RegexMatchTimeoutException]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}
[RegexParsingFailedException]: {{< url path="Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
