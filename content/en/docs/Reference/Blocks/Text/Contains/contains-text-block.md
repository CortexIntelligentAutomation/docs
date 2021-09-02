---
title: "Contains Text"
linkTitle: "Contains Text"
description: "Checks if text contains another text."
---

![Icon](/blocks/text-contains-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Contains.ContainsTextBlock)</p>

## Description

Checks if [Text][Text Property] contains [Text To Find][TextToFind Property].

## Examples

### Text contains Text To Find

This example will check that `"The quick brown fox jumps over the lazy dog"` contains the text `"quick brown fox"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"quick brown fox"` | `($)TextToFind` is a variable of type [String][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Contains Text][ContainsText Property] | `($)ContainsText`, with no value | `($)ContainsText` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` contains the text `"quick brown fox"`. Therefore, the variable `($)ContainsText` will be updated to the following:

```json
true
```

***

### Text does not contain Text To Find

This example will check that `"The quick brown fox jumps over the lazy dog"` does not contain `"quick red fox"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"quick red fox"` | `($)TextToFind` is a variable of type [String][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Contains Text][ContainsText Property] | `($)ContainsText`, with no value | `($)ContainsText` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` does not contain `"quick red fox"`. Therefore, the variable `($)ContainsText` will be updated to the following:

```json
false
```

***

## Properties

### Text

The [Text][Text Property] to check whether it contains [Text To Find][TextToFind Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Text` with value `""` |

### Text To Find

The [Text To Find][TextToFind Property] in [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)TextToFind` with value `""` |

### Comparison Type

The [Comparison Type][ComparisonType Property] specifying the rules used to determine whether [Text To Find][TextToFind Property] is contained in [Text][Text Property]

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Property Type | [Input][] |
| Default Value | `($)ComparisonType` with value `StringComparison.Ordinal` |

### Contains Text

The result of the contains text check.

If [Text To Find][TextToFind Property] is contained in [Text][Text Property], the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)ContainsText` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Comparison Type][ComparisonType Property] is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |

## Remarks

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`), the variable specified in the  [Contains Text][ContainsText Property] property is set to `false`.

### Null or empty Text To Add

If [Text To Find][TextToFind Property] is `null` or empty (i.e. `""`), the variable specified in the [Contains Text][ContainsText Property] property is set to `false`.

[Text Property]: {{< ref "#text" >}}
[TextToFind Property]: {{< ref "#text-to-find" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[ContainsText Property]: {{< ref "#contains-text" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Text Equality]: {{< url "Cortex.Reference.Concepts.TextEquality.MainDoc" >}}
[ComparisonTypes]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.Ordinal" >}}

[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.Boolean" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[StringComparison]: {{< url "Cortex.Reference.DataTypes.MostCommon.StringComparison" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
