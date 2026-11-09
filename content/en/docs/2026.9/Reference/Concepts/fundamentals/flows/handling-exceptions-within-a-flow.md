---
title: "Handling Exceptions within a Flow"
linkTitle: "Handling Exceptions within a Flow"
description: "Information regarding handling exceptions at different levels within a flow."
weight: 200
---

# {{% param title %}}

## Summary

Exceptions within a flow can be handled at the following levels:

- The [block level][] (Highest Priority)
- The [workspace level][]
- The [flow level][] (Lowest Priority)

The [Handle Flow Exception][] block, which is located on the top-level [workspace][], handles any exceptions that are not handled at the [block][block level] or [workspace level][].

For more information, see [Handling Exceptions][].

## Remarks

### Flow cannot be re-entered from the Handle Flow Exception Workspace

Is it not possible to re-enter a flow once a [flow execution][] enters the [workspace][] of the [Handle Flow Exception][] block.

### Known Limitations

None

## See Also

### Related Concepts

- [Flows][]
- [Workspaces][]
- [Blocks][]
- [Executions][]
- [Exceptions][]

### Related Blocks

- [Handle Flow Exception][]

### External Documentation

None

[Handle Flow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Handling Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[block level]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.BlockLevel" >}}
[flow level]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.FlowLevel" >}}
[workspace level]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.WorkspaceLevel" >}}

[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[flow execution]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}

[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}

[Workspaces]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}

[Handle Workspace Exception block]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleWorkspace.MainDoc" >}}
