---
title: "PropertyItemCountException"
linkTitle: "PropertyItemCountException"
description: "The exception thrown when the values provided for two properties are expected to contain the same number of items, but don't."
---

# {{< param title >}}

<p class="namespace">(Cortex.Exceptions.Common.Property.PropertyItemCountException)</p>

## Description

The exception thrown when the values provided for two [properties][TODO] are expected to contain the same number of items, but don't.

## Reasons

### Item Counts Are Different

Values provided for two [properties][TODO] are expected to contain the same number of items, but don't.

#### Message Format

The format of the [Message][] is as follows:

```json
"Invalid '<second-property-name>' provided.\r\nThere are <items-in-second-property> items in '<second-property-name>' and <items-in-first-property> items in '<first-property-name>'.\r\nThe number of items in '<second-property-name>' must be the same as the number of items in '<first-property-name>'.\r\nPlease click the HelpLink for more information on how to fix this."
```

where:

* `<first-property-name>` is the name of the first property.
* `<second-property-name>` is the name of the second property.
* `<items-in-first-property>` is the count of items in the first property.
* `<items-in-second-property>` is the count of items in the second property.

#### How to fix

Ensure that the value provided for each of the two [properties][TODO] contains the same number of items.

## Properties

### Exception Type

The type of the exception (i.e. `PropertyItemCountException`).

| | |
|--------------------|---------------------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

For this exception:

* `<first-property-name>` will be replaced with the name of the first property.
* `<second-property-name>` will be replaced with the name of the second property.
* `<items-in-first-property>` will be replaced with the count of items in the first property.
* `<items-in-second-property>` will be replaced with the count of items in the second property.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |

### Help Link

The URL for the relevant section of this exception's help page.

## Remarks

### Known Limitations

Currently, the `<first-property-name>` and `<second-property-name>` have been included in the exception. In future, we will look to include the name and Id of the [block][TODO], the id, name and value of the [property][TODO], as well as allowing the exception to contain a link to take you directly to the offending value.

## See Also

### Related Data Types

* [String][]

### Related Concepts

* [Working with Exceptions][]
* [Blocks][TODO]
* [Block Properties][TODO]

### Related Blocks

* Dictionaries
  * [Set Items With Keys][]
  * [Set Items With Values][]
* Lists
  * [Set Items At Indexes][]
  * [Set Items With Values][List Set Items With Values]
  
### External Documentation

None

[Message]: {{< ref "#message" >}}

[Set Items With Keys]: {{< url "Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemsWithKeys.MainDoc" >}}
[Set Items With Values]: {{< url "Cortex.Reference.Blocks.Dictionaries.SetItem.SetItemsWithValues.MainDoc" >}}

[Set Items At Indexes]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtIndexes.MainDoc" >}}
[List Set Items With Values]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsWithValues.MainDoc" >}}

[Working with Exceptions]: {{< url "Cortex.Reference.Concepts.WorkingWithExceptions.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
