---
title: "Get Index Of Text"
linkTitle: "Get Index Of Text"
description: "Gets the index of the specified occurrence of a text in another text."
---

{{< figure src="/blocks/Cortex_Blocks_Text_GetIndex_GetIndexOfTextBlock.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.GetIndex.GetIndexOfTextBlock)</p>

## Description

Gets the [Index][Index Property] of the specified [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] in [Text][Text Property].

[Search Options][SearchOptions Property] can be specified to choose whether to use a LiteralText, PatternMatching or Regex search to find the [Text To Find][TextToFind Property].

## Examples

### Get the Index of the first Occurrence of Text To Find (Ordinal)

This example will get the index of the first occurrence of `"The"` in `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"The"` | `($)TextToFind` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `1` | `($)Occurrence` is a variable of type [Int32][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.LiteralText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
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

### Get the Index of the last Occurrence of Text To Find (Ordinal Ignore Case)

This example will get the index of the last occurrence of `"The"` in `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"The"` | `($)TextToFind` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `-1` | `($)Occurrence` is a variable of type [Int32][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.LiteralText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
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
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.LiteralText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Index][Index Property] | `($)Index`, with no value | `($)Index` is a variable that will be set to an [Int32][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` does not contain the text `"slow"`, so the index cannot be found. Therefore, the variable `($)Index` will be updated to the following:

```json
-1
```

where `-1` indicates that there are no matching occurrences.

***

### Get the Index of the first Occurrence matching the pattern in Text To Find

This example will get the index of the first occurrence of text matching the pattern `"?he"` from `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"?he"` | `($)TextToFind` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `1` | `($)Occurrence` is a variable of type [Int32][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.PatternMatching` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Index][Index Property] | `($)Index`, with no value | `($)Index` is a variable that will be set to an [Int32][] value |

#### Result

An [Occurrence][Occurrence Property] of `1` means get the index of the first occurrence; `2` means second etc.

`"The quick brown fox jumps over the lazy dog"` contains two occurrences that match the pattern `"?he"`; the first occurrence is `"The"` and the second occurrence is `"the"`. Therefore, the variable `($)Index` will be updated to the following:

```json
0
```

where `0` indicates the index of the first character of the first occurrence matching the pattern `"?he"`.

***

### Get the Index of the last Occurrence matching the regex in Text To Remove

This example will get the index of the last occurrence of text matching the regex `"(fox|dog)"` from `"The quick brown fox jumps over the lazy dog"`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `"(fox\|dog)"` | `($)TextToFind` is a variable of type [String][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `-1` | `($)Occurrence` is a variable of type [Int32][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.Regex` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Index][Index Property] | `($)Index`, with no value | `($)Index` is a variable that will be set to an [Int32][] value |

#### Result

An [Occurrence][Occurrence Property] of `-1` means get the index of the last occurrence; `2` means second last etc.

`"The quick brown fox jumps over the lazy dog"` contains two occurrences that match the regex `"(fox|dog)"`; the first occurrence is `"fox"` and the second and last occurrence is `"dog"`. Therefore, the variable `($)Index` will be updated to the following:

```json
40
```

where `0` indicates the index of the first character of the last occurrence matching the regex `"(fox|dog)"`.

***

## Properties

### Text

The [Text][Text Property] to get the [Index][Index Property] of the specified [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] from.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Text` with no value |

### Text To Find

The [Text To Find][TextToFind Property] the [Index][Index Property] of the specified [Occurrence][Occurrence Property] of, in [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `$@""` |

### Occurrence

The specified [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] in [Text][Text Property].

For information about [supported values][Occurrences] for the [Occurrence][Occurrence Property] property and examples of how it can be used, please see [Occurrences][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `1` |

### Search Options

[Search Options][SearchOptions Property] can be specified to choose whether [Text To Find][TextToFind Property] should be interpreted as a LiteralText, PatternMatching or Regex search:

* `SearchOptions.LiteralText` matches text exactly; as long as the [Text][Text Property] contains the text specified in [Text To Find][TextToFind Property] it will be considered a match.
* `SearchOptions.PatternMatching` allows wildcard text matching using [Pattern Matching Syntax][]:
  * `*` wildcard character can be used to match `0` or more characters.
  * `?` wildcard character can be used to match `0` or `1` character.
  * All other characters are treated as a literal character.
* `SearchOptions.Regex` allows regex text matching using [.Net Regex Syntax][Regex Syntax].

Please note that with `SearchOptions.LiteralText` overlapping matches are detected (e.g. searching for `"aa"` in `"aaa"` matches `"aa"`  at index `0` and `"aa"` at index `1`). With `SearchOptions.Regex` only `"aa"` at index `0` will be matched.

| | |
|--------------------|---------------------------|
| Data Type | [SearchOptions][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `LiteralText` |

### Comparison Type

The [Comparison Type][ComparisonType Property] specifying the rules used to match [Text To Find][TextToFind Property] in [Text][Text Property].

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `Ordinal` |

### Index

[Int32][] indicating the [Index][Index Property] of the first character of the specified [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] in [Text][Text Property].

If there is no specified [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] in [Text][Text Property], the specified variable will be set to `-1`.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Index` with no value |

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

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Equality][].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`), the variable specified in the [Index][Index Property] property is set to `-1`.

### Null or empty Text To Find

If [Text To Find][TextToFind Property] is `null` or empty (i.e. `""`), the variable specified in the [Index][Index Property] property is set to `-1`.

### Occurrence is zero

If the [Occurrence][Occurrence Property] is set to `0`, the variable specified in the [Index][Index Property] property is set to `-1`.

### Occurrence of Text To Find not found

If the specified [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] is not found in [Text][Text Property], the variable specified in the [Index][Index Property] property is set to `-1`.

### Known Limitations

If [Search Options][SearchOptions Property] is set to `SearchOptions.Regex` or `SearchOptions.PatternMatching` and [Comparison Type][ComparisonType Property] is set to `StringComparison.CurrentCulture`, some characters such as `æ` that is equivalent to `ae` may not evaluate as equal.

[Text Property]: {{< ref "#text" >}}
[TextToFind Property]: {{< ref "#text-to-find" >}}
[Occurrence Property]: {{< ref "#occurrence" >}}
[SearchOptions Property]: {{< ref "#search-options" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[Index Property]: {{< ref "#index" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Indexes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Occurrences]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Occurrences.MainDoc" >}}
[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[ComparisonTypes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.Ordinal" >}}
[OrdinalIgnoreCase]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.OrdinalIgnoreCase" >}}
[Pattern Matching Syntax]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.PatternMatchingSyntax.MainDoc" >}}
[Regex Syntax]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.RegexSyntax.MainDoc" >}}

[RegexParsingFailedException]: {{< url path="Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}

[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[RegexMatchTimeoutException]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[StringComparison]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}
[SearchOptions]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
