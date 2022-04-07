---
title: "Move Files"
linkTitle: "Move Files"
description: "Moves files at the specified file paths to the given destination path."
---

{{< figure src="/blocks/files-move-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.MoveFile.MoveFilesBlock)</p>

## Description

Moves files at the specified [File Paths][FilePaths Property] to the given [Destination Path][DestinationPath Property], with an option to [Overwrite][Overwrite Property] the files if they already exist.

## Examples

### Move files to a folder keeping the same file names

This example will move `["C:\Source\OriginalFile1.txt", "C:\Source\OriginalFile2.txt"]` to `"C:\Destination"`, with the same file names of `"OriginalFile1.txt"` and `"OriginalFile2.txt"`.

In this example assume `"C:\Destination"` does not already contain a file named `"OriginalFile1.txt"` or a file named `"OriginalFile2.txt"`, so overwrite can be set to either `true` or `false` and it will still work.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Paths][FilePaths Property] | `($)FilePaths`, with value `[@"C:\Source\OriginalFile1.txt", @"C:\Source\OriginalFile2.txt"]` | `($)FilePaths` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `false` | `($)Overwrite` is a variable of type [Boolean][] |

#### Result

Moving `["C:\Source\OriginalFile1.txt", "C:\Source\OriginalFile2.txt"]` to `"C:\Destination"` that does not already contain files named `"OriginalFile1.txt"` and `"OriginalFile2.txt"` will:

* Move `"C:\Source\OriginalFile1.txt"` to `"C:\Destination\OriginalFile1.txt"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.
* Move `"C:\Source\OriginalFile2.txt"` to `"C:\Destination\OriginalFile2.txt"` with:
  * The content left unchanged.
  * The `Date Created` left unchanged.
  * The `Date Accessed` left unchanged.
  * The `Date Modified` left unchanged.
  * The [File attributes][] left unchanged.

***

### Move files to a folder overwriting any files that already exists with the same names

This example will move `["C:\Source\FileAlreadyExists1.txt", "C:\Source\FileAlreadyExists2.txt"]` to `"C:\Destination"`, with the same file names of `"FileAlreadyExists1.txt"` and `"FileAlreadyExists2.txt"`.

In this example assume `"C:\Destination"` already contains a file named `"FileAlreadyExists1.txt"` and a file named `"FileAlreadyExists2.txt"`, so overwrite must be set to `true` to ensure the content of the existing files can be overwritten.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Paths][FilePaths Property] | `($)FilePaths`, with value `[@"C:\Source\FileAlreadyExists1.txt", @"C:\Source\FileAlreadyExists2.txt"]` | `($)FilePaths` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `true` | `($)Overwrite` is a variable of type [Boolean][] |

#### Result

Moving `["C:\Source\FileAlreadyExists1.txt", "C:\Source\FileAlreadyExists2.txt"]` to `"C:\Destination"` and overwriting the existing files named `"FileAlreadyExists1.txt"` and `"FileAlreadyExists2.txt"` will:

* Overwrite the existing file at `"C:\Destination\FileAlreadyExists1.txt"` with:
  * The content copied from `"C:\Source\FileAlreadyExists1.txt"`.
  * The `Date Created` copied from `"C:\Source\FileAlreadyExists1.txt"`.
  * The `Date Accessed` copied from `"C:\Source\FileAlreadyExists1.txt"`
  * The `Date Modified` copied from `"C:\Source\FileAlreadyExists1.txt"`.
  * The [File Attributes][] copied from `"C:\Source\FileAlreadyExists1.txt"`.
* Overwrite the existing file at `"C:\Destination\FileAlreadyExists2.txt"` with:
  * The content copied from `"C:\Source\FileAlreadyExists2.txt"`.
  * The `Date Created` copied from `"C:\Source\FileAlreadyExists2.txt"`.
  * The `Date Accessed` copied from `"C:\Source\FileAlreadyExists2.txt"`.
  * The `Date Modified` copied from `"C:\Source\FileAlreadyExists2.txt"`.
  * The [File Attributes][] copied from `"C:\Source\FileAlreadyExists2.txt"`.

***

## Properties

### File Paths

The [File Paths][FilePaths Property] to move the files from.

Each file path in [File Paths][FilePaths Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[String][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)FilePaths` with value `[]` |

### Destination Path

The [Destination Path][DestinationPath Property] to move the files to.

The [Destination Path][DestinationPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

The [Destination Path][DestinationPath Property] must point to a folder, otherwise an [InvalidPathException][] will be thrown.

The moved files will have the names specified in the [File Paths][FilePaths Property].

Any non-existing folders within the [Destination Path][DestinationPath Property] will be automatically created.

For information about the supported file and folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)DestinationPath` with value `null` |

### Overwrite

Option to [Overwrite][Overwrite Property] the files in the [Destination Path][DestinationPath Property] if they already exist.

If any file exists, [Overwrite][Overwrite Property] must be set to `true`, otherwise an [OperationFailedException][] will be thrown. By default, this is set to `false` to avoid implicit and accidental overwriting of existing files.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Default Value | `($)Overwrite` with value `false` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [InvalidPathException][]     | The [Destination Path][DestinationPath Property] does not point to a folder. |
|                              | The [Destination Path][DestinationPath Property] contains leading spaces. |
|                              | The [Destination Path][DestinationPath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any file or folder names. |
|                              | The [Destination Path][DestinationPath Property] (if it points to a file), or the [Destination Path][DestinationPath Property] (if it points to a folder) plus the file name, exceeds the system-defined maximum length (typically 32,767 characters). |
| [OperationFailedException][] | Any file path in [File Paths][FilePaths Property] is `null` or empty (i.e. `""`). For more information, see [Null or Empty File Paths][]|
|                              | Any file path in [File Paths][FilePaths Property] is duplicated. For more information, see [Duplicate File Paths][] |
|                              | Any file path in [File Paths][FilePaths Property] does not exist. |
|                              | Any file path in [File Paths][FilePaths Property] points to a folder. |
|                              | Any file path in [File Paths][FilePaths Property] contains leading spaces. |
|                              | Any file path in [File Paths][FilePaths Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any file or folder names. |
|                              | Any file path in [File Paths][FilePaths Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | Any file path in [File Paths][FilePaths Property] or [Destination Path][DestinationPath Property] is invalid (for example, it is on an unmapped drive). |
|                              | Any file path in [File Paths][FilePaths Property] exists in the specified [Destination Path][DestinationPath Property] and overwrite is `false`. |
|                              | Any file path in [File Paths][FilePaths Property] exists in the specified [Destination Path][DestinationPath Property] with the same name, is read-only and overwrite is `true`. |
|                              | The user the flow is executing as does not have the required permissions to move any file (e.g. not having read access to a file path in [File Paths][FilePaths Property] or write access to the [Destination Path][DestinationPath Property]). |
|                              | An unexpected error occurs when moving a file. |
| [PropertyEmptyException][]   | Thrown when [File Paths][FilePaths Property] does not contain any items, or [Destination Path][DestinationPath Property] is empty (i.e. `""`). |
| [PropertyNullException][]    | Thrown when [File Paths][FilePaths Property] or [Destination Path][DestinationPath Property] are `null`. |

## Remarks

### File and Folder Paths

For information about the supported file and folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

### File Paths and Destination Path need escaping

Each file path in [File Paths][FilePaths Property] and [Destination Path][DestinationPath Property] require `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Source\\OriginalFile.txt"`), or
* Prepending an `@` character before the start of the
file path (e.g. `@"C:\Source\OriginalFile.txt"`) and [Destination Path][DestinationPath Property] (e.g. `@"C:\Destination"`).

### File Attributes

When moving a file in the [File Paths][FilePaths Property] to the new [Destination Path][DestinationPath Property], all of the file's attributes will also be moved.

For information about the file attributes (i.e. ReadOnly, Hidden, Archive etc.), please see [File & Folder Attributes][].

### Handling of Exceptions

If an exception occurs when trying to move a file in the [File Paths][FilePaths Property], it will be recorded and the block will continue processing the remaining files. Once all files are processed, recorded exceptions will be thrown within an [OperationFailedException][].

[FilePaths Property]: {{< ref "#file-paths" >}}
[DestinationPath Property]: {{< ref "#destination-path" >}}
[Overwrite Property]: {{< ref "#overwrite" >}}

[File Attributes]: {{< ref "#file-attributes" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[InvalidPathException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.InvalidPathException.MainDoc" >}}
[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[Duplicate File Paths]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.IndexesOfDuplicatePaths" >}}
[Null Or Empty File Paths]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.IndexesOfNullOrEmptyPaths" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Attributes]: {{< url "Cortex.Reference.Concepts.FileAndFolderAttributes.MainDoc" >}}
[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.FileAndFolderPaths.MainDoc" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.MostCommon.IEnumerable" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
