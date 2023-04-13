---
title: "TelnetSessionDetails"
linkTitle: "TelnetSessionDetails"
description: "The data type representing configuration for executing telnet commands on a specified host."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Telnet.TelnetSessionDetails)</p>

## Summary

The data type representing configuration for executing telnet commands on a specified host.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `TelnetSessionDetails` |
| **Full Name:**         | `Cortex.DataTypes.Telnet.TelnetSessionDetails` |
| **Alias:**             | N/A |
| **Description:**       | The data type representing configuration for executing telnet commands on a specified host. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `TelnetSessionDetails`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Host

The Host is used to define the address of the server to connect to. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

A server address can typically be represented in one of the following formats:

- Fully Qualified Domain Name (e.g. `machine.domain.com`)
- Machine name (e.g. `server1`)
- IP address (e.g. `127.0.0.1`)
- Localhost (e.g. `localhost`)

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `$@""` |

### Port

The Port is used to define the port on the server to connect to.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [Int32][] with value `22` |

### TerminalPrompt

The regex used to match the host's terminal prompt.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [String][] with value `$@"(.*(~(.*[\r\n]?)\$|>))"`: |

## Remarks

### Create a TelnetSessionDetails

The following table shows some of the ways that `TelnetSessionDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `TelnetSessionDetails` constructor | `new TelnetSessionDetails(host: "localhost", port: 23, terminalPrompt: $@"(.*(~(.*[\r\n]?)\$\|>))")` | `{"Host": "localhost", "Port": 465, "TerminalPrompt": $@"(.*(~(.*[\r\n]?)\$\|>))"}` | N/A  | See [Convert Object To Json][] |

### Convert TelnetSessionDetails to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"Host": "localhost", "Port": 465, "TerminalPrompt": $@"(.*(~(.*[\r\n]?)\$\|>))"}` | `"{\r\n  \"Host\": \"localhost\",\r\n    \"Port\": 23,\r\n    \"TerminalPrompt\": $@\"(.*(~(.*[\r\n]?)\$\|>))\"\r\n  }"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `TelnetSessionDetails`.
- The Literal Editor is available for [Input][] properties where the data type is `TelnetSessionDetails`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `TelnetSessionDetails`.

### Known limitations

None

## See Also

### Related Data Types

- [EncryptableText][]
- [String][]
- [Int32][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
