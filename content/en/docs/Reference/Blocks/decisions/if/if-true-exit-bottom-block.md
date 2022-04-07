---
title: "If True Exit Bottom"
linkTitle: "If True Exit Bottom"
description: "Checks if a given value evaluates to `true`; if so the flow execution exits via the block's bottom port, otherwise it exits via the right port."
---

{{< figure src="/blocks/decisions-if-true-exit-bottom-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Decisions.If.IfTrueExitBottomBlock)</p>

## Description

Checks if a given [Value][Value Property] evaluates to `true`; if so the flow execution exits via the block's bottom port (green tick), otherwise it exits via the right port (red cross).

## Examples

### Value is true

This example will check if `1 + 1 == 2` evaluates to `true` or `false`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Value][Value Property] | `($)Value`, with value `1 + 1 == 2` | `($)Value` is a variable whose value evaluates to type [Boolean][] |

#### Result

`1 + 1 == 2` is `true`, so the flow execution exits via the block's bottom port (green tick).

***

### Value is false

This example will check if `1 + 1 == 1` evaluates to `true` or `false`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Value][Value Property] | `($)Value`, with value `1 + 1 == 1` | `($)Value` is a variable whose value evaluates to type [Boolean][] |

#### Result

`1 + 1 == 1` is `false`, so the flow execution exits via the block's right port (red cross).

***

## Properties

### Value

The [Value][Value Property] to check evaluates to `true` or `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Default Value | `($)Value` with value `false` |

## Exceptions

No exceptions are thrown by the block.

## Remarks

No remarks for the block.

[Value Property]: {{< ref "#value" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
