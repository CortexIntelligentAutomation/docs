---
title: "Rename Folder"
linkTitle: "Rename Folder"
description: "Renames a folder at the specified folder path to a new name."
---

![Icon](/blocks/folders-rename-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.RenameFolder.RenameFolderBlock)</p>

## Description

Renames a folder at the specified [Folder Path][FolderPath Property] to a [New Name][NewName Property].

## Examples

### Rename a folder

This example will rename `"C:\Source\Folder"` to `"C:\Source\RenamedFolder"`.

In this example assume:

* `"C:\Source\Folder"` contains:
  * An empty sub-folder named `"SubFolder"`.
  * A file named `"File.txt"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\Folder"` | `($)FolderPath` is a variable of type [String][] |
| [New Name][NewName Property] | `($)NewName`, with value `"RenamedFolder"` | `($)NewName` is a variable of type [String][] |

#### Result

Renaming `"C:\Source\Folder"` to `"RenamedFolder"` will:

* Rename the existing folder at `"C:\Source\Folder"` to `"C:\Source\RenamedFolder"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* `"SubFolder"` and `"File.txt"` will be located under `"C:\Source\RenamedFolder"` and their names, dates, attributes and content will be left unchanged.

***

### Other Move Operations

If any other folder move operation is required, the [Move Folder][] or [Move Folders][] blocks must be used instead.

***

## Properties

### Folder Path

The [Folder Path][FolderPath Property] of the folder to rename.

The [Folder Path][FolderPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FolderPath` with value `null` |

### New Name

The [New Name][NewName Property] to rename the folder to.

The [New Name][NewName Property] is case-insensitive and any trailing spaces will be automatically removed.

The [New Name][NewName Property] must be a valid folder name, otherwise an [InvalidFolderNameException][] will be thrown.

For information about valid folder names, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)NewName` with value `null` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [InvalidFolderNameException][] | A folder or file with the [New Name][NewName Property] already exists. |
|                              | The [New Name][NewName Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`). |
|                              | The [New Name][NewName Property] exceeds the system-defined maximum length (typically 32,767 characters). |
| [OperationFailedException][] | The [Folder Path][FolderPath Property] does not exist. |
|                              | The [Folder Path][FolderPath Property] points to a file. |
|                              | The [Folder Path][FolderPath Property] contains leading spaces. |
|                              | The [Folder Path][FolderPath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any folder names. |
|                              | The [Folder Path][FolderPath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | The [Folder Path][FolderPath Property] is a win32 device path (i.e starts with a `"\\.\"`). |
|                              | The [Folder Path][FolderPath Property] is invalid (for example, it is on an unmapped drive). |
|                              | The user the flow is executing as does not have the required permissions to rename the folder or any of its content (e.g. not having read access to the [Folder Path][FolderPath Property] or its content, or write access to the parent of [Folder Path][FolderPath Property]. |
|                              | An unexpected error occurs when copying the folder or any of its content. |
| [PropertyEmptyException][]   | Thrown when [Folder Path][FolderPath Property] or [New Name][NewName Property] are empty (i.e. `""`). |
| [PropertyNullException][]    | Thrown when [Folder Path][FolderPath Property] or [New Name][NewName Property] are `null`. |

## Remarks

### Folder Paths

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

### Folder Path needs escaping

[Folder Path][FolderPath Property] requires `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Source\\"`), or
* Prepending an `@` character before the start of the [Folder Path][FolderPath Property] (e.g. `@"C:\Source"`).

### Folder Attributes

When renaming the folder at the specified [Folder Path][FolderPath Property] all of the folder's attributes are left unchanged.

For information about the folder attributes (i.e. ReadOnly, Hidden, Archive etc.), please see [File & Folder Attributes][].

[FolderPath Property]: {{< ref "#folder-path" >}}
[NewName Property]: {{< ref "#new-name" >}}

[Folder Attributes]: {{< ref "#folder-attributes" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[InvalidFolderNameException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.InvalidFolderNameException.MainDoc" >}}
[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Attributes]: {{< url "Cortex.Reference.Concepts.FileAndFolderAttributes.MainDoc" >}}
[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.FileAndFolderPaths.MainDoc" >}}

[Move Folder]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.MoveFolder.MoveFolder.MainDoc" >}}
[Move Folders]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.MoveFolder.MoveFolders.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.Boolean" >}}
