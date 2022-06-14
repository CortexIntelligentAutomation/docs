---
title: "Get Folder Content"
linkTitle: "Get Folder Content"
description: "Gets the paths of files or folders under the specified folder path."
---

{{< figure src="/blocks/folders-get-content-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.GetFolderContent.GetFolderContentBlock)</p>

## Description

Gets the [Paths][Paths Property] of files or folders under the specified [Folder Path][FolderPath Property] whose name matches the given [Search Pattern][SearchPattern Property].

The returned [Paths][Paths Property] can then be used in other file and folder blocks that require paths.

Additional options can be specified:

* [Search Options][SearchOptions Property] can be specified to choose whether to use a ContainsText, PatternMatching or Regex search.
* [Content Options][ContentOptions Property] can be specified to choose whether to search for files or folders.
* A [Recursive][Recursive Property] option can specified to choose whether to search only in the specified [Folder Path][FolderPath Property], or include all subfolders.
* A [Comparison Type][ComparisonType Property] option can specified to choose how it is determined whether the file or folder name matches the [Search Pattern][SearchPattern Property] (e.g. whether the search is case-sensitive or case-insensitive).

## Examples

### Get paths of files in a folder whose names contain a given text

This example will get the paths of all files in `"C:\Source\Folder"` that contain `"file"` in their name.

It will perform a case-insensitive search, and will not get any paths of folders or any paths of files that reside in subfolders of `"C:\Source\Folder"`.

In this example assume `"C:\Source\Folder"` contains:

* A file named `"FileInFolder1.txt"`.
* A file named `"FileInFolder2.txt"`.
* A folder named `"SubFolder"` which contains:
  * A file named `"FileInSubFolder1.txt"`.
  * A file named `"FileInSubFolder2.txt"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\Folder"` | `($)FolderPath` is a variable of type [String][] |
| [Search Pattern][SearchPattern Property] | `($)SearchPattern`, with value `"file"` | `($)SearchPattern` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Content Options][ContentOptions Property] | `($)ContentOptions`, with value `ContentOptions.Files` | `($)ContentOptions` is a variable of type [ContentOptions][] |
| [Recursive][Recursive Property] | `($)Recursive`, with value `false` | `($)Recursive` is a variable of type [Boolean][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Paths][Paths Property] | `($)Paths`, with no value | `($)Paths` is a variable that will be set to an [IList][]&lt;[String][]&gt; value |

#### Result

Getting all file paths that contain `"file"` (case-insensitive) in `"C:\Source\Folder"` excluding any of its subfolders, results in the variable `($)Paths` being updated to the following:

```json
[
    "C:\\Source\\Folder\\FileInFolder1.txt",
    "C:\\Source\\Folder\\FileInFolder2.txt"
]
```

***

### Get paths of files in a folder (and its subfolders) whose names contain a given text

This example will get the paths of all files in `"C:\Source\Folder"` or any of its subfolders, that contain `"File"` in their name.

It will perform a case-sensitive search and will not get any paths of folders.

In this example assume `"C:\Source\Folder"` contains:

* A file named `"FileInFolder1.txt"`.
* A file named `"FileInFolder2.txt"`.
* A folder named `"SubFolder"` which contains:
  * A file named `"FileInSubFolder1.txt"`.
  * A file named `"FileInSubFolder2.txt"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\Folder"` | `($)FolderPath` is a variable of type [String][] |
| [Search Pattern][SearchPattern Property] | `($)SearchPattern`, with value `"File"` | `($)SearchPattern` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.ContainsText` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Content Options][ContentOptions Property] | `($)ContentOptions`, with value `ContentOptions.Files` | `($)ContentOptions` is a variable of type [ContentOptions][] |
| [Recursive][Recursive Property] | `($)Recursive`, with value `true` | `($)Recursive` is a variable of type [Boolean][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Paths][Paths Property] | `($)Paths`, with no value | `($)Paths` is a variable that will be set to an [IList][]&lt;[String][]&gt; value |

#### Result

Getting all file paths that contain `"File"` (case-sensitive) in `"C:\Source\Folder"` or any of its subfolders, results in the variable `($)Paths` being updated to the following:

```json
[
    "C:\\Source\\Folder\\FileInFolder1.txt",
    "C:\\Source\\Folder\\FileInFolder2.txt",
    "C:\\Source\\Folder\\SubFolder\\FileInSubFolder1.txt",
    "C:\\Source\\Folder\\SubFolder\\FileInSubFolder2.txt"
]
```

***

### Get paths of folders in a folder whose names match a given pattern

This example will get the paths of all folders that are in `"C:\Source\Folder"`, and match the pattern `"*"` in their name.

It will perform a case-insensitive search, will not get any paths of files, and will match any folder in `"C:\Source\Folder"`. It will not match any child folders of folders in `"C:\Source\Folder"`.

In this example assume `"C:\Source\Folder"` contains:

* A file named `"FileInFolder1.txt"`.
* A file named `"FileInFolder2.txt"`.
* A folder named `"SubFolder"` which contains:
  * A file named `"FileInSubFolder1.txt"`.
  * A file named `"FileInSubFolder2.txt"`.
  * An empty folder named `"NestedSubFolder"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\Folder"` | `($)FolderPath` is a variable of type [String][] |
| [Search Pattern][SearchPattern Property] | `($)SearchPattern`, with value `"*"` | `($)SearchPattern` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.PatternMatching` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Content Options][ContentOptions Property] | `($)ContentOptions`, with value `ContentOptions.Folders` | `($)ContentOptions` is a variable of type [ContentOptions][] |
| [Recursive][Recursive Property] | `($)Recursive`, with value `false` | `($)Recursive` is a variable of type [Boolean][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.OrdinalIgnoreCase` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Paths][Paths Property] | `($)Paths`, with no value | `($)Paths` is a variable that will be set to an [IList][]&lt;[String][]&gt; value |

