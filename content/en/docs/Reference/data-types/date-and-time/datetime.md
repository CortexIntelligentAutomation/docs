---
title: "DateTime"
linkTitle: "DateTime"
description: "Used to represent a date and time between `00:00:00.0000000 UTC, January 1, 0001` and `23:59:59.9999999 UTC, December 31, 9999`, in the Gregorian calendar. It can be used wherever a `DateTimeOffset` is expected, and will be implicitly cast."
---

# {{< param title >}}

<p class="namespace">(System.DateTime)</p>

## Summary

The `DateTime` data type is used to represent a date and time between `00:00:00.0000000 UTC, January 1, 0001` and `23:59:59.9999999 UTC, December 31, 9999`, in the Gregorian calendar. It can be used wherever a [DateTimeOffset][] is expected, and will be [implicitly cast][Implicit Casting].

| | |
|-|-|
| **Category:**          | Date & Time                                                   |
| **Name:**              | `DateTime`                                                    |
| **Full Name:**         | `System.DateTime`                                             |
| **Alias:**             | N/A                                                           |
| **Description:**       | A date and time between `00:00:00.0000000 UTC, January 1, 0001` and `23:59:59.9999999 UTC, December 31, 9999`, in the Gregorian calendar. It can be used wherever a [DateTimeOffset][] is expected, and will be [implicitly cast][Implicit Casting]. |
| **Size:**              | Varies, typically `8` bytes                                   |
| **Default Value:**     | `0001-01-01T00:00:00` (i.e. [DateTime.MinValue][])            |
| **Can be used as:**    | `DateTimeOffset`, `Object`, `dynamic`                         |
| **Can be cast to:**    | N/A                                                           |

## Remarks

### Create a DateTime

The following table shows some of the ways that a `DateTime` can be created.

All examples are for a system configured with British [culture][] (i.e. `en-GB`), and use a local time of `2PM 1st of July 2022` with `1` hour UTC offset, honouring British Summer Time (BST).

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `DateTime.Now` | `DateTime.Now` | `2022-07-01T14:00:00.0000000+01:00` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as local time. See [DateTime.Now][] |
| Use `DateTime.UtcNow` | `DateTime.UtcNow` | `2022-07-01T13:00:00.0000000Z` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as the Coordinated Universal Time (UTC). See [DateTime.UtcNow][] |
| Use `DateTime.Parse`| `DateTime.Parse("1/7/2022 2:00:00 PM")` | `2022-07-01T14:00:00` | Expression | Parses a date string and converts it to a `DateTime` using the [current culture][] of the system. In this example it parses `"1/7/2022 2:00:00 PM"` using `en-GB` [culture][] and converts it to `2022-07-01T14:00:00`. See [DateTime.Parse][] |
| Use a `DateTime` constructor | `new DateTime(2022, 7, 1, 14, 0, 0, 0)` | `2022-07-01T14:00:00` | Expression | `2PM 1st July 2022` with `1` hour UTC offset, honouring British Summer Time (BST). See [DateTime Constructors][]. |
| Use `DateTimeOffset.DateTime` | `DateTimeOffset.UtcNow.DateTime` | `2022-07-01T13:00:00.0000000` | Expression | Converts `DateTimeOffset.UtcNow` to a `DateTime` using the date and time components, but not the offset. See [DateTimeOffset.DateTime][] |
| Use `DateTimeOffset.LocalDateTime` |  `DateTimeOffset.UtcNow.LocalDateTime` | `2022-07-01T14:00:00.0000000+01:00` | Expression | Converts `DateTimeOffset.UtcNow` to a `DateTime` relative to the local time. See [DateTimeOffset.LocalDateTime][] |
| Use `DateTimeOffset.UtcDateTime` | `DateTimeOffset.UtcNow.UtcDateTime` | `2022-07-01T13:00:00.0000000Z` | Expression | Converts `DateTimeOffset.UtcNow` to a `DateTime` relative to Coordinated Universal Time (UTC). See [DateTimeOffset.UtcDateTime][] |

Please see [Initializing a DateTime object][] for further information.

### Convert DateTime to Text

The following table shows some of the ways that a `DateTime` can be converted to text.

