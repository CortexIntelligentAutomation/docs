---
title: "Convert To Lower Case"
linkTitle: "Convert To Lower Case"
description: "Converts text to lower case (e.g. `\"lowercase\"`)."
---

{{< figure src="/blocks/text-convert-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.ConvertTo.ConvertToLowerCaseBlock)</p>

## Description

Converts [Text][Text Property] to lower case.

Converting to lower case will result in all letters being lower cased; spaces and punctuation will be preserved (e.g. `"TEXT to convert to lower-case!"` will be converted to `"text to convert to lower-case!"`).

## Examples

### Text converted to lower case

This example will convert `"The quick brown fox jumps over the lazy dog"` to lower case.

It performs a [culture-insensitive][InvariantCulture] conversion of the text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Culture Info][CultureInfo Property] | `($)CultureInfo`, with value `CultureInfo.InvariantCulture` | `($)CultureInfo` is a variable of type [CultureInfo][] |

#### Result

Converting `"The quick brown fox jumps over the lazy dog"` to lower case will result in the variable `($)Text` being updated to the following:

```json
"the quick brown fox jumps over the lazy dog"
```

***

## Properties

### Text

The [Text][Text Property] to convert to lower case.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)Text` with no value |

### Culture Info

The [Culture Info][CultureInfo Property] used to perform the conversion of the [Text][Text Property].

For information about the [supported values][CultureInfos] for the [Culture Info][CultureInfo Property] property and examples of how it affects casing rules, please see [Casing][].

| | |
|--------------------|---------------------------|
| Data Type | [CultureInfo][] |
| Property Type | [Input][] |
| Is Advanced | `true` |
| Default Editor | [Expression][TODO] |
| Default Value | `CultureInfo.InvariantCulture` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [InvalidPropertyValueException][] | Thrown when the culture identifier of the [Culture Info][CultureInfo Property] is invalid (e.g. `new CultureInfo("InvalidCultureIdentifier")`). See [Value Is Invalid][]. |

## Remarks

### Culture Info

For information about the [supported values][CultureInfos] for the [CultureInfo][CultureInfo Property] property and examples of how it affects casing rules, please see [Casing][].

### Null Culture Info

If [Culture Info][CultureInfo Property] is `null`, it will be set to `CultureInfo.InvariantCulture`.

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`), no operation is performed.

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] which has the [Text][Text Property] converted to lower case and re-assigns it to the variable specified in the [Text][Text Property] property.

[Text Property]: {{< ref "#text" >}}
[CultureInfo Property]: {{< ref "#culture-info" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Casing]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.Casing.MainDoc" >}}
[CultureInfos]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.Casing.CultureInfo.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[CultureInfo]: {{< url "Cortex.Reference.DataTypes.Text.CultureInfo.MainDoc" >}}
[InvariantCulture]: {{< url "Cortex.Reference.DataTypes.MostCommon.InvariantCulture" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}
