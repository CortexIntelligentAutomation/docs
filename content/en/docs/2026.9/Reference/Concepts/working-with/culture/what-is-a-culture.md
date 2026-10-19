---
title: "What is a Culture?"
linkTitle: "What is a Culture?"
description: "Information regarding what a culture is, how it affects formatting and comparison in flows, and the types of culture supported in CORTEX."
weight: 1
---

# {{% param title %}}

## Summary

A **culture** is a set of language and regional conventions that control how text, dates, times, and numbers are formatted, parsed, sorted, and compared. Cultures define patterns such as date order (`1/7/2022` versus `7/1/2022`), decimal separators, currency symbols, calendar rules, and casing behaviour.

In {{% ctx %}}, culture settings are represented by the [CultureInfo][] data type (`System.Globalization.CultureInfo`). A `CultureInfo` value is often passed as an [IFormatProvider][] to control formatting in blocks and expressions—for example when converting a [DateTime][] to text or formatting currency in a template.

Which culture applies at runtime matters because the same value can produce different text on different systems. Flows that run on multiple servers should use an explicit culture when consistent output is required, or ensure that all execution environments share the same operating system regional settings when relying on the [Current Culture][].

| Area | What culture affects | More information |
| --- | --- | --- |
| Text | Casing, equality, sorting | [Casing][], [Equality][] |
| Dates and times | Format and parse patterns | [Date and Time Formatting][] |
| Numbers | Decimal, currency, and percentage formats | [Formatting][] (text and numeric format specifiers) |

