---
title: "Read All Lines"
linkTitle: "Read All Lines"
description: "Reads all lines from a file at the specified file path."
---

{{< figure src="/blocks/files-read-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.ReadFile.ReadAllLinesBlock)</p>

## Description

Reads all [Lines][Lines Property] from a file at the specified [File Path][FilePath Property], with an option to explicitly specify the [Encoding][Encoding Property] of the file if needed.

## Examples

### Read all lines

This example will read all lines from `"C:\Source\File.txt"`, automatically detecting the encoding.

In this example assume `"C:\Source\File.txt"` is a UTF-8 encoded file containing 10 lines:

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
| [Lines][Lines Property] | `($)Lines`, with no value | `($)Lines` is a variable that will be set to an [IList][]&lt;[String][]&gt; |

#### Result

Reading all lines from `"C:\Source\File.txt"` results in the variable `($)Lines` being updated to the following:

```json
[
    "This is Line 1", 
    "This is Line 2", 
    "This is Line 3", 
    "This is Line 4", 
    "This is Line 5",
    "This is Line 6",
    "This is Line 7",
    "This is Line 8",
    "This is Line 9",
    "This is Line 10"
]
```

***

## Properties

### File Path

The [File Path][FilePath Property] to read all lines of the file from.

The [File Path][FilePath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)FilePath` with no value |

### Encoding

Option to specify the [Encoding][Encoding Property] that should be used to read the file.

Most of the time [Encoding][Encoding Property] can be left as `null`; allowing the block to automatically attempt to detect the encoding of the file based on the presence of byte order marks. However, if it is found that the returned [Lines][Lines Property] are not in the correct format because the block was unable to detect the encoding of the file, it is possible to specify the [Encoding][Encoding Property] explicitly using this property.

For information about encoding, examples of available encodings and using them, please see [Encoding][Working with Text - Encoding].

| | |
|--------------------|---------------------------|
| Data Type | [Encoding][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Lines

All [Lines][Lines Property] that were read from the file.  
  
A line is defined as a sequence of characters followed by a carriage return (i.e. `\r`), a line feed (i.e. `\n`), or a carriage return immediately followed by a line feed. The resulting [Lines][Lines Property] do not contain the terminating carriage returns and/or line feeds.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Lines` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [InvalidPropertyValueException][] | Thrown when [Encoding][Encoding Property] is invalid (e.g. `Encoding.GetEncoding(-1)`). See [Value Is Invalid][]. |
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

For information about encoding of text, examples of available encodings and using them, please see [Encoding][Working with Text - Encoding].

[FilePath Property]: {{< ref "#file-path" >}}
[Encoding Property]: {{< ref "#encoding" >}}
[Lines Property]: {{< ref "#lines" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Working with Text - Encoding]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Encoding.MainDoc" >}}

[InvalidPropertyValueException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[Value Is Invalid]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.ValueIsInvalid" >}}

[OperationFailedException]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Paths]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}

[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Encoding]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
