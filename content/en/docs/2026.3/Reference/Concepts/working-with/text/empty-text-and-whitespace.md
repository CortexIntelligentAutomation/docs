---
title: "Empty Text and Whitespace"
linkTitle: "Empty Text and Whitespace"
description: "How empty text and whitespace work in CORTEX: null vs empty vs whitespace-only strings, common whitespace characters, and related Is Text blocks."
---

# {{% param title %}}

## Summary

In {{% ctx %}}, a [String][] can be missing (`null`), empty (length `0`), or contain only whitespace. These states look similar in the designer but behave differently in comparisons, validation, and most Text blocks.

| State | Example | Length | Notes |
| --- | --- | --- | --- |
| `null` | Unassigned [String][], or explicitly `null` | — | No string instance. See [Null and Nullable Types][]. |
| Empty text | `""` or [String.Empty][] | `0` | A valid string with no characters. |
| Whitespace-only | `"   "`, `"\t"`, `"\r\n"` | Greater than `0` | Not empty; every character is space, tab, CR, or LF (Is Text blocks). |
| Non-empty text | `"Cortex"`, `" a "` | Greater than `0` | Contains at least one non-whitespace character (the last example also contains spaces). |

| Goal | Prefer |
| --- | --- |
| A defined empty value | `""` or [String.Empty][] — not `null` |
| Test for `null` only | [Is Text Null][] or `($)Text == null` |
| Test for empty only (`""`) | [Is Text Empty][] or `($)Text == ""` / `($)Text.Length == 0` |
| Test for `null` or empty | [Is Text Null Or Empty][] or [String.IsNullOrEmpty][] |
| Test for empty or whitespace-only (space, tab, CR, LF) | [Is Text Empty Or Whitespace][] |
| Test for `null`, empty, or whitespace-only (space, tab, CR, LF) | [Is Text Null, Empty Or Whitespace][]  or [String.IsNullOrWhiteSpace][]|

Treat `null`, empty, and whitespace as distinct cases when validating input. For an overview of text in {{% ctx %}}, see [What is Text?][].

## Empty Text

**Empty text** is a [String][] whose length is `0`. It contains no characters. It is **not** the same as `null`: empty text is a real string instance.

### Creating empty text

In the [Expression Editor][], create empty text with either form:

| Expression | Meaning |
| --- | --- |
| `""` | Empty string literal |
| `String.Empty` | The [String.Empty][] field (same value as `""`) |

Both evaluate to the same empty string. Prefer one style consistently in a flow.

```csharp
($)Message = ""
($)Message = String.Empty
```

In the [Literal Editor][], surrounding quotes are not required for [String][] properties; an empty literal value is empty text. Leaving some properties with **no value** (for example on [Set Variable][]) can set the variable to `null` instead — see [Empty versus no value][].

### Properties of empty text

| Check | Text | Result |
| --- | --- | --- |
| `($)Text == null` | `""` | `false` |
| `($)Text == ""` or `($)Text == String.Empty` | `""` | `true` |
| `($)Text.Length` | `""` | `0` |
| [Is Text Empty][] | `""` | `true` |
| [Is Text Empty][] | `"   "` | `false` (whitespace is not empty) |
| [Is Text Empty][] | `null` | `false` (`null` is not empty) |

## Whitespace

In {{% ctx %}} Text blocks that check for whitespace (for example [Is Text Empty Or Whitespace][] and [Is Text Null, Empty Or Whitespace][]), **whitespace** means any of these characters:

| Character | Escape / literal | Unicode | Notes |
| --- | --- | --- | --- |
| Space | `" "` | U+0020 | Ordinary space |
| Character tabulation (tab) | `"\t"` | U+0009 | Horizontal tab |
| Line feed (newline) | `"\n"` | U+000A | Unix-style line ending component |
| Carriage return | `"\r"` | U+000D | Often combined with `\n` as `"\r\n"` |

Escape sequences apply in regular (non-verbatim) string literals in the [Expression Editor][] — see [String escape sequences][].

