---
title: "PropertyValueOutOfRangeException"
linkTitle: "PropertyValueOutOfRangeException"
description: "The exception thrown when a property is provided with a value that falls outside its accepted range."
---

# {{< param title >}}

<p class="namespace">(Cortex.Exceptions.Common.Property.PropertyValueOutOfRangeException)</p>

## Description

The exception thrown when a [property][] is provided with a value that falls outside its accepted range.

There are multiple reasons that this exception can be thrown:

* [Property Is Empty][]
* [Property Is Empty Or `null`][]
* [Property Is Invalid][]
* [Property Is Negative][]
* [Property Greater Than Maximum Value][]
* [Property Less Than Minimum Value][]

## Reasons

### Property Is Empty

An operation such as getting, setting or removing one or more items from an empty collection [property][] was performed.

#### Message Format

The format of the [Message][] is as follows:

```json
"Invalid '<property-name>' provided.
There are no items in '<collection-property-name>'.
Check that '<collection-property-name>' is not empty.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<collection-property-name>` is the name of the empty collection [property][].
* `<property-name>` is the name of another [property][] used to perform the get, set or remove operation (e.g. `index`, `indexes`, `count` etc.).

#### How to fix

Provide a non-empty collection [property][].

### Property Is Empty Or `null`

An operation such as adding, getting or removing text from a `null` or empty (i.e. `""`) text [property][] was performed.

#### Message Format

The format of the [Message][] is as follows:

```json
"Invalid '<property-name>' provided.
Check that '<property-name>' is not null or empty.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the `null` or empty (i.e. `""`) text [property][].

#### How to fix

Provide a non-`null` or non-empty text [property][].

### Property Is Invalid

A [property][] was set to an invalid value.

#### Message Format

The format of the [Message][] can be one of the following:

```json
"'<property-name>' given was <invalid-value>; it must be a value between <minimum-allowed-value> and <maximum-allowed-value>.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"'<property-name>' given was <invalid-value>; it must be a value between <minimum-allowed-value> and <maximum-allowed-value> (<calculation-of-maximum-allowed-value>).
Please click the HelpLink for more information on how to fix this."
```

or

```json
"`<property-name>` given was <invalid-value>; it must be less than or equal to <maximum-allowed-value>.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"'<related-property-name>' given was <related-property-value> and '<property-name>' given was <invalid-value>.
The '<property-name>' must be less than or equal to <maximum-allowed-value> (<calculation-of-maximum-allowed-value>).
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid '<property-name>' provided.
The values <invalid-value> in '<property-name>' are outside of the expected range.
Check that the provided values of '<property-name>' are between <minimum-allowed-value> and <maximum-allowed-value>.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the [property][] with the invalid value (e.g. `Length`, `Count`, `Index`).
* `<invalid-value>` is the invalid value of the [property][] (e.g. `100` for non-collection values or `100, 200` for collection values).
* `<minimum-allowed-value>` is the minimum value allowed (e.g. `0`).
* `<maximum-allowed-value>` is the maximum value allowed (e.g. `9`).
* `<calculation-of-maximum-allowed-value>` is how the maximum allowed value is calculated (e.g. `'Text.Length' - 1`).
* `<related-property-name>` is the name of a related [property][] relevant to the exception (e.g. `Index`).
* `<related-property-value>` is the value of a related [property][] relevant to the exception (e.g. `1`).

#### How to fix

Provide a valid value for the [property][] as instructed by the [Message][].

### Property Is Negative

A [property][] was set to a negative [TimePeriod][] when a positive [TimePeriod][] was required.

#### Message Format

The format of the [Message][] is as follows:

```json
"The provided 'TimePeriod' (<time-period-value-as-text>) equates to <time-period-value-as-milliseconds> milliseconds which is invalid; it must be a non-negative value.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<time-period-value-as-text>` is the [TimePeriod][] value in its text representation (e.g. `0.0.0.0:0:0:-10`).
* `<time-period-value-as-milliseconds>` is the [TimePeriod][] value represented as total milliseconds (e.g. `-10`).

#### How to fix

Provide a valid non-negative [TimePeriod][] value for the [property][] as instructed by the [Message][].

### Property Greater Than Maximum Value

A positive [TimePeriod][] was added to the [property][] or a negative [TimePeriod][] was subtracted from the [property][], and the result is greater than the allowed maximum value of the [DateTimeOffset][] data type.

#### Message Format

The format of the [Message][] can be one of the following:

* If a positive [TimePeriod][] was added

