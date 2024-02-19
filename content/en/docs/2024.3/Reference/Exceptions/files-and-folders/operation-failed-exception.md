---
title: "OperationFailedException"
linkTitle: "OperationFailedException"
description: "The exception thrown when a file or folder operation failed for one or more paths."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.FilesAndFolders.OperationFailedException)</p>
The exception thrown when a file or folder operation failed for one or more paths.
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Reasons

### A single path exception was thrown

A Path exception was thrown, such as [InvalidFolderNameException][], [InvalidPathException][], etc. while performing an operation on the file path provided.

#### Message Format

The format of the [Message][] is as follows:

```json
"Failed to <action> the path. Please see the 'PathExceptions' property for details on why the operation failed.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<action>` is the action taking place when the operation failed.

### Multiple path exceptions were thrown

Multiple path exceptions were thrown by file operations being performed on multiple file paths, such as [InvalidFolderNameException][], [InvalidPathException][], etc.

#### Message Format

The format of the [Message][] is as follows:

```json
"Failed to <action> <fail-count> of <path-count> paths. Please see the 'PathExceptions' property for details on why each operation failed.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<action>` is the action taking place when the operation failed.
* `<fail-count>` is the number of paths that were attempted to be operated on where the operation failed.
* `<path-count>` is the total number of paths that were attempted to be operated on.

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