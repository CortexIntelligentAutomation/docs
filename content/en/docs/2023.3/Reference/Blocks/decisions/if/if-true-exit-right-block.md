---
title: "If True Exit Right"
linkTitle: "If True Exit Right"
description: "Checks if a given value evaluates to `true`; if so the flow execution exits via the block's right port, otherwise it exits via the bottom port."
---

{{< figure src="/blocks/decisions-if-true-exit-right-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Decisions.If.IfTrueExitRightBlock)</p>

## Description

Checks if a given [Value][Value Property] evaluates to `true`; if so the flow execution exits via the block's right port (green tick), otherwise it exits via the bottom port (red cross).

## Examples

### Value is true

This example will check if `1 + 1 == 2` evaluates to `true` or `false`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Value][Value Property] | `($)Value`, with value `1 + 1 == 2` | `($)Value` is a variable whose value evaluates to type [Boolean][] |

#### Result

`1 + 1 == 2` is `true`, so the flow execution exits via the block's right port (green tick).

***

### Value is false

This example will check if `1 + 1 == 1` evaluates to `true` or `false`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Value][Value Property] | `($)Value`, with value `1 + 1 == 1` | `($)Value` is a variable whose value evaluates to type [Boolean][] |

#### Result

`1 + 1 == 1` is `false`, so the flow execution exits via the block's bottom port (red cross).

***

## Properties

### Value

The [Value][Value Property] to check evaluates to `true` or `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | No value |

## Exceptions

None

## Remarks

No remarks for the block.

[Value Property]: {{< ref "#value" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
