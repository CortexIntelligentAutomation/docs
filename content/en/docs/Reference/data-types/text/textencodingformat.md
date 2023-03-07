---
title: "TextEncodingFormat"
linkTitle: "TextEncodingFormat"
description: "Used to represent formats available for encoding and decoding text."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Text.Encoding.TextEncodingFormat)</p>

## Summary

The `TextEncodingFormat` data type is used to represent formats available for encoding and decoding text.

`TextEncodingFormat` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Text                                                  |
| **Name:**              | `TextEncodingFormat`                                |
| **Full Name:**         | `Cortex.DataTypes.Text.Encoding.TextEncodingFormat`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | The encoding format used while encoding/decoding text. |
| **Default Value:**     | `(TextEncodingFormat)0`                             |
| **Can be used as:**    | `TextEncodingFormat`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)TextEncodingFormat.Base64` or `(System.Int16)TextEncodingFormat.Base64` or `(short)TextEncodingFormat.Base64`)  |
|                        | `Int32` (e.g. `(Int32)TextEncodingFormat.Base64` or `(System.Int32)TextEncodingFormat.Base64` or `(int)TextEncodingFormat.Base64`)  |
|                        | `Int64` (e.g. `(Int64)TextEncodingFormat.Base64` or `(System.Int64)TextEncodingFormat.Base64` or `(long)TextEncodingFormat.Base64`)  |
|                        | `Single` (e.g. `(Single)TextEncodingFormat.Base64` or `(System.Single)TextEncodingFormat.Base64` or `(float)TextEncodingFormat.Base64`)  |
|                        | `Double` (e.g. `(Double)TextEncodingFormat.Base64` or `(System.Double)TextEncodingFormat.Base64` or `(double)TextEncodingFormat.Base64`)  |

## Values

### Base64

| | |
|-|-|
| **Name:**    | Base64                                         |
| **Value:**   | [Int32][] with value `0`                       |
| **Notes:**   | Base64 encoding format. |

### Url

| | |
|-|-|
| **Name:**    | Url                                                |
| **Value:**   | [Int32][] with value `1`                           |
| **Notes:**   | Url encoding format. |

### Hex

| | |
|-|-|
| **Name:**    | Hex                                             |
| **Value:**   | [Int32][] with value `2`                        |
| **Notes:**   | Hex (Hexadecimal) encoding format. |

### Html

| | |
|-|-|
| **Name:**    | Html                                           |
| **Value:**   | [Int32][] with value `3`                       |
| **Notes:**   | Html encoding format. |

### Utf8

| | |
|-|-|
| **Name:**    | Utf8                                           |
| **Value:**   | [Int32][] with value `4`                       |
| **Notes:**   | Utf8 encoding format. |

### Base64Url

| | |
|-|-|
| **Name:**    | Base64Url                                      |
| **Value:**   | [Int32][] with value `5`                       |
| **Notes:**   | Base64Url encoding format.|

## Remarks

### Creating a TextEncodingFormat

The following table shows some of the ways that `TextEncodingFormat` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `TextEncodingFormat` literal | `Base64` | `TextEncodingFormat.Text`| Literal | Used when encoding to Base64. |
| | `Url` | `TextEncodingFormat.Url`| Literal | Used when encoding to Url. |
| | `Hex` | `TextEncodingFormat.Hex`| Literal | Used when encoding to Hex. |
| | `Html` | `TextEncodingFormat.Html`| Literal | Used when encoding to Html. |
| | `Utf8` | `TextEncodingFormat.Utf8`| Literal | Used when encoding to Utf8. |
| | `Base64Url` | `TextEncodingFormat.Base64Url`| Literal | Used when encoding to Base64Url. |
| Use a `TextEncodingFormat` expression    | `TextEncodingFormat.Base64` | `TextEncodingFormat.Base64`| Expression | Used when encoding to Base64.|
|                                           | `TextEncodingFormat.Url` | `TextEncodingFormat.Url`| Expression | Used when encoding to Url. |
|                                           | `TextEncodingFormat.Hex` | `TextEncodingFormat.Hex`| Expression | Used when encoding to Hex. |
|                                           | `TextEncodingFormat.Html` | `TextEncodingFormat.Html`| Expression | Used when encoding to Html. |
|                                           | `TextEncodingFormat.Utf8` | `TextEncodingFormat.Utf8`| Expression | Used when encoding to Utf8. |
|                                           | `TextEncodingFormat.Base64Url` | `TextEncodingFormat.Base64Url`| Expression | Used when encoding to Base64Url. |
| Use [Explicit Casting][]  | `(TextEncodingFormat)0` | `TextEncodingFormat.Base64`| Expression | Used when encoding to Base64. |
|                           | `(TextEncodingFormat)1` | `TextEncodingFormat.Url`| Expression | Used when encoding to Url. |
|                           | `(TextEncodingFormat)2` | `TextEncodingFormat.Hex`| Expression | Used when encoding to Hex. |
|                           | `(TextEncodingFormat)3` | `TextEncodingFormat.Html`| Expression | Used when encoding to Html. |
|                           | `(TextEncodingFormat)4` | `TextEncodingFormat.Utf8`| Expression | Used when encoding to Utf8. |
|                           | `(TextEncodingFormat)5` | `TextEncodingFormat.Base64Url`| Expression | Used when encoding to Base64Url. |
| Use `Enum.Parse`  | `(TextEncodingFormat)Enum.Parse(typeof(TextEncodingFormat), "Base64")` | `TextEncodingFormat.Base64`| Expression | Parses `"Base64"` and converts it to `TextEncodingFormat.Base64`. See [Enum.Parse][] |
|                   | `(TextEncodingFormat)Enum.Parse(typeof(TextEncodingFormat), "Url")` | `TextEncodingFormat.Url`| Expression | Parses `"Url"` and converts it to `TextEncodingFormat.Url`. See [Enum.Parse][] |
|                   | `(TextEncodingFormat)Enum.Parse(typeof(TextEncodingFormat), "Hex")` | `TextEncodingFormat.Hex`| Expression | Parses `"Hex"` and converts it to `TextEncodingFormat.Hex`. See [Enum.Parse][] |
|                   | `(TextEncodingFormat)Enum.Parse(typeof(TextEncodingFormat), "Html")` | `TextEncodingFormat.Html`| Expression | Parses `"Html"` and converts it to `TextEncodingFormat.Html`. See [Enum.Parse][] |
|                   | `(TextEncodingFormat)Enum.Parse(typeof(TextEncodingFormat), "Utf8")` | `TextEncodingFormat.Utf8`| Expression | Parses `"Utf8"` and converts it to `TextEncodingFormat.Utf8`. See [Enum.Parse][] |
|                   | `(TextEncodingFormat)Enum.Parse(typeof(TextEncodingFormat), "Base64Url")` | `TextEncodingFormat.Base64Url`| Expression | Parses `"Base64Url"` and converts it to `TextEncodingFormat.Base64Url`. See [Enum.Parse][] |
| Use `Enum.ToObject`   | `(TextEncodingFormat)Enum.ToObject(typeof(TextEncodingFormat), 0)` | `TextEncodingFormat.Base64`| Expression | Converts `0` to `TextEncodingFormat.Base64` value. See [Enum.ToObject][] |
|                       | `(TextEncodingFormat)Enum.ToObject(typeof(TextEncodingFormat), 1)` | `TextEncodingFormat.Url`| Expression | Converts `1` to `TextEncodingFormat.Url` value. See [Enum.ToObject][] |
|                       | `(TextEncodingFormat)Enum.ToObject(typeof(TextEncodingFormat), 2)` | `TextEncodingFormat.Hex`| Expression | Converts `2` to `TextEncodingFormat.Hex` value. See [Enum.ToObject][] |
|                       | `(TextEncodingFormat)Enum.ToObject(typeof(TextEncodingFormat), 3)` | `TextEncodingFormat.Html`| Expression | Converts `3` to `TextEncodingFormat.Html` value. See [Enum.ToObject][] |
|                       | `(TextEncodingFormat)Enum.ToObject(typeof(TextEncodingFormat), 4)` | `TextEncodingFormat.Utf8`| Expression | Converts `4` to `TextEncodingFormat.Utf8` value. See [Enum.ToObject][] |
|                       | `(TextEncodingFormat)Enum.ToObject(typeof(TextEncodingFormat), 5)` | `TextEncodingFormat.Base64Url`| Expression | Converts `5` to `TextEncodingFormat.Base64Url` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert TextEncodingFormat to Text

The following table shows some of the ways that a `TextEncodingFormat` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString`    | `TextEncodingFormat.Base64.ToString()` | `"Base64"` | Expression | Converts `TextEncodingFormat.Base64` to `"Base64"`. See [Enum.ToString][] |
|                   | `TextEncodingFormat.Url.ToString()` | `"Url"` | Expression | Converts `TextEncodingFormat.Url` to `"Url"`. See [Enum.ToString][] |
|                   | `TextEncodingFormat.Hex.ToString()` | `"Hex"` | Expression | Converts `TextEncodingFormat.Hex` to `"Hex"`. See [Enum.ToString][] |
|                   | `TextEncodingFormat.Html.ToString()` | `"Html"` | Expression | Converts `TextEncodingFormat.Html` to `"Html"`. See [Enum.ToString][] |
|                   | `TextEncodingFormat.Utf8.ToString()` | `"Utf8"` | Expression | Converts `TextEncodingFormat.Utf8` to `"Utf8"`. See [Enum.ToString][] |
|                   | `TextEncodingFormat.Base64Url.ToString()` | `"Base64Url"` | Expression | Converts `TextEncodingFormat.Base64Url` to `"Base64Url"`. See [Enum.ToString][] |
| Use `Convert.ToString`    | `Convert.ToString(TextEncodingFormat.Base64)` | `"Base64"` | Expression | Converts `TextEncodingFormat.Base64` to `"Base64"`. See [Convert.ToString][] |
|                           | `Convert.ToString(TextEncodingFormat.Url)` | `"Url"` | Expression | Converts `TextEncodingFormat.Url` to `"Url"`. See [Convert.ToString][] |
|                           | `Convert.ToString(TextEncodingFormat.Hex)` | `"Hex"` | Expression | Converts `TextEncodingFormat.Hex` to `"Hex"`. See [Convert.ToString][] |
|                           | `Convert.ToString(TextEncodingFormat.Html)` | `"Html"` | Expression | Converts `TextEncodingFormat.Html` to `"Html"`. See [Convert.ToString][] |
|                           | `Convert.ToString(TextEncodingFormat.Utf8)` | `"Utf8"` | Expression | Converts `TextEncodingFormat.Utf8` to `"Utf8"`. See [Convert.ToString][] |
|                           | `Convert.ToString(TextEncodingFormat.Base64Url)` | `"Base64Url"` | Expression | Converts `TextEncodingFormat.Base64Url` to `"Base64Url"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block    | where `Object` property has a value of `TextEncodingFormat.Base64` | `"Base64"` | N/A  | Converts `TextEncodingFormat.Base64` to `"Base64"`. See [Convert Object To Text][] |
|                                       | where `Object` property has a value of `TextEncodingFormat.Url` | `"Url"` | N/A  | Converts `TextEncodingFormat.Url` to `"Url"`. See [Convert Object To Text][] |
|                                       | where `Object` property has a value of `TextEncodingFormat.Hex` | `"Hex"` | N/A  | Converts `TextEncodingFormat.Hex` to `"Hex"`. See [Convert Object To Text][] |
|                                       | where `Object` property has a value of `TextEncodingFormat.Html` | `"Html"` | N/A  | Converts `TextEncodingFormat.Html` to `"Html"`. See [Convert Object To Text][] |
|                                       | where `Object` property has a value of `TextEncodingFormat.Utf8` | `"Utf8"` | N/A  | Converts `TextEncodingFormat.Utf8` to `"Utf8"`. See [Convert Object To Text][] |
|                                       | where `Object` property has a value of `TextEncodingFormat.Base64Url` | `"Base64Url"` | N/A  | Converts `TextEncodingFormat.Base64Url` to `"Base64Url"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `TextEncodingFormat.Base64` | `"0"` | N/A  | Converts `TextEncodingFormat.Base64` to `"0"`. See [Convert Object To Json][] |
|                                       | where `Object` property has a value of `TextEncodingFormat.Url` | `"1"` | N/A  | Converts `TextEncodingFormat.Url` to `"1"`. See [Convert Object To Json][] |
|                                       | where `Object` property has a value of `TextEncodingFormat.Hex` | `"2"` | N/A  | Converts `TextEncodingFormat.Hex` to `"2"`. See [Convert Object To Json][] |
|                                       | where `Object` property has a value of `TextEncodingFormat.Html` | `"3"` | N/A  | Converts `TextEncodingFormat.Html` to `"3"`. See [Convert Object To Json][] |
|                                       | where `Object` property has a value of `TextEncodingFormat.Utf8` | `"4"` | N/A  | Converts `TextEncodingFormat.Utf8` to `"4"`. See [Convert Object To Json][] |
|                                       | where `Object` property has a value of `TextEncodingFormat.Base64Url` | `"5"` | N/A  | Converts `TextEncodingFormat.Base64Url` to `"5"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert TextEncodingFormat to a Number

The following table shows some of the ways that a `TextEncodingFormat` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]  | `(Int32)TextEncodingFormat.Base64`   | `0` | Expression | [Casts][Explicit Casting] `TextEncodingFormat.Base64` to `0` |
|                           | `(Int32)TextEncodingFormat.Url`   | `1` | Expression | [Casts][Explicit Casting] `TextEncodingFormat.Url` to `1` |
|                           | `(Int32)TextEncodingFormat.Hex`   | `2` | Expression | [Casts][Explicit Casting] `TextEncodingFormat.Hex` to `2` |
|                           | `(Int32)TextEncodingFormat.Html`   | `3` | Expression | [Casts][Explicit Casting] `TextEncodingFormat.Html` to `3` |
|                           | `(Int32)TextEncodingFormat.Utf8`   | `4` | Expression | [Casts][Explicit Casting] `TextEncodingFormat.Utf8` to `4` |
|                           | `(Int32)TextEncodingFormat.Base64Url`   | `5` | Expression | [Casts][Explicit Casting] `TextEncodingFormat.Base64Url` to `5` |
| Use `Convert.ToInt32`     | `Convert.ToInt32(TextEncodingFormat.Base64)`   | `0` | Expression | Converts `TextEncodingFormat.Base64` to `0`. See [Convert.ToInt32][] |
|                           | `Convert.ToInt32(TextEncodingFormat.Url)`   | `1` | Expression | Converts `TextEncodingFormat.Url` to `1`. See [Convert.ToInt32][] |
|                           | `Convert.ToInt32(TextEncodingFormat.Hex)`   | `2` | Expression | Converts `TextEncodingFormat.Hex` to `2`. See [Convert.ToInt32][] |
|                           | `Convert.ToInt32(TextEncodingFormat.Html)`   | `3` | Expression | Converts `TextEncodingFormat.Html` to `3`. See [Convert.ToInt32][] |
|                           | `Convert.ToInt32(TextEncodingFormat.Utf8)`   | `4` | Expression | Converts `TextEncodingFormat.Utf8` to `4`. See [Convert.ToInt32][] |
|                           | `Convert.ToInt32(TextEncodingFormat.Base64Url)`   | `5` | Expression | Converts `TextEncodingFormat.Base64Url` to `5`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `TextEncodingFormat`.
- The Literal Editor is available for [Input][] properties where the data type is `TextEncodingFormat`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `TextEncodingFormat`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]
- [Working with Text][]

### External Documentation

- [System.Enum][]

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[System.Enum]: {{< url "MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Working with Enums]: {{< url "Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[working with Text]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
[Explicit Casting]: {{< url "Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Enum.Parse]: {{< url "MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url "MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url "MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url "MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url "MSDocs.DotNet.Api.System.Convert.ToString" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Instantiating an enumeration type]: {{< url "MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url "MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
