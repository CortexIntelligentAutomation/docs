---
title: "Is Null Or Empty"
linkTitle: "Is Null Or Empty"
description: "Checks if text is `null` or empty (i.e. `\"\"`)."
---

![Icon](/blocks/text-is-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Is.IsNullOrEmptyBlock)</p>

## Description

Checks if [Text][Text Property] is `null` or empty (i.e. `""`).

For information about `null`, please see [Null and Nullable Types][].

For information about empty, please see [Empty Text and Whitespace][].

## Examples

### Text is null

This example will check if `null` is `null` or empty (i.e. `""`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `null` | `($)Text` is a variable of type [String][] |
| [Text Is Null Or Empty][TextIsNullOrEmpty Property] | `($)TextIsNullOrEmpty`, with no value | `($)TextIsNullOrEmpty` is a variable that will be set to a [Boolean][] value |

#### Result

`null` is `null`, resulting in the variable `($)TextIsNullOrEmpty` being updated to the following:

```json
true
```

***

### Text is empty

This example will check if `""` is `null` or empty (i.e. `""`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `""` | `($)Text` is a variable of type [String][] |
| [Text Is Null Or Empty][TextIsNullOrEmpty Property] | `($)TextIsNullOrEmpty`, with no value | `($)TextIsNullOrEmpty` is a variable that will be set to a [Boolean][] value |

#### Result

`""` is empty (i.e. `""`), resulting in the variable `($)TextIsNullOrEmpty` being updated to the following:

```json
true
```

***

### Text is whitespace

This example will check if `"     "` is `null` or empty (i.e. `""`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"     "` | `($)Text` is a variable of type [String][] |
| [Text Is Null Or Empty][TextIsNullOrEmpty Property] | `($)TextIsNullOrEmpty`, with no value | `($)TextIsNullOrEmpty` is a variable that will be set to a [Boolean][] value |

#### Result

`"     "` is not `null` or empty (i.e. `""`), resulting in the variable `($)TextIsNullOrEmpty` being updated to the following:

```json
false
```

***

### Text is not null or empty

This example will check if `"The quick brown fox jumps over the lazy dog"` is `null` or empty (i.e. `""`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text Is Null Or Empty][TextIsNullOrEmpty Property] | `($)TextIsNullOrEmpty`, with no value | `($)TextIsNullOrEmpty` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` is not `null` or empty (i.e. `""`), resulting in the variable `($)TextIsNullOrEmpty` being updated to the following:

```json
false
```

***

## Properties

### Text

The [Text][Text Property] to check is `null` or empty (i.e. `""`).

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Text` with value `""` |

### Text Is Null Or Empty

The result of the is null or empty check.

If the [Text][Text Property] is `null` or empty (i.e. `""`), the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)TextIsNullOrEmpty` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Whitespace Text

If [Text][Text Property] is whitespace (e.g. `"     "`) the variable specified in the [Text Is Null Or Empty][TextIsNullOrEmpty Property] property will be set to `false`. See [Example][WhitespaceText Example] above.

[Text Property]: {{< ref "#text" >}}
[TextIsNullOrEmpty Property]: {{< ref "#text-is-null-or-empty" >}}

[WhitespaceText Example]: {{< ref "#text-is-whitespace" >}}

[Null and Nullable Types]: {{< url "Cortex.Reference.Concepts.NullAndNullableTypes.MainDoc" >}}

[Empty Text and Whitespace]: {{< url "Cortex.Reference.Concepts.EmptyTextAndWhitespace.MainDoc" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.Boolean" >}}