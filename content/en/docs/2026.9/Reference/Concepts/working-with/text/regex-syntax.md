---
title: "Regex Syntax"
linkTitle: "Regex Syntax"
description: "How .NET regular expression syntax works in CORTEX: character classes, quantifiers, groups, options, timeouts, and how Regex differs from LiteralText and PatternMatching."
---

# {{% param title %}}

## Summary

In {{% ctx %}}, **regular expressions (regex)** are patterns used to match, find, or replace text. You enable them by setting [Search Options][SearchOptions] to [Regex][SearchOptions Regex] on blocks that support search. The language is [.NET regular expressions][NET Regular Expressions] (`System.Text.RegularExpressions`).

| Approach | When to use | Wildcards / pattern language |
| --- | --- | --- |
| [LiteralText][] | Exact character match of the search text (substring "contains" behaviour on many blocks) | None — every character is literal |
| [PatternMatching][] | Simple wildcards for text or file/folder **names** (for example `*.txt`) | `*` and `?` only — see [Pattern Matching Syntax][] |
| [Regex][SearchOptions Regex] | Complex structure, groups, character classes, alternation, replacements | Full [.NET regex language][NET Regex Quick Reference] (this page) |

"Contains" is a **block operation** (does this text contain a match?). [LiteralText][], [PatternMatching][], and [Regex][SearchOptions Regex] are **how** the search text is interpreted via [SearchOptions][]. For an overview of the three modes, see [What is Text?][].

Regex is available through block [Search Options][SearchOptions] and through regex properties such as the SSH [TerminalPrompt][SSH TerminalPrompt] and Telnet [TerminalPrompt][Telnet TerminalPrompt] — it is not a separate expression language. Pair it with a [Comparison Type][Equality] when the block exposes one. Prefer a [verbatim string][Verbatim] (`@"…"`) in the [Expression Editor][] when a pattern contains many backslashes.

Invalid patterns throw [RegexParsingFailedException][]. On supporting blocks, searches that run too long throw [RegexMatchTimeoutException][] — timeouts limit unbounded matching that can be used as a denial-of-service vector. See [Search timeout][].

The tables below summarise the main .NET constructs. For the full language reference, options, and best practices, see [External Documentation][].

## Common patterns

These patterns are **illustrative** starting points. Production validation (especially for email addresses and URLs) is more complex than a short expression can cover; prefer well-reviewed patterns and tests for your data.

| Goal | Example pattern | Notes |
| --- | --- | --- |
| One or more digits | `\d+` | Matches `"7"` in `"Cortex 7"` |
| Word characters | `\w+` | Letters, digits, and connectors such as underscore |
| Simple email-shaped text | `[\w.-]+@[\w.-]+\.\w+` | Not a full RFC validator; enough for many coarse filters |
| `http` / `https` URL-shaped text | `https?://[^\s]+` | Stops at whitespace; does not validate hosts or schemes fully |
| Quoted `href` value | `href\s*=\s*(?:["'](?<url>[^"']*)["']\|(?<url>\S+))` | See the .NET [scanning for HREFs][Scanning for HREFs] example for a worked walk-through |

## Character Classes

A character class matches any one character from a set. Character classes include the language elements listed in the following table. For Unicode categories and named blocks used with `\p{…}` / `\P{…}`, see [Supported Unicode general categories][] and [Supported named blocks][].

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `[characters]` | Matches any character found in *characters*. | `[oz]` | `o` in `Cortex` |
| `[^characters]` | Matches any character not found in *characters*. | `[^oz]` | `C`, `r`, `t`, `e`, `x` in `Cortex` |
| `[first-last]` | Matches any character in the range from *first* to *last*. | `[A-C]` | `C` in `Cortex` |
| `.` | Wildcard. Matches any character except `\n` (unless single-line mode is on). | `C.r` | `Cor` in `Cortex` |
| `\p{category}` | Matches any character in a Unicode general category or named block. | `\p{Lu}` | `C` in `Cortex` |
| `\P{category}` | Matches any character not in that category or named block. | `\P{Lu}` | `o`, `r`, `t`, `e`, `x` in `Cortex` |
| `\w` | Matches any word character. | `\w` | `C`, `o`, `r`, `t`, `e`, `x` in `Cortex !` |
| `\W` | Matches any non-word character. | `\W` | `!` in `Cortex !` |
| `\s` | Matches any white-space character. | `\w\s` | `x ` in `Cortex !` |
| `\S` | Matches any non-white-space character. | `\s\S` | ` !` in `Cortex !` |
| `\d` | Matches any decimal digit. | `\d` | `7` in `Cortex 7!` |
| `\D` | Matches any character except a decimal digit. | `\D` | `C`, `o`, `r`, `t`, `e`, `x`, ` `, `!` in `Cortex 7!` |

## Character Escapes

The following table lists common character escapes supported by regular expressions in .NET. A backslash that is not part of a defined escape matches the following character literally (for example `\*` matches `*`).

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `\r` | Matches a carriage return. | `\r\n(\w+)` | `\r\nCortex` in `\r\nCortex with\na new line` |
| `\n` | Matches a newline. | `\r\n(\w+)` | `\r\nCortex` in `\r\nCortex with\na new line` |
| `\t` | Matches a tab. | `(\w+)\t` | `Cortex1\t`, `Cortex2\t` in `Cortex1\tCortex2\t` |
| `[\b]` | Matches a backspace. Must be enclosed in brackets for this meaning (`\b` alone is a word boundary). | `[\b]{3,}` | `\b\b\b\b` in `\b\b\b\b` |
| `\f` | Matches a form feed. | `[\f]{2,}` | `\f\f\f` in `\f\f\f` |
| `\e` | Matches an escape. | `\e` | `\x001B` in `\x001B` |
| `\v` | Matches a vertical tab. | `[\v]{2,}` | `\v\v\v` in `\v\v\v` |
| `\a` | Matches the bell character. | `\a` | `\u0007` in `Cortex '\u0007'` |
| `\octal` | Matches a character given as an octal code. | `\w\040\w` | `x C` in `Cortex Cortex` |
| `\xhex` | Matches a character given as a two-digit hexadecimal code. | `\w\x20\w` | `x C` in `Cortex Cortex` |
| `\uunicode` | Matches a Unicode character given as a four-digit hexadecimal code. | `\w\u0020\w` | `x C` in `Cortex Cortex` |
| `\ccharacter` | Matches an ASCII control character specified by *character*. | `\cC` | `\x0003` in `\x0003` |

## Quantifiers

A quantifier specifies how many instances of the previous element (character, group, or character class) must be present for a match. Quantifiers ending in `?` are **lazy** (match as few times as possible); the others are **greedy**.

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `*` | Matches the previous element zero or more times. | `co*rtex` | `crtex`, `cortex`, `coortex`, `coooortex` in `crtex cortex coortex coooortex` |
| `+` | Matches the previous element one or more times. | `co+rtex` | `cortex`, `coortex`, `coooortex` in `crtex cortex coortex coooortex` |
| `?` | Matches the previous element zero or one time. | `co?rtex` | `crtex`, `cortex` in `crtex cortex coortex coooortex` |
| `{n}` | Matches the previous element exactly *n* times. | `co{2}rtex` | `coortex` in `crtex cortex coortex coooortex` |
| `{n,}` | Matches the previous element at least *n* times. | `co{2,}rtex` | `coortex`, `coooortex` in `crtex cortex coortex coooortex` |
| `{n,m}` | Matches the previous element at least *n* and at most *m* times. | `co{1,2}rtex` | `cortex`, `coortex` in `crtex cortex coortex coooortex` |
| `*?` | Lazy `*`. | `cort(ex)*?` | `cort` in `cortexexex` |
| `+?` | Lazy `+`. | `cort(ex)+?` | `cortex` in `cortexexex` |
| `??` | Lazy `?`. | `cort(ex)??` | `cort` in `cortexexex` |
| `{n,}?` | Lazy `{n,}`. | `cort(ex){2,}?` | `cortexex` in `cortexexex` |
| `{n,m}?` | Lazy `{n,m}`. | `cort(ex){1,3}?` | `cortex` in `cortexexex` |

