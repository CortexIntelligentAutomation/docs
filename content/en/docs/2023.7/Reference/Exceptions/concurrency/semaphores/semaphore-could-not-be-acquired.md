---
title: "SemaphoreCouldNotBeAcquiredException"
linkTitle: "SemaphoreCouldNotBeAcquiredException"
description: "The exception thrown when a block is unable to acquire a semaphore."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Concurrency.SemaphoreCouldNotBeAcquiredException)</p>

## Description

The exception thrown when a block is unable to acquire a [Semaphore].

## Reasons

### Concurrency Limit reached

This exception is thrown when the specified [Semaphore's][Semaphore] concurrency limit has been reached when the queue [property][] is set to `null`.

#### Message Format

The format of the [Message][] is as follows:

```json
"Requested semaphore '/<tenant>/<system>/*/*/*/*/<semaphore-name>' could not be acquired.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<tenant>` is the tenant defined in the [Scope] of the [Semaphore].
* `<system>` is the system defined in the [Scope] of the [Semaphore].
* `<semaphore-name>` is the name of the semaphore [property][].

#### How to fix

Try to acquire the semaphore again at a later point in the flow or provide a queue in the queue [property][].

### Queue Timeout reached

This exception is thrown when queuing for the specified [Semaphore], and the queue timeout is reached before the semaphore is acquired.

#### Message Format

The format of the [Message][] is as follows:

```json
"Requested semaphore '/<tenant>/<system>/*/*/*/*/<semaphore-name>' could not be acquired.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<tenant>` is the tenant defined in the [Scope] of the [Semaphore].
* `<system>` is the system defined in the [Scope] of the [Semaphore].
* `<semaphore-name>` is the name of the semaphore [property][].

#### How to fix

Try to queue to acquire the semaphore again or provide a longer queue timeout.

## Properties

### Exception Type

The type of the exception (i.e. `SemaphoreCouldNotBeAcquiredException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Tenant

The tenant specified on the [Scope][] provided.

| | |
|-----------|---------------------------|
| Data Type | [String][] |

### System

The system specified on the [Scope][] provided.

| | |
|-----------|---------------------------|
| Data Type | [String][] |

### Semaphore Name

The name of the semaphore that was attempted to be acquired.

| | |
|-----------|------------|
| Data Type | [String][] |

### Configured Concurrency Limit

The number of executions allowed in the semaphore that was attempted to be acquired.

| | |
|-----------|------------|
| Data Type | [Int32][] |

### Queued

Whether or not the execution attempted to queue.

| | |
|-----------|------------|
| Data Type | [Boolean][] |

### Queue Timeout

The length of time the execution queued.

| | |
|-----------|------------|
| Data Type | [TimePeriod][] |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## See Also

### Related Data Types

* [Boolean]
* [Int32][]
* [Scope][]
* [Semaphore][]
* [String][]
* [TimePeriod][]

### Related Concepts

* [Block Properties]
* [Exceptions]
* [Semaphores][Semaphore]

### Related Blocks

- [All Blocks][]


Except:
- [End Flow]
- [End Workspace]
- [Handle Flow Exception]
- [Start Flow]
- [Wait For Duration]

### External Documentation

None

[Message]: {{< ref "#message" >}}

[TaskExceptions Property]: {{< ref "#taskexceptions" >}}
[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Wait For All Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock.MainDoc" >}}
[Waiting for a Task that has thrown an exception]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock.GetSuccessfulResults" >}}

[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}
[FlowException]: {{< url path="Cortex.Reference.Exceptions.Flows.FlowException.MainDoc" >}}

[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc" >}}
[Semaphore]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.WhatIsASemaphore.MainDoc" >}}
[property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}

[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}
[Handle Flow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[Wait For Duration]: {{< url path="Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}

