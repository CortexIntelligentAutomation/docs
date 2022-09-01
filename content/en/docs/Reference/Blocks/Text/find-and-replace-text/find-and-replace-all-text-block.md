---
title: "Find And Replace All Text"
linkTitle: "Find And Replace All Text"
description: "Finds and replaces all occurrences of text in a given text."
---

{{< figure src="/blocks/text-find-and-replace-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.FindAndReplaceText.FindAndReplaceAllTextBlock)</p>

## Description

Finds and replaces all occurrences of [Text To Replace][TextToReplace Property] with the specified [Replacement Text][ReplacementText Property] in a given [Text][Text Property].

[Search Options][SearchOptions Property] can be specified to choose whether to use a ContainsText, PatternMatching or Regex search to find the [Text To Replace][TextToReplace Property].

## Examples

### Replace all occurrences of Text To Replace (Ordinal)

This example will find and replace all occurrences of `"The"` in `"The quick brown fox jumps over the lazy dog"` with `"a"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Replace][TextToReplace Property] | `($)TextToReplace`, with value `"The"` | `($)TextToReplace` is a variable of type [String][] |
| [Replacement Text][ReplacementText Property] | `($)ReplacementText`, with value `"a"` | `($)ReplacementText` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |

#### Result

As this example is performing a [case-sensitive, culture-insensitive][Ordinal] comparison of text, `"The quick brown fox jumps over the lazy dog"` only contains the text `"The"` once; `"the"` has a different case so does not match. Therefore, the variable `($)Text` will be updated to the following:

```json
"a quick brown fox jumps over the lazy dog"
```

***

### Replace all occurrences of Text To Replace (Ordinal Ignore Case)

This example will find and replace all occurrences of `"The"` in `"The quick brown fox jumps over the lazy dog"` with `"a"`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Replace][TextToReplace Property] | `($)TextToReplace`, with value `"The"` | `($)TextToReplace` is a variable of type [String][] |
| [Replacement Text][ReplacementText Property] | `($)ReplacementText`, with value `"a"` | `($)ReplacementText` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |

#### Result

As this example is performing a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text, `"The quick brown fox jumps over the lazy dog"` contains the text `"The"` twice; the first occurrence is `"The"` and the second occurrence is `"the"`. Therefore, the variable `($)Text` will be updated to the following:

```json
"a quick brown fox jumps over a lazy dog"
```

***

### Replace all occurrences that match the pattern in Text To Replace

This example will find and replace all occurrences of text that match the pattern `"?he"` from `"The quick brown fox jumps over the lazy dog"` with `"a"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Replace][TextToReplace Property] | `($)TextToReplace`, with value `"?he"` | `($)TextToReplace` is a variable of type [String][] |
| [Replacement Text][ReplacementText Property] | `($)ReplacementText`, with value `"a"` | `($)ReplacementText` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.PatternMatching` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |

#### Result

`"The quick brown fox jumps over the lazy dog"` contains `"The"` and `"the"` that matches the pattern `"?he"`. Therefore, the variable `($)Text` will be updated to the following:

```json
"a quick brown fox jumps over a lazy dog"
```

***

### Replace all occurrences that match the regex in Text To Replace

This example will find and replace all occurrences of text that match the regex `"^The"` from `"The quick brown fox jumps over the lazy dog"` with `"a"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Replace][TextToReplace Property] | `($)TextToReplace`, with value `"^The"` | `($)TextToReplace` is a variable of type [String][] |
| [Replacement Text][ReplacementText Property] | `($)ReplacementText`, with value `"a"` | `($)ReplacementText` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.Regex` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |

#### Result

`"The quick brown fox jumps over the lazy dog"` contains `"The"` at the start of the sentence that matches the regex `"^The"`. Therefore, the variable `($)Text` will be updated to the following:

```json
"a quick brown fox jumps over the lazy dog"
```

***

## Properties

### Text

The [Text][Text Property] to find and replace all occurrences of [Text To Replace][TextToReplace Property] in.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Default Value | `($)Text` with value `""` |

### Text To Replace

The [Text To Replace][TextToReplace Property] all occurrences with [Replacement Text][ReplacementText Property] in [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)TextToReplace` with value `""` |

### Replacement Text

The [Replacement Text][ReplacementText Property] used to replace all occurrences of [Text To Replace][TextToReplace Property] in [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)ReplacementText` with value `""` |

### Search Options

[Search Options][SearchOptions Property] can be specified to choose whether [Text To Replace][TextToReplace Property] should be interpreted as a ContainsText, PatternMatching or Regex search:

* `SearchOptions.ContainsText` matches text exactly; as long as the [Text][Text Property] contains the text specified in [Text To Replace][TextToReplace Property] it will be considered a match.
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
| | Thrown when [Search Options][SearchOptions Property] is not one of the specified [SearchOptions][] types (e.g. `(SearchOptions)10`). |
| [RegexMatchTimeoutException][] | Thrown when [Search Options][SearchOptions Property] is either `SearchOptions.Regex` or `SearchOptions.PatternMatching` and the execution time of the search exceeds `30` seconds. |
| [RegexParsingFailedException][] | Thrown when [Search Options][SearchOptions Property] is `SearchOptions.Regex` and [Text To Replace][TextToReplace Property] is not a valid regex (e.g. `(`). |

## Remarks

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`) there is nothing to replace in, so no operation is performed.

### Null or empty Text To Replace

If [Text To Replace][TextToReplace Property] is `null` or empty (i.e. `""`) there is nothing to replace, so no operation is performed.

### Null or empty Replacement Text

If [Replacement Text][ReplacementText Property] is `null` or empty (i.e. `""`) all occurrences of [Text To Replace][TextToReplace Property] are replaced with an empty text (i.e. `""`).

### Text To Replace is not present

If [Text To Replace][TextToReplace Property] is not present there is nothing to replace, so no operation is performed.

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] with all occurrences of [Text To Replace][TextToReplace Property] replaced and re-assigns it to the variable specified in the [Text][Text Property] property.

### Known Limitations

If [Search Options][SearchOptions Property] is set to `SearchOptions.Regex` or `SearchOptions.PatternMatching` and [Comparison Type][ComparisonType Property] is set to `StringComparison.CurrentCulture`, some characters such as `æ` that is equivalent to `ae` may not evaluate as equal.

[Text Property]: {{< ref "#text" >}}
[TextToReplace Property]: {{< ref "#text-to-replace" >}}
[ReplacementText Property]: {{< ref "#replacement-text" >}}
[SearchOptions Property]: {{< ref "#search-options" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[Text Equality]: {{< url "Cortex.Reference.Concepts.TextEquality.MainDoc" >}}
[ComparisonTypes]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.Ordinal" >}}
[OrdinalIgnoreCase]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.OrdinalIgnoreCase" >}}
[Pattern Matching Syntax]: {{< url "Cortex.Reference.Concepts.PatternMatchingSyntax.MainDoc" >}}
[Regex Syntax]: {{< url "Cortex.Reference.Concepts.RegexSyntax.MainDoc" >}}

[RegexParsingFailedException]: {{< url "Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
[RegexMatchTimeoutException]: {{< url "MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[StringComparison]: {{< url "Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}
[SearchOptions]: {{< url "Cortex.Reference.DataTypes.Text.SearchOptions.MainDoc" >}}
