---
title: "Date and Time Formatting"
linkTitle: "Date and Time Formatting"
description: "This page describes the concept of Date and Time Formatting, including Format Providers, Format Templates and Format Specifiers."
---

# {{% param title %}}

## Overview

TODO:

* Overview/summary
* Common formats ISO8601, Invariant Culture

## Format providers

TODO:

* what are they
* ways of creating
  * CultureInfo.InvariantCulture
  * CultureInfo.CurrentCulture
  * new CultureInfo("")
  * new CultureInfo("en-GB")

or

https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings#datetimeformatinfo-properties 

https://learn.microsoft.com/en-us/dotnet/api/system.globalization.datetimeformatinfo?view=net-5.0

### Invariant Culture

TODO:

* default format `"MM/dd/yyyy HH:mm:ss zzz"`
* rules https://learn.microsoft.com/en-us/dotnet/api/system.datetimeoffset.parse?view=net-5.0

### Current Culture

TODO

## Format Templates

Format templates use characters called [format specifiers][] to define the text representation of [DateTimeOffset][] and [DateTime][] values.

There are two types of format template:

* [Standard Format Templates][] - use a single character [format specifier][format specifiers]
* [Custom Format Templates][] - use multiple character [format specifiers][]

Both can be used to define how [DateTimeOffset][] and [DateTime][] values are converted to and from their text representation.

TODO:

* *How do they relate to format providers

### Standard Format Templates

A standard format template uses a single character [format specifier][format specifiers] to define the text representation of [DateTimeOffset][] and [DateTime][] values and can be used to define how [DateTimeOffset][] and [DateTime][] values are converted to and from their text representation.

The following table shows all of the standard format templates.

All examples are for a system configured with British [culture][] (i.e. `en-GB`), and use a local time of `2PM 1st of July 2022` with `1` hour UTC offset, honouring British Summer Time (BST).

| Pattern | Format Specifier | DateTimeOffset Example | DateTime Example | Notes |
|-|-|-|-|-|
| Short Date Pattern | `d` | `2022-07-01T14:00:00.0000000+01:00` -> `1/7/2022` | TODO | See [short date ("d") format specifier] for further information |
| Short Time Pattern | `t` | `2022-07-01T14:00:00.0000000+01:00` -> `2:00 PM` | TODO | See [short time ("t") format specifier] for further information |
| Long Date Pattern | `D` | `2022-07-01T14:00:00.0000000+01:00` -> `5 April 2022` | TODO | See [long date ("D") format specifier] for further information |
| Long Time Pattern | `T` | `2022-07-01T14:00:00.0000000+01:00` -> `2:00:00 PM` | TODO | See [long time ("T") format specifier] for further information |
| Full Date/Time Pattern (Short Time) | `f` | `2022-07-01T14:00:00.0000000+01:00` -> `TODO` | TODO | See [full date short time ("f") format specifier] for further information |
| Full Date/Time Pattern (Long Time) | `F` | `2022-07-01T14:00:00.0000000+01:00` -> `TODO` | TODO | See [full date long time ("F") format specifier] for further information |
| General Date/Time Pattern (Short Time) | `g` | `2022-07-01T14:00:00.0000000+01:00` -> `TODO` | TODO | See [general date short time ("g") format specifier] for further information |
| General Date/Time Pattern (Long Time) | `G` | `2022-07-01T14:00:00.0000000+01:00` -> `TODO` | TODO | See [general date long time ("G") format specifier] for further information |
| Round-Trip Date/Time Pattern | `O`, `o` | `2022-07-01T14:00:00.0000000+01:00` -> `TODO` | TODO | See [round-trip ("O", "o") format specifier] for further information |
| RFC1123 Pattern | `R`, `r` | `2022-07-01T14:00:00.0000000+01:00` -> `TODO` | TODO | See [RFC1123 ("R", "r") format specifier] for further information |
| Sortable Date/Time Pattern | `s` | `2022-07-01T14:00:00.0000000+01:00` -> `TODO` | TODO | See [sortable ("s") format specifier] for further information |
| Universal Sortable Date/Time Pattern | `u` | `2022-07-01T14:00:00.0000000+01:00` -> `TODO` | TODO | See [universal sortable ("u") format specifier] for further information |
| Universal Full Date/Time Pattern | `U` | `2022-07-01T14:00:00.0000000+01:00` -> `TODO` | TODO | See [universal full ("U") format specifier] for further information |
| Month Day Pattern | `M`, `m` | `2022-07-01T14:00:00.0000000+01:00` -> `TODO` | TODO | See [month ("M", "m") format specifier] for further information |
| Year Month Pattern | `Y`, `y` | `2022-07-01T14:00:00.0000000+01:00` -> `TODO` | TODO | See [year month ("Y") format specifier] for further information |
| Unknown Pattern | Any other single character | N/A | N/A | Throws a [FormatException][] |

