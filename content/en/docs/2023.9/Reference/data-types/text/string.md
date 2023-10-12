---
title: "String"
linkTitle: "String"
description: "Used to represent text."
---

# {{% param title %}}

<p class="namespace">(System.String)</p>

## Summary

The `String` data type is used to represent text.

| | |
|-|-|
| **Category:**          | Text                                                          |
| **Name:**              | `String`                                                      |
| **Full Name:**         | `System.String`                                               |
| **Alias:**             | `string`                                                      |
| **Description:**       | A sequence of unicode [characters][Char], surrounded by double quotes (e.g. `"This is a string"`) |
| **Size:**              | Varies depending upon the number of [characters][Char] it contains    |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `IEnumerable`, `IEnumerable<Char>`, `Object`, `dynamic`       |
| **Can be cast to:**    | N/A                                                           |

## Remarks

### Create a String

The following table shows some of the ways that a `String` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `String` literal  | `"Hello World!"`       | `"Hello World!"` | Literal, Expression | In the Expression Editor the surrounding double quotes (i.e. `""`) are needed (e.g. `"Hello World!"`); in the Literal Editor they are not (e.g. `Hello World!`). Any double quotes in the Literal Editor will be treated as literal characters that are part of the `String`.  |
| Use a `String` expression   | `$"Hello {($)Variable}!"` where `($)Variable` is set to `"World!"`   | `"Hello World!"`  | Expression | Uses [String Interpolation][] |
|                             | `String.Format("Hello {0}!", ($)Variable)` where `($)Variable` is set to `"World!"`   | `"Hello World!"`  | Expression | Uses [String.Format][] |
|                             | `String.Concat("Hello", " ", "World!")`   | `"Hello World!"`  | Expression | Uses [String.Concat][] |
|                             | `String.Join(" ", {"Hello", "World!"})`   | `"Hello World!"`  | Expression | Uses [String.Join][] |
|                             | `"Hello!".Insert(5, " World")`            | `"Hello World!"`  | Expression | Uses [String.Insert][] |
|                             | `"Hello" + " " + "World!"`                | `"Hello World!"`  | Expression | Uses [String Concatenation Operator][] (i.e. `+`)  |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `String`.
* The Literal Editor is available for [Input][] properties where the data type is `String`.
  * Expression syntax is not supported within the Literal Editor for the `String` data type.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `String`.

### Known Limitations

None

## See Also

### Related Data Types

* [Char][]

### Related Concepts

* [Working with Text][]

### External Documentation

* [System.String][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Char]: {{< url path="Cortex.Reference.DataTypes.Text.Char.MainDoc" >}}

[System.String]: {{< url path="MSDocs.DotNet.Api.System.String.MainDoc" >}}
[String.Concat]: {{< url path="MSDocs.DotNet.Api.System.String.Concat" >}}
[String Concatenation Operator]: {{< url path="MSDocs.DotNet.Api.System.String.ConcatOperator" >}}
[String Interpolation]: {{< url path="MSDocs.DotNet.Api.System.String.StringInterpolation" >}}
[String.Format]: {{< url path="MSDocs.DotNet.Api.System.String.Format" >}}
[String.Insert]: {{< url path="MSDocs.DotNet.Api.System.String.Insert" >}}
[String.Join]: {{< url path="MSDocs.DotNet.Api.System.String.Join" >}}

[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
