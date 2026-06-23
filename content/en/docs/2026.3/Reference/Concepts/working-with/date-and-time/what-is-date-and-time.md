---
title: "What is Date and Time?"
linkTitle: "What is Date and Time?"
description: "Overview of date and time data types in CORTEX, including DateTime, DateTimeOffset, TimeSpan, and TimePeriod, and how to work with them in flows and blocks."
weight: 1
---

# {{% param title %}}

## Summary

Date and time values in {{% ctx %}} are represented by several related data types. Most date and time blocks work with [DateTimeOffset][] values that include a UTC offset. Intervals and durations use [TimeSpan][] or the {{% ctx %}}-specific [TimePeriod][] type. Supporting [enum][] types such as [DayOfWeek][] and [DateTimeComponentType][] are used when extracting or comparing parts of a date and time.

How dates and times are formatted, parsed, and compared depends on [culture][Culture] settings. For format patterns and providers, see [Date and Time Formatting][].

| Data type | Full name | Purpose | More information |
| --- | --- | --- | --- |
| [DateTimeOffset][] | `System.DateTimeOffset` | A calendar date and time with an explicit UTC offset | Preferred type for date and time blocks |
| [DateTime][] | `System.DateTime` | A calendar date and time without a stored UTC offset | [Implicitly cast][Implicit Casting] to `DateTimeOffset` where required |
| [TimePeriod][] | `Cortex.DataTypes.DateAndTime.TimePeriod` | A calendar-aware interval (years through milliseconds) | Used by add/subtract time period blocks |
| [TimeSpan][] | `System.TimeSpan` | A fixed elapsed interval (days through milliseconds) | Automatically converted to `TimePeriod` where required |
| [DayOfWeek][] | `System.DayOfWeek` | A day of the week (`Sunday` through `Saturday`) | [Enum][enum] used with date components |
| [DateTimeComponentType][] | `Cortex.DataTypes.DateAndTime.DateTimeComponentType` | Identifies a component of a date and time (for example `Year`, `Month`, `Day`) | Used by [Get Date Time Component][] |

## DateTime and DateTimeOffset

Both [DateTime][] and [DateTimeOffset][] represent a date and time in the Gregorian calendar between `0001-01-01` and `9999-12-31`. The difference is whether a UTC offset is stored with the value.

| | [DateTime][] | [DateTimeOffset][] |
| --- | --- | --- |
| **UTC offset** | Not stored as part of the value | Stored as part of the value (for example `+01:00`) |
| **Typical use** | Legacy .NET APIs, or when the offset is implied by context | Storing and comparing instants that may fall in different offsets |
| **In {{% ctx %}} blocks** | Accepted where a date and time is expected; converted when needed | Primary type for date and time block properties |
| **Text in blocks** | Converted using [ISO 8601 Standard][] when output by date and time blocks | [ISO 8601 Standard][] (for example `2021-11-05T08:48:08.0307614+00:00`) |

A [DateTime][] value can be used wherever a [DateTimeOffset][] is expected and will be [implicitly cast][Implicit Casting]. When a `DateTime` is converted to a `DateTimeOffset`, the offset applied depends on how the `DateTime` was created (for example `DateTime.UtcNow` uses a zero offset, while `DateTime.Now` uses the local offset of the server).

### When to use each type

* Prefer [DateTimeOffset][] when working with date and time blocks, comparing values across offsets, or when the offset must be preserved in persisted or exchanged data.
* Use [DateTime][] when calling .NET APIs that expect `DateTime`, or when only the calendar date and clock time matter and the offset is handled separately. Be aware that comparisons and arithmetic without an explicit offset can be ambiguous.

For creation, conversion, and formatting examples, see the [DateTime][] and [DateTimeOffset][] data type pages.

## TimeSpan and TimePeriod

Both [TimeSpan][] and [TimePeriod][] represent a length of time, but they model different kinds of intervals.

| | [TimeSpan][] | [TimePeriod][] |
| --- | --- | --- |
| **Source** | .NET (`System.TimeSpan`) | {{% ctx %}} (`Cortex.DataTypes.DateAndTime.TimePeriod`) |
| **Components** | Days, hours, minutes, seconds, milliseconds | Years, months, days, hours, minutes, seconds, milliseconds |
| **Calendar awareness** | Fixed duration only (no years or months) | Supports calendar units (years and months) |
| **In {{% ctx %}}** | Used for fixed elapsed time; converted to `TimePeriod` where a block expects it | Used by [Add Time Period][], [Subtract Time Period][], [Get Time Period Between Date Times][], and [Wait For Duration][] |