#### Invariant Format Templates

TODO: 

* Invariant format templates - 
  * In some cases, the standard format string serves as a convenient abbreviation for a longer custom format string that is invariant. Four standard format strings fall into this category: "O" (or "o"), "R" (or "r"), "s", and "u". These strings correspond to custom format strings defined by the invariant culture. They produce string representations of date and time values that are intended to be identical across cultures. The following table provides information on these four standard date and time format strings.
  * TABLE 2
    * Standard format string	Defined by DateTimeFormatInfo.InvariantInfo property	Custom format string
    * "O" or "o"	None	yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffffffK
    * "R" or "r"	RFC1123Pattern	ddd, dd MMM yyyy HH':'mm':'ss 'GMT'
    * "s"	SortableDateTimePattern	yyyy'-'MM'-'dd'T'HH':'mm':'ss
    * "u"	UniversalSortableDateTimePattern	yyyy'-'MM'-'dd HH':'mm':'ss'Z'
    * https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings

#### ISO 8601 Standard

TODO:

* round-trip "O", "o" and sortable "s" complies with ISO
* `yyyy-MM-ddTHH:mm:ss.fffffffK` for `DateTime`
* `yyyy-MM-ddTHH:mm:ss.fffffffzzz` for `DateTimeOffset`

### Custom Format Templates

TODO:

* What are they - multiple character format specifiers
* Some examples
* https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings

## Format specifiers

TODO:

* what are they
* Table of them
* Some of the commonly used format specifiers are:
    * dd: The day of the month, from 01 through 31
    * MM: The month, from 01 through 12
    * yyyy: The year as a four-digit number
    * HH: The hour, using a 24-hour clock from 00 to 23
    * hh: The hour, using a 12-hour clock from 01 to 12
    * mm: The minute, from 00 through 59
    * ss: The second, from 00 through 59
    * fff: The number of milliseconds
    * tttt: The AM/PM designator
    * The full set of allowed format specifiers are as per standard Microsoft .NET Custom Date and Time Format Strings.

## Operating System Settings

TODO:

* How can these affect datetime formats etc.
* https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings#control-panel-settings

[Standard Format Templates]: {{< ref "#standard-format-templates" >}}
[Custom Format Templates]: {{< ref "#custom-format-templates" >}}
[Format Specifiers]: {{< ref "#format-specifiers" >}}
[Operating System Settings]: {{< ref "#operating-system-settings" >}}

[Culture]: {{< url "Cortex.Reference.Concepts.WorkingWith.Culture.MainDoc" >}}

[short date ("d") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.ShortDateFormat" >}}
[short time ("t") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.ShortTimeFormat" >}}
[long date ("D") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.LongDateFormat" >}}
[long time ("T") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.LongTimeFormat" >}}
[full date short time ("f") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.FullDateShortTimeFormat" >}}
[full date long time ("F") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.FullDateLongTimeFormat" >}}
[general date short time ("g") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.GeneralDateShortTimeFormat" >}}
[general date long time ("G") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.GeneralDateLongTimeFormat" >}}
[round-trip ("O", "o") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.RoundTripFormat" >}}
[RFC1123 ("R", "r") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.RFC1123Format" >}}
[sortable ("s") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.SortableFormat" >}}
[universal sortable ("u") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.UniversalSortableFormat" >}}
[universal full ("U") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.UniversalFullFormat" >}}
[month ("M", "m") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.MonthDayFormat" >}}
[year month ("Y") format specifier]: {{< url "MSDocs.DotNet.Api.System.DateTimeOffset.YearMonthFormat" >}}

[FormatException]: {{< url "MSDocs.DotNet.Api.System.FormatException" >}}

[DateTime]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}

TODO Add concepts page for string/object formatting that links to:

* https://learn.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting 
* https://learn.microsoft.com/en-us/dotnet/standard/base-types/best-practices-display-data

TODO Add concepts page for formatting numbers that links to:

* https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings 
* https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings

TODO: https://learn.microsoft.com/en-us/dotnet/standard/base-types/parsing-datetime

TODO: Update examples for most common en-gb os formats
