---
title: "Invariant Culture"
linkTitle: "Invariant Culture"
description: "How the invariant culture provides culture-independent formatting, parsing, casing, and comparison in CORTEX flows."
weight: 100
---

# {{% param title %}}

## Summary

The **invariant culture** is a `CultureInfo` value that is **culture-insensitive**: it is associated with the English language but not with any country or region. Casing rules, string sort order, and patterns for dates, times, and numbers stay **consistent across servers** and are **not affected** when the operating system regional settings change.

In {{% ctx %}} and .NET, the invariant culture is represented by `CultureInfo.InvariantCulture` (or `new CultureInfo("")`). It implements [IFormatProvider][] and is the typical default when a block's **Format Provider** or **Culture Info** property is omitted or set to `null`.

Use the invariant culture when data must be stored, compared, or exchanged in a **culture-independent** form—for example log files, protocol payloads, identifiers, or values passed between flows on different servers. Use a [Current Culture][] or [Specific Culture][] when output is shown to users and must follow a particular locale.

For an overview of all culture types, see [What is a Culture?][].

## Obtaining the invariant culture

| Approach | Expression | Notes |
| --- | --- | --- |
| Static property | `CultureInfo.InvariantCulture` | Preferred; returns the shared invariant instance |
| Empty culture name | `new CultureInfo("")` | Equivalent culture; creates a new instance |

Pass the value to formatting APIs (`String.Format`, `DateTime.ToString`, `Convert.ToString`) or to block properties named **Format Provider** or **Culture Info**.

## What the invariant culture controls

The invariant culture supplies the same `CultureInfo` data that other cultures provide—calendar, `DateTimeFormatInfo`, `NumberFormatInfo`, `TextInfo`, and sort rules—but those settings are **fixed** and cannot be customized through Windows regional options. The [glossary][Invariant Culture glossary] describes this as a stable, unchanging rule set.

