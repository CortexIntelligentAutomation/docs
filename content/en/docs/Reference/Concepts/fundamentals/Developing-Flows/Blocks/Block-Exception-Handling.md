---
title: "Block Exception Handling"
linkTitle: "Block Exception Handling"
description: "Handling exceptions from a specific block."
weight: 40
---

# {{< param title >}}

## Summary

[Flows][Flow] can provide for a range of exception handling techniques:

* Exceptions can be handled at the [block level][Block-Level] (Highest Priority)
* Exceptions can be handled at the [workspace level][Workspace-Level]
* Exceptions can be handled at the [flow level][Flow-Level] (Lowest Priority)

The [Handle Block Exception][Block-Handle-Block-Exception] [block][What-Is-Block] is connected to an individual action type function [block][What-Is-Block] and handles exceptions thrown by this [block][What-Is-Block].

Multiple [Handle Block Exception][Block-Handle-Block-Exception] [blocks][What-Is-Block] may be chained for a single activity [block][What-Is-Block] to handle different types of exceptions.

For detailed information about Block Exception Handling, see [Handling Exceptions at the Block Level][Block-Level].

## Related Concepts

* [Blocks][What-Is-Block]
* [Workspaces][Workspace]
* [Flows][Flow]
* [Exceptions][Exceptions]

## Related Blocks

* [Handle Block Exception][Block-Handle-Block-Exception]

[Block-Level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.Exceptions.Block-Level" >}}
[Block-Handle-Block-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Block-Handle-Workspace-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}
[Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Flows.MainDoc" >}}
[Handle-Flow-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.What-Is-A-Block.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.What-Is-An-Execution.MainDoc" >}}
[What-Is-Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Workspaces.What-Is-A-Workspace.MainDoc" >}}
[Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Workspaces.MainDoc" >}}

[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.Exceptions.MainDoc" >}}
[Block-Level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.Exceptions.Block-Level" >}}
[Flow-Level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.Exceptions.Flow-Level" >}}
[Workspace-Level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.Exceptions.Workspace-Level" >}}
