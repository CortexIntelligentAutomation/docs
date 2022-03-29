---
title: "Read All Text"
linkTitle: "Read All Text"
description: "Reads all text from a file at the specified file path."
---

{{< figure src="/blocks/files-read-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.ReadFile.ReadAllTextBlock)</p>

## Description

Reads all [Text][Text Property] from a file at the specified [File Path][FilePath Property], with an option to explicitly specify the [Encoding][Encoding Property] of the file if needed.

## Examples

### Read all text

This example will read all text from `"C:\Source\File.txt"`, automatically detecting the encoding.

In this example assume `"C:\Source\File.txt"` is a UTF-8 encoded file containing the following text:

```plaintext
This is Line 1
This is Line 2
This is Line 3
This is Line 4
This is Line 5
This is Line 6
This is Line 7
This is Line 8
This is Line 9
This is Line 10
```  

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Path][FilePath Property] | `($)FilePath`, with value `@"C:\Source\File.txt"` | `($)FilePath` is a variable of type [String][] |
| [Encoding][Encoding Property] | `($)Encoding`, with value `null` | `($)Encoding` is a variable of type [Encoding][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] |

#### Result

Reading all text from `"C:\Source\File.txt"` results in the variable `($)Text` being updated to the following:

```json
"This is Line 1
This is Line 2
This is Line 3
This is Line 4
This is Line 5
This is Line 6
This is Line 7
This is Line 8
This is Line 9
This is Line 10"
```

***

## Properties

### File Path

The [File Path][FilePath Property] to read all text of the file from.

The [File Path][FilePath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FilePath` with value `null` |

### Encoding

Option to specify the [Encoding][Encoding Property] that should be used to read the file.

Most of the time [Encoding][Encoding Property] can be left as `null`; allowing the block to automatically attempt to detect the encoding of the file based on the presence of byte order marks. However, if it is found that the returned [Text][Text Property] are not in the correct format because the block was unable to detect the encoding of the file, it is possible to specify the [Encoding][Encoding Property] explicitly using this property.

For information about encoding, examples of available encodings and using them, please see [Text Encoding][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Encoding` with value `null` |

### Text

All [Text][Text Property] that was read from the file.  
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Default Value | `($)Text` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [InvalidPropertyValueException][] | Thrown when [Encoding][Encoding Property] is invalid (e.g. `Encoding.GetEncoding(-1)`). |
| [OperationFailedException][] | The [File Path][FilePath Property] does not exist. |
|                              | The [File Path][FilePath Property] points to a folder. |
|                              | The [File Path][FilePath Property] contains leading spaces. |
|                              | The [File Path][FilePath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any file or folder names. |
|                              | The [File Path][FilePath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | The [File Path][FilePath Property] is invalid (for example, it is on an unmapped drive). |
|                              | The user the flow is executing as does not have the required permissions to read the file. |
|                              | An unexpected error occurs when reading the file. |
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

For information about encoding of text, examples of available encodings and using them, please see [Text Encoding][].

[FilePath Property]: {{< ref "#file-path" >}}
[Encoding Property]: {{< ref "#encoding" >}}
[Text Property]: {{< ref "#text" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Text Encoding]: {{< url "Cortex.Reference.Concepts.TextEncoding.MainDoc" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Common.Property.InvalidPropertyValueException.MainDoc" >}}
[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.FileAndFolderPaths.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Encoding]: {{< url "Cortex.Reference.DataTypes.MostCommon.Encoding" >}}
