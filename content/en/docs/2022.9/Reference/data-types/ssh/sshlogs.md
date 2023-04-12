---
title: "SshLogs"
linkTitle: "SshLogs"
description: "Used to represent logs returned by an Ssh Command."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Ssh.SshLogs)</p>

The `SshLogs` data type is used to represent the [WelcomeMessage][Welcome Message Property] returned from the [Host] and the [Logs][Logs] from the ssh execution.

| | |
|-|-|
| **Category:**          | Ssh |
| **Name:**              | `SshLogs`                                      |
| **Full Name:**         | `Cortex.DataTypes.Ssh.SshLogs`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | `The SshLogs that is returned and contains the WelcomeMessage and Logs.` |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### WelcomeMessage

Represents the message retuned when first connecting to the host. It will return everything uptuntil the first termainal prompt match.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with no value |

### Logs

Represents the details of the operations occuring during Ssh's execution.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with no value |

## Exceptions

None

## Remarks

### Create a SshLogs

The following table shows some of the ways that `SshLogs` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `SshLogs` constructor | `new SshLogs(welcomeMessage: "Welcome to Microsoft Ssh Server.", logs: "[Info] Connecting to Localhost. \n[Info] Welcome message received.")` | `{"WelcomeMessage": "Welcome to Microsoft Ssh Server.", "Logs": "[Info] Connecting to Localhost. \n[Info] Welcome message received."}` | Expression |  |

A `SshLogs` can also be created using the Literal Editor by filling in the necessary values for the following properties:

TODO:

| Property | Data Type | Example | Notes |
|-|-|-|-|

### Convert SshLogs to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"WelcomeMessage": "Welcome to Microsoft Ssh Server.", "Logs": "[Info] Connecting to Localhost. \n[Info] Welcome message received."}` | `"{\r\n  \"WelcomeMessage\": \"Welcome to Microsoft Ssh Server.\",\r\n    \"Logs\": \"[Info] Connecting to Localhost. \n[Info] Welcome message received.\"\r\n  }"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SshLogs`.
- The Literal Editor is available for [Input][] properties where the data type is `SshLogs`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SshLogs`.

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
[Logs]: {{< ref "#logs" >}}

[Host]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.Host" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
