---
title: "SshResponseException"
linkTitle: "SshResponseException"
description: "Exception thrown when an error occurs from the Ssh response."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Ssh.SshResponseException)</p>

## Description

Exception thrown when an error occurs from the Ssh response.

The reason that this exception can be thrown:

- [Terminal Prompt Match Not Found][TerminalPromptMatchNotFound]

## Reasons

### Terminal Prompt Match Not Found {#100}

A [Category][] of `SshSessionDetails.TerminalPrompt` indicates that the [TerminalPrompt][] provided in the [SshSessionDetails][] could not be matched in the response returned from the host.

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

The type of the exception (i.e. `SshResponseException`)

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

For `SshResponseException` there are the following categories:

- `SshSessionDetails.TerminalPrompt`

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

- [SshSessionDetails][]

### Related Concepts

- [Exceptions][]

### Related Blocks

- [Execute Ssh Command][]

### External Documentation

None

[TerminalPromptMatchNotFound]: {{< ref "#100">}}
[Message]: {{< ref "#message" >}}
[Category]: {{< ref "#category" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[SshSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.MainDoc" >}}
[TerminalPrompt]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.TerminalPrompt" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Execute Ssh Command]: {{< url path="Cortex.Reference.Blocks.Ssh.ExecuteSshCommand.ExecuteSshCommand.MainDoc" >}}
