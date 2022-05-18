---
title: "What is a Flow"
linkTitle: "What is a Flow"
description: "Description of a flow and its characteristics."
weight: 10
---

# {{< param title >}}

## Summary

A flow is a self-contained Cortex object that contains the logic necessary to implement an automated [process][TODO]. In the context of a Service Catalog, a flow would map to a Service Request.

## Starting a flow execution

A [flow execution][What-Is-Execution] may be [started][Start-Execution] by:

* Scheduling it to execute at predetermined times
* Triggering it by a predefined series of events (future)
* Triggering it as part of the logic of other flows
* Remotely triggering it by an HTTP request

For further information on starting a flow, see [Starting an Execution][Start-Execution].

## Anatomy of a flow

| ![Example Flow](/images/Flow.png) |
|:--:|
| ***Example Flow*** |

* **[Start Flow][Block-Start-Flow] [block][What-Is-Block]**
  * Identifies where the [flow execution][What-Is-Execution] will start
  * Automatically created when the flow is created
* **Action type [block][What-Is-Block]**
  * Performs a specific action
  * Icon on [block][What-Is-Block] indicates the nature of the action
  * Can display optional description text
* **Decision type [block][What-Is-Block]**
  * Causes the [flow execution][What-Is-Execution] to branch, dependent on a condition
  * Icon on [block][What-Is-Block] indicates type of condition causing branching
  * Can display optional description text
* **[Workspace][What-Is-Workspace] [blocks][What-Is-Block]**
  * Containers of detailed flow logic
  * The turndown on the top-right of the icon indicates that it contains a [workspace][What-Is-Workspace] canvas, which may be opened by double-clicking the icon
* **[End Flow][Block-End-Flow] [block][What-Is-Block]**
  * Ends the [flow execution][What-Is-Execution]
  * Automatically created when the flow is created
* **[Handle Flow Exception][Block-Handle-Flow-Exception] [block][What-Is-Block]**
  * Handles [flow level][] exceptions, thrown during the [flow execution][What-Is-Execution]
  * Automatically created when the flow is created
  * The turndown on the top-right of the icon indicates that it contains a [workspace][What-Is-Workspace] canvas, which may be opened by double-clicking the icon
* **Global Variable Store**
  * Object is deprecated in favour of the Variables Editor
* **[Workspace][Workspace]**
  * Canvas on which blocks are placed and connected to create the flow logic

## Logic within a flow

The logic of a flow may be grouped into sections, with each section contained in a [workspace][What-Is-Workspace], creating a visual hierarchy of the flow's actions; this enables a high-level view of the flow's logic, which can be expanded to increasing levels of detail by opening [workspaces][What-Is-Workspace] in the hierarchy. This not only makes it easier to understand the overall logic of the flow, but also ensures easy maintainability.

For further information about [workspaces][What-Is-Workspace], see [Workspaces][Workspace].

## Exceptions within a flow

Flows support hierarchical exception handling for internal and external exceptions, at any level within the flow.

Exceptions can be handled:

* At the [block][What-Is-Block] level; for further information, see [Block Exception Handling][Block-Exception-Handling]
* At the [workspace][What-Is-Workspace] level; for further information, see [Workspace Exception Handling][Workspace-Exception-Handling]
* At the flow level; for further information, see [Flow Exception Handling][Flow-Exception-Handling]

## Related Concepts

* [Workspaces][Workspace]
* [Blocks][Block]
* [Executions][Execution]
* [Exceptions][Exception]

## Related Blocks

* [Start Flow][Block-Start-Flow]
* [End Flow][Block-End-Flow]
* [Handle Flow Exception][Block-Handle-Flow-Exception]

[Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.MainDoc" >}}
[Block-End-Flow]: {{< url "Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[Block-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.BlockExceptionHandling.MainDoc" >}}
[Block-Handle-Flow-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Block-Start-Flow]: {{< url "Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[Exception]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.Exceptions.MainDoc" >}}
[Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.MainDoc" >}}
[Flow-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.FlowExceptionHandling.MainDoc" >}}
[flow level]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.Exceptions.FlowLevel" >}}
[Start-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.StartingAnExecution.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.WhatIsAnExecution.MainDoc" >}}
[What-Is-Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.MainDoc" >}}
[Workspace-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.WorkspaceExceptionHandling.MainDoc" >}}
