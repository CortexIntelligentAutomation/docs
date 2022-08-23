---
title: "PropertyEmptyException"
linkTitle: "PropertyEmptyException"
description: "The exception thrown when a property is provided with an empty value, but a non-empty value is required."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Common.Property.PropertyEmptyException)</p>

## Description

The exception thrown when a [property][TODO] is provided with an [empty][TODO] value, but a non-empty value is required.

## Reasons

### Empty value

An [empty][TODO] value was provided for the [property][TODO].

#### Message Format

The format of the [Message][] is as follows:

```json
"'<property-name>' is empty; it must be provided a value.\r\nPlease click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the property.

#### How to fix

Ensure the value provided for the [property][TODO] named `<property-name>` is not [empty][TODO].

## Properties

### Exception Type

The type of the exception (i.e. `PropertyEmptyException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

For this exception:

* `<property-name>` will be replaced with the name of the [property][TODO].

| | |
|-----------|------------|
| Data Type | [String][] |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

Currently, only the `<property-name>` has been included in the exception. In future, we will look to include the name and Id of the [block][TODO], the id, name and value of the [property][TODO], as well as allowing the exception to contain a link to take you directly to the offending value.

## See Also

### Related Data Types

* [String][]

### Related Concepts

* [Working with Exceptions][]
* [Blocks][TODO]
* [Block Properties][TODO]

### Related Blocks

* Data
  * [Execute Data Command][TODO]
* Date & Time
  * [Convert Text To Date Time][]
* Exceptions
  * [Handle Block Exception Matching Messages][]
  * [Handle Block Exception Matching Type Name][]
  * [Handle Block Exception Matching Type Names][]
* Files & Folders
  * [Copy File][]
  * [Copy Files][]
  * [Copy Folder][]
  * [Copy Folders][]
  * [Create Folder][]
  * [Create Folders][]
  * [Delete File][]
  * [Delete Files][]
  * [Delete Folder][]
  * [Delete Folders][]
  * [Duplicate Folder][]
  * [Get File Information][]
  * [Get Folder Content][]
  * [Get Folder Information][]
  * [Move File][]
  * [Move Files][]
  * [Move Folder][]
  * [Move Folders][]
  * [Read All Lines][]
  * [Read All Text][]
  * [Rename Folder][]
  * [Search File][]
  * [Search Files][]
  * [Write All Lines][]
  * [Write All Text][]
* Json
  * [Convert Json To Object][]
* Lists
  * [Get Item At Beginning][]
  * [Get Item At End][]
  * [Set Item At Beginning][]
  * [Set Item At End][]
  * [Set Items At Beginning][]
  * [Set Items At End][]
  * [Set Items At Index][]
* Xml
  * [Convert Structure To Xml][]
  * [Convert Xml To Structure][]
  
### External Documentation

None

[Message]: {{< ref "#message" >}}

[Convert Text To Date Time]: {{< url "Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertTextToDateTime.MainDoc" >}}

[Handle Block Exception Matching Messages]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingMessages.MainDoc" >}}
[Handle Block Exception Matching Type Name]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingTypeName.MainDoc" >}}
[Handle Block Exception Matching Type Names]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingTypeNames.MainDoc" >}}

[Copy File]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.CopyFile.CopyFile.MainDoc" >}}
[Copy Files]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.CopyFile.CopyFiles.MainDoc" >}}
[Copy Folder]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.CopyFolder.CopyFolder.MainDoc" >}}
[Copy Folders]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.CopyFolder.CopyFolders.MainDoc" >}}
[Create Folder]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.CreateFolder.CreateFolder.MainDoc" >}}
[Create Folders]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.CreateFolder.CreateFolders.MainDoc" >}}
[Delete File]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.DeleteFile.DeleteFile.MainDoc" >}}
[Delete Files]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.DeleteFile.DeleteFiles.MainDoc" >}}
[Delete Folder]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.DeleteFolder.DeleteFolder.MainDoc" >}}
[Delete Folders]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.DeleteFolder.DeleteFolders.MainDoc" >}}
[Duplicate Folder]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.CopyFolder.DuplicateFolder.MainDoc" >}}
[Get File Information]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.GetFileInformation.GetFileInformation.MainDoc" >}}
[Get Folder Content]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.GetFolderContent.GetFolderContent.MainDoc" >}}
[Get Folder Information]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.GetFolderInformation.GetFolderInformation.MainDoc" >}}
[Move File]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.MoveFile.MoveFile.MainDoc" >}}
[Move Files]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.MoveFile.MoveFiles.MainDoc" >}}
[Move Folder]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.MoveFolder.MoveFolder.MainDoc" >}}
[Move Folders]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.MoveFolder.MoveFolders.MainDoc" >}}
[Read All Lines]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.ReadFile.ReadAllLines.MainDoc" >}}
[Read All Text]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.ReadFile.ReadAllText.MainDoc" >}}
[Rename Folder]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.RenameFolder.RenameFolder.MainDoc" >}}
[Search File]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.SearchFile.SearchFile.MainDoc" >}}
[Search Files]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.SearchFile.SearchFiles.MainDoc" >}}
[Write All Lines]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.WriteFile.WriteAllLines.MainDoc" >}}
[Write All Text]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.WriteFile.WriteAllText.MainDoc" >}}

[Convert Json To Object]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertJsonToObject.MainDoc" >}}

[Get Item At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemAtBeginning.MainDoc" >}}
[Get Item At End]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemAtEnd.MainDoc" >}}
[Set Item At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemAtBeginning.MainDoc" >}}
[Set Item At End]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemAtEnd.MainDoc" >}}
[Set Items At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtBeginning.MainDoc" >}}
[Set Items At End]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtEnd.MainDoc" >}}
[Set Items At Index]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtIndex.MainDoc" >}}

[Convert Structure To Xml]: {{< url "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertStructureToXml.MainDoc" >}}
[Convert Xml To Structure]: {{< url "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertXmlToStructure.MainDoc" >}}

[Working with Exceptions]: {{< url "Cortex.Reference.Concepts.WorkingWithExceptions.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
