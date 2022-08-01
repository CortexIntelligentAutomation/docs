---
title: "Block Exception Handling"
linkTitle: "Block Exception Handling"
description: "Information regarding handling exceptions at different levels within a block."
weight: 200
---

# {{< param title >}}

## Summary

Exceptions within a flow can be handled at the following levels:

- The [block level][] (Highest Priority)
- The [workspace level][]
- The [flow level][] (Lowest Priority)

Exceptions thrown within the execution of a [block][] can be handled by connecting a [Handle Block Exception block][].

For more information, see [Handling Exceptions at the Block Level][block level].

------------------------

[Flows][Flow] can provide for a range of exception handling techniques:

* Exceptions can be handled at the [block level][] (Highest Priority)
* Exceptions can be handled at the [workspace level][]
* Exceptions can be handled at the [flow level][] (Lowest Priority)

The [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block] is connected to an individual action type function [block][What-Is-Block] and handles exceptions thrown by this [block][What-Is-Block].

Multiple [Handle Block Exception][Block-Handle-Block-Exception] [blocks][What-Is-Block] may be chained for a single activity [block][What-Is-Block] to handle different types of exceptions.

For detailed information about Block Exception Handling, see [Handling Exceptions at the Block Level][block level].

## Related Concepts

- [Flows][]
- [Workspaces][]
- [Blocks][block]
- [Exceptions][]

## Related Blocks

- [Handle Block Exception][Handle Block Exception block]

[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[flow level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.FlowLevel" >}}
[workspace level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.WorkspaceLevel" >}}
[block level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.BlockLevel" >}}
[Handle Block Exception block]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Workspaces]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}

[Handle-Flow-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Block-Handle-Workspace-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[What-Is-Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
