---
title: "What is a Task?"
linkTitle: "What is a Task?"
description: "Overview of tasks in CORTEX, including task types, status, creating tasks with Run Flow Async, and how they relate to C# Task and Task<TResult>."
weight: 1
---

# {{% param title %}}

## Summary

A **task** represents asynchronous work that can run independently of the flow that started it. In {{% ctx %}}, the most common task is an [ExecutionTask][] returned by [Run Flow Async][]: it tracks a separate [flow execution][] while the parent flow continues.

Tasks are conceptually similar to [Task][MS Task] and [Task&lt;TResult&gt;][MS Task TResult] in C# (`System.Threading.Tasks`). Those types expose status, completion flags, and a result; {{% ctx %}} mirrors that model with [ITask&lt;TResult&gt;][ITask] and specialised types for flow executions. You start work asynchronously, optionally wait for results later, and can cancel work that is still running — see [Waiting for Tasks][] and [Cancelling Tasks][].

| Term | Meaning |
| --- | --- |
| [ITask&lt;TResult&gt;][ITask] | Any asynchronous task that can produce a result of type `TResult` |
| [IExecutionTask][] | A task that represents an asynchronous [flow execution][] (`ITask<Structure>`) |
| [ExecutionTask][] | The concrete task created by [Run Flow Async][] |
| Result | The value produced when the task completes successfully (for execution tasks, a [Structure][] of [output variables][]) |

## Types of Tasks

### ITask&lt;TResult&gt;

[ITask&lt;TResult&gt;][ITask] is the common interface for asynchronous tasks. `TResult` is the data type of the value returned when the task completes successfully. Task blocks such as [Wait For Task][] and [Cancel Task][] accept any `ITask<TResult>`.

Properties shared by all tasks include:

| Property | Purpose |
| --- | --- |
| `Id` | Unique identifier of the task ([Guid][]) |
| `Status` | Current state as text (for example `"Running"`, `"RanToCompletion"`, `"Faulted"`, `"Cancelled"`) |
| `IsCompleted` | `true` when the task has finished (successfully, faulted, or cancelled) |
| `IsCompletedSuccessfully` | `true` when the task completed without fault or cancellation |
| `IsFaulted` | `true` when the task threw an exception |
| `IsCancelled` | `true` when the task was cancelled |
| `Exception` | The [Exception][] thrown by the task, or `null` |

These status strings match the lifecycle concepts used by [TaskStatus][MS TaskStatus] in .NET. Note that after cancellation, {{% ctx %}} examples set both `IsCancelled` and `IsFaulted` to `true` (see [Cancelling Tasks][]); that differs from a .NET task that ends only in the `Canceled` state. See [ITask&lt;TResult&gt;][ITask] for full property details.

### IExecutionTask and ExecutionTask

[IExecutionTask][] extends [ITask&lt;Structure&gt;][ITask] for asynchronous flow executions. In addition to the shared task properties, it exposes `ExecutionId` — the unique id of the child [flow execution][].

[ExecutionTask][] is the concrete type produced by [Run Flow Async][]. It can be used wherever [IExecutionTask][] or `ITask<Structure>` is required.

When an execution task completes successfully, its result is a [Structure][] containing the child flow's [output variables][]. Retrieve that result with [Wait For Task][] or [Wait For All Tasks][].

## Creating a Task

The primary way to create a task in a flow is [Run Flow Async][]:

1. Select the child [flow][] to run.
2. Supply any required [input variables][].
3. Store the returned [IExecutionTask][] in a variable (for example `($)ExecutionTask`).

The parent flow continues immediately. The child execution runs asynchronously; if the parent ends first, the child continues to completion. Unhandled exceptions in the child are stored on the task (`IsFaulted` becomes `true` and `Exception` is set) and do not stop the parent unless a wait block observes them.

For creation examples and property details, see [Create an ExecutionTask][] on the [ExecutionTask][] data type page and [Run Flow Async][].

Synchronous calls use [Run Flow][] instead: the parent waits for the child to finish and receives outputs directly, without an [IExecutionTask][].

