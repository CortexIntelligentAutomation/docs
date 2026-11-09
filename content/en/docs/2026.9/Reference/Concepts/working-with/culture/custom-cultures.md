---
title: "Custom Cultures"
linkTitle: "Custom Cultures"
description: "How custom cultures registered on Windows extend or replace built-in locales for formatting, parsing, casing, and comparison in CORTEX flows."
weight: 400
---

# {{% param title %}}

## Summary

A **custom culture** is a `CultureInfo` value whose definition is **registered on the operating system** in addition to (or instead of) the built-in cultures that .NET ships with. After registration, a custom culture behaves like any other culture-sensitive culture: it supplies rules for dates, times, numbers, currency, text casing, and string sorting according to the definition stored on that computer.

In {{% ctx %}} and .NET you **do not** define or register custom cultures inside a flow. An administrator (or deployment tooling) registers the culture on each Windows server using [CultureAndRegionInfoBuilder][MS CultureAndRegionInfoBuilder] in the `sysglobl` assembly. Flows and expressions then use the culture by name—for example `new CultureInfo("x-en-US-sample")` or `CultureInfo.GetCultureInfo("x-en-US-sample")`—and pass it as an [IFormatProvider][] to formatting APIs or to block properties named **Format Provider** or **Culture Info**.

Use custom cultures when your organisation needs a **locale that is not in the predefined set**, or when you must **override** a built-in culture (for example a replacement `en-GB` with different date or time patterns) and that override is installed consistently on every server that runs flows. Use a [Specific Culture][Specific Cultures] when a standard language tag such as `en-GB` is sufficient and installed on the server. Use [Invariant Culture][] when behaviour must not depend on any locale.

For an overview of all culture types, see [What is a Culture?][].

## How custom cultures differ from built-in cultures

| | Built-in ([Specific Culture][Specific Cultures]) | Custom culture |
| --- | --- | --- |
| Definition | Preinstalled with Windows / .NET | Created with `CultureAndRegionInfoBuilder` and registered by an administrator |
| Culture name | Standard BCP 47 tags (`en-GB`, `de-DE`) | Often uses a private subtag (for example `x-en-US-sample`) or **replaces** an existing name |
| Availability | Listed in [Supported Culture Codes][] when installed | Available only on computers where the culture was registered |
| Use in flows | `new CultureInfo("en-GB")` | `new CultureInfo("your-registered-name")` after registration |
| Registration in flows | Not required | **Not supported** — registration requires administrative privileges outside {{% ctx %}} |

Once registered, a custom culture is **indistinguishable** from predefined cultures for `CultureInfo` construction, `GetCultureInfo`, and `GetCultures`. Formatting, parsing, casing, and comparison in blocks follow the same patterns as for [Specific Cultures][].

## Creating and registering custom cultures (administrators)

Custom cultures are a **Windows and .NET Framework / NLS** feature. The [CultureAndRegionInfoBuilder][MS CultureAndRegionInfoBuilder] class:

* Lives in **sysglobl.dll** (add a reference to `sysglobl` in registration tools; it is not in the default `System.Globalization` assemblies used by most apps).
* Writes an **.nlp** file to `%windir%\Globalization` when you call `Register()`.
* Requires **administrative privileges** on the target machine; otherwise `Register()` throws `UnauthorizedAccessException`.

{{% ctx %}} flows should **not** call `Register()` or `Unregister()` at runtime. Use a separate installer or script that administrators run during server provisioning, then reference the culture by name in flows.

### Kinds of custom culture

The `CultureAndRegionModifiers` value passed to the `CultureAndRegionInfoBuilder` constructor determines the kind of culture:

| Modifier | Purpose |
| --- | --- |
| `CultureAndRegionModifiers.None` | New **specific** custom culture with a unique name |
| `CultureAndRegionModifiers.Neutral` | New **neutral** custom culture |
| `CultureAndRegionModifiers.Replacement` | **Replaces** an existing built-in culture (same name—for example `en-GB`) with custom date, number, or casing rules on that machine |

For a **replacement** culture, the builder is constructed with the existing culture name and `Replacement`; properties are populated from the culture being replaced, then modified and registered.

For a **new** or **supplemental** culture, typical steps are:

1. `new CultureAndRegionInfoBuilder("x-my-culture", CultureAndRegionModifiers.None)`
2. `LoadDataFromCultureInfo(...)` and `LoadDataFromRegionInfo(...)` to copy from similar built-in cultures
3. Adjust properties (for example `GregorianDateTimeFormat`, `NumberFormat`, `CompareInfo`, `TextInfo`)
4. `Register()` on each execution server (or `Save()` to LDML XML and register from a separate tool using `CreateFromLdml`)

Microsoft recommends building the culture on one machine, saving to XML, and registering from that file on other machines so definitions stay **uniform across the cluster**.

### Platform support

Custom cultures are **not** portable to every platform {{% ctx %}} might run on:

