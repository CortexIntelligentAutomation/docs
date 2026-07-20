---
title: "Cancelling Tasks"
linkTitle: "Cancelling Tasks"
description: "How to cancel one or more running tasks in CORTEX, what happens to task status, and how cancellation compares to cooperative cancellation in C#."
weight: 3
---

# {{% param title %}}

## Summary

**Cancelling** a task requests that its asynchronous work stop. In {{% ctx %}}, use [Cancel Task][] or [Cancel All Tasks][] on [ITask&lt;TResult&gt;][ITask] values — typically [IExecutionTask][] / [ExecutionTask][] instances from [Run Flow Async][].

In C#, [Task][MS Task] cancellation is cooperative and built around [CancellationToken][MS Cancellation] (see [Task cancellation][MS Task Cancellation]). {{% ctx %}} exposes cancellation through dedicated blocks rather than tokens in the Expression Editor: the platform stops the underlying [flow execution][] when cancellation is accepted.

| Goal | Block | Notes |
| --- | --- | --- |
| Cancel one task | [Cancel Task][] | No-op if already completed, faulted, or cancelled |
| Cancel every task in a list | [Cancel All Tasks][] | Same per-task rules; list must be non-null, non-empty, and contain no `null` items |

## Cancelling a Single Task

[Cancel Task][] takes an [ITask&lt;TResult&gt;][ITask] and attempts to cancel it.

When cancellation applies to a running [IExecutionTask][]:

* [IsCancelled][] becomes `true`
* [IsCompleted][] becomes `true`
* [IsCompletedSuccessfully][] remains `false`
* [IsFaulted][] becomes `true`
* [Status][] becomes `"Cancelled"`
* [Exception][] is set to the stopped-execution exception (Cancel Task examples show `FlowExecutionStoppedException` with message `"Flow execution has been stopped!"`)

Example task state after a successful cancel:

```json
{
  "ExecutionId": "00000000-0000-0000-0000-000000000000",
  "Id": "00000000-0000-0000-0000-000000000000",
  "IsCancelled": true,
  "IsCompleted": true,
  "IsCompletedSuccessfully": false,
  "IsFaulted": true,
  "Status": "Cancelled",
  "Exception": {
    "Exception Type": "FlowExecutionStoppedException",
    "Message": "Flow execution has been stopped!"
  }
}
```

After cancellation, [Wait For Task][] re-throws that cancellation exception if you wait on the same task. [Wait For All Tasks][] includes it in [AggregateTaskException][] / [TaskExceptions][] when waiting on a list. See [Waiting for Tasks][].

## Cancelling Multiple Tasks

[Cancel All Tasks][] cancels every task in an [IList][]&lt;[ITask&lt;TResult&gt;][ITask]&gt;. Each item follows the same rules as [Cancel Task][].

Use this when several [Run Flow Async][] children should be stopped together — for example after a timeout path, a failed sibling, or a user-driven abort in the parent flow.

## When Cancellation Has No Effect

Cancellation is ignored (the task's status is left unchanged) when the task has already:

| Current status | Effect of cancel |
| --- | --- |
| `"RanToCompletion"` | None — work already finished successfully |
| `"Faulted"` | None — work already ended with an exception |
| `"Cancelled"` | None — already cancelled |

Only a task that is still `"Running"` (or otherwise not yet completed) can transition to `"Cancelled"` via these blocks.

## Cancellation and Waiting

| Pattern | Behaviour |
| --- | --- |
| Cancel, then [Wait For Task][] | Wait re-throws the cancellation exception |
| Cancel some tasks in a list, then [Wait For All Tasks][] | Wait finishes after all tasks complete, then throws [AggregateTaskException][] with entries for cancelled (and any faulted) indexes |
| Cancel and do not wait | Child executions stop when cancellation is accepted; the parent continues without observing the exception unless it waits or inspects [Exception][] / [Status][] |

## Remarks

### Known Limitations

* There is no Expression Editor API equivalent to constructing a `CancellationTokenSource` and passing tokens into arbitrary blocks. Cancel asynchronous flow executions with [Cancel Task][] / [Cancel All Tasks][].
* Cancellation stops the targeted execution; it does not automatically cancel unrelated tasks. Cancel each task (or list) you need to stop.

## See Also

### Related Concepts

* [What is a Task?][]
* [Waiting for Tasks][]
* [Handling Exceptions][]
* [What is an Execution?][]

### Related Data Types

* [ITask&lt;TResult&gt;][ITask]
* [IExecutionTask][]
* [ExecutionTask][]
* [IList][]

### Related Blocks

* [Cancel Task][]
* [Cancel All Tasks][]
* [Wait For Task][]
* [Wait For All Tasks][]
* [Run Flow Async][]

### Related Exceptions

* [AggregateTaskException][]
* [PropertyNullException][]
* [PropertyEmptyException][]
* [PropertyContainsNullItemException][]

### External Documentation

* [Task cancellation][MS Task Cancellation]
* [Cancellation in Managed Threads][MS Cancellation]
* [How to: Cancel a Task and Its Children][MS Cancel Task Children]

[What is a Task?]: {{< ref "what-is-a-task.md" >}}
[Waiting for Tasks]: {{< ref "waiting-for-tasks.md" >}}

[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[ExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ExecutionTask.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IsCancelled]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[IsCompleted]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[IsCompletedSuccessfully]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[IsFaulted]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[Status]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}

[Cancel Task]: {{< url path="Cortex.Reference.Blocks.Tasks.CancelTask.CancelTaskBlock.MainDoc" >}}
[Cancel All Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.CancelTask.CancelAllTasksBlock.MainDoc" >}}
[Wait For Task]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForTask.MainDoc" >}}
[Wait For All Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock.MainDoc" >}}
[Run Flow Async]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlowAsync.MainDoc" >}}

[AggregateTaskException]: {{< url path="Cortex.Reference.Exceptions.Tasks.AggregateTaskException.MainDoc" >}}
[TaskExceptions]: {{< url path="Cortex.Reference.Exceptions.Tasks.AggregateTaskException.TaskExceptions" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyContainsNullItemException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyContainsNullItemException.MainDoc" >}}

[flow execution]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[What is an Execution?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[Handling Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}

[MS Task]: https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task
[MS Task Cancellation]: https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/task-cancellation
[MS Cancellation]: https://learn.microsoft.com/en-us/dotnet/standard/threading/cancellation-in-managed-threads
[MS Cancel Task Children]: https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/how-to-cancel-a-task-and-its-children
