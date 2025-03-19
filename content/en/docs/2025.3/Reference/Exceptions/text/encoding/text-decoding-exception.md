---
title: "TextDecodingException"
linkTitle: "TextDecodingException"
description: "The exception thrown when an error occurs while decoding text."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Text.Encoding.TextDecodingException)</p>

## Description

The exception thrown when an error occurs while decoding text.

There are multiple reasons that this exception can be thrown:

- [Invalid Base64 Character][InvalidBase64Character]
- [Odd number of characters using Hex][OddHexCharacters]
- [Invalid Base64Url Character][InvalidBase64UrlCharacter]

## Reasons

### Invalid Base64 character {#100}

A [Category][] of `Base64` and an [Error Code][] of `100` indicates that the text provided contains one or more characters that are invalid in [Base64][] encoded text.

#### Message Format

```json
"An error occurred during decoding due to one or more invalid characters being present.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Provide a [String][] containing only valid characters (e.g. `A–Z`, `a–z`, `0–9`, `+`, `/` and `=`).

### Odd number of characters using Hex {#300}

A [Category][] of `Hex` and an [Error Code][] of `300` indicates that the provided text contains an odd number of characters, which is invalid for [Hex][] encoded text.

#### Message Format

```json
"An error occurred during decoding due to an odd number of characters being present.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Provide a [String][] containing an even number of characters.

### Invalid Base64Url character {#600}

A [Category][] of `Base64Url` and an [Error Code][] of `600` indicates that the text provided contains one or more characters that are invalid in [Base64Url][] encoded text.

#### Message Format

```json
"An error occurred during decoding due to one or more invalid characters being present.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Provide a [String][] containing only valid characters (e.g. `A–Z`, `a–z`, `0–9`, `+`, `/` and `=`).

## Properties

### Exception Type

The type of the exception (i.e. `TextDecodingException`)

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Category

The category of the exception, which is used to categorise an exception if there are multiple reasons that the exception can occur.

For `TextDecodingException` there are the following categories:

- `Base64`
- `Hex`
- `Base64Url`

| | |
|-----------|------------|
| Data Type | [String][] |

### Error Code

The error code for the exception, which is used to indicate the reason that the exception occurred, if there are multiple reasons that the exception can occur.

For `TextEncodingException` there are the following error codes:

- [100][InvalidBase64Character] - indicates that the Base64 encoded text provided contains one or more invalid characters
- [300][OddHexCharacters] - indicates that the Hex encoded text provided contains an odd number of characters, which is invalid
- [600][InvalidBase64UrlCharacter] - indicates that the Base64Url encoded text provided contains one or more invalid characters

| | |
|-----------|---------------------------|
| Data Type | [TextDecodingErrorCode][] |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

None

## See Also

### Related Data Types

* [String][]
* [TextDecodingErrorCode][]

### Related Concepts

* [Exceptions][]
* [Working with Text][WorkingWithText]

### Related Blocks

* [Decode Text][]

### External Documentation

None

[Decode Text]: {{< url path="Cortex.Reference.Blocks.Text.DecodeText.DecodeText.MainDoc" >}}
[InvalidBase64Character]: {{< ref "#100">}}
[OddHexCharacters]: {{< ref "#300">}}
[InvalidBase64UrlCharacter]: {{< ref "#600">}}
[Category]: {{< ref "#category">}}
[Error Code]: {{< ref "#error-code">}}

[Base64]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Base64" >}}
[Hex]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Hex" >}}
[Base64URL]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Base64Url" >}}

[WorkingWithText]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[TextDecodingErrorCode]: {{< url path="Cortex.Reference.DataTypes.Text.TextDecodingErrorCode.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
