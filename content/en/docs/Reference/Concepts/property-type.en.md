---
title: "Property Type"
linkTitle: "Property Type"
description: "This page describes the concepts of Input, Output and InputOutput properties."
date: 2020-05-13
---

# {{< param title >}}

This page describes the concept of Input, Output and InputOutput properties.

## Input

The input property is used to supply the value which will be used by the block.
It can be a [variable reference][] or a [literal][]
>Existing value of the input property will not get modified during block execution

## Output

The Output property is used to save the result of block execution.
It can be only a [variable reference][]
>Existing value of the supplied variable will get modified

## InputOutput

The InputOutput property is used to supply the value which will be used during block. It is also used to save the result of block execution.
It can be only a [variable reference][]
>Existing value of the supplied variable will get modified

[literal]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.Literal" >}}
[variable reference]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.VariableReference" >}}
