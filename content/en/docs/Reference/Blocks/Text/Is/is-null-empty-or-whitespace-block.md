---
title: "Is Null, Empty Or Whitespace"
linkTitle: "Is Null, Empty Or Whitespace"
description: "Checks if text is `null`, empty (i.e. `\"\"`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters)."
---

![Icon](/blocks/text-is-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Is.IsNullEmptyOrWhitespaceBlock)</p>

## Description

Checks if [Text][Text Property] is `null`, empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters).

For information about `null`, please see [Null and Nullable Types][].

For information about empty and whitespace, please see [Empty Text and Whitespace][].

## Examples

### Text is null

This example will check if `null` is `null`, empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `null` | `($)Text` is a variable of type [String][] |
| [Text Is Null Empty Or Whitespace][TextIsNullEmptyOrWhitespace Property] | `($)TextIsNullEmptyOrWhitespace`, with no value | `($)TextIsNullEmptyOrWhitespace` is a variable that will be set to a [Boolean][] value |

#### Result

`null` is `null`, resulting in the variable `($)TextIsNullEmptyOrWhitespace` being updated to the following:

```json
true
```

***

### Text is empty

This example will check if `""` is `null`, empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `""` | `($)Text` is a variable of type [String][] |
| [Text Is Null Empty Or Whitespace][TextIsNullEmptyOrWhitespace Property] | `($)TextIsNullEmptyOrWhitespace`, with no value | `($)TextIsNullEmptyOrWhitespace` is a variable that will be set to a [Boolean][] value |

#### Result

`""` is empty (i.e. `""`), resulting in the variable `($)TextIsNullEmptyOrWhitespace` being updated to the following:

```json
true
```

***

### Text is whitespace

This example will check if `"     "` is `null`, empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"     "` | `($)Text` is a variable of type [String][] |
| [Text Is Null Empty Or Whitespace][TextIsNullEmptyOrWhitespace Property] | `($)TextIsNullEmptyOrWhitespace`, with no value | `($)TextIsNullEmptyOrWhitespace` is a variable that will be set to a [Boolean][] value |

#### Result

`"     "` is whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters), resulting in the variable `($)TextIsNullEmptyOrWhitespace` being updated to the following:

```json
true
```

***

### Text is not null, empty or whitespace

This example will check if `"The quick brown fox jumps over the lazy dog"` is `null`, empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text Is Null Empty Or Whitespace][TextIsNullEmptyOrWhitespace Property] | `($)TextIsNullEmptyOrWhitespace`, with no value | `($)TextIsNullEmptyOrWhitespace` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` is not `null`, empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters), resulting in the variable `($)TextIsNullEmptyOrWhitespace` being updated to the following:

```json
false
```

***

## Properties

### Text

The [Text][Text Property] to check is `null`, empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters).

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Text` with value `""` |

### Text Is Null Empty Or Whitespace

The result of the is null, empty or whitespace check.

If the [Text][Text Property] is `null`, empty (i.e. `""`) or whitespace (i.e. `space`, `tab`, `carriage return`, `line feed` characters), the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)TextIsNullEmptyOrWhitespace` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

No remarks for the block.

[Text Property]: {{< ref "#text" >}}
[TextIsNullEmptyOrWhitespace Property]: {{< ref "#text-is-null-empty-or-whitespace" >}}

[Null and Nullable Types]: {{< url "Cortex.Reference.Concepts.NullAndNullableTypes.MainDoc" >}}

[Empty Text and Whitespace]: {{< url "Cortex.Reference.Concepts.EmptyTextAndWhitespace.MainDoc" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.Boolean" >}}
