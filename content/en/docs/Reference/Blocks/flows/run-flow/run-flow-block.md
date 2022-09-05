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
| [Inputs][Inputs Property] | `NumberToSquare`, with value `5` | `NumberToSquare` is of type [Int32][] |
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
| [Inputs][Inputs Property] | `NumberToSquare`, with no value | `NumberToSquare` has no type |
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
| [Inputs][Inputs Property] | `NumberToSquare`, with value `-1` | `NumberToSquare` is of type [Int32][] |
| [Outputs][Outputs Property] | `($)Outputs`, with no value | `($)Outputs` is a variable of type [Structure][] |

#### Result

The flow contains a block that checks that the [Input Variable][] `($)NumberToSquare` is larger than `0`, an exception is thrown by `square-number-flow` if `($)NumberToSquare` is not larger than `0`. As `-1` is passed into the [Input Variable][] `($)NumberToSquare` and is not greater than `0`, an exception is thrown.

`($)Outputs` is not updated as an exception is thrown.

The exception is then thrown by the Run Flow block, for more information on how the exception is thrown and how to handle the exception see [Exceptions Thrown by a Child Flow][].

***

## Properties

### Flow

The [Flow][Flow Property] where the [Flow][Flow Property] that will be run by the block is chosen.

It is recommended to use the [Literal Editor][] as it provides the developer a list of all available flows to choose from.

| | |
|--------------------|---------------------------|
| Data Type | [FlowReference][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Literal][TODO] |
| Default Value | No value (defaults to `null`) |

### Inputs

The [Inputs][Inputs Property] where the input variables can be assigned for the [Flow][Flow Property] that will be run.

It is recommended to use the [Literal Editor][] as it provides the developer  each input variable for the [Flow][Flow Property] as sub property, and allows for updating these properties when the [Updating the Flow Contract][].

| | |
|--------------------|---------------------------|
| Data Type | [InputVariables][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Literal][TODO] |
| Default Value | No value (must be initialised when [Updating the Flow Contract][]) |

### Outputs

The [Outputs][Outputs Property] where the output variables from the [Flow][Flow Property] are saved.

Each output variable will be saved to a key within [Outputs][Outputs Property] [Structure][], see [Working with Structures][] for more information.

| | |
|--------------------|---------------------------|
| Data Type | [Structure][] |
| Property Type | [Output][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)Outputs` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name | Description |
|------|-------------|
| [InvalidInputVariablesException][] | Thrown when [Inputs][Inputs Property] is missing any [Input Variables][Input Variable] from the chosen [Flow][Flow Property]. |
| | Thrown when [Inputs][Inputs Property] has any extra [Input Variables][Input Variable] that are not in the chosen [Flow][Flow Property]. |

## Remarks

### Selecting a Flow

![Selecting a Flow Example](/images/run-flow-selecting-a-flow.gif)

A flow can be selected using the [Literal Editor][] on the [Flow Property][], a list of all available flows will be presented to the developer and can be searched by the Name or Id of a flow.

When a flow is selected the any [Input Variables][Input Variable] are created as sup-properties of the [Inputs Property][], for more information see [Updating the Flow Contract][].

### Default Values

If an [Input Variable][] has a default value, then this default value will be used when running the [Flow][Flow Property] if the corresponding value in the [Inputs Property][] is left empty. See [Running a Flow with Default Input Variables][] for an example.

Also, if an [Input Variable][] has a default value, and the corresponding value in the [Inputs Property][] is not of the same type, then the block will raise a [Translation Error][TODO: Messages] when the flow is compiled.

For more information see [Input Variables][Input Variable].

### Exceptions Thrown by a Child Flow

If the [Flow][Flow Property] run by the Run Flow block throws an exception that is unhandled then it is rethrown by the Run Flow block. This can then be handled by any connected [Handle Block Exception blocks][]. See [Running a Flow that Throws an Exception][] for an example.

If an exception thrown by a block is not handled by any connected [Handle Block Exception blocks][], it will be passed to the [Handle Workspace Exception][] block on the same workspace.

This process repeats until:

- The exception is handled, or
- The exception reaches the flow's top-level workspace, is not handled by any [Handle Block Exception blocks][] and the top-level workspace does not contain a [Handle Workspace Exception][] block. At this stage, the exception is handled by the flow's [Handle Flow Exception][] block.

### Updating the Flow Contract

![Updating the Flow Contract Example](/images/run-flow-contract-change.gif)

When a flow is first selected, or when the contract of the flow changes (e.g. The [Input Variables][Input Variable] of a flow are updated). Then a prompt will appear when the block is selected, allowing the user to update the contract.

This will cause:

- Any missing [Input Variables][Input Variable] present in the called [Flow][Flow Property] to be added to the [Inputs Property][]
- Any extra [Input Variables][Input Variable] not present in the called [Flow][Flow Property] to be deleted from the [Inputs Property][]

### Known Limitations

#### Updating the Flow Contract is not detected when using editors other than the Literal Editor

[Updating the Flow Contract][] is not detected if an [Editor][TODO: Property Editors] other than the [Literal Editor][] is used for the [Flow Property][] or [Inputs Property][]. This will cause the prompt for update the contract to not be displayed if there are any changes.

[Flow Property]: {{< ref "#flow" >}}
[Inputs Property]: {{< ref "#inputs" >}}
[Outputs Property]: {{< ref "#outputs" >}}
[Updating the Flow Contract]: {{< ref "#flow-contract-changes" >}}
[Running a Flow that Throws an Exception]: {{< ref "#running-a-flow-that-throws-an-exception" >}}
[Running a Flow with Default Input Variables]: {{< ref "#running-a-flow-with-default-input-variables" >}}
[Default Values]: {{< ref "#default-values" >}}
[Exceptions Thrown by a Child Flow]: {{< ref "#exceptions-thrown-by-a-child-flow" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[FlowReference]: {{< url "Cortex.Reference.DataTypes.Flows.FlowReference.MainDoc" >}}
[InputVariables]: {{< url "Cortex.Reference.DataTypes.Flows.InputVariables.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.MostCommon.Structure" >}}
[Literal Editor]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}
[Working with Structures]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Structures" >}}
[Input Variable]: {{< url "Cortex.Reference.Concepts.WorkingWithVariables.MainDoc" >}}
[Output Variable]: {{< url "Cortex.Reference.Concepts.WorkingWithVariables.MainDoc" >}}
[InvalidInputVariablesException]: {{< url "Cortex.Reference.Exceptions.Flows.Execution.InvalidInputVariablesException.MainDoc" >}}

[Handle Block Exception blocks]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.MainDoc" >}}
[Handle Flow Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Handle Workspace Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.HandleWorkspaceException.MainDoc" >}}

[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
