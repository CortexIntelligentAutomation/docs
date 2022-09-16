---
title: "Handle Flow Exception"
linkTitle: "Handle Flow Exception"
description: "Handles any unhandled exception within the Flow."
---

{{< figure src="/blocks/exceptions-handle-flow-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Exceptions.HandleFlowException.HandleFlowExceptionWorkspaceBlock)</p>

## Description

Handles any unhandled [Exception][Exception Property] within the Flow.

For more information, please see [Unhandled Exceptions][].

## Examples

### Handle and save the Exception

This example will handle any unhandled exception within the Flow; saving the exception to a variable, so the flow execution can use it to make decisions or take further action.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Exception][Exception Property] | `($)Exception`, with no value | `($)Exception` is a variable that will be set to a [dynamic][] value |

#### Result

The block will handle any unhandled exception within the Flow and save the exception to the `($)Exception` variable for use later in the flow execution.

***

### Handle and discard the Exception from being saved

This example will handle any unhandled exception within the Flow; not saving the exception to a variable, as the flow execution does not need it to make decisions or take further action.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Exception][Exception Property] | `($)_`, with no value | `($)_` is a built-in variable that indicates the flow execution does not need to save the exception, so it can be discarded |

#### Result

The block will handle any unhandled exception within the Flow, but will not save the exception as the `($)_` variable indicates it is not needed and can be discarded.

For more infomation about using the built-in `($)_` variable, please see [Discarding Output Properties][].

***

## Properties

### Exception

The [Exception][Exception Property] that is handled.

[Exception][Exception Property] can be any [Exception data type][Exception].

By default, this property is assigned the built-in `($)_` variable, so the exception will be discarded. If the flow execution does need the exception, a variable can be assigned to save it in.

For more infomation about using the built-in `($)_` variable, please see [Discarding Output Properties][].

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)_` to [discard][] |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Block Restrictions

The following restrictions apply to this block:

* A flow cannot contain more than one [Handle Flow Exception][] block.
* The [Handle Flow Exception][] block is not available on any palette.
* The [Handle Flow Exception][] block cannot be copied.
* The [Handle Flow Exception][] block cannot be deleted.

### Unhandled Exceptions

If an exception thrown by a block is not handled by any connected [Handle Block Exception blocks][], it will be passed to the [Handle Workspace Exception][] block on the same workspace.

If the workspace does not contain a [Handle Workspace Exception][] block it will be rethrown by the Workspace block the workspace belongs to.

This process repeats until:

* The exception is handled, or
* The exception reaches the flow's top-level workspace, is not handled by any [Handle Block Exception blocks][] and the top-level workspace does not contain a [Handle Workspace Exception][] block. At this stage, the exception is handled by the flow's [Handle Flow Exception][] block.

If an exception occurs within the workspace of the [Handle Flow Exception][] block and is not handled, the flow will end with a status of Error.

![Icon](/images/flow-error-status.png)

For more information about chaining of exception handling blocks and passing of exceptions, please see [Exception Handling][].

### Why does the Exception property return a dynamic data type?

The decision for the [Exception][Exception Property] to return a [dynamic data type][dynamic] rather than an [Exception data type][Exception], was to avoid users having to [cast][Object Casting] the exception to its correct type to be able to use all of its properties.

As a result, any issues with using the [Exception data type][Exception] (i.e. trying to access a property it does not have) will not be reported as messages when trying to debug the flow; they will only be discovered when the flow execution reaches the part of the flow with the issue.

If it is desirable to have any issues reported as messages when trying to debug the flow, the user can [cast][Object Casting] the exception to its correct type.

### Using the built-in ($)_ variable to discard the Exception from being saved

Sometimes when an exception occurs the flow execution wants to use the exception to make decisions or take further action. However, there are occasions when the exception is not needed, and being forced to create another variable to save the exception is extra work for no benefit. In these circumstances it is possible to use the built-in `($)_` variable to indicate the exception does not need to be saved.

For more infomation about using the built-in `($)_` variable, please see [Discarding Output Properties][].

[Exception Property]: {{< ref "#exception" >}}
[discard]: {{< ref "#using-the-built-in-_-variable-to-discard-the-exception-from-being-saved" >}}

[Unhandled Exceptions]: {{< ref "#unhandled-exceptions" >}}

[Exception Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[Object Casting]: {{< url "Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.MainDoc" >}}
[Discarding Output Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.DiscardingOutputs" >}}

[Handle Block Exception blocks]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.MainDoc" >}}
[Handle Flow Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Handle Workspace Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}

[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Exception]: {{< url "Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