A [TimeSpan][] can be supplied wherever a [TimePeriod][] is expected and will be converted automatically. The conversion maps the `TimeSpan` day, hour, minute, second, and millisecond components into the corresponding `TimePeriod` fields; year and month components remain at their default of `0`.

### When to use each type

* Use [TimePeriod][] when adding or subtracting **years** or **months** from a date and time, or when you need the structured year/month/day/hour/minute/second/millisecond components used by date and time blocks.
* Use [TimeSpan][] for a **fixed elapsed duration** (for example the UTC offset on a [DateTimeOffset][] literal, or a duration expressed only in days and smaller units). For elapsed time between two instants without calendar months or years, [Get Time Period Between Date Times][] returns a `TimePeriod` measured in days and smaller units only (year and month components are not used because their length varies).

When [Add Time Period][] or [Subtract Time Period][] adds months, if the day of the month exceeds the last day of the resultant month, the day is adjusted to the last valid day (for example adding one month to `2021-01-31` yields `2021-02-28`).

## UTC offsets, time zones, and daylight saving

[DateTimeOffset][] stores a **UTC offset** (the difference from Coordinated Universal Time), not a **time zone** identifier (such as `Europe/London`). {{% ctx %}} date and time blocks work with offsets and do not resolve time zone rules.

* Blocks can create, compare, and adjust date and time values that include an offset.
* Blocks do **not** apply time zone or daylight saving time (DST) rules. [Add Time Period][] and [Subtract Time Period][] adjust by offset but cannot account for DST transitions, because those depend on a time zone definition rather than a fixed offset.
* For consistent behaviour across servers, use explicit offsets or UTC (`DateTimeOffset.UtcNow`) rather than assuming the server's local time zone matches end-user expectations. See also [Current Culture][] and [Operating System Settings][].

If flows must reflect a specific regional time zone (including DST), convert to and from UTC using an explicit offset or an external time zone library in an expression; do not rely on date and time blocks alone to infer time zone rules.

## Formatting and parsing

Text representation of date and time values depends on [culture][Culture] and format templates. Common cases include:

* Date and time blocks default to [ISO 8601 Standard][] text for `DateTimeOffset` output.
* [Convert Text To DateTime][] and [Convert Date Time To Text][] accept optional format template and format provider properties.
* Parsing and formatting without an explicit provider typically follow [Invariant Culture][] rules in blocks; expressions using `DateTime.Parse` or `ToString()` follow the [Current Culture][] of the server unless a [CultureInfo][] is supplied.

See [Date and Time Formatting][] for standard and custom format templates, format specifiers, and the effect of operating system regional settings.

## Working with date and time in blocks

Date and time blocks are grouped under [Date & Time blocks][]. Typical operations include:

| Operation | Blocks |
| --- | --- |
| Get current date and time | [Get Current Date Time][] |
| Read a component (year, month, day, and so on) | [Get Date Time Component][] |
| Compare two date and times | [Is Date Time Equal][], [Is Date Time Before][], [Is Date Time After][], [Is Date Time Between][] |
| Add or subtract an interval | [Add Time Period][], [Subtract Time Period][] |
| Elapsed time between two date and times | [Get Time Period Between Date Times][] |
| Convert to or from text | [Convert Text To DateTime][], [Convert Date Time To Text][] |

Most of these blocks use [DateTimeOffset][] for date and time properties and [TimePeriod][] for interval properties. See each block's remarks for defaults, exceptions, and edge cases.

## Remarks

### Known Limitations

* Date and time blocks do not resolve **time zone** or **daylight saving time** rules; only UTC **offsets** stored on [DateTimeOffset][] values are used.
* [Get Time Period Between Date Times][] does not populate year or month components in the result, because calendar years and months have variable lengths.
* [DateTime][] values without a clear offset context can produce unexpected results when [implicitly cast][Implicit Casting] to [DateTimeOffset][] or compared across servers with different regional settings.
* Formatting and parsing depend on cultures installed on the server; see [Culture][] and [Date and Time Formatting][].

