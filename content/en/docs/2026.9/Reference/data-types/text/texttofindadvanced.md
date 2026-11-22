---
title: "TextToFindAdvanced"
linkTitle: "TextToFindAdvanced"
description: "A text query together with the search options used to interpret it."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Text.TextToFindAdvanced)</p>

## Summary

The `TextToFindAdvanced` data type represents a query for finding text, together with the [SearchOptions][] used to interpret [Starts With][StartsWith Property], [Contains][Contains Property] and [Ends With][EndsWith Property].

It is the query used by each part of an [EmailSearchSettings][]. A query whose [Starts With][StartsWith Property], [Contains][Contains Property] and [Ends With][EndsWith Property] are all null or empty is not matched on.

| | |
|-|-|
| **Category:**          | Text |
| **Name:**              | `TextToFindAdvanced` |
| **Full Name:**         | `Cortex.DataTypes.Text.TextToFindAdvanced` |
| **Alias:**             | N/A |
| **Description:**       | A text query together with the search options used to interpret it. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `TextToFindAdvanced` |
| **Can be cast to:**    | N/A |

## Properties

### Starts With

What the text to find should start with.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | [String][] with value `$@""` |

### Contains

What the text to find should contain.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [String][] with value `$@""` |

### Ends With

What the text to find should end with.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | [String][] with value `$@""` |

### Search Options

The [SearchOptions][] applied to [Starts With][StartsWith Property], [Contains][Contains Property] and [Ends With][EndsWith Property].

| | |
|--------------------|---------------------------|
| Data Type | [SearchOptions][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `LiteralText` |

## Remarks

### Create a TextToFindAdvanced

The following table shows some of the ways that a `TextToFindAdvanced` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `TextToFindAdvanced` constructor | `new TextToFindAdvanced(startsWith: null, contains: "invoice", endsWith: null, searchOptions: SearchOptions.LiteralText)` | `{"StartsWith": null, "Contains": "invoice", "EndsWith": null, "SearchOptions": 0}` | Expression | |

A `TextToFindAdvanced` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `StartsWith` | `String` | `null` | [Starts With][StartsWith Property] defines the string a valid match should start with. |
| `Contains` | `String` | `"invoice"` | [Contains][Contains Property] defines the string a valid match should contain. |
| `EndsWith` | `String` | `null` | [Ends With][EndsWith Property] defines the string a valid match should end with. |
| `SearchOptions` | `SearchOptions` | `LiteralText` | [Search Options][SearchOptions Property] determines how the three strings are interpreted. |

### Convert TextToFindAdvanced to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `new TextToFindAdvanced(null, "invoice", null, SearchOptions.LiteralText)` | `"{\r\n  \"StartsWith\": null,\r\n  \"Contains\": \"invoice\",\r\n  \"EndsWith\": null,\r\n  \"SearchOptions\": 0\r\n}"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `TextToFindAdvanced`.
- The Literal Editor is available for [Input][] properties where the data type is `TextToFindAdvanced`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `TextToFindAdvanced`.

### Known Limitations

None

## See Also

### Related Data Types

- [TextToFind][]
- [SearchOptions][]
- [String][]
- [EmailSearchSettings][]

### Related Concepts

- [Working with Text][]

### External Documentation

None

[Contains Property]: {{< ref "#contains" >}}
[EndsWith Property]: {{< ref "#ends-with" >}}
[StartsWith Property]: {{< ref "#starts-with" >}}
[SearchOptions Property]: {{< ref "#search-options" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TextToFind]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFind.MainDoc" >}}
[SearchOptions]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.MainDoc" >}}
[EmailSearchSettings]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.EmailSearchSettings.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
