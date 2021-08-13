---
title: "Find And Remove Text"
linkTitle: "Find And Remove Text"
description: "Finds and removes a specified occurrence of text from a given text."
---

![Icon](/blocks/text-find-and-remove-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Find.FindAndRemoveTextBlock)</p>

## Description

Finds and removes a specified [Occurrence][Occurrence Property] of [Text To Remove][TextToRemove Property] from a given [Text][Text Property].

## Examples

### Remove the first Occurrence of Text To Remove from a given Text (Ordinal)

This example will find and remove the first occurrence of `"The"` from `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Remove][TextToRemove Property] | `($)TextToRemove`, with value `"The"` | `($)TextToRemove` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `1` | `($)Occurrence` is a variable of type [Int32][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |

#### Result

An [Occurrence][Occurrence Property] of `1` means find and remove the first occurrence; `2` means second etc.

As this example is performing a [case-sensitive, culture-insensitive][Ordinal] comparison of text, `"The quick brown fox jumps over the lazy dog"` only contains the text `"The"` once; `"the"` has a different case so does not match. Therefore, the variable `($)Text` will be updated to the following:

```json
" quick brown fox jumps over the lazy dog"
```

***

### Remove the last Occurrence of Text To Remove from a given Text (Ordinal Ignore Case)

This example will find and remove the last occurrence of `"The"` from `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Remove][TextToRemove Property] | `($)TextToRemove`, with value `"The"` | `($)TextToRemove` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `-1` | `($)Occurrence` is a variable of type [Int32][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |

#### Result

An [Occurrence][Occurrence Property] of `-1`, means find and remove the last occurrence; `-2` means second last etc.

As this example is performing a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text, `"The quick brown fox jumps over the lazy dog"` contains the text `"The"` twice; the first occurrence is `"The"` and the second and last occurrence is `"the"`. Therefore, the variable `($)Text` will be updated to the following:

```json
"The quick brown fox jumps over  lazy dog"
```

***

## Properties

### Text

The [Text][Text Property] to find and remove the specified [Occurrence][Occurrence Property] of [Text To Remove][TextToRemove Property] from.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Default Value | `($)Text` with value `""` |

### Text To Remove

The [Text To Remove][TextToRemove Property] the specified [Occurrence][Occurrence Property] of, from [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)TextToRemove` with value `""` |

### Occurrence

The [Occurrence][Occurrence Property] of [Text To Remove][TextToRemove Property] from [Text][Text Property].

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Occurrence` with value `1` |

### Comparison Type

The [Comparison Type][ComparisonType Property] specifying the rules used to match occurrences of [Text To Remove][TextToRemove Property] in [Text][Text Property].

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
| [ArgumentException][] | Thrown when the [Comparison Type][ComparisonType Property] property is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |

## Remarks

### Occurrences

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`) there is nothing to remove from, so no operation is performed.

### Null or empty Text To Remove

If [Text To Remove][TextToRemove Property] is `null` or empty (i.e. `""`) there is nothing to remove, so no operation is performed.

### Text To Remove or Occurrence is not present

If [Text To Remove][TextToRemove Property] or the specified [Occurrence][Occurrence Property] is not present, there is nothing to remove, so no operation is performed.

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] with the specified [Occurrence][Occurrence property] of [Text To Remove][TextToRemove Property] removed and re-assigns it to the variable specified in the [Text][Text Property] property.

[Text Property]: {{< ref "#text" >}}
[TextToRemove Property]: {{< ref "#text-to-remove" >}}
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
