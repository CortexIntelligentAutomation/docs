---
title: "What is a Number?"
linkTitle: "What is a Number?"
description: "Overview of numeric data types in CORTEX, including integer and floating-point types, literals, and how to work with numbers in flows and expressions."
weight: 1
---

# {{% param title %}}

## Summary

Numbers in {{% ctx %}} are represented by .NET numeric [data types][]. The documented **Numbers** types are signed integers ([Int16][], [Int32][], [Int64][]) and floating-point values ([Single][], [Double][]). They are [value types][]: each has a default of `0`, and values are copied when assigned or passed.

Most flow examples and block properties that need a whole number use [Int32][]. Use [Int64][] for values outside the 32-bit range, [Single][] or [Double][] for fractional values, and [Int16][] when a smaller integral range is required.

How numbers are formatted and parsed as text depends on [culture][Culture] settings. For format patterns and providers, see [Number Formatting][]. For arithmetic and comparison behaviour, see [Operators and Comparisons][]. For casting between numeric types, see [Numeric Conversions][].

| Data type | Alias | Purpose | Size | Range (approximate) |
| --- | --- | --- | --- | --- |
| [Int16][] | `short` | Small whole number | 2 bytes | `-32,768` through `32,767` |
| [Int32][] | `int` | Typical whole number | 4 bytes | `-2,147,483,648` through `2,147,483,647` |
| [Int64][] | `long` | Large whole number | 8 bytes | `-9,223,372,036,854,775,808` through `9,223,372,036,854,775,807` |
| [Single][] | `float` | Single-precision floating point | 4 bytes | About `±3.4 × 10³⁸` (~6–9 digits of precision) |
| [Double][] | `double` | Double-precision floating point | 8 bytes | About `±1.7 × 10³⁰⁸` (~15–17 digits of precision) |

## Integer types

[Int16][], [Int32][], and [Int64][] store **whole numbers** (no fractional part). Each type has `MinValue` and `MaxValue` constants. Unsigned integrals (`byte`, `uint`, `ulong`, and so on) exist in C# and .NET but are not the primary documented Numbers types in {{% ctx %}}; prefer the signed types listed above unless an expression or API specifically requires an unsigned type.

### Literals and suffixes

In the [Expression Editor][]:

* An integer literal within the [Int32][] range is typed as `Int32` (for example `1234`).
* A literal outside that range, or one with the `L` / `l` suffix, is typed as [Int64][] (for example `2147483648` or `1234L`). Prefer `L` over `l` to avoid confusion with the digit `1`.
* [Int16][] values are typically created by casting or parsing (for example `(Int16)100` or `Int16.Parse("100")`).

For full C# rules on decimal, hexadecimal (`0x`), and binary (`0b`) integer literals, see [Integer numeric types][] and [Integer Literals][].

## Floating-point types

[Single][] (`float`) and [Double][] (`double`) store **real numbers**, including fractional values. They follow IEEE 754 binary floating-point rules: not every decimal fraction has an exact representation, and special values such as NaN and infinity exist for [Double][] and [Single][].

C# also defines `decimal` (`System.Decimal`) for high-precision decimal arithmetic (often used for currency). It is a .NET type available in expressions where supported, but it is not listed among the {{% ctx %}} Numbers data type reference pages. Prefer [Double][] for general fractional work in flows unless you specifically need `decimal` precision.

### Literals and suffixes

In the [Expression Editor][]:

* A real literal without a suffix (or with `d` / `D`) is typed as [Double][] (for example `1234.456` or `1234.456d`).
* A real literal with the `f` / `F` suffix is typed as [Single][] (for example `1234.456f`).

Scientific notation such as `0.42e2` is supported for real literals. See [Floating-point numeric types][] and [Real Literals][].

## Choosing a numeric type

| Need | Typical choice |
| --- | --- |
| Counts, indexes, loop counters, whole quantities | [Int32][] |
| Values that may exceed ±2,147,483,647 | [Int64][] |
| Compact whole numbers in a small range | [Int16][] |
| General fractional values or mixed arithmetic with reals | [Double][] |
| Memory-sensitive single-precision values | [Single][] |

Check each type's **Can be used as** and **Can be cast to** rows for widening and narrowing rules. See [Numeric Conversions][] and [Object Casting][].

## Working with numbers in flows

Numbers appear throughout flows:

* As [variable][] values and [block property][] inputs and outputs (for example list indexes of type [Int32][]).
* In [expressions][] using arithmetic (`+`, `-`, `*`, `/`, `%`) and comparison operators. See [Operators and Comparisons][] and the [Expression Editor][].
* When converting to or from text with `ToString`, `Parse`, `Convert`, or blocks such as [Convert Object To Text][]. See [Converting Numbers and Text][] and [Number Formatting][].

## Remarks

### Known Limitations

* {{% ctx %}} Numbers documentation focuses on [Int16][], [Int32][], [Int64][], [Single][], and [Double][]. Other C# numeric types (unsigned integrals, `decimal`, native-sized integers) may appear in .NET APIs but lack dedicated data type pages here.
* Floating-point arithmetic can introduce rounding error; equality comparisons between [Single][] or [Double][] values calculated differently may fail unexpectedly. See [Operators and Comparisons][].
* Formatting and parsing of numeric text depend on [culture][Culture]; block defaults often use [Invariant Culture][], while expression `ToString()` / `Parse` without a provider often use [Current Culture][]. See [Number Formatting][].

## See Also

### Related Concepts

* [Operators and Comparisons][] — arithmetic, integer division, overflow, and comparisons
* [Numeric Conversions][] — casting and converting between numeric types
* [Converting Numbers and Text][] — parsing and string conversion
* [Number Formatting][] — format providers, templates, and specifiers
* [Object Casting][] — implicit and explicit casts
* [Culture][] — how regional settings affect numeric format and parse patterns

### Related Data Types

* [Int16][]
* [Int32][]
* [Int64][]
* [Single][]
* [Double][]

### Related Blocks

* [Convert Object To Text][]
* [Convert Object To Json][]
* [Format Text With Values][]
* [Format Text With Value][]

### External Documentation

* [Integer numeric types (C# reference)][Integer numeric types]
* [Floating-point numeric types (C# reference)][Floating-point numeric types]
* [Built-in numeric conversions (C# reference)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/numeric-conversions)
* [Standard numeric format strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
* [Parsing numeric strings in .NET](https://learn.microsoft.com/en-us/dotnet/standard/base-types/parsing-numeric)

[Operators and Comparisons]: {{< ref "operators-and-comparisons.md" >}}
[Numeric Conversions]: {{< ref "numeric-conversions.md" >}}
[Converting Numbers and Text]: {{< ref "converting-numbers-and-text.md" >}}
[Number Formatting]: {{< ref "number-formatting.md" >}}

[data types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.MainDoc" >}}
[value types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.ValueTypes" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[block property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Object Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.MainDoc" >}}
[Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.MainDoc" >}}
[Invariant Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[Current Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.CurrentCulture.MainDoc" >}}

[Int16]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Single]: {{< url path="Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[Double]: {{< url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}

[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Format Text With Values]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.MainDoc" >}}
[Format Text With Value]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValue.MainDoc" >}}

[Integer Literals]: {{< url path="MSDocs.CSharp.IntegerLiterals" >}}
[Real Literals]: {{< url path="MSDocs.CSharp.RealLiterals" >}}
[Integer numeric types]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types
[Floating-point numeric types]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types
