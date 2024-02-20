---
title: "WorkspaceIdAlreadySetException"
linkTitle: "WorkspaceIdAlreadySetException"
description: "The exception thrown when trying to set the workspace ID when it has already been set."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Blocks.WorkspaceIdAlreadySetException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when trying to set the workspace ID when it has already been set.

## Reasons

### The workspace block ID is set twice

This occurs when a workspace block that already exists has its ID set again.

#### Message Format

TODO

#### How to fix

TODO

## Properties

### Exception Type

The type of the exception (i.e. `WorkspaceIdAlreadySetException`).

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
