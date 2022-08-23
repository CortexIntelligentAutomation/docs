---
title: "Handling Exceptions"
linkTitle: "Handling Exceptions"
description: "Information regarding handling exceptions at the block, workspace and flow level."
weight: 100
---

# {{% param title %}}

## Summary

Exceptions within a flow can be handled at the following levels:

- The [block level][] (Highest Priority)
- The [workspace level][]
- The [flow level][] (Lowest Priority)

## Handling Exceptions at the Block level

TODO: Example image of exception thrown by simple flow single block exception handler with token above (animated gif)

Exceptions thrown within the [execution][] of a [block][] can be handled by connecting a [Handle Block Exception block][Handle Block Exception blocks]  to the red exception output port. These blocks allow for specific [match criteria][] to be provided; if an exception matches the criteria it will be handled by the block and can be [saved to a variable][block saved to a variable], otherwise, it will be passed to the next [chained][] exception handling block. This process repeats until the exception is either handled or there are no more blocks in the chain; if the exception is not handled at this level it is passed up to the [workspace level][].

### Matching Exceptions

[Handle Block Exception blocks][] can be configured to handle exceptions that match specific criteria (e.g. The Exception Type or Message contains matching text). If an exception matches the criteria, the exception is handled, [saved to a variable][block saved to a variable] if provided, and the [execution][] moves to the block connected to the output port; if the exception does not match the criteria the execution moves to the next [chained][] exception handling block.

### Chaining Block Exception Handling Blocks

[Handle Block Exception blocks][] can be chained together by connecting the red exception output port of one [block][] to the red exception input port of another. When an exception is not handled, it will be passed to the next chained exception handling block. This process repeats until the exception is either handled or there are no more blocks in the chain; if the exception is not handled at this level it is passed up to the [workspace level][].

The [Handle Block Exception][] block can be used to handle all exceptions. This block does not have an exception output port and therefore ends the chain.

For example:

![Icon](/images/chaining-handle-block-exception-blocks.png)

### Saving the Block Exception

[Handle Block Exception blocks][] can be used to save the handled exception to a [variable][]. If it is not necessary to save the exception to a variable, it may be [discarded][] by setting the block's Exception [property][] to use the built-in discard variable `($)_`.

## Handling Exceptions at the Workspace level

TODO: Example image of exception thrown by simple flow single workspace exception handler with token above (animated gif)

Exceptions not handled at the [block level][] are passed up to the workspace level.

If an unhandled exception occurs in a [Nested Workspace][] where a [Handle Workspace Exception][] block exists:

- The exception will be passed to the [Handle Workspace Exception][] block
- The exception will be handled and can be [saved to a variable][workspace saved to a variable]
- The [execution][] will move to the [block][] connected to the output port of the [Handle Workspace Exception][] block

If an unhandled exception occurs in a [Nested Workspace][] where a [Handle Workspace Exception][] block does not exist:

- The exception will be rethrown by the [Workspace block][] the [workspace][] belongs to
- This process repeats until the exception is handled at the [block level][] or workspace level, or reaches the [Top-Level Workspace][]

If an unhandled exception occurs in or reaches the [Top-Level Workspace][], and is not handled by any [Handle Block Exception blocks][] or the [Handle Workspace Exception][] block, it will be passed up to the [flow level][].

Please note that there are a number of [restrictions][Restrictions Handle Workspace Exception] when using the [Handle Workspace Exception][] block.

### Saving the Workspace Exception

The [Handle Workspace Exception][] block can be used to save the handled exception to a [variable][]. If it is not necessary to save the exception to a variable, it may be [discarded][] by setting the block's Exception [property][] to use the built-in discard variable `($)_`.

## Handling Exceptions at the Flow level

TODO: Example image of exception thrown by simple flow, only flow exception handler with token above (animated gif)

If an unhandled exception occurs in or reaches the [Top-Level Workspace][], and is not handled at the [block level][] or [workspace level][], it will be passed up to the flow level, where:

- The exception will be passed to the [Handle Flow Exception][] block
- The exception will be handled and can be saved to a [variable][]
- The [execution][] will enter the [Handle Flow Exception][] block's [workspace][]
- The [execution][] will end after the [Handle Flow Exception][] block's [workspace][] has completed

