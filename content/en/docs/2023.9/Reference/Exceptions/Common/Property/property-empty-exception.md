---
title: "PropertyEmptyException"
linkTitle: "PropertyEmptyException"
description: "The exception thrown when a property is provided with an empty value, but a non-empty value is required."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Common.Property.PropertyEmptyException)</p>

## Description

The exception thrown when a [property][] is provided with an [empty][] value, but a non-empty value is required.

## Reasons

### Empty value

An [empty][] value was provided for the [property][].

#### Message Format

The format of the [Message][] is as follows:

```json
"'<property-name>' is empty; it must be provided a value.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the property.

#### How to fix

Ensure the value provided for the [property][] named `<property-name>` is not [empty][].

## Properties

### Exception Type

The type of the exception (i.e. `PropertyEmptyException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

For this exception:

* `<property-name>` will be replaced with the name of the [property][].

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

Currently, only the `<property-name>` has been included in the exception. In future, we will look to include the name and Id of the [block][], the id, name and value of the [property][], as well as allowing the exception to contain a link to take you directly to the offending value.

## See Also

### Related Data Types

* [String][]

### Related Concepts

* [Blocks][]
* [Block Properties][]
* [Exceptions][]

### Related Blocks

* Data
  * [Execute Data Command][]
* Data Storage
  * [Create Collection][]
  * [Delete Collection][]
  * [Delete Data With Key][]
  * [Read Data With Key][]
  * [Wait For Key In Collection To Exist][]
  * [Wait For Key In Collection To Not Exist][]
  * [Write Data With Key][]
* Date & Time
  * [Convert Text To Date Time][]
* Email
  * [Send Email Using SMTP Server][]
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
* Queues
  * [Dequeue Item][]
  * [Dequeue Items][]
  * [Peek Item][]
* Tasks
  * [Cancel All Tasks][]
  * [Wait For All Tasks][]
* Xml
  * [Convert Structure To Xml][]
  * [Convert Xml To Structure][]
  
### External Documentation

None

[Message]: {{< ref "#message" >}}

[Execute Data Command]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.MainDoc" >}}

[Convert Text To Date Time]: {{< url path="Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertTextToDateTime.MainDoc" >}}

[Create Collection]: {{< url path = "Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBLock.MainDoc">}}
[Delete Collection]: {{< url path = "Cortex.Reference.Blocks.DataStorage.DeleteCollection.DeleteCollectionBLock.MainDoc">}}
[Delete Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.DeleteData.DeleteDataWithKeyBlock.MainDoc">}}
[Read Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.ReadData.ReadDataWithKeyBlock.MainDoc">}}
[Wait For Key In Collection To Exist]: {{< url path = "Cortex.Reference.Blocks.DataStorage.WaitForKeyInCollection.WaitForKeyInCollectionToExistBlock.MainDoc">}}
[Wait For Key In Collection To Not Exist]: {{< url path = "Cortex.Reference.Blocks.DataStorage.WaitForKeyInCollection.WaitForKeyInCollectionToNotExistBlock.MainDoc">}}
[Write Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.WriteData.WriteDataWithKeyBlock.MainDoc">}}

[Send Email Using SMTP Server]: {{< url path="Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.MainDoc" >}}

[Handle Block Exception Matching Messages]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingMessages.MainDoc" >}}
[Handle Block Exception Matching Type Name]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingTypeName.MainDoc" >}}
[Handle Block Exception Matching Type Names]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingTypeNames.MainDoc" >}}

[Copy File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CopyFile.CopyFile.MainDoc" >}}
[Copy Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CopyFile.CopyFiles.MainDoc" >}}
[Copy Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CopyFolder.CopyFolder.MainDoc" >}}
[Copy Folders]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CopyFolder.CopyFolders.MainDoc" >}}
[Create Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CreateFolder.CreateFolder.MainDoc" >}}
[Create Folders]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CreateFolder.CreateFolders.MainDoc" >}}
[Delete File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.DeleteFile.DeleteFile.MainDoc" >}}
[Delete Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.DeleteFile.DeleteFiles.MainDoc" >}}
[Delete Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.DeleteFolder.DeleteFolder.MainDoc" >}}
[Delete Folders]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.DeleteFolder.DeleteFolders.MainDoc" >}}
[Duplicate Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CopyFolder.DuplicateFolder.MainDoc" >}}
[Get File Information]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.GetFileInformation.GetFileInformation.MainDoc" >}}
[Get Folder Content]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.GetFolderContent.GetFolderContent.MainDoc" >}}
[Get Folder Information]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.GetFolderInformation.GetFolderInformation.MainDoc" >}}
[Move File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.MoveFile.MoveFile.MainDoc" >}}
[Move Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.MoveFile.MoveFiles.MainDoc" >}}
[Move Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.MoveFolder.MoveFolder.MainDoc" >}}
[Move Folders]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.MoveFolder.MoveFolders.MainDoc" >}}
[Read All Lines]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.ReadFile.ReadAllLines.MainDoc" >}}
[Read All Text]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.ReadFile.ReadAllText.MainDoc" >}}
[Rename Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.RenameFolder.RenameFolder.MainDoc" >}}
[Search File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.SearchFile.SearchFile.MainDoc" >}}
[Search Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.SearchFile.SearchFiles.MainDoc" >}}
[Write All Lines]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.WriteFile.WriteAllLines.MainDoc" >}}
[Write All Text]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.WriteFile.WriteAllText.MainDoc" >}}

[Convert Json To Object]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertJsonToObject.MainDoc" >}}

[Get Item At Beginning]: {{< url path="Cortex.Reference.Blocks.Lists.GetItem.GetItemAtBeginning.MainDoc" >}}
[Get Item At End]: {{< url path="Cortex.Reference.Blocks.Lists.GetItem.GetItemAtEnd.MainDoc" >}}
[Set Item At Beginning]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemAtBeginning.MainDoc" >}}
[Set Item At End]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemAtEnd.MainDoc" >}}
[Set Items At Beginning]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtBeginning.MainDoc" >}}
[Set Items At End]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtEnd.MainDoc" >}}
[Set Items At Index]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtIndex.MainDoc" >}}

[Dequeue Item]: {{< url path="Cortex.Reference.Blocks.Queues.DequeueItem.DequeueItemBlock.MainDoc" >}}
[Dequeue Items]: {{< url path="Cortex.Reference.Blocks.Queues.DequeueItem.DequeueItemsBlock.MainDoc" >}}
[Peek Item]: {{< url path="Cortex.Reference.Blocks.Queues.PeekItem.PeekItemBlock.MainDoc" >}}

[Convert Structure To Xml]: {{< url path="Cortex.Reference.Blocks.Xml.ConvertXml.ConvertStructureToXml.MainDoc" >}}
[Convert Xml To Structure]: {{< url path="Cortex.Reference.Blocks.Xml.ConvertXml.ConvertXmlToStructure.MainDoc" >}}

[Cancel All Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.CancelTask.CancelAllTasksBlock.MainDoc" >}}
[Wait For All Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock.MainDoc" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[empty]: {{< url path="Cortex.Reference.Glossary.A-E.Empty" >}}
