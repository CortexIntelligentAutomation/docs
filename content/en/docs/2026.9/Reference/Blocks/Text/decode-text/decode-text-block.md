---
title: "Decode Text"
linkTitle: "Decode Text"
description: "Decodes text from a specified format (e.g. `\"Base64\"`)."
---

{{< figure src="/blocks/Cortex_Blocks_Text_DecodeText_DecodeTextBlock.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.DecodeText.DecodeTextBlock)</p>

## Description

Decodes [Text][Text Property] from the specified [Format][Format Property].

## Examples

### Text decoded from Base64

This example will decode the [Base64][] encoded text `"VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw=="` to `"The quick brown fox jumps over the lazy dog"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw=="` | `($)Text` is a variable of type [String][] |
| [Format][Format Property] | `($)Format`, with value `"TextEncodingFormat.Base64"` | `($)Format` is a variable of type [TextEncodingFormat][]

#### Result

Decoding `"VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw=="` with the [Format][Format Property] [Base64] will result in the variable `($)Text` being updated to the following:

```json
"The quick brown fox jumps over the lazy dog"
```

***

### Text decoded from Url

This example will decode the [Url][] encoded text `"The%20quick%20brown%20fox%20jumps%20over%20the%20lazy%20dog%21"` to `"The quick brown fox jumps over the lazy dog!"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The%20quick%20brown%20fox%20jumps%20over%20the%20lazy%20dog%21"` | `($)Text` is a variable of type [String][] |
| [Format][Format Property] | `($)Format`, with value `"TextEncodingFormat.Url"` | `($)Format` is a variable of type [TextEncodingFormat][]

#### Result

Decoding `"The%20quick%20brown%20fox%20jumps%20over%20the%20lazy%20dog%21"` with the [Format][Format Property] [Url] will result in the variable `($)Text` being updated to the following:

```json
"The quick brown fox jumps over the lazy dog!"
```

***

### Text decoded from Hex

This example will decode the [Hex][] encoded text `"54686520717569636B2062726F776E20666F78206A756D7073206F76657220746865206C617A7920646F67"` to `"The quick brown fox jumps over the lazy dog"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"54686520717569636B2062726F776E20666F78206A756D7073206F76657220746865206C617A7920646F67"` | `($)Text` is a variable of type [String][] |
| [Format][Format Property] | `($)Format`, with value `"TextEncodingFormat.Hex"` | `($)Format` is a variable of type [TextEncodingFormat][]

#### Result

Decoding `"54686520717569636B2062726F776E20666F78206A756D7073206F76657220746865206C617A7920646F67"` with the [Format][Format Property] [Hex] will result in the variable `($)Text` being updated to the following:

```json
"The quick brown fox jumps over the lazy dog"
```

***

### Text decoded from Html

This example will decode the [Html][] encoded text `"&lt;p&gt;The quick brown fox jumps over the lazy dog!&lt;/p&gt;"` to `"<p>The quick brown fox jumps over the lazy dog!</p>"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"&lt;p&gt;The quick brown fox jumps over the lazy dog!&lt;/p&gt;"` | `($)Text` is a variable of type [String][] |
| [Format][Format Property] | `($)Format`, with value `"TextEncodingFormat.Html"` | `($)Format` is a variable of type [TextEncodingFormat][]

#### Result

Decoding `"&lt;p&gt;The quick brown fox jumps over the lazy dog!&lt;/p&gt;"` with the [Format][Format Property] [Html] will result in the variable `($)Text` being updated to the following:

```json
"<p>The quick brown fox jumps over the lazy dog!</p>"
```

***

## Properties

### Text

The [Text][Text Property] to decode from the specified [Format][Format Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Text` with no value |

### Format

The [Format][Format Property] used to decode the given [Text][Text Property].

[Format][Format Property] can be any of the predefined values:

* `TextEncodingFormat.Base64`
* `TextEncodingFormat.Url`
* `TextEncodingFormat.Hex`
* `TextEncodingFormat.Html`
* `TextEncodingFormat.Utf8`
* `TextEncodingFormat.Base64Url`

| | |
|--------------------|---------------------------|
| Data Type | [TextEncodingFormat][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `Base64` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Format][Format Property] is not one of the specified [TextEncodingFormat][] types (e.g. `(TextEncodingFormat)10`). |
| [TextDecodingException][] | Thrown when [Text][Text Property] contains an invalid character for [Base64] decoding. For more information, see [Invalid Base64 Character][InvalidBase64]. |
||Thrown when [Text][Text Property] contains an odd number of characters for [Hex] decoding. For more information, see [Odd number of characters using Hex][InvalidHex]. |
|| Thrown when [Text][Text Property] contains an invalid character for [Base64Url] decoding. For more information, see [Invalid Base64Url Character][InvalidBase64Url]. |

## Remarks

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`) there is nothing to decode, so no operation is performed.

### Decoding out of range URL characters

When decoding using the [Url][] [Format][Format Property], characters not in the valid range (i.e.`%00` to `%ff`) will be treated as literal characters (e.g. `"%zzExample%21"` will decode to `"%zzExample!"`).

### Decoding invalid Hex values

When decoding using the [Hex] [Format][Format Property], characters not in the valid set (i.e. `0-9` and `A-F`) will overflow (e.g. `G` overflows to `0`), further examples are shown below:
| Encoded Text | Overflows To | Decoded Text |
|--------------|--------------|--------------|
| 4G           | 40           | @            |
| 4H           | 41           | A            |
| 4I           | 42           | B            |
| J1           | 31           | 1            |
| K1           | 41           | A            |
| L1           | 51           | Q            |

### Decoding invalid HTML entities

When decoding using the [Html] [Format][Format Property], invalid [HTML Entities][HTMLEntity] will be removed (e.g. `"Example&InvalidEntity;"` will decode to `"Example"`).

### Decoding HTML ampersand

When decoding using the [Html] [Format][Format Property], any ampersand that is not part of an [HTML Entity][HTMLEntity] will be removed (e.g. `"Example&Something"` will decode to `"ExampleSomething"`).

### Decoding HTML semicolon

When decoding using the [Html] [Format][Format Property], any semicolon that is not part of an [HTML Entity][HTMLEntity] will be treated as a literal character (e.g. `"ExampleSomething;"` will decode to `"ExampleSomething;"`).

### Round-Tripping

It should be possible to pass the text created by an [Encode Text block][Encode Text] to this block, and then pass the text created by this block back to an [Encode Text block][Encode Text]; this is called round-tripping.

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] which has the [Text][Text Property] decoded from the specified format and reassigns it to the specified [Text][Text Property] property.

### Known Limitations

When decoding using the [Html] [Format][Format Property], any HTML5 named [entities][HTMLEntity] (e.g. `"&phi;"`) will be removed.

This limitation may be removed in the future.

[Text Property]: {{< ref "#text" >}}
[Format Property]: {{< ref "#format" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[TextEncodingFormat]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.MainDoc" >}}

[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[TextDecodingException]: {{< url path="Cortex.Reference.Exceptions.Text.Encoding.TextDecodingException.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Html]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Html" >}}
[Base64]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Base64" >}}
[Hex]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Hex" >}}
[Base64Url]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Base64Url" >}}
[Url]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Url" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[InvalidBase64]: {{< url path="Cortex.Reference.Exceptions.Text.Encoding.TextDecodingException.InvalidBase64" >}}
[InvalidHex]: {{< url path="Cortex.Reference.Exceptions.Text.Encoding.TextDecodingException.InvalidHex" >}}
[InvalidBase64Url]: {{< url path="Cortex.Reference.Exceptions.Text.Encoding.TextDecodingException.InvalidBase64Url" >}}

[Encode Text]: {{< url path="Cortex.Reference.Blocks.Text.EncodeText.EncodeText.MainDoc" >}}
[HTMLEntity]: {{< url path="Cortex.Reference.Glossary.F-J.HTMLEntity" >}}
