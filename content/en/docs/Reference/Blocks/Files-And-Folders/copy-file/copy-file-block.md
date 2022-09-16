---
title: "Copy File"
linkTitle: "Copy File"
description: "Copies a file at the specified file path to the given destination path."
---

{{< figure src="/blocks/files-copy-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.CopyFile.CopyFileBlock)</p>

## Description

Copies a file at the specified [File Path][FilePath Property] to the given [Destination Path][DestinationPath Property], with an option to [Overwrite][Overwrite Property] the file if it already exists.

## Examples

### Copy a file to a folder keeping the same file name

This example will copy `"C:\Source\OriginalFile.txt"` to `"C:\Destination"`, with the same file name of `"OriginalFile.txt"`.

In this example assume `"C:\Destination"` does not already contain a file named `"OriginalFile.txt"`, so overwrite can be set to either `true` or `false` and it will still work.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Path][FilePath Property] | `($)FilePath`, with value `@"C:\Source\OriginalFile.txt"` | `($)FilePath` is a variable of type [String][] |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `false` | `($)Overwrite` is a variable of type [Boolean][] |

#### Result

Copying `"C:\Source\OriginalFile.txt"` to `"C:\Destination"` that does not already contain a file named `"OriginalFile.txt"` will:

* Create a new file at `"C:\Destination\OriginalFile.txt"` with:
  * The content copied from `"C:\Source\OriginalFile.txt"`.
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` copied from `"C:\Source\OriginalFile.txt"`.
  * The [File Attributes][] copied from `"C:\Source\OriginalFile.txt"`.

***

### Copy a file to a folder with a new name

This example will copy `"C:\Source\OriginalFile.txt"` to `"C:\Destination"`, with a new file name of `"NewFile.txt"`.

To rename the file when it is being copied, please note that the [Destination Path][DestinationPath Property] must be a file path, rather than a folder path (e.g. `"C:\Destination\NewFile.txt"` rather than `"C:\Destination"`).

In this example assume `"C:\Destination"` does not already contain a file named `"NewFile.txt"`, so overwrite can be set to either `true` or `false` and it will still work.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Path][FilePath Property] | `($)FilePath`, with value `@"C:\Source\OriginalFile.txt"` | `($)FilePath` is a variable of type [String][] |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination\NewFile.txt"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `false` | `($)Overwrite` is a variable of type [Boolean][] |

#### Result

Copying `"C:\Source\OriginalFile.txt"` to the path `"C:\Destination\NewFile.txt"` that does not already exist will:

* Create a new file at `"C:\Destination\NewFile.txt"` with:
  * The content copied from `"C:\Source\OriginalFile.txt"`.
  * The `Date Created` set to the time the copy occurred.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` copied from `"C:\Source\OriginalFile.txt"`.
  * The [File Attributes][] copied from `"C:\Source\OriginalFile.txt"`.

***

### Copy a file to a folder overwriting any file that already exists with the same name

This example will copy `"C:\Source\FileAlreadyExists.txt"` to `"C:\Destination"`, with the same file name of `"FileAlreadyExists.txt"`.

In this example assume `"C:\Destination"` already contains a file named `"FileAlreadyExists.txt"`, so overwrite must be set to `true` to ensure the content of the existing file can be overwritten.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Path][FilePath Property] | `($)FilePath`, with value `@"C:\Source\FileAlreadyExists.txt"` | `($)FilePath` is a variable of type [String][] |
| [Destination Path][DestinationPath Property] | `($)DestinationPath`, with value `@"C:\Destination"` | `($)DestinationPath` is a variable of type [String][] |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `true` | `($)Overwrite` is a variable of type [Boolean][] |

#### Result

Copying `"C:\Source\FileAlreadyExists.txt"` to `"C:\Destination"` and overwriting the existing file named `"FileAlreadyExists.txt"` will:

