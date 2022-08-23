---
title: "Move Folder"
linkTitle: "Move Folder"
description: "Moves a folder at the specified folder path to the given destination path."
---

{{< figure src="/blocks/folders-move-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.MoveFolder.MoveFolderBlock)</p>

## Description

Moves a folder at the specified [Folder Path][FolderPath Property] to the given [Destination Path][DestinationPath Property], with an option to move the folder and its content, or just its [Content Only][ContentOnly Property].

An option can also be specified to [Overwrite][Overwrite Property] anything being moved that already exists in the [Destination Path][DestinationPath Property].

## Examples

### Move a folder and its content

This example will move `"C:\Source\Folder"` and its content to `"C:\Destination"`.

In this example assume:

* `"C:\Source\Folder"` contains:
  * An empty sub-folder named `"SubFolder"`.
  * A file named `"File.txt"`.
* `"C:\Destination"` does not already contain a folder named `"Folder"`, so overwrite can be set to either `true` or `false` and it will still work.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\Folder"` | `($)FolderPath` is a variable of type [String][] |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `false` | `($)Overwrite` is a variable of type [Boolean][] |
| [Content Only][ContentOnly Property] | `($)ContentOnly`, with value `false` | `($)ContentOnly` is a variable of type [Boolean][] |

#### Result

Moving `"C:\Source\Folder"` and its content to `"C:\Destination"` that does not already contain a folder named `"Folder"` will:

* Move `"C:\Source\Folder"` to `"C:\Destination\Folder"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder\SubFolder"` to `"C:\Destination\Folder\SubFolder"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder\File.txt"` to `"C:\Destination\Folder\File.txt"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.

***

### Move a folder and its content, overwriting any content that already exists

This example will move `"C:\Source\Folder"` and its content to `"C:\Destination"`, overwriting any content that already exists.

In this example assume:

* `"C:\Source\Folder"` contains:
  * An empty sub-folder named `"SubFolder"`.
  * An empty sub-folder named `"SubFolderAlreadyExists"`.
  * A file named `"File.txt"`.
  * A file named `"FileAlreadyExists.txt"`.
* `"C:\Destination"` already contains a folder named `"Folder"`, which already contains:
  * A folder named `"SubFolderAlreadyExists"`.
  * A file named `"FileAlreadyExists.txt"`.

Therefore, overwrite must be set to `true` to ensure the existing `"SubFolderAlreadyExists"` and `"FileAlreadyExists.txt"` can be overwritten.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\Folder"` | `($)FolderPath` is a variable of type [String][] |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `true` | `($)Overwrite` is a variable of type [Boolean][] |
| [Content Only][ContentOnly Property] | `($)ContentOnly`, with value `false` | `($)ContentOnly` is a variable of type [Boolean][] |

#### Result

Moving `"C:\Source\Folder"` and its content to `"C:\Destination"` with the [Overwrite][Overwrite Property] option set to `true`, and where `"C:\Destination\Folder"`, `"C:\Destination\Folder\SubFolderAlreadyExists"` and `"C:\Destination\Folder\FileAlreadyExists.txt"` already exist will:

* Overwrite the existing folder at `"C:\Destination\Folder"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` set to the time the move occurred.
  * The `Date Modified` set to the time the move occurred.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder\SubFolder"` to `"C:\Destination\Folder\SubFolder"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Overwrite the existing folder at `"C:\Destination\Folder\SubFolderAlreadyExists"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder\File.txt"` to `"C:\Destination\Folder\File.txt"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.
* Overwrite the existing file at `"C:\Destination\Folder\FileAlreadyExists.txt"` with:
  * The content copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.
  * The `Date Created` copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.
  * The `Date Accessed` copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.
  * The `Date Modified` copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.

***

### Move a folder's content only

This example will move `"C:\Source\Folder"` content only to `"C:\Destination"`.

In this example assume:

* `"C:\Source\Folder"` contains:
  * An empty sub-folder named `"SubFolder"`.
  * A file named `"File.txt"`.
* `"C:\Destination"` does not already contain a folder named `"SubFolder"` or a file named `"File.txt"`, so overwrite can be set to either `true` or `false` and it will still work.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\Folder"` | `($)FolderPath` is a variable of type [String][] |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `false` | `($)Overwrite` is a variable of type [Boolean][] |
| [Content Only][ContentOnly Property] | `($)ContentOnly`, with value `true` | `($)ContentOnly` is a variable of type [Boolean][] |

#### Result

Moving `"C:\Source\Folder"` content only to `"C:\Destination"` that does not already contain a folder named `"SubFolder"` or a file named `"File.txt"` will:

* Move `"C:\Source\Folder\SubFolder"` to `"C:\Destination\SubFolder"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder\File.txt"` to `"C:\Destination\File.txt"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.

***

### Move a folder's content only, overwriting any content that already exists

This example will move `"C:\Source\Folder"` content only to `"C:\Destination"`, overwriting any content that already exists.

In this example assume:

* `"C:\Source\Folder"` contains:
  * An empty sub-folder named `"SubFolder"`.
  * An empty sub-folder named `"SubFolderAlreadyExists"`.
  * A file named `"File.txt"`.
  * A file named `"FileAlreadyExists.txt"`.
* `"C:\Destination"` already contains:
  * A folder named `"SubFolderAlreadyExists"`.
  * A file named `"FileAlreadyExists.txt"`.

Therefore, overwrite must be set to `true` to ensure the existing `"SubFolderAlreadyExists"` and `"FileAlreadyExists.txt"` can be overwritten.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\Folder"` | `($)FolderPath` is a variable of type [String][] |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `true` | `($)Overwrite` is a variable of type [Boolean][] |
| [Content Only][ContentOnly Property] | `($)ContentOnly`, with value `true` | `($)ContentOnly` is a variable of type [Boolean][] |

#### Result

Moving `"C:\Source\Folder"` content only to `"C:\Destination"` with the [Overwrite][Overwrite Property] option set to `true`, and where `"C:\Destination\SubFolderAlreadyExists"` and `"C:\Destination\FileAlreadyExists.txt"` already exist will:

* Move `"C:\Source\Folder\SubFolder"` to `"C:\Destination\SubFolder"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Overwrite the existing folder at `"C:\Destination\SubFolderAlreadyExists"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder\File.txt"` to `"C:\Destination\File.txt"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.
* Overwrite the existing file at `"C:\Destination\FileAlreadyExists.txt"` with:
  * The content copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.
  * The `Date Created` copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.
  * The `Date Accessed` copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.
  * The `Date Modified` copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.

***

### Move a folder and its content to the same location but with a different name

If it is required to move a folder and its content into the same folder it is currently located in, but with a different name, then it is not possible to do with this block; the [Rename Folder][] block must be used instead.

***

### Move a folder and its content to a different location but with a different name

If it is required to move a folder and its content into a different folder than the one it is currently located in, but with a different name, it is not possible to do with a single block; you must use a combination of this block and the [Rename Folder][] block.

***

## Properties

### Folder Path

The [Folder Path][FolderPath Property] to move the folder and/or its content from.

The [Folder Path][FolderPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FolderPath` with value `null` |

### Destination Path

The [Destination Path][DestinationPath Property] to move the folder and/or its content to.

The [Destination Path][DestinationPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

The [Destination Path][DestinationPath Property] must point to a folder, otherwise an [InvalidPathException][] will be thrown.

The moved folders and files will have the same names as the folders and files moved.

Any non-existing folders within the [Destination Path][DestinationPath Property] will be automatically created.

For information about the supported file and folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)DestinationPath` with value `null` |

### Overwrite

Option to [Overwrite][Overwrite Property] the folder and/or contents being moved to in the [Destination Path][DestinationPath Property] if they already exist.

If the folder and/or contents exists, [Overwrite][Overwrite Property] must be set to `true`, otherwise an [OperationFailedException][] will be thrown. By default, this is set to `false` to avoid implicit and accidental overwriting of existing folders and files.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Default Value | `($)Overwrite` with value `false` |

### Content Only

Option to specify whether to move the folder and its content or just the [Content Only][ContentOnly Property].

To move the folder and its content, [Content Only][ContentOnly Property] must be set to `false`; to move just the content, [Content Only][ContentOnly Property] must be set to `true`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Default Value | `($)ContentOnly` with value `false` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [InvalidPathException][]     | The [Destination Path][DestinationPath Property] points to a file. |
|                              | The [Destination Path][DestinationPath Property] contains leading spaces. |
|                              | The [Destination Path][DestinationPath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any folder names. |
|                              | The [Destination Path][DestinationPath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
| [OperationFailedException][] | The [Folder Path][FolderPath Property] does not exist. |
|                              | The [Folder Path][FolderPath Property] points to a file. |
|                              | The [Folder Path][FolderPath Property] contains leading spaces. |
|                              | The [Folder Path][FolderPath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any folder names. |
|                              | The [Folder Path][FolderPath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | The [Folder Path][FolderPath Property] or [Destination Path][DestinationPath Property] is a win32 device path (i.e starts with a `"\\.\"`). |
|                              | The [Folder Path][FolderPath Property] or [Destination Path][DestinationPath Property] is invalid (for example, it is on an unmapped drive). |
|                              | The [Folder Path][FolderPath Property] and [Destination Path][DestinationPath Property] point to the same folder and [Content Only][ContentOnly Property] is `true`. |
|                              | The [Folder Path][FolderPath Property] is a child folder in the [Destination Path][DestinationPath Property] and [Content Only][ContentOnly Property] is `false`. |
|                              | Any file being moved already exists in the specified [Destination Path][DestinationPath Property] and overwrite is `false`. |
|                              | Any file being moved already exists in the specified [Destination Path][DestinationPath Property], is read-only and overwrite is `true`. |
|                              | The user the flow is executing as does not have the required permissions to move the folder or any of its content (e.g. not having read access to the [Folder Path][FolderPath Property] or its content, or write access to the [Destination Path][DestinationPath Property]). |
|                                  | The operation is cyclic (e.g. moving a folder into one of its sub-folders). |
|                              | An unexpected error occurs when moving the folder or any of its content. |
| [PropertyEmptyException][]   | Thrown when [Folder Path][FolderPath Property] or [Destination Path][DestinationPath Property] are empty (i.e. `""`). |
| [PropertyNullException][]    | Thrown when [Folder Path][FolderPath Property] or [Destination Path][DestinationPath Property] are `null`. |

## Remarks

### Folder Paths

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

### Folder Path and Destination Path need escaping

[Folder Path][FolderPath Property] and [Destination Path][DestinationPath Property] require `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Source\\"`), or
* Prepending an `@` character before the start of the [Folder Path][FolderPath Property] (e.g. `@"C:\Source"`) and [Destination Path][DestinationPath Property] (e.g. `@"C:\Destination"`).

### Folder Attributes

When moving the folder at the specified [Folder Path][FolderPath Property] or any folder under it to the new [Destination Path][DestinationPath Property], if the folder already exists in the destination its attributes remain unchanged.

For information about the folder attributes (i.e. ReadOnly, Hidden, Archive etc.), please see [File & Folder Attributes][].

### File Attributes

When moving a file under [Folder Path][FolderPath Property] to the new [Destination Path][DestinationPath Property], all of the file's attributes are also moved.

For information about the file attributes (i.e. ReadOnly, Hidden, Archive etc.), please see [File & Folder Attributes][].

### Handling of Exceptions

If an exception occurs when trying to move [Folder Path][FolderPath Property], an [OperationFailedException][] will be thrown.

[FolderPath Property]: {{< ref "#folder-path" >}}
[DestinationPath Property]: {{< ref "#destination-path" >}}
[Overwrite Property]: {{< ref "#overwrite" >}}
[ContentOnly Property]: {{< ref "#content-only" >}}

[Folder Attributes]: {{< ref "#folder-attributes" >}}
[File Attributes]: {{< ref "#file-attributes" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[InvalidPathException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.InvalidPathException.MainDoc" >}}
[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Attributes]: {{< url "Cortex.Reference.Concepts.FileAndFolderAttributes.MainDoc" >}}
[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.FileAndFolderPaths.MainDoc" >}}

[Rename Folder]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.RenameFolder.RenameFolder.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
