---
title: "What is Text?"
linkTitle: "What is Text?"
description: "Overview of text in CORTEX: String and Char, null and empty values, comparison, search options, parsing, formatting, encoding, immutability, literals, and indexing."
weight: 1
---

# {{% param title %}}

## Summary

In {{% ctx %}}, **text** is represented by the [String][] data type (`System.String`, alias `string`): an immutable sequence of Unicode [Char][] values. Text appears throughout flows as [variable][] values, [block property][] inputs and outputs, messages, paths, payloads, and [expressions][] in the [Expression Editor][].

| Concept | Meaning |
| --- | --- |
| [String][] | A sequence of characters (for example `"Hello"`) |
| [Char][] | A single Unicode character (for example `'H'`) |
| `null` | No string instance; default for an uninitialized [String][] variable |
| Empty text | A string with length `0` (`""` or `String.Empty`) |
| Whitespace | Characters such as space, tab, and newline (see [Empty Text and Whitespace][]) |

Most Text blocks and properties use [String][]. Use [Char][] when an expression or API needs a single character. How text is compared, cased, formatted, and parsed often depends on [culture][Culture] and [StringComparison][] rules — see [Equality][], [Casing][], and [Formatting][].

## Null, empty text, and whitespace

A [String][] variable can be:

| State | Example | Notes |
| --- | --- | --- |
| `null` | Unassigned [String][], or explicitly `null` | Not the same as empty text. See [Null and Nullable Types][]. |
| Empty | `""` or `String.Empty` | Length is `0`; contains no characters. |
| Whitespace-only | `"   "`, `"\t"`, `"\r\n"` | Not empty; length is greater than `0`. |

Prefer `String.Empty` or `""` when you need a defined empty value. Treat `null`, empty, and whitespace as distinct cases when validating input. For definitions and differences, see [Empty Text and Whitespace][]. Blocks such as those under [Text][Text Blocks] can test for `null`, empty, or whitespace before further processing.

## String vs Char

| | [String][] | [Char][] |
| --- | --- | --- |
| Represents | Zero or more characters | Exactly one Unicode character |
| Literal syntax | Double quotes: `"abc"` | Single quotes: `'a'` |
| Type kind | [Reference type][reference types] (default `null`) | [Value type][value types] (default `'\0'`) |
| Typical use | Messages, paths, search text, formatted output | Single-character checks, casting from code points |

A [String][] is a sequence of [Char][] values. Indexing a string (for example `"Cortex"[0]`) yields a [Char][]. Creating and converting strings is documented on [String][]; character literals and escapes are documented on [Char][] and in [Literal, verbatim, and interpolated strings][].

## Operators and comparisons

### Concatenation

Combine text with:

* The `+` operator (for example `"Hello" + " " + "World"`)
* `String.Concat`, `String.Join`, or `String.Insert` in expressions
* Blocks such as [Add Text at Beginning][], [Join Text][], and related Add Text / Join Text blocks

Because strings are [immutable][Immutability of strings], each concatenation produces a **new** string. For many small concatenations in a loop, prefer building the result once (for example with fewer concatenations, [Format Text With Values][], or interpolation) rather than appending repeatedly. See [String concatenation][] and [Basic string operations][].

### Equality and comparison types

Text equality is not always a simple character-by-character match. [StringComparison][] values control culture and casing:

| Comparison | Typical use |
| --- | --- |
| [Ordinal][] / [Ordinal Ignore Case][] | Identifiers, paths, machine-oriented matches; prefer when unsure |
| [Invariant Culture][Invariant Culture comparison] / [Invariant Culture Ignore Case][] | Culture-stable linguistic rules |
| [Current Culture][Current Culture comparison] / [Current Culture Ignore Case][] | User-facing text for the execution server's locale |

Do **not** change case (for example `ToLower` / `ToUpper`) only to compare strings. Choose an appropriate [StringComparison][] (or ignore-case variant) instead. See [Equality][], [Casing][], and [Best practices for comparing strings in .NET][].

## Searching text: LiteralText, Regex, and PatternMatching

Many Text blocks accept [SearchOptions][] to choose how search text ([TextToFind][]) is interpreted:

| [SearchOptions][] value | Behaviour | Learn more |
| --- | --- | --- |
| [LiteralText][] | Exact character match of the search text | [SearchOptions][] |
| [Regex][SearchOptions Regex] | .NET regular expression match | [Regex Syntax][] |
| [PatternMatching][] | Simple wildcards (`*` / `?`) | [Pattern Matching Syntax][] |

Use [LiteralText][] for fixed phrases, [PatternMatching][] for simple wildcards (for example file-style patterns), and [Regex][SearchOptions Regex] for full pattern languages. Pair search with a [Comparison Type][Equality] when the block exposes one. Examples appear on blocks such as [Contains All Text][] and [Contains Any Text][].

## Parsing text to a number

Turning text into a number (`Parse`, `TryParse`, `Convert.ToInt32`, and similar) depends on [culture][Culture]: decimal and group separators must match the format provider. Prefer [Invariant Culture][] for machine-readable values shared between systems, and an explicit [Specific Culture][] when the source uses a regional format.

For full guidance, examples, and block options, see [Converting Numbers and Text][]. Related: [What is a Number?][] and [Number Formatting][].

## String formatting

Formatting turns values (numbers, dates, other objects) into display or composite [String][] output using format providers, templates, and specifiers.

| Goal | See |
| --- | --- |
| Composite templates and format items in Text | [Formatting][] |
| Number patterns (`"N2"`, `"C"`, and so on) | [Number Formatting][] |
| Date and time patterns | [Date and Time Formatting][] |
| Objects to text (blocks and expressions) | [Converting Objects To Text][] |
| Blocks | [Format Text With Value][], [Format Text With Values][], [Convert Object To Text][] |

In expressions, [interpolated strings][Interpolated Strings] and `String.Format` are common alternatives to formatting blocks. Culture choice matters for both display and round-tripping — see [Culture][] and [Formatting][].

## Encoding

[Encoding][Working with Text - Encoding] maps between text ([String][]) and bytes (files, network payloads, APIs). Choose an encoding explicitly when reading or writing non-UTF-8 data, or when auto-detection is unreliable. Encode/decode blocks support formats such as Base64, URL, Hex, and HTML — see [Encoding][Working with Text - Encoding] and the [Encoding][Encoding data type] data type.

For .NET background, see [Introduction to character encoding in .NET][].

## Immutability of strings

[String][] values are **immutable**: after a string is created, its character sequence cannot change. Methods that appear to modify text (`Replace`, `Substring`, `ToUpper`, concatenation, and so on) return a **new** string; the original remains unchanged.

Implications for flows:

* Assigning the result of a text operation to a variable replaces the reference; it does not edit the previous string in place.
* Sharing the same string value across variables is safe from unexpected in-place edits.
* Building large results from many small edits allocates many intermediate strings; prefer fewer concatenations or formatting when performance matters.

