---
title: "SemaphoreCouldNotBeAcquiredException"
linkTitle: "SemaphoreCouldNotBeAcquiredException"
description: "The exception thrown when a block is unable to acquire a semaphore."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Concurrency.SemaphoreCouldNotBeAcquiredException)</p>

## Description

The exception thrown when a block is unable to acquire a [Semaphore][SemaphoreWhatIs].

## Reasons

### Concurrency Limit reached

The specified semaphore's [Concurrency Limit][SemaphoreConcurrencyLimit] has been reached, when the [Queue][SemaphoreQueue] property is set to `null`.

#### Message Format

The format of the [Message][] is as follows:

```json
"Requested semaphore '/<tenant>/<system>/*/<package>/*/<flow>/<semaphore-name>' could not be acquired.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<tenant>` is the tenant defined in the [Scope][] the semaphore operates in.
* `<system>` is the system defined in the [Scope][] the semaphore operates in.
* `<package>` is the package defined in the [Scope][] the semaphore operates in.
* `<flow>` is the flow defined in the [Scope][] the semaphore operates in.
* `<semaphore-name>` is the [Name][SemaphoreName] of the semaphore.

#### How to fix

Try to acquire the semaphore again or provide a queue in the [Queue][SemaphoreQueue].

### Queue Timeout reached

When queueing for the specified semaphore, the [Queue Timeout] is reached before the semaphore is acquired.

#### Message Format

The format of the [Message][] is as follows:

```json
"Requested semaphore '/<tenant>/<system>/*/<package>/*/<flow>/<semaphore-name>' could not be acquired.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<tenant>` is the tenant defined in the [Scope][] the semaphore operates in.
* `<system>` is the system defined in the [Scope][] the semaphore operates in.
* `<package>` is the package defined in the [Scope][] the semaphore operates in.
* `<flow>` is the flow defined in the [Scope][] the semaphore operates in.
* `<semaphore-name>` is the [Name][SemaphoreName] of the semaphore.

#### How to fix

Try to acquire the semaphore again or provide a longer [Queue Timeout].

## Properties

### Exception Type

The type of the exception (i.e. `SemaphoreCouldNotBeAcquiredException`).

|           |            |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

|           |            |
|-----------|------------|
| Data Type | [String][] |

### Scope

The [Scope] the semaphore operates in.

|           |            |
|-----------|------------|
| Data Type | [Scope][SemaphoreScope] |

### Semaphore Name

The [Name][SemaphoreName] of the semaphore that was attempted to be acquired.

|           |            |
|-----------|------------|
| Data Type | [String][] |

### Configured Concurrency Limit

The number of executions allowed in the semaphore that was attempted to be acquired.

This is the concurrency limit set when the semaphore was created, which may be different from the specified concurrency limit, see [Multiple Concurrency Limits][MultipleConcurrencyLimits] for more information.

|           |           |
|-----------|-----------|
| Data Type | [Int32][] |

### Queued

Whether or not the execution attempted to queue.

|           |             |
|-----------|-------------|
| Data Type | [Boolean][] |

### Queue Timeout

The length of time the execution queued.

|           |                |
|-----------|----------------|
| Data Type | [TimePeriod][] |

### Help Link

The URL for the relevant section of this exception's help page.

|           |            |
|-----------|------------|
| Data Type | [String][] |

## See Also

### Related Data Types

* [Boolean][]
* [Int32][]
* [Scope][SemaphoreScope]
* [String][]
* [TimePeriod][]

### Related Concepts

* [Exceptions][]
* [Scopes][]
* [Semaphores][Semaphore]

### Related Blocks

* [All Blocks][]

Except:

* [End Flow][]
* [End Workspace][]
* [Handle Flow Exception][]
* [Start Flow][]
* [Wait For Duration][]

### External Documentation

None

[Message]: {{< ref "#message" >}}
[Scope]: {{< ref "#scope" >}}

[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
[Semaphore]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.Semaphores.MainDoc" >}}
[SemaphoreWhatIs]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.Semaphores.WhatIsASemaphore.MainDoc" >}}

[SemaphoreConcurrencyLimit]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.ConcurrencyLimit" >}}
[SemaphoreQueue]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.Queue" >}}
[Scopes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Scopes.MainDoc" >}}
[SemaphoreScope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc" >}}
[SemaphoreName]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.Name" >}}
[Queue Timeout]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.QueueSettings.QueueTimeout" >}}

[MultipleConcurrencyLimits]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.Semaphores.WhatIsASemaphore.MultipleConcurrencyLimits" >}}

[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}
[Handle Flow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[Wait For Duration]: {{< url path="Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}
