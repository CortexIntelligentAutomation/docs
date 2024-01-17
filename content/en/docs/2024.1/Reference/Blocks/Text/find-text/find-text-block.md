---
title: "Find Text"
linkTitle: "Find Text"
description: "Finds the specified occurrence of a text in a given text."
---
{{< figure src="/blocks/text-find-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.FindText.FindTextBlock)</p>

## Description

Finds the specified [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] in a given [Text][Text Property].

[Search Options][SearchOptions Property] can be specified to choose whether to use a LiteralText, PatternMatching or Regex search to match the [Text To Find][TextToFind Property] input.

## Examples

### Find the first Occurrence of text

This example will find the first [occurrence][Occurrence Property] of `"The"` in `"The quick brown fox jumps over the lazy dog."`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "", "contains": "The", "endsWith": ""}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "", contains: "The", endsWith: "")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `1` | `($)Occurrence` is a variable of type [Int32][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.LiteralText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Match][Match Property] | `($)Match`, with no value | `($)Match` is a variable that will be set to a [Match][] value |

#### Result

As this example is performing a [case-sensitive, culture-insensitive][Ordinal] comparison of text (`"The quick brown fox jumps over the lazy dog."`), the text contains `"The"` once; `"the"` has a different case so does not match. Therefore, the variable `($)Match` will be set to the following:

```json
{
  "Value": "The",
  "Index": 0,
  "Length": 3,
  "Groups": {
    "0": {
      "Value": "The",
      "Index": 0,
      "Length": 3,
      "Captures": [
        {
          "Value": "The",
          "Index": 0,
          "Length": 3
        }
      ]
    },
    "contains": {
      "Value": "The",
      "Index": 0,
      "Length": 3,
      "Captures": [
        {
          "Value": "The",
          "Index": 0,
          "Length": 3
        }
      ]
    }
  }
}
```

For more information on using [Search Options][SearchOptions Property] and [Text To Find][TextToFind Property] see [Advanced Examples][].

***

### Find the second Occurrence of text

This example will find the second [occurrence][Occurrence Property] of `"The"` in `"The quick brown fox jumps over the lazy dog."`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "", "contains": "The", "endsWith": ""}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "", contains: "The", endsWith: "")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `2` | `($)Occurrence` is a variable of type [Int32][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.LiteralText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Match][Match Property] | `($)Match`, with no value | `($)Match` is a variable that will be set to a [Match][] value |

#### Result

As this example is performing a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of the text (`"The quick brown fox jumps over the lazy dog."`), the text contains `"The"` twice; the first occurrence is `"The"` and the second occurrence is `"the"`. Therefore, the variable `($)Match` will be set to the following:

```json
{
  "Value": "the",
  "Index": 31,
  "Length": 3,
  "Groups": {
    "0": {
      "Value": "the",
      "Index": 31,
      "Length": 3,
      "Captures": [
        {
          "Value": "the",
          "Index": 31,
          "Length": 3
        }
      ]
    },
    "contains": {
      "Value": "the",
      "Index": 31,
      "Length": 3,
      "Captures": [
        {
          "Value": "the",
          "Index": 31,
          "Length": 3
        }
      ]
    }
  }
}
```

For more information on using [SearchOptions][SearchOptions Property] and [Text To Find][TextToFind Property] see [Advanced Examples][].

***

### Find the last Occurrence of text

This example will find the last [occurrence][Occurrence Property] of `"The"` in `"The quick brown fox jumps over the lazy dog."`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "", "contains": "The", "endsWith": ""}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "", contains: "The", endsWith: "")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `-1` | `($)Occurrence` is a variable of type [Int32][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.LiteralText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Match][Match Property] | `($)Match`, with no value | `($)Match` is a variable that will be set to a [Match][] value |

#### Result

As this example is performing a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of the text (`"The quick brown fox jumps over the lazy dog."`), the text contains `"The"` twice; the first occurrence is `"The"` and the second occurrence is `"the"`. The second occurrence is also the last occurrence, and therefore, the variable `($)Match` will be set to the following:

