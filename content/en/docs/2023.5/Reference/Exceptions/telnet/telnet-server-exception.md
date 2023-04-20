---
title: "TelnetServerException"
linkTitle: "TelnetServerException"
description: "The exception thrown when an issue occurs on the Telnet server."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Telnet.TelnetServerException)</p>

## Description

The exception thrown when an issue occurs on the telnet server.

There is one reason that this exception can be thrown:

- [Host Disconnected][HostDisconnected]

## Reasons

### Host Disconnected {#100}

A [Category][] of `TelnetSession` and an [ErrorCode][] of `100` indicates that the [Host][] provided has disconnected from the session without using [CloseSession]. The [Response] received up to the point the [Host][] disconnected the session will be returned.

#### Message Format

```json
"The 'Host' \"<host>\" has closed the session. Any subsequent commands run on the session will result in a new one being created. 
Please click the HelpLink for more information on how to fix this."
```

where:

- `<host>` is the address of the telnet server that the telnet session was opened with.

#### How to Fix

Check the [Host] telnet server is running. If it is running please check you haven't sent it an `exit` command, as this will cause the exception. If the exception persists please troubleshoot common reasons for telnet servers disconnecting.

***

## Properties

### Exception Type

The type of the exception (i.e. `TelnetServerException`)

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Category

The category of the exception, which is used to categorise an exception.

For `TelnetServerException` there is the following category:

- `TelnetSession`

| | |
|-----------|------------|
| Data Type | [String][] |

### Error Code

The error code for the exception, which is used to indicate the reason that the exception occurred.

For `EmailSessionException` there is the following error code:

- [100][HostDisconnected] - indicates that the [Host][] provided has disconnected from the session without using [CloseSession].

| | |
|-----------|---------------------------|
| Data Type | [TelnetServerErrorCode][] |

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
- [TelnetServerErrorCode][]
- [String][]

### Related Concepts

- [Exceptions][]

### Related Blocks

- [Execute Telnet Command][]

### External Documentation

None

[HostDisconnected]: {{< ref "#100">}}
[ErrorCode]: {{< ref "#error-code" >}}
[Category]: {{< ref "#category" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Host]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Host" >}}
[Response]: {{< url path="Cortex.Reference.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommand.Response" >}}

[CloseSession]: {{< url path="Cortex.Reference.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommand.CloseSession" >}}
[TelnetSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Execute Telnet Command]: {{< url path="Cortex.Reference.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommand.MainDoc" >}}
[TelnetServerErrorCode]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetServerErrorCode.MainDoc" >}}

[IpWorksTelnetErrorCodes]: {{< url path="IPWorks.TelnetErrors" >}}