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

### Occurrence provided is zero

The occurrence provided is equal to `0`.

#### Message Format

The format of the [Message][] is as follows:

```json
"<property-name> 0 cannot be used as it will perform no operations. 
Please use a value greater or less than 0.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the property which is not present.

#### How to fix

Provide an occurrence which is non-zero.

### Positive occurrence not present

The nth occurrence is not present.

#### Message Format

The format of the message is as follows:

```json
"The <nth> occurrence of the key <key-value> is not present in '<collection-object>'
Please click the HelpLink for more information on how to fix this."
```

where:

* `<nth>` is the specific occurrence that could not be found (e.g. 1st, 2nd, 3rd)
* `<key-value>` is the value of the key that was searched for in the collection
* `<collection-object>` is the name of the collection in which the search for the key took place.

#### How to fix

Provide an occurrence which is present (e.g. if there are 3 occurrences, you must specify a value between 1 and 3).

### Negative occurrence not present

The nth from last occurrence is not present.

#### Message Format

The format of the message is as follows:

```json
"The <nth> from last occurrence of the key <key-value> is not present in '<collection-object>'
Please click the HelpLink for more information on how to fix this."
```

where:

* `<nth>` is the specific occurrence that could not be found (e.g. 1st, 2nd, 3rd)
* `<key-value>` is the value of the key that was searched for in the collection
* `<collection-object>` is the name of the collection in which the search for the key took place.

#### How to fix

Provide an occurrence from last which is present (e.g. if there are 3 occurrences, you must specify a value between -1 and -3).

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}

[Wait For Duration]: {{< url path="Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}

[Start Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.StartWorkspace.StartWorkspace.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
