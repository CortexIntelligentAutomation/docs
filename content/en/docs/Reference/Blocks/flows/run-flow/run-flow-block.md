---
title: "Run Flow"
linkTitle: "Run Flow"
description: "Runs a chosen Flow, returning any output variables."
---

{{< figure src="/blocks/flows-run-flow-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Flows.RunFlow.RunFlowBlock)</p>

## Description

Runs a chosen [Flow][Flow Property] using the [Inputs][Inputs Property] provided, returning any [Output Variables][Output Variable] from the [Flow][Flow Property] in the [Outputs][Outputs Property] variable.

## Examples

### Running a Flow

This example will run the [Flow][Flow Property] `square-number-flow` saving the output variables to `($)Outputs`.

The [Flow][Flow Property] `square-number-flow` takes an [Input Variable][] `($)NumberToSquare`, which is then multiplied by itself and saved to the [Output Variable][] `($)SquaredNumber`. If no value is given for `($)NumberToSquare` the default value `10` is used. The flow contains a block that checks that the [Input Variable][] `($)NumberToSquare` is larger than `0`, an exception is thrown by `square-number-flow` if `($)NumberToSquare` is not larger than `0`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Flow][Flow Property] | [Flow][Flow Property], with value `square-number-flow` | [Flow][Flow Property] is of type [FlowReference][] |
| [Inputs][Inputs Property] |  | [Inputs][Inputs Property] is of type [InputVariables][] |
| &nbsp; &nbsp; > NumberToSquare | `($)NumberToSquare`, with value `5` | `($)NumberToSquare` is of type [Int32][] |
| [Outputs][Outputs Property] | `($)Outputs`, with no value | `($)Outputs` is a variable of type [Structure][] |

#### Result

`5` is passed into the [Input Variable][] `($)NumberToSquare` for the [Flow][Flow Property] `square-number-flow`, which results in `25` being saved to the [Output Variable][] `($)SquaredNumber`. This results in the variable `($)Outputs` being updated to the following:

```json
{
    "SquaredNumber": 25
}
```

***

### Running a Flow with Default Input Variables

This example will run the [Flow][Flow Property] `square-number-flow` saving the output variables to `($)Outputs`.

The [Flow][Flow Property] `square-number-flow` takes an [Input Variable][] `($)NumberToSquare`, which is then multiplied by itself and saved to the [Output Variable][] `($)SquaredNumber`. If no value is given for `($)NumberToSquare` the default value `10` is used. The flow contains a block that checks that the [Input Variable][] `($)NumberToSquare` is larger than `0`, an exception is thrown by `square-number-flow` if `($)NumberToSquare` is not larger than `0`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Flow][Flow Property] | [Flow][Flow Property], with value `square-number-flow` | [Flow][Flow Property] is of type [FlowReference][] |
| [Inputs][Inputs Property] |  | [Inputs][Inputs Property] is of type [InputVariables][] |
| &nbsp; &nbsp; > NumberToSquare | No value (defaults to `10`) | `NumberToSquare` is of type [Int32][] |
| [Outputs][Outputs Property] | `($)Outputs`, with no value | `($)Outputs` is a variable of type [Structure][] |

#### Result

As no value is passed into the [Input Variable][] `($)NumberToSquare` for the [Flow][Flow Property] `square-number-flow` the default of `10` is used, which results in `100` being saved to the [Output Variable][] `($)SquaredNumber`. This results in the variable `($)Outputs` being updated to the following:

```json
{
    "SquaredNumber": 100
}
```

For more information see [Default Values][].

***

### Running a Flow that Throws an Exception

This example will run the [Flow][Flow Property] `square-number-flow` saving the output variables to `($)Outputs`.

The [Flow][Flow Property] `square-number-flow` takes an [Input Variable][] `($)NumberToSquare`, which is then multiplied by itself and saved to the [Output Variable][] `($)SquaredNumber`. If no value is given for `($)NumberToSquare` the default value `10` is used. The flow contains a block that checks that the [Input Variable][] `($)NumberToSquare` is larger than `0`, an exception is thrown by `square-number-flow` if `($)NumberToSquare` is not larger than `0`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Flow][Flow Property] | [Flow][Flow Property], with value `square-number-flow` | [Flow][Flow Property] is of type [FlowReference][] |
| [Inputs][Inputs Property] |  | [Inputs][Inputs Property] is of type [InputVariables][] |
| &nbsp; &nbsp; > NumberToSquare | `($)NumberToSquare`, with value `-1` | `($)NumberToSquare` is of type [Int32][] |
| [Outputs][Outputs Property] | `($)Outputs`, with no value | `($)Outputs` is a variable of type [Structure][] |

#### Result

The [Flow][Flow Property] `square-number-flow` contains a block that checks that the [Input Variable][] `($)NumberToSquare` is larger than `0`; if this is not the case an exception is thrown.

In this example, as `-1` is passed into the [Input Variable][] `($)NumberToSquare` and is not greater than `0`, `($)Outputs` is not updated and an exception is thrown. For more information on how the exception is thrown and how to handle the exception see [Exceptions Thrown by a Child Flow][].

***

## Properties

### Flow

The [Flow][Flow Property] that will be run.

The [Literal Editor][] is the only editor available for this property, and it provides the developer a list of all available flows to choose from.

| | |
|--------------------|---------------------------|
| Data Type | [FlowReference][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Literal][Literal Editor] |
| Default Value | No value (defaults to `null`) |

### Inputs

The [Input Variables][Input Variable] that are passed to the [Flow][Flow Property] that will be run.

It is recommended to use the [Literal Editor][] for this property as it detects and warns of changes to the Flow Contract, allowing users to [Sync the Editor][Syncing the Inputs Property with the Flow Contract].

| | |
|--------------------|---------------------------|
| Data Type | [InputVariables][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Literal][Literal Editor] |
| Default Value | No initial value (Will be [synced][Syncing the Inputs Property with the Flow Contract] when the [Flow][Flow Property] is first [selected][Selecting a Flow]) |

### Outputs

The [Output Variables][Output Variable] from the [Flow][Flow Property].

Each of the [Output Variables][Output Variable] will be saved to a [Structure][], where the key is the name of the variable and the item is the value of the variable.

| | |
|--------------------|---------------------------|
| Data Type | [Structure][] |
| Property Type | [Output][] |
| Is Advanced | `false` |
| Default Editor | [Variable][Variable Editor] |
| Default Value | `($)Outputs` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name | Description |
|------|-------------|
| [InvalidInputVariablesException][] | Thrown when [Inputs][Inputs Property] is missing any [Input Variables][Input Variable] from the chosen [Flow][Flow Property]. See [Missing Input Variables][]. |
| | Thrown when [Inputs][Inputs Property] has any extra [Input Variables][Input Variable] that are not in the chosen [Flow][Flow Property]. See [Extra Input Variables][]. |
| | Thrown when [Inputs][Inputs Property] has any [Input Variables][Input Variable] that are not a valid type for [Input Variable][]. See [Input Variables of an Invalid Type][]. |

## Remarks

### Selecting a Flow

![Selecting a Flow Example](/images/run-flow-selecting-a-flow.gif)

A flow can be selected using the [Literal Editor][] on the [Flow Property][], a list of all available flows will be presented to the developer and can be searched by the Name or Id of a flow.

When a [Flow][Flow Property] is selected the [Inputs Property][] will be [Synced with the Flow Contract][Syncing the Inputs Property with the Flow Contract].

### Default Values

If an [Input Variable][] has a default value, then this default value will be used when running the [Flow][Flow Property] if the corresponding value in the [Inputs Property][] is left empty. See [Running a Flow with Default Input Variables][] for an example.

Also, if an [Input Variable][] has a default value, and the corresponding value in the [Inputs Property][] is not of the same type, a [Validation Error][] will be raised when the flow is validated.

For more information see [Input Variables][Input Variable].

### Exceptions Thrown by a Child Flow

If the [Flow][Flow Property] run by the Run Flow block throws an exception that is unhandled then it is rethrown by the Run Flow block. This can then be handled by any connected [Handle Block Exception blocks][]. See [Running a Flow that Throws an Exception][] for an example.

If an exception thrown by a block is not handled by any connected [Handle Block Exception blocks][], it will be passed to the [Handle Workspace Exception][] block on the same workspace.

This process repeats until:

- The exception is handled, or
- The exception reaches the flow's top-level workspace, is not handled by any [Handle Block Exception blocks][] and the top-level workspace does not contain a [Handle Workspace Exception][] block. At this stage, the exception is handled by the flow's [Handle Flow Exception][] block.

For more information see [Handling Exceptions][].

### Syncing the Inputs Property with the Flow Contract

![Updating the Flow Contract Example](/images/run-flow-contract-change.gif)

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
[Syncing the Inputs Property with the Flow Contract]: {{< ref "#syncing-the-inputs-property-with-the-flow-contract" >}}
[Selecting a Flow]: {{< ref "#selecting-a-flow" >}}
[Running a Flow that Throws an Exception]: {{< ref "#running-a-flow-that-throws-an-exception" >}}
[Running a Flow with Default Input Variables]: {{< ref "#running-a-flow-with-default-input-variables" >}}
[Default Values]: {{< ref "#default-values" >}}
[Exceptions Thrown by a Child Flow]: {{< ref "#exceptions-thrown-by-a-child-flow" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[Literal Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Input Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}
[Output Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.OutputVariablesStructure" >}}
[Handling Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[Validation Error]: {{< url "Cortex.Reference.Concepts.Fundamentals.Messages.MainDoc" >}}

[Undoing]: {{< url "Cortex.Guides.Studio.MainDisplayArea.Undo" >}}

[FlowReference]: {{< url "Cortex.Reference.DataTypes.Flows.FlowReference.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[InputVariables]: {{< url "Cortex.Reference.DataTypes.Flows.InputVariables.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[InvalidInputVariablesException]: {{< url "Cortex.Reference.Exceptions.Flows.Execution.InvalidInputVariablesException.MainDoc" >}}
[Missing Input Variables]: {{< url "Cortex.Reference.Exceptions.Flows.Execution.InvalidInputVariablesException.MissingInputVariables" >}}
[Extra Input Variables]: {{< url "Cortex.Reference.Exceptions.Flows.Execution.InvalidInputVariablesException.ExtraInputVariables" >}}
[Input Variables of an Invalid Type]: {{< url "Cortex.Reference.Exceptions.Flows.Execution.InvalidInputVariablesException.InputVariablesOfAnInvalidType" >}}

[Handle Block Exception blocks]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.MainDoc" >}}
[Handle Flow Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Handle Workspace Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}