## See Also

### Related Concepts

* [Date and Time Formatting][] — standard and custom format templates, ISO 8601, and operating system settings
* [Culture][] — how regional settings affect date and time format and parse patterns
* [Implicit Casting][] — automatic conversion from [DateTime][] to [DateTimeOffset][]
* [Working with Enums][] — [DayOfWeek][] and [DateTimeComponentType][]

### Related Data Types

* [DateTime][]
* [DateTimeOffset][]
* [TimeSpan][]
* [TimePeriod][]
* [DayOfWeek][]
* [DateTimeComponentType][]

### Related Blocks

* [Get Current Date Time][]
* [Get Date Time Component][]
* [Is Date Time Equal][]
* [Is Date Time Before][]
* [Is Date Time After][]
* [Is Date Time Between][]
* [Add Time Period][]
* [Subtract Time Period][]
* [Get Time Period Between Date Times][]
* [Convert Text To DateTime][]
* [Convert Date Time To Text][]

### External Documentation

* [System.DateTime][]
* [System.DateTimeOffset][]
* [System.TimeSpan][]
* [Date and time values and their use in .NET](https://learn.microsoft.com/en-us/dotnet/standard/datetime/)
* [Choosing between DateTime, DateTimeOffset, TimeSpan, and DateOnly](https://learn.microsoft.com/en-us/dotnet/standard/datetime/choosing-between-datetime)
* [Standard date and time format strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
* [Custom date and time format strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
* [Parsing dates and times in .NET](https://learn.microsoft.com/en-us/dotnet/standard/base-types/parsing-datetime)

[Date & Time blocks]: {{< ref "../../../Blocks/date-and-time/_index.md" >}}

[Get Current Date Time]: {{< ref "../../../Blocks/date-and-time/get-date-time/get-current-date-time-block.md" >}}
[Get Date Time Component]: {{< ref "../../../Blocks/date-and-time/get-date-time/get-date-time-component-block.md" >}}
[Is Date Time Equal]: {{< ref "../../../Blocks/date-and-time/is-date-time/is-date-time-equal-block.md" >}}
[Is Date Time Before]: {{< ref "../../../Blocks/date-and-time/is-date-time/is-date-time-before-block.md" >}}
[Is Date Time After]: {{< ref "../../../Blocks/date-and-time/is-date-time/is-date-time-after-block.md" >}}
[Is Date Time Between]: {{< ref "../../../Blocks/date-and-time/is-date-time/is-date-time-between-block.md" >}}
[Add Time Period]: {{< url path="Cortex.Reference.Blocks.DateAndTime.AddTimePeriod.AddTimePeriod.MainDoc" >}}
[Subtract Time Period]: {{< url path="Cortex.Reference.Blocks.DateAndTime.SubtractTimePeriod.SubtractTimePeriod.MainDoc" >}}
[Get Time Period Between Date Times]: {{< ref "../../../Blocks/date-and-time/get-time-period/get-time-period-between-date-times-block.md" >}}
[Convert Text To DateTime]: {{< url path="Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertTextToDateTime.MainDoc" >}}
[Convert Date Time To Text]: {{< url path="Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertDateTimeToText.MainDoc" >}}
[Wait For Duration]: {{< url path="Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}

[DateTime]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[TimeSpan]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimeSpan.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
[DayOfWeek]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DayOfWeek.MainDoc" >}}
[DateTimeComponentType]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeComponentType.MainDoc" >}}

[Date and Time Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.MainDoc" >}}
[ISO 8601 Standard]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Operating System Settings]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.OperatingSystemSettings" >}}

[Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.MainDoc" >}}
[Current Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.CurrentCulture.MainDoc" >}}
[Invariant Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[CultureInfo]: {{< url path="Cortex.Reference.DataTypes.Text.CultureInfo.MainDoc" >}}

[Implicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ImplicitCast" >}}
[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[enum]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}

[System.DateTime]: {{< url path="MSDocs.DotNet.Api.System.DateTime.MainDoc" >}}
[System.DateTimeOffset]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.MainDoc" >}}
[System.TimeSpan]: {{< url path="MSDocs.DotNet.Api.System.TimeSpan.MainDoc" >}}