## Task Lifecycle

A typical execution task moves through these states:

| Status | Meaning |
| --- | --- |
| `"Running"` | The child [flow execution][] is in progress |
| `"RanToCompletion"` | The execution finished successfully; a result is available |
| `"Faulted"` | The execution threw an unhandled exception (see the task's `Exception` property) |
| `"Cancelled"` | The execution was cancelled (for example by [Cancel Task][]) |

You can inspect status with expressions (for example `($)ExecutionTask.IsCompleted` or `($)ExecutionTask.Status`) before deciding whether to wait, cancel, or branch with a [Decision][] block.

## Working with Tasks

| Goal | Prefer |
| --- | --- |
| Start another flow without waiting | [Run Flow Async][] |
| Get the result of one task | [Wait For Task][] — see [Waiting for Tasks][] |
| Get results from several tasks | [Wait For All Tasks][] — see [Waiting for Tasks][] |
| Stop one running task | [Cancel Task][] — see [Cancelling Tasks][] |
| Stop several running tasks | [Cancel All Tasks][] — see [Cancelling Tasks][] |
| Limit how many executions run at once | [Semaphores][] (concurrency control, separate from tasks) |

## Remarks

### Known Limitations

* Tasks are not created with C# `Task.Run` or `async`/`await` in the Expression Editor. Use [Run Flow Async][] (and the wait/cancel blocks) to manage asynchronous flow executions.
* [ITask&lt;TResult&gt;][ITask] and [IExecutionTask][] inputs support the [Expression Editor][] and [Variable Editor][]; the [Literal Editor][] is not available for these types.

## See Also

### Related Concepts

* [Waiting for Tasks][]
* [Cancelling Tasks][]
* [What is a Flow?][]
* [What is an Execution?][]
* [What is a Semaphore?][]
* [Handling Exceptions][]

### Related Data Types

* [ITask&lt;TResult&gt;][ITask]
* [IExecutionTask][]
* [ExecutionTask][]
* [Structure][]
* [Guid][]
* [Exception][]

### Related Blocks

* [Run Flow Async][]
* [Run Flow][]
* [Wait For Task][]
* [Wait For All Tasks][]
* [Cancel Task][]
* [Cancel All Tasks][]

### Related Exceptions

* [AggregateTaskException][]

### External Documentation

* [Task-based asynchronous programming][MS TAP]
* [Task Class][MS Task]
* [Task&lt;TResult&gt; Class][MS Task TResult]
* [TaskStatus Enum][MS TaskStatus]

[Waiting for Tasks]: {{< ref "waiting-for-tasks.md" >}}
[Cancelling Tasks]: {{< ref "cancelling-tasks.md" >}}

[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[ExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ExecutionTask.MainDoc" >}}
[Create an ExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ExecutionTask.Create" >}}

[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Guid]: {{< url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}

[Run Flow Async]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlowAsync.MainDoc" >}}
[Run Flow]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlow.MainDoc" >}}
[Wait For Task]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForTask.MainDoc" >}}
[Wait For All Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock.MainDoc" >}}
[Cancel Task]: {{< url path="Cortex.Reference.Blocks.Tasks.CancelTask.CancelTaskBlock.MainDoc" >}}
[Cancel All Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.CancelTask.CancelAllTasksBlock.MainDoc" >}}
[Decision]: {{< url path="Cortex.Reference.Blocks.Decisions.MainDoc" >}}

[AggregateTaskException]: {{< url path="Cortex.Reference.Exceptions.Tasks.AggregateTaskException.MainDoc" >}}

[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is an Execution?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[flow execution]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[What is a Semaphore?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.Semaphores.WhatIsASemaphore.MainDoc" >}}
[Semaphores]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.Semaphores.WhatIsASemaphore.MainDoc" >}}
[Handling Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[output variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.OutputVariablesStructure" >}}
[input variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Variable Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Literal Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[MS TAP]: https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/task-based-asynchronous-programming
[MS Task]: https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task
[MS Task TResult]: https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1
[MS TaskStatus]: https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.taskstatus
