---
title: "Single"
linkTitle: "Single"
description: "Used to represent a fractional, or very large or small number from `-3.402823e+38` through `3.402823e+38`."
---

# {{% param title %}}

<p class="namespace">(System.Single)</p>

## Summary

The `Single` data type is used to represent a fractional, or very large or small number from `-3.402823e+38` through `3.402823e+38`.

| | |
|-|-|
| **Category:**          | Numbers                                                       |
| **Name:**              | `Single`                                                      |
| **Full Name:**         | `System.Single`                                               |
| **Alias:**             | `float`                                                      |
| **Description:**       | A fractional, or very large or small number from `-3.402823e+38` through `3.402823e+38`      |
| **Size:**              | `4` bytes                                                     |
| **Default Value:**     | `0`                                                           |
| **Can be used as:**    | `Double`, `Object`, `dynamic`                                           |
| **Can be cast to:**    | `Int16`, as long as value is from `-32,768` through `32,767` (e.g. `(Int16)32767` or `(System.Int16)32767` or `(short)32767`)  |
|                        | `Int32`, as long as value is from `-2,147,483,648` through `2,147,483,647` (e.g. `(Int32)2147483647` or `(System.Int32)2147483647` or `(int)2147483647`) |
|                        | `Int64`, as long as value is from `-9,223,372,036,854,775,808` through `9,223,372,036,854,775,807` (e.g. `(Int64)9223372036854775807` or `(System.Int64)9223372036854775807` or `(long)9223372036854775807`) |

## Remarks

### Create a Single

The following table shows some of the ways that a `Single` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `Single` expression    | `1.0f + 1.0f`             | `2.0`            | Expression | Add |
|                              | `1.0f - 1.0f`             | `0.0`            | Expression | Subtract |
|                              | `1.0f * 1.0f`             | `1.0`            | Expression | Multiply |
|                              | `1.0f / 1.0f`             | `1.0`            | Expression | Divide |
|                              | `Single.MaxValue`         | `3.402823e+38`   | Expression | Maximum value of a `Single`. See [Single.MaxValue][] |
|                              | `Single.MinValue`         | `-3.402823e+38`  | Expression | Minimum value of a `Single`. See [Single.MinValue][] |
|                              | `Single.Parse("1")`       | `1.0`            | Expression | Attempts to parse text and convert it to a `Single` value. See [Single.Parse][] |
|                              | `Convert.ToSingle("1")`   | `1.0`            | Expression | Attempts to convert text to a `Single` value. See [Convert.ToSingle][] |

### Convert Single to Text

The following table shows some of the ways that a `Single` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString`                        | `1.0f.ToString()`                         | `"1"` | Expression | See [Single.ToString][] |
|                                       | `($)SingleVariable.ToString()` where `($)SingleVariable` has a `Single` value of `1.0`          | `"1"` | Expression |  See [Single.ToString][] |
| Use `Convert.ToString`                | `Convert.ToString(1.0f)`                  | `"1"` | Expression | See [Convert.ToString][] |
|                                       | `Convert.ToString(($)SingleVariable)` where `($)SingleVariable` has a `Single` value of `1.0`          | `"1"` | Expression | See [Convert.ToString][] |
| Use `Convert Object To Text` block    | where `Object` property has a `Single` value of `1.0`                | `"1"` | N/A | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a `Single` value of `1.0`                | `"1.0"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Single`.
* The Literal Editor is available for [Input][] properties where the data type is `Single`.
  * Expression syntax is not supported within the Literal Editor for the `Single` data type.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `Single`.

### Known Limitations

None

## See Also

### Related Data Types

* [Int16][]
* [Int32][]
* [Int64][]
* [Double][]

### Related Concepts

* [Working with Numbers][]

### External Documentation

* [System.Single][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Convert.ToSingle]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToSingle" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}

[System.Single]: {{< url path="MSDocs.DotNet.Api.System.Single.MainDoc" >}}
[Single.MaxValue]: {{< url path="MSDocs.DotNet.Api.System.Single.MaxValue" >}}
[Single.MinValue]: {{< url path="MSDocs.DotNet.Api.System.Single.MinValue" >}}
[Single.Parse]: {{< url path="MSDocs.DotNet.Api.System.Single.Parse" >}}
[Single.ToString]: {{< url path="MSDocs.DotNet.Api.System.Single.ToString" >}}

[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Int16]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Double]: {{< url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}

[Working with Numbers]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Numbers.MainDoc" >}}
