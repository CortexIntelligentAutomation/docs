---
title: "Group"
linkTitle: "Group"
description: "Used to represent a regex match group. It contains all of the captures for a given group pattern."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Text.Regex.Group)</p>

{{< workinprogress >}}

## Summary

The `Group` data type is used to represent a [regex match][Match] group. It contains all of the [Captures][CaptureDetails] for a given group pattern.

| | |
|-|-|
| **Category:**          | Regex                                            |
| **Name:**              | `Group`                                      |
| **Full Name:**         | `Cortex.DataTypes.Text.Regex.Group`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | A regex match group. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `Group`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### Value

The Value is the value of the last [capture][CaptureDetails] for this group.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

### Index

The starting index of the first [capture][CaptureDetails] for this group in the input text.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Int32][] with value `0` |

### Length

The length of the matched group text.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Int32][] with value `0` |

### Captures

The list of [captures][CaptureDetails] found for this regex match group. If there were no captures, this is an empty list.

| | |
|--------------------|---------------------------|
| Data Type | IReadOnlyList<[CaptureDetails][]> |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

## Remarks

### Create a Group

The following table shows some of the ways that a `Group` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Construct `Group` | `new Group{Value = "", Index = 0, Length = 0, Captures = new List<CaptureDetails>()}`  | `{"Value": "","Index": 0,"Length": 0,"Captures": []}` | Expression | No proper constructor exists for this data type. |

### Convert a Group to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object to Json` block | where `Object` property has a value of `{"Value": "","Index": 0,"Length": 0,"Captures": []}` | `"{\r\n  \"Value\": \"\",\r\n  \"Index\": 0,\r\n  \"Length\": 0,\r\n  \"Captures\": []\r\n}"` | N/A | See [Convert Object to Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `Group`.
- The Literal Editor is available for [Input][] properties where the data type is `Group`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `Group`.

### Known Limitations

None

## See Also

### Related Data Types

* [CaptureDetails][]
* IReadOnlyList
* [Int32][]
* [String][]

### Related Concepts

* [Working with Text][]

### External Documentation

* [System.Text.RegularExpressions.Group][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[System.Text.RegularExpressions.Group]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.Group" >}}

[CaptureDetails]: {{<url path="Cortex.Reference.DataTypes.Text.Regex.CaptureDetails.MainDoc">}}
[Dictionary]: {{<url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc">}}
[Int32]: {{<url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc">}}
[Match]: {{<url path="Cortex.Reference.DataTypes.Text.Regex.Match.MainDoc">}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
