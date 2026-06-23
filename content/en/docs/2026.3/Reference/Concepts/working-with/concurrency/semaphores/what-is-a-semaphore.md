---
title: "What is a Semaphore?"
linkTitle: "What is a Semaphore?"
description: "Information regarding what a semaphore is, how it limits concurrent flow executions, and how to configure queuing behaviour."
weight: 1
---

# {{% param title %}}

## Summary

A **semaphore** is a mechanism that limits how many [executions][] can run a [block][] (or [workspace][]) at the same time. It is the primary concurrency control in {{% ctx %}} flows.

Semaphores are conceptually similar to [SemaphoreSlim][] in C# (`System.Threading.SemaphoreSlim`), which limits how many threads can access a resource concurrently. In {{% ctx %}}, semaphores are platform-managed: you configure them on blocks using the [semaphore property][SemaphoreProperty], and {{% ctx %}} acquires and releases them automatically around block execution. Semaphore state is shared within the [scope][Scope] you define and is stored in reliable collections on the platform.

| Term | Meaning |
| --- | --- |
| Acquire | An execution enters the semaphore and consumes one concurrency slot |
| Release | An execution leaves the semaphore and frees a concurrency slot |
| [ConcurrencyLimit][] | Maximum number of executions that can be inside the semaphore at once |
| [Queue][] | Optional settings that control whether executions wait in a queue or fail immediately |

Enable a semaphore by setting the [semaphore property][SemaphoreProperty] on a block. The property is an [advanced property][AdvancedProperties] available on most blocks and is represented by the [SemaphoreSettings][] data type. A value of `null` means no semaphore is applied.

The [semaphore property][SemaphoreProperty] has a [Scope][] that defines the area in which the semaphore operates, a [Name][] to identify the semaphore, a [ConcurrencyLimit][] that defines the maximum number of concurrent executions that can enter the semaphore at once, and a [Queue][] property that defines whether the execution should [queue][Queuing Semaphore] or [not queue][Non-Queuing Semaphore] for the semaphore.

For how to set the property in the block editor, see [Semaphore Property][] in [Common Properties][].

## Anatomy of a Semaphore

A semaphore is identified by its [Scope][] and [Name][], and configured using [SemaphoreSettings][].

### Configuration

{{< figure src="/images/workspace/workspace-block-semaphore.svg" >}}

| Property | Data type | Purpose |
| --- | --- | --- |
| [Scope][] | [ScopeDefinition][ScopeDatatype] | Defines which tenant, system, package, and flow share the same semaphore instance |
| [Name][] | [String][] | Identifies the semaphore within the scope (for example `"ApiRateLimit"`) |
| [ConcurrencyLimit][] | [Int32][] | Maximum number of executions allowed inside the semaphore at one time |
| [Queue][] | [QueueSettings][] or `null` | When `null`, the semaphore is [non-queuing][Non-Queuing Semaphore]; otherwise it is [queuing][Queuing Semaphore] with [Priority][] and optional [QueueTimeout][] |

When several blocks use the same [Scope][] and [Name][], they share one semaphore. Blocks that use different names or scopes use separate semaphores, even within the same flow.

In expressions, create settings with the [SemaphoreSettings][] constructor—for example:

```csharp
new SemaphoreSettings(
    new ScopeDefinition(ScopeOption.Current, ScopeOption.Current, ScopeOption.Current, ScopeOption.All),
    "SemaphoreA",
    1,
    null)
```

See [SemaphoreSettings][] for examples of creating settings in the Expression Editor and Literal Editor.

### Semaphore identity

Each semaphore instance is addressed by a path built from its scope and name. When acquisition fails, [SemaphoreCouldNotBeAcquiredException][] messages use this format:

```json
"/<tenant>/<system>/*/<package>/*/<flow>/<semaphore-name>"
```

where `<tenant>`, `<system>`, `<package>`, and `<flow>` come from the [Scope][] definition, and `<semaphore-name>` is the [Name][] value.

### Lifecycle

For each block that has a non-`null` [semaphore property][SemaphoreProperty]:

1. **Acquire** — Before the block starts, the execution attempts to acquire the semaphore. If the [ConcurrencyLimit][] has not been reached, the execution enters immediately. Otherwise behaviour depends on the [Queue][] setting (see below).
2. **Hold** — While the block runs, the execution holds one concurrency slot. Nested blocks with their own semaphores may cause an execution to hold multiple semaphores at once.
3. **Release** — When the block finishes, is stopped, or throws an unhandled exception, the execution releases the semaphore. If it was the last execution inside the semaphore, the semaphore is removed automatically.

An execution that queues for a semaphore waits before the block starts; it does not consume a concurrency slot until it has been dequeued and has entered the semaphore.

### Non-Queuing Semaphore

A [Non-Queuing Semaphore][] refers to a semaphore where executions do not queue when attempting to acquire a semaphore that has reached its concurrency limit. Instead, it throws a [SemaphoreCouldNotBeAcquiredException][ConcurrencyLimitReached] with the [Queued][] property set to `false` to indicate that it did not queue.

