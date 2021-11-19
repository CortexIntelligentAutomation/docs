---
title: "Date and Time Formats"
linkTitle: "Date and Time Formats"
description: "This page gives information about Date and Time Formats."
---

# {{< param title >}}

## Overview

TODO: Overview/summary

TODO: Common formats ISO8601, Invariant Culture

## Format providers

TODO: what are they
TODO: ways of creating

* CultureInfo.InvariantCulture
* CultureInfo.CurrentCulture
* new CultureInfo("")
* new CultureInfo("en-GB")

or

https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings#datetimeformatinfo-properties 

https://docs.microsoft.com/en-us/dotnet/api/system.globalization.datetimeformatinfo?view=net-5.0

### Invariant Culture

TODO default format `"MM/dd/yyyy HH:mm:ss zzz"`

TODO rules https://docs.microsoft.com/en-us/dotnet/api/system.datetimeoffset.parse?view=net-5.0

### Current Culture

TODO


## Format Templates

TODO: What are they
TODO: What are the 2 flavours: standard and custom
TODO: How do they relate to format providers

### Standard Format Templates

TODO: What are they - single character format specifier
TODO: Table of them
TODO: Invariant format templates - 

In some cases, the standard format string serves as a convenient abbreviation for a longer custom format string that is invariant. Four standard format strings fall into this category: "O" (or "o"), "R" (or "r"), "s", and "u". These strings correspond to custom format strings defined by the invariant culture. They produce string representations of date and time values that are intended to be identical across cultures. The following table provides information on these four standard date and time format strings.

TABLE 2
Standard format string	Defined by DateTimeFormatInfo.InvariantInfo property	Custom format string
"O" or "o"	None	yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffffffK
"R" or "r"	RFC1123Pattern	ddd, dd MMM yyyy HH':'mm':'ss 'GMT'
"s"	SortableDateTimePattern	yyyy'-'MM'-'dd'T'HH':'mm':'ss
"u"	UniversalSortableDateTimePattern	yyyy'-'MM'-'dd HH':'mm':'ss'Z'

https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings

### Custom Format Templates

TODO: What are they - multiple character format specifiers
TODO: Some examples

https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings

## Format specifiers

TODO: what are they
TODO: Table of them

Some of the commonly used format specifiers are:

* dd: The day of the month, from 01 through 31
* MM: The month, from 01 through 12
* yyyy: The year as a four-digit number
* HH: The hour, using a 24-hour clock from 00 to 23
* hh: The hour, using a 12-hour clock from 01 to 12
* mm: The minute, from 00 through 59
* ss: The second, from 00 through 59
* fff: The number of milliseconds
* tttt: The AM/PM designator

The full set of allowed format specifiers are as per standard Microsoft .NET Custom Date and Time Format Strings.

## Operating System Settings

TODO: How can these affect datetime formats etc.

https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings#control-panel-settings






TODO Add concepts page for string/object formatting that links to:

* https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting 
* https://docs.microsoft.com/en-us/dotnet/standard/base-types/best-practices-display-data

TODO Add concepts page for formatting numbers that links to:

* https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings 
* https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings

TODO: https://docs.microsoft.com/en-us/dotnet/standard/base-types/parsing-datetime