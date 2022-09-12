---
title: "Int32"
linkTitle: "Int32"
description: "Used to represent a whole number from `-2,147,483,648` through `2,147,483,647`."
---

# {{% param title %}}

<p class="namespace">(System.Int32)</p>

## Summary

The `Int32` data type is used to represent a whole number from `-2,147,483,648` through `2,147,483,647`.

| | |
|-|-|
| **Category:**          | Numbers                                                       |
| **Name:**              | `Int32`                                                       |
| **Full Name:**         | `System.Int32`                                                |
| **Alias:**             | `int`                                                         |
| **Description:**       | A whole number from `-2,147,483,648` through `2,147,483,647`  |
| **Size:**              | `4` bytes                                                     |
| **Default Value:**     | `0`                                                           |
| **Can be used as:**    | `Int32`, `Int64`, `Single`, `Double`, `Object`, `dynamic`     |
| **Can be cast to:**    | `Int16`, as long as value is from `-32,768` through `32,767` (e.g. `(Int16)32767` or `(System.Int16)32767` or `(short)32767`)  |

## Remarks

### Create an Int32

The following table shows some of the ways that an `Int32` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare an `Int32` literal   | `0`                    | `0`              | Literal, Expression | Zero |
|                              | `1`                    | `1`              | Literal, Expression | Positive |
|                              | `-1`                   | `-1`             | Literal, Expression | Negative |
| Use an `Int32` expression    | `1 + 1`                | `2`              | Expression | Add |
|                              | `1 - 1`                | `0`              | Expression | Subtract |
|                              | `1 * 1`                | `1`              | Expression | Multiply |
|                              | `1 / 1`                | `1`              | Expression | Divide |
|                              | `Int32.MaxValue`       | `2147483647`  | Expression | Maximum value of an `Int32`. See [Int32.MaxValue][] |
|                              | `Int32.MinValue`       | `-2147483648` | Expression | Minimum value of an `Int32`. See [Int32.MinValue][] |
|                              | `Int32.Parse("1")`     | `1`              | Expression | Attempts to parse text and convert it to an `Int32` value. See [Int32.Parse][] |
|                              | `Convert.ToInt32("1")` | `1`              | Expression | Attempts to convert text to an `Int32` value. See [Convert.ToInt32][] |

Please see [Instantiating an Int32 Value][] for further information.

### Convert Int32 to Text

The following table shows some of the ways that an `Int32` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString`                        | `1.ToString()`                         | `"1"` | Expression | See [Int32.ToString][] |
|                                       | `($)Int32Variable.ToString()` where `($)Int32Variable` has a value of `1`          | `"1"` | Expression |  See [Int32.ToString][] |
| Use `Convert.ToString`                | `Convert.ToString(1)`                  | `"1"` | Expression | See [Convert.ToString][] |
|                                       | `Convert.ToString(($)Int32Variable)` where `($)Int32Variable` has a value of `1`          | `"1"` | Expression | See [Convert.ToString][] |
| Use `Convert Object To Text` block    | where `Object` property has a value of `1`                | `"1"` | N/A | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `1`                | `"1"` | N/A | See [Convert Object To Json][] |

Please see [Representing an Int32 as a String][] for further information.

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Int32`.
* The Literal Editor is available for [Input][] properties where the data type is `Int32`.
  * Expression syntax is not supported within the Literal Editor for the `Int32` data type.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `Int32`.

### Known Limitations

None

## See Also

### Related Data Types

* [Int16][]
* [Int64][]
* [Single][]
* [Double][]

### Related Concepts

* [Working with Numbers][]

### External Documentation

* [System.Int32][]

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Convert.ToInt32]: {{< url "MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url "MSDocs.DotNet.Api.System.Convert.ToString" >}}

[System.Int32]: {{< url "MSDocs.DotNet.Api.System.Int32.MainDoc" >}}
[Int32.MaxValue]: {{< url "MSDocs.DotNet.Api.System.Int32.MaxValue" >}}
[Int32.MinValue]: {{< url "MSDocs.DotNet.Api.System.Int32.MinValue" >}}
[Int32.Parse]: {{< url "MSDocs.DotNet.Api.System.Int32.Parse" >}}
[Int32.ToString]: {{< url "MSDocs.DotNet.Api.System.Int32.ToString" >}}
[Instantiating an Int32 Value]: {{< url "MSDocs.DotNet.Api.System.Int32.InstantiatingAnInt32" >}}
[Representing an Int32 as a String]: {{< url "MSDocs.DotNet.Api.System.Int32.RepresentingAnInt32AsAString" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Int16]: {{< url "Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int64]: {{< url "Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Single]: {{< url "Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[Double]: {{< url "Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}

[Working with Numbers]: {{< url "Cortex.Reference.Concepts.WorkingWith.Numbers.MainDoc" >}}
