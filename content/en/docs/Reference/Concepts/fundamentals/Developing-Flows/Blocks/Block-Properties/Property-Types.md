---
title: "Property Types"
linkTitle: "Property Types"
description: "The different types of properties of blocks."
weight: 10
---

# {{< param title >}}

## Summary

The Properties of a [block][What-Is-Block] define the characteristics of the block.

Each Property can be one of three different types:

* [Input][Input]
* [Output][Output]
* [InputOutput][Input-Output]

## Inputs

Inputs, as the name suggests, provide an input value to the [block][What-Is-Block]. Generally, inputs can accept either [literal][Literals] values, references to [variables][Variables], or [expressions][Expressions] using the C# syntax.

The icons used for inputs are displayed in a dark blue to distinguish them from [outputs][Output] or [inputoutputs][Input-Output].

## Outputs

Outputs can reference a variable in which the output value will be stored, or the output value can be [discarded][Discarding-Output].

The icon used for outputs is displayed in light blue to distinguish them from [inputs][Input].

### Discarding Outputs

It may be desirable in certain situations to discard an output value rather than save it to a variable. For example:

* Discarding the exception output from an [exception handling][Exceptions] block
* Discarding unwanted output values from blocks such as the [Execute SSH Command][TODO] block that have multiple output properties

To discard an output value, the output property should reference the built-in `($)_` variable.

## InputOutputs

Inputoutputs acts as both an [input][Input] and an [output][Output] and the property should reference a variable.

The icons used for inputoutputs are displayed in a light blue to distinguish them from [inputs][Input].

## Related Concepts

* [Blocks][Block]
* [Variables][Variables]
* [Literals-Expressions-Variables][Literal-Expressions-Variables]

## Related Blocks

* [All blocks][All-Blocks]

[Input]: {{< ref "#inputs" >}}
[Output]: {{< ref "#outputs" >}}
[Input-Output]: {{< ref "#input-outputs" >}}
[Discarding-Output]: {{< ref "#discarding-outputs" >}}

[All-Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}
[Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.MainDoc" >}}
[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.Exceptions.MainDoc" >}}
[Literal-Expressions-Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Properties.Literals-Expressions-Variables.MainDoc" >}}
[Literals]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Properties.Literals-Expressions-Variables.Literals" >}}
[Expressions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Properties.Literals-Expressions-Variables.Expressions" >}}
[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Properties.Literals-Expressions-Variables.Variables" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.What-Is-A-Block.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.What-Is-An-Execution.MainDoc" >}}
