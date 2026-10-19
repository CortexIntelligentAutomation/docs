---
title: "FlowExecutionCancelledException"
linkTitle: "FlowExecutionCancelledException"
description: "The exception thrown when the child execution has been cancelled before execution has been completed."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Execution.FlowExecutionCancelledException)</p>

## Description

The exception thrown when the child execution has been cancelled before the execution has been completed.

## Reasons

### The Child Execution Has Been Cancelled

The child execution has been cancelled before the execution has completed.

#### Message Format

The format of the [Message][] is as follows:

```json
"The flow execution has been cancelled!"
```

#### How to fix

Allow the execution to fully complete.

## Properties

### Exception Type

The type of the exception (i.e. `FlowExecutionCancelledException`).

|           |            |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

|           |            |
|-----------|------------|
| Data Type | [String][] |

### Flow Id

The id of the flow where the execution has been cancelled.

|           |            |
|-----------|------------|
| Data Type | [Guid][] |

### Execution Id

The id of the execution that has been cancelled.

|           |            |
|-----------|------------|
| Data Type | [Guid][] |

## See Also

### Related Data Types

* [String][]
* [Guid][]

### Related Concepts

* [Exceptions][]
* [Executions][]
* [Flows][]

### Related Blocks

* [RunFlowAsync][]

### External Documentation

None

[Message]: {{< ref "#message" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}

[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}

[Guid]: {{< url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[RunFlowAsync]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlowAsync.MainDoc" >}}