| Area | Behaviour with invariant culture | More information |
| --- | --- | --- |
| Dates and times | Fixed patterns (for example US-style month/day order in default `DateTimeOffset` output) | [Date and Time Formatting][], [Convert Date Time To Text][] |
| Numbers | Fixed decimal, group, and currency symbols | [Formatting][] |
| Text casing | Culture-insensitive casing rules (not tied to the server's current locale) | [Casing][] |
| Text comparison | `StringComparison.InvariantCulture` and `StringComparer.InvariantCulture` use the invariant culture's sort rules | [Equality][] |
| Composite formatting | Placeholders in format templates use invariant number and date formats | [Format Text With Values][], [Format Text With Value][] |

### Dates and times

When [Convert Date Time To Text][] runs with `CultureInfo.InvariantCulture` and no custom format template, the default text representation uses the invariant short date and time pattern (for example `12/31/2021 00:00:00 +00:00` for `2021-12-31T00:00:00+00:00`). Standard format specifiers such as `"F"` (full date long time) use invariant long patterns (for example `Friday, 31 December 2021 00:00:00`).

Some standard date/time format strings (`"O"`, `"o"`, `"R"`, `"r"`, `"s"`, and `"u"`) are defined by the invariant culture and produce representations intended to be **identical across cultures**—useful for persistence and round-tripping. See [Date and Time Formatting][] and [standard date and time format strings][MS Standard DateTime Formats].

### Numbers and composite text

Formatting numeric placeholders in a format template with `CultureInfo.InvariantCulture` uses invariant decimal separators and group sizes. Several text-formatting blocks default to invariant culture when **Format Provider** is not set; see [Defaults in blocks](#defaults-in-blocks).

### Casing

For the invariant culture, rules that change text case are **not** based on the server's [Current Culture][]. Blocks such as [Convert To Lowercase][] and [Convert To Uppercase][] document a **culture-insensitive** conversion with default `CultureInfo.InvariantCulture`.

If you pass a different `CultureInfo` to a casing block, that culture's rules apply instead.

### String comparison

`StringComparison.InvariantCulture` and `StringComparison.InvariantCultureIgnoreCase` compare strings using the **invariant culture's linguistic sort rules**, not ordinal (byte) comparison. They are still useful when comparisons must not follow the server's current locale—for example internal identifiers—but must respect culture-independent sort semantics.

For ordinal comparisons (no culture), use `StringComparison.Ordinal` or `StringComparison.OrdinalIgnoreCase`. See [Equality][].

## When to use the invariant culture

Use `CultureInfo.InvariantCulture` when:

* **Persisting or transmitting data** — file names, configuration, database fields, or message formats that must parse the same on every server
* **Internal logic** — comparing tokens, protocol values, or symbolic names that are not shown to end users
* **Consistent block defaults** — relying on the default **Format Provider** so flows behave the same in development, test, and production regardless of server locale
* **Security-sensitive operations** — string comparisons or case changes that must not change when `CurrentCulture` changes (see [Security and display](#security-and-display))

Prefer [Specific Cultures][] (for example `new CultureInfo("en-GB")`) or [Current Culture][] when presenting dates, times, numbers, or text to users in a particular regional format.

## When not to use the invariant culture

The invariant culture is **not** a substitute for localization. Results can be **linguistically incorrect** or **culturally inappropriate** for user-facing text—for example sorting or casing that does not match user expectations, or date formats that do not match the user's region.

Do not use invariant culture for display-only formatting when the audience expects a specific locale; set an explicit culture instead.

## Defaults in blocks

Many blocks use `CultureInfo.InvariantCulture` when no format provider is supplied or when the property is `null`:

| Block / property | Default or null behaviour |
| --- | --- |
| [Format Text With Values][] — **Format Provider** | `CultureInfo.InvariantCulture` |
| [Format Text With Value][] — **Format Provider** | `CultureInfo.InvariantCulture` |
| [Convert Object To Text][] — **Format Provider** | `CultureInfo.InvariantCulture` |
| [Convert Date Time To Text][] — **Format Provider** | `CultureInfo.InvariantCulture` |
| [Convert To Lowercase][], [Convert To Uppercase][], [Convert To Camel Case][], [Convert To Pascal Case][], [Convert To Title Case][] — **Culture Info** | `CultureInfo.InvariantCulture`; `null` is treated as invariant |

Always check a block's **Format Provider** or **Culture Info** remarks if behaviour must differ from these defaults.

## Security and display

Microsoft guidance for .NET applies to {{% ctx %}} flows as well:

* **Display to users** — sorting and formatting shown in Gateway or reports should usually be **culture-sensitive** (often [Current Culture][] or a chosen [Specific Culture][]).
* **Internal or security use** — comparisons and case changes that affect security or stored identifiers should be **culture-insensitive**; pass `CultureInfo.InvariantCulture` (or use `StringComparison.InvariantCulture` / `StringComparer.InvariantCulture` in expressions) so results do not depend on the server's regional settings.

If a security decision depends on a string comparison or case-change operation, use the invariant culture (or ordinal comparison where appropriate) so behaviour stays consistent. Restrict invariant culture to operations that genuinely require culture-independent results; for general user-visible text, use the appropriate user or regional culture.

## Invariant culture vs other cultures

| | Invariant | [Current Culture][] | [Specific Culture][] |
| --- | --- | --- | --- |
| Source | `CultureInfo.InvariantCulture` | `CultureInfo.CurrentCulture` | `new CultureInfo("en-GB")`, etc. |
| Tied to server OS settings | No | Yes | No (fixed by culture name) |
| Customizable via Control Panel | No | Yes (overrides possible) | Per-culture install |
| Typical use | Persistence, protocols, defaults | Server-local presentation | Known locale for users |

## Remarks

### Known Limitations

* The invariant culture reflects **English-based, region-neutral** conventions. It does not represent "no culture"—ordinal comparisons and some Unicode rules are separate concerns; see [Equality][].
* **User locale ≠ server locale.** Invariant or current server culture does not automatically match a Gateway user's language or region; pass an explicit [Specific Culture][] when that matters.
* Invalid culture identifiers (for example `new CultureInfo("enaa")`) still throw [CultureInfoNotFoundException][]; only `""` and `InvariantCulture` refer to the invariant culture.

## See Also

### Related Concepts

* [What is a Culture?][]
* [Current Culture][]
* [Specific Cultures][]
* [Custom Cultures][]
* [Casing][]
* [Equality][]
* [Formatting][]
* [Date and Time Formatting][]

### Related Data Types

* [CultureInfo][]
* [IFormatProvider][]
* [StringComparison][]
* [StringComparer][]

### Related Blocks

* [Format Text With Values][]
* [Format Text With Value][]
* [Convert Object To Text][]
* [Convert Date Time To Text][]
* [Convert To Lowercase][]
* [Convert To Uppercase][]
* [Convert To Camel Case][]
* [Convert To Pascal Case][]
* [Convert To Title Case][]

### External Documentation

* [CultureInfo.InvariantCulture](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo.invariantculture)
* [Performing culture-insensitive string operations](https://learn.microsoft.com/en-us/dotnet/core/extensions/performing-culture-insensitive-string-operations)
* [Best practices for comparing strings in .NET](https://learn.microsoft.com/en-us/dotnet/standard/base-types/best-practices-strings)
* [Standard date and time format strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
* [System.Globalization.CultureInfo][MS CultureInfo]

[What is a Culture?]: {{< ref "what-is-a-culture.md" >}}
[Current Culture]: {{< ref "current-culture.md" >}}
[Specific Cultures]: {{< ref "specific-cultures.md" >}}
[Specific Culture]: {{< ref "specific-cultures.md" >}}
[Custom Cultures]: {{< ref "custom-cultures.md" >}}

[Casing]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Casing.MainDoc" >}}
[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Formatting.MainDoc" >}}
[Date and Time Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.MainDoc" >}}

[CultureInfo]: {{< url path="Cortex.Reference.DataTypes.Text.CultureInfo.MainDoc" >}}
[IFormatProvider]: {{< url path="Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}
[StringComparison]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}
[StringComparer]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparer.MainDoc" >}}
[CultureInfoNotFoundException]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfoNotFoundException" >}}

[Format Text With Values]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.MainDoc" >}}
[Format Text With Value]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValue.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Date Time To Text]: {{< url path="Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertDateTimeToText.MainDoc" >}}
[Convert To Lowercase]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToLowerCase.MainDoc" >}}
[Convert To Uppercase]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToUpperCase.MainDoc" >}}
[Convert To Camel Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToCamelCase.MainDoc" >}}
[Convert To Pascal Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToPascalCase.MainDoc" >}}
[Convert To Title Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToTitleCase.MainDoc" >}}

[Invariant Culture glossary]: {{< url path="Cortex.Reference.Glossary.F-J.InvariantCulture" >}}
[MS CultureInfo]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfo" >}}
[MS Standard DateTime Formats]: https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings
