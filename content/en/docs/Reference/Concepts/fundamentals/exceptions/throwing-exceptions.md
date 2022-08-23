---
title: "Throwing Exceptions"
linkTitle: "Throwing Exceptions"
description: "Information regarding throwing an exception within a flow, and scenarios when it is useful to throw an exception."
weight: 200
---

# {{< param title >}}

## Summary

A developer can throw an exception as part of a [flow][].

Scenarios where throwing exceptions is useful include:

- A developer throwing a new exception when a flow reaches a state where it cannot complete its defined functionality
- A developer enriching an exception that has already been thrown to provide more clarity and/or detail

For information about throwing an exception, please see the [Throw New Flow Exception][] block.

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

- [Flows][]
- [Blocks][]

### Related Blocks

- [Throw New Flow Exception][]

### External Documentation

None

[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}

[Blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}

[Throw New Flow Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.ThrowException.ThrowNewFlowException.MainDoc" >}}