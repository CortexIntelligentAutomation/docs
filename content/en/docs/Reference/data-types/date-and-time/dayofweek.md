---
title: "DayOfWeek"
linkTitle: "DayOfWeek"
description: "Used to represent a day of the week from Sunday (i.e. `DayOfWeek.Sunday`) through Saturday (i.e. `DayOfWeek.Saturday`)."
---

# {{% param title %}}

<p class="namespace">(System.DayOfWeek)</p>

## Summary

The `DayOfWeek` data type is used to represent a day of the week from Sunday (i.e. `DayOfWeek.Sunday`) through Saturday (i.e. `DayOfWeek.Saturday`).

`DayOfWeek` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Date & Time                                                  |
| **Name:**              | `DayOfWeek`                                                   |
| **Full Name:**         | `System.DayOfWeek`                                            |
| **Alias:**             | N/A                                                           |
| **Description:**       | A day of the week from Sunday (i.e. `DayOfWeek.Sunday`) through Saturday (i.e. `DayOfWeek.Saturday`). |
| **Size:**              | `4` bytes                                                     |
| **Values:**            | `DayOfWeek.Sunday` where name is `"Sunday"` and value is `0`  |
|                        | `DayOfWeek.Monday` where name is `"Monday"` and value is `1` |
|                        | `DayOfWeek.Tuesday` where name is `"Tuesday"` and value is `2` |
|                        | `DayOfWeek.Wednesday` where name is `"Wednesday"` and value is `3` |
|                        | `DayOfWeek.Thursday` where name is `"Thursday"` and value is `4` |
|                        | `DayOfWeek.Friday` where name is `"Friday"` and value is `5` |
|                        | `DayOfWeek.Saturday` where name is `"Saturday"` and value is `6` |
| **Default Value:**     | `DayOfWeek.Sunday`                                            |
| **Can be used as:**    | `Object`, `dynamic`                                           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)DayOfWeek.Sunday` or `(System.Int16)DayOfWeek.Sunday` or `(short)DayOfWeek.Sunday`)  |
|                        | `Int32` (e.g. `(Int32)DayOfWeek.Sunday` or `(System.Int32)DayOfWeek.Sunday` or `(int)DayOfWeek.Sunday`)  |
|                        | `Int64` (e.g. `(Int64)DayOfWeek.Sunday` or `(System.Int64)DayOfWeek.Sunday` or `(long)DayOfWeek.Sunday`)  |
|                        | `Single` (e.g. `(Single)DayOfWeek.Sunday` or `(System.Single)DayOfWeek.Sunday` or `(float)DayOfWeek.Sunday`)  |
|                        | `Double` (e.g. `(Double)DayOfWeek.Sunday` or `(System.Double)DayOfWeek.Sunday` or `(double)DayOfWeek.Sunday`)  |

## Remarks

### Create a DayOfWeek

The following table shows some of the ways that a `DayOfWeek` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `DayOfWeek` literal    | `Sunday`              | `DayOfWeek.Sunday`    | Literal | Indicates Sunday |
|                                  | `Monday`              | `DayOfWeek.Monday`    | Literal | Indicates Monday |
|                                  | `Tuesday`             | `DayOfWeek.Tuesday`   | Literal | Indicates Tuesday |
|                                  | `Wednesday`           | `DayOfWeek.Wednesday` | Literal | Indicates Wednesday |
|                                  | `Thursday`            | `DayOfWeek.Thursday`  | Literal | Indicates Thursday |
|                                  | `Friday`              | `DayOfWeek.Friday`    | Literal | Indicates Friday |
|                                  | `Saturday`            | `DayOfWeek.Saturday`  | Literal | Indicates Saturday |
| Use a `DayOfWeek` expression     | `DayOfWeek.Sunday`    | `DayOfWeek.Sunday`    | Expression | Indicates Sunday |
|                                  | `DayOfWeek.Monday`    | `DayOfWeek.Monday`    | Expression | Indicates Monday |
|                                  | `DayOfWeek.Tuesday`   | `DayOfWeek.Tuesday`   | Expression | Indicates Tuesday |
|                                  | `DayOfWeek.Wednesday` | `DayOfWeek.Wednesday` | Expression | Indicates Wednesday |
|                                  | `DayOfWeek.Thursday`  | `DayOfWeek.Thursday`  | Expression | Indicates Thursday |
|                                  | `DayOfWeek.Friday`    | `DayOfWeek.Friday`    | Expression | Indicates Friday |
|                                  | `DayOfWeek.Saturday`  | `DayOfWeek.Saturday`  | Expression | Indicates Saturday |
| Use [Explicit Casting][]    | `(DayOfWeek)0`        | `DayOfWeek.Sunday`    | Expression | [Casts][Explicit Casting] `0` to `DayOfWeek.Sunday` |
|                                  | `(DayOfWeek)1`        | `DayOfWeek.Monday`    | Expression | [Casts][Explicit Casting] `1` to `DayOfWeek.Monday` |
|                                  | `(DayOfWeek)2`        | `DayOfWeek.Tuesday`   | Expression | [Casts][Explicit Casting] `2` to `DayOfWeek.Tuesday` |
|                                  | `(DayOfWeek)3`        | `DayOfWeek.Wednesday` | Expression | [Casts][Explicit Casting] `3` to `DayOfWeek.Wednesday` |
|                                  | `(DayOfWeek)4`        | `DayOfWeek.Thursday`  | Expression | [Casts][Explicit Casting] `4` to `DayOfWeek.Thursday` |
|                                  | `(DayOfWeek)5`        | `DayOfWeek.Friday`    | Expression | [Casts][Explicit Casting] `5` to `DayOfWeek.Friday` |
|                                  | `(DayOfWeek)6`        | `DayOfWeek.Saturday`  | Expression | [Casts][Explicit Casting] `6` to `DayOfWeek.Saturday` |
| Use `Enum.Parse`                 | `(DayOfWeek)Enum.Parse(typeof(DayOfWeek), "Sunday")` | `DayOfWeek.Sunday` | Expression | Parses `"Sunday"` and converts it to `DayOfWeek.Sunday`. See [Enum.Parse][] |
|                                  | `(DayOfWeek)Enum.Parse(typeof(DayOfWeek), "Monday")` | `DayOfWeek.Monday` | Expression | Parses `"Monday"` and converts it to `DayOfWeek.Monday`. See [Enum.Parse][] |
|                                  | `(DayOfWeek)Enum.Parse(typeof(DayOfWeek), "Tuesday")` | `DayOfWeek.Tuesday` | Expression | Parses `"Tuesday"` and converts it to `DayOfWeek.Tuesday`. See [Enum.Parse][] |
|                                  | `(DayOfWeek)Enum.Parse(typeof(DayOfWeek), "Wednesday")` | `DayOfWeek.Wednesday` | Expression | Parses `"Wednesday"` and converts it to `DayOfWeek.Wednesday`. See [Enum.Parse][] |
|                                  | `(DayOfWeek)Enum.Parse(typeof(DayOfWeek), "Thursday")` | `DayOfWeek.Thursday` | Expression | Parses `"Thursday"` and converts it to `DayOfWeek.Thursday`. See [Enum.Parse][] |
|                                  | `(DayOfWeek)Enum.Parse(typeof(DayOfWeek), "Friday")` | `DayOfWeek.Friday` | Expression | Parses `"Friday"` and converts it to `DayOfWeek.Friday`. See [Enum.Parse][] |
|                                  | `(DayOfWeek)Enum.Parse(typeof(DayOfWeek), "Saturday")` | `DayOfWeek.Saturday` | Expression | Parses `"Saturday"` and converts it to `DayOfWeek.Saturday`. See [Enum.Parse][] |
| Use `Enum.ToObject`              | `(DayOfWeek)Enum.ToObject(typeof(DayOfWeek), 0)` | `DayOfWeek.Sunday` | Expression | Converts `0` to `DayOfWeek.Sunday` value. See [Enum.ToObject][] |
|                                  | `(DayOfWeek)Enum.ToObject(typeof(DayOfWeek), 1)` | `DayOfWeek.Monday` | Expression | Converts `1` to `DayOfWeek.Monday` value. See [Enum.ToObject][] |
|                                  | `(DayOfWeek)Enum.ToObject(typeof(DayOfWeek), 2)` | `DayOfWeek.Tuesday` | Expression | Converts `2` to `DayOfWeek.Tuesday` value. See [Enum.ToObject][] |
|                                  | `(DayOfWeek)Enum.ToObject(typeof(DayOfWeek), 3)` | `DayOfWeek.Wednesday` | Expression | Converts `3` to `DayOfWeek.Wednesday` value. See [Enum.ToObject][] |
|                                  | `(DayOfWeek)Enum.ToObject(typeof(DayOfWeek), 4)` | `DayOfWeek.Thursday` | Expression | Converts `4` to `DayOfWeek.Thursday` value. See [Enum.ToObject][] |
|                                  | `(DayOfWeek)Enum.ToObject(typeof(DayOfWeek), 5)` | `DayOfWeek.Friday` | Expression | Converts `5` to `DayOfWeek.Friday` value. See [Enum.ToObject][] |
|                                  | `(DayOfWeek)Enum.ToObject(typeof(DayOfWeek), 6)` | `DayOfWeek.Saturday` | Expression | Converts `6` to `DayOfWeek.Saturday` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert DayOfWeek to Text

The following table shows some of the ways that a `DayOfWeek` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString`                        | `DayOfWeek.Sunday.ToString()`     | `"Sunday"` | Expression | Converts `DayOfWeek.Sunday` to `"Sunday"`. See [Enum.ToString][] |
|                                       | `DayOfWeek.Monday.ToString()`     | `"Monday"` | Expression | Converts `DayOfWeek.Monday` to `"Monday"`. See [Enum.ToString][] |
|                                       | `DayOfWeek.Tuesday.ToString()`    | `"Tuesday"` | Expression | Converts `DayOfWeek.Tuesday` to `"Tuesday"`. See [Enum.ToString][] |
|                                       | `DayOfWeek.Wednesday.ToString()`  | `"Wednesday"` | Expression | Converts `DayOfWeek.Wednesday` to `"Wednesday"`. See [Enum.ToString][] |
|                                       | `DayOfWeek.Thursday.ToString()`   | `"Thursday"` | Expression | Converts `DayOfWeek.Thursday` to `"Thursday"`. See [Enum.ToString][] |
|                                       | `DayOfWeek.Friday.ToString()`     | `"Friday"` | Expression | Converts `DayOfWeek.Friday` to `"Friday"`. See [Enum.ToString][] |
|                                       | `DayOfWeek.Saturday.ToString()`   | `"Saturday"` | Expression | Converts `DayOfWeek.Saturday` to `"Saturday"`. See [Enum.ToString][] |
| Use `Convert.ToString`                | `Convert.ToString(DayOfWeek.Sunday)`                  | `"Sunday"` | Expression | Converts `DayOfWeek.Sunday` to `"Sunday"`. See [Convert.ToString][] |
|                                       | `Convert.ToString(DayOfWeek.Monday)`                  | `"Monday"` | Expression | Converts `DayOfWeek.Monday` to `"Monday"`. See [Convert.ToString][] |
|                                       | `Convert.ToString(DayOfWeek.Tuesday)`                  | `"Tuesday"` | Expression | Converts `DayOfWeek.Tuesday` to `"Tuesday"`. See [Convert.ToString][] |
|                                       | `Convert.ToString(DayOfWeek.Wednesday)`                  | `"Wednesday"` | Expression | Converts `DayOfWeek.Wednesday` to `"Wednesday"`. See [Convert.ToString][] |
|                                       | `Convert.ToString(DayOfWeek.Thursday)`                  | `"Thursday"` | Expression | Converts `DayOfWeek.Thursday` to `"Thursday"`. See [Convert.ToString][] |
|                                       | `Convert.ToString(DayOfWeek.Friday)`                  | `"Friday"` | Expression | Converts `DayOfWeek.Friday` to `"Friday"`. See [Convert.ToString][] |
|                                       | `Convert.ToString(DayOfWeek.Saturday)`                  | `"Saturday"` | Expression | Converts `DayOfWeek.Saturday` to `"Saturday"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block    | where `Object` property has a value of `DayOfWeek.Sunday`    | `"Sunday"`    | N/A | Converts `DayOfWeek.Sunday` to `"Sunday"`. See [Convert Object To Text][] |
|                                       | where `Object` property has a value of `DayOfWeek.Monday`    | `"Monday"`    | N/A | Converts `DayOfWeek.Monday` to `"Monday"`. See [Convert Object To Text][] |
|                                       | where `Object` property has a value of `DayOfWeek.Tuesday`   | `"Tuesday"`   | N/A | Converts `DayOfWeek.Tuesday` to `"Tuesday"`. See [Convert Object To Text][] |
|                                       | where `Object` property has a value of `DayOfWeek.Wednesday` | `"Wednesday"` | N/A | Converts `DayOfWeek.Wednesday` to `"Wednesday"`. See [Convert Object To Text][] |
|                                       | where `Object` property has a value of `DayOfWeek.Thursday`  | `"Thursday"`  | N/A | Converts `DayOfWeek.Thursday` to `"Thursday"`. See [Convert Object To Text][] |
|                                       | where `Object` property has a value of `DayOfWeek.Friday`    | `"Friday"`    | N/A | Converts `DayOfWeek.Friday` to `"Friday"`. See [Convert Object To Text][] |
|                                       | where `Object` property has a value of `DayOfWeek.Saturday`  | `"Saturday"`  | N/A | Converts `DayOfWeek.Saturday` to `"Saturday"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `DayOfWeek.Sunday`                | `"0"` | N/A | Converts `DayOfWeek.Sunday` to `"0"`. See [Convert Object To Json][] |
|                                       | where `Object` property has a value of `DayOfWeek.Monday`                | `"1"` | N/A | Converts `DayOfWeek.Monday` to `"1"`. See [Convert Object To Json][] |
|                                       | where `Object` property has a value of `DayOfWeek.Tuesday`               | `"2"` | N/A | Converts `DayOfWeek.Tuesday` to `"2"`. See [Convert Object To Json][] |
|                                       | where `Object` property has a value of `DayOfWeek.Wednesday`             | `"3"` | N/A | Converts `DayOfWeek.Wednesday` to `"3"`. See [Convert Object To Json][] |
|                                       | where `Object` property has a value of `DayOfWeek.Thursday`              | `"4"` | N/A | Converts `DayOfWeek.Thursday` to `"4"`. See [Convert Object To Json][] |
|                                       | where `Object` property has a value of `DayOfWeek.Friday`                | `"5"` | N/A | Converts `DayOfWeek.Friday` to `"5"`. See [Convert Object To Json][] |
|                                       | where `Object` property has a value of `DayOfWeek.Saturday`              | `"6"` | N/A | Converts `DayOfWeek.Saturday` to `"6"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert DayOfWeek to a Number

The following table shows some of the ways that a `DayOfWeek` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]         | `(Int32)DayOfWeek.Sunday`   | `0` | Expression | [Casts][Explicit Casting] `DayOfWeek.Sunday` to `0` |
|                                       | `(Int32)DayOfWeek.Monday`   | `1` | Expression | [Casts][Explicit Casting] `DayOfWeek.Monday` to `1` |
|                                       | `(Int32)DayOfWeek.Tuesday`  | `2` | Expression | [Casts][Explicit Casting] `DayOfWeek.Tuesday` to `2` |
|                                       | `(Int32)DayOfWeek.Wednesday`| `3` | Expression | [Casts][Explicit Casting] `DayOfWeek.Wednesday` to `3` |
|                                       | `(Int32)DayOfWeek.Thursday` | `4` | Expression | [Casts][Explicit Casting] `DayOfWeek.Thursday` to `4` |
|                                       | `(Int32)DayOfWeek.Friday`   | `5` | Expression | [Casts][Explicit Casting] `DayOfWeek.Friday` to `5` |
|                                       | `(Int32)DayOfWeek.Saturday` | `6` | Expression | [Casts][Explicit Casting] `DayOfWeek.Saturday` to `6` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(DayOfWeek.Sunday)`   | `0` | Expression | Converts `DayOfWeek.Sunday` to `0`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(DayOfWeek.Monday)`   | `1` | Expression | Converts `DayOfWeek.Monday` to `1`.  See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(DayOfWeek.Tuesday)`  | `2` | Expression | Converts `DayOfWeek.Tuesday` to `2`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(DayOfWeek.Wednesday)`| `3` | Expression | Converts `DayOfWeek.Wednesday` to `3`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(DayOfWeek.Thursday)` | `4` | Expression | Converts `DayOfWeek.Thursday` to `4`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(DayOfWeek.Friday)`   | `5` | Expression | Converts `DayOfWeek.Friday` to `5`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(DayOfWeek.Saturday)` | `6` | Expression | Converts `DayOfWeek.Saturday` to `6`. See [Convert.ToInt32][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `DayOfWeek`.
* The Literal Editor is available for [Input][] properties where the data type is `DayOfWeek`.
  * Expression syntax is not supported within the Literal Editor for the `DayOfWeek` data type.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `DayOfWeek`.

### Known Limitations

None

## See Also

### Related Data Types

* [Int32][]
* [String][]

### Related Concepts

* [Working with Enums][]
* [Explicit Casting][]

### External Documentation

* [System.DayOfWeek][]
* [System.Enum][]

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Convert.ToInt32]: {{< url "MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url "MSDocs.DotNet.Api.System.Convert.ToString" >}}

[System.Enum]: {{< url "MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
[System.DayOfWeek]: {{< url "MSDocs.DotNet.Api.System.DayOfWeek.MainDoc" >}}
[Enum.Parse]: {{< url "MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url "MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url "MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Instantiating an enumeration type]: {{< url "MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url "MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Working with Enums]: {{< url "Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url "Cortex.Reference.Concepts.ObjectCasting.ExplicitCast" >}}
