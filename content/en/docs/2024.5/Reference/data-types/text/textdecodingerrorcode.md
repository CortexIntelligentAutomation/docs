---
title: "TextDecodingErrorCode"
linkTitle: "TextDecodingErrorCode"
description: "Used to represent an error code explaining the reason an `TextDecodingException` occurred."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Text.Encoding.TextDecodingErrorCode)</p>

## Summary

The `TextDecodingErrorCode` data type is used to represent an error code explaining the reason a [TextDecodingException][] occurred. For more information on the exception itself, see [TextDecodingException][].

`TextDecodingErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Text                                               |
| **Name:**              | `TextDecodingErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.Text.Encoding.TextDecodingErrorCode`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Error code explaining the reason a [TextDecodingException][] occurred. |
| **Default Value:**     | `(TextDecodingErrorCode)0`                             |
| **Can be used as:**    | `TextDecodingErrorCode`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)TextDecodingErrorCode.Base64InvalidCharacter` or `(System.Int16)TextDecodingErrorCode.Base64InvalidCharacter` or `(short)TextDecodingErrorCode.Base64InvalidCharacter`)  |
|                        | `Int32` (e.g. `(Int32)TextDecodingErrorCode.Base64InvalidCharacter` or `(System.Int32)TextDecodingErrorCode.Base64InvalidCharacter` or `(int)TextDecodingErrorCode.Base64InvalidCharacter`)  |
|                        | `Int64` (e.g. `(Int64)TextDecodingErrorCode.Base64InvalidCharacter` or `(System.Int64)TextDecodingErrorCode.Base64InvalidCharacter` or `(long)TextDecodingErrorCode.Base64InvalidCharacter`)  |
|                        | `Single` (e.g. `(Single)TextDecodingErrorCode.Base64InvalidCharacter` or `(System.Single)TextDecodingErrorCode.Base64InvalidCharacter` or `(float)TextDecodingErrorCode.Base64InvalidCharacter`)  |
|                        | `Double` (e.g. `(Double)TextDecodingErrorCode.Base64InvalidCharacter` or `(System.Double)TextDecodingErrorCode.Base64InvalidCharacter` or `(double)TextDecodingErrorCode.Base64InvalidCharacter`)  |

## Values

### Base64InvalidCharacter

| | |
|-|-|
| **Name:**    | Base64InvalidCharacter                                     |
| **Value:**   | [Int32][] with value `100`                      |
| **Notes:**   | Used when a [TextDecodingException][] occurred due to the provided text containing one or more invalid characters. See [Invalid Base64 character][InvalidBase64]. |

### HexOddNumberOfCharacters

| | |
|-|-|
| **Name:**    | HexOddNumberOfCharacters                                     |
| **Value:**   | [Int32][] with value `300`                      |
| **Notes:**   | Used when a [TextDecodingException][] occurred due to the provided text containing an odd number of characters. See [Odd number of characters using Hex][InvalidHex]. |

### Base64UrlInvalidCharacter

| | |
|-|-|
| **Name:**    | Base64UrlInvalidCharacter                                    |
| **Value:**   | [Int32][] with value `600`                      |
| **Notes:**   | Used when a [TextDecodingException][] occurred due to the provided text containing one or more invalid characters. See [Invalid Base64Url character][InvalidBase64Url]. |

## Remarks

### Create a TextDecodingErrorCode

The following table shows some of the ways that `TextDecodingErrorCode` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `TextDecodingErrorCode` expression | `TextDecodingErrorCode.Base64InvalidCharacter` | `TextDecodingErrorCode.Base64InvalidCharacter`| Expression | Indicates a [TextDecodingException][] occurred due to the text provided containing one or more characters that are invalid in [Base64][] encoded text. |
| | `TextDecodingErrorCode.HexOddNumberOfCharacters` | `TextDecodingErrorCode.HexOddNumberOfCharacters`| Expression | Indicates a [TextDecodingException][] occurred due to the text provided containing an odd number of characters which is invalid for [Hex][] encoded text. |
| | `TextDecodingErrorCode.Base64UrlInvalidCharacter` | `TextDecodingErrorCode.Base64UrlInvalidCharacter`| Expression | Indicates a [TextDecodingException][] occurred due to the text provided containing one or more characters that are invalid in [Base64Url][] encoded text. |
| Use [Explicit Casting][] | `(TextDecodingErrorCode)100` | `TextDecodingErrorCode.Base64InvalidCharacter`| Expression | Indicates a [TextDecodingException][] occurred due to the text provided containing one or more characters that are invalid in [Base64][] encoded text. |
| | `(TextDecodingErrorCode)300` | `TextDecodingErrorCode.HexOddNumberOfCharacters`| Expression | Indicates a [TextDecodingException][] occurred due to the text provided containing an odd number of characters which is invalid for [Hex][] encoded text. |
| | `(TextDecodingErrorCode)600` | `TextDecodingErrorCode.Base64UrlInvalidCharacter`| Expression | Indicates a [TextDecodingException][] occurred due to the text provided containing one or more characters that are invalid in [Base64Url][] encoded text. |
| Use `Enum.Parse` | `(TextDecodingErrorCode)Enum.Parse(typeof(TextDecodingErrorCode), "Base64InvalidCharacter")` | `TextDecodingErrorCode.Base64InvalidCharacter`| Expression | Parses `"Base64InvalidCharacter"` and converts it to `TextDecodingErrorCode.Base64InvalidCharacter`. See [Enum.Parse][] |
| | `(TextDecodingErrorCode)Enum.Parse(typeof(TextDecodingErrorCode), "HexOddNumberOfCharacters")` | `TextDecodingErrorCode.HexOddNumberOfCharacters`| Expression | Parses `"HexOddNumberOfCharacters"` and converts it to `TextDecodingErrorCode.HexOddNumberOfCharacters`. See [Enum.Parse][] |
| | `(TextDecodingErrorCode)Enum.Parse(typeof(TextDecodingErrorCode), "Base64UrlInvalidCharacter)` | `TextDecodingErrorCode.Base64UrlInvalidCharacter`| Expression | Parses `"Base64UrlInvalidCharacter"` and converts it to `TextDecodingErrorCode.Base64UrlInvalidCharacer`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(TextDecodingErrorCode)Enum.ToObject(typeof(TextDecodingErrorCode), 100)` | `TextDecodingErrorCode.Base64InvalidCharacter`| Expression | Converts `100` to `TextDecodingErrorCode.Base64InvalidCharacter` value. See [Enum.ToObject][] |
| | `(TextDecodingErrorCode)Enum.ToObject(typeof(TextDecodingErrorCode), 300)` | `TextDecodingErrorCode.HexOddNumberOfCharacters`| Expression | Converts `300` to `TextDecodingErrorCode.HexOddNumberOfCharacters` value. See [Enum.ToObject][] |
| | `(TextDecodingErrorCode)Enum.ToObject(typeof(TextDecodingErrorCode), 600)` | `TextDecodingErrorCode.Base64UrlInvalidCharacter`| Expression | Converts `600` to `TextDecodingErrorCode.Base64UrlInvalidCharacter` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert TextDecodingErrorCode to Text

The following table shows some of the ways that a `TextDecodingErrorCode` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `TextDecodingErrorCode.Base64InvalidCharacter.ToString()` | `"Base64InvalidCharacter"` | Expression | Converts `TextDecodingErrorCode.Base64InvalidCharacter` to `"Base64InvalidCharacter"`. See [Enum.ToString][] |
| | `TextDecodingErrorCode.HexOddNumberOfCharacters.ToString()` | `"HexOddNumberOfCharacters"` | Expression | Converts `TextDecodingErrorCode.HexOddNumberOfCharacters` to `"HexOddNumberOfCharacters"`. See [Enum.ToString][] |
| | `TextDecodingErrorCode.Base64UrlInvalidCharacter.ToString()` | `"Base64UrlInvalidCharacter"` | Expression | Converts `TextDecodingErrorCode.Base64UrlInvalidCharacter` to `"Base64UrlInvalidCharacter"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(TextDecodingErrorCode.Base64InvalidCharacter)` | `"Base64InvalidCharacter"` | Expression | Converts `TextDecodingErrorCode.Base64InvalidCharacter` to `"Base64InvalidCharacter"`. See [Convert.ToString][] |
| | `Convert.ToString(TextDecodingErrorCode.HexOddNumberOfCharacters)` | `"HexOddNumberOfCharacters"` | Expression | Converts `TextDecodingErrorCode.HexOddNumberOfCharacters` to `"HexOddNumberOfCharacters"`. See [Convert.ToString][] |
| | `Convert.ToString(TextDecodingErrorCode.Base64UrlInvalidCharacter)` | `"Base64UrlInvalidCharacter"` | Expression | Converts `TextDecodingErrorCode.Base64UrlInvalidCharacter` to `"Base64UrlInvalidCharacter"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `TextDecodingErrorCode.Base64InvalidCharacter` | `"Base64InvalidCharacter"` | N/A  | Converts `TextDecodingErrorCode.Base64InvalidCharacter` to `"Base64InvalidCharacter"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `TextDecodingErrorCode.HexOddNumberOfCharacters` | `"HexOddNumberOfCharacters"` | N/A  | Converts `TextDecodingErrorCode.HexOddNumberOfCharacters` to `"HexOddNumberOfCharacters"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `TextDecodingErrorCode.Base64UrlInvalidCharacter` | `"Base64UrlInvalidCharacter"` | N/A  | Converts `TextDecodingErrorCode.Base64UrlInvalidCharacter` to `"Base64UrlInvalidCharacter"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `TextDecodingErrorCode.Base64InvalidCharacter` | `"100"` | N/A  | Converts `TextDecodingErrorCode.Base64InvalidCharacter` to `"100"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `TextDecodingErrorCode.HexOddNumberOfCharacters` | `"300"` | N/A  | Converts `TextDecodingErrorCode.HexOddNumberOfCharacters` to `"300"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `TextDecodingErrorCode.Base64UrlInvalidCharacter` | `"600"` | N/A  | Converts `TextDecodingErrorCode.Base64UrlInvalidCharacter` to `"600"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert TextDecodingErrorCode to a Number

