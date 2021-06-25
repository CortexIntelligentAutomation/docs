---
title: "Add Text At Beginning"
linkTitle: "Add Text At Beginning"
description: "Adds text at the beginning of another text."
---

![Icon](/blocks/text-add-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Add.AddTextAtBeginningBlock)</p>

Adds [Text To Add][TextToAdd Property] at the beginning of another [Text][Text Property].

## Examples

### Add Text To Add at the beginning of another Text

#### Inputs

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Text To Add][TextToAdd Property] | `($)TextToAdd`, with value `"\|"` | `($)TextToAdd` is a variable of type [String][] |

#### Outputs

The variable `($)Text` will be updated to the following:

```json
"|ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

***

### Add Text To Add at the beginning of a null or empty Text

#### Inputs

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `null` or `""` | `($)Text` is a variable of type [String][] |
| [Text To Add][TextToAdd Property] | `($)TextToAdd`, with value `"\|"` | `($)TextToAdd` is a variable of type [String][] |

#### Outputs

The variable `($)Text` will be updated to the following:

```json
"|"
```

***

### Add null or empty Text To Add at the beginning of another Text

#### Inputs

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Text To Add][TextToAdd Property] | `($)TextToAdd`, with value `null` or `""` | `($)TextToAdd` is a variable of type [String][] |

#### Outputs

The variable `($)Text` will remain the following:

```json
"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

***

## Input Properties

### Text

The [Text][Text Property] where the [Text To Add][TextToAdd Property] is added.  
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Default Value | `($)Text` with value `""` |

### Text To Add

The [Text To Add][TextToAdd Property] at the beginning of the [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)TextToAdd` with value `""` |

## Exceptions

No exceptions are thrown.

## Remarks

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`) it is replaced with the [Text To Add][TextToAdd Property]. See [Example][NullOrEmptyText Example] above.

### Null or empty Text To Add

If [Text To Add][TextToAdd Property] is `null` or empty (i.e. `""`) nothing is added to [Text][Text Property]. See [Example][NullOrEmptyTextToAdd Example] above.

[Text Property]: {{< ref "#text" >}}
[TextToAdd Property]: {{< ref "#text-to-add" >}}

[NullOrEmptyText Example]: {{< ref "#add-text-to-add-at-the-beginning-of-a-null-or-empty-text" >}}
[NullOrEmptyTextToAdd Example]: {{< ref "#add-null-or-empty-text-to-add-at-the-beginning-of-another-text" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[String]: {{< url "MSDocs.DotNet.Api.System.String" >}}
