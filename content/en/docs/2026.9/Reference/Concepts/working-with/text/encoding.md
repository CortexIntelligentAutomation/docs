---
title: "Encoding"
linkTitle: "Encoding"
description: "How text encoding works in CORTEX: character encodings for files and bytes (System.Text.Encoding), and TextEncodingFormat values used by Encode Text and Decode Text."
---

# {{% param title %}}

## Summary

In {{% ctx %}}, **encoding** has two related meanings:

| Topic | What it does | Typical use |
| --- | --- | --- |
| [Character encodings][] | Maps a [String][] to and from a sequence of bytes (`System.Text.Encoding`) | Reading, writing, and searching files |
| [Text encode/decode formats][] | Transforms text to another text representation (`TextEncodingFormat`) | [Encode Text][] / [Decode Text][] with a [TextEncodingFormat][] value |

Character encoding is about how characters become bytes on disk or the network. Text encode/decode formats rewrite a string into another string form (for example Base64 or Html)—they are not the same as choosing UTF-8 versus UTF-16 for a file.

| Goal | Prefer |
| --- | --- |
| Read or write a text file with a known character encoding | File blocks with an explicit [Encoding][Encoding data type] (for example `Encoding.UTF8`) |
| Let file read/search detect encoding from a BOM | Leave **Encoding** as `null` on read/search blocks — see [What are Files and Folders?][] |
| Write UTF-8 without a BOM | Leave **Encoding** as `null` on write blocks |
| Convert text with a [TextEncodingFormat][] (Base64, Url, Hex, Html, Utf8, Base64Url) | [Encode Text][] |
| Reverse an encode/decode format | [Decode Text][] with the matching [TextEncodingFormat][] |

For string basics and immutability, see [What is Text?][]. For .NET background on character encodings, see [Introduction to character encoding in .NET][].

## Character encodings

In .NET, a [String][] is stored as UTF-16 Unicode characters. An [Encoding][Encoding data type] (`System.Text.Encoding`) converts between that in-memory string and a byte sequence—for example when reading or writing a file. Different encodings use different code pages and byte layouts; choosing the wrong encoding garbles text that falls outside the encoding's repertoire. See [Introduction to character encoding in .NET][] and [System.Text.Encoding][MS Encoding].

### Common encodings

| Name | Typical expression | Notes |
| --- | --- | --- |
| UTF-8 | `Encoding.UTF8` | Variable-length Unicode; widely used for files and APIs. See [UTF8Encoding][]. Provides a UTF-8 byte order mark (BOM) preamble—see [UTF-8 and byte order marks][]. |
| Unicode (UTF-16 LE) | `Encoding.Unicode` | Little-endian UTF-16. See [UnicodeEncoding][]. |
| Big-endian Unicode | `Encoding.BigEndianUnicode` | Big-endian UTF-16 (`UnicodeEncoding` with big-endian byte order). |
| UTF-32 | `Encoding.UTF32` or `new UTF32Encoding()` | Fixed-width 32-bit Unicode. See [UTF32Encoding][]. |
| ASCII | `Encoding.ASCII` or `new ASCIIEncoding()` | 7-bit ASCII (code page 20127); values above 127 are not representable as ASCII. |
| Named or code-page encoding | `Encoding.GetEncoding("utf-8")`, `Encoding.GetEncoding(20127)`, `Encoding.GetEncoding("iso-8859-1")` | Resolves an encoding by name or Windows code page number. |

`Encoding.Default` is the OS ANSI code page—avoid it for portable flows because it depends on the execution server. Prefer an explicit encoding such as `Encoding.UTF8` when behaviour must be the same on every server.

### Specifying Encoding in the Expression Editor

On file blocks, set **Encoding** in the [Expression Editor][] with any of these forms:

| Need | Example |
| --- | --- |
| UTF-8 (with BOM preamble) | `Encoding.UTF8` |
| UTF-8 without BOM | `new UTF8Encoding(false)` |
| ASCII | `Encoding.ASCII` |
| Code page by number | `Encoding.GetEncoding(20127)` |
| Encoding by name | `Encoding.GetEncoding("utf-8")` |
| Construct ASCII encoding type | `new ASCIIEncoding()` |

