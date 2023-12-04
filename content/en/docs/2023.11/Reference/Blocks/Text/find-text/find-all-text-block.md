---
title: "Find All Text"
linkTitle: "Find All Text"
description: "Finds all occurrences of a text in a given text."
---
{{< figure src="/blocks/text-find-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.FindText.FindAllTextBlock)</p>

## Description

Finds all occurrences of [Text To Find][TextToFind Property] in a given [Text][Text Property].

[Search Options][SearchOptions Property] can be specified to choose whether to use a ContainsText, PatternMatching or Regex search to match the [Text To Find][TextToFind Property] input.

## Examples

### Find all occurrences of Text To Find (Ordinal)

This example will find all occurrences of `"The"` in `"The quick brown fox jumps over the lazy dog."`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "", "contains": "The", "endsWith": ""}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "", contains: "The", endsWith:"")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Matches][Matches Property] | `($)Matches`, with no value | `($)Matches` is a variable that will be set to an [List][]<[Match][]> value |

#### Result

As this example is performing a [case-sensitive, culture-insensitive][Ordinal] comparison of text, `"The quick brown fox jumps over the lazy dog."` only contains the text `"The"` once; `"the"` has a different case so does not match. Therefore, the variable `($)Matches` will be set to the following:

```json
[
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
]
```

***

### Find all occurrences of Text To Find (Ordinal Ignore Case)

This example will find all occurrences of `"The"` in `"The quick brown fox jumps over the lazy dog."`.

It performs a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "", "contains": "The", "endsWith": ""}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "", contains: "The", endsWith:"")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Matches][Matches Property] | `($)Matches`, with no value | `($)Matches` is a variable that will be set to an [List][]<[Match][]> value |

#### Result

As this example is performing a [case-insensitive, culture-insensitive][OrdinalIgnoreCase] comparison of text, `"The quick brown fox jumps over the lazy dog."` contains the text `"The"` twice; the first occurrence is `"The"` and the second occurrence is `"the"`. Therefore, the variable `($)Matches` will be updated to the following:

```json
[
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
  },
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
]
```

***

### Find all occurrences that match the pattern in Text To Find

This example will find all occurrences of text that match a pattern containing `"?he"` in `"The quick brown fox jumps over the lazy dog."`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "", "contains": "?he", "endsWith": ""}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "", contains: "?he", endsWith:"")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.PatternMatching` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Matches][Matches Property] | `($)Matches`, with no value | `($)Matches` is a variable that will be set to an [List][]<[Match][]> value |

#### Result

`"The quick brown fox jumps over the lazy dog."` contains `"The"` and `"the"` that matches the pattern `"?he"`. Therefore, the variable `($)Matches` will be set to the following:

```json
[
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
  },
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
]
```

***

### Find all occurrences that match the regex in Text To Find

This example will find all occurrences of text that match the regex `"^The"` from `"The quick brown fox jumps over the lazy dog."`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "", "contains": "^The", "endsWith": ""}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "", contains: "^The", endsWith:"")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.Regex` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Matches][Matches Property] | `($)Matches`, with no value | `($)Matches` is a variable that will be set to an [List][]<[Match][]> value |

#### Result

`"The quick brown fox jumps over the lazy dog."` contains `"The"` at the start of the sentence that matches the regex `"^The"`. Therefore, the variable `($)Matches` will be set to the following:

```json
[
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
]
```

***

### Find all occurrences that start with and end with a regex Text To Find in Text

