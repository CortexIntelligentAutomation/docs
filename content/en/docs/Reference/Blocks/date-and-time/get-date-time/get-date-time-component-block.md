---
title: "Get Date Time Component"
linkTitle: "Get Date Time Component"
description: "Gets a component (e.g. Year, Month, Day) of a specified Date Time."
---

{{< figure src="/blocks/date-and-time-get-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.DateAndTime.GetDateTime.GetDateTimeComponentBlock)</p>

## Description

Gets a [Component][Component Property] (e.g. Year, Month, Day) of the specified [Date Time][DateTime Property].

[Component Type][ComponentType Property] is used to specify which type of component to get.

For more information about values that can be specified for [Component Type][ComponentType Property], please see [DateTimeComponentType][] or the [examples][] below.

## Examples

### LocalDateTime

This example will get the LocalDateTime of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

In this example assume that the local date and time is in the GMT time zone.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T00:05:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.LocalDateTime` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the LocalDateTime (GMT) of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to a [DateTime][] value. Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2021-12-31T10:00:00+00:00"
```

***

### UtcDateTime

This example will get the UTCDateTime of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.UtcDateTime` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the UTCDateTime of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to a [DateTime][] value. Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2021-12-31T10:00:00Z"
```

***

### Date

This example will get the Date component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.Date` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the Date component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to a [DateTime][] value. Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2021-12-31T00:00:00"
```

***

### Time

This example will get the Time component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.Time` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the Time component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to the following [TimePeriod][] value:

```json
{
  "Years": 0,
  "Months": 0,
  "Days": 0,
  "Hours": 5,
  "Minutes": 0,
  "Seconds": 0,
  "Milliseconds": 0
}
```

### Year

This example will get the Year component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.Year` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the Year component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to the following [Int32][] value:

```json
2021
```

***

### Month

This example will get the Month component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.Month` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the Month component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to the following [Int32][] value:

```json
12
```

### Day

This example will get the Day component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.Day` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the Day component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to the following [Int32][] value:

```json
31
```

### Hour

This example will get the Hour component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.Hour` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the Hour component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to the following [Int32][] value:

```json
5
```

***

### Minute

This example will get the Minute component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.Minute` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the Minute component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to the following [Int32][] value:

```json
0
```

***

### Second

This example will get the Second component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.Second` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the Second component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to the following [Int32][] value:

```json
0
```

***

### Millisecond

This example will get the Millisecond component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.Millisecond` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the Millisecond component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to the following [Int32][] value:

```json
0
```

***

### Offset

This example will get the Offset component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.Offset` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the Offset component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to the following [TimeSpan][] value with the following text representation:

```json
"-5:00:00"
```

***

### DayOfYear

This example will get the DayOfYear component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.DayOfYear` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the DayOfYear component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to the following [Int32][] value:

```json
365
```

***

### DayOfWeek

This example will get the DayOfWeek component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T05:00:00-05:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Component Type][ComponentType Property] | `($)ComponentType`, with value of `DateTimeComponentType.DayOfWeek` | `($)DateTime` is a variable of type [DateTimeComponentType][] |
| [Component][Component Property] | `($)Component`, with no value | `($)Component` is a variable that will be set to a [dynamic][] value |

#### Result

Getting the DayOfWeek component of a Date Time representing 5am on 31st December 2021 (with `-5` UTC time offset), will result in the variable `($)Component` being updated to the following [DayOfWeek][] value:

```json
DayOfWeek.Friday
```

***

## Properties

### Date Time

The [Date Time][DateTime Property] to get the specified [Component Type][ComponentType Property] from.

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Input][] |
| Default Value | `($)DateTime` with [DateTimeOffset][] value that has a text representation of `0001-01-01T00:00:00+00:00`|

### Component Type

The [Component Type][ComponentType Property] to get from the [Date Time][DateTime Property].

For more information about values that can be specified for [Component Type][ComponentType Property], please see [DateTimeComponentType][] or the [examples][] above.

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeComponentType][] |
| Property Type | [Input][] |
| Default Value | `($)ComponentType` with value `DateTimeComponentType.LocalDateTime` |

### Component

The [Component][Component Property] from the [Date Time][DateTime Property].

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Property Type | [Output][] |
| Default Value | `($)Component` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Component Type][ComponentType Property] is not one of the specified [DateTimeComponentType][] types (e.g. `(DateTimeComponentType)100`). |

## Remarks

### Dates and Time

The default text representation of Date and Time will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information, please see [Working with Date and Time][].

### Why does the Component property return a dynamic data type?

The decision for [Component][Component Property] to return a [dynamic data type][dynamic] rather than an [Object][], was to avoid users having to [cast][Object Casting] the component to its correct type to be able to use all of its properties.

As a result, any issues with using the [Component][Component Property] (i.e. trying to access a property it does not have) will not be reported as messages when trying to debug the flow; they will only be discovered when the flow execution reaches the part of the flow with the issue.

If it is desirable to have any issues reported as messages when trying to debug the flow, the user can [cast][Object Casting] the variable specified for [Component][Component Property] to its correct type when using it (e.g. for UtcDateTime component it could be case as follows: `(DateTime)($)Component`).

[DateTime Property]: {{< ref "#date-time" >}}
[ComponentType Property]: {{< ref "#component-type" >}}
[Component Property]: {{< ref "#component" >}}
[Examples]: {{< ref "#examples" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}

[ISO 8601 Standard]: {{< url "Cortex.Reference.Concepts.WorkingWithDateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Working with Date and Time]: {{< url "Cortex.Reference.Concepts.WorkingWithDateAndTime.MainDoc" >}}
[Object Casting]: {{< url "Cortex.Reference.Concepts.ObjectCasting.MainDoc" >}}

[Object]: {{< url "Cortex.Reference.DataTypes.All.Object.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[DateTime]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[DateTimeComponentType]: {{< url "Cortex.Reference.DataTypes.MostCommon.DateTimeComponentType" >}}
[TimePeriod]: {{< url "Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
[TimeSpan]: {{< url "Cortex.Reference.DataTypes.DateAndTime.TimeSpan.MainDoc" >}}
[DayOfWeek]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DayOfWeek.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
