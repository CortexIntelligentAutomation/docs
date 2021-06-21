---
title: "Add Text At End"
linkTitle: "Add Text At End"
description: "Adds text at the end of another text."
---

![Icon](/blocks/TextAddBlockIcon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Add.AddTextAtEndBlock)</p>

Adds [TextToAdd][TextToAdd Property] at the end of another [Text][Text Property].

## Examples

### Add TextToAdd at the end of another Text

#### Inputs

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [TextToAdd][TextToAdd Property] | `($)TextToAdd`, with value `"\|"` | `($)TextToAdd` is a variable of type [String][] |

#### Outputs

The variable `($)Text` will be updated to the following:

```json
"ABCDEFGHIJKLMNOPQRSTUVWXYZ|"
```

***

### Add TextToAdd at the end of a null or empty Text

#### Inputs

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `null` or `""` | `($)Text` is a variable of type [String][] |
| [TextToAdd][TextToAdd Property] | `($)TextToAdd`, with value `"\|"` | `($)TextToAdd` is a variable of type [String][] |

#### Outputs

The variable `($)Text` will be updated to the following:

```json
"|"
```

***

### Add null or empty TextToAdd at the end of another Text

#### Inputs

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [TextToAdd][TextToAdd Property] | `($)TextToAdd`, with value `null` or `""` | `($)TextToAdd` is a variable of type [String][] |

#### Outputs

The variable `($)Text` will remain the following:

```json
"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

***

## Input Properties

### Text

The [Text][Text Property] where the [TextToAdd][TextToAdd Property] is added.  
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Type | [InputOutput][] |
| Default Value | `($)Text` with value `""` |

### TextToAdd

The [TextToAdd][TextToAdd Property] at the end of the [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Type | [Input][] |
| Default Value | `($)TextToAdd` with value `""` |

## Exceptions

No exceptions are thrown.

## Remarks

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`) it is replaced with the [TextToAdd][TextToAdd Property]. See [Example][NullOrEmptyText Example] above.

### Null or empty TextToAdd

If [TextToAdd][TextToAdd Property] is `null` or empty (i.e. `""`) nothing is added to [Text][Text Property]. See [Example][NullOrEmptyTextToAdd Example] above.

[Text Property]: {{< ref "#text" >}}
[TextToAdd Property]: {{< ref "#texttoadd" >}}

[NullOrEmptyText Example]: {{< ref "#add-texttoadd-at-the-end-of-a-null-or-empty-text" >}}
[NullOrEmptyTextToAdd Example]: {{< ref "#add-null-or-empty-texttoadd-at-the-end-of-another-text" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[String]: {{< url "MSDocs.System.String" >}}
