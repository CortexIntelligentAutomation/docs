---
title: "Current Culture"
linkTitle: "Current Culture"
description: "How the current culture reflects server regional settings and affects formatting, parsing, casing, and comparison in CORTEX flows."
weight: 200
---

# {{% param title %}}

## Summary

The **current culture** is the `CultureInfo` value that represents the **culture-sensitive regional settings of the server** where a flow runs. In .NET and {{% ctx %}} it is exposed as `CultureInfo.CurrentCulture`.

The current culture controls default patterns for dates, times, numbers, and currency; the sort order of text; casing conventions; and culture-sensitive string comparisons. Those rules come from the operating system (and, on Windows, may include user overrides from **Regional settings**). They can differ between development, test, and production servers, and between nodes in a cluster.

Use the current culture when formatted output or comparisons should follow the **server's locale** and that locale is known to match what users expect—for example a single-server deployment configured for the target region. Use an explicit [Specific Culture][] when the locale must be fixed regardless of server settings, or [Invariant Culture][] when behaviour must not depend on regional settings.

For an overview of all culture types, see [What is a Culture?][].

## Obtaining the current culture

| Approach | Expression | Notes |
| --- | --- | --- |
| Static property | `CultureInfo.CurrentCulture` | Returns the culture for the executing thread |

Pass the value to formatting APIs (`String.Format`, `DateTime.ToString`, `Convert.ToString`) or to block properties named **Format Provider** or **Culture Info** when you want operations to use the server's regional rules.

{{% ctx %}} does not change `CultureInfo.CurrentCulture` for you. Unless a flow or expression sets the culture explicitly, it reflects how the **server operating system** is configured at runtime.

## What the current culture controls

The object returned by `CultureInfo.CurrentCulture` supplies the same kinds of data as other cultures—`DateTimeFormatInfo`, `NumberFormatInfo`, `TextInfo`, compare info, and calendar settings—but those values follow the **installed and configured locale** of the server (subject to .NET thread and user-override rules described below).

| Area | Behaviour with current culture | More information |
| --- | --- | --- |
| Dates and times | Short/long patterns and separators from the server locale (for example `dd/MM/yyyy` versus `MM/dd/yyyy`) | [Date and Time Formatting][], [Operating System Settings][] |
| Numbers | Decimal separator, group sizes, and currency symbols from the server locale | [Formatting][] |
| Text casing | Rules from the server's culture (for example Turkish *I* / *ı*) | [Casing][] |
| Text comparison | `StringComparison.CurrentCulture` and `StringComparer.CurrentCulture` use the current culture's sort rules | [Equality][] |
| Composite formatting | Placeholders in format templates use the current culture's number and date formats | [Format Text With Values][], [Format Text With Value][] |

### Dates and times

When you pass `CultureInfo.CurrentCulture` to [Convert Date Time To Text][] or use it as a **Format Provider**, standard format specifiers such as `"d"` (short date) and `"G"` (general date long time) use patterns defined for the **current culture**, which on Windows can reflect **Control Panel** regional customizations when they apply to `CurrentCulture`. See [Operating System Settings][] and [standard date and time format strings][MS Standard DateTime Formats].

Formats intended to be identical across cultures (`"O"`, `"s"`, `"u"`, and similar) are still defined in terms of the invariant culture; using `CurrentCulture` does not change those specifiers' cross-culture definitions.

### Numbers and composite text

Numeric placeholders in a format template respect the current culture's decimal and group separators. To format for the server locale, set **Format Provider** to `CultureInfo.CurrentCulture` on blocks such as [Format Text With Values][] or [Convert Object To Text][].

