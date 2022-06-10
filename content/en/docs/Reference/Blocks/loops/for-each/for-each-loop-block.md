---
title: "For Each Loop"
linkTitle: "For Each Loop"
description: "Loops through all items in the specified collection (i.e. Lists, Dictionaries and Structures)."
---

{{< figure src="/blocks/loops-for-each-loop-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Loops.ForEach.ForEachLoopBlock)</p>

## Description

Loops through all items in the specified [Collection][Collection Property] (i.e. Lists, Dictionaries and Structures).

The `"Index"` and `"Value"` of the current item are returned as properties of a [Structure][], which is saved to the [Current Iteration][CurrentIteration Property].

## Examples

### Loop through all items in a list

This example will loop through all items in `["Item1", "Item2", "Item3"]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection][Collection Property] | `($)Collection`, with value `["Item1", "Item2", "Item3"]` | `($)Collection` is a variable of type [IList][]&lt;[String][]&gt; |
| [Current Iteration][CurrentIteration Property] | `($)CurrentIteration`, with no value | `($)CurrentIteration` is a variable of type [Structure][] |

#### Result

Looping through all items in `["Item1", "Item2", "Item3"]` will result in `3` loops with `($)CurrentIteration` being updated to the following:

1st loop

```json
{
    "Index": 0,
    "Value": "Item1"
}
```

2nd loop

```json
{
    "Index": 1,
    "Value": "Item2"
}
```

3rd loop

```json
{
    "Index": 2,
    "Value": "Item3"
}
```

***

### Loop through all items in a dictionary or structure

This example will loop through all items in `{"Key1": "Value1", "Key2": "Value2", "Key3": "Value3"}`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection][Collection Property] | `($)Collection`, with value `{"Key1": "Value1", "Key2": "Value2", "Key3": "Value3"}` | `($)Collection` is a variable of type [IDictionary][]&lt;[String][], [String][]&gt; or [Structure][] |
| [Current Iteration][CurrentIteration Property] | `($)CurrentIteration`, with no value | `($)CurrentIteration` is a variable of type [Structure][] |

#### Result

Looping through all items in `{"Key1": "Value1", "Key2": "Value2", "Key3": "Value3"}` will result in `3` loops with `($)CurrentIteration` being updated to the following:

1st loop

```json
{
    "Index": 0,
    "Value": {
        "Key": "Key1",
        "Value": "Value1"
    }
}
```

2nd loop

```json
{
    "Index": 1,
    "Value": {
        "Key": "Key2",
        "Value": "Value2"
    }
}
```

3rd loop

```json
{
    "Index": 2,
    "Value": {
        "Key": "Key3",
        "Value": "Value3"
    }
}
```

***

## Properties

### Collection

The [Collection][Collection Property] to loop through.

If [Collection][Collection Property] is empty (i.e. contains no items), no looping will occur.

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][] |
| Property Type | [Input][] |
| Default Value | `($)Collection` with value `null` |

### Current Iteration

The [Current Iteration][CurrentIteration Property] the looping is at.

[Current Iteration][CurrentIteration Property] is set to a [Structure] on each loop, containing the current item's `"Index"` and `"Value"`. `"Index"` is set to `0` on the first loop, and on each subsequent loop is incremented by `1`.

Looping will continue whilst `"Index"` is less than the number of items in [Collection][Collection Property], with the flow execution exiting via the block's right port (blue loop icon).

Once `"Index"` equals the number of items in [Collection][Collection Property], looping stops, the flow execution exits via the block's bottom port (green tick) and [Current Iteration][CurrentIteration Property] is reset to an empty [Structure][].

If [Current Iteration][CurrentIteration Property] `"Index"` is modified during a loop, it will automatically be set back to its original value immediately before the next loop begins.

| | |
|--------------------|---------------------------|
| Data Type | [Structure][] |
| Property Type | [Output][] |
| Default Value | `($)CurrentIteration` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [Collection][Collection Property] is `null`. |

## Remarks

### Empty Collection

If [Collection][Collection Property] is empty (i.e. contains no items), no looping will occur.

[Collection Property]: {{< ref "#collection" >}}
[CurrentIteration Property]: {{< ref "#current-iteration" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[IDictionary]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