## Anchors

Anchors cause a match to succeed or fail based on the current position in the string without consuming characters.

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `^` | Matches the beginning of the input (or of each line in multiline mode). | `^\w{3}` | `Cor` in `Cortex` |
| `$` | Matches the end of the input, or the point before a final `\n` (or end of each line in multiline mode). | `\w{3}$` | `tex` in `Cortex` |
| `\A` | Matches the beginning of the input. Unaffected by multiline mode. | `\A\w{3}` | `Cor` in `Cortex` |
| `\z` | Matches the end of the input only. | `\w{3}\z` | `tex` in `Cortex` |
| `\Z` | Matches the end of the input, or the point before a final `\n`. Unaffected by multiline mode. | `\w{3}\Z` | `tex` in `Cortex` |
| `\G` | Matches where the previous match ended (contiguous matches). | `\G\D*\s` | `Cortex `, `reads ` in `Cortex reads 7 files` |
| `\b` | Matches a word boundary (between a `\w` and a `\W`). | `\b\w+\s\w+\b` | `Cortex reads`, `Cortex writes` in `Cortex reads Cortex writes` |
| `\B` | Matches a non-word-boundary position. | `\Brt\w*\b` | `rtex`, `rtex` in `Cortex reads Cortex writes` |

## Grouping Constructs

Grouping constructs delineate subexpressions and typically capture parts of the input. Captured groups are available on outputs such as [Match][] and [Group][] from blocks like [Find All Text][].

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `(subpattern)` | Captures *subpattern* as an unnamed group. | `(\w)\1` | `oo` in `Coortex` |
| `(?<name>subpattern)` | Captures *subpattern* as a named group. | `(?<double>\w)\k<double>` | `oo` in `Coortex` |
| `(?<name-previous>subpattern)` | Balancing group definition for nested constructs. *name* can be omitted to capture as an unnamed group. | `(((?<open><span>)[^<]*)+([^<]*(?<close-open></span>))+)+(?(open)(?!))` | `&lt;span&gt;Cortex this is included&lt;/span&gt;`, `&lt;span&gt;Cortex this is included too&lt;/span&gt;` in `not included &lt;span&gt;Cortex this is included&lt;/span&gt; not included either &lt;span&gt;Cortex this is included too&lt;/span&gt;` |
| `(?:subpattern)` | Non-capturing group. | `Cortex\s(?:include)?` | `Cortex include`, `Cortex ` in `Cortex include Cortex not include` |
| `(?enabled-disabled:subpattern)` | Matches *subpattern* with different inline options. See [Regular expression options][]. | `(?i:c\|v)(ortex)` | `cortex`, `Cortex`, `Vortex` in `cortex Cortex Vortex CORTEX` |
| `(?=subpattern)` | Zero-width positive look-ahead. | `\w+(?=ex\b)` | `Cort`, `Vort` in `Cortex Vortex Balloon` |
| `(?!subpattern)` | Zero-width negative look-ahead. | `\b\w+\.(?!exe)\w+\b` | `cortex.jpg`, `cortex.html` in `cortex.jpg cortex.html .*.html cortex.exe` |
| `(?<=subpattern)` | Zero-width positive look-behind. | `(?<=\(\$\))\w+` | `variable`, `22` in `($)variable ($)22 ($)--` |
| `(?<!subpattern)` | Zero-width negative look-behind. | `\b\w(?<![aeiou])\w*` | `Cortex`, `words`, `which`, `does`, `not`, `start`, `with`, `vowel`, `like` in `Cortex words which does not start with a vowel like all` |
| `(?>subpattern)` | Atomic group; prevents backtracking over *subpattern*. | `[cv](?>o+r+)` | `cor`, `coor`, `vor` in `cortex coortex vortex gortex` |

## Back-reference Constructs

A back-reference matches text that a previous capturing group already matched.

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `\number` | Matches the value of a previously captured group by number. | `\b(\w)\w*\1\b` | `xcortex`, `that` in `Finds all words like xcortex that start and end with the same letter` |
| `\k<name>` | Matches the value of a previously captured named group. | `(?<punctuation>\p{P})\w+\k<punctuation>` | `!cortex!`, `?cortex?` in `!cortex! ?cortex? XcortexX` |

