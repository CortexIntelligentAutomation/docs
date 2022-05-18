---
title: "Exceptions"
linkTitle: "Exceptions"
description: "Handling and throwing exceptions."
weight: 40
---

# {{< param title >}}

## Summary

All exceptions should be handled during [flow execution][What-Is-Execution], otherwise if an unhandled exception occurs, the [flow execution][What-Is-Execution] will stop without warning.

Cortex [flows][Flow] provides a range of exception handling techniques, organised hierarchically:

* Exceptions may be handled at the [block level][].
* Exceptions can be handled at the [workspace level][workspace level].
* Exceptions can be handled at the [flow level][flow level].

## Handling Exceptions at the Block level

Handling exceptions at the [block][What-Is-Block] level is normally performed if a particular activity [block][What-Is-Block] is likely to throw an exception (e.g., an OCI [block][What-Is-Block] detecting an external exception).

[Block][What-Is-Block] level exception handling will always take precedence over handling the exceptions at the [Workspace][Workspace] level, or at the [Flow][Flow] level.

An exception thrown during [flow execution][What-Is-Execution] by an activity [block][What-Is-Block] can be handled by dedicated exception handling logic using a [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block].

A [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block] may be connected to the red exception connection port on the right of the activity [block][What-Is-Block]; should an exception be raised by this activity [block][What-Is-Block], [flow execution][What-Is-Execution] will pass to the [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block].

### Matching Exceptions

The [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block] can be optionally configured to match configured error messages or error types; if a match is found, the [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block] will direct the [flow execution][What-Is-Execution] to logic connected to [Handle Block Exception][Block-Handle-Block-Exception] [block's][What-Is-Block] output connection port.

#### Chaining Block Exception Handling Blocks

Multiple [Handle Block Exception][Block-Handle-Block-Exception] [blocks][What-Is-Block] that search for different error messages or types can be chained together so different exceptions can be handled separately.

The [Handle Block Exception][Block-Handle-Block-Exception] [blocks][What-Is-Block] are chained by connecting the red exception port on the right-hand side of one [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block] to the input connection port of the next [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block]. For example:

![Icon](/images/chaining-handle-block-exception-blocks.png)

If an error message or error type is not matched by the first [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block], then [flow execution][What-Is-Execution] will proceed to the next [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block] in the chain.

If the final [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block] of the chain does not match an error message or type, then [flow execution][What-Is-Execution] will jump to the [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Execution] if present, or if not, to the [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block].

### Saving the Block Exception

The [Handle Block Exception][Block-Handle-Block-Exception] [blocks][What-Is-Block] allows for the exception to be saved to a variable when handling an exception. If it is not necessary to save the exception to a variable, the exception may be discarded by setting the [block's][What-Is-Block] **Exception** [property][Block-Properties] to reference the built-in discard variable `($)_`.

## Handling Exceptions at the Workspace level

Handling exceptions at the [workspace][What-Is-Workspace] level should always be considered for handling internal exceptions.

An exception, unhandled at the [Block][Block] level, may be handled at the [Workspace][What-Is-Workspace] level using a [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block], which provides a common point for handling unhandled exceptions that are thrown in this [workspace][What-Is-Workspace]. 

Only one [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block] can be used on a single [workspace][Workspace].

The [Handle Workspace Exception][Block-Handle-Workspace-Exception] block will always take precedence over handling the Exception at the [Flow][Flow] level.

### Workspace Exception Handling Logic

Function [blocks][What-Is-Block] are connected to the output connection port of the [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block] to create the logic for handling the exception.

The logic may:

* Reconnect to the main [flow][Flow] logic in the [workspace][What-Is-Workspace] if appropriate
* Forcibly cause the [flow execution][What-Is-Execution] to jump to a superior [workspace's][What-Is-Workspace] exception handling logic if present, using the [Throw Exception][Block-Throw-Exception] [block][What-Is-Block]
* Terminate the [flow execution][What-Is-Execution] using an [End Flow][Block-End-Flow] [block][What-Is-Block]

#### Handling Exceptions on the Top-Level Workspace

The top-level [Workspace][Workspace] cannot contain a [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block]; any unhandled exceptions thrown on the top-level [Workspace][Workspace] will be handled by the [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block].

### Handling Multiple Exceptions

Once the [flow execution][What-Is-Execution] has jumped to the [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block], a second unhandled exception in the same [workspace][What-Is-Workspace] will cause the [flow execution][What-Is-Execution] to jump to the superior [workspace's][What-Is-Workspace] exception handling logic, or to the [Handle Flow Exception][Block-Handle-Flow-Exception] [block's][What-Is-Block] [workspace][What-Is-Workspace] if none is present.

### Exception Handling in Nested Workspaces

Whenever the [flow execution][What-Is-Execution] enters a [workspace][What-Is-Workspace], the [flow execution][What-Is-Execution] can jump to the [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block] **only once**; further exceptions in this [workspace][What-Is-Workspace] will cause the [flow execution][What-Is-Execution] to jump to the exception handling logic of the superior [workspace][What-Is-Workspace] if present, or if not, to the [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block].

If the [workspace][What-Is-Workspace] is re-entered from the superior [workspace][What-Is-Workspace] and an unhandled exception is thrown, the [flow execution][What-Is-Execution] can jump again to the [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block].

If an exception in a [workspace][What-Is-Workspace] has already been handled by its [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block], any further exceptions escalated from subordinate [workspaces][What-Is-Workspace] **will not** be handled by the [workspace][What-Is-Workspace] [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block]; any unhandled exceptions will cause the [flow execution][What-Is-Execution] to jump immediately to the superior [workspace's][What-Is-Workspace] exception handling logic.

#### Ensure Deterministic Exception Handling

To create a logically deterministic Exception Handling Strategy for nested [Workspaces][What-Is-Workspace], the [workspace blocks][Block-Workspace-Block] should be connected to [Handle Block Exception][Block-Handle-Block-Exception] [blocks][What-Is-Block].

### Saving the Workspace Exception

The [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block] allows for the exception to be saved to a variable when handling an exception. If it is not necessary to save the exception to a variable, the exception may be discarded by setting the [block's][What-Is-Block] **Exception** [property][Block-Properties] to reference the built-in discard variable `($)_`.

### Handle Workspace Exception Remarks

* There can only be one [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block] per [workspace][What-Is-Workspace]. The attempted use of multiple [Handle Workspace Exception][Block-Handle-Workspace-Exception] [blocks][What-Is-Block] on a single workspace will be caught and prevented at compilation.

## Handling Exceptions at the Flow level

Handling exceptions at the [flow][Flow] level is typically used a method of last resort as the [flow execution][What-Is-Execution] must terminate within the [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block].

Exceptions that are not handled at a [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block] or [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block], will be handled by the the [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block].

The [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block] has the lowest precedence of all the exception handling methods.

The [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block] is automatically created on the top-level [workspace][What-Is-Workspace]. The [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block] it has its own [workspace][What-Is-Workspace], which can access global variables and contain its own locally [scoped][Scope] variables.

By default, the [Handle Flow Exception][Block-Handle-Flow-Exception] object contains some basic exception handling logic to cleanly terminate the [flow execution][What-Is-Execution]; this can be changed by the flow author to use any of the function [blocks][What-Is-Block] available.

### Handling Exceptions in the Handle Flow Exceptions Block

The [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block] can also contain its own exception handling logic, including [Handle Block Exception][Block-Handle-Block-Exception] [blocks][What-Is-Block] and a [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block].

Care should be taken when using the [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block] as any unhandled exceptions can only cause the [flow execution][What-Is-Execution] to jump to the [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block] **once**; a second unhandled exception will cause the [flow execution][What-Is-Execution] to terminate abruptly and without warning to avoid an infinite loop.

### Terminating Flow Execution

The logic contained within the [Handle Flow Exception][Block-Handle-Flow-Exception] [workspace][What-Is-Workspace] must terminate the [flow execution][What-Is-Execution] using an [End Flow][Block-End-Flow] [block][What-Is-Block] as no further logic can be processed outside the [Handle Flow Exception][Block-Handle-Flow-Exception] [workspace][What-Is-Workspace].

### Saving the Flow Exception

The [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block] allows for the exception to be saved to a variable when handling an exception. If it is not necessary to save the exception to a variable, the exception may be discarded by setting the object's **Exception** [property][Block-Properties] to reference the built-in discard variable `($)_`.

### Handle Flow Exception Remarks

* There can only be one [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block] per [flow][Flow].
* The [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block] only exists on the top-level [workspace][What-Is-Workspace], and cannot be deleted.

## Throw Exception

* The [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block] only exists on the top-level [workspace][What-Is-Workspace], and cannot be deleted.
Exceptions may be intentionally generated as part of the [flow's][Flow] logic, using the [Throw Exception][Block-Throw-Exception] [block][What-Is-Block].

It is typically used if an OCI [block][What-Is-Block] receives an error message from a third-party system, and the [flow][Flow] logic determines that this error should be treated as a Cortex exception.

The [Throw Exception][Block-Throw-Exception] [block][What-Is-Block] will cause the [flow execution][What-Is-Execution] to jump to the [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block] if one is present, or, if not, to the [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block].

For more details of throwing exceptions, refer to the [Throw-Exception][Block-Throw-Exception] [block][What-Is-Block] documentation.

## Related Concepts

* [Flows][Flow]
* [Flow Executions][What-Is-Execution]
* [Workspaces][Workspace]
* [Blocks][Block]
* [Block Properties][Block-Properties]

## Related Blocks

* [Handle Block Exception][Block-Handle-Block-Exception]
* [Handle Workspace Exception][Block-Handle-Workspace-Exception]
* [Handle Flow Exception][Block-Handle-Flow-Exception]
* [Throw Exception][Block-Throw-Exception]
* [End Flow][Block-End-Flow]

[block level]: {{< ref "#handling-exceptions-at-the-block-level" >}}
[workspace level]: {{< ref "#handling-exceptions-at-the-workspace-level" >}}
[flow level]: {{< ref "#handling-exceptions-at-the-flow-level" >}}

[Block-End-Flow]: {{< url "Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[Block-Handle-Block-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Block-Handle-Flow-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Block-Handle-Workspace-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}
[Block-Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.BlockProperties.MainDoc" >}}
[Block-Throw-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.ThrowException.ThrowNewFlowException.MainDoc" >}}
[Block-Workspace-Block]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.WorkspaceBlock.MainDoc" >}}
[Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.MainDoc" >}}
[Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.MainDoc" >}}
[Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.MainDoc" >}}
[Flow-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.FlowExceptionHandling.MainDoc" >}}
[Scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.Scope.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.WhatIsAnExecution.MainDoc" >}}
[What-Is-Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.What-Is-A-Workspace.MainDoc" >}}
[Workspace-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.Workspace-Exception-Handling.MainDoc" >}}
