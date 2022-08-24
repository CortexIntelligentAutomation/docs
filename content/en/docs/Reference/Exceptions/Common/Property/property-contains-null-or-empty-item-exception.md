---
title: "PropertyContainsNullOrEmptyItemException"
linkTitle: "PropertyContainsNullOrEmptyItemException"
description: "The exception thrown when a property is provided with a value that contains at least one item that is either `null` or empty, but the item is required to have a value."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Common.Property.PropertyContainsNullOrEmptyItemException)</p>

## Description

The exception thrown when a [property][] is provided with a value that contains at least one item that is either `null` or empty, but the item is required to have a value.

## Reasons

### Value Contains `null` or empty item

A `null` or empty item is contained in the value that was provided for the [property][].

#### Message Format

The format of the [Message][] is as follows:

```json

"'<property-name>' contains at least one null or empty value; it must only contain values that are not null or empty.\r\nPlease click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the property.

#### How to fix

Ensure the value provided for the [property][] named `<property-name>` does not contain items that are either `null` or empty.

## Properties

### Exception Type

The type of the exception (i.e. `PropertyContainsNullOrEmptyItemException`).

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

* [Working with Exceptions][]
* [Blocks][block]
* [Block Properties][property]

### Related Blocks

* Exceptions
  * [Handle Block Exception Matching Type Names][]
  
### External Documentation

None

[Message]: {{< ref "#message" >}}

[Handle Block Exception Matching Type Names]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingTypeNames.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[property]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}

[Working with Exceptions]: {{< url "Cortex.Reference.Concepts.WorkingWith.Exceptions.MainDoc" >}}
