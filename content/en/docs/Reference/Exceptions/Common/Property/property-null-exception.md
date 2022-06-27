---
title: "PropertyNullException"
linkTitle: "PropertyNullException"
description: "The exception thrown when a property is provided with a `null` value, but a non-null value is required."
---

# {{< param title >}}

<p class="namespace">(Cortex.Exceptions.Common.Property.PropertyNullException)</p>

## Description

The exception thrown when a [property][] is provided with a `null` value, but a non-null value is required.

## Reasons

### Value Is `null`

A `null` value was provided for the [property][TODO] when a non-null was required.

#### Message Format

The format of the [Message][] is as follows:

```json
"'<property-name>' is null; it must be provided with a non-null value.\r\nPlease click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the property.

#### How to fix

Provide a non-null value for the [property][TODO].

## Properties

### Exception Type

The type of the exception (i.e. `PropertyNullException`).

| | |
|--------------------|---------------------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

For this exception:

* `<property-name>` will be replaced with the name of the [property][TODO].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |

### Help Link

The URL for the relevant section of this exception's help page.

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
* Dictionaries
  * [Add Item With Key][]
  * [Contains Item With Key And Value][]
  * [Contains Item With Key][]
  * [Contains Item With Value][]
  * [Contains Items With Keys][]
  * [Contains Items With Values][]
  * [Get Count Of All Items][]
  * [Get Count Of Items With Value][]
  * [Get Counts Of Items With Values][]
  * [Get All Items][]
  * [Get All Keys][]
  * [Get Item With Key][]
  * [Get Items With Key][]
  * [Remove All Items][]
  * [Remove Item With Key][]
  * [Remove Item With Value][]
  * [Remove Items With Key][]
  * [Remove Items With Keys][]
  * [Remove Items With Value][]
  * [Remove Items With Values][]
  * [Set All Items][]
  * [Set Item With Key][]
  * [Set Item With Value][]
  * [Set Items With Key][]
  * [Set Items With Keys][]
  * [Set Items With Value][]
  * [Set Items With Values][]
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
  * [Add Item At Beginning][]
  * [Add Item At End][]
  * [Add Item At Index][]
  * [Add Items At Beginning][]
  * [Add Items At End][]
  * [Add Items At Index][]
  * [Contains Item With Value][List Contains Item With Value]
  * [Contains Items With Values][List Contains Items With Values]
  * [Get Count Of All Items][List Get Count Of All Items]
  * [Get Count Of Items With Value][List Get Count Of Items With Value]
  * [Get Count Of Items With Values][List Get Count Of Items With Values]
  * [Get Index Of Item With Value][]
  * [Get Indexes Of Items With Value][]
  * [Get Item At Beginning][]
  * [Get Item At End][]
  * [Get Item At Index][]
  * [Get Items At Beginning][]
  * [Get Items At End][]
  * [Get Items At Index][]
  * [Get Items At Indexes][]
  * [Remove All Items][List Remove All Items]
  * [Remove Duplicate Items][]
  * [Remove Item At Beginning][]
  * [Remove Item At End][]
  * [Remove Item At Index][]
  * [Remove Item With Value][List Remove Item With Value]
  * [Remove Items At Beginning][]
  * [Remove Items At End][]
  * [Remove Items At Index][]
  * [Remove Items At Indexes][]
  * [Remove Items With Value][List Remove Items With Value]
  * [Remove Items With Values][List Remove Items With Values]
  * [Set All Items][List Set All Items]
  * [Set Item At Beginning][]
  * [Set Item At End][]
  * [Set Item At Index][]
  * [Set Item With Value][List Set Item With Value]
  * [Set Items At Beginning][]
  * [Set Items At End][]
  * [Set Items At Index][]
  * [Set Items At Indexes][]
  * [Set Items With Value][List Set Items With Value]
  * [Set Items With Values][List Set Items With Values]
* Logs
  * [Log Event][]
* Loops
  * [For Loop][]
* Objects
  * [Convert Object To Text][]
* Text
  * [Contains All Text][]
  * [Contains Any Text][]
  * [Format Text With Values][]
  * [Join Text][]
* Xml
  * [Convert Structure To Xml][]
  * [Convert Xml To Structure][]

### External Documentation

None

[Message]: {{< ref "#message" >}}

[Convert Text To Date Time]: {{< url "Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertTextToDateTime.MainDoc" >}}

[Add Item With Key]: {{< url "Cortex.Reference.Blocks.Dictionaries.AddItem.AddItemWithKey.MainDoc" >}}
[Contains Item With Key And Value]: {{< url "Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemWithKeyAndValue.MainDoc" >}}
[Contains Item With Key]: {{< url "Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemWithKey.MainDoc" >}}
[Contains Item With Value]: {{< url "Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemWithValue.MainDoc" >}}
[Contains Items With Keys]: {{< url "Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemsWithKeys.MainDoc" >}}
[Contains Items With Values]: {{< url "Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemsWithValues.MainDoc" >}}
[Get Count Of All Items]: {{< url "Cortex.Reference.Blocks.Dictionaries.GetCount.GetCountOfAllItems.MainDoc" >}}
[Get Count Of Items With Value]: {{< url "Cortex.Reference.Blocks.Dictionaries.GetCount.GetCountOfItemsWithValue.MainDoc" >}}
[Get Counts Of Items With Values]: {{< url "Cortex.Reference.Blocks.Dictionaries.GetCount.GetCountsOfItemsWithValues.MainDoc" >}}
[Get All Items]: {{< url "Cortex.Reference.Blocks.Dictionaries.GetItem.GetAllItems.MainDoc" >}}
[Get Item With Key]: {{< url "Cortex.Reference.Blocks.Dictionaries.GetItem.GetItemWithKey.MainDoc" >}}
[Get Items With Key]: {{< url "Cortex.Reference.Blocks.Dictionaries.GetItem.GetItemsWithKey.MainDoc" >}}
[Get All Keys]: {{< url "Cortex.Reference.Blocks.Dictionaries.GetKey.GetAllKeys.MainDoc" >}}
[Remove All Items]: {{< url "Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveAllItems.MainDoc" >}}
[Remove Item With Key]: {{< url "Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemWithKey.MainDoc" >}}
[Remove Item With Value]: {{< url "Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemWithValue.MainDoc" >}}
[Remove Items With Key]: {{< url "Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemsWithKey.MainDoc" >}}
[Remove Items With Keys]: {{< url "Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemsWithKeys.MainDoc" >}}
[Remove Items With Value]: {{< url "Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemsWithValue.MainDoc" >}}
[Remove Items With Values]: {{< url "Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemsWithValues.MainDoc" >}}
[Set All Items]: {{< url "Cortex.Reference.Blocks.Dictionaries.SetItem.SetAllItems.MainDoc" >}}
[Set Item With Key]: {{< url "Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemWithKey.MainDoc" >}}
[Set Item With Value]: {{< url "Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemWithValue.MainDoc" >}}
[Set Items With Key]: {{< url "Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemsWithKey.MainDoc" >}}
[Set Items With Keys]: {{< url "Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemsWithKeys.MainDoc" >}}
[Set Items With Value]: {{< url "Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemsWithValue.MainDoc" >}}
[Set Items With Values]: {{< url "Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemsWithValues.MainDoc" >}}

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

[Add Item At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.AddItem.AddItemAtBeginning.MainDoc" >}}
[Add Item At End]: {{< url "Cortex.Reference.Blocks.Lists.AddItem.AddItemAtEnd.MainDoc" >}}
[Add Item At Index]: {{< url "Cortex.Reference.Blocks.Lists.AddItem.AddItemAtIndex.MainDoc" >}}
[Add Items At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.AddItem.AddItemsAtBeginning.MainDoc" >}}
[Add Items At End]: {{< url "Cortex.Reference.Blocks.Lists.AddItem.AddItemsAtEnd.MainDoc" >}}
[Add Items At Index]: {{< url "Cortex.Reference.Blocks.Lists.AddItem.AddItemsAtIndex.MainDoc" >}}
[List Contains Item With Value]: {{< url "Cortex.Reference.Blocks.Lists.ContainsItem.ContainsItemWithValue.MainDoc" >}}
[List Contains Items With Values]: {{< url "Cortex.Reference.Blocks.Lists.ContainsItem.ContainsItemsWithValues.MainDoc" >}}
[List Get Count Of All Items]: {{< url "Cortex.Reference.Blocks.Lists.GetCount.GetCountOfAllItems.MainDoc" >}}
[List Get Count Of Items With Value]: {{< url "Cortex.Reference.Blocks.Lists.GetCount.GetCountOfItemsWithValue.MainDoc" >}}
[List Get Count Of Items With Values]: {{< url "Cortex.Reference.Blocks.Lists.GetCount.GetCountOfItemsWithValues.MainDoc" >}}
[Get Index Of Item With Value]: {{< url "Cortex.Reference.Blocks.Lists.GetIndex.GetIndexOfItemWithValue.MainDoc" >}}
[Get Indexes Of Items With Value]: {{< url "Cortex.Reference.Blocks.Lists.GetIndex.GetIndexesOfItemsWithValue.MainDoc" >}}
[Get Item At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemAtBeginning.MainDoc" >}}
[Get Item At End]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemAtEnd.MainDoc" >}}
[Get Item At Index]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemAtIndex.MainDoc" >}}
[Get Items At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemsAtBeginning.MainDoc" >}}
[Get Items At End]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemsAtEnd.MainDoc" >}}
[Get Items At Index]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemsAtIndex.MainDoc" >}}
[Get Items At Indexes]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemsAtIndexes.MainDoc" >}}
[List Remove All Items]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveAllItems.MainDoc" >}}
[Remove Duplicate Items]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveDuplicateItems.MainDoc" >}}
[Remove Item At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemAtBeginning.MainDoc" >}}
[Remove Item At End]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemAtEnd.MainDoc" >}}
[Remove Item At Index]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemAtIndex.MainDoc" >}}
[List Remove Item With Value]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemWithValue.MainDoc" >}}
[Remove Items At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsAtBeginning.MainDoc" >}}
[Remove Items At End]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsAtEnd.MainDoc" >}}
[Remove Items At Index]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsAtIndex.MainDoc" >}}
[Remove Items At Indexes]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsAtIndexes.MainDoc" >}}
[List Remove Items With Value]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsWithValue.MainDoc" >}}
[List Remove Items With Values]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsWithValues.MainDoc" >}}
[List Set All Items]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetAllItems.MainDoc" >}}
[Set Item At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemAtBeginning.MainDoc" >}}
[Set Item At End]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemAtEnd.MainDoc" >}}
[Set Item At Index]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemAtIndex.MainDoc" >}}
[List Set Item With Value]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemWithValue.MainDoc" >}}
[Set Items At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtBeginning.MainDoc" >}}
[Set Items At End]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtEnd.MainDoc" >}}
[Set Items At Index]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtIndex.MainDoc" >}}
[Set Items At Indexes]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtIndexes.MainDoc" >}}
[List Set Items With Value]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsWithValue.MainDoc" >}}
[List Set Items With Values]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsWithValues.MainDoc" >}}

[Log Event]: {{< url "Cortex.Reference.Blocks.Logs.LogEvent.LogEvent.MainDoc" >}}

[For Loop]: {{< url "Cortex.Reference.Blocks.Loops.For.ForLoop.MainDoc" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}

[Contains All Text]: {{< url "Cortex.Reference.Blocks.Text.ContainsText.ContainsAllText.MainDoc" >}}
[Contains Any Text]: {{< url "Cortex.Reference.Blocks.Text.ContainsText.ContainsAnyText.MainDoc" >}}
[Format Text With Values]: {{< url "Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.MainDoc" >}}
[Join Text]: {{< url "Cortex.Reference.Blocks.Text.JoinText.JoinText.MainDoc" >}}

[Convert Structure To Xml]: {{< url "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertStructureToXmlBlock.MainDoc" >}}
[Convert Xml To Structure]: {{< url "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertXmlToStructureBlock.MainDoc" >}}

[Working with Exceptions]: {{< url "Cortex.Reference.Concepts.WorkingWithExceptions.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
