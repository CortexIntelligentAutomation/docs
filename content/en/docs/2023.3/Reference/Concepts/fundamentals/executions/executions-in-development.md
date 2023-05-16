---
title: "Executions in Development"
linkTitle: "Executions in Development"
description: "Information regarding working with executions in development (i.e. CORTEX Studio)."
weight: 100
---

# {{% param title %}}

## Summary

Whilst debugging a flow, each execution is represented by a [token][] that moves through the [flow][], showing which [block][] is currently being executed.

A [flow][] can be debugged in [{{< ctx >}} Studio][CORTEX Studio] by clicking the [Start an execution][] button or by making an [API call][API call: CORTEX Studio] to [{{< ctx >}} Studio][CORTEX Studio], [providing input variables][Providing Input Variables] to the flow, if required; this will [validate the flow][Validating a Flow] and then begin an execution.

The following parameters can be specified:

- Show execution on workspace - when this is `true`, the token will be shown at every step throughout the [flow][], otherwise the token will only be shown when the execution [pauses][Paused], hits a [breakpoint][], or an exception occurs when `Break on exception` is `true`
- Break on exception - when this is `true` the execution will [pause][Paused] when an exception occurs

## Providing Input Variables

Any flow that has [Input Variables][] defined requires them to be provided when debugging, these may be provided to a flow in the following ways:

- From [{{< ctx >}} Studio][CORTEX Studio] using the [Inputs Property][] in the [Settings Editor][]
- From an [HTTP request][HTTP request: CORTEX Studio] using the inputVariables in the body of the request

## Retrieving Output Variables

Any flow that has [Output Variables][] defined can have those variables retrieved after the execution has completed by using the outputVariables in the body of the [HTTP response][HTTP response: CORTEX Studio].

## Validating a Flow

The [flow][] is validated before it's debugged, if this is successful an execution will begin.

If there are any issues with the flow then the execution will not start and details of what needs to be resolved will be returned. If the flow was debugged by clicking the [Start an execution][] button, then entries will be displayed in the [Messages Grid][]; if it was debugged by making an [HTTP request][HTTP request: CORTEX Studio] to [{{< ctx >}} Studio][CORTEX Studio], then a 400 Bad Request is returned.

For a complete list see [Validation][] messages.

## Selecting an Execution

One or more executions can be selected within [{{< ctx >}} Studio][CORTEX Studio] by clicking on their [token][], or selecting them using the [Executions Grid][]. This allows:

- [Interacting with an Execution][]
- [Viewing an Execution's Variables][]
- [Viewing an Execution's Exceptions][]

## Interacting with an Execution

Once executions are [selected][Selecting an Execution] in [{{< ctx >}} Studio][CORTEX Studio] they can be interacted with in the following ways:

- [Paused][]
- [Stepped][]
- [Continued][]
- [Stopped][]

### Set Next Block to Execute

[Set Next Block to Execute][] allows a developer to choose which [block][] will be executed next for the selected execution, even if this block is not connected to the [flow][].

Examples of what this can be used to do whilst debugging include:

- Retrying a block due to a transient exception such as network connectivity
- Retrying a block after using [Edit and Continue][Edit and Continue an Execution] to fix an incorrectly configured block
- Skipping over functionality that is not yet working
- Skipping to specific functionality within the flow in order to test it
- Running logic that is not part of the flow (e.g. running a clean up script to reset any external data sources for the next execution of the flow)

Currently, Set Next Block to Execute is not available when [multiple executions are selected][], or the [block and execution are on different workspaces][].

### Edit and Continue an Execution

[Edit and Continue][] allows a developer to pause all executions, and make changes to the [flow][] before continuing debugging.

Examples of what this can be used to do whilst debugging include:

- Making changes such as adding, updating and removing: [blocks][block], [connections][], [variables][variable]
- Fixing an incorrectly configured block

Currently when using Edit and Continue, it is not possible to [directly change the value of a variable without using a block][].

## Viewing an Execution's Variables

When debugging a [flow][] in [{{< ctx >}} Studio][CORTEX Studio], [selecting an execution][Selecting an Execution] will display all initialised [variables][variable] that are in [scope][] in the [Variables Viewer][].

To see the data in a variable, select the variable in the [Variables Viewer][] and the data will be presented in the [Variable Details Viewer][]. If the data is large enough to negatively affect the performance of [{{< ctx >}} Studio][CORTEX Studio] it will not be displayed unless the [Load Value Button][] is clicked.

## Viewing an Execution's Exceptions

When debugging a [flow][] in [{{< ctx >}} Studio][CORTEX Studio], [selecting an execution][Selecting an Execution] will display all [exceptions][exception] that have been thrown for that execution in the [Exceptions Viewer][].

In future, it will be possible to navigate to the block that caused the exception.

## Handling an Execution's Exceptions

Exceptions thrown by an execution can be handled at any level within a flow.

Exceptions can be handled:

- At the [block][] level; for further information, see [Handling Exceptions within a Block][]
- At the [workspace][] level; for further information, see [Handling Exceptions within a Workspace][]
- At the [flow][] level; for further information, see [Handling Exceptions within a Flow][]

If an exception occurs within the workspace of the [Handle Flow Exception][] block and is not handled, the execution will end with a status of Error.

{{< figure src="/images/flow-error-status.png" >}}

## Logs Generated

There are two ways that logs are generated while debugging a [flow][], they are:

- Automatically generated by the [{{< ctx >}} Flow Debugger Service][CORTEX Flow Debugger Service]
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

[Providing Input Variables]: {{< ref "#providing-input-variables" >}}
[Validating a Flow]: {{< ref "#validating-a-flow" >}}
[Interacting with an Execution]: {{< ref "#interacting-with-an-execution" >}}
[Viewing an Execution's Variables]: {{< ref "#viewing-an-executions-variables" >}}
[Viewing an Execution's Exceptions]: {{< ref "#viewing-an-executions-exceptions" >}}
[Selecting an Execution]: {{< ref "#selecting-an-execution" >}}
[Edit and Continue an Execution]: {{< ref "#edit-and-continue-an-execution" >}}
[multiple executions are selected]: {{< ref "#set-next-block-to-execute-not-available-when-multiple-executions-are-selected" >}}
[block and execution are on different workspaces]: {{< ref "#set-next-block-to-execute-not-available-when-the-block-and-execution-are-on-different-workspaces" >}}
[directly change the value of a variable without using a block]: {{< ref "#updating-a-variables-value-is-not-possible-without-using-a-block" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[connections]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.BlockConnections" >}}
[Handling Exceptions within a Block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.HandlingExceptionsWithinABlock.MainDoc" >}}

[Data Types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[exception]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}

[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[Handling Exceptions within a Flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.HandlingExceptionsWithinAFlow.MainDoc" >}}

[Messages]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Messages.MainDoc" >}}
[message]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Messages.WhatIsAMessage.MainDoc" >}}

[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[Input Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}
[Output Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.OutputVariablesStructure" >}}

[Workspaces]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[Handling Exceptions within a Workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.HandlingExceptionsWithinAWorkspace.MainDoc" >}}
[scope]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}

[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}
[Handle Flow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Log Event]: {{< url path="Cortex.Reference.Blocks.Logs.LogEvent.LogEvent.MainDoc" >}}

[All Data Types]: {{< url path="Cortex.Reference.DataTypes.MainDoc" >}}

[API call: CORTEX Studio]: {{< url path="Cortex.Reference.Apis.Studio.MainDoc" >}}
[HTTP request: CORTEX Studio]: {{< url path="Cortex.Reference.Apis.Studio.MainDoc" >}}
[HTTP response: CORTEX Studio]: {{< url path="Cortex.Reference.Apis.Studio.MainDoc" >}}

[CORTEX Flow Debugger Service]: {{< url path="Cortex.Reference.Logs.CortexFlowDebuggerService.MainDoc" >}}

[Validation]: {{< url path="Cortex.Reference.Messages.Validation.MainDoc" >}}

[CORTEX Studio]: {{< url path="Cortex.Guides.Studio.MainDoc" >}}
[Set Next Block to Execute]: {{< url path="Cortex.Guides.Studio.MainDisplayArea.SetNextBlockToExecute" >}}
[breakpoint]: {{< url path="Cortex.Guides.Studio.MainDisplayArea.Breakpoints" >}}
[token]: {{< url path="Cortex.Guides.Studio.MainDisplayArea.Executions" >}}
[Start an execution]: {{< url path="Cortex.Guides.Studio.MainDisplayArea.StartAnExecution" >}}
[Edit and Continue]: {{< url path="Cortex.Guides.Studio.MainDisplayArea.EditAndContinueAnExecution" >}}
[Exceptions Viewer]: {{< url path="Cortex.Guides.Studio.EastPanel.ExceptionsViewer" >}}
[Variable Details Viewer]: {{< url path="Cortex.Guides.Studio.EastPanel.VariableDetailsViewer" >}}
[Load Value Button]: {{< url path="Cortex.Guides.Studio.EastPanel.LoadValueButton" >}}
[Variables Viewer]: {{< url path="Cortex.Guides.Studio.EastPanel.VariablesViewer" >}}
[Settings Editor]: {{< url path="Cortex.Guides.Studio.EastPanel.SettingsEditor" >}}
[Inputs Property]: {{< url path="Cortex.Guides.Studio.EastPanel.InputsProperty" >}}
[Executions Grid]: {{< url path="Cortex.Guides.Studio.SouthPanel.ExecutionsGrid" >}}
[Paused]: {{< url path="Cortex.Guides.Studio.SouthPanel.PausingAnExecution" >}}
[Stepped]: {{< url path="Cortex.Guides.Studio.SouthPanel.SteppingAnExecution" >}}
[Continued]: {{< url path="Cortex.Guides.Studio.SouthPanel.ContinuingAnExecution" >}}
[Stopped]: {{< url path="Cortex.Guides.Studio.SouthPanel.StoppingAnExecution" >}}
[Messages Grid]: {{< url path="Cortex.Guides.Studio.SouthPanel.MessagesGrid" >}}