* Overwrite the existing file at `"C:\Destination\FileAlreadyExists.txt"` with:
  * The content copied from `"C:\Source\FileAlreadyExists.txt"`.
  * The `Date Created` left unchanged.
  * The `Date Accessed` set to the time the copy occurred.
  * The `Date Modified` copied from `"C:\Source\FileAlreadyExists.txt"`.
  * The [File Attributes][] copied from `"C:\Source\FileAlreadyExists.txt"`.

***

## Properties

### File Path

The [File Path][FilePath Property] to copy the file from.

The [File Path][FilePath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)FilePath` with no value |

### Destination Path

The [Destination Path][DestinationPath Property] to copy the file to.

The [Destination Path][DestinationPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

The [Destination Path][DestinationPath Property] can either point to a folder or a file:

* If it points to a folder, the copied file will have the name specified in the [File Path][FilePath Property].
* If it points to a file, the copied file will have the name specified in the [Destination Path][DestinationPath Property].

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

Option to [Overwrite][Overwrite Property] the file in the [Destination Path][DestinationPath Property] if it already exists.

If the file exists, [Overwrite][Overwrite Property] must be set to `true`, otherwise an [OperationFailedException][] will be thrown. By default, this is set to `false` to avoid implicit and accidental overwriting of existing files.

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
| [InvalidPathException][]     | The [Destination Path][DestinationPath Property] contains leading spaces. |
|                              | The [Destination Path][DestinationPath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any file or folder names. |
|                              | The [Destination Path][DestinationPath Property] (if it points to a file), or the [Destination Path][DestinationPath Property] (if it points to a folder) plus the file name, exceeds the system-defined maximum length (typically 32,767 characters). |
| [OperationFailedException][] | The [File Path][FilePath Property] does not exist. |
|                              | The [File Path][FilePath Property] points to a folder. |
|                              | The [File Path][FilePath Property] contains leading spaces. |
|                              | The [File Path][FilePath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any file or folder names. |
|                              | The [File Path][FilePath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | The [File Path][FilePath Property] or [Destination Path][DestinationPath Property] is invalid (for example, it is on an unmapped drive). |
|                              | The file in the specified [Destination Path][DestinationPath Property] exists and overwrite is `false`. |
|                              | The file in the specified [Destination Path][DestinationPath Property] exists, is read-only and overwrite is `true`. |
|                              | The file in the specified [Destination Path][DestinationPath Property] exists, is hidden and overwrite is `true`, but the file in the specified [File Path][FilePath Property] is not hidden.|
|                              | The user the flow is executing as does not have the required permissions to copy the file (e.g. not having read access to the [File Path][FilePath Property] or write access to the [Destination Path][DestinationPath Property]). |
|                              | An unexpected error occurs when copying the file. |
| [PropertyEmptyException][]   | Thrown when [File Path][FilePath Property] or [Destination Path][DestinationPath Property] are empty (i.e. `""`). |
| [PropertyNullException][]    | Thrown when [File Path][FilePath Property] or [Destination Path][DestinationPath Property] are `null`. |

## Remarks

### File and Folder Paths

For information about the supported file and folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

### File Path and Destination Path need escaping

[File Path][FilePath Property] and [Destination Path][DestinationPath Property] require `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Source\\OriginalFile.txt"`), or
* Prepending an `@` character before the start of the [File Path][FilePath Property] (e.g. `@"C:\Source\OriginalFile.txt"`) and [Destination Path][DestinationPath Property] (e.g. `@"C:\Destination"`).

### File Attributes

When copying a file from the [File Path][FilePath Property] to the new [Destination Path][DestinationPath Property], all of the file's attributes will also be copied.

For information about the file attributes (i.e. ReadOnly, Hidden, Archive etc.), please see [File & Folder Attributes][].

[FilePath Property]: {{< ref "#file-path" >}}
[DestinationPath Property]: {{< ref "#destination-path" >}}
[Overwrite Property]: {{< ref "#overwrite" >}}

[File Attributes]: {{< ref "#file-attributes" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[InvalidPathException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.InvalidPathException.MainDoc" >}}
[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Attributes]: {{< url "Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Attributes.MainDoc" >}}
[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
