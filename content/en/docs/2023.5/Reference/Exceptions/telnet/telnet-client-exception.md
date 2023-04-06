---
title: "TelnetClientException"
linkTitle: "TelnetClientException"
description: "Exception thrown when an error occurs from the Telnet object."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Telnet.TelnetClientException)</p>

## Description

Exception thrown when an error occurs from the Telnet object.

There are multiple reasons that this exception can be thrown:

- [Invalid Configuration Settings]
- [Invalid Port]
- [Invalid Host]
- [Host Closed The Session]

## Reasons

### Invalid Configuration Settings

A [Category][] of `TelnetClientException` indicates that one or more settings in [ConfigurationSettings] are invalid.

#### Message Format

```json
"'Configuration Settings' contains one or more invalid settings. Please click the HelpLink for more information on how to fix this."
```

#### How to Fix

Provide valid [ConfigurationSettings] with the correct name and type.

***

### Invalid Port

A [Category][] of `TelnetSessionDetails` indicates that the [Port][] provided in the [TelnetSessionDetails][] is invalid.

#### Message Format

```json
"The host has returned status code [700] 'Connection failed: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond. '<host-ip>':'<port-number>'."
```

where:

- `<host-ip>` is the ip address of the host the client is attempting to connect to.
- `<port-number>` is the port which the client is attempting to connect through.

#### How to Fix

Provide a valid [Port][] between the [Int32][] values 1 and 65535 in the [TelnetSessionDetails][] and ensure that the telnet server is up and running without issues and configured to accept connections through the specified port.

***

### Invalid Host

A [Category][] of `TelnetSessionDetails` indicates that the [Host][] provided in the [TelnetSessionDetails][] is invalid.

#### Message Format

```json
"A connection could not be established between the server where the Cortex Flow Execution Service is running ('<server>') and the host.\r\nPlease click the HelpLink for more information on how to fix this."
```

where:

- `<server>` is the server where the Cortex Flow Execution Service is running on.

#### How to Fix

Provide a valid [Host][] in the [TelnetSessionDetails][].

***

### Host Closed The Session

A [Category][] of `TelnetSessionDetails.Host` indicates that the [Host][] provided has closed the session without using [CloseSession]. The response [link?] received up to the point the host exited the session will be returned.

#### Message Format

```json
"The 'Host' '<host>' has closed the session. Any subsequent commands run on the session will result in a new one being created.\r\nPlease click the HelpLink for more information on how to fix this."
```

where:

- `<host>` - the address of the telnet server that the telnet session was opened with.

#### How to Fix

Check the [Host] telnet server is running and not configured to exit.....

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

- `TelnetClientException`
- `TelnetSessionDetails`
- `TelnetSessionDetails.Host`

| | |
|-----------|------------|
| Data Type | [String][] |






[Invalid Configuration Settings]: {{< ref "#invalid-configuration-settings">}}
[Invalid Port]: {{< ref "#invalid-port">}}
[Invalid Host]: {{< ref "#invalid-host">}}
[Host Closed The Session]: {{< ref "#host-closed-the-session">}}






[Category]: {{< ref "#category" >}}


[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}


[TelnetSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.MainDoc" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Port" >}}
[Host]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Host" >}}

[ConfigurationSettings]: {{< url path="Cortex.Reference.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommand.ConfigurationSettings" >}}
[CloseSession]: {{< url path="Cortex.Reference.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommand.CloseSession" >}}