```json
"The provided 'DateTimeOffset' (<value-of-date-time-offset-property>) with the addition of the given 'TimePeriod' (<value-of-time-period-property>) is greater than the maximum of a DateTimeOffset (<maximum-value-of-date-time-offset>).
Please click the HelpLink for more information on how to fix this."
```

* If a negative [TimePeriod][] value was subtracted

```json
"The provided 'DateTimeOffset' (<value-of-date-time-offset-property>) with the subtraction of the given 'TimePeriod' (<value-of-time-period-property>) is greater than the maximum of a DateTimeOffset (<maximum-value-of-date-time-offset>).
Please click the HelpLink for more information on how to fix this."
```

where:

* `<value-of-date-time-property>` is the value of the [DateTimeOffset][] in [ISO 8601 format][] (i.e. `2022-07-01T14:00:00.0000000+01:00`).
* `<value-of-time-period-property>` is the value of the [TimePeriod][] in text format (i.e. `9999.0.0.0:0:0:0`).
* `<maximum-value-of-date-time-offset>` is the maximum value of a [DateTimeOffset][] (i.e. `9999-12-31T23:59:59.9999999+00:00`).

#### How to fix

Provide a [TimePeriod][] value that when added to or subtracted from the [property][] results in the [property][] being less than the allowed maximum value of the [DateTimeOffset][] data type.

### Property Less Than Minimum Value

A positive [TimePeriod][] was subtracted from the [property][] or a negative [TimePeriod][] was added to the [property][], and the result was less than the allowed minimum value of the [DateTimeOffset][] data type.

#### Message Format

The format of the [Message][] can be one of the following:

* If a positive [TimePeriod][] was subtracted

```json
"The provided 'DateTimeOffset' (<value-of-date-time-offset-property>) with the subtraction of the given 'TimePeriod' (<value-of-time-period-property>) is less than the minimum of a DateTimeOffset (<minimum-value-of-date-time-offset>).
Please click the HelpLink for more information on how to fix this."
```

* If a negative [TimePeriod][] value was added

```json
"The provided 'DateTimeOffset' (<value-of-date-time-offset-property>) with the addition of the given 'TimePeriod' (<value-of-time-period-property>) is less than the minimum of a DateTimeOffset (<minimum-value-of-date-time-offset>).
Please click the HelpLink for more information on how to fix this."
```

where:

* `<value-of-date-time-property>` is the value of the [DateTimeOffset][] in [ISO 8601 format][] (i.e. `2022-07-01T14:00:00.0000000+01:00`).
* `<value-of-time-period-property>` is the value of the [TimePeriod][] in text format (i.e. `-9999.0.0.0:0:0:0`).
* `<minimum-value-of-date-time-offset>` is the minimum value of a [DateTimeOffset][] (i.e. `0001-01-01T00:00:00.0000000+00:00`).

#### How to fix

Provide a [TimePeriod][] value that when added to or subtracted from the [property][] results in the [property][] being greater than the allowed minimum value of the [DateTimeOffset][] data type.

## Properties

### Exception Type

The type of the exception (i.e. `PropertyValueOutOfRangeException`).

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

* Date & Time
  * [DateTimeOffset][]
  * [TimePeriod][]
* Text
  * [String][]

### Related Concepts

* [Exceptions][]
* [Working with Collections][]
* [Working with Date and Time][]
* [Working with Text][]

### Related Blocks

* Date & Time
  * [Add Time Period][]
  * [Subtract Time Period][]
* Lists
  * [Add Item At Index][]
  * [Add Items At Index][]
  * [Get Item At Index][]
  * [Get Items At Beginning][]
  * [Get Items At End][]
  * [Get Items At Index][]
  * [Get Items At Indexes][]
  * [Remove Item At Index][]
  * [Remove Items At Beginning][]
  * [Remove Items At End][]
  * [Remove Items At Index][]
  * [Remove Items At Indexes][]
  * [Set Item At Index][]
  * [Set Items At Index][]
  * [Set Items At Indexes][]
* Queues
  * [Dequeue Items][]
* Schedules
  * [Wait For Duration][]
* Text
  * [Add Text After Index][]
  * [Add Text Before Index][]
  * [Get Text At Beginning][]
  * [Get Text At End][]
  * [Get Text At Index][]
  * [Get Text Before Index][]
  * [Get Text Between Indexes][]
  * [Remove Text At Beginning][]
  * [Remove Text At End][]
  * [Remove Text At Index][]
  * [Remove Text Before Index][]
  * [Remove Text Between Indexes][]

### External Documentation

None

