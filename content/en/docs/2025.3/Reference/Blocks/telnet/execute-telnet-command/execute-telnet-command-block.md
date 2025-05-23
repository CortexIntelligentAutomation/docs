---
title: "Execute Telnet Command"
linkTitle: "Execute Telnet Command"
description: "Executes a Telnet command on the specified host."
---

{{< figure src="/blocks/Cortex_Blocks_Telnet_ExecuteTelnetCommand_ExecuteTelnetCommandBlock.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommandBlock)</p>

{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future; this will include further examples and remarks.{{% /alert %}}

## Description

Connects to a host using the [Telnet Session Details][Telnet Session Details Property], and executes a [Command][Command Property], returning the [Response][Response Property] and [Telnet Logs][Telnet Logs Property].

[Close Session][Close Session Property] can be specified to choose whether the session on the [Host] is closed or is kept open for use on subsequent Execute Telnet Command blocks.

## Examples

### Execute a Command

This example will execute a [Command][Command Property] on the server with the following details:

- [Host] -  `"localhost"`
- [Port] -  `23`

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command` with value `"ipconfig"` | `($)Command` is a variable of type [EncryptableText][] |
| [Telnet Session Details][Telnet Session Details Property] | `($)TelnetSessionDetails` with value `{"Host": "localhost", "Port": 23, "TerminalPrompt": "(.*(~(.*[\r\n]?)\$\|>))"}`<br><br>In this example `($)TelnetSessionDetails` has been set up using the following [Expression][]:<br><br> `new TelnetSessionDetails("localhost", 23, @"(.*(~(.*[\r\n]?)\$\|>))")`  |  `($)TelnetSessionDetails` is a variable of type [TelnetSessionDetails][] |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` | `($)CloseSession` is a variable of type [Boolean][] |
| [Configuration Settings][Configuration Settings Property] | `($)ConfigurationSettings`, with no value | `($)ConfigurationSettings` is a variable of type [Dictionary][]&lt;[String][], [EncryptableText][]&gt; |
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
    "WelcomeMessage": "Welcome to Microsoft Telnet Server.",
    "TerminalPromptMatch": "C:/Users/TelnetUser>",
    "Logs": "[Info] Connecting to Localhost.\r\n[Info] Connected to LocalHost.\r\n[Info] Welcome message received.\r\n[Info] Command sent.\r\n[Info] Terminal Prompt found.\r\n[Info] Disconnected from Localhost."
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

For a full list of configuration settings please see [TelnetConfigurationSettings][].

|||
|----------|----------|
| Data Type | [IDictionary][]&lt;[String][], [EncryptableText][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | [IDictionary][]&lt;[String][], [EncryptableText][]&gt; with value shown below: |

```csharp
new Dictionary<string, EncryptableText> {
    { "Timeout", "60" },
    { "EndOfLineCharacters", "\r\n" },
    { "CancelCommand", "CtrlC" },
    { "ControlCharactersToClean", @"\e([^\[\]]|\[.*?[a-zA-Z]|\].*?\a)(g?)|[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]" },
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

The [Telnet Logs][Telnet Logs Property] that are returned from the execution of the [Command][Command Property] on the host specified in the [Telnet Session Details][Telnet Session Details Property]. This property contains all of the information in relation to the logs returned by the [Command][Command Property], these are:

- [WelcomeMessage]
- [TerminalPromptMatch]
- [Logs]

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
| [PropertyEmptyException][] | Thrown when the specified [Host][TelnetSessionDetails Host] within the [Telnet Session Details][Telnet Session Details Property] is empty. |
| [PropertyValueOutOfRangeException][] | Thrown when the specified [Port][TelnetSessionDetails Port] within the [Telnet Session Details][Telnet Session Details Property] is below 1 or above 65535. |
| [TelnetClientException][] | Thrown when one or more settings in [Configuration Settings][Configuration Settings Property] are invalid. (includes a dictionary of SettingName: ExceptionMessage from IPWorksTelnetException) |
|| Thrown when the specified [Host][TelnetSessionDetails Host] within the [Telnet Session Details][Telnet Session Details Property] is invalid. |
|| Thrown when the specified [Port][TelnetSessionDetails Port] within the [Telnet Session Details][Telnet Session Details Property] is invalid. |
| [TelnetServerException][] | Thrown when the [Host][TelnetSessionDetails Host] exits without using [Close Session][Close Session Property], returning the response received up to the point the host exited the session. |
| [RegexMatchTimeoutException][] | Thrown when the execution time of the regular expression pattern-matching exceeds the time-out interval. |
| [RegexParsingFailedException][] | Thrown when [TerminalPrompt][TelnetSessionDetails TerminalPrompt] within [Telnet Session Details][Telnet Session Details Property] contains invalid regex. |

## Remarks

### Empty Command

If the [Command][Command Property] is empty, it will act as an enter command on the terminal.

### Null or Empty Terminal Prompt

If the [TerminalPrompt] is null or empty then it defaults to `(.*(~(.*[\r\n]?)\$|>))` (Windows and Linux friendly default).

### Terminal Prompt Match

The [TerminalPromptMatch] in the [TelnetLogs] will output the exact terminal prompt that was matched by the [TerminalPrompt] regex.

### Telnet Response

The response will contain all output after the [Command][Command Property] and before the next terminal prompt.

Control characters are removed from the response.

For Windows machines before Windows Server 2019 or Windows 10 (build 1809) using Telnet Server, the returned data comes back in an less usable format.

### Default Telnet Port

The default port is 23.

### Opening Sessions

The Execute Telnet Command block automatically handles creating and opening a session for the specified [Telnet Session Details][Telnet Session Details Property] using the following rules:

- If a session does not exist, a new session will be created, opened and used when the block runs.
- If a session already exists but is closed, the session will be opened and used when the block runs.
- If a session already exists and is open, the session will be used when the block runs.

For information on how to explicitly close a session, please see [Closing Sessions][].

### Closing Sessions

Sessions can be explicitly closed by setting [Close Session][Close Session Property] to `true`. This causes the session to be closed after the [Command][Command Property] has been executed.

For information on how to open a session, please see [Opening Sessions][].

### Inactivity Timeout

The inactivity timeout specifies the number of seconds after which to timeout. This is reset every time new data is received.

Timeout must be a positive [Int32] integer and smaller or equal to [Int32.MaxValue][] (`2147483647`), otherwise a [TelnetResponseException] will be thrown.

The default inactivity timeout is 60 seconds.

To change the default inactivity timeout, use the `Timeout` [Configuration Settings][Configuration Settings Property] e.g.

```csharp
new Dictionary<string, EncryptableText> 
{
    { "Timeout", "10"},
}
```

### Terminal Type

The default terminal type is set by the [Host].

To change the default terminal type, use the `TerminalType` [Configuration Settings][Configuration Settings Property] e.g.

```csharp
new Dictionary<string, EncryptableText> 
{
    { "TerminalType", "vt100"},
}
```

### Terminal Window Size

The default terminal window size is set by the [Host].

To change the terminal window size, use the `TerminalWidth` and `TerminalHeight` [Configuration Settings][Configuration Settings Property] e.g.

```csharp
new Dictionary<string, EncryptableText> 
{
    { "TerminalWidth", "500"},
    { "TerminalHeight", "50"},
}
```

If `TerminalWidth` is set but not `TerminalHeight`, `TerminalHeight` defaults to 50.

If `TerminalHeight` is set but not `TerminalWidth`, `TerminalWidth` defaults to 500.

Depending on the [Host] you are connecting to, the values supported for `TerminalWidth` and `TerminalHeight` may differ. If values provided are invalid the host may return a response stating such.

`TerminalWidth` and `TerminalHeight` must be positive [Int32] integers and smaller or equal to [Int32.MaxValue][] (`2147483647`), otherwise a [TelnetClientException] will be thrown.

### End Of Line Characters

On certain hosts it is required to send one or more characters e.g. `\r` or `\r\n` after each command. End of line characters can be used to achieve this and are automatically appended to the [Command][Command Property].

The default end of line characters are `\r\n`, which on most systems will ensure that the [Command][Command Property] is executed. If the default does not work it can be set through the [Configuration Settings][Configuration Settings Property] using the `EndOfLineCharacters` setting e.g.

```csharp
new Dictionary<string, EncryptableText> 
{
    { "EndOfLineCharacters", "\r\n"},
}
```

If an invalid value is provided the [Command][Command Property] will not be executed and will timeout after the [Inactivity Timeout][] has been reached.

### Handling Commands That Return Interactive Prompts

Some commands can return interactive prompts (e.g. `press enter for more...`). In these cases, you must set the [TerminalPrompt][] within [SessionDetails][Telnet Session Details Property] to match the prompt which requires interaction, as well as the end of response prompt (e.g `press enter for more\.\.\.|(.*(~(.*[\r\n]?)\$|>))`). The [TerminalPromptMatch][] within the [TelnetLogs][] can then be used to determine whether the full response has been returned or not; if not, further commands need to be sent to continue receiving the response.

### Do, Dont, Will and Wont Options

Do, Dont, Will and Wont codes allows negotiation between the client and the telnet server of options for the telnet connection.

They are set as a semicolon separated list in the [Configuration Settings][Configuration Settings Property] with each as a key e.g

```csharp
new Dictionary<string, EncryptableText> 
{
    { "Do", "0;1"},
}
```

The above example shows how to enable the [echo option][] and [binary transmission option][]. For a full list of Do, Dont, Will and Wont codes please see [Telnet Options][].

### Configuration Settings

[Configuration Settings][Configuration Settings Property] are in PascalCase (e.g. `CloseStreamAfterTransfer`).

For a full list of configuration settings please see [TelnetConfigurationSettings][].

### Cancel Command

The cancel command is sent to the [Host][TelnetSessionDetails Host] by {{% ctx %}} when an execution times out so the [Host][TelnetSessionDetails Host] can stop the execution and allow other commands to be executed on that session.

The default cancel command is `Ctrl-C`. If the default does not work it can be set through the [Configuration Settings][Configuration Settings Property] using the `CancelCommand` setting e.g.

```csharp
 new Dictionary<string, EncryptableText> 
{
   { "CancelCommand", "CtrlC" },
}
```

The supported cancel commands are: `CtrlA`, `CtrlB`, `CtrlC`,`CtrlD`,`CtrlE`,`CtrlF`,`CtrlG`,`CtrlH`,`CtrlI`,`CtrlJ`,`CtrlK`,`CtrlL`,`CtrlM`,`CtrlN`,`CtrlO`,`CtrlP`,`CtrlQ`,`CtrlR`,`CtrlS`,`CtrlT`,`CtrlU`,`CtrlV`,`CtrlW`,`CtrlX`,`CtrlY`,`CtrlZ`,`Ctrl[`,`Ctrl\`,`Ctrl]`,`Ctrl^`,`Ctrl_`.

The above commands are also case insensitive and can be in various formats (e.g. `CtrlA` can also be specified as `ctrlA`, `Ctrl-A`, `Ctrl+A`).

If `CancelCommand` is empty then its not sent to the host.

### Proxies

Communication via a proxy can be achieved through the following  [Configuration Settings][Configuration Settings Property]:

- [FirewallType][TelnetFirewallTypes] - The type of proxy to connect through (required).
- [FirewallHost][TelnetFirewallHost] - The name or IP address of the proxy (required).
- [FirewallPort][TelnetFirewallPort] - The TCP port of the proxy (optional). The default depends on the [FirewallType][TelnetFirewallTypes] specified.
- [FirewallUser][TelnetFirewallUser] - The username to use if the proxy requires authentication (optional).
- [FirewallPassword][TelnetFirewallPassword] - The password to use if the proxy requires authentication (optional).

The below example shows how to connect through a SOCKS5 proxy (`3`) hosted on `FirewallHost.com` and on port `1080`.

```csharp
 new Dictionary<string, EncryptableText> 
 {
   { "FirewallHost", "FirewallHost.com" },
   { "FirewallType", "3" },
   { "FirewallPort", "1080" },
}
```

### Known Limitations

None

[Command Property]: {{< ref "#command" >}}
[Telnet Session Details Property]: {{< ref "#telnet-session-details" >}}
[Close Session Property]: {{< ref "#close-session" >}}
[Configuration Settings Property]: {{< ref "#configuration-settings" >}}
[Response Property]: {{< ref "#response" >}}
[Telnet Logs Property]: {{< ref "#telnet-logs" >}}

[Opening Sessions]: {{< ref "#opening-sessions" >}}
[Closing Sessions]: {{< ref "#closing-sessions" >}}
[Configuration Settings]: {{< ref "#configuration-settings" >}}
[Inactivity Timeout]: {{< ref "#inactivity-timeout" >}}
[Terminal Type]: {{< ref "#terminal-type" >}}
[Command]: {{< ref "#configuration-settings" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}

[TelnetSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.MainDoc" >}}
[TelnetSessionDetails Host]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Host" >}}
[TelnetSessionDetails Port]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Port" >}}
[TelnetSessionDetails TerminalPrompt]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.TerminalPrompt" >}}
[Host]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Host" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Port" >}}
[Logs]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetLogs.Logs" >}}
[WelcomeMessage]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetLogs.WelcomeMessage" >}}
[TerminalPromptMatch]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetLogs.TerminalPromptMatch" >}}

[TelnetLogs]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetLogs.MainDoc" >}}

[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int32.MaxValue]: {{< url path="MSDocs.DotNet.Api.System.Int32.MaxValue" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}
[RegexMatchTimeoutException]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}
[RegexParsingFailedException]: {{< url path="Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}
[TerminalPrompt]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.TerminalPrompt" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Telnet Options]: {{< url path="RFC.Docs.Telnet.Options.MainDoc" >}}
[echo option]: {{< url path="RFC.Docs.Telnet.Options.Echo" >}}
[binary transmission option]: {{< url path="RFC.Docs.Telnet.Options.BinaryTransmission" >}}
[TelnetConfigurationSettings]: {{< url path="IPWorks.TelnetConfigurationSettings" >}}
[TelnetFirewallTypes]: {{< url path="IPWorks.TelnetFirewallTypes" >}}
[TelnetFirewallHost]: {{< url path="IPWorks.TelnetFirewallHost" >}}
[TelnetFirewallPort]: {{< url path="IPWorks.TelnetFirewallPort" >}}
[TelnetFirewallUser]: {{< url path="IPWorks.TelnetFirewallUser" >}}
[TelnetFirewallPassword]: {{< url path="IPWorks.TelnetFirewallPassword" >}}
[TelnetServerException]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetServerException.MainDoc" >}}
[TelnetClientException]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetClientException.MainDoc" >}}