Many blocks default to [Invariant Culture][] when **Format Provider** is omitted or `null`; they do **not** automatically use the current culture. See [Using the current culture in blocks](#using-the-current-culture-in-blocks).

### Casing

When you pass `CultureInfo.CurrentCulture` to blocks such as [Convert To Lowercase][] or [Convert To Uppercase][], casing follows the **culture-sensitive** rules of the server's current culture (for example `TextInfo.ToUpper` behaviour).

The default **Culture Info** on those blocks is `CultureInfo.InvariantCulture`, not the current culture.

### String comparison

`StringComparison.CurrentCulture` and `StringComparison.CurrentCultureIgnoreCase` compare strings using the **current culture's linguistic sort rules**, with or without case sensitivity. Text blocks that expose **Comparison Type** (for example [Contains Any Text][], [Find And Replace Text][]) can use these values when comparisons should follow the server locale.

With **Regex** or **Pattern matching** search options, some character equivalences (for example `æ` and `ae`) may not match when **Comparison Type** is `StringComparison.CurrentCulture`; see each block's remarks.

For comparisons that must not change when server regional settings change, use [Invariant Culture][] or ordinal comparison instead. See [Equality][] and [Security and display](#security-and-display).

## When to use the current culture

Use `CultureInfo.CurrentCulture` when:

* **Server locale matches users** — the machine running the flow is configured for the same region as the audience (for example a UK-hosted server for `en-GB` output).
* **Ad-hoc locale alignment** — you intentionally want "whatever this server is set to" without hard-coding a culture name.
* **Culture-sensitive comparisons** — text search or equality should follow the server's sort and equivalence rules (`StringComparison.CurrentCulture` or `StringComparer.CurrentCulture`).

In clustered deployments, align **operating system culture and regional settings** (and time synchronisation) on every node that runs the flow so that `CultureInfo.CurrentCulture` behaves the same everywhere. See [Clusters and operating system settings](#clusters-and-operating-system-settings).

## When not to use the current culture

Avoid relying on the current culture when:

* **Output must be identical on every server** — use [Invariant Culture][] or an explicit [Specific Culture][].
* **User locale ≠ server locale** — Gateway forms, reports, or integrations may be viewed in a different region than the flow server; pass `new CultureInfo("en-GB")` (or another known code) instead.
* **Security or internal identifiers** — comparisons or case changes that affect authorization, tokens, or stored keys should use [Invariant Culture][] or ordinal rules so behaviour does not change when an administrator adjusts regional settings.
* **Persistence or protocols** — logs, file names, APIs, and database fields that must parse the same everywhere should use [Invariant Culture][].

If the required locale is known in advance, prefer an explicit [Specific Culture][] over the current culture so behaviour does not depend on how each server is configured.

## Using the current culture in blocks

The current culture is **opt-in** in most blocks:

| Scenario | Typical approach |
| --- | --- |
| Format dates, numbers, or composite text for the server locale | Set **Format Provider** to `CultureInfo.CurrentCulture` |
| Change case using server rules | Set **Culture Info** to `CultureInfo.CurrentCulture` |
| Compare or search text using server sort rules | Set **Comparison Type** to `StringComparison.CurrentCulture` or `StringComparison.CurrentCultureIgnoreCase` |
| Default when property omitted or `null` | Usually [Invariant Culture][] — check the block's remarks |

Always confirm a block's default when **Format Provider** or **Culture Info** is left empty.

## Server locale vs user locale

`CultureInfo.CurrentCulture` reflects the **flow execution server**, not the browser or desktop of someone using Gateway. A user in one country may see data formatted with another region's patterns if the server culture differs.

When output must match a **known user or business locale**, create and pass an explicit culture—for example `new CultureInfo("en-GB")`—documented on [Specific Cultures][]. Use the current culture only when the server's regional settings are the intended source of truth.

## Clusters and operating system settings

Flows that depend on `CultureInfo.CurrentCulture` inherit whatever culture .NET assigns to the executing thread. On Windows that is typically the system default locale; on Linux it follows ICU / `LC_MESSAGES` behaviour as described in .NET documentation.

For predictable results in a **cluster**:

* Use the **same culture and regional settings** on every server that can run the flow.
* Keep servers **time synchronised** when date and time values are compared or formatted across nodes.
* Document any **custom** or **user-overridden** regional settings; see [Operating System Settings][].

Changing Control Panel or system locale on one node without updating the others can cause formatting, parsing, or comparison differences between environments.

### User overrides (Windows)

On Windows, users can customize date, time, and number formats in **Regional settings**. Those overrides can flow into `CultureInfo.CurrentCulture` when the thread culture is tied to the system culture. Server applications that require **standard** patterns for a culture name may need `new CultureInfo("en-GB", false)` or `CultureInfo.GetCultureInfo("en-GB")` instead of `CurrentCulture`—see [CultureInfo(String, Boolean)][MS CultureInfo ctor] in .NET documentation.

## Security and display

Microsoft guidance for .NET applies to {{% ctx %}} flows:

* **Display to users** — formatting and sorting shown in Gateway or reports is often **culture-sensitive**. The current culture is appropriate only when the server locale matches the audience; otherwise use a [Specific Culture][].
* **Internal or security use** — do not use `CurrentCulture` or `StringComparison.CurrentCulture` for security decisions, stored identifiers, or protocol values. Use [Invariant Culture][] or ordinal comparison so results stay stable when regional settings change.

If a security decision depends on string comparison or case change, use culture-independent options described on [Invariant Culture][].

## Current culture vs other cultures

| | [Current Culture][] | [Invariant Culture][] | [Specific Culture][] |
| --- | --- | --- | --- |
| Source | `CultureInfo.CurrentCulture` | `CultureInfo.InvariantCulture` | `new CultureInfo("en-GB")`, etc. |
| Tied to server OS settings | Yes | No | No (fixed by culture name) |
| Changes when OS regional settings change | Yes | No | Only if culture definition on OS changes |
| Typical block default when provider is `null` | No (usually invariant) | Yes (many formatting/casing blocks) | Only when you set it |
| Typical use | Server-local presentation when locale is intentional | Persistence, protocols, defaults | Known locale for users |

## Remarks

### Known Limitations

* **Per-thread in .NET** — `CultureInfo.CurrentCulture` is a per-thread setting. In {{% ctx %}}, culture generally follows the server and thread that executes the flow; do not assume you can set culture in one block and have unrelated parallel work use a different culture unless you control thread culture explicitly (uncommon in flows).
* **Not installed cultures** — `CurrentCulture` reflects the server's configured locale; creating `new CultureInfo("xx-YY")` for a culture that is not installed still throws [CultureInfoNotFoundException][]. That is separate from reading `CurrentCulture`.
* **User locale ≠ server locale** — see [Server locale vs user locale](#server-locale-vs-user-locale).
* **Current UI culture** — .NET also exposes `CultureInfo.CurrentUICulture` for resource loading. {{% ctx %}} formatting and comparison documentation focus on `CurrentCulture`; UI resource culture is rarely set in flows.

## See Also

### Related Concepts

* [What is a Culture?][]
* [Invariant Culture][]
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
* [Contains Any Text][]
* [Find And Replace Text][]

### External Documentation

* [CultureInfo.CurrentCulture][MS CurrentCulture]
* [CultureInfo.CurrentCulture property remarks](https://learn.microsoft.com/en-us/dotnet/fundamentals/runtime-libraries/system-globalization-cultureinfo-currentculture)
* [Standard date and time format strings — Control Panel settings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings#control-panel-settings)
* [Best practices for comparing strings in .NET](https://learn.microsoft.com/en-us/dotnet/standard/base-types/best-practices-strings)
* [Performing culture-insensitive string operations](https://learn.microsoft.com/en-us/dotnet/core/extensions/performing-culture-insensitive-string-operations)
* [System.Globalization.CultureInfo][MS CultureInfo]

[What is a Culture?]: {{< ref "what-is-a-culture.md" >}}
[Invariant Culture]: {{< ref "invariant-culture.md" >}}
[Current Culture]: {{< ref "current-culture.md" >}}
[Specific Cultures]: {{< ref "specific-cultures.md" >}}
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

[MS CultureInfo]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfo" >}}
[MS CultureInfo ctor]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfoCtor" >}}
[MS CurrentCulture]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CurrentCulture" >}}
[MS Standard DateTime Formats]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.FormatStrings" >}}
