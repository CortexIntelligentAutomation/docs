---
title: "Group"
linkTitle: "Group"
description: "Used to represent a regex match group. It contains all of the captures for a given group pattern."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Text.Regex.Group)</p>

## Summary

The `Group` data type is used to represent a regex [Match][] group. It contains all of the [Captures][CaptureDetails] for a given group pattern.

| | |
|-|-|
| **Category:**          | Text                                            |
| **Name:**              | `Group`                                      |
| **Full Name:**         | `Cortex.DataTypes.Text.Regex.Group`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | A `Group` represents a regex [Match][] group. It contains all of the [Captures][CaptureDetails] for a given group pattern. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `Group`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### Value

The value of the last [CaptureDetails][] within [Captures][Captures Property], this represents the full text captured by the Group.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with no value. |

### Index

The starting index of the first [CaptureDetails][] within [Captures][Captures Property].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Int32][] with value `0` |

### Length

The length of [Value][Value Property].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Int32][] with value `0` |

### Captures

The list of [CaptureDetails][CaptureDetails] found in the Group.
<br><br> If no captures were found, the list will be empty.

| | |
|--------------------|---------------------------|
| Data Type | [IReadOnlyList]<[CaptureDetails][]> |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IReadOnlyList][]<[CaptureDetails][]> with no value |

## Remarks

### Create a Group

The following table shows some of the ways that a `Group` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `Group` constructor with object initialisation | `new Group{Value = "", Index = 0, Length = 0, Captures = new List<CaptureDetails>()}`  | `{"Value": "","Index": 0,"Length": 0,"Captures": []}` | Expression | |

### Convert a Group to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)Group.ToString()` | `"Cortex.DataTypes.Text.Regex.Group"` | Expression | ToString will return the Full Name of the `Group` Data Type |
| Use `Convert Object to Text` block | where `Object` property has a value of `{"Value": "","Index": 0,"Length": 0,"Captures": new List<CaptureDetails>()}` | `"Cortex.DataTypes.Text.Regex.Group"` | N/A | See [Convert Object to Text][] |
| Use `Convert Object to Json` block | where `Object` property has a value of `{"Value": "","Index": 0,"Length": 0,"Captures": []}` | `"{\r\n  \"Value\": \"\",\r\n  \"Index\": 0,\r\n  \"Length\": 0,\r\n  \"Captures\": []\r\n}"` | N/A | See [Convert Object to Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `Group`.
- The Literal Editor is not available for [Input][] properties where the data type is `Group`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `Group`.

### Known Limitations

#### ToString Method always returns the Full Name

Currently, if the `ToString()` method is used on a `Group`, then its Full Name will be returned; instead of a representation of the data within the `Group`.

In future this limitation may be removed.

## See Also

### Related Data Types

* [CaptureDetails][]
* [IReadOnlyList][]
* [Int32][]
* [Match][]
* [String][]

### Related Concepts

* [Working with Text][]

### External Documentation

None

[Captures Property]: {{<ref "#captures">}}
[Value Property]: {{<ref "#value">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[System.Text.RegularExpressions.Group]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.Group" >}}

[CaptureDetails]: {{<url path="Cortex.Reference.DataTypes.Text.Regex.CaptureDetails.MainDoc">}}
[IReadOnlyList]: {{<url path="Cortex.Reference.DataTypes.Collections.IReadOnlyList.MainDoc">}}
[Dictionary]: {{<url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc">}}
[Int32]: {{<url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc">}}
[Match]: {{<url path="Cortex.Reference.DataTypes.Text.Regex.Match.MainDoc">}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}

[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
