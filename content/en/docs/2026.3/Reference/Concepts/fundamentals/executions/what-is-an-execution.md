---
title: "What is an Execution?"
linkTitle: "What is an Execution?"
description: "Information regarding the anatomy of an execution."
weight: 1
---

# {{% param title %}}

## Summary

An execution represents a running instance of a [flow][], the execution moves through the flow sequentially executing each [block][] saving any outputs to [variables][variable]. A flow can have one or more executions running at any time, each with their own variables.

- See [Executions in Development][] for more information regarding working with executions in [{{% ctx %}} Gateway][CORTEX Gateway].
- See [Executions in Production][] for more information regarding running executions in the [Execution Service][].

## Anatomy of an Execution

{{< figure src="/images/execution-in-grid.PNG" >}}

| Property          | Notes                                                      | Example                                                   |
|-------------------|------------------------------------------------------------|-----------------------------------------------------------|
| Status Icon       | The Icon representing the current Status of the execution  | A list of [statuses][Execution Status] can be found below |
| Started At        | The date and time that the execution was started           | `6 Sep 2022 09:27:45`                                     |
| Updated At        | The date and time of the last update for the execution     | `6 Sep 2022 09:27:46`                                     |
| Status            | The status of the execution                                | A list of [statuses][Execution Status] can be found below |
| Block Type        | The block the execution is currently on                    | `Set Variable`                                            |
| Block Description | The description of the block the execution is currently on | `Set Variable`                                            |
| Workspace Name    | The name of the workspace the execution is currently in    | `Setup and Run Child-Flow`                                |
| Flow Name         | The name of the flow the execution is currently running    | `Parent-Flow`                                             |

When a [flow][] starts the execution of a child flow using the [Run Flow][] block, any child executions will be shown within a tree in the [Executions Grid][], for example:

{{< figure src="/images/child-execution-in-grid.PNG" >}}

### Execution Status

| Status    | Description                                                                                                                                    |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Running   | The execution is currently executing                                                                                                           |
| Pausing   | The execution is in the process of pausing - e.g. a long running block may have to finish before the execution is paused                       |
| Paused    | The execution is paused on top of a block - before the block starts to execute                                                                 |
|           | The execution is paused at a breakpoint on top of a block - before the block starts to execute                                                 |
|           | The execution is paused on the output port of a block - after the block has executed but before the execution has selected which block is next |
| Exception | The execution is paused on the exception output port - after the block has thrown an exception when `break on exception` is turned on          |
| Stopping  | The execution is in the process of stopping - e.g. a long running block may have to finish before the execution is stopped                     |
| Stopped   | The execution has ended after having been manually stopped                                                                                     |
| Ended     | The execution has ended normally                                                                                                               |
| Error     | The execution has ended after having thrown an exception that was not handled                                                                  |

## Execution Context

Executions have their own context that contains specific information about the current execution. This can be accessed via the built-in `_executionContext` [variable][] and currently contains the following properties:

- [Initiator][]
- [Extensions][]

### Initiator

The initiator is a read-only property that contains the following information about the user that initiated the execution:

- `Name`: The name of the user that initiated the execution.
- `AuthenticationType`: The authentication type of the user that initiated the execution.
- `IsAuthenticated`: A boolean value indicating if the user that initiated the execution is authenticated. This should always be `true`.
- `Claims`: A list of claims associated with the user that initiated the execution.

The values can be accessed using [property expression][] or dictionary [index expressions][] syntax, as follows:

```csharp
($)_executionContext.Initiator.Name
```

```csharp
($)_executionContext.Initiator["Name"]
```

### Extensions

The `Extensions` property can be used to store additional information. This data will be accessible to all blocks within the execution, including child executions.

A value can be added to the `Extensions` property using the [expression editor][], using the dictionary [index expressions][] syntax, for example:

```csharp
($)_executionContext.Extensions["key"] = "value";
```

The value can be accessed in the same way, for example:

```csharp
($)_executionContext.Extensions["key"]
```

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
[Extensions]: {{< ref "#extensions" >}}
[Initiator]: {{< ref "#initiator" >}}

[Executions in Development]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInDevelopment.MainDoc" >}}
[Executions in Production]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInProduction.MainDoc" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}

[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}

[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}

[All Data Types]: {{< url path="Cortex.Reference.DataTypes.MainDoc" >}}

[CORTEX Gateway]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.MainDoc" >}}
[Executions Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.ExecutionsGrid.MainDoc" >}}

[Execution Service]: {{< url path="Cortex.Reference.Apis.CortexInnovation.ExecutionApplication.Services.ExecutionService.MainDoc" >}}

[Run Flow]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlow.MainDoc" >}}

[expression editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[index expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.IndexExpressions" >}}
[Property expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.PropertyExpressions" >}}
