---
title: "Pattern Matching Syntax"
linkTitle: "Pattern Matching Syntax"
description: "How wildcard pattern matching works in CORTEX: * and ? wildcards, SearchOptions.PatternMatching, and how it differs from LiteralText and Regex."
---

# {{% param title %}}

## Summary

In {{% ctx %}}, **pattern matching** is a simple wildcard language for matching text. You enable it by setting [Search Options][SearchOptions] to [PatternMatching][] on blocks that support search. It is lighter than [.NET regular expressions][Regex Syntax] and more flexible than an exact [LiteralText][] match.

| Approach | When to use | Wildcards |
| --- | --- | --- |
| [LiteralText][] | Exact character match of the search text (substring "contains" behaviour on many blocks) | None — every character is literal |
| [PatternMatching][] | Simple wildcards for text or file/folder **names** (for example `*.txt`, `Uptime is * hours.`) | `*` and `?` only |
| [Regex][SearchOptions Regex] | Full pattern language (quantifiers, groups, character classes, and so on) | Full [.NET Regex Syntax][Regex Syntax] |

Pattern matching is available only through block [Search Options][SearchOptions] — there is no separate pattern-matching expression syntax. Pair it with a [Comparison Type][Equality] when the block exposes one. For an overview of the three modes, see [What is Text?][].

## Wildcard characters

When [Search Options][SearchOptions] is [PatternMatching][], the search text is interpreted as follows:

| Character | Matches | Examples |
| --- | --- | --- |
| `*` | Zero or more characters | `"B*wn"` matches `"Brown"`; `"*"` matches any text of any length (including empty) |
| `?` | Zero or one character | `"?he"` matches `"The"` and `"the"`; `"hour?."` matches `"hours."` or `"hour."` |
| Any other character | That exact character (literal) | `"."` matches a period; `"Fox"` matches only those three letters in that order |

These rules match the wildcard model used by .NET file search APIs such as [DirectoryInfo.GetFiles][] (`*` = zero or more characters; `?` = zero or one character). Pattern matching is **not** a regular expression: metacharacters such as `.`, `+`, `|`, and `()` have no special meaning unless you switch to [Regex][SearchOptions Regex].

### Examples in text

Against the text `"The quick brown fox jumps over the lazy dog"` with [PatternMatching][] (as on [Contains Any Text][]):

| Pattern | Result | Notes |
| --- | --- | --- |
| `"?he"` | Match | `?` covers `T` / `t`; remainder is `he` |
| `"Q?ick"` | Match | Optional single character between `Q` and `ick` |
| `"B*?wn"` | Match | `*` covers `ro`; `?` can cover zero characters |
| `"Fox"` | No match under ordinal casing | Literal letters; `"fox"` differs in case unless ignore-case comparison is used |

Further worked examples for starts-with / contains / ends-with patterns appear on [Find Text][].

### Examples for files and folders

Use pattern matching with [Get Folder Content][] to filter by **file or folder name**, and with [Search File][] / [Search Files][] to find lines of text inside files. Folder listing matches **names only** — see [Matching scope for folder content][].

| Goal | Pattern | Block notes |
| --- | --- | --- |
| Any name | `"*"` | [Get Folder Content][] example lists all folders whose names match `"*"` |
| Text files by extension | `"*.txt"` | Matches names ending with `.txt` (name only — not a path glob) |
| PDF files | `"*.pdf"` | Same idea for other extensions |
| Log-style phrase in file content | `"Uptime is * hours."` | [Search File][] example |
| Optional trailing `s` | `"Uptime is * hour?."` | [Search Files][] example |

Common extensions (`.txt`, `.log`, `.csv`, `.json`, `.xml`, `.pdf`, `.docx`, `.xlsx`, `.zip`, and others) are listed under [What are Files and Folders?][]. Do **not** put `*` or `?` in path properties — wildcards belong in the search pattern; see [Paths][].

