---
title: "OperationFailedException"
linkTitle: "OperationFailedException"
description: "The exception thrown when a file or folder operation failed for one or more paths."
---

# {{< param title >}}

<p class="namespace">(Cortex.Exceptions.FilesAndFolders.OperationFailedException)</p>

The exception thrown when a file or folder operation failed for one or more paths.

The format of the exception message is as follows:

```json
"TODO.
Please click the HelpLink for more information on how to fix this."
```

## Path Exceptions

## Indexes Of Duplicate Paths

/// If any path in the specified filePaths is duplicated and no exception is thrown for that path, the block will only process the first occurrence of the path, skipping any other occurrences.
            
            /// If any path in the specified filePaths is duplicated and an exception occurs for that path an <see cref="OperationFailedException">OperationFailedException</see> will be thrown, and the path added to the "IndexesOfDuplicatePaths" dictionary in <see cref="OperationFailedException">OperationFailedException</see>.
            
            
## Indexes Of Null Or Empty Paths

/// If any path in the specified filePaths is null or empty, an <see cref="OperationFailedException">OperationFailedException</see> will be thrown, and the path added to the "IndexesOfNullOrEmptyPaths" list in <see cref="OperationFailedException">OperationFailedException</see>.
            
            
## How to fix

TODO:
