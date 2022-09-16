---
title: "Write All Lines"
linkTitle: "Write All Lines"
description: "Writes all specified lines to a file at the given file path."
---

{{< figure src="/blocks/files-write-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.WriteFile.WriteAllLinesBlock)</p>

## Description

Writes all specified [Lines][Lines Property] to the end of the file at the given [File Path][FilePath Property], with an option to explicitly specify the [Encoding][Encoding Property] to write the file as if needed.

An option can also be specified to [Overwrite][Overwrite Property] rather than append to the file.

## Examples

### Write all lines, appending to the end of the file

This example will append `["New Line 1", "New Line 2"]` to `"C:\Source\File.txt"`, using UTF-8 encoding without a byte order mark.

In this example assume `"C:\Source\File.txt"` contains 2 lines:

```plaintext
Original Line 1
Original Line 2
```  

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Path][FilePath Property] | `($)FilePath`, with value `@"C:\Source\File.txt"` | `($)FilePath` is a variable of type [String][] |
| [Lines][Lines Property] | `($)Lines`, with value `["New Line 1", "New Line 2"]` | `($)Lines` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `false` | `($)Overwrite` is a variable of type [Boolean][] |
| [Encoding][Encoding Property] | `($)Encoding`, with value `null` | `($)Encoding` is a variable of type [Encoding][] |

#### Result

Writing `["New Line 1", "New Line 2"]` to `"C:\Source\File.txt"` results in the content being updated to the following:

```plaintext
Original Line 1
Original Line 2
New Line 1
New Line 2
```

***

### Write all lines, overwriting the file content

This example will overwrite the content of `"C:\Source\File.txt"` with `["New Line 1", "New Line 2"]`, using UTF-8 encoding without a byte order mark.

In this example assume `"C:\Source\File.txt"` contains 2 lines:

```plaintext
Original Line 1
Original Line 2
```  

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Path][FilePath Property] | `($)FilePath`, with value `@"C:\Source\File.txt"` | `($)FilePath` is a variable of type [String][] |
| [Lines][Lines Property] | `($)Lines`, with value `["New Line 1", "New Line 2"]` | `($)Lines` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Overwrite][Overwrite Property] | `($)Overwrite`, with value `true` | `($)Overwrite` is a variable of type [Boolean][] |
| [Encoding][Encoding Property] | `($)Encoding`, with value `null` | `($)Encoding` is a variable of type [Encoding][] |

#### Result

Overwriting `"C:\Source\File.txt"` with `["New Line 1", "New Line 2"]` results in the content being updated to the following:

```plaintext
New Line 1
New Line 2
```

***

## Properties

### File Path

The [File Path][FilePath Property] to write all [Lines][Lines Property] to.

The [File Path][FilePath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

If the file does not exist at the [File Path][FilePath Property], a new file is created, and any non-existing folders will also be created.

If the file already exists at the [File Path][FilePath Property] and [Overwrite][Overwrite Property] is:

* `true`, the [Lines][Lines Property] overwrite the existing file content.
* `false`, the [Lines][Lines Property] are appended to the existing file content.

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FilePath` with value `null` |

### Lines

The [Lines][Lines Property] to write to the file.  

[Lines][Lines Property] can be `null` or empty (i.e. `""`).

If [Lines][Lines Property] is `null` or empty (i.e. `""`) and [Overwrite][Overwrite Property] is:

* `true`, a blank file will be written.
* `false`, nothing is written.

If [Lines][Lines Property] contains an entry that is `null` or empty (i.e. `""`) a blank line will be written for that entry.

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[String][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Lines` with value `[]` |

### Overwrite

Option to [Overwrite][Overwrite Property] the file content with the [Lines][Lines Property], rather than appending them.

By default, this is set to `false` to avoid implicit and accidental overwriting of the file content.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Default Value | `($)Overwrite` with value `false` |

### Encoding

Option to specify the [Encoding][Encoding Property] that should be used to write the file.

If the [Encoding][Encoding Property] is left as `null`, the [Lines][Lines Property] will be written using UTF-8 encoding without a byte order mark.

For information about encoding, examples of available encodings and using them, please see [Encoding][Working with Text - Encoding].

| | |
|--------------------|---------------------------|
| Data Type | [Encoding][] |
| Property Type | [Input][] |
| Default Value | `($)Encoding` with value `null` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [InvalidPropertyValueException][] | Thrown when [Encoding][Encoding Property] is invalid (e.g. `Encoding.GetEncoding(-1)`). See [Value Is Invalid][]. |
| [OperationFailedException][] | The [File Path][FilePath Property] points to a folder. |
|                              | The [File Path][FilePath Property] contains leading spaces. |
|                              | The [File Path][FilePath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any file or folder names. |
|                              | The [File Path][FilePath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | The [File Path][FilePath Property] is invalid (for example, it is on an unmapped drive). |
|                              | The file at the specified [File Path][FilePath Property] is hidden or is a System file, and overwrite is `true`. |
|                              | The file at the specified [File Path][FilePath Property] is a read-only file. |
|                              | The user the flow is executing as does not have the required permissions to write to the file. |
|                              | An unexpected error occurs when writing the file. |
| [PropertyEmptyException][]   | Thrown when [File Path][FilePath Property] is empty (i.e. `""`). |
| [PropertyNullException][]    | Thrown when [File Path][FilePath Property] is `null`. |

## Remarks

### File Paths

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

### File Path needs escaping

[File Path][FilePath Property] requires `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Source\\File.txt"`), or
* Prepending an `@` character before the start of the [File Path][FilePath Property] (e.g. `@"C:\Source\File.txt"`).

### Encoding of text

For information about encoding of text, examples of available encodings and using them, please see [Encoding][Working with Text - Encoding].

[FilePath Property]: {{< ref "#file-path" >}}
[Lines Property]: {{< ref "#lines" >}}
[Overwrite Property]: {{< ref "#overwrite" >}}
[Encoding Property]: {{< ref "#encoding" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[Working with Text - Encoding]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.Encoding.MainDoc" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}

[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Encoding]: {{< url "Cortex.Reference.DataTypes.Text.Encoding.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
