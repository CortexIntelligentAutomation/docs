---
title: "InfiniteLoopException"
linkTitle: "InfiniteLoopException"
description: "The exception thrown when an infinite loop can occur."
---

# {{< param title >}}

<p class="namespace">(Cortex.Exceptions.Loops.InfiniteLoopException)</p>

## Description

The exception thrown when an infinite loop can occur.

There are multiple reasons that this exception can be thrown:

* [Increment Is Zero][IncrementIsZero]
* [Increment Is Negative][IncrementIsNegative]
* [Increment Is Positive][IncrementIsPositive]

## Reasons

### Increment Is Zero {#100}

A [Category][] of `"Increment"`and an [Error Code][] of `100` indicates that a zero increment value was provided.

#### Message Format

The format of the [Message][] can be one of the following:

* If a zero value was provided and a negative value was expected

```json
"The 'Increment' provided (0) causes an infinite loop. It must be a negative value.
Please click the HelpLink for more information on how to fix this."
```

* If a zero value was provided and a positive value was expected

```json
"The 'Increment' provided (0) causes an infinite loop. It must be a positive value.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Provide a negative or positive value for the increment as instructed by the [Message][].

### Increment Is Negative {#101}

A [Category][] of `"Increment"`and an [Error Code][] of `101` indicates that a negative increment value was provided when a positive value was required.

#### Message Format

The format of the [Message][] is as follows:

```json
"The 'Increment' provided ({NegativeIncrement}) causes an infinite loop. It must be a positive value.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Provide a positive value for the increment as instructed by the [Message][].

### Increment Is Positive {#102}

A [Category][] of `"Increment"`and an [Error Code][] of `102` indicates that a positive increment value was provided when a negative value was required.

#### Message Format

The format of the [Message][] is as follows:

```json
"The 'Increment' provided ({PositiveIncrement}) causes an infinite loop. It must be a negative value.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Provide a negative value for the increment as instructed by the [Message][].

## Properties

### Exception Type

The type of the exception (i.e. `InfiniteLoopException`).

| | |
|--------------------|---------------------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |

### Category

The category of the exception, which is used to categorise an exception if there are multiple reasons that the exception can occur.

For `InfiniteLoopException` the only category is `Increment`.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |

### Error Code

The error code for the exception, which is used to indicate the reason that the exception occurred, if there are multiple reasons that the exception can occur.

For `InfiniteLoopException` there are three error codes:

* [100][IncrementIsZero] - indicates the increment is zero, but should be either negative or positive
* [101][IncrementIsNegative] - indicates the increment is negative, but should be positive
* [102][IncrementIsPositive] - indicates the increment is positive, but should be negative

| | |
|--------------------|---------------------------|
| Data Type | [InfiniteLoopErrorCode][] |

### Help Link

The URL for the relevant section of this exception's help page.

## Remarks

### Known Limitations

None

## See Also

### Related Data Types

* [String][]
* [InfiniteLoopErrorCode][]

### Related Concepts

* [Working with Exceptions][]
* [Working with Loops][]

### Related Blocks

* [For Loop][]

### External Documentation

None

[Message]: {{< ref "#message" >}}
[Category]: {{< ref "#category" >}}
[Error Code]: {{< ref "#error-code" >}}
[IncrementIsZero]: {{< ref "#100" >}}
[IncrementIsNegative]: {{< ref "#101" >}}
[IncrementIsPositive]: {{< ref "#102" >}}

[For Loop]: {{< url "Cortex.Reference.Blocks.Loops.For.ForLoop.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[InfiniteLoopErrorCode]: {{< url "Cortex.Reference.DataTypes.Loops.InfiniteLoopErrorCode.MainDoc" >}}

[Working with Exceptions]: {{< url "Cortex.Reference.Concepts.WorkingWithExceptions.MainDoc" >}}
[Working with Loops]: {{< url "Cortex.Reference.Concepts.WorkingWithLoops.MainDoc" >}}
