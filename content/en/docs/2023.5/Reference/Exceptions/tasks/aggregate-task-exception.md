---
title: "AggregateTaskException"
linkTitle: "AggregateTaskException"
description: "The exception thrown when one or more tasks being waited on throw an exception."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Tasks.AggregateTaskException)</p>

## Description

The exception thrown when one or more tasks being waited on throw an exception.

## Reasons

### A task has thrown an exception

One or more tasks being waited on has thrown an exception.

#### Message Format

The format of the [Message][] is as follows:

```json
"One or more tasks that were being waited on threw an exception. Details of the exceptions can be found in the TaskExceptions property.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure that all tasks being waited on cannot throw any unhandled exceptions.

For more information on how to get the results of the successful tasks, see [Waiting for a Task that has thrown an exception][].

## Properties

### Exception Type

The type of the exception (i.e. `AggregateTaskException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### TaskExceptions

The [TaskExceptions][TaskExceptions Property] property is an [IDictionary][]&lt;[Int32][],[Exception][]&gt; of all exceptions thrown by the tasks as index/exception pairs, mapping the exception thrown to the index of the task that threw it.

| | |
|-----------|------------|
| Data Type | [IDictionary][]&lt;[Int32][],[Exception][]&gt; |

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

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## See Also

### Related Data Types

* [Exception][]
* [FlowException][]
* [IDictionary<TKey, TItem>][IDictionary]
* [Int32][]
* [String][]

### Related Concepts

* [Exceptions][]

### Related Blocks

* [Wait For All Tasks][]

### External Documentation

None

[Message]: {{< ref "#message" >}}

[TaskExceptions Property]: {{< ref "#taskexceptions" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Wait For All Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock.MainDoc" >}}
[Waiting for a Task that has thrown an exception]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock.GetSuccessfulResults" >}}

[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}
[FlowException]: {{< url path="Cortex.Reference.Exceptions.Flows.FlowException.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}