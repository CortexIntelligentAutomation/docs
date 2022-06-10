---
title: "Delete Files"
linkTitle: "Delete Files"
description: "Deletes files at the specified file paths."
---

{{< figure src="/blocks/files-delete-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.DeleteFile.DeleteFilesBlock)</p>

## Description

Deletes files at the specified [File Paths][FilePaths Property].

## Examples

### Delete files

This example will delete files `["C:\Source\File1.txt", "C:\Source\File2.txt"]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Paths][FilePaths Property] | `($)FilePaths`, with value `[@"C:\Source\File1.txt", @"C:\Source\File2.txt"]` | `($)FilePaths` is a variable of type [IEnumerable][]&lt;[String][]&gt; |

#### Result

Deleting `["C:\Source\File1.txt", "C:\Source\File2.txt"]`  results in files `"File1.txt"` and `"File2.txt"` being deleted from the folder `"C:\Source"`.

***

## Properties

### File Paths

The [File Paths][FilePaths Property] to delete the files from.

Each file path in [File Paths][FilePaths Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

If a file path in [File Paths][FilePaths Property] exists it is permanently deleted; it does not go into a recycle bin.

If a file path in [File Paths][FilePaths Property] does not exist no exception is recorded for that file path.

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[String][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)FilePaths` with value `[]` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [OperationFailedException][] | Any file path in [File Paths][FilePaths Property] is `null` or empty (i.e. `""`). For more information, see [Null or Empty File Paths][]. |
|                              | Any file path in [File Paths][FilePaths Property] is duplicated. For more information, see [Duplicate File Paths][]. |
|                              | Any file path in [File Paths][FilePaths Property] points to a folder. |
|                              | Any file path in [File Paths][FilePaths Property] contains leading spaces. |
|                              | Any file path in [File Paths][FilePaths Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any file or folder names. |
|                              | Any file path in [File Paths][FilePaths Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | Any file path in [File Paths][FilePaths Property] is invalid (for example, it is on an unmapped drive). |
|                              | Any file path in [File Paths][FilePaths Property] is read-only. |
|                              | Any file path in [File Paths][FilePaths Property] is in use by another application. |
|                              | The user the flow is executing as does not have the required permissions to delete a file in [File Paths][FilePaths Property]. |
|                              | An unexpected error occurs when deleting a file in [File Paths][FilePaths Property]. |
| [PropertyEmptyException][]   | Thrown when [File Paths][FilePaths Property] does not contain any items. |
| [PropertyNullException][]    | Thrown when [File Paths][FilePaths Property] is `null`. |

## Remarks

### File Paths

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

### File Paths need escaping

Each file path in [File Paths][FilePaths Property] requires `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Source\\File.txt"`), or
* Prepending an `@` character before the start of the
file path (e.g. `@"C:\Source\File.txt"`).

### File Path does not exist

If a file path in [File Paths][FilePaths Property] does not exist no exception is recorded for that file path.

### Handling of Exceptions

If an exception occurs when trying to delete a file in the [File Paths][FilePaths Property], it will be recorded and the block will continue processing the remaining files. Once all files are processed, recorded exceptions will be thrown within an [OperationFailedException][].

[FilePaths Property]: {{< ref "#file-paths" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[Duplicate File Paths]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.IndexesOfDuplicatePaths" >}}
[Null Or Empty File Paths]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.IndexesOfNullOrEmptyPaths" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.FileAndFolderPaths.MainDoc" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
