---
title: "Converting Objects To Text"
linkTitle: "Converting Objects To Text"
description: "How values become text in CORTEX: ToString, Convert.ToString, Convert Object To Text, formatting and join blocks, Convert Object To Json, and expression alternatives."
---

# {{% param title %}}

## Summary

Flows often need a [String][] representation of a value that is not already text—for example a number, [Boolean][], [DateTime][], [Structure][], or another object. In {{% ctx %}}, that conversion is the value's **text representation**: the result of formatting or calling `ToString` / `Convert.ToString`, depending on the block or expression you use.

| Goal | Prefer |
| --- | --- |
| Message text from an object's named properties | [Convert Object To Text][] with a [format template][Formatting] |
| Composite template with index placeholders (`{0}`, `{1}`, …) | [Format Text With Value][] / [Format Text With Values][], or [String.Format][] / [string interpolation][String interpolation] |
| Join many values with a separator | [Join Text][] |
| Culture-aware date/time display | [Convert Date Time To Text][] — see [Date and Time Formatting][] |
| Structural / interchange text (JSON) | [Convert Object To Json][] |
| Quick conversion in an [expression][] | `ToString()`, `Convert.ToString`, or `$"…"` |

For numeric parse/format patterns, see [Converting Numbers and Text][] and [Number Formatting][]. For composite format templates and format items in general, see [Formatting][].

## How values become text

Most value types and many framework types override [Object.ToString][] (or overload it with format and [IFormatProvider][] arguments) so the result is a readable [String][]. Parameterless `ToString()` and many `Convert.ToString` overloads that take no provider use [Current Culture][] in .NET. Formatting blocks that expose **Format Provider** typically default to [Invariant Culture][] when the provider is omitted or `null`.

When a formatting block replaces a placeholder with a non-text value, it converts that value to its text representation (type-specific `ToString` / formatting rules), controlled by the block's **Format Provider** where applicable. [Join Text][] always uses `value.ToString()` for non-text items.

Per-type examples live on the data type pages under headings such as **Convert … to Text**—for example [Boolean][], [Int32][], [Double][], and [DateTime][]. Those tables show common expression forms (`ToString`, `Convert.ToString`) and blocks ([Convert Object To Text][], [Convert Object To Json][]).

Some types do not override `ToString` with a content-aware representation. For those, [Object.ToString][] returns the type's **Full Name** (for example `"Cortex.DataTypes.Data.Commands"`). [Convert Object To Text][] with an empty format template uses `Convert.ToString` and shows the same Full Name behaviour—it does **not** fall back to JSON. Use [Convert Object To Json][] when you need a structural representation of the data. See [Types that return their Full Name][].

## Using Blocks

| Block | How it produces text |
| --- | --- |
| [Convert Object To Text][] | Replaces `{Property}` tokens in a format template with object property values, or `Convert.ToString` when the template is empty |
| [Format Text With Value][] | Replaces `{0}` in a format template with a single value |
| [Format Text With Values][] | Replaces `{0}`, `{1}`, … with values from a collection |
| [Join Text][] | Joins values with a separator; non-text values use `value.ToString()` |
| [Convert Date Time To Text][] | Formats a date/time value with an optional format template and provider |
| [Convert Object To Json][] | Serializes the object to a JSON [String][] via [JsonSerializerSettings][] |

Non-text values passed into [Format Text With Value][], [Format Text With Values][], and property placeholders in [Convert Object To Text][] are converted to their text representation. Template syntax, format items, and specifiers are covered under [Formatting][]; number and date/time domains are detailed in [Number Formatting][] and [Date and Time Formatting][].

### Convert Object To Text

[Convert Object To Text][] builds text from an **Object** and an optional **Format Template** and **Format Provider**:

1. If **Format Template** contains `{Property}` format parameters, each matching property name on the object is replaced with that property's value. Names are **case-sensitive** and must match exactly. Nested paths such as `{PaidOff.Total}` are supported.
2. Property values need not be text; non-text values are converted to their text representation (see [How values become text][]).
3. Format parameters can include format specifiers (for example `{LastPaymentAmount:C2}`). Specifiers follow [Formatting][], [Number Formatting][], and [Date and Time Formatting][].
4. If **Format Template** is omitted, `null`, or empty (`""`), the result is [`Convert.ToString(Object, Format Provider)`][Convert.ToString(object, IFormatProvider)].
5. If **Format Provider** is omitted or `null`, `CultureInfo.InvariantCulture` is used—see [Invariant Culture][].
6. If **Format Template** is non-empty but contains **no** `{Property}` tokens, nothing is replaced; the result is the template string unchanged.
7. Indexing into properties (for example `ListProperty[0]` or `DictionaryProperty["key"]`) is not supported—see [Known Limitations][].

Worked examples are on the [Convert Object To Text][] block page.

### Convert Object To Json

[Convert Object To Json][] serializes an object to a JSON [String][], optionally controlled by [JsonSerializerSettings][] (null handling, date formats, escaping, type information, and related options).

Use this block when you need a **structural** text representation—payload exchange, persistence as JSON, or when `ToString` / [Convert Object To Text][] (empty template) would only return a type **Full Name**. JSON output is not the same as culture-formatted display text; for display messages prefer format templates or the Format Text blocks.

## Using Expressions

In the [Expression Editor][], convert values to text with methods and string composition.

### ToString()

Call `ToString()` on a value (or a [variable][] such as `($)Amount.ToString()`):

| Form | Culture / provider | Typical use |
| --- | --- | --- |
| `value.ToString()` | [Current Culture][] when no provider is passed | Quick display; culture may vary by execution server |
| `value.ToString(format)` | [Current Culture][] | Numeric or date format strings—see [Number Formatting][] / [Date and Time Formatting][] |
| `value.ToString(format, provider)` | Explicit [IFormatProvider][] / [CultureInfo][] | Stable or locale-specific output |

See [Object.ToString][] and the per-type **Convert … to Text** tables (for example [Int32.ToString][], [Boolean.ToString][], [DateTime.ToString][]).

### Convert.ToString

[`Convert.ToString`][Convert.ToString] converts many source types to [String][]. The overload used by [Convert Object To Text][] when the template is empty is [`Convert.ToString(object, IFormatProvider)`][Convert.ToString(object, IFormatProvider)]. Prefer an explicit provider when the result must not depend on [Current Culture][].

### String interpolation

An [interpolated string][Interpolated Strings] is declared with `$` and embeds expressions in `{…}`:

```csharp
$"Hello {($)Name}"
$"Total: {($)Amount:C2}"
```

