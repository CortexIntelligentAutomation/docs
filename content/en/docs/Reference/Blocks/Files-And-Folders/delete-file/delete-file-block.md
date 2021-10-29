---
title: "Delete File"
linkTitle: "Delete File"
description: "Deletes a file at the specified file path."
---

![Icon](/blocks/files-delete-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.DeleteFile.DeleteFileBlock)</p>

## Description

Deletes a file at the specified [File Path][FilePath Property].

## Examples

### Delete a file

This example will delete `"C:\Source\File.txt"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Path][FilePath Property] | `($)FilePath`, with value `@"C:\Source\File.txt"` | `($)FilePath` is a variable of type [String][] |

#### Result

Deleting `"C:\Source\File.txt"` results in the file `"File.txt"` being deleted from the folder `"C:\Source"`.

***

## Properties

### File Path

The [File Path][FilePath Property] to delete the file from.

The [File Path][FilePath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

If the [File Path][FilePath Property] exists it is permanently deleted; it does not go into a recycle bin.

If the [File Path][FilePath Property] does not exist no exception is thrown.

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FilePath` with value `null` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [OperationFailedException][] | The [File Path][FilePath Property] points to a folder. |
|                              | The [File Path][FilePath Property] contains leading spaces. |
|                              | The [File Path][FilePath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any file or folder names. |
|                              | The [File Path][FilePath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | The [File Path][FilePath Property] is invalid (for example, it is on an unmapped drive). |
|                              | The file at the specified [File Path][FilePath Property] is read-only. |
|                              | The file at the specified [File Path][FilePath Property] is in use by another application. |
|                              | The user the flow is executing as does not have the required permissions to delete the file. |
|                              | An unexpected error occurs when deleting the file. |
| [PropertyEmptyException][]   | Thrown when [File Path][FilePath Property] is empty (i.e. `""`). |
| [PropertyNullException][]    | Thrown when [File Path][FilePath Property] is `null`. |

## Remarks

### File Paths

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

### File Path needs escaping

[File Path][FilePath Property] requires `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Source\\File.txt"`), or
* Prepending an `@` character before the start of the [File Path][FilePath Property] (e.g. `@"C:\Source\File.txt"`).

### File Path does not exist

If the [File Path][FilePath Property] does not exist nothing is deleted, and no exception is thrown.

[FilePath Property]: {{< ref "#file-path" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.FileAndFolderPaths.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
