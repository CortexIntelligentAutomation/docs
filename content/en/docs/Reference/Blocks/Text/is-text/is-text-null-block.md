---
title: "Is Text Null"
linkTitle: "Is Text Null"
description: "Checks if text is `null`."
---

{{< figure src="/blocks/text-is-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.IsText.IsTextNullBlock)</p>

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

## Properties

### Text

The [Text][Text Property] to check is `null`.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Text` with no value |

### Text Is Null

The result of the is null check.

If the [Text][Text Property] is `null`, the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
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

[Null and Nullable Types]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.NullAndNullableTypes.MainDoc" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
