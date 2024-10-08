---
title: "What is a Semaphore?"
linkTitle: "What is a Semaphore?"
description: "Information regarding what a semaphore is."
weight: 1
---

# {{% param title %}}

{{< workinprogress >}}

## Summary

A semaphore is a mechanism that limits the number of concurrent executions that can be executing a block or workspace, and can be enabled using the [semaphore property][SemaphoreProperty].

The [semaphore property][SemaphoreProperty] is an [advanced property][AdvancedProperties] added to most blocks to allow any part of a flow to be concurrency limited. The [semaphore property][SemaphoreProperty] has a [Scope][] that defines the area in which the semaphore will operate, a [Name][] to identify the semaphore, a [ConcurrencyLimit][] that defines the maximum number of concurrent executions that can enter the semaphore at once and a [Queue][] property that defines whether the execution should [queue][queuing semaphore] or [not queue][non-queuing semaphore] for the semaphore.

## Anatomy of a Semaphore

TODO

### Non-Queuing Semaphore

A [Non-Queuing Semaphore][] refers to a semaphore where executions do not queue when attempting to acquire a semaphore that has reached its concurrency limit. Instead, it throws a [SemaphoreCouldNotBeAcquiredException][ConcurrencyLimitReached] with the [Queued][] property set to `false` to indicate that it did not queue.

### Queuing Semaphore

A [Queuing Semaphore][] refers to a semaphore where executions queue when attempting to acquire a semaphore that has reached its concurrency limit. It will join the queue with the [Priority][] specified in the [Queue][] property and wait to enter the semaphore. When it has reached the front of the queue and there is space inside, it will be removed from the queue and enter the semaphore. The queue orders items by priority, preserving first-in-first-out behaviour between items with the same priority. The item with the lowest priority will be dequeued first.

If an execution spends more time in the queue than the [QueueTimeout][] specified in the [Queue][] property, it will exit the queue and throw a [SemaphoreCouldNotBeAcquiredException][QueueTimeoutReached] with the [Queued][] property set to `true` to indicate that it attempted to queue.

## Remarks

### Automatic Management

The semaphores are managed automatically, without the need to define and manage the semaphores separately. When a block attempts to acquire a semaphore that does not exist, the semaphore will automatically be created and configured with the defined [ConcurrencyLimit][]. When the last execution in a semaphore is released (last execution exits the semaphore or is stopped from executing while inside), the semaphore is automatically deleted.

### Multiple Concurrency Limits

If a block tries to use a semaphore that already exists (using the same [Scope][] and same [Name][]) but specifies a different [ConcurrencyLimit][], the semaphore will continue respecting the [ConcurrencyLimit][] of when it was created. The block will respect the [ConcurrencyLimit][] already set until the semaphore is emptied and is automatically deleted. The semaphore is then able to be recreated with the new [ConcurrencyLimit][].

### Preventing Deadlocks

Deadlocks in flows can occur when multiple executions have acquired different semaphores, and then each execution wants to acquire another semaphore that is being used by another execution, which in turn is waiting for first execution to release its semaphore. E.g.

```
There exists two semaphores:
 - Semaphore A with a ConcurrencyLimit of 1 and a queue
 - Semaphore B with a ConcurrencyLimit of 1 and a queue

There exists two executions:
 - Execution A acquires Semaphore A
 - Execution B acquires Semaphore B
 - Execution A tries to acquire Semaphore B and joins the queue
 - Execution B tries to acquire Semaphore A and joins the queue

 Both Execution A and Execution B are deadlocked.
```

In this example, Execution A can't proceed as it's waiting for the semaphore that Execution B is using; which in turn is waiting for the semaphore that Execution A is using.

The best way to avoid these deadlocks is to design your flows to avoid them happening in the first place. In the example above, if both executions will need both semaphores to operate, a change that could be made would be to combine both semaphores into one.

Another way to mitigate the problem would be to use the [QueueTimeout][] property when defining the [QueueSettings][] for each semaphore. Setting the [QueueTimeout][] to a duration reasonably higher than the expected execution time of the operations inside of the semaphore would allow the execution to throw if it has been waiting too long, likely due to a deadlock having occurred. The [SemaphoreCouldNotBeAcquiredException][QueueTimeoutReached] thrown could then be caught to allow the execution to release its semaphores and try again. In the example above, if Semaphore A had a [QueueTimeout][], Execution B timeouts out as it waits to acquire Semaphore A and releases Semaphore B. Execution A then acquires Semaphore B. Execution B retries to acquire Semaphore B and joins the queue. Execution A then finishes its operations, releasing both semaphores and allows Execution B to complete its operations as well.

### Known Limitations

None

## See Also

### Related Concepts

None

### Related Data Types

- [QueueSettings][]
- [ScopeDefinition][ScopeDatatype]
- [SemaphoreSettings][]

### Related Blocks

- [All Blocks][]

Except:

- [End Flow][]
- [End Workspace][]
- [Handle Flow Exception][]
- [Start Flow][]
- [Wait For Duration][]

### External Documentation

None

[Queuing Semaphore]: {{< ref "#queuing-semaphore" >}}
[Non-Queuing Semaphore]: {{< ref "#non-queuing-semaphore" >}}

[ConcurrencyLimitReached]: {{< url path="Cortex.Reference.Exceptions.Concurrency.Semaphores.SemaphoreCouldNotBeAcquiredException.ConcurrencyLimitReached" >}}
[QueueTimeoutReached]: {{< url path="Cortex.Reference.Exceptions.Concurrency.Semaphores.SemaphoreCouldNotBeAcquiredException.QueueTimeoutReached" >}}
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

[ScopeDatatype]: {{< url path = "Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc">}}

[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}
[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}
[Handle Flow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[Wait For Duration]: {{< url path="Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}
