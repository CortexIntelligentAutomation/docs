---
title: "OperationFailedException"
linkTitle: "OperationFailedException"
description: "The exception thrown when a file or folder operation failed for one or more paths."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.FilesAndFolders.OperationFailedException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when a file or folder operation failed for one or more paths.

## Reasons

### A single exception was thrown

An exception was thrown, such as [InvalidFolderNameException][] or [InvalidPathException][], while performing an operation on the path provided.

#### Message Format

The format of the message is as follows:

```json
"Failed to <action> the path. Please see the 'PathExceptions' property for details on why the operation failed.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<action>` is the action taking place when the operation failed (i.e. `copy`, `create`, `delete`, `duplicate`, `get`, `move`, `read`, `rename`, `search`, `write`).

#### How to fix

The exception that caused the operation to fail can be seen in the `PathExceptions` property; for how to fix, please refer to the exception's HelpLink.

### Multiple exceptions were thrown

Multiple exceptions were thrown, such as [InvalidFolderNameException][] or [InvalidPathException][], while performing operations on the paths provided.

#### Message Format

The format of the message is as follows:

```json
"Failed to <action> <failed-paths-count> of <total-paths-count> paths. Please see the 'PathExceptions' property for details on why each operation failed.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<action>` is the action taking place when the operation failed (i.e. `copy`, `create`, `delete`, `duplicate`, `get`, `move`, `read`, `rename`, `search`, `write`).
* `<failed-paths-count>` is the number of paths that were attempted to be operated on where the operation failed (e.g. `2`).
* `<total-paths-count>` is the total number of paths that were attempted to be operated on (e.g. `5`).

#### How to fix

The exceptions that caused the operations to fail can be seen in the `PathExceptions` property; for how to fix, please refer to each exception's HelpLink.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[Message]: {{< ref "#message" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[InvalidFolderNameException]: {{<url path="Cortex.Reference.Exceptions.FilesAndFolders.InvalidFolderNameException.MainDoc">}}
[InvalidPathException]: {{<url path="Cortex.Reference.Exceptions.FilesAndFolders.InvalidPathException.MainDoc">}}