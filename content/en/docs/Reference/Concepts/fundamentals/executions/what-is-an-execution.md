---
title: "What is an Execution?"
linkTitle: "What is an Execution?"
description: "Information regarding the anatomy of an execution."
weight: 1
---

# {{% param title %}}

## Summary

An execution represents a running instance of a [flow][], the execution moves through the flow sequentially executing each [block][] saving any outputs to [variables][variable]. A flow can have one or more executions running at any time, each with their own variables.

- See [Executions in Development][] for mor information regarding working with executions in [Cortex Studio][].
- See [Executions in Production][] for more information regarding running executions in the [Cortex Flow Execution Service][].

## Anatomy of an Execution

![Example Execution in Executions Grid](/images/execution-in-grid.PNG)

| Property | Notes | Example |
|----------|-------|---------|
| Status Icon | The Icon representing the current Status of the execution | A list of [statuses][Execution Status] can be found below |
| Started At | The date and time that the execution was started | `19 Aug 2022 12:00:00` |
| Updated At || `19 Aug 2022 12:00:01` |
| Status | The status of the execution | A list of [statuses][Execution Status] can be found below |
| Block Type | The block the execution is currently on | `Set Variable Block` |
| Block Description | The description of the block the execution is currently on | `Create Message` |
| Workspace Name | The name of the workspace the execution is currently in | `Top-Level Workspace` |
| Flow Name | The name of the flow the execution is currently running | `Flow-Name` |

![Example Child Execution in Executions Grid](/images/child-execution-in-grid.PNG)

When a [flow][] starts the execution of a child flow using the [Run Flow][TODO] block, any child executions will be shown within a tree in the [Executions Grid][]

### Execution Status

| Status | Description |
|-|-|
| Running | The execution is currently executing |
| PausedOnTopOfBlock | The execution is paused on top of a block - before the block starts to execute |
| PausedOnOutputPort | The execution is paused on the output port of a block - after the block has executed but before the execution has selected which block is next |
| PausedOnException | The execution is paused on an exception |
| Stopping | The execution is in the process of stopping - e.g. a long running block may have to finish before the execution is stopped |
| Stopped | The execution has ended after having been manually stopped |
| Ended | The execution has ended normally |
| Failed | The execution has ended after having thrown an exception that was not handled |

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

- [Flows][]
- [Blocks][]
- [Variables][]

### Related Data Types

- [All Data Types][]

### Related Blocks

- [All Blocks][]

### External Documentation

None

[Execution Status]: {{< ref "#execution-status" >}}

[Executions in Development]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInDevelopment.MainDoc" >}}
[Executions in Production]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInProduction.MainDoc" >}}

[Blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}

[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}

[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[All Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}

[All Data Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}

[Cortex Studio]: {{< url "Cortex.Guides.Studio.MainDoc" >}}
[Executions Grid]: {{< url "Cortex.Guides.Studio.SouthPanel.ExecutionsGrid" >}}

[Cortex Flow Execution Service]: {{< url "Cortex.Reference.Apis.FlowExecutionService.MainDoc" >}}
