---
title: "Is Empty"
linkTitle: "Is Empty"
description: "Checks if text is empty (i.e. `\"\"`)."
---

![Icon](/blocks/text-is-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Is.IsEmptyBlock)</p>

## Description

Checks if [Text][Text Property] is empty (i.e. `""`) .

For information about empty, please see [Empty Text and Whitespace][].

## Examples

### Text is empty

This example will check if `""` is empty (i.e. `""`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `""` | `($)Text` is a variable of type [String][] |
| [Text Is Empty][TextIsEmpty Property] | `($)TextIsEmpty`, with no value | `($)TextIsEmpty` is a variable that will be set to a [Boolean][] value |

#### Result

`""` is empty (i.e. `""`), resulting in the variable `($)TextIsEmpty` being updated to the following:

```json
true
```

***

### Text is not empty

This example will check if `"The quick brown fox jumps over the lazy dog"` is empty (i.e. `""`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text Is Empty][TextIsEmpty Property] | `($)TextIsEmpty`, with no value | `($)TextIsEmpty` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` is not empty (i.e. `""`), resulting in the variable `($)TextIsEmpty` being updated to the following:

```json
false
```

***

### Text is null

This example will check if `null` is empty (i.e. `""`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `null` | `($)Text` is a variable of type [String][] |
| [Text Is Empty][TextIsEmpty Property] | `($)TextIsEmpty`, with no value | `($)TextIsEmpty` is a variable that will be set to a [Boolean][] value |

#### Result

`null` is not empty (i.e. `""`), resulting in the variable `($)TextIsEmpty` being updated to the following:

```json
false
```

***

### Text is whitespace

This example will check if `"     "` is empty (i.e. `""`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"     "` | `($)Text` is a variable of type [String][] |
| [Text Is Empty][TextIsEmpty Property] | `($)TextIsEmpty`, with no value | `($)TextIsEmpty` is a variable that will be set to a [Boolean][] value |

#### Result

`"     "` is not empty (i.e. `""`), resulting in the variable `($)TextIsEmpty` being updated to the following:

```json
false
```

***

## Properties

### Text

The [Text][Text Property] to check is empty (i.e. `""`).

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Text` with value `""` |

### Text Is Empty

The result of the is empty check.

If the [Text][Text Property] is empty (i.e. `""`), the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)TextIsEmpty` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Null Text

If [Text][Text Property] is `null` the variable specified in the [Text Is Empty][TextIsEmpty Property] property will be set to `false`. See [Example][NullText Example] above.

### Whitespace Text

If [Text][Text Property] is whitespace (e.g. `"     "`) the variable specified in the [Text Is Empty][TextIsEmpty Property] property will be set to `false`. See [Example][WhitespaceText Example] above.

[Text Property]: {{< ref "#text" >}}
[TextIsEmpty Property]: {{< ref "#text-is-empty-1" >}}

[NullText Example]: {{< ref "#text-is-null" >}}
[WhitespaceText Example]: {{< ref "#text-is-whitespace" >}}

[Empty Text and Whitespace]: {{< url "Cortex.Reference.Concepts.EmptyTextAndWhitespace.MainDoc" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.Boolean" >}}
