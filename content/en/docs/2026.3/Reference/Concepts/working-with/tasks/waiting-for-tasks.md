---
title: "Waiting for Tasks"
linkTitle: "Waiting for Tasks"
description: "How to wait for one or more tasks to complete in CORTEX, retrieve results, and handle faults and cancellations — comparable to Task.Wait and Task.WaitAll in C#."
weight: 2
---

# {{% param title %}}

## Summary

**Waiting** pauses the current [flow execution][] until one or more [tasks][What is a Task?] finish, then returns their results. Use it when you started work with [Run Flow Async][] (or hold any [ITask&lt;TResult&gt;][ITask]) and need the outcome before continuing.

This matches waiting on [Task][MS Task] / [Task&lt;TResult&gt;][MS Task TResult] in C# with instance [Wait][MS Task Wait] methods, or waiting on many tasks with [Task.WaitAll][MS Task WaitAll]. In {{% ctx %}}:

| Goal | Block | C# analogue |
| --- | --- | --- |
| Wait for one task and get its result | [Wait For Task][] | Reading `Result` after the task completes (blocks until available) |
| Wait for every task in a list and get all results | [Wait For All Tasks][] | `Task.WaitAll(tasks)` |

If a task has already completed when the wait begins, the block does not delay — it returns the result immediately.

## Waiting for a Single Task

[Wait For Task][] takes an [ITask&lt;TResult&gt;][ITask] and outputs the task's result as `TResult`.

For an [IExecutionTask][] / [ExecutionTask][], `TResult` is a [Structure][] of the child flow's [output variables][]. Example outcome after a successful wait:

```json
{
  "ResultVariable": "ResultValue"
}
```

### Faulted or cancelled tasks

If the task faults or is cancelled before or during the wait, [Wait For Task][] **re-throws** that exception into the waiting flow. Handle it with [Handle Block Exception][] (or related exception-handling blocks) if the parent should continue.

Unhandled exceptions from a child started with [Run Flow Async][] are stored on the task and do not affect the parent until a wait observes them. See the Remarks on [Run Flow Async][] (Exceptions Thrown by a Child Flow).

## Waiting for Multiple Tasks

[Wait For All Tasks][] takes an [IList][] of [ITask&lt;TResult&gt;][ITask] values and outputs an [IList][] of results. Result order matches task order (index `0` with index `0`, and so on).

The block waits until **every** task has finished — including those that faulted or were cancelled — before it returns or throws.

### AggregateTaskException

If one or more tasks fault or are cancelled, [Wait For All Tasks][] throws [AggregateTaskException][] after all tasks complete. That exception's [TaskExceptions][] property is an [IDictionary][]&lt;[Int32][], [Exception][]&gt; mapping each failing task's index to its exception — similar in role to [AggregateException][MS AggregateException] when waiting on multiple .NET tasks.

Example after the first and third tasks throw:

```json
{
  "0": {
    "Exception Type": "FlowException",
    "Message": "This flow threw an exception."
  },
  "2": {
    "Exception Type": "FlowException",
    "Message": "This flow threw an exception."
  }
}
```

### Getting results from successful tasks only

[AggregateTaskException][] means the wait block does not return a partial results list. To collect results from tasks that succeeded:

1. Catch [AggregateTaskException][] with [Handle Block Exception][].
2. Remove the failed tasks from the list (for example with [Remove Items At Indexes][], using `TaskExceptions.Keys` as the indexes).
3. Run [Wait For All Tasks][] again on the remaining tasks (they are already complete, so this returns immediately).

See [Waiting for a Task that has thrown an exception][] on the [Wait For All Tasks][] block page for a worked example.

## Choosing How to Wait

| Situation | Prefer |
| --- | --- |
| One asynchronous flow; need its outputs | [Wait For Task][] |
| Several asynchronous flows; need all outputs together | [Wait For All Tasks][] |
| Fire-and-forget; no result needed | Do not wait — let the child finish on its own ([Run Flow Async][] child continues even if the parent ends) |
| Need to stop work instead of waiting | [Cancelling Tasks][] |

## Remarks

### Known Limitations

* There is no dedicated "wait for any" block equivalent to `Task.WaitAny`. To proceed when the first of several tasks finishes, use separate wait paths, polling of task status properties, or redesign so a single task represents the work you care about first.
* [Wait For Task][] throws [PropertyNullException][] when [Task][] is `null`.
* [Wait For All Tasks][] requires a non-null, non-empty list with no `null` items; otherwise it throws [PropertyNullException][], [PropertyEmptyException][], or [PropertyContainsNullItemException][].

## See Also

### Related Concepts

* [What is a Task?][]
* [Cancelling Tasks][]
* [Handling Exceptions][]
* [What is an Exception?][]

### Related Data Types

* [ITask&lt;TResult&gt;][ITask]
* [IExecutionTask][]
* [ExecutionTask][]
* [IList][]
* [Structure][]

### Related Blocks

* [Wait For Task][]
* [Wait For All Tasks][]
* [Run Flow Async][]
* [Handle Block Exception][]
* [Remove Items At Indexes][]

### Related Exceptions

* [AggregateTaskException][]
* [PropertyNullException][]
* [PropertyEmptyException][]
* [PropertyContainsNullItemException][]

### External Documentation

* [Task-based asynchronous programming][MS TAP]
* [Task.Wait Method][MS Task Wait]
* [Task.WaitAll Method][MS Task WaitAll]
* [AggregateException Class][MS AggregateException]

[What is a Task?]: {{< ref "what-is-a-task.md" >}}
[Cancelling Tasks]: {{< ref "cancelling-tasks.md" >}}

[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[ExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ExecutionTask.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}

[Wait For Task]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForTask.MainDoc" >}}
[Wait For All Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock.MainDoc" >}}
[Waiting for a Task that has thrown an exception]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock.GetSuccessfulResults" >}}
[Task]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForTask.MainDoc" >}}
[Run Flow Async]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlowAsync.MainDoc" >}}
[Handle Block Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Remove Items At Indexes]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsAtIndexes.MainDoc" >}}

[AggregateTaskException]: {{< url path="Cortex.Reference.Exceptions.Tasks.AggregateTaskException.MainDoc" >}}
[TaskExceptions]: {{< url path="Cortex.Reference.Exceptions.Tasks.AggregateTaskException.TaskExceptions" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyContainsNullItemException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyContainsNullItemException.MainDoc" >}}

[flow execution]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[Handling Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[What is an Exception?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}
[output variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.OutputVariablesStructure" >}}

[MS TAP]: https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/task-based-asynchronous-programming
[MS Task]: https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task
[MS Task TResult]: https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1
[MS Task Wait]: https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.wait
[MS Task WaitAll]: https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.waitall
[MS AggregateException]: https://learn.microsoft.com/en-us/dotnet/api/system.aggregateexception
