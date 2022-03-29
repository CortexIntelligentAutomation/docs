---
title: "Delete Folder"
linkTitle: "Delete Folder"
description: "Deletes a folder at the specified folder path."
---

{{< figure src="/blocks/folders-delete-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.DeleteFolder.DeleteFolderBlock)</p>

## Description

Deletes a folder at the specified [Folder Path][FolderPath Property].

A [Recursive][Recursive Property] option must be set to `true` to be able to delete a folder that contains files and/or other folders. This is to prevent unintentional and destructive deletion of files and folders.

## Examples

### Delete an empty folder

This example will delete `"C:\Source\EmptyFolder"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\EmptyFolder"` | `($)FolderPath` is a variable of type [String][] |
| [Recursive][Recursive Property] | `($)Recursive`, with value `false` | `($)Recursive` is a variable of type [Boolean][] |

#### Result

Deleting `"C:\Source\EmptyFolder"` results in the folder `"EmptyFolder"` being deleted from the folder `"C:\Source"`.

***

### Delete a folder and its content

This example will delete `"C:\Source\Folder"` and its content.

In this example assume:

* `"C:\Source\Folder"` contains:
  * A file named `"FileInFolder.txt"`.
  * An empty sub-folder named `"EmptySubFolder"`.
  * An sub-folder named `"SubFolder"` that contains.
    * A file named `"FileInSubFolder.txt"`.

Therefore, recursive must be set to `true` to ensure child folders and files can be deleted.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\Folder"` | `($)FolderPath` is a variable of type [String][] |
| [Recursive][Recursive Property] | `($)Recursive`, with value `true` | `($)Recursive` is a variable of type [Boolean][] |

#### Result

Deleting `"C:\Source\Folder"` and its content results in:

* File `"FileInSubFolder.txt"` being deleted from the folder `"C:\Source\Folder\SubFolder"`.
* Folder `"SubFolder"` being deleted from the folder `"C:\Source\Folder"`.
* Folder `"EmptySubFolder"` being deleted from the folder `"C:\Source\Folder"`.
* File `"FileInFolder.txt"` being deleted from the folder `"C:\Source\Folder"`.
* Folder `"Folder"` being deleted from the folder `"C:\Source"`.

***

## Properties

### Folder Path

The [Folder Path][FolderPath Property] to delete the folder from.

The [Folder Path][FolderPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FolderPath` with value `null` |

### Recursive

[Recursive][Recursive Property] option that must be set to `true` to be able to delete a folder that contains files and/or other folders.

If [Recursive][Recursive Property] is set to `false`, only an empty folder will be able to be deleted; for a non-empty folder an [OperationFailedException][] will be thrown.

By default, this is set to `false` to prevent unintentional and destructive deletion of files and folders.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Default Value | `($)Recursive` with value `false` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [OperationFailedException][] | The [Folder Path][FolderPath Property] points to a file. |
|                              | The [Folder Path][FolderPath Property] contains leading spaces. |
|                              | The [Folder Path][FolderPath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any folder names. |
|                              | The [Folder Path][FolderPath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | The folder at the [Folder Path][FolderPath Property] is not empty and recursive is `false`. |
|                              | The folder at the [Folder Path][FolderPath Property] or any sub-folders are read-only or contain read-only files and/or folders.
|                              | The user the flow is executing as does not have the required permissions to delete the folder at the [Folder Path][FolderPath Property] or any of its content. |
|                              | An unexpected error occurs when deleting the folder at the [Folder Path][FolderPath Property] or any of its content. |
| [PropertyEmptyException][]   | Thrown when [Folder Path][FolderPath Property] is empty (i.e. `""`). |
| [PropertyNullException][]    | Thrown when [Folder Path][FolderPath Property] is `null`. |

## Remarks

### Folder Paths

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

### Folder Path needs escaping

[Folder Path][FolderPath Property] requires `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Source\\"`), or
* Prepending an `@` character before the start of the [Folder Path][FolderPath Property] (e.g. `@"C:\Source"`).

### Folder Path does not exist

If the [Folder Path][FolderPath Property] does not exist nothing is deleted, and no exception is thrown.

### Handling of Exceptions

If an exception occurs when trying to delete [Folder Path][FolderPath Property], an [OperationFailedException][] will be thrown.

[FolderPath Property]: {{< ref "#folder-path" >}}
[Recursive Property]: {{< ref "#recursive" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.FileAndFolderPaths.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.Boolean" >}}
