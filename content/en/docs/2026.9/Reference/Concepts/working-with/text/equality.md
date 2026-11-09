---
title: "Equality"
linkTitle: "Equality"
description: "How text equality works in CORTEX: StringComparison rules, when to use ordinal vs culture-sensitive comparison, best practices, and worked examples."
---

# {{% param title %}}

## Summary

**Text equality** is the rule used to decide whether two pieces of text match. In {{% ctx %}}, that rule is controlled by a [StringComparison][] value (the **Comparison Type** property on text blocks, or a `StringComparison` argument in expressions). The same two strings can match or not match depending on whether comparison is ordinal or culture-sensitive, and whether case is considered.

This is separate from [object equality][Object Equality], which covers value vs reference equality for objects in general. [String][] values can still use `==` / `Equals` in the [Expression Editor][]; when you need culture or case rules made explicit—especially in text blocks—use [StringComparison][] as described on this page.

### Best practices

| Goal | Prefer |
| --- | --- |
| Exact, culture-independent matching (identifiers, protocols, security checks, most internal text) | [Ordinal][] or [Ordinal Ignore Case][] |
| Case-insensitive matching without culture rules | [Ordinal Ignore Case][] |
| Linguistic matching that must stay the same on every server | [Invariant Culture][] or [Invariant Culture Ignore Case][] |
| Linguistic matching that follows the execution server's locale | [Current Culture][] or [Current Culture Ignore Case][] |

Follow these practices when comparing text in flows:

* Prefer [Ordinal][] or [Ordinal Ignore Case][] as the safe default unless you need culture-specific linguistic rules. Ordinal comparison removes ambiguity and is typically faster.
* Do **not** call `ToLower` / `ToUpper` (or casing blocks) only to decide whether two strings match. Use an ignore-case [StringComparison][] value instead—see [Casing][] and [Compare strings of mixed case][].
* Specify the comparison type explicitly on blocks and in expressions so intent is clear and behaviour does not depend on implicit defaults.

Most text blocks that search or match text (for example [Contains Text][]) default **Comparison Type** to `Ordinal`. See [Best practices for comparing strings in .NET][].

## Comparison Types

Comparison types specify the rules used to determine whether two pieces of text match. They correspond to the [StringComparison][] enumeration values.

The table below lists the supported comparison types:

| Name | Text&nbsp;Value | Numeric&nbsp;Value | Description |
|----------|------------|---------------|-------------|
| [Ordinal][] | `StringComparison.Ordinal` | 4 | Compares text using ordinal (binary) sort rules. Case is considered. |
| [Ordinal Ignore Case][] | `StringComparison.OrdinalIgnoreCase` | 5 | Compares text using ordinal (binary) sort rules. Case is ignored. |
| [Invariant Culture][] | `StringComparison.InvariantCulture` | 2 | Compares text using culture-sensitive sort rules and the [invariant culture][Invariant Culture concept]. Case is considered. |
| [Invariant Culture Ignore Case][] | `StringComparison.InvariantCultureIgnoreCase` | 3 | Compares text using culture-sensitive sort rules and the [invariant culture][Invariant Culture concept]. Case is ignored. |
| [Current Culture][] | `StringComparison.CurrentCulture` | 0 | Compares text using culture-sensitive sort rules and the [current culture][Current Culture concept]. Case is considered. |
| [Current Culture Ignore Case][] | `StringComparison.CurrentCultureIgnoreCase` | 1 | Compares text using culture-sensitive sort rules and the [current culture][Current Culture concept]. Case is ignored. |

For the data type itself (enum values, casting, property editors), see [StringComparison][]. For how each rule behaves when matching text, see the sections below.

### Ordinal

[Ordinal][] comparison (`StringComparison.Ordinal`) compares text by Unicode code point (binary) values. It does **not** apply linguistic or culture-specific equivalence rules. Case is considered: `"windows"` does not match `"Windows"`.

#### When to use

* Default choice when you are unsure which comparison type to pick
* Identifiers, keys, protocols, file paths, XML/HTML tags, security checks, and other culture-independent text
* Exact matching where linguistically equivalent characters (for example `æ` and `ae`) must **not** be treated as equal
* Performance-sensitive matching

#### When not to use

* User-facing linguistic equality where culture rules should treat related characters as equivalent—use [Invariant Culture][] or [Current Culture][] instead
* Case-insensitive matching—use [Ordinal Ignore Case][] instead

#### Example

| Text 1 | Text 2 | Match? | Notes |
| --- | --- | --- | --- |
| `"dog"` | `"dog"` | Yes | Identical code points |
| `"dog"` | `"Dog"` | No | Case differs |
| `"resume"` | `"résumé"` | No | Accented characters differ |
| `"encyclopædia"` | `"encyclopaedia"` | No | No expansion of `æ` to `ae` |
| `"é"` (U+00E9) | `"e\u0301"` (`e` + combining acute) | No | Different code-point sequences; see [Unicode representations][] |

