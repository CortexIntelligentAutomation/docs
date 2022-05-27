---
title: "Flow Exception Handling"
linkTitle: "Flow Exception Handling"
description: "Handling exceptions at different levels within a flow."
weight: 30
---

# {{< param title >}}

## Summary

Flows can provide for a range of exception handling techniques:

* Exceptions can be handled at the [block level][] (Highest Priority)
* Exceptions can be handled at the [workspace level][]
* Exceptions can be handled at the [flow level][] (Lowest Priority)

The [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block], which is located on the top-level [workspace][What-Is-Workspace], handles exceptions at the [flow level][].

It acts as an exception handler of last resort, handling any exceptions that are not caught by the higher priority [Handle Block Exception][Block-Handle-Block-Exception] [blocks][What-Is-Block] or [Handle Workspace Exception][Block-Handle-Workspace-Exception] [blocks][What-Is-Block].

For detailed information about Flow Exception Handling, see [Handling Exceptions at the Flow Level][flow level].

## Remarks

The logic contained within the [Handle Flow Exception][Block-Handle-Flow-Exception] [workspace][What-Is-Workspace] must terminate the [flow execution][What-Is-Execution] as no further logic can be processed outside the [Handle Flow Exception][Block-Handle-Flow-Exception] [workspace][What-Is-Workspace].

## Related Concepts

* [Flows][What-Is-Flow]
* [Workspaces][Workspace]
* [Executions][Execution]
* [Execution Exceptions][Exceptions]

[Block-End-Flow]: {{< url "Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[Block-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.BlockExceptionHandling.MainDoc" >}}

[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.Exceptions.MainDoc" >}}
[block level]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.Exceptions.BlockLevel" >}}
[flow level]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.Exceptions.FlowLevel" >}}
[workspace level]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.Exceptions.WorkspaceLevel" >}}

[Workspace-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.WorkspaceExceptionHandling.MainDoc" >}}

[Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.MainDoc" >}}
[Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.MainDoc" >}}

[Block-Handle-Block-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Block-Handle-Flow-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Block-Handle-Workspace-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}

[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.WhatIsAnExecution.MainDoc" >}}
[What-Is-Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.WhatIsAFlow.MainDoc" >}}
[What-Is-Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.WhatIsAWorkspace.MainDoc" >}}
