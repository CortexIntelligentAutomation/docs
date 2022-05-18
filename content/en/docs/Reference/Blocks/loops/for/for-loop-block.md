---
title: "For Loop"
linkTitle: "For Loop"
description: "Loops a specified number of times based on a given start index, end index and increment."
---

{{< figure src="/blocks/loops-for-loop-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Loops.For.ForLoopBlock)</p>

## Description

Loops a specified number of times based on a given [Start Index][StartIndex Property], [End Index][EndIndex Property] and [Increment][Increment Property].

## Examples

### Loop between 0 and 2 incrementing by 1

This example will loop between `0` and `2` incrementing by `1` each loop.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Start Index][StartIndex Property] | `($)StartIndex`, with value `0` | `($)StartIndex` is a variable of type [Int32][] |
| [End Index][EndIndex Property] | `($)EndIndex`, with value `2` | `($)EndIndex` is a variable of type [Int32][] |
| [Increment][Increment Property] | `($)Increment`, with value `1` | `($)Increment` is a variable of type [Int32][] |
| [Current Index][CurrentIndex Property] | `($)CurrentIndex`, with value `0` | `($)CurrentIndex` is a variable of type [Int32][] that will be incremented by `($)Increment` each loop |

#### Result

Looping between `0` and `2` incrementing by `1` each loop will result in `3` loops with `($)CurrentIndex` being updated to the following:

1st loop

```json
0
```

2nd loop

```json
1
```

3rd loop

```json
2
```

***

### Loop between 10 and 20 incrementing by 5

This example will loop between `10` and `20` incrementing by `5` each loop.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Start Index][StartIndex Property] | `($)StartIndex`, with value `10` | `($)StartIndex` is a variable of type [Int32][] |
| [End Index][EndIndex Property] | `($)EndIndex`, with value `20` | `($)EndIndex` is a variable of type [Int32][] |
| [Increment][Increment Property] | `($)Increment`, with value `5` | `($)Increment` is a variable of type [Int32][] |
| [Current Index][CurrentIndex Property] | `($)CurrentIndex`, with value `0` | `($)CurrentIndex` is a variable of type [Int32][] that will be incremented by `($)Increment` each loop |

#### Result

Looping between `10` and `20` incrementing by `5` each loop will result in `3` loops with `($)CurrentIndex` being updated to the following:

1st loop

```json
10
```

2nd loop

```json
15
```

3rd loop

```json
20
```

***

### Loop between 20 and 10 incrementing by -5

This example will loop between `20` and `10` incrementing by `-5` each loop.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Start Index][StartIndex Property] | `($)StartIndex`, with value `20` | `($)StartIndex` is a variable of type [Int32][] |
| [End Index][EndIndex Property] | `($)EndIndex`, with value `10` | `($)EndIndex` is a variable of type [Int32][] |
| [Increment][Increment Property] | `($)Increment`, with value `-5` | `($)Increment` is a variable of type [Int32][] |
| [Current Index][CurrentIndex Property] | `($)CurrentIndex`, with value `0` | `($)CurrentIndex` is a variable of type [Int32][] that will be incremented by `($)Increment` each loop |

#### Result

Looping between `20` and `10` incrementing by `-5` each loop will result in `3` loops with `($)CurrentIndex` being updated to the following:

1st loop

```json
20
```

2nd loop

```json
15
```

3rd loop

```json
10
```

***

## Properties

### Start Index

The [Start Index][StartIndex Property] the looping will start at. This is an inclusive index, which means the specified index will be included.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)StartIndex` with value `0` |

### End Index

The [End Index][EndIndex Property] the looping will end at. This is an inclusive index, which means the specified index will be included.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)EndIndex` with value `0` |

### Increment

The [Increment][Increment Property] to be added to [Current Index][CurrentIndex Property] every time the block loops.

[Increment][Increment Property] can be:

* A positive value if [Start Index][StartIndex Property] is less than [End Index][EndIndex Property].
* A negative value if [Start Index][StartIndex Property] is greater than [End Index][EndIndex Property].
* A positive or negative value if [Start Index][StartIndex Property] is equal to [End Index][EndIndex Property].

