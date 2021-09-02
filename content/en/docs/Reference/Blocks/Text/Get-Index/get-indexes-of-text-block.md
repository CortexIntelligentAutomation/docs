---
title: "Get Indexes Of Text"
linkTitle: "Get Indexes Of Text"
description: "Gets the indexes of all occurrences of a text in another text."
---

![Icon](/blocks/text-get-index-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Get.GetIndexesOfTextBlock)</p>

## Description

Gets the [Indexes][Indexes Property] of all occurrences of [Text To Find][TextToFind Property] in [Text][Text Property].

## Examples

### Get Indexes of all occurrences of Text To Find in a given Text (Ordinal)

This example will get the indexes of all occurrences of `"The"` in `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"The"` | `($)TextToFind` is a variable of type [String][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Indexes][Indexes Property] | `($)Indexes`, with no value | `($)Indexes` is a variable that will be set to an [IList][]&lt;[Int32][]&gt; value |

#### Result

As this example is performing a [case-sensitive, culture-insensitive][Ordinal] comparison of text, `"The quick brown fox jumps over the lazy dog"` only contains the text `"The"` once; `"the"` has a different case so does not match. Therefore, the variable `($)Indexes` will be updated to the following:

```json
[0]
```

where `0` indicates the index of the first character of the matching `"The"` occurrence.

***

### Get Indexes of all occurrences of Text To Find in a given Text (Ordinal Ignore Case)

This example will get the indexes of all occurrences of `"The"` in `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"The"` | `($)TextToFind` is a variable of type [String][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Indexes][Indexes Property] | `($)Indexes`, with no value | `($)Indexes` is a variable that will be set to an [IList][]&lt;[Int32][]&gt; value |

#### Result

As this example is performing a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text, `"The quick brown fox jumps over the lazy dog"` contains the text `"The"` twice; the first occurrence is `"The"` and the second occurrence is `"the"`. Therefore, the variable `($)Indexes` will be updated to the following:

```json
[0, 31]
```

where `0` indicates the index of the first character of the matching `"The"` occurrence, and `31` indicates the index of the first character of the matching `"the"` occurrence.

***

### Text does not contain Text To Find

This example will attempt to get the indexes of all occurrences of `"slow"` in `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"slow"` | `($)TextToFind` is a variable of type [String][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Indexes][Indexes Property] | `($)Indexes`, with no value | `($)Indexes` is a variable that will be set to an [IList][]&lt;[Int32][]&gt; value |

#### Result

`"The quick brown fox jumps over the lazy dog"` does not contain the text `"slow"`, so the index cannot be found. Therefore, the variable `($)Indexes` will be updated to the following:

```json
[-1]
```

where `-1` indicates that there are no matching occurrences.

***

## Properties

### Text

The [Text][Text Property] to get the [Indexes][Indexes Property] of all occurrences of [Text To Find][TextToFind Property] from.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Text` with value `""` |

### Text To Find

The [Text To Find][TextToFind Property] the [Indexes][Indexes Property] of all occurrences of, in [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)TextToFind` with value `""` |

### Comparison Type

The [Comparison Type][ComparisonType Property] specifying the rules used to match [Text To Find][TextToFind Property] in [Text][Text Property].

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Property Type | [Input][] |
| Default Value | `($)ComparisonType` with value `StringComparison.Ordinal` |

### Indexes

[IList][]&lt;[Int32][]&gt; containing the [Indexes][Indexes Property] of the first character of each occurrence of [Text To Find][TextToFind Property] in [Text][Text Property].

If there are no occurrences of [Text To Find][TextToFind Property] in [Text][Text Property], the specified variable will be set to `[-1]`.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[Int32][]&gt; |
| Property Type | [Output][] |
| Default Value | `($)Indexes` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Comparison Type][ComparisonType Property] is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |

## Remarks

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`), the variable specified in the [Indexes][Indexes Property] property is set to `[-1]`.

### Null or empty Text To Find

If [Text To Find][TextToFind Property] is `null` or empty (i.e. `""`), the variable specified in the [Indexes][Indexes Property] property is set to `[-1]`.

### Text To Find not found

If [Text To Find][TextToFind Property] is not found in [Text][Text Property], the variable specified in the [Indexes][Indexes Property] property is set to `[-1]`.

[Text Property]: {{< ref "#text" >}}
[TextToFind Property]: {{< ref "#text-to-find" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[Indexes Property]: {{< ref "#indexes" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.Indexes.MainDoc" >}}
[Text Equality]: {{< url "Cortex.Reference.Concepts.TextEquality.MainDoc" >}}
[ComparisonTypes]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.Ordinal" >}}
[OrdinalIgnoreCase]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.OrdinalIgnoreCase" >}}

[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[StringComparison]: {{< url "Cortex.Reference.DataTypes.MostCommon.StringComparison" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
