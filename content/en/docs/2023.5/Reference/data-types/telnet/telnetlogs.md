---
title: "TelnetLogs"
linkTitle: "TelnetLogs"
description: "Used to represent logs returned by an Telnet Command."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Telnet.TelnetLogs)</p>

The `TelnetLogs` data type is used to represent the [WelcomeMessage][Welcome Message Property] returned from the host; the [TerminalPromptMatch][Terminal Prompt Match] found in the returned response; and the [Logs][Logs] from the telnet execution.

| | |
|-|-|
| **Category:**          | Telnet |
| **Name:**              | `TelnetLogs`                                      |
| **Full Name:**         | `Cortex.DataTypes.Telnet.TelnetLogs`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | `The TelnetLogs that is returned and contains the welcomeMessage, terminalPromptMatch and logs.` |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `TODO`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### WelcomeMessage

Represents the message returned when first connecting to the host. It will return everything up until the first terminal prompt match.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with no value |

### TerminalPromptMatch

Represents the exact terminal prompt found in the response returned from the host that was matched by the terminalPrompt regex.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with no value |

### Logs

Represents the details of the operations occurring during Telnet's execution.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with no value |

## Exceptions

None

## Remarks

### Create a TelnetLogs

The following table shows some of the ways that `TelnetLogs` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `TelnetLogs` constructor | `new TelnetLogs(welcomeMessage: "Welcome to Microsoft Telnet Server.", terminalPromptMatched: "C:/Users/CortexTelnetUser>", logs: "[Info] Connecting to Localhost. \n[Info] Welcome message received."` | `{"WelcomeMessage": "Welcome to Microsoft Telnet Server.", "TerminalPromptMatched": "C:/Users/CortexTelnetUser>", "Logs": "[Info] Connecting to Localhost. \n[Info] Welcome message received."}` | Expression |  |

A `TelnetLogs` can also be created using the Literal Editor by filling in the necessary values for the following properties:

TODO:

| Property | Data Type | Example | Notes |
|-|-|-|-|

### Convert TelnetLogs to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"WelcomeMessage": "Welcome to Microsoft Telnet Server.", "TerminalPromptMatched": "C:/Users/CortexTelnetUser>", "Logs": "[Info] Connecting to Localhost. \n[Info] Welcome message received."}` | `"{\r\n  \"WelcomeMessage\": \"Welcome to Microsoft Telnet Server.\",\r\n    \"TerminalPromptMatched\": \"C:/Users/CortexTelnetUser>\",\r\n    \"Logs\": \"[Info] Connecting to Localhost. \n[Info] Welcome message received.\"\r\n  }"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `Records`.
- The Literal Editor is available for [Input][] properties where the data type is `Records`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `Records`.

### Known Limitations

None

## See Also

### Related Data Types

None

### Related Concepts

None

### External Documentation

None

[Welcome Message Property]: {{< ref "#welcomemessage" >}}
[Terminal Prompt Match]: {{< ref "#terminalpromptmatch" >}}
[Logs]: {{< ref "#logs" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
