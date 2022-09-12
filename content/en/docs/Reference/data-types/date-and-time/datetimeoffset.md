---
title: "DateTimeOffset"
linkTitle: "DateTimeOffset"
description: "Used to represent a date and time between `00:00:00.0000000 UTC, January 1, 0001` and `23:59:59.9999999 UTC, December 31, 9999`, in the Gregorian calendar, along with a UTC time offset."
---

# {{% param title %}}

<p class="namespace">(System.DateTimeOffset)</p>

## Summary

The `DateTimeOffset` data type is used to represent a date and time between `00:00:00.0000000 UTC, January 1, 0001` and `23:59:59.9999999 UTC, December 31, 9999`, in the Gregorian calendar, along with a UTC time offset.

| | |
|-|-|
| **Category:**          | Date & Time                                                  |
| **Name:**              | `DateTimeOffset`                                              |
| **Full Name:**         | `System.DateTimeOffset`                                       |
| **Alias:**             | N/A                                                           |
| **Description:**       | A date and time between `00:00:00.0000000 UTC, January 1, 0001` and `23:59:59.9999999 UTC, December 31, 9999`, in the Gregorian calendar, along with a UTC time offset. |
| **Size:**              | Varies, typically `12` to `16` bytes                          |
| **Default Value:**     | `0001-01-01T00:00:00+00:00` (i.e. [DateTimeOffset.MinValue][])|
| **Can be used as:**    | `Object`, `dynamic`                                           |
| **Can be cast to:**    | N/A |

## Remarks

### Create a DateTimeOffset

The following table shows some of the ways that a `DateTimeOffset` can be created.

All examples are for a system configured with British [culture][] (i.e. `en-GB`), and use a local time of `2PM 1st of July 2022` with `1` hour UTC offset, honouring British Summer Time (BST).

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `DateTimeOffset.Now` | `DateTimeOffset.Now` | `2022-07-01T14:00:00.0000000+01:00` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer, with the offset set to the local time's offset from Coordinated Universal Time (UTC). See [DateTimeOffset.Now][]. |
| Use `DateTimeOffset.UtcNow` | `DateTimeOffset.UtcNow` | `2022-07-01T13:00:00.0000000+00:00` | Expression | The result shown is an example result. The actual result will show the current Coordinated Universal Time (UTC) date and time and whose offset is Zero. See [DateTimeOffset.UtcNow][]. |
| [Implicit Casting][] of [DateTime][] | `DateTime.UtcNow` | `2022-07-01T13:00:00.0000000+00:00` | Expression | The result shown is an example result. The actual result will show the current Coordinated Universal Time (UTC) date and time and whose offset is Zero. |
| Use `DateTimeOffset.Parse`| `DateTimeOffset.Parse("1/7/2022 2:00:00 PM +1:00")` | `2022-07-01T14:00:00+01:00` | Expression | Parses a date string and converts it to a `DateTimeOffset` using the [current culture][] of the system. In this example it parses `"1/7/2022 2:00:00 PM +1:00"` using `en-GB` [culture][] and converts it to `2022-07-01T14:00:00+01:00`. See [DateTimeOffset.Parse][] |
| Use a `DateTimeOffset` constructor | `new DateTimeOffset(2022, 7, 1, 14, 0, 0, 0, new TimeSpan(1, 0, 0))`    | `2022-07-01T14:00:00+01:00` | Expression | `2PM 1st July 2022` with `1` hour UTC offset, honouring British Summer Time (BST). See [DateTimeOffset Constructors][]. |
| Use `Convert Text To DateTime` block | where `Text` property has a value of `"1/7/2022 2:00:00 PM +1:00"` | `2022-07-01T14:00:00+01:00` | Expression | Parses a date string and converts it to a `DateTimeOffset`. See [Convert Text To DateTime][] |

Please see [Instantiating a DateTimeOffset object][] for further information.

