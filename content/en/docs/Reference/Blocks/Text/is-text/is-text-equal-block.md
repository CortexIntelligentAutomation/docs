---
title: "Is Text Equal"
linkTitle: "Is Text Equal"
description: "Checks if a text is equal to another text."
---

{{< figure src="/blocks/text-is-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.IsText.IsTextEqualBlock)</p>

## Description

Checks if [Text][Text Property] is equal to [Text To Compare][TextToCompare Property].

## Examples

### Text is equal to Text To Compare (Ordinal)

This example will check if `"The quick brown fox jumps over the lazy dog"` is equal to `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Compare][TextToCompare Property] | `($)TextToCompare`, with value `"The quick brown fox jumps over the lazy dog"` | `($)TextToCompare` is a variable of type [String][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Text Is Equal][TextIsEqual Property] | `($)TextIsEqual`, with no value | `($)TextIsEqual` is a variable that will be set to a [Boolean][] value |

#### Result

As this example is performing a [case-sensitive, culture-insensitive][Ordinal] comparison of text, `"The quick brown fox jumps over the lazy dog"` is equal to `"The quick brown fox jumps over the lazy dog"`, as they match exactly, including casing. Therefore, the variable `($)TextIsEqual` will be updated to the following:

```json
true
```

***

### Text is not equal to Text To Compare (Ordinal)

This example will check if `"The quick brown fox jumps over the lazy dog"` is equal to `"the quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Compare][TextToCompare Property] | `($)TextToCompare`, with value `"the quick brown fox jumps over the lazy dog"` | `($)TextToCompare` is a variable of type [String][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Text Is Equal][TextIsEqual Property] | `($)TextIsEqual`, with no value | `($)TextIsEqual` is a variable that will be set to a [Boolean][] value |

#### Result

As this example is performing a [case-sensitive, culture-insensitive][Ordinal] comparison of text, `"The quick brown fox jumps over the lazy dog"` is not equal to `"the quick brown fox jumps over the lazy dog"`, as whilst the characters match exactly, the casing of the first `"T"` differs. Therefore, the variable `($)TextIsEqual` will be updated to the following:

```json
false
```

***

### Text is equal to Text To Compare (Ordinal Ignore Case)

This example will check if `"The quick brown fox jumps over the lazy dog"` is equal to `"the quick brown fox jumps over the lazy dog"`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Compare][TextToCompare Property] | `($)TextToCompare`, with value `"the quick brown fox jumps over the lazy dog"` | `($)TextToCompare` is a variable of type [String][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Text Is Equal][TextIsEqual Property] | `($)TextIsEqual`, with no value | `($)TextIsEqual` is a variable that will be set to a [Boolean][] value |

#### Result

As this example is performing a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text, `"The quick brown fox jumps over the lazy dog"` is equal to `"the quick brown fox jumps over the lazy dog"`, as the characters match exactly, and casing is not considered. Therefore, the variable `($)TextIsEqual` will be updated to the following:

```json
true
```

***

## Properties

### Text

The [Text][Text Property] to check is equal to [Text To Compare][TextToCompare Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Text` with value `""` |

### Text To Compare

The [Text To Compare][TextToCompare Property] if [Text][Text Property] is equal to.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)TextToCompare` with value `""` |

### Comparison Type

The [Comparison Type][ComparisonType Property] specifying the rules used to compare if [Text][Text Property] is equal to [Text To Compare][TextToCompare Property].

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Property Type | [Input][] |
| Default Value | `($)ComparisonType` with value `StringComparison.Ordinal` |

### Text Is Equal

[Boolean][] indicating whether [Text][Text Property] is equal to [Text To Compare][TextToCompare Property].

If they are equal the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)TextIsEqual` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Comparison Type][ComparisonType Property] is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |

## Remarks

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

### Null vs empty

If [Text][Text Property] is `null` and [Text To Compare][TextToCompare Property] is empty (i.e. `""`), or vice versa, the variable specified in the [Text Is Equal][TextIsEqual Property] property is set to `false`, as `null` and `""` are not equal.

[Text Property]: {{< ref "#text" >}}
[TextToCompare Property]: {{< ref "#text-to-compare" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[TextIsEqual Property]: {{< ref "#text-is-equal" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Text Equality]: {{< url "Cortex.Reference.Concepts.TextEquality.MainDoc" >}}
[ComparisonTypes]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.Ordinal" >}}
[OrdinalIgnoreCase]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.OrdinalIgnoreCase" >}}

[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[StringComparison]: {{< url "Cortex.Reference.DataTypes.MostCommon.StringComparison" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
