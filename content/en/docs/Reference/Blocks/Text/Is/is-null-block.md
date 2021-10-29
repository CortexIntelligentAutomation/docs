---
title: "Is Null"
linkTitle: "Is Null"
description: "Checks if text is `null`."
---

![Icon](/blocks/text-is-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Is.IsNullBlock)</p>

## Description

Checks if [Text][Text Property] is `null`.

For information about `null`, please see [Null and Nullable Types][].

## Examples

### Text is null

This example will check if `null` is `null`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `null` | `($)Text` is a variable of type [String][] |
| [Text Is Null][TextIsNull Property] | `($)TextIsNull`, with no value | `($)TextIsNull` is a variable that will be set to a [Boolean][] value |

#### Result

`null` is `null`, resulting in the variable `($)TextIsNull` being updated to the following:

```json
true
```

***

### Text is not null

This example will check if `"The quick brown fox jumps over the lazy dog"` is `null`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Text` is a variable of type [String][] |
| [Text Is Null][TextIsNull Property] | `($)TextIsNull`, with no value | `($)TextIsNull` is a variable that will be set to a [Boolean][] value |

#### Result

`"The quick brown fox jumps over the lazy dog"` is not `null`, resulting in the variable `($)TextIsNull` being updated to the following:

```json
false
```

***

### Text is empty

This example will check if empty (i.e. `""`) is `null`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `""` | `($)Text` is a variable of type [String][] |
| [Text Is Null][TextIsNull Property] | `($)TextIsNull`, with no value | `($)TextIsNull` is a variable that will be set to a [Boolean][] value |

#### Result

Empty (i.e. `""`) is not `null`, resulting in the variable `($)TextIsNull` being updated to the following:

```json
false
```

***

### Text is whitespace

This example will check if `"     "` is `null`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"     "` | `($)Text` is a variable of type [String][] |
| [Text Is Null][TextIsNull Property] | `($)TextIsNull`, with no value | `($)TextIsNull` is a variable that will be set to a [Boolean][] value |

#### Result

`"     "` is not `null`, resulting in the variable `($)TextIsNull` being updated to the following:

```json
false
```

***

## Properties

### Text

The [Text][Text Property] to check is `null`.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Text` with value `""` |

### Text Is Null

The result of the is null check.

If the [Text][Text Property] is `null`, the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)TextIsNull` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Empty Text

If [Text][Text Property] is empty (i.e.. `""`) the variable specified in the [Text Is Null][TextIsNull Property]  property will be set to `false`. See [Example][EmptyText Example] above.

### Whitespace Text

If [Text][Text Property] is whitespace (e.g. `"     "`) the variable specified in the [Text Is Null][TextIsNull Property] property will be set to `false`. See [Example][WhitespaceText Example] above.

[Text Property]: {{< ref "#text" >}}
[TextIsNull Property]: {{< ref "#text-is-null-1" >}}

[EmptyText Example]: {{< ref "#text-is-empty" >}}
[WhitespaceText Example]: {{< ref "#text-is-whitespace" >}}

[Null and Nullable Types]: {{< url "Cortex.Reference.Concepts.NullAndNullableTypes.MainDoc" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.Boolean" >}}
