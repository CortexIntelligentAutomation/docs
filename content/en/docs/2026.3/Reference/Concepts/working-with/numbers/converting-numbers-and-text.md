---
title: "Converting Numbers and Text"
linkTitle: "Converting Numbers and Text"
description: "How to convert numeric values to text and parse text to numbers in CORTEX using expressions, Convert methods, and blocks."
weight: 4
---

# {{% param title %}}

## Summary

Flows often need to turn a number into text (logging, messages, composite formats) or turn text into a number (user input, files, external systems). In {{% ctx %}} and .NET those operations are:

* **Formatting** — number → [String][] (`ToString`, `Convert.ToString`, format templates)
* **Parsing** — [String][] → number (`Parse`, `TryParse`, `Convert.ToInt32`, and similar)

Both depend on a [format provider][Number Formatting] ([CultureInfo][] / [IFormatProvider][]) when culture-sensitive decimal separators, group separators, or currency symbols matter. For patterns such as `"N2"` or `"C"`, see [Number Formatting][].

For conversions **between** numeric types (not text), see [Numeric Conversions][].

## Converting numbers to text

### Expressions

| Method | Example | Typical result | Notes |
| --- | --- | --- | --- |
| `ToString()` | `1.ToString()` | `"1"` | Uses [Current Culture][] when no provider is passed |
| `ToString(format)` | `(1234.5).ToString("N2")` | Culture-dependent (for example `"1,234.50"` for `en-US`) | See [Number Formatting][] |
| `ToString(format, provider)` | `(1234.5).ToString("N2", CultureInfo.InvariantCulture)` | `"1,234.50"` with invariant separators | Preferred for persistence |
| `Convert.ToString` | `Convert.ToString(1)` | `"1"` | See [Convert.ToString][] |
| String interpolation | `$"Count: {($)Count}"` | `"Count: 42"` | Implicit conversion to text; optional format: `{($)Count:N0}` |

Each Numbers data type page documents `ToString` and `Convert.ToString` examples (for example [Int32][], [Double][]).

### Blocks

| Block | Use |
| --- | --- |
| [Convert Object To Text][] | Formats an object (including numbers) with an optional format template and **Format Provider** (defaults often follow [Invariant Culture][]) |
| [Convert Object To Json][] | JSON representation of the value (numeric JSON tokens, not culture-formatted display strings) |
| [Format Text With Values][] / [Format Text With Value][] | Composite format templates that embed numbers among other values |

When **Format Provider** is omitted on these blocks, behaviour typically follows [Invariant Culture][]—not [Current Culture][]. Set the provider explicitly when you need the server locale or a [Specific Culture][].

## Parsing text to numbers

### Expressions

| Method | Example | Notes |
| --- | --- | --- |
| `Int32.Parse` | `Int32.Parse("1")` | Throws if the text is invalid; culture-sensitive overloads available |
| `Double.Parse` | `Double.Parse("1.5")` | Decimal separator must match the provider/culture |
| `TryParse` | `Int32.TryParse("1", out result)` | Returns `false` instead of throwing on failure |
| `Convert.ToInt32` / `Convert.ToDouble` | `Convert.ToInt32("1")` | Converts from many source types including [String][] |

Without an [IFormatProvider][], many `Parse` overloads use [Current Culture][]. Text that uses `.` as the decimal separator may fail to parse under a culture that expects `,`, and the reverse. Prefer:

* `Parse` / `TryParse` overloads that take [CultureInfo.InvariantCulture][Invariant Culture] for machine-readable text, or
* An explicit [Specific Culture][] that matches the input source.

For detailed .NET guidance, see [Parsing numeric strings in .NET][].

### Invalid input

Failed parses typically throw [FormatException][], [OverflowException][] (value outside the target range), or related exceptions. Use `TryParse` when input may be malformed and you want to branch without exception handling.

## Culture and round-tripping

| Scenario | Recommendation |
| --- | --- |
| Store or exchange numeric text between servers | [Invariant Culture][] or a fixed format (for example general `"G"` / round-trip guidance for floating point) |
| Display to users | [Current Culture][] or [Specific Culture][] matching the audience |
| JSON interchange | Prefer [Convert Object To Json][] / JSON parsers rather than culture-formatted display strings |

Floating-point round-trip: for [Double][], Microsoft recommends `"G17"` (and `"G9"` for [Single][]) rather than relying on `"R"` in modern .NET. See [standard numeric format strings][].

## Remarks

### Known Limitations

* Expression `ToString()` without a provider follows [Current Culture][]; many formatting blocks default to [Invariant Culture][]. Mixing them can produce different decimal separators for the same value.
* Parsing must use a culture consistent with how the text was produced.
* Casting text is not valid—`"(Int32)"abc""` does not parse; use `Parse` / `Convert` / blocks.

## See Also

### Related Concepts

* [What is a Number?][] — numeric types overview
* [Number Formatting][] — format providers, templates, and specifiers
* [Numeric Conversions][] — converting between numeric types
* [Culture][] — invariant, current, and specific cultures
* [Converting Objects To Text][] — general object-to-text patterns
* [Formatting][] — composite text formatting

### Related Data Types

* [Int16][]
* [Int32][]
* [Int64][]
* [Single][]
* [Double][]
* [String][]
* [CultureInfo][]
* [IFormatProvider][]

### Related Blocks

* [Convert Object To Text][]
* [Convert Object To Json][]
* [Format Text With Values][]
* [Format Text With Value][]

### External Documentation

* [Parsing numeric strings in .NET][]
* [Standard numeric format strings][standard numeric format strings]
* [Convert.ToString][]
* [Int32.ToString][]
* [Int32.Parse][]

[What is a Number?]: {{< ref "what-is-a-number.md" >}}
[Number Formatting]: {{< ref "number-formatting.md" >}}
[Numeric Conversions]: {{< ref "numeric-conversions.md" >}}

[Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.MainDoc" >}}
[Invariant Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[Current Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.CurrentCulture.MainDoc" >}}
[Specific Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.SpecificCultures.MainDoc" >}}
[Converting Objects To Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.ConvertingObjectsToText.MainDoc" >}}
[Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Formatting.MainDoc" >}}

[Int16]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Single]: {{< url path="Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[Double]: {{< url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[CultureInfo]: {{< url path="Cortex.Reference.DataTypes.Text.CultureInfo.MainDoc" >}}
[IFormatProvider]: {{< url path="Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}

[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Format Text With Values]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.MainDoc" >}}
[Format Text With Value]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValue.MainDoc" >}}

[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}
[Int32.ToString]: {{< url path="MSDocs.DotNet.Api.System.Int32.ToString" >}}
[Int32.Parse]: {{< url path="MSDocs.DotNet.Api.System.Int32.Parse" >}}
[FormatException]: {{< url path="MSDocs.DotNet.Api.System.FormatException" >}}
[OverflowException]: https://learn.microsoft.com/en-us/dotnet/api/system.overflowexception
[Parsing numeric strings in .NET]: https://learn.microsoft.com/en-us/dotnet/standard/base-types/parsing-numeric
[standard numeric format strings]: https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings
