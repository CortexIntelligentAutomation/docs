---
title: "InvalidBlockTimeoutException"
linkTitle: "InvalidBlockTimeoutException"
description: "The exception thrown when a block timeout is invalid."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Blocks.InvalidBlockTimeoutException)</p>

## Description

The exception thrown when a block timeout is invalid.

## Reasons

### Block Timeout Out of Range

The [Block Timeout][Block Timeout Property] provided for the block is either negative or greater than the maximum value allowed, which is the [Int32][] maximum of `2,147,483,647`.

#### Message Format

The format of the [Message][] is as follows:

```json
"The provided TimePeriod for the BlockTimeout equates to <block-timeout> milliseconds which is invalid; it must be a non-negative value less than 2,147,483,647.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<block-timeout>` is the timeout of the affected block in milliseconds.

#### How to fix

Ensure that the affected block has a block timeout that is non-negative and less than the maximum allowed [TimePeriod][].

## Properties

### Exception Type

The type of the exception (i.e. `InvalidBlockTimeoutException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Block ID

The ID of the block with an invalid timeout.

| | |
|-----------|------------|
| Data Type | [Guid][] |

### Duration

The duration in milliseconds that the block timeout provided to the block evaluated to.

| | |
|-----------|------------|
| Data Type | [Double][] |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

None

## See Also

### Related Data Types

* Date & Time
  * [TimePeriod][]
* Numbers
  * [Double][]
  * [Int32][]
* Text
  * [String][]
* Other
  * [Guid][]

### Related Concepts

* [Blocks][]
* [Block Properties][]
* [Block Timeout Property][Block Timeout]
* [Exceptions][]

### Related Blocks

All Blocks except:

* Flows
  * [Start Flow][]
  * [End Flow][]
* Schedules
  * [Wait For Duration][]
* Workspaces
  * [Start Workspace][]
  * [End Workspace][]
  
### External Documentation

None

[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}

[Wait For Duration]: {{< url path="Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}

[Start Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.StartWorkspace.StartWorkspace.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Block Timeout]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.BlockTimeoutProperty">}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Block Timeout Property]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.BlockTimeoutProperty">}}

[Message]: {{< ref "#message" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Double]: {{<url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc">}}
[Guid]: {{<url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc">}}
[Int32]: {{<url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc">}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}