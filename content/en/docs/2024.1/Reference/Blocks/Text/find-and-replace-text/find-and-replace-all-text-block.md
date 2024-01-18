---
title: "Find And Replace All Text"
linkTitle: "Find And Replace All Text"
description: "Finds and replaces all occurrences of a text in a given text."
---

{{< figure src="/blocks/text-find-and-replace-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.FindAndReplaceText.FindAndReplaceAllTextBlock)</p>

## Description

Finds and replaces all occurrences of [Text To Find][TextToFind Property] with the specified [Replacement Text][ReplacementText Property] in a given [Text][Text Property].

[Search Options][SearchOptions Property] can be specified to choose whether to use a LiteralText, PatternMatching or Regex search to find the [Text To Find][TextToFind Property].

## Examples

### Replace All Occurrences when there are multiple matches

This example will find and replace all occurrences of `"The"` in `"The quick brown fox jumps over the lazy dog."` with `"CORTEX"`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "", "contains": "The", "endsWith": ""}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "", contains: "The", endsWith: "")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Replacement Text][ReplacementText Property] | `($)ReplacementText` with value `"CORTEX"`| `($)ReplacementText` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.LiteralText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |

#### Result

As this example is performing a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text (`"The quick brown fox jumps over the lazy dog."`), the text contains `"The"` twice; the first occurrence is `"The"` and the second occurrence is `"the"`. Therefore, the variable `($)Text` will be updated to `"CORTEX quick brown fox jumps over CORTEX lazy dog."`.

For more information on using [SearchOptions][SearchOptions Property] and [Text To Find][TextToFind Property] see [Advanced Examples][].

***

### Replace All occurrences when there is a single match

This example will find and replace all occurrences of `"The"` in `"The quick brown fox jumps over the lazy dog."` with `"CORTEX"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "", "contains": "The", "endsWith": ""}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "", contains: "The", endsWith: "")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Replacement Text][ReplacementText Property] | `($)ReplacementText` with value `"CORTEX"`| `($)ReplacementText` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.LiteralText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |

#### Result

As this example is performing a [case-sensitive, culture-insensitive][Ordinal] comparison of text (`"The quick brown fox jumps over the lazy dog."`), the text contains `"The"` once; `"the"` has a different case so does not match. Therefore, the variable `($)Text` will be updated to `"CORTEX quick brown fox jumps over the lazy dog."`.

For more information on using [SearchOptions][SearchOptions Property] and [Text To Find][TextToFind Property] see [Advanced Examples][].

***

### Replace All occurrences when there are no matches

This example will find and replace all occurrences of `"cat"` in `"The quick brown fox jumps over the lazy dog."` with `"CORTEX"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "", "contains": "cat", "endsWith": ""}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "", contains: "cat", endsWith: "")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Replacement Text][ReplacementText Property] | `($)ReplacementText` with value `"CORTEX"`| `($)ReplacementText` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.LiteralText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |

#### Results

`"The quick brown fox jumps over the lazy dog."` does not contain an occurrence of `"cat"`. Therefore, `($)Text` is not updated and remains as `"The quick brown fox jumps over the lazy dog."`.

For more information on using [SearchOptions][SearchOptions Property] and [Text To Find][TextToFind Property] see [Advanced Examples][].

***

## Properties

### Text

