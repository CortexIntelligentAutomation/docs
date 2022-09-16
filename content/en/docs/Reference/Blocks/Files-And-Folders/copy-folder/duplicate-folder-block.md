---
title: "Duplicate Folder"
linkTitle: "Duplicate Folder"
description: "Copies a folder at the specified folder path to the same location but with a new name."
---

{{< figure src="/blocks/folders-copy-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.CopyFolder.DuplicateFolderBlock)</p>

## Description

Copies a folder at the specified [Folder Path][FolderPath Property] to the same location but with a [New Name][NewName Property].

## Examples

### Duplicate a folder

This example will make a copy of `"C:\Source\Folder"` at `"C:\Source\CopyOfFolder"`.

In this example assume:

* `"C:\Source\Folder"` contains:
  * An empty sub-folder named `"SubFolder"`.
  * A file named `"File.txt"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\Folder"` | `($)FolderPath` is a variable of type [String][] |
| [New Name][NewName Property] | `($)NewName`, with value `"CopyOfFolder"` | `($)NewName` is a variable of type [String][] |

#### Result

Making a copy of `"C:\Source\Folder"` with a new name of `"CopyOfFolder"` will:

* Create a new folder at `"C:\Source\CopyOfFolder"` with:
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` set to the time the copy occurred.
  * The [Folder attributes][] copied from `"C:\Source\Folder"`.
* Create a new folder at `"C:\Source\CopyOfFolder\SubFolder"` with:
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` set to the time the copy occurred.
  * The [Folder attributes][] copied from `"C:\Source\Folder\SubFolder"`.
* Create a new file at `"C:\Source\CopyOfFolder\File.txt"` with:
  * The content copied from `"C:\Source\Folder\File.txt"`.
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` copied from `"C:\Source\Folder\File.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder\File.txt"`.

***

### Other Copy Operations

If any other folder copying operation is required, the [Copy Folder][] or [Copy Folders][] blocks must be used instead.

***

## Properties

### Folder Path

The [Folder Path][FolderPath Property] to copy the folder and its content from.

The [Folder Path][FolderPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)FolderPath` with no value |

### New Name

The [New Name][NewName Property] to use for the copy of the folder.

The [New Name][NewName Property] is case-insensitive and any trailing spaces will be automatically removed.

The [New Name][NewName Property] must be a valid folder name, otherwise an [InvalidFolderNameException][] will be thrown.

All child folders and files copied will have the same names as the folders and files copied.

For information about valid folder names, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `""`) |

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
|                              | The user the flow is executing as does not have the required permissions to copy the folder or any of its content (e.g. not having read access to the [Folder Path][FolderPath Property] or its content, or write access to the parent of [Folder Path][FolderPath Property]. |
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

When copying the folder at or any folder under the specified [Folder Path][FolderPath Property] all of the folder's attributes are also copied.

For information about the folder attributes (i.e. ReadOnly, Hidden, Archive etc.), please see [File & Folder Attributes][].

### File Attributes

When copying a file under [Folder Path][FolderPath Property] all of the file's attributes are also copied.

For information about the file attributes (i.e. ReadOnly, Hidden, Archive etc.), please see [File & Folder Attributes][].

### Handling of Exceptions

If an exception occurs when trying to copy [Folder Path][FolderPath Property], an [OperationFailedException][] will be thrown.

[FolderPath Property]: {{< ref "#folder-path" >}}
[NewName Property]: {{< ref "#new-name" >}}

[Folder Attributes]: {{< ref "#folder-attributes" >}}
[File Attributes]: {{< ref "#file-attributes" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[InvalidFolderNameException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.InvalidFolderNameException.MainDoc" >}}
[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Attributes]: {{< url "Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Attributes.MainDoc" >}}
[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}

[Copy Folder]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.CopyFolder.CopyFolder.MainDoc" >}}
[Copy Folders]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.CopyFolder.CopyFolders.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
