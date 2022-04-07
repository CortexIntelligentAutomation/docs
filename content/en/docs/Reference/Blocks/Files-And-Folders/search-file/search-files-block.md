---
title: "Search Files"
linkTitle: "Search Files"
description: "Searches files at the specified file paths for a matching search pattern."
---

{{< figure src="/blocks/files-search-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.SearchFile.SearchFilesBlock)</p>

## Description

Searches the files at the specified [File Paths][FilePaths Property] for text that matches a given [Search Pattern][SearchPattern Property].

Results are returned as [Matches][Matches Property].

Additional options can be specified:

* [Search Options][SearchOptions Property] can be specified to choose whether to use a ContainsText, PatternMatching or Regex search.
* [Encoding][Encoding Property] can be specified if needed to explicitly state the encoding that should be used to read and search the files.
* A [Comparison Type][ComparisonType Property] option can specified to choose how it is determined whether text matches the [Search Pattern][SearchPattern Property] (e.g. whether the search is case-sensitive or case-insensitive).

## Examples

### Get matches for a given text

This example will get all matches in the files `["C:\Source\File1.txt", "C:\Source\File2.txt"]` that match the text `"error"`.

It will perform a case-insensitive search, and let the block determine the encoding of the files automatically.

In this example assume `"C:\Source\File1.txt"` contains the following text:

```plaintext
Error: Failed to determine uptime.
Information: Uptime is 2 hours.
Information: Uptime is 3 hours.
Error: An terminal error has occurred. The service will restart now.
```

and `"C:\Source\File2.txt"` contains the following text:

```plaintext
Information: Uptime is 1 hour.
Information: Uptime is 2 hours.
Information: Uptime is 3 hours.
Error: Failed to determine uptime.
Error: Failed to determine uptime.
Information: Uptime is 6 hours.
```

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Paths][FilePaths Property] | `($)FilePaths`, with value `[@"C:\Source\File1.txt", @"C:\Source\File2.txt"]` | `($)FilePaths` is a variable of type [IEnumerable]&lt;[String][]&gt; |
| [Search Pattern][SearchPattern Property] | `($)SearchPattern`, with value `"error"` | `($)SearchPattern` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Encoding][Encoding Property] | `($)Encoding`, with value `null` | `($)Encoding` is a variable of type [Encoding][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Matches][Matches Property] | `($)Matches`, with no value | `($)Matches` is a variable that will be set to an [IDictionary][]&lt;[String][], [IList][]&lt;[FileMatch][]&gt;&gt; value |

#### Result

Searching `"C:\Source\File.txt"` for all text matching `"error"` (case-insensitive), results in the variable `($)Matches` being updated to the following:

```json
{
  "C:\\Source\\File1.txt" : [
                              {
                                "FilePath": "C:\\Source\\File1.txt",
                                "Line": 1,
                                "Value": "Error",
                                "Index": 0,
                                "Length": 5,
                                "Groups": {}
                              },
                              {
                                "FilePath": "C:\\Source\\File1.txt",
                                "Line": 4,
                                "Value": "Error",
                                "Index": 0,
                                "Length": 5,
                                "Groups": {}
                              },
                              {
                                "FilePath": "C:\\Source\\File1.txt",
                                "Line": 4,
                                "Value": "error",
                                "Index": 19,
                                "Length": 5,
                                "Groups": {}
                              }
                            ],
  "C:\\Source\\File2.txt" : [
                              {
                                "FilePath": "C:\\Source\\File2.txt",
                                "Line": 4,
                                "Value": "Error",
                                "Index": 0,
                                "Length": 5,
                                "Groups": {}
                              },
                              {
                                "FilePath": "C:\\Source\\File2.txt",
                                "Line": 5,
                                "Value": "Error",
                                "Index": 0,
                                "Length": 5,
                                "Groups": {}
                              }
                            ]                            
}
```

***

### Get matches for a given pattern

This example will get all matches in the files `["C:\Source\File1.txt", "C:\Source\File2.txt"]` that match the pattern `"Uptime is * hour?."`.

It will perform a case-sensitive search, and let the block determine the encoding of the files automatically.

In this example assume `"C:\Source\File1.txt"` contains the following text:

```plaintext
Error: Failed to determine uptime.
Information: Uptime is 2 hours.
Information: Uptime is 3 hours.
Error: An terminal error has occurred. The service will restart now.
```

and `"C:\Source\File2.txt"` contains the following text:

```plaintext
Information: Uptime is 1 hour.
Information: Uptime is 2 hours.
Information: Uptime is 3 hours.
Error: Failed to determine uptime.
Error: Failed to determine uptime.
Information: Uptime is 6 hours.
```

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Paths][FilePaths Property] | `($)FilePaths`, with value `[@"C:\Source\File1.txt", @"C:\Source\File2.txt"]` | `($)FilePaths` is a variable of type [IEnumerable]&lt;[String][]&gt; |
| [Search Pattern][SearchPattern Property] | `($)SearchPattern`, with value `"Uptime is * hour?."` | `($)SearchPattern` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.PatternMatching` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Encoding][Encoding Property] | `($)Encoding`, with value `null` | `($)Encoding` is a variable of type [Encoding][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Matches][Matches Property] | `($)Matches`, with no value | `($)Matches` is a variable that will be set to an [IDictionary][]&lt;[String][], [IList][]&lt;[FileMatch][]&gt;&gt; value |

#### Result

Searching the files `["C:\Source\File1.txt", "C:\Source\File2.txt"]` for all text matching the pattern `"Uptime is * hour?."` (case-sensitive), results in the variable `($)Matches` being updated to the following:

```json
{
  "C:\\Source\\File1.txt" : [
                              {
                                "FilePath": "C:\\Source\\File1.txt",
                                "Line": 2,
                                "Value": "Uptime is 2 hours.",
                                "Index": 13,
                                "Length": 18,
                                "Groups": {}
                              },
                              {
                                "FilePath": "C:\\Source\\File1.txt",
                                "Line": 3,
                                "Value": "Uptime is 3 hours.",
                                "Index": 13,
                                "Length": 18,
                                "Groups": {}
                              }
                            ],
  "C:\\Source\\File2.txt" : [
                              {
                                "FilePath": "C:\\Source\\File2.txt",
                                "Line": 1,
                                "Value": "Uptime is 1 hour.",
                                "Index": 13,
                                "Length": 17,
                                "Groups": {}
                              },
                              {
                                "FilePath": "C:\\Source\\File2.txt",
                                "Line": 2,
                                "Value": "Uptime is 2 hours.",
                                "Index": 13,
                                "Length": 18,
                                "Groups": {}
                              },
                              {
                                "FilePath": "C:\\Source\\File2.txt",
                                "Line": 3,
                                "Value": "Uptime is 3 hours.",
                                "Index": 13,
                                "Length": 18,
                                "Groups": {}
                              },
                              {
                                "FilePath": "C:\\Source\\File2.txt",
                                "Line": 6,
                                "Value": "Uptime is 6 hours.",
                                "Index": 13,
                                "Length": 18,
                                "Groups": {}
                              }
                            ]                            
}
```

***

### Get matches for a given regex

This example will get all matches in the files `["C:\Source\File1.txt", "C:\Source\File2.txt"]` that match the regex `"^Error:.*$"`.

It will perform a case-sensitive search, explicitly specify the encoding of the files as UTF-8 and will match any lines that start with `"Error:"`.

In this example assume `"C:\Source\File1.txt"` contains the following text:

```plaintext
Error: Failed to determine uptime.
Information: Uptime is 2 hours.
Information: Uptime is 3 hours.
Error: An terminal error has occurred. The service will restart now.
```

and `"C:\Source\File2.txt"` contains the following text:

```plaintext
Information: Uptime is 1 hour.
Information: Uptime is 2 hours.
Information: Uptime is 3 hours.
Error: Failed to determine uptime.
Error: Failed to determine uptime.
Information: Uptime is 6 hours.
```

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Paths][FilePaths Property] | `($)FilePaths`, with value `[@"C:\Source\File1.txt", @"C:\Source\File2.txt"]` | `($)FilePaths` is a variable of type [IEnumerable]&lt;[String][]&gt; |
| [Search Pattern][SearchPattern Property] | `($)SearchPattern`, with value `"^Error:.*$"` | `($)SearchPattern` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.Regex` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Encoding][Encoding Property] | `($)Encoding`, with value `Encoding.UTF8` | `($)Encoding` is a variable of type [Encoding][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Matches][Matches Property] | `($)Matches`, with no value | `($)Matches` is a variable that will be set to an [IDictionary][]&lt;[String][], [IList][]&lt;[FileMatch][]&gt;&gt; value |

#### Result

Searching the files `["C:\Source\File1.txt", "C:\Source\File2.txt"]` for all text matching the regex `"^Error:.*$"` (case-sensitive), results in the variable `($)Matches` being updated to the following:

```json
{
  "C:\\Source\\File1.txt" : [
                              {
                                "FilePath": "C:\\Source\\File1.txt",
                                "Line": 1,
                                "Value": "Error: Failed to determine uptime.",
                                "Index": 0,
                                "Length": 34,
                                "Groups": {}
                              },
                              {
                                "FilePath": "C:\\Source\\File1.txt",
                                "Line": 4,
                                "Value": "Error: An terminal error has occurred. The service will restart now.",
                                "Index": 0,
                                "Length": 68,
                                "Groups": {}
                              }
                            ],
  "C:\\Source\\File2.txt" : [
                              {
                                "FilePath": "C:\\Source\\File2.txt",
                                "Line": 4,
                                "Value": "Error: Failed to determine uptime.",
                                "Index": 0,
                                "Length": 34,
                                "Groups": {}
                              },
                              {
                                "FilePath": "C:\\Source\\File2.txt",
                                "Line": 5,
                                "Value": "Error: Failed to determine uptime.",
                                "Index": 0,
                                "Length": 34,
                                "Groups": {}
                              }
                            ]                            
}
```

***

## Properties

### File Paths

The [File Paths][FilePaths Property] to search for text that matches a given [Search Pattern][SearchPattern Property].

Each file path in [File Paths][FilePaths Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[String][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)FilePaths` with value `[]` |

### Search Pattern

The [Search Pattern][SearchPattern Property] which text must match to be included in the returned [Matches][Matches Property].

A `null` or empty (i.e. `""`) [Search Pattern][SearchPattern Property] means match anything; all additional block options such as [Search Options][SearchOptions Property] etc. still take effect.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)SearchPattern` with value `null` |

### Search Options

[Search Options][SearchOptions Property] can be specified to choose whether [Search Pattern][SearchPattern Property] should be interpreted as a ContainsText, PatternMatching or Regex search:

* `SearchOptions.ContainsText` matches text exactly.
* `SearchOptions.PatternMatching` allows wildcard text matching using [Pattern Matching Syntax][]:
  * `*` wildcard character can be used to match `0` or more characters.
  * `?` wildcard character can be used to match `0` or `1` character.
  * All other characters are treated as a literal character.
* `SearchOptions.Regex` allows regex text matching using [.Net Regex Syntax][Regex Syntax].

Please note that with `SearchOptions.ContainsText` overlapping matches are detected (e.g. searching for `"aa"` in `"aaa"` matches `"aa"`  at index `0` and `"aa"` at index `1`). With `SearchOptions.Regex` only `"aa"` at index `0` will be matched.

| | |
|--------------------|---------------------------|
| Data Type | [SearchOptions][] |
| Property Type | [Input][] |
| Default Value | `($)SearchOptions` with value `SearchOptions.ContainsText` |

### Encoding

Option to specify the [Encoding][Encoding Property] that should be used to read and search the files.

Most of the time [Encoding][Encoding Property] can be left as `null`; allowing the block to automatically attempt to detect the encoding of the files based on the presence of byte order marks. However, if it is found that the returned [Matches][Matches Property] are not correct because the block was unable to detect the encoding of the files, it is possible to specify the [Encoding][Encoding Property] explicitly using this property.

For information about encoding, examples of available encodings and using them, please see [Text Encoding][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Encoding` with value `null` |

### Comparison Type

The [Comparison Type][ComparisonType Property] specifying the rules used to match text against the given [Search Pattern][SearchPattern Property].

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Property Type | [Input][] |
| Default Value | `($)ComparisonType` with value `StringComparison.Ordinal` |

### Matches

[Matches][Matches Property] containing an entry for each file in [File Paths][FilePaths Property].

The key of each entry is the file path, and the value contains a [FileMatch][] for every text in the file path that matches the specified [Search Pattern][SearchPattern Property] based on the other specified options.

A basic example with a single file path and a single [FileMatch][] can be seen below:

```json
{
  "C:\\Source\\File1.txt" : [
                              {
                                "FilePath": "C:\\Source\\File1.txt",
                                "Line": 1,
                                "Value": "Error: Failed to determine uptime.",
                                "Index": 0,
                                "Length": 34,
                                "Groups": {}
                              }
                            ]                          
}
```

For more information see the [example][] above, or the [FileMatch][] data type.

| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[String][], [IList][]&lt;[FileMatch][]&gt;&gt; |
| Property Type | [Output][] |
| Default Value | `($)Matches` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Search Options][SearchOptions Property] is not one of the specified [SearchOptions][] types (e.g. `(SearchOptions)10`). |
| | Thrown when [Comparison Type][ComparisonType Property] is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |
| [InvalidPropertyValueException][] | Thrown when [Encoding][Encoding Property] is invalid (e.g. `Encoding.GetEncoding(-1)`). |
| [OperationFailedException][] | Any file path in [File Paths][FilePaths Property] is `null` or empty (i.e. `""`). For more information, see [Null or Empty File Paths][]|
|                              | Any file path in [File Paths][FilePaths Property] is duplicated. For more information, see [Duplicate File Paths][] |
|                              | Any file path in [File Paths][FilePaths Property] does not exist. |
|                              | Any file path in [File Paths][FilePaths Property] points to a folder. |
|                              | Any file path in [File Paths][FilePaths Property] contains leading spaces. |
|                              | Any file path in [File Paths][FilePaths Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any file or folder names. |
|                              | Any file path in [File Paths][FilePaths Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | Any file path in [File Paths][FilePaths Property] is invalid (for example, it is on an unmapped drive). |
|                              | The user the flow is executing as does not have the required permissions to search a file path in [File Paths][FilePaths Property]. |
|                              | An unexpected error occurs when searching any file path in [File Paths][FilePaths Property]. |
| [PropertyEmptyException][]   | Thrown when [File Paths][FilePaths Property] does not contain any items. |
| [PropertyNullException][]    | Thrown when [File Paths][FilePaths Property] is `null`. |
| [RegexMatchTimeoutException][] | Thrown when using [Search Options][SearchOptions Property] is either `SearchOptions.Regex` or `SearchOptions.PatternMatching` and the execution time of the search exceeds `30` seconds. |
| [RegexParsingFailedException][] | Thrown when [Search Options][SearchOptions Property] is `SearchOptions.Regex` and the [Search Pattern][SearchPattern Property] is not a valid regex (e.g. `(`). |

## Remarks

### File Paths

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

### File Paths needs escaping

Each file path in [File Paths][FilePaths Property] requires `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Source\\File.txt"`), or
* Prepending an `@` character before the start of the [File Paths][FilePaths Property] (e.g. `@"C:\Source\File.txt"`).

### Null or empty Search Pattern

A `null` or empty (i.e. `""`) [Search Pattern][SearchPattern Property] means match anything; all additional block options such as [Search Options][SearchOptions Property] etc. still take effect.

### Encoding of text

For information about encoding of text, examples of available encodings and using them, please see [Text Encoding][].

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

### Handling of Exceptions

If an exception occurs when trying to search a file in the [File Paths][FilePaths Property], it will be recorded and the block will continue processing the remaining files. Once all files are processed, recorded exceptions will be thrown within an [OperationFailedException][].

### Known Limitations

* The text in the files at the specified [File Paths][FilePaths Property] is searched line-by-line. As a result, when using `SearchOptions.Regex` the in-line `s` regex character is not supported.
* If the text in the files at the specified [File Paths][FilePaths Property] ends with a blank line (`0` length) that line will not be read and therefore not matched against.
* If [Search Options][SearchOptions Property] is set to `SearchOptions.Regex` or `SearchOptions.PatternMatching` and [Comparison Type][ComparisonType Property] is set to `StringComparison.CurrentCulture`, some characters such as `æ` that is equivalent to `ae` may not evaluate as a equal.

[FilePaths Property]: {{< ref "#file-paths" >}}
[SearchPattern Property]: {{< ref "#search-pattern" >}}
[SearchOptions Property]: {{< ref "#search-options" >}}
[Encoding Property]: {{< ref "#encoding" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[Matches Property]: {{< ref "#matches" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Text Equality]: {{< url "Cortex.Reference.Concepts.TextEquality.MainDoc" >}}
[ComparisonTypes]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.Ordinal" >}}
[OrdinalIgnoreCase]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.OrdinalIgnoreCase" >}}

[Text Encoding]: {{< url "Cortex.Reference.Concepts.TextEncoding.MainDoc" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Common.Property.InvalidPropertyValueException.MainDoc" >}}
[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[Duplicate File Paths]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.IndexesOfDuplicatePaths" >}}
[Null Or Empty File Paths]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.IndexesOfNullOrEmptyPaths" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[RegexMatchTimeoutException]: {{< url "MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}
[RegexParsingFailedException]: {{< url "Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}

[Example]: {{< ref "#get-matches-for-a-given-text" >}}

[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.FileAndFolderPaths.MainDoc" >}}
[Pattern Matching Syntax]: {{< url "Cortex.Reference.Concepts.PatternMatchingSyntax.MainDoc" >}}
[Regex Syntax]: {{< url "Cortex.Reference.Concepts.RegexSyntax.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[SearchOptions]: {{< url "Cortex.Reference.DataTypes.MostCommon.SearchOptions" >}}
[Encoding]: {{< url "Cortex.Reference.DataTypes.MostCommon.Encoding" >}}
[StringComparison]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDocComparison" >}}
[IDictionary]: {{< url "Cortex.Reference.DataTypes.MostCommon.IDictionary" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.MostCommon.IEnumerable" >}}
[IList]: {{< url "Cortex.Reference.DataTypes.MostCommon.IList" >}}
[FileMatch]: {{< url "Cortex.Reference.DataTypes.MostCommon.FileMatch" >}}
