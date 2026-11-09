---
title: "Formatting"
linkTitle: "Formatting"
description: "How format providers, format templates, and format items control composite text formatting in CORTEX flows."
---

# {{% param title %}}

## Summary

**Formatting** builds a [String][] by combining fixed text with values — for example a greeting, a log line, or a currency amount. In .NET and {{% ctx %}}, that composition is controlled by:

* A **format provider** — supplies culture-specific rules for numbers, dates, and related types (via [CultureInfo][] and [IFormatProvider][])
* A **format template** — the composite format string that contains fixed text and placeholders (for example `"Hello {0}"` or `"Total: {0:C2}"`)
* **Format items** — each `{index[,alignment][:formatString]}` placeholder inside the template; the optional `formatString` uses the patterns documented in [Number Formatting][] and [Date and Time Formatting][]

Use blocks such as [Format Text With Value][], [Format Text With Values][], and [Convert Object To Text][], or expressions such as [String.Format][] and [string interpolation][String interpolation]. Domain-specific patterns for numeric and date/time values are covered on [Number Formatting][] and [Date and Time Formatting][].

| Goal | Prefer |
| --- | --- |
| One value into `{0}` placeholders | [Format Text With Value][], or `String.Format` / `$"…"` |
| Several values into `{0}`, `{1}`, … | [Format Text With Values][], or `String.Format` / `$"…"` |
| Message from an object's named properties | [Convert Object To Text][] with `{Property}` tokens — see [Converting Objects To Text][] |
| Inline expression with format and alignment | [String interpolation][] in the [Expression Editor][] |
| Cross-server consistency | Explicit [Invariant Culture][] as the format provider |
| Fixed regional presentation | [Specific Culture][] (for example `new CultureInfo("en-GB")`) |

## Using Blocks

| Block | Placeholder style | Role |
| --- | --- | --- |
| [Format Text With Value][] | `{0}` only | Replaces every `{0}` (optionally with alignment and format string) with a single **Value** |
| [Format Text With Values][] | `{0}`, `{1}`, … | Replaces each indexed format item with the corresponding item from **Values** |
| [Convert Object To Text][] | `{PropertyName}` | Replaces tokens with matching object property values (not composite indexes) |

All three expose an optional **Format Provider**. When that property is omitted or `null`, they use [Invariant Culture][] (`CultureInfo.InvariantCulture`). Non-text values are converted to their text representation when substituted — see [Converting Objects To Text][].

Worked examples live on each block page. For culture-aware date/time display without a composite template, use [Convert Date Time To Text][] — see [Date and Time Formatting][].

### Format Text With Value and Format Text With Values

[Format Text With Value][] and [Format Text With Values][] apply [.NET composite formatting][Composite formatting]: fixed text plus indexed format items. Specifiers after a colon (for example `{0:C2}`, `{1:P0}`) follow the rules on [Number Formatting][] and [Date and Time Formatting][].

[Format Text With Value][] accepts only index `0`. A template such as `"Hello {1}"` throws [FormatException][]. [Format Text With Values][] requires that every index in the template is within the bounds of **Values**.

### Convert Object To Text

[Convert Object To Text][] is different from composite index formatting: placeholders name **properties** (for example `{Customer.Name}`, `{Amount:C2}`), not list indexes. It does not evaluate arbitrary expressions inside braces and does not support indexing into collection or dictionary properties (for example `{Items[0]}`). For full expression power, prefer [string interpolation][] or [String.Format][] — see [Converting Objects To Text][] and [Convert Object To Text versus string interpolation][].

## Using Expressions

In the [Expression Editor][], format text with composite formatting APIs and interpolated strings.

### String.Format

[`String.Format`][String.Format] takes a format template and one or more arguments:

```csharp
String.Format("Hello {0}", ($)Name)
String.Format(CultureInfo.InvariantCulture, "Total: {0:C2}", ($)Amount)
String.Format("{0,-12} {1,8:N2}", ($)Label, ($)Value)
```