Ordinal comparison is never affected by the server's [current culture][Current Culture concept].

### Ordinal Ignore Case

[Ordinal Ignore Case][] (`StringComparison.OrdinalIgnoreCase`) uses the same ordinal (binary) rules as [Ordinal][], except that case differences are ignored. Under this comparison, `'d'` matches `'D'` and `'á'` matches `'Á'`, but unaccented `'a'` still does not match accented `'á'`.

#### When to use

* Case-insensitive matching for identifiers, protocols, or other culture-independent text
* Safe default when case must not matter and linguistic culture rules are not required

#### When not to use

* Case-sensitive exact matching—use [Ordinal][]
* Linguistic case folding that follows a locale (for example Turkish `i` / `İ`)—use [Current Culture Ignore Case][] or [Invariant Culture Ignore Case][] as appropriate

#### Example

| Text 1 | Text 2 | Match? | Notes |
| --- | --- | --- | --- |
| `"dog"` | `"dog"` | Yes | Identical |
| `"dog"` | `"Dog"` | Yes | Case ignored |
| `"FILE:"` | `"file:"` | Yes | Typical protocol / URI prefix check |
| `"resume"` | `"résumé"` | No | Accents still differ |

For mixed-case equality without changing case first, prefer this value (or another ignore-case comparison type) over `ToLower` / `ToUpper`. See [Compare strings of mixed case][].

### Invariant Culture

[Invariant Culture][] comparison (`StringComparison.InvariantCulture`) uses culture-sensitive (linguistic) sort and equivalence rules from the [invariant culture][Invariant Culture concept]. Case is considered. Results are consistent across servers and do not follow the OS regional settings of the execution server.

Ordinal is still preferred when the comparison is **not** linguistically meaningful (symbolic identifiers, protocols, and most internal keys). Use invariant culture when you need linguistic rules without tying behaviour to [Current Culture][Current Culture concept].

#### When to use

* Linguistically meaningful text that must compare the same on every server
* Culture-independent persistence or exchange where character equivalences matter but server locale must not

#### When not to use

* Symbolic or non-linguistic matching—prefer [Ordinal][]
* User-facing comparisons that should follow the server or a specific locale—use [Current Culture][] or a known specific culture's rules via current-culture settings on the server

#### Example

| Text 1 | Text 2 | Match? | Notes |
| --- | --- | --- | --- |
| `"case"` | `"Case"` | No | Case differs |
| `"é"` (U+00E9) | `"e\u0301"` (`e` + combining acute) | Yes | Linguistic / normalization-aware equivalence under invariant culture |
| `"encyclopædia"` | `"encyclopaedia"` | No | Under modern .NET (ICU), `æ` is **not** expanded to `ae` |
| `"Å"` (U+00C5) | `"A\u030A"` (`A` + combining ring) | Yes | Precomposed versus combining form |

For more on the invariant culture, see [Invariant Culture][Invariant Culture concept]. Ordinal comparison treats the precomposed and combining forms above as **different**—see [Ordinal][].

### Invariant Culture Ignore Case

[Invariant Culture Ignore Case][] (`StringComparison.InvariantCultureIgnoreCase`) uses the same invariant linguistic rules as [Invariant Culture][], except that case is ignored.

#### When to use

* Case-insensitive linguistic matching that must be identical on every server
* Persisted or internal text where culture-sensitive equivalence matters but locale must not

#### When not to use

* Case-insensitive symbolic matching—prefer [Ordinal Ignore Case][]
* Case-insensitive matching that should follow the server locale—use [Current Culture Ignore Case][]

#### Example

| Text 1 | Text 2 | Match? | Notes |
| --- | --- | --- | --- |
| `"case"` | `"Case"` | Yes | Case ignored |
| `"Archæology"` | `"ARCHÆOLOGY"` | Yes | Case ignored; same `æ` character in both |
| `"encyclopædia"` | `"encyclopaedia"` | No | Under modern .NET (ICU), `æ` is **not** expanded to `ae` |
| `"é"` (U+00E9) | `"E\u0301"` | Yes | Case ignored; precomposed versus combining form |

### Current Culture

[Current Culture][] comparison (`StringComparison.CurrentCulture`) uses culture-sensitive sort and equivalence rules from the [current culture][Current Culture concept] of the execution server (`CultureInfo.CurrentCulture`). Case is considered.

#### When to use

* User-facing or locale-aware matching that should follow the **server** regional settings
* Linguistic equivalences defined by that locale (which can differ between cultures)

#### When not to use