## Alternation Constructs

Alternation enables either/or matching.

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `\|` | Logical or. Matches any of the alternatives it separates. | `(c\|v)ortex` | `cortex`, `vortex` in `cortex vortex xortex` |
| `(?(subpattern)yes\|no)` | If *subpattern* matches as a zero-width assertion, match *yes*; otherwise match *no* (`\|no` is optional). | `\b(?(\w+tez\b)\w{3}\|cortex)` | `cortex`, `cor` in `cortex cortez vortex` |
| `(?(group)yes\|no)` | If a previous group (*number* or *name*) was captured, match *yes*; otherwise match *no*. | `(?(<quoted>\(\$\)))\w+\|'\w+'` | `cortex`, `'cortex'` in `($)cortex 'cortex'` |

## Substitutions

Substitutions are language elements used in **replacement** patterns (for example [Find And Replace Text][]), not in the search pattern itself.

| Syntax | Description | Pattern | Replacement | Result |
|---|---|---|---|---|
| `$number` | Substitutes the value of a numbered group. | `\b(\w+)(\s)(\w+)\b` | `$3$2$1` | `Cortex Great` becomes `Great Cortex` |
| `${name}` | Substitutes the value of a named group. | `\b(?<word1>\w+)(\s)(?<word2>\w+)\b` | `${word2} ${word1}` | `Cortex Great` becomes `Great Cortex` |
| `$$` | Substitutes a literal `$`. | `\b(dollar)` | `$$` | `(dollar)name` becomes `($)name` |
| `$&` | Substitutes the entire match. | `\w+` | `\*\*$&\*\*` | `Cortex` becomes `\*\*Cortex\*\*` |
| ``$` `` | Substitutes all input text before the match. | `#+` | ``$` `` | `Co##rtex` becomes `CoCortex` |
| `$'` | Substitutes all input text after the match. | `#+` | `$'` | `Cort##ex` becomes `Cortexex` |
| `$+` | Substitutes the last group captured. | `Co(r)` | `$+` | `CoCortex` becomes `Cortex` |
| `$_` | Substitutes the entire input. | `\w+?` | `$_` | `Cortex` becomes `Cortex Cortex Cortex Cortex Cortex Cortex` |

## Regular expression options

.NET supports [regular expression options][NET Regular Expression Options] that change matching behaviour. In {{% ctx %}} you typically control casing and culture with the block's [Comparison Type][Equality]. You can also enable or disable options **inline** in the pattern:

| Inline | `RegexOptions` | Effect |
| --- | --- | --- |
| `i` | IgnoreCase | Case-insensitive matching |
| `m` | Multiline | `^` and `$` match the start and end of each line |
| `s` | Singleline | `.` matches every character, including `\n` |
| `n` | ExplicitCapture | Only named or explicitly numbered groups capture |
| `x` | IgnorePatternWhitespace | Ignore unescaped white space in the pattern; allow `#` comments |

Inline forms:

* `(?imnsx)` — enable options for the rest of the pattern (or until another inline option changes them)
* `(?-imnsx)` — disable options
* `(?imnsx-imnsx:subpattern)` — apply options only to *subpattern*

Example: `(?i)cortex` matches `Cortex`, `CORTEX`, and `cortex`.

Other `RegexOptions` values (for example compiled or right-to-left matching) are documented on [NET Regular Expression Options][] but are not all exposed as separate block properties in {{% ctx %}}. Prefer [Ordinal][] or [Ordinal Ignore Case][] for machine-oriented matching unless you need linguistic rules — see [Equality][].

Miscellaneous constructs such as inline comments `(?#…)` are described in [Miscellaneous constructs][].

## Remarks

### Available on blocks and prompt properties

Set [SearchOptions][] to [Regex][SearchOptions Regex] on supporting Text and Files & Folders blocks. Regex patterns are also used for terminal prompt matching on [Execute SSH Command][] ([SSH TerminalPrompt][]) and [Execute Telnet Command][] ([Telnet TerminalPrompt][]). Regex is not a standalone expression language in the [Expression Editor][] beyond passing pattern strings into those properties.

