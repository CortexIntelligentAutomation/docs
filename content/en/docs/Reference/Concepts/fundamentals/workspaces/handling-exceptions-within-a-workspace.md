---
title: "Handling Exceptions within a Workspace"
linkTitle: "Handling Exceptions within a Workspace"
description: "Information regarding handling exceptions at different levels within a workspace."
weight: 100
---

# {{< param title >}}

## Summary

Exceptions within a workspace can be handled at the following levels:

- The [block level][] (Highest Priority)
- The [workspace level][]
- The [flow level][] (Lowest Priority)

A single [Handle Workspace Exception][] block may be placed on a [workspace][] to handle any exceptions that are not handled at the [block level][].

For more information, see [Handling Exceptions at the Workspace Level][workspace level].

## Remarks

### Known Limitations

#### Handle Workspace Exception block can only be used once per execution of a Workspace

The [Handle Workspace Exception][] block will only handle the first unhandled exception within its workspace. Subsequent unhandled exceptions are passed to the next relevant exception handling block. In future this limitation may be removed.

## See Also

### Related Concepts

- [Flows][]
- [Workspaces][]
- [Blocks][]
- [Executions][]
- [Exceptions][]

### Related Blocks

- [Handle Workspace Exception][]

### External Documentation

None

[Handle Workspace Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}

[Blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}

[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[block level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.BlockLevel" >}}
[flow level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.FlowLevel" >}}
[workspace level]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.WorkspaceLevel" >}}

[Executions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[flow execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}

[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}

[Workspaces]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