If any of the above are not `true` or [Increment][Increment Property] is `0` then an [InfiniteLoopException][] will be thrown the first time a flow execution executes this block.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Increment` with value `1` |

### Current Index

The [Current Index][CurrentIndex Property] the looping is at.

[Current Index][CurrentIndex Property] initially gets set to the value of [Start Index][StartIndex Property] on the first loop, and on each subsequent loop is incremented by the value of [Increment][Increment Property].

If [Increment][Increment Property] is a positive value, the block will continue looping whilst [Current Index][CurrentIndex Property] is less than [End Index][EndIndex Property]; with the flow execution exiting via the block's right port (blue loop icon).

If [Increment][Increment Property] is a negative value, the block will continue looping whilst [Current Index][CurrentIndex Property] is greater than [Start Index][StartIndex Property]; with the flow execution exiting via the block's right port (blue loop icon).

When either of the above are not `true` the block stops looping, the flow execution exits via the block's bottom port (green tick) and [Current Index][CurrentIndex Property] is reset to `0`

At this moment, there is a known limitation with [Current Index][CurrentIndex Property], which requires the variable used must have an [Int32][] value assigned to it before the block executes. If it does not then an [InvalidPropertyValueException][] will be thrown the first time a flow execution executes this block.

For information about what an index is, please see [Indexes][].

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [InputOutput][] |
| Default Value | `($)CurrentIndex` with value `0` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [InfiniteLoopException][] | Thrown when [Increment][Increment Property] is `0`. See [Increment Is Zero][]. |
| | Thrown when [Increment][Increment Property] has a positive value and [Start Index][StartIndex Property] is greater than [End Index][EndIndex Property].  See [Increment Is Positive][]. |
| | Thrown when [Increment][Increment Property] has a negative value and [Start Index][StartIndex Property] is less than [End Index][EndIndex Property].  See [Increment Is Negative][]. |
| [InvalidPropertyValueException][] | Thrown when [Current Index][CurrentIndex Property] does not have an [Int32][] value assigned to it before the block executes. See [Value Is Invalid][]. |

## Remarks

### Start Index and End Index are inclusive

The [Start Index][StartIndex Property] and [End Index][EndIndex Property] properties are both inclusive [indexes][], which means those indexes will be included in the looping range (e.g. if [Start Index][StartIndex Property] is `0` and [End Index][EndIndex Property] is `1`, the block will loop `2` times).

### Start Index greater than End Index

[Start Index][StartIndex Property] can be greater than [End Index][EndIndex Property]. If this is the case, [Increment][Increment Property] must be a negative value. See [Example][StartIndexGreaterThanEndIndex Example] above.

### Known Limitations

The variable used for [Current Index][CurrentIndex Property] must have an [Int32][] value assigned to it before the block executes. If it does not then an [InvalidPropertyValueException][] will be thrown the first time a flow execution executes this block.

[StartIndex Property]: {{< ref "#start-index" >}}
[EndIndex Property]: {{< ref "#end-index" >}}
[Increment Property]: {{< ref "#increment" >}}
[CurrentIndex Property]: {{< ref "#current-index" >}}

[StartIndexGreaterThanEndIndex Example]: {{< ref "#loop-between-20-and-10-incrementing-by--5" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.Indexes.MainDoc" >}}
[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}

[InfiniteLoopException]: {{< url "Cortex.Reference.Exceptions.Loops.InfiniteLoopException.MainDoc" >}}
[Increment Is Zero]: {{< url "Cortex.Reference.Exceptions.Loops.InfiniteLoopException.IncrementIsZero" >}}
[Increment Is Negative]: {{< url "Cortex.Reference.Exceptions.Loops.InfiniteLoopException.IncrementIsNegative" >}}
[Increment Is Positive]: {{< url "Cortex.Reference.Exceptions.Loops.InfiniteLoopException.IncrementIsPositive" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}

[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
