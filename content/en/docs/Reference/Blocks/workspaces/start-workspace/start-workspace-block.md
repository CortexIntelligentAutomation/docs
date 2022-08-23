---
title: "Start Workspace"
linkTitle: "Start Workspace"
description: "Indicates the start of a workspace."
---

{{< figure src="/blocks/workspaces-start-workspace-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Workspaces.StartWorkspace.StartWorkspaceBlock)</p>

## Description

Indicates the start of a workspace; when a flow execution reaches this block it will create a new [scope][WorkspaceScope] for the workspace.

This is always the first block in a workspace. It cannot be deleted, and a workspace can only contain one of these blocks.

The block has no block specific properties, but it does have the `Description` property that is common to all blocks. This allows users to give each block a description; typically this will be left blank for this block.

A breakpoint can be added to this block when debugging.

## Examples

No examples for the block.

## Properties

No properties for the block, other than the `Description` property that is common to all blocks.

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Workspace Scope

Each workspace has its own scope; as a result, variables can be defined that only exist and are accessible in this workspace and any of its sub-workspaces. On exiting a workspace any variables defined for the workspace's scope are deleted.

For information about variables and scope, please see [Working with Variables][].

[WorkspaceScope]: {{< ref "#workspace-scope" >}}

[Working with Variables]: {{< url "Cortex.Reference.Concepts.WorkingWithVariables.MainDoc" >}}
