---
title: "Wait For Duration"
linkTitle: "Wait For Duration"
description: "Waits for a specified time period (Years, Months, Days, Hours, Minutes, Seconds and Milliseconds)."
---

![Icon](/blocks/schedules-wait-for-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Schedules.WaitFor.WaitForDurationBlock)</p>

## Description

Waits for a specified [Duration][Duration Property].

## Examples

### Wait for duration

This example will wait for `30` seconds.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Duration][Duration Property] | `($)Duration`, with value of `{"Years": 0, "Months": 0, "Days": 0, "Hours": 0, "Minutes": 0, "Seconds": 30, "Milliseconds": 0}` | `($)Duration` is a variable of type [TimePeriod][] |

#### Result

The block will wait for `30` seconds before completing, at which stage the flow execution will proceed to the next block.

***

## Properties

### Duration

The [Duration][Duration Property] to wait for.

[Duration][Duration Property] can have positive and negative components where components are:

* Years
* Months
* Days
* Hours
* Minutes
* Seconds
* Milliseconds

When waiting for [Duration][Duration Property], the block will calculate the date time to wait until by adding the [Duration][Duration Property] to the current date time. It will first add years, followed by months, days, hours, minutes, seconds and finally milliseconds.

When adding months, if the current day component is greater than the last day in the resultant month, it will update the day to the last day for that month (e.g. adding one month onto `2021-01-31T23:59:59+00:00` will equate to `2021-02-28T23:59:59+00:00`).

| | |
|--------------------|---------------------------|
| Data Type | [TimePeriod][] |
| Property Type | [Input][] |
| Default Value | `($)Duration` with value `{"Years": 0, "Months": 0, "Days": 0, "Hours": 0, "Minutes": 0, "Seconds": 0, "Milliseconds": 0}` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyValueOutOfRangeException][] | Thrown when [Duration][Duration Property] is negative (i.e. the sum of the components of [Duration][Duration Property] is less than `0`), or any component (i.e. `Years`, `Months`, `Days`, `Hours`, `Minutes`, `Seconds` or `Milliseconds`) is greater than `2147483647`. |

## Remarks

No remarks for the block.

[Duration Property]: {{< ref "#duration" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[TimePeriod]: {{< url "Cortex.Reference.DataTypes.MostCommon.TimePeriod" >}}