Set [Queue][] to `null` to use a non-queuing semaphore.

### Queuing Semaphore

A [Queuing Semaphore][] refers to a semaphore where executions queue when attempting to acquire a semaphore that has reached its concurrency limit. It will join the queue with the [Priority][] specified in the [Queue][] property and wait to enter the semaphore. When it has reached the front of the queue and there is space inside, it will be removed from the queue and enter the semaphore. The queue orders items by priority, preserving first-in-first-out behaviour between items with the same priority. The item with the lowest priority will be dequeued first.

Provide a [QueueSettings][] value (for example `new QueueSettings(0, null)`) to enable queuing.

If an execution spends more time in the queue than the [QueueTimeout][] specified in the [Queue][] property, it will exit the queue and throw a [SemaphoreCouldNotBeAcquiredException][QueueTimeoutReached] with the [Queued][] property set to `true` to indicate that it attempted to queue. A `null` [QueueTimeout][] allows an execution to queue indefinitely.

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

The best way to avoid these deadlocks is to design your flows to avoid them happening in the first place. In the example above, if both executions will need both semaphores to operate, a change that could be made would be to combine both semaphores into one. Alternatively, ensure every flow acquires the semaphores in the same order.

Another way to mitigate the problem would be to use the [QueueTimeout][] property when defining the [QueueSettings][] for each semaphore. Setting the [QueueTimeout][] to a duration reasonably higher than the expected execution time of the operations inside of the semaphore would allow the execution to throw if it has been waiting too long, likely due to a deadlock having occurred. The [SemaphoreCouldNotBeAcquiredException][QueueTimeoutReached] thrown could then be caught to allow the execution to release its semaphores and try again. In the example above, if Semaphore A had a [QueueTimeout][], Execution B times out as it waits to acquire Semaphore A and releases Semaphore B. Execution A then acquires Semaphore B. Execution B retries to acquire Semaphore B and joins the queue. Execution A then finishes its operations, releasing both semaphores and allows Execution B to complete its operations as well.

### Known Limitations

None

## See Also

### Related Concepts

- [Common Properties][]
- [Executions][executions]
- [Handling Exceptions][]
- [Scopes][]

### Related Data Types

- [QueueSettings][]
- [ScopeDefinition][ScopeDatatype]
- [SemaphoreSettings][]

### Related Exceptions

- [SemaphoreCouldNotBeAcquiredException][]

### Related Blocks

- [All Blocks][]

Except:

- [End Flow][]
- [End Workspace][]
- [Handle Flow Exception][]
- [Start Flow][]
- [Wait For Duration][]

### External Documentation

- [SemaphoreSlim Class (System.Threading)][SemaphoreSlim]
- [Semaphore Class (System.Threading)][Semaphore]

[Queuing Semaphore]: {{< ref "#queuing-semaphore" >}}
[Non-Queuing Semaphore]: {{< ref "#non-queuing-semaphore" >}}
[ConcurrencyLimitReached]: {{< url path="Cortex.Reference.Exceptions.Concurrency.Semaphores.SemaphoreCouldNotBeAcquiredException.ConcurrencyLimitReached" >}}
[QueueTimeoutReached]: {{< url path="Cortex.Reference.Exceptions.Concurrency.Semaphores.SemaphoreCouldNotBeAcquiredException.QueueTimeoutReached" >}}
[Queued]: {{< url path="Cortex.Reference.Exceptions.Concurrency.Semaphores.SemaphoreCouldNotBeAcquiredException.Queued" >}}
[SemaphoreCouldNotBeAcquiredException]: {{< url path="Cortex.Reference.Exceptions.Concurrency.Semaphores.SemaphoreCouldNotBeAcquiredException.MainDoc" >}}

[SemaphoreProperty]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.SemaphoreProperty" >}}
[Semaphore Property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.SemaphoreProperty" >}}
[AdvancedProperties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Common Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.MainDoc" >}}

[SemaphoreSettings]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.MainDoc" >}}
[QueueSettings]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.QueueSettings.MainDoc" >}}
[Priority]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.QueueSettings.Priority" >}}
[QueueTimeout]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.QueueSettings.QueueTimeout" >}}

[Scope]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.Scope" >}}
[Name]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.Name" >}}
[ConcurrencyLimit]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.ConcurrencyLimit" >}}
[Queue]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.Queue" >}}

[ScopeDatatype]: {{< url path = "Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc">}}
[Scopes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Scopes.MainDoc" >}}

[executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[Handling Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}
[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}
[Handle Flow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[Wait For Duration]: {{< url path="Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}

[SemaphoreSlim]: https://learn.microsoft.com/en-us/dotnet/api/system.threading.semaphoreslim
[Semaphore]: https://learn.microsoft.com/en-us/dotnet/api/system.threading.semaphore
