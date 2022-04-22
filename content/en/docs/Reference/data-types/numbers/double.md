---
title: "Double"
linkTitle: "Double"
description: "Used to represent a fractional, or very large or small number from `-1.79769313486232e+308` through `1.79769313486232e+308`."
---

# {{< param title >}}

<p class="namespace">(System.Double)</p>

## Summary

The `Double` data type is used to represent a fractional, or very large or small number from `-1.79769313486232e+308` through `1.79769313486232e+308`.

| | |
|-|-|
| **Category:**          | Numbers                                                       |
| **Name:**              | `Double`                                                      |
| **Full Name:**         | `System.Double`                                               |
| **Alias:**             | `double`                                                      |
| **Description:**       | A fractional, or very large or small number from `-1.79769313486232e+308` through `1.79769313486232e+308`      |
| **Size:**              | `8` bytes                                                     |
| **Default Value:**     | `0`                                                           |
| **Can be used as:**    | `Object`, `dynamic`                                           |
| **Can be cast to:**    | `Int16`, as long as value is from `-32,768` through `32,767` (e.g. `(Int16)32767` or `(System.Int16)32767` or `(short)32767`)  |
|                        | `Int32`, as long as value is from `-2,147,483,648` through `2,147,483,647` (e.g. `(Int32)2147483647` or `(System.Int32)2147483647` or `(int)2147483647`) |
|                        | `Int64`, as long as value is from `-9,223,372,036,854,775,808` through `9,223,372,036,854,775,807` (e.g. `(Int64)9223372036854775807` or `(System.Int64)9223372036854775807` or `(long)9223372036854775807`) |
|                        | `Single`, as long as value is from `-3.402823e+38` through `3.402823e+38` (e.g. `(Single)3.402823e+38` or `(System.Single)3.402823e+38` or `(float)3.402823e+38`)  |

## Remarks

### Create a Double

The following table shows some of the ways that a `Double` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `Double` literal  | `0.0`                   | `0.0`            | Literal, Expression | Zero |
|                              | `1.0`                   | `1.0`            | Literal, Expression | Positive |
|                              | `-1.0`                  | `-1.0`           | Literal, Expression | Negative |
| Use a `Double` expression    | `1.0 + 1.0`             | `2.0`            | Expression | Add |
|                              | `1.0 - 1.0`             | `0.0`            | Expression | Subtract |
|                              | `1.0 * 1.0`             | `1.0`            | Expression | Multiply |
|                              | `1.0 / 1.0`             | `1.0`            | Expression | Divide |
|                              | `Double.MaxValue`       | `1.79769313486232e+308`    | Expression | Maximum value of a `Double`. See [Double.MaxValue][] |
|                              | `Double.MinValue`       | `-1.79769313486232e+308`   | Expression | Minimum value of a `Double`. See [Double.MinValue][] |
|                              | `Double.Parse("1")`     | `1.0`            | Expression | Attempts to parse text and convert it to a `Double` value. See [Double.Parse][] |
|                              | `Convert.ToDouble("1")` | `1.0`            | Expression | Attempts to convert text to a `Double` value. See [Convert.ToDouble][] |

### Convert Double to Text

The following table shows some of the ways that a `Double` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString`                        | `1.0.ToString()`                         | `"1"` | Expression | See [Double.ToString][] |
|                                       | `($)DoubleVariable.ToString()` where `($)DoubleVariable` has a `Double` value of `1.0`          | `"1"` | Expression |  See [Double.ToString][] |
| Use `Convert.ToString`                | `Convert.ToString(1.0)`                    | `"1"` | Expression | See [Convert.ToString][] |
|                                       | `Convert.ToString(($)DoubleVariable)` where `($)DoubleVariable` has a `Double` value of `1.0`          | `"1"` | Expression | See [Convert.ToString][] |
| Use `Convert Object To Text` block    | where `Object` property has a `Double` value of `1.0`                | `"1"` | N/A | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a `Double` value of `1.0`                | `"1.0"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Double`.
* The Literal Editor is available for [Input][] properties where the data type is `Double`.
  * Expression syntax is not supported within the Literal Editor for the `Double` data type.
* The Variable Editor is available for [InputOutput][] and [Output] properties where the data type is `Double`.

### Known Limitations

None

## See Also

### Related Types

* [Int16][]
* [Int32][]
* [Int64][]
* [Single][]

### Related Concepts

* [Working with Numbers][]

### External Documentation

* [System.Double][]

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Convert.ToDouble]: {{< url "MSDocs.DotNet.Api.System.Convert.ToDouble" >}}
[Convert.ToString]: {{< url "MSDocs.DotNet.Api.System.Convert.ToString" >}}

[System.Double]: {{< url "MSDocs.DotNet.Api.System.Double.MainDoc" >}}
[Double.MaxValue]: {{< url "MSDocs.DotNet.Api.System.Double.MaxValue" >}}
[Double.MinValue]: {{< url "MSDocs.DotNet.Api.System.Double.MinValue" >}}
[Double.Parse]: {{< url "MSDocs.DotNet.Api.System.Double.Parse" >}}
[Double.ToString]: {{< url "MSDocs.DotNet.Api.System.Double.ToString" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Int16]: {{< url "Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url "Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Single]: {{< url "Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}

[Working with Numbers]: {{< url "Cortex.Reference.Concepts.WorkingWithNumbers.MainDoc" >}}
