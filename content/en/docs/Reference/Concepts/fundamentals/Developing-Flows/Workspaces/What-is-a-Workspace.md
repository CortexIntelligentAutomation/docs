---
title: "What is a Workspace"
linkTitle: "What is a Workspace"
description: "Description and characteristics of a Workspace."
weight: 10
---

# {{< param title >}}

## Summary

A workspace is a container for the [flow's][What-Is-Flow] logic. [Blocks][What-Is-Block] are dragged from palettes onto the workspace canvas and connected together to form the necessary logic.

The top-level workspace is automatically created when a [flow][What-Is-Flow] is created and contains:

* The [Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block] for handling [exceptions at the flow level][flow level]
* A [Start Flow][Block-Start-Flow] [block][What-Is-Block] to identify where the [flow execution][What-Is-Execution] begins
* An [End Flow][Block-End-Flow] [block][What-Is-Block] to end the [flow execution][What-Is-Execution] after the [flow][What-Is-Flow] logic has been executed

## Nested Workspaces

Workspaces may be nested, i.e., a workspace can contain one or more other workspaces, which in turn can contain further workspaces. Using this hierarchical workspace structure provides a high-level overview of the [flow's][What-Is-Flow] logic while obfuscating the low-level detailed logic contained in the subordinate workspaces.

Subordinate workspaces may be added by placing [workspace blocks][Block-Workspace-Block] onto a workspace canvas, connected to the [flow's][What-Is-Flow] logic. Double-clicking on a [workspace block][Block-Workspace-Block] will open it to reveal its canvas, which is used to contain the low-level detailed logic.

When a [flow execution][What-Is-Execution] in a workspace encounters an [End Workspace][Block-End-Workspace] [block][What-Is-Block], the [flow execution][What-Is-Execution] returns to the superior workspace. As the top-level workspace does not have a superior workspace, its logic should be ended with an [End Flow][Block-End-Flow] [block][What-Is-Block].

Note: A [flow execution][What-Is-Execution] may be ended at any point in any workspace using an [End Flow][Block-End-Flow] [block][What-Is-Block].

## Limited Scope Variables

Limited scope variables may be declared within a workspace, which are not accessible to higher level workspaces.

For more details on variable scope within workspaces, see [Scope][Workspace-Scope].

## Exception Handling

Each workspace can contain its own exception handling logic, including [Handle Block Exception][Block-Handle-Block-Exception] [blocks][What-Is-Block] and a [Handle Workspace Exception][Block-Handle-Workspace-Exception] [block][What-Is-Block].

For more details, see [Workspace Exception Handling][Workspace-Exception-Handling].

## Related Concepts

* [Flows][Flow]
* [Blocks][Block]
* [Workspace Scope][Workspace-Scope]
* [Workspace Exception Handling][Workspace-Exception-Handling]

## Related Blocks

* [Start Flow][Block-Start-Flow]
* [End Flow][Block-End-Flow]
* [Workspace Blocks][Block-Workspace-Block]
* [Handle Block Exception][Block-Handle-Block-Exception]
* [Handle Workspace Exception][Block-Handle-Workspace-Exception]

[Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.MainDoc" >}}
[Block-End-Flow]: {{< url "Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[Block-End-Workspace]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.EndWorkspaceBlock.MainDoc" >}}
[Block-Handle-Block-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Block-Handle-Flow-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Block-Handle-Workspace-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}
[Block-Start-Flow]: {{< url "Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[Block-Workspace-Block]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.WorkspaceBlock.MainDoc" >}}
[Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.MainDoc" >}}
[flow level]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.Exceptions.FlowLevel" >}}

[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.WhatIsAFlow.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.WhatIsAnExecution.MainDoc" >}}
[Workspace-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.Workspace-Exception-Handling.MainDoc" >}}
[Workspace-Scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.Scope.MainDoc" >}}
