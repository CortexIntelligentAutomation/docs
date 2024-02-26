---
title: "BlockTimeoutException"
linkTitle: "BlockTimeoutException"
description: "The exception thrown when the execution of a block exceeds the specified block timeout."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Blocks.BlockTimeoutException)</p>

## Description

The exception thrown when the execution of a block exceeds the specified block timeout.

## Reasons

### Block Timeout Reached

Executing the block took longer than the [Block Timeout][].

#### Message Format

The format of the [Message][] is as follows:

```json
"The block timed out because its execution time reached the Block Timeout of <block-timeout> milliseconds.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<block-timeout>` is the [block timeout][Block Timeout Property] for the block that threw the exception, in milliseconds.

#### How to fix

Ensure the action that the block is taking is likely to complete within the given [TimePeriod][].

## Properties

### Exception Type

The type of the exception (i.e. `BlockTimeoutException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Block Timeout

The period of time in which a block must finish execution before timing out.

| | |
|-----------|------------|
| Data Type | [TimePeriod][] |

### ExecutionId

The Id of the [execution][WhatIsAnExecution] running the block that has timed out.

| | |
|-----------|------------|
| Data Type | [Guid][] |

### FlowId

The Id of the [flow][WhatIsAFlow] containing the block that has timed out.

| | |
|-----------|------------|
| Data Type | [Guid][] |

### WorkspaceId

The Id of the [workspace][WhatIsAWorkspace] containing the block that has timed out.

| | |
|-----------|------------|
| Data Type | [Guid][] |

### BlockId

The Id of the [block][WhatIsABlock] that has timed out.

| | |
|-----------|------------|
| Data Type | [Guid][] |

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
* Text
  * [String][]
* Other
  * [Guid][]

### Related Concepts

* [Blocks][]
* [Block Properties][]
* [Block Timeout Property][Block Timeout]
* [Exceptions][]
* [Executions][]
* [Flows][]
* [Workspaces][]

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

[Block Timeout Property]: {{<ref "#block-timeout">}}
[InnerException]: {{< ref "#innerexception" >}}
[Message]: {{< ref "#message" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Block Timeout]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.BlockTimeoutProperty">}}
[Executions]: {{<url path ="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc">}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Flows]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc">}}
[Workspaces]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Guid]: {{<url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc">}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}

[Guid]: {{<url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc">}}