---
title: "Get Time Period Between Date Times"
linkTitle: "Get Time Period Between Date Times"
description: "Gets the Time Period between two Date Times."
---

{{< figure src="/blocks/date-and-time-get-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.DateAndTime.GetTimePeriod.GetTimePeriodBetweenDateTimesBlock)</p>

## Description

Get the [Time Period][TimePeriod Property] between the specified [Start Date Time][StartDateTime Property] and [End Date Time][EndDateTime Property].

## Examples

### Get Time Period between Start Date Time and End Date Time

This example will get the Time Period beween `2021-01-01T00:00:00+00:00` and `2022-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Start Date Time][StartDateTime Property] | `($)StartDateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-01-01T00:00:00+00:00` | `($)StartDateTime` is a variable of type [DateTimeOffset][] |
| [End Date Time][EndDateTime Property] | `($)EndDateTime`, with value of [DateTimeOffset][] that has a text representation of `2022-01-01T00:00:00+00:00` | `($)EndDateTime` is a variable of type [DateTimeOffset][] |
| [Time Period][TimePeriod Property] | `($)TimePeriod`, with no value | `($)TimePeriod` is a variable that will be set to a [TimePeriod][] value |

#### Result

Getting the Time Period between `2021-01-01T00:00:00+00:00` and `2022-01-01T00:00:00+00:00` will result in the variable `($)TimePeriod` being updated to the following:

```json
{
    "Years": 0, 
    "Months": 0, 
    "Days": 365, 
    "Hours": 0, 
    "Minutes": 0, 
    "Seconds": 0, 
    "Milliseconds": 0
}
```

***

## Properties

### Start Date Time

The [Start Date Time][StartDateTime Property] to get the Time Period between.

Its text representation will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Input][] |
| Default Value | `($)StartDateTime` with [DateTimeOffset][] value that has a text representation of `0001-01-01T00:00:00+00:00`|

### End Date Time

The [End Date Time][EndDateTime Property] to get the Time Period between.

Its text representation will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Input][] |
| Default Value | `($)EndDateTime` with [DateTimeOffset][] value that has a text representation of `0001-01-01T00:00:00+00:00`|

### Time Period

The [Time Period][TimePeriod Property] between the [Start Date Time][StartDateTime Property] and [End Date Time][EndDateTime Property].

[Time Period][TimePeriod Property] can have positive and negative components where components are:

* Years
* Months
* Days
* Hours
* Minutes
* Seconds
* Milliseconds

In this block, the Year and Month components are not used as they aren't constant (i.e. Years can have different numbers of days depending upon whether it is a leap year or not, and months can have different numbers of days); instead Days will be used.

[Time Period][TimePeriod Property] is calculated by subtracting [Start Date Time][StartDateTime Property] from [End Date Time][EndDateTime Property]; therefore if [Start Date Time][StartDateTime Property] is less than [End Date Time][EndDateTime Property], the [Time Period][TimePeriod Property] components will be positive, if it is equal they will be `0` and finally if it is greater than they will be negative.

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [TimePeriod][] |
| Property Type | [Output][] |
| Default Value | `($)TimePeriod` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Dates and Time

The default text representation of Date and Time will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information, please see [Working with Date and Time][].

### Years and Months components not used

In this block, the Year and Month components are not used as they aren't constant (i.e. Years can have different numbers of days depending upon whether it is a leap year or not, and months can have different numbers of days); instead Days will be used.

### Start Date Time greater than End Date Time

[Start Date Time][StartDateTime Property] can be greater than [End Date Time][EndDateTime Property]; if this is the case the components of the [Time Period][TimePeriod Property] will be negative.

[StartDateTime Property]: {{< ref "#start-date-time" >}}
[EndDateTime Property]: {{< ref "#end-date-time" >}}
[TimePeriod Property]: {{< ref "#time-period" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[ISO 8601 Standard]: {{< url "Cortex.Reference.Concepts.WorkingWithDateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Working with Date and Time]: {{< url "Cortex.Reference.Concepts.WorkingWithDateAndTime.MainDoc" >}}

[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[TimePeriod]: {{< url "Cortex.Reference.DataTypes.MostCommon.TimePeriod" >}}
