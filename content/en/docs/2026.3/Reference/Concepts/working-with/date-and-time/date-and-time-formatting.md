---
title: "Date and Time Formatting"
linkTitle: "Date and Time Formatting"
description: "How format providers, format templates, and format specifiers control the text representation of DateTime and DateTimeOffset values in CORTEX flows."
weight: 2
---

# {{% param title %}}

## Summary

[DateTime][] and [DateTimeOffset][] values are often converted to and from text—for example when reading user input, writing log messages, or exchanging data with external systems. In .NET and {{% ctx %}}, that conversion is controlled by:

* A **format provider** — supplies culture-specific patterns and names (via [CultureInfo][] and [IFormatProvider][])
* A **format template** — a standard or custom string that defines which parts of the date and time appear in the output
* **Format specifiers** — the individual characters or sequences inside a format template (for example `dd`, `MM`, `yyyy`)

[Convert Text To DateTime][] and [Convert Date Time To Text][] expose **Format Template** and **Format Provider** properties for explicit control. Expressions can use `DateTime.ToString`, `DateTimeOffset.ToString`, `DateTime.Parse`, and related .NET APIs with the same concepts.

For an overview of date and time types and when to use them, see [What is Date and Time?][]. For culture types in general, see [Culture][].

| Topic | Typical choice | More information |
| --- | --- | --- |
| Cross-server persistence and block defaults | [Invariant Culture][] | [Invariant Culture](#invariant-culture) |
| Server-local presentation in expressions | [Current Culture][] | [Current Culture](#current-culture) |
| Fixed regional format for users | [Specific Culture][] (for example `new CultureInfo("en-GB")`) | [Specific Cultures][] |
| Round-trip and sortable text | [ISO 8601 Standard][] (`"O"` / `"o"`, `"s"`) | [ISO 8601 Standard](#iso-8601-standard) |

## Format providers

A **format provider** implements [IFormatProvider][] and supplies the cultural rules used when a [DateTime][] or [DateTimeOffset][] value is formatted or parsed. In practice, the provider is almost always a [CultureInfo][] instance whose `DateTimeFormat` property defines short and long date/time patterns, month and day names, AM/PM designators, and separators.

Pass a format provider to:

* Block properties named **Format Provider** on [Convert Text To DateTime][] and [Convert Date Time To Text][]
* .NET methods such as `ToString(string, IFormatProvider)`, `DateTime.Parse(string, IFormatProvider)`, and `DateTimeOffset.ParseExact(string, string, IFormatProvider)`

### Obtaining a format provider

| Approach | Expression | Notes |
| --- | --- | --- |
| Invariant culture | `CultureInfo.InvariantCulture` | Culture-insensitive; fixed patterns. See [Invariant Culture][] |
| Empty culture name | `new CultureInfo("")` | Equivalent to the invariant culture |
| Current culture | `CultureInfo.CurrentCulture` | Reflects the server's regional settings. See [Current Culture][] |
| Specific culture | `new CultureInfo("en-GB")` | Fixed locale regardless of server settings. See [Specific Cultures][] |

The `DateTimeFormat` property on a [CultureInfo][] object exposes pattern properties such as `ShortDatePattern`, `LongDatePattern`, `ShortTimePattern`, and `LongTimePattern`. Standard format specifiers (for example `"d"` and `"G"`) resolve to these patterns. For the full list of `DateTimeFormatInfo` properties, see [DateTimeFormatInfo](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.datetimeformatinfo) in the .NET documentation.

### Invariant Culture

When [Invariant Culture][] is used as the format provider:

* Standard format specifiers such as `"d"` and `"G"` use **invariant** custom patterns (for example short date `"MM/dd/yyyy"`), not the patterns of the server's current locale.
* With no format template, [Convert Date Time To Text][] and [Convert Text To DateTime][] use the invariant default pattern `"MM/dd/yyyy HH:mm:ss zzz"` (for example `12/31/2021 00:00:00 +00:00` for `2021-12-31T00:00:00+00:00`).
* Standard format specifier `"F"` (full date long time) uses the invariant long pattern `"dddd, dd MMMM yyyy HH:mm:ss"` (for example `Friday, 31 December 2021 00:00:00`).

Four standard format specifiers — `"O"` / `"o"`, `"R"` / `"r"`, `"s"`, and `"u"` — are defined by the invariant culture and produce representations intended to be **identical across cultures**. See [Invariant format templates](#invariant-format-templates).

[Convert Date Time To Text][] and [Convert Text To DateTime][] default **Format Provider** to `CultureInfo.InvariantCulture` when the property is omitted or `null`. Many other formatting blocks do the same; see [Invariant Culture][].

Parsing with invariant culture expects US-style month/day order in the default pattern (for example `"12/31/2021 00:00:00 +00:00"`). For culture-independent storage, prefer [ISO 8601 Standard][] text instead.

### Current Culture

[Current Culture][] (`CultureInfo.CurrentCulture`) supplies patterns from the **server's configured locale**. Use it in expressions when formatted output should follow the machine where the flow runs—for example `dateTime.ToString("d", CultureInfo.CurrentCulture)`.

Standard format specifiers resolve to the current culture's `DateTimeFormatInfo` patterns. On Windows, those patterns can reflect **Control Panel** regional customizations when they apply to `CurrentCulture`. See [Operating System Settings][].

{{% ctx %}} blocks do **not** automatically use the current culture when **Format Provider** is omitted; they typically default to [Invariant Culture][]. To format or parse using the server's locale in a block, set **Format Provider** explicitly to `CultureInfo.CurrentCulture`.

Expressions that call `DateTime.Parse` or `DateTimeOffset.Parse` without a format provider use the current culture's rules. `DateTime.Now.ToString()` and `DateTimeOffset.Now.ToString()` without a format template also use the current culture's short date and long time patterns.

## Format Templates

**Format templates** define how [DateTime][] and [DateTimeOffset][] values are converted to and from text. Templates contain [format specifiers](#format-specifiers); characters that are not specifiers are copied to the output as literal text.

There are two types of format template:

* [Standard format templates](#standard-format-templates) — a **single** character [format specifier](#format-specifiers) (for example `"d"`, `"G"`, `"O"`)
* [Custom format templates](#custom-format-templates) — **two or more** characters, including white space (for example `"dd/MM/yyyy"`, `"yyyy-MM-ddTHH:mm:ss"`)

A format template is always interpreted together with a format provider. The provider determines which custom pattern a standard specifier expands to, and supplies localized month and day names when custom specifiers such as `MMMM` or `ddd` are used.

| Scenario | Format template | Format provider | Result |
| --- | --- | --- | --- |
| [Convert Date Time To Text][] — block default | `null` or empty | `null` | [ISO 8601 Standard][] (`yyyy-MM-ddTHH:mm:ss.fffffffzzz`) |
| [Convert Date Time To Text][] — invariant default | `null` or empty | `CultureInfo.InvariantCulture` | Invariant default (`MM/dd/yyyy HH:mm:ss zzz`) |
| Expression `ToString()` | `null` (overload without template) | [Current Culture][] | Culture short date + long time patterns |
| Explicit standard specifier | `"G"` | `new CultureInfo("en-GB")` | General date long time for `en-GB` |

### Standard Format Templates

A standard format template is a single-character alias for a culture-specific custom pattern defined by `DateTimeFormatInfo`. The same specifier can produce different text for different cultures—for example `"d"` yields `6/15/2009` for `en-US` and `15/06/2009` for `en-GB`.

The following table lists all standard format templates. Examples use a system configured with British [culture][Culture] (`en-GB`), with a local time of **2 PM on Friday 1 July 2022** and a **+01:00** UTC offset (British Summer Time).

| Pattern | Format specifier | DateTimeOffset example | DateTime example | Notes |
| --- | --- | --- | --- | --- |
| Short date | `d` | `2022-07-01T14:00:00.0000000+01:00` → `01/07/2022` | `2022-07-01T14:00:00` → `01/07/2022` | See [short date ("d") format specifier][] |
| Short time | `t` | `2022-07-01T14:00:00.0000000+01:00` → `14:00` | `2022-07-01T14:00:00` → `14:00` | See [short time ("t") format specifier][] |
| Long date | `D` | `2022-07-01T14:00:00.0000000+01:00` → `Friday, 1 July 2022` | `2022-07-01T14:00:00` → `Friday, 1 July 2022` | See [long date ("D") format specifier][] |
| Long time | `T` | `2022-07-01T14:00:00.0000000+01:00` → `14:00:00` | `2022-07-01T14:00:00` → `14:00:00` | See [long time ("T") format specifier][] |
| Full date/time (short time) | `f` | `2022-07-01T14:00:00.0000000+01:00` → `Friday, 1 July 2022 14:00` | `2022-07-01T14:00:00` → `Friday, 1 July 2022 14:00` | See [full date short time ("f") format specifier][] |
| Full date/time (long time) | `F` | `2022-07-01T14:00:00.0000000+01:00` → `Friday, 1 July 2022 14:00:00` | `2022-07-01T14:00:00` → `Friday, 1 July 2022 14:00:00` | See [full date long time ("F") format specifier][] |
| General date/time (short time) | `g` | `2022-07-01T14:00:00.0000000+01:00` → `01/07/2022 14:00` | `2022-07-01T14:00:00` → `01/07/2022 14:00` | See [general date short time ("g") format specifier][] |
| General date/time (long time) | `G` | `2022-07-01T14:00:00.0000000+01:00` → `01/07/2022 14:00:00` | `2022-07-01T14:00:00` → `01/07/2022 14:00:00` | See [general date long time ("G") format specifier][] |
| Round-trip | `O`, `o` | `2022-07-01T14:00:00.0000000+01:00` → `2022-07-01T14:00:00.0000000+01:00` | `2022-07-01T14:00:00` → `2022-07-01T14:00:00.0000000` | See [round-trip ("O", "o") format specifier][]; [ISO 8601 Standard][] |
| RFC1123 | `R`, `r` | `2022-07-01T14:00:00.0000000+01:00` → `Fri, 01 Jul 2022 13:00:00 GMT` | `2022-07-01T14:00:00` → `Fri, 01 Jul 2022 14:00:00 GMT` | See [RFC1123 ("R", "r") format specifier][]; offset converted to GMT for `DateTimeOffset` |
| Sortable | `s` | `2022-07-01T14:00:00.0000000+01:00` → `2022-07-01T14:00:00` | `2022-07-01T14:00:00` → `2022-07-01T14:00:00` | See [sortable ("s") format specifier][]; [ISO 8601 Standard][] |
| Universal sortable | `u` | `2022-07-01T14:00:00.0000000+01:00` → `2022-07-01 13:00:00Z` | `2022-07-01T14:00:00` → `2022-07-01 14:00:00Z` | See [universal sortable ("u") format specifier][]; displays UTC |
| Universal full | `U` | `2022-07-01T14:00:00.0000000+01:00` → `Friday, 1 July 2022 13:00:00` | `2022-07-01T14:00:00` → `Friday, 1 July 2022 13:00:00` | See [universal full ("U") format specifier][]; converts to UTC before formatting |
| Month day | `M`, `m` | `2022-07-01T14:00:00.0000000+01:00` → `1 July` | `2022-07-01T14:00:00` → `1 July` | See [month ("M", "m") format specifier][] |
| Year month | `Y`, `y` | `2022-07-01T14:00:00.0000000+01:00` → `July 2022` | `2022-07-01T14:00:00` → `July 2022` | See [year month ("Y") format specifier][] |
| Unknown | Any other single character | N/A | N/A | Throws a [FormatException][] |

`DateTimeOffset.ToString()` without a format template uses the [current culture][Current Culture] short date pattern, long time pattern, and a `zzz` offset suffix (for example `1/7/2022 1:00:00 PM +00:00` for `en-GB` when the offset is zero). `DateTime.ToString()` without a format template uses the short date and long time patterns without an offset suffix.

#### Invariant format templates

Some standard format strings are abbreviations for **invariant** custom patterns. They produce the same representation regardless of the format provider's culture:

| Standard format | `DateTimeFormatInfo.InvariantInfo` property | Custom format string |
| --- | --- | --- |
| `"O"` or `"o"` | (none) | `yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffffffK` |
| `"R"` or `"r"` | `RFC1123Pattern` | `ddd, dd MMM yyyy HH':'mm':'ss 'GMT'` |
| `"s"` | `SortableDateTimePattern` | `yyyy'-'MM'-'dd'T'HH':'mm':'ss` |
| `"u"` | `UniversalSortableDateTimePattern` | `yyyy'-'MM'-'dd HH':'mm':'ss'Z'` |

For `"O"` / `"o"`, the `K` specifier in the custom pattern emits `Z` for UTC, an offset for `DateTimeOffset`, or nothing for `DateTime` with `DateTimeKind.Unspecified`.

#### ISO 8601 Standard

[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) is a widely used date and time text format. In {{% ctx %}} and .NET:

* [Convert Date Time To Text][] outputs [ISO 8601 Standard][] text by default when **Format Template** and **Format Provider** are not set (pattern `yyyy-MM-ddTHH:mm:ss.fffffffzzz` for [DateTimeOffset][], for example `2021-12-31T00:00:00.0000000+00:00`).
* [Convert Text To DateTime][] expects [ISO 8601 Standard][] input when **Format Template** is not set; if that parse fails, it falls back to the default pattern of the **Format Provider** (or [Invariant Culture][] rules).
* [Convert Object To Json][] serializes date and time values using ISO 8601-compatible patterns.

Common ISO 8601-related format templates:

| Template | Custom pattern | Typical use |
| --- | --- | --- |
| Round-trip `"O"` / `"o"` | `yyyy-MM-ddTHH:mm:ss.fffffffK` | Preserve kind and offset; preferred for round-tripping |
| Sortable `"s"` | `yyyy-MM-ddTHH:mm:ss` | Sortable, culture-invariant (no offset in output) |
| Block default | `yyyy-MM-ddTHH:mm:ss.fffffffzzz` | {{% ctx %}} date and time block output for `DateTimeOffset` |
| `DateTime` in JSON | `yyyy-MM-ddTHH:mm:ss.fffffffK` | `Z` suffix when kind is UTC |

The `"O"` / `"o"` and `"s"` standard specifiers comply with ISO 8601. When exchanging data between systems or storing values in a culture-independent form, prefer these patterns or the block default over locale-specific patterns such as `dd/MM/yyyy`.

### Custom Format Templates

A **custom format template** contains two or more characters. Any template that is not exactly one standard format specifier character is treated as custom—including templates that look like standard specifiers but include extra characters (for example `"dd/MM/yyyy"`).

Examples for a [DateTimeOffset][] value of `2022-07-01T14:00:00+01:00` with `en-GB` format provider:

| Format template | Result | Notes |
| --- | --- | --- |
| `dd/MM/yyyy` | `01/07/2022` | Day and month with leading zeros |
| `dddd, d MMMM yyyy` | `Friday, 1 July 2022` | Full day and month names from the provider |
| `HH:mm:ss zzz` | `14:00:00 +01:00` | 24-hour clock with offset |
| `yyyy-MM-ddTHH:mm:ss.fffffffzzz` | `2022-07-01T14:00:00.0000000+01:00` | [ISO 8601 Standard][] pattern used by blocks |
| `'Week' ww` | `Week 26` | Literal text in single quotes |

To include literal characters that would otherwise be interpreted as specifiers, escape them with single quotes (for example `HH'h'mm'min'` → `14h00min`).

Custom templates are used by [Convert Date Time To Text][] and [Convert Text To DateTime][] when **Format Template** is set, and by `ToString(string, IFormatProvider)` and `ParseExact` in expressions. For the full list of custom specifiers, see [custom date and time format strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings) in the .NET documentation.

## Format specifiers

**Format specifiers** are the placeholders inside a format template that are replaced with parts of a date and time value. In a **standard** template, a single character is the specifier. In a **custom** template, one or more characters form each specifier (for example `dd`, `yyyy`, `fff`).

Commonly used custom format specifiers:

| Specifier | Description | Example output (`2022-07-01T14:30:45.123+01:00`, `en-GB`) |
| --- | --- | --- |
| `d`, `dd` | Day of the month (`d` = no leading zero) | `1`, `01` |
| `M`, `MM`, `MMM`, `MMMM` | Month | `7`, `07`, `Jul`, `July` |
| `y`, `yy`, `yyyy` | Year | `22`, `22`, `2022` |
| `H`, `HH` | Hour, 24-hour clock | `14`, `14` |
| `h`, `hh` | Hour, 12-hour clock | `2`, `02` |
| `m`, `mm` | Minute | `30`, `30` |
| `s`, `ss` | Second | `45`, `45` |
| `f`, `ff`, `fff`, `ffffff`, `fffffff` | Fractions of a second | `1`, `12`, `123`, … |
| `t`, `tt` | AM/PM designator | `P`, `PM` |
| `z`, `zz`, `zzz` | UTC offset | `+1`, `+01`, `+01:00` |
| `K` | Time zone information | `+01:00` for `DateTimeOffset`; `Z` or empty for `DateTime` depending on `Kind` |
| `ddd`, `dddd` | Abbreviated or full day name | `Fri`, `Friday` |

If a custom format template contains **no** valid specifiers and the input text matches the template exactly, [Convert Text To DateTime][] sets the output to the **current** date and time (documented block behaviour).

A single invalid standard format character (for example `"a"`) throws a [FormatException][] in both blocks and .NET formatting APIs.

## Operating System Settings

Regional settings on the server operating system affect [Current Culture][] and therefore any formatting or parsing that uses `CultureInfo.CurrentCulture` or parameterless `Parse` / `ToString` calls in expressions.

On **Windows**, custom short and long date/time patterns configured in **Settings → Time & language → Language & region → Regional format** (or legacy **Control Panel → Region**) can override the default patterns for `CultureInfo.CurrentCulture` when those customizations apply. Standard invariant specifiers (`"O"`, `"s"`, `"u"`, `"R"`) are not affected.

Implications for {{% ctx %}} flows:

* Block examples in this documentation that use `en-GB` assume a server configured with that culture. Results on a server set to `en-US` or another locale will differ for culture-sensitive patterns.
* Flows that must produce consistent text across servers should use [Invariant Culture][], [ISO 8601 Standard][], or an explicit [Specific Culture][]—not an unspecified **Format Provider** combined with culture-sensitive templates.
* In clustered deployments, align operating system culture and regional settings on every node so `CultureInfo.CurrentCulture` behaves the same everywhere. See [Current Culture][].

[Convert Text To DateTime][] and [Convert Date Time To Text][] note that changes to operating system date and time formats can change example results when a culture-sensitive provider is used.

For more information, see [Control Panel settings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings#control-panel-settings) in the .NET documentation.

## Remarks

### Known limitations

* Formatting and parsing depend on cultures installed on the server. An invalid culture name (for example `new CultureInfo("enaa")`) throws [CultureInfoNotFoundException][].
* [DateTime][] values without a clear `DateTimeKind` can produce ambiguous text and parsing results; prefer [DateTimeOffset][] when the offset must be preserved. See [What is Date and Time?][].
* Custom format templates are culture-sensitive for month and day **names** but use invariant digits for numeric components unless a provider supplies different rules.
* {{% ctx %}} date and time blocks do not apply time zone or daylight saving rules; only the offset on the value affects `zzz` / `K` output.

## See Also

### Related Concepts

* [What is Date and Time?][] — date and time types and block overview
* [Culture][] — culture types and when to use each
* [Invariant Culture][] — culture-insensitive formatting defaults
* [Current Culture][] — server regional settings
* [Specific Cultures][] — fixed locale formatting
* [Formatting][] — composite text formatting with format providers

### Related Data Types

* [DateTime][]
* [DateTimeOffset][]
* [CultureInfo][]
* [IFormatProvider][]

### Related Blocks

* [Convert Text To DateTime][]
* [Convert Date Time To Text][]
* [Convert Object To Text][]
* [Convert Object To Json][]

### External Documentation

* [Standard date and time format strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
* [Custom date and time format strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
* [Parsing dates and times in .NET](https://learn.microsoft.com/en-us/dotnet/standard/base-types/parsing-datetime)
* [Date and time values and their use in .NET](https://learn.microsoft.com/en-us/dotnet/standard/datetime/)
* [Composite formatting](https://learn.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting)

[What is Date and Time?]: {{< ref "what-is-date-and-time.md" >}}
[Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.MainDoc" >}}
[Invariant Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[Current Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.CurrentCulture.MainDoc" >}}
[Specific Cultures]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.SpecificCultures.MainDoc" >}}
[Specific Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.SpecificCultures.MainDoc" >}}
[Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Formatting.MainDoc" >}}

[DateTime]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[CultureInfo]: {{< url path="Cortex.Reference.DataTypes.Text.CultureInfo.MainDoc" >}}
[IFormatProvider]: {{< url path="Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}
[CultureInfoNotFoundException]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfoNotFoundException" >}}

[Convert Text To DateTime]: {{< url path="Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertTextToDateTime.MainDoc" >}}
[Convert Date Time To Text]: {{< url path="Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertDateTimeToText.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[short date ("d") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.ShortDateFormat" >}}
[short time ("t") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.ShortTimeFormat" >}}
[long date ("D") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.LongDateFormat" >}}
[long time ("T") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.LongTimeFormat" >}}
[full date short time ("f") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.FullDateShortTimeFormat" >}}
[full date long time ("F") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.FullDateLongTimeFormat" >}}
[general date short time ("g") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.GeneralDateShortTimeFormat" >}}
[general date long time ("G") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.GeneralDateLongTimeFormat" >}}
[round-trip ("O", "o") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.RoundTripFormat" >}}
[RFC1123 ("R", "r") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.RFC1123Format" >}}
[sortable ("s") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.SortableFormat" >}}
[universal sortable ("u") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.UniversalSortableFormat" >}}
[universal full ("U") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.UniversalFullFormat" >}}
[month ("M", "m") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.MonthDayFormat" >}}
[year month ("Y") format specifier]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.YearMonthFormat" >}}

[FormatException]: {{< url path="MSDocs.DotNet.Api.System.FormatException" >}}

[ISO 8601 Standard]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Operating System Settings]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.OperatingSystemSettings" >}}
