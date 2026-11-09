---
title: "Specific Cultures"
linkTitle: "Specific Cultures"
description: "How specific and neutral cultures provide explicit locale control for formatting, parsing, casing, and comparison in CORTEX flows."
weight: 300
---

# {{% param title %}}

## Summary

A **specific culture** is a `CultureInfo` value that identifies both a **language and a region**—for example `en-GB` (British English) or `en-US` (American English). It supplies culture-sensitive rules for dates, times, numbers, currency, text casing, and string sorting that are **fixed by the culture name**, not by whatever regional settings happen to be on the server.

In {{% ctx %}} and .NET, create a specific culture with a language tag such as `new CultureInfo("en-GB")` and pass it as an [IFormatProvider][] to formatting APIs or to block properties named **Format Provider** or **Culture Info**.

Use a specific culture when output or comparisons must follow a **known locale** regardless of server configuration—for example Gateway users in `en-GB` while the flow server runs `en-US`, or multi-node clusters where every node must format the same way. Use [Current Culture][] when the server's locale is intentionally the source of truth, or [Invariant Culture][] when behaviour must not depend on any locale.

A **neutral culture** identifies a language only (for example `new CultureInfo("en")`). Neutral cultures are culture-sensitive but not tied to a country or region. If a specific culture is not available on the operating system, .NET can fall back to the associated neutral culture.

For an overview of all culture types, see [What is a Culture?][].

## Specific cultures and neutral cultures

| | Specific culture | Neutral culture |
| --- | --- | --- |
| Example name | `en-GB`, `fr-FR`, `ja-JP` | `en`, `fr`, `ja` |
| Identifies | Language **and** region | Language only |
| Typical creation | `new CultureInfo("en-GB")` | `new CultureInfo("en")` |
| Formatting | Region-specific date, time, and number patterns | Language defaults; less precise for regional display |
| Fallback | If `en-GB` is missing, .NET may use `en` | Parent of specific cultures in the culture hierarchy |

Specific cultures are the usual choice for **user-facing** regional formatting when you know the target locale. Neutral cultures are appropriate when only the language matters, or when you rely on .NET fallback behaviour.

To obtain a specific culture from a neutral name, .NET provides `CultureInfo.CreateSpecificCulture("en")` (the exact result depends on the operating system—for example `en-US` on many Windows installations). Prefer an explicit tag such as `en-GB` when the region is known.

## Obtaining a specific culture

| Approach | Expression | Notes |
| --- | --- | --- |
| Constructor | `new CultureInfo("en-GB")` | Creates a new instance; may reflect user overrides on Windows when the second parameter is omitted or `true` |
| Constructor without user overrides | `new CultureInfo("en-GB", false)` | Uses standard patterns for the culture name, not Control Panel customizations |
| Cached instance | `CultureInfo.GetCultureInfo("en-GB")` | Returns a read-only, cached `CultureInfo`; same culture name returns the same instance |
| From neutral name | `CultureInfo.CreateSpecificCulture("en")` | Maps a neutral culture to a default specific culture for the platform |

Pass the value to `String.Format`, `DateTime.ToString`, `Convert.ToString`, or to block **Format Provider** / **Culture Info** properties.

### Culture names and supported codes