The [Text][Text Property] to find and replace all occurrences of [Text To Find][TextToFind Property] in.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Text` with no value |

### Text To Find

The [Text To Find][TextToFind Property] search query to find and replace all occurrences of in [Text][Text Property]. This property contains all of the information in relation to the conditions for a valid match; these are:

* [Starts With][StartsWith]
* [Contains][Contains]
* [Ends With][EndsWith]

| | |
|--------------------|---------------------------|
| Data Type | [TextToFind][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `TextToFind` with the value shown below: |

```json
{
    "StartsWith":"",
    "Contains":"",
    "EndsWith":"",
}
```

### Replacement Text

The [Replacement Text][ReplacementText Property] used to replace all occurrences of [Text To Find][TextToFind Property] in [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `$@""` |

### Search Options

[Search Options][SearchOptions Property] can be specified to choose whether [Text To Find][TextToFind Property] should be interpreted as a LiteralText, PatternMatching or Regex search:

* `SearchOptions.LiteralText` matches text exactly; as long as the [Text][Text Property] contains the text specified in [Text To Find][TextToFind Property] it will be considered a match.
* `SearchOptions.PatternMatching` allows wildcard text matching using [Pattern Matching Syntax][]:
  * `*` wildcard character can be used to match `0` or more characters.
  * `?` wildcard character can be used to match `0` or `1` character.
  * All other characters are treated as a literal character.
* `SearchOptions.Regex` allows regex text matching using [.Net Regex Syntax][Regex Syntax].

Please note that overlapping matches are not detected (i.e. searching for `"aa"` in `"aaa"` matches `"aa"`  at index `0` but not `"aa"` at index `1`).

| | |
|--------------------|---------------------------|
| Data Type | [SearchOptions][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `LiteralText` |

### Comparison Type

The [Comparison Type][ComparisonType Property] specifying the rules used to match occurrences of [Text To Find][TextToFind Property] in [Text][Text Property].

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `Ordinal` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Comparison Type][ComparisonType Property] is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |
| | Thrown when [Search Options][SearchOptions Property] is not one of the specified [SearchOptions][] types (e.g. `(SearchOptions)10`). |
| [RegexMatchTimeoutException][] | Thrown when the execution time of any search done to find all occurrences of [Text to Find][TextToFind Property] exceeds the [BlockTimeout][], or `60` seconds if that is undefined. |
| [RegexParsingFailedException][] | Thrown when [Search Options][SearchOptions Property] is `SearchOptions.Regex` and [TextToFind][TextToFind Property] has a property which is not a valid regex (e.g. `(`). |

## Remarks

### Advanced Examples

The following sections will show examples for each possible value of [Search Options][SearchOptions Property].

In these examples, the following properties are common:

| Property | Value |
|----------|-------|
| [Text][Text Property] | `"The quick brown fox jumps over the lazy dog."`. |
| [Comparison Type][ComparisonType Property] | `Ordinal` |
| [Replacement Text][ReplacementText Property] | `"CORTEX"` |

These sections contain tables for the examples. The columns of these tables are explained below:

| Column Name | Explanation |
|-------------|-------------|
| TextToFind.StartsWith | Value used to define the StartsWith property of [Text To Find][TextToFind Property]. |
| TextToFind.Contains | Value used to define the Contains property of [Text To Find][TextToFind Property]. |
| TextToFind.EndsWith | Value used to define the EndsWith property of [Text To Find][TextToFind Property]. |
| Output Text | The value of the [Text][Text Property] after executing the block. \* |
\* *DEFAULT* indicates that nothing has been found and replaced in [Text][Text Property], and that [Text][Text Property] is the same as was initially provided.

Please note that these examples all perform a search which has at most one valid match in the text.

#### SearchOptions.LiteralText

These examples find the first occurrence in [Text][Text Property] with [Search Options][SearchOptions Property] set to `LiteralText` using a [case-sensitive, culture-insensitive][Ordinal] search.

| TextToFind.StartsWith | TextToFind.Contains | TextToFind.EndsWith | Output Text |
|-----------------------|---------------------|---------------------|-------------|
| `"The"` | `"quick"` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `"The"` | `"quick"` | `""` | <nobr>`"CORTEX brown fox jumps over the lazy dog."`</nobr> |
| `"The"` | `""` | `"brown"` | *DEFAULT* |
| `"The"` | `""` | `""` | <nobr>`"CORTEX quick brown fox jumps over the lazy dog."`</nobr> |
| `""` | `"quick"` | `"brown"` | <nobr>`"The CORTEX fox jumps over the lazy dog."`</nobr> |
| `""` | `"quick"` | `""` | <nobr>`"The CORTEX brown fox jumps over the lazy dog."`</nobr> |
| `""` | `""` | `"brown"` | <nobr>`"The quick CORTEX fox jumps over the lazy dog."`</nobr> |
| `""` | `""` | `""` | *DEFAULT* |

#### SearchOptions.PatternMatching

These examples find the first occurrence in [Text][Text Property] with [Search Options][SearchOptions Property] set to `PatternMatching` using a [case-sensitive, culture-insensitive][Ordinal] search.

| TextToFind.StartsWith | TextToFind.Contains | TextToFind.EndsWith | Output Text |
|-----------------------|---------------------|---------------------|-------------|
| `"The"` | `"quick"` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `"The"` | `"quick"` | `""` | <nobr>`"CORTEX brown fox jumps over the lazy dog."`</nobr> |
| `"The"` | `""` | `"brown"` | *DEFAULT* |
| `"The"` | `""` | `""` | <nobr>`"CORTEX quick brown fox jumps over the lazy dog."`</nobr> |
| `""` | `"quick"` | `"brown"` | <nobr>`"The CORTEX fox jumps over the lazy dog."`</nobr> |
| `""` | `"quick"` | `""` | <nobr>`"The CORTEX brown fox jumps over the lazy dog."`</nobr> |
| `""` | `""` | `"brown"` | <nobr>`"The quick CORTEX fox jumps over the lazy dog."`</nobr> |
| `""` | `""` | `""` | *DEFAULT* |
| `"The"` | `"quick"` | `"*"` | <nobr>`"CORTEX"`</nobr> |
| `"The"` | `"*"` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `"The"` | `"*"` | `"*"` | <nobr>`"CORTEX"`</nobr> |
| `"The"` | `"*"` | `""` | <nobr>`"CORTEX"`</nobr> |
| `"The"` | `""` | `"*"` | <nobr>`"CORTEX"`</nobr> |
| `"*"` | `"quick"` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `"*"` | `"quick"` | `"*"` | <nobr>`"CORTEX"`</nobr> |
| `"*"` | `"quick"` | `""` | <nobr>`"CORTEX brown fox jumps over the lazy dog."`</nobr> |
| `"*"` | `"*"` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `"*"` | `""` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `"*"` | `"*"` | `"*"` | <nobr>`"CORTEX"`</nobr> |
| `"*"` | `"*"` | `""` | <nobr>`"CORTEX"`</nobr> |
| `"*"` | `""` | `"*"` | <nobr>`"CORTEX"`</nobr> |
| `"*"` | `""` | `""` | <nobr>`"CORTEX"`</nobr> |
| `""` | `"quick"` | `"*"` | <nobr>`"The CORTEX"`</nobr> |
| `""` | `"*"` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `""` | `"*"` | `"*"` | <nobr>`"CORTEX"`</nobr> |
| `""` | `"*"` | `""` | <nobr>`"CORTEX"`</nobr> |
| `""` | `""` | `"*"` | <nobr>`"CORTEX"`</nobr> |

#### SearchOptions.Regex

These examples find the first occurrence in [Text][Text Property] with [Search Options][SearchOptions Property] set to `Regex` using a [case-sensitive, culture-insensitive][Ordinal] search.

| TextToFind.StartsWith | TextToFind.Contains | TextToFind.EndsWith | Output Text |
|-----------------------|---------------------|---------------------|-------------|
| `"The"` | `"quick"` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `"The"` | `"quick"` | `""` | <nobr>`"CORTEX brown fox jumps over the lazy dog."`</nobr> |
| `"The"` | `""` | `"brown"` | *DEFAULT* |
| `"The"` | `""` | `""` | <nobr>`"CORTEX quick brown fox jumps over the lazy dog."`</nobr> |
| `""` | `"quick"` | `"brown"` | <nobr>`"The CORTEX fox jumps over the lazy dog."`</nobr> |
| `""` | `"quick"` | `""` | <nobr>`"The CORTEX brown fox jumps over the lazy dog."`</nobr> |
| `""` | `""` | `"brown"` | <nobr>`"The quick CORTEX fox jumps over the lazy dog."`</nobr> |
| `""` | `""` | `""` | *DEFAULT* |
| `"The"` | `"quick"` | `".*"` | <nobr>`"CORTEX"`</nobr> |
| `"The"` | `".*"` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `"The"` | `".*"` | `".*"` | <nobr>`"CORTEX"`</nobr> |
| `"The"` | `".*"` | `""` | <nobr>`"CORTEX"`</nobr> |
| `"The"` | `""` | `".*"` | <nobr>`"CORTEX"`</nobr> |
| `".*"` | `"quick"` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `".*"` | `"quick"` | `".*"` | <nobr>`"CORTEX"`</nobr> |
| `".*"` | `"quick"` | `""` | <nobr>`"CORTEX brown fox jumps over the lazy dog."`</nobr> |
| `".*"` | `".*"` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `".*"` | `""` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `".*"` | `".*"` | `".*"` | <nobr>`"CORTEX"`</nobr> |
| `".*"` | `".*"` | `""` | <nobr>`"CORTEX"`</nobr> |
| `".*"` | `""` | `".*"` | <nobr>`"CORTEX"`</nobr> |
| `".*"` | `""` | `""` | <nobr>`"CORTEX"`</nobr> |
| `""` | `"quick"` | `".*"` | <nobr>`"The CORTEX"`</nobr> |
| `""` | `".*"` | `"brown"` | <nobr>`"CORTEX fox jumps over the lazy dog."`</nobr> |
| `""` | `".*"` | `".*"` | <nobr>`"CORTEX"`</nobr> |
| `""` | `".*"` | `""` | <nobr>`"CORTEX"`</nobr> |
| `""` | `""` | `".*"` | <nobr>`"CORTEX"`</nobr> |

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Equality][].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`) there is nothing to replace in, so no operation is performed.