A string is **whitespace-only** when its length is greater than `0` and every character is one of the whitespace characters above. Whitespace-only text is **not** empty: `"   ".Length` is `3`, not `0`.

### .NET whitespace (expressions)

In expressions, [Char.IsWhiteSpace][] and [String.IsNullOrWhiteSpace][] use a **broader** Unicode set than the Is Text whitespace blocks. That set includes the four characters above plus others such as no-break space (U+00A0), vertical tab (U+000B), form feed (U+000C), next line (U+0085), line separator (U+2028), paragraph separator (U+2029), and further space-separator code points. See [Char.IsWhiteSpace][].

| Approach | Whitespace characters |
| --- | --- |
| [Is Text Empty Or Whitespace][], [Is Text Null, Empty Or Whitespace][] | Space, tab, carriage return, line feed only |
| [String.IsNullOrWhiteSpace][], [Char.IsWhiteSpace][] | Full .NET whitespace set |

Use the Is Text blocks when you want the product definition (the four characters). Use [String.IsNullOrWhiteSpace][] or [Char.IsWhiteSpace][] in the [Expression Editor][] only when you need the broader .NET behaviour.

### Examples

| Text | Empty? | Whitespace-only? (blocks) | Notes |
| --- | --- | --- | --- |
| `""` | Yes | No | Length `0` |
| `"   "` | No | Yes | Spaces only |
| `"\t\r\n"` | No | Yes | Tab and line endings only |
| `" a "` | No | No | Contains a non-whitespace character |
| `"\u00A0"` (no-break space) | No | No | Not whitespace for Is Text blocks; is whitespace for [Char.IsWhiteSpace][] |
| `null` | No | No | Not a string instance |

## Checking null, empty, and whitespace

### Using blocks

Use the Is Text blocks when you want a clear yes/no result in a flow:

| Block | Returns `true` when Text is… |
| --- | --- |
| [Is Text Null][] | `null` |
| [Is Text Empty][] | empty (`""`) |
| [Is Text Null Or Empty][] | `null` or empty |
| [Is Text Empty Or Whitespace][] | empty or whitespace-only (space, tab, CR, LF) |
| [Is Text Null, Empty Or Whitespace][] | `null`, empty, or whitespace-only (space, tab, CR, LF) |

Each block's remarks document how `null` and whitespace-only values are treated. For example, [Is Text Empty][] returns `false` for both `null` and `"   "`.

### Using expressions

| Need | Example |
| --- | --- |
| Is `null`? | `($)Text == null` |
| Is empty? | `($)Text == ""` or `($)Text == String.Empty` |
| Is `null` or empty? | `string.IsNullOrEmpty(($)Text)` |
| Is `null`, empty, or whitespace-only (.NET set)? | `string.IsNullOrWhiteSpace(($)Text)` |
| Character is whitespace (.NET set)? | `char.IsWhiteSpace(($)Text[0])` |

[String.IsNullOrEmpty][] matches [Is Text Null Or Empty][]. [String.IsNullOrWhiteSpace][] is **not** an exact equivalent of [Is Text Null, Empty Or Whitespace][] because .NET recognizes additional whitespace characters — see [Whitespace characters in Is Text blocks][]. Prefer blocks when the decision should be visible on the flow canvas and you want the product whitespace definition; use expressions inside other property values or more complex conditions.

## Remarks

### Null versus empty text

`null` means there is no [String][] instance. Empty text (`""` / [String.Empty][]) is an instance with length `0`. Equality checks, length, and most string methods behave differently for the two. See [Null and Nullable Types][] and [Is Text Null][].

### Empty versus whitespace-only text

Whitespace-only text has length greater than `0`, so it is not empty. Blocks and APIs that test only for empty (for example [Is Text Empty][] or [String.IsNullOrEmpty][]) return `false` for `"   "`. Use [Is Text Empty Or Whitespace][] or [Is Text Null, Empty Or Whitespace][] when whitespace-only input (space, tab, CR, or LF) should be treated like missing content.

### Empty versus no value

