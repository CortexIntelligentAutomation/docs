---
title: "Casing"
linkTitle: "Casing"
description: "How text casing works in CORTEX: common case styles, culture-aware conversion, best practices for comparison vs case change, and related blocks."
---

# {{% param title %}}

## Summary

**Casing** is how letter case is applied to text—for example converting a [String][] to upper case, lower case, or title case. In {{% ctx %}}, case conversion follows .NET rules and is controlled by a [CultureInfo][] value (the **Culture Info** property on casing blocks, or a culture argument in expressions).

Casing is **not** the same as comparing text. Do **not** call `ToLower` / `ToUpper` (or casing blocks) only to decide whether two strings match. Use an appropriate [StringComparison][] or ignore-case option instead—see [Equality][] and [Best practices for comparing strings in .NET][].

| Goal | Prefer |
| --- | --- |
| Change display or stored case (for example `"Hello"` → `"HELLO"`) | [Convert To Upper Case][] / [Convert To Lower Case][] (or related casing blocks), or `ToUpper` / `ToLower` with an explicit culture |
| Compare or search regardless of case | [StringComparison][] ignore-case values (for example `OrdinalIgnoreCase`) — see [Equality][] |
| Security-sensitive or culture-independent case change | [Invariant Culture][Invariant Culture concept] (`CultureInfo.InvariantCulture`) |
| User-facing casing for a known locale | [Current Culture][Current Culture concept] or a [Specific Culture][Specific Cultures concept] |

For culture types and when to use each, see [What is a Culture?][] and the sections under [Culture Info][] below.

## Common types of text casing

There are many styles of text casing. The table below lists styles commonly used in {{% ctx %}} flows and in programming identifiers:

| Name | Example | Notes |
| --- | --- | --- |
| lowercase | `"this is lowercase"` | All letters in all words are lower cased. |
| UPPERCASE | `"THIS IS UPPERCASE"` | All letters in all words are capitalized. |
| Title Case | `"This Is Title Case"` | First letter in each word is capitalized; other letters are lower cased. Words that are entirely upper cased (for example acronyms) remain upper cased. Spaces and punctuation are preserved. |
| camelCase | `"thisIsCamelCase"` | First letter of each word except the first is capitalized; other letters are lower cased; spaces and punctuation are removed. |
| PascalCase | `"ThisIsPascalCase"` | First letter of each word is capitalized; other letters are lower cased; spaces and punctuation are removed. |

{{% ctx %}} provides blocks for each of these styles under [Related Blocks][]. Title case follows .NET [TextInfo.ToTitleCase][] behaviour—see [Title case behaviour][].

## Changing case in flows

### Using blocks

Use the Convert To blocks when you need to transform text case in a flow:

| Block | Result style |
| --- | --- |
| [Convert To Lower Case][] | lowercase |
| [Convert To Upper Case][] | UPPERCASE |
| [Convert To Title Case][] | Title Case |
| [Convert To Camel Case][] | camelCase |
| [Convert To Pascal Case][] | PascalCase |

Each block accepts **Text** and an optional **Culture Info**. The default **Culture Info** is `CultureInfo.InvariantCulture`. If **Culture Info** is `null`, it is treated as invariant. See each block's remarks for null or empty **Text** behaviour.

### Using expressions

In the [Expression Editor][], change case with culture-aware overloads so the culture is explicit:

| Need | Example |
| --- | --- |
| Upper case (invariant) | `"Hello".ToUpper(CultureInfo.InvariantCulture)` |
| Lower case (current culture) | `"Hello".ToLower(CultureInfo.CurrentCulture)` |
| Upper case (specific culture) | `"indigo".ToUpper(new CultureInfo("tr-TR"))` |
| Title case | `CultureInfo.InvariantCulture.TextInfo.ToTitleCase("a tale of two cities")` |