Overloads that take an [IFormatProvider][] apply that provider to culture-sensitive format strings. Prefer an explicit provider when output must not depend on the server's [Current Culture][].

### String Interpolation

An [interpolated string][Interpolated Strings] is declared with `$` and embeds expressions in `{…}`:

```csharp
$"Hello {($)Name}"
$"Total: {($)Amount:C2}"
$"{($)Label,-12} {($)Value,8:N2}"
```

Interpolation uses the same format-item conventions as composite formatting for **alignment** and **format string** clauses. By default, interpolated strings format culture-sensitive values using [Current Culture][]. For invariant or specific-culture results, use `String.Format` with an explicit provider, or an approach documented for culture-specific interpolated strings in [string interpolation in C#][MS Interpolation].

For syntax in the Expression Editor (including interpolated verbatim strings with `$` and `@`), see [Interpolated Strings][] and [Verbatim Strings][].

#### Convert Object To Text versus string interpolation

[Convert Object To Text][] is convenient when composing a message from an object's **named properties** and an optional culture-aware **Format Provider**. It is **not** a full substitute for string interpolation:

* Placeholders are property names, not expressions — you cannot embed calculated expressions inside `{…}`
* Indexing into properties (lists, dictionaries) is not supported
* Nested paths such as `{PaidOff.Total}` are supported when they match properties on the object

When you need expressions, indexing, or richer inline logic, use `$"…"` (or `String.Format`) in an expression. That approach is typically more flexible than adding a Convert Object To Text or Format Text block solely to assemble the string.

## Format Providers

A **format provider** implements [IFormatProvider][] and supplies the cultural rules used when format items format numbers, dates, and related types. In practice the provider is almost always a [CultureInfo][] instance.

Pass a format provider to:

* Block properties named **Format Provider** on [Format Text With Value][], [Format Text With Values][], and [Convert Object To Text][]
* Expression APIs such as `String.Format(IFormatProvider, string, object[])` and `ToString(string, IFormatProvider)`

### Obtaining a format provider

| Approach | Expression | Notes |
| --- | --- | --- |
| Invariant culture | `CultureInfo.InvariantCulture` | Culture-insensitive; fixed patterns. See [Invariant Culture][] |
| Empty culture name | `new CultureInfo("")` | Equivalent to the invariant culture |
| Current culture | `CultureInfo.CurrentCulture` | Reflects the server's regional settings. See [Current Culture][] |
| Specific culture | `new CultureInfo("en-GB")` | Fixed locale regardless of server settings. See [Specific Cultures][] |

{{% ctx %}} formatting blocks do **not** use [Current Culture][] when **Format Provider** is omitted; they default to [Invariant Culture][]. Expression `String.Format` without a provider, and default interpolated-string formatting, use [Current Culture][]. Align block and expression providers deliberately when both appear in the same flow.

For culture types in general, see [What is a Culture?][].

## Format Templates

A **format template** (composite format string) is fixed text mixed with one or more [format items][format specifiers]. When formatting runs, each format item is replaced with the string representation of the corresponding argument, optionally shaped by alignment and a type-specific format string.

Examples:

| Template | Arguments | Typical result (invariant or as noted) |
| --- | --- | --- |
| `"Hello {0}"` | `"world"` | `Hello world` |
| `"Payment {0:C2}"` | `99.99`, provider `en-US` | `Payment $99.99` |
| `"{0} owed; {1:P0} paid"` | `40`, `0.8`, provider `en-US` | `40 owed; 80 % paid` |

The same template style is used by [Format Text With Value][], [Format Text With Values][], and `String.Format`. [Convert Object To Text][] uses property-name tokens instead of indexes — see [Converting Objects To Text][].

Literal `{` and `}` characters in fixed text must be escaped — see [Escaping braces][].

## Format Specifiers

Each **format item** in a format template has this form:

```text
{index[,alignment][:formatString]}
```

Matching braces are required. Components in square brackets are optional.

| Component | Required | Meaning |
| --- | --- | --- |
| `index` | Yes | Zero-based argument index (`{0}` is the first value) |
| `alignment` | No | Signed field width; positive = right-align, negative = left-align; padded with spaces |
| `formatString` | No | Type-specific format string (numeric, date/time, enumeration, and so on) |

Multiple format items can reuse the same index (for example `"{0:X} {0:N}"`). An index outside the argument list throws [FormatException][] at runtime.

### Controlling formatting

The optional `formatString` after the colon controls how the value is converted to text:

| Value type | Where to look | Example format item |
| --- | --- | --- |
| Numbers | [Number Formatting][] | `{0:N2}`, `{0:C}`, `{0:0000}` |
| Date and time | [Date and Time Formatting][] | `{0:d}`, `{0:O}`, `{0:dd/MM/yyyy}` |
| Enumerations | [Formatting enumeration values][] | `{0:G}`, `{0:D}` |

If `formatString` is omitted, the type's general (`G`) formatting applies. Unknown or invalid format strings for the value type throw [FormatException][].

### Controlling spacing and alignment

The optional `alignment` component is a signed integer after a comma. If the formatted text is shorter than `|alignment|`, it is padded with spaces to that width. Positive widths right-align; negative widths left-align. If the text is already longer than the width, the width is ignored.

| Format item | Effect |
| --- | --- |
| `{0,10}` | Right-align in a field of width 10 |
| `{0,-10}` | Left-align in a field of width 10 |
| `{0,10:N1}` | Right-align, then apply numeric format `N1` |

Alignment is applied **after** the value has been converted to text.

### Escaping braces

Opening and closing braces introduce format items. To include a literal brace in the result, double it: `{{` for `{`, and `}}` for `}`.

For example, `String.Format("{{{0}}}", 42)` yields `{42}` (an opening brace, the formatted value, and a closing brace).

The same doubling applies in interpolated strings (`$"{{ {($)Value} }}"`) and in interpolated verbatim strings (`$@"…"`). See [Composite formatting][] ([escaping braces][Escaping braces MS]) and [Interpolated Strings][].

## Remarks

### Culture and format provider defaults

| Context | Typical default when provider is omitted |
| --- | --- |
| [Format Text With Value][], [Format Text With Values][], [Convert Object To Text][] | [Invariant Culture][] |
| `String.Format` without an [IFormatProvider][] argument | [Current Culture][] |
| Interpolated strings (`$"…"`) | [Current Culture][] for culture-sensitive formatting |

Mixing block defaults and expression defaults for the same amount or date can produce different separators, currency symbols, or date orders. Set the provider explicitly when results must be stable across servers — see [Invariant Culture][], [Current Culture][], and [Specific Cultures][].

### Null and empty values

In composite formatting, a `null` argument is replaced with an empty string. [Format Text With Values][] documents the same behaviour for null or empty items in **Values**. If a format template is null, empty, or contains no format items, the Format Text blocks set **Text** to the template value unchanged (including `null`).

### Operating system and culture effects

Standard numeric and date/time format strings resolve against the format provider. Changing the server's region or Control Panel settings can change results when [Current Culture][] is used. Cross-server flows should prefer [Invariant Culture][] or an explicit [Specific Culture][]. See [Current Culture][] and the operating-system notes on [Date and Time Formatting][].

### Known Limitations

* [Convert Object To Text][] does not support embedding arbitrary expressions or indexing into properties inside format tokens. Use [string interpolation][] or [String.Format][] when those capabilities are required — see [Convert Object To Text versus string interpolation][] and the block's [known limitations][Convert Object To Text Known Limitations].
* [Format Text With Value][] supports only format index `{0}`. Templates that reference any other index throw [FormatException][].
* An invalid culture name passed to `new CultureInfo(…)` throws [CultureInfoNotFoundException][]. Formatting and parsing depend on cultures installed on the execution server.

## See Also

### Related Concepts

* [What is Text?][] — strings and text overview
* [Converting Objects To Text][] — `ToString`, Convert Object To Text, and expression alternatives
* [Number Formatting][] — numeric format providers, templates, and specifiers
* [Date and Time Formatting][] — date and time format patterns
* [What is a Culture?][] — invariant, current, and specific cultures
* [Invariant Culture][] — culture-insensitive formatting defaults
* [Current Culture][] — server regional settings
* [Specific Cultures][] — fixed locale formatting
* [Interpolated Strings][] — interpolation in the Expression Editor

### Related Data Types

* [String][]
* [CultureInfo][]
* [IFormatProvider][]

### Related Blocks

* [Format Text With Value][]
* [Format Text With Values][]
* [Convert Object To Text][]
* [Convert Date Time To Text][]
* [Join Text][]

### External Documentation

* [String.Format][]
* [Composite formatting][]
* [String interpolation in C#][MS Interpolation]
* [Standard numeric format strings][]
* [Custom numeric format strings][]
* [Standard date and time format strings][]
* [IFormatProvider][MS IFormatProvider]

[format specifiers]: {{< ref "#format-specifiers" >}}
[String interpolation]: {{< ref "#string-interpolation" >}}
[Convert Object To Text versus string interpolation]: {{< ref "#convert-object-to-text-versus-string-interpolation" >}}
[Escaping braces]: {{< ref "#escaping-braces" >}}

[What is Text?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.WhatIsText.MainDoc" >}}
[Converting Objects To Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.ConvertingObjectsToText.MainDoc" >}}
[Number Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Numbers.NumberFormatting.MainDoc" >}}
[Date and Time Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.MainDoc" >}}
[What is a Culture?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.WhatIsACulture.MainDoc" >}}
[Invariant Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[Current Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.CurrentCulture.MainDoc" >}}
[Specific Cultures]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.SpecificCultures.MainDoc" >}}
[Specific Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.SpecificCultures.MainDoc" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Interpolated Strings]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.InterpolatedStrings" >}}
[Verbatim Strings]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.VerbatimStrings" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[CultureInfo]: {{< url path="Cortex.Reference.DataTypes.Text.CultureInfo.MainDoc" >}}
[IFormatProvider]: {{< url path="Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}

[Format Text With Value]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValue.MainDoc" >}}
[Format Text With Values]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Text Known Limitations]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.KnownLimitations" >}}
[Convert Date Time To Text]: {{< url path="Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertDateTimeToText.MainDoc" >}}
[Join Text]: {{< url path="Cortex.Reference.Blocks.Text.JoinText.JoinText.MainDoc" >}}

[String.Format]: {{< url path="MSDocs.DotNet.Api.System.String.Format" >}}
[Composite formatting]: {{< url path="MSDocs.DotNet.BaseTypes.CompositeFormatting.MainDoc" >}}
[Escaping braces MS]: {{< url path="MSDocs.DotNet.BaseTypes.CompositeFormatting.EscapingBraces" >}}
[MS Interpolation]: {{< url path="MSDocs.CSharp.Interpolation" >}}
[MS IFormatProvider]: {{< url path="MSDocs.DotNet.Api.System.IFormatProvider" >}}
[FormatException]: {{< url path="MSDocs.DotNet.Api.System.FormatException" >}}
[CultureInfoNotFoundException]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfoNotFoundException" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
[Standard numeric format strings]: {{< url path="MSDocs.DotNet.BaseTypes.StandardNumericFormatStrings" >}}
[Custom numeric format strings]: {{< url path="MSDocs.DotNet.BaseTypes.CustomNumericFormatStrings" >}}
[Standard date and time format strings]: {{< url path="MSDocs.DotNet.Api.System.DateTimeOffset.FormatStrings" >}}
