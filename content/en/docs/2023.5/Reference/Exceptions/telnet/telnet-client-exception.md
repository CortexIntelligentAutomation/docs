---
title: "TelnetClientException"
linkTitle: "TelnetClientException"
description: "The exception thrown when an issue occurs from the Telnet Client configurations."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Telnet.TelnetClientException)</p>

## Description

Exception thrown when an error occurs from the Telnet object.

There are multiple reasons that this exception can be thrown:

- [Invalid Host]
- [Invalid Port]
- [Invalid Terminal Prompt]
- [Invalid Configuration Settings]

## Reasons

### Invalid Host {#100}

A [Category][] of `TelnetSessionDetails` and an [ErrorCode][] of `100` indicates that the [Host][] provided in the [TelnetSessionDetails][] is invalid.

#### Message Format

```json
"A connection could not be established between the server where the Cortex Flow Execution Service is running (\"<server>\") and the host.
Please click the HelpLink for more information on how to fix this."
```

where:

- `<server>` is the server where the Cortex Flow Execution Service is running on.

#### How to Fix

Provide a valid [Host][] in the [TelnetSessionDetails][].

***

### Invalid Port {#101}

A [Category][] of `TelnetSessionDetails` and an [ErrorCode][] of `101` indicates that the [Port][] provided in the [TelnetSessionDetails][] is invalid.

### Message Format

```json
"A connection could not be established between the server where the Cortex Flow Execution Service is running (\"<server>\") and the host.
Please click the HelpLink for more information on how to fix this."
```

where:

- `<server>` is the server where the Cortex Flow Execution Service is running on.

#### How to Fix

Provide a valid [Port][] between the [Int32][] values 1 and 65535 in the [TelnetSessionDetails][] and ensure that the telnet server is up and running without issues and configured to accept connections through the specified port.

***

### Invalid Terminal Prompt {#102}

A [Category][] of `TelnetSessionDetails`and an [ErrorCode][] of `102` indicates that the [TerminalPrompt][] provided in the [TelnetSessionDetails][] could not be matched in the response returned from the [Host][].

#### Message Format

```json
"The execution has timed-out because either the 'TerminalPrompt' was not found in the response or the timeout was too short to allow for the response to be returned.
Please click the HelpLink for more information on how to fix this."
```

#### How to Fix

Provide a [TerminalPrompt][] regex that will match the terminal prompt returned in the response from the [Host][].

***

### Invalid Configuration Settings {#200}

A [Category][] of `ConfigurationSettings`and an [ErrorCode][] of `200` indicates that one or more settings in [ConfigurationSettings] are invalid.

#### Message Format

```json
"'Configuration Settings' contains one or more invalid settings.
Please click the HelpLink for more information on how to fix this."
```

#### How to Fix

Provide valid [ConfigurationSettings] with the correct name and value.

***

## Properties

### Exception Type

The type of the exception (i.e. `TelnetClientException`)

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Category

The category of the exception, which is used to categorise an exception if there are multiple reasons that the exception can occur.

For `TelnetClientException` there are the following categories:

- `TelnetSessionDetails`
- `ConfigurationSettings`

### Error Code

The error code for the exception, which is used to indicate the reason that the exception occurred, if there are multiple reasons that the exception can occur.

For `TelnetClientException` there are the following error codes:

- [100][Invalid Host] - indicates that the [Host][] provided in the [TelnetSessionDetails][] is invalid.
- [101][Invalid Port] - indicates that the [Port][] provided in the [TelnetSessionDetails][] is invalid.
- [102][Invalid Terminal Prompt] - indicates that the [TerminalPrompt][] provided in the [TelnetSessionDetails][] could not be matched in the response returned from the [Host][].
- [200][Invalid Configuration Settings] - indicates that one or more settings in [ConfigurationSettings] are invalid.

| | |
|-----------|---------------------------|
| Data Type | [TelnetClientErrorCode][] |

| | |
|-----------|------------|
| Data Type | [String][] |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

None

### Related Data Types

- [TelnetSessionDetails][]
- [TelnetClientErrorCode][]
- [Int32][]
- [String][]

### Related Concepts

- [Exceptions][]

### Related Blocks

- [Execute Telnet Command Block]

### External Documentation

- IPWorks Telnet Error Codes: [IpWorksTelnetErrorCodes]

[Invalid Configuration Settings]: {{< ref "#200">}}
[Invalid Terminal Prompt]: {{< ref "#102">}}
[Invalid Port]: {{< ref "#101">}}
[Invalid Host]: {{< ref "#100">}}

[Category]: {{< ref "#category" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[ErrorCode]: {{< ref "#error-code" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Host]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Host" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Port" >}}
[TelnetSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.MainDoc" >}}
[TerminalPrompt]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.TerminalPrompt" >}}
[ConfigurationSettings]: {{< url path="Cortex.Reference.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommand.ConfigurationSettings" >}}
[Execute Telnet Command Block]: {{< url path="Cortex.Reference.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommand.MainDoc" >}}
[TelnetClientErrorCode]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetClientErrorCode.MainDoc" >}}

[IpWorksTelnetErrorCodes]: {{< url path="IPWorks.TelnetErrors" >}}
