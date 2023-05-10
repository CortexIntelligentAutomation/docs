---
title: "PropertyContainsNullItemException"
linkTitle: "PropertyContainsNullItemException"
description: "The exception thrown when a property is provided with a value that contains at least one item that is `null`."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Common.Property.PropertyContainsNullItemException)</p>

## Description

The exception thrown when a [property][] is provided with a value that contains at least one item that is `null`.

## Reasons

### Value Contains `null` item

A `null` item is contained in the value that was provided for the [property][].

#### Message Format

The format of the [Message][] is as follows:

```json
"'<property-name>' contains at least one null value; it must only contain values that are not null.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the property.

#### How to fix

Ensure the value provided for the [property][] named `<property-name>` does not contain items that are `null`.

## Properties

### Exception Type

The type of the exception (i.e. `PropertyContainsNullItemException`).

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

* [Blocks][block]
* [Block Properties][property]
* [Exceptions][]

### Related Blocks

* Tasks
  * [Cancel All Tasks][]
  
### External Documentation

None

[Message]: {{< ref "#message" >}}

[Cancel All Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.CancelTask.CancelAllTasksBlock.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

TODO