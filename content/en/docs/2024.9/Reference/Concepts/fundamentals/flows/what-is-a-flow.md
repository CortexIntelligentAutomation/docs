---
title: "What is a Flow?"
linkTitle: "What is a Flow?"
description: "Information regarding the anatomy of a flow, starting flows, grouping logic within a flow, and handling exceptions within a flow."
weight: 1
---

# {{% param title %}}

## Summary

A flow is an object in [{{% ctx %}} Studio][CORTEX Studio] that contains the logic and actions (in the form of [blocks][] and [workspaces][]) that is able to be executed on a {{% ctx %}} platform.

## Anatomy of a Flow

There are two types of flows, which are used for different purposes:

* [Process][]
* [Activity][]

### Process

Processes are a type of [Flow][] that can contain multiple [Activities][Activity] and are used to model high-level business processes.  

{{< figure src="/images/top-level-workspace-process.svg" title="Example Process" >}}

* Processes flow from left to right
* Processes can call other processes
* Processes can call activities
* Processes only contain a subset of blocks as they are intended to model high-level business processes, not low-level implementation of tasks or actions

### Activity

Activities are a type of [Flow][] that can be used to model low-level tasks or actions.

{{< figure src="/images/top-level-workspace-activity.svg" title="Example Activity" >}}

* Activities flow from top to bottom
* Activities can call other activities
* Activities cannot call processes
* Activities contain all blocks as they are intended to model low-level tasks or actions

## Composition of a Flow

Flows are composed of the following:

* [Workspace][Workspace ref]
* [Start Flow block][]
* [Action blocks][]
* [Decision blocks][Decision blocks ref]
* [Workspace blocks][]
* [End Flow block][]
* [Handle Flow Exception block][]

### Workspace

The [Top-Level Workspace][] within the flow.

* Canvas on which blocks are placed and connected to create the flow logic
* See [Workspace][workspaces]

### Start Flow block

Identifies where the [flow execution][] will start.

* Automatically created when the flow is created
* Cannot be deleted
* See [Start Flow][] block

### Action blocks

Performs a specific action.

* Icon on block indicates the nature of the action
* See [Blocks][Reference Blocks]

### Decision block

Causes the [flow execution][] to branch, dependent on a condition.

* See [Decision Blocks][Decision Blocks]

### Workspace blocks

Contains grouped flow logic.

* See [Workspace][Workspace Block] block

### End Flow block

Ends the [flow execution][].

* Automatically created when the flow is created
* See [End Flow][] block

### Handle Flow Exception block

Handles [flow level exceptions][], thrown during the [flow execution][].

* Automatically created when the flow is created
* Cannot be deleted
* See [Handle Flow Exception][] block

## Grouping Logic within a Flow

All the logic of a flow can exist on the [Top-Level Workspace][], however, this can quickly become difficult to maintain and understand as the numbers of blocks increase. Blocks can be grouped into workspaces in order to reduce the complexity and make the flow easier to maintain.

A [Workspace][Workspace Block] block can opened by double clicking it, showing its workspace canvas and the logic inside; this could include blocks for executing specific functions or other workspaces to help separate the logic of the flow further.

For further information about [workspaces][workspace], see [Workspaces][workspaces].

## Starting a Flow Execution

A [flow execution][flow execution] may be started by:

* [Debugging][] a flow in [{{% ctx %}} Studio][CORTEX Studio]
* Triggering it by making an HTTP request from an external source (e.g. a web application or web hooks)
* Triggering it using the [Run Flow][] and [Run Flow Async][] block
* Triggering it using predefined events (future) (e.g. on receipt of an email)
* Scheduling it to execute at predetermined times

## Exceptions within a Flow

Flows support hierarchical exception handling at any level within the flow.

Exceptions can be handled:

* At the [block][] level; for further information, see [Handling Exceptions within a Block][]
* At the [workspace][] level; for further information, see [Handling Exceptions within a Workspace][]
* At the flow level; for further information, see [Handling Exceptions within a Flow][]

## Remarks

### Known Limitations

#### Cannot have a Handle Workspace Exception block on the flow's Top-Level Workspace

Currently, it is not possible to have a [Handle Workspace Exception][] block on the [Top-Level Workspace][] of a flow. In future this limitation may be removed.

## See Also

### Related Concepts

* [Workspaces][workspaces]
* [Blocks][blocks]
* [Executions][]
* [Exceptions][]

### Related Blocks

* [Start Flow][]
* [End Flow][]
* [Run Flow][]
* [Run Flow Async][]
* [Handle Flow Exception][]
* [Handle Workspace Exception][]
* [Workspace][Workspace Block]

### External Documentation

None

[Activity]: {{< ref "#activity" >}}
[Process]: {{< ref "#process" >}}
[Flow]: {{< ref "#summary" >}}

[Start Flow block]: {{< ref "#start-flow-block" >}}
[Action blocks]: {{< ref "#action-blocks" >}}
[Decision blocks ref]: {{< ref "#decision-block" >}}
[Workspace blocks]: {{< ref "#workspace-blocks" >}}
[End Flow block]: {{< ref "#end-flow-block" >}}
[Handle Flow Exception block]: {{< ref "#handle-flow-exception-block" >}}
[Workspace ref]: {{< ref "#workspace" >}}

[blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Handling Exceptions within a Block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.HandlingExceptionsWithinABlock.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[Handling Exceptions within a Flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.HandlingExceptionsWithinAFlow.MainDoc" >}}
[flow level exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.FlowLevel" >}}
[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[flow execution]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[workspaces]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[Handling Exceptions within a Workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.HandlingExceptionsWithinAWorkspace.MainDoc" >}}
[workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[Top-Level Workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.TopLevelWorkspace" >}}

[Reference Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}
[Decision Blocks]: {{< url path="Cortex.Reference.Blocks.Decisions.MainDoc" >}}
[Workspace Block]: {{< url path="Cortex.Reference.Blocks.Workspaces.Workspace.Workspace.MainDoc" >}}
[Handle Flow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Handle Workspace Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}
[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}

[CORTEX Studio]: {{< url path="Cortex.Guides.Studio.MainDoc" >}}
[Debugging]: {{< url path="Cortex.Guides.Studio.Debugging.MainDoc" >}}

[Run Flow]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlow.MainDoc" >}}

[Run Flow Async]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlowAsync.MainDoc" >}}
