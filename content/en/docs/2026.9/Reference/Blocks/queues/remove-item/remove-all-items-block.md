---
title: "Remove All Items"
linkTitle: "Remove All Items"
description: "Removes all items from a queue."
---

{{< figure src="/blocks/Cortex_Blocks_Queues_RemoveItem_RemoveAllItemsBlock_2.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Queues.RemoveItem.RemoveAllItemsBlock)</p>

## Description

Removes all items from a [Queue][queue property].

## Examples

### Remove all items from the Queue

This example will remove all items from [QueueWithPriority][]&lt;[String][], [Int32][]&gt; that contains `"Item -1"` with a priority of `-1` and `"Item 1"` with a priority of `1`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Queue][Queue Property] | `($)Queue`, with value `{"Items": [{"Item": "Item -1", "Priority": -1}, {"Item": "Item 1", "Priority": 1}], "PriorityComparer": {}}` |`($)Queue` is a variable of type [QueueWithPriority][]&lt;[String][], [Int32][]&gt; |

#### Result

Removing all items from `{"Items": [{"Item": "Item -1", "Priority": -1}, {"Item": "Item 1", "Priority": 1}], "PriorityComparer": {}}` results in `($)Queue` being updated to:

```json
{
    "Items": [], 
    "PriorityComparer": {}
}
```

***

## Properties

### Queue

The [Queue][Queue Property] to remove all items from.
  
| | |
|--------------------|---------------------------|
| Data Type | [QueueWithPriority][]&lt;[TItem][], [TPriority][]&gt; |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Queue` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [Queue][Queue Property] is `null`. |

## Remarks

### Empty Queue

If [Queue][Queue Property] is empty (i.e. `{"Items": [], "PriorityComparer": {}}`) there is nothing to remove, so no operation is performed.

[Queue Property]: {{< ref "#queue" >}}

[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[TItem]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[TPriority]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[QueueWithPriority]: {{< url path="Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
