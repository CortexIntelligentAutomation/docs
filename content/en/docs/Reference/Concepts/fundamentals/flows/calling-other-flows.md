---
title: "Calling Other Flows"
linkTitle: "Calling Other Flows"
description: "Information regarding calling, and passing data to, other flows."
weight: 100
---

# {{< param title >}}

## Summary

A [flow][] may trigger the execution of another [flow][].

## Calling Another Flow

A [flow][] can be called from another [flow][] in the following ways:

- Using the [Run Flow][TODO] block to trigger the execution of another flow directly
- Using the [Execute HTTP Request][TODO] block to trigger a flow through the API Gateway service (this should only be used to call [flows][flow] published in a separate Cortex platform)

### Input Variables

Sometimes [flows][flow] require data to be passed to them through the use of input variables (e.g. a flow used to log errors may require a file path for where the logs are saved).

Input variables can be passed into flows in the following ways:

- For the [Run Flow][TODO] block, input variables are configured using the Inputs property; for more information see [Run Flow Inputs Example][TODO]
- For the [Execute HTTP Request][TODO] block, input variables are configured within the body of the HttpRequest; for more information see [Http Request Inputs Example][TODO]

### Output Variables

Sometimes [flows][flow] may return data through the use of output variables (e.g. a flow used to interact with a database may return its results).

Output variables are returned to the calling flow in the following ways:

- For the [Run Flow][TODO] block, output variables are saved to the Outputs property; for more information see [Run Flow Outputs Example][TODO]
- For the [Execute HTTP Request][TODO] block, output variables are returned within the ResponseBody of the HttpResponse property; for more information see [Http Request Outputs Example][TODO]

## Remarks

### Known Limitations

#### Flows can only be Called Synchronously

Currently it is only possible to call other [flows][flow] synchronously; this means the calling flow will wait for the called flow to complete its [execution][] before continuing.

In the future it will be possible to call flows asynchronously; this means the calling flow will continue after the called flow starts its [execution][] without waiting for the called flow to complete.

## See Also

### Related Concepts

- [Flows][]
- [Blocks][]
- [Executions][]

### Related Blocks

- [Run Flow][TODO]
- [Execute HTTP Request][TODO]

### External Documentation

None

[Blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[Executions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
