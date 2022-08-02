---
title: "What is a Flow?"
linkTitle: "What is a Flow?"
description: "Information regarding the anatomy of a flow, starting flows, grouping logic within a flow, and handling exceptions within a flow."
weight: 1
---

# {{< param title >}}

## Summary

A flow is an object in [Cortex Studio][] that contains the logic and actions (in the form of [blocks][] and [workspaces][]) that is able to be executed on a Cortex Innovation platform.

## Anatomy of a Flow

| ![Example Flow](/images/Flow.png) |
|:--:|
| ***Example Flow*** |

* Start Flow block
  * Identifies where the [flow execution][] will start
  * Automatically created when the flow is created
  * Cannot be deleted
  * See [Start Flow][] block
* Action blocks
  * Performs a specific action
  * Icon on block indicates the nature of the action
  * See [Blocks][Reference Blocks]
* Decision block
  * Causes the [flow execution][] to branch, dependent on a condition
  * Icon on block indicates type of condition causing branching
  * See [Decision Blocks][Decision Blocks]
* Workspace blocks
  * Contains grouped flow logic
  * The turndown on the top-right of the icon indicates it contains a [workspace][], which can be opened by double-clicking the icon
  * See [Workspace][Workspace Block] block
* End Flow block
  * Ends the [flow execution][]
  * Automatically created when the flow is created
  * See [End Flow][] block
* Handle Flow Exception block
  * Handles [flow level exceptions][], thrown during the [flow execution][]
  * Automatically created when the flow is created
  * The turndown on the top-right of the icon indicates it contains a [workspace][workspaces], which can be opened by double-clicking the icon
  * Cannot be deleted
  * See [Handle Flow Exception][] block
* Flow Variable Store
  * This is deprecated in favour of the [Variable Grid][]
  * The [Variable Grid][] can be opened by double-clicking the icon, the scope will be set to `Defined (Selected Workspace)`
  * Cannot be deleted
* Workspace
  * The [Top-Level Workspace][] within the flow
  * Canvas on which blocks are placed and connected to create the flow logic
  * See [Workspace][workspaces]

## Grouping Logic within a Flow

All the logic of a flow can exist on the [Top-Level Workspace][], however, this can quickly become difficult to maintain and understand as the numbers of blocks increase. Blocks can be grouped into workspaces in order to reduce the complexity and make the flow easier to maintain.

A [Workspace][Workspace Block] block can opened by double clicking it, showing its workspace canvas and the logic inside; this could include blocks for executing specific functions or other workspaces to help separate the logic of the flow further.

For further information about [workspaces][workspace], see [Workspaces][workspaces].

## Starting a Flow Execution

A [flow execution][flow execution] may be [started][Starting an Execution] by:

* [Debugging][] a flow in [Cortex Studio][]
* Triggering it by making an HTTP request from an external source (e.g. a web application or web hooks)
* Triggering it using the [Run Flow][TODO] block
* Triggering it using predefined events (future) (e.g. on receipt of an email)
* Scheduling it to execute at predetermined times

For further information on starting a flow, see [Starting an Execution][].

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
* [Run Flow][TODO]
* [Handle Flow Exception][]
* [Handle Workspace Exception][]
* [Workspace][Workspace Block]

### External Documentation

None

[blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Handling Exceptions within a Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.HandlingExceptionsWithinABlock.MainDoc" >}}
[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Executions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[Handling Exceptions within a Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.HandlingExceptionsWithinAFlow.MainDoc" >}}
[flow level exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.FlowLevel" >}}
[Starting an Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.StartingAnExecution.MainDoc" >}}
[block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[flow execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[workspaces]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[Handling Exceptions within a Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.HandlingExceptionsWithinAWorkspace.MainDoc" >}}
[workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[Top-Level Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.TopLevelWorkspace" >}}

[Reference Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}
[Decision Blocks]: {{< url "Cortex.Reference.Blocks.Decisions.MainDoc" >}}
[Workspace Block]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.Workspace.MainDoc" >}}
[Handle Flow Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Handle Workspace Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}
[Start Flow]: {{< url "Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[End Flow]: {{< url "Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}

[Cortex Studio]: {{< url "Cortex.Guides.Studio.MainDoc" >}}
[Debugging]: {{< url "Cortex.Guides.Studio.Debugging.MainDoc" >}}
[Variable Grid]: {{< url "Cortex.Guides.Studio.SouthPanel.VariableGrid" >}}
