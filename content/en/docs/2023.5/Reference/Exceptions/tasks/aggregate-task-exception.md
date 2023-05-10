---
title: "AggregateTaskException"
linkTitle: "AggregateTaskException"
description: "The exception thrown when one or more tasks being waited on throw an exception."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Tasks.AggregateTaskException)</p>

## Description

The exception thrown when one or more tasks being waited on throw an exception.

## How to fix

Ensure that all tasks being waited on cannot throw any unhandled exceptions.

For more information on how to get the results of the successful tasks, see [Waiting for a Task that has thrown an exception][].

## Properties

### TaskExceptions

The [TaskExceptions][TaskExceptions Property] property is a [Structure][] of all exceptions thrown by the tasks as index/exception pairs, mapping the exception thrown to which index of the task that threw it.

Below is an example of the value of [TaskExceptions][TaskExceptions Property] after the first and third tasks both throw a [FlowException][]:
```json
{
    "0": {
        "Exception Type": "FlowException",
        "Message": "This flow threw an exception.",
        "HelpLink": "https://docs.wearecortex.com/docs/2023.5/reference/exceptions/flows/flow-exception"
    },
    "2": {
        "Exception Type": "FlowException",
        "Message": "This flow threw an exception.",
        "HelpLink": "https://docs.wearecortex.com/docs/2023.5/reference/exceptions/flows/flow-exception"
    }
}
```

## See Also

### Related Blocks

* [Wait For All Tasks][]

### External Documentation

None

[TaskExceptions Property]: {{< ref "#taskexceptions" >}}

[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Wait For All Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock.MainDoc" >}}
[Waiting for a Task that has thrown an exception]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock.GetSuccessfulResults" >}}

[Exception]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}
[FlowException]: {{< url path="Cortex.Reference.Exceptions.Flows.FlowException.MainDoc" >}}