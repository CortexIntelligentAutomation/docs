---
title: "Paths"
linkTitle: "Paths"
description: "Supported file and folder path formats, how flows distinguish files from folders, and naming rules for path components."
weight: 2
---

# {{% param title %}}

## Summary

A **path** is a string that locates a file or folder on a disk or network share. In {{% ctx %}}, Files & Folders blocks, email attachments, and related features pass path strings to the underlying .NET [System.IO][] APIs on the **server that executes the flow**. The path must be reachable from that server (locally or via a share it can access), not only from the machine where the flow was designed.

{{% ctx %}} accepts the same broad Windows path forms documented for .NET: absolute DOS paths, relative paths, UNC paths, and (where the API allows) DOS device paths. For the full Windows rules, see [File path formats on Windows systems][] and [Naming Files, Paths, and Namespaces][].

## Where paths are resolved

Path strings are interpreted on the **execution server** (or on a UNC share that server can reach). The same rule applies to [email attachments][What is Email?] and other features that take file paths: store inputs and outputs where the Execution Service account can read and write them.

Prefer absolute or UNC paths for production flows so behaviour does not depend on the process working directory. Use relative paths only when that working directory is intentional and documented.

## Supported path formats

Most Files & Folders path properties and attachment paths accept:

| Format | Typical shape | Notes |
| --- | --- | --- |
| Absolute (DOS) | `C:\Source\File.txt` | Fully qualified from a drive root. Preferred for production flows. |
| Relative | `Reports\out.csv`, `..\shared\data.json`, `\Program Files\App\file.txt` | Resolved against the process current directory (or current drive root when the path starts with `\`). |
| UNC | `\\Server\Share\Folder\File.txt` | Network share. Always fully qualified; the execution server account must have access. |

Examples of absolute and relative DOS paths (adapted from .NET guidance):

| Path | Description |
| --- | --- |
| `C:\Documents\Newsletters\Summer2018.pdf` | Absolute file path from the root of drive `C:` |
| `\Program Files\Custom Utilities\StringFinder.exe` | Relative to the root of the current drive |
| `2018\January.xlsx` | Relative to a subdirectory of the current directory |
| `..\Publications\TravelBrochure.pdf` | Relative, starting from the current directory |
| `C:Projects\apilibrary\apilibrary.sln` | Relative to the *current directory on* drive `C:` (not the same as `C:\Projects\...`) |

{{% alert title="Note" %}}
`C:\Folder\file.txt` is absolute from the root of `C:`. `C:Folder\file.txt` (no `\` after the drive letter) is relative to the current directory on `C:`. Mixing these forms is a common source of path bugs; see {{< ahref path="MSDocs.DotNet.Api.System.IO.FilePathFormat" title="File path formats on Windows systems" >}}.
{{% /alert %}}

Examples of UNC paths:

| Path | Description |
| --- | --- |
| `\\system07\C$\` | Root of the `C:` drive on `system07` (administrative share) |
| `\\Server2\Share\Test\Foo.txt` | File under the `\\Server2\Share` volume |

### DOS device paths

Windows also supports DOS device path syntax such as `\\.\C:\Test\Foo.txt` and `\\?\C:\Test\Foo.txt` (and volume-GUID forms). .NET documents these under [File path formats on Windows systems][].

Some {{% ctx %}} operations reject Win32 device paths that start with `\\.\`. For example, [Rename Folder][], [Move Folder][], and [Move Folders][] throw when the folder path (or destination path, where applicable) is a win32 device path. Prefer ordinary DOS or UNC paths in flows unless you have a specific need and have verified the block supports the form.

## How {{% ctx %}} distinguishes file paths from folder paths

Several blocks (for example [Copy File][] destination paths) need to know whether a path string **points to a folder or a file**. {{% ctx %}} applies these rules to the path string:

| Rule | Interpreted as | Examples |
| --- | --- | --- |
| Path ends with `\` or `/` | Folder | `C:\Source\`, `C:\Source\Reports\` |
| Path does not end with a file extension | Folder | `C:\Source`, `C:\Source\Reports` |
| Path ends with a file extension (a final `.` followed by an extension) | File | `C:\Source\File.txt`, `Reports\out.csv` |
| Path contains a `.` in a segment but still ends with `\` or `/` | Folder | `C:\Source.folder\`, `C:\Archive.2024\` |

In short:

* A terminating directory separator always means **folder**.
* Otherwise, a trailing extension means **file**; no trailing extension means **folder**.

File blocks treat a path that points to a folder as invalid (or, for [Check File Exists][], as non-existent). Folder blocks treat a path that points to a file as invalid (or, for [Check Folder Exists][], as non-existent). Invalid syntax or illegal characters typically surface as [InvalidPathException][] or [OperationFailedException][].

## Rules that apply to path properties

Across Files & Folders blocks, path properties typically:

* Are **case-insensitive** on Windows.
* Must **not** contain wildcard characters (`*` and `?` belong in search patterns, not in the path itself).
* Have **trailing spaces removed** automatically.
* Do **not** strip **leading spaces** — leading spaces usually cause [InvalidPathException][] or [OperationFailedException][].
* Must not be `null` or empty (`""`); empty or null values throw [PropertyEmptyException][] or [PropertyNullException][] on most blocks.
* Must not contain only whitespace or the NUL character (`\0`).
* Must not exceed the system-defined maximum length (typically **32,767** characters). Longer paths raise path-too-long failures (often wrapped in [OperationFailedException][] or reported as [PathTooLongException][] by .NET).

### Escaping backslashes

Path string literals require `\` to be escaped; otherwise each unescaped `\` is reported as an `Invalid property value` when debugging the flow. Escape by either:

* Doubling the separator: `"C:\\Source\\File.txt"`
* Using a verbatim string: `@"C:\Source\File.txt"`

## Valid file and folder names

Each component of a path (each folder name, and the final file name) must follow Windows naming rules. {{% ctx %}} rejects names that contain illegal characters; block documentation lists them as:

`"`, `*`, `?`, `|`, `<`, `>`, `:`, `\`, `/`

(colon is allowed only as the drive designator in a DOS path, for example `C:\...`, not inside a file or folder name).

From Windows naming conventions ([Naming Files, Paths, and Namespaces][]):

* Use `\` to separate path components; do not put `\` or `/` inside a name.
* Do not assume case sensitivity (`Report.txt` and `report.txt` refer to the same name on typical Windows volumes).
* Do not use reserved device names for a file or folder: `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, `LPT1`–`LPT9`, and related forms (including those names followed by an extension, such as `NUL.txt`).
* Do not end a file or directory name with a space or a period. A leading period (for example `.temp`) is allowed.
* Avoid characters whose integer values are 0–31 (including NUL).

When renaming a folder, [Rename Folder][] validates the new name against the same character and length rules; invalid names throw [InvalidFolderNameException][].

For the full Microsoft wording and namespace notes (`\\?\`, Win32 device namespace, and so on), see [Naming Files, Paths, and Namespaces][].

## Building and expanding paths in expressions

Files & Folders path properties expect a **resolved** path string. They do not expand `%ProgramData%`-style tokens inline the way some platform settings do. In the [Expression Editor][], build or expand paths with .NET—for example:

```csharp
Environment.ExpandEnvironmentVariables(@"%ProgramData%\MyOrg\FlowData\output.txt")
```

or:

```csharp
System.IO.Path.Combine(Environment.GetEnvironmentVariable("TEMP"), "flow-work", "scratch.txt")
```

`Path.Combine` joins segments using the platform directory separator. Prefer it over concatenating `"\\"` manually so relative segments compose correctly. See [What are Files and Folders?][] for common environment variables and [Environment.ExpandEnvironmentVariables][] for expansion behaviour.

## Remarks

### Known Limitations

#### Win32 device paths

Paths that start with `\\.\` (Win32 device path syntax) are not accepted by some folder operations, including [Rename Folder][], [Move Folder][], and [Move Folders][]. Use absolute DOS or UNC paths instead.

#### Relative paths and working directory

Relative paths depend on the current directory of the execution process. That directory is not always obvious from the flow designer. Prefer absolute or UNC paths unless the working directory is controlled and documented.

#### Leading spaces

Trailing spaces are trimmed from path properties; leading spaces are not. A path with leading spaces is typically treated as invalid.

## See Also

### Related Concepts

* [What are Files and Folders?][]
* [Attributes][]
* [What is Email?][]
* [What is a Flow?][]

### Related Data Types

* [FileSystemInformation][]
* [FileInformation][]
* [FolderInformation][]
* [String][]

### Related Blocks

* [Check File Exists][] / [Check Folder Exists][]
* [Create Folder][] / [Create Folders][]
* [Copy File][] / [Copy Files][]
* [Move File][] / [Move Files][]
* [Move Folder][] / [Move Folders][]
* [Rename Folder][]
* [Get File Information][] / [Get Folder Information][]
* [Get Folder Content][]
* [Read All Text][] / [Write All Text][]
* [Delete File][] / [Delete Folder][]

### Related Exceptions

* [InvalidPathException][]
* [InvalidFolderNameException][]
* [OperationFailedException][]
* [PropertyEmptyException][]
* [PropertyNullException][]

### External Documentation

* [File path formats on Windows systems][]
* [Naming Files, Paths, and Namespaces][]
* [File and Stream I/O][System.IO]
* [Common I/O Tasks][]
* [Handling I/O errors in .NET][]
* [Path.Combine][]
* [Path.IsPathFullyQualified][]
* [Environment.ExpandEnvironmentVariables][]
* [FileNotFoundException][]
* [IOException][]
* [PathTooLongException][]
* [UnauthorizedAccessException][]

[What are Files and Folders?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.WhatAreFilesAndFolders.MainDoc" >}}
[Attributes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Attributes.MainDoc" >}}
[What is Email?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.WhatIsEmail.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[FileSystemInformation]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.FileSystemInformation.MainDoc" >}}
[FileInformation]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.FileInformation.MainDoc" >}}
[FolderInformation]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.FolderInformation.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Check File Exists]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CheckFile.CheckFileExists.MainDoc" >}}
[Check Folder Exists]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CheckFolder.CheckFolderExists.MainDoc" >}}
[Create Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CreateFolder.CreateFolder.MainDoc" >}}
[Create Folders]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CreateFolder.CreateFolders.MainDoc" >}}
[Copy File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CopyFile.CopyFile.MainDoc" >}}
[Copy Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CopyFile.CopyFiles.MainDoc" >}}
[Move File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.MoveFile.MoveFile.MainDoc" >}}
[Move Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.MoveFile.MoveFiles.MainDoc" >}}
[Move Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.MoveFolder.MoveFolder.MainDoc" >}}
[Move Folders]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.MoveFolder.MoveFolders.MainDoc" >}}
[Rename Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.RenameFolder.RenameFolder.MainDoc" >}}
[Get File Information]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.GetFileInformation.GetFileInformation.MainDoc" >}}
[Get Folder Information]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.GetFolderInformation.GetFolderInformation.MainDoc" >}}
[Get Folder Content]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.GetFolderContent.GetFolderContent.MainDoc" >}}
[Read All Text]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.ReadFile.ReadAllText.MainDoc" >}}
[Write All Text]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.WriteFile.WriteAllText.MainDoc" >}}
[Delete File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.DeleteFile.DeleteFile.MainDoc" >}}
[Delete Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.DeleteFolder.DeleteFolder.MainDoc" >}}

[InvalidPathException]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.InvalidPathException.MainDoc" >}}
[InvalidFolderNameException]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.InvalidFolderNameException.MainDoc" >}}
[OperationFailedException]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[Naming Files, Paths, and Namespaces]: {{< url path="MSDocs.Windows.Apps.Win32.DesktopTechnologies.DataAccessAndStorage.LocalFileSystems.NamingFilesPathsAndNamespaces.MainDoc" >}}
[FileNotFoundException]: {{< url path="MSDocs.DotNet.Api.System.IO.FileNotFoundException" >}}
[IOException]: {{< url path="MSDocs.DotNet.Api.System.IO.IOException" >}}
[PathTooLongException]: {{< url path="MSDocs.DotNet.Api.System.IO.PathTooLongException" >}}
[UnauthorizedAccessException]: {{< url path="MSDocs.DotNet.Api.System.UnauthorizedAccessException" >}}

[System.IO]: https://learn.microsoft.com/en-us/dotnet/standard/io/
[File path formats on Windows systems]: {{< url path="MSDocs.DotNet.Api.System.IO.FilePathFormat" >}}
[Common I/O Tasks]: https://learn.microsoft.com/en-us/dotnet/standard/io/common-i-o-tasks
[Handling I/O errors in .NET]: https://learn.microsoft.com/en-us/dotnet/standard/io/handling-io-errors
[Path.Combine]: https://learn.microsoft.com/en-us/dotnet/api/system.io.path.combine
[Path.IsPathFullyQualified]: https://learn.microsoft.com/en-us/dotnet/api/system.io.path.ispathfullyqualified
[Environment.ExpandEnvironmentVariables]: https://learn.microsoft.com/en-us/dotnet/api/system.environment.expandenvironmentvariables
