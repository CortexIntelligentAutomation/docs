---
title: "Execute Telnet Command"
linkTitle: "Execute Telnet Command"
description: "Executes a Telnet command on the specified host."
---

{{< figure src="/blocks/execute-telnet-command-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">("Cortex.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommandBlock)</p>

{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future; this will include further examples and remarks.{{% /alert %}}

## Description

Connects to a host using the [Telnet Session Details][Telnet Session Details Property], and executes a [Command][Command Property], returning the [Response][Response Property] and [Telnet Logs][Telnet Logs Property].

[Close Session][Close Session Property] can be specified to choose whether the session on the host is closed or is kept open for use on subsequent Execute Telnet Command blocks.

## Examples

### Execute a Command using UserCredentials

This example will execute a [Command][Command Property] on the server with the following details:

- Host -  `"localhost"`
- Port -  `23`

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command` with value `"ipconfig"` | `($)Command` is a variable of type [EncryptableText][] |
| [Telnet Session Details][Telnet Session Details Property] | `($)TelnetSessionDetails` with value `{"Host": "localhost", "Port": 23, "TerminalPrompt": "(.*(~(.*[\\r\\n]?)\\$\|>))"}`<br><br>In this example `($)TelnetSessionDetails` has been set up using the following [Expression][]:<br><br> `new TelnetSessionDetails("localhost", 23, @"(.*(~(.*[\r\n]?)\$\|>))")`  |  `($)TelnetSessionDetails` is a variable of type [TelnetSessionDetails][] |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` | `($)CloseSession` is a variable of type [Boolean][] |
| [Configuration Settings][Configuration Settings Property] | `($)ConfigurationSettings`, with no value | `($)CloseSession` is a variable of type [Dictionary][]&lt;[String][], [EncryptableText][]&gt; |
| [Response][Response Property] | `($)Response`, with no value | `($)Response` will be set to the type [String][] |
| [Telnet Logs][Telnet Logs Property] | `($)TelnetLogs`, with no value | `($)TelnetLogs` will be set to the type [TelnetLogs][] |

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

It also results in the variable `($)TelnetLogs` being updated to the following:

```json
{
    "WelcomeMessage": "Last login: Tue Mar  1 06:50:23 2023 from 10.8.0.234",
    "Logs": "[Info] Sending local version: \"Telnet-2.0-IPWorks Telnet Client 2020\".\r\n[Info] Read remote version string: \"Telnet-2.0-OpenTelnet_4.7p1 Debian-8ubuntu1.2\".\r\n[Info] Beginning key exchange.[Info] Sending local version: \"Telnet-2.0-IPWorks Telnet Client 2020\".\r\n[Info] Read remote version string: \"Telnet-2.0-OpenTelnet_4.7p1 Debian-8ubuntu1.2\".\r\n[Info] Beginning key exchange..."
}
```

Note that more logs are included in this example, but have been omitted from `($)TelnetLogs.Logs`.

***

### Execute a Command using TelnetCertificateCredentials

This example will execute a [Command][Command Property] on the server with the following details:

- Host -  `"localhost"`
- Port -  `23`
- Domain - `"domain"`

The server can be connected to using a valid certificate.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command` with value `"ipconfig"` | `($)Command` is a variable of type [EncryptableText][] |
| [Telnet Session Details][Telnet Session Details Property] | `($)TelnetSessionDetails` with value `{"Host": "localhost", "Port": 23, "Credentials": {"Domain": "domain", "Username": "username", "CertificatePath": "C:\\Certificate.pfx", "CertificatePassword": "encryptedCertificatePassword"}, "TerminalPrompt": "(.*(~(.*[\\r\\n]?)\\$\|>))"}`<br><br>In this example `($)TelnetSessionDetails` has been set up using the following [Expression][]:<br><br> `new TelnetSessionDetails("localhost", 23, new TelnetCertificateCredentials("domain", "username", @"C\Certificate.pfx", "encryptedCertificatePassword"), @"(.*(~(.*[\r\n]?)\$\|>))")`  |  `($)TelnetSessionDetails` is a variable of type [TelnetSessionDetails][] |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` | `($)CloseSession` is a variable of type [Boolean][] |
| [Configuration Settings][Configuration Settings Property] | `($)ConfigurationSettings`, with no value | `($)CloseSession` is a variable of type [Dictionary][]&lt;[String][], [EncryptableText][]&gt; |
| [Response][Response Property] | `($)Response`, with no value | `($)Response` will be set to the type [String][] |
| [Telnet Logs][Telnet Logs Property] | `($)TelnetLogs`, with no value | `($)TelnetLogs` will be set to the type [TelnetLogs][] |

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

It also results in the variable `($)TelnetLogs` being updated to the following:

```json
{
    "WelcomeMessage": "Last login: Tue Mar  1 06:50:23 2023 from 10.8.0.234",
    "Logs": "[Info] Sending local version: \"Telnet-2.0-IPWorks Telnet Client 2020\".\r\n[Info] Read remote version string: \"Telnet-2.0-OpenTelnet_4.7p1 Debian-8ubuntu1.2\".\r\n[Info] Beginning key exchange.[Info] Sending local version: \"Telnet-2.0-IPWorks Telnet Client 2020\".\r\n[Info] Read remote version string: \"Telnet-2.0-OpenTelnet_4.7p1 Debian-8ubuntu1.2\".\r\n[Info] Beginning key exchange..."
}
```

Note that more logs are included in this example, but have been omitted from `($)TelnetLogs.Logs`.

***

## Properties

### Command

The [Command][Command Property] that will be executed on the [Host][TelnetSessionDetails Host] specified in the [Telnet Session Details][Telnet Session Details Property].

|||
|----------|----------|
| Data Type | [EncryptableText][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `$@""` |

### Telnet Session Details

The [Telnet Session Details][Telnet Session Details Property] object that includes all of the information required to open and maintain a Telnet session. This property contains all of the information in relation to the server the [Command][Command Property] will be executed on, these are:

- [Host][TelnetSessionDetails Host]
- [Port][TelnetSessionDetails Port]
- [Credentials][TelnetSessionDetails Credentials]
- [TerminalPrompt][TelnetSessionDetails TerminalPrompt]

|||
|----------|----------|
| Data Type | [TelnetSessionDetails][] |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)TelnetSessionDetails` with no value |

### Close Session

[Close Session][Close Session Property] can be specified to choose whether the session on the [Host][TelnetSessionDetails Host] is closed or is kept open for use on subsequent Execute Telnet Command blocks, this defaults to `false` if left blank, please see [Closing Sessions][] for more information.

|||
|----------|----------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value   | [Boolean][] with value `true` |

### Configuration Settings

The [Configuration Settings][Configuration Settings Property] for the Telnet connection and execution.

|||
|----------|----------|
| Data Type | [IDictionary][]&lt;[String][], [dynamic][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | [IDictionary][]&lt;[String][], [dynamic][]&gt; with value shown below: |

```csharp
new Dictionary<string, dynamic> {
    { "TerminalWidth", 200 },
    { "TerminalType", "vt100" },
    { "Timeout", 60 },
    { "EndOfLineCharacters", "\r" },
    { "CancelCommand", "\x03" },
}
```

### Response

The Telnet [Response][Response Property] that is returned from the execution of the [Command][Command Property] on the [Host][TelnetSessionDetails Host] specified in the [Telnet Session Details][Telnet Session Details Property].

|||
|----------|----------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Response` with no value |

### Telnet Logs

The [Telnet Logs][Telnet Logs Property] that is returned from the execution of the [Command][Command Property] on the host specified in the [Telnet Session Details][Telnet Session Details Property]. This property contains all of the information in relation to the logs returned by the [Command][Command Property], these are:

- WelcomeMessage
- Logs

|||
|----------|----------|
| Data Type | [TelnetLogs][] |
| Property Type | [Output][] |
| Is [Advanced][] | `true` |
| Default Editor | [Variable][] |
| Default Value | `($)TelnetLogs` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name                                 | Description |
|--------------------------------------|-------------|
| [PropertyNullException][] | Thrown when [Command][Command Property] is `null`. |
|| Thrown when the [Telnet Session Details][Telnet Session Details Property] is `null`. |
|| Thrown when the [Host][TelnetSessionDetails Host] within the [Telnet Session Details][Telnet Session Details Property] is `null`. |
|| Thrown when the [Credentials][TelnetSessionDetails Credentials] within the [Telnet Session Details][Telnet Session Details Property] is `null`. |
|| Thrown when using [TelnetCertificateCredentials][], the CertificatePath in the specified [Credentials][TelnetSessionDetails Credentials] within the [Telnet Session Details][Telnet Session Details Property] is `null`. |
| [PropertyEmptyException][] | Thrown when the specified [Host][TelnetSessionDetails Host] within the [Telnet Session Details][Telnet Session Details Property] is empty. |
|| Thrown when the CertificatePath in the specified [Credentials][TelnetSessionDetails Credentials] within the [Telnet Session Details][Telnet Session Details Property] is empty. |
| [PropertyValueOutOfRangeException][] | Thrown when the specified [Port][TelnetSessionDetails Port] within the [Telnet Session Details][Telnet Session Details Property] is below 1 or above 65535. |
| [TelnetClientException][] | Thrown when one or more settings in [Configuration Settings][Configuration Settings Property] are invalid. (includes a dictionary of SettingName: ExceptionMessage from IPWorksTelnetTelnetClientException) |
|| Thrown when the specified [Host][TelnetSessionDetails Host] within the [Telnet Session Details][Telnet Session Details Property] is invalid. |
|| Thrown when the specified [Port][TelnetSessionDetails Port] within the [Telnet Session Details][Telnet Session Details Property] is invalid. |
|| Thrown when the server host key has not been accepted. |
|| Thrown when using [UserCredentials][], the specified domain, username or password within [Credentials][TelnetSessionDetails Credentials] is invalid. |
|| Thrown when using [TelnetCertificateCredentials][], the specified Domain, Username, CertificatePath or CertificatePassword is invalid. |
|| Thrown when the [Host][TelnetSessionDetails Host] exits without using [Close Session][Close Session Property], returning the response received up to the point the host exited the session. |
| [TelnetResponseException][] | Thrown if the specified [TerminalPrompt][TelnetSessionDetails TerminalPrompt] does not match the terminal prompt on the host causing the execution to timeout or the timeout was too short to allow for data to be received. |
| [RegexMatchTimeoutException][] | Thrown when the execution time of the regular expression pattern-matching exceeds the time-out interval. |
| [RegexParsingFailedException][] | Thrown when [TerminalPrompt][TelnetSessionDetails TerminalPrompt] within [Telnet Session Details][Telnet Session Details Property] contains invalid regex. |

## Remarks

### Opening Sessions

The Execute Telnet Command block automatically handles creating and opening session for the specified [Telnet Session Details][Telnet Session Details Property] using the following rules:

- If a session does not exist, a new session will be created, opened and used when the block runs.
- If a session already exists but is closed, the session will be opened and used when the block runs.
- If a session already exists and is open, the session will used the block runs.

For information on how to explicitly close a session, please see [Closing Sessions][].

### Closing Sessions

Sessions can be explicitly closed by setting [Close Session][Close Session Property] to `true`. This causes the session to be closed after the [Command][Command Property] has been executed.

For information on how to open a session, please see [Opening Sessions][].

### Using the TerminalPromptMatch Within TelnetLogs to Reach the End of a Prompt

[TelnetLogs][] includes a TerminalPromptMatch property that represents any string within the returned logs that matches the TerminalPrompt property within the [TelnetSessionDetails][].

Some prompts within Telnet require multiple interactions before reaching the end of the prompt. The TerminalPromptMatch can be used to make decisions or loop within a flow sending further iput to the Telnet Command to navigate to the end of the prompt.

### Known Limitations

None

[Command Property]: {{< ref "#command" >}}
[Telnet Session Details Property]: {{< ref "#Telnet-session-details" >}}
[Close Session Property]: {{< ref "#close-session" >}}
[Configuration Settings Property]: {{< ref "#configuration-settings" >}}
[Response Property]: {{< ref "#response" >}}
[Telnet Logs Property]: {{< ref "#Telnet-logs" >}}

[Opening Sessions]: {{< ref "#opening-sessions" >}}
[Closing Sessions]: {{< ref "#closing-sessions" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}

[TelnetSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.MainDoc" >}}
[TelnetSessionDetails Host]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Host" >}}
[TelnetSessionDetails Port]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Port" >}}
[TelnetSessionDetails TerminalPrompt]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.TerminalPrompt" >}}

[TelnetLogs]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetLogs.MainDoc" >}}

[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}
[TelnetClientException]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetClientException" >}}
[TelnetResponseException]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetResponseException" >}}
[RegexMatchTimeoutException]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}
[RegexParsingFailedException]: {{< url path="Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.UsingVariables.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
