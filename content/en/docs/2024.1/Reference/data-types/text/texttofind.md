---
title: "TextToFind"
linkTitle: "TextToFind"
description: "Used to represent a search query for finding text."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Text.TextToFind)</p>

## Summary

The `TextToFind` data type is used to represent a search query for finding text.<br><br>It specifies what a valid [match][Match] should start, contain and end with.

| | |
|-|-|
| **Category:**          | Text                                                  |
| **Name:**              | `TextToFind`                                         |
| **Full Name:**         | `Cortex.DataTypes.Text.TextToFind`                  |
| **Alias:**             | N/A                                                    |
| **Description:**       | A text to find in another text.                              |
| **Default Value:**     | `null`                                                 |
| **Can be used as:**    | `TextToFind`                    |
| **Can be cast to:**    | N/A                                                    |

## Properties

### Starts With

[Starts With][StartsWith Property] is used to define the [String][] a valid match should start with.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with value `$@""` |

### Contains

[Contains][Contains Property] is used to define the [String][] a valid match should contains between [Starts With][StartsWith Property] and [Ends With][EndsWith Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with value `$@""` |

### Ends With

[Ends With][EndsWith Property] is used to define the [String][] a valid match should end with.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with value `$@""` |

## Remarks

### Create a TextToFind

The following table shows some of the ways that a `TextToFind` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `TextToFind` constructor | `new TextToFind(startsWith: "the", contains: "quick", endsWith: "fox")`| `{"StartsWith":"the", "Contains":"quick", "EndsWith":"fox"}` | Expression | ||

A `TextToFind` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `StartsWith` | `String` | `"the"` | [Starts With][StartsWith Property] defines the string a valid match should start with. |
| `Contains` | `String` | `"quick"` | [Contains][Contains Property] defines the string a valid match should contain. |
| `EndsWith` | `String` | `"fox"` | [Ends With][EndsWith Property] defines the string a valid match should end with. |

### Convert TextToFind to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"StartsWith":"the", "Contains":"quick", "EndsWith":"fox"}` | `""{\r\n  \"StartsWith\": \"the\",\r\n  \"Contains\": \"quick\",\r\n  \"EndsWith\": \"fox\"\r\n}""` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `TextToFind`.
- The Literal Editor is available for [Input][] properties where the data type is `TextToFind`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `TextToFind`.

### Known Limitations

None

## See Also

### Related Data Types

* [String][]

### Related Concepts

* [Working with Text][]

### External Documentation

None

[Contains Property]: {{< ref "#contains" >}}
[EndsWith Property]: {{< ref "#ends-with" >}}
[StartsWith Property]: {{< ref "#starts-with" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Char]: {{< url path="Cortex.Reference.DataTypes.Text.Char.MainDoc" >}}
[Match]: {{< url path="Cortex.Reference.DataTypes.Text.Regex.Match.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[System.String]: {{< url path="MSDocs.DotNet.Api.System.String.MainDoc" >}}
[String.Concat]: {{< url path="MSDocs.DotNet.Api.System.String.Concat" >}}
[String Concatenation Operator]: {{< url path="MSDocs.DotNet.Api.System.String.ConcatOperator" >}}
[String Interpolation]: {{< url path="MSDocs.DotNet.Api.System.String.StringInterpolation" >}}
[String.Format]: {{< url path="MSDocs.DotNet.Api.System.String.Format" >}}
[String.Insert]: {{< url path="MSDocs.DotNet.Api.System.String.Insert" >}}
[String.Join]: {{< url path="MSDocs.DotNet.Api.System.String.Join" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
