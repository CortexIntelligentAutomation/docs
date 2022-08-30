---
title: "Get File Information"
linkTitle: "Get File Information"
description: "Gets information about a file (e.g. file attributes, created, accessed, modified dates etc.) at the specified file path."
---

{{< figure src="/blocks/files-get-information-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.GetFileInformation.GetFileInformationBlock)</p>

## Description

Gets [File Information][FileInformation Property] about a file (e.g. file attributes, created, accessed, modified dates etc.) at the specified [File Path][FilePath Property].

## Examples

### Get file information

This example will get information about `"C:\Source\File.txt"`.

In this example assume `"C:\Source\File.txt"`:

* Is on a server where local time and UTC time are the same (e.g. in UK).
* Was created at 10.00am on the 1st January 2021.
* Was last modified at 10.00am on the 1st January 2021.
* Was last accessed at 1.00pm on the 10th January 2021.
* Is 100 bytes in size.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Path][FilePath Property] | `($)FilePath`, with value `@"C:\Source\File.txt"` | `($)FilePath` is a variable of type [String][] |
| [File Information][FileInformation Property] | `($)FileInformation`, with no value | `($)FilePath` is a variable that will be set to a [FileInformation][] value |

#### Result

Getting file information for `"C:\Source\File.txt"` results in the variable `($)FileInformation` being updated to the following:

```json
{
    "Extension": ".exe",
    "Path": "C:\\Source\\File.txt",
    "Name": "File.txt",
    "ParentRoot": "C:\\",
    "ParentPath": "C:\\Source",
    "SizeInBytes": 100,
    "IsArchive": false,
    "IsCompressed": false,
    "IsEncrypted": false,
    "IsHidden": false,
    "IsNormal": false,
    "IsTemporary": false,
    "IsReadOnly": false,
    "IsSystem": false,
    "CreationTimeLocal": "2021-01-01T10:00:00+00:00",
    "CreationTimeUtc": "2021-01-01T10:00:00Z",
    "LastAccessTimeLocal": "2021-01-10T13:00:00+00:00",
    "LastAccessTimeUtc": "2021-01-10T13:00:00Z",
    "LastWriteTimeLocal": "2021-01-01T10:00:00+00:00",
    "LastWriteTimeUtc": "2021-01-01T10:00:00Z"
}
```

***

## Properties

### File Path

The [File Path][FilePath Property] to get the [File Information][FileInformation Property] of.

The [File Path][FilePath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FilePath` with value `null` |

### File Information

The [File Information][FileInformation Property] retrieved from the file at the specified [File Path][FilePath Property].

[File Information][FileInformation Property] includes file attributes, create, access and write dates and path details.

For more information see the [example][] above, or the [FileInformation][] data type.

| | |
|--------------------|---------------------------|
| Data Type | [FileInformation][] |
| Property Type | [Output][] |
| Default Value | `($)FileInformation` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [OperationFailedException][] | The [File Path][FilePath Property] points to a folder. |
|                              | The [File Path][FilePath Property] contains leading spaces. |
|                              | The [File Path][FilePath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any folder or file names. |
|                              | The [File Path][FilePath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | The [File Path][FilePath Property] is invalid (for example, it is on an unmapped drive). |
|                              | The user the flow is executing as does not have the required permissions to get information about the file at the [File Path][FilePath Property]. |
|                              | An unexpected error occurs when getting information for the file at the [File Path][FilePath Property]. |
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

[FilePath Property]: {{< ref "#file-path" >}}
[FileInformation Property]: {{< ref "#file-information" >}}
[Example]: {{< ref "#get-file-information" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[FileInformation]: {{< url "Cortex.Reference.DataTypes.FilesAndFolders.FileInformation.MainDoc" >}}
