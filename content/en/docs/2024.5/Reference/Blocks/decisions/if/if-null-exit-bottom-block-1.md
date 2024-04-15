---
title: "If Null Exit Bottom"
linkTitle: "If Null Exit Bottom"
description: "Checks if a given value is `null`; if so the flow execution exits via the block's bottom port, otherwise it exits via the right port."
---

{{< figure src="/blocks/decisions-if-true-exit-bottom-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Decisions.If.IfNullExitBottomBlock`1)</p>

## Description

Checks if a given [Value][Value Property] is `null`; if so the flow execution exits via the block's bottom port (green tick), otherwise it exits via the right port (red cross).

For information about `null`, please see [Null and Nullable Types][].

## Examples

### Value is null

This example will check if `null` is `null`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Value][Value Property] | `($)Value`, with value `null` | `($)Value` is a variable of type [String][] |

#### Result

`null` is `null`, so the flow execution exits via the block's bottom port (green tick).

***

### Value is not null

This example will check if `"The quick brown fox jumps over the lazy dog"` is `null`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Value][Value Property] | `($)Value`, with value `"The quick brown fox jumps over the lazy dog"` | `($)Value` is a variable of type [String][] |

#### Result

`"The quick brown fox jumps over the lazy dog"` is not `null`, so the flow execution exits via the block's right port (red cross).

***

## Properties

### Value

The [Value][Value Property] to check is `null`.

For information about `null`, please see [Null and Nullable Types][].

| | |
|--------------------|---------------------------|
| Data Type | [TValue][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | No value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNotNullableException][] | Thrown when [Value][Value Property] is given a non-nullable value type. |

## Remarks

### Null and Nullable Types

For information about `null`, please see [Null and Nullable Types][].

[Value Property]: {{< ref "#value" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[TValue]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[Null and Nullable Types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.NullAndNullableTypes.MainDoc" >}}

[PropertyNotNullableException]: {{< url path="Cortex.Reference.Exceptions.Decisions.PropertyNotNullableException.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
