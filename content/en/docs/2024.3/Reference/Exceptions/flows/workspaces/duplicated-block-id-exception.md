---
title: "DuplicatedBlockIdException"
linkTitle: "DuplicatedBlockIdException"
description: "The exception thrown when trying to add a block with an ID that already exists."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Blocks.BlockTimeoutException)</p>

## Description

The exception thrown when trying to add a block with an ID that already exists.

## Reasons

### Block with duplicate Block ID added

TODO

#### Message Format

TODO

The format of the [Message][] is as follows:

```json
"Workspace <workspace-id> already contains block with ID '<block-id>': {2}"
```

#### How to fix

TODO

Ensure the action that the block is taking is likely to complete within the given [TimePeriod][].

## Properties

TODO

### Exception Type

The type of the exception (i.e. `BlockTimeoutException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

TODO

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

TODO

If a block is at a point that cannot cancel, then it will cancel at the next available opportunity.

## See Also

TODO

### Related Data Types

TODO

* [String][]
* [TimePeriod][]

### Related Concepts

TODO

* [Blocks][]
* [Block Properties][]
* [Exceptions][]

### Related Blocks

TODO: Update list

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

TODO

[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}

[Wait For Duration]: {{< url path="Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}

[Start Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.StartWorkspace.StartWorkspace.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}

[Message]: {{< ref "#message" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
