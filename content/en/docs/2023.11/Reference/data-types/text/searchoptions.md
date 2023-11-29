---
title: "SearchOptions"
linkTitle: "SearchOptions"
description: "Used to define how text searches determine whether text matches the search (i.e. text contains the searched for text or matches the specified regex or pattern)."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Text.SearchOptions)</p>

{{< workinprogress >}}

## Summary

Used to define how text searches determine whether text matches the search (i.e. text contains the searched for text or matches the specified regex or pattern).

`SearchOptions` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Text                                                     |
| **Name:**              | `SearchOptions`                                     |
| **Full Name:**         | `Cortex.DataTypes.Text.SearchOptions`                              |
| **Alias:**             | N/A                                                      |
| **Description:**       | Used to define how text searches determine whether text matches the search (i.e. text contains the searched for text or matches the specified regex or pattern). |
| **Default Value:**     | `(SearchOptions)0`                             |
| **Can be used as:**    | `SearchOptions`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)SearchOptions.ContainsText` or `(System.Int16)SearchOptions.ContainsText` or `(short)SearchOptions.ContainsText`)  |
|                        | `Int32` (e.g. `(Int32)SearchOptions.ContainsText` or `(System.Int32)SearchOptions.ContainsText` or `(int)SearchOptions.ContainsText`)  |
|                        | `Int64` (e.g. `(Int64)SearchOptions.ContainsText` or `(System.Int64)SearchOptions.ContainsText` or `(long)SearchOptions.ContainsText`)  |
|                        | `Single` (e.g. `(Single)SearchOptions.ContainsText` or `(System.Single)SearchOptions.ContainsText` or `(float)SearchOptions.ContainsText`)  |
|                        | `Double` (e.g. `(Double)SearchOptions.ContainsText` or `(System.Double)SearchOptions.ContainsText` or `(double)SearchOptions.ContainsText`)  |

## Values

### ContainsText

| | |
|-|-|
| **Name:**    | ContainsText                                         |
| **Value:**   | [Int32][] with value `0`                                   |
| **Notes:**   | Matches text exactly with a literal character search. |

### Regex

| | |
|-|-|
| **Name:**    | Regex                                                                                |
| **Value:**   | [Int32][] with value `1`                                                                   |
| **Notes:**   | Matches text that matches the regex provided.  |

### PatternMatching

| | |
|-|-|
| **Name:**    | PatternMatching                                                                                |
| **Value:**   | [Int32][] with value `2`                                                                   |
| **Notes:**   | Matches text that matches the [Pattern Matching Syntax][]. |

## Remarks

### Create SearchOptions

The following table shows some of the ways that `SearchOptions` can be created using the expression editor.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `SearchOptions` literal | `SearchOptions.ContainsText` | `SearchOptions.ContainsText` | Literal | Matches text exactly with a literal character search. |
| | `SearchOptions.Regex` | `SearchOptions.Regex` | Literal | Matches text that matches the regex provided. |
| | `SearchOptions.PatternMatching` | `SearchOptions.PatternMatching` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| Use a `SearchOptions` expression | `SearchOptions.ContainsText` | `SearchOptions.ContainsText`| Expression | Empty entries are not removed.|
| | `SearchOptions.Regex` | `SearchOptions.Regex`| Expression | Empty entries are removed. |
| | `SearchOptions.PatternMatching` | `SearchOptions.PatternMatching`| Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| Use [Explicit Casting][] | `(SearchOptions)0` | `SearchOptions.ContainsText`| Expression | Empty entries are not removed. |
| | `(SearchOptions)1` | `SearchOptions.Regex`| Expression | Empty entries are removed. |
| | `(SearchOptions)2` | `SearchOptions.PatternMatching`| Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| Use `Enum.Parse` | `(SearchOptions)Enum.Parse(typeof(SearchOptions), "ContainsText")` | `SearchOptions.ContainsText`| Expression | Parses `"ContainsText"` and converts it to `SearchOptions.ContainsText`. See [Enum.Parse][] |
| | `(SearchOptions)Enum.Parse(typeof(SearchOptions), "Regex")` | `SearchOptions.Regex`| Expression | Parses `"Regex"` and converts it to `SearchOptions.Regex`. See [Enum.Parse][] |
| | `(SearchOptions)Enum.Parse(typeof(SearchOptions), "PatternMatching")` | `SearchOptions.PatternMatching`| Expression | Parses `"PatternMatching"` and converts it to `SearchOptions.PatternMatching`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(SearchOptions)Enum.ToObject(typeof(SearchOptions), 0)` | `SearchOptions.ContainsText`| Expression | Converts `0` to `SearchOptions.ContainsText` value. See [Enum.ToObject][] |
| | `(SearchOptions)Enum.ToObject(typeof(SearchOptions), 1)` | `SearchOptions.Regex`| Expression | Converts `1` to `SearchOptions.Regex` value. See [Enum.ToObject][] |
| | `(SearchOptions)Enum.ToObject(typeof(SearchOptions), 2)` | `SearchOptions.PatternMatching`| Expression | Converts `2` to `SearchOptions.PatternMatching` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert SearchOptions to Text