See [Immutability of strings (C#)][] and [Strings (C# programming guide)][].

## Literal, verbatim, and interpolated strings

In the [Expression Editor][], create text with:

| Form | Example | Notes |
| --- | --- | --- |
| Regular (quoted) literal | `"Line1\nLine2"` | Escape sequences are processed |
| [Verbatim][] literal | `@"C:\Temp\file.txt"` | Backslashes are literal; useful for paths and regex |
| [Interpolated][MS Interpolation] string | `$"Hello {($)Name}"` | Embeds expressions; see [Interpolated Strings][] |
| Interpolated verbatim | `$@"C:\Data\{($)File}"` | Combines `$` and `@` (either order) |

In the [Literal Editor][], surrounding quotes are not required for [String][] properties; quotes you type become part of the value. See [Create a String][] and [String literals][].

### Escape sequences

In regular string literals, `\` starts an escape sequence (for example `\n` newline, `\t` tab, `\\` backslash, `\"` quote, `\uXXXX` Unicode). Verbatim literals do not process these escapes (except doubled quotes for an embedded `"`). Full tables and warnings are in [String escape sequences][].

## Substrings and indexing

Strings use **zero-based** indexes. Common operations:

| Need | Expression examples | Blocks |
| --- | --- | --- |
| Character at index | `"Cortex"[0]` → `'C'` | — |
| Find position | `"Cortex".IndexOf("tex")` | [Get Index of Text][] |
| Slice by range | `Substring`, ranges/indexes where supported | [Get Text Between Indexes][], [Get Text at Beginning][], [Get Text at End][] |
| Length | `"Cortex".Length` → `6` | Related Get Length blocks under [Text][Text Blocks] |

For ranges and index syntax in modern C#, see [Indices and ranges][]. For broader string APIs, see [Basic string operations][].

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

* [Empty Text and Whitespace][] — `null`, empty, and whitespace
* [Equality][] — [StringComparison][] and comparison types
* [Casing][] — case conversion and culture
* [Formatting][] — composite text formatting
* [Encoding][Working with Text - Encoding] — text and byte encodings
* [Regex Syntax][] — regular expression language
* [Pattern Matching Syntax][] — `*` / `?` patterns
* [Converting Objects To Text][] — objects to string representations
* [Converting Numbers and Text][] — parse and format numbers
* [Number Formatting][] — numeric format providers and templates
* [Date and Time Formatting][] — date/time format patterns
* [Culture][] — invariant, current, and specific cultures
* [Interpolated Strings][] — embedding values in expressions

### Related Data Types

* [String][]
* [Char][]
* [SearchOptions][]
* [StringComparison][]
* [StringComparer][]
* [Encoding][Encoding data type]
* [CultureInfo][]
* [IFormatProvider][]
* [TextToFind][]

### Related Blocks

* [Contains All Text][] / [Contains Any Text][]
* [Find Text][] / [Find All Text][]
* [Get Index of Text][]
* [Get Text Between Indexes][] / [Get Text at Beginning][] / [Get Text at End][]
* [Add Text at Beginning][]
* [Join Text][]
* [Split Text][]
* [Format Text With Value][] / [Format Text With Values][]
* [Convert Object To Text][]
* [Encode Text][] / [Decode Text][]
* [Convert to Upper Case][] / [Convert to Lower Case][]

### External Documentation

* [Strings (C# programming guide)][]
* [Immutability of strings (C#)][]
* [String escape sequences][]
* [String literals][]
* [Basic string operations][]
* [Best practices for comparing strings in .NET][]
* [Introduction to character encoding in .NET][]
* [Parsing numeric strings in .NET][]
* [System.String][]
* [System.Char][]
* [StringComparison][MS StringComparison]

[Immutability of strings]: {{< ref "#immutability-of-strings" >}}
[Literal, verbatim, and interpolated strings]: {{< ref "#literal-verbatim-and-interpolated-strings" >}}

[Empty Text and Whitespace]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.EmptyTextAndWhitespace.MainDoc" >}}
[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[Ordinal]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.Ordinal" >}}
[Ordinal Ignore Case]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.OrdinalIgnoreCase" >}}
[Invariant Culture comparison]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.InvariantCulture" >}}
[Invariant Culture Ignore Case]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.InvariantCultureIgnoreCase" >}}
[Current Culture comparison]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.CurrentCulture" >}}
[Current Culture Ignore Case]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.CurrentCultureIgnoreCase" >}}
[Casing]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Casing.MainDoc" >}}
[Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Formatting.MainDoc" >}}
[Working with Text - Encoding]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Encoding.MainDoc" >}}
[Regex Syntax]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.RegexSyntax.MainDoc" >}}
[Pattern Matching Syntax]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.PatternMatchingSyntax.MainDoc" >}}
[Converting Objects To Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.ConvertingObjectsToText.MainDoc" >}}
[Converting Numbers and Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Numbers.ConvertingNumbersAndText.MainDoc" >}}
[What is a Number?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Numbers.WhatIsANumber.MainDoc" >}}
[Number Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Numbers.NumberFormatting.MainDoc" >}}
[Date and Time Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.MainDoc" >}}
[Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.MainDoc" >}}
[Invariant Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[Specific Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.SpecificCultures.MainDoc" >}}
[Null and Nullable Types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.NullAndNullableTypes.MainDoc" >}}
[reference types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.ReferenceTypes" >}}
[value types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.ValueTypes" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[block property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Interpolated Strings]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.InterpolatedStrings" >}}
[Literal Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Create a String]: {{< url path="Cortex.Reference.DataTypes.Text.String.CreateNew" >}}
[Char]: {{< url path="Cortex.Reference.DataTypes.Text.Char.MainDoc" >}}
[SearchOptions]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.MainDoc" >}}
[LiteralText]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.LiteralText" >}}
[SearchOptions Regex]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.Regex" >}}
[PatternMatching]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.PatternMatching" >}}
[StringComparison]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}
[StringComparer]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparer.MainDoc" >}}
[Encoding data type]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.MainDoc" >}}
[CultureInfo]: {{< url path="Cortex.Reference.DataTypes.Text.CultureInfo.MainDoc" >}}
[IFormatProvider]: {{< url path="Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}
[TextToFind]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFind.MainDoc" >}}

[Text Blocks]: {{< url path="Cortex.Reference.Blocks.Text.MainDoc" >}}
[Contains All Text]: {{< url path="Cortex.Reference.Blocks.Text.ContainsText.ContainsAllText.MainDoc" >}}
[Contains Any Text]: {{< url path="Cortex.Reference.Blocks.Text.ContainsText.ContainsAnyText.MainDoc" >}}
[Find Text]: {{< url path="Cortex.Reference.Blocks.Text.FindText.FindText.MainDoc" >}}
[Find All Text]: {{< url path="Cortex.Reference.Blocks.Text.FindText.FindAllText.MainDoc" >}}
[Get Index of Text]: {{< url path="Cortex.Reference.Blocks.Text.GetIndex.GetIndexOfText.MainDoc" >}}
[Get Text Between Indexes]: {{< url path="Cortex.Reference.Blocks.Text.GetText.GetTextBetweenIndexes.MainDoc" >}}
[Get Text at Beginning]: {{< url path="Cortex.Reference.Blocks.Text.GetText.GetTextAtBeginning.MainDoc" >}}
[Get Text at End]: {{< url path="Cortex.Reference.Blocks.Text.GetText.GetTextAtEnd.MainDoc" >}}
[Add Text at Beginning]: {{< url path="Cortex.Reference.Blocks.Text.AddText.AddTextAtBeginning.MainDoc" >}}
[Join Text]: {{< url path="Cortex.Reference.Blocks.Text.JoinText.JoinText.MainDoc" >}}
[Split Text]: {{< url path="Cortex.Reference.Blocks.Text.SplitText.SplitText.MainDoc" >}}
[Format Text With Value]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValue.MainDoc" >}}
[Format Text With Values]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Encode Text]: {{< url path="Cortex.Reference.Blocks.Text.EncodeText.EncodeText.MainDoc" >}}
[Decode Text]: {{< url path="Cortex.Reference.Blocks.Text.DecodeText.DecodeText.MainDoc" >}}
[Convert to Upper Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToUpperCase.MainDoc" >}}
[Convert to Lower Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToLowerCase.MainDoc" >}}

[Strings (C# programming guide)]: {{< url path="MSDocs.CSharp.Strings" >}}
[Immutability of strings (C#)]: {{< url path="MSDocs.CSharp.ImmutabilityOfStrings" >}}
[String escape sequences]: {{< url path="MSDocs.CSharp.EscapeSequences" >}}
[String literals]: {{< url path="MSDocs.CSharp.StringLiterals" >}}
[Verbatim]: {{< url path="MSDocs.CSharp.Verbatim" >}}
[MS Interpolation]: {{< url path="MSDocs.CSharp.Interpolation" >}}
[Indices and ranges]: {{< url path="MSDocs.CSharp.IndicesAndRanges" >}}
[Basic string operations]: {{< url path="MSDocs.DotNet.BaseTypes.BasicStringOperations" >}}
[Best practices for comparing strings in .NET]: {{< url path="MSDocs.DotNet.BaseTypes.BestPracticesStrings" >}}
[Introduction to character encoding in .NET]: {{< url path="MSDocs.DotNet.BaseTypes.CharacterEncodingIntroduction" >}}
[Parsing numeric strings in .NET]: {{< url path="MSDocs.DotNet.BaseTypes.ParsingNumeric" >}}
[String concatenation]: {{< url path="MSDocs.DotNet.Api.System.String.ConcatGuide" >}}
[System.String]: {{< url path="MSDocs.DotNet.Api.System.String.MainDoc" >}}
[System.Char]: {{< url path="MSDocs.DotNet.Api.System.Char.MainDoc" >}}
[MS StringComparison]: {{< url path="MSDocs.DotNet.Api.System.StringComparison" >}}
