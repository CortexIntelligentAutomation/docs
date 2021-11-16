---
title: "Is Text Empty Or Whitespace"
linkTitle: "Is Text Empty Or Whitespace"
description: "Checks if text is empty (i.e. `\"\"`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters)."
---

![Icon](/blocks/text-is-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.IsText.IsTextEmptyOrWhitespaceBlock)</p>

## Description

Checks if [Text][Text Property] is empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters).

For information about empty and whitespace, please see [Empty Text and Whitespace][].

## Examples

### Text is empty

This example will check if `""` is empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `""` | `($)Text` is a variable of type [String][] |
| [Text Is Empty Or Whitespace][TextIsEmptyOrWhitespace Property] | `($)TextIsEmptyOrWhitespace`, with no value | `($)TextIsEmptyOrWhitespace` is a variable that will be set to a [Boolean][] value |

#### Result

`""` is empty (i.e. `""`), resulting in the variable `($)TextIsEmptyOrWhitespace` being updated to the following:

```json
true
```

***

### Text is whitespace

This example will check if `"     "` is empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"     "` | `($)Text` is a variable of type [String][] |
| [Text Is Empty Or Whitespace][TextIsEmptyOrWhitespace Property] | `($)TextIsEmptyOrWhitespace`, with no value | `($)TextIsEmptyOrWhitespace` is a variable that will be set to a [Boolean][] value |

#### Result

`"     "` is whitespace, resulting in the variable `($)TextIsEmptyOrWhitespace` being updated to the following:

```json
true
```

***

### Text is null

This example will check if `null` is empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `null` | `($)Text` is a variable of type [String][] |
| [Text Is Empty Or Whitespace][TextIsEmptyOrWhitespace Property] | `($)TextIsEmptyOrWhitespace`, with no value | `($)TextIsEmptyOrWhitespace` is a variable that will be set to a [Boolean][] value |

#### Result

`null` is not empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters), resulting in the variable `($)TextIsEmptyOrWhitespace` being updated to the following:

```json
false
```

***

### Text is not empty or whitespace

This example will check if `"The quick brown fox jumps over the lazy dog"` is empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text Is Empty Or Whitespace][TextIsEmptyOrWhitespace Property] | `($)TextIsEmptyOrWhitespace`, with no value | `($)TextIsEmptyOrWhitespace` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` is not empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters), resulting in the variable `($)TextIsEmptyOrWhitespace` being updated to the following:

```json
false
```

***

## Properties

### Text

The [Text][Text Property] to check is empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters).

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Text` with value `""` |

### Text Is Empty Or Whitespace

The result of the is empty or whitespace check.

If the [Text][Text Property] is empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters), the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)TextIsEmptyOrWhitespace` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Null Text

If [Text][Text Property] is `null` the variable specified in the [Text Is Empty Or Whitespace][TextIsEmptyOrWhitespace Property] property will be set to `false`. See [Example][NullText Example] above.

[Text Property]: {{< ref "#text" >}}
[TextIsEmptyOrWhitespace Property]: {{< ref "#text-is-empty-or-whitespace" >}}

[NullText Example]: {{< ref "#text-is-null" >}}

[Empty Text and Whitespace]: {{< url "Cortex.Reference.Concepts.EmptyTextAndWhitespace.MainDoc" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.Boolean" >}}
