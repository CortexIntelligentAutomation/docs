---
title: "StringSplitOptions"
linkTitle: "StringSplitOptions"
description: "Used to specify settings for splitting text (i.e. whether to include or remove empty entries from results)."
weight: 1
---

# {{% param title %}}

<p class="namespace">(System.StringSplitOptions)</p>

## Summary

The `StringSplitOptions` is used to specify settings for splitting text (i.e. whether to include or remove empty entries from results).

`StringSplitOptions` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Text                                                     |
| **Name:**              | `StringSplitOptions`                                     |
| **Full Name:**         | `System.StringSplitOptions`                              |
| **Alias:**             | N/A                                                      |
| **Description:**       | Specifies settings for splitting text (i.e. whether to include or remove empty entries from results). |
| **Default Value:**     | `(StringSplitOptions)0`                             |
| **Can be used as:**    | `StringSplitOptions`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)StringSplitOptions.None` or `(System.Int16)StringSplitOptions.None` or `(short)StringSplitOptions.None`)  |
|                        | `Int32` (e.g. `(Int32)StringSplitOptions.None` or `(System.Int32)StringSplitOptions.None` or `(int)StringSplitOptions.None`)  |
|                        | `Int64` (e.g. `(Int64)StringSplitOptions.None` or `(System.Int64)StringSplitOptions.None` or `(long)StringSplitOptions.None`)  |
|                        | `Single` (e.g. `(Single)StringSplitOptions.None` or `(System.Single)StringSplitOptions.None` or `(float)StringSplitOptions.None`)  |
|                        | `Double` (e.g. `(Double)StringSplitOptions.None` or `(System.Double)StringSplitOptions.None` or `(double)StringSplitOptions.None`)  |

## Values

### None

| | |
|-|-|
| **Name:**    | None                                           |
| **Value:**   | [Int32][] with value `0`                       |
| **Notes:**   | Empty entries and trailing or leading whitespaces (at the start or end of text) are not removed.                 |

### RemoveEmptyEntries

| | |
|-|-|
| **Name:**    | RemoveEmptyEntries                                         |
| **Value:**   | [Int32][] with value `1`                                   |
| **Notes:**   | Empty entries are removed but trailing or leading whitespaces (at the start or end of text) are not removed.                                 |

### TrimEntries

| | |
|-|-|
| **Name:**    | TrimEntries                                                                                |
| **Value:**   | [Int32][] with value `2`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

## Remarks

### Create StringSplitOptions

The following table shows some of the ways that `StringSplitOptions` can be created using the expression editor.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `StringSplitOptions` literal | `None` | `StringSplitOptions.None` | Literal | Empty entries are not removed. |
| | `RemoveEmptyEntries` | `StringSplitOptions.RemoveEmptyEntries` | Literal | Empty entries are removed. |
| | `TrimEntries` | `StringSplitOptions.TrimEntries` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| Use a `StringSplitOptions` expression | `StringSplitOptions.None` | `StringSplitOptions.None`| Expression | Empty entries are not removed.|
| | `StringSplitOptions.RemoveEmptyEntries` | `StringSplitOptions.RemoveEmptyEntries`| Expression | Empty entries are removed. |
| | `StringSplitOptions.TrimEntries` | `StringSplitOptions.TrimEntries`| Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` | `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` | Expression | Empty entries are removed and trailing and leading whitespaces are removed. |
| Use [Explicit Casting][] | `(StringSplitOptions)0` | `StringSplitOptions.None`| Expression | Empty entries are not removed. |
| | `(StringSplitOptions)1` | `StringSplitOptions.RemoveEmptyEntries`| Expression | Empty entries are removed. |
| | `(StringSplitOptions)2` | `StringSplitOptions.TrimEntries`| Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(StringSplitOptions)3` | `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries`| Expression | Empty entries are removed and trailing and leading whitespaces are removed. |
| Use `Enum.Parse` | `(StringSplitOptions)Enum.Parse(typeof(StringSplitOptions), "None")` | `StringSplitOptions.None`| Expression | Parses `"None"` and converts it to `StringSplitOptions.None`. See [Enum.Parse][] |
| | `(StringSplitOptions)Enum.Parse(typeof(StringSplitOptions), "RemoveEmptyEntries")` | `StringSplitOptions.RemoveEmptyEntries`| Expression | Parses `"RemoveEmptyEntries"` and converts it to `StringSplitOptions.RemoveEmptyEntries`. See [Enum.Parse][] |
| | `(StringSplitOptions)Enum.Parse(typeof(StringSplitOptions), "TrimEntries")` | `StringSplitOptions.TrimEntries`| Expression | Parses `"TrimEntries"` and converts it to `StringSplitOptions.TrimEntries`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(StringSplitOptions)Enum.ToObject(typeof(StringSplitOptions), 0)` | `StringSplitOptions.None`| Expression | Converts `0` to `StringSplitOptions.None` value. See [Enum.ToObject][] |
| | `(StringSplitOptions)Enum.ToObject(typeof(StringSplitOptions), 1)` | `StringSplitOptions.RemoveEmptyEntries`| Expression | Converts `1` to `StringSplitOptions.RemoveEmptyEntries` value. See [Enum.ToObject][] |
| | `(StringSplitOptions)Enum.ToObject(typeof(StringSplitOptions), 2)` | `StringSplitOptions.TrimEntries`| Expression | Converts `2` to `StringSplitOptions.TrimEntries` value. See [Enum.ToObject][] |
| | `(StringSplitOptions)Enum.ToObject(typeof(StringSplitOptions), 3)` | `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` | Expression | Converts `3` to `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` value. See [Enum.ToObject][] |


