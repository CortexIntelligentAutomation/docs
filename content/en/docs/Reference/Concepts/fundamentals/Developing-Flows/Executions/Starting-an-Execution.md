---
title: "Starting an Execution"
linkTitle: "Starting an Execution"
description: "Starting a flow execution."
weight: 20
---

# {{< param title >}}

## Summary

A [flow][What-Is-Flow] execution may be started or triggered in a number of ways:

* [Internal][Internal]
* [From another flow][From-Another-Flow]
* [External][External]
* [EDA][EDA] (future)

## Internal Execution

A private [flow execution][What-Is-Execution] is started within Cortex Studio for debugging and testing purposes; this [Flow execution][What-Is-Execution] is performed in the Debugging Service, independent of the application servers, and provides a sandbox area for the [flow][What-Is-Flow] developer to develop, debug and test [flows][What-Is-Flow]; it cannot be accessed or viewed by anyone else.

To start an Internal execution in Cortex Studio, simply click the `Start an execution` icon.

### Internal Execution - Input Variables

The [flow's][What-Is-Flow] [input variables][Input-Output] may be initialised to [literal][Literals] values within Cortex Studio for testing and debugging the [flow execution][What-Is-Execution].

### Internal Execution - Output Variables

The values of the [flow's][What-Is-Flow] [output variables][Input-Output] may be viewed in Cortex Studio's Execution Viewer from the **Variables** tab.

## Execution From Another Flow

An existing, executing [flow][What-Is-Flow] may [call another flow][Calling-Other-Flows] to start its execution. The child [flow][What-Is-Flow] may be executed asynchronously (future) or synchronously by placing the appropriate [Run Flow][Block-Run-Flow] [block][What-Is-Block] as part of the parent [flow's][What-Is-Flow] logic.

When the [flow execution][What-Is-Execution] enters the [Run Flow][Block-Run-Flow] [block][What-Is-Block], the child [flow execution][What-Is-Execution] is triggered.

### Execution From Another Flow - Input Variables

The child [flow's][What-Is-Flow] [input variables][Input-Output], for both asynchronous (future) and synchronous executions, can be [set][Run-Flow-Block] by specifying their values in [properties][Block-Properties] in the [Run Flow][Block-Run-Flow] [block][What-Is-Block].

### Execution From Another Flow - Output Variables

For synchronous executions only, the child [flow's][What-Is-Flow] [output variables][Input-Output] may pass values back to the parent [flow][What-Is-Flow], which are [saved][Run-Flow-Block] to a [structure][Structures] variable in the parent [flow][What-Is-Flow].

## External Execution

Any [flow][What-Is-Flow] may be started by a HTTP request using REST, targeted at the API Gateway. Authentication ensures only those processes presenting the correct authentication credentials can trigger a [flow execution][What-Is-Execution] in this way. 

### External Execution - Input Variables

Initialisation values may be [passed][REST-Request] to the triggered [flow's][What-Is-Flow] [input variables][Input-Output] with the HTTP REST request.


### External Execution - Output Variables

In the case of a synchronous [flow][What-Is-Flow] execution only, the [response][REST-Request] from the HTTP REST request can contain values passed back from the triggered [flow's][What-Is-Flow] [output variables][Input-Output].

### External Execution - REST Request Format

| Attribute         | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| Method/Verb | `POST` |  |
| URI | `https://<server>/default/default/<flowname>/executions` |  |
| Authentication | `Basic` | |
| Body | `{"<TargetVariable1>":"<SourceValue1", ...}` (example) | The body must be expressed in JSON format |
| Parameters (optional) | `packageName=Solution1&packageVersion=2022-01-21T16-17-43.User1.7fb8204a-56a4-490c-be2e-d198f69c5042` (example) | URI Query Parameters |

## EDA

Event Driven Automation (EDA) may be used to trigger [flow execution][What-Is-Execution]. EDA within Cortex receives network events, e.g., SNMP traps, that can trigger a [flow execution][What-Is-Execution] based on rules that evaluate a combination of events over a given time-frame.

## Related Concepts

* [Flows][Flow]
* [Flow Executions][What-Is-Execution]
* [Block Properties][Block-Properties]
* [Structures][Structures]

## Related Blocks

* [Run Flow][Block-Run-Flow]
* [Execute HTTP Request][Block-HTTP-Request]

[EDA]: {{< ref "#eda" >}}
[External]: {{< ref "#external" >}}
[From-Another-Flow]: {{< ref "#from-another-flow" >}}
[Internal]: {{< ref "#internal" >}}

[Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Flows.MainDoc" >}}
[Calling-Other-Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Flows.Calling-Other-Flows.MainDoc" >}}
[Block-HTTP-Request]: {{< url "Cortex.Reference.Blocks.Http.Execute-Http-Request.MainDoc" >}}
[Block-Run-Flow]: {{< url "Cortex.Reference.Blocks.Flows.Run-Flow.MainDoc" >}}
[Block-Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Properties.MainDoc" >}}
[Input-Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.Starting-An-Execution.Execution-Variables.Input-Output" >}}
[Literals]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Properties.Literals-Expressions-Variables.Literals" >}}
[REST-Request]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.Starting-An-Execution.Execution-Variables.REST-Request" >}}
[Run-Flow-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.Starting-An-Execution.Execution-Variables.Run-Flow-Block" >}}
[Structures]: {{< url "Cortex.Reference.DataTypes.MostCommon.Structure" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.What-Is-A-Block.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.What-Is-An-Execution.MainDoc" >}}
[What-Is-Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Flows.What-Is-A-Flow.MainDoc" >}}
