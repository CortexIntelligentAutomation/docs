---
title: "Execution Variables"
linkTitle: "Execution Variables"
description: "Passing data into, and receiving data from, an execution."
weight: 30
---

# {{< param title >}}

Data maybe optionally passed into an [flow execution][What-Is-Execution], and in the case of a synchronously executed [flow][What-Is-Flow], values passed out using global variables.

#### Input/Output Variables

The global variables used to receive the data passed in must have their `Is Input Variable?`[property][Block-Properties] set to `true`; any values to be returned from global variables must have their `Is Output Variable?` property set to `true`.

#### Using the Run Flow block

If a [flow's][What-Is-Flow] logic uses the [Run Flow][TODO] [block][What-Is-Block] to trigger the execution of another [flow][What-Is-Flow], the [block's][What-Is-Block] `Inputs` will automatically display the called [flow's][What-Is-Flow] input variables.

The [block's][What-Is-Block] `Outputs` [property][Block-Properties] would reference a variable that would be assigned a [structure][Structure] value during the [execution][What-Is-Execution]. The [structure][Structure] would contain values of the triggered [flow's][What-Is-Flow] output variables, where the keys are the names of the output variables and the values are the values assigned to the output variables. For example:

```json
{
  "OutputVar1" : "",
  "OutputVar2" : 1,
  "OutputVar3" : true,
  "OutputVar4" : {},
  "OutputVar5" : [],
  "OutputVar6" : null
}
```

#### Using a HTTP REST request

If an HTTP REST request is used to trigger the [execution][What-Is-Execution] of a [flow][What-Is-Flow], the data to be passed to the input variables of a [flow][What-Is-Flow] must be contained in the body of the HTTP REST request in JSON format. For example:

```json
{
  "InputVar1" : "",
  "InputVar2" : 1,
  "InputVar3" : true,
  "InputVar4" : {},
  "InputVar5" : [],
  "InputVar6" : null
}
```

Any data returned from the [flow][What-Is-Flow] will be contained in the HTTP REST response message in JSON format. For example:

```json
{
  "OutputVar1" : "",
  "OutputVar2" : 1,
  "OutputVar3" : true,
  "OutputVar4" : {},
  "OutputVar5" : [],
  "OutputVar6" : null
}
```

## Related Concepts

- [Flows][What-Is-Flow]
- [Flow Executions][What-Is-Execution]
- [Blocks][What-Is-Block]
- [Structure][Structure]

## Related Blocks

- [Run Flow][TODO]
- [Execute HTTP Request][TODO]

[Block-Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Properties.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.MostCommon.Structure" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.What-Is-A-Block.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.What-Is-An-Execution.MainDoc" >}}
[What-Is-Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Flows.What-Is-A-Flow.MainDoc" >}}
