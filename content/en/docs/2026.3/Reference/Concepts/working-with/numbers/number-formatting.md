---
title: "Number Formatting"
linkTitle: "Number Formatting"
description: "How format providers, format templates, and format specifiers control the text representation of numeric values in CORTEX flows."
weight: 5
---

# {{% param title %}}

## Summary

Numeric values are often converted to and from text—for example when displaying amounts, writing logs, or reading input. In .NET and {{% ctx %}}, that conversion is controlled by:

* A **format provider** — supplies culture-specific decimal separators, group sizes, and currency symbols (via [CultureInfo][] and [IFormatProvider][])
* A **format template** — a standard or custom string that defines how the number appears
* **Format specifiers** — the characters inside a format template (for example `N`, `C`, `0.00`)

Expressions use `ToString`, `String.Format`, and interpolation. Blocks such as [Convert Object To Text][], [Format Text With Values][], and [Format Text With Value][] expose **Format Provider** (and format template) properties for explicit control.

For parsing and `ToString` overview, see [Converting Numbers and Text][]. For culture types in general, see [Culture][].

| Topic | Typical choice |
| --- | --- |
| Cross-server persistence and block defaults | [Invariant Culture][] |
| Server-local presentation in expressions | [Current Culture][] |
| Fixed regional format for users | [Specific Culture][] (for example `new CultureInfo("en-GB")`) |
| Fixed decimal places without culture surprises | Explicit standard specifier with an explicit provider (for example `"F2"` + invariant) |

## Format providers

A **format provider** implements [IFormatProvider][] and supplies the cultural rules used when a number is formatted or parsed. In practice the provider is almost always a [CultureInfo][] whose `NumberFormat` property defines decimal and group separators, currency symbols, and percent patterns.

Pass a format provider to:

* Block properties named **Format Provider** on [Convert Object To Text][], [Format Text With Values][], and [Format Text With Value][]
* .NET methods such as `ToString(string, IFormatProvider)`, `Int32.Parse(string, IFormatProvider)`, and `String.Format(IFormatProvider, string, object[])`

### Obtaining a format provider

| Approach | Expression | Notes |
| --- | --- | --- |
| Invariant culture | `CultureInfo.InvariantCulture` | Culture-insensitive; fixed patterns. See [Invariant Culture][] |
| Empty culture name | `new CultureInfo("")` | Equivalent to the invariant culture |
| Current culture | `CultureInfo.CurrentCulture` | Reflects the server's regional settings. See [Current Culture][] |
| Specific culture | `new CultureInfo("en-GB")` | Fixed locale regardless of server settings. See [Specific Cultures][] |

### Invariant Culture

When [Invariant Culture][] is used as the format provider:

* Decimal separator is `.` and group separator is `,` for standard number patterns.
* Currency and percent symbols follow invariant `NumberFormatInfo` rules, not the server's locale.
* Many {{% ctx %}} formatting blocks default **Format Provider** to `CultureInfo.InvariantCulture` when the property is omitted or `null`.

Use invariant formatting when numeric text must parse the same on every server.

### Current Culture

[Current Culture][] (`CultureInfo.CurrentCulture`) supplies number patterns from the **server's configured locale**. Expression calls such as `1234.5.ToString("N")` without a provider use these rules. On Windows, patterns can reflect **Control Panel** regional customizations when they apply to `CurrentCulture`.

{{% ctx %}} blocks do **not** automatically use the current culture when **Format Provider** is omitted; they typically default to [Invariant Culture][]. To format using the server's locale in a block, set **Format Provider** explicitly to `CultureInfo.CurrentCulture`.

## Format templates

**Format templates** define how numeric values become text. There are two kinds:

