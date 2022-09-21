---
title: "Copy Folder"
linkTitle: "Copy Folder"
description: "Copies a folder at the specified folder path to the given destination path."
---

{{< figure src="/blocks/folders-copy-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.CopyFolder.CopyFolderBlock)</p>

## Description

Copies a folder at the specified [Folder Path][FolderPath Property] to the given [Destination Path][DestinationPath Property], with an option to copy the folder and its content, or just its [Content Only][ContentOnly Property].

An option can also be specified to [Overwrite][Overwrite Property] anything being copied that already exists in the [Destination Path][DestinationPath Property].

## Examples

### Copy a folder and its content

This example will copy `"C:\Source\Folder"` and its content to `"C:\Destination"`.

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

Copying `"C:\Source\Folder"` and its content to `"C:\Destination"` that does not already contain a folder named `"Folder"` will:

* Create a new folder at `"C:\Destination\Folder"` with:
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` set to the time the copy occurred.
  * The [Folder attributes][] copied from `"C:\Source\Folder"`.
* Create a new folder at `"C:\Destination\Folder\SubFolder"` with:
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` set to the time the copy occurred.
  * The [Folder attributes][] copied from `"C:\Source\Folder\SubFolder"`.
* Create a new file at `"C:\Destination\Folder\File.txt"` with:
  * The content copied from `"C:\Source\Folder\File.txt"`.
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` copied from `"C:\Source\Folder\File.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder\File.txt"`.

***

### Copy a folder and its content, overwriting any content that already exists

This example will copy `"C:\Source\Folder"` and its content to `"C:\Destination"`, overwriting any content that already exists.

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

Copying `"C:\Source\Folder"` and its content to `"C:\Destination"` with the [Overwrite][Overwrite Property] option set to `true`, and where `"C:\Destination\Folder"`, `"C:\Destination\Folder\SubFolderAlreadyExists"` and `"C:\Destination\Folder\FileAlreadyExists.txt"` already exist will:

* Overwrite the existing folder at `"C:\Destination\Folder"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Create a new empty folder at `"C:\Destination\Folder\SubFolder"` with:
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` set to the time the copy occurred.
  * The [Folder attributes][] copied from `"C:\Source\Folder\SubFolder"`.
* Overwrite the existing folder at `"C:\Destination\Folder\SubFolderAlreadyExists"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Create a new file at `"C:\Destination\Folder\File.txt"` with:
  * The content copied from `"C:\Source\Folder\File.txt"`.
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` copied from `"C:\Source\Folder\File.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder\File.txt"`.
* Overwrite the existing file at `"C:\Destination\Folder\FileAlreadyExists.txt"` with:
  * The content copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.
  * The `Date Created` left unchanged.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.

***

### Copy a folder's content only

This example will copy `"C:\Source\Folder"` content only to `"C:\Destination"`.

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

Copying `"C:\Source\Folder"` content only to `"C:\Destination"` that does not already contain a folder named `"SubFolder"` or a file named `"File.txt"` will:

* Create a new folder at `"C:\Destination\SubFolder"` with:
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` set to the time the copy occurred.
  * The [Folder attributes][] copied from `"C:\Source\Folder\SubFolder"`.
* Create a new file at `"C:\Destination\File.txt"` with:
  * The content copied from `"C:\Source\Folder\File.txt"`.
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` copied from `"C:\Source\Folder\File.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder\File.txt"`.

***

### Copy a folder's content only, overwriting any content that already exists

This example will copy `"C:\Source\Folder"` content only to `"C:\Destination"`, overwriting any content that already exists.

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

Copying `"C:\Source\Folder"` content only to `"C:\Destination"` with the [Overwrite][Overwrite Property] option set to `true`, and where `"C:\Destination\SubFolderAlreadyExists"` and `"C:\Destination\FileAlreadyExists.txt"` already exist will:

* Create a new empty folder at `"C:\Destination\SubFolder"` with:
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` set to the time the copy occurred.
  * The [Folder attributes][] copied from `"C:\Source\Folder\SubFolder"`.
* Overwrite the existing folder at `"C:\Destination\SubFolderAlreadyExists"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Create a new file at `"C:\Destination\File.txt"` with:
  * The content copied from `"C:\Source\Folder\File.txt"`.
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` copied from `"C:\Source\Folder\File.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder\File.txt"`.
* Overwrite the existing file at `"C:\Destination\FileAlreadyExists.txt"` with:
  * The content copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.
  * The `Date Created` left unchanged.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder\FileAlreadyExists.txt"`.

***

### Copy a folder and its content to the same location but with a different name

If it is required to copy a folder and its content into the same folder it is currently located in, but with a different name, then it is not possible to do with this block; the [Duplicate Folder][] block must be used instead.

***

### Copy a folder and its content to a different location but with a different name

If it is required to copy a folder and its content into a different folder than the one it is currently located in, but with a different name, then it is not possible to do with this block; the [Rename Folder][] block must be used instead.

***

## Properties

### Folder Path

The [Folder Path][FolderPath Property] to copy the folder and/or its content from.

The [Folder Path][FolderPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)FolderPath` with no value |

### Destination Path

The [Destination Path][DestinationPath Property] to copy the folder and/or its content to.

The [Destination Path][DestinationPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

The [Destination Path][DestinationPath Property] must point to a folder, otherwise an [InvalidPathException][] will be thrown.

The copied folders and files will have the same names as the folders and files copied.

Any non-existing folders within the [Destination Path][DestinationPath Property] will be automatically created.

For information about the supported file and folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `""`) |

### Overwrite

Option to [Overwrite][Overwrite Property] the folder and/or contents being copied to in the [Destination Path][DestinationPath Property] if they already exist.

If the folder and/or contents exists, [Overwrite][Overwrite Property] must be set to `true`, otherwise an [OperationFailedException][] will be thrown. By default, this is set to `false` to avoid implicit and accidental overwriting of existing folders and files.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `false` |

### Content Only

Option to specify whether to copy the folder and its content or just the [Content Only][ContentOnly Property].

To copy the folder and its content, [Content Only][ContentOnly Property] must be set to `false`; to copy just the content, [Content Only][ContentOnly Property] must be set to `true`.

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
|                              | Any file being copied already exists in the specified [Destination Path][DestinationPath Property] and overwrite is `false`. |
|                              | Any file being copied already exists in the specified [Destination Path][DestinationPath Property], is read-only and overwrite is `true`. |
|                              | Any file being copied already exists in the specified [Destination Path][DestinationPath Property], is hidden and overwrite is `true`, but the file under the specified [Folder Path][FolderPath Property] is not hidden.|
|                              | The user the flow is executing as does not have the required permissions to copy the folder or any of its content (e.g. not having read access to the [Folder Path][FolderPath Property] or its content, or write access to the [Destination Path][DestinationPath Property]). |
|                                  | The operation is cyclic (e.g. copying a folder into one of its sub-folders). |
|                              | An unexpected error occurs when copying the folder or any of its content. |
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

When copying the folder at the specified [Folder Path][FolderPath Property] or any folder under it to the new [Destination Path][DestinationPath Property], if the copied folder already exists its attributes remain unchanged, otherwise they are copied.

For information about the folder attributes (i.e. ReadOnly, Hidden, Archive etc.), please see [File & Folder Attributes][].

### File Attributes

When copying a file under [Folder Path][FolderPath Property] to the new [Destination Path][DestinationPath Property], all of the file's attributes are also copied.

For information about the file attributes (i.e. ReadOnly, Hidden, Archive etc.), please see [File & Folder Attributes][].

### Handling of Exceptions

If an exception occurs when trying to copy [Folder Path][FolderPath Property], an [OperationFailedException][] will be thrown.

[FolderPath Property]: {{< ref "#folder-path" >}}
[DestinationPath Property]: {{< ref "#destination-path" >}}
[Overwrite Property]: {{< ref "#overwrite" >}}
[ContentOnly Property]: {{< ref "#content-only" >}}

[Folder Attributes]: {{< ref "#folder-attributes" >}}
[File Attributes]: {{< ref "#file-attributes" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[InvalidPathException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.InvalidPathException.MainDoc" >}}
[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Attributes]: {{< url "Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Attributes.MainDoc" >}}
[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}

[Rename Folder]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.RenameFolder.RenameFolder.MainDoc" >}}
[Duplicate Folder]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.CopyFolder.DuplicateFolder.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
