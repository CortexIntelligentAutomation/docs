---
title: "What is a Block Property?"
linkTitle: "What is a Block Property?"
description: "Information regarding what a block property is and how they are used."
weight: 1
---

# {{< param title >}}

## Summary

The Properties of a [block][What-Is-Block] define the characteristics of the block.

## Block Property Types

Each Property can be one of three different types:

- [Input][]
- [Output][]
- [InputOutput][]

### Input

Inputs are used to provide values to a [block][What-Is-Block], which are then used in the block's execution (e.g. a block to send emails would have input properties for specifying things like the sender, recipients, summary, body, attachments etc.).

The icons used for inputs are displayed in a dark blue to distinguish them from [Outputs][Output] or [InputOutputs][InputOutput].

#### Available Block Property Editors

- [Literal Editor][]
- [Variable Editor][]
- [Expression Editor][]

### Output

Outputs can reference a variable in which the output value will be stored, or the value can be [discarded][Discarding Outputs].

The icon used for Outputs is displayed in light blue to distinguish them from [Inputs][Input].

### Discarding Outputs

It may be desirable in certain situations to discard an output value rather than save it to a variable. For example:

- Discarding the exception output from an [exception handling][Exceptions] block
- Discarding unwanted output values from blocks such as the [Execute SSH Command][TODO] block that have multiple Output properties

To discard an output value, the Output property should reference the built-in `($)_` variable.

#### Available Block Property Editors

- [Variable Editor][]

### InputOutput

TODO: Explain what an InputOutput is

InputOutputs acts as both an [input][Input] and an [output][Output] and the property should reference a variable.

The icons used for InputOutputs are displayed in a light blue to distinguish them from [inputs][Input].

#### Available Block Property Editors

- [Variable Editor][]

## Related Concepts

- [Blocks][Block]
- [Literal Editor][]
- [Variable Editor][]
- [Expression Editor][]

## Related Blocks

- [All blocks][All-Blocks]

[Input]: {{< ref "#input" >}}
[Output]: {{< ref "#output" >}}
[InputOutput]: {{< ref "#inputoutput" >}}
[Discarding Outputs]: {{< ref "#discarding-outputs" >}}

[All-Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}
[Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[Literal Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
