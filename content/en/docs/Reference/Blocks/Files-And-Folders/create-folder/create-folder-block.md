---
title: "Create Folder"
linkTitle: "Create Folder"
description: "Creates a folder at the specified folder path."
---

{{< figure src="/blocks/folders-create-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.CreateFolder.CreateFolderBlock)</p>

## Description

Creates a folder at the specified [Folder Path][FolderPath Property].

## Examples

### Create a folder

This example will create `"C:\Source\NewFolder"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\NewFolder"` | `($)FolderPath` is a variable of type [String][] |

#### Result

Creating `"C:\Source\NewFolder"` results in the folder `"NewFolder"` being created in the folder `"C:\Source"`.

***

## Properties

### Folder Path

The [Folder Path][FolderPath Property] to create the folder at.

The [Folder Path][FolderPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

Any folders that do not exist in the [Folder Path][FolderPath Property] will be created.

If the [Folder Path][FolderPath Property] already exists, a new folder is not created, and no exception is thrown.

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)FolderPath` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [OperationFailedException][] | The [Folder Path][FolderPath Property] points to a file. |
|                              | The [Folder Path][FolderPath Property] contains leading spaces. |
|                              | The [Folder Path][FolderPath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any folder names. |
|                              | The [Folder Path][FolderPath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | The [Folder Path][FolderPath Property] is invalid (for example, it is on an unmapped drive). |
|                              | The user the flow is executing as does not have the required permissions to create the folder at the [Folder Path][FolderPath Property]. |
|                              | An unexpected error occurs when creating the folder at the [Folder Path][FolderPath Property] or any of its content. |
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

### Folder Path already exists

If the [Folder Path][FolderPath Property] already exists nothing is created, and no exception is thrown.

[FolderPath Property]: {{< ref "#folder-path" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.FileAndFolderPaths.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
