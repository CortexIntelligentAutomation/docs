---
title: "Run Flow"
linkTitle: "Run Flow"
description: "Runs a chosen Flow, returning any output variables."
---

![Icon](/blocks/flows-run-flow-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Flows.StartFlow.StartFlowBlock)</p>

## Description

Runs a chosen [Flow][Flow Property] using [Inputs][Inputs Property] provided, returning any [Output Variables][Output Variable] from the [Flow][Flow Property] in the [Outputs][Outputs Property] variable.

## Examples

### Running a Flow

This example will run the [Flow][Flow Property] `square-number-flow` saving the output variables to `($)Outputs`.

The [Flow][Flow Property] `square-number-flow` takes an [Input Variable][] `($)NumberToSquare`, which is then multiplied by itself and saved to the [Output Variable][] `($)SquaredNumber`. If no value is given for `($)NumberToSquare` the default value `10` is used. The flow contains a block that checks that the [Input Variable][] `($)NumberToSquare` is of type [Int32][], an exception is thrown by `square-number-flow` if `($)NumberToSquare` is not of type [Int32][].

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

The [Flow][Flow Property] `square-number-flow` takes an [Input Variable][] `($)NumberToSquare`, which is then multiplied by itself and saved to the [Output Variable][] `($)SquaredNumber`. If no value is given for `($)NumberToSquare` the default value `10` is used. The flow contains a block that checks that the [Input Variable][] `($)NumberToSquare` is of type [Int32][], an exception is thrown by `square-number-flow` if `($)NumberToSquare` is not of type [Int32][].

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

***

### Running a Flow that Throws an Exception

This example will run the [Flow][Flow Property] `square-number-flow` saving the output variables to `($)Outputs`.

The [Flow][Flow Property] `square-number-flow` takes an [Input Variable][] `($)NumberToSquare`, which is then multiplied by itself and saved to the [Output Variable][] `($)SquaredNumber`. If no value is given for `($)NumberToSquare` the default value `10` is used. The flow contains a block that checks that the [Input Variable][] `($)NumberToSquare` is of type [Int32][], an exception is thrown by `square-number-flow` if `($)NumberToSquare` is not of type [Int32][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Flow][Flow Property] | [Flow][Flow Property], with value `square-number-flow` | [Flow][Flow Property] is of type [FlowReference][] |
| [Inputs][Inputs Property] | `NumberToSquare`, with value `"Not Int32"` | `NumberToSquare` is of type [String][] |
| [Outputs][Outputs Property] | `($)Outputs`, with no value | `($)Outputs` is a variable of type [Structure][] |

#### Result

As a [String][] value is passed into the [Input Variable][] `($)NumberToSquare` for the [Flow][Flow Property] `square-number-flow` an exception is thrown. The flow contains a block that checks that the [Input Variable][] `($)NumberToSquare` is of type [Int32][] and throws an exception if it is not of the correct type.

`($)Outputs` is not updated as an exception is thrown.

***

## Properties

### Flow

The [Flow][Flow Property] where the [Flow][Flow Property] that will be run by the block is chosen.

This property can only be a [Literal][Literal Editor] value, which gives the user a list of all available flows to choose from.

| | |
|--------------------|---------------------------|
| Data Type | [FlowReference][] |
| Property Type | [Input][] |
| Default Value | [Literal][Literal Editor] with value `""` |

### Inputs

The [Inputs][Inputs Property] where the input variables can be assigned for the [Flow][Flow Property] that will be run.

This property can only be a [Literal][Literal Editor] value, which gives the user each input variable for the [Flow][Flow Property] as sub property.

| | |
|--------------------|---------------------------|
| Data Type | [InputVariables][] |
| Property Type | [InputOutput][] |
| Default Value | [Literal][Literal Editor] with value `{}` |

### Outputs

The [Outputs][Outputs Property] where the output variables from the [Flow][Flow Property] are saved.

Each output variable will be saved to a key within [Outputs][Outputs Property] [Structure][], see [Working with Structures][] for more information.

| | |
|--------------------|---------------------------|
| Data Type | [Structure][] |
| Property Type | [Output][] |
| Default Value | `($)Outputs` with value `{}` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [InvalidInputVariablesException][] | Thrown when [Inputs][Inputs Property] is missing any [Input Variables][Input Variable] from the chosen [Flow][Flow Property]. |
| | Thrown when [Inputs][Inputs Property] has any extra [Input Variables][Input Variable] that are not in the chosen [Flow][Flow Property]. |

## Remarks

### Exceptions Thrown by a Child Flow

If the [Flow][Flow Property] run by the Run Flow block throws an exception that is unhandled then it is rethrown by the Run Flow block. This can then be handled by any connected [Handle Block Exception blocks][].

If an exception thrown by a block is not handled by any connected [Handle Block Exception blocks][], it will be passed to the [Handle Workspace Exception][] block on the same workspace.

This process repeats until:

- The exception is handled, or
- The exception reaches the flow's top-level workspace, is not handled by any [Handle Block Exception blocks][] and the top-level workspace does not contain a [Handle Workspace Exception][] block. At this stage, the exception is handled by the flow's [Handle Flow Exception][] block.

[Flow Property]: {{< ref "#flow" >}}
[Inputs Property]: {{< ref "#inputs" >}}
[Outputs Property]: {{< ref "#outputs" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[FlowReference]: {{< url "Cortex.Reference.DataTypes.MostCommon.FlowReference" >}}
[InputVariables]: {{< url "Cortex.Reference.DataTypes.MostCommon.InputVariables" >}}
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
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
