---
title: "Add Time Period"
linkTitle: "Add Time Period"
description: "Adds a Time Period to a specified Date Time."
---

{{< figure src="/blocks/date-and-time-add-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.DateAndTime.AddTimePeriod.AddTimePeriodBlock)</p>

## Description

Adds a [Time Period][TimePeriod Property] to the specified [Date Time][DateTime Property].

This block can add both positive and negative [TimePeriod][] values.

## Examples

### Add a positive Time Period

This example will add `1 year`, `1 month`, `1 day`, `1 hour` and `30 minutes` to `2021-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-01-01T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Time Period][TimePeriod Property] | `($)TimePeriod`, with value of `{"Years": 1, "Months": 1, "Days": 1, "Hours": 1, "Minutes": 30, "Seconds": 0, "Milliseconds": 0}` | `($)TimePeriod` is a variable of type [TimePeriod][] |

#### Result

Adding `1 year`, `1 month`, `1 day`, `1 hour` and `30 minutes` to `2021-01-01T00:00:00+00:00` will result in the variable `($)DateTime` being updated. Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2022-02-02T01:30:00+00:00"
```

***

### Add a negative Time Period

This example will add `-1 year` to `2021-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-01-01T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Time Period][TimePeriod Property] | `($)TimePeriod`, with value of `{"Years": -1, "Months": 0, "Days": 0, "Hours": 0, "Minutes": 0, "Seconds": 0, "Milliseconds": 0}` | `($)TimePeriod` is a variable of type [TimePeriod][] |

#### Result

Adding `-1 year` from `2021-01-01T00:00:00+00:00` will result in `1 year` being subtracted and the variable `($)DateTime` being updated. Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2020-01-01T00:00:00+00:00"
```

***

## Properties

### Date Time

The [Date Time][DateTime Property] to add the [Time Period][TimePeriod Property] to.

Its text representation will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information about Date and Time, please see [Working with Dates and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [InputOutput][] |
| Default Value | `($)DateTime` with [DateTimeOffset][] value that has a text representation of `0001-01-01T00:00:00+00:00`|

### Time Period

The [Time Period][TimePeriod Property] to add to the [Date Time][DateTime Property] to.

[Time Period][TimePeriod Property] can have positive and negative components where components are:

* Years
* Months
* Days
* Hours
* Minutes
* Seconds
* Milliseconds

When adding a [Time Period][TimePeriod Property], the block will first add years, followed by months, days, hours, minutes, seconds and finally milliseconds.

When adding months, if the current day component is greater than the last day in the resultant month, it will update the day to the last day for that month (e.g. adding one month onto `2021-01-31T23:59:59+00:00` will equate to `2021-02-28T23:59:59+00:00`).

For more information about Date and Time, please see [Working with Dates and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [TimePeriod][] |
| Property Type | [Input][] |
| Default Value | `($)TimePeriod` with value `{"Years": 0, "Months": 0, "Days": 0, "Hours": 0, "Minutes": 0, "Seconds": 0, "Milliseconds": 0}` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyValueOutOfRangeException][] | Thrown when adding [Time Period][TimePeriod Property] to [Date Time][DateTime Property] will result in the [Date Time][DateTime Property] being less than `0001-01-01T00:00:00+00:00` or greater than `9999-12-31T23:59:59+00:00`. |

## Remarks

### Dates and Time

The default text representation of Date and Time will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information, please see [Working with Dates and Time][].

### Order of calculations

When adding a [Time Period][TimePeriod Property], the block will first add years, followed by months, days, hours, minutes, seconds and finally milliseconds.

### Addition of Months

When adding months to the [Date Time][DateTime Property], if the current day component is greater than the last day in the resultant month, it will update the day to the last day for that month (e.g. adding one month onto `2021-01-31T23:59:59+00:00` will equate to `2021-02-28T23:59:59+00:00`).

### Daylight Savings

This block copes with UTC time offsets but does not know anything about which time zone the [Date Time][DateTime Property] represents; as a result it cannot take daylight savings into account as these are related to time zones rather than UTC time offsets.

[DateTime Property]: {{< ref "#date-time" >}}
[TimePeriod Property]: {{< ref "#time-period" >}}

[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[ISO 8601 Standard]: {{< url "Cortex.Reference.Concepts.ISO8601Standard.MainDoc" >}}
[Working with Dates and Time]: {{< url "Cortex.Reference.Concepts.WorkingWithDatesAndTime.MainDoc" >}}

[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.MostCommon.DateTimeOffset" >}}
[TimePeriod]: {{< url "Cortex.Reference.DataTypes.MostCommon.TimePeriod" >}}
