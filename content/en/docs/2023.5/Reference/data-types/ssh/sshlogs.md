---
title: "SshLogs"
linkTitle: "SshLogs"
description: "Used to represent logs returned by an SSH command."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Ssh.SshLogs)</p>

The `SshLogs` data type is used to represent the [WelcomeMessage][Welcome Message Property] returned from the [Host][]; the [TerminalPromptMatch][Terminal Prompt Match] found in the returned response; and the [Logs][Logs] from the SSH execution.

| | |
|-|-|
| **Category:**          | Ssh |
| **Name:**              | `SshLogs`                                      |
| **Full Name:**         | `Cortex.DataTypes.Ssh.SshLogs`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | `The SshLogs returned, containing the WelcomeMessage, TerminalPromptMatch and Logs.` |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `SshLogs`,`Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### WelcomeMessage

Represents the message returned when first connecting to the [Host][]. It will return everything up until the first terminal prompt match.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with value `$@""` |

### TerminalPromptMatch

Represents the exact terminal prompt found in the response returned from the [Host][] that was matched by the [TerminalPrompt][] regex.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with value `$@""`|

### Logs

Represents the details of the operations occurring during Ssh's execution.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [String][] with no value |

## Exceptions

None

## Remarks

### Create an SshLogs

The following table shows some of the ways that an `SshLogs` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `SshLogs` constructor | `new SshLogs(welcomeMessage: "Welcome to Microsoft Ssh Server.", terminalPromptMatch: "C:/Users/{{% ctx %}}SshUser>", logs: "[Info] Connecting to Localhost. \n[Info] Welcome message received.")` | `{"WelcomeMessage": "Welcome to Microsoft Ssh Server.", "TerminalPromptMatch": "C:/Users/{{% ctx %}}SshUser>", "Logs": "[Info] Connecting to Localhost. \n[Info] Welcome message received."}` | Expression |  |

### Convert SshLogs to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"WelcomeMessage": "Welcome to Microsoft Ssh Server.", "TerminalPromptMatch": "C:/Users/{{% ctx %}}SshUser>", "Logs": "[Info] Connecting to Localhost. \n[Info] Welcome message received."}` | `"{\r\n  \"WelcomeMessage\": \"Welcome to Microsoft Ssh Server.\",\r\n    \"TerminalPromptMatch\": \"C:/Users/CortexSshUser>\",\r\n    \"Logs\": \"[Info] Connecting to Localhost. \n[Info] Welcome message received.\"\r\n  }"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SshLogs`.
- The Literal Editor is available for [Input][] properties where the data type is `SshLogs`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SshLogs`.

### Known Limitations

None

## See Also

### Related Data Types

- [String][]
- [SshSessionDetails][]

### Related Concepts

None

### External Documentation

None

[Welcome Message Property]: {{< ref "#welcomemessage" >}}
[Terminal Prompt Match]: {{< ref "#terminalpromptmatch" >}}
[Logs]: {{< ref "#logs" >}}

[Host]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.Host" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[TerminalPrompt]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.TerminalPrompt" >}}
[SshSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
