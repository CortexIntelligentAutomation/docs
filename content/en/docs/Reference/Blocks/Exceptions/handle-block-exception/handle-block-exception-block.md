---
title: "Handle Block Exception"
linkTitle: "Handle Block Exception"
description: "Handles any exception thrown by the block it is connected to."
---

{{< figure src="/blocks/exceptions-handle-block-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Exceptions.HandleBlockException.HandleBlockExceptionBlock)</p>

## Description

Handles any [Exception][Exception Property] thrown by the block it is connected to.

## Examples

### Handle and save the Exception

This example will handle any exception thrown by the block it is connected to; saving the exception to a variable, so the flow execution can use it to make decisions or take further action.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Exception][Exception Property] | `($)Exception`, with no value | `($)Exception` is a variable that will be set to a [dynamic][] value |

#### Result

The block will handle any exception and save the exception to the `($)Exception` variable for use later in the flow execution.

***

### Handle and discard the Exception from being saved

This example will handle any exception thrown by the block it is connected to; not saving the exception to a variable, as the flow execution does not need it to make decisions or take further action.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Exception][Exception Property] | `($)_`, with no value | `($)_` is a built-in variable that indicates the flow execution does not need to save the exception, so it can be discarded |

#### Result

The block will handle any exception, but will not save the exception as the `($)_` variable indicates it is not needed and can be discarded.

For more infomation about using the built-in `($)_` variable, please see [Discarding Output Properties][].

***

## Properties

### Exception

The [Exception][Exception Property] that is handled.

[Exception][Exception Property] can be any [Exception data type][Exception].

If the flow execution does not need the exception, it can be discarded by assigning the built-in `($)_` variable.

For more infomation about using the built-in `($)_` variable, please see [Discarding Output Properties][].

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Property Type | [Output][] |
| Is Advanced | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)_` to [discard][] |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Chaining Exception handling blocks

Blocks that handle block exceptions can be chained together so different exceptions can be handled separately. The blocks are listed below:

* [Handle Block Exception Matching Message][]
* [Handle Block Exception Matching Messages][]
* [Handle Block Exception Matching Type Name][]
* [Handle Block Exception Matching Type Names][]
* [Handle Block Exception][]

![Icon](/images/chaining-handle-block-exception-blocks.png)

Each block has an input port on its left-hand side and, with the exception of this block, also have an output port on their right-hand side; this is so they can pass any exception they do not handle to the next block.

As this block handles any exception, it does not require the output port.

For more information about chaining of exception handling blocks and passing of exceptions, please see [Exception Handling][].

### Why does the Exception property return a dynamic data type?

The decision for the [Exception][Exception Property] to return a [dynamic data type][dynamic] rather than an [Exception data type][Exception], was to avoid users having to [cast][Object Casting] the exception to its correct type to be able to use all of its properties.

As a result, any issues with using the [Exception data type][Exception] (i.e. trying to access a property it does not have) will not be reported as messages when trying to debug the flow; they will only be discovered when the flow execution reaches the part of the flow with the issue.

If it is desirable to have any issues reported as messages when trying to debug the flow, the user can [cast][Object Casting] the exception to its correct type.

### Using the built-in ($)_ variable to discard the Exception from being saved

Sometimes when an exception occurs the flow execution wants to use the exception to make decisions or take further action. However, there are occasions when the exception is not needed, and being forced to create another variable to save the exception is extra work for no benefit. In these circumstances it is possible to use the built-in `($)_` variable to indicate the exception does not need to be saved.

For more information about using the built-in `($)_` variable, please see [Discarding Output Properties][].

[Exception Property]: {{< ref "#exception" >}}
[discard]: {{< ref "#using-the-built-in-_-variable-to-discard-the-exception-from-being-saved" >}}

[Handle Block Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Handle Block Exception Matching Message]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingMessage.MainDoc" >}}
[Handle Block Exception Matching Messages]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingMessages.MainDoc" >}}
[Handle Block Exception Matching Type Name]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingTypeName.MainDoc" >}}
[Handle Block Exception Matching Type Names]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingTypeNames.MainDoc" >}}
[Discarding Output Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.DiscardingOutputs" >}}
[Exception Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[Object Casting]: {{< url "Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.MainDoc" >}}

[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Exception]: {{< url "Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