Interpolation converts embedded values to text as part of composing the string. Use format and alignment clauses where needed (for example `{($)Amount:N2}`). For syntax and {{% ctx %}} expression usage, see [Interpolated Strings][] and [string interpolation in C#][MS Interpolation].

### String.Format

[`String.Format`][String.Format] applies composite formatting with index placeholders:

```csharp
String.Format("Hello {0}", ($)Name)
String.Format(CultureInfo.InvariantCulture, "Total: {0:C2}", ($)Amount)
```

This matches the `{0}`, `{1}`, … style used by [Format Text With Value][] and [Format Text With Values][]. Overloads that take an [IFormatProvider][] keep culture explicit. See [String.Format][] and [Formatting][].

## Choosing an approach

| Situation | Approach |
| --- | --- |
| Readable message from a [Structure][] or object properties | [Convert Object To Text][] with `{Property}` tokens |
| One or more values into a numbered template | [Format Text With Value][] / [Format Text With Values][], `String.Format`, or [string interpolation][String interpolation] |
| List of values separated by a delimiter | [Join Text][] |
| Date/time-specific formats | [Convert Date Time To Text][] + [Date and Time Formatting][] |
| Need JSON structure, or `ToString` only gives a Full Name | [Convert Object To Json][] |
| Inline conversion next to other expression logic | `ToString` / `Convert.ToString` / `$"…"` |

Do **not** assume [Convert Object To Text][] serializes to JSON when the text representation is unhelpful—use [Convert Object To Json][] for that purpose.

## Remarks

### Culture and format provider defaults

| Context | Typical default when provider is omitted |
| --- | --- |
| Expression `ToString()` / many `Convert.ToString` overloads without a provider | [Current Culture][] |
| [Convert Object To Text][], [Format Text With Value][], [Format Text With Values][] (**Format Provider** omitted or `null`) | [Invariant Culture][] (`CultureInfo.InvariantCulture`) |
| [Convert Date Time To Text][] (**Format Provider** omitted or `null`) | [Invariant Culture][]; if **Format Template** is also empty or unspecified, the result uses the [ISO 8601][] pattern — see the block remarks |
| [Join Text][] | `value.ToString()` (no separate format provider property) |

Mixing expression defaults and block defaults for the same number or date can produce different separators or layouts. Set the provider explicitly when results must be stable across servers or match a known locale—see [What is a Culture?][], [Invariant Culture][], and [Current Culture][].

### Types that return their Full Name

If a type does not provide a content-aware `ToString` override, [Object.ToString][] returns the runtime type's Full Name. [Convert Object To Text][] with an empty or unspecified format template follows `Convert.ToString` and exhibits the same behaviour. Data type pages document this where it applies (for example [Commands][]). To get property values or nested data as text, supply a format template with `{Property}` tokens, or use [Convert Object To Json][] for a JSON string.

### Known Limitations

* Using `{{VariableName}}` expression syntax to convert a [variable][] to its [String][] representation is not supported. Use a [method][] call instead—for example `($)VariableName.ToString()`. In future this limitation may be removed.
* [Convert Object To Text][] does not support indexing into properties (for example `ListProperty[0]` or `DictionaryProperty["key"]`). See the block's [known limitations][Convert Object To Text Known Limitations].

## See Also

### Related Concepts

* [What is Text?][] — strings, literals, and overview of text concepts
* [Formatting][] — composite text formatting and format templates
* [Converting Numbers and Text][] — number ↔ text
* [Number Formatting][] — numeric format providers and templates
* [Date and Time Formatting][] — date/time format patterns
* [What is a Culture?][] — invariant, current, and specific cultures
* [Interpolated Strings][] — embedding values in the [Expression Editor][]

### Related Data Types

* [String][]
* [Boolean][]
* [Int32][]
* [Double][]
* [DateTime][]
* [Structure][]
* [CultureInfo][]
* [IFormatProvider][]
* [JsonSerializerSettings][]

### Related Blocks

* [Convert Object To Text][]
* [Convert Object To Json][]
* [Format Text With Value][]
* [Format Text With Values][]
* [Join Text][]
* [Convert Date Time To Text][]

### External Documentation

* [Object.ToString][]
* [Convert.ToString][]
* [Convert.ToString(object, IFormatProvider)][]
* [String.Format][]
* [String interpolation in C#][MS Interpolation]
* [IFormatProvider][MS IFormatProvider]

[How values become text]: {{< ref "#how-values-become-text" >}}
[String interpolation]: {{< ref "#string-interpolation" >}}
[Types that return their Full Name]: {{< ref "#types-that-return-their-full-name" >}}
[Known Limitations]: {{< ref "#known-limitations" >}}
[Convert Object To Text Known Limitations]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.KnownLimitations" >}}
[ISO 8601]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}

[What is Text?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.WhatIsText.MainDoc" >}}
[Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Formatting.MainDoc" >}}
[Converting Numbers and Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Numbers.ConvertingNumbersAndText.MainDoc" >}}
[Number Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Numbers.NumberFormatting.MainDoc" >}}
[Date and Time Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.MainDoc" >}}
[What is a Culture?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.WhatIsACulture.MainDoc" >}}
[Invariant Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[Current Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.CurrentCulture.MainDoc" >}}

[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}
[method]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MethodExpressions" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Interpolated Strings]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.InterpolatedStrings" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Double]: {{< url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[DateTime]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[CultureInfo]: {{< url path="Cortex.Reference.DataTypes.Text.CultureInfo.MainDoc" >}}
[IFormatProvider]: {{< url path="Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}
[JsonSerializerSettings]: {{< url path="Cortex.Reference.DataTypes.Json.JsonSerializerSettings.MainDoc" >}}
[Commands]: {{< url path="Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}

[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Format Text With Value]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValue.MainDoc" >}}
[Format Text With Values]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.MainDoc" >}}
[Join Text]: {{< url path="Cortex.Reference.Blocks.Text.JoinText.JoinText.MainDoc" >}}
[Convert Date Time To Text]: {{< url path="Cortex.Reference.Blocks.DateAndTime.ConvertDateTime.ConvertDateTimeToText.MainDoc" >}}

[Object.ToString]: {{< url path="MSDocs.DotNet.Api.System.Object.ToString" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}
[Convert.ToString(object, IFormatProvider)]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToStringObjectFormatProvider" >}}
[String.Format]: {{< url path="MSDocs.DotNet.Api.System.String.Format" >}}
[MS Interpolation]: {{< url path="MSDocs.CSharp.Interpolation" >}}
[MS IFormatProvider]: {{< url path="MSDocs.DotNet.Api.System.IFormatProvider" >}}
[Int32.ToString]: {{< url path="MSDocs.DotNet.Api.System.Int32.ToString" >}}
[Boolean.ToString]: {{< url path="MSDocs.DotNet.Api.System.Boolean.ToString" >}}
[DateTime.ToString]: {{< url path="MSDocs.DotNet.Api.System.DateTime.ToString" >}}
