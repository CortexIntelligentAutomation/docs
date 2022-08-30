---
title: "Move Folders"
linkTitle: "Move Folders"
description: "Moves folders at the specified folder paths to the given destination path."
---

{{< figure src="/blocks/folders-move-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.MoveFolder.MoveFoldersBlock)</p>

## Description

Moves folders at the specified [Folder Paths][FolderPaths Property] to the given [Destination Path][DestinationPath Property], with an option to move the folders and their content, or just their [Content Only][ContentOnly Property].

An option can also be specified to [Overwrite][Overwrite Property] anything being moved that already exists in the [Destination Path][DestinationPath Property].

## Examples

### Move folders and their content

This example will move `["C:\Source\Folder1", "C:\Source\Folder2"]` and their content to `"C:\Destination"`.

In this example assume:

* `"C:\Source\Folder1"` contains:
  * An empty sub-folder named `"SubFolder1"`.
  * A file named `"File1.txt"`.
* `"C:\Source\Folder2"` contains:
  * An empty sub-folder named `"SubFolder2"`.
  * A file named `"File2.txt"`.
* `"C:\Destination"` does not already contain a folder named `"Folder1"` or `"Folder2"`, so overwrite can be set to either `true` or `false` and it will still work.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Paths][FolderPaths Property] | `($)FolderPaths`, with value `[@"C:\Source\Folder1", @"C:\Source\Folder2"]` | `($)FolderPaths` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `false` | `($)Overwrite` is a variable of type [Boolean][] |
| [Content Only][ContentOnly Property] | `($)ContentOnly`, with value `false` | `($)ContentOnly` is a variable of type [Boolean][] |

#### Result

Moving `["C:\Source\Folder1", "C:\Source\Folder2"]` and their content to `"C:\Destination"` that does not already contain folders named `"Folder1"` and `"Folder2"` will:

* Move `"C:\Source\Folder1"` to `"C:\Destination\Folder1"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder1\SubFolder1"` to `"C:\Destination\Folder1\SubFolder1"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder1\File1.txt"` to `"C:\Destination\Folder1\File1.txt"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.
* Move `"C:\Source\Folder2"` to `"C:\Destination\Folder2"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder2\SubFolder2"` to `"C:\Destination\Folder2\SubFolder2"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder2\File2.txt"` to `"C:\Destination\Folder2\File2.txt"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.

***

### Move folders and their content, overwriting any content that already exists

This example will move `["C:\Source\Folder1", "C:\Source\Folder2"]` and their content to `"C:\Destination"`, overwriting any content that already exists.

In this example assume:

* `"C:\Source\Folder1"` contains:
  * An empty sub-folder named `"SubFolder1"`.
  * An empty sub-folder named `"SubFolderAlreadyExists1"`.
  * A file named `"File1.txt"`.
  * A file named `"FileAlreadyExists1.txt"`.
* `"C:\Source\Folder2"` contains:
  * An empty sub-folder named `"SubFolder2"`.
  * An empty sub-folder named `"SubFolderAlreadyExists2"`.
  * A file named `"File2.txt"`.
  * A file named `"FileAlreadyExists2.txt"`.
* `"C:\Destination"` already contains:
  * A folder named `"Folder1"`, which already contains:
    * A folder named `"SubFolderAlreadyExists1"`.
    * A file named `"FileAlreadyExists1.txt"`.
  * A folder named `"Folder2"`, which already contains:
    * A folder named `"SubFolderAlreadyExists2"`.
    * A file named `"FileAlreadyExists2.txt"`.

Therefore, overwrite must be set to `true` to ensure the existing folders and files can be overwritten.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Paths][FolderPaths Property] | `($)FolderPaths`, with value `[@"C:\Source\Folder1", @"C:\Source\Folder2"]` | `($)FolderPaths` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `true` | `($)Overwrite` is a variable of type [Boolean][] |
| [Content Only][ContentOnly Property] | `($)ContentOnly`, with value `false` | `($)ContentOnly` is a variable of type [Boolean][] |

#### Result

Moving `["C:\Source\Folder1", "C:\Source\Folder2"]` and their content to `"C:\Destination"` with the [Overwrite][Overwrite Property] option set to `true`, and where `"C:\Destination\Folder1"`, `"C:\Destination\Folder1\SubFolderAlreadyExists1"`, `"C:\Destination\Folder1\FileAlreadyExists1.txt"`, `"C:\Destination\Folder2"`, `"C:\Destination\Folder2\SubFolderAlreadyExists2"` and `"C:\Destination\Folder2\FileAlreadyExists2.txt"` already exist will:

* Overwrite the existing folder at `"C:\Destination\Folder1"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` set to the time the move occurred.
  * The `Date Modified` set to the time the move occurred.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder1\SubFolder1"` to `"C:\Destination\Folder1\SubFolder1"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Overwrite the existing folder at `"C:\Destination\Folder1\SubFolderAlreadyExists1"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder1\File1.txt"` to `"C:\Destination\Folder1\File1.txt"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.
* Overwrite the existing file at `"C:\Destination\Folder1\FileAlreadyExists1.txt"` with:
  * The content copied from `"C:\Source\Folder1\FileAlreadyExists1.txt"`.
  * The `Date Created` copied from `"C:\Source\Folder1\FileAlreadyExists1.txt"`.
  * The `Date Accessed` copied from `"C:\Source\Folder1\FileAlreadyExists1.txt"`.
  * The `Date Modified` copied from `"C:\Source\Folder1\FileAlreadyExists1.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder1\FileAlreadyExists1.txt"`.
* Overwrite the existing folder at `"C:\Destination\Folder2"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` set to the time the move occurred.
  * The `Date Modified` set to the time the move occurred.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder2\SubFolder2"` to `"C:\Destination\Folder2\SubFolder2"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Overwrite the existing folder at `"C:\Destination\Folder2\SubFolderAlreadyExists2"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder2\File2.txt"` to `"C:\Destination\Folder2\File2.txt"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.
* Overwrite the existing file at `"C:\Destination\Folder2\FileAlreadyExists2.txt"` with:
  * The content copied from `"C:\Source\Folder2\FileAlreadyExists2.txt"`.
  * The `Date Created` copied from `"C:\Source\Folder2\FileAlreadyExists2.txt"`.
  * The `Date Accessed` copied from `"C:\Source\Folder2\FileAlreadyExists2.txt"`.
  * The `Date Modified` copied from `"C:\Source\Folder2\FileAlreadyExists2.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder2\FileAlreadyExists2.txt"`.

***

### Move the folders' content only

This example will move `["C:\Source\Folder1", "C:\Source\Folder2"]` content only to `"C:\Destination"`.

In this example assume:

* `"C:\Source\Folder1"` contains:
  * An empty sub-folder named `"SubFolder1"`.
  * A file named `"File1.txt"`.
* `"C:\Source\Folder2"` contains:
  * An empty sub-folder named `"SubFolder2"`.
  * A file named `"File2.txt"`.
* `"C:\Destination"` does not already contain a folder named `"SubFolder1"` or `"SubFolder2"` or a file named `"File1.txt"` or `"File2.txt"`, so overwrite can be set to either `true` or `false` and it will still work.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Paths][FolderPaths Property] | `($)FolderPaths`, with value `[@"C:\Source\Folder1", @"C:\Source\Folder2"]` | `($)FolderPaths` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `false` | `($)Overwrite` is a variable of type [Boolean][] |
| [Content Only][ContentOnly Property] | `($)ContentOnly`, with value `true` | `($)ContentOnly` is a variable of type [Boolean][] |

#### Result

Moving `["C:\Source\Folder1", "C:\Source\Folder2"]` content only to `"C:\Destination"` that does not already contain a folder named `"SubFolder1"` or `"SubFolder2"` or a file named `"File1.txt"` or `"File2.txt"` will:

* Move `"C:\Source\Folder1\SubFolder1"` to `"C:\Destination\SubFolder1"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder1\File1.txt"` to `"C:\Destination\File1.txt"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.
* Move `"C:\Source\Folder2\SubFolder2"` to `"C:\Destination\SubFolder2"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder2\File2.txt"` to `"C:\Destination\File2.txt"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.

***

### Move folders' content only, overwriting any content that already exists

This example will move `["C:\Source\Folder1", "C:\Source\Folder2"]` content only to `"C:\Destination"`, overwriting any content that already exists.

In this example assume:

* `"C:\Source\Folder1"` contains:
  * An empty sub-folder named `"SubFolder1"`.
  * An empty sub-folder named `"SubFolderAlreadyExists1"`.
  * A file named `"File1.txt"`.
  * A file named `"FileAlreadyExists1.txt"`.
* `"C:\Source\Folder2"` contains:
  * An empty sub-folder named `"SubFolder2"`.
  * An empty sub-folder named `"SubFolderAlreadyExists2"`.
  * A file named `"File2.txt"`.
  * A file named `"FileAlreadyExists2.txt"`.
* `"C:\Destination"` already contains:
  * A folder named `"SubFolderAlreadyExists1"`.
  * A folder named `"SubFolderAlreadyExists2"`.
  * A file named `"FileAlreadyExists1.txt"`.
  * A file named `"FileAlreadyExists2.txt"`.

Therefore, overwrite must be set to `true` to ensure the existing folders and files can be overwritten.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Paths][FolderPaths Property] | `($)FolderPaths`, with value `[@"C:\Source\Folder1", @"C:\Source\Folder2"]` | `($)FolderPaths` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `true` | `($)Overwrite` is a variable of type [Boolean][] |
| [Content Only][ContentOnly Property] | `($)ContentOnly`, with value `true` | `($)ContentOnly` is a variable of type [Boolean][] |

#### Result

Moving `["C:\Source\Folder1", "C:\Source\Folder2"]` content only to `"C:\Destination"` with the [Overwrite][Overwrite Property] option set to `true`, and where `"C:\Destination\SubFolderAlreadyExists1"`, `"C:\Destination\SubFolderAlreadyExists2"`,  `"C:\Destination\FileAlreadyExists1.txt"` and `"C:\Destination\FileAlreadyExists2.txt"` already exist will:

* Move `"C:\Source\Folder1\SubFolder1"` to `"C:\Destination\SubFolder1"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Overwrite the existing folder at `"C:\Destination\SubFolderAlreadyExists1"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder1\File1.txt"` to `"C:\Destination\File1.txt"` with:
  * The content copied left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.
* Overwrite the existing file at `"C:\Destination\FileAlreadyExists1.txt"` with:
  * The content copied from `"C:\Source\Folder1\FileAlreadyExists1.txt"`.
  * The `Date Created` copied from `"C:\Source\Folder1\FileAlreadyExists1.txt"`.
  * The `Date Accessed` copied from `"C:\Source\Folder1\FileAlreadyExists1.txt"`.
  * The `Date Modified` copied from `"C:\Source\Folder1\FileAlreadyExists1.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder1\FileAlreadyExists1.txt"`.
* Move `"C:\Source\Folder2\SubFolder2"` to `"C:\Destination\SubFolder2"` with:
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Overwrite the existing folder at `"C:\Destination\SubFolderAlreadyExists2"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [Folder attributes][] left unchanged.
* Move `"C:\Source\Folder2\File2.txt"` to `"C:\Destination\File2.txt"` with:
  * The content copied left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.
* Overwrite the existing file at `"C:\Destination\FileAlreadyExists2.txt"` with:
  * The content copied from `"C:\Source\Folder2\FileAlreadyExists2.txt"`.
  * The `Date Created` copied from `"C:\Source\Folder2\FileAlreadyExists2.txt"`.
  * The `Date Accessed` copied from `"C:\Source\Folder2\FileAlreadyExists2.txt"`.
  * The `Date Modified` copied from `"C:\Source\Folder2\FileAlreadyExists2.txt"`.
  * The [File attributes][] copied from `"C:\Source\Folder2\FileAlreadyExists2.txt"`.

***

### Move folders and their content to the same location but with a different name

If it is required to move folders and their content into the same folder they are currently located in, but with a different name, then it is not possible to do with this block; the [Rename Folder][] block must be used instead.

***

### Move folders and their content to a different location but with a different name

If it is required to move folders and their content into a different folder than the one they are currently located in, but with a different name, it is not possible to do with a single block; you must use a combination of this block and the [Rename Folder][] block.

***

## Properties

### Folder Paths

The [Folder Paths][FolderPaths Property] to move the folders and/or their content from.

Each folder path in [Folder Paths][FolderPaths Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FolderPaths` with value `[]` |

### Destination Path

The [Destination Path][DestinationPath Property] to move the folders and/or their content to.