`Encoding.UTF8` and `new UTF8Encoding()` are **not** interchangeable: the parameterless `new UTF8Encoding()` constructor defaults to **no** BOM, while `Encoding.UTF8` provides a BOM preamble. Use `new UTF8Encoding(false)` or `new UTF8Encoding(true)` when you need that choice to be explicit. See [UTF-8 and byte order marks][].

An invalid encoding expression (for example `Encoding.GetEncoding(-1)`) causes file blocks to throw [InvalidPropertyValueException][]. Leave **Encoding** unset (`null`) when you want the block's default null behaviour described below.

### Encoding on file blocks

File read, write, and search blocks expose an optional **Encoding** property:

| Situation | Behaviour |
| --- | --- |
| Read or search, **Encoding** is `null` | The block attempts to detect encoding from byte order marks (BOM) when possible |
| Write, **Encoding** is `null` | Text is written as UTF-8 **without** a BOM |
| **Encoding** set explicitly | That encoding is used for the operation |

See [What are Files and Folders?][] and the individual blocks under [Related Blocks][].

### UTF-8 and byte order marks

A BOM is an optional signature at the start of a file that identifies the encoding. For UTF-8 writes in {{% ctx %}}:

| Expression / setting | Typical BOM behaviour |
| --- | --- |
| **Encoding** left as `null` on write blocks | UTF-8 **without** a BOM |
| `Encoding.UTF8` | UTF-8 **with** a BOM preamble |
| `new UTF8Encoding(false)` / parameterless `new UTF8Encoding()` | UTF-8 **without** a BOM |
| `new UTF8Encoding(true)` | UTF-8 **with** a BOM |

Choose `null` or `new UTF8Encoding(false)` when consumers expect UTF-8 without a leading BOM. Use `Encoding.UTF8` or `new UTF8Encoding(true)` when a BOM is required.

## Text encode and decode formats

[Encode Text][] and [Decode Text][] transform a [String][] using a [TextEncodingFormat][] value. These formats produce another string (encoded or decoded text)—they are not the same as choosing a `System.Text.Encoding` (such as `Encoding.UTF8`) for file I/O.

| [TextEncodingFormat][] | Meaning |
| --- | --- |
| [Base64][] | Base64 encoding format |
| [Url][] | Url encoding format |
| [Hex][] | Hex (hexadecimal) encoding format |
| [Html][] | Html encoding format |
| [Utf8][] | Utf8 encoding format — a [TextEncodingFormat][] value used by encode/decode text blocks, **not** the character encoding `Encoding.UTF8` used for files |
| [Base64Url][] | Base64Url encoding format |

All of these values are defined on [TextEncodingFormat][]. [Decode Text][] documents each of them as a supported **Format**. [Encode Text][] examples cover Base64, Url, Hex, and Html; the same [TextEncodingFormat][] enum supplies Utf8 and Base64Url as well.

When encoding to [Base64][], a newline is inserted every 76 characters—see [Known Limitations][].

## Remarks

### Round-tripping

You can pass text produced by [Encode Text][] into [Decode Text][] (same [TextEncodingFormat][]), and pass decoded text back through [Encode Text][], to round-trip the value. Prefer the matching format on both blocks. For format-specific edge cases, see the Remarks on [Decode Text][].

### Immutable strings

Encode and decode do not edit a [String][] in place. Blocks produce a new string and assign it to the **Text** variable. See [Immutability of strings][].

### Decoding Url out-of-range sequences

When decoding [Url][], percent-sequences outside the valid range (`%00`–`%ff`) are treated as literal characters (for example `"%zzExample%21"` becomes `"%zzExample!"`). See [Decode Text][].

### Decoding Hex overflow

When decoding [Hex][], characters outside `0-9` and `A-F` overflow rather than failing (for example `G` overflows toward `0`). See [Decode Text][] for examples.

### Decoding Html entities, ampersands, and semicolons

When decoding [Html][]:

* Invalid [HTML entities][HTMLEntity] are removed
* An ampersand that is not part of an entity is removed
* A semicolon that is not part of an entity is kept as a literal character

Full examples are on [Decode Text][].

### TextDecodingException

Invalid Base64, Hex (odd number of characters), or Base64Url input can throw [TextDecodingException][] when using [Decode Text][]. See [TextDecodingException][] for error codes.

### Known Limitations

