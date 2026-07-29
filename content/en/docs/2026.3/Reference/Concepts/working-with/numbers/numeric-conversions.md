---
title: "Numeric Conversions"
linkTitle: "Numeric Conversions"
description: "How to convert between numeric types in CORTEX using implicit casts, explicit casts, and Convert methods, including data loss when narrowing."
weight: 3
---

# {{% param title %}}

## Summary

Numeric values often move between types—for example using an [Int32][] where a [Double][] is expected, or truncating a [Double][] to an [Int32][]. In {{% ctx %}}, those conversions use the same rules as C# [built-in numeric conversions][]:

* **Implicit** conversions widen a value when the target type can represent every value of the source type (no cast syntax required).
* **Explicit** conversions narrow or otherwise risk data loss and require cast syntax `(TargetType)expression`.

Each Numbers data type page lists **Can be used as** (implicit) and **Can be cast to** (explicit, with range limits). For the general casting model in flows, see [Object Casting][].

Converting to or from **text** is different (parsing and formatting). See [Converting Numbers and Text][] and [Number Formatting][].

## Implicit conversions

An [implicit cast][] happens automatically when no information is lost. Typical **widening** paths among documented types include:

| From | To (examples) |
| --- | --- |
| [Int16][] | [Int32][], [Int64][], [Single][], [Double][] |
| [Int32][] | [Int64][], [Single][], [Double][] |
| [Int64][] | [Single][], [Double][] |
| [Single][] | [Double][] |

Example: an [Int32][] variable can be passed to a [block property][] of type [Double][] without writing a cast. In expressions, integrals mixed with [Double][] are promoted according to C# conversion rules before arithmetic runs.

```csharp
// ($)Int is Int32 with value 6
// Result is Double 6.0 when used where Double is expected
($)Int
```

See [Implicit Conversions][].

## Explicit conversions

An [explicit cast][] uses `(TargetType)expression` when the conversion may lose magnitude, precision, or fractional digits, or when recovering a specific type from [Object][].

| Expression | Result | Notes |
| --- | --- | --- |
| `(Int16)($)Int` where `($)Int` is `6` | `6` | Valid when the value is in the [Int16][] range |
| `(Int32)1.9` | `1` | Fractional part truncated toward zero |
| `(Int32)2147483648.0` | `0` if unchecked / overflow if unchecked | Value outside [Int32][] range |
| `(Single)($)DoubleVariable` | May lose precision | [Double][] to [Single][] narrows precision |

### Data loss when converting floating point to integer

Casting [Single][] or [Double][] to an integral type:

* Discards the **fractional** part (truncates toward zero)—`(Int32)3.9` is `3`, `(Int32)(-3.9)` is `-3`.
* Can overflow if the integral part is outside the target type's range; behaviour follows [checked and unchecked][] rules for the conversion.

Do not rely on floating-point-to-integer casts for financial rounding; use `Math.Round`, `Math.Floor`, or `Math.Ceiling` when you need a defined rounding mode, then cast if required.

### Converting with Convert

`System.Convert` methods (`Convert.ToInt32`, `Convert.ToDouble`, and so on) convert between many types, including from [String][]. They apply their own rounding and overflow rules. Prefer documenting the specific overload you use; see [Convert Class][].

Casting and `Convert` are not identical—for fractional doubles, `(Int32)value` truncates, while `Convert.ToInt32(value)` rounds.

## Choosing a conversion approach

| Goal | Approach |
| --- | --- |
| Widen safely (for example [Int32][] → [Double][]) | Implicit cast / assign or pass without syntax |
| Narrow or truncate (for example [Double][] → [Int32][]) | Explicit cast `(Int32)value` |
| Convert via .NET conversion rules including from text | `Convert.To…` methods |
| Parse text that represents a number | `Int32.Parse`, `Double.TryParse`, and so on — see [Converting Numbers and Text][] |

## Remarks

### Known Limitations

* Floating-point widening ([Single][] → [Double][]) preserves the value but does not create more precision than the original [Single][] had.
* Recovering a number stored as [Object][] requires an explicit cast to the concrete numeric type. Values typed as [dynamic][] usually do not need a cast for member access. See [Object Casting][].

## See Also

### Related Concepts

* [What is a Number?][] — numeric types overview
* [Object Casting][] — implicit vs explicit casting in flows
* [Operators and Comparisons][] — how conversions interact with arithmetic
* [Converting Numbers and Text][] — text parsing and formatting

### Related Data Types

* [Int16][]
* [Int32][]
* [Int64][]
* [Single][]
* [Double][]
* [Object][]
* [dynamic][]

### Related Blocks

* None specific — conversions are performed in expressions or when binding variables to [block properties][block property]

### External Documentation

* [Built-in numeric conversions (C# reference)][built-in numeric conversions]
* [Casting and type conversions (C# Programming Guide)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions)
* [Implicit conversions][Implicit Conversions]
* [Explicit conversions][Explicit Conversions]
* [Convert Class][]

[What is a Number?]: {{< ref "what-is-a-number.md" >}}
[Operators and Comparisons]: {{< ref "operators-and-comparisons.md" >}}
[Converting Numbers and Text]: {{< ref "converting-numbers-and-text.md" >}}
[Number Formatting]: {{< ref "number-formatting.md" >}}

[Object Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.MainDoc" >}}
[implicit cast]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ImplicitCast" >}}
[explicit cast]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[block property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}

[Int16]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Single]: {{< url path="Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[Double]: {{< url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[Object]: {{< url path="Cortex.Reference.DataTypes.All.Object.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Implicit Conversions]: {{< url path="MSDocs.CSharp.ImplicitConversions" >}}
[Explicit Conversions]: {{< url path="MSDocs.CSharp.ExplicitConversions" >}}
[built-in numeric conversions]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/numeric-conversions
[checked and unchecked]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/checked-and-unchecked
[Convert Class]: https://learn.microsoft.com/en-us/dotnet/api/system.convert
