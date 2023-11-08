---
title: "CaptureDetails"
linkTitle: "CaptureDetails"
description: "Used to represent a single capture for a given group"
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Text.Regex.CaptureDetails)</p>

## Summary

The `CaptureDetails` data type is used to represent a single capture for a given [Group][].

| | |
|-|-|
| **Category:**          | Regex                                            |
| **Name:**              | `CaptureDetails`                                      |
| **Full Name:**         | `Cortex.DataTypes.Text.Regex.CaptureDetails`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | A single capture for a given group. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `CaptureDetails`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### Value

The value of this capture.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with no value |

### Index

The starting index of this capture in the input text.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Int32][] with value `0` |

### Length

The length of the capture.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Int32][] with value `0` |

## Remarks

### Create a CaptureDetails

The following table shows some of the ways that a `CaptureDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Construct `CaptureDetails` | `new CaptureDetails{Value = "", Index = 0, Length = 0}`  | `{"Value": "","Index": 0,"Length": 0}` | Expression | No proper constructor exists for this data type. |

### Convert a Group to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object to Json` block | where `Object` property has a value of `{"Value": "","Index": 0,"Length": 0}` | `"{\r\n  \"Value\": \"\",\r\n  \"Index\": 0,\r\n  \"Length\": 0\r\n}"` | N/A | See [Convert Object to Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `CaptureDetails`.
- The Literal Editor is available for [Input][] properties where the data type is `CaptureDetails`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `CaptureDetails`.

### Known Limitations

None

## See Also

### Related Data Types

* [Group][]
* [Int32][]
* [String][]

### Related Concepts

* [Working with Text][]

### External Documentation

* [System.Text.RegularExpressions.Capture][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[System.Text.RegularExpressions.Capture]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.Capture" >}}

[Group]: {{<url path="Cortex.Reference.DataTypes.Text.Regex.Group.MainDoc">}}
[Int32]: {{<url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc">}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
