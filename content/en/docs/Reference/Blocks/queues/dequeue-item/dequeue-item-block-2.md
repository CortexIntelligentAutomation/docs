---
title: "Dequeue Item"
linkTitle: "Dequeue Item"
description: "Removes and returns the Item at the beginning of a Queue."
---

{{< figure src="/blocks/queues-dequeue-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Queues.DequeueItem.DequeueItemBlock`2)</p>

## Description

Removes and returns the [Item][Item Property] at the beginning of a [Queue][Queue Property].

## Examples

### Dequeue an Item from a Queue containing Items with different priorities

This example will dequeue an item from a [QueueWithPriority][]&lt;[String][], [Int32][]&gt; that contains `"Item -1"` with a priority of `-1`,   `"Item 0"` with a priority of `0` and `"Item 1"` with a priority of `1`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Queue][Queue Property] | `($)Queue`, with value `{"Items": [{"Item": "Item -1", "Priority": -1}, {"Item": "Item 0", "Priority": 0}, {"Item": "Item 1", "Priority": 1}], "PriorityComparer": {}}` | `($)Queue` is a variable of type [QueueWithPriority][]&lt;[String][], [Int32][]&gt; |
| [Item][Item Property] | `($)Item`, with no value | `($)Item` is a variable that will be set to the type of the item (i.e. [String][]) |

#### Result

Dequeueing an item from `{"Items": [{"Item": "Item -1", "Priority": -1}, {"Item": "Item 0", "Priority": 0}, {"Item": "Item 1", "Priority": 1}], "PriorityComparer": {}}` results in the variable `($)Item` being updated to the following:

```json
"Item -1"
```

and the variable `($)Queue` being updated to the following:

```json
{
    "Items": [
        {
            "Item": "Item 0", 
            "Priority": 0
        },
        {
            "Item": "Item 1",
            "Priority": 1
        }
    ], 
    "PriorityComparer": {}
}
```

***

### Dequeue an Item from a Queue containing Items with the same priority

This example will dequeue an item from a [QueueWithPriority][]&lt;[Int32][], [Int32][]&gt; that contains `1` with a priority of `0`, `2` with a priority of `0` and `3` with a priority of `0`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Queue][Queue Property] | `($)Queue`, with value `{"Items": [{"Item": 1, "Priority": 0}, {"Item": 2, "Priority": 0}, {"Item": 3, "Priority": 0}], "PriorityComparer": {}}` | `($)Queue` is a variable of type [QueueWithPriority][]&lt;[Int32][], [Int32][]&gt; |
| [Item][Item Property] | `($)Item`, with no value | `($)Item` is a variable that will be set to the type of the item (i.e. [Int32]) |

#### Result

Dequeueing an item from `{"Items": [{"Item": 1, "Priority": 0}, {"Item": 2, "Priority": 0}, {"Item": 3, "Priority": 0}], "PriorityComparer": {}}` results in the variable `($)Item` being updated to the following:

```json
1
```

and the variable `($)Queue` being updated to the following:

```json
{
    "Items": [
        {
            "Item": 2, 
            "Priority": 0
        },
        {
            "Item": 3,
            "Priority": 0
        }
    ], 
    "PriorityComparer": {}
}
```

***

## Properties

### Queue

The [Queue][Queue Property] to dequeue an [Item][Item Property] from.
  
| | |
|--------------------|---------------------------|
| Data Type | [QueueWithPriority][]&lt;[TItem][], [TPriority][]&gt; |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Queue` with no value |

### Item

The [Item][Item Property] at the beginning of the [Queue][Queue Property].

| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Item` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyEmptyException][] | Thrown when [Queue][Queue Property] contains no items.|
| [PropertyNullException][] | Thrown when [Queue][Queue Property] is `null`. |

## Remarks

None

[Queue Property]: {{< ref "#queue" >}}
[Item Property]: {{< ref "#item" >}}

[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[TPriority]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[QueueWithPriority]: {{< url "Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
