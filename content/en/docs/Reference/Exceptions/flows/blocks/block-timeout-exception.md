---
title: "BlockTimeoutException"
linkTitle: "BlockTimeoutException"
description: "The exception thrown when a block timeout has been reached."
---

# {{< param title >}}

<p class="namespace">(Cortex.Exceptions.Flows.Blocks.BlockTimeoutException)</p>

## Description

TODO

## Reasons

### Block Timeout Reached

TODO

#### Message Format

TODO

The format of the [Message][] is as follows:

```json
"TODO: \r\nPlease click the HelpLink for more information on how to fix this."
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

* [Working with Exceptions][]
* [Blocks][TODO]
* [Block Properties][TODO]

### Related Blocks

TODO: Update list

All Blocks except:

* Flows
  * [Start Flow][TODO]
  * [End Flow][TODO]
* Schedules
  * [Wait For Duration][TODO]
* Workspaces
  * [Start Workspace][TODO]
  * [End Workspace][TODO]
  
### External Documentation

TODO

[Message]: {{< ref "#message" >}}

[Working with Exceptions]: {{< url "Cortex.Reference.Concepts.WorkingWithExceptions.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TimePeriod]: {{< url "Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
