---
title: "What is an Execution?"
linkTitle: "What is an Execution?"
description: "Information regarding what an execution is, and working with executions in both debugging and production."
weight: 1
---

# {{< param title >}}

## Summary

An execution represents a running instance of a [flow][], the execution moves through the flow sequentially executing each [block][] saving any outputs to [variables][variable]. A flow can have one or more executions running at any time, each with their own variables.

## Debugging

Whilst debugging a flow, each execution is represented by a [token][] that moves through the [flow][], showing which [block][] is currently being executed.

A [flow][] can be debugged in [Cortex Studio][] by clicking the [Start an execution][] button or by making an [API call][API call: Cortex Studio] to [Cortex Studio][], [providing input variables][Providing Input Variables: Debugging] to the flow, if required; this will [validate the flow][Validating a Flow: Debugging] a   nd then begin an execution.

The following parameters can be specified:

- Show execution on workspace - when this is `true`, the token will be shown at every step throughout the [flow][], otherwise the token will only be shown when the execution [pauses][Paused], hits a [breakpoint][], or an exception occurs when `Break on exception` is `true`
- Break on exception - when this is `true` the execution will [pause][Paused] when an exception occurs

### Providing Input Variables

Any flow that has [Input Variables][] defined requires them to be provided when debugging, these may be provided to a flow in the following ways:

- From [Cortex Studio][] using the [Inputs Property][] in the [Settings Editor][]
- From an [HTTP request][HTTP request: Cortex Studio] using the inputVariables in the body of the request

### Retrieving Output Variables

Any flow that has [Output Variables][] defined can have those variables retrieved after the execution has completed by using the outputVariables in the body of the [HTTP response][HTTP response: Cortex Studio].

### Validating a Flow

The [flow][] is validated before it's debugged, if this is successful an execution will begin.

If there are any issues with the flow then the execution will not start and details of what needs to be resolved will be returned. If the flow was debugged by clicking the [Start an execution][] button, then entries will be displayed in the [Messages Grid][]; if it was debugged by making an [HTTP request][HTTP request: Cortex Studio] to [Cortex Studio][], then a 400 Bad Request is returned.

### Selecting an Execution

One or more executions can be selected within [Cortex Studio][] by clicking on their [token][], or selecting them using the [Executions Grid][]. This allows:

