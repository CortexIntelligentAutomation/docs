---
title: "Contains All Text"
linkTitle: "Contains All Text"
description: "Checks if text contains all of the texts in a given set of texts."
---

![Icon](/blocks/text-contains-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Contains.ContainsAllTextBlock)</p>

## Description

Checks if [Text][Text Property] contains all of the texts in a given set of [Texts To Find][TextsToFind Property].

## Examples

### Text contains all of the texts in Texts To Find

This example will check that `"The quick brown fox jumps over the lazy dog"` contains all of the texts in `["The", "quick", "brown", "fox"]`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Texts To Find][TextsToFind Property] | `($)TextsToFind`, with value `["The", "quick", "brown", "fox"]` | `($)TextsToFind` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Contains All Text][ContainsAllText Property] | `($)ContainsAllText`, with no value | `($)ContainsAllText` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` contains all of the texts in `["The", "quick", "brown", "fox"]`. Therefore, the variable `($)ContainsAllText` will be updated to the following:

```json
true
```

***

### Text does not contain all of the texts in Texts To Find

This example will check that `"The quick brown fox jumps over the lazy dog"` does not contain all of the texts in `["the", "slow", "brown", "fox"]`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Texts To Find][TextsToFind Property] | `($)TextsToFind`, with value `["the", "slow", "brown", "fox"]` | `($)TextsToFind` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Contains All Text][ContainsAllText Property] | `($)ContainsAllText`, with no value | `($)ContainsAllText` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` does not contain all of the texts in `["the", "slow", "brown", "fox"]`; `"slow"` is missing, and `"the"` does not match `"The"` as the specified [Comparison Type][ComparisonType Property] uses case-sensitive matching. Therefore, the variable `($)ContainsAllText` will be updated to the following:

```json
false
```

***

## Properties

### Text

The [Text][Text Property] to check whether it contains all of the texts in the given set of [Texts To Find][TextsToFind Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Text` with value `""` |

### Texts To Find

The set of [Texts To Find][TextsToFind Property] to check are all contained in [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[String][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)TextsToFind` with value `[]` |

### Comparison Type

The [Comparison Type][ComparisonType Property] specifying the rules used to determine whether each text in [Texts To Find][TextsToFind Property] is contained in [Text][Text Property]

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality].

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Property Type | [Input][] |
| Default Value | `($)ComparisonType` with value `StringComparison.Ordinal` |

### Contains All Text

The result of the contains all text check.

If all of the texts in [Texts To Find][TextsToFind Property] are contained in [Text][Text Property], the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)ContainsAllText` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when the [Comparison Type][ComparisonType Property] property is not one of the specified [StringComparison] types. |
| [PropertyNullException][] | Thrown when [Texts To Find][TextsToFind Property] property is `null`. |

## Remarks

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`), the variable specified in the  [Contains All Text][ContainsAllText Property] property is set to `false`.

### Null or empty Text To Add

If [Texts To Find][TextsToFind Property] is empty or contains any `null` or empty (i.e. `""`) text, the variable specified in the [Contains All Text][ContainsAllText Property] property is set to `false`.

[Text Property]: {{< ref "#text" >}}
[TextsToFind Property]: {{< ref "#texts-to-find" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[ContainsAllText Property]: {{< ref "#contains-all-text" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Text Equality]: {{< url "Cortex.Reference.Concepts.TextEquality.MainDoc" >}}
[ComparisonTypes]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.Ordinal" >}}

[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.Boolean" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.MostCommon.IEnumerable" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[StringComparison]: {{< url "Cortex.Reference.DataTypes.MostCommon.StringComparison" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
