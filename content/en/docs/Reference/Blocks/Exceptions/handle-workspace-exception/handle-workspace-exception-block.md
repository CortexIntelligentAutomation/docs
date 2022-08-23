---
title: "Handle Workspace Exception"
linkTitle: "Handle Workspace Exception"
description: "Handles any unhandled exception within its workspace."
---

{{< figure src="/blocks/exceptions-handle-workspace-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Exceptions.HandleWorkspaceException.HandleWorkspaceExceptionBlock)</p>

## Description

Handles any unhandled [Exception][Exception Property] within its workspace.

For more information, please see [Unhandled Exceptions][].

## Examples

### Handle and save the Exception

This example will handle any unhandled exception within the block's workspace; saving the exception to a variable, so the flow execution can use it to make decisions or take further action.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Exception][Exception Property] | `($)Exception`, with no value | `($)Exception` is a variable that will be set to a [dynamic][] value |

#### Result

The block will handle any unhandled exception within the block's workspace and save the exception to the `($)Exception` variable for use later in the flow execution.

***

### Handle and discard the Exception from being saved

This example will handle any unhandled exception within the block's workspace; not saving the exception to a variable, as the flow execution does not need it to make decisions or take further action.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Exception][Exception Property] | `($)_`, with no value | `($)_` is a built-in variable that indicates the flow execution does not need to save the exception, so it can be discarded |

#### Result

The block will handle any unhandled exception within the block's workspace, but will not save the exception as the `($)_` variable indicates it is not needed and can be discarded.

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
| Default Value | `($)Exception` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Block Restrictions

The following restrictions apply to this block:

* A workspace cannot contain more than one [Handle Workspace Exception][] block. If more than one is added, it will be reported as a message when trying to debug the flow.
* The [Handle Workspace Exception][] block will only handle the first unhandled exception within its workspace. This is to prevent infinite recursion within the flow. Subsequent unhandled exceptions are passed to the next relevant exception handling block. For more information about chaining of exception handling blocks and passing of exceptions, please see [Exception Handling][].
* A flow's Top-Level Workspace cannot contain a [Handle Workspace Exception][] block. If one is added, it will be reported as a message when trying to debug the flow.

### Unhandled Exceptions

If an exception thrown by a block is not handled by any connected [Handle Block Exception blocks][], it will be passed to the [Handle Workspace Exception][] block on the same workspace.

If the workspace does not contain a [Handle Workspace Exception][] block it will be rethrown by the [Workspace][] block the workspace belongs to.

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

[Unhandled Exceptions]: {{< ref "#unhandled-exceptions" >}}

[Exception Handling]: {{< url "Cortex.Reference.Concepts.ExceptionHandling.MainDoc" >}}
[Object Casting]: {{< url "Cortex.Reference.Concepts.ObjectCasting.MainDoc" >}}
[Discarding Output Properties]: {{< url "Cortex.Reference.Concepts.PropertyType.DiscardingOutput" >}}

[Handle Block Exception blocks]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.MainDoc" >}}
[Handle Flow Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Handle Workspace Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}
[Workspace]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.Workspace.MainDoc" >}}

[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Exception]: {{< url "Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}