#### Result

Getting all folder paths that match the pattern `"*"` (case-insensitive) in `"C:\Source\Folder"` excluding any of its subfolders, results in the variable `($)Paths` being updated to the following:

```json
[
    "C:\\Source\\Folder\\SubFolder"
]
```

***

### Get paths of folders in a folder (and its subfolders) whose names match a given regex

This example will get the paths of all folders that are in `"C:\Source\Folder"` or any of its subfolders, and match the regex `"Folder$"` in their name.

It will perform a case-sensitive search, will not get any paths of files, and will match folders whose name ends with `"Folder"`.

In this example assume `"C:\Source\Folder"` contains:

* A file named `"FileInFolder1.txt"`.
* A file named `"FileInFolder2.txt"`.
* A folder named `"SubFolder"` which contains:
  * A file named `"FileInSubFolder1.txt"`.
  * A file named `"FileInSubFolder2.txt"`.
  * An empty folder named `"NestedSubFolder"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Source\Folder"` | `($)FolderPath` is a variable of type [String][] |
| [Search Pattern][SearchPattern Property] | `($)SearchPattern`, with value `"Folder$"` | `($)SearchPattern` is a variable of type [String][] |
| [Search Options][SearchOptions Property] | `($)SearchOptions`, with value `SearchOptions.Regex` | `($)SearchOptions` is a variable of type [SearchOptions][] |
| [Content Options][ContentOptions Property] | `($)ContentOptions`, with value `ContentOptions.Folders` | `($)ContentOptions` is a variable of type [ContentOptions][] |
| [Recursive][Recursive Property] | `($)Recursive`, with value `true` | `($)Recursive` is a variable of type [Boolean][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Paths][Paths Property] | `($)Paths`, with no value | `($)Paths` is a variable that will be set to an [IList][]&lt;[String][]&gt; value |

#### Result

Getting all folder paths that match the regex `"Folder$"` (case-sensitive) in `"C:\Source\Folder"` or any of its subfolders, results in the variable `($)Paths` being updated to the following:

```json
[
    "C:\\Source\\Folder\\SubFolder",
    "C:\\Source\\Folder\\SubFolder\\NestedSubFolder"
]
```

***

## Properties

### Folder Path

The [Folder Path][FolderPath Property] to get the [Paths][Paths Property] of files or folders whose name matches the given [Search Pattern][SearchPattern Property].

The [Folder Path][FolderPath Property] is case-insensitive, cannot contain any wildcard characters, and any trailing spaces will be automatically removed.

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FolderPath` with value `null` |

### Search Pattern

The [Search Pattern][SearchPattern Property] file or folder names must match to be included in the returned [Paths][Paths Property].

Only file or folder names are matched, not the whole path.

A [Search Pattern][SearchPattern Property] of `null` or empty (i.e. `""`) means match any name; all additional block options such as [Content Options][ContentOptions Property] etc. still take effect.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)SearchPattern` with value `null` |

### Search Options

[Search Options][SearchOptions Property] can be specified to choose whether [Search Pattern][SearchPattern Property] should be interpreted as a ContainsText, PatternMatching or Regex search:

* `SearchOptions.ContainsText` matches text exactly; as long as the file or folder name contains the text specified in [Search Pattern][SearchPattern Property] it will be considered a match.
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

### Content Options

[Content Options][ContentOptions Property] can be specified to choose whether [Search Pattern][SearchPattern Property] should be match file or folder names.

* ContentOptions.Files restricts the search to match only files.
* ContentOptions.Folders restricts the search to match only folders.

| | |
|--------------------|---------------------------|
| Data Type | [ContentOptions][] |
| Property Type | [Input][] |
| Default Value | `($)ContentOptions` with value `ContentOptions.Files` |

### Recursive

[Recursive][Recursive Property] option can specified to choose whether to search only in the specified [Folder Path][FolderPath Property], or include all subfolders.

To search only in the specified [Folder Path][FolderPath Property] set [Recursive][Recursive Property] to `false`, or to include all subfolders set [Recursive][Recursive Property] to `true`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Default Value | `($)Recursive` with value `false` |