This example will find the first occurrence of text that matches a regex that starts with `"The"`, contains `.*?` and ends with `"jumps"` from `"The quick brown fox jumps over the lazy dog."`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "The", "contains": ".*?", "endsWith": "jumps"}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "The", contains: ".*?", endsWith:"jumps")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.Regex` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Matches][Matches Property] | `($)Matches`, with no value | `($)Matches` is a variable that will be set to an [List][]<[Match][]> value |

#### Result

`"The quick brown fox jumps over the lazy dog."` contains 1 occurrence starting with `"The"` and ending with `"jumps"`, which is `"The quick brown fox jumps"` Therefore, the variable `($)Matches` will be set to the following:

```json
[
  {
    "Value": "The quick brown fox jumps",
    "Index": 0,
    "Length": 25,
    "Groups": {
      "0": {
        "Value": "The quick brown fox jumps",
        "Index": 0,
        "Length": 25,
        "Captures": [
          {
            "Value": "The quick brown fox jumps",
            "Index": 0,
            "Length": 25
          }
        ]
      },
      "startsWith": {
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
      "endsWith": {
        "Value": "jumps",
        "Index": 20,
        "Length": 5,
        "Captures": [
          {
            "Value": "jumps",
            "Index": 20,
            "Length": 5
          }
        ]
      }
    }
  }
]
```

***

### Find all occurrences that start with and end with a Text To Find in Text (Null contains)

This example will find all occurrences of text that start with `"The"`, contains `null` and ends with `"jumps"` from `"The quick brown fox jumps over the lazy dog. The dog woke up and tried to bite the fox. The fox jumps to get away."`. To clarify, this [Text To Find][TextToFind Property] input is searching for matches of `"Thejumps"` exactly in [Text][Text Property].

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog. The dog woke up and tried to bite the fox. The fox jumps to get away."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "The", "contains": null, "endsWith": "jumps"}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "The", contains: null, endsWith:"jumps")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Matches][Matches Property] | `($)Matches`, with no value | `($)Matches` is a variable that will be set to an [List][]<[Match][]> value |

#### Result

`"The quick brown fox jumps over the lazy dog. The dog woke up and tried to bite the fox. The fox jumps to get away."` has 0 occurrences starting with `"The"` and ending with `"jumps"`, as [Contains][] being `null` will require an exact match for [Text to Find][TextToFind Property] in [Text][Text Property]. Therefore, the variable `($)Matches` will be set to the following:

```json
[]
```

***

### Find all occurrences that start with a wildcard and end with a regex Text To Find in Text

This example will find all occurrences of text that start with a wildcard regex `".*?"` and end with `"o"` from `"The quick brown fox jumps over the lazy dog."`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": ".*?", "contains": "", "endsWith": "o"}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: ".*?", contains: null, endsWith:"o")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.Regex` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Matches][Matches Property] | `($)Matches`, with no value | `($)Matches` is a variable that will be set to an [List][]<[Match][]> value |

#### Result

`"The quick brown fox jumps over the lazy dog."` has 4 occurrences starting with the wildcard regex `".*?"` and ending with `"o"`. Therefore the variable `($)Matches` will be set to the following:

```json
[
  {
    "Value": "The quick bro",
    "Index": 0,
    "Length": 13,
    "Groups": {
      "0": {
        "Value": "The quick bro",
        "Index": 0,
        "Length": 13,
        "Captures": [
          {
            "Value": "The quick bro",
            "Index": 0,
            "Length": 13
          }
        ]
      },
      "startsWith": {
        "Value": "The quick br",
        "Index": 0,
        "Length": 12,
        "Captures": [
          {
            "Value": "The quick br",
            "Index": 0,
            "Length": 12
          }
        ]
      },
      "endsWith": {
        "Value": "o",
        "Index": 12,
        "Length": 1,
        "Captures": [
          {
            "Value": "o",
            "Index": 12,
            "Length": 1
          }
        ]
      }
    }
  },
  {
    "Value": "wn fo",
    "Index": 13,
    "Length": 5,
    "Groups": {
      "0": {
        "Value": "wn fo",
        "Index": 13,
        "Length": 5,
        "Captures": [
          {
            "Value": "wn fo",
            "Index": 13,
            "Length": 5
          }
        ]
      },
      "startsWith": {
        "Value": "wn f",
        "Index": 13,
        "Length": 4,
        "Captures": [
          {
            "Value": "wn f",
            "Index": 13,
            "Length": 4
          }
        ]
      },
      "endsWith": {
        "Value": "o",
        "Index": 17,
        "Length": 1,
        "Captures": [
          {
            "Value": "o",
            "Index": 17,
            "Length": 1
          }
        ]
      }
    }
  },
  {
    "Value": "x jumps o",
    "Index": 18,
    "Length": 9,
    "Groups": {
      "0": {
        "Value": "x jumps o",
        "Index": 18,
        "Length": 9,
        "Captures": [
          {
            "Value": "x jumps o",
            "Index": 18,
            "Length": 9
          }
        ]
      },
      "startsWith": {
        "Value": "x jumps ",
        "Index": 18,
        "Length": 8,
        "Captures": [
          {
            "Value": "x jumps ",
            "Index": 18,
            "Length": 8
          }
        ]
      },
      "endsWith": {
        "Value": "o",
        "Index": 26,
        "Length": 1,
        "Captures": [
          {
            "Value": "o",
            "Index": 26,
            "Length": 1
          }
        ]
      }
    }
  },
  {
    "Value": "ver the lazy do",
    "Index": 27,
    "Length": 15,
    "Groups": {
      "0": {
        "Value": "ver the lazy do",
        "Index": 27,
        "Length": 15,
        "Captures": [
          {
            "Value": "ver the lazy do",
            "Index": 27,
            "Length": 15
          }
        ]
      },
      "startsWith": {
        "Value": "ver the lazy d",
        "Index": 27,
        "Length": 14,
        "Captures": [
          {
            "Value": "ver the lazy d",
            "Index": 27,
            "Length": 14
          }
        ]
      },
      "endsWith": {
        "Value": "o",
        "Index": 41,
        "Length": 1,
        "Captures": [
          {
            "Value": "o",
            "Index": 41,
            "Length": 1
          }
        ]
      }
    }
  }
]
```

