---
title: "Wait For Duration"
linkTitle: "Wait For Duration"
description: "Waits for a specified time period (Years, Months, Days, Hours, Minutes, Seconds and Milliseconds)."
---

{{< figure src="/blocks/schedules-wait-for-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

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
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | Years: `0` <br /> Months: `0` <br /> Days: `0` <br /> Hours: `0` <br /> Minutes: `0` <br /> Seconds: `0` <br /> Milliseconds: `0`|

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentOutOfRangeException][] | Thrown when any of the values or the sum of components of [Duration][Duration Property] are out of range. |
| [PropertyValueOutOfRangeException][] | Thrown when [Duration][Duration Property] is negative (i.e. the sum of the components of [Duration][Duration Property] is less than `0` milliseconds). |

## Remarks

No remarks for the block.

[Duration Property]: {{< ref "#duration" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[ArgumentOutOfRangeException]: {{< url "MSDocs.DotNet.Api.System.ArgumentOutOfRangeException" >}}

[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[TimePeriod]: {{< url "Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
