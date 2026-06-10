---
title: "Object Casting"
linkTitle: "Object Casting"
description: "Information regarding casting an object to different data types."
weight: 2
---

# {{% param title %}}

## Summary

**Casting** is the process of converting an [object][] from one [data type][] to another. In {{% ctx %}}, casting happens in [expressions][] (written in the [Expression Editor][]) and when a value is supplied to a [block property][] whose expected type differs from the value's current type.

There are two kinds of cast:

| Kind | When it happens | Expression syntax required? |
| --- | --- | --- |
| [Implicit cast][] | The platform converts automatically when no information is lost | No |
| [Explicit cast][] | You instruct the conversion, typically when data may be lost or the conversion is not guaranteed | Yes — `(TargetType)expression` |

Which conversions are allowed for each [data type][] is documented on that type's reference page. Look in the **Summary** table for **Can be used as** (implicit) and **Can be cast to** (explicit). For expression syntax and examples, see [Casting expressions][] in the Expression Editor documentation.

For the relationship between [Object][] and [dynamic][] when values are stored without a specific type, see [Object vs dynamic][] below and [What is an Object?][].

## Implicit Cast

An **implicit cast** converts one [data type][] to another without requiring expression syntax. {{% ctx %}} performs implicit casts when the conversion is safe — that is, when no information is lost.

Implicit casts occur in two main places:

* **Block properties** — when a [variable][] or expression result is passed to a property that expects a wider or compatible type. For example, an [Int32][] value can be used where a [Double][] is required without writing a cast.
* **Expressions** — in some expression contexts, notably [string expressions][], non-[String][] values are implicitly converted to [String][] (for example when concatenating or interpolating text).

To see which types a [data type][] can be implicitly used as, check **Can be used as** in that type's documentation. Common patterns include:

* Numeric widening — for example, [Int32][] can be used as [Int64][], [Single][], or [Double][].
* Upcasting to [Object][] or [dynamic][] — any [data type][] can be used where `Object` or `dynamic` is expected, because all types derive from [Object][].
* Compatible type conversions — for example, [DateTime][] can be implicitly used as [DateTimeOffset][].

In the examples below, assume the variable `($)Int` has been set to `6`.

| Context | Expression or usage | Result | Notes |
| --- | --- | --- | --- |
| Block property | Pass `($)Int` to a property of type [Double][] | `6.0` | [Int32][] is implicitly cast to [Double][] |
| String concatenation | `($)String1 + " " + ($)Int` where `($)String1` is `"hello"` | `"hello 6"` | `($)Int` is implicitly cast to [String][] |
| String interpolation | `$"{($)String1} {($)Int}"` | `"hello 6"` | Same implicit conversion to [String][] |
| Assignment widening | `Int16` value assigned where [Int32][] is expected | No cast needed | Entire [Int16][] range fits in [Int32][] |

For further information, see [Implicit Conversions][].

## Explicit Cast

An **explicit cast** converts one [data type][] to another when you use cast expression syntax: `(TargetType)expression`. Use an explicit cast when information might be lost, when narrowing a numeric type, or when recovering a more specific type from [Object][] or a base type.

{{< figure src="/images/set-variable/set-variable-expression-casting.PNG" >}}

Explicit casts can result in **loss of information** when the target type cannot represent the full value (for example, casting a [Double][] to [Int32][] truncates decimal places). They can also fail at runtime if the value is not compatible with the target type.

To see which explicit casts are supported for a [data type][], check **Can be cast to** in that type's documentation. The table lists the target type and any value-range restrictions.

In the examples below, assume the variable `($)Int` has been set to `6`.

| Expression | Result | Notes |
| --- | --- | --- |
| `(DayOfWeek)($)Int` | `DayOfWeek.Saturday` | [Int32][] cast to an [Enum][]. Name is `"Saturday"`, value is `6` |
| `(Int16)($)Int` | `6` | [Int32][] cast to [Int16][] when the value is within the [Int16][] range |
| `(Int32)1.9` | `1` | [Double][] to [Int32][] — decimal places are lost |
| `(Char)97` | `'a'` | [Int32][] to [Char][] |
| `(Int32)($)ObjectVariable` | Depends on stored value | Recover the original type from an [Object][]-typed [variable][] |
| `(EmailMessagePriority)0` | `EmailMessagePriority.Normal` | Numeric value cast to an [Enum][] member |

### Casting from Object and dynamic

When a [variable][] holds a value as [Object][] or was returned from a block as [dynamic][], you may need an explicit cast before using type-specific members or passing the value to a property that expects a concrete type.

| Variable contents | To use as [Int32][] | Notes |
| --- | --- | --- |
| [Object][] holding an `Int32` | `(Int32)($)MyObject` | Required for [Object][] |
| [dynamic][] holding an `Int32` | `($)MyDynamic` | No cast needed — member access is resolved at runtime |

This difference is the main practical distinction between [Object][] and [dynamic][] in flows. See [Object vs dynamic][].

### Casting enums

