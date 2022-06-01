---
title: "Exceptions"
linkTitle: "Exceptions"
description: "Handling and throwing exceptions."
weight: 40
---

# {{< param title >}}

## Summary

All exceptions should be handled during [flow execution][What-Is-Execution], otherwise if an unhandled exception occurs, the [flow execution][What-Is-Execution] will stop without warning.

For more information on Exceptions, see [What is an Exception][WhatIsAnException].

For detailed information on different exception messages, see [Exceptions][]

Cortex [flows][Flow] provide a range of exception handling techniques, organised hierarchically:

* Exceptions may be handled at the [block level][block handling].
* Exceptions can be handled at the [workspace level][workspace handling].
* Exceptions can be handled at the [flow level][flow handling].

See [Handling Exceptions][] for more information on how to handle exceptions at different levels.

## See Also

### Related Concepts

* [Flows][Flow]
* [Flow Executions][What-Is-Execution]

### Related Data Types

* [Exception Data Type][]

### Related Blocks

* [Handle Block Exception][Block-Handle-Block-Exception]
* [Handle Workspace Exception][Block-Handle-Workspace-Exception]
* [Handle Flow Exception][Block-Handle-Flow-Exception]
* [Throw Exception][Block-Throw-Exception]
* [End Flow][Block-End-Flow]

### Related Material

* [Exceptions][]

[block handling]: {{< ref "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[workspace handling]: {{< ref "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[flow handling]: {{< ref "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}

[Block-End-Flow]: {{< url "Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[Block-Handle-Block-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Block-Handle-Flow-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Block-Handle-Workspace-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}
[Block-Throw-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.ThrowException.ThrowNewFlowException.MainDoc" >}}
[Block-Workspace-Block]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.WorkspaceBlock.MainDoc" >}}
[Workspace-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.WorkspaceExceptionHandling.MainDoc" >}}

[Block-Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.BlockProperties.MainDoc" >}}
[Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.MainDoc" >}}
[Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.MainDoc" >}}
[Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.MainDoc" >}}
[Flow-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.FlowExceptionHandling.MainDoc" >}}
[Scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.Scope.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.WhatIsAnExecution.MainDoc" >}}
[What-Is-Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.WhatIsAWorkspace.MainDoc" >}}

[WhatIsAnException]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}

[Exceptions]: {{< url "Cortex.Reference.Exceptions.MainDoc" >}}
[Exception Data Type]: {{< url "Cortex.Reference.DataTypes.MostCommon.Exceptions" >}}