Culture names follow [BCP 47](https://www.rfc-editor.org/info/bcp47) language tags: a language subtag, optionally followed by a region (for example `en-GB`, `pt-BR`). The name passed to `new CultureInfo(...)` is case-insensitive in .NET.

For a list of predefined cultures on Windows systems, see [Supported Culture Codes][]—the **Language tag** column is the string passed to the constructor. Cultures must be **installed or available** on the server where the flow runs; an unknown or unavailable name throws [CultureInfoNotFoundException][].

See also [Custom Cultures][] for cultures registered on the operating system beyond the built-in set.

## What a specific culture controls

A specific culture provides the same kinds of data as [Current Culture][]—`DateTimeFormatInfo`, `NumberFormatInfo`, `TextInfo`, compare info, and calendar settings—but values come from the **named culture definition** on the server, not from the thread's current locale (unless that locale happens to match).

| Area | Behaviour with a specific culture | More information |
| --- | --- | --- |
| Dates and times | Short/long patterns and separators for the named locale (for example `dd/MM/yyyy` for `en-GB` versus `MM/dd/yyyy` for `en-US`) | [Date and Time Formatting][], [Operating System Settings][] |
| Numbers | Decimal separator, group sizes, and currency symbols for the named locale | [Formatting][] |
| Text casing | Culture-sensitive rules for that locale (for example Turkish *I* / *ı* with `tr-TR`) | [Casing][] |
| Text comparison | `StringComparison` and `StringComparer` values that use a supplied `CultureInfo` follow that culture's sort rules | [Equality][] |
| Composite formatting | Placeholders in format templates use the supplied culture's number and date formats | [Format Text With Values][], [Format Text With Value][] |

### Dates and times

When you pass `new CultureInfo("en-GB")` to [Convert Date Time To Text][] or set it as **Format Provider**, standard format specifiers such as `"d"` (short date) use patterns defined for **that culture**. Cross-culture invariant specifiers (`"O"`, `"s"`, `"u"`, and similar) keep their invariant definitions regardless of which `CultureInfo` you pass.

### Numbers and composite text

Numeric placeholders in a format string use the specific culture's decimal and group separators. Set **Format Provider** to `new CultureInfo("en-GB")` on [Format Text With Values][] or [Convert Object To Text][] when output must match that locale.

Many blocks default to [Invariant Culture][] when **Format Provider** is omitted or `null`; they do **not** automatically use a specific culture.

### Casing

Pass a specific `CultureInfo` to [Convert To Lowercase][] or [Convert To Uppercase][] so casing follows that locale's rules—for example `new CultureInfo("tr-TR")` for Turkish casing behaviour. The default **Culture Info** on those blocks is `CultureInfo.InvariantCulture`.

### String comparison

To compare or search text using a fixed locale's sort rules, use a `StringComparer` or `StringComparison` option that is tied to the intended culture (see [Equality][]), or pass the culture into APIs that accept `CultureInfo`. Text blocks with **Comparison Type** (for example [Contains Any Text][], [Find And Replace Text][]) can use culture-sensitive options when comparisons must follow a named locale rather than the server default.

For identifiers, security checks, or protocol values, prefer [Invariant Culture][] or ordinal comparison so results stay stable.

## When to use a specific culture

Use an explicit specific culture when:

* **User or business locale is known** — Gateway forms, reports, or integrations target `en-GB`, `de-DE`, or another fixed region.
* **Server locale ≠ audience locale** — the flow server and the user are in different regions; do not rely on [Current Culture][].
* **Consistent output on every server** — all cluster nodes format and compare the same way without depending on each machine's regional settings.
* **Tests and documentation** — flows should behave the same in development, test, and production for a named locale.
* **Regional differences within a language** — `en-US` and `en-GB` differ in date order, currency, and other patterns; pick the tag that matches the audience.

## When not to use a specific culture

Avoid assuming a specific culture when:

* **Culture-independent storage or protocols** — use [Invariant Culture][] for logs, file names, APIs, and database fields that must parse identically everywhere.
* **Security or internal identifiers** — use [Invariant Culture][] or ordinal rules so behaviour does not change with locale choice.
* **Server locale is the intended source** — if the machine is configured for the target region and that is acceptable, [Current Culture][] may be enough; still document the dependency on OS settings.
* **Culture is not installed** — `new CultureInfo("xx-YY")` throws if the culture is unavailable; verify cultures on every execution environment or handle [CultureInfoNotFoundException][].

If you only need a language without a region, a neutral culture (`new CultureInfo("en")`) or `CreateSpecificCulture` may suffice; for user-visible regional formatting, prefer an explicit specific tag.

## Using a specific culture in blocks

The specific culture is **opt-in** in most blocks:

| Scenario | Typical approach |
| --- | --- |
| Format dates, numbers, or composite text for a known locale | Set **Format Provider** to `new CultureInfo("en-GB")` (or a variable holding that value) |
| Change case using a locale's rules | Set **Culture Info** to `new CultureInfo("tr-TR")` (or the required culture) |
| Compare or search text using a fixed sort order | Set **Comparison Type** or culture-related properties per the block's remarks |
| Default when property omitted or `null` | Usually [Invariant Culture][] — check each block |

Store the culture in a variable when the same locale is used in many blocks.

## User overrides (Windows)

On Windows, end users can customize date, time, and number formats in **Regional settings**. When `new CultureInfo("en-GB")` is called with default constructor behaviour, those **user overrides** can apply to formatting for that culture.

When flows require **standard** patterns for the culture name (for example consistent `en-GB` short dates across all servers), use:

* `new CultureInfo("en-GB", false)` — disable user overrides for that instance, or
* `CultureInfo.GetCultureInfo("en-GB")` — cached culture without user customizations.

This differs from [Current Culture][], which reflects the server's active locale and may include system-wide or user-specific overrides. See [CultureInfo(String, Boolean)][MS CultureInfo ctor] in .NET documentation.

## Fallback and parent cultures

If resources for a specific culture are not available on the operating system, .NET falls back to the associated **neutral culture** (for example from `en-GB` to `en`). The [CultureInfo.Parent][] property exposes this hierarchy.

Fallback affects installed cultures and resources; it does not turn a specific culture into [Invariant Culture][]. For culture-insensitive behaviour, pass `CultureInfo.InvariantCulture` explicitly.

## Security and display

Microsoft guidance for .NET applies to {{% ctx %}} flows:

* **Display to users** — formatting and sorting in Gateway or reports should use a **culture-sensitive** culture that matches the audience, usually a specific culture you choose explicitly.
* **Internal or security use** — do not use culture-sensitive formatting or `StringComparison.CurrentCulture` for security decisions, stored keys, or protocol values when the culture might not match the security domain; use [Invariant Culture][] or ordinal comparison.

## Specific culture vs other cultures

| | [Specific Culture][] | [Current Culture][] | [Invariant Culture][] |
| --- | --- | --- | --- |
| Source | `new CultureInfo("en-GB")`, etc. | `CultureInfo.CurrentCulture` | `CultureInfo.InvariantCulture` |
| Tied to server OS settings | No (fixed by name) | Yes | No |
| Changes when OS regional settings change | Only if culture definition or overrides for that name change | Yes | No |
| Typical block default when provider is `null` | No (usually invariant) | No (usually invariant) | Yes (many formatting/casing blocks) |
| Typical use | Known locale for users or contracts | Server-local presentation when locale is intentional | Persistence, protocols, defaults |

## Remarks

### Known Limitations

* **Installed cultures** — A culture code that works on one machine may throw [CultureInfoNotFoundException][] on another unless the same culture is installed or registered. Test on every environment where flows execute.
* **Neutral vs specific** — `new CultureInfo("en")` is a neutral culture; date and number patterns may not match a particular country. Use `en-GB`, `en-US`, or another specific tag when the region matters.
* **User locale ≠ server locale** — An explicit specific culture fixes formatting for the chosen name; it does not automatically detect a Gateway user's browser locale unless your flow supplies that code.
* **Custom cultures** — Organisations may register [Custom Cultures][] on Windows; behaviour depends on that registration on each server.
* **Platform differences** — `CreateSpecificCulture("en")` may return different specific cultures on different operating systems; prefer explicit tags when consistency is required.

## See Also

### Related Concepts

* [What is a Culture?][]
* [Invariant Culture][]
* [Current Culture][]
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
* [Contains Any Text][]
* [Find And Replace Text][]

### External Documentation

* [CultureInfo class](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo)
* [CultureInfo.GetCultureInfo](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo.getcultureinfo)
* [CultureInfo.CreateSpecificCulture](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo.createspecificculture)
* [CultureInfo.Parent property](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo.parent)
* [Best practices for comparing strings in .NET](https://learn.microsoft.com/en-us/dotnet/standard/base-types/best-practices-strings)
* [Performing culture-insensitive string operations](https://learn.microsoft.com/en-us/dotnet/core/extensions/performing-culture-insensitive-string-operations)
* [Supported Culture Codes][]
* [System.Globalization.CultureInfo][MS CultureInfo]

[What is a Culture?]: {{< ref "what-is-a-culture.md" >}}
[Invariant Culture]: {{< ref "invariant-culture.md" >}}
[Current Culture]: {{< ref "current-culture.md" >}}
[Specific Culture]: {{< ref "specific-cultures.md" >}}
[Custom Cultures]: {{< ref "custom-cultures.md" >}}

[Casing]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Casing.MainDoc" >}}
[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Formatting.MainDoc" >}}
[Date and Time Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.MainDoc" >}}
[Operating System Settings]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.OperatingSystemSettings" >}}

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
[Contains Any Text]: {{< url path="Cortex.Reference.Blocks.Text.ContainsText.ContainsAnyText.MainDoc" >}}
[Find And Replace Text]: {{< url path="Cortex.Reference.Blocks.Text.FindAndReplaceText.FindAndReplaceText.MainDoc" >}}

[Supported Culture Codes]: {{< url path="MSDocs.CSharp.SupportedCultureCodes" >}}
[MS CultureInfo]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfo" >}}
[MS CultureInfo ctor]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfoCtor" >}}
[CultureInfo.Parent]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfoParent" >}}