[Property Greater Than Maximum Value]: {{< ref "#property-greater-than-maximum-value" >}}
[Property Less Than Minimum Value]: {{< ref "#property-less-than-minimum-value" >}}
[Property Is Empty]: {{< ref "#property-is-empty" >}}
[Property Is Empty Or `null`]: {{< ref "#property-is-empty-or-null" >}}
[Property Is Invalid]: {{< ref "#property-is-invalid" >}}
[Property Is Negative]: {{< ref "#property-is-negative" >}}

[Message]: {{< ref "#message" >}}

[Add Time Period]: {{< url "Cortex.Reference.Blocks.DateAndTime.AddTimePeriod.AddTimePeriod.MainDoc" >}}
[Subtract Time Period]: {{< url "Cortex.Reference.Blocks.DateAndTime.SubtractTimePeriod.SubtractTimePeriod.MainDoc" >}}

[Add Item At Index]: {{< url "Cortex.Reference.Blocks.Lists.AddItem.AddItemAtIndex.MainDoc" >}}
[Add Items At Index]: {{< url "Cortex.Reference.Blocks.Lists.AddItem.AddItemsAtIndex.MainDoc" >}}
[Get Item At Index]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemAtIndex.MainDoc" >}}
[Get Items At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemsAtBeginning.MainDoc" >}}
[Get Items At End]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemsAtEnd.MainDoc" >}}
[Get Items At Index]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemsAtIndex.MainDoc" >}}
[Get Items At Indexes]: {{< url "Cortex.Reference.Blocks.Lists.GetItem.GetItemsAtIndexes.MainDoc" >}}
[Remove Item At Index]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemAtIndex.MainDoc" >}}
[Remove Items At Beginning]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsAtBeginning.MainDoc" >}}
[Remove Items At End]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsAtEnd.MainDoc" >}}
[Remove Items At Index]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsAtIndex.MainDoc" >}}
[Remove Items At Indexes]: {{< url "Cortex.Reference.Blocks.Lists.RemoveItem.RemoveItemsAtIndexes.MainDoc" >}}
[Set Item At Index]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemAtIndex.MainDoc" >}}
[Set Items At Index]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtIndex.MainDoc" >}}
[Set Items At Indexes]: {{< url "Cortex.Reference.Blocks.Lists.SetItem.SetItemsAtIndexes.MainDoc" >}}

[Wait For Duration]: {{< url "Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}

[Add Text After Index]: {{< url "Cortex.Reference.Blocks.Text.AddText.AddTextAfterIndex.MainDoc" >}}
[Add Text Before Index]: {{< url "Cortex.Reference.Blocks.Text.AddText.AddTextBeforeIndex.MainDoc" >}}
[Get Text At Beginning]: {{< url "Cortex.Reference.Blocks.Text.GetText.GetTextAtBeginning.MainDoc" >}}
[Get Text At End]: {{< url "Cortex.Reference.Blocks.Text.GetText.GetTextAtEnd.MainDoc" >}}
[Get Text At Index]: {{< url "Cortex.Reference.Blocks.Text.GetText.GetTextAtIndex.MainDoc" >}}
[Get Text Before Index]: {{< url "Cortex.Reference.Blocks.Text.GetText.GetTextBeforeIndex.MainDoc" >}}
[Get Text Between Indexes]: {{< url "Cortex.Reference.Blocks.Text.GetText.GetTextBetweenIndexes.MainDoc" >}}
[Remove Text At Beginning]: {{< url "Cortex.Reference.Blocks.Text.RemoveText.RemoveTextAtBeginning.MainDoc" >}}
[Remove Text At End]: {{< url "Cortex.Reference.Blocks.Text.RemoveText.RemoveTextAtEnd.MainDoc" >}}
[Remove Text At Index]: {{< url "Cortex.Reference.Blocks.Text.RemoveText.RemoveTextAtIndex.MainDoc" >}}
[Remove Text Before Index]: {{< url "Cortex.Reference.Blocks.Text.RemoveText.RemoveTextBeforeIndex.MainDoc" >}}
[Remove Text Between Indexes]: {{< url "Cortex.Reference.Blocks.Text.RemoveText.RemoveTextBetweenIndexes.MainDoc" >}}

[property]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}

[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Working with Collections]: {{< url "Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}

[Working with Date and Time]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.MainDoc" >}}
[ISO 8601 format]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}

[Working with Text]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}

[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[TimePeriod]: {{< url "Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}

[Dequeue Items]: {{< url "Cortex.Reference.Blocks.Queues.DequeueItem.DequeueItemsBlock.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