The following table shows some of the ways that a `SearchOptions` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `SearchOptions.ContainsText.ToString()` | `"ContainsText"` | Expression | Converts `SearchOptions.ContainsText` to `"ContainsText"`. See [Enum.ToString][] |
| | `SearchOptions.Regex.ToString()` | `"Regex"` | Expression | Converts `SearchOptions.Regex` to `"Regex"`. See [Enum.ToString][] |
| | `SearchOptions.PatternMatching.ToString()` | `"PatternMatching"` | Expression | Converts `SearchOptions.PatternMatching` to `"PatternMatching"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(SearchOptions.ContainsText)` | `"ContainsText"` | Expression | Converts `SearchOptions.ContainsText` to `"ContainsText"`. See [Convert.ToString][] |
| | `Convert.ToString(SearchOptions.Regex)` | `"Regex"` | Expression | Converts `SearchOptions.Regex` to `"Regex"`. See [Convert.ToString][] |
| | `Convert.ToString(SearchOptions.PatternMatching)` | `"PatternMatching"` | Expression | Converts `SearchOptions.PatternMatching` to `"PatternMatching"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `SearchOptions.ContainsText` | `"ContainsText"` | N/A  | Converts `SearchOptions.ContainsText` to `"ContainsText"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `SearchOptions.Regex` | `"Regex"` | N/A  | Converts `SearchOptions.Regex` to `"Regex"`. See [Convert Object To Text][] || | where `Object` property has a value of `SearchOptions.Regex` | `"Regex"` | N/A  | |Converts `SearchOptions.Regex` to `"Regex"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `SearchOptions.PatternMatching` | `"PatternMatching"` | N/A  | Converts `SearchOptions.PatternMatching` to `"PatternMatching"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `SearchOptions.ContainsText` | `"0"` | N/A  | Converts `SearchOptions.ContainsText` to `"0"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `SearchOptions.Regex` | `"1"` | N/A  | Converts `SearchOptions.Regex` to `"1"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `SearchOptions.PatternMatching` | `"2"` | N/A  | Converts `SearchOptions.PatternMatching` to `"2"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert SearchOptions to a Number

The following table shows some of the ways that a `SearchOptions` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)SearchOptions.ContainsText`   | `0` | Expression | [Casts][Explicit Casting] `SearchOptions.ContainsText` to `0` |
|                                       | `(Int32)SearchOptions.Regex`   | `1` | Expression | [Casts][Explicit Casting] `SearchOptions.Regex` to `1` |
|                                       | `(Int32)SearchOptions.PatternMatching`   | `2` | Expression | [Casts][Explicit Casting] `SearchOptions.PatternMatching` to `2` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(SearchOptions.ContainsText)`   | `0` | Expression | Converts `SearchOptions.ContainsText` to `0`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(SearchOptions.Regex)`   | `1` | Expression | Converts `SearchOptions.Regex` to `1`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(SearchOptions.PatternMatching)`   | `2` | Expression | Converts `SearchOptions.PatternMatching` to `2`. See [Convert.ToInt32][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `SearchOptions`.
* The Literal Editor is available for [Input][] properties where the data type is `SearchOptions`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SearchOptions`.

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

None

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