For how to create and pass `CultureInfo` values in blocks and the [Expression Editor][], see [Creating and using cultures](#creating-and-using-cultures) below and the [CultureInfo][] data type page.

## Types of Culture

{{% ctx %}} supports the culture categories described on the [CultureInfo][] data type and in the pages in this section. The table below summarises each type; follow the links for detail and usage guidance.

| Type | Typical source | Culture-sensitive? | When to use |
| --- | --- | --- | --- |
| [Invariant Culture][] | `CultureInfo.InvariantCulture` or `new CultureInfo("")` | No | Persisting or exchanging data in a culture-independent format; default for some formatting blocks when no provider is specified |
| [Current Culture][] | `CultureInfo.CurrentCulture` (operating system of the server running the flow) | Yes | Presenting dates, times, and numbers in the end user's regional format when the server locale matches that expectation |
| [Specific Cultures][] | `new CultureInfo("en-GB")`, `new CultureInfo("en-US")`, and similar language–region codes | Yes | Explicit control over formatting or comparison for a known locale, independent of server settings |
| [Custom Cultures][] | Cultures registered on the operating system beyond the built-in set | Yes | Organisations that define custom regional settings on Windows |

### Invariant Culture

The [Invariant Culture][] is culture-insensitive. It is associated with the English language but not with any country or region, so casing rules, string sort order, and date and number formats remain consistent across systems. This is useful when storing or transmitting data that must not depend on the server's regional settings.

See [Invariant Culture][] for more detail.

### Current Culture

The [Current Culture][] reflects the regional settings of the operating system on the server where the flow execution runs. Casing, sorting, and format patterns therefore depend on how that server is configured and may differ between environments in a cluster.

When flows rely on the current culture, all servers in the cluster should use the same operating system culture and related regional settings (and should be time synchronised) so that behaviour is predictable. See [Current Culture][] and [Operating System Settings][].

### Specific Cultures

A **specific culture** identifies both a language and a region—for example `en-GB` (British English) or `en-US` (American English). Create one with a language tag such as `new CultureInfo("en-GB")`.

A **neutral culture** identifies a language only (for example `new CultureInfo("en")`) and is not tied to a country or region. If resources for a specific culture are not available on the operating system, .NET falls back to the associated neutral culture.

For a list of predefined cultures available on Windows systems, see [Supported Culture Codes][] (the `Language tag` column defines the code passed to `new CultureInfo(...)`). See also [Specific Cultures][].

### Custom Cultures

**Custom cultures** are cultures defined and registered on the operating system in addition to the built-in set. They follow the same rules as other culture-sensitive cultures: formatting, parsing, and comparison depend on the custom definition installed on the server.

See [Custom Cultures][].

## Creating and using cultures

### In expressions

Common ways to obtain a `CultureInfo` value in the [Expression Editor][]:

| Culture | Expression |
| --- | --- |
| Invariant | `CultureInfo.InvariantCulture` or `new CultureInfo("")` |
| Current | `CultureInfo.CurrentCulture` |
| Specific | `new CultureInfo("en-GB")` |
| Neutral | `new CultureInfo("en")` |

`CultureInfo` implements [IFormatProvider][]. Pass it to formatting APIs (for example `String.Format`, `DateTime.ToString`, or `Convert.ToString`) or to block properties named **Format Provider** or **Culture Info** so that the chosen rules apply to the operation.

### In blocks

Several blocks accept a [CultureInfo][] or [IFormatProvider][] property—for example [Format Text With Values][], [Format Text With Value][], [Convert Object To Text][], and [Convert To Lowercase][] / [Convert To Uppercase][] (via **Culture Info**). When a format provider is omitted or `null`, formatting blocks typically default to [Invariant Culture][]; see each block's remarks for its default.

### Invalid cultures

If an invalid culture identifier is supplied where an [IFormatProvider][] is required (for example `new CultureInfo("enaa")`), a [CultureInfoNotFoundException][] is thrown.

## Remarks

### Known Limitations

* Culture behaviour depends on the cultures installed on the operating system of the server running the flow. A culture code that works on one machine may not be available on another unless the same culture is installed or registered.
* [Current Culture][] reflects the server locale, not necessarily the locale of the user viewing a Gateway form or report. Use an explicit [Specific Culture][Specific Cultures] when output must match a known locale regardless of server settings.
* [Custom Cultures][] are platform-specific; document and test them on every environment where flows execute.

## See Also

### Related Concepts

* [Casing][] — culture-specific rules for changing text case
* [Equality][] — culture-sensitive and culture-insensitive text comparison (`StringComparison`)
* [Formatting][] — composite formatting and format providers for text
* [Date and Time Formatting][] — standard and custom date/time patterns; [Operating System Settings][]

### Related Data Types

* [CultureInfo][]
* [IFormatProvider][]

### Related Blocks

* [Format Text With Values][]
* [Format Text With Value][]
* [Convert Object To Text][]
* [Convert To Lowercase][]
* [Convert To Uppercase][]

### External Documentation

* [Supported Culture Codes][]
* [System.Globalization.CultureInfo][]
* [System.IFormatProvider][]
* [Performing culture-insensitive string operations](https://learn.microsoft.com/en-us/dotnet/core/extensions/performing-culture-insensitive-string-operations)
* [Best practices for comparing strings in .NET](https://learn.microsoft.com/en-us/dotnet/standard/base-types/best-practices-strings)

[Invariant Culture]: {{< ref "invariant-culture.md" >}}
[Current Culture]: {{< ref "current-culture.md" >}}
[Specific Cultures]: {{< ref "specific-cultures.md" >}}
[Custom Cultures]: {{< ref "custom-cultures.md" >}}

[Casing]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Casing.MainDoc" >}}
[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Formatting.MainDoc" >}}
[Date and Time Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.MainDoc" >}}
[Operating System Settings]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.OperatingSystemSettings" >}}

[CultureInfo]: {{< url path="Cortex.Reference.DataTypes.Text.CultureInfo.MainDoc" >}}
[IFormatProvider]: {{< url path="Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}
[DateTime]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[CultureInfoNotFoundException]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfoNotFoundException" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Format Text With Values]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.MainDoc" >}}
[Format Text With Value]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValue.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert To Lowercase]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToLowerCase.MainDoc" >}}
[Convert To Uppercase]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToUpperCase.MainDoc" >}}

[Supported Culture Codes]: {{< url path="MSDocs.CSharp.SupportedCultureCodes" >}}
[System.Globalization.CultureInfo]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfo" >}}
[System.IFormatProvider]: {{< url path="MSDocs.DotNet.Api.System.IFormatProvider" >}}
