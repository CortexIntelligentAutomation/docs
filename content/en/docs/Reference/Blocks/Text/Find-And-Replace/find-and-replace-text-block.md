---
title: "Find And Replace Text"
linkTitle: "Find And Replace Text"
description: "Finds and replaces a specified occurrence of text in a given text."
---

![Icon](/blocks/text-find-and-replace-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Find.FindAndReplaceTextBlock)</p>

## Description

Finds and replaces a specified [Occurrence][Occurrence Property] of [Text To Replace][TextToReplace Property] with a specified [Replacement Text][ReplacementText Property] in a given [Text][Text Property].

## Examples

### Replace the first Occurrence of Text To Replace in a given Text (Ordinal)

This example will find and replace the first occurrence of `"The"` in `"The quick brown fox jumps over the lazy dog"` with `"a"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Replace][TextToReplace Property] | `($)TextToReplace`, with value `"The"` | `($)TextToReplace` is a variable of type [String][] |
| [Replacement Text][ReplacementText Property] | `($)ReplacementText`, with value `"a"` | `($)ReplacementText` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `1` | `($)Occurrence` is a variable of type [Int32][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |

#### Result

An [Occurrence][Occurrence Property] of `1` means find and replace the first occurrence; `2` means second etc.

As this example is performing a [case-sensitive, culture-insensitive][Ordinal] comparison of text, `"The quick brown fox jumps over the lazy dog"` only contains the text `"The"` once; `"the"` has a different case so does not match. Therefore, the variable `($)Text` will be updated to the following:

```json
"a quick brown fox jumps over the lazy dog"
```

***

### Replace the last occurrence of Text To Replace in a given Text (Ordinal Ignore Case)

This example will find and replace the last occurrence of `"The"` in `"The quick brown fox jumps over the lazy dog"` with `"a"`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Replace][TextToReplace Property] | `($)TextToReplace`, with value `"The"` | `($)TextToReplace` is a variable of type [String][] |
| [Replacement Text][ReplacementText Property] | `($)ReplacementText`, with value `"a"` | `($)ReplacementText` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `-1` | `($)Occurrence` is a variable of type [Int32][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |

#### Result

An [Occurrence][Occurrence Property] of `-1`, means find and replace the last occurrence; `-2` means second last etc.

As this example is performing a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text, `"The quick brown fox jumps over the lazy dog"` contains the text `"The"` twice; the first occurrence is `"The"` and the second and last occurrence is `"the"`. Therefore, the variable `($)Text` will be updated to the following:

```json
"The quick brown fox jumps over a lazy dog"
```

***

## Properties

### Text

The [Text][Text Property] to find and replace the specified [Occurrence][Occurrence Property] of [Text To Replace][TextToReplace Property] in.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Default Value | `($)Text` with value `""` |

### Text To Replace

The [Text To Replace][TextToReplace Property] the specified [Occurrence][Occurrence Property] with [Replacement Text][ReplacementText Property] in [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)TextToReplace` with value `""` |

### Replacement Text

The [Replacement Text][ReplacementText Property] used to replace the specified [Occurrence][Occurrence Property] of [Text To Replace][TextToReplace Property] in [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)ReplacementText` with value `""` |

### Occurrence

The [Occurrence][Occurrence Property] of [Text To Replace][TextToReplace Property] in [Text][Text Property].

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Occurrence` with value `1` |

### Comparison Type

The [Comparison Type][ComparisonType Property] specifying the rules used to match occurrences of [Text To Replace][TextToReplace Property] in [Text][Text Property].

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Property Type | [Input][] |
| Default Value | `($)ComparisonType` with value `StringComparison.Ordinal` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Comparison Type][ComparisonType Property] is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |

## Remarks

### Occurrences

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`) there is nothing to replace in, so no operation is performed.

### Null or empty Text To Replace

If [Text To Replace][TextToReplace Property] is `null` or empty (i.e. `""`) there is nothing to replace, so no operation is performed.

### Null or empty Replacement Text

If [Replacement Text][ReplacementText Property] is `null` or empty (i.e. `""`) the specified [Occurrence][Occurrence Property] of [Text To Replace][TextToReplace Property] is replaced with an empty text (i.e. `""`).

### Text To Replace or Occurrence is not present

If [Text To Replace][TextToReplace Property] or the specified [Occurrence][Occurrence Property] is not present there is nothing to replace, so no operation is performed.

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] with the specified [Occurrence][Occurrence property] of [Text To Replace][TextToReplace Property] replaced and re-assigns it to the variable specified in the [Text][Text Property] property.

[Text Property]: {{< ref "#text" >}}
[TextToReplace Property]: {{< ref "#text-to-replace" >}}
[ReplacementText Property]: {{< ref "#replacement-text" >}}
[Occurrence Property]: {{< ref "#occurrence" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[Occurrences]: {{< url "Cortex.Reference.Concepts.Occurrences.MainDoc" >}}
[Text Equality]: {{< url "Cortex.Reference.Concepts.TextEquality.MainDoc" >}}
[ComparisonTypes]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.Ordinal" >}}
[OrdinalIgnoreCase]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.OrdinalIgnoreCase" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
[StringComparison]: {{< url "Cortex.Reference.DataTypes.MostCommon.StringComparison" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
