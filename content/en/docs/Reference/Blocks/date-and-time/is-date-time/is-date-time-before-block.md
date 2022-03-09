---
title: "Is Date Time Before"
linkTitle: "Is Date Time Before"
description: "Checks if a Date Time is before another Date Time."
---

{{< figure src="/blocks/date-and-time-is-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.DateAndTime.IsDateTime.IsDateTimeBeforeBlock)</p>

## Description

Checks if a [Date Time][DateTime Property] is before a given [Date Time To Compare][DateTimeToCompare Property].

## Examples

### Date Time is before Date Time To Compare

This example will check if `2021-01-01T00:00:00+00:00` is before `2022-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-01-01T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Date Time To Compare][DateTimeToCompare Property] | `($)DateTimeToCompare`, with value of [DateTimeOffset][] that has a text representation of `2022-01-01T00:00:00+00:00` | `($)DateTimeToCompare` is a variable of type [DateTimeOffset][] |
| [Date Time Is Before][DateTimeIsBefore Property] | `($)DateTimeIsBefore`, with no value | `($)DateTime` is a variable that will be set to a [Boolean][] value |

#### Result

Checking if `2021-01-01T00:00:00+00:00` is before `2022-01-01T00:00:00+00:00` will result in the variable `($)DateTimeIsBefore` being updated to the following:

```json
true
```

***

### Date Time is after Date Time To Compare

This example will check if `2022-01-01T00:00:00+00:00` is before `2021-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2022-01-01T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Date Time To Compare][DateTimeToCompare Property] | `($)DateTimeToCompare`, with value of [DateTimeOffset][] that has a text representation of `2021-01-01T00:00:00+00:00` | `($)DateTimeToCompare` is a variable of type [DateTimeOffset][] |
| [Date Time Is Before][DateTimeIsBefore Property] | `($)DateTimeIsBefore`, with no value | `($)DateTime` is a variable that will be set to a [Boolean][] value |

#### Result

Checking if `2022-01-01T00:00:00+00:00` is before `2021-01-01T00:00:00+00:00` will result in the variable `($)DateTimeIsBefore` being updated to the following:

```json
false
```

***

### Date Time is equal to Date Time To Compare

This example will check if `2022-01-01T00:00:00+00:00` is before `2022-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2022-01-01T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Date Time To Compare][DateTimeToCompare Property] | `($)DateTimeToCompare`, with value of [DateTimeOffset][] that has a text representation of `2022-01-01T00:00:00+00:00` | `($)DateTimeToCompare` is a variable of type [DateTimeOffset][] |
| [Date Time Is Before][DateTimeIsBefore Property] | `($)DateTimeIsBefore`, with no value | `($)DateTime` is a variable that will be set to a [Boolean][] value |

#### Result

Checking if `2022-01-01T00:00:00+00:00` is before `2022-01-01T00:00:00+00:00` will result in the variable `($)DateTimeIsBefore` being updated to the following:

```json
false
```

***

## Properties

### Date Time

The [Date Time][DateTime Property] to check is before [Date Time To Compare][DateTimeToCompare Property].

For more information about Date and Time, please see [Working with Dates and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Input][] |
| Default Value | `($)DateTime` with [DateTimeOffset][] value that has a text representation of `0001-01-01T00:00:00+00:00`|

### Date Time To Compare

The Date Time to check if [Date Time][DateTime Property] is before.

For more information about Date and Time, please see [Working with Dates and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Input][] |
| Default Value | `($)DateTimeToCompare` with [DateTimeOffset][] value that has a text representation of `0001-01-01T00:00:00+00:00`|

### Date Time Is Before

The result of the is before check.

If [Date Time][DateTime Property] is before [Date Time To Compare][DateTimeToCompare Property], the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Default Value | `($)DateTimeIsBefore` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Dates and Time

The default text representation of Date and Time will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information, please see [Working with Dates and Time][].

[DateTime Property]: {{< ref "#date-time" >}}
[DateTimeToCompare Property]: {{< ref "#date-time-to-compare" >}}
[DateTimeIsBefore Property]: {{< ref "#date-time-is-before" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[ISO 8601 Standard]: {{< url "Cortex.Reference.Concepts.ISO8601Standard.MainDoc" >}}
[Working with Dates and Time]: {{< url "Cortex.Reference.Concepts.WorkingWithDatesAndTime.MainDoc" >}}

[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.MostCommon.DateTimeOffset" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.Boolean" >}}