Please see [Instantiating an enumeration type][] for further information.

### Convert StringSplitOptions to Text

The following table shows some of the ways that a `StringSplitOptions` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `StringSplitOptions.None.ToString()` | `"None"` | Expression | Converts `StringSplitOptions.None` to `"None"`. See [Enum.ToString][] |
| | `StringSplitOptions.RemoveEmptyEntries.ToString()` | `"RemoveEmptyEntries"` | Expression | Converts `StringSplitOptions.RemoveEmptyEntries` to `"RemoveEmptyEntries"`. See [Enum.ToString][] |
| | `StringSplitOptions.TrimEntries.ToString()` | `"TrimEntries"` | Expression | Converts `StringSplitOptions.TrimEntries` to `"TrimEntries"`. See [Enum.ToString][] |
| | `(StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries).ToString()` | `"RemoveEmptyEntries, TrimEntries"` | Expression | Converts `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` to `"RemoveEmptyEntries, TrimEntries"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(StringSplitOptions.None)` | `"None"` | Expression | Converts `StringSplitOptions.None` to `"None"`. See [Convert.ToString][] |
| | `Convert.ToString(StringSplitOptions.RemoveEmptyEntries)` | `"RemoveEmptyEntries"` | Expression | Converts `StringSplitOptions.RemoveEmptyEntries` to `"RemoveEmptyEntries"`. See [Convert.ToString][] |
| | `Convert.ToString(StringSplitOptions.TrimEntries)` | `"TrimEntries"` | Expression | Converts `StringSplitOptions.TrimEntries` to `"TrimEntries"`. See [Convert.ToString][] |
| | `Convert.ToString(StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries)` | `"RemoveEmptyEntries, TrimEntries"` | Expression | Converts `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` to `"RemoveEmptyEntries, TrimEntries"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `StringSplitOptions.None` | `"None"` | N/A  | Converts `StringSplitOptions.None` to `"None"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `StringSplitOptions.RemoveEmptyEntries` | `"RemoveEmptyEntries"` | N/A  | Converts `StringSplitOptions.RemoveEmptyEntries` to `"RemoveEmptyEntries"`. See [Convert Object To Text][] || | where `Object` property has a value of `StringSplitOptions.RemoveEmptyEntries` | `"RemoveEmptyEntries"` | N/A  | |Converts `StringSplitOptions.RemoveEmptyEntries` to `"RemoveEmptyEntries"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `StringSplitOptions.TrimEntries` | `"TrimEntries"` | N/A  | Converts `StringSplitOptions.TrimEntries` to `"TrimEntries"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` | `"RemoveEmptyEntries, TrimEntries"` | N/A  | Converts `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` to `"RemoveEmptyEntries, TrimEntries"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `StringSplitOptions.None` | `"0"` | N/A  | Converts `StringSplitOptions.None` to `"0"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `StringSplitOptions.RemoveEmptyEntries` | `"1"` | N/A  | Converts `StringSplitOptions.RemoveEmptyEntries` to `"1"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `StringSplitOptions.TrimEntries` | `"2"` | N/A  | Converts `StringSplitOptions.TrimEntries` to `"2"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` | `"3"` | N/A  | Converts `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` to `"3"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert StringSplitOptions to a Number

The following table shows some of the ways that a `StringSplitOptions` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)StringSplitOptions.None`   | `0` | Expression | [Casts][Explicit Casting] `StringSplitOptions.None` to `0` |
|                                       | `(Int32)StringSplitOptions.RemoveEmptyEntries`   | `1` | Expression | [Casts][Explicit Casting] `StringSplitOptions.RemoveEmptyEntries` to `1` |
|                                       | `(Int32)StringSplitOptions.TrimEntries`   | `2` | Expression | [Casts][Explicit Casting] `StringSplitOptions.TrimEntries` to `2` |
|                                       | `(Int32)(StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries)`   | `3` | Expression | [Casts][Explicit Casting] `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` to `3` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(StringSplitOptions.None)`   | `0` | Expression | Converts `StringSplitOptions.None` to `0`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(StringSplitOptions.RemoveEmptyEntries)`   | `1` | Expression | Converts `StringSplitOptions.RemoveEmptyEntries` to `1`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(StringSplitOptions.TrimEntries)`   | `2` | Expression | Converts `StringSplitOptions.TrimEntries` to `2`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries)`   | `3` | Expression | Converts `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` to `3`. See [Convert.ToInt32][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `StringSplitOptions`.
* The Literal Editor is available for [Input][] properties where the data type is `StringSplitOptions`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `StringSplitOptions`.

### Known Limitations

Currently it's not possible to specify settings to both trim text and remove empty whitespaces using the Literal Editor. This can be done using the Expression Editor; see the last example in "Use a `StringSplitOptions` expression" in the [Create StringSplitOptions][StringSplitOptions Property] table.

## See Also

### Related Data Types

* [Int32][]
* [String][]

### Related Concepts

* [Working with Enums][]
* [Explicit Casting][]

### External Documentation

* [StringSplitOptions][]

[Split Text]: {{< url path="Cortex.Reference.Blocks.Text.SplitText.SplitText.MainDoc" >}}

[StringSplitOptions Property]: {{< ref "#create-stringsplitoptions" >}}

[StringSplitOptions]: {{< url path="MSDocs.DotNet.Api.System.StringSplitOptions" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}