* When encoding [Base64][], a newline is inserted every 76 characters (see [Encode Text][]).
* When decoding [Html][], HTML5 named [entities][HTMLEntity] (for example `"&phi;"`) are removed (see [Decode Text][]).

## See Also

### Related Concepts

* [What is Text?][] — strings, immutability, and overview of text concepts
* [What are Files and Folders?][] — file operations and default encoding behaviour
* [Immutability of strings][]

### Related Data Types

* [Encoding][Encoding data type]
* [UTF8Encoding][]
* [UnicodeEncoding][]
* [UTF32Encoding][]
* [TextEncodingFormat][]
* [String][]
* [TextDecodingErrorCode][]

### Related Blocks

* [Encode Text][]
* [Decode Text][]
* [Read All Text][]
* [Read All Lines][]
* [Write All Text][]
* [Write All Lines][]
* [Search File][]
* [Search Files][]

### External Documentation

* [Introduction to character encoding in .NET][]
* [System.Text.Encoding][MS Encoding]
* [System.Text.UTF8Encoding][MS UTF8Encoding]
* [System.Text.UnicodeEncoding][MS UnicodeEncoding]
* [System.Text.UTF32Encoding][MS UTF32Encoding]

[Character encodings]: {{< ref "#character-encodings" >}}
[Text encode/decode formats]: {{< ref "#text-encode-and-decode-formats" >}}
[Related Blocks]: {{< ref "#related-blocks" >}}
[Known Limitations]: {{< ref "#known-limitations" >}}
[UTF-8 and byte order marks]: {{< ref "#utf-8-and-byte-order-marks" >}}
[Immutability of strings]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.WhatIsText.ImmutabilityOfStrings" >}}

[What is Text?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.WhatIsText.MainDoc" >}}
[What are Files and Folders?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.WhatAreFilesAndFolders.MainDoc" >}}

[Encoding data type]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.MainDoc" >}}
[UTF8Encoding]: {{< url path="Cortex.Reference.DataTypes.Text.UTF8Encoding.MainDoc" >}}
[UnicodeEncoding]: {{< url path="Cortex.Reference.DataTypes.Text.UnicodeEncoding.MainDoc" >}}
[UTF32Encoding]: {{< url path="Cortex.Reference.DataTypes.Text.UTF32Encoding.MainDoc" >}}
[TextEncodingFormat]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.MainDoc" >}}
[Base64]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Base64" >}}
[Url]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Url" >}}
[Hex]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Hex" >}}
[Html]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Html" >}}
[Utf8]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Utf8" >}}
[Base64Url]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Base64Url" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TextDecodingErrorCode]: {{< url path="Cortex.Reference.DataTypes.Text.TextDecodingErrorCode.MainDoc" >}}

[Encode Text]: {{< url path="Cortex.Reference.Blocks.Text.EncodeText.EncodeText.MainDoc" >}}
[Decode Text]: {{< url path="Cortex.Reference.Blocks.Text.DecodeText.DecodeText.MainDoc" >}}
[Read All Text]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.ReadFile.ReadAllText.MainDoc" >}}
[Read All Lines]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.ReadFile.ReadAllLines.MainDoc" >}}
[Write All Text]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.WriteFile.WriteAllText.MainDoc" >}}
[Write All Lines]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.WriteFile.WriteAllLines.MainDoc" >}}
[Search File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.SearchFile.SearchFile.MainDoc" >}}
[Search Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.SearchFile.SearchFiles.MainDoc" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[InvalidPropertyValueException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[TextDecodingException]: {{< url path="Cortex.Reference.Exceptions.Text.Encoding.TextDecodingException.MainDoc" >}}
[HTMLEntity]: {{< url path="Cortex.Reference.Glossary.F-J.HTMLEntity" >}}

[Introduction to character encoding in .NET]: {{< url path="MSDocs.DotNet.BaseTypes.CharacterEncodingIntroduction" >}}
[MS Encoding]: {{< url path="MSDocs.DotNet.Api.System.Text.Encoding" >}}
[MS UTF8Encoding]: {{< url path="MSDocs.DotNet.Api.System.Text.Utf8Encoding" >}}
[MS UnicodeEncoding]: {{< url path="MSDocs.DotNet.Api.System.Text.UnicodeEncoding" >}}
[MS UTF32Encoding]: {{< url path="MSDocs.DotNet.Api.System.Text.Utf32Encoding" >}}