* **Windows only** — `.nlp` files are not supported on non-Windows operating systems.
* **Globalization mode** — on .NET Core and later, registered `.nlp` cultures apply when the process uses **NLS** globalization mode, not necessarily under ICU-only configurations.

Document which servers have which custom cultures registered, and verify behaviour in each environment (development, test, production, and every cluster node).

## Obtaining a custom culture in flows

After registration on the server, use the same APIs as for [Specific Cultures][]:

| Approach | Expression | Notes |
| --- | --- | --- |
| Constructor | `new CultureInfo("x-en-US-sample")` | Throws [CultureInfoNotFoundException][] if the culture is not registered on that server |
| Cached instance | `CultureInfo.GetCultureInfo("x-en-US-sample")` | Read-only, cached instance |
| Discovery | `CultureInfo.GetCultures(CultureTypes.AllCultures)` | Includes registered custom cultures |

Pass the value to `String.Format`, `DateTime.ToString`, `Convert.ToString`, or to block **Format Provider** / **Culture Info** properties.

If the culture name matches a **replacement** culture (for example registered `en-GB`), `new CultureInfo("en-GB")` on that server uses the **custom** definition, not the original built-in patterns. On a server without that replacement, behaviour follows the standard `en-GB` install. That is why replacement cultures must be registered identically everywhere flows rely on them.

## What a custom culture controls

A registered custom culture exposes the same `CultureInfo` surface as other culture-sensitive cultures—`DateTimeFormatInfo`, `NumberFormatInfo`, `TextInfo`, `CompareInfo`, and calendars—using the values defined at registration time.

| Area | Behaviour | More information |
| --- | --- | --- |
| Dates and times | Patterns and separators from the custom definition | [Date and Time Formatting][], [Operating System Settings][] |
| Numbers | Decimal, group, and currency formats from the custom definition | [Formatting][] |
| Text casing | Rules from the custom culture's `TextInfo` (can differ from built-in cultures with the same language) | [Casing][] |
| Text comparison | Sort and equivalence rules from the custom `CompareInfo` | [Equality][] |
| Composite formatting | Placeholders use the custom culture's number and date formats | [Format Text With Values][], [Format Text With Value][] |

### Dates and times

When you pass a custom `CultureInfo` to [Convert Date Time To Text][] or set it as **Format Provider**, standard format specifiers (`"d"`, `"G"`, and so on) use the **registered** patterns. Replacement cultures can change how a familiar name such as `en-GB` formats dates on that server without changing flow code.

