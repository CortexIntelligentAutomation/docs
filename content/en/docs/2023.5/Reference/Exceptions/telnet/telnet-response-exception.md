---
title: "TelnetResponseException"
linkTitle: "TelnetResponseException"
description: "Exception thrown when an error occurs from the Telnet response."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Telnet.TelnetResponseException)</p>

Exception thrown when an error occurs from the Telnet response.

The reason that this exception can be thrown:

- [Terminal Prompt Match Not Found][TerminalPromptMatchNotFound]

## Reasons

### Terminal Prompt Match Not Found {#100}

A [Category][] of `TelnetSessionDetails.TerminalPrompt` indicates that the [TerminalPrompt][] provided in the [TelnetSessionDetails][] could not be matched in the response returned from the host.

#### Message Format

The format of the [Message][] is as follows:

```json
"The execution has timed-out because either the 'TerminalPrompt' was not found in the response or the timeout was too short to allow for the response to be returned.
Please click the HelpLink for more information on how to fix this."
```

#### How to Fix

Provide a [TerminalPrompt][] regex that will match the terminal prompt returned in the response from the host.

***

## Properties

### Exception Type

The type of the exception (i.e. `TelnetResponseException`)

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

For `TelnetResponseException` there are the following categories:

- `TelnetSessionDetails.TerminalPrompt`

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

## See Also

### Related Data Types

- [TelnetSessionDetails][]

### Related Concepts

- [Exceptions][]

### Related Blocks

- [Execute Telnet Command][]

### External Documentation

None

[TerminalPromptMatchNotFound]: {{< ref "#100">}}
[Message]: {{< ref "#message" >}}
[Category]: {{< ref "#category" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[TelnetSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.MainDoc" >}}
[TerminalPrompt]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.TerminalPrompt" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Execute Telnet Command]: {{< url path="Cortex.Reference.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommand.MainDoc" >}}
