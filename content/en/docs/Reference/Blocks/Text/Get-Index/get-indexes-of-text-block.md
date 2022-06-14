---
title: "Get Indexes Of Text"
linkTitle: "Get Indexes Of Text"
description: "Gets the indexes of all occurrences of a text in another text."
---

{{< figure src="/blocks/text-get-index-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.GetIndex.GetIndexesOfTextBlock)</p>

## Description

Gets the [Indexes][Indexes Property] of all occurrences of [Text To Find][TextToFind Property] in [Text][Text Property].

[Search Options][SearchOptions Property] can be specified to choose whether to use a ContainsText, PatternMatching or Regex search to find the [Text To Find][TextToFind Property].

## Examples

### Get Indexes of all occurrences of Text To Find (Ordinal)

This example will get the indexes of all occurrences of `"The"` in `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"The"` | `($)TextToFind` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Indexes][Indexes Property] | `($)Indexes`, with no value | `($)Indexes` is a variable that will be set to an [IList][]&lt;[Int32][]&gt; value |

#### Result

As this example is performing a [case-sensitive, culture-insensitive][Ordinal] comparison of text, `"The quick brown fox jumps over the lazy dog"` only contains the text `"The"` once; `"the"` has a different case so does not match. Therefore, the variable `($)Indexes` will be updated to the following:

```json
[0]
```

where `0` indicates the index of the first character of the matching `"The"` occurrence.

***

### Get Indexes of all occurrences of Text To Find (Ordinal Ignore Case)

This example will get the indexes of all occurrences of `"The"` in `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"The"` | `($)TextToFind` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
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
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Indexes][Indexes Property] | `($)Indexes`, with no value | `($)Indexes` is a variable that will be set to an [IList][]&lt;[Int32][]&gt; value |

#### Result

`"The quick brown fox jumps over the lazy dog"` does not contain the text `"slow"`, so the index cannot be found. Therefore, the variable `($)Indexes` will be updated to the following:

```json
[-1]
```

where `-1` indicates that there are no matching occurrences.

***

### Get Indexes of all occurrences matching the pattern in Text To Find

This example will get the indexes of all occurrences of text matching the pattern `"?he"` from `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"?he"` | `($)TextToFind` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.PatternMatching` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Indexes][Indexes Property] | `($)Indexes`, with no value | `($)Indexes` is a variable that will be set to an [IList][]&lt;[Int32][]&gt; value |

#### Result

`"The quick brown fox jumps over the lazy dog"` contains two occurrences that match the pattern `"?he"`; the first occurrence is `"The"` and the second occurrence is `"the"`. Therefore, the variable `($)Indexes` will be updated to the following:

```json
[0, 31]
```

where `0` indicates the index of the first character of the matching `"The"` occurrence, and `31` indicates the index of the first character of the matching `"the"` occurrence.

***

### Get Indexes of all occurrences matching the regex in Text To Remove

This example will get the indexes of all occurrences of text matching the regex `"(fox|dog)"` from `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"(fox\|dog)"` | `($)TextToFind` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.Regex` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Indexes][Indexes Property] | `($)Indexes`, with no value | `($)Indexes` is a variable that will be set to an [IList][]&lt;[Int32][]&gt; value |

#### Result

`"The quick brown fox jumps over the lazy dog"` contains two occurrences that match the regex `"(fox|dog)"`; the first occurrence is `"fox"` and the second and last occurrence is `"dog"`. Therefore, the variable `($)Indexes` will be updated to the following:

```json
[16, 40]
```

where `16` indicates the index of the first character of the matching `"fox"` occurrence, and `40` indicates the index of the first character of the matching `"dog"` occurrence.

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

### Search Options

[Search Options][SearchOptions Property] can be specified to choose whether [Text To Find][TextToFind Property] should be interpreted as a ContainsText, PatternMatching or Regex search:

* `SearchOptions.ContainsText` matches text exactly; as long as the [Text][Text Property] contains the text specified in [Text To Find][TextToFind Property] it will be considered a match.
* `SearchOptions.PatternMatching` allows wildcard text matching using [Pattern Matching Syntax][]:
  * `*` wildcard character can be used to match `0` or more characters.
  * `?` wildcard character can be used to match `0` or `1` character.
  * All other characters are treated as a literal character.
* `SearchOptions.Regex` allows regex text matching using [.Net Regex Syntax][Regex Syntax].

Please note that with `SearchOptions.ContainsText` overlapping matches are detected (e.g. searching for `"aa"` in `"aaa"` matches `"aa"`  at index `0` and `"aa"` at index `1`). With `SearchOptions.Regex` only `"aa"` at index `0` will be matched.

| | |
|--------------------|---------------------------|
| Data Type | [SearchOptions][] |
| Property Type | [Input][] |
| Default Value | `($)SearchOptions` with value `SearchOptions.ContainsText` |

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
| | Thrown when [Search Options][SearchOptions Property] is not one of the specified [SearchOptions][] types (e.g. `(SearchOptions)10`). |
| [RegexMatchTimeoutException][] | Thrown when [Search Options][SearchOptions Property] is either `SearchOptions.Regex` or `SearchOptions.PatternMatching` and the execution time of the search exceeds `30` seconds. |
| [RegexParsingFailedException][] | Thrown when [Search Options][SearchOptions Property] is `SearchOptions.Regex` and [Text To Find][TextToFind Property] is not a valid regex (e.g. `(`). |

## Remarks

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`), the variable specified in the [Indexes][Indexes Property] property is set to `[-1]`.

### Null or empty Text To Find

If [Text To Find][TextToFind Property] is `null` or empty (i.e. `""`), the variable specified in the [Indexes][Indexes Property] property is set to `[-1]`.

### Text To Find not found

If [Text To Find][TextToFind Property] is not found in [Text][Text Property], the variable specified in the [Indexes][Indexes Property] property is set to `[-1]`.

### Known Limitations

If [Search Options][SearchOptions Property] is set to `SearchOptions.Regex` or `SearchOptions.PatternMatching` and [Comparison Type][ComparisonType Property] is set to `StringComparison.CurrentCulture`, some characters such as `æ` that is equivalent to `ae` may not evaluate as equal.

[Text Property]: {{< ref "#text" >}}
[TextToFind Property]: {{< ref "#text-to-find" >}}
[SearchOptions Property]: {{< ref "#search-options" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[Indexes Property]: {{< ref "#indexes" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.Indexes.MainDoc" >}}
[Text Equality]: {{< url "Cortex.Reference.Concepts.TextEquality.MainDoc" >}}
[ComparisonTypes]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.Ordinal" >}}
[OrdinalIgnoreCase]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.OrdinalIgnoreCase" >}}
[Pattern Matching Syntax]: {{< url "Cortex.Reference.Concepts.PatternMatchingSyntax.MainDoc" >}}
[Regex Syntax]: {{< url "Cortex.Reference.Concepts.RegexSyntax.MainDoc" >}}

[RegexParsingFailedException]: {{< url "Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
[RegexMatchTimeoutException]: {{< url "MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}

[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[StringComparison]: {{< url "Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}
[SearchOptions]: {{< url "Cortex.Reference.DataTypes.MostCommon.SearchOptions" >}}
