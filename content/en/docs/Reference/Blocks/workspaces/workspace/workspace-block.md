---
title: "Workspace"
linkTitle: "Workspace"
description: "Indicates a new workspace."
---

![Icon](/blocks/workspaces-workspace-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Workspaces.Workspace.WorkspaceBlock)</p>

## Description

This block indicates a new workspace; when a flow execution reaches this block it will move to the block's inner workspace, each workspace has its own [scope][WorkspaceScope].

The [Workspace][] block can be used to orginise block logic into smaller steps with a distinct functions. When a new [Workspace][] Block is placed on a flow, it will contain a [Start Workspace][] and [End Workspace][] within its inner workspace.

If a [Workspace][] block is copied and pasted its inner workspace is also copied, along with any data within the workspace and all [scoped][WorkspaceScope] variables.

The block has no block specific properties, but it does have the `Description` property that is common to all blocks. This allows users to give each block a description; typically this will be left blank for this block.

A breakpoint can be added to this block when debugging.

## Examples

No examples for the block.

## Properties

No properties for the block, other than the `Description` property that is common to all blocks.

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Block Restrictions

A workspace can contain any number of blocks. The only restrictions within a workspace are that there can only be one [Start Workspace][] block and one [Handle Workspace Exception][] block wthin a workspace, starting a flow that contains more than one of these blocks within a workspace will cause a [Translation Error][Translation Errors] to occur.

### Unhandled Exceptions

If an exception thrown by a block is not handled by any connected [Handle Block Exception blocks][], it will be passed to the [Handle Workspace Exception][] block on the same workspace.

If the workspace does not contain a [Handle Workspace Exception][] block it will be rethrown by the [Workspace][] block the workspace belongs to.

This process repeats until:

* The exception is handled, or
* The exception reaches the flow's top-level workspace, is not handled by any [Handle Block Exception blocks][] and the top-level workspace does not contain a [Handle Workspace Exception][] block. At this stage, the exception is handled by the flow's [Handle Flow Exception][] block.

If an exception occurs within the workspace of the [Handle Flow Exception][] block and is not handled, the flow will end with a status of Error.

![Icon](/images/flow-error-status.png)<br/><br/><br/>

For more information about chaining of exception handling blocks and passing of exceptions, please see [Exception Handling][].

### Workspace Scope

Each workspace has its own scope; as a result, variables can be defined that only exist and are accessible in this workspace and any of its sub-workspaces. On exiting a workspace any variables defined for the workspace's scope are deleted.

For information about variables and scope, please see [Working with Variables][].

[WorkspaceScope]: {{< ref "#workspace-scope" >}}

[Start Workspace]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.StartWorkspaceBlock.MainDoc" >}}
[End Workspace]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.EndWorkspaceBlock.MainDoc" >}}
[Workspace]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.WorkspaceBlock.MainDoc" >}}
[Handle Block Exception blocks]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.MainDoc" >}}
[Handle Flow Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Handle Workspace Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}

[Exception Handling]: {{< url "Cortex.Reference.Concepts.ExceptionHandling.MainDoc" >}}
[Translation Errors]: {{< url "Cortex.Reference.Concepts.TranslationErrors.MainDoc" >}}
[Working with Variables]: {{< url "Cortex.Reference.Concepts.WorkingWithVariables.MainDoc" >}}
[Working with Exceptions]: {{< url "Cortex.Reference.Concepts.WorkingWithExceptions.MainDoc" >}}
