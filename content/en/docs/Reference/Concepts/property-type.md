---
title: "Property Type"
linkTitle: "Property Type"
description: "This page describes the concepts of Input, Output and InputOutput properties."
---

# {{< param title >}}

TODO: Write intro
This page describes the concept of Input, Output and InputOutput properties.

## Input

Input properties provide values that are used during the execution of a block. They can use an [expression][], a [literal][] value, or be set to a [variable][].

>The value of an input property will not be modified during the execution of a block.

## Output

Output properties are used to save values returned from the execution of a block. They can be only be set to a [variable][].
>The value of the supplied variable will be overwritten during the execution of a block.

### Discarding Output

TODO:

## InputOutput

InputOutput properties provide values that are used and updated during the execution of a block. They can be only set to a [variable][].
>The value of the supplied variable will be overwritten or modified during the execution of a block, depending on its function.

[expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}
[literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Literals" >}}
[variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.VariableReference" >}}
