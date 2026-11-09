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
| **Category:**          | Text                                            |
| **Name:**              | `CaptureDetails`                                      |
| **Full Name:**         | `Cortex.DataTypes.Text.Regex.CaptureDetails`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | A `CaptureDetails` represents a single capture for a given [Group][]. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `CaptureDetails`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### Value

The value of the capture.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with no value |

### Index

The starting index of the capture.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Int32][] with value `0` |

### Length

The length of the [Value][Value Property].

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
| Use a `CaptureDetails` constructor with object initialisation | `new CaptureDetails{Value = "", Index = 0, Length = 0}`  | `{"Value": "","Index": 0,"Length": 0}` | Expression | |

### Convert a CaptureDetails to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)CaptureDetails.ToString()` | `"Cortex.DataTypes.Text.Regex.CaptureDetails"` | Expression | ToString will return the Full Name of the `CaptureDetails` Data Type |
| Use `Convert Object to Text` block | where `Object` property has a value of `{"Value": "","Index": 0,"Length": 0}` | `"Cortex.DataTypes.Text.Regex.CaptureDetails"` | N/A | See [Convert Object to Text][] |
| Use `Convert Object to Json` block | where `Object` property has a value of `{"Value": "","Index": 0,"Length": 0}` | `"{\r\n  \"Value\": \"\",\r\n  \"Index\": 0,\r\n  \"Length\": 0\r\n}"` | N/A | See [Convert Object to Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `CaptureDetails`.
- The Literal Editor is not available for [Input][] properties where the data type is `CaptureDetails`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `CaptureDetails`.

### Known Limitations

#### ToString Method always returns the Full Name

Currently, if the `ToString()` method is used on a `CaptureDetails`, then its Full Name will be returned; instead of a representation of the data within the `CaptureDetails`.

In future this limitation may be removed.

## See Also

### Related Data Types

* [Group][]
* [Int32][]
* [String][]

### Related Concepts

* [Working with Text][]

### External Documentation

None

[Value Property]: {{<ref "#value">}}
[Index Property]: {{<ref "#index">}}
[Length Property]: {{<ref "#length">}}

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
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}

[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
