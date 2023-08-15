---
title: "What is a Semaphore?"
linkTitle: "What is a Semaphore?"
description: "Information regarding what a semaphore is."
weight: 1
---

# {{% param title %}}

{{< workinprogress >}}

## Summary

TODO:

## Remarks

### Queuing Semaphore

A [Queuing Semaphore] refers to a semaphore that queues when attempting to acquire a semaphore that has reached its concurrency limit. It will join the queue with the [Priority] specified in the [QueueSettings] and wait to enter the semaphore when it has reached the front of the queue and there is space inside.

If an execution spends more time in the queue than the [QueueTimeout] specified in the [QueueSettings], it will exit the queue and throw a [SemaphoreCouldNotBeAcquiredException] with the [Queued] property set to `true` to indicate that it attempted to queue.

### Non-Queuing Semaphore

A [Non-Queuing Semaphore] refers to a semaphore that does not queue when attempting to acquire a semaphore that has reached its concurrency limit. Instead, it throws a [SemaphoreCouldNotBeAcquiredException] with the [Queued] property set to `false` to indicate that it did not queue.

### Known Limitations

TODO

## See Also

### Related Concepts

TODO

### Related Data Types

TODO

### Related Blocks

TODO

### External Documentation

TODO

[Queuing Semaphore]: {{< ref "#queuing-semaphore" >}}
[Non-Queuing Semaphore]: {{< ref "#non-queuing-semaphore" >}}

[SemaphoreCouldNotBeAcquiredException]: {{< url path="Cortex.Reference.Exceptions.Concurrency.Semaphores.SemaphoreCouldNotBeAcquiredException.MainDoc" >}}
[Queued]: {{< url path="Cortex.Reference.Exceptions.Concurrency.Semaphores.SemaphoreCouldNotBeAcquiredException.Queued" >}}

[QueueSettings]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.QueueSettings.MainDoc" >}}
[Priority]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.QueueSettings.Priority" >}}
[QueueTimeout]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.QueueSettings.QueueTimeout" >}}
