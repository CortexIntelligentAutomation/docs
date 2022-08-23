---
title: "Int64"
linkTitle: "Int64"
description: "Used to represent a whole number from `-9,223,372,036,854,775,808` through `9,223,372,036,854,775,807`."
---

# {{< param title >}}

<p class="namespace">(System.Int64)</p>

## Summary

The `Int64` data type is used to represent a whole number from `-9,223,372,036,854,775,808` through `9,223,372,036,854,775,807`.

| | |
|-|-|
| **Category:**          | Numbers                                                                               |
| **Name:**              | `Int64`                                                                               |
| **Full Name:**         | `System.Int64`                                                                        |
| **Alias:**             | `long`                                                                                |
| **Description:**       | A whole number from `-9,223,372,036,854,775,808` through `9,223,372,036,854,775,807`  |
| **Size:**              | `8` bytes                                                                             |
| **Default Value:**     | `0`                                                                                   |
| **Can be used as:**    | `Int64`, `Single`, `Double`, `Object`, `dynamic`                                      |
| **Can be cast to:**    | `Int16`, as long as value is from `-32,768` through `32,767` (e.g. `(Int16)32767` or `(System.Int16)32767` or `(short)32767`)  |
|                        | `Int32`, as long as value is from `-2,147,483,648` through `2,147,483,647` (e.g. `(Int32)2147483647` or `(System.Int32)2147483647` or `(int)2147483647`)

## Remarks

### Create an Int64

The following table shows some of the ways that an `Int64` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare an `Int64` literal   | `9223372036854775807`  | `9223372036854775807`  | Literal, Expression | Positive, where value is greater than `2,147,483,647`. If it is between `0` and `2,147,483,647` it will only be an `Int64` if the property's data type is also `Int64`, otherwise it will be an `Int32`. |
|                              | `-9223372036854775808` | `-9223372036854775808` | Literal, Expression | Negative, where value is less than `-2,147,483,648`. If it is between `-2,147,483,648` and `0` it will only be an `Int64` if the property's data type is also `Int64`, otherwise it will be an `Int32`. |
| Use an `Int64` expression    | `(Int64)(1 + 1)`         | `2`              | Expression | Add |
|                              | `(System.Int64)(1 - 1)`  | `0`              | Expression | Subtract |
|                              | `(long)(1 * 1)`        | `1`              | Expression | Multiply |
|                              | `(long)(1 / 1)`        | `1`              | Expression | Divide |
|                              | `Int64.MaxValue`       | `9223372036854775807`  | Expression | Maximum value of an `Int64`. See [Int64.MaxValue][] |
|                              | `Int64.MinValue`       | `-9223372036854775808` | Expression | Minimum value of an `Int64`. See [Int64.MinValue][] |
|                              | `Int64.Parse("1")`     | `1`              | Expression | Attempts to parse text and convert it to an `Int64` value. See [Int64.Parse][] |
|                              | `Convert.ToInt64("1")` | `1`              | Expression | Attempts to convert text to an `Int64` value. See [Convert.ToInt64][] |

Please see [Instantiating an Int64 Value][] for further information.

### Convert Int64 to Text

The following table shows some of the ways that an `Int64` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString`                        | `((Int64)1).ToString()`                         | `"1"` | Expression | See [Int64.ToString][] |
|                                       | `($)Int64Variable.ToString()` where `($)Int64Variable` has an `Int64` value of `1`          | `"1"` | Expression |  See [Int64.ToString][] |
| Use `Convert.ToString`                | `Convert.ToString((Int64)1)`                  | `"1"` | Expression | See [Convert.ToString][] |
|                                       | `Convert.ToString(($)Int64Variable)` where `($)Int64Variable` has an `Int64` value of `1`          | `"1"` | Expression | See [Convert.ToString][] |
| Use `Convert Object To Text` block    | where `Object` property has an `Int64` value of `1`                | `"1"` | N/A | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has an `Int64` value of `1`                | `"1"` | N/A | See [Convert Object To Json][] |

Please see [Representing an Int64 as a String][] for further information.

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Int64`.
* The Literal Editor is available for [Input][] properties where the data type is `Int64`.
  * Expression syntax is not supported within the Literal Editor for the `Int64` data type.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `Int64`.

### Known Limitations

None

## See Also

### Related Data Types

* [Int16][]
* [Int32][]
* [Single][]
* [Double][]

### Related Concepts

* [Working with Numbers][]

### External Documentation

* [System.Int64][]

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Convert.ToInt64]: {{< url "MSDocs.DotNet.Api.System.Convert.ToInt64" >}}
[Convert.ToString]: {{< url "MSDocs.DotNet.Api.System.Convert.ToString" >}}

[System.Int64]: {{< url "MSDocs.DotNet.Api.System.Int64.MainDoc" >}}
[Int64.MaxValue]: {{< url "MSDocs.DotNet.Api.System.Int64.MaxValue" >}}
[Int64.MinValue]: {{< url "MSDocs.DotNet.Api.System.Int64.MinValue" >}}
[Int64.Parse]: {{< url "MSDocs.DotNet.Api.System.Int64.Parse" >}}
[Int64.ToString]: {{< url "MSDocs.DotNet.Api.System.Int64.ToString" >}}
[Instantiating an Int64 Value]: {{< url "MSDocs.DotNet.Api.System.Int64.InstantiatingAnInt64" >}}
[Representing an Int64 as a String]: {{< url "MSDocs.DotNet.Api.System.Int64.RepresentingAnInt64AsAString" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Int16]: {{< url "Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Single]: {{< url "Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[Double]: {{< url "Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}

[Working with Numbers]: {{< url "Cortex.Reference.Concepts.WorkingWithNumbers.MainDoc" >}}