### Overlapping matches

With [LiteralText][], overlapping matches can be found (for example searching for `"aa"` in `"aaa"` matches at indexes `0` and `1`). With [Regex][SearchOptions Regex], only the first match in that case is returned (`"aa"` at index `0`). The same distinction is documented on Contains, Get Index, Get Folder Content, and Search File blocks.

### Comparison Type

When a block exposes [Comparison Type][Equality], culture and casing rules still apply to how the regex engine compares text. Prefer [Ordinal][] or [Ordinal Ignore Case][] for machine-oriented patterns unless you intentionally need linguistic rules. See [Equality][].

### Search timeout

Supporting blocks apply a match timeout so a pathological pattern cannot run unbound (a common denial-of-service risk with regex). Exact limits vary by block family:

| Blocks | Typical limit |
| --- | --- |
| [Contains Text][], [Contains Any Text][], [Contains All Text][], [Get Index Of Text][], [Get Folder Content][], [Search File][], [Search Files][] | Often `30` seconds |
| [Find Text][], [Find All Text][], [Find And Replace Text][], [Find And Remove Text][], and related All variants | [BlockTimeout][], or `60` seconds if that is undefined |

When the limit is exceeded, the block throws [RegexMatchTimeoutException][]. Check each block's Exceptions table for the exact value. For general guidance, see [.NET regex best practices][].

### Line-by-line file search

[Search File][] and [Search Files][] search each line separately. As a result, the inline single-line option `s` (so that `.` matches `\n`) is not supported for those searches.

### Known Limitations

* Legacy CORTEX G2 regular expression syntax is not supported. Patterns must use .NET regular expression syntax as described on this page.
* If [Search Options][SearchOptions] is [Regex][SearchOptions Regex] (or [PatternMatching][]) and [Comparison Type][Equality] is [Current Culture][], some character equivalences (for example `æ` and `ae`) may not evaluate as equal — see each text or folder block's remarks (for example [Contains Text][]).

## See Also

### Related Concepts

* [What is Text?][] — LiteralText, Regex, and PatternMatching overview
* [Pattern Matching Syntax][] — `*` and `?` wildcards
* [Equality][] — Comparison Type and culture/casing rules

### Related Data Types

* [SearchOptions][]
* [TextToFind][]
* [String][]
* [StringComparison][]
* [Match][]
* [Group][]
* [CaptureDetails][]
* [FileMatch][]

### Related Blocks

* [Contains Text][]
* [Contains Any Text][]
* [Contains All Text][]
* [Find Text][]
* [Find All Text][]
* [Find And Replace Text][]
* [Find And Remove Text][]
* [Get Index Of Text][]
* [Get Folder Content][]
* [Search File][]
* [Search Files][]
* [Execute SSH Command][]
* [Execute Telnet Command][]

### External Documentation

* [.NET Regular Expressions][NET Regular Expressions] — overview of the .NET regex engine
* [Regular Expression Language - Quick Reference][NET Regex Quick Reference]
* [Options for Regular Expressions][NET Regular Expression Options]
* [Best Practices for Regular Expressions in .NET][.NET regex best practices]
* [Character Classes in Regular Expressions][Character classes]
* [Miscellaneous Constructs in Regular Expressions][Miscellaneous constructs]
* [Example: Scanning for HREFs][Scanning for HREFs]
* [RegexMatchTimeoutException][]

[Search timeout]: {{< ref "#search-timeout" >}}
[External Documentation]: {{< ref "#external-documentation" >}}
[Regular expression options]: {{< ref "#regular-expression-options" >}}
[Substitutions]: {{< ref "#substitutions" >}}