* Security checks, stored identifiers, or protocols—use [Ordinal][] or [Invariant Culture][]
* Behaviour that must be identical on every server—use [Ordinal][] or [Invariant Culture][]
* Gateway users may use a different locale than the execution server

In a **cluster**, keep operating system culture and regional settings aligned on every node that runs the flow. See [Current Culture][Current Culture concept].

#### Example

Results depend on the server's current culture. Illustrative cases under modern .NET (ICU):

| Current culture | Text 1 | Text 2 | Match? | Notes |
| --- | --- | --- | --- | --- |
| `th-TH` | `"a"` | `"a-"` | Yes | Thai rules treat some punctuation as ignorable |
| `en-US` | `"a"` | `"a-"` | No | Hyphen is significant under en-US rules |
| Any | `"é"` (U+00E9) | `"e\u0301"` | Yes | Precomposed versus combining acute |
| Any | `"case"` | `"Case"` | No | Case is considered |
| Any | `"encyclopædia"` | `"encyclopaedia"` | No | Under ICU, `æ` is not expanded to `ae` |

### Current Culture Ignore Case

[Current Culture Ignore Case][] (`StringComparison.CurrentCultureIgnoreCase`) uses the same current-culture linguistic rules as [Current Culture][], except that case is ignored according to that culture's casing conventions.

#### When to use

* Case-insensitive, locale-aware matching for user-facing text on a server whose culture matches the audience

#### When not to use

* Security-sensitive or culture-independent matching—use [Ordinal Ignore Case][] (or [Invariant Culture Ignore Case][] when linguistic rules are required without locale dependence)
* Case folding that must not change when regional settings change

#### Example

| Current culture | Text 1 | Text 2 | Match? | Notes |
| --- | --- | --- | --- | --- |
| `en-US` | `"case"` | `"Case"` | Yes | Case ignored |
| `tr-TR` | `"i"` | `"İ"` | Yes | Turkish dotted/dotless *I* rules |
| `en-US` | `"i"` | `"İ"` | No | English case folding does not equate these |
| `en-US` | `"Archæology"` | `"ARCHÆOLOGY"` | Yes | Case ignored under current culture |

Turkish casing is a common source of bugs when culture-sensitive ignore-case comparison is used for protocols or identifiers. Prefer [Ordinal Ignore Case][] for those scenarios. See [Casing][] and [Current Culture][Current Culture concept].

## Remarks

### Comparing text versus changing case

Do **not** convert both sides of a comparison to lower or upper case to ignore case. That approach is culture-sensitive unless you always use a fixed culture, allocates extra strings, and is easy to get wrong across locales (for example Turkish `i` / `İ`).

Instead:

* For equality or search of mixed-case text, use a [StringComparison][] ignore-case value such as `OrdinalIgnoreCase`, `InvariantCultureIgnoreCase`, or `CurrentCultureIgnoreCase`
* Use casing blocks or `ToUpper` / `ToLower` only when you need the **cased text** as output or stored data

See [Casing][] and [Compare strings of mixed case][].

### Ordinal versus linguistic matching

[Ordinal][] and [Ordinal Ignore Case][] compare code points. Culture-sensitive types ([Invariant Culture][], [Current Culture][], and their ignore-case variants) can treat some character sequences as equivalent even when the code points differ—for example precomposed `é` (U+00E9) versus `e` plus a combining acute, or (under Thai) `"a"` versus `"a-"`.

Choose ordinal rules when characters must match exactly; choose linguistic rules when natural-language equivalence is required. Microsoft recommends ordinal comparison when the comparison is linguistically irrelevant. See [Best practices for comparing strings in .NET][].

On modern .NET runtimes that use ICU globalization, some older NLS expansions (for example treating `æ` as equal to `ae`) no longer apply. Prefer examples and tests against the runtime your {{% ctx %}} environment uses.

### Unicode representations

The same visible character can be stored as different Unicode sequences (for example precomposed `é` versus `e` plus a combining accent). Under ordinal comparison those sequences are **not** equal. Under [Invariant Culture][] / [Current Culture][] they often **are** equal. If matching must be reliable across differently encoded inputs, normalize text before comparing, or use a comparison policy that matches your data's encoding conventions.

### Expressions versus text blocks

In the [Expression Editor][], `"hello" == "hello"` uses [String][] value equality and does not expose a [StringComparison][] argument. Overloads such as `string.Equals(a, b, StringComparison.OrdinalIgnoreCase)` (and text-block **Comparison Type** properties) make the rules explicit—prefer those when case or culture matters.

Object identity and collection-block matching for non-string types are covered under [object equality][Object Equality].

### Defaults in text blocks

Many text blocks that accept **Comparison Type** default to `Ordinal`. Always check the block's property remarks when behaviour must differ. An invalid [StringComparison][] value (for example `(StringComparison)10`) typically causes [ArgumentException][].

### Known Limitations

* [Current Culture][] and [Current Culture Ignore Case][] results can differ between servers when operating system culture or regional settings differ, and between nodes in a cluster if those settings are not aligned.
* [Current Culture][] reflects the **execution server**, not the Gateway user's browser locale.
* With **Search Options** set to Regex or Pattern Matching and **Comparison Type** set to `CurrentCulture`, some character equivalences (for example `æ` and `ae`) may not evaluate as equal—see each text block's remarks (for example [Contains Text][]).

## See Also

### Related Concepts

* [What is Text?][] — strings, immutability, and overview of text concepts
* [Casing][] — changing case versus comparing text
* [Object Equality][] — value vs reference equality for objects
* [What is a Culture?][] — culture types overview
* [Invariant Culture][Invariant Culture concept]
* [Current Culture][Current Culture concept]

### Related Data Types

* [String][]
* [StringComparison][]
* [StringComparer][]
* [CultureInfo][]

### Related Blocks

* [Contains Text][]
* [Contains Any Text][]
* [Contains All Text][]
* [Find Text][]
* [Find All Text][]
* [Find And Replace Text][]
* [Find And Remove Text][]
* [Get Index Of Text][]
* [Handle Block Exception Matching Message][]
* [Handle Block Exception Matching Messages][]
* [Handle Block Exception Matching Type Name][]
* [Handle Block Exception Matching Type Names][]

### External Documentation

* [Best practices for comparing strings in .NET][]
* [Compare strings of mixed case][]
* [Performing culture-insensitive string operations][]
* [System.StringComparison][MS StringComparison]
* [System.Globalization.CultureInfo][MS CultureInfo]

[Ordinal]: {{< ref "#ordinal" >}}
[Ordinal Ignore Case]: {{< ref "#ordinal-ignore-case" >}}
[Invariant Culture]: {{< ref "#invariant-culture" >}}
[Invariant Culture Ignore Case]: {{< ref "#invariant-culture-ignore-case" >}}
[Current Culture]: {{< ref "#current-culture" >}}
[Current Culture Ignore Case]: {{< ref "#current-culture-ignore-case" >}}
[Unicode representations]: {{< ref "#unicode-representations" >}}

[What is Text?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.WhatIsText.MainDoc" >}}
[Casing]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Casing.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[What is a Culture?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.WhatIsACulture.MainDoc" >}}
[Invariant Culture concept]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[Current Culture concept]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.CurrentCulture.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[StringComparison]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}
[StringComparer]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparer.MainDoc" >}}
[CultureInfo]: {{< url path="Cortex.Reference.DataTypes.Text.CultureInfo.MainDoc" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Contains Text]: {{< url path="Cortex.Reference.Blocks.Text.ContainsText.ContainsText.MainDoc" >}}
[Contains Any Text]: {{< url path="Cortex.Reference.Blocks.Text.ContainsText.ContainsAnyText.MainDoc" >}}
[Contains All Text]: {{< url path="Cortex.Reference.Blocks.Text.ContainsText.ContainsAllText.MainDoc" >}}
[Find Text]: {{< url path="Cortex.Reference.Blocks.Text.FindText.FindText.MainDoc" >}}
[Find All Text]: {{< url path="Cortex.Reference.Blocks.Text.FindText.FindAllText.MainDoc" >}}
[Find And Replace Text]: {{< url path="Cortex.Reference.Blocks.Text.FindAndReplaceText.FindAndReplaceText.MainDoc" >}}
[Find And Remove Text]: {{< url path="Cortex.Reference.Blocks.Text.FindAndRemoveText.FindAndRemoveText.MainDoc" >}}
[Get Index Of Text]: {{< url path="Cortex.Reference.Blocks.Text.GetIndex.GetIndexOfText.MainDoc" >}}
[Handle Block Exception Matching Message]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingMessage.MainDoc" >}}
[Handle Block Exception Matching Messages]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingMessages.MainDoc" >}}
[Handle Block Exception Matching Type Name]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingTypeName.MainDoc" >}}
[Handle Block Exception Matching Type Names]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingTypeNames.MainDoc" >}}

[Best practices for comparing strings in .NET]: {{< url path="MSDocs.DotNet.BaseTypes.BestPracticesStrings" >}}
[Compare strings of mixed case]: {{< url path="MSDocs.DotNet.BaseTypes.ChangingCase.CompareStringsOfMixedCase" >}}
[Performing culture-insensitive string operations]: {{< url path="MSDocs.DotNet.Core.Extensions.CultureInsensitiveStringOperations" >}}
[MS StringComparison]: {{< url path="MSDocs.DotNet.Api.System.StringComparison" >}}
[MS CultureInfo]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfo" >}}
[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
