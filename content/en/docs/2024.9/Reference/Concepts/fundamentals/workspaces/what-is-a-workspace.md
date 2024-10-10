---
title: "What is a Workspace?"
linkTitle: "What is a Workspace?"
description: "Information regarding the anatomy of a workspace, nested workspaces, variable scope, and handling exceptions within a workspace."
weight: 1
---

# {{% param title %}}

## Summary

A workspace is used to group logic and actions within a [flow][], in order to reduce the complexity and make the flow easier to maintain.

## Anatomy of a Workspace

### Top-Level Workspace

A flow can only contain one Top-Level Workspace, which acts as the entry point for the [flow execution][].

{{< figure src="/images/top-level-workspace-activity.svg" title="Example Top-Level Workspace" >}}

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
  * The turndown on the top-right of the icon indicates it contains a workspace, which can be opened by double-clicking the icon
  * See [Workspace][Workspace Block] block
* End Flow block
  * Ends the [flow execution][]
  * Automatically created when the flow is created
  * See [End Flow][] block
* Handle Flow Exception block
  * Handles [flow level exceptions][flow level], thrown during the [flow execution][]
  * Automatically created when the flow is created
  * The turndown on the top-right of the icon indicates it contains a workspace, which can be opened by double-clicking the icon
  * Cannot be deleted
  * See [Handle Flow Exception][] block
* Flow Variable Store
  * This is deprecated in favour of the [Variables Grid][]
  * The [Variables Grid][] can be opened by double-clicking the icon, the scope will be set to `Defined (Selected Workspace)`
  * Cannot be deleted
* Workspace
  * The Top-Level Workspace within the flow
  * Canvas on which blocks are placed and connected to create the flow logic

{{% alert title="Note" %}}
The flow should be ended with an {{< ahref path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" title="End Flow" >}} block, but it can also be ended using an {{< ahref path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" title="End Workspace" >}} block on the [Top-Level Workspace]({{< ref "#top-level-workspace" >}}).
{{% /alert %}}

### Other Workspaces

A flow can contain any number of other workspaces that are not the Top-Level Workspace, these act as a means to grouping logic and actions to reduce the complexity and make the flow easier to maintain.

{{< figure src="/images/nested-workspace.svg" title="Example Workspace" >}}

* Start Workspace block
  * Identifies where the [flow execution][] will start when the workspace is executed
  * Automatically created when the workspace is created
  * Cannot be deleted
  * See [Start Workspace][] block
* Action blocks
  * Performs a specific action
  * Icon on block indicates the nature of the action
  * See [Blocks][Reference Blocks]
* End Workspace block
  * Ends the execution of the workspace
  * Automatically created when the workspace is created
  * See [End Workspace][] block
* End Flow block
  * Ends the [flow execution][]
  * See [End Flow][] block
* Handle Workspace Exception block
  * Handles [workspace level exceptions][], thrown during the [flow execution][]
  * See [Handle Workspace Exception][] block
* Workspace Variable Store
  * This is deprecated in favour of the [Variables Grid][]
  * The [Variables Grid][] can be opened by double-clicking the icon, the scope will be set to `Defined (Selected Workspace)`
  * Cannot be deleted
* Workspace
  * A nested workspace within the flow
  * Canvas on which blocks are placed and connected to create the workspace logic

## Nested Workspaces

All the logic of a flow can exist on the [Top-Level Workspace][], however, this can quickly become difficult to maintain and understand as the numbers of blocks increase. Blocks can be grouped into workspaces in order to reduce the complexity and make the flow easier to maintain.

A [Workspace][Workspace Block] block can opened by double clicking it, showing its workspace canvas and the logic inside; this could include blocks for executing specific functions or other workspaces to help separate the logic of the flow further.

When an [End Workspace][] block is executed, the [flow execution][] returns to the parent workspace. However, when an [End Flow][] block is executed the [flow execution][] will end.

A nested workspace has access to any variables defined within its [scope][], or any direct ancestors [scope][].

## Exceptions within a Workspace

Workspaces support hierarchical exception handling at any level within the workspace.

Exceptions can be handled:

* At the [block][] level; for further information, see [Handling Exceptions within a Block][]
* At the workspace level; for further information, see [Handling Exceptions within a Workspace][]

A [Top-Level Workspace][] can also handle exceptions at the [flow][] level; for further information, see [Handling Exceptions within a Flow][]

## Remarks

### Known Limitations

#### Cannot have a Handle Workspace Exception block on the flow's Top-Level Workspace

Currently, it is not possible to have a [Handle Workspace Exception][] block on the [Top-Level Workspace][] of a flow. In future this limitation may be removed.

## See Also

### Related Concepts

* [Flows][]
* [Blocks][]
* [Executions][]
* [Exceptions][]

### Related Blocks

* [Start Flow][]
* [End Flow][]
* [Handle Flow Exception][]
* [Start Workspace][]
* [End Workspace][]
* [Handle Workspace Exception][]
* [Workspace][Workspace Block]

### External Documentation

None

[Top-Level Workspace]: {{< ref "#top-level-workspace" >}}

[Reference Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}
[Decision Blocks]: {{< url path="Cortex.Reference.Blocks.Decisions.MainDoc" >}}
[Handle Flow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Handle Workspace Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}
[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[Workspace Block]: {{< url path="Cortex.Reference.Blocks.Workspaces.Workspace.Workspace.MainDoc" >}}
[Start Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.StartWorkspace.StartWorkspace.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[Handling Exceptions within a Block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.HandlingExceptionsWithinABlock.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[workspace level exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.WorkspaceLevel" >}}

[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}

[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[Handling Exceptions within a Flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.HandlingExceptionsWithinAFlow.MainDoc" >}}
[flow execution]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[flow level]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.FlowLevel" >}}

[scope]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[Handling Exceptions within a Workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.HandlingExceptionsWithinAWorkspace.MainDoc" >}}

[Variables Grid]: {{< url path="Cortex.Guides.Studio.SouthPanel.VariablesGrid" >}}
