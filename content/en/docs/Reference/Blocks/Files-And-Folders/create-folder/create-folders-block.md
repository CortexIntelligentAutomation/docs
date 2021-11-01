---
title: "Create Folders"
linkTitle: "Create Folders"
description: "Create folders at the specified folder paths."
---

![Icon](/blocks/folders-create-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.CreateFolder.CreateFoldersBlock)</p>

## Description

Creates folders at the specified [Folder Paths][FolderPaths Property].

## Examples

### Create folders

This example will create `["C:\Source\NewFolder1", "C:\Source\NewFolder2"]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Paths][FolderPaths Property] | `($)FolderPaths`, with value `[@"C:\Source\NewFolder1", @"C:\Source\NewFolder2"]` | `($)FolderPaths` is a variable of type [IEnumerable][]&lt;[String][]&gt; |

#### Result

Creating `["C:\Source\NewFolder1", "C:\Source\NewFolder2"]` results in the folders `"NewFolder1"` and `"NewFolder2"` being create in the folder `"C:\Source"`.

***

## Properties

### Folder Paths

The [Folder Paths][FolderPaths Property] to create the folders at.

Each folder path in [Folder Paths][FolderPaths Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

Any folders that do not exist in any of the [Folder Paths][FolderPaths Property] will be created.

If a folder in [Folder Paths][FolderPaths Property] already exists, a new folder is not created, and no exception is thrown.

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FolderPaths` with value `[]` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [OperationFailedException][] | Any folder path in [Folder Paths][FolderPaths Property] is `null` or empty (i.e. `""`). For more information, see [Null or Empty Folder Paths][]. |
|                              | Any folder path in [Folder Paths][FolderPaths Property] is duplicated. For more information, see [Duplicate Folder Paths][]. |
|                              | Any folder path in [Folder Paths][FolderPaths Property] points to a file. |
|                              | Any folder path in [Folder Paths][FolderPaths Property] contains leading spaces. |
|                              | Any folder path in [Folder Paths][FolderPaths Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any folder names. |
|                              | Any folder path in [Folder Paths][FolderPaths Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | Any folder path in [Folder Paths][FolderPaths Property] is invalid (for example, it is on an unmapped drive). |
|                              | The user the flow is executing as does not have the required permissions to create a folder in the [Folder Paths][FolderPaths Property]. |
|                              | An unexpected error occurs when creating a folder in the [Folder Paths][FolderPaths Property] or any of its content. |
| [PropertyEmptyException][]   | Thrown when [Folder Paths][FolderPaths Property] does not contain any items. | |
| [PropertyNullException][]    | Thrown when [Folder Paths][FolderPaths Property] is `null`. |

## Remarks

### Folder Paths

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

### Folder Paths need escaping

Each folder path in [Folder Paths][FolderPaths Property] requires `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Source\\"`), or
* Prepending an `@` character before the start of the folder path (e.g. `@"C:\Source"`).

### Folder Path already exists

If a folder path in [Folder Paths][FolderPaths Property] already exists nothing is created, and no exception is thrown.

### Handling of Exceptions

If an exception occurs when trying to create a folder in [Folder Paths][FolderPaths Property], it will be recorded and the block will continue processing the remaining folders. Once all folders are processed, recorded exceptions will be thrown within an [OperationFailedException][].

[FolderPaths Property]: {{< ref "#folder-paths" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[Duplicate Folder Paths]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.IndexesOfDuplicatePaths" >}}
[Null Or Empty Folder Paths]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.IndexesOfNullOrEmptyPaths" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.FileAndFolderPaths.MainDoc" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.MostCommon.IEnumerable" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