A `DateTimeOffset` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Notes |
|-|-|-|
| `Year`        | `Int32`   | The year expressed as an [Int32][] value between `1` and `9999`.      |
| `Month`       | `Int32`   | The month expressed as an [Int32][] value between `1` and `12`.       |
| `Day`         | `Int32`   | The day expressed as an [Int32][] value between `1` and the number of days in `Month`. |
| `Hour`        | `Int32`   | The hour expressed as an [Int32][] value between `0` and `23`.        |
| `Minute`      | `Int32`   | The minute expressed as an [Int32][] value between `0` and `59`.      |
| `Second`      | `Int32`   | The second expressed as an [Int32][] value between `0` and `59`.      |
| `Millisecond` | `Int32`   | The millisecond expressed as an [Int32][] value between `0` and `999`.|
| `Offset`      | `TimeSpan`| The UTC Offset expressed as a [TimeSpan][] value between `-14` hours and `14` hours. This is calculated as the sum of `Offset.Days + Offset.Hours + Offset.Minutes + Offset.Seconds + Offset.Milliseconds`. If the value is outside `-14` hours and `14` hours an [InvalidPropertyValueException][] will be thrown. |

### Convert DateTimeOffset to Text

The following table shows some of the ways that a `DateTimeOffset` can be converted to text.

