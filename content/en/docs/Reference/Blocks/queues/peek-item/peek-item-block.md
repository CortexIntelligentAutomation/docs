---
title: "Peek Item"
linkTitle: "Peek Item"
description: "Gets the item at the beginning of the queue without removing it."
---

{{< figure src="/blocks/queues-peek-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Queues.PeekItem.PeekItemBlock)</p>

## Description

Gets the [Item][Item Property] at the beginning of the [Queue][queue property] without removing it.

## Examples

### Peek the Item at the beginning of the Queue

This example will peek [QueueWithPriority][]&lt;[String][], [Int32][]&gt; that contains `"Item -1"` with a priority of `-1` and `"Item 1"` with a priority of `1` and returns the Item with the minimal priority.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Queue][Queue Property] | `($)Queue`, with value `{"Items": [{"Item": "Item -1", "Priority": -1}, {"Item": "Item 1", "Priority": 1}], "PriorityComparer": {}}` |`($)Queue` is a variable of type [QueueWithPriority][]&lt;[String][], [Int32][]&gt; |
| [Item][Item Property] | `($)Item`, with no value | `($)Item` is a variable that will be set to type of the Item (i.e. [String][]) |

#### Result

Peeking `{"Items": [{"Item": "Item -1", "Priority": -1}, {"Item": "Item 1", "Priority": 1}], "PriorityComparer": {}}` results in the variable `($)Item` being updated to:

```json
"Item -1"
```

and `($)Queue` still has the value:

```json
{
    "Items": [
        {
            "Item": "Item -1", 
            "Priority": -1
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

## Properties

### Queue

The [Queue][Queue Property] to peek from.
  
| | |
|--------------------|---------------------------|
| Data Type | [QueueWithPriority][]&lt;[TItem][], [TPriority][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Queue` with no value |

### Item

The [Item][Item Property] with minimal priority.

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

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
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
