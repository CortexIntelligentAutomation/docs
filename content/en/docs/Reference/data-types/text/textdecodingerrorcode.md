---
title: "TextDecodingErrorCode"
linkTitle: "TextDecodingErrorCode"
description: "Used to represent an error code explaining the reason an `TextDecodingException` occurred."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Text.Decode.TextDecodingErrorCode)</p>

## Summary

The `TextDecodingErrorCode` data type is used to represent an error code explaining the reason a [TextDecodingException][] occurred. For more information on the exception itself, see [TextDecodingException][].

`TextDecodingErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Decode                                                  |
| **Name:**              | `TextDecodingErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.Text.Decode.TextDecodingErrorCode`         |
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

### Base64URLInvalidCharacter

| | |
|-|-|
| **Name:**    | Base64URLInvalidCharacter                                    |
| **Value:**   | [Int32][] with value `600`                      |
| **Notes:**   | Used when a [TextDecodingException][] occurred due to the provided text containing one or more invalid characters. See [Invalid Base64URL character][InvalidBase64URL]. |

## Remarks

### Create a TextDecodingErrorCode

The following table shows some of the ways that `TextDecodingErrorCode` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `TextDecodingErrorCode` expression | `TextDecodingErrorCode.Base64InvalidCharacter` | `TextDecodingErrorCode.Base64InvalidCharacter`| Expression | Indicates a [TextDecodingException][] occurred due to the text provided containing one or more characters that are invalid in [Base64][] encoded text. |
| | `TextDecodingErrorCode.HexOddNumberOfCharacters` | `TextDecodingErrorCode.HexOddNumberOfCharacters`| Expression | Indicates a [TextDecodingException][] occurred due to the text provided containing an odd number of characters which is invalid for [Hex][] encoded text. |
| | `TextDecodingErrorCode.Base64URLInvalidCharacter` | `TextDecodingErrorCode.Base64URLInvalidCharacter`| Expression | Indicates a [TextDecodingException][] occurred due to the text provided containing one or more characters that are invalid in [Base64URL][] encoded text. |
| Use [Explicit Casting][] | `(TextDecodingErrorCode)100` | `TextDecodingErrorCode.Base64InvalidCharacter`| Expression | Indicates a [TextDecodingException][] occurred due to the text provided containing one or more characters that are invalid in [Base64][] encoded text. |
| | `(TextDecodingErrorCode)300` | `TextDecodingErrorCode.HexOddNumberOfCharacters`| Expression | Indicates a [TextDecodingException][] occurred due to the text provided containing an odd number of characters which is invalid for [Hex][] encoded text. |
| | `(TextDecodingErrorCode)600` | `TextDecodingErrorCode.Base64URLInvalidCharacter`| Expression | Indicates a [TextDecodingException][] occurred due to the text provided containing one or more characters that are invalid in [Base64URL][] encoded text. |
| Use `Enum.Parse` | `(TextDecodingErrorCode)Enum.Parse(typeof(TextDecodingErrorCode), "Base64InvalidCharacter")` | `TextDecodingErrorCode.Base64InvalidCharacter`| Expression | Parses `"Base64InvalidCharacter"` and converts it to `TextDecodingErrorCode.Base64InvalidCharacter`. See [Enum.Parse][] |
| | `(TextDecodingErrorCode)Enum.Parse(typeof(TextDecodingErrorCode), "HexOddNumberOfCharacters")` | `TextDecodingErrorCode.HexOddNumberOfCharacters`| Expression | Parses `"HexOddNumberOfCharacters"` and converts it to `TextDecodingErrorCode.HexOddNumberOfCharacters`. See [Enum.Parse][] |
| | `(TextDecodingErrorCode)Enum.Parse(typeof(TextDecodingErrorCode), "Base64URLInvalidCharacter)` | `TextDecodingErrorCode.Base64URLInvalidCharacter`| Expression | Parses `"Base64URLInvalidCharacter"` and converts it to `TextDecodingErrorCode.Base64URLInvalidCharacer`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(TextDecodingErrorCode)Enum.ToObject(typeof(TextDecodingErrorCode), 100)` | `TextDecodingErrorCode.Base64InvalidCharacter`| Expression | Converts `100` to `TextDecodingErrorCode.Base64InvalidCharacter` value. See [Enum.ToObject][] |
| | `(TextDecodingErrorCode)Enum.ToObject(typeof(TextDecodingErrorCode), 300)` | `TextDecodingErrorCode.HexOddNumberOfCharacters`| Expression | Converts `300` to `TextDecodingErrorCode.HexOddNumberOfCharacters` value. See [Enum.ToObject][] |
| | `(TextDecodingErrorCode)Enum.ToObject(typeof(TextDecodingErrorCode), 600)` | `TextDecodingErrorCode.Base64URLInvalidCharacter`| Expression | Converts `600` to `TextDecodingErrorCode.Base64URLInvalidCharacter` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert TextDecodingErrorCode to Text

The following table shows some of the ways that a `TextDecodingErrorCode` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `TextDecodingErrorCode.Base64InvalidCharacter.ToString()` | `"Base64InvalidCharacter"` | Expression | Converts `TextDecodingErrorCode.Base64InvalidCharacter` to `"Base64InvalidCharacter"`. See [Enum.ToString][] |
| | `TextDecodingErrorCode.HexOddNumberOfCharacters.ToString()` | `"HexOddNumberOfCharacters"` | Expression | Converts `TextDecodingErrorCode.HexOddNumberOfCharacters` to `"HexOddNumberOfCharacters"`. See [Enum.ToString][] |
| | `TextDecodingErrorCode.Base64URLInvalidCharacter.ToString()` | `"Base64URLInvalidCharacter"` | Expression | Converts `TextDecodingErrorCode.Base64URLInvalidCharacter` to `"Base64URLInvalidCharacter"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(TextDecodingErrorCode.Base64InvalidCharacter)` | `"Base64InvalidCharacter"` | Expression | Converts `TextDecodingErrorCode.Base64InvalidCharacter` to `"Base64InvalidCharacter"`. See [Convert.ToString][] |
| | `Convert.ToString(TextDecodingErrorCode.HexOddNumberOfCharacters)` | `"HexOddNumberOfCharacters"` | Expression | Converts `TextDecodingErrorCode.HexOddNumberOfCharacters` to `"HexOddNumberOfCharacters"`. See [Convert.ToString][] |
| | `Convert.ToString(TextDecodingErrorCode.Base64URLInvalidCharacter)` | `"Base64URLInvalidCharacter"` | Expression | Converts `TextDecodingErrorCode.Base64URLInvalidCharacter` to `"Base64URLInvalidCharacter"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `TextDecodingErrorCode.Base64InvalidCharacter` | `"Base64InvalidCharacter"` | N/A  | Converts `TextDecodingErrorCode.Base64InvalidCharacter` to `"Base64InvalidCharacter"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `TextDecodingErrorCode.HexOddNumberOfCharacters` | `"HexOddNumberOfCharacters"` | N/A  | Converts `TextDecodingErrorCode.HexOddNumberOfCharacters` to `"HexOddNumberOfCharacters"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `TextDecodingErrorCode.Base64URLInvalidCharacter` | `"Base64URLInvalidCharacter"` | N/A  | Converts `TextDecodingErrorCode.Base64URLInvalidCharacter` to `"Base64URLInvalidCharacter"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `TextDecodingErrorCode.Base64InvalidCharacter` | `"100"` | N/A  | Converts `TextDecodingErrorCode.Base64InvalidCharacter` to `"100"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `TextDecodingErrorCode.HexOddNumberOfCharacters` | `"300"` | N/A  | Converts `TextDecodingErrorCode.HexOddNumberOfCharacters` to `"300"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `TextDecodingErrorCode.Base64URLInvalidCharacter` | `"600"` | N/A  | Converts `TextDecodingErrorCode.Base64URLInvalidCharacter` to `"600"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert TextDecodingErrorCode to a Number

The following table shows some of the ways that a `TextDecodingErrorCode` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)TextDecodingErrorCode.Base64InvalidCharacter`   | `100` | Expression | [Casts][Explicit Casting] `TextDecodingErrorCode.Base64InvalidCharacter` to `100` |
|                                       | `(Int32)TextDecodingErrorCode.HexOddNumberOfCharacters`   | `300` | Expression | [Casts][Explicit Casting] `TextDecodingErrorCode.HexOddNumberOfCharacters` to `300` |
|                                       | `(Int32)TextDecodingErrorCode.Base64URLInvalidCharacter`   | `600` | Expression | [Casts][Explicit Casting] `TextDecodingErrorCode.Base64URLInvalidCharacter` to `600` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(TextDecodingErrorCode.Base64InvalidCharacter)`   | `100` | Expression | Converts `TextDecodingErrorCode.Base64InvalidCharacter` to `100`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(TextDecodingErrorCode.HexOddNumberOfCharacters)`   | `300` | Expression | Converts `TextDecodingErrorCode.HexOddNumberOfCharacters` to `300`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(TextDecodingErrorCode.Base64URLInvalidCharacter)`   | `600` | Expression | Converts `TextDecodingErrorCode.Base64URLInvalidCharacter` to `600`. See [Convert.ToInt32][] |

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

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[TextDecodingException]: {{< url "Cortex.Reference.Exceptions.Text.Decode.TextDecodingException.MainDoc" >}}
[InvalidBase64]: {{< url "Cortex.Reference.Exceptions.Text.Decode.TextDecodingException.InvalidBase64" >}}
[InvalidHex]: {{< url "Cortex.Reference.Exceptions.Text.Decode.TextDecodingException.InvalidHex" >}}
[InvalidBase64URL]: {{< url "Cortex.Reference.Exceptions.Text.Decode.TextDecodingException.InvalidBase64URL" >}}
[Instantiating an enumeration type]: {{< url "MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[WorkingWithText]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
[Working with Enums]: {{< url "Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[System.Enum]: {{< url "MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
[Explicit Casting]: {{< url "Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Formatting enumeration values]: {{< url "MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
[Enum.Parse]: {{< url "MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url "MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url "MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url "MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url "MSDocs.DotNet.Api.System.Convert.ToString" >}}
[Base64]: {{< url "Cortex.Reference.DataTypes.Text.TextEncodingFormat.Base64" >}}
[Hex]: {{< url "Cortex.Reference.DataTypes.Text.TextEncodingFormat.Hex" >}}
[Base64URL]: {{< url "Cortex.Reference.DataTypes.Text.TextEncodingFormat.Base64URL" >}}