[Enum][] values can be cast to and from their underlying numeric type (typically [Int32][]). Casting a numeric value to an [Enum][] selects the member with that underlying value; casting an [Enum][] to a number returns the underlying value. See [Enum expressions][] and individual [Enum][] data type pages for examples.

Casting alone cannot convert [String][] to an [Enum][] — use `Enum.Parse` or related methods instead.

For further information, see [Explicit Conversions][] and [Cast expression (C# Reference)][MS Cast Expression].

## Object vs dynamic

[Object][] (`System.Object`) and [dynamic][] are interchangeable for storage: any [data type][] can be assigned to either. The difference appears when you **use** the value afterward.

| | [Object][] | [dynamic][] |
| --- | --- | --- |
| Member access | Not available until you cast to the actual type | Resolved at runtime without a cast |
| Typical in flows | Less common | More common for generic block [Input][], [Output][], and [InputOutput][] properties |
| Recovering original type | Explicit cast required — e.g. `(Int32)($)MyObject` | Usually not required |

In practice, blocks that accept or return any [data type][] usually expose [dynamic][]. Exception-handling blocks may return [dynamic][] so you can access exception properties without casting; you can still cast to a specific exception type when you need stricter typing during debugging.

For full details, see the [Object][] and [dynamic][] data type pages and [What is an Object?][].

## Remarks

### Where casting happens

Casting is not limited to the [Expression Editor][]. It also applies when:

* A [variable][] is bound to a [block property][] whose expected type differs from the variable's current contents (implicit cast when supported).
* An expression is evaluated for an [Input][] property.
* A value is written to an [InputOutput][] or [Output][] property and stored in a [variable][].

[Variable typing][] checks that the object a [variable][] holds is compatible with each property. If an unsupported type cannot be implicitly cast, you must explicitly cast or use a conversion method before the flow can run (except for [dynamic][], where compatibility is checked at execution time).

### Casting vs converting

Casting changes how a value is **interpreted** as a type. It does not parse or format text.

| Goal | Approach | Example |
| --- | --- | --- |
| Treat a number as a narrower numeric type | Explicit cast | `(Int16)($)Int` |
| Parse text into a number | Conversion method | `Int32.Parse(($)Text)` or `Convert.ToInt32(($)Text)` |
| Format a value as text | `ToString()`, `Convert.ToString()`, or a text block | See [Converting Objects To Text][] |

If **Can be cast to** for a [data type][] is `N/A`, that type does not support explicit casts to other types in expressions; use methods such as `Parse`, `Convert`, or platform blocks instead.

### Invalid casts

An explicit cast that is not valid for the runtime value causes an error when the expression or block runs (for example, casting a [String][] directly to [Int32][]). Before relying on a cast from [Object][] or [dynamic][], ensure the [variable][] actually contains the type you expect.

Casting a numeric value to an [Enum][] outside the defined member values can produce a value that does not match a named member. Prefer defined members or validate the result when using numeric casts with enums.

### Known Limitations

None

## See Also

### Related Concepts

* [What is an Object?][]
* [Object Equality][]
* [What is a Data Type?][]
* [What is a Variable?][]
* [Converting Objects To Text][]
* [What is an Enum?][]

### Related Data Types

* [Object][]
* [dynamic][]
* [Int32][]
* [Double][]
* [String][]

### Related Blocks

* [Set Variable][]
* [Copy Object][]

### External Documentation

* [Casting and type conversions (C# Programming Guide)][MS Casting]
* [Implicit Conversions][]
* [Explicit Conversions][]
* [Cast expression (C# Reference)][MS Cast Expression]

[Implicit cast]: {{< ref "#implicit-cast" >}}
[Explicit cast]: {{< ref "#explicit-cast" >}}
[Object vs dynamic]: {{< ref "#object-vs-dynamic" >}}

[object]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.WhatIsAnObject.MainDoc" >}}
[What is an Object?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.WhatIsAnObject.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[Converting Objects To Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.ConvertingObjectsToText.MainDoc" >}}
[What is an Enum?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.WhatIsAnEnum.MainDoc" >}}

[What is a Data Type?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}
[data type]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}

[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[Variable typing]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Casting expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.CastingExpressions" >}}
[string expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.StringExpressions" >}}
[Enum expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.EnumExpressions" >}}

[block property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int16]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int64]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Double]: {{< url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[Single]: {{< url path="Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Char]: {{< url path="Cortex.Reference.DataTypes.Text.Char.MainDoc" >}}
[DateTime]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[Enum]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}

[Set Variable]: {{< url path="Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}
[Copy Object]: {{< url path="Cortex.Reference.Blocks.Objects.CopyObject.CopyObject.MainDoc" >}}

[MS Casting]: {{< url path="MSDocs.CSharp.Casting" >}}
[Implicit Conversions]: {{< url path="MSDocs.CSharp.ImplicitConversions" >}}
[Explicit Conversions]: {{< url path="MSDocs.CSharp.ExplicitConversions" >}}
[MS Cast Expression]: {{< url path="MSDocs.CSharp.CastExpression" >}}
