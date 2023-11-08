---
title: "Match"
linkTitle: "Match"
description: "Used to represent a regex match. It contains all of the groups found in the regex pattern."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Text.Regex.Match)</p>

{{<workinprogress>}}

## Summary

The `Match` data type is used to represent a regex match. It contains all of the [Groups][Group] found in the regex pattern.

| | |
|-|-|
| **Category:**          | Regex                                            |
| **Name:**              | `Match`                                      |
| **Full Name:**         | `Cortex.DataTypes.Text.Regex.Match`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | A regex match. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `Match`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### Value

The value of the full match.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

### Index

The starting index of the regex match in the input text.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Int32][] with value `0` |

### Length

The length of this regex match.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Int32][] with value `0` |

### Groups

The dictionary of [Groups][Group] in this match. The key [String][] is the [Group][] name. The default group `0` is always included for a valid match, and contains the whole [Value][Value Property] as its value. Unnamed groups will have keys starting from `"1"`, `"2"`, etc.

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
| Construct `Match` | `new Match{Value = "", Index = 0, Length = 0, Groups = {}}`  | `{"Value": "","Index": 0,"Length": 0,"Groups": {}}` | Expression | |

### Convert Match to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object to Json` block | where `Object` property has a value of `{"Value": "","Index": 0,"Length": 0,"Groups": {}}` | `"{\r\n  \"Value\": \"\",\r\n  \"Index\": 0,\r\n  \"Length\": 0,\r\n  \"Groups\": {}\r\n}"` | N/A | See [Convert Object to Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `Match`.
- The Literal Editor is available for [Input][] properties where the data type is `Match`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `Match`.

### Known Limitations

None

## See Also

### Related Data Types

* [Dictionary][]
* [Group][]
* [Int32][]
* [String][]

### Related Concepts

* [Working with Text][]

### External Documentation

* [System.Text.RegularExpressions.Match][]

[Value Property]: {{#ref "#value"}}

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

[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