### Comparison Type

The [Comparison Type][ComparisonType Property] specifying the rules used to match file or folder names against the given [Search Pattern][SearchPattern Property].

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Property Type | [Input][] |
| Default Value | `($)ComparisonType` with value `StringComparison.Ordinal` |

### Paths

All [Paths][Paths Property] that match the specified [Search Pattern][SearchPattern Property] based on the other specified options.

The [Paths][Paths Property] returned will be absolute paths, and based on the [Folder Path][FolderPath Property] provided (i.e. if a UNC path is specified, all returned paths will be UNC paths).
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Property Type | [Output][] |
| Default Value | `($)Paths` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Search Options][SearchOptions Property] is not one of the specified [SearchOptions][] types (e.g. `(SearchOptions)10`). |
| | Thrown when [Content Options][ContentOptions Property] is not one of the specified [ContentOptions][] types (e.g. `(ContentOptions)10`). |
| | Thrown when [Comparison Type][ComparisonType Property] is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |
| [OperationFailedException][] | The [Folder Path][FolderPath Property] points to a file. |
|                              | The [Folder Path][FolderPath Property] contains leading spaces. |
|                              | The [Folder Path][FolderPath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any folder names. |
|                              | The [Folder Path][FolderPath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
|                              | The [Folder Path][FolderPath Property] is invalid (for example, it is on an unmapped drive). |
|                              | The user the flow is executing as does not have the required permissions to get the paths of files or folders in the [Folder Path][FolderPath Property], or any of its subfolders if [Recursive][Recursive Property] is `true`. |
|                              | An unexpected error occurs when getting the paths of files or folders in the [Folder Path][FolderPath Property], or any of its subfolders if [Recursive][Recursive Property] is `true`. |
| [PropertyEmptyException][]   | Thrown when [Folder Path][FolderPath Property] is empty (i.e. `""`). |
| [PropertyNullException][]    | Thrown when [Folder Path][FolderPath Property] is `null`. |
| [RegexMatchTimeoutException][] | Thrown when using [Search Options][SearchOptions Property] is either `SearchOptions.Regex` or `SearchOptions.PatternMatching` and the execution time of the search exceeds `30` seconds. |
| [RegexParsingFailedException][] | Thrown when [Search Options][SearchOptions Property] is `SearchOptions.Regex` and the [Search Pattern][SearchPattern Property] is not a valid regex (e.g. `(`). |

## Remarks

### Folder Paths

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, including how it is determined if a path points to a folder or a file, please see [File & Folder Paths][].

### Folder Path needs escaping

[Folder Path][FolderPath Property] requires `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Source\\"`), or
* Prepending an `@` character before the start of the [Folder Path][FolderPath Property] (e.g. `@"C:\Source"`).

### Null or empty Search Pattern

A `null` or empty (i.e. `""`) [Search Pattern][SearchPattern Property] means match any name; all additional block options such as [Content Options][ContentOptions Property] etc. still take effect.

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Text Equality][].

### Handling of Exceptions

If an exception occurs when trying to match a file or folder name, it will be recorded and the block will continue processing the remaining files or folders. Once all files or folders are processed, recorded exceptions will be thrown within an [OperationFailedException][].

### Known Limitations

If [Search Options][SearchOptions Property] is set to `SearchOptions.Regex` or `SearchOptions.PatternMatching` and [Comparison Type][ComparisonType Property] is set to `StringComparison.CurrentCulture`, some characters such as `æ` that is equivalent to `ae` may not evaluate as equal.

[FolderPath Property]: {{< ref "#folder-path" >}}
[SearchPattern Property]: {{< ref "#search-pattern" >}}
[SearchOptions Property]: {{< ref "#search-options" >}}
[ContentOptions Property]: {{< ref "#content-options" >}}
[Recursive Property]: {{< ref "#recursive" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[Paths Property]: {{< ref "#paths" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Text Equality]: {{< url "Cortex.Reference.Concepts.TextEquality.MainDoc" >}}
[ComparisonTypes]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.Ordinal" >}}
[OrdinalIgnoreCase]: {{< url "Cortex.Reference.Concepts.TextEquality.ComparisonTypes.OrdinalIgnoreCase" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
[OperationFailedException]: {{< url "Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[RegexMatchTimeoutException]: {{< url "MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}
[RegexParsingFailedException]: {{< url "Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}

[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.FileAndFolderPaths.MainDoc" >}}
[Pattern Matching Syntax]: {{< url "Cortex.Reference.Concepts.PatternMatchingSyntax.MainDoc" >}}
[Regex Syntax]: {{< url "Cortex.Reference.Concepts.RegexSyntax.MainDoc" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[SearchOptions]: {{< url "Cortex.Reference.DataTypes.MostCommon.SearchOptions" >}}
[ContentOptions]: {{< url "Cortex.Reference.DataTypes.FilesAndFolders.ContentOptions.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[StringComparison]: {{< url "Cortex.Reference.DataTypes.MostCommon.StringComparison" >}}