***

### Find all occurrences that start with a regex and end with a wildcard Text to Find in Text

This example will find all occurrences of text that start with `"o"` and end with a wildcard regex `".+?"` from `"The quick brown fox jumps over the lazy dog."`.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of text.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog."` | `($)Text` is a variable of type [String][] |
| [Text To Find][TextToFind Property] | `($)TextToFind`, with value `{"startsWith": "o", "contains": "", "endsWith": ".+?"}`<br><br>In this example `($)TextToFind` has been set up using the following [Expression][]:<br><br>`new TextToFind(startsWith: "o", contains: null, endsWith:".+?")` | `($)TextToFind` is a variable of type [TextToFind][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.Regex` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Matches][Matches Property] | `($)Matches`, with no value | `($)Matches` is a variable that will be set to an [List][]<[Match][]> value |

#### Result

`"The quick brown fox jumps over the lazy dog."` has 4 occurrences starting with `"o"` and ending with `".+?"`. Therefore the variable `($)Matches` will be set to the following:

```json
[
  {
    "Value": "ow",
    "Index": 12,
    "Length": 2,
    "Groups": {
      "0": {
        "Value": "ow",
        "Index": 12,
        "Length": 2,
        "Captures": [
          {
            "Value": "ow",
            "Index": 12,
            "Length": 2
          }
        ]
      },
      "startsWith": {
        "Value": "o",
        "Index": 12,
        "Length": 1,
        "Captures": [
          {
            "Value": "o",
            "Index": 12,
            "Length": 1
          }
        ]
      },
      "endsWith": {
        "Value": "w",
        "Index": 13,
        "Length": 1,
        "Captures": [
          {
            "Value": "w",
            "Index": 13,
            "Length": 1
          }
        ]
      }
    }
  },
  {
    "Value": "ox",
    "Index": 17,
    "Length": 2,
    "Groups": {
      "0": {
        "Value": "ox",
        "Index": 17,
        "Length": 2,
        "Captures": [
          {
            "Value": "ox",
            "Index": 17,
            "Length": 2
          }
        ]
      },
      "startsWith": {
        "Value": "o",
        "Index": 17,
        "Length": 1,
        "Captures": [
          {
            "Value": "o",
            "Index": 17,
            "Length": 1
          }
        ]
      },
      "endsWith": {
        "Value": "x",
        "Index": 18,
        "Length": 1,
        "Captures": [
          {
            "Value": "x",
            "Index": 18,
            "Length": 1
          }
        ]
      }
    }
  },
  {
    "Value": "ov",
    "Index": 26,
    "Length": 2,
    "Groups": {
      "0": {
        "Value": "ov",
        "Index": 26,
        "Length": 2,
        "Captures": [
          {
            "Value": "ov",
            "Index": 26,
            "Length": 2
          }
        ]
      },
      "startsWith": {
        "Value": "o",
        "Index": 26,
        "Length": 1,
        "Captures": [
          {
            "Value": "o",
            "Index": 26,
            "Length": 1
          }
        ]
      },
      "endsWith": {
        "Value": "v",
        "Index": 27,
        "Length": 1,
        "Captures": [
          {
            "Value": "v",
            "Index": 27,
            "Length": 1
          }
        ]
      }
    }
  },
  {
    "Value": "og",
    "Index": 41,
    "Length": 2,
    "Groups": {
      "0": {
        "Value": "og",
        "Index": 41,
        "Length": 2,
        "Captures": [
          {
            "Value": "og",
            "Index": 41,
            "Length": 2
          }
        ]
      },
      "startsWith": {
        "Value": "o",
        "Index": 41,
        "Length": 1,
        "Captures": [
          {
            "Value": "o",
            "Index": 41,
            "Length": 1
          }
        ]
      },
      "endsWith": {
        "Value": "g",
        "Index": 42,
        "Length": 1,
        "Captures": [
          {
            "Value": "g",
            "Index": 42,
            "Length": 1
          }
        ]
      }
    }
  }
]
```

## Properties

### Text

The [Text][Text Property] to find all occurrences of [Text To Find][TextToFind Property] in.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Text` with no value |

### Text To Find

The [Text To Find][TextToFind Property] search query to find all occurrences of in [Text][Text Property]. This property contains all of the information in relation to the conditions for a valid match; these are:

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

### Search Options

[Search Options][SearchOptions Property] can be specified to choose whether [Text To Find][TextToFind Property] should be interpreted as a ContainsText, PatternMatching or Regex search:

* `SearchOptions.ContainsText` matches text exactly; as long as the [Text][Text Property] contains the text specified in [Text To Find][TextToFind Property] it will be considered a match.
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
| Default Value | `ContainsText` |

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

### Matches

The [List][]<[Match][]> containing all valid matches found for the [Text To Find][TextToFind Property] search query.

| | |
|--------------------|---------------------------|
| Data Type | [List][]<[Match][]> |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Matches` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Comparison Type][ComparisonType Property] is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |
| | Thrown when [Search Options][SearchOptions Property] is not one of the specified [SearchOptions][] types (e.g. `(SearchOptions)10`). |
| [RegexMatchTimeoutException][] | Thrown when the execution time of any search done to populate the [Matches][Matches Property] property exceeds the [BlockTimeout][], or `60` seconds if that is undefined. |
| [RegexParsingFailedException][] | Thrown when [Search Options][SearchOptions Property] is `SearchOptions.Regex` and [TextToFind][TextToFind Property] has a property which is not a valid regex (e.g. `(`). |

## Remarks

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Equality][].

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`) there is nothing to find in, so no operation is performed.

### Null or empty Text To Find

If all properties of [Text To Find][TextToFind Property] are `null` or empty (i.e. `""`) there is nothing to find, so no operation is performed, and [Matches][Matches Property] is set to an empty [List][]<[Match][]>.

### Null or empty property of Text To Find

If a property of [Text To Find][TextToFind Property] is `null` or empty (i.e. `""`), then that section of the query is not considered for a valid match and is not  included as a specific [Group][] in the returned [Match][]; see [Find all occurrences that start with and end with a Text To Find in Text][].

### Known Limitations

If [Comparison Type][ComparisonType Property] is set to `StringComparison.CurrentCulture`, some characters such as `æ` that are equivalent to `ae` may not evaluate as equal.

[Matches Property]: {{< ref "#matches" >}}
[Text Property]: {{< ref "#text" >}}
[TextToFind Property]: {{< ref "#text-to-find" >}}
[SearchOptions Property]: {{< ref "#search-options" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[Find all occurrences that start with and end with a Text To Find in Text]: {{<ref "#find-all-occurrences-that-start-with-and-end-with-a-text-to-find-in-text" >}}
[Find all occurrences that start with and end with a Text To Find in Text (Null contains)]: {{<ref "#find-all-occurrences-that-start-with-and-end-with-a-text-to-find-in-text-null-contains">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[ComparisonTypes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.Ordinal" >}}
[OrdinalIgnoreCase]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.OrdinalIgnoreCase" >}}
[Pattern Matching Syntax]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.PatternMatchingSyntax.MainDoc" >}}
[Regex Syntax]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.RegexSyntax.MainDoc" >}}

[RegexParsingFailedException]: {{< url path="Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}

[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[RegexMatchTimeoutException]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}

[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Match]: {{< url path="Cortex.Reference.DataTypes.Text.Regex.Match.MainDoc" >}}
[Group]: {{< url path="Cortex.Reference.DataTypes.Text.Regex.Group.MainDoc" >}}
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
