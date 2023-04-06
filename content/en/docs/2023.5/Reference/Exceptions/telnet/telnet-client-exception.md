---
title: "TelnetClientException"
linkTitle: "TelnetClientException"
description: "Exception thrown when an error occurs from the Telnet object."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Telnet.TelnetClientException)</p>

## Description

Exception thrown when an error occurs from the Telnet object.

The format of the exception message is as follows:

```json
"TODO.
Please click the HelpLink for more information on how to fix this."
```

- [Invalid Configuration]
- [Invalid Port]
- [Invalid Host]

## Reasons

### Invalid Configuration

A [Category][] of `TelnetClientException` indicates that one or more settings in configurationSettings[TODO add link] are invalid.

#### Message Format

```json
"'Configuration Settings' contains one or more invalid settings. Please click the HelpLink for more information on how to fix this."
```

#### How to Fix

Provide valid configuration setting with the correct name and type.

***

### Invalid Port









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

| | |
|-----------|------------|
| Data Type | [String][] |





TODO: TelnetSessionDetails.Host







[Category]: {{< ref "#category" >}}


[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