```json
{
  "Value": "the",
  "Index": 31,
  "Length": 3,
  "Groups": {
    "0": {
      "Value": "the",
      "Index": 31,
      "Length": 3,
      "Captures": [
        {
          "Value": "the",
          "Index": 31,
          "Length": 3
        }
      ]
    },
    "contains": {
      "Value": "the",
      "Index": 31,
      "Length": 3,
      "Captures": [
        {
          "Value": "the",
          "Index": 31,
          "Length": 3
        }
      ]
    }
  }
}
```

For more information on using [SearchOptions][SearchOptions Property] and [Text To Find][TextToFind Property] see [Advanced Examples][].

***

### Find an invalid Occurrence of text

This example will find the third [occurrence][Occurrence Property] of `"The"`, which is not present, in `"The quick brown fox jumps over the lazy dog."`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "", "contains": "The", "endsWith": ""}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "", contains: "The", endsWith: "")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Occurrence][Occurrence Property] | `($)Occurrence`, with value `3` | `($)Occurrence` is a variable of type [Int32][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.LiteralText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Match][Match Property] | `($)Match`, with no value | `($)Match` is a variable that will be set to a [Match][] value |

#### Result

As this example is performing a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of the text (`"The quick brown fox jumps over the lazy dog."`), the text contains `"The"` twice; the first occurrence is `"The"` and the second occurrence is `"the"`. There is no match for the third occurrence. Therefore, the variable `($)Match` will be set to the following:

```json
null
```

For more information on using [SearchOptions][SearchOptions Property] and [Text To Find][TextToFind Property] see [Advanced Examples][].

***

## Properties

### Text

The [Text][Text Property] to find the specified occurrence of [Text To Find][TextToFind Property] in.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Text` with no value |

### Text To Find

The [Text To Find][TextToFind Property] search query to find the specified occurrence of in [Text][Text Property]. This property contains all of the information in relation to the conditions for a valid match; these are:

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

### Occurrence

The [Occurrence][Occurrence Property] of [Text To Find][TextToFind Property] in [Text][Text Property].

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
* `SearchOptions.Regex` allows regex text matching using [.NET Regex Syntax][Regex Syntax].

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

### Match

The [Match][] containing the valid match found for the [Text To Find][TextToFind Property] search query.

| | |
|--------------------|---------------------------|
| Data Type | [Match][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Match` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Comparison Type][ComparisonType Property] is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |
| | Thrown when [Search Options][SearchOptions Property] is not one of the specified [SearchOptions][] types (e.g. `(SearchOptions)10`). |
| [RegexMatchTimeoutException][] | Thrown when the execution time of any search done to populate the [Match][Match Property] property exceeds the [BlockTimeout][], or `60` seconds if that is undefined. |
| [RegexParsingFailedException][] | Thrown when [Search Options][SearchOptions Property] is `SearchOptions.Regex` and [TextToFind][TextToFind Property] has a property which is not a valid regex (e.g. `(`). |

## Remarks

### Advanced Examples

The following sections will show examples for each possible value of [Search Options][SearchOptions Property].

In these examples, the following properties are common:

| Property | Value |
|----------|-------|
| [Text][Text Property] | `"The quick brown fox jumps over the lazy dog."` |
| [Occurrence][Occurrence Property] | `1` |
| [Comparison Type][ComparisonType Property] | `Ordinal` |
| [Match][] | `($)Match` with no value |

These sections contain tables for the examples. The columns of these tables are explained below:

| Column Name | Explanation |
|-------------|-------------|
| TextToFind.StartsWith | Value used to define the StartsWith property of [Text To Find][TextToFind Property]. |
| TextToFind.Contains | Value used to define the Contains property of [Text To Find][TextToFind Property]. |
| TextToFind.EndsWith | Value used to define the EndsWith property of [Text To Find][TextToFind Property]. |
| Match.Value | The Value property of the [Match][Match Property] returned. \* |
| Match.Groups["startsWith"].Value | The value of the "startsWith" Group within the [Match][Match Property]. \* |
| Match.Groups["contains"].Value | The value of the "contains" Group within the [Match][Match Property]. \* |
| Match.Groups["endsWith"].Value | The value of the "endsWith" Group within the [Match][Match Property]. \* |

\* *No Match* indicates that no match was found and *N/A* indicates that the group is not returned as part of the [Match][Match Property].

