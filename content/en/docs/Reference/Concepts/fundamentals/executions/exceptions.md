---
title: "Exceptions"
linkTitle: "Exceptions"
description: "Handling and throwing exceptions."
weight: 40
---

# {{< param title >}}

TODO: Paul and Tyler review

## Summary

All exceptions should be handled during [flow execution][What-Is-Execution], otherwise if an unhandled exception occurs, the [flow execution][What-Is-Execution] will stop without warning.

For more information on Exceptions, see [What is an Exception][WhatIsAnException].

For detailed information on different exception messages, see [Exceptions][]

Cortex [flows][Flow] provide a range of exception handling techniques, organised hierarchically:

* Exceptions may be handled at the [block level][].
* Exceptions can be handled at the [workspace level][].
* Exceptions can be handled at the [flow level][].

See [Handling Exceptions][] for more information on how to handle exceptions at different levels.

## See Also

### Related Concepts

* [What is an Exception][WhatIsAnException]
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

[block level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.BlockLevel" >}}
[workspace level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.WorkspaceLevel" >}}
[flow level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.FlowLevel" >}}

[Block-End-Flow]: {{< url "Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[Block-Handle-Block-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Block-Handle-Flow-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Block-Handle-Workspace-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}
[Block-Throw-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.ThrowException.ThrowNewFlowException.MainDoc" >}}
[Block-Workspace-Block]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.Workspace.MainDoc" >}}
[Workspace-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WorkspaceExceptionHandling.MainDoc" >}}

[Block-Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Flow-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.HandlingExceptionsWithinAFlow.MainDoc" >}}
[Scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[What-Is-Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}

[WhatIsAnException]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}

[Exceptions]: {{< url "Cortex.Reference.Exceptions.MainDoc" >}}
[Exception Data Type]: {{< url "Cortex.Reference.DataTypes.MostCommon.Exceptions" >}}
