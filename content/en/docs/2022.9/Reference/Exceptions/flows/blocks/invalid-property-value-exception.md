---
title: "InvalidPropertyValueException"
linkTitle: "InvalidPropertyValueException"
description: "The exception thrown when a property is provided with an invalid value."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Blocks.InvalidPropertyValueException)</p>

## Description

The exception thrown when a [property][] is provided with an invalid value.

This exception wraps the [InnerException][] that occurred when the value provided for the [property][] was used.

## Reasons

### Value Is Invalid

An invalid value was provided for the [property][] with the specified [PropertyId][].

#### Message Format

The format of the [Message][] is as follows:

```json
"The value of the property could not be evaluated."
```

#### How to fix

Provide a valid value for the [property][] with the specified [PropertyId][], as instructed by the [Message][].

More information on why the value is invalid, or instruction on how to provide a valid value, may be present in the message of the [InnerException][].

## Properties

### Exception Type

The type of the exception (i.e. `InvalidPropertyValueException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

For this exception, the message will always be the same. More information on why the value is invalid, or instruction on how to provide a valid value, may be present in the message of the [InnerException][].

| | |
|-----------|------------|
| Data Type | [String][] |

### PropertyId

The Id of the [property][] that has been provided an invalid value.

| | |
|-----------|----------|
| Data Type | [Guid][] |

### InnerException

The exception that occurred when the value provided for the [property][] was used.

This may contain more information on why the value is invalid, or instruction on how to provide a valid value in its message.

| | |
|-----------|---------------|
| Data Type | [Exception][] |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

Currently, only the [PropertyId][] has been included in the exception. In future, we will look to include the name and Id of the [block][], the name and value of the [property][], as well as allowing the exception to contain a link to take you directly to the offending value.

## See Also

### Related Data Types

* [String][]
* [Guid][]
* [Exception][]

### Related Concepts

* [Blocks][]
* [Block Properties][]
* [Exceptions][]

### Related Blocks

* Dictionaries
  * [Add Item With Key][]
  * [Contains Item With Key And Value][]
  * [Contains Item With Value][]
  * [Get Count Of Items With Value][]
  * [Remove Item With Value][]
  * [Remove Items With Value][]
  * [Set All Items][]
  * [Set Item With Key][]
  * [Set Item With Value][]
  * [Set Items With Key][]
  * [Set Items With Value][]
* Files & Folders
  * [Read All Lines][]
  * [Read All Text][]
  * [Search File][]
  * [Search Files][]
  * [Write All Lines][]
  * [Write All Text][]
* Lists
  * [Add Item At Beginning][]
  * [Add Item At End][]
  * [Add Item At Index][]
  * [Contains Item With Value][List Contains Item With Value]
  * [Get Count Of Items With Value][List Get Count Of Items With Value]
  * [Get Index Of Item With Value][]
  * [Get Indexes Of Items With Value][]
  * [Remove Item With Value][List Remove Item With Value]
  * [Remove Items With Value][List Remove Items With Value]
  * [Set Item At Beginning][]
  * [Set Item At End][]
  * [Set Item At Index][]
  * [Set Item With Value][List Set Item With Value]
  * [Set Items With Value][List Set Items With Value]
* Loops
  * [For Loop][]
* Text
  * [Convert To Camel Case][]
  * [Convert To Lower Case][]
  * [Convert To Pascal Case][]
  * [Convert To Title Case][]
  * [Convert To Upper Case][]

### External Documentation

None

[Message]: {{< ref "#message" >}}
[PropertyId]: {{< ref "#propertyid" >}}
[InnerException]: {{< ref "#innerexception" >}}

[Add Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.AddItem.AddItemWithKey.MainDoc" >}}
[Contains Item With Key And Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemWithKeyAndValue.MainDoc" >}}
[Contains Item With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemWithValue.MainDoc" >}}
[Get Count Of Items With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.GetCount.GetCountOfItemsWithValue.MainDoc" >}}
[Remove Item With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemWithValue.MainDoc" >}}
[Remove Items With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.RemoveItem.RemoveItemsWithValue.MainDoc" >}}
[Set All Items]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetAllItems.MainDoc" >}}
[Set Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemWithKey.MainDoc" >}}
[Set Item With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemWithValue.MainDoc" >}}
[Set Items With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemsWithKey.MainDoc" >}}
[Set Items With Value]: {{< url path="Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemsWithValue.MainDoc" >}}

[Read All Lines]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.ReadFile.ReadAllLines.MainDoc" >}}
[Read All Text]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.ReadFile.ReadAllText.MainDoc" >}}
[Search File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.SearchFile.SearchFile.MainDoc" >}}
[Search Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.SearchFile.SearchFiles.MainDoc" >}}
[Write All Lines]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.WriteFile.WriteAllLines.MainDoc" >}}
[Write All Text]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.WriteFile.WriteAllText.MainDoc" >}}

[Add Item At Beginning]: {{< url path="Cortex.Reference.Blocks.Lists.AddItem.AddItemAtBeginning.MainDoc" >}}
[Add Item At End]: {{< url path="Cortex.Reference.Blocks.Lists.AddItem.AddItemAtEnd.MainDoc" >}}
[Add Item At Index]: {{< url path="Cortex.Reference.Blocks.Lists.AddItem.AddItemAtIndex.MainDoc" >}}
[List Contains Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.ContainsItem.ContainsItemWithValue.MainDoc" >}}
[List Get Count Of Items With Value]: {{< url path="Cortex.Reference.Blocks.Lists.GetCount.GetCountOfItemsWithValue.MainDoc" >}}
[Get Index Of Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.GetIndex.GetIndexOfItemWithValue.MainDoc" >}}
[Get Indexes Of Items With Value]: {{< url path="Cortex.Reference.Blocks.Lists.GetIndex.GetIndexesOfItemsWithValue.MainDoc" >}}
[List Remove Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemWithValue.MainDoc" >}}
[List Remove Items With Value]: {{< url path="Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsWithValue.MainDoc" >}}
[Set Item At Beginning]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemAtBeginning.MainDoc" >}}
[Set Item At End]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemAtEnd.MainDoc" >}}
[Set Item At Index]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemAtIndex.MainDoc" >}}
[List Set Item With Value]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemWithValue.MainDoc" >}}
[List Set Items With Value]: {{< url path="Cortex.Reference.Blocks.Lists.SetItem.SetItemsWithValue.MainDoc" >}}

[For Loop]: {{< url path="Cortex.Reference.Blocks.Loops.For.ForLoop.MainDoc" >}}

[Convert To Camel Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToCamelCase.MainDoc" >}}
[Convert To Lower Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToLowerCase.MainDoc" >}}
[Convert To Pascal Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToPascalCase.MainDoc" >}}
[Convert To Title Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToTitleCase.MainDoc" >}}
[Convert To Upper Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToUpperCase.MainDoc" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}
[Guid]: {{< url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
