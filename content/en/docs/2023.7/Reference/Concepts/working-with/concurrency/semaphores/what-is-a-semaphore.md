---
title: "What is a Semaphore?"
linkTitle: "What is a Semaphore?"
description: "Information regarding what a semaphore is."
weight: 1
---

# {{% param title %}}

{{< workinprogress >}}

## Summary

A semaphore is a mechanism that limits the number of concurrent executions that can be in a block or workspace.

The [semaphore property][SemaphoreProperty] is an [advanced property][AdvancedProperties] added to all blocks to allow any part of a flow to be concurrency limited. The [semaphore property][SemaphoreProperty] has a [Scope] that defines the area in which the semaphore will operate, a [Name] to identify the semaphore, a [ConcurrencyLimit] that defines the maximum amount of concurrent execution that can enter the semaphore at once and a [Queue] property that defines whether the semaphore is a [queuing semaphore] or a [non-queuing semaphore].

## Anatomy of a Semaphore

TODO

### Non-Queuing Semaphore

A [Non-Queuing Semaphore] refers to a semaphore that does not queue when attempting to acquire a semaphore that has reached its concurrency limit. Instead, it throws a [SemaphoreCouldNotBeAcquiredException] with the [Queued] property set to `false` to indicate that it did not queue.

### Queuing Semaphore

A [Queuing Semaphore] refers to a semaphore that queues when attempting to acquire a semaphore that has reached its concurrency limit. It will join the queue with the [Priority] specified in the [QueueSettings] and wait to enter the semaphore when it has reached the front of the queue and there is space inside. The queue functions as a [QueueWithPriority]. See [QueueWithPriority] or [QueueSettings] for more information.

If an execution spends more time in the queue than the [QueueTimeout] specified in the [QueueSettings], it will exit the queue and throw a [SemaphoreCouldNotBeAcquiredException] with the [Queued] property set to `true` to indicate that it attempted to queue.

## Remarks

### Automatic Management

The semaphores are managed automatically, without the need to define and manage the semaphores seperately. When a block attempts to acquire a semaphore that does not exist, the semaphore will automatically be created and configured with the defined [ConcurrencyLimit]. When a semaphore is emptied for whatever reason (final execution exits the semaphore or is stopped from executing while inside), the semaphore is automatically deleted.

### Multiple ConcurrencyLimits

If two blocks try to create the same semaphore (using the same [Scope] and same [Name]) with different [ConcurrencyLimits][ConcurrencyLimit], the semaphore's [ConcurrencyLimit] will be set equal to the value specified in the first block to be used. The other block will respect the [ConcurrencyLimit] already set until the semaphore is empty and is automatically deleted. The semaphore is then able to be recreated with the new [ConcurrencyLimit].

### Known Limitations

TODO

## See Also

### Related Concepts

TODO

### Related Data Types

- [QueueSettings]
- [QueueWithPriority]
- [Scope][ScopeDatatype]
- [SemaphoreSettings]

### Related Blocks

TODO

### External Documentation

TODO

[Queuing Semaphore]: {{< ref "#queuing-semaphore" >}}
[Non-Queuing Semaphore]: {{< ref "#non-queuing-semaphore" >}}

[SemaphoreCouldNotBeAcquiredException]: {{< url path="Cortex.Reference.Exceptions.Concurrency.Semaphores.SemaphoreCouldNotBeAcquiredException.MainDoc" >}}
[Queued]: {{< url path="Cortex.Reference.Exceptions.Concurrency.Semaphores.SemaphoreCouldNotBeAcquiredException.Queued" >}}

[SemaphoreProperty]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.SemaphoreProperty" >}}
[AdvancedProperties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[SemaphoreSettings]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.MainDoc" >}}
[QueueSettings]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.QueueSettings.MainDoc" >}}
[Priority]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.QueueSettings.Priority" >}}
[QueueTimeout]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.QueueSettings.QueueTimeout" >}}

[Scope]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.Scope" >}}
[Name]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.Name" >}}
[ConcurrencyLimit]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.ConcurrencyLimit" >}}
[Queue]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.Queue" >}}

[QueueWithPriority]: {{< url path="Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}
[ScopeDatatype]: {{< url path = "Cortex.Reference.DataTypes.Scopes.Scope.MainDoc">}}