* [Standard format templates](#standard-format-templates) — a **single** alphabetic [format specifier](#format-specifiers), optionally followed by a precision digit string (for example `"N"`, `"N2"`, `"C"`)
* [Custom format templates](#custom-format-templates) — patterns with placeholders such as `0`, `#`, `.`, `,` (for example `"0.00"`, `"#,##0.00"`)

A format template is always interpreted together with a format provider. The provider determines which separators and symbols appear.

| Scenario | Format template | Format provider | Behaviour |
| --- | --- | --- | --- |
| Expression `ToString()` | none | [Current Culture][] | Culture's general number pattern |
| Expression with explicit format | `"N2"` | `CultureInfo.InvariantCulture` | Fixed 2 decimal places, invariant separators |
| [Convert Object To Text][] / format text blocks | template in property | Often invariant when null | See each block's remarks |

### Standard format templates

A standard numeric format string has the form `[specifier][precision]`, where precision is optional. Examples below use value `1234.567` and culture `en-GB` unless noted.

| Specifier | Name | Example (`en-GB`) | Notes |
| --- | --- | --- | --- |
| `C` or `c` | Currency | `£1,234.57` | Precision = decimal digits; symbols from culture |
| `D` or `d` | Decimal | Integrals only — `1234` → `1234`; `D6` → `001234` | Not valid for [Single][] / [Double][] |
| `E` or `e` | Exponential | `1.234567E+003` | Precision = digits after decimal in mantissa |
| `F` or `f` | Fixed-point | `1234.57` | Precision = decimal places |
| `G` or `g` | General | Compact fixed or scientific | Default precision depends on type |
| `N` or `n` | Number | `1,234.57` | Group separators + decimal places |
| `P` or `p` | Percent | Multiplies by 100 and adds `%` | For example `1` → `100.00%` in `en-US` |
| `X` or `x` | Hexadecimal | Integrals only — `255` → `FF` | Case selects `A–F` vs `a–f` |
| `R` or `r` | Round-trip | Round-trippable text for floating point | Prefer `"G17"` / `"G9"` for [Double][] / [Single][] in modern .NET |
| `B` or `b` | Binary | Integrals only (.NET 8+) | Binary digit string |

An unknown single-character specifier throws [FormatException][]. Full details and more examples: [standard numeric format strings][].

### Custom format templates

Custom templates use digit placeholders and separators:

| Character | Meaning |
| --- | --- |
| `0` | Mandatory digit (pads with zeros) |
| `#` | Optional digit |
| `.` | Decimal separator (replaced by the culture's decimal separator) |
| `,` | Group separator or scaling (culture-sensitive) |
| `%` | Multiplies by 100 and inserts a percent symbol |
| `\` or quoted literals | Escape a character so it appears as literal text |

Examples with invariant culture and value `1234.5`:

| Template | Result |
| --- | --- |
| `0.00` | `1234.50` |
| `#,##0.00` | `1,234.50` |
| `0` | `1235` (rounded to integer digits per formatting rules) |

For the full custom syntax, see [custom numeric format strings][].

## Format specifiers in composite formatting

In `String.Format`, [Format Text With Values][], and interpolated strings, a format item can include a numeric format string after a colon:

| Expression or template | Example meaning |
| --- | --- |
| `{0:N2}` | First argument as number with 2 decimal places |
| `{($)Amount:C}` | Interpolated currency format |
| `{0,10:F2}` | Width 10, right-aligned, fixed 2 decimals |

Composite formatting also controls alignment and spacing. See [Formatting][] (text) and [composite formatting][] in .NET documentation.

## Operating system and culture effects

Standard specifiers such as `N` and `C` resolve against the format provider's `NumberFormatInfo`. Changing the server's region or Control Panel number settings can change results for [Current Culture][]. For consistent output across nodes, use [Invariant Culture][] or an explicit [Specific Culture][]. See [Current Culture][] and [Invariant Culture][].

## Remarks

### Culture Dependency

Formatting and parsing depend on cultures installed on the server. An invalid culture name throws [CultureInfoNotFoundException][].

### Invalid Specifiers Cause Exceptions

Specifiers valid only for integrals (`D`, `X`, `B`) throw if used with [Single][] or [Double][].

### Floating-Point Rounding

Floating-point display can show rounding relative to the infinite-precision value; precision specifiers control the **string**, not a separate stored rounded value.

### Block Defaults for Format Provider

Block defaults for **Format Provider** may differ from expression `ToString()` defaults; align them deliberately. See [Converting Numbers and Text][].

### Known Limitations

None

## See Also

### Related Concepts

* [What is a Number?][] — numeric types overview
* [Converting Numbers and Text][] — `ToString`, `Parse`, and blocks
* [Culture][] — culture types and when to use each
* [Invariant Culture][] — culture-insensitive formatting defaults
* [Current Culture][] — server regional settings
* [Specific Cultures][] — fixed locale formatting
* [Formatting][] — composite text formatting with format providers
* [Date and Time Formatting][] — parallel concepts for dates and times

### Related Data Types

* [Int16][]
* [Int32][]
* [Int64][]
* [Single][]
* [Double][]
* [CultureInfo][]
* [IFormatProvider][]

### Related Blocks

* [Convert Object To Text][]
* [Format Text With Values][]
* [Format Text With Value][]
* [Convert Object To Json][]

### External Documentation

* [Standard numeric format strings][]
* [Custom numeric format strings][]
* [Parsing numeric strings in .NET][]
* [Composite formatting][]
* [NumberFormatInfo](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.numberformatinfo)

[What is a Number?]: {{< ref "what-is-a-number.md" >}}
[Converting Numbers and Text]: {{< ref "converting-numbers-and-text.md" >}}

[Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.MainDoc" >}}
[Invariant Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[Current Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.CurrentCulture.MainDoc" >}}
[Specific Cultures]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.SpecificCultures.MainDoc" >}}
[Specific Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.SpecificCultures.MainDoc" >}}
[Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Formatting.MainDoc" >}}
[Date and Time Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.MainDoc" >}}

[Int16]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Single]: {{< url path="Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[Double]: {{< url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[CultureInfo]: {{< url path="Cortex.Reference.DataTypes.Text.CultureInfo.MainDoc" >}}
[IFormatProvider]: {{< url path="Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}
[CultureInfoNotFoundException]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfoNotFoundException" >}}
[FormatException]: {{< url path="MSDocs.DotNet.Api.System.FormatException" >}}

[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Format Text With Values]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.MainDoc" >}}
[Format Text With Value]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValue.MainDoc" >}}

[standard numeric format strings]: https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings
[custom numeric format strings]: https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings
[Parsing numeric strings in .NET]: https://learn.microsoft.com/en-us/dotnet/standard/base-types/parsing-numeric
[composite formatting]: https://learn.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting
