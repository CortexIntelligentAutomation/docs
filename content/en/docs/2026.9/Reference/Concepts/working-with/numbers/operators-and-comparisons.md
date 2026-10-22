---
title: "Operators and Comparisons"
linkTitle: "Operators and Comparisons"
description: "How arithmetic and comparison operators behave for numeric types in CORTEX expressions, including integer division, overflow, and floating-point caveats."
weight: 2
---

# {{% param title %}}

## Summary

Numeric values in {{% ctx %}} are combined and compared in the [Expression Editor][] using C# [operators][]. Arithmetic operators (`+`, `-`, `*`, `/`, `%`) produce a new numeric value. Comparison and equality operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) produce a [Boolean][] result.

Operator evaluation follows C# rules for precedence and associativity. Use parentheses to make order explicit—for example `(a + b) * c` versus `a + b * c`.

For an overview of numeric types, see [What is a Number?][]. For casting between types during arithmetic, see [Numeric Conversions][].

## Arithmetic operators

| Operator | Name | Example | Result when `($)Int1` is `6` and `($)Int2` is `3` |
| --- | --- | --- | --- |
| `+` | Addition | `($)Int1 + ($)Int2` | `9` |
| `-` | Subtraction | `($)Int1 - ($)Int2` | `3` |
| `*` | Multiplication | `($)Int1 * ($)Int2` | `18` |
| `/` | Division | `($)Int1 / ($)Int2` | `2` |
| `%` | Remainder | `($)Int1 % ($)Int2` | `0` |

Unary `-` negates a value (for example `-($)Int1`). For full language details, see [Arithmetic Operators][].

### Integer division

When **both** operands of `/` are integer types ([Int16][], [Int32][], [Int64][], and so on), the result is an **integer**. The fractional part is discarded toward zero.

| Expression | Result | Notes |
| --- | --- | --- |
| `3 / 2` | `1` | Both operands are integers |
| `3.0 / 2` | `1.5` | At least one operand is floating point |
| `3 / 2.0` | `1.5` | At least one operand is floating point |
| `(double)3 / 2` | `1.5` | Explicit cast widens before division |

If you need a fractional quotient, ensure at least one operand is [Single][] or [Double][] (by literal suffix, cast, or variable type).

### Division by zero

* **Integer** (and `decimal`) division by zero throws [DivideByZeroException][].
* **Floating-point** division by zero does not throw; IEEE 754 rules produce positive infinity, negative infinity, or NaN depending on the numerator.

### Order of operations

C# evaluates arithmetic with standard precedence: multiplicative operators (`*`, `/`, `%`) bind more tightly than additive operators (`+`, `-`). Operators with the same precedence usually associate left to right.

| Expression | Evaluates as | Result |
| --- | --- | --- |
| `2 + 3 * 4` | `2 + (3 * 4)` | `14` |
| `(2 + 3) * 4` | parentheses first | `20` |
| `10 - 4 - 2` | `(10 - 4) - 2` | `4` |

For the complete precedence table, see [C# operators and expressions — operator precedence][Operator precedence].

## Overflow and underflow

Integral arithmetic can produce a result that does not fit in the destination type (for example `Int32.MaxValue + 1`). Behaviour depends on the C# **checked** or **unchecked** context:

| Context | On overflow |
| --- | --- |
| Unchecked | High-order bits discarded; the value wraps (for example past `MaxValue` toward `MinValue`) |
| Checked (default behaviour in {{% ctx %}}) | [OverflowException][] is thrown at run time (or a compile-time error for overflowing constant expressions) |

You can force a context with the `checked(...)` and `unchecked(...)` operators or statements. See [checked and unchecked][].

Floating-point overflow produces infinity rather than wrapping; underflow can produce denormalized values or zero. Those cases do not throw in ordinary arithmetic.

## Comparison and equality operators

| Operator | Meaning | Example result (`1` vs `2`) |
| --- | --- | --- |
| `==` | Equal | `false` |
| `!=` | Not equal | `true` |
| `<` | Less than | `true` |
| `>` | Greater than | `false` |
| `<=` | Less than or equal | `true` |
| `>=` | Greater than or equal | `false` |

Integral comparisons are exact within the type's range. For mixed numeric types, C# applies [built-in numeric conversions][] before comparing.

For how value equality relates to objects and collections, see [Object Equality][].

### Floating-point comparisons

[Single][] and [Double][] values can disagree because of rounding. Prefer an epsilon (tolerance) check when comparing calculated reals, or compare formatted text only when you intentionally want culture-sensitive string equality.

Special values:

* `NaN == NaN` is `false`. Use `Double.IsNaN` / `Single.IsNaN` to test.
* Comparisons involving NaN are unordered (`>` / `<` are `false`).

## Remarks

### Known Limitations

* Default overflow behaviour in {{% ctx %}} is **checked** and an [OverflowException][] is thrown unless you use `unchecked`.

## See Also

### Related Concepts

* [What is a Number?][] — numeric types and literals
* [Numeric Conversions][] — widening, narrowing, and casts during arithmetic
* [Object Equality][] — equality beyond numeric operators
* [Expression Editor][] — arithmetic and comparison expression examples

### Related Data Types

* [Int16][]
* [Int32][]
* [Int64][]
* [Single][]
* [Double][]
* [Boolean][]

### Related Blocks

* None specific — numeric operators are used in expressions on block properties

### External Documentation

* [Arithmetic operators (C# reference)][Arithmetic Operators]
* [Comparison operators (C# reference)][Comparison Operators]
* [Equality operators (C# reference)][Equality Operators]
* [checked and unchecked statements (C# reference)][checked and unchecked]
* [Operator precedence][Operator precedence]

[What is a Number?]: {{< ref "what-is-a-number.md" >}}
[Numeric Conversions]: {{< ref "numeric-conversions.md" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}

[Int16]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Single]: {{< url path="Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[Double]: {{< url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}

[operators]: {{< url path="Cortex.Reference.Glossary.K-O.Operator" >}}
[Arithmetic Operators]: {{< url path="MSDocs.CSharp.ArithmeticOperators" >}}
[Comparison Operators]: {{< url path="MSDocs.CSharp.ComparisonOperators" >}}
[Equality Operators]: {{< url path="MSDocs.CSharp.EqualityOperators" >}}
[DivideByZeroException]: https://learn.microsoft.com/en-us/dotnet/api/system.dividebyzeroexception
[OverflowException]: https://learn.microsoft.com/en-us/dotnet/api/system.overflowexception
[checked and unchecked]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/checked-and-unchecked
[Operator precedence]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/#operator-precedence
[built-in numeric conversions]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/numeric-conversions