The [Destination Path][DestinationPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

The [Destination Path][DestinationPath Property] must point to a folder, otherwise an [InvalidPathException][] will be thrown.

The moved folders and files will have the same names as the folders and files copied.

Any non-existing folders within the [Destination Path][DestinationPath Property] will be automatically created.

For information about the supported file and folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)DestinationPath` with value `null` |

### Overwrite

Option to [Overwrite][Overwrite Property] the folders and/or contents being moved to in the [Destination Path][DestinationPath Property] if they already exist.

If any of the folders and/or contents exists, [Overwrite][Overwrite Property] must be set to `true`, otherwise an [OperationFailedException][] will be thrown. By default, this is set to `false` to avoid implicit and accidental overwriting of existing folders and files.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Default Value | `($)Overwrite` with value `false` |

### Content Only

Option to specify whether to move the folders and their content or just the [Content Only][ContentOnly Property].

To move the folders and their content, [Content Only][ContentOnly Property] must be set to `false`; to move just the content, [Content Only][ContentOnly Property] must be set to `true`.

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
| [OperationFailedException][] | Any folder path in [Folder Paths][FolderPaths Property] is `null` or empty (i.e. `""`). For more information, see [Null or Empty Folder Paths][]|
|                              | Any folder path in [Folder Paths][FolderPaths Property] is duplicated. For more information, see [Duplicate Folder Paths][] |
|                              | Any folder path in [Folder Paths][FolderPaths Property] does not exist. |
|                              | Any folder path in [Folder Paths][FolderPaths Property] points to a file. |
|                              | Any folder path in [Folder Paths][FolderPaths Property] contains leading spaces. |
|                              | Any folder path in [Folder Paths][FolderPaths Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any folder names. |
|                              | Any folder path in [Folder Paths][FolderPaths Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | Any folder path in [Folder Paths][FolderPaths Property] or [Destination Path][DestinationPath Property] is a win32 device path (i.e starts with a `"\\.\"`). |
|                              | Any folder path in [Folder Paths][FolderPaths Property] or [Destination Path][DestinationPath Property] is invalid (for example, it is on an unmapped drive). |
|                              | Any folder path in [Folder Paths][FolderPaths Property] and [Destination Path][DestinationPath Property] point to the same folder and [Content Only][ContentOnly Property] is `true`. |
|                              | Any folder path in [Folder Paths][FolderPaths Property] is a child folder in the [Destination Path][DestinationPath Property] and [Content Only][ContentOnly Property] is `false`. |
|                              | Any file being moved already exists in the specified [Destination Path][DestinationPath Property] and overwrite is `false`. |
|                              | Any file being moved already exists in the specified [Destination Path][DestinationPath Property], is read-only and overwrite is `true`. |
|                              | The user the flow is executing as does not have the required permissions to move the folder or any of its content (e.g. not having read access to any of the folders in [Folder Paths][FolderPaths Property] or its content, or write access to the [Destination Path][DestinationPath Property]). |
|                                  | The operation is cyclic (e.g. moving a folder into one of its sub-folders). |
|                              | An unexpected error occurs when moving a folder or any of its content. |
| [PropertyEmptyException][]   | Thrown when [Folder Paths][FolderPaths Property] does not contain any items, or [Destination Path][DestinationPath Property] are empty (i.e. `""`). |
| [PropertyNullException][]    | Thrown when [Folder Paths][FolderPaths Property] or [Destination Path][DestinationPath Property] are `null`. |

## Remarks

### Folder Paths

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

### Folder Path and Destination Path need escaping

Each folder paths in [Folder Paths][FolderPaths Property] and [Destination Path][DestinationPath Property] require `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Source\\"`), or
* Prepending an `@` character before the start of the folder path (e.g. `@"C:\Source"`) and [Destination Path][DestinationPath Property] (e.g. `@"C:\Destination"`).

### Folder Attributes

When moving the folders at the specified [Folder Paths][FolderPaths Property] or any folder under them to the new [Destination Path][DestinationPath Property], if the folder already exists in the destination its attributes remain unchanged.

For information about the folder attributes (i.e. ReadOnly, Hidden, Archive etc.), please see [File & Folder Attributes][].

### File Attributes

When moving a file under any of the [Folder Paths][FolderPaths Property] to the new [Destination Path][DestinationPath Property], all of the file's attributes are also moved.

For information about the file attributes (i.e. ReadOnly, Hidden, Archive etc.), please see [File & Folder Attributes][].

### Conflicting Content

If two or more paths in the specified [Folder Paths][FolderPaths Property] contain content (folders or files) with the same name, and [Overwrite][Overwrite Property] and [Content Only][ContentOnly Property] are `true`:

* The attributes of the folder/file in the [Destination Path][DestinationPath Property] will be that of the first one moved.
* For files, the content of the file in the [Destination Path][DestinationPath Property] will be that of the last one moved.

### Handling of Exceptions

If an exception occurs when trying to move a folder in [Folder Paths][FolderPaths Property], it will be recorded and the block will continue processing the remaining folders. Once all folders are processed, recorded exceptions will be thrown within an [OperationFailedException][].

[FolderPaths Property]: {{< ref "#folder-paths" >}}
[DestinationPath Property]: {{< ref "#destination-path" >}}
[Overwrite Property]: {{< ref "#overwrite" >}}
[ContentOnly Property]: {{< ref "#content-only" >}}

[Folder Attributes]: {{< ref "#folder-attributes" >}}
[File Attributes]: {{< ref "#file-attributes" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[InvalidPathException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.InvalidPathException.MainDoc" >}}
[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[Duplicate Folder Paths]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.IndexesOfDuplicatePaths" >}}
[Null Or Empty Folder Paths]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.IndexesOfNullOrEmptyPaths" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Attributes]: {{< url "Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Attributes.MainDoc" >}}
[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}

[Rename Folder]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.RenameFolder.RenameFolder.MainDoc" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
