---
title: "Enqueue Item"
linkTitle: "Enqueue Item"
description: "Adds an Item to a Queue at the specified Priority."
---

{{< figure src="/blocks/queues-enqueue-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Queues.EnqueueItem.EnqueueItemBlock`2)</p>

## Description

Adds an [Item][Item Property] to a [Queue][Queue Property] at the specified [Priority][Priority Property].

## Examples

### Enqueue an Item to an empty Queue

This example will enqueue `"Some Value"` with a priority of `0` to an empty [QueueWithPriority][]&lt;[String][], [Int32][]&gt;.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Queue][Queue Property] | `($)Queue`, with value `{"Items": [], "PriorityComparer": {}}` | `($)Queue` is a variable of type [QueueWithPriority][]&lt;[String][], [Int32][]&gt; |
| [Item][Item Property] | `($)Item`, with value `"Some Value"` | `($)Item` is a variable of type [String][] |
| [Priority][Priority Property] | `($)Priority`, with value `0` | `($)Priority` is a variable of type [Int32][] |

#### Result

Adding `"Some Value"` with priority `0` to `{"Items": [], "PriorityComparer": {}}` results in the variable `($)Queue` being updated to the following:

```json
{
    "Items": [
        {
            "Item": "Some Value", 
            "Priority": 0
        }
    ], 
    "PriorityComparer": {}
}
```

***

### Enqueue an Item to Queue already containing Items

This example will enqueue `"Some Value"` with a priority of `0` to a [QueueWithPriority][]&lt;[String][], [Int32][]&gt; that contains `"Element -1"` with a priority of `-1` and `"Element 1"` with a priority of `1`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Queue][Queue Property] | `($)Queue`, with value `{"Items": [{"Item": "Element -1", "Priority": -1}, {"Item": "Element 1", "Priority": 1}], "PriorityComparer": {}}` | `($)Queue` is a variable of type [QueueWithPriority][]&lt;[String][], [Int32][]&gt; |
| [Item][Item Property] | `($)Item`, with value `"Some Value"` | `($)Item` is a variable of type [String][] |
| [Priority][Priority Property] | `($)Priority`, with value `0` | `($)Priority` is a variable of type [Int32][] |

#### Result

Adding `"Some Value"` with priority `0` to `{"Items": [{"Item": "Element -1", "Priority": -1}, {"Item": "Element 1", "Priority": 1}], "PriorityComparer": {}}` results in the variable `($)Queue` being updated to the following:

```json
{
    "Items": [
        {
            "Item": "Element -1", 
            "Priority": -1
        }, 
        {
            "Item": "Some Value", 
            "Priority": 0
        }, 
        {
            "Item": "Element 1", 
            "Priority": 1
        }
    ], 
    "PriorityComparer": {}
}
```

***

### Enqueue an Item to Queue with the same Priority as an existing Item

This example will enqueue `"Some Value"` with a priority of `1` to a [QueueWithPriority][]&lt;[String][], [Int32][]&gt; that contains `"Element -1"` with a priority of `-1` and `"Element 1"` with a priority of `1`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Queue][Queue Property] | `($)Queue`, with value `{"Items": [{"Item": "Element -1", "Priority": -1}, {"Item": "Element 1", "Priority": 1}], "PriorityComparer": {}}` | `($)Queue` is a variable of type [QueueWithPriority][]&lt;[String][], [Int32][]&gt; |
| [Item][Item Property] | `($)Item`, with value `"Some Value"` | `($)Item` is a variable of type [String][] |
| [Priority][Priority Property] | `($)Priority`, with value `1` | `($)Priority` is a variable of type [Int32][] |

#### Result

Adding `"Some Value"` with priority `1` to `{"Items": [{"Item": "Element -1", "Priority": -1}, {"Item": "Element 1", "Priority": 1}], "PriorityComparer": {}}` results in the variable `($)Queue` being updated to the following:

```json
{
    "Items": [
        {
            "Item": "Element -1", 
            "Priority": -1
        }, 
        {
            "Item": "Element 1", 
            "Priority": 1
        },
        {
            "Item": "Some Value", 
            "Priority": 1
        }
    ], 
    "PriorityComparer": {}
}
```

Because `"Some Value"` and `"Element 1"` have the same [Priority][Priority Property], they are put in order that they were added to the [Queue][Queue Property], so `"Some Value"` is placed behind `"Element 1"`.

***

## Properties

### Queue

The [Queue][Queue Property] to add the [Item][Item Property] to.
  
| | |
|--------------------|---------------------------|
| Data Type | [QueueWithPriority][]&lt;[TItem][], [TPriority][]&gt; |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Queue` with no value |

### Item

The [Item][Item Property] to be added to the [Queue][Queue Property].

| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Item` with no value |

### Priority

The [Priority][Priority Property] of the [Item][Item Property] being added to the [Queue][Queue Property].  

| | |
|--------------------|---------------------------|
| Data Type | [TPriority][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | Defaults to `null` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [Queue][Queue Property] is `null`. |
| [InvalidPropertyValueException][] | Thrown when [Item][Item Property] is `null` and [Queue][Queue Property] only accepts non-nullable value types. See [Value Is Invalid][]. |

## Remarks

None

[Queue Property]: {{< ref "#queue" >}}
[Item Property]: {{< ref "#item" >}}
[Priority Property]: {{< ref "#priority" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[TItem]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[TPriority]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[default]: {{< url "MSDocs.DotNet.Api.System.Comparer.Default" >}}

[QueueWithPriority]: {{< url "Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}

[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
