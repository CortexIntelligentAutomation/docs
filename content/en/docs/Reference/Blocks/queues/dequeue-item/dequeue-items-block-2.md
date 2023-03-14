---
title: "Dequeue Items"
linkTitle: "Dequeue Items"
description: "Removes and returns Items at the beginning of a Queue."
---

{{< figure src="/blocks/queues-dequeue-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Queues.DequeueItem.DequeueItemsBlock`2)</p>

## Description

Removes and returns [Items][Items Property] at the beginning of a [Queue][Queue Property].

Each item is removed and returned to [Items][Items Property] in the same order as they were in the [Queue][Queue Property].

## Examples

### Dequeue Count of Items from a Queue containing items with different priorities

This example will dequeue `2` items from a [QueueWithPriority][]&lt;[String][], [Int32][]&gt; that contains `"Item -1"` with a priority of `-1`,   `"Item 0"` with a priority of `0` and `"Item 1"` with a priority of `1`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Queue][Queue Property] | `($)Queue`, with value `{"Items": [{"Item": "Item -1", "Priority": -1}, {"Item": "Item 0", "Priority": 0}, {"Item": "Item 1", "Priority": 1}], "PriorityComparer": {}}` | `($)Queue` is a variable of type [QueueWithPriority][]&lt;[String][], [Int32][]&gt; |
| [Count][Count Property] | `($)Count`, with value `2` | `($)Count` is a variable of type [Int32][] |
| [Items][Items Property] | `($)Items`, with no value | `($)Items` is a variable that will be set to a [List][]&lt;[String][]&gt; value |

#### Result

Dequeueing `2` items from `{"Items": [{"Item": "Item -1", "Priority": -1}, {"Item": "Item 0", "Priority": 0}, {"Item": "Item 1", "Priority": 1}], "PriorityComparer": {}}` results in the variable `($)Items` being updated to the following:

```json
["Item -1", "Item 0"]
```

and the variable `($)Queue` being updated to the following:

```json
{
    "Items": [
        {
            "Item": "Item 1",
            "Priority": 1
        }
    ], 
    "PriorityComparer": {}
}
```

***

### Dequeue Count of Items from a Queue containing items with the same priority

This example will dequeue `3` items from a [QueueWithPriority][]&lt;[Int32][], [Int32][]&gt; that contains `1` with a priority of `0`, `2` with a priority of `0`, `3` with a priority of `0` and `4` with a priority of `0`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Queue][Queue Property] | `($)Queue`, with value `{"Items": [{"Item": 1, "Priority": 0}, {"Item": 2, "Priority": 0}, {"Item": 3, "Priority": 0}, {"Item": 4, "Priority": 0}], "PriorityComparer": {}}` | `($)Queue` is a variable of type [QueueWithPriority][]&lt;[Int32][], [Int32][]&gt; |
| [Count][Count Property] | `($)Count`, with value `3` | `($)Count` is a variable of type [Int32][] |
| [Items][Items Property] | `($)Items`, with no value | `($)Items` is a variable that will be set to a [List][]&lt;[Int32][]&gt; value |

#### Result

Dequeueing `3` items from `{"Items": [{"Item": 1, "Priority": 0}, {"Item": 2, "Priority": 0}, {"Item": 3, "Priority": 0}, {"Item" : 4, "Priority": 0}], "PriorityComparer": {}}` results in the variable `($)Items` being updated to the following:

```json
[1, 2, 3]
```

and the variable `($)Queue` being updated to the following:

```json
{
    "Items": [
        {
            "Item": 4,
            "Priority": 0
        }
    ], 
    "PriorityComparer": {}
}
```

***

## Properties

### Queue

The [Queue][Queue Property] to dequeue the [Items][Items Property] from.
  
| | |
|--------------------|---------------------------|
| Data Type | [QueueWithPriority][]&lt;[TItem][], [TPriority][]&gt; |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Queue` with no value |

### Count

The [Count][Count Property] of [Items][Items Property] to dequeue.

| | |
|--------------------|---------------------------|
| Data Type | [Int32] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Count` with no value |

### Items

The [Items][Items Property] at the beginning of the [Queue][Queue Property].

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Items` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyEmptyException][] | Thrown when [Queue][Queue Property] contains no items.|
| [PropertyNullException][] | Thrown when [Queue][Queue Property] is `null`. |
| [PropertyValueOutOfRangeException][] | Thrown when [Count][Count Property] is greater than the count of items in [Queue][Queue Property]. |

## Remarks

### Negative Count

If [Count][Count Property] is negative, all items are dequeued from [Queue][Queue Property] to [Items][Items Property].

### Zero Count

If [Count][Count Property] is `0`, no items are dequeued and [Items][Items Property] is set to an empty list (i.e. `[]`).

[Queue Property]: {{< ref "#queue" >}}
[Count Property]: {{< ref "#count" >}}
[Items Property]: {{< ref "#items" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[TPriority]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[List]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}


[QueueWithPriority]: {{< url "Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