All examples are for a system configured with British [culture][] (i.e. `en-GB`), and use a local time of `2PM 1st of July 2022` with `1` hour UTC offset, honouring British Summer Time (BST).

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `DateTimeOffset.UtcNow.ToString()` | `"1/7/2022 1:00:00 PM +00:00"` | Expression | The result shown is an example result. The actual result will show the current Coordinated Universal Time (UTC) date and time and whose offset is Zero converted to text. Both the example and actual result will use the [short date pattern][StandardFormatTemplates] for the [current culture][], the [long time pattern][StandardFormatTemplates] for the [current culture][], and the `zzz` [custom format string][CustomFormatTemplates], with each element separated from the previous element by a space. See [DateTimeOffset.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(DateTimeOffset.UtcNow)` | `"1/7/2022 1:00:00 PM +00:00"` | Expression | The result shown is an example result. The actual result will show the current Coordinated Universal Time (UTC) date and time and whose offset is Zero converted to text. Both the example and actual result will use the [short date pattern][StandardFormatTemplates] for the [current culture][], the [long time pattern][StandardFormatTemplates] for the [current culture][], and the `zzz` [custom format string][CustomFormatTemplates], with each element separated from the previous element by a space. See [Convert.ToString][] |
| Use `Convert DateTime To Text` block | where `Date Time` property has a value of `DateTimeOffset.UtcNow` | `"2022-07-01T13:00:00.0000000+00:00"` | Expression | The result shown is an example result. The actual result will show the current Coordinated Universal Time (UTC) date and time and whose offset is Zero converted to text. Both the example and actual result will use [ISO 8601 Standard][] format for `DateTimeOffset` (i.e. `yyyy-MM-ddTHH:mm:ss.fffffffzzz`). See [Convert DateTime To Text][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `DateTimeOffset.UtcNow` | `"1/7/2022 1:00:00 PM +00:00"` | Expression | The result shown is an example result. The actual result will show the current Coordinated Universal Time (UTC) date and time and whose offset is Zero converted to text. Both the example and actual result will use the [short date pattern][StandardFormatTemplates] for the [current culture][], the [long time pattern][StandardFormatTemplates] for the [current culture][], and the `zzz` [custom format string][CustomFormatTemplates], with each element separated from the previous element by a space. See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `DateTimeOffset.UtcNow` | `"\"2022-07-01T13:00:00.0000000+00:00\""` | Expression | The result shown is an example result. The actual result will show the current Coordinated Universal Time (UTC) date and time and whose offset is Zero converted to text. Both the example and actual result will use  [ISO 8601 Standard][] format for `DateTimeOffset` (i.e. `yyyy-MM-ddTHH:mm:ss.fffffffzzz`). See [Convert Object To Json][] |

Please see [Date and Time Formatting][] for further information on formatting `DateTimeOffset` values, including how [Operating System Settings][] can affect the [current culture][].

### Convert DateTimeOffset to a DateTime

The following table shows some of the ways that a `DateTimeOffset` can be converted to a `DateTime`.

All examples are for a system configured with British [culture][] (i.e. `en-GB`), and use a local time of `2PM 1st of July 2022` with `1` hour UTC offset, honouring British Summer Time (BST).

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `DateTimeOffset.DateTime` | `DateTimeOffset.UtcNow.DateTime` | `2022-07-01T13:00:00.0000000` | Expression | Converts `DateTimeOffset.UtcNow` to a `DateTime` using the date and time components, but not the offset. See [DateTimeOffset.DateTime][] |
| Use `DateTimeOffset.LocalDateTime` | `DateTimeOffset.UtcNow.LocalDateTime` | `2022-07-01T14:00:00.0000000+01:00` | Expression | Converts `DateTimeOffset.UtcNow` to a `DateTime` relative to the local time. See [DateTimeOffset.LocalDateTime][] |
| Use `DateTimeOffset.UtcDateTime` | `DateTimeOffset.UtcNow.UtcDateTime` | `2022-07-01T13:00:00.0000000Z` | Expression | Converts `DateTimeOffset.UtcNow` to a `DateTime` relative to Coordinated Universal Time (UTC). See [DateTimeOffset.UtcDateTime][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `DateTimeOffset`.
* The Literal Editor is available for [Input][] properties where the data type is `DateTimeOffset`.
  * Expression syntax is not supported within the Literal Editor for the `DateTimeOffset` data type.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `DateTimeOffset`.

### Known Limitations

None

## See Also

### Related Data Types

* [DateTime][]
* [TimeSpan][]

### Related Concepts

* [Working with Date and Time][]
* [Implicit Casting][]
* [Culture][]

### External Documentation

* [System.DateTimeOffset][]

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Convert.ToString]: {{< url "MSDocs.DotNet.Api.System.Convert.ToString" >}}

[Instantiating a DateTimeOffset object]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.InstantiatingADateTimeOffsetObject" >}}
[Formatting enumeration values]: {{< url "MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}

[Convert Text To DateTime]: {{< url "Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertTextToDateTime.MainDoc" >}}
[Convert DateTime To Text]: {{< url "Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertDateTimeToText.MainDoc" >}}
[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[System.DateTimeOffset]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.MainDoc" >}}
[DateTimeOffset Constructors]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.Ctors" >}}
[DateTimeOffset.MinValue]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.MinValue" >}}
[DateTimeOffset.Parse]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.Parse" >}}
[DateTimeOffset.Now]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.Now" >}}
[DateTimeOffset.UtcNow]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.UtcNow" >}}
[DateTimeOffset.DateTime]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.DateTime" >}}
[DateTimeOffset.LocalDateTime]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.LocalDateTime" >}}
[DateTimeOffset.UtcDateTime]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.UtcDateTime" >}}
[DateTimeOffset.ToString]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.ToString" >}}

[Date and Time Formatting]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.MainDoc" >}}
[StandardFormatTemplates]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.StandardFormatTemplates" >}}
[CustomFormatTemplates]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.CustomFormatTemplates" >}}
[ISO 8601 Standard]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Operating System Settings]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.OperatingSystemSettings" >}}

[DateTime]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[TimeSpan]: {{< url "Cortex.Reference.DataTypes.DateAndTime.TimeSpan.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Working with Date and Time]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.MainDoc" >}}

[Culture]: {{< url "Cortex.Reference.Concepts.WorkingWith.Culture.MainDoc" >}}
[Current Culture]: {{< url "Cortex.Reference.Concepts.WorkingWith.Culture.CurrentCulture.MainDoc" >}}

[Implicit Casting]: {{< url "Cortex.Reference.Concepts.WorkingWith.Datatypes.ObjectCasting.ImplicitCast" >}}

[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