#### SearchOptions.LiteralText

These examples find the first occurrence in [Text][Text Property] with [Search Options][SearchOptions Property] set to `LiteralText`.

| TextToFind.StartsWith | TextToFind.Contains | TextToFind.EndsWith | Match.Value | Match.Groups["startsWith"].Value | Match.Groups["contains"].Value | Match.Groups["endsWith"].Value |
|------------|----------|----------|--------------|------------------|----------------|----------------|
| `"The"` | `"quick"` | `"brown"` | <nobr>`"The quick brown"`</nobr> | <nobr>`"The"`</nobr> | <nobr>`"quick"`</nobr> | <nobr>`"brown"`</nobr> |
| `"The"` | `"quick"` | `""` | <nobr>`"The quick"`</nobr> | <nobr>`"The"`</nobr> | <nobr>`"quick"`</nobr> | *N/A* |
| `"The"` | `""` | `"brown"` | *No Match* | *No Match* | *N/A* | *No Match* |
| `"The"` | `""` | `""` | <nobr>`"The"`</nobr> | <nobr>`"The"`</nobr> | *N/A* | *N/A* |
| `""` | `"quick"` | `"brown"` | <nobr>`"quick brown"`</nobr> | *N/A* | <nobr>`"quick"`</nobr> | <nobr>`"brown"`</nobr> |
| `""` | `"quick"` | `""` | <nobr>`"quick"`</nobr> | *N/A* | <nobr>`"quick"`</nobr> | *N/A* |
| `""` | `""` | `"brown"` | <nobr>`"brown"`</nobr> | *N/A* | *N/A* | <nobr>`"brown"`</nobr> |
| `""` | `""` | `""` | *No Match* | *N/A* | *N/A* | *N/A* |

#### SearchOptions.PatternMatching

These examples find the first occurrence in [Text][Text Property] with [Search Options][SearchOptions Property] set to `PatternMatching`.

