---
title: "Subtract Time Period"
linkTitle: "Subtract Time Period"
description: "Subtracts a Time Period to from specified Date Time."
---

{{< figure src="/blocks/Cortex_Blocks_DateAndTime_SubtractTimePeriod_SubtractTimePeriodBlock.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DateAndTime.SubtractTimePeriod.SubtractTimePeriodBlock)</p>

## Description

Subtracts a [Time Period][TimePeriod Property] from the specified [Date Time][DateTime Property].

This block can subtract both positive and negative [TimePeriod][] values.

## Examples

### Subtract a positive Time Period

This example will subtract `1 year` from `2022-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2022-01-01T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Time Period][TimePeriod Property] | `($)TimePeriod`, with value of `{"Years": 1, "Months": 0, "Days": 0, "Hours": 0, "Minutes": 0, "Seconds": 0, "Milliseconds": 0}` | `($)TimePeriod` is a variable of type [TimePeriod][] |

#### Result

Subtracting `1 year` from `2022-01-01T00:00:00+00:00` will result in the variable `($)DateTime` being updated. Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2021-01-01T00:00:00+00:00"
```

***

### Subtract a negative Time Period

This example will subtract `-1 year` from `2021-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-01-01T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Time Period][TimePeriod Property] | `($)TimePeriod`, with value of `{"Years": -1, "Months": 0, "Days": 0, "Hours": 0, "Minutes": 0, "Seconds": 0, "Milliseconds": 0}` | `($)TimePeriod` is a variable of type [TimePeriod][] |

#### Result

Subtracting `-1 year` from `2021-01-01T00:00:00+00:00` will result in `1 year` being added and the variable `($)DateTime` being updated. Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2022-01-01T00:00:00+00:00"
```

***

## Properties

### Date Time

The [Date Time][DateTime Property] to subtract the [Time Period][TimePeriod Property] from.

Its text representation will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)DateTime` with no value |

### Time Period

The [Time Period][TimePeriod Property] to subtract from the [Date Time][DateTime Property].

[Time Period][TimePeriod Property] can have positive and negative components where components are:

* Years
* Months
* Days
* Hours
* Minutes
* Seconds
* Milliseconds

When subtracting a [Time Period][TimePeriod Property], the block will first subtract years, followed by months, days, hours, minutes, seconds and finally milliseconds.

When subtracting months, if the current day component is greater than the last day in the resultant month, it will update the day to the last day for that month (e.g. subtracting one month from `2021-02-28T23:59:59+00:00` will equate to `2021-01-31T23:59:59+00:00`).

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [TimePeriod][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | Years: `0` <br /> Months: `0` <br /> Days: `0` <br /> Hours: `0` <br /> Minutes: `0` <br /> Seconds: `0` <br /> Milliseconds: `0`|

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyValueOutOfRangeException][] | Thrown when subtracting [Time Period][TimePeriod Property] from [Date Time][DateTime Property] will result in the [Date Time][DateTime Property] being less than `0001-01-01T00:00:00+00:00`. See [Property Less Than Minimum Value][].|
|                                      | Thrown when subtracting [Time Period][TimePeriod Property] from [Date Time][DateTime Property] will result in the [Date Time][DateTime Property] being greater than `9999-12-31T23:59:59+00:00`. See [Property Greater Than Maximum Value][]. |

## Remarks

### Dates and Time

The default text representation of Date and Time will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information, please see [Working with Date and Time][].

### Order of calculations

When subtracting a [Time Period][TimePeriod Property], the block will first subtract years, followed by months, days, hours, minutes, seconds and finally milliseconds.

### Subtraction of Months

When subtracting months from the [Date Time][DateTime Property], if the current day component is greater than the last day in the resultant month, it will update the day to the last day for that month (e.g. subtracting one month from `2021-02-28T23:59:59+00:00` will equate to `2021-01-31T23:59:59+00:00`).

### Daylight Savings

This block copes with UTC time offsets but does not know anything about which time zone the [Date Time][DateTime Property] represents; as a result it cannot take daylight savings into account as these are related to time zones rather than UTC time offsets.

[DateTime Property]: {{< ref "#date-time" >}}
[TimePeriod Property]: {{< ref "#time-period" >}}

[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}
[Property Greater Than Maximum Value]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.PropertyGreaterThanMaximumValue" >}}
[Property Less Than Minimum Value]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.PropertyLessThanMinimumValue" >}}

[ISO 8601 Standard]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Working with Date and Time]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.MainDoc" >}}

[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
