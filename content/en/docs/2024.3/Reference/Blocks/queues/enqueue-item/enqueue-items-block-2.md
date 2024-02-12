---
title: "Enqueue Items"
linkTitle: "Enqueue Items"
description: "Adds Items to a Queue at the specified Priority."
---

{{< figure src="/blocks/queues-enqueue-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Queues.EnqueueItem.EnqueueItemsBlock`2)</p>

## Description

Adds [Items][Items Property] to a [Queue][Queue Property] at the specified [Priority][Priority Property].

Each item is added to the [Queue][Queue Property] in the same order as they are in [Items][Items Property].

## Examples

### Enqueue multiple Items to an empty Queue

This example will enqueue `"a"`, `"b"` and `"c"` with a priority of `0` to an empty [QueueWithPriority][]&lt;[String][], [Int32][]&gt;.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Queue][Queue Property] | `($)Queue`, with value `{"Items": [], "PriorityComparer": {}}` | `($)Queue` is a variable of type [QueueWithPriority][]&lt;[String][], [Int32][]&gt; |
| [Items][Items Property] | `($)Items`, with value `["a", "b", "c"]` | `($)Items` is a variable of type [List][]&lt;[String][]&gt; |
| [Priority][Priority Property] | `($)Priority`, with value `0` | `($)Priority` is a variable of type [Int32][] |

#### Result

Adding `"a"`, `"b"` and `"c"` with priority `0` to `{"Items": [], "PriorityComparer": {}}` results in the variable `($)Queue` being updated to the following:

```json
{
    "Items": [
        {
            "Item": "a", 
            "Priority": 0
        },
        {
            "Item": "b", 
            "Priority": 0
        },
        {
            "Item": "c", 
            "Priority": 0
        }
    ], 
    "PriorityComparer": {}
}
```

***

### Enqueue multiple Items to a Queue already containing Items

This example will enqueue `"a"`, `"b"` and `"c"` with a priority of `0` to a [QueueWithPriority][]&lt;[String][], [Int32][]&gt; that contains `"Item -1"` with a priority of `-1` and `"Item 1"` with a priority of `1`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Queue][Queue Property] | `($)Queue`, with value `{"Items": [{"Item": "Item -1", "Priority": -1}, {"Item": "Item 1", "Priority": 1}], "PriorityComparer": {}}` | `($)Queue` is a variable of type [QueueWithPriority][]&lt;[String][], [Int32][]&gt; |
| [Items][Items Property] | `($)Items`, with value `["a", "b", "c"]` | `($)Items` is a variable of type [List][]&lt;[String][]&gt; |
| [Priority][Priority Property] | `($)Priority`, with value `0` | `($)Priority` is a variable of type [Int32][] |

#### Result

Adding `"a"`, `"b"` and `"c"` with priority `0` to `{"Items": [{"Item": "Item -1", "Priority": -1}, {"Item": "Item 1", "Priority": 1}], "PriorityComparer": {}}` results in the variable `($)Queue` being updated to the following:

```json
{
    "Items": [
        {
            "Item": "Item -1", 
            "Priority": -1
        }, 
        {
            "Item": "a", 
            "Priority": 0
        },
        {
            "Item": "b", 
            "Priority": 0
        },
        {
            "Item": "c", 
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

### Enqueue multiple Items to a Queue with the same Priority as an existing Item

This example will enqueue `"a"`, `"b"` and `"c"` with a priority of `1` to a [QueueWithPriority][]&lt;[String][], [Int32][]&gt; that contains `"Item -1"` with a priority of `-1` and `"Item 1"` with a priority of `1`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Queue][Queue Property] | `($)Queue`, with value `{"Items": [{"Item": "Item -1", "Priority": -1}, {"Item": "Item 1", "Priority": 1}], "PriorityComparer": {}}` | `($)Queue` is a variable of type [QueueWithPriority][]&lt;[String][], [Int32][]&gt; |
| [Items][Items Property] | `($)Items`, with value `["a", "b", "c"]` | `($)Items` is a variable of type [List][]&lt;[String][]&gt; |
| [Priority][Priority Property] | `($)Priority`, with value `1` | `($)Priority` is a variable of type [Int32][] |

#### Result

Adding `"a"`, `"b"` and `"c"` with priority `1` to `{"Items": [{"Item": "Item -1", "Priority": -1}, {"Item": "Item 1", "Priority": 1}], "PriorityComparer": {}}` results in the variable `($)Queue` being updated to the following:

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
        }, 
        {
            "Item": "a", 
            "Priority": 1
        },
        {
            "Item": "b", 
            "Priority": 1
        },
        {
            "Item": "c", 
            "Priority": 1
        }
    ], 
    "PriorityComparer": {}
}
```

As the added values and `"Item 1"` have the same [Priority][Priority Property], they are put in the order that they were added to the [Queue][Queue Property], so `"a"`, `"b"` and `"c"` are placed behind `"Item 1"`.

***

## Properties

### Queue

The [Queue][Queue Property] to add the [Items][Items Property] to.
  
| | |
|--------------------|---------------------------|
| Data Type | [QueueWithPriority][]&lt;[TItem][], [TPriority][]&gt; |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Queue` with no value |

### Items

The [Items][Items Property] to be added to the [Queue][Queue Property].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable&lt;TItem&gt;][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Items` with no value |

### Priority

The [Priority][Priority Property] of the [Items][Items Property] being added to the [Queue][Queue Property].  

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
| [PropertyNullException][] | Thrown when [Queue][Queue Property] or [Items][Items Property] is `null`. |

## Remarks

### Empty Items

If [Items][Items Property] is empty (i.e. `[]`) there is nothing to add, so no operation is performed.

[Queue Property]: {{< ref "#queue" >}}
[Items Property]: {{< ref "#items" >}}
[Priority Property]: {{< ref "#priority" >}}

[Indexes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[TItem]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[TPriority]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[default]: {{< url path="MSDocs.DotNet.Api.System.Comparer.Default" >}}

[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[IEnumerable&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[QueueWithPriority]: {{< url path="Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}

[CannotModifyReadOnlyListException]: {{< url path="Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[InvalidPropertyValueException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}

[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