[What is Text?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.WhatIsText.MainDoc" >}}
[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[Pattern Matching Syntax]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.PatternMatchingSyntax.MainDoc" >}}
[Ordinal]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.Ordinal" >}}
[Ordinal Ignore Case]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.OrdinalIgnoreCase" >}}
[Current Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.CurrentCulture" >}}

[SearchOptions]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.MainDoc" >}}
[LiteralText]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.LiteralText" >}}
[PatternMatching]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.PatternMatching" >}}
[SearchOptions Regex]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.Regex" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[StringComparison]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}
[TextToFind]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFind.MainDoc" >}}
[Match]: {{< url path="Cortex.Reference.DataTypes.Text.Regex.Match.MainDoc" >}}
[Group]: {{< url path="Cortex.Reference.DataTypes.Text.Regex.Group.MainDoc" >}}
[CaptureDetails]: {{< url path="Cortex.Reference.DataTypes.Text.Regex.CaptureDetails.MainDoc" >}}
[FileMatch]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.FileMatch.MainDoc" >}}
[SSH TerminalPrompt]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.TerminalPrompt" >}}
[Telnet TerminalPrompt]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.TerminalPrompt" >}}

[Contains Text]: {{< url path="Cortex.Reference.Blocks.Text.ContainsText.ContainsText.MainDoc" >}}
[Contains Any Text]: {{< url path="Cortex.Reference.Blocks.Text.ContainsText.ContainsAnyText.MainDoc" >}}
[Contains All Text]: {{< url path="Cortex.Reference.Blocks.Text.ContainsText.ContainsAllText.MainDoc" >}}
[Find Text]: {{< url path="Cortex.Reference.Blocks.Text.FindText.FindText.MainDoc" >}}
[Find All Text]: {{< url path="Cortex.Reference.Blocks.Text.FindText.FindAllText.MainDoc" >}}
[Find And Replace Text]: {{< url path="Cortex.Reference.Blocks.Text.FindAndReplaceText.FindAndReplaceText.MainDoc" >}}
[Find And Remove Text]: {{< url path="Cortex.Reference.Blocks.Text.FindAndRemoveText.FindAndRemoveText.MainDoc" >}}
[Get Index Of Text]: {{< url path="Cortex.Reference.Blocks.Text.GetIndex.GetIndexOfText.MainDoc" >}}
[Get Folder Content]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.GetFolderContent.GetFolderContent.MainDoc" >}}
[Search File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.SearchFile.SearchFile.MainDoc" >}}
[Search Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.SearchFile.SearchFiles.MainDoc" >}}
[Execute SSH Command]: {{< url path="Cortex.Reference.Blocks.Ssh.ExecuteSshCommand.ExecuteSshCommandBlock.MainDoc" >}}
[Execute Telnet Command]: {{< url path="Cortex.Reference.Blocks.Telnet.ExecuteTelnetCommand.ExecuteTelnetCommand.MainDoc" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[BlockTimeout]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.BlockTimeoutProperty" >}}
[RegexParsingFailedException]: {{< url path="Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}

[Verbatim]: {{< url path="MSDocs.CSharp.Verbatim" >}}
[NET Regular Expressions]: {{< url path="MSDocs.DotNet.BaseTypes.RegularExpressions" >}}
[NET Regex Quick Reference]: {{< url path="MSDocs.DotNet.BaseTypes.RegularExpressionLanguageQuickReference" >}}
[NET Regular Expression Options]: {{< url path="MSDocs.DotNet.BaseTypes.RegularExpressionOptions" >}}
[.NET regex best practices]: {{< url path="MSDocs.DotNet.BaseTypes.RegularExpressionBestPractices" >}}
[Character classes]: {{< url path="MSDocs.DotNet.BaseTypes.CharacterClassesInRegularExpressions.MainDoc" >}}
[Supported Unicode general categories]: {{< url path="MSDocs.DotNet.BaseTypes.CharacterClassesInRegularExpressions.SupportedUnicodeGeneralCategories" >}}
[Supported named blocks]: {{< url path="MSDocs.DotNet.BaseTypes.CharacterClassesInRegularExpressions.SupportedNamedBlocks" >}}
[Miscellaneous constructs]: {{< url path="MSDocs.DotNet.BaseTypes.MiscellaneousConstructsInRegularExpressions" >}}
[Scanning for HREFs]: {{< url path="MSDocs.DotNet.BaseTypes.RegularExpressionExampleScanningForHrefs" >}}
[RegexMatchTimeoutException]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}