Parameterless `ToUpper()` / `ToLower()` use [Current Culture][Current Culture concept] by default in .NET. Prefer overloads that take a [CultureInfo][] so results do not depend on an implicit server locale. See [Perform culture-insensitive case changes][] and [Changing case in .NET][].

Because [String][] values are immutable, every case conversion returns a **new** string; assign the result to a variable (blocks that take an InputOutput **Text** property do this for you). See [Immutability of strings][].

## Culture Info

**Culture Info** specifies the culture-specific casing rules used when changing case. It is represented by the [CultureInfo][] data type (`System.Globalization.CultureInfo`).

| Name | Typical value | Casing behaviour |
| --- | --- | --- |
| [Invariant Culture][] | `CultureInfo.InvariantCulture` | Culture-insensitive casing; same rules on every server |
| [Current Culture][] | `CultureInfo.CurrentCulture` | Culture-sensitive casing from the flow execution server's locale |
| [Specific Cultures][] | `new CultureInfo("en-GB")`, `new CultureInfo("tr-TR")`, … | Culture-sensitive casing for a named language–region |
| [Custom Cultures][] | `new CultureInfo("x-my-culture")` (after registration) | Culture-sensitive casing from a culture registered on Windows |

For more information about culture types, see [What is a Culture?][] and [CultureInfo][MS CultureInfo].

### Invariant Culture

For [Invariant Culture][Invariant Culture concept], casing rules are **not** tied to the server's regional settings. Results stay consistent across development, test, and production servers.

#### When to use

* Default for casing blocks when you do not set **Culture Info**
* Case changes used for internal keys, protocols, persistence, or **security decisions**
* Any flow that must not change behaviour when an administrator alters OS regional settings

#### When not to use

* User-facing text that must follow a particular locale's casing conventions—use [Current Culture][Current Culture concept] or a [Specific Culture][Specific Cultures concept] instead

Microsoft guidance: if a security decision depends on a string comparison or a case-change operation, use the invariant culture so behaviour is consistent regardless of system culture. Use invariant culture only where culture-independent results are required; otherwise results can be linguistically incorrect or culturally inappropriate for display. See [Invariant Culture][Invariant Culture concept] and [Performing culture-insensitive string operations][].

#### Example

With **Culture Info** set to `CultureInfo.InvariantCulture` (or left at the block default), [Convert To Upper Case][] converts `"The quick brown fox"` to `"THE QUICK BROWN FOX"`.

### Current Culture

For [Current Culture][Current Culture concept], casing rules are culture-sensitive and follow the operating system locale of the server that executes the flow (`CultureInfo.CurrentCulture`).

#### When to use

* Display casing should match the **server** locale, and that locale is known to match the audience
* You intentionally want “whatever this server is configured for”

#### When not to use

* Security checks, stored identifiers, or protocols—use [Invariant Culture][Invariant Culture concept] or ordinal comparison
* Output must be identical on every server—use invariant or an explicit [Specific Culture][Specific Cultures concept]
* Gateway users may have a different locale than the execution server

In a **cluster**, install the same OS culture and regional settings on every node that runs the flow (and keep servers time synchronised when dates and times are involved). See [Current Culture][Current Culture concept].

#### Example

If the server current culture is Turkish (`tr-TR`), upper-casing `"indigo"` with `CultureInfo.CurrentCulture` can produce `"İNDİGO"` (dotted capital *İ*), which differs from invariant or `en-US` results (`"INDIGO"`). Always set **Culture Info** explicitly when that difference matters.

### Specific Cultures

[Specific Cultures][Specific Cultures concept] each define their own casing rules for a language and region (for example `en-GB`, `en-US`, `tr-TR`). Create one with `new CultureInfo("tr-TR")` and pass it as **Culture Info**.

#### When to use

* Casing must follow a **known** locale regardless of server settings
* You need a culture with special case mappings (for example Turkish `i` / `ı`) for correct display or localised processing

#### When not to use

* Culture-independent storage or security—use [Invariant Culture][Invariant Culture concept]
* The culture might not be installed on every execution server (throws [CultureInfoNotFoundException][])

For predefined Windows culture names, see [Supported Culture Codes][] (the **Language tag** column is the string passed to `new CultureInfo(...)`). See [Specific Cultures][Specific Cultures concept].

#### Example (Turkish casing)

| Expression | Typical result |
| --- | --- |
| `"indigo".ToUpper(new CultureInfo("en-US"))` | `"INDIGO"` |
| `"indigo".ToUpper(new CultureInfo("tr-TR"))` | `"İNDİGO"` |

Turkish distinguishes dotted and dotless `I`; using the wrong culture for case change can break lookups that assumed English-style casing.

### Custom Cultures

[Custom Cultures][Custom Cultures concept] are cultures registered on Windows (via administrative tooling) beyond the built-in set. After registration they supply their own `TextInfo` casing rules, the same way as specific cultures.

#### When to use

* Your organisation registers a custom or replacement culture and casing must follow that definition on every execution server

#### When not to use

* A standard specific culture is enough
* The culture is not registered on all cluster nodes—`new CultureInfo("…")` throws [CultureInfoNotFoundException][]

Flows do not register custom cultures; administrators register them on each server. See [Custom Cultures][Custom Cultures concept].

## Remarks

### Comparing text versus changing case

Do **not** convert both sides of a comparison to lower or upper case to ignore case. That approach is culture-sensitive (unless you always use invariant culture), allocates extra strings, and is easy to get wrong across locales.

Instead:

* For equality or ordering of mixed-case text, use [StringComparison][] values such as `OrdinalIgnoreCase`, `InvariantCultureIgnoreCase`, or `CurrentCultureIgnoreCase`—see [Equality][] and [Compare strings of mixed case][]
* Use casing blocks or `ToUpper` / `ToLower` only when you need the **cased text** as output or stored data

### Immutable strings

Case conversion does not edit a [String][] in place. Methods and blocks produce a new string; the original value remains unchanged until you assign the result. See [Immutability of strings][].

### Title case behaviour

[Convert To Title Case][] and `TextInfo.ToTitleCase` capitalize the first letter of each word and lower-case the rest, while leaving words that are entirely upper case unchanged (treated as acronyms). The conversion is culture-sensitive but **does not** always produce linguistically perfect title casing for every language—for example English title case often leaves short words such as “of” lower case, which `ToTitleCase` does not. See [Changing case in .NET][] and [TextInfo.ToTitleCase][].

### Defaults in casing blocks

| Situation | Behaviour |
| --- | --- |
| **Culture Info** omitted or default | `CultureInfo.InvariantCulture` |
| **Culture Info** is `null` | Treated as `CultureInfo.InvariantCulture` |
| **Text** is `null` or `""` | No conversion; see each block's remarks |

### Known Limitations

* Culture-sensitive casing ([Current Culture][Current Culture concept], [Specific Cultures][Specific Cultures concept], [Custom Cultures][Custom Cultures concept]) can differ between servers when OS culture, installed cultures, or registered custom cultures differ.
* [Current Culture][Current Culture concept] reflects the **execution server**, not the Gateway user's browser locale.
* A culture name that works on one machine may throw [CultureInfoNotFoundException][] on another if that culture is not installed or registered. Convert To casing blocks surface an invalid **Culture Info** as [InvalidPropertyValueException][] instead.

## See Also

### Related Concepts

* [What is Text?][] — strings, immutability, and overview of text concepts
* [Equality][] — [StringComparison][] and comparing text without changing case
* [Formatting][] — composite formatting and format providers
* [What is a Culture?][] — culture types overview
* [Invariant Culture][Invariant Culture concept]
* [Current Culture][Current Culture concept]
* [Specific Cultures][Specific Cultures concept]
* [Custom Cultures][Custom Cultures concept]

