---
title: "Delete Folders"
linkTitle: "Delete Folders"
description: "Deletes folders at the specified folder paths."
---

{{< figure src="/blocks/folders-delete-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.DeleteFolder.DeleteFoldersBlock)</p>

## Description

Deletes folders at the specified [Folder Paths][FolderPaths Property].

A [Recursive][Recursive Property] option must be set to `true` to be able to delete folders that contain files and/or other folders. This is to prevent unintentional and destructive deletion of files and folders.

## Examples

### Delete empty folders

This example will delete `["C:\Source\EmptyFolder1", "C:\Source\EmptyFolder2"]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Paths][FolderPaths Property] | `($)FolderPaths`, with value `[@"C:\Source\EmptyFolder1", @"C:\Source\EmptyFolder2"]` | `($)FolderPaths` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Recursive][Recursive Property] | `($)Recursive`, with value `false` | `($)Recursive` is a variable of type [Boolean][] |

#### Result

Deleting `["C:\Source\EmptyFolder1", "C:\Source\EmptyFolder2"]` results in the folders `"EmptyFolder1"` and `"EmptyFolder2"` being deleted from the folder `"C:\Source"`.

***

### Delete folders and their content

This example will delete `["C:\Source\Folder1", "C:\Source\Folder2"]` and their content.

In this example assume:

* `"C:\Source\Folder1"` contains:
  * A file named `"FileInFolder1.txt"`.
  * An empty sub-folder named `"EmptySubFolder1"`.
  * An sub-folder named `"SubFolder1"` that contains.
    * A file named `"FileInSubFolder1.txt"`.
* `"C:\Source\Folder2"` contains:
  * A file named `"FileInFolder2.txt"`.
  * An empty sub-folder named `"EmptySubFolder2"`.
  * An sub-folder named `"SubFolder2"` that contains.
    * A file named `"FileInSubFolder2.txt"`.

Therefore, recursive must be set to `true` to ensure child folders and files can be deleted.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Paths][FolderPaths Property] | `($)FolderPaths`, with value `[@"C:\Source\Folder1", @"C:\Source\Folder2"]` | `($)FolderPaths` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Recursive][Recursive Property] | `($)Recursive`, with value `true` | `($)Recursive` is a variable of type [Boolean][] |

#### Result

Deleting `[@"C:\Source\Folder1", @"C:\Source\Folder2"]` and their content results in:

* File `"FileInSubFolder1.txt"` being deleted from the folder `"C:\Source\Folder1\SubFolder1"`.
* File `"FileInSubFolder2.txt"` being deleted from the folder `"C:\Source\Folder2\SubFolder2"`.
* Folder `"SubFolder1"` being deleted from the folder `"C:\Source\Folder1"`.
* Folder `"SubFolder2"` being deleted from the folder `"C:\Source\Folder2"`.
* Folder `"EmptySubFolder1"` being deleted from the folder `"C:\Source\Folder1"`.
* Folder `"EmptySubFolder2"` being deleted from the folder `"C:\Source\Folder2"`.
* File `"FileInFolder1.txt"` being deleted from the folder `"C:\Source\Folder1"`.
* File `"FileInFolder2.txt"` being deleted from the folder `"C:\Source\Folder2"`.
* Folder `"Folder1"` being deleted from the folder `"C:\Source"`.
* Folder `"Folder2"` being deleted from the folder `"C:\Source"`.

***

## Properties

### Folder Paths

The [Folder Paths][FolderPaths Property] to delete the folders from.

Each folder path in [Folder Paths][FolderPaths Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)FolderPaths` with no value |

### Recursive

[Recursive][Recursive Property] option that must be set to `true` to be able to delete folders that contain files and/or other folders.

If [Recursive][Recursive Property] is set to `false`, only empty folders will be able to be deleted; for non-empty folders an [OperationFailedException][] will be thrown.

By default, this is set to `false` to prevent unintentional and destructive deletion of files and folders.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `false` |

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
|                              | Any folder path in [Folder Paths][FolderPaths Property] is not empty and recursive is `false`. |
|                              | Any folder path in [Folder Paths][FolderPaths Property] or any of their sub-folders are read-only or contain read-only files and/or folders.
|                              | The user the flow is executing as does not have the required permissions to delete a folder in the [Folder Paths][FolderPaths Property] or any of its content. |
|                              | An unexpected error occurs when deleting a folder in the [Folder Paths][FolderPaths Property] or any of its content. |
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

### Folder Path does not exist

If a folder path in [Folder Paths][FolderPaths Property] does not exist no exception is recorded for that folder path.

### Handling of Exceptions

If an exception occurs when trying to delete a folder in [Folder Paths][FolderPaths Property], it will be recorded and the block will continue processing the remaining folders. Once all folders are processed, recorded exceptions will be thrown within an [OperationFailedException][].

[FolderPaths Property]: {{< ref "#folder-paths" >}}
[Recursive Property]: {{< ref "#recursive" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[OperationFailedException]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[Duplicate Folder Paths]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.IndexesOfDuplicatePaths" >}}
[Null Or Empty Folder Paths]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.IndexesOfNullOrEmptyPaths" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Paths]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}

[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