- [Interacting with an Execution][]
- [Viewing an Execution's Variables][]
- [Viewing an Execution's Exceptions][]

### Interacting with an Execution

Once executions are [selected][Selecting an Execution] in [Cortex Studio][] they can be interacted with in the following ways:

- [Paused][]
- [Stepped][]
- [Continued][]
- [Stopped][]

#### Set Next Block to Execute

[Set Next Block to Execute][] allows a developer to choose which [block][] will be executed next for the selected execution, even if this block is not connected to the [flow][].

Examples of what this can be used to do whilst debugging include:

- Retrying a block due to a transient exception such as network connectivity
- Retrying a block after using [Edit and Continue][Edit and Continue an Execution] to fix an incorrectly configured block
- Skipping over functionality that is not yet working
- Skipping to specific functionality within the flow in order to test it
- Running logic that is not part of the flow (e.g. running a clean up script to reset any external data sources for the next execution of the flow)

Currently, Set Next Block to Execute is not available when [multiple executions are selected][], or the [block and execution are on different workspaces][].

#### Edit and Continue an Execution

[Edit and Continue][] allows a developer to pause all executions, and make changes to the [flow][] before continuing debugging.

Examples of what this can be used to do whilst debugging include:

- Making changes such as adding, updating and removing: [blocks][block], [connections][], [variables][variable]
- Fixing an incorrectly configured block

Currently when using Edit and Continue, it is not possible to [directly change the value of a variable without using a block][].

### Viewing an Execution's Variables

When debugging a [flow][] in [Cortex Studio][], [selecting an execution][Selecting an Execution] will display all initialised [variables][variable] that are in [scope][] in the [Variables Viewer][].

To see the data in a variable, select the variable in the [Variables Viewer][] and the data will be presented in the [Variable Details Viewer][]. If the data is large enough to negatively affect the performance of [Cortex Studio][] it will not be displayed unless the [Load Value Button][] is clicked.

### Viewing an Execution's Exceptions

When debugging a [flow][] in [Cortex Studio][], [selecting an execution][Selecting an Execution] will display all [exceptions][exception] that have been thrown for that execution in the [Exceptions Viewer][].

In future, it will be possible to navigate to the block that caused the exception.

### Logs Generated

There are two ways that logs are generated while debugging a [flow][], they are:

- Automatically generated by the [Cortex Flow Debugger Service][]
- Developer generated by using the [Log Event][] block

## Production

A [flow][] can be started in Production by making an [API call][API call: Cortex API Gateway] to the [Cortex API Gateway Service][], [providing input variables][Providing Input Variables: Production] to the flow, if required; this will [validate the flow][Validating a Flow: Production] and then begin an execution.

### Providing Input Variables

Any flow that has [Input Variables][] defined can have those variables provided by using the inputVariables in the body of the [HTTP request][HTTP request: Cortex API Gateway Service].

### Retrieving Output Variables

Any flow that has [Output Variables][] defined can have those variables retrieved after the execution has completed by using the outputVariables in the body of the [HTTP response][HTTP response: Cortex API Gateway Service]

### Validating a Flow

The [flow][] is validated before it's started, if this is successful an execution will begin.

If there are any issues with the flow then the execution will not start and details of what needs to be resolved will be returned. If the flow was started by making an [HTTP request][HTTP request: Cortex API Gateway Service] to the [Cortex API Gateway Service][], then a 400 Bad Request is returned.

### Logs Generated

There are two ways that logs are generated while executing a [flow][] in Production, they are:

- Automatically generated by the [Cortex API Gateway Service][]
- Developer generated by using the [Log Event][] block

## Remarks

### Known Limitations

#### Updating a Variable's value is not possible without using a Block

When using [Edit and Continue][], it is not possible to directly change the value of a [variable][] without using a [block][].

In future this limitation may be removed.

#### Set Next Block to Execute not available when multiple Executions are selected

It is not possible to use [Set Next Block to Execute][] when there are multiple executions selected on the same [workspace][].

In future this limitation may be removed.

#### Set Next Block to Execute not available when the Block and Execution are on different Workspaces

It is not possible to use [Set Next Block to Execute][] when the selected execution is not on the same [workspace][] as the [block][] being set next to execute.

In future this limitation may be removed.

## See Also

### Related Concepts

- [Flows][]
- [Workspaces][]
- [Blocks][]
- [Variables][]
- [Data Types][]
- [Exceptions][]
- [Messages][]

### Related Data Types

- [All Data Types][]

### Related Blocks

- [All Blocks][]

### External Documentation

None

[Providing Input Variables: Debugging]: {{< ref "#providing-input-variables" >}}
[Validating a Flow: Debugging]: {{< ref "#validating-a-flow" >}}
[Interacting with an Execution]: {{< ref "#interacting-with-an-execution" >}}
[Viewing an Execution's Variables]: {{< ref "#viewing-an-executions-variables" >}}
[Viewing an Execution's Exceptions]: {{< ref "#viewing-an-executions-exceptions" >}}
[Selecting an Execution]: {{< ref "#selecting-an-execution" >}}
[Edit and Continue an Execution]: {{< ref "#edit-and-continue-an-execution" >}}
[multiple executions are selected]: {{< ref "#set-next-block-to-execute-not-available-when-multiple-executions-are-selected" >}}
[block and execution are on different workspaces]: {{< ref "#set-next-block-to-execute-not-available-when-the-block-and-execution-are-on-different-workspaces" >}}
[directly change the value of a variable without using a block]: {{< ref "#updating-a-variables-value-is-not-possible-without-using-a-block" >}}
[Providing Input Variables: Production]: {{< ref "#providing-input-variables-1" >}}
[Validating a Flow: Production]: {{< ref "#validating-a-flow-1" >}}

[Blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[connections]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.BlockConnections" >}}

[Data Types]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.MainDoc" >}}

[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[exception]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}

[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}

[Messages]: {{< url "Cortex.Reference.Concepts.Fundamentals.Messages.MainDoc" >}}
[message]: {{< url "Cortex.Reference.Concepts.Fundamentals.Messages.WhatIsAMessage.MainDoc" >}}

[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[Input Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}
[Output Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.OutputVariablesStructure" >}}

[Workspaces]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}

[All Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}
[Log Event]: {{< url "Cortex.Reference.Blocks.Logs.LogEvent.LogEvent.MainDoc" >}}

[All Data Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}

[API call: Cortex Studio]: {{< url "Cortex.Reference.Apis.Studio.MainDoc" >}}
[HTTP request: Cortex Studio]: {{< url "Cortex.Reference.Apis.Studio.MainDoc" >}}
[HTTP response: Cortex Studio]: {{< url "Cortex.Reference.Apis.Studio.MainDoc" >}}
[Cortex API Gateway Service]: {{< url "Cortex.Reference.Apis.ApiGatewayService.MainDoc" >}}
[API call: Cortex API Gateway]: {{< url "Cortex.Reference.Apis.ApiGatewayService.MainDoc" >}}
[HTTP request: Cortex API Gateway Service]: {{< url "Cortex.Reference.Apis.ApiGatewayService.MainDoc" >}}
[HTTP response: Cortex API Gateway Service]: {{< url "Cortex.Reference.Apis.ApiGatewayService.MainDoc" >}}

[Cortex Flow Debugger Service]: {{< url "Cortex.Reference.Logs.CortexFlowDebuggerService" >}}

[Cortex Studio]: {{< url "Cortex.Guides.Studio.MainDoc" >}}
[Set Next Block to Execute]: {{< url "Cortex.Guides.Studio.MainDisplayArea.SetNextBlockToExecute" >}}
[breakpoint]: {{< url "Cortex.Guides.Studio.MainDisplayArea.Breakpoints" >}}
[token]: {{< url "Cortex.Guides.Studio.MainDisplayArea.Executions" >}}
[Start an execution]: {{< url "Cortex.Guides.Studio.MainDisplayArea.StartAnExecution" >}}
[Edit and Continue]: {{< url "Cortex.Guides.Studio.MainDisplayArea.EditAndContinueAnExecution" >}}
[Exceptions Viewer]: {{< url "Cortex.Guides.Studio.EastPanel.ExceptionsViewer" >}}
[Variable Details Viewer]: {{< url "Cortex.Guides.Studio.EastPanel.VariableDetailsViewer" >}}
[Load Value Button]: {{< url "Cortex.Guides.Studio.EastPanel.LoadValueButton" >}}
[Variables Viewer]: {{< url "Cortex.Guides.Studio.EastPanel.VariablesViewer" >}}
[Settings Editor]: {{< url "Cortex.Guides.Studio.EastPanel.SettingsEditor" >}}
[Inputs Property]: {{< url "Cortex.Guides.Studio.EastPanel.InputsProperty" >}}
[Executions Grid]: {{< url "Cortex.Guides.Studio.SouthPanel.ExecutionsGrid" >}}
[Paused]: {{< url "Cortex.Guides.Studio.SouthPanel.PausingAnExecution" >}}
[Stepped]: {{< url "Cortex.Guides.Studio.SouthPanel.SteppingAnExecution" >}}
[Continued]: {{< url "Cortex.Guides.Studio.SouthPanel.ContinuingAnExecution" >}}
[Stopped]: {{< url "Cortex.Guides.Studio.SouthPanel.StoppingAnExecution" >}}
[Messages Grid]: {{< url "Cortex.Guides.Studio.SouthPanel.MessagesGrid" >}}