All examples are for a system configured with British [culture][] (i.e. `en-GB`), and use a local time of `2PM 1st of July 2022` with `1` hour UTC offset, honouring British Summer Time (BST).

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `DateTime.UtcNow.ToString()` | `"1/7/2022 1:00:00 PM"` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as the Coordinated Universal Time (UTC) converted to text. Both the example and actual result will use the [short date pattern][StandardFormatTemplates] for the [current culture][] and the [long time pattern][StandardFormatTemplates] for the [current culture][] with each element separated from the previous element by a space. See [DateTime.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(DateTime.UtcNow)` | `"1/7/2022 1:00:00 PM"` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as the Coordinated Universal Time (UTC) converted to text. Both the example and actual result will use the [short date pattern][StandardFormatTemplates] for the [current culture][] and the [long time pattern][StandardFormatTemplates] for the [current culture][], with each element separated from the previous element by a space. See [Convert.ToString][] |
| Use `Convert DateTime To Text` block | where `Date Time` property has a value of `DateTime.UtcNow` | `"2022-07-01T13:00:00.0000000+00:00"` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as the Coordinated Universal Time (UTC) converted to text. Both the example and actual result will use [ISO 8601 Standard][] format for `DateTimeOffset` (i.e. `yyyy-MM-ddTHH:mm:ss.fffffffzzz`) as the `Convert DateTime To Text` block will impicitly convert a `DateTime` to a `DateTimeOffset`. See [Convert DateTime To Text][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `DateTime.UtcNow` | `"1/7/2022 1:00:00 PM"` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as the Coordinated Universal Time (UTC) converted to text. Both the example and actual result will use the [short date pattern][StandardFormatTemplates] for the [current culture][] and the [long time pattern][StandardFormatTemplates] for the [current culture][], with each element separated from the previous element by a space. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `DateTime.UtcNow` | `"\"2022-07-01T13:00:00.0000000Z\""` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as the Coordinated Universal Time (UTC) converted to text. Both the example and actual result will use [ISO 8601 Standard][] format for `DateTime` (i.e. `yyyy-MM-ddTHH:mm:ss.fffffffK`). See [Convert Object To Json][] |

Please see [Date and Time Formatting][] for further information on formatting `DateTime` values, including how [Operating System Settings][] can affect the [current culture][].

### Convert DateTime to a DateTimeOffset

`DateTime` values will be [implicitly cast][Implicit Casting] to [DateTimeOffset][] values if used where a [DateTimeOffset][] is expected.

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `DateTime`.
* The Literal Editor is available for [Input][] properties where the data type is `DateTime`.
  * Expression syntax is not supported within the Literal Editor for the `DateTime` data type.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `DateTime`.

### Known Limitations

None

## See Also

### Related Data Types

* [DateTimeOffset][]

### Related Concepts

* [Working with Date and Time][]
* [Implicit Casting][]
* [Culture][]

### External Documentation

* [System.DateTime][]

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Convert.ToString]: {{< url "MSDocs.DotNet.Api.System.Convert.ToString" >}}

[Convert Text To DateTime]: {{< url "Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertTextToDateTime.MainDoc" >}}
[Convert DateTime To Text]: {{< url "Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertDateTimeToText.MainDoc" >}}
[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Initializing a DateTime object]: {{< url "MSDocs.DotNet.Api.System.DateTime.InitializingADateTimeObject" >}}

[System.DateTime]: {{< url "MSDocs.DotNet.Api.System.DateTime.MainDoc" >}}
[DateTime Constructors]: {{< url "MSDocs.DotNet.Api.System.DateTime.Ctors" >}}
[DateTime.MinValue]: {{< url "MSDocs.DotNet.Api.System.DateTime.MinValue" >}}
[DateTime.Now]: {{< url "MSDocs.DotNet.Api.System.DateTime.Now" >}}
[DateTime.UtcNow]: {{< url "MSDocs.DotNet.Api.System.DateTime.UtcNow" >}}
[DateTime.Parse]: {{< url "MSDocs.DotNet.Api.System.DateTime.Parse" >}}
[DateTime.ToString]: {{< url "MSDocs.DotNet.Api.System.DateTime.ToString" >}}

[DateTimeOffset.DateTime]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.DateTime" >}}
[DateTimeOffset.LocalDateTime]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.LocalDateTime" >}}
[DateTimeOffset.UtcDateTime]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.UtcDateTime" >}}

[Date and Time Formatting]: {{< url "Cortex.Reference.Concepts.WorkingWithDateAndTime.DateAndTimeFormatting.MainDoc" >}}
[StandardFormatTemplates]: {{< url "Cortex.Reference.Concepts.WorkingWithDateAndTime.DateAndTimeFormatting.StandardFormatTemplates" >}}
[ISO 8601 Standard]: {{< url "Cortex.Reference.Concepts.WorkingWithDateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Operating System Settings]: {{< url "Cortex.Reference.Concepts.WorkingWithDateAndTime.DateAndTimeFormatting.OperatingSystemSettings" >}}

[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[TimeSpan]: {{< url "Cortex.Reference.DataTypes.DateAndTime.TimeSpan.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Working with Date and Time]: {{< url "Cortex.Reference.Concepts.WorkingWithDateAndTime.MainDoc" >}}

[Culture]: {{< url "Cortex.Reference.Concepts.WorkingWithCulture.MainDoc" >}}
[Current Culture]: {{< url "Cortex.Reference.Concepts.WorkingWithCulture.CurrentCulture.MainDoc" >}}

[Implicit Casting]: {{< url "Cortex.Reference.Concepts.ObjectCasting.ImplicitCast" >}}
