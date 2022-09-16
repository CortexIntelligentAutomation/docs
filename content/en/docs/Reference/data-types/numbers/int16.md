---
title: "Int16"
linkTitle: "Int16"
description: "Used to represent a whole number from `-32,768` through `32767`."
---

# {{% param title %}}

<p class="namespace">(System.Int16)</p>

## Summary

The `Int16` data type is used to represent a whole number from `-32,768` through `32,767`.

| | |
|-|-|
| **Category:**          | Numbers                                                            |
| **Name:**              | `Int16`                                                            |
| **Full Name:**         | `System.Int16`                                                     |
| **Alias:**             | `short`                                                            |
| **Description:**       | A whole number from `-32,768` through `32,767`                     |
| **Size:**              | `2` bytes                                                          |
| **Default Value:**     | `0`                                                                |
| **Can be used as:**    | `Int16`, `Int32`, `Int64`, `Single`, `Double`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Remarks

### Create an Int16

The following table shows some of the ways that an `Int16` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `Int16` expression    | `(Int16)(1 + 1)`         | `2`              | Expression | Add |
|                              | `(System.Int16)(1 - 1)`  | `0`              | Expression | Subtract |
|                              | `(short)(1 * 1)`         | `1`              | Expression | Multiply |
|                              | `(short)(1 / 1)`         | `1`              | Expression | Divide |
|                              | `Int16.MaxValue`       | `32767`         | Expression | Maximum value of an `Int16`. See [Int16.MaxValue][] |
|                              | `Int16.MinValue`       | `-32768`        | Expression | Minimum value of an `Int16`. See [Int16.MinValue][] |
|                              | `Int16.Parse("1")`     | `1`              | Expression | Attempts to parse text and convert it to an `Int16` value. See [Int16.Parse][] |
|                              | `Convert.ToInt16("1")` | `1`              | Expression | Attempts to convert text to an `Int16` value. See [Convert.ToInt16][] |

### Convert Int16 to Text

The following table shows some of the ways that an `Int16` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString`                        | `((Int16)1).ToString()`                         | `"1"` | Expression | See [Int16.ToString][] |
|                                       | `($)Int16Variable.ToString()` where `($)Int16Variable` has an `Int16` value of `1`          | `"1"` | Expression |  See [Int16.ToString][] |
| Use `Convert.ToString`                | `Convert.ToString((Int16)1)`                    | `"1"` | Expression | See [Convert.ToString][] |
|                                       | `Convert.ToString(($)Int16Variable)` where `($)Int16Variable` has  an `Int16` value of `1`          | `"1"` | Expression | See [Convert.ToString][] |
| Use `Convert Object To Text` block    | where `Object` property has an `Int16` value of `1`                | `"1"` | N/A | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has an `Int16` value of `1`                | `"1"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Int16`.
* The Literal Editor is available for [Input][] properties where the data type is `Int16`.
  * Expression syntax is not supported within the Literal Editor for the `Int16` data type.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `Int16`.

### Known Limitations

None

## See Also

### Related Data Types

* [Int32][]
* [Int64][]
* [Single][]
* [Double][]

### Related Concepts

* [Working with Numbers][]

### External Documentation

* [System.Int16][]

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Convert.ToInt16]: {{< url "MSDocs.DotNet.Api.System.Convert.ToInt16" >}}
[Convert.ToString]: {{< url "MSDocs.DotNet.Api.System.Convert.ToString" >}}

[System.Int16]: {{< url "MSDocs.DotNet.Api.System.Int16.MainDoc" >}}
[Int16.MaxValue]: {{< url "MSDocs.DotNet.Api.System.Int16.MaxValue" >}}
[Int16.MinValue]: {{< url "MSDocs.DotNet.Api.System.Int16.MinValue" >}}
[Int16.Parse]: {{< url "MSDocs.DotNet.Api.System.Int16.Parse" >}}
[Int16.ToString]: {{< url "MSDocs.DotNet.Api.System.Int16.ToString" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url "Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Single]: {{< url "Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[Double]: {{< url "Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}

[Working with Numbers]: {{< url "Cortex.Reference.Concepts.WorkingWith.Numbers.MainDoc" >}}