For strings produced under a custom culture, Microsoft recommends **parsing with explicit patterns**—`DateTime.ParseExact` or `DateTime.TryParseExact`—because custom date/time strings can be more complex than built-in cultures. See [Date and time parsing](#date-and-time-parsing) below.

### Casing

Custom cultures can define their own casing rules through `TextInfo`. Pass the registered culture to [Convert To Lowercase][] or [Convert To Uppercase][] when casing must follow that definition. Default **Culture Info** on those blocks remains [Invariant Culture][] unless you set it.

### String comparison

Comparisons that use a supplied `CultureInfo` or culture-based `StringComparison` follow the custom culture's sort rules. For identifiers, security checks, or protocol values, prefer [Invariant Culture][] or ordinal comparison.

## When to use a custom culture

Use a registered custom culture when:

* **Organisation-defined locale** — legal, branding, or regional rules require formats or sort orders that built-in cultures do not provide.
* **Replacement culture on all servers** — every node must use the same overridden `en-GB` (or other) definition via `CultureAndRegionModifiers.Replacement`.
* **Supplemental culture** — you need an extra culture name (often with an `x-` prefix) without replacing a built-in tag.

## When not to use a custom culture

Avoid custom cultures when:

* A **standard specific culture** is enough — prefer `new CultureInfo("en-GB")` and documented OS regional settings instead of maintaining `.nlp` files.
* **Culture-independent storage or APIs** — use [Invariant Culture][].
* **Flows cannot assume registration** — `new CultureInfo("x-my-culture")` throws [CultureInfoNotFoundException][] on servers where the culture was never registered.
* **You need to register at runtime** — registration belongs in admin tooling, not in flow logic.

## Using a custom culture in blocks

Custom cultures are **opt-in**, like [Specific Cultures][]:

| Scenario | Typical approach |
| --- | --- |
| Format dates, numbers, or composite text with org rules | Set **Format Provider** to `new CultureInfo("x-my-culture")` (or a variable holding that value) |
| Casing under custom rules | Set **Culture Info** on casing blocks to the registered culture |
| Compare or search text with custom sort rules | Set **Comparison Type** or culture-related properties per the block's remarks |
| Default when property omitted or `null` | Usually [Invariant Culture][] — check each block |

Store the culture in a variable when the same custom locale is used in many blocks—for example `var org = new CultureInfo("x-en-US-sample");` in the [Expression Editor][].

## Date and time parsing

Custom cultures can produce date and time strings that are harder to parse implicitly than built-in locales. When reading values formatted with a custom culture, prefer explicit parse patterns in expressions (for example `DateTime.ParseExact` with a format string that matches how the value was written) rather than `DateTime.Parse` alone. See Microsoft guidance in [CultureAndRegionInfoBuilder remarks][MS CultureAndRegionInfoBuilder].

## Clusters and deployment

Flows that depend on a custom culture require:

* The **same culture name** registered on **every** server that can execute the flow.
* **Identical** `.nlp` definitions (use save/register from a single LDML source where possible).
* Verification after OS upgrades or globalization updates, which can affect NLS behaviour.

If one node lacks the registration, flows throw [CultureInfoNotFoundException][] or format data differently from other nodes.

## Security and display

The same guidance as for [Specific Cultures][] applies:

* **Display to users** — use a culture-sensitive culture that matches the audience; a custom culture is appropriate when that audience is defined by your registered locale.
* **Internal or security use** — do not rely on culture-sensitive comparison or casing for security decisions unless the custom culture is guaranteed on every execution path; prefer [Invariant Culture][] or ordinal comparison for stable identifiers.

Replacement cultures change behaviour for **all** applications on the server that use the replaced name (for example `en-GB`), not only {{% ctx %}}. Coordinate with infrastructure owners before registering replacements.

## Custom culture vs other cultures

| | Custom Culture | [Specific Culture][Specific Cultures] | [Current Culture][] | [Invariant Culture][] |
| --- | --- | --- | --- | --- |
| Source | Registered name on Windows | `new CultureInfo("en-GB")`, etc. | `CultureInfo.CurrentCulture` | `CultureInfo.InvariantCulture` |
| Defined in flow | No (name only) | Name only | N/A | N/A |
| Tied to server OS | Yes (registration per machine) | Culture must be installed/registered | Yes | No |
| Typical use | Org-specific or replacement locale | Known standard locale | Server default locale | Persistence, protocols, defaults |

## Remarks

### Known Limitations

* **Administrative registration** — Flows cannot register or unregister cultures; missing registration causes [CultureInfoNotFoundException][].
* **Replacement cultures** — Using the same name as a built-in culture (for example `en-GB`) affects every app on that server; behaviour differs from servers without the replacement.
* **Cluster consistency** — Each node must have the same custom culture definition; drift causes intermittent formatting or runtime errors.
* **sysglobl.dll** — Only registration tools need this assembly; {{% ctx %}} expressions use `CultureInfo` after registration.
* **Discovery** — `CultureInfo.GetCultures` lists custom cultures only on machines where they are registered; do not hard-code assumptions about names present in development but absent in production.

## See Also

### Related Concepts

* [What is a Culture?][]
* [Specific Cultures][]
* [Current Culture][]
* [Invariant Culture][]
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

* [CultureAndRegionInfoBuilder class](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureandregioninfobuilder)
* [CultureAndRegionInfoBuilder remarks (define, register, instantiate)](https://learn.microsoft.com/en-us/dotnet/fundamentals/runtime-libraries/system-globalization-cultureandregioninfobuilder)
* [CultureAndRegionInfoBuilder.Register method](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureandregioninfobuilder.register)
* [CultureInfo class](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo)
* [CultureInfo.GetCultures method](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo.getcultures)
* [Best practices for comparing strings in .NET](https://learn.microsoft.com/en-us/dotnet/standard/base-types/best-practices-strings)
* [Performing culture-insensitive string operations](https://learn.microsoft.com/en-us/dotnet/core/extensions/performing-culture-insensitive-string-operations)
* [Supported Culture Codes][]

[What is a Culture?]: {{< ref "what-is-a-culture.md" >}}
[Invariant Culture]: {{< ref "invariant-culture.md" >}}
[Current Culture]: {{< ref "current-culture.md" >}}
[Specific Cultures]: {{< ref "specific-cultures.md" >}}

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

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Format Text With Values]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.MainDoc" >}}
[Format Text With Value]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValue.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Date Time To Text]: {{< url path="Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertDateTimeToText.MainDoc" >}}
[Convert To Lowercase]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToLowerCase.MainDoc" >}}
[Convert To Uppercase]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToUpperCase.MainDoc" >}}
[Contains Any Text]: {{< url path="Cortex.Reference.Blocks.Text.ContainsText.ContainsAnyText.MainDoc" >}}
[Find And Replace Text]: {{< url path="Cortex.Reference.Blocks.Text.FindAndReplaceText.FindAndReplaceText.MainDoc" >}}

[Supported Culture Codes]: {{< url path="MSDocs.CSharp.SupportedCultureCodes" >}}
[MS CultureAndRegionInfoBuilder]: {{< url path="MSDocs.DotNet.Fundamentals.RuntimeLibraries.CultureAndRegionInfoBuilder" >}}