The following table shows some of the ways that a `TextDecodingErrorCode` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)TextDecodingErrorCode.Base64InvalidCharacter`   | `100` | Expression | [Casts][Explicit Casting] `TextDecodingErrorCode.Base64InvalidCharacter` to `100` |
|                                       | `(Int32)TextDecodingErrorCode.HexOddNumberOfCharacters`   | `300` | Expression | [Casts][Explicit Casting] `TextDecodingErrorCode.HexOddNumberOfCharacters` to `300` |
|                                       | `(Int32)TextDecodingErrorCode.Base64UrlInvalidCharacter`   | `600` | Expression | [Casts][Explicit Casting] `TextDecodingErrorCode.Base64UrlInvalidCharacter` to `600` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(TextDecodingErrorCode.Base64InvalidCharacter)`   | `100` | Expression | Converts `TextDecodingErrorCode.Base64InvalidCharacter` to `100`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(TextDecodingErrorCode.HexOddNumberOfCharacters)`   | `300` | Expression | Converts `TextDecodingErrorCode.HexOddNumberOfCharacters` to `300`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(TextDecodingErrorCode.Base64UrlInvalidCharacter)`   | `600` | Expression | Converts `TextDecodingErrorCode.Base64UrlInvalidCharacter` to `600`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `TextDecodingErrorCode`.
- The Literal Editor is available for [Input][] properties where the data type is `TextDecodingErrorCode`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `TextDecodingErrorCode`.

### Known Limitations

None

## See Also

### Related Data Types

- [TextDecodingException][]
- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]
- [Working with Text][WorkingWithText]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[TextDecodingException]: {{< url path="Cortex.Reference.Exceptions.Text.Encoding.TextDecodingException.MainDoc" >}}
[InvalidBase64]: {{< url path="Cortex.Reference.Exceptions.Text.Encoding.TextDecodingException.InvalidBase64" >}}
[InvalidHex]: {{< url path="Cortex.Reference.Exceptions.Text.Encoding.TextDecodingException.InvalidHex" >}}
[InvalidBase64Url]: {{< url path="Cortex.Reference.Exceptions.Text.Encoding.TextDecodingException.InvalidBase64Url" >}}
[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[WorkingWithText]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}
[Base64]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Base64" >}}
[Hex]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Hex" >}}
[Base64Url]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Base64Url" >}}
