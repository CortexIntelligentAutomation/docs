---
title: "Calling Other Flows"
linkTitle: "Calling Other Flows"
description: "Initiating, and passing data to, another flow."
weight: 20
---

# {{< param title >}}

## Summary

Logic in one [executing flow][What-Is-Execution] may trigger the execution of another [flow][What-Is-Flow].

### Asynchronous vs Synchronous

An [executing flow][What-Is-Execution] may trigger the execution of other [flows][What-Is-Flow], either asynchronously (future) or synchronously.

When triggering a synchronous [flow execution][What-Is-Execution], the calling [flow][What-Is-Flow] will pause until the called [flow][What-Is-Flow] has completed its [execution][What-Is-Execution].

Triggering an asynchronous [flow execution][What-Is-Execution] will cause the called [flow][What-Is-Flow] to execute independently of the calling [flow][What-Is-Flow], which will continue its [execution][What-Is-Execution] simultaneously.

## Calling another flow

A [flow][What-Is-Flow] may trigger an [execution][What-Is-Execution] of another [flow][What-Is-Flow] directly, using the [Run Flow][TODO] [block][What-Is-Block]. Alternatively, a [flow execution][What-Is-Execution] may be triggered by making the appropriate HTTP request, targeting the API Gateway service, using an [Execute HTTP Request][TODO] [block][What-Is-Block].

## Exchanging Data

For both asynchronous and synchronous triggered [flows][What-Is-Flow], initialisation values can be passed from the calling [flow][What-Is-Flow] to [input variables][Input-Output] in the called [flow][What-Is-Flow].

In the case of a synchronous [flow execution][What-Is-Execution], values can be passed from [output variables][Input-Output] in the called [flow][What-Is-Flow] when it terminates, back to the calling [flow][What-Is-Flow].

Values from an asynchronous [flow execution][What-Is-Execution] cannot be passed back directly to the calling [flow][What-Is-Flow].

## Known Limitations

- Asynchronous flow execution is a future feature. This affects:
  - [Run Flow][TODO] block
  - [Execute HTTP Request][TODO] block
  - API Gateway service

## Related Concepts

- [Flows][What-Is-Flow]
- [Flow Executions][Execution]
- [Blocks][Block]
- [Input/Output Variables][Input-Output]

[Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.MainDoc" >}}
[Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.MainDoc" >}}
[Input-Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.StartingAnExecution.ExecutionVariables.InputOutput" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.WhatIsAnExecution.MainDoc" >}}
[What-Is-Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Flows.WhatIsAFlow.MainDoc" >}}
