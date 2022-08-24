---
title: "Is Date Time After"
linkTitle: "Is Date Time After"
description: "Checks if a Date Time is after another Date Time."
---

{{< figure src="/blocks/date-and-time-is-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DateAndTime.IsDateTime.IsDateTimeAfterBlock)</p>

## Description

Checks if a [Date Time][DateTime Property] is after a given [Date Time To Compare][DateTimeToCompare Property].

## Examples

### Date Time is after Date Time To Compare

This example will check if `2022-01-01T00:00:00+00:00` is after `2021-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2022-01-01T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Date Time To Compare][DateTimeToCompare Property] | `($)DateTimeToCompare`, with value of [DateTimeOffset][] that has a text representation of `2021-01-01T00:00:00+00:00` | `($)DateTimeToCompare` is a variable of type [DateTimeOffset][] |
| [Date Time Is After][DateTimeIsAfter Property] | `($)DateTimeIsAfter`, with no value | `($)DateTime` is a variable that will be set to a [Boolean][] value |

#### Result

Checking if `2022-01-01T00:00:00+00:00` is after `2021-01-01T00:00:00+00:00` will result in the variable `($)DateTimeIsAfter` being updated to the following:

```json
true
```

***

### Date Time is before Date Time To Compare

This example will check if `2021-01-01T00:00:00+00:00` is after `2022-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-01-01T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Date Time To Compare][DateTimeToCompare Property] | `($)DateTimeToCompare`, with value of [DateTimeOffset][] that has a text representation of `2022-01-01T00:00:00+00:00` | `($)DateTimeToCompare` is a variable of type [DateTimeOffset][] |
| [Date Time Is After][DateTimeIsAfter Property] | `($)DateTimeIsAfter`, with no value | `($)DateTime` is a variable that will be set to a [Boolean][] value |

#### Result

Checking if `2021-01-01T00:00:00+00:00` is after `2022-01-01T00:00:00+00:00` will result in the variable `($)DateTimeIsAfter` being updated to the following:

```json
false
```

***

### Date Time is equal to Date Time To Compare

This example will check if `2022-01-01T00:00:00+00:00` is after `2022-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2022-01-01T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Date Time To Compare][DateTimeToCompare Property] | `($)DateTimeToCompare`, with value of [DateTimeOffset][] that has a text representation of `2022-01-01T00:00:00+00:00` | `($)DateTimeToCompare` is a variable of type [DateTimeOffset][] |
| [Date Time Is After][DateTimeIsAfter Property] | `($)DateTimeIsAfter`, with no value | `($)DateTime` is a variable that will be set to a [Boolean][] value |

#### Result

Checking if `2022-01-01T00:00:00+00:00` is after `2022-01-01T00:00:00+00:00` will result in the variable `($)DateTimeIsAfter` being updated to the following:

```json
false
```

***

## Properties

### Date Time

The [Date Time][DateTime Property] to check is after [Date Time To Compare][DateTimeToCompare Property].

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Input][] |
| Default Value | `($)DateTime` with [DateTimeOffset][] value that has a text representation of `0001-01-01T00:00:00+00:00`|

### Date Time To Compare

The Date Time to check if [Date Time][DateTime Property] is after.

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Input][] |
| Default Value | `($)DateTimeToCompare` with [DateTimeOffset][] value that has a text representation of `0001-01-01T00:00:00+00:00`|

### Date Time Is After

The result of the is after check.

If [Date Time][DateTime Property] is after [Date Time To Compare][DateTimeToCompare Property], the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)DateTimeIsAfter` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Dates and Time

The default text representation of Date and Time will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information, please see [Working with Date and Time][].

[DateTime Property]: {{< ref "#date-time" >}}
[DateTimeToCompare Property]: {{< ref "#date-time-to-compare" >}}
[DateTimeIsAfter Property]: {{< ref "#date-time-is-after" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[ISO 8601 Standard]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Working with Date and Time]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.MainDoc" >}}

[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