| <nobr>TextToFind.StartsWith</nobr> | TextToFind.Contains | TextToFind.EndsWith | <nobr>Match.Value</nobr> | Match.Groups["startsWith"].Value | Match.Groups["contains"].Value | Match.Groups["endsWith"].Value |
|------------|----------|----------|--------------|------------------|----------------|----------------|
| `"The"` | `"quick"` | `"brown"` | <nobr>`"The quick brown"`</nobr> | <nobr>`"The"`</nobr> | <nobr>`"quick"`</nobr> | <nobr>`"brown"`</nobr> |
| `"The"` | `"quick"` | `""` | <nobr>`"The quick"`</nobr> | <nobr>`"The"`</nobr> | <nobr>`"quick"`</nobr> | *N/A* |
| `"The"` | `""` | `"brown"` | *No Match* | *No Match* | *N/A* | *No Match* |
| `"The"` | `""` | `""` | <nobr>`"The"`</nobr> | <nobr>`"The"`</nobr> | *N/A* | *N/A* |
| `""` | `"quick"` | `"brown"` | <nobr>`"quick brown"`</nobr> | *N/A* | <nobr>`"quick"`</nobr> | <nobr>`"brown"`</nobr> |
| `""` | `"quick"` | `""` | <nobr>`"quick"`</nobr> | *N/A* | <nobr>`"quick"`</nobr> | *N/A* |
| `""` | `""` | `"brown"` | <nobr>`"brown"`</nobr> | *N/A* | *N/A* | <nobr>`"brown"`</nobr> |
| `""` | `""` | `""` | *No Match* | *N/A* | *N/A* | *N/A* |
| `"The"` | `"quick"` | `"*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The"`</nobr> | <nobr>`"quick"`</nobr> | <nobr>`" brown fox jumps over the lazy dog."`</nobr> |
| `"The"` | `"*"` | `"brown"` | <nobr>`"The quick brown"`</nobr> | <nobr>`"The"`</nobr> | <nobr>`" quick "`</nobr> | <nobr>`"brown"`</nobr> |
| `"The"` | `"*"` | `"*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The"`</nobr> | <nobr>`" quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`""`</nobr> |
| `"The"` | `"*"` | `""` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The"`</nobr> | <nobr>`" quick brown fox jumps over the lazy dog."`</nobr> | *N/A* |
| `"The"` | `""` | `"*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The"`</nobr> | *N/A* | <nobr>`" quick brown fox jumps over the lazy dog."`</nobr> |
| `"*"` | `"quick"` | `"brown"` | <nobr>`"The quick brown"`</nobr> | <nobr>`"The "`</nobr> | <nobr>`"quick"`</nobr> | <nobr>`"brown"`</nobr> |
| `"*"` | `"quick"` | `"*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The "`</nobr> | <nobr>`"quick"`</nobr> | <nobr>`" brown fox jumps over the lazy dog."`</nobr> |
| `"*"` | `"quick"` | `""` | <nobr>`"The quick"`</nobr> | <nobr>`"The "`</nobr> | <nobr>`"quick"`</nobr> | *N/A* |
| `"*"` | `"*"` | `"brown"` | <nobr>`"The quick brown"`</nobr> | <nobr>`"The quick "`</nobr> | <nobr>`""`</nobr> | <nobr>`"brown"`</nobr> |
| `"*"` | `""` | `"brown"` | <nobr>`"The quick brown"`</nobr> | <nobr>`"The quick "`</nobr> | *N/A* | <nobr>`"brown"`</nobr> |
| `"*"` | `"*"` | `"*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`""`</nobr> | <nobr>`""`</nobr> |
| `"*"` | `"*"` | `""` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`""`</nobr> | *N/A* |
| `"*"` | `""` | `"*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | *N/A* | <nobr>`""`</nobr> |
| `"*"` | `""` | `""` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | *N/A* | *N/A* |
| `""` | `"quick"` | `"*"` | <nobr>`"quick brown fox jumps over the lazy dog."`</nobr> | *N/A* | <nobr>`"quick"`</nobr> | <nobr>`" brown fox jumps over the lazy dog."`</nobr> |
| `""` | `"*"` | `"brown"` | <nobr>`"The quick brown"`</nobr> | *N/A* | <nobr>`"The quick "`</nobr> | <nobr>`"brown"`</nobr> |
| `""` | `"*"` | `"*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | *N/A* | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`""`</nobr> |
| `""` | `"*"` | `""` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | *N/A* | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | *N/A* |
| `""` | `""` | `"*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | *N/A* | *N/A* | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> |

#### SearchOptions.Regex

These examples find the first occurrence in [Text][Text Property] with [Search Options][SearchOptions Property] set to `Regex`.

