---
title: "BlockExecutionException"
linkTitle: "BlockExecutionException"
description: "The exception thrown when a block logic execution throws an exception."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Blocks.BlockExecutionException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when a block logic execution throws an exception. The actual exception that is thrown from the block execution should be saved in the inner exception.

This exception wraps the [InnerException][] that occurred when the block was executed.

## Reasons

### Block Exception Occurred

Executing the block with the specified [Block ID][BlockID Property] threw an exception.

#### Message Format

The format of the [Message][] is as follows:

```json
"The execution of the block with Id <block-id> failed
Please click the HelpLink for more information on how to fix this."
```

where:

* `<block-id>` is the [Block ID][BlockID Property] of the block being executed.

#### How to fix

Ensure the block execution does not throw this exception's inner exception.

## Properties

### Exception Type

The type of the exception (i.e. `BlockExcecutionException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

### InnerException

The exception that occurred when the block was executed.

This may contain more information on why the value is invalid, or instruction on how to provide a valid value in its message.

| | |
|-----------|---------------|
| Data Type | [Exception][] |

### Execution ID

The execution ID.

| | |
|-----------|------------|
| Data Type | [Guid][] |

### Flow ID

The flow ID.

| | |
|-----------|------------|
| Data Type | [Guid][] |

### Workspace ID

The workspace ID.

| | |
|-----------|------------|
| Data Type | [Guid][] |

### Block ID

The block ID.

| | |
|-----------|------------|
| Data Type | [Guid][] |

## Remarks

### Known Limitations

None

## See Also

### Related Data Types

* [String][]
* [Guid][]

### Related Concepts

* [Blocks][]
* [Block Properties][]
* [Exceptions][]

### Related Blocks

TODO

### External Documentation

TODO

[BlockID Property]: {{<ref "#block-id">}}
[InnerException]: {{<ref "#inner-exception">}}
[Message]: {{< ref "#message" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Block Timeout]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.BlockTimeoutProperty">}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Exception]: {{<url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc">}}
[Guid]: {{<url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc">}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
