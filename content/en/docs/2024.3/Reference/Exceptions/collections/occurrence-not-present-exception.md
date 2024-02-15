---
title: "OccurrenceNotPresentException"
linkTitle: "OccurrenceNotPresentException"
description: "The exception thrown when trying to get a specified occurrence of an item from a collection, or set a specified occurrence of an item in a collection."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Collections.OccurrenceNotPresentException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when trying to get a specified occurrence of an item from a collection, or set a specified occurrence of an item in a collection.

## Reasons

### Key not present in Dictionary

The key does not exist in the [Dictionary][] being searched.

#### Message Format

The format of the [Message][] is as follows:

```json
"The <nth> occurrence of the key <key-value> is not present in '<collection-object>' \r\nPlease click the HelpLink for more information on how to fix this."
```

where:

* `<nth>` is the specific occurrence that could not be found
* `<key-value>` is the value of the key that was searched for in the collection
* `<collection-object>` is the collection in which the search for the key took place. In this case, this is `'Dictionary'`.

#### How to fix

TODO: How to fix for this reason?

## Properties

TODO: Update with actual properties

### Exception Type

The type of the exception (i.e. `OccurrenceNotPresentException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

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

None

## See Also

### Related Data Types

TODO: Include actual related data types.

* [String][]
* [TimePeriod][]

### Related Concepts

TODO: Include actual related concepts

* [Blocks][]
* [Block Properties][]
* [Exceptions][]

### Related Blocks

TODO: Get list of actually related blocks.

### External Documentation

TODO: Include external documentation if any, otherwise None.
None

[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}

[Wait For Duration]: {{< url path="Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}

[Start Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.StartWorkspace.StartWorkspace.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}

[Message]: {{< ref "#message" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
