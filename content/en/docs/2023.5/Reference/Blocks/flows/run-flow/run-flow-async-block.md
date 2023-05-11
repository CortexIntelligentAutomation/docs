---
title: "Run Flow Async"
linkTitle: "Run Flow Async"
description: "Runs a chosen Flow asynchronously, returning a Task representing its execution."
---

{{< figure src="/blocks/flows-run-flow-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Flows.RunFlow.RunFlowAsyncBlock)</p>

## Description

Runs a chosen [Flow][Flow Property] asynchronously using the [Inputs][Inputs Property] provided, assigning the task to the [Execution Task][Execution Task Property] variable.

## Examples

### Running a Flow Asynchronously

This example will run the [Flow][Flow Property] `square-number-flow` assigning the task to `($)ExecutionTask`.

The [Flow][Flow Property] `square-number-flow` takes an [Input Variable][] `($)NumberToSquare`, which is then multiplied by itself and saved to the [Output Variable][] `($)SquaredNumber`. If no value is given for `($)NumberToSquare` the default value `10` is used. The flow contains a block that checks that the [Input Variable][] `($)NumberToSquare` is larger than `0`, an exception is thrown by `square-number-flow` if `($)NumberToSquare` is not larger than `0`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Flow][Flow Property] | [Flow][Flow Property], with value `square-number-flow` | [Flow][Flow Property] is of type [FlowReference][] |
| [Inputs][Inputs Property] |  | [Inputs][Inputs Property] is of type [InputVariables][] |
| &nbsp; &nbsp; > NumberToSquare | `($)NumberToSquare`, with value `5` | `($)NumberToSquare` is of type [Int32][] |
| [Execution Task][Execution Task Property] | `($)ExecutionTask`, with no value | `($)ExecutionTask` is a variable of type [IExecutionTask][] |

#### Result

`5` is passed into the [Input Variable][] `($)NumberToSquare` for the [Flow][Flow Property] `square-number-flow`, which results in `25` being saved to the [Output Variable][] `($)SquaredNumber`. This results in the variable `($)ExecutionTask` being updated to the following:

```json
{
  "ExecutionId": "00000000-0000-0000-0000-000000000000",
  "Id": "00000000-0000-0000-0000-000000000000",
  "IsCancelled": false,
  "IsCompleted": false,
  "IsCompletedSuccessfully": false,
  "IsFaulted": false,
  "Status": "Running",
  "Exception": null
}
```

The flow containing the [Run Flow Async][] block continues executing without waiting for the [Flow][Flow Property] to complete.

***

## Properties

### Flow

The [Flow][Flow Property] that will be run.

The [Literal Editor][] is the only editor available for this property, and it provides the developer a list of all available flows to choose from.

| | |
|--------------------|---------------------------|
| Data Type | [FlowReference][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][Literal Editor] |
| Default Value | No value (defaults to `null`) |

### Inputs

The [Input Variables][Input Variable] that are passed to the [Flow][Flow Property] that will be run.

It is recommended to use the [Literal Editor][] for this property as it detects and warns of changes to the Flow Contract, allowing users to [Sync the Editor][Syncing the Inputs Property with the Flow Contract].

| | |
|--------------------|---------------------------|
| Data Type | [InputVariables][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][Literal Editor] |
| Default Value | No initial value (Will be [synced][Syncing the Inputs Property with the Flow Contract] when the [Flow][Flow Property] is first [selected][Selecting a Flow]) |

### Execution Task

The [Execution Task][Execution Task Property] referring to an instance of the [Flow][Flow Property].

The newly created task will be saved to a variable of type [IExecutionTask][], a task that represents the execution of an asynchronous flow.

| | |
|--------------------|---------------------------|
| Data Type | [IExecutionTask][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][Variable Editor] |
| Default Value | `($)ExecutionTask` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name | Description |
|------|-------------|
| [InvalidInputVariablesException][] | Thrown when [Inputs][Inputs Property] is missing any [Input Variables][Input Variable] from the chosen [Flow][Flow Property]. See [Missing Input Variables][]. |
| | Thrown when [Inputs][Inputs Property] has any extra [Input Variables][Input Variable] that are not in the chosen [Flow][Flow Property]. See [Extra Input Variables][]. |
| | Thrown when [Inputs][Inputs Property] has any [Input Variables][Input Variable] that are not a valid type for [Input Variable][]. See [Input Variables of an Invalid Type][]. |

## Remarks

### Selecting a Flow

{{< figure src="/images/run-flow-selecting-a-flow.gif" >}}

A flow can be selected using the [Literal Editor][] on the [Flow Property][], a list of all available flows will be presented to the developer and can be searched by the Name or Id of a flow.

When a [Flow][Flow Property] is selected the [Inputs Property][] will be [Synced with the Flow Contract][Syncing the Inputs Property with the Flow Contract].

### Default Values

If an [Input Variable][] has a default value, then this default value will be used when running the [Flow][Flow Property] if the corresponding value in the [Inputs Property][] is left empty. See [Running a Flow with Default Input Variables][] for an example.

Also, if an [Input Variable][] has a default value, and the corresponding value in the [Inputs Property][] is not of the same type, a [Validation Error][] will be raised when the flow is validated.

For more information see [Input Variables][Input Variable].

### Parent Flow Ending Before Child Flow

If the flow containing the [Run Flow Async][] block ends before the [Flow][Flow Property], the [Flow][Flow Property] will continue running to completion.

### Exceptions Thrown by a Child Flow

If the [Flow][Flow Property] run by the Run Flow block throws an exception that is unhandled then the exception is saved to the [Execution Task][Execution Task Property]. The execution containing the [Run Flow Async][] block will not pause when the exception is thrown unless the [Flow][Flow Property] is being waited on by a wait block.

See [Wait For Task] block or [Wait For All Tasks] block for more details.

### Syncing the Inputs Property with the Flow Contract

{{< figure src="/images/run-flow-contract-change.gif" >}}

When a flow is first selected the [Inputs Property][] will be synced with the Flow Contract.

When the contract of the flow changes (e.g. [Input Variables][Input Variable] of a called [Flow][Flow Property] are updated), a prompt will appear when the block is selected, allowing the user to sync the editor.

This will cause:

- Any missing [Input Variables][Input Variable] not present in the [Inputs Property][] to be added
- Any extra [Input Variables][Input Variable] present in the [Inputs Property][] to be removed
- Any [Input Variables][Input Variable] already present in the [Inputs Property][] to be retained

[Undoing][] this action will cause the [Inputs Property][] to return to its previous state, from before it was synced, allowing any data to be retrieved from any extra [Input Variables][Input Variable].

### Known Limitations

#### The Flow Property can only use the Literal Editor

The Literal Editor is the only editor available for the [Flow Property][]

In future this limitation may be removed.

#### Syncing the Inputs Property with the Flow Contract is not available when using editors other than the Literal Editor

[Syncing the Inputs Property with the Flow Contract][] is only available when the [Inputs Property][] uses the [Literal Editor][]. If any other editor is used, the prompt to sync will not be displayed and any changes will need to be resolved manually.

[Flow Property]: {{< ref "#flow" >}}
[Inputs Property]: {{< ref "#inputs" >}}
[Outputs Property]: {{< ref "#outputs" >}}
[Execution Task Property]: {{< ref "#execution-task" >}}
[Syncing the Inputs Property with the Flow Contract]: {{< ref "#syncing-the-inputs-property-with-the-flow-contract" >}}
[Selecting a Flow]: {{< ref "#selecting-a-flow" >}}
[Running a Flow that Throws an Exception]: {{< ref "#running-a-flow-that-throws-an-exception" >}}
[Running a Flow with Default Input Variables]: {{< ref "#running-a-flow-with-default-input-variables" >}}
[Default Values]: {{< ref "#default-values" >}}
[Exceptions Thrown by a Child Flow]: {{< ref "#exceptions-thrown-by-a-child-flow" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[Literal Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Input Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}
[Output Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.OutputVariablesStructure" >}}
[Handling Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[Validation Error]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Messages.MainDoc" >}}

[Undoing]: {{< url path="Cortex.Guides.Studio.MainDisplayArea.Undo" >}}

[FlowReference]: {{< url path="Cortex.Reference.DataTypes.Flows.FlowReference.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[InputVariables]: {{< url path="Cortex.Reference.DataTypes.Flows.InputVariables.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}

[Run Flow Async]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlowAsync.MainDoc" >}}

[InvalidInputVariablesException]: {{< url path="Cortex.Reference.Exceptions.Flows.Execution.InvalidInputVariablesException.MainDoc" >}}
[Missing Input Variables]: {{< url path="Cortex.Reference.Exceptions.Flows.Execution.InvalidInputVariablesException.MissingInputVariables" >}}
[Extra Input Variables]: {{< url path="Cortex.Reference.Exceptions.Flows.Execution.InvalidInputVariablesException.ExtraInputVariables" >}}
[Input Variables of an Invalid Type]: {{< url path="Cortex.Reference.Exceptions.Flows.Execution.InvalidInputVariablesException.InputVariablesOfAnInvalidType" >}}

[Handle Block Exception blocks]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.MainDoc" >}}
[Handle Flow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Handle Workspace Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
