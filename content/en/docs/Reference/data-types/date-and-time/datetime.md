---
title: "DateTime"
linkTitle: "DateTime"
description: "Used to represent a date and time between `00:00:00.0000000 UTC, January 1, 0001` and `23:59:59.9999999 UTC, December 31, 9999`, in the Gregorian calendar. It can be used wherever a `DateTimeOffset` is expected, and wll be converted automatically."
---

# {{< param title >}}

<p class="namespace">(System.DateTime)</p>

## Summary

The `DateTime` data type is used to represent a date and time between `00:00:00.0000000 UTC, January 1, 0001` and `23:59:59.9999999 UTC, December 31, 9999`, in the Gregorian calendar. It can be used wherever a [DateTimeOffset][] is expected, and wll be converted automatically.

| | |
|-|-|
| **Category:**          | Date & Time                                                   |
| **Name:**              | `DateTime`                                                    |
| **Full Name:**         | `System.DateTime`                                             |
| **Alias:**             | N/A                                                           |
| **Description:**       | A date and time between `00:00:00.0000000 UTC, January 1, 0001` and `23:59:59.9999999 UTC, December 31, 9999`, in the Gregorian calendar. It can be used wherever a [DateTimeOffset][] is expected, and wll be converted automatically. |
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
| TODO: Use `DateTime.Now` | `DateTime.Now` | `2022-07-01T14:00:00.0000000` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as local time. See [DateTime.Now][] |
| TODO: Use `DateTime.UtcNow` | `DateTime.UtcNow` | `2022-07-01T13:00:00.0000000` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as the Coordinated Universal Time (UTC). See [DateTime.UtcNow][] |
| TODO: DateTimeOffset.DateTime | `TODO` | `TODO` | Expression | TODO |
| TODO: DateTimeOffset.LocalDateTime | `TODO` | `TODO` | Expression | TODO |
| TODO: DateTimeOffset.UtcDateTime | `TODO` | `TODO` | Expression | TODO |
| TODO: Use `DateTime.Parse`| `DateTime.Parse("1/7/2022 2:00:00 PM")` | `2022-07-01T14:00:00` | Expression | Parses a date string and converts it to a `DateTime` using the [current culture][] of the system. In this example it parses `"1/7/2022 2:00:00 PM"` using `en-GB` [culture][] and converts it to `2022-07-01T14:00:00`. See [DateTime.Parse][] |
| TODO: Use a `DateTime` constructor | `new DateTime(2022, 7, 1, 14, 0, 0, 0)` | `2022-07-01T14:00:00` | Expression | `2PM 1st July 2022` with `1` hour UTC offset, honouring British Summer Time (BST). See [DateTime Constructors][]. |
| TODO: Use `Convert Text To DateTime` block | where `Text` property has a value of `"1/7/2022 2:00:00 PM"` | `"2022-07-01T14:00:00"` | Expression | Parses a date string and converts it to a `DateTime`. See [Convert Text To DateTime][] |

TODO: Please see [Initializing a DateTime object][] for further information.

TODO: A `DateTime` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Notes |
|-|-|-|
| `Year`        | `Int32`   | The year expressed as an [Int32][] value between `1` and `9999`.      |
| `Month`       | `Int32`   | The month expressed as an [Int32][] value between `1` and `12`.       |
| `Day`         | `Int32`   | The day expressed as an [Int32][] value between `1` and the number of days in `Month`. |
| `Hour`        | `Int32`   | The hour expressed as an [Int32][] value between `0` and `23`.        |
| `Minute`      | `Int32`   | The minute expressed as an [Int32][] value between `0` and `59`.      |
| `Second`      | `Int32`   | The second expressed as an [Int32][] value between `0` and `59`.      |
| `Millisecond` | `Int32`   | The millisecond expressed as an [Int32][] value between `0` and `999`.|

### Convert DateTime to Text

TODO: The following table shows some of the ways that a `DateTime` can be converted to text.

All examples are for a system configured with British [culture][] (i.e. `en-GB`), and use a local time of `2PM 1st of July 2022` with `1` hour UTC offset, honouring British Summer Time (BST).

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| TODO: Use `ToString` | `DateTime.UtcNow.ToString()` | `"1/7/2022 1:00:00 PM"` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as the Coordinated Universal Time (UTC) converted to text. Both the example and actual result will use the [short date pattern][StandardFormatTemplates] for the [current culture][] and the [long time pattern][StandardFormatTemplates] for the [current culture][] with each element separated from the previous element by a space. See [DateTime.ToString][] |
| TODO: Use `Convert.ToString` | `Convert.ToString(DateTime.UtcNow)` | `"1/7/2022 1:00:00 PM"` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as the Coordinated Universal Time (UTC) converted to text. Both the example and actual result will use the [short date pattern][StandardFormatTemplates] for the [current culture][] and the [long time pattern][StandardFormatTemplates] for the [current culture][], with each element separated from the previous element by a space. See [Convert.ToString][] |
| TODO: Use `Convert DateTime To Text` block | where `Date Time` property has a value of `DateTime.UtcNow` | `"2022-07-01T13:00:00.0000000+00:00"` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as the Coordinated Universal Time (UTC) converted to text. Both the example and actual result will use [ISO 8601 Standard][] format (i.e. `yyyy-MM-ddTHH:mm:ss.fffffffzzz`). See [Convert DateTime To Text][] |
| TODO: Use `Convert Object To Text` block | where `Object` property has a value of `DateTime.UtcNow` | `"1/7/2022 1:00:00 PM"` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as the Coordinated Universal Time (UTC) converted to text. Both the example and actual result will use the [short date pattern][StandardFormatTemplates] for the [current culture][] and the [long time pattern][StandardFormatTemplates] for the [current culture][], with each element separated from the previous element by a space. See [Convert Object To Text][] |
| TODO: Use `Convert Object To Json` block | where `Object` property has a value of `DateTime.UtcNow` | `"\"2022-07-01T13:00:00.0000000+00:00\""` | Expression | The result shown is an example result. The actual result will show the current date and time on the current computer expressed as the Coordinated Universal Time (UTC) converted to text. Both the example and actual result will use [ISO 8601 Standard][] format (i.e. `yyyy-MM-ddTHH:mm:ss.fffffffzzz`). See [Convert Object To Json][] |

Please see [Date and Time Formatting][] for further information on formatting `DateTime`.

### Convert DateTime to a DateTimeOffset

TODO: Implicit

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `DateTime`.
* The Literal Editor is available for [Input][] properties where the data type is `DateTime`.
  * Expression syntax is not supported within the Literal Editor for the `DateTime` data type.
* The Variable Editor is available for [InputOutput][] and [Output] properties where the data type is `DateTime`.

### Known Limitations

None

## See Also

### Related Data Types

* [DateTimeOffset][]
* [String][]
* [TimeSpan][]

### Related Concepts

* [Working with Date and Time][]

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

[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[TimeSpan]: {{< url "Cortex.Reference.DataTypes.DateAndTime.TimeSpan.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Working with Date and Time]: {{< url "Cortex.Reference.Concepts.WorkingWithDateAndTime.MainDoc" >}}

[Culture]: {{< url "Cortex.Reference.Concepts.WorkingWithCulture.MainDoc" >}}
[Current Culture]: {{< url "Cortex.Reference.Concepts.WorkingWithCulture.CurrentCulture.MainDoc" >}}
