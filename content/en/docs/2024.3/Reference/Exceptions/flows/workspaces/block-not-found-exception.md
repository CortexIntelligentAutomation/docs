---
title: "BlockNotFoundException"
linkTitle: "BlockNotFoundException"
description: "The exception thrown when trying to retrieve a block that doesn't exist."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Blocks.BlockNotFoundException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when trying to retrieve a block that doesn't exist.

## Reasons

### Block ID of not added block passed

TODO: The block ID of a block that was not added to a workspace was passed to the engine.

### Entry point block not added to workspace

TODO: The entry point for a workspace has been set, but the entry point block for that workspace does not exist.

### Exception handler block has been set but exception handler block not added to workspace

TODO: The exception handler for the workspace has been set, but the exception handler block for that workspace does not exist.

#### Message Format

The format of the [Message][] is as follows:

```json
"No block with ID <block-id> exists on the workspace with ID <workspace-id>.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<block-id>` is the ID of the [block][Block] that cannot be found.
* `<workspace-id>` is the ID of the [workspace][Workspace].

#### How to fix

TODO

## Properties

### Exception Type

The type of the exception (i.e. `BlockNotFoundException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

For this exception:

* `<block-id>` will be replaced with the ID of the [block][block] that could not be found.
* `<workspace-id>` will be replaced with the ID of the [workspace][Workspace].

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

None

## See Also

TODO

### Related Data Types

TODO

### Related Concepts

TODO

* [Blocks][]
* [Block Properties][]
* [Exceptions][]

### Related Blocks

TODO: Update list
  
### External Documentation

TODO

[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}

[Start Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.StartWorkspace.StartWorkspace.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}

[Message]: {{< ref "#message" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