## Pattern matching versus other search modes

| Topic | LiteralText | PatternMatching | Regex |
| --- | --- | --- | --- |
| Language | Exact characters | `*` and `?` only | Full .NET regex |
| Typical use | Fixed phrases | File-style or simple fuzzy text patterns | Complex structure, groups, alternation |
| Invalid pattern errors | N/A | N/A (wildcards only) | Invalid patterns can throw [RegexParsingFailedException][] |
| Search timeout | Not applied as for PatternMatching/Regex on many Contains blocks | Can throw [RegexMatchTimeoutException][] if the search exceeds the block's documented limit (often `30` seconds) | Same timeout behaviour on those blocks |

"Contains" is a **block operation** (does this text contain a match?). [LiteralText][], [PatternMatching][], and [Regex][SearchOptions Regex] are **how** the search text is interpreted via [SearchOptions][].

## Remarks

### Available only on blocks

Set [SearchOptions][] to [PatternMatching][] on supporting Text and Files & Folders blocks. Pattern matching is not a standalone expression language in the [Expression Editor][].

### Matching scope for folder content

[Get Folder Content][] matches **file or folder names only**, not the full path. To include subfolders, set the block's **Recursive** property to `true`. A pattern such as `"**/*.txt"` is **not** a recursive path glob here: `*` and `?` apply to the name string, and path separators in the pattern do not walk directories. Prefer `"*.txt"` with **Recursive** when you need matching names under a folder tree.

### Comparison Type

When a block exposes [Comparison Type][Equality], culture and casing rules still apply. Prefer [Ordinal][] or [Ordinal Ignore Case][] for machine-oriented names and patterns unless you intentionally need linguistic rules. See [Equality][].

### Search timeout

On many Text and Files & Folders blocks, a [PatternMatching][] (or [Regex][SearchOptions Regex]) search that runs longer than the documented limit (commonly `30` seconds) throws [RegexMatchTimeoutException][]. Check each block's Exceptions table for the exact timeout.

### Known Limitations

* If [Search Options][SearchOptions] is [PatternMatching][] (or [Regex][SearchOptions Regex]) and [Comparison Type][Equality] is [Current Culture][], some character equivalences (for example `æ` and `ae`) may not evaluate as equal — see each text or folder block's remarks (for example [Contains Text][]).

## See Also

### Related Concepts

* [What is Text?][] — LiteralText, Regex, and PatternMatching overview
* [Equality][] — Comparison Type and culture/casing rules
* [Regex Syntax][] — full regular expression language
* [What are Files and Folders?][] — common extensions and Files & Folders overview
* [Paths][] — path rules; wildcards must not appear in path properties

### Related Data Types

* [SearchOptions][]
* [String][]
* [StringComparison][]
* [TextToFind][]
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

### External Documentation

* [DirectoryInfo.GetFiles][] — .NET wildcard (`*` / `?`) search patterns for file names
* [RegexMatchTimeoutException][]
* [Naming files, paths, and namespaces][]

[Matching scope for folder content]: {{< ref "#matching-scope-for-folder-content" >}}

[What is Text?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.WhatIsText.MainDoc" >}}
[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[Regex Syntax]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.RegexSyntax.MainDoc" >}}
[What are Files and Folders?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.WhatAreFilesAndFolders.MainDoc" >}}
[Paths]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}
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
[FileMatch]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.FileMatch.MainDoc" >}}

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

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[RegexParsingFailedException]: {{< url path="Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}

[DirectoryInfo.GetFiles]: {{< url path="MSDocs.DotNet.Api.System.IO.DirectoryInfo.GetFiles" >}}
[RegexMatchTimeoutException]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}
[Naming files, paths, and namespaces]: {{< url path="MSDocs.Windows.Apps.Win32.DesktopTechnologies.DataAccessAndStorage.LocalFileSystems.NamingFilesPathsAndNamespaces.MainDoc" >}}
