---
title: "Handling Exceptions within a Block"
linkTitle: "Handling Exceptions within a Block"
description: "Information regarding handling exceptions within a block."
weight: 200
---

# {{% param title %}}

## Summary

Exceptions within a block can be handled at the following levels:

- The [block level][] (Highest Priority)
- The [workspace level][]
- The [flow level][] (Lowest Priority)

Exceptions thrown within the execution of a [block][] can be handled at the [block level][] by connecting any [Handle Block Exception block][] to the exception output port. Multiple [Handle Block Exception blocks][Handle Block Exception block] can be [chained][] to handle different exceptions.

For more information, see [Handling Exceptions][].

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

- [Flows][]
- [Workspaces][]
- [Blocks][block]
- [Exceptions][]

### Related Blocks

- [Handle Block Exception][Handle Block Exception block]

### External Documentation

None

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Handling Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[flow level]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.FlowLevel" >}}
[workspace level]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.WorkspaceLevel" >}}
[chained]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.ChainingExceptions" >}}
[block level]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.BlockLevel" >}}
[Handle Block Exception block]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.MainDoc" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Workspaces]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
