---
title: "Get Index Of Text"
linkTitle: "Get Index Of Text"
description: "Gets the index of the nth occurrence of a text in another text."
---

![Icon](/blocks/text-get-index-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Get.GetIndexOfTextBlock)</p>

## Description

Gets the [Index][Index Property] of the nth [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] in [Text][Text Property].

## Examples

### Get the Index of the first Occurrence of Text To Find in a given Text (Ordinal)

This example will get the index of the first occurrence of `"The"` in `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"The"` | `($)TextToFind` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `1` | `($)Occurrence` is a variable of type [Int32][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Index][Index Property] | `($)Index`, with no value | `($)Index` is a variable that will be set to an [Int32][] value |

#### Result

An [Occurrence][Occurrence Property] of `1` means get the index of the first occurrence; `2` means second etc.

As this example is performing a [case-sensitive, culture-insensitive][Ordinal] comparison of text, `"The quick brown fox jumps over the lazy dog"` only contains the text `"The"` once; `"the"` has a different case so does not match. Therefore, the variable `($)Index` will be updated to the following:

```json
0
```

where `0` indicates the index of the first character of the first and only occurrence matching `"The"`.

***

### Get the Index of the last Occurrence of Text To Find in a given Text (Ordinal Ignore Case)

This example will get the index of the last occurrence of `"The"` in `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"The"` | `($)TextToFind` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `-1` | `($)Occurrence` is a variable of type [Int32][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Index][Index Property] | `($)Index`, with no value | `($)Index` is a variable that will be set to an [Int32][] value |

#### Result

An [Occurrence][Occurrence Property] of `-1` means get the index of the last occurrence; `2` means second last etc.

As this example is performing a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text, `"The quick brown fox jumps over the lazy dog"` contains the text `"The"` twice; the first occurrence is `"The"` and the second and last occurrence is `"the"`. Therefore, the variable `($)Index` will be updated to the following:

```json
31
```

where `31` indicates the index of the first character of the last matching occurrence, `"the"`.

***

### Text does not contain Text To Find

This example will attempt to get the index of the first occurrence of `"slow"` in `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"slow"` | `($)TextToFind` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `1` | `($)Occurrence` is a variable of type [Int32][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Index][Index Property] | `($)Index`, with no value | `($)Index` is a variable that will be set to an [Int32][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` does not contain the text `"slow"`, so the index cannot be found. Therefore, the variable `($)Index` will be updated to the following:

```json
-1
```

where `-1` indicates that there are no matching occurrences.

***

## Properties

### Text

The [Text][Text Property] to get the [Index][Index Property] of the nth [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] from.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Text` with value `""` |

### Text To Find

The [Text To Find][TextToFind Property] the [Index][Index Property] of the nth [Occurrence][Occurrence Property] of, in [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)TextToFind` with value `""` |

### Occurrence

The nth [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] in [Text][Text Property].

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Occurrence` with value `1` |

### Comparison Type

The [Comparison Type][ComparisonType Property] specifying the rules used to match [Text To Find][TextToFind Property] in [Text][Text Property].

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Property Type | [Input][] |
| Default Value | `($)ComparisonType` with value `StringComparison.Ordinal` |

### Index

[Int32][] indicating the [Index][Index Property] of the first character of the nth [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] in [Text][Text Property].

If there is no nth [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] in [Text][Text Property], the specified variable will be set to `-1`.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Output][] |
| Default Value | `($)Index` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when the [Comparison Type][ComparisonType Property] property is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |

## Remarks

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`), the variable specified in the [Index][Index Property] property is set to `-1`.

### Null or empty Text To Find

If [Text To Find][TextToFind Property] is `null` or empty (i.e. `""`), the variable specified in the [Index][Index Property] property is set to `-1`.

### Occurrence is zero

If the [Occurrence][Occurrence Property] is set to `0`, the variable specified in the [Index][Index Property] property is set to `-1`.

### Occurrence of Text To Find not found

If the nth [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] is not found in [Text][Text Property], the variable specified in the [Index][Index Property] property is set to `-1`.

[Text Property]: {{< ref "#text" >}}
[TextToFind Property]: {{< ref "#text-to-find" >}}
[Occurrence Property]: {{< ref "#occurrence" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[Index Property]: {{< ref "#index" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.Indexes.MainDoc" >}}
[Occurrences]: {{< url "Cortex.Reference.Concepts.Occurrences.MainDoc" >}}
[Text Equality]: {{< url "Cortex.Reference.Concepts.TextEquality.MainDoc" >}}
[ComparisonTypes]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.Ordinal" >}}
[OrdinalIgnoreCase]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.OrdinalIgnoreCase" >}}

[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[StringComparison]: {{< url "Cortex.Reference.DataTypes.MostCommon.StringComparison" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
