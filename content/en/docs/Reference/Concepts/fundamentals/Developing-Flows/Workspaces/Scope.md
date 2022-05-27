---
title: "Workspace Scope"
linkTitle: "Workspace Scope"
description: "The scope of a workspace and associated variables."
weight: 20
---

# {{< param title >}}

## Summary

The scope of a variable defines where that variable is valid and accessible to the [flow execution][What-Is-Execution]. [Workspaces][What-Is-Workspace] have inherited scope; that is, a [flow execution][What-Is-Execution] not only has access to variables declared in that workspace but also to variables declared in a superior workspace.

## Scope Within Nested Workspaces

As [workspaces][What-Is-Workspace] have inherited scope, subordinate [workspaces][What-Is-Workspace] can access variables defined in a superior [workspace][What-Is-Workspace]. For example, a variable defined in a parent [workspace][What-Is-Workspace] can be accessed by its child [workspace][What-Is-Workspace]. Superior [workspaces][What-Is-Workspace], however, cannot access variables in subordinate [workspaces][What-Is-Workspace].

## Local Scope Variables

Local-scope variables may be declared in a [workspace][What-Is-Workspace], which are only accessible in that [workspace][What-Is-Workspace] or subordinate [workspaces][What-Is-Workspace].

Variables declared in the top-level [workspace][What-Is-Workspace] are global variables, and are accessible throughout the [flow][What-Is-Flow], including the [Flow Exception Handling][Block-Handle-Flow-Exception] [block][What-Is-Block].

If a local-scope variable has the same name as a variable declared in a superior [workspace][What-Is-Workspace], then only the local-scope variable may be accessed by the [flow execution][What-Is-Execution] until the subordinate workspace is exited.

When the [flow execution][What-Is-Execution] exits a [workspace][What-Is-Workspace], any local-scope variables that have been declared in that [workspace][What-Is-Workspace] are deleted and their values, if any, are lost.

### Making Values Accessible to Superior Workspaces

To make values calculated in subordinate [workspaces][What-Is-Workspace] accessible in a superior [workspace][What-Is-Workspace], the value must be stored in a variable declared in the superior [workspace][What-Is-Workspace], or a in a [workspace][What-Is-Workspace] that is superior to that in which the value is to be used.

## Related Concepts

* [Flows][Flow]
* [Flow Executions][What-Is-Execution]
* [Workspaces][What-Is-Workspace]

## Related Blocks

* [Flow Exception Handling block][Block-Handle-Flow-Exception]

[Block-Handle-Flow-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Block-Workspace-Block]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.WorkspaceBlock.MainDoc" >}}
[Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.MainDoc" >}}
[Flow-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.FlowExceptionHandling.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.WhatIsAnExecution.MainDoc" >}}
[What-Is-Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.WhatIsAFlow.MainDoc" >}}
[What-Is-Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.WhatIsAWorkspace.MainDoc" >}}
