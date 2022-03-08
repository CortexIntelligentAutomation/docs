---
title: "Contains Any Text"
linkTitle: "Contains Any Text"
description: "Checks if text contains any of the texts in a given set of texts."
---

![Icon](/blocks/text-contains-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.ContainsText.ContainsAnyTextBlock)</p>

## Description

Checks if [Text][Text Property] contains any of the texts in a given set of [Texts To Find][TextsToFind Property].

[Search Options][SearchOptions Property] can be specified to choose whether to use a ContainsText, PatternMatching or Regex search to perform the check.

## Examples

### Text contains any of the texts in Texts To Find

This example will check whether `"The quick brown fox jumps over the lazy dog"` contains at least one of the texts in `["The", "fast", "red", "fox"]`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Texts To Find][TextsToFind Property] | `($)TextsToFind`, with value `["The", "fast", "red", "fox"]` | `($)TextsToFind` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Contains Any Text][ContainsAnyText Property] | `($)ContainsAnyText`, with no value | `($)ContainsAnyText` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` contains the text `"The"` and `"fox"` in `["The", "fast", "red", "fox"]`. Therefore, the variable `($)ContainsAnyText` will be updated to the following:

```json
true
```

***

### Text does not contain any of the texts in Texts To Find

This example will check whether `"The quick brown fox jumps over the lazy dog"` contains at least one of the texts in `["the", "slow", "red", "Fox"]`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Texts To Find][TextsToFind Property] | `($)TextsToFind`, with value `["the", "slow", "red", "Fox"]` | `($)TextsToFind` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Contains Any Text][ContainsAnyText Property] | `($)ContainsAnyText`, with no value | `($)ContainsAnyText` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` does not contain any of the texts in `["the", "slow", "red", "Flow"]`; `"slow"` and `"red"` are both missing, and `"the"` and `"Fox"` do not match `"The"` and `"fox"` respectively as the specified [Comparison Type][ComparisonType Property] uses case-sensitive matching. Therefore, the variable `($)ContainsAnyText` will be updated to the following:

```json
false
```

***

### Text contains text that matches any of the patterns in Texts To Find

This example will check whether `"The quick brown fox jumps over the lazy dog"` contains text that matches any of the patterns in `["?he", "Q?ick", "B*?wn", "Fox"]`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Texts To Find][TextsToFind Property] | `($)TextsToFind`, with value `["?he", "Q?ick", "B*?wn", "Fox"]` | `($)TextsToFind` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.PatternMatching` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Contains Any Text][ContainsAnyText Property] | `($)ContainsAnyText`, with no value | `($)ContainsAnyText` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` contains text that matches one of the patterns in `["?he", "Q?ick", "B*?wn", "Fox"]`; `"?he"` matches `"The"` and `"the"`. Therefore, the variable `($)ContainsAnyText` will be updated to the following:

```json
true
```

***

### Text contains text that matches any of the regexes in Texts To Find

This example will check whether `"The quick brown fox jumps over the lazy dog"` contains text that matches any of the regexes in `["^The", "(Quick|Fast)", "b.*  ", "(fox|Fox)$"]`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Texts To Find][TextsToFind Property] | `($)TextsToFind`, with value `["^The", "(Quick\|Fast)", "b.*  ", "(fox\|Fox)$"]` | `($)TextsToFind` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.Regex` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Contains Any Text][ContainsAnyText Property] | `($)ContainsAnyText`, with no value | `($)ContainsAnyText` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` contains text that matches any of the regexes in `["^The", "(Quick|Fast)", "b.*  ", "(fox|Fox)$"]`; `"^The"` matches `"The"` at the start of the sentence. Therefore, the variable `($)ContainsAnyText` will be updated to the following:

```json
true
```

***

## Properties

### Text

The [Text][Text Property] to check whether it contains any of the texts in the given set of [Texts To Find][TextsToFind Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Text` with value `""` |

### Texts To Find

The set of [Texts To Find][TextsToFind Property] to check any are contained in [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[String][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)TextsToFind` with value `[]` |

### Search Options

[Search Options][SearchOptions Property] can be specified to choose whether items in [Texts To Find][TextsToFind Property] should be interpreted as a ContainsText, PatternMatching or Regex search:

* `SearchOptions.ContainsText` matches text exactly; as long as the [Text][Text Property] contains the text specified in [Texts To Find][TextsToFind Property] it will be considered a match.
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

The [Comparison Type][ComparisonType Property] specifying the rules used to determine whether each text in [Texts To Find][TextsToFind Property] is contained in [Text][Text Property]

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Property Type | [Input][] |
| Default Value | `($)ComparisonType` with value `StringComparison.Ordinal` |

### Contains Any Text

The result of the contains any text check.

If any of the texts in [Texts To Find][TextsToFind Property] is contained in [Text][Text Property], the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)ContainsAnyText` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Comparison Type][ComparisonType Property] is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |
| | Thrown when [Search Options][SearchOptions Property] is not one of the specified [SearchOptions][] types (e.g. `(SearchOptions)10`). |
| [PropertyNullException][] | Thrown when [Texts To Find][TextsToFind Property] is `null`. |
| [RegexMatchTimeoutException][] | Thrown when [Search Options][SearchOptions Property] is either `SearchOptions.Regex` or `SearchOptions.PatternMatching` and the execution time of the search exceeds `30` seconds. |
| [RegexParsingFailedException][] | Thrown when [Search Options][SearchOptions Property] is `SearchOptions.Regex` and one or more items in [Texts To Find][TextsToFind Property] are not a valid regex (e.g. `(`). |

## Remarks

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`), the variable specified in the  [Contains Any Text][ContainsAnyText Property] property is set to `false`.

### Null or empty Texts To Find

If [Texts To Find][TextsToFind Property] is empty or only contains `null` or empty (i.e. `""`) text, the variable specified in the [Contains Any Text][ContainsAnyText Property] property is set to `false`.

### Known Limitations

If [Search Options][SearchOptions Property] is set to `SearchOptions.Regex` or `SearchOptions.PatternMatching` and [Comparison Type][ComparisonType Property] is set to `StringComparison.CurrentCulture`, some characters such as `æ` that is equivalent to `ae` may not evaluate as a equal.

[Text Property]: {{< ref "#text" >}}
[TextsToFind Property]: {{< ref "#texts-to-find" >}}
[SearchOptions Property]: {{< ref "#search-options" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[ContainsAnyText Property]: {{< ref "#contains-any-text" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Text Equality]: {{< url "Cortex.Reference.Concepts.TextEquality.MainDoc" >}}
[ComparisonTypes]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.Ordinal" >}}
[Pattern Matching Syntax]: {{< url "Cortex.Reference.Concepts.PatternMatchingSyntax.MainDoc" >}}
[Regex Syntax]: {{< url "Cortex.Reference.Concepts.RegexSyntax.MainDoc" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[RegexParsingFailedException]: {{< url "Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
[RegexMatchTimeoutException]: {{< url "MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}

[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.Boolean" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.MostCommon.IEnumerable" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[StringComparison]: {{< url "Cortex.Reference.DataTypes.MostCommon.StringComparison" >}}
[SearchOptions]: {{< url "Cortex.Reference.DataTypes.MostCommon.SearchOptions" >}}
