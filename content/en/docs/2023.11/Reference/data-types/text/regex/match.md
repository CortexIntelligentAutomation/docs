---
title: "Match"
linkTitle: "Match"
description: "Used to represent a regex match. It contains all of the groups found in the regex pattern."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Text.Regex.Match)</p>

## Summary

The `Match` data type is used to represent a regex match. It contains all of the [Groups][Group] found in the regex pattern.

| | |
|-|-|
| **Category:**          | Text                                            |
| **Name:**              | `Match`                                      |
| **Full Name:**         | `Cortex.DataTypes.Text.Regex.Match`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | A `Match` represents a regex match. It contains all of the [Groups][Group] found in the regex pattern. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `Match`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### Value

The value of the text that was matched

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with no value |

### Index

The starting index of the regex match.

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

### Groups

The dictionary of [Groups][Group] in the match.<br><br>Each key in [Groups][Groups Property] represents the name of the [Group][], if a group does not have a name provided they will increment from `"1"`

[Groups][Groups Property] always contains a default [Group][] representing the full match, the name of this [Group][] is always `"0"`.

| | |
|--------------------|---------------------------|
| Data Type | [Dictionary][]<[String][], [Group][]> |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Dictionary][]<[String][], [Group][]> with value `{}` |

## Remarks

### Create a Match

The following table shows some of the ways that a `Match` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `Match` constructor with object initialisation | `new Match{Value = "", Index = 0, Length = 0, Groups = new Dictionary<String,Group>()}`  | `{"Value": "","Index": 0,"Length": 0,"Groups": {}}` | Expression | |

### Convert Match to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)Match.ToString()` | `"Cortex.DataTypes.Text.Regex.Match"` | Expression | ToString will return the Full Name of the `Match` Data Type |
| Use `Convert Object to Text` block | where `Object` property has a value of `{"Value": "","Index": 0,"Length": 0,"Groups": {}}` | `"Cortex.DataTypes.Text.Regex.Match"` | N/A | See [Convert Object to Text][] |
| Use `Convert Object to Json` block | where `Object` property has a value of `{"Value": "","Index": 0,"Length": 0,"Groups": {}}` | `"{\r\n  \"Value\": \"\",\r\n  \"Index\": 0,\r\n  \"Length\": 0,\r\n  \"Groups\": {}\r\n}"` | N/A | See [Convert Object to Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `Match`.
- The Literal Editor is not available for [Input][] properties where the data type is `Match`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `Match`.

### Known Limitations

#### ToString Method always returns the Full Name

Currently, if the `ToString()` method is used on a `Match`, then its Full Name will be returned; instead of a representation of the data within the `Match`.

In future this limitation may be removed.

## See Also

### Related Data Types

* [Dictionary][]
* [Group][]
* [Int32][]
* [String][]

### Related Concepts

* [Working with Text][]

### External Documentation

None

[Groups Property]: {{<ref "#groups">}}
[Value Property]: {{<ref "#value">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[System.Text.RegularExpressions.Match]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.Match" >}}

[Dictionary]: {{<url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc">}}
[Int32]: {{<url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc">}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Group]: {{<url path="Cortex.Reference.DataTypes.Text.Regex.Group.MainDoc">}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}

[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