Leaving a property with **no value** is not the same as empty text. On [Set Variable][], leaving Value unset typically assigns `null`. To assign empty text deliberately, use `""` or `String.Empty` in the [Expression Editor][] (or an explicit empty string in the editor that applies). See [Null and Nullable Types][].

### Prefer defined empty values

When a flow needs a defined empty string (for concatenation, default messages, or APIs that reject `null`), assign `""` or [String.Empty][] rather than leaving the value unset. Reserve `null` for “no value provided.”

### Whitespace characters in Is Text blocks

[Is Text Empty Or Whitespace][] and [Is Text Null, Empty Or Whitespace][] treat only space, tab, carriage return, and line feed as whitespace. Other Unicode whitespace characters (for example no-break space U+00A0) are **not** treated as whitespace by those blocks. [String.IsNullOrWhiteSpace][] and [Char.IsWhiteSpace][] in expressions use the broader .NET set — see [.NET whitespace (expressions)][].

## See Also

### Related Concepts

* [What is Text?][] — strings, immutability, and overview of text concepts
* [Null and Nullable Types][] — `null` for reference and nullable types
* [Equality][] — comparing text with [StringComparison][]
* [Casing][] — changing case (not the same as trimming whitespace)

### Related Data Types

* [String][]
* [Char][]

### Related Blocks

* [Is Text Null][]
* [Is Text Empty][]
* [Is Text Null Or Empty][]
* [Is Text Empty Or Whitespace][]
* [Is Text Null, Empty Or Whitespace][]

### External Documentation

* [Char.IsWhiteSpace][]
* [String.Empty][]
* [String.IsNullOrEmpty][]
* [String.IsNullOrWhiteSpace][]
* [String escape sequences][]
* [System.String][]
* [System.Char][]

[Empty versus no value]: {{< ref "#empty-versus-no-value" >}}
[Whitespace characters in Is Text blocks]: {{< ref "#whitespace" >}}
[.NET whitespace (expressions)]: {{< ref "#net-whitespace-expressions" >}}

[What is Text?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.WhatIsText.MainDoc" >}}
[Null and Nullable Types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.NullAndNullableTypes.MainDoc" >}}
[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[Casing]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Casing.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Char]: {{< url path="Cortex.Reference.DataTypes.Text.Char.MainDoc" >}}
[StringComparison]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[Set Variable]: {{< url path="Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}

[Is Text Null]: {{< url path="Cortex.Reference.Blocks.Text.IsText.IsTextNull.MainDoc" >}}
[Is Text Empty]: {{< url path="Cortex.Reference.Blocks.Text.IsText.IsTextEmpty.MainDoc" >}}
[Is Text Null Or Empty]: {{< url path="Cortex.Reference.Blocks.Text.IsText.IsTextNullOrEmpty.MainDoc" >}}
[Is Text Empty Or Whitespace]: {{< url path="Cortex.Reference.Blocks.Text.IsText.IsTextEmptyOrWhitespace.MainDoc" >}}
[Is Text Null, Empty Or Whitespace]: {{< url path="Cortex.Reference.Blocks.Text.IsText.IsTextNullEmptyOrWhitespace.MainDoc" >}}

[Char.IsWhiteSpace]: {{< url path="MSDocs.DotNet.Api.System.Char.IsWhiteSpace" >}}
[String.Empty]: {{< url path="MSDocs.DotNet.Api.System.String.Empty" >}}
[String.IsNullOrEmpty]: {{< url path="MSDocs.DotNet.Api.System.String.IsNullOrEmpty" >}}
[String.IsNullOrWhiteSpace]: {{< url path="MSDocs.DotNet.Api.System.String.IsNullOrWhiteSpace" >}}
[String escape sequences]: {{< url path="MSDocs.CSharp.EscapeSequences" >}}
[System.String]: {{< url path="MSDocs.DotNet.Api.System.String.MainDoc" >}}
[System.Char]: {{< url path="MSDocs.DotNet.Api.System.Char.MainDoc" >}}
