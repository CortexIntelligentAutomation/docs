---
title: "Throwing Exceptions"
linkTitle: "Throwing Exceptions"
description: "This page provides guidance on how to throw custom exceptions"
weight: 3
---

# {{< param title >}}

## Summary

[Exceptions][what-is-exception] can be thrown as part of the [flow's][Flow] logic, using the [Throw New Flow Exception][Block-Throw-Exception] block.

Scenarios where intentionally throwing exceptions is useful include:

- When the [flow][] is unable to complete as intended e.g. Input variables have invalid values
- Wrapping other [exceptions][what-is-exception] e.g. Adding information to a third party error

## Throwing an Exception

For information about throwing an exception, please see [Throw New Flow Exception][Block-Throw-Exception] block.

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

- [Exceptions][what-is-exception]
- [Flows][]

### Related Data Types

- [Flow Exception][]

### Related Blocks

- [Throw New Flow Exception][Block-Throw-Exception]

[Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.MainDoc" >}}
[Block-Throw-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.ThrowException.ThrowNewFlowException.MainDoc" >}}
[Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.WhatIsAnExecution.MainDoc" >}}
[what-is-exception]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}
[Flow Exception]: {{< url "Cortex.Reference.Exceptions.FlowException.MainDoc">}}
[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.WhatIsAFlow.MainDoc" >}}