The [Handle Flow Exception][] block is automatically added to the [Top-Level Workspace][] when a new [flow][] is created, there are [restrictions][Restrictions Handle Flow Exception] that apply to this block.

The [Handle Flow Exception][] block it has its own [workspace][], which can access its own [variables][variable] and those defined at the [scope][] of the [Top-Level Workspace][].

The logic contained within the [Handle Flow Exception][] workspace must end the execution using an [End Flow][] block. By default, this workspace contains a [Start Workspace][] block connected to an [End Flow][] block, which will cause the flow to end without error.

### Handling Exceptions in the Handle Flow Exception block

Exceptions that occur within the [workspace][] of the [Handle Flow Exception][] block can be handled at the [block level][] and [workspace level][]. If an exception is not handled, the [execution][] will end with a status of Error.

![Icon](/images/flow-error-status.png)

### Saving the Flow Exception

The [Handle Flow Exception][] block can be used to save the handled exception to a [variable][]. If it is not necessary to save the exception to a variable, it may be [discarded][] by setting the block's Exception [property][] to use the built-in discard variable `($)_`.

## Remarks

### Known Limitations

#### The Top-Level Workspace cannot contain a Handle Workspace Exception block

The [Top-Level Workspace][] cannot contain a [Handle Workspace Exception][] block; if one is added, it will be reported when trying to validate the [flow][]. For more information see [Validating a Flow in Development][] and [Validating a Flow in Production][].

Any unhandled exceptions thrown on the Top-Level Workspace will be handled by the [Handle Flow Exception][] block.

In the future this may change.

#### A Nested Workspace cannot contain more than one Handle Workspace Exception block

A [Nested Workspace][] cannot contain more than one [Handle Workspace Exception][] block; if more than one is added, it will be reported when trying to validate the [flow][]. For more information see [Validating a Flow in Development][] and [Validating a Flow in Production][].

In the future this may change.

#### Enforced restrictions to prevent infinite recursion

For each [execution][] of a [workspace][], the [Handle Workspace Exception][] block will only handle the first unhandled exception within its workspace, this is to prevent infinite recursion within the [flow][].

For more information see [Handling Exceptions at the Workspace level][workspace level].

In the future this may change.

## See Also

### Related Concepts

- [Flows][]
- [Blocks][]
- [Workspaces][]
- [Variables][]
- [Executions][]

### Related Data Types

- [All Exceptions][]

### Related Blocks

- [Handle Block Exception blocks][]
- [Handle Workspace Exception][]
- [Handle Flow Exception][]
- [Workspace][Workspace block]
- [Start Workspace][]
- [End Flow][]

### External Documentation

None

[block level]: {{< ref "#handling-exceptions-at-the-block-level" >}}
[chained]: {{< ref "#chaining-block-exception-handling-blocks" >}}
[block saved to a variable]: {{< ref "#saving-the-block-exception" >}}
[workspace saved to a variable]: {{< ref "#saving-the-workspace-exception" >}}
[flow saved to a variable]: {{< ref "#saving-the-flow-exception" >}}
[match criteria]: {{< ref "#matching-exceptions" >}}
[workspace level]: {{< ref "#handling-exceptions-at-the-workspace-level" >}}
[flow level]: {{< ref "#handling-exceptions-at-the-flow-level" >}}

[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[Flow-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.HandlingExceptionsWithinAFlow.MainDoc" >}}

[Workspaces]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[Top-Level Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.TopLevelWorkspace" >}}
[Nested Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.NestedWorkspaces" >}}

[Blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[property]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[discarded]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.DiscardingOutputs" >}}

[Executions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[Validating a Flow in Development]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInDevelopment.ValidatingAFlow" >}}
[Validating a Flow in Production]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInProduction.ValidatingAFlow" >}}

[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[All Exceptions]: {{< url "Cortex.Reference.Exceptions.MainDoc" >}}

[scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}

[Workspace block]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.Workspace.MainDoc" >}}
[Start Workspace]: {{< url "Cortex.Reference.Blocks.Workspaces.StartWorkspace.StartWorkspace.MainDoc" >}}
[End Flow]: {{< url "Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[Handle Block Exception blocks]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.MainDoc" >}}
[Handle Block Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Handle Flow Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Restrictions Handle Flow Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.BlockRestrictions" >}}
[Handle Workspace Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}
[Restrictions Handle Workspace Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.BlockRestrictions" >}}
