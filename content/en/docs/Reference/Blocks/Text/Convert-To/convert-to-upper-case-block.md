---
title: "Convert To Upper Case"
linkTitle: "Convert To Upper Case"
description: "Converts text to upper case (e.g. `\"UPPERCASE\"`)."
---

![Icon](/blocks/text-convert-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Convert.ConvertToUpperCaseBlock)</p>

## Description

Converts [Text][Text Property] to upper case.

Converting to upper case will result in all letters being upper cased; spaces and punctuation will be preserved (e.g. `"TEXT to convert to upper-case!"` will be converted to `"TEXT TO CONVERT TO UPPER-CASE!"`).

## Examples

### Text converted to upper case

This example will convert `"The quick brown fox jumps over the lazy dog"` to upper case.

It performs a [culture-insensitive][InvariantCulture] conversion of the text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Culture Info][CultureInfo Property] | `($)CultureInfo`, with value `CultureInfo.InvariantCulture` | `($)CultureInfo` is a variable of type [CultureInfo][] |

#### Result

Converting `"The quick brown fox jumps over the lazy dog"` to upper case will result in the variable `($)Text` being updated to the following:

```json
"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
```

***

## Properties

### Text

The [Text][Text Property] to convert to upper case.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Default Value | `($)Text` with value `""` |

### Culture Info

The [Culture Info][CultureInfo Property] used to perform the conversion of the [Text][Text Property].

For information about the [supported values][CultureInfos] for the [Culture Info][CultureInfo Property] property and examples of how it affects casing rules, please see [Text Casing][].

| | |
|--------------------|---------------------------|
| Data Type | [CultureInfo][] |
| Property Type | [Input][] |
| Default Value | `($)CultureInfo` with value `CultureInfo.InvariantCulture` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [InvalidPropertyValueException][] | Thrown when the culture identifier of the [Culture Info][CultureInfo Property] is invalid (e.g `new CultureInfo("InvalidCultureIdentifier")`)

## Remarks

### Culture Info

For information about the [supported values][CultureInfos] for the [CultureInfo][CultureInfo Property] property and examples of how it affects casing rules, please see [Text Casing][].

### Null Culture Info

If [Culture Info][CultureInfo Property] is `null`, it will be set to `CultureInfo.InvariantCulture`.

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`), no operation is performed.

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] which has the [Text][Text Property] converted to upper case and re-assigns it to the variable specified in the [Text][Text Property] property.

[Text Property]: {{< ref "#text" >}}
[CultureInfo Property]: {{< ref "#culture-info" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[Text Casing]: {{< url "Cortex.Reference.Concepts.TextCasing.MainDoc" >}}
[CultureInfos]: {{< url "Cortex.Reference.Concepts.TextCasing.CultureInfo.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[CultureInfo]: {{< url "Cortex.Reference.DataTypes.MostCommon.CultureInfo" >}}
[InvariantCulture]: {{< url "Cortex.Reference.DataTypes.MostCommon.InvariantCulture" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Common.Property.InvalidPropertyValueException.MainDoc" >}}