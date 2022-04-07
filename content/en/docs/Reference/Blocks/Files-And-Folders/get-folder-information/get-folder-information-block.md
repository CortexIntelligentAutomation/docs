---
title: "Get Folder Information"
linkTitle: "Get Folder Information"
description: "Gets information about a folder (e.g. folder attributes, created, accessed, modified dates etc.) at the specified folder path."
---

{{< figure src="/blocks/folders-get-information-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.GetFolderInformation.GetFolderInformationBlock)</p>

## Description

Gets [Folder Information][FolderInformation Property] about a folder (e.g. folder attributes, created, accessed, modified dates etc.) at the specified [Folder Path][FolderPath Property].

## Examples

### Get folder information

This example will get information about `"C:\Source\Folder"`.

In this example assume `"C:\Source\Folder"`:

* Is on a server where local time and UTC time are the same (e.g. in UK).
* Was created at 10.00am on the 1st January 2021.
* Was last modified at 10.00am on the 1st January 2021.
* Was last accessed at 1.00pm on the 10th January 2021.
* Contains a single file named `"File.txt"` which is 100 bytes in size.
* Contains a single empty folder named `"SubFolder"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\Folder"` | `($)FolderPath` is a variable of type [String][] |
| [Folder Information][FolderInformation Property] | `($)FolderInformation`, with no value | `($)FolderPath` is a variable that will be set to a [FolderInformation][] value |

#### Result

Getting folder information for `"C:\Source\Folder"` results in the variable `($)FolderInformation` being updated to the following:

```json
{
    "FileCount": 1,
    "FolderCount": 1,
    "TotalItemCount": 2,
    "Path": "C:\\Source\\Folder",
    "Name": "Test",
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

### Folder Path

The [Folder Path][FolderPath Property] to get the [Folder Information][FolderInformation Property] of.

The [Folder Path][FolderPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FolderPath` with value `null` |

### Folder Information

The [Folder Information][FolderInformation Property] retrieved from the folder at the specified [Folder Path][FolderPath Property].

[Folder Information][FolderInformation Property] includes folder attributes, create, access and write dates, path details and folder and file counts.

For more information see the [example][] above, or the [FolderInformation][] data type.

| | |
|--------------------|---------------------------|
| Data Type | [FolderInformation][] |
| Property Type | [Output][] |
| Default Value | `($)FolderInformation` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [OperationFailedException][] | The [Folder Path][FolderPath Property] points to a file. |
|                              | The [Folder Path][FolderPath Property] contains leading spaces. |
|                              | The [Folder Path][FolderPath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any folder names. |
|                              | The [Folder Path][FolderPath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | The [Folder Path][FolderPath Property] is invalid (for example, it is on an unmapped drive). |
|                              | The user the flow is executing as does not have the required permissions to get information about the folder at the [Folder Path][FolderPath Property]. |
|                              | An unexpected error occurs when getting information for the folder at the [Folder Path][FolderPath Property] or any of its content. |
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

[FolderPath Property]: {{< ref "#folder-path" >}}
[FolderInformation Property]: {{< ref "#folder-information" >}}

[Example]: {{< ref "#get-folder-information" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.FileAndFolderPaths.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[FolderInformation]: {{< url "Cortex.Reference.DataTypes.MostCommon.FolderInformation" >}}
