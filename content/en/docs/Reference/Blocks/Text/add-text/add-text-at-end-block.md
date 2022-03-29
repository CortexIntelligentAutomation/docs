---
title: "Add Text At End"
linkTitle: "Add Text At End"
description: "Adds text at the end of another text."
---

{{< figure src="/blocks/text-add-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.AddText.AddTextAtEndBlock)</p>

## Description

Adds [Text To Add][TextToAdd Property] at the end of another [Text][Text Property].

## Examples

### Add Text To Add at the end of another Text

This example will add `"|"` at the end of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Text To Add][TextToAdd Property] | `($)TextToAdd`, with value `"\|"` | `($)TextToAdd` is a variable of type [String][] |

#### Result

Adding `"|"` at the end of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` results in the variable `($)Text` being updated to the following:

```json
"ABCDEFGHIJKLMNOPQRSTUVWXYZ|"
```

***

### Add Text To Add at the end of a null or empty Text

This example will try to add `"|"` at the end of `null` or `""`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `null` or `""` | `($)Text` is a variable of type [String][] |
| [Text To Add][TextToAdd Property] | `($)TextToAdd`, with value `"\|"` | `($)TextToAdd` is a variable of type [String][] |

#### Result

Adding `"|"` to `null` or `""` results in the variable `($)Text` being updated to the following:

```json
"|"
```

***

### Add null or empty Text To Add at the end of another Text

This example will try to add `null` or `""` at the end of `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Text To Add][TextToAdd Property] | `($)TextToAdd`, with value `null` or `""` | `($)TextToAdd` is a variable of type [String][] |

#### Result

Adding `null` or `""` performs no operation as there is nothing to add, so the variable `($)Text` will remain as follows:

```json
"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

***

## Properties

### Text

The [Text][Text Property] where the [Text To Add][TextToAdd Property] is added.  
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Default Value | `($)Text` with value `""` |

### Text To Add

The [Text To Add][TextToAdd Property] at the end of the [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)TextToAdd` with value `""` |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`) it is replaced with the [Text To Add][TextToAdd Property]. See [Example][NullOrEmptyText Example] above.

### Null or empty Text To Add

If [Text To Add][TextToAdd Property] is `null` or empty (i.e. `""`) nothing is added to [Text][Text Property]. See [Example][NullOrEmptyTextToAdd Example] above.

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] which has the [Text To Add][TextToAdd Property] added in the correct place and re-assigns it to the variable specified in the [Text][Text Property] property.

[Text Property]: {{< ref "#text" >}}
[TextToAdd Property]: {{< ref "#text-to-add" >}}

[NullOrEmptyText Example]: {{< ref "#add-text-to-add-at-the-end-of-a-null-or-empty-text" >}}
[NullOrEmptyTextToAdd Example]: {{< ref "#add-null-or-empty-text-to-add-at-the-end-of-another-text" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
