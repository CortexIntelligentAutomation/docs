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

Indicates that one or more settings in configurationSettings are invalid.

#### Message Format

```json
"'Configuration Settings' contains one or more invalid settings."
```

#### How to Fix

Provide valid configuration setting with the correct name and type

***



TODO: TelnetSessionDetails.Host