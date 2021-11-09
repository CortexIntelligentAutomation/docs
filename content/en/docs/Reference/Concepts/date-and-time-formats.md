---
title: "Date and Time Formats"
linkTitle: "Date and Time Formats"
description: "This page gives information about Date and Time Formats."
---

# {{< param title >}}

## Overview

TODO: Overview/summary
https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings
https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings

Some of the commonly used format specifiers are:
    dd: The day of the month, from 01 through 31
    MM: The month, from 01 through 12
    yyyy: The year as a four-digit number
    HH: The hour, using a 24-hour clock from 00 to 23
    hh: The hour, using a 12-hour clock from 01 to 12
    mm: The minute, from 00 through 59
    ss: The second, from 00 through 59
    fff: The number of milliseconds 
    tttt: The AM/PM designator

The full set of allowed format specifiers are as per standard Microsoft .NET Custom Date and Time Format Strings.

### Invariant Culture

TODO default format `"MM/dd/yyyy HH:mm:ss zzz"`
TODO rules https://docs.microsoft.com/en-us/dotnet/api/system.datetimeoffset.parse?view=net-5.0

### Current Culture

TODO