### Related Data Types

* [String][]
* [Char][]
* [CultureInfo][]
* [StringComparison][]
* [StringComparer][]

### Related Blocks

* [Convert To Lower Case][]
* [Convert To Upper Case][]
* [Convert To Title Case][]
* [Convert To Camel Case][]
* [Convert To Pascal Case][]

### External Documentation

* [Changing case in .NET][]
* [Compare strings of mixed case][]
* [Perform culture-insensitive case changes][]
* [Performing culture-insensitive string operations][]
* [Best practices for comparing strings in .NET][]
* [TextInfo.ToUpper][]
* [TextInfo.ToTitleCase][]
* [Supported Culture Codes][]
* [System.Globalization.CultureInfo][MS CultureInfo]
* [StringComparison][MS StringComparison]

[Culture Info]: {{< ref "#culture-info" >}}
[Invariant Culture]: {{< ref "#invariant-culture" >}}
[Current Culture]: {{< ref "#current-culture" >}}
[Specific Cultures]: {{< ref "#specific-cultures" >}}
[Custom Cultures]: {{< ref "#custom-cultures" >}}
[Related Blocks]: {{< ref "#related-blocks" >}}
[Title case behaviour]: {{< ref "#title-case-behaviour" >}}
[Immutability of strings]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.WhatIsText.ImmutabilityOfStrings" >}}

[What is Text?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.WhatIsText.MainDoc" >}}
[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Formatting.MainDoc" >}}
[What is a Culture?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.WhatIsACulture.MainDoc" >}}
[Invariant Culture concept]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[Current Culture concept]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.CurrentCulture.MainDoc" >}}
[Specific Cultures concept]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.SpecificCultures.MainDoc" >}}
[Custom Cultures concept]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.CustomCultures.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Char]: {{< url path="Cortex.Reference.DataTypes.Text.Char.MainDoc" >}}
[CultureInfo]: {{< url path="Cortex.Reference.DataTypes.Text.CultureInfo.MainDoc" >}}
[StringComparison]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}
[StringComparer]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparer.MainDoc" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Convert To Lower Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToLowerCase.MainDoc" >}}
[Convert To Upper Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToUpperCase.MainDoc" >}}
[Convert To Title Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToTitleCase.MainDoc" >}}
[Convert To Camel Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToCamelCase.MainDoc" >}}
[Convert To Pascal Case]: {{< url path="Cortex.Reference.Blocks.Text.ConvertTo.ConvertToPascalCase.MainDoc" >}}

[Changing case in .NET]: {{< url path="MSDocs.DotNet.BaseTypes.ChangingCase.MainDoc" >}}
[Compare strings of mixed case]: {{< url path="MSDocs.DotNet.BaseTypes.ChangingCase.CompareStringsOfMixedCase" >}}
[Perform culture-insensitive case changes]: {{< url path="MSDocs.DotNet.Core.Extensions.CultureInsensitiveCaseChanges" >}}
[Performing culture-insensitive string operations]: {{< url path="MSDocs.DotNet.Core.Extensions.CultureInsensitiveStringOperations" >}}
[Best practices for comparing strings in .NET]: {{< url path="MSDocs.DotNet.BaseTypes.BestPracticesStrings" >}}
[TextInfo.ToUpper]: {{< url path="MSDocs.DotNet.Api.System.Globalization.TextInfo.ToUpper" >}}
[TextInfo.ToTitleCase]: {{< url path="MSDocs.DotNet.Api.System.Globalization.TextInfo.ToTitleCase" >}}
[Supported Culture Codes]: {{< url path="MSDocs.CSharp.SupportedCultureCodes" >}}
[MS CultureInfo]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfo" >}}
[MS StringComparison]: {{< url path="MSDocs.DotNet.Api.System.StringComparison" >}}
[CultureInfoNotFoundException]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfoNotFoundException" >}}
[InvalidPropertyValueException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
