---
title: "FlowExecutionCancelledException"
linkTitle: "FlowExecutionCancelledException"
description: "The exception thrown when the child execution has been cancelled before execution has been completed."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Execution.FlowExecutionCancelledException)</p>

## Description

The exception thrown when the child execution has been cancelled before execution has been completed.

## Reasons

### The Child Execution Has Been Cancelled

The child execution has been cancelled before the execution has finished.

#### Message Format

The format of the [Message][] is as follows:

```json
"The flow execution has been cancelled!"
```

#### How to fix

Make sure that the execution has been completed.

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

Id of the flow which execution has been cancelled.

|           |            |
|-----------|------------|
| Data Type | [Guid][] |

### Execution Id

Id of the execution which has been cancelled.

|           |            |
|-----------|------------|
| Data Type | [Guid][] |

## See Also

### Related Data Types

* [String][]
* [Guid][]

### Related Concepts

* [Exceptions][]

### Related Blocks

* [RunAs Async][]

[Message]: {{< ref "#message" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}

[Guid]: {{< url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