| TextToFind.StartsWith | TextToFind.Contains | TextToFind.EndsWith | Match.Value | Match.Groups["startsWith"].Value | Match.Groups["contains"].Value | Match.Groups["endsWith"].Value |
|------------|----------|----------|--------------|------------------|----------------|----------------|
| `"The"` | `"quick"` | `"brown"` | <nobr>`"The quick brown"`</nobr> | <nobr>`"The"`</nobr> | <nobr>`"quick"`</nobr> | <nobr>`"brown"`</nobr> |
| `"The"` | `"quick"` | `""` | <nobr>`"The quick"`</nobr> | <nobr>`"The"`</nobr> | <nobr>`"quick"`</nobr> | *N/A* |
| `"The"` | `""` | `"brown"` | *No Match* | *No Match* | *N/A* | *No Match* |
| `"The"` | `""` | `""` | <nobr>`"The"`</nobr> | <nobr>`"The"`</nobr> | *N/A* | *N/A* |
| `""` | `"quick"` | `"brown"` | <nobr>`"quick brown"`</nobr> | *N/A* | <nobr>`"quick"`</nobr> | <nobr>`"brown"`</nobr> |
| `""` | `"quick"` | `""` | <nobr>`"quick"`</nobr> | *N/A* | <nobr>`"quick"`</nobr> | *N/A* |
| `""` | `""` | `"brown"` | <nobr>`"brown"`</nobr> | *N/A* | *N/A* | <nobr>`"brown"`</nobr> |
| `""` | `""` | `""` | *No Match* | *N/A* | *N/A* | *N/A* |
| `"The"` | `"quick"` | `".*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The"`</nobr> | <nobr>`"quick"`</nobr> | <nobr>`" brown fox jumps over the lazy dog."`</nobr> |
| `"The"` | `".*"` | `"brown"` | <nobr>`"The quick brown"`</nobr> | <nobr>`"The"`</nobr> | <nobr>`" quick "`</nobr> | <nobr>`"brown"`</nobr> |
| `"The"` | `".*"` | `".*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The"`</nobr> | <nobr>`" quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`""`</nobr> |
| `"The"` | `".*"` | `""` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The"`</nobr> | <nobr>`" quick brown fox jumps over the lazy dog."`</nobr> | *N/A* |
| `"The"` | `""` | `".*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The"`</nobr> | *N/A* | <nobr>`" quick brown fox jumps over the lazy dog."`</nobr> |
| `".*"` | `"quick"` | `"brown"` | <nobr>`"The quick brown"`</nobr> | <nobr>`"The "`</nobr> | <nobr>`"quick"`</nobr> | <nobr>`"brown"`</nobr> |
| `".*"` | `"quick"` | `".*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The "`</nobr> | <nobr>`"quick"`</nobr> | <nobr>`" brown fox jumps over the lazy dog."`</nobr> |
| `".*"` | `"quick"` | `""` | <nobr>`"The quick"`</nobr> | <nobr>`"The "`</nobr> | <nobr>`"quick"`</nobr> | *N/A* |
| `".*"` | `".*"` | `"brown"` | <nobr>`"The quick brown"`</nobr> | <nobr>`"The quick "`</nobr> | <nobr>`""`</nobr> | <nobr>`"brown"`</nobr> |
| `".*"` | `""` | `"brown"` | <nobr>`"The quick brown"`</nobr> | <nobr>`"The quick "`</nobr> | *N/A* | <nobr>`"brown"`</nobr> |
| `".*"` | `".*"` | `".*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`""`</nobr> | <nobr>`""`</nobr> |
| `".*"` | `".*"` | `""` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`""`</nobr> | *N/A* |
| `".*"` | `""` | `".*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | *N/A* | <nobr>`""`</nobr> |
| `".*"` | `""` | `""` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | *N/A* | *N/A* |
| `""` | `"quick"` | `".*"` | <nobr>`"quick brown fox jumps over the lazy dog."`</nobr> | *N/A* | <nobr>`"quick"`</nobr> | <nobr>`" brown fox jumps over the lazy dog."`</nobr> |
| `""` | `".*"` | `"brown"` | <nobr>`"The quick brown"`</nobr> | *N/A* | <nobr>`"The quick "`</nobr> | <nobr>`"brown"`</nobr> |
| `""` | `".*"` | `".*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | *N/A* | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | <nobr>`""`</nobr> |
| `""` | `".*"` | `""` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | *N/A* | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | *N/A* |
| `""` | `""` | `".*"` | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> | *N/A* | *N/A* | <nobr>`"The quick brown fox jumps over the lazy dog."`</nobr> |

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Equality][].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`) no operation is performed and [Match][Match Property] is set to `null`.

### Null or empty Text To Find

If all properties of [Text To Find][TextToFind Property] are `null` or empty (i.e. `""`) no operation is performed and [Match][Match Property] is set to `null`.

### Null or empty property of Text To Find

If a property of [Text To Find][TextToFind Property] is `null` or empty (i.e. `""`), then it is not included as a specified [Group][] in the returned [Match][Match Property]; see [Advanced Examples][].

### Known Limitations

If [Comparison Type][ComparisonType Property] is set to `StringComparison.CurrentCulture`, some characters such as `æ` that is equivalent to `ae` may not evaluate as equal.

[Advanced Examples]: {{<ref "#advanced-examples">}}
[Match Property]: {{< ref "#match" >}}
[Occurrence Property]:{{<ref "#occurrence">}}
[Text Property]: {{< ref "#text" >}}
[TextToFind Property]: {{< ref "#text-to-find" >}}
[SearchOptions Property]: {{< ref "#search-options" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

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

[Group]: {{< url path="Cortex.Reference.DataTypes.Text.Regex.Group.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Match]: {{< url path="Cortex.Reference.DataTypes.Text.Regex.Match.MainDoc" >}}
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