### Null or empty Text To Find

If all properties of [Text To Find][TextToFind Property] are `null` or empty (i.e. `""`), or [Text To Find][TextToFind Property] is `null`; no operation is performed and the [Text][Text Property] remains unchanged.

### Null or empty property of Text To Find

If a property of [Text To Find][TextToFind Property] is `null` or empty (i.e. `""`), then it is not considered as part of the matches for [Text to Find][TextToFind Property] when determining what to replace.

### Null or empty Replacement Text

If [Replacement Text][ReplacementText Property] is `null` or empty (i.e. `""`) all occurrences of [Text To Find][TextToFind Property] are replaced with an empty text (i.e. `""`).

### Text To Find is not present

If [Text To Find][TextToFind Property] is not present there is nothing to replace, so no operation is performed.

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] with all occurrences of [Text To Find][TextToFind Property] replaced and re-assigns it to the variable specified in the [Text][Text Property] property.

### Known Limitations

If [Comparison Type][ComparisonType Property] is set to `StringComparison.CurrentCulture`, some characters such as `æ` that is equivalent to `ae` may not evaluate as equal.

[Advanced Examples]: {{<ref "#advanced-examples">}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[ReplacementText Property]: {{< ref "#replacement-text" >}}
[SearchOptions Property]: {{< ref "#search-options" >}}
[Text Property]: {{< ref "#text" >}}
[TextToFind Property]: {{< ref "#text-to-find" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[ComparisonTypes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.Ordinal" >}}
[OrdinalIgnoreCase]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.OrdinalIgnoreCase" >}}
[Pattern Matching Syntax]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.PatternMatchingSyntax.MainDoc" >}}
[Regex Syntax]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.RegexSyntax.MainDoc" >}}

[RegexParsingFailedException]: {{< url path="Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}

[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[RegexMatchTimeoutException]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[StringComparison]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}
[SearchOptions]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.MainDoc" >}}

[TextToFind]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFind.MainDoc">}}
[StartsWith]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFind.StartsWith">}}
[Contains]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFind.Contains">}}
[EndsWith]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFind.EndsWith">}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[BlockTimeout]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.BlockTimeoutProperty" >}